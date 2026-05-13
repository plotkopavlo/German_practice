#!/usr/bin/env python3
"""
Run once to generate PNG icons for the web app.
Usage: python3 generate-icons.py
Creates: apple-touch-icon.png, icons/icon-192.png, icons/icon-512.png
"""
import struct, zlib, os

def write_png(path, size, get_pixel):
    def chunk(tag, data):
        payload = tag + data
        return struct.pack('>I', len(data)) + payload + struct.pack('>I', zlib.crc32(payload) & 0xffffffff)

    rows = b''
    for y in range(size):
        rows += b'\x00'                          # filter: None
        for x in range(size):
            rows += bytes(get_pixel(x, y, size))

    with open(path, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        f.write(chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 2, 0, 0, 0)))
        f.write(chunk(b'IDAT', zlib.compress(rows, 9)))
        f.write(chunk(b'IEND', b''))
    print(f'  Created {path}')

# German flag: top third black, middle red, bottom gold
BLACK = (28,  28,  28)
RED   = (204,  0,   0)
GOLD  = (200, 164,  0)

def flag_pixel(x, y, size):
    third = size / 3
    if   y < third:       return BLACK
    elif y < third * 2:   return RED
    else:                  return GOLD

os.makedirs('icons', exist_ok=True)

for size, filename in [(180, 'apple-touch-icon.png'),
                       (192, 'icons/icon-192.png'),
                       (512, 'icons/icon-512.png')]:
    write_png(filename, size, flag_pixel)

print('Done.')
