'use strict';

const CONFIG = {
  PAIRS_PER_GAME: 6,
  WRONG_FLASH_MS: 700,
};

let S = {
  screen: 'home',     // home | category | mode | verbselect | game | complete
  type: null,         // 'words' | 'verbs'
  category: null,
  mode: null,         // 'english' | 'praeteritum' | 'partizip2' | 'konjugation'
  conjTense: null,    // 'praesens' | 'praeteritum'
  conjVerb: null,     // verb object being drilled
  leftCards: [],
  rightCards: [],
  selLeft: null,
  selRight: null,
  moves: 0,
  matchedCount: 0,
  startTime: 0,
  endTime: 0,
  locked: false,
};

// ---- Rendering ----

function render() {
  const app = document.getElementById('app');
  switch (S.screen) {
    case 'home':       app.innerHTML = tmplHome();       break;
    case 'category':   app.innerHTML = tmplCategory();   break;
    case 'mode':       app.innerHTML = tmplMode();       break;
    case 'verbselect': app.innerHTML = tmplVerbSelect(); break;
    case 'game':       app.innerHTML = tmplGame();       break;
    case 'complete':   app.innerHTML = tmplComplete();   break;
  }
}

function tmplHome() {
  return `
    <div class="screen home-screen">
      <div class="home-header">
        <span class="flag">🇩🇪</span>
        <h1>German<br>Practice</h1>
        <p class="subtitle">Match the words to learn</p>
      </div>
      <div class="home-buttons">
        <button class="big-btn words" onclick="nav('category','words')">
          <span class="btn-icon">📝</span>
          <span class="btn-text">
            <span class="btn-title">Wörter</span>
            <span class="btn-sub">Words &amp; Translations</span>
          </span>
        </button>
        <button class="big-btn verbs" onclick="nav('category','verbs')">
          <span class="btn-icon">⚡</span>
          <span class="btn-text">
            <span class="btn-title">Verben</span>
            <span class="btn-sub">Forms &amp; Conjugation</span>
          </span>
        </button>
      </div>
    </div>`;
}

function tmplCategory() {
  const data = S.type === 'words' ? WORDS_DATA : VERBS_DATA;
  const title = S.type === 'words' ? 'Wörter' : 'Verben';
  const unit  = S.type === 'words' ? 'pairs' : 'verbs';
  const rows = data.categories.map(c => {
    const n = S.type === 'words' ? c.pairs.length : c.verbs.length;
    return `
      <button class="cat-btn" onclick="selectCategory('${c.id}')">
        <span class="cat-name">${c.name}</span>
        <span class="cat-count">${n} ${unit}</span>
      </button>`;
  }).join('');
  return `
    <div class="screen">
      <div class="screen-header">
        <button class="back-btn" onclick="nav('home')">← Back</button>
        <h2>${title}</h2>
      </div>
      <div class="category-list">${rows}</div>
    </div>`;
}

function tmplMode() {
  const cat = S.category;
  return `
    <div class="screen">
      <div class="screen-header">
        <button class="back-btn" onclick="nav('category','verbs')">← Back</button>
        <h2>${cat.name}</h2>
      </div>

      <p class="mode-section-label">Unregelmäßige Formen</p>
      <div class="mode-list">
        <button class="mode-btn" onclick="startGame('english')">
          <span class="mode-title">Infinitiv ↔ English</span>
          <span class="mode-ex">gehen ↔ to go</span>
        </button>
        <button class="mode-btn" onclick="startGame('praeteritum')">
          <span class="mode-title">Infinitiv ↔ Präteritum</span>
          <span class="mode-ex">gehen ↔ ging</span>
        </button>
        <button class="mode-btn" onclick="startGame('partizip2')">
          <span class="mode-title">Infinitiv ↔ Partizip II</span>
          <span class="mode-ex">gehen ↔ gegangen</span>
        </button>
      </div>

      <p class="mode-section-label" style="margin-top:22px">Konjugation</p>
      <div class="mode-list">
        <button class="mode-btn conj-btn" onclick="selectConjTense('praesens')">
          <span class="mode-title">Präsens</span>
          <span class="mode-ex">ich gehe, du gehst, er geht …</span>
        </button>
        <button class="mode-btn conj-btn" onclick="selectConjTense('praeteritum')">
          <span class="mode-title">Präteritum</span>
          <span class="mode-ex">ich ging, du gingst, er ging …</span>
        </button>
      </div>
    </div>`;
}

