(function(){
  'use strict';

  // Elements
  const intro = document.getElementById('intro');
  const quiz = document.getElementById('quiz');
  const summary = document.getElementById('summary');
  const startBtn = document.getElementById('startBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const reviewToggle = document.getElementById('reviewToggle');
  const questionContainer = document.getElementById('questionContainer');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const scoreEl = document.getElementById('score');
  const finalScore = document.getElementById('finalScore');
  const reviewList = document.getElementById('reviewList');
  const restartBtn = document.getElementById('restartBtn');

  const STORAGE_KEY = 'ptik_quiz_state_v1';
  const TOTAL = Array.isArray(QUESTIONS) ? QUESTIONS.length : 0;
  const LETTERS = ['A','B','C','D','E','F'];

  // State
  let order = [...Array(TOTAL).keys()];
  let state = {
    index: 0,
    score: 0,
    answers: Array(TOTAL).fill(null), // {selected, correct, isCorrect}
    reviewMode: false
  };

  // Utilities
  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
  }

  function save(){
    try {
      const data = {order, state};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch(e){ /* ignore */ }
  }
  function load(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return null;
      const data = JSON.parse(raw);
      if(!data || !Array.isArray(data.order) || !data.state) return null;
      if(data.order.length !== TOTAL) return null;
      return data;
    } catch(e){ return null; }
  }
  function reset(){
    order = [...Array(TOTAL).keys()];
    state = { index: 0, score: 0, answers: Array(TOTAL).fill(null), reviewMode: false };
    save();
  }

  // Rendering
  function render(){
    // Progress
    const answeredCount = state.answers.filter(Boolean).length;
    const percent = Math.round((answeredCount / TOTAL) * 100);
    progressFill.style.insetInlineEnd = (100 - percent) + '%';
    progressText.textContent = `Soal ${state.index+1} / ${TOTAL}`;
    scoreEl.textContent = state.score;

    // Buttons
    prevBtn.disabled = state.index === 0;
    const currentAnswered = Boolean(state.answers[state.index]);
    nextBtn.disabled = !currentAnswered && state.index < TOTAL-1;
    reviewToggle.disabled = answeredCount === 0;
    reviewToggle.textContent = `Mode Tinjau: ${state.reviewMode ? 'ON' : 'OFF'}`;

    // Question
    const qIdx = order[state.index];
    const q = QUESTIONS[qIdx];
    questionContainer.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'question';

    const h3 = document.createElement('h3');
    h3.textContent = `${state.index+1}. ${q.question}`;
    wrapper.appendChild(h3);

    const list = document.createElement('div');
    list.className = 'choices';

    const answerObj = state.answers[state.index];

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.type = 'button';
      btn.setAttribute('data-idx', String(i));
      btn.innerHTML = `<span class="badge">${LETTERS[i]}</span><span>${opt}</span>`;

      if(answerObj){
        btn.classList.add('disabled');
        if(i === q.answer){ btn.classList.add('correct'); }
        if(i === answerObj.selected && !answerObj.isCorrect){ btn.classList.add('wrong'); }
      }

      btn.addEventListener('click', () => onSelect(i));
      list.appendChild(btn);
    });

    wrapper.appendChild(list);

    // Explanation
    const exp = document.createElement('div');
    exp.className = 'explanation';
    if(answerObj){
      if(answerObj.isCorrect){
        exp.innerHTML = `<strong>Benar!</strong> ${q.explanation}`;
      } else {
        const correctText = q.options[q.answer];
        exp.innerHTML = `<div class="koreksi"><strong>Salah.</strong> Koreksi: Jawaban yang benar adalah <em>${correctText}</em>.</div><div>${q.explanation}</div>`;
      }
    } else {
      exp.style.display = 'none';
    }
    wrapper.appendChild(exp);

    questionContainer.appendChild(wrapper);
  }

  function onSelect(i){
    const already = state.answers[state.index];
    if(already || state.reviewMode) return; // lock after answer or in review

    const q = QUESTIONS[order[state.index]];
    const isCorrect = i === q.answer;
    state.answers[state.index] = { selected: i, correct: q.answer, isCorrect };
    if(isCorrect) state.score += 1;

    save();
    render();

    // Auto-advance after a short delay except on last question
    if(state.index < TOTAL-1){
      nextBtn.disabled = false;
      setTimeout(() => { goNext(); }, 600);
    } else {
      // show summary after short pause
      setTimeout(() => { showSummary(); }, 700);
    }
  }

  function goPrev(){
    if(state.index > 0){
      state.index -= 1;
      save();
      render();
    }
  }
  function goNext(){
    if(state.index < TOTAL-1){
      state.index += 1;
      save();
      render();
    } else {
      showSummary();
    }
  }

  function showPanel(el){
    [intro, quiz, summary].forEach(p => p.classList.remove('active'));
    el.classList.add('active');
  }

  function start(){
    // Offer resume if saved
    const saved = load();
    if(saved){
      const resume = window.confirm('Lanjutkan sesi sebelumnya?');
      if(resume){
        order = saved.order;
        state = saved.state;
      } else {
        reset();
        // Shuffle new order for variety
        order = shuffle(order);
      }
    } else {
      reset();
      order = shuffle(order);
    }

    showPanel(quiz);
    render();
  }

  function showSummary(){
    showPanel(summary);
    const percent = Math.round((state.score / TOTAL) * 100);
    finalScore.textContent = `Skor Anda: ${state.score} dari ${TOTAL} (${percent}%)`;

    reviewList.innerHTML = '';
    for(let i=0;i<TOTAL;i++){
      const qIdx = order[i];
      const q = QUESTIONS[qIdx];
      const ans = state.answers[i];
      const item = document.createElement('div');
      item.className = 'review-item';
      const your = ans ? LETTERS[ans.selected] : '-';
      const corr = LETTERS[q.answer];
      const isCorrect = !!(ans && ans.isCorrect);
      item.innerHTML = `
        <h4>${i+1}. ${q.question}</h4>
        <div>
          <span class="your">Jawaban Anda: ${your}</span>
          <span class="correct">Kunci: ${corr}</span>
        </div>
        <div style="margin-top:6px">${isCorrect ? '<strong>Benar.</strong>' : '<strong>Salah.</strong>'} ${q.explanation}</div>
      `;
      reviewList.appendChild(item);
    }

    // Save final state
    save();
  }

  function restart(){
    if(!window.confirm('Mulai ulang dan hapus progres?')) return;
    localStorage.removeItem(STORAGE_KEY);
    reset();
    order = shuffle(order);
    showPanel(intro);
  }

  // Events
  startBtn.addEventListener('click', start);
  prevBtn.addEventListener('click', goPrev);
  nextBtn.addEventListener('click', goNext);
  reviewToggle.addEventListener('click', () => {
    state.reviewMode = !state.reviewMode;
    save();
    render();
  });
  restartBtn.addEventListener('click', restart);

})();
