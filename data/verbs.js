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
    {
      id: "kommunikation",
      name: "Kommunikation (Comm.)",
      verbs: [
        {
          infinitive: "rufen", en: "to call / shout", praeteritum: "rief", partizip2: "gerufen",
          konjugation: {
            praesens:    { "ich": "rufe",  "du": "rufst",   "er/sie/es": "ruft",  "wir": "rufen",  "ihr": "ruft",   "sie/Sie": "rufen"  },
            praeteritum: { "ich": "rief",  "du": "riefst",  "er/sie/es": "rief",  "wir": "riefen", "ihr": "rieft",  "sie/Sie": "riefen" },
          }
        },
        {
          infinitive: "schreien", en: "to scream / shout", praeteritum: "schrie", partizip2: "geschrien",
          konjugation: {
            praesens:    { "ich": "schreie", "du": "schreist", "er/sie/es": "schreit", "wir": "schreien", "ihr": "schreit", "sie/Sie": "schreien" },
            praeteritum: { "ich": "schrie",  "du": "schriest", "er/sie/es": "schrie",  "wir": "schrien",  "ihr": "schriet", "sie/Sie": "schrien"  },
          }
        },
        {
          infinitive: "lügen", en: "to lie (tell a lie)", praeteritum: "log", partizip2: "gelogen",
          konjugation: {
            praesens:    { "ich": "lüge", "du": "lügst", "er/sie/es": "lügt", "wir": "lügen", "ihr": "lügt", "sie/Sie": "lügen" },
            praeteritum: { "ich": "log",  "du": "logst", "er/sie/es": "log",  "wir": "logen", "ihr": "logt", "sie/Sie": "logen" },
          }
        },
        {
          infinitive: "bitten", en: "to ask / request", praeteritum: "bat", partizip2: "gebeten",
          konjugation: {
            praesens:    { "ich": "bitte",  "du": "bittest",  "er/sie/es": "bittet", "wir": "bitten", "ihr": "bittet",  "sie/Sie": "bitten" },
            praeteritum: { "ich": "bat",    "du": "batest",   "er/sie/es": "bat",    "wir": "baten",  "ihr": "batet",   "sie/Sie": "baten"  },
          }
        },
        {
          infinitive: "versprechen", en: "to promise", praeteritum: "versprach", partizip2: "versprochen",
          konjugation: {
            praesens:    { "ich": "verspreche",  "du": "versprichst",  "er/sie/es": "verspricht",  "wir": "versprechen",  "ihr": "versprecht",  "sie/Sie": "versprechen"  },
            praeteritum: { "ich": "versprach",   "du": "versprachst",  "er/sie/es": "versprach",   "wir": "versprachen",  "ihr": "verspracht",  "sie/Sie": "versprachen"  },
          }
        },
        {
          infinitive: "empfehlen", en: "to recommend", praeteritum: "empfahl", partizip2: "empfohlen",
          konjugation: {
            praesens:    { "ich": "empfehle",  "du": "empfiehlst", "er/sie/es": "empfiehlt", "wir": "empfehlen", "ihr": "empfehlt",  "sie/Sie": "empfehlen" },
            praeteritum: { "ich": "empfahl",   "du": "empfahlst",  "er/sie/es": "empfahl",   "wir": "empfahlen", "ihr": "empfahlt",  "sie/Sie": "empfahlen" },
          }
        },
        {
          infinitive: "einladen", en: "to invite", praeteritum: "lud ein", partizip2: "eingeladen",
          konjugation: {
            praesens:    { "ich": "lade ein",  "du": "lädst ein",  "er/sie/es": "lädt ein",  "wir": "laden ein", "ihr": "ladet ein", "sie/Sie": "laden ein" },
            praeteritum: { "ich": "lud ein",   "du": "ludest ein", "er/sie/es": "lud ein",   "wir": "luden ein", "ihr": "ludet ein", "sie/Sie": "luden ein" },
          }
        },
        {
          infinitive: "beschreiben", en: "to describe", praeteritum: "beschrieb", partizip2: "beschrieben",
          konjugation: {
            praesens:    { "ich": "beschreibe",  "du": "beschreibst", "er/sie/es": "beschreibt", "wir": "beschreiben", "ihr": "beschreibt",  "sie/Sie": "beschreiben" },
            praeteritum: { "ich": "beschrieb",   "du": "beschriebst", "er/sie/es": "beschrieb",  "wir": "beschrieben", "ihr": "beschriebt",  "sie/Sie": "beschrieben" },
          }
        },
      ]
    },
    {
      id: "sport",
      name: "Sport & Kraft (Sports)",
      verbs: [
        {
          infinitive: "springen", en: "to jump", praeteritum: "sprang", partizip2: "gesprungen",
          konjugation: {
            praesens:    { "ich": "springe", "du": "springst", "er/sie/es": "springt", "wir": "springen", "ihr": "springt", "sie/Sie": "springen" },
            praeteritum: { "ich": "sprang",  "du": "sprangst", "er/sie/es": "sprang",  "wir": "sprangen", "ihr": "sprangt", "sie/Sie": "sprangen" },
          }
        },
        {
          infinitive: "werfen", en: "to throw", praeteritum: "warf", partizip2: "geworfen",
          konjugation: {
            praesens:    { "ich": "werfe", "du": "wirfst", "er/sie/es": "wirft", "wir": "werfen", "ihr": "werft", "sie/Sie": "werfen" },
            praeteritum: { "ich": "warf",  "du": "warfst", "er/sie/es": "warf",  "wir": "warfen", "ihr": "warft", "sie/Sie": "warfen" },
          }
        },
        {
          infinitive: "fangen", en: "to catch", praeteritum: "fing", partizip2: "gefangen",
          konjugation: {
            praesens:    { "ich": "fange", "du": "fängst", "er/sie/es": "fängt", "wir": "fangen", "ihr": "fangt", "sie/Sie": "fangen" },
            praeteritum: { "ich": "fing",  "du": "fingst", "er/sie/es": "fing",  "wir": "fingen", "ihr": "fingt", "sie/Sie": "fingen" },
          }
        },
        {
          infinitive: "schlagen", en: "to hit / beat", praeteritum: "schlug", partizip2: "geschlagen",
          konjugation: {
            praesens:    { "ich": "schlage", "du": "schlägst", "er/sie/es": "schlägt", "wir": "schlagen", "ihr": "schlagt", "sie/Sie": "schlagen" },
            praeteritum: { "ich": "schlug",  "du": "schlugst", "er/sie/es": "schlug",  "wir": "schlugen", "ihr": "schlugt", "sie/Sie": "schlugen" },
          }
        },
        {
          infinitive: "gewinnen", en: "to win", praeteritum: "gewann", partizip2: "gewonnen",
          konjugation: {
            praesens:    { "ich": "gewinne", "du": "gewinnst", "er/sie/es": "gewinnt", "wir": "gewinnen", "ihr": "gewinnt",  "sie/Sie": "gewinnen" },
            praeteritum: { "ich": "gewann",  "du": "gewannst", "er/sie/es": "gewann",  "wir": "gewannen", "ihr": "gewannt",  "sie/Sie": "gewannen" },
          }
        },
        {
          infinitive: "verlieren", en: "to lose", praeteritum: "verlor", partizip2: "verloren",
          konjugation: {
            praesens:    { "ich": "verliere", "du": "verlierst", "er/sie/es": "verliert", "wir": "verlieren", "ihr": "verliert", "sie/Sie": "verlieren" },
            praeteritum: { "ich": "verlor",   "du": "verlorst",  "er/sie/es": "verlor",   "wir": "verloren",  "ihr": "verlort",  "sie/Sie": "verloren"  },
          }
        },
        {
          infinitive: "tragen", en: "to carry / wear", praeteritum: "trug", partizip2: "getragen",
          konjugation: {
            praesens:    { "ich": "trage", "du": "trägst", "er/sie/es": "trägt", "wir": "tragen", "ihr": "tragt", "sie/Sie": "tragen" },
            praeteritum: { "ich": "trug",  "du": "trugst", "er/sie/es": "trug",  "wir": "trugen", "ihr": "trugt", "sie/Sie": "trugen" },
          }
        },
        {
          infinitive: "treten", en: "to step / kick", praeteritum: "trat", partizip2: "getreten",
          konjugation: {
            praesens:    { "ich": "trete",  "du": "trittst",  "er/sie/es": "tritt",  "wir": "treten", "ihr": "tretet",  "sie/Sie": "treten" },
            praeteritum: { "ich": "trat",   "du": "tratst",   "er/sie/es": "trat",   "wir": "traten", "ihr": "tratet",  "sie/Sie": "traten" },
          }
        },
      ]
    },
    {
      id: "handlungen",
      name: "Handlungen (Actions)",
      verbs: [
        {
          infinitive: "waschen", en: "to wash", praeteritum: "wusch", partizip2: "gewaschen",
          konjugation: {
            praesens:    { "ich": "wasche", "du": "wäschst",  "er/sie/es": "wäscht",  "wir": "waschen", "ihr": "wascht",  "sie/Sie": "waschen" },
            praeteritum: { "ich": "wusch",  "du": "wuschest", "er/sie/es": "wusch",   "wir": "wuschen", "ihr": "wuscht",  "sie/Sie": "wuschen" },
          }
        },
        {
          infinitive: "schneiden", en: "to cut", praeteritum: "schnitt", partizip2: "geschnitten",
          konjugation: {
            praesens:    { "ich": "schneide",  "du": "schneidest",  "er/sie/es": "schneidet", "wir": "schneiden", "ihr": "schneidet",  "sie/Sie": "schneiden" },
            praeteritum: { "ich": "schnitt",   "du": "schnittst",   "er/sie/es": "schnitt",   "wir": "schnitten", "ihr": "schnittet",  "sie/Sie": "schnitten" },
          }
        },
        {
          infinitive: "greifen", en: "to grab / reach", praeteritum: "griff", partizip2: "gegriffen",
          konjugation: {
            praesens:    { "ich": "greife", "du": "greifst", "er/sie/es": "greift", "wir": "greifen", "ihr": "greift", "sie/Sie": "greifen" },
            praeteritum: { "ich": "griff",  "du": "griffst", "er/sie/es": "griff",  "wir": "griffen", "ihr": "grifft", "sie/Sie": "griffen" },
          }
        },
        {
          infinitive: "halten", en: "to hold / stop", praeteritum: "hielt", partizip2: "gehalten",
          konjugation: {
            praesens:    { "ich": "halte",  "du": "hältst",   "er/sie/es": "hält",   "wir": "halten",  "ihr": "haltet",  "sie/Sie": "halten"  },
            praeteritum: { "ich": "hielt",  "du": "hieltest", "er/sie/es": "hielt",  "wir": "hielten", "ihr": "hieltet", "sie/Sie": "hielten" },
          }
        },
        {
          infinitive: "lassen", en: "to let / leave", praeteritum: "ließ", partizip2: "gelassen",
          konjugation: {
            praesens:    { "ich": "lasse",  "du": "lässt",    "er/sie/es": "lässt",  "wir": "lassen",  "ihr": "lasst",   "sie/Sie": "lassen"  },
            praeteritum: { "ich": "ließ",   "du": "ließest",  "er/sie/es": "ließ",   "wir": "ließen",  "ihr": "ließt",   "sie/Sie": "ließen"  },
          }
        },
        {
          infinitive: "brechen", en: "to break", praeteritum: "brach", partizip2: "gebrochen",
          konjugation: {
            praesens:    { "ich": "breche", "du": "brichst", "er/sie/es": "bricht", "wir": "brechen", "ihr": "brecht", "sie/Sie": "brechen" },
            praeteritum: { "ich": "brach",  "du": "brachst", "er/sie/es": "brach",  "wir": "brachen", "ihr": "bracht", "sie/Sie": "brachen" },
          }
        },
        {
          infinitive: "heben", en: "to lift / raise", praeteritum: "hob", partizip2: "gehoben",
          konjugation: {
            praesens:    { "ich": "hebe", "du": "hebst", "er/sie/es": "hebt", "wir": "heben", "ihr": "hebt", "sie/Sie": "heben" },
            praeteritum: { "ich": "hob",  "du": "hobst", "er/sie/es": "hob",  "wir": "hoben", "ihr": "hobt", "sie/Sie": "hoben" },
          }
        },
        {
          infinitive: "treffen", en: "to meet / hit", praeteritum: "traf", partizip2: "getroffen",
          konjugation: {
            praesens:    { "ich": "treffe", "du": "triffst", "er/sie/es": "trifft", "wir": "treffen", "ihr": "trefft", "sie/Sie": "treffen" },
            praeteritum: { "ich": "traf",   "du": "trafst",  "er/sie/es": "traf",   "wir": "trafen",  "ihr": "traft",  "sie/Sie": "trafen"  },
          }
        },
      ]
    },
    {
      id: "natur",
      name: "Natur & Elemente (Nature)",
      verbs: [
        {
          infinitive: "wachsen", en: "to grow", praeteritum: "wuchs", partizip2: "gewachsen",
          konjugation: {
            praesens:    { "ich": "wachse", "du": "wächst",   "er/sie/es": "wächst",  "wir": "wachsen", "ihr": "wachst",  "sie/Sie": "wachsen" },
            praeteritum: { "ich": "wuchs",  "du": "wuchsest", "er/sie/es": "wuchs",   "wir": "wuchsen", "ihr": "wuchst",  "sie/Sie": "wuchsen" },
          }
        },
        {
          infinitive: "scheinen", en: "to shine / seem", praeteritum: "schien", partizip2: "geschienen",
          konjugation: {
            praesens:    { "ich": "scheine", "du": "scheinst", "er/sie/es": "scheint", "wir": "scheinen", "ihr": "scheint", "sie/Sie": "scheinen" },
            praeteritum: { "ich": "schien",  "du": "schienst", "er/sie/es": "schien",  "wir": "schienen", "ihr": "schient", "sie/Sie": "schienen" },
          }
        },
        {
          infinitive: "brennen", en: "to burn", praeteritum: "brannte", partizip2: "gebrannt",
          konjugation: {
            praesens:    { "ich": "brenne",  "du": "brennst",   "er/sie/es": "brennt",  "wir": "brennen",  "ihr": "brennt",   "sie/Sie": "brennen"  },
            praeteritum: { "ich": "brannte", "du": "branntest", "er/sie/es": "brannte", "wir": "brannten", "ihr": "branntet", "sie/Sie": "brannten" },
          }
        },
        {
          infinitive: "frieren", en: "to freeze / feel cold", praeteritum: "fror", partizip2: "gefroren",
          konjugation: {
            praesens:    { "ich": "friere", "du": "frierst", "er/sie/es": "friert", "wir": "frieren", "ihr": "friert", "sie/Sie": "frieren" },
            praeteritum: { "ich": "fror",   "du": "frorst",  "er/sie/es": "fror",   "wir": "froren",  "ihr": "frort",  "sie/Sie": "froren"  },
          }
        },
        {
          infinitive: "fließen", en: "to flow", praeteritum: "floss", partizip2: "geflossen",
          konjugation: {
            praesens:    { "ich": "fließe", "du": "fließt",   "er/sie/es": "fließt",  "wir": "fließen", "ihr": "fließt",  "sie/Sie": "fließen" },
            praeteritum: { "ich": "floss",  "du": "flossest", "er/sie/es": "floss",   "wir": "flossen", "ihr": "flosst",  "sie/Sie": "flossen" },
          }
        },
        {
          infinitive: "sinken", en: "to sink", praeteritum: "sank", partizip2: "gesunken",
          konjugation: {
            praesens:    { "ich": "sinke", "du": "sinkst", "er/sie/es": "sinkt", "wir": "sinken", "ihr": "sinkt", "sie/Sie": "sinken" },
            praeteritum: { "ich": "sank",  "du": "sankst", "er/sie/es": "sank",  "wir": "sanken", "ihr": "sankt", "sie/Sie": "sanken" },
          }
        },
        {
          infinitive: "biegen", en: "to bend", praeteritum: "bog", partizip2: "gebogen",
          konjugation: {
            praesens:    { "ich": "biege", "du": "biegst", "er/sie/es": "biegt", "wir": "biegen", "ihr": "biegt", "sie/Sie": "biegen" },
            praeteritum: { "ich": "bog",   "du": "bogst",  "er/sie/es": "bog",   "wir": "bogen",  "ihr": "bogt",  "sie/Sie": "bogen"  },
          }
        },
        {
          infinitive: "stechen", en: "to sting / pierce", praeteritum: "stach", partizip2: "gestochen",
          konjugation: {
            praesens:    { "ich": "steche", "du": "stichst", "er/sie/es": "sticht", "wir": "stechen", "ihr": "stecht", "sie/Sie": "stechen" },
            praeteritum: { "ich": "stach",  "du": "stachst", "er/sie/es": "stach",  "wir": "stachen", "ihr": "stacht", "sie/Sie": "stachen" },
          }
        },
      ]
    },
    {
      id: "b1_wichtige",
      name: "B1 Wichtige Verben",
      verbs: [
        {
          infinitive: "tun", en: "to do", praeteritum: "tat", partizip2: "getan",
          konjugation: {
            praesens:    { "ich": "tue",   "du": "tust",   "er/sie/es": "tut",   "wir": "tun",    "ihr": "tut",    "sie/Sie": "tun"    },
            praeteritum: { "ich": "tat",   "du": "tatst",  "er/sie/es": "tat",   "wir": "taten",  "ihr": "tatet",  "sie/Sie": "taten"  },
          }
        },
        {
          infinitive: "bekommen", en: "to receive / get", praeteritum: "bekam", partizip2: "bekommen",
          konjugation: {
            praesens:    { "ich": "bekomme",  "du": "bekommst",  "er/sie/es": "bekommt",  "wir": "bekommen",  "ihr": "bekommt",  "sie/Sie": "bekommen"  },
            praeteritum: { "ich": "bekam",    "du": "bekamst",   "er/sie/es": "bekam",    "wir": "bekamen",   "ihr": "bekamt",   "sie/Sie": "bekamen"   },
          }
        },
        {
          infinitive: "gefallen", en: "to please / like", praeteritum: "gefiel", partizip2: "gefallen",
          konjugation: {
            praesens:    { "ich": "gefalle",  "du": "gefällst",  "er/sie/es": "gefällt",  "wir": "gefallen",  "ihr": "gefallt",  "sie/Sie": "gefallen"  },
            praeteritum: { "ich": "gefiel",   "du": "gefielst",  "er/sie/es": "gefiel",   "wir": "gefielen",  "ihr": "gefielt",  "sie/Sie": "gefielen"  },
          }
        },
        {
          infinitive: "erhalten", en: "to receive / maintain", praeteritum: "erhielt", partizip2: "erhalten",
          konjugation: {
            praesens:    { "ich": "erhalte",  "du": "erhältst",  "er/sie/es": "erhält",   "wir": "erhalten",  "ihr": "erhaltet", "sie/Sie": "erhalten"  },
            praeteritum: { "ich": "erhielt",  "du": "erhieltst", "er/sie/es": "erhielt",  "wir": "erhielten", "ihr": "erhieltet","sie/Sie": "erhielten" },
          }
        },
        {
          infinitive: "erfahren", en: "to find out / experience", praeteritum: "erfuhr", partizip2: "erfahren",
          konjugation: {
            praesens:    { "ich": "erfahre",  "du": "erfährst",  "er/sie/es": "erfährt",  "wir": "erfahren",  "ihr": "erfahrt",  "sie/Sie": "erfahren"  },
            praeteritum: { "ich": "erfuhr",   "du": "erfuhrst",  "er/sie/es": "erfuhr",   "wir": "erfuhren",  "ihr": "erfuhrt",  "sie/Sie": "erfuhren"  },
          }
        },
        {
          infinitive: "entscheiden", en: "to decide", praeteritum: "entschied", partizip2: "entschieden",
          konjugation: {
            praesens:    { "ich": "entscheide",  "du": "entscheidest",  "er/sie/es": "entscheidet",  "wir": "entscheiden",  "ihr": "entscheidet",  "sie/Sie": "entscheiden"  },
            praeteritum: { "ich": "entschied",   "du": "entschiedst",   "er/sie/es": "entschied",    "wir": "entschieden",  "ihr": "entschiedet",  "sie/Sie": "entschieden"  },
          }
        },
        {
          infinitive: "verlassen", en: "to leave / abandon", praeteritum: "verließ", partizip2: "verlassen",
          konjugation: {
            praesens:    { "ich": "verlasse",  "du": "verlässt",  "er/sie/es": "verlässt",  "wir": "verlassen",  "ihr": "verlasst",  "sie/Sie": "verlassen"  },
            praeteritum: { "ich": "verließ",   "du": "verließt",  "er/sie/es": "verließ",   "wir": "verließen",  "ihr": "verließt",  "sie/Sie": "verließen"  },
          }
        },
        {
          infinitive: "verschwinden", en: "to disappear", praeteritum: "verschwand", partizip2: "verschwunden",
          konjugation: {
            praesens:    { "ich": "verschwinde",  "du": "verschwindest",  "er/sie/es": "verschwindet",  "wir": "verschwinden",  "ihr": "verschwindet",  "sie/Sie": "verschwinden"  },
            praeteritum: { "ich": "verschwand",   "du": "verschwandst",   "er/sie/es": "verschwand",    "wir": "verschwanden",  "ihr": "verschwandet",  "sie/Sie": "verschwanden"  },
          }
        },
        {
          infinitive: "erscheinen", en: "to appear / seem", praeteritum: "erschien", partizip2: "erschienen",
          konjugation: {
            praesens:    { "ich": "erscheine",  "du": "erscheinst",  "er/sie/es": "erscheint",  "wir": "erscheinen",  "ihr": "erscheint",  "sie/Sie": "erscheinen"  },
            praeteritum: { "ich": "erschien",   "du": "erschienst",  "er/sie/es": "erschien",   "wir": "erschienen",  "ihr": "erschient",  "sie/Sie": "erschienen"  },
          }
        },
        {
          infinitive: "besitzen", en: "to own / possess", praeteritum: "besaß", partizip2: "besessen",
          konjugation: {
            praesens:    { "ich": "besitze",  "du": "besitzt",  "er/sie/es": "besitzt",  "wir": "besitzen",  "ihr": "besitzt",  "sie/Sie": "besitzen"  },
            praeteritum: { "ich": "besaß",    "du": "besaßt",   "er/sie/es": "besaß",    "wir": "besaßen",   "ihr": "besaßt",   "sie/Sie": "besaßen"   },
          }
        },
        {
          infinitive: "verbringen", en: "to spend (time)", praeteritum: "verbrachte", partizip2: "verbracht",
          konjugation: {
            praesens:    { "ich": "verbringe",  "du": "verbringst",  "er/sie/es": "verbringt",  "wir": "verbringen",  "ihr": "verbringt",  "sie/Sie": "verbringen"  },
            praeteritum: { "ich": "verbrachte", "du": "verbrachtest","er/sie/es": "verbrachte", "wir": "verbrachten", "ihr": "verbrachtet","sie/Sie": "verbrachten" },
          }
        },
        {
          infinitive: "verbieten", en: "to forbid / ban", praeteritum: "verbot", partizip2: "verboten",
          konjugation: {
            praesens:    { "ich": "verbiete",  "du": "verbietest",  "er/sie/es": "verbietet",  "wir": "verbieten",  "ihr": "verbietet",  "sie/Sie": "verbieten"  },
            praeteritum: { "ich": "verbot",    "du": "verbotest",   "er/sie/es": "verbot",     "wir": "verboten",   "ihr": "verbotet",   "sie/Sie": "verboten"   },
          }
        },
        {
          infinitive: "geschehen", en: "to happen", praeteritum: "geschah", partizip2: "geschehen",
        },
        {
          infinitive: "gelingen", en: "to succeed", praeteritum: "gelang", partizip2: "gelungen",
        },
      ]
    },
    {
      id: "trennbare1",
      name: "Trennbare Verben I",
      verbs: [
        {
          infinitive: "anfangen", en: "to begin / start", praeteritum: "fing an", partizip2: "angefangen",
          konjugation: {
            praesens:    { "ich": "fange an",  "du": "fängst an",  "er/sie/es": "fängt an",  "wir": "fangen an",  "ihr": "fangt an",  "sie/Sie": "fangen an"  },
            praeteritum: { "ich": "fing an",   "du": "fingst an",  "er/sie/es": "fing an",   "wir": "fingen an",  "ihr": "fingt an",  "sie/Sie": "fingen an"  },
          }
        },
        {
          infinitive: "aufstehen", en: "to get up / stand up", praeteritum: "stand auf", partizip2: "aufgestanden",
          konjugation: {
            praesens:    { "ich": "stehe auf",  "du": "stehst auf",  "er/sie/es": "steht auf",  "wir": "stehen auf",  "ihr": "steht auf",  "sie/Sie": "stehen auf"  },
            praeteritum: { "ich": "stand auf",  "du": "standst auf", "er/sie/es": "stand auf",  "wir": "standen auf", "ihr": "standet auf","sie/Sie": "standen auf" },
          }
        },
        {
          infinitive: "anrufen", en: "to call (phone)", praeteritum: "rief an", partizip2: "angerufen",
          konjugation: {
            praesens:    { "ich": "rufe an",  "du": "rufst an",  "er/sie/es": "ruft an",  "wir": "rufen an",  "ihr": "ruft an",  "sie/Sie": "rufen an"  },
            praeteritum: { "ich": "rief an",  "du": "riefst an", "er/sie/es": "rief an",  "wir": "riefen an", "ihr": "rieft an", "sie/Sie": "riefen an" },
          }
        },
        {
          infinitive: "aussehen", en: "to look / appear", praeteritum: "sah aus", partizip2: "ausgesehen",
          konjugation: {
            praesens:    { "ich": "sehe aus",  "du": "siehst aus",  "er/sie/es": "sieht aus",  "wir": "sehen aus",  "ihr": "seht aus",  "sie/Sie": "sehen aus"  },
            praeteritum: { "ich": "sah aus",   "du": "sahst aus",   "er/sie/es": "sah aus",    "wir": "sahen aus",  "ihr": "saht aus",  "sie/Sie": "sahen aus"  },
          }
        },
        {
          infinitive: "einschlafen", en: "to fall asleep", praeteritum: "schlief ein", partizip2: "eingeschlafen",
          konjugation: {
            praesens:    { "ich": "schlafe ein",  "du": "schläfst ein",  "er/sie/es": "schläft ein",  "wir": "schlafen ein",  "ihr": "schlaft ein",  "sie/Sie": "schlafen ein"  },
            praeteritum: { "ich": "schlief ein",  "du": "schliefst ein", "er/sie/es": "schlief ein",  "wir": "schliefen ein", "ihr": "schlieft ein", "sie/Sie": "schliefen ein" },
          }
        },
        {
          infinitive: "ausgeben", en: "to spend (money)", praeteritum: "gab aus", partizip2: "ausgegeben",
          konjugation: {
            praesens:    { "ich": "gebe aus",  "du": "gibst aus",  "er/sie/es": "gibt aus",  "wir": "geben aus",  "ihr": "gebt aus",  "sie/Sie": "geben aus"  },
            praeteritum: { "ich": "gab aus",   "du": "gabst aus",  "er/sie/es": "gab aus",   "wir": "gaben aus",  "ihr": "gabt aus",  "sie/Sie": "gaben aus"  },
          }
        },
        {
          infinitive: "umziehen", en: "to move (home) / change clothes", praeteritum: "zog um", partizip2: "umgezogen",
          konjugation: {
            praesens:    { "ich": "ziehe um",  "du": "ziehst um",  "er/sie/es": "zieht um",  "wir": "ziehen um",  "ihr": "zieht um",  "sie/Sie": "ziehen um"  },
            praeteritum: { "ich": "zog um",    "du": "zogst um",   "er/sie/es": "zog um",    "wir": "zogen um",   "ihr": "zogt um",   "sie/Sie": "zogen um"   },
          }
        },
        {
          infinitive: "abfahren", en: "to depart / leave (vehicle)", praeteritum: "fuhr ab", partizip2: "abgefahren",
          konjugation: {
            praesens:    { "ich": "fahre ab",  "du": "fährst ab",  "er/sie/es": "fährt ab",  "wir": "fahren ab",  "ihr": "fahrt ab",  "sie/Sie": "fahren ab"  },
            praeteritum: { "ich": "fuhr ab",   "du": "fuhrst ab",  "er/sie/es": "fuhr ab",   "wir": "fuhren ab",  "ihr": "fuhrt ab",  "sie/Sie": "fuhren ab"  },
          }
        },
      ]
    },
    {
      id: "trennbare2",
      name: "Trennbare Verben II",
      verbs: [
        {
          infinitive: "ankommen", en: "to arrive", praeteritum: "kam an", partizip2: "angekommen",
          konjugation: {
            praesens:    { "ich": "komme an",  "du": "kommst an",  "er/sie/es": "kommt an",  "wir": "kommen an",  "ihr": "kommt an",  "sie/Sie": "kommen an"  },
            praeteritum: { "ich": "kam an",    "du": "kamst an",   "er/sie/es": "kam an",    "wir": "kamen an",   "ihr": "kamt an",   "sie/Sie": "kamen an"   },
          }
        },
        {
          infinitive: "stattfinden", en: "to take place", praeteritum: "fand statt", partizip2: "stattgefunden",
          konjugation: {
            praesens:    { "ich": "finde statt",  "du": "findest statt",  "er/sie/es": "findet statt",  "wir": "finden statt",  "ihr": "findet statt",  "sie/Sie": "finden statt"  },
            praeteritum: { "ich": "fand statt",   "du": "fandst statt",   "er/sie/es": "fand statt",    "wir": "fanden statt",  "ihr": "fandet statt",  "sie/Sie": "fanden statt"  },
          }
        },
        {
          infinitive: "teilnehmen", en: "to participate", praeteritum: "nahm teil", partizip2: "teilgenommen",
          konjugation: {
            praesens:    { "ich": "nehme teil",  "du": "nimmst teil",  "er/sie/es": "nimmt teil",  "wir": "nehmen teil",  "ihr": "nehmt teil",  "sie/Sie": "nehmen teil"  },
            praeteritum: { "ich": "nahm teil",   "du": "nahmst teil",  "er/sie/es": "nahm teil",   "wir": "nahmen teil",  "ihr": "nahmt teil",  "sie/Sie": "nahmen teil"  },
          }
        },
        {
          infinitive: "mitnehmen", en: "to take along", praeteritum: "nahm mit", partizip2: "mitgenommen",
          konjugation: {
            praesens:    { "ich": "nehme mit",  "du": "nimmst mit",  "er/sie/es": "nimmt mit",  "wir": "nehmen mit",  "ihr": "nehmt mit",  "sie/Sie": "nehmen mit"  },
            praeteritum: { "ich": "nahm mit",   "du": "nahmst mit",  "er/sie/es": "nahm mit",   "wir": "nahmen mit",  "ihr": "nahmt mit",  "sie/Sie": "nahmen mit"  },
          }
        },
        {
          infinitive: "vorkommen", en: "to occur / happen / seem", praeteritum: "kam vor", partizip2: "vorgekommen",
          konjugation: {
            praesens:    { "ich": "komme vor",  "du": "kommst vor",  "er/sie/es": "kommt vor",  "wir": "kommen vor",  "ihr": "kommt vor",  "sie/Sie": "kommen vor"  },
            praeteritum: { "ich": "kam vor",    "du": "kamst vor",   "er/sie/es": "kam vor",    "wir": "kamen vor",   "ihr": "kamt vor",   "sie/Sie": "kamen vor"   },
          }
        },
        {
          infinitive: "anbieten", en: "to offer", praeteritum: "bot an", partizip2: "angeboten",
          konjugation: {
            praesens:    { "ich": "biete an",  "du": "bietest an",  "er/sie/es": "bietet an",  "wir": "bieten an",  "ihr": "bietet an",  "sie/Sie": "bieten an"  },
            praeteritum: { "ich": "bot an",    "du": "botst an",    "er/sie/es": "bot an",     "wir": "boten an",   "ihr": "botet an",   "sie/Sie": "boten an"   },
          }
        },
        {
          infinitive: "aufnehmen", en: "to record / pick up / absorb", praeteritum: "nahm auf", partizip2: "aufgenommen",
          konjugation: {
            praesens:    { "ich": "nehme auf",  "du": "nimmst auf",  "er/sie/es": "nimmt auf",  "wir": "nehmen auf",  "ihr": "nehmt auf",  "sie/Sie": "nehmen auf"  },
            praeteritum: { "ich": "nahm auf",   "du": "nahmst auf",  "er/sie/es": "nahm auf",   "wir": "nahmen auf",  "ihr": "nahmt auf",  "sie/Sie": "nahmen auf"  },
          }
        },
        {
          infinitive: "einladen", en: "to invite", praeteritum: "lud ein", partizip2: "eingeladen",
          konjugation: {
            praesens:    { "ich": "lade ein",  "du": "lädst ein",  "er/sie/es": "lädt ein",  "wir": "laden ein",  "ihr": "ladet ein",  "sie/Sie": "laden ein"  },
            praeteritum: { "ich": "lud ein",   "du": "ludst ein",  "er/sie/es": "lud ein",   "wir": "luden ein",  "ihr": "ludet ein",  "sie/Sie": "luden ein"  },
          }
        },
        {
          infinitive: "vorhaben", en: "to plan / intend", praeteritum: "hatte vor", partizip2: "vorgehabt",
          konjugation: {
            praesens:    { "ich": "habe vor",   "du": "hast vor",   "er/sie/es": "hat vor",   "wir": "haben vor",   "ihr": "habt vor",   "sie/Sie": "haben vor"   },
            praeteritum: { "ich": "hatte vor",  "du": "hattest vor","er/sie/es": "hatte vor", "wir": "hatten vor",  "ihr": "hattet vor", "sie/Sie": "hatten vor"  },
          }
        },
      ]
    },
  ]
};
