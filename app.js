(function(){
  "use strict";

  /**
   * One multiple-choice question, as stored in questions.js.
   * @typedef {Object} Question
   * @property {number} num
   * @property {string} topic
   * @property {("Easy"|"Moderate"|"Hard")} difficulty
   * @property {string} question
   * @property {Object.<string,string>} options
   * @property {string} answer
   * @property {string} solution
   * @property {number} unit
   * @property {string} kind
   */

  /**
   * One graded question, built by submitTest() for the results/review screens.
   * @typedef {Object} ReviewRecord
   * @property {number} idx
   * @property {number} num
   * @property {string} topic
   * @property {("Easy"|"Moderate"|"Hard")} difficulty
   * @property {string} question
   * @property {Object.<string,string>} options
   * @property {string} answer
   * @property {string} solution
   * @property {?string} userAnswer
   * @property {boolean} marked
   * @property {("correct"|"wrong"|"blank")} status
   */

  /** @typedef {{correct:number, total:number}} DiffStat */
  /** @typedef {{correct:number, wrong:number, total:number}} TopicStat */

  /**
   * @typedef {Object} TestResults
   * @property {ReviewRecord[]} records
   * @property {number} correct
   * @property {number} wrong
   * @property {number} blank
   * @property {number} total
   * @property {Object.<string,DiffStat>} byDiff
   * @property {Object.<string,TopicStat>} byTopic
   * @property {number} elapsedSec
   * @property {boolean} auto
   * @property {number} unit
   */

  /** @type {Question[]} */
  var QUESTIONS = window.QUESTION_DATA || [];
  var LETTERS = ['A','B','C','D'];

  /** @type {Object.<number,string[]>} */
  var TOPICS_BY_UNIT = {};
  QUESTIONS.forEach(function(q){
    TOPICS_BY_UNIT[q.unit] = TOPICS_BY_UNIT[q.unit] || [];
    if (TOPICS_BY_UNIT[q.unit].indexOf(q.topic) === -1) TOPICS_BY_UNIT[q.unit].push(q.topic);
  });

  /** @type {Object.<number,{wordmark:string, headline:string, subhead:string, reportTitle:string}>} */
  var UNIT_META = {
    1: {
      wordmark: 'Unit I \u2014 Mathematical Foundation for AI',
      headline: 'Sets, Relations & Functions',
      subhead: 'A mock test built from your own Unit I question bank, with a detailed solution behind every question.',
      reportTitle: 'Sets, Relations & Functions \u2014 Unit I Mock Test Report'
    },
    2: {
      wordmark: 'Unit II \u2014 Counting & Recurrence',
      headline: 'Counting & Recurrence',
      subhead: 'A mock test built from your own Counting & Recurrence question bank, with a detailed solution behind every question.',
      reportTitle: 'Counting & Recurrence \u2014 Unit II Mock Test Report'
    },
    3: {
      wordmark: 'Unit III \u2014 Linear Algebra Foundations',
      headline: 'Matrix Algebra',
      subhead: 'A mock test built from your own Unit III question bank, with a detailed solution behind every question.',
      reportTitle: 'Matrix Algebra \u2014 Unit III Mock Test Report'
    },
    4: {
      wordmark: 'Unit IV \u2014 Elementary Graph Theory',
      headline: 'Elementary Graph Theory',
      subhead: 'A mock test built from your own Unit IV question bank, with a detailed solution behind every question.',
      reportTitle: 'Elementary Graph Theory \u2014 Unit IV Mock Test Report'
    }
  };

  /**
   * @type {{
   *   unit: number,
   *   feedbackMode: ("exam"|"practice"),
   *   testQuestions: Question[],
   *   answers: Object.<number,string>,
   *   marked: Object.<number,boolean>,
   *   current: number,
   *   timed: boolean,
   *   remainingSec: number,
   *   timerId: ?number,
   *   startedAt: ?number,
   *   finishedAt: ?number,
   *   reviewFilter: string,
   *   selectedTopics: Object.<string,boolean>
   * }}
   */
  var state = {
    unit: 1,
    feedbackMode: 'exam',
    testQuestions: [],
    answers: {},
    marked: {},
    current: 0,
    timed: false,
    remainingSec: 0,
    timerId: null,
    startedAt: null,
    finishedAt: null,
    reviewFilter: 'all',
    selectedTopics: {}
  };

  /**
   * @param {string} id
   * @returns {HTMLElement}
   */
  function $(id){ return document.getElementById(id); }
  /**
   * @param {string} id
   * @returns {HTMLButtonElement}
   */
  function $btn(id){ return /** @type {HTMLButtonElement} */ ($(id)); }
  /**
   * @param {("A"|"B"|"C"|"D")} letter
   * @returns {?HTMLButtonElement}
   */
  function optionButton(letter){
    return /** @type {?HTMLButtonElement} */ (document.querySelector('#options .option[data-letter="' + letter + '"]'));
  }
  /**
   * Marks btn as the active choice within a toggle-button group (e.g. the
   * unit switcher or the exam/practice switcher), clearing "active" from
   * every other button in that group first. Shared by every such group so
   * the clear-then-activate logic isn't repeated at each call site.
   * @param {string} groupSelector
   * @param {?Element} btn
   */
  function activateToggle(groupSelector, btn){
    document.querySelectorAll(groupSelector).forEach(function(b){ b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
  }
  /**
   * @param {string} s
   * @returns {string}
   */
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }
  /**
   * Fisher\u2013Yates shuffle. Returns a new shuffled array; does not mutate arr.
   * @template T
   * @param {T[]} arr
   * @returns {T[]}
   */
  function shuffle(arr){
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  /**
   * @param {number} n
   * @returns {string}
   */
  function pad2(n){ return n < 10 ? '0' + n : '' + n; }
  /**
   * @param {number} sec
   * @returns {string}
   */
  function fmtTime(sec){
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return pad2(m) + ':' + pad2(s);
  }
  /**
   * @param {number} unit
   * @returns {Question[]}
   */
  function poolForUnit(unit){
    return QUESTIONS.filter(function(q){ return q.unit === unit; });
  }

  /* ---------------- screen switching ---------------- */
  /**
   * @param {string} name
   */
  function showScreen(name){
    ['start','test','results'].forEach(function(n){
      $('screen-' + n).hidden = (n !== name);
    });
    $('topbar').hidden = (name !== 'test');
    $('jump-strip').hidden = (name !== 'test');
    if (window.Explain3D) {
      if (name !== 'test') { $('explain3d-wrap').hidden = true; window.Explain3D.unmount($('explain3d')); }
      if (name !== 'results') { $('explain3d-chart-wrap').hidden = true; window.Explain3D.unmount($('explain3d-chart')); }
    }
    window.scrollTo(0,0);
  }

  /* ---------------- START SCREEN ---------------- */
  /**
   * @param {number} unit
   */
  function applyUnitUI(unit){
    state.unit = unit;
    state.selectedTopics = {};
    var meta = UNIT_META[unit];
    var pool = poolForUnit(unit);
    var topics = TOPICS_BY_UNIT[unit] || [];

    $('wordmark-text').textContent = meta.wordmark;
    $('headline').textContent = meta.headline;
    $('subhead').textContent = meta.subhead;
    $('stat-questions').textContent = String(pool.length);
    $('stat-topics').textContent = String(topics.length);
    $('full-title').textContent = 'Full mock test';
    $('full-desc').textContent = 'All ' + pool.length + ' questions, every topic, in order.';
    $('quick-desc').textContent = '20 random questions across the unit.';

    activateToggle('.mode-toggle-btn', document.querySelector('.mode-toggle-btn[data-feedback="exam"]'));
    state.feedbackMode = 'exam';

    var chipsWrap = $('topic-chips');
    chipsWrap.innerHTML = topics.map(function(t){
      return '<button type="button" class="topic-chip" data-topic="' + escapeHtml(t) + '">' + escapeHtml(t) + '</button>';
    }).join('');
    var startTopicBtn = $btn('start-topic');
    startTopicBtn.disabled = true;
    startTopicBtn.textContent = 'Select topics to start';
    chipsWrap.querySelectorAll('.topic-chip').forEach(function(btn){
      btn.addEventListener('click', function(){
        var t = btn.getAttribute('data-topic');
        if (state.selectedTopics[t]) { delete state.selectedTopics[t]; btn.classList.remove('selected'); }
        else { state.selectedTopics[t] = true; btn.classList.add('selected'); }
        var chosen = Object.keys(state.selectedTopics);
        var count = pool.filter(function(q){ return chosen.indexOf(q.topic) !== -1; }).length;
        var startBtn = $btn('start-topic');
        startBtn.disabled = chosen.length === 0;
        startBtn.textContent = chosen.length === 0 ? 'Select topics to start' :
          ('Start practice \u2014 ' + count + ' question' + (count === 1 ? '' : 's'));
      });
    });

    var cov = $('coverage-list');
    cov.innerHTML = topics.map(function(t){
      var count = pool.filter(function(q){ return q.topic === t; }).length;
      return '<li><span>' + escapeHtml(t) + '</span><span>' + count + ' question' + (count === 1 ? '' : 's') + '</span></li>';
    }).join('');
    $('coverage-summary').textContent = 'Full topic coverage (' + topics.length + ' topics, ' + pool.length + ' questions total)';

    updateModeMeta();
  }

  function updateModeMeta(){
    var timed = state.feedbackMode === 'exam';
    var pool = poolForUnit(state.unit);
    $('full-meta').textContent = timed ? (pool.length + ' min, timed') : 'Untimed, instant feedback';
    $('quick-meta').textContent = timed ? '20 min, timed' : 'Untimed, instant feedback';
    $('feedback-hint').textContent = timed
      ? 'Answers are hidden until you submit, with a countdown timer.'
      : 'See the correct answer and solution right after each question, no clock.';
  }

  document.querySelectorAll('.unit-toggle-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      activateToggle('.unit-toggle-btn', btn);
      applyUnitUI(parseInt(btn.getAttribute('data-unit'), 10));
    });
  });

  document.querySelectorAll('.mode-toggle-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      activateToggle('.mode-toggle-btn', btn);
      state.feedbackMode = /** @type {("exam"|"practice")} */ (btn.getAttribute('data-feedback'));
      updateModeMeta();
    });
  });

  $('start-full').addEventListener('click', function(){
    beginTest(poolForUnit(state.unit));
  });
  $('start-quick').addEventListener('click', function(){
    beginTest(shuffle(poolForUnit(state.unit)).slice(0, 20));
  });
  $('start-topic').addEventListener('click', function(){
    var topics = Object.keys(state.selectedTopics);
    if (!topics.length) return;
    beginTest(poolForUnit(state.unit).filter(function(q){ return topics.indexOf(q.topic) !== -1; }));
  });

  /* ---------------- TEST SCREEN ---------------- */
  /**
   * @param {Question[]} questions
   */
  function beginTest(questions){
    state.testQuestions = questions;
    state.answers = {};
    state.marked = {};
    state.current = 0;
    state.timed = state.feedbackMode === 'exam';
    state.remainingSec = questions.length * 60;
    state.startedAt = Date.now();
    state.finishedAt = null;
    clearInterval(state.timerId);

    buildJumpStrip();
    showScreen('test');
    renderQuestion(0);

    if (state.timed) {
      $('timer').hidden = false;
      updateTimerDisplay();
      state.timerId = setInterval(function(){
        state.remainingSec--;
        updateTimerDisplay();
        if (state.remainingSec <= 0) {
          clearInterval(state.timerId);
          submitTest(true);
        }
      }, 1000);
    } else {
      $('timer').hidden = true;
    }
  }

  function updateTimerDisplay(){
    var el = $('timer');
    el.textContent = fmtTime(state.remainingSec);
    el.classList.toggle('timer--low', state.remainingSec <= 60);
  }

  function buildJumpStrip(){
    var strip = $('jump-strip');
    strip.innerHTML = state.testQuestions.map(function(_q, i){
      return '<button type="button" class="jump-dot" data-i="' + i + '">' + (i + 1) + '</button>';
    }).join('');
    strip.querySelectorAll('.jump-dot').forEach(function(btn){
      btn.addEventListener('click', function(){
        state.current = parseInt(btn.getAttribute('data-i'), 10);
        renderQuestion(state.current);
      });
    });
  }

  function refreshJumpStrip(){
    $('jump-strip').querySelectorAll('.jump-dot').forEach(function(btn){
      var i = parseInt(btn.getAttribute('data-i'), 10);
      btn.classList.toggle('answered', !!state.answers[i]);
      btn.classList.toggle('marked', !!state.marked[i]);
      btn.classList.toggle('current', i === state.current);
    });
  }

  /**
   * @param {number} i
   */
  function renderQuestion(i){
    var total = state.testQuestions.length;
    var q = state.testQuestions[i];

    $('qcounter').textContent = 'Question ' + (i + 1) + ' of ' + total;
    $('progress-fill').style.width = (((i + 1) / total) * 100) + '%';

    $('q-topic').textContent = q.topic;
    var diffChip = $('q-diff');
    diffChip.textContent = q.difficulty;
    diffChip.setAttribute('data-d', q.difficulty);

    $('q-stem').textContent = q.question;

    var userAns = state.answers[i];
    var revealed = userAns && state.feedbackMode === 'practice';

    var optsHtml = LETTERS.map(function(letter){
      if (!(letter in q.options)) return '';
      var classes = ['option'];
      if (userAns === letter && !revealed) classes.push('selected');
      if (revealed) {
        if (letter === q.answer) classes.push('reveal-correct');
        else if (letter === userAns) classes.push('reveal-wrong');
      }
      return '<button type="button" class="' + classes.join(' ') + '" data-letter="' + letter + '"' +
        (revealed ? ' disabled' : '') + '>' +
        '<span class="option-letter">' + letter + '</span>' +
        '<span class="option-text">' + escapeHtml(q.options[letter]) + '</span>' +
        '</button>';
    }).join('');
    $('options').innerHTML = optsHtml;

    $('options').querySelectorAll('.option').forEach(function(btn){
      btn.addEventListener('click', function(){
        selectOption(i, /** @type {("A"|"B"|"C"|"D")} */ (btn.getAttribute('data-letter')));
      });
    });

    var panel = $('feedback-panel');
    if (revealed) {
      var isCorrect = userAns === q.answer;
      panel.hidden = false;
      panel.className = 'feedback-panel ' + (isCorrect ? 'is-correct' : 'is-wrong');
      panel.innerHTML = '<b>' + (isCorrect ? 'Correct.' : 'Not quite \u2014 correct answer is ' + escapeHtml(q.answer) + '.') + '</b> ' +
        escapeHtml(q.solution);
      if (window.Explain3D) {
        $('explain3d-wrap').hidden = false;
        window.Explain3D.mount($('explain3d'), q);
      }
    } else {
      panel.hidden = true;
      panel.innerHTML = '';
      if (window.Explain3D) {
        $('explain3d-wrap').hidden = true;
        window.Explain3D.unmount($('explain3d'));
      }
    }

    var markBtn = $('btn-mark');
    markBtn.textContent = state.marked[i] ? 'Marked for review' : 'Mark for review';
    markBtn.classList.toggle('is-marked', !!state.marked[i]);

    $btn('btn-prev').disabled = i === 0;
    $('btn-next').textContent = (i === total - 1) ? 'Finish' : 'Next';

    refreshJumpStrip();
  }

  /**
   * @param {number} i
   * @param {("A"|"B"|"C"|"D")} letter
   */
  function selectOption(i, letter){
    if (state.feedbackMode === 'practice' && state.answers[i]) return; // locked after reveal
    state.answers[i] = letter;
    renderQuestion(i);
  }

  $('btn-mark').addEventListener('click', function(){
    var i = state.current;
    if (state.marked[i]) delete state.marked[i]; else state.marked[i] = true;
    renderQuestion(i);
  });

  $('btn-prev').addEventListener('click', function(){
    if (state.current > 0) { state.current--; renderQuestion(state.current); }
  });
  $('btn-next').addEventListener('click', function(){
    if (state.current < state.testQuestions.length - 1) {
      state.current++; renderQuestion(state.current);
    } else {
      confirmSubmit();
    }
  });

  $('btn-exit').addEventListener('click', function(){
    openModal(
      'Exit this test?',
      'Your progress on this attempt will be lost.',
      'Exit test',
      function(){ clearInterval(state.timerId); showScreen('start'); }
    );
  });

  function confirmSubmit(){
    var total = state.testQuestions.length;
    var answered = Object.keys(state.answers).length;
    var unanswered = total - answered;
    var marked = Object.keys(state.marked).length;
    var msg = answered + ' of ' + total + ' answered.';
    if (unanswered > 0) msg += ' ' + unanswered + ' question' + (unanswered === 1 ? '' : 's') + ' left blank.';
    if (marked > 0) msg += ' ' + marked + ' marked for review.';
    openModal('Submit this test?', msg, 'Submit', function(){
      clearInterval(state.timerId);
      submitTest(false);
    });
  }

  /* ---------------- MODAL ---------------- */
  /** @type {?function():void} */
  var modalConfirmHandler = null;
  function closeModal(){
    $('modal-backdrop').hidden = true;
    if (modalConfirmHandler) {
      $('modal-confirm').removeEventListener('click', modalConfirmHandler);
      modalConfirmHandler = null;
    }
  }
  /**
   * @param {string} title
   * @param {string} body
   * @param {string} confirmLabel
   * @param {function():void} onConfirm
   */
  function openModal(title, body, confirmLabel, onConfirm){
    closeModal(); // drop any previously attached (e.g. cancelled) handler first
    $('modal-title').textContent = title;
    $('modal-body').textContent = body;
    $('modal-confirm').textContent = confirmLabel;
    $('modal-backdrop').hidden = false;
    modalConfirmHandler = function(){
      closeModal();
      onConfirm();
    };
    $('modal-confirm').addEventListener('click', modalConfirmHandler);
  }
  $('modal-cancel').addEventListener('click', closeModal);

  /* ---------------- RESULTS ---------------- */
  /** @type {?TestResults} */
  var lastResults = null;

  /**
   * @param {boolean} auto
   */
  function submitTest(auto){
    state.finishedAt = Date.now();
    var records = state.testQuestions.map(function(q, i){
      var userAnswer = state.answers[i] || null;
      /** @type {("correct"|"wrong"|"blank")} */
      var status = userAnswer ? (userAnswer === q.answer ? 'correct' : 'wrong') : 'blank';
      return {
        idx: i, num: q.num, topic: q.topic, difficulty: q.difficulty,
        question: q.question, options: q.options, answer: q.answer, solution: q.solution,
        userAnswer: userAnswer, marked: !!state.marked[i], status: status
      };
    });

    var correct = 0, wrong = 0, blank = 0;
    /** @type {Object.<string,DiffStat>} */
    var byDiff = {};
    /** @type {Object.<string,TopicStat>} */
    var byTopic = {};
    records.forEach(function(r){
      byDiff[r.difficulty] = byDiff[r.difficulty] || { correct: 0, total: 0 };
      byDiff[r.difficulty].total++;
      byTopic[r.topic] = byTopic[r.topic] || { correct: 0, wrong: 0, total: 0 };
      byTopic[r.topic].total++;
      if (r.status === 'correct') { correct++; byDiff[r.difficulty].correct++; byTopic[r.topic].correct++; }
      else if (r.status === 'wrong') { wrong++; byTopic[r.topic].wrong++; }
      else { blank++; }
    });
    var total = records.length;

    lastResults = {
      records: records, correct: correct, wrong: wrong, blank: blank, total: total,
      byDiff: byDiff, byTopic: byTopic,
      elapsedSec: Math.round((state.finishedAt - state.startedAt) / 1000),
      auto: !!auto,
      unit: state.testQuestions.length ? state.testQuestions[0].unit : state.unit
    };

    state.reviewFilter = 'all';
    showScreen('results');
    renderResults();
  }

  /**
   * @param {number} pct
   */
  function scoreNote(pct){
    if (pct >= 90) return 'An excellent handle on this material \u2014 the fundamentals are solid.';
    if (pct >= 75) return 'A strong pass. A look at the flagged topics below will round it out.';
    if (pct >= 50) return 'The foundations are there. Revisit the weaker topics below before the exam.';
    return 'Early days with this unit \u2014 work through the weakest topics first, then try again.';
  }

  function renderResults(){
    var r = lastResults;
    var pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;

    var html = '';
    html += '<div class="score-block">';
    html += '<div class="score-num">' + r.correct + '<span> / ' + r.total + '</span></div>';
    html += '<p class="score-note">' + escapeHtml(scoreNote(pct)) + '</p>';
    html += '<p class="score-sub">' + pct + '% correct' + (r.auto ? ' \u2014 time expired, submitted automatically' : '') +
      (state.timed ? ' &nbsp;\u00b7&nbsp; finished in ' + fmtTime(r.elapsedSec) : '') + '</p>';
    html += '</div>';

    html += '<div class="numberline"><div class="numberline-track">' +
      '<div class="numberline-fill" data-pct="' + pct + '"></div></div>' +
      '<div class="numberline-labels"><span>0</span><span>' + Math.round(r.total/2) + '</span><span>' + r.total + '</span></div></div>';

    html += '<h3 class="section-title">By difficulty</h3><div class="diff-rows">';
    ['Easy','Moderate','Hard'].forEach(function(d){
      var b = r.byDiff[d];
      if (!b) return;
      var p = b.total ? (b.correct / b.total) * 100 : 0;
      html += '<div class="diff-row"><span>' + d + '</span>' +
        '<div class="bar-track"><div class="bar-fill ' + d + '" data-pct="' + p + '"></div></div>' +
        '<span class="frac">' + b.correct + '/' + b.total + '</span></div>';
    });
    html += '</div>';

    var topicRows = Object.keys(r.byTopic).map(function(t){
      var b = r.byTopic[t];
      return { topic: t, correct: b.correct, wrong: b.wrong, total: b.total, pct: b.total ? b.correct / b.total : 0 };
    }).sort(function(a, b2){ return a.pct - b2.pct; });

    if (window.Explain3D && topicRows.length) {
      $('explain3d-chart-wrap').hidden = false;
      window.Explain3D.mountTopicChart($('explain3d-chart'), topicRows.slice(0, 8));
    } else if ($('explain3d-chart-wrap')) {
      $('explain3d-chart-wrap').hidden = true;
    }

    html += '<h3 class="section-title">By topic <span class="subtle-note">\u2014 weakest first</span></h3><div class="topic-rows">';
    topicRows.forEach(function(tr){
      var cPct = tr.total ? (tr.correct / tr.total) * 100 : 0;
      var wPct = tr.total ? (tr.wrong / tr.total) * 100 : 0;
      html += '<div class="topic-row"><span class="tname">' + escapeHtml(tr.topic) + '</span>' +
        '<div class="stack-track"><div class="stack-correct" data-pct="' + cPct + '"></div>' +
        '<div class="stack-wrong" data-pct="' + wPct + '"></div></div>' +
        '<span class="frac">' + tr.correct + '/' + tr.total + '</span></div>';
    });
    html += '</div>';

    html += '<h3 class="section-title">Review</h3>';
    html += '<div class="filter-row">' +
      ['all:All', 'wrong:Incorrect', 'correct:Correct', 'blank:Unattempted', 'marked:Marked'].map(function(f){
        var parts = f.split(':');
        return '<button type="button" class="filter-btn' + (state.reviewFilter === parts[0] ? ' active' : '') +
          '" data-filter="' + parts[0] + '">' + parts[1] + '</button>';
      }).join('') + '</div>';
    html += '<div id="review-list"></div>';

    html += '<div class="results-actions">' +
      '<button type="button" class="btn btn-primary" id="btn-retry">Retry this test</button>' +
      '<button type="button" class="btn btn-outline" id="btn-newtest">New test</button>' +
      '<button type="button" class="btn btn-outline" id="btn-download">Download report</button>' +
      '</div>';

    $('results-content').innerHTML = html;
    $('results-content').querySelectorAll('[data-pct]').forEach(function(/** @type {HTMLElement} */ el){
      el.style.width = el.getAttribute('data-pct') + '%';
    });

    $('results-content').querySelectorAll('.filter-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        state.reviewFilter = btn.getAttribute('data-filter');
        $('results-content').querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        renderReviewList();
      });
    });
    renderReviewList();

    $('btn-retry').addEventListener('click', function(){
      beginTest(state.testQuestions.slice());
    });
    $('btn-newtest').addEventListener('click', function(){
      showScreen('start');
    });
    $('btn-download').addEventListener('click', downloadReport);
  }

  function renderReviewList(){
    var r = lastResults;
    var filter = state.reviewFilter;
    var list = r.records.filter(function(rec){
      if (filter === 'all') return true;
      if (filter === 'marked') return rec.marked;
      return rec.status === filter;
    });

    var wrap = $('review-list');
    if (!list.length) {
      wrap.innerHTML = '<p class="review-empty">Nothing matches this filter.</p>';
      return;
    }

    wrap.innerHTML = list.map(function(rec, k){
      var dotClass = rec.status === 'correct' ? 'correct' : (rec.status === 'wrong' ? 'wrong' : 'blank');
      var optsHtml = LETTERS.map(function(letter){
        if (!(letter in rec.options)) return '';
        var cls = 'review-opt';
        var tag = '';
        if (letter === rec.answer) { cls += ' correct-ans'; tag = 'correct'; }
        if (letter === rec.userAnswer && rec.userAnswer !== rec.answer) { cls += ' your-wrong'; tag = 'your answer'; }
        return '<div class="' + cls + '"><span>' + letter + '.</span><span class="review-opt-text">' + escapeHtml(rec.options[letter]) + '</span>' +
          (tag ? '<span class="tag">' + tag + '</span>' : '') + '</div>';
      }).join('');

      return '<div class="review-item" data-k="' + k + '">' +
        '<button type="button" class="review-head">' +
        '<span class="status-dot ' + dotClass + '"></span>' +
        '<span class="review-head-body">' +
        '<span class="review-head-meta"><span class="chip">Q' + rec.num + '</span><span class="chip">' + escapeHtml(rec.topic) + '</span><span class="chip chip-diff" data-d="' + escapeHtml(rec.difficulty) + '">' + escapeHtml(rec.difficulty) + '</span></span>' +
        '<span class="review-head-q">' + escapeHtml(rec.question) + '</span>' +
        '</span>' +
        '<span class="review-caret">&#8250;</span>' +
        '</button>' +
        '<div class="review-body">' +
        '<div class="review-options">' + optsHtml + '</div>' +
        '<p class="review-solution"><b>Solution: </b>' + escapeHtml(rec.solution) + '</p>' +
        '</div></div>';
    }).join('');

    wrap.querySelectorAll('.review-head').forEach(function(btn){
      btn.addEventListener('click', function(){
        btn.parentElement.classList.toggle('open');
      });
    });
  }

  /* ---------------- 3D Venn hero (Three.js, progressive enhancement) ---------------- */
  function initVennHero(){
    var container = $('venn3d');
    if (!container || !window.Explain3D) return false;
    var viewer = window.Explain3D.createViewer(container, { fov: 38, camZ: 7, idleSpin: 0.18 });
    if (!viewer) return false;
    var geo = new THREE.SphereGeometry(1.55, 48, 48);
    var matA = new THREE.MeshPhongMaterial({ color: 0x2C4A9E, transparent: true, opacity: 0.72, shininess: 60 });
    var matB = new THREE.MeshPhongMaterial({ color: 0xC1443D, transparent: true, opacity: 0.72, shininess: 60 });
    var sphereA = new THREE.Mesh(geo, matA);
    var sphereB = new THREE.Mesh(geo, matB);
    sphereA.position.x = -0.95;
    sphereB.position.x = 0.95;
    viewer.group.add(sphereA, sphereB);
    return true;
  }

  /* ---------------- keyboard shortcuts ---------------- */
  document.addEventListener('keydown', function(e){
    if (!$('modal-backdrop').hidden) {
      if (e.key === 'Escape') $('modal-cancel').click();
      if (e.key === 'Enter') $('modal-confirm').click();
      return;
    }
    if ($('screen-test').hidden) return;
    var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

    if (key === 'ArrowRight' || key === 'n') { $('btn-next').click(); return; }
    if (key === 'ArrowLeft' || key === 'p') { $('btn-prev').click(); return; }
    if (key === 'm') { $('btn-mark').click(); return; }

    if (['1', '2', '3', '4'].indexOf(key) !== -1 || ['a', 'b', 'c', 'd'].indexOf(key) !== -1) {
      var letter = /** @type {("A"|"B"|"C"|"D")} */ (
        key >= '1' && key <= '4' ? LETTERS[parseInt(key, 10) - 1] : key.toUpperCase()
      );
      var btn = optionButton(letter);
      if (btn && !btn.disabled) btn.click();
    }
  });

  /* ---------------- downloadable report ---------------- */
  /**
   * @param {TestResults} r
   */
  function buildReportText(r){
    var meta = UNIT_META[r.unit] || UNIT_META[1];
    var lines = [];
    lines.push(meta.reportTitle);
    lines.push('Score: ' + r.correct + ' / ' + r.total + ' (' + Math.round((r.correct / r.total) * 100) + '%)');
    if (state.timed) lines.push('Time taken: ' + fmtTime(r.elapsedSec));
    lines.push('');
    lines.push('By difficulty');
    ['Easy', 'Moderate', 'Hard'].forEach(function(d){
      var b = r.byDiff[d];
      if (!b) return;
      lines.push('  ' + d + ': ' + b.correct + '/' + b.total);
    });
    lines.push('');
    lines.push('By topic');
    Object.keys(r.byTopic).forEach(function(t){
      var b = r.byTopic[t];
      lines.push('  ' + t + ': ' + b.correct + '/' + b.total);
    });
    lines.push('');
    lines.push('Question detail');
    r.records.forEach(function(rec){
      lines.push('');
      lines.push('Q' + rec.num + ' [' + rec.topic + ' / ' + rec.difficulty + '] - ' + rec.status.toUpperCase());
      lines.push(rec.question);
      lines.push('Your answer: ' + (rec.userAnswer || '(blank)') + '   Correct answer: ' + rec.answer);
      lines.push('Solution: ' + rec.solution);
    });
    return lines.join('\n');
  }

  function downloadReport(){
    if (!lastResults) return;
    var text = buildReportText(lastResults);
    var blob = new Blob([text], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'unit' + lastResults.unit + '-mock-test-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
  }

  /* ---------------- init ---------------- */
  applyUnitUI(1);
  showScreen('start');

  if (initVennHero()) {
    $('venn-fallback').style.display = 'none';
    $('venn3d').style.display = 'block';
    $('venn-hint').hidden = false;
  }
})();
