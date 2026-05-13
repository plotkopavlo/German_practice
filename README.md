# German Practice — Matching Game

A static matching card game for practicing German vocabulary and irregular verb forms. Runs entirely in the browser — no server or build step needed.

## Play

Open `index.html` directly in a browser, or visit your GitHub Pages URL.

### GitHub Pages setup

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → main / (root)**
3. Your game is live at `https://<you>.github.io/<repo>/`

---

## Adding / editing vocabulary

### Words — `data/words.js`

Each category is an object in the `categories` array:

```js
{
  id: "farben",           // unique, no spaces
  name: "Farben (Colors)",
  pairs: [
    { de: "rot",  en: "red" },
    { de: "blau", en: "blue" },
    // add as many as you like
  ]
}
```

Add a new category by appending a new object to the array. The game randomly selects up to **6 pairs** per round if the category has more.

### Verbs — `data/verbs.js`

```js
{
  id: "bewegung",
  name: "Bewegungsverben (Motion)",
  verbs: [
    {
      infinitive:   "gehen",
      en:           "to go",
      praeteritum:  "ging",
      partizip2:    "gegangen",
      konjugation: {
        praesens:    { "ich": "gehe", "du": "gehst", "er/sie/es": "geht", "wir": "gehen", "ihr": "geht", "sie/Sie": "gehen" },
        praeteritum: { "ich": "ging", "du": "gingst", "er/sie/es": "ging", "wir": "gingen", "ihr": "gingt", "sie/Sie": "gingen" }
      }
    }
  ]
}
```

Each verb supports three form-matching modes and two conjugation drills:
- **Infinitiv ↔ English** — `gehen ↔ to go`
- **Infinitiv ↔ Präteritum** — `gehen ↔ ging`
- **Infinitiv ↔ Partizip II** — `gehen ↔ gegangen`
- **Konjugation Präsens** — match pronouns to present-tense forms
- **Konjugation Präteritum** — match pronouns to past-tense forms

---

## File structure

```
index.html        main page
style.css         all styles (dark mode included)
game.js           game logic
data/
  words.js        vocabulary categories
  verbs.js        verb categories + conjugation tables
```

---

## Game rules

- Tap a card on the left, then a matching card on the right
- Correct pair: both cards turn green
- Wrong pair: both cards flash red and reset
- Match all pairs to complete the round
