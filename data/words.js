// German vocabulary data
// Each category has an id, name, and pairs array.
// Each pair: { de: "German word", en: "English translation" }
// Add/edit entries freely — the game picks up to 8 pairs per round.

const WORDS_DATA = {
  categories: [
    {
      id: "farben",
      name: "Farben (Colors)",
      pairs: [
        { de: "rot",         en: "red" },
        { de: "blau",        en: "blue" },
        { de: "grün",        en: "green" },
        { de: "gelb",        en: "yellow" },
        { de: "schwarz",     en: "black" },
        { de: "weiß",        en: "white" },
        { de: "grau",        en: "grey" },
        { de: "orange",      en: "orange" },
        { de: "lila",        en: "purple" },
        { de: "braun",       en: "brown" },
      ]
    },
    {
      id: "zahlen",
      name: "Zahlen (Numbers)",
      pairs: [
        { de: "eins",        en: "one" },
        { de: "zwei",        en: "two" },
        { de: "drei",        en: "three" },
        { de: "vier",        en: "four" },
        { de: "fünf",        en: "five" },
        { de: "sechs",       en: "six" },
        { de: "sieben",      en: "seven" },
        { de: "acht",        en: "eight" },
        { de: "neun",        en: "nine" },
        { de: "zehn",        en: "ten" },
      ]
    },
    {
      id: "familie",
      name: "Familie (Family)",
      pairs: [
        { de: "die Mutter",  en: "mother" },
        { de: "der Vater",   en: "father" },
        { de: "die Schwester",en: "sister" },
        { de: "der Bruder",  en: "brother" },
        { de: "die Tochter", en: "daughter" },
        { de: "der Sohn",    en: "son" },
        { de: "die Oma",     en: "grandmother" },
        { de: "der Opa",     en: "grandfather" },
        { de: "die Tante",   en: "aunt" },
        { de: "der Onkel",   en: "uncle" },
      ]
    },
    {
      id: "essen",
      name: "Essen & Trinken (Food)",
      pairs: [
        { de: "das Brot",    en: "bread" },
        { de: "die Milch",   en: "milk" },
        { de: "das Ei",      en: "egg" },
        { de: "der Käse",    en: "cheese" },
        { de: "das Fleisch", en: "meat" },
        { de: "der Apfel",   en: "apple" },
        { de: "die Banane",  en: "banana" },
        { de: "das Wasser",  en: "water" },
        { de: "der Kaffee",  en: "coffee" },
        { de: "der Kuchen",  en: "cake" },
        { de: "die Suppe",   en: "soup" },
        { de: "das Gemüse",  en: "vegetables" },
      ]
    },
    {
      id: "tiere",
      name: "Tiere (Animals)",
      pairs: [
        { de: "der Hund",    en: "dog" },
        { de: "die Katze",   en: "cat" },
        { de: "der Vogel",   en: "bird" },
        { de: "das Pferd",   en: "horse" },
        { de: "die Kuh",     en: "cow" },
        { de: "das Schwein", en: "pig" },
        { de: "der Fisch",   en: "fish" },
        { de: "der Bär",     en: "bear" },
        { de: "der Wolf",    en: "wolf" },
        { de: "der Fuchs",   en: "fox" },
      ]
    },
    {
      id: "koerper",
      name: "Körper (Body)",
      pairs: [
        { de: "der Kopf",    en: "head" },
        { de: "das Auge",    en: "eye" },
        { de: "das Ohr",     en: "ear" },
        { de: "die Nase",    en: "nose" },
        { de: "der Mund",    en: "mouth" },
        { de: "die Hand",    en: "hand" },
        { de: "der Fuß",     en: "foot" },
        { de: "der Arm",     en: "arm" },
        { de: "das Bein",    en: "leg" },
        { de: "der Rücken",  en: "back" },
      ]
    },
    {
      id: "reisen",
      name: "Reisen (Travel)",
      pairs: [
        { de: "der Flughafen",  en: "airport" },
        { de: "der Bahnhof",    en: "train station" },
        { de: "das Hotel",      en: "hotel" },
        { de: "das Ticket",     en: "ticket" },
        { de: "der Pass",       en: "passport" },
        { de: "die Karte",      en: "map" },
        { de: "das Gepäck",     en: "luggage" },
        { de: "der Zug",        en: "train" },
        { de: "das Flugzeug",   en: "airplane" },
        { de: "die Straße",     en: "street" },
      ]
    },
    {
      id: "haus",
      name: "Zuhause (Home)",
      pairs: [
        { de: "das Haus",    en: "house" },
        { de: "das Zimmer",  en: "room" },
        { de: "die Küche",   en: "kitchen" },
        { de: "das Bad",     en: "bathroom" },
        { de: "das Bett",    en: "bed" },
        { de: "der Stuhl",   en: "chair" },
        { de: "der Tisch",   en: "table" },
        { de: "das Fenster", en: "window" },
        { de: "die Tür",     en: "door" },
        { de: "die Lampe",   en: "lamp" },
      ]
    },
  ]
};