function tmplVerbSelect() {
  const tenseLabel = S.conjTense === 'praesens' ? 'Präsens' : 'Präteritum';
  const rows = S.category.verbs
    .filter(v => v.konjugation && v.konjugation[S.conjTense])
    .map(v => `
      <button class="cat-btn" onclick="startConjGame('${v.infinitive}')">
        <span class="cat-name">${v.infinitive}</span>
        <span class="cat-count">${v.en}</span>
      </button>`).join('');
  return `
    <div class="screen">
      <div class="screen-header">
        <button class="back-btn" onclick="nav('mode')">← Back</button>
        <h2>${tenseLabel}</h2>
      </div>
      <p class="mode-intro">Choose a verb to conjugate:</p>
      <div class="category-list">${rows}</div>
    </div>`;
}

function tmplGame() {
  const total = S.leftCards.length;
  const pct   = total > 0 ? (S.matchedCount / total) * 100 : 0;
  const isConj = S.mode === 'konjugation';

  const instruction = isConj
    ? `<span class="conj-verb-name">${esc(S.conjVerb.infinitive)}</span>
       <span class="conj-tense-tag">${S.conjTense === 'praesens' ? 'Präsens' : 'Präteritum'}</span>`
    : 'Tap the matching pairs';

  const colHTML = (cards, side) => cards.map((c, i) => `
    <button class="col-card" data-side="${side}" data-idx="${i}" data-state="${c.state}"
            onclick="tap('${side}',${i})">
      ${esc(c.text)}
    </button>`).join('');

  return `
    <div class="screen game-screen">
      <div class="game-top">
        <button class="quit-btn" onclick="quitGame()">✕</button>
        <div class="progress-track">
          <div class="progress-fill" id="prog" style="width:${pct}%"></div>
        </div>
      </div>
      <p class="game-instruction">${instruction}</p>
      <div class="game-columns">
        <div class="game-col">${colHTML(S.leftCards,  'left')}</div>
        <div class="game-col">${colHTML(S.rightCards, 'right')}</div>
      </div>
    </div>`;
}

function tmplComplete() {
  const secs = Math.round((S.endTime - S.startTime) / 1000);
  const time = secs >= 60 ? `${Math.floor(secs/60)}m ${secs%60}s` : `${secs}s`;
  const isConj = S.mode === 'konjugation';
  return `
    <div class="screen complete-screen">
      <div class="complete-card">
        <div class="trophy">🏆</div>
        <h2>Ausgezeichnet!</h2>
        <p class="tagline">${isConj ? esc(S.conjVerb.infinitive) + ' — all forms matched!' : 'All pairs matched!'}</p>
        <div class="result-stats">
          <div class="result-stat">
            <span class="val">${S.moves}</span>
            <span class="lbl">Moves</span>
          </div>
          <div class="result-stat">
            <span class="val">${time}</span>
            <span class="lbl">Time</span>
          </div>
        </div>
        <div class="complete-actions">
          <button class="action-btn primary"   onclick="startGame()">Play Again</button>
          ${isConj ? `<button class="action-btn secondary" onclick="nav('verbselect')">Other Verb</button>` :
                     `<button class="action-btn secondary" onclick="nav('home')">Main Menu</button>`}
        </div>
      </div>
    </div>`;
}

// ---- Navigation ----

function nav(screen, type) {
  if (screen === 'home') {
    S.type = null; S.mode = null; S.conjTense = null; S.conjVerb = null;
  }
  S.screen = screen;
  if (type) S.type = type;
  render();
}

function selectCategory(id) {
  const data = S.type === 'words' ? WORDS_DATA : VERBS_DATA;
  S.category = data.categories.find(c => c.id === id);
  if (S.type === 'verbs') {
    S.screen = 'mode';
    render();
  } else {
    startGame();
  }
}

function selectConjTense(tense) {
  S.conjTense = tense;
  S.mode = 'konjugation';
  S.screen = 'verbselect';
  render();
}

function quitGame() {
  if (S.mode === 'konjugation') {
    S.screen = 'verbselect';
  } else if (S.type === 'verbs') {
    S.screen = 'mode';
  } else {
    S.screen = 'category';
  }
  render();
}

// ---- Game setup ----

function startGame(mode) {
  if (mode) S.mode = mode;

  if (S.mode === 'konjugation') {
    // Play Again: restart same verb
    startConjGame(S.conjVerb.infinitive);
    return;
  }

  const allPairs = buildPairs();
  const selected = shuffle(allPairs).slice(0, CONFIG.PAIRS_PER_GAME);
  initCards(selected);
}

