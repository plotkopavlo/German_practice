// German irregular verb data
// Each verb: { infinitive, en, praeteritum, partizip2, konjugation }
// konjugation.praesens / konjugation.praeteritum: one entry per pronoun
// Add/edit freely — the game picks up to 6 verbs per round for form matching,
// and shows all conjugated forms when drilling a single verb.

const VERBS_DATA = {
  categories: [
    {
      id: "grundverben",
      name: "Grundverben (Basic Verbs)",
      verbs: [
        {
          infinitive: "sein", en: "to be", praeteritum: "war", partizip2: "gewesen",
          konjugation: {
            praesens:    { "ich": "bin",   "du": "bist",   "er/sie/es": "ist",   "wir": "sind",   "ihr": "seid",   "sie/Sie": "sind"   },
            praeteritum: { "ich": "war",   "du": "warst",  "er/sie/es": "war",   "wir": "waren",  "ihr": "wart",   "sie/Sie": "waren"  },
          }
        },
        {
          infinitive: "haben", en: "to have", praeteritum: "hatte", partizip2: "gehabt",
          konjugation: {
            praesens:    { "ich": "habe",  "du": "hast",   "er/sie/es": "hat",   "wir": "haben",  "ihr": "habt",   "sie/Sie": "haben"  },
            praeteritum: { "ich": "hatte", "du": "hattest","er/sie/es": "hatte", "wir": "hatten", "ihr": "hattet", "sie/Sie": "hatten" },
          }
        },
        {
          infinitive: "werden", en: "to become", praeteritum: "wurde", partizip2: "geworden",
          konjugation: {
            praesens:    { "ich": "werde",  "du": "wirst",    "er/sie/es": "wird",   "wir": "werden",  "ihr": "werdet",  "sie/Sie": "werden"  },
            praeteritum: { "ich": "wurde",  "du": "wurdest",  "er/sie/es": "wurde",  "wir": "wurden",  "ihr": "wurdet",  "sie/Sie": "wurden"  },
          }
        },
        {
          infinitive: "wissen", en: "to know", praeteritum: "wusste", partizip2: "gewusst",
          konjugation: {
            praesens:    { "ich": "weiß",   "du": "weißt",   "er/sie/es": "weiß",   "wir": "wissen",  "ihr": "wisst",   "sie/Sie": "wissen"  },
            praeteritum: { "ich": "wusste", "du": "wusstest","er/sie/es": "wusste", "wir": "wussten", "ihr": "wusstet", "sie/Sie": "wussten" },
          }
        },
        {
          infinitive: "denken", en: "to think", praeteritum: "dachte", partizip2: "gedacht",
          konjugation: {
            praesens:    { "ich": "denke",  "du": "denkst",  "er/sie/es": "denkt",  "wir": "denken",  "ihr": "denkt",   "sie/Sie": "denken"  },
            praeteritum: { "ich": "dachte", "du": "dachtest","er/sie/es": "dachte", "wir": "dachten", "ihr": "dachtet", "sie/Sie": "dachten" },
          }
        },
        {
          infinitive: "bringen", en: "to bring", praeteritum: "brachte", partizip2: "gebracht",
          konjugation: {
            praesens:    { "ich": "bringe",  "du": "bringst",  "er/sie/es": "bringt",  "wir": "bringen",  "ihr": "bringt",   "sie/Sie": "bringen"  },
            praeteritum: { "ich": "brachte", "du": "brachtest","er/sie/es": "brachte", "wir": "brachten", "ihr": "brachtet", "sie/Sie": "brachten" },
          }
        },
        {
          infinitive: "nennen", en: "to name", praeteritum: "nannte", partizip2: "genannt",
          konjugation: {
            praesens:    { "ich": "nenne",  "du": "nennst",  "er/sie/es": "nennt",  "wir": "nennen",  "ihr": "nennt",   "sie/Sie": "nennen"  },
            praeteritum: { "ich": "nannte", "du": "nanntest","er/sie/es": "nannte", "wir": "nannten", "ihr": "nanntet", "sie/Sie": "nannten" },
          }
        },
        {
          infinitive: "kennen", en: "to know (a person)", praeteritum: "kannte", partizip2: "gekannt",
          konjugation: {
            praesens:    { "ich": "kenne",  "du": "kennst",  "er/sie/es": "kennt",  "wir": "kennen",  "ihr": "kennt",   "sie/Sie": "kennen"  },
            praeteritum: { "ich": "kannte", "du": "kanntest","er/sie/es": "kannte", "wir": "kannten", "ihr": "kanntet", "sie/Sie": "kannten" },
          }
        },
        {
          infinitive: "sehen", en: "to see", praeteritum: "sah", partizip2: "gesehen",
          konjugation: {
            praesens:    { "ich": "sehe", "du": "siehst", "er/sie/es": "sieht", "wir": "sehen", "ihr": "seht",  "sie/Sie": "sehen" },
            praeteritum: { "ich": "sah",  "du": "sahst",  "er/sie/es": "sah",   "wir": "sahen", "ihr": "saht",  "sie/Sie": "sahen" },
          }
        },
        {
          infinitive: "geben", en: "to give", praeteritum: "gab", partizip2: "gegeben",
          konjugation: {
            praesens:    { "ich": "gebe", "du": "gibst", "er/sie/es": "gibt", "wir": "geben", "ihr": "gebt", "sie/Sie": "geben" },
            praeteritum: { "ich": "gab",  "du": "gabst", "er/sie/es": "gab",  "wir": "gaben", "ihr": "gabt", "sie/Sie": "gaben" },
          }
        },
      ]
    },
    {
      id: "bewegung",
      name: "Bewegungsverben (Motion)",
      verbs: [
        {
          infinitive: "gehen", en: "to go", praeteritum: "ging", partizip2: "gegangen",
          konjugation: {
            praesens:    { "ich": "gehe",  "du": "gehst",  "er/sie/es": "geht",  "wir": "gehen",  "ihr": "geht",  "sie/Sie": "gehen"  },
            praeteritum: { "ich": "ging",  "du": "gingst", "er/sie/es": "ging",  "wir": "gingen", "ihr": "gingt", "sie/Sie": "gingen" },
          }
        },
        {
          infinitive: "kommen", en: "to come", praeteritum: "kam", partizip2: "gekommen",
          konjugation: {
            praesens:    { "ich": "komme", "du": "kommst", "er/sie/es": "kommt", "wir": "kommen", "ihr": "kommt", "sie/Sie": "kommen" },
            praeteritum: { "ich": "kam",   "du": "kamst",  "er/sie/es": "kam",   "wir": "kamen",  "ihr": "kamt",  "sie/Sie": "kamen"  },
          }
        },
        {
          infinitive: "fahren", en: "to drive", praeteritum: "fuhr", partizip2: "gefahren",
          konjugation: {
            praesens:    { "ich": "fahre", "du": "fährst", "er/sie/es": "fährt", "wir": "fahren", "ihr": "fahrt", "sie/Sie": "fahren" },
            praeteritum: { "ich": "fuhr",  "du": "fuhrst", "er/sie/es": "fuhr",  "wir": "fuhren", "ihr": "fuhrt", "sie/Sie": "fuhren" },
          }
        },
        {
          infinitive: "laufen", en: "to run", praeteritum: "lief", partizip2: "gelaufen",
          konjugation: {
            praesens:    { "ich": "laufe", "du": "läufst", "er/sie/es": "läuft", "wir": "laufen", "ihr": "lauft", "sie/Sie": "laufen" },
            praeteritum: { "ich": "lief",  "du": "liefst", "er/sie/es": "lief",  "wir": "liefen", "ihr": "lieft", "sie/Sie": "liefen" },
          }
        },
        {
          infinitive: "fliegen", en: "to fly", praeteritum: "flog", partizip2: "geflogen",
          konjugation: {
            praesens:    { "ich": "fliege", "du": "fliegst", "er/sie/es": "fliegt", "wir": "fliegen", "ihr": "fliegt", "sie/Sie": "fliegen" },
            praeteritum: { "ich": "flog",   "du": "flogst",  "er/sie/es": "flog",   "wir": "flogen",  "ihr": "flogt",  "sie/Sie": "flogen"  },
          }
        },
        {
          infinitive: "schwimmen", en: "to swim", praeteritum: "schwamm", partizip2: "geschwommen",
          konjugation: {
            praesens:    { "ich": "schwimme",  "du": "schwimmst", "er/sie/es": "schwimmt", "wir": "schwimmen", "ihr": "schwimmt",  "sie/Sie": "schwimmen" },
            praeteritum: { "ich": "schwamm",   "du": "schwammst", "er/sie/es": "schwamm",  "wir": "schwammen", "ihr": "schwammt",  "sie/Sie": "schwammen" },
          }
        },
        {
          infinitive: "fallen", en: "to fall", praeteritum: "fiel", partizip2: "gefallen",
          konjugation: {
            praesens:    { "ich": "falle", "du": "fällst", "er/sie/es": "fällt", "wir": "fallen", "ihr": "fallt", "sie/Sie": "fallen" },
            praeteritum: { "ich": "fiel",  "du": "fielst", "er/sie/es": "fiel",  "wir": "fielen", "ihr": "fielt", "sie/Sie": "fielen" },
          }
        },
        {
          infinitive: "steigen", en: "to climb", praeteritum: "stieg", partizip2: "gestiegen",
          konjugation: {
            praesens:    { "ich": "steige", "du": "steigst", "er/sie/es": "steigt", "wir": "steigen", "ihr": "steigt", "sie/Sie": "steigen" },
            praeteritum: { "ich": "stieg",  "du": "stiegst", "er/sie/es": "stieg",  "wir": "stiegen", "ihr": "stiegt", "sie/Sie": "stiegen" },
          }
        },
        {
          infinitive: "reiten", en: "to ride", praeteritum: "ritt", partizip2: "geritten",
          konjugation: {
            praesens:    { "ich": "reite",  "du": "reitest",  "er/sie/es": "reitet", "wir": "reiten", "ihr": "reitet",  "sie/Sie": "reiten" },
            praeteritum: { "ich": "ritt",   "du": "rittst",   "er/sie/es": "ritt",   "wir": "ritten", "ihr": "rittet",  "sie/Sie": "ritten" },
          }
        },
        {
          infinitive: "ziehen", en: "to pull / move", praeteritum: "zog", partizip2: "gezogen",
          konjugation: {
            praesens:    { "ich": "ziehe", "du": "ziehst", "er/sie/es": "zieht", "wir": "ziehen", "ihr": "zieht", "sie/Sie": "ziehen" },
            praeteritum: { "ich": "zog",   "du": "zogst",  "er/sie/es": "zog",   "wir": "zogen",  "ihr": "zogt",  "sie/Sie": "zogen"  },
          }
        },
      ]
    },
    {
      id: "alltag",
      name: "Alltagsverben (Daily Life)",
      verbs: [
        {
          infinitive: "essen", en: "to eat", praeteritum: "aß", partizip2: "gegessen",
          konjugation: {
            praesens:    { "ich": "esse",  "du": "isst",    "er/sie/es": "isst",   "wir": "essen",  "ihr": "esst",   "sie/Sie": "essen"  },
            praeteritum: { "ich": "aß",    "du": "aßest",   "er/sie/es": "aß",     "wir": "aßen",   "ihr": "aßt",    "sie/Sie": "aßen"   },
          }
        },
        {
          infinitive: "trinken", en: "to drink", praeteritum: "trank", partizip2: "getrunken",
          konjugation: {
            praesens:    { "ich": "trinke", "du": "trinkst", "er/sie/es": "trinkt", "wir": "trinken", "ihr": "trinkt",  "sie/Sie": "trinken" },
            praeteritum: { "ich": "trank",  "du": "trankst", "er/sie/es": "trank",  "wir": "tranken", "ihr": "trankt",  "sie/Sie": "tranken" },
          }
        },
        {
          infinitive: "schlafen", en: "to sleep", praeteritum: "schlief", partizip2: "geschlafen",
          konjugation: {
            praesens:    { "ich": "schlafe", "du": "schläfst", "er/sie/es": "schläft", "wir": "schlafen", "ihr": "schlaft", "sie/Sie": "schlafen" },
            praeteritum: { "ich": "schlief", "du": "schliefst","er/sie/es": "schlief", "wir": "schliefen","ihr": "schlieft","sie/Sie": "schliefen"},
          }
        },
        {
          infinitive: "sprechen", en: "to speak", praeteritum: "sprach", partizip2: "gesprochen",
          konjugation: {
            praesens:    { "ich": "spreche", "du": "sprichst", "er/sie/es": "spricht", "wir": "sprechen", "ihr": "sprecht", "sie/Sie": "sprechen" },
            praeteritum: { "ich": "sprach",  "du": "sprachst", "er/sie/es": "sprach",  "wir": "sprachen", "ihr": "spracht", "sie/Sie": "sprachen" },
          }
        },
        {
          infinitive: "schreiben", en: "to write", praeteritum: "schrieb", partizip2: "geschrieben",
          konjugation: {
            praesens:    { "ich": "schreibe", "du": "schreibst", "er/sie/es": "schreibt", "wir": "schreiben", "ihr": "schreibt",  "sie/Sie": "schreiben" },
            praeteritum: { "ich": "schrieb",  "du": "schriebst", "er/sie/es": "schrieb",  "wir": "schrieben", "ihr": "schriebt", "sie/Sie": "schrieben" },
          }
        },
        {
          infinitive: "lesen", en: "to read", praeteritum: "las", partizip2: "gelesen",
          konjugation: {
            praesens:    { "ich": "lese", "du": "liest",  "er/sie/es": "liest", "wir": "lesen", "ihr": "lest",  "sie/Sie": "lesen" },
            praeteritum: { "ich": "las",  "du": "last",   "er/sie/es": "las",   "wir": "lasen", "ihr": "last",  "sie/Sie": "lasen" },
          }
        },
        {
          infinitive: "helfen", en: "to help", praeteritum: "half", partizip2: "geholfen",
          konjugation: {
            praesens:    { "ich": "helfe", "du": "hilfst", "er/sie/es": "hilft", "wir": "helfen", "ihr": "helft", "sie/Sie": "helfen" },
            praeteritum: { "ich": "half",  "du": "halfst", "er/sie/es": "half",  "wir": "halfen", "ihr": "halft", "sie/Sie": "halfen" },
          }
        },
        {
          infinitive: "nehmen", en: "to take", praeteritum: "nahm", partizip2: "genommen",
          konjugation: {
            praesens:    { "ich": "nehme", "du": "nimmst", "er/sie/es": "nimmt", "wir": "nehmen", "ihr": "nehmt", "sie/Sie": "nehmen" },
            praeteritum: { "ich": "nahm",  "du": "nahmst", "er/sie/es": "nahm",  "wir": "nahmen", "ihr": "nahmt", "sie/Sie": "nahmen" },
          }
        },
        {
          infinitive: "finden", en: "to find", praeteritum: "fand", partizip2: "gefunden",
          konjugation: {
            praesens:    { "ich": "finde",  "du": "findest",  "er/sie/es": "findet", "wir": "finden", "ihr": "findet",  "sie/Sie": "finden" },
            praeteritum: { "ich": "fand",   "du": "fandest",  "er/sie/es": "fand",   "wir": "fanden", "ihr": "fandet",  "sie/Sie": "fanden" },
          }
        },
        {
          infinitive: "stehen", en: "to stand", praeteritum: "stand", partizip2: "gestanden",
          konjugation: {
            praesens:    { "ich": "stehe",  "du": "stehst",   "er/sie/es": "steht",  "wir": "stehen",  "ihr": "steht",   "sie/Sie": "stehen"  },
            praeteritum: { "ich": "stand",  "du": "standest", "er/sie/es": "stand",  "wir": "standen", "ihr": "standet", "sie/Sie": "standen" },
          }
        },
      ]
    },
    {
      id: "modal",
      name: "Modalverben (Modal Verbs)",
      verbs: [
        {
          infinitive: "können", en: "to be able to", praeteritum: "konnte", partizip2: "gekonnt",
          konjugation: {
            praesens:    { "ich": "kann",   "du": "kannst",   "er/sie/es": "kann",   "wir": "können",  "ihr": "könnt",   "sie/Sie": "können"  },
            praeteritum: { "ich": "konnte", "du": "konntest", "er/sie/es": "konnte", "wir": "konnten", "ihr": "konntet", "sie/Sie": "konnten" },
          }
        },
        {
          infinitive: "müssen", en: "to have to", praeteritum: "musste", partizip2: "gemusst",
          konjugation: {
            praesens:    { "ich": "muss",   "du": "musst",    "er/sie/es": "muss",   "wir": "müssen",  "ihr": "müsst",   "sie/Sie": "müssen"  },
            praeteritum: { "ich": "musste", "du": "musstest", "er/sie/es": "musste", "wir": "mussten", "ihr": "musstet", "sie/Sie": "mussten" },
          }
        },
        {
          infinitive: "wollen", en: "to want to", praeteritum: "wollte", partizip2: "gewollt",
          konjugation: {
            praesens:    { "ich": "will",   "du": "willst",   "er/sie/es": "will",   "wir": "wollen",  "ihr": "wollt",   "sie/Sie": "wollen"  },
            praeteritum: { "ich": "wollte", "du": "wolltest", "er/sie/es": "wollte", "wir": "wollten", "ihr": "wolltet", "sie/Sie": "wollten" },
          }
        },
        {
          infinitive: "sollen", en: "to be supposed to", praeteritum: "sollte", partizip2: "gesollt",
          konjugation: {
            praesens:    { "ich": "soll",   "du": "sollst",   "er/sie/es": "soll",   "wir": "sollen",  "ihr": "sollt",   "sie/Sie": "sollen"  },
            praeteritum: { "ich": "sollte", "du": "solltest", "er/sie/es": "sollte", "wir": "sollten", "ihr": "solltet", "sie/Sie": "sollten" },
          }
        },
        {
          infinitive: "dürfen", en: "to be allowed to", praeteritum: "durfte", partizip2: "gedurft",
          konjugation: {
            praesens:    { "ich": "darf",   "du": "darfst",   "er/sie/es": "darf",   "wir": "dürfen",  "ihr": "dürft",   "sie/Sie": "dürfen"  },
            praeteritum: { "ich": "durfte", "du": "durftest", "er/sie/es": "durfte", "wir": "durften", "ihr": "durftet", "sie/Sie": "durften" },
          }
        },
        {
          infinitive: "mögen", en: "to like", praeteritum: "mochte", partizip2: "gemocht",
          konjugation: {
            praesens:    { "ich": "mag",    "du": "magst",    "er/sie/es": "mag",    "wir": "mögen",   "ihr": "mögt",    "sie/Sie": "mögen"   },
            praeteritum: { "ich": "mochte", "du": "mochtest", "er/sie/es": "mochte", "wir": "mochten", "ihr": "mochtet", "sie/Sie": "mochten" },
          }
        },
      ]
    },
    {
      id: "sinne",
      name: "Sinne & Gefühle (Senses)",
      verbs: [
        {
          infinitive: "fühlen", en: "to feel", praeteritum: "fühlte", partizip2: "gefühlt",
          konjugation: {
            praesens:    { "ich": "fühle",  "du": "fühlst",   "er/sie/es": "fühlt",  "wir": "fühlen",  "ihr": "fühlt",   "sie/Sie": "fühlen"  },
            praeteritum: { "ich": "fühlte", "du": "fühltest", "er/sie/es": "fühlte", "wir": "fühlten", "ihr": "fühltet", "sie/Sie": "fühlten" },
          }
        },
        {
          infinitive: "hören", en: "to hear", praeteritum: "hörte", partizip2: "gehört",
          konjugation: {
            praesens:    { "ich": "höre",  "du": "hörst",   "er/sie/es": "hört",  "wir": "hören",  "ihr": "hört",   "sie/Sie": "hören"  },
            praeteritum: { "ich": "hörte", "du": "hörtest", "er/sie/es": "hörte", "wir": "hörten", "ihr": "hörtet", "sie/Sie": "hörten" },
          }
        },
        {
          infinitive: "riechen", en: "to smell", praeteritum: "roch", partizip2: "gerochen",
          konjugation: {
            praesens:    { "ich": "rieche", "du": "riechst", "er/sie/es": "riecht", "wir": "riechen", "ihr": "riecht", "sie/Sie": "riechen" },
            praeteritum: { "ich": "roch",   "du": "rochst",  "er/sie/es": "roch",   "wir": "rochen",  "ihr": "rocht",  "sie/Sie": "rochen"  },
          }
        },
        {
          infinitive: "vergessen", en: "to forget", praeteritum: "vergaß", partizip2: "vergessen",
          konjugation: {
            praesens:    { "ich": "vergesse",  "du": "vergisst",   "er/sie/es": "vergisst",  "wir": "vergessen",  "ihr": "vergesst",   "sie/Sie": "vergessen"  },
            praeteritum: { "ich": "vergaß",    "du": "vergaßest",  "er/sie/es": "vergaß",    "wir": "vergaßen",   "ihr": "vergaßt",    "sie/Sie": "vergaßen"   },
          }
        },
        {
          infinitive: "verstehen", en: "to understand", praeteritum: "verstand", partizip2: "verstanden",
          konjugation: {
            praesens:    { "ich": "verstehe",  "du": "verstehst",   "er/sie/es": "versteht",  "wir": "verstehen",  "ihr": "versteht",   "sie/Sie": "verstehen"  },
            praeteritum: { "ich": "verstand",  "du": "verstandest", "er/sie/es": "verstand",  "wir": "verstanden", "ihr": "verstandet", "sie/Sie": "verstanden" },
          }
        },
        {
          infinitive: "beginnen", en: "to begin", praeteritum: "begann", partizip2: "begonnen",
          konjugation: {
            praesens:    { "ich": "beginne", "du": "beginnst", "er/sie/es": "beginnt", "wir": "beginnen", "ihr": "beginnt",  "sie/Sie": "beginnen" },
            praeteritum: { "ich": "begann",  "du": "begannst", "er/sie/es": "begann",  "wir": "begannen", "ihr": "begannt",  "sie/Sie": "begannen" },
          }
        },
        {
          infinitive: "leiden", en: "to suffer", praeteritum: "litt", partizip2: "gelitten",
          konjugation: {
            praesens:    { "ich": "leide",  "du": "leidest",  "er/sie/es": "leidet", "wir": "leiden", "ihr": "leidet",  "sie/Sie": "leiden" },
            praeteritum: { "ich": "litt",   "du": "littest",  "er/sie/es": "litt",   "wir": "litten", "ihr": "littet",  "sie/Sie": "litten" },
          }
        },
        {
          infinitive: "schweigen", en: "to be silent", praeteritum: "schwieg", partizip2: "geschwiegen",
          konjugation: {
            praesens:    { "ich": "schweige", "du": "schweigst", "er/sie/es": "schweigt", "wir": "schweigen", "ihr": "schweigt", "sie/Sie": "schweigen" },
            praeteritum: { "ich": "schwieg",  "du": "schwiegst", "er/sie/es": "schwieg",  "wir": "schwiegen", "ihr": "schwiegt", "sie/Sie": "schwiegen" },
          }
        },
      ]
    },
  ]
};