function startConjGame(infinitive) {
  S.conjVerb = S.category.verbs.find(v => v.infinitive === infinitive);
  const pairs = buildConjPairs(S.conjVerb.konjugation[S.conjTense]);
  initCards(pairs);
}

function initCards(pairs) {
  S.leftCards  = pairs.map((p, i) => ({ text: p.a, pairId: i, state: 'idle' }));
  S.rightCards = shuffle(pairs.map((p, i) => ({ text: p.b, pairId: i, state: 'idle' })));
  S.selLeft      = null;
  S.selRight     = null;
  S.moves        = 0;
  S.matchedCount = 0;
  S.startTime    = Date.now();
  S.endTime      = 0;
  S.locked       = false;
  S.screen       = 'game';
  render();
}

function buildPairs() {
  if (S.type === 'words') {
    return S.category.pairs.map(p => ({ a: p.de, b: p.en }));
  }
  return S.category.verbs.map(v => {
    switch (S.mode) {
      case 'english':     return { a: v.infinitive, b: v.en };
      case 'praeteritum': return { a: v.infinitive, b: v.praeteritum };
      case 'partizip2':   return { a: v.infinitive, b: v.partizip2 };
    }
  });
}

function buildConjPairs(konjugation) {
  // Group pronouns that share the same form to avoid duplicate right-side cards.
  // e.g. ich ging = er ging → left card becomes "ich / er/sie/es"
  const pronouns = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  const formMap = {};
  pronouns.forEach(p => {
    const form = konjugation[p];
    if (!form) return;
    if (!formMap[form]) formMap[form] = [];
    formMap[form].push(p);
  });
  return Object.entries(formMap).map(([form, prons]) => ({
    a: prons.join(' / '),
    b: form,
  }));
}

// ---- Interaction ----

function tap(side, i) {
  if (S.locked) return;
  const cards = side === 'left' ? S.leftCards : S.rightCards;
  if (cards[i].state === 'matched') return;

  const prev = side === 'left' ? S.selLeft : S.selRight;

  if (prev !== null && prev !== i) {
    cards[prev].state = 'idle';
    setCardState(side, prev, 'idle');
  }

  if (prev === i) {
    cards[i].state = 'idle';
    setCardState(side, i, 'idle');
    if (side === 'left') S.selLeft = null; else S.selRight = null;
    return;
  }

  cards[i].state = 'selected';
  setCardState(side, i, 'selected');
  if (side === 'left') S.selLeft = i; else S.selRight = i;

  if (S.selLeft !== null && S.selRight !== null) {
    S.moves++;
    checkMatch();
  }
}

function checkMatch() {
  const l = S.selLeft;
  const r = S.selRight;

  if (S.leftCards[l].pairId === S.rightCards[r].pairId) {
    S.leftCards[l].state  = 'matched';
    S.rightCards[r].state = 'matched';
    setCardState('left',  l, 'matched');
    setCardState('right', r, 'matched');
    S.selLeft      = null;
    S.selRight     = null;
    S.matchedCount++;
    updateProgress();

    if (S.matchedCount === S.leftCards.length) {
      S.endTime = Date.now();
      setTimeout(() => { S.screen = 'complete'; render(); }, 700);
    }
  } else {
    S.locked = true;
    S.leftCards[l].state  = 'wrong';
    S.rightCards[r].state = 'wrong';
    setCardState('left',  l, 'wrong');
    setCardState('right', r, 'wrong');

    setTimeout(() => {
      if (S.leftCards[l])  { S.leftCards[l].state  = 'idle'; setCardState('left',  l, 'idle'); }
      if (S.rightCards[r]) { S.rightCards[r].state = 'idle'; setCardState('right', r, 'idle'); }
      S.selLeft  = null;
      S.selRight = null;
      S.locked   = false;
    }, CONFIG.WRONG_FLASH_MS);
  }
}

// ---- DOM helpers ----

function setCardState(side, i, state) {
  const el = document.querySelector(`[data-side="${side}"][data-idx="${i}"]`);
  if (!el) return;
  el.dataset.state = state;
  if (state === 'wrong') {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  }
}

function updateProgress() {
  const pct  = (S.matchedCount / S.leftCards.length) * 100;
  const prog = document.getElementById('prog');
  if (prog) prog.style.width = pct + '%';
}

// ---- Utils ----

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Boot
render();
