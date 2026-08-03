const sections = [
  {
    id: "parole",
    title: "Parole ed espressioni",
    cn: "词汇和固定搭配",
    note: "先选完本部分的 8 题，再统一提交。行政词汇只占少数；重点是对话中实用的搭配。",
    questions: [
      q("“填写表格”最自然的说法是？", ["inserire un modulo", "compilare un modulo", "cambiare un modulo"], 1, "compilare un modulo", "compilare 和 modulo 是固定搭配；inserire 通常搭配 dati。", "填写表格"),
      q("Quanto tempo ______ per arrivare al lavoro?", ["ci metti", "metti", "ci prendi"], 0, "metterci un sacco di tempo", "metterci + 时间 表示“花费时间”。也常说 metterci tanto / un sacco di tempo per + infinito。", "你到单位要花多长时间？"),
      q("Ho litigato ______ mia sorella.", ["di", "con", "a"], 1, "litigare con qualcuno", "litigare 后用介词 con，表示“和某人吵架”。", "我和姐姐／妹妹吵架了。"),
      q("办事时，对方请你“填写资料”，最合适的是：", ["inserire i dati", "essere di proprietà", "cambiare residenza"], 0, "inserire i dati", "inserire i dati 指把姓名、号码等资料录入表格或系统。", "填写／录入资料"),
      q("Il ristorante è al completo. 这句话表示：", ["餐厅已经客满", "餐厅很完整", "餐厅已经关门"], 0, "essere al completo", "al completo 在餐厅、酒店等语境表示没有空位了。", "餐厅已经客满。"),
      q("朋友看起来情绪低落，你可以说：", ["Mi sembri un po’ giù.", "Sei di proprietà.", "Sei appetitoso."], 0, "sembrare un po’ giù", "giù 在这里不是位置“下面”，而是情绪低落。", "你看起来有点低落。"),
      q("“我受够这件事了”最自然的表达是：", ["Mi fido di questa cosa.", "Sono stufo di questa cosa.", "Ho bisogno di questa cosa."], 1, "essere stufo / stufa", "essere stufo/a di 表示对某事厌烦、受够了。说话人是女性时用 stufa。", "我受够这件事了。"),
      q("想和伴侣留出二人时间，可以说：", ["Prendiamoci una serata solo per noi due.", "Inseriamo una serata nei dati.", "Cambiamo una serata di residenza."], 0, "prendersi una serata solo per noi due", "prendersi una serata 表示特意留出一个晚上；solo per noi due 强调二人独处。", "我们给彼此留一个只属于我们俩的晚上吧。")
    ]
  },
  {
    id: "tono",
    title: "Che tono ha?",
    cn: "理解语气和说话人的态度",
    note: "语气词没有唯一中文翻译。请结合说话情境判断态度。",
    questions: [
      q("Be’, Lei che cosa dice? 更接近哪种语气？", ["我不知道，请您告诉我。", "您觉得呢？这还看不出来吗？", "您刚才说了什么？"], 1, "Be’, Lei che cosa dice?", "这里的 Be’ 带有反问和一点不满：对方问她是 1951 还是 1975 年出生，她认为从外表应该看得出来。", "您觉得呢？这还看不出来吗？"),
      q("— Vieni sabato? — Mah… non lo so ancora. Mah… 表示：", ["爽快同意", "不确定、不好说", "非常生气"], 1, "Mah…", "Mah… 常表示拿不准、保留或“不好说”，不是肯定答复。", "这个嘛……我还不知道。"),
      q("— Perché non hai prenotato? — Ehm… 表现出说话人：", ["犹豫或尴尬，正在想怎么回答", "兴奋地宣布好消息", "坚定地拒绝"], 0, "Ehm…", "Ehm… 是犹豫声，常见于尴尬或需要想借口时。", "呃……／那个……"),
      q("— Abbiamo litigato e sono andata via di casa. — Addirittura! 这里是：", ["觉得情况比预想更严重", "礼貌地接受邀请", "表示完全没听清"], 0, "Addirittura!", "Addirittura! 强调事情竟然到了这种程度，带强烈惊讶。", "居然这么严重！"),
      q("— Per preparare la cena ci metto tre ore. — Ma dai! 这里最可能是：", ["不会吧，别夸张了！", "好的，我同意。", "我也需要三小时。"], 0, "Ma dai!", "结合“三小时”这个夸张说法，Ma dai! 表示不相信或“别夸张了”。", "不会吧！／得了吧，别夸张了！"),
      q("Insomma, per una volta che usciamo… 说话人的态度是：", ["不满又无奈：好不容易出来一次却不顺利", "纯粹介绍出门频率", "很开心地庆祝"], 0, "Insomma, per una volta che usciamo…", "Insomma! 在这里带不满；per una volta che… 是“好不容易……一次，结果却……”。这句确实来自原对话。", "真是的，好不容易我们出来一次……"),
      q("Ecco, lo sapevo! 最自然的理解是：", ["给你，我早就学过。", "你看吧，我就知道会这样！", "事情是这样的，我不知道。"], 1, "Ecco, lo sapevo!", "Ecco 在这里加强“你看吧／果然”的语气，lo sapevo 表示“我早就知道”。", "你看吧，我就知道会这样！")
    ]
  },
  {
    id: "reazioni",
    title: "Come reagisci?",
    cn: "作出自然、地道的反应",
    note: "这是练习重点。不要逐词翻译，选择在这段对话里最自然的即时反应。",
    questions: [
      q("— Ieri ho litigato con il mio ragazzo e sono andata a dormire da mia madre.\n— ______! Così grave?", ["Volentieri", "Addirittura", "D’accordo"], 1, "Addirittura!", "对方听到事情严重到离家过夜，用 Addirittura! 表示超出预想的惊讶。", "居然这么严重！"),
      q("— Ho una cosa da raccontarti.\n— ______, racconta!", ["Dai", "Basta", "Ehm"], 0, "Dai, racconta.", "Dai 在这里是鼓励对方继续说，不是“给”的意思。", "来，说说看。"),
      q("在平时不会来这里的人身后突然看到他，你最自然地问：", ["Che ci fai qui?", "Quanto ci metti qui?", "Sei al completo qui?"], 0, "Che ci fai qui?", "这是对意外出现的自然反应，语气比正式的 Perché sei qui? 更口语。", "你怎么会在这里？"),
      q("— Cos’è successo? — ______, non ne voglio parlare.", ["Volentieri", "Lascia stare", "Ah, sì?"], 1, "Lascia stare.", "不想继续谈某件烦心事时，Lascia stare 表示“别提了／算了”。", "别提了，我不想说。"),
      q("— Mi sembri un po’ giù. Va tutto bene?\n— Ho litigato con mia sorella.\n最自然的回应是：", ["Ti capisco. Dai, racconta.", "Ma sì, è così!", "Per questa volta!"], 0, "Ti capisco. Dai, racconta.", "先表示理解，再邀请对方倾诉，符合关心朋友的语境。", "我理解你。来，说说吧。"),
      q("— Vieni alla festa sabato?\n— ______, non lo so ancora.", ["Mah", "Basta", "Cosa"], 0, "Mah…", "尚未决定时用 Mah… 表示犹豫和不确定。", "这个嘛……我还不知道。"),
      q("你难得和伴侣出来吃饭，餐厅却没有位子。最贴切的是：", ["Insomma, per una volta che usciamo…", "Una volta tanto il tavolo è appetitoso.", "Ehm, sono di proprietà."], 0, "Per una volta che…", "原对话中的 per una volta che usciamo 表示“好不容易出来一次，结果却……”，带无奈和抱怨。", "真是的，好不容易我们出来一次……"),
      q("朋友把菜摆得特别漂亮，并说 Anche l’occhio vuole la sua parte. 意思是：", ["眼睛也想吃一份。", "外观也很重要，好吃也要好看。", "只看外表就够了。"], 1, "Anche l’occhio vuole la sua parte.", "这是一句常用说法：视觉享受也应得到满足，尤其适合谈食物摆盘。", "外观也很重要；不仅要好吃，也要好看。"),
      q("— Come hai fatto a ottenere proprio quel tavolo?\n— Secondo me ______ di Marco.", ["c’è lo zampino", "c’è il documento", "c’è un sacco di tempo"], 0, "c’è lo zampino di qualcuno", "怀疑某人暗中帮忙或安排时，用 c’è lo zampino di…；语气可中性或略带调侃。", "这里面肯定有马尔科的手笔。"),
      q("— Prometto che non guarderò più il telefono durante la cena.\n— Va bene, mi fido. ______!", ["Per questa volta", "Al completo", "Una volta tanto che"], 0, "Per questa volta.", "接受对方的保证，但强调“只限这一次”，用 Per questa volta. 最自然。", "好吧，我相信你。这次就算了。")
    ]
  }
];

function q(prompt, options, answer, expression, explanation, natural) {
  return { prompt, options, answer, expression, explanation, natural };
}

const state = {
  view: "home",
  sectionIndex: 0,
  answers: sections.map(s => Array(s.questions.length).fill(null)),
  initialSubmitted: sections.map(() => false),
  initialScores: sections.map(() => null),
  initialWrongCounts: sections.map(() => 0),
  mastered: sections.map(() => false),
  reviewQueue: sections.map(() => []),
  reviewFeedback: sections.map(() => ({})),
  mode: "initial"
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

function esc(text) {
  return String(text).replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]));
}

function renderHome() {
  state.view = "home";
  app.innerHTML = `
    <div class="shell">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">B1 · Modulo 1 · Ripasso guidato</p>
          <h1>Parla con<br>più sfumature.</h1>
          <p class="hero-lede">不只会说 sì、no、bene、davvero。用 25 道题复习对话里的实用表达，听懂语气，也学会更自然地回应。</p>
          <div class="hero-cta">
            <span class="cta-hint">Comincia da qui</span>
            <button class="btn btn-primary hero-start" data-action="start">Inizia il ripasso <span aria-hidden="true">→</span></button>
          </div>
        </div>
        <div class="hero-art" aria-label="意大利语反应词示意">
          <span class="bubble one">Ma dai!</span>
          <span class="bubble two">Mah…</span>
          <span class="bubble three">Ecco!</span>
        </div>
      </section>
      <section class="intro-grid" aria-label="练习的三个部分">
        ${sections.map((s, i) => `<article class="intro-card"><span class="intro-num">0${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.cn)} · ${s.questions.length} 题</p></article>`).join("")}
      </section>
    </div>`;
  scrollTopAndFocus();
}

function renderSection({ focusSelector = null, resetScroll = false } = {}) {
  state.view = "section";
  const si = state.sectionIndex;
  const section = sections[si];
  const isReview = state.mode === "review";
  const initialSubmitted = state.initialSubmitted[si];
  const mastered = state.mastered[si];
  const visibleIndices = isReview ? state.reviewQueue[si] : section.questions.map((_, i) => i);
  const answered = visibleIndices.filter(i => state.answers[si][i] !== null).length;
  const masteredCount = isReview ? section.questions.length - visibleIndices.length : answered;
  const pct = Math.round((masteredCount / section.questions.length) * 100);
  const statusCopy = isReview
    ? (mastered ? `已掌握 ${section.questions.length} / ${section.questions.length}` : `已掌握 ${masteredCount} / ${section.questions.length} · 待修改 ${visibleIndices.length}`)
    : (initialSubmitted ? `第一次作答 ${state.initialScores[si]} / ${section.questions.length}` : `已完成 ${answered} / ${section.questions.length}`);
  const note = isReview
    ? "这里只显示尚未掌握的错题。已答对的题目保持完成状态，不会再次出现。"
    : section.note;
  app.innerHTML = `
    <div class="shell">
      <header class="quiz-head">
        <div class="quiz-meta">
          <div><p class="part-kicker">Parte ${si + 1} di 3 · ${isReview ? "修改错题" : esc(section.cn)}</p><h1>${esc(section.title)}</h1></div>
          <span class="progress-copy">${statusCopy}</span>
        </div>
        <div class="progress-track" aria-label="本部分掌握进度"><div class="progress-fill" style="width:${initialSubmitted && !isReview ? 100 : pct}%"></div></div>
      </header>
      <div class="section-note"><span class="note-dot"></span><div><strong>${isReview ? "错题修改" : "答题提示"}</strong><br>${esc(note)}</div></div>
      ${mastered && isReview ? renderMasteryMessage() : `<section class="questions">${visibleIndices.map(qi => renderQuestion(section.questions[qi], qi, initialSubmitted && !isReview, isReview)).join("")}</section>`}
      ${renderSectionActions({ isReview, initialSubmitted, mastered })}
    </div>`;
  if (resetScroll) scrollTopAndFocus();
  else if (focusSelector) smoothScrollTo(focusSelector);
}

function renderSectionActions({ isReview, initialSubmitted, mastered }) {
  const si = state.sectionIndex;
  const nextLabel = si === sections.length - 1 ? "查看完整结果" : "进入下一部分";
  if (isReview && mastered) return `<div class="actions"><span></span><div class="actions-right"><button class="btn btn-dark" data-action="next">${nextLabel} →</button></div></div>`;
  if (isReview) return `<div class="actions"><span></span><div class="actions-right"><button class="btn btn-dark" data-action="submit-review">提交错题</button></div></div>`;
  if (!initialSubmitted) return `<div class="actions"><span></span><div class="actions-right"><button class="btn btn-dark" data-action="submit-initial">提交本部分</button></div></div>`;
  if (mastered) return `<div class="actions"><span></span><div class="actions-right"><button class="btn btn-dark" data-action="next">${nextLabel} →</button></div></div>`;
  return `<div class="actions"><button class="btn btn-secondary" data-action="start-review">修改错题</button></div>`;
}

function renderMasteryMessage() {
  return `<section class="mastery-message" role="status"><span class="mastery-icon" aria-hidden="true">✓</span><div><p class="eyebrow">Correzione completata</p><h2>太棒了，本部分的错题已经全部修改正确！</h2><p>第一次作答成绩会保留；现在你已经完成了本部分的最终掌握。</p></div></section>`;
}

function renderQuestion(question, qi, showInitialFeedback, isReview) {
  const si = state.sectionIndex;
  const selected = state.answers[si][qi];
  const correct = selected === question.answer;
  const priorWrongAnswer = isReview ? state.reviewFeedback[si][qi] : undefined;
  const feedbackAnswer = showInitialFeedback ? selected : priorWrongAnswer;
  const showFeedback = showInitialFeedback || priorWrongAnswer !== undefined;
  const feedbackCorrect = showInitialFeedback ? correct : false;
  const cardClass = showFeedback ? (feedbackCorrect ? "is-correct" : "is-wrong") : "";
  return `<article class="question-card ${cardClass}" id="q-${qi}">
    <p class="q-index">Domanda ${qi + 1} / ${sections[si].questions.length}</p>
    <h2 class="prompt ${question.prompt.includes("\n") ? "dialogue" : ""}">${esc(question.prompt).replace(/\n/g, "<br>")}</h2>
    <div class="options" role="radiogroup" aria-label="第 ${qi + 1} 题选项">
      ${question.options.map((option, oi) => {
        const classes = ["option"];
        if (!showInitialFeedback && selected === oi) classes.push("selected");
        if (showInitialFeedback && oi === question.answer) classes.push("correct-answer");
        if (showInitialFeedback && selected === oi && oi !== question.answer) classes.push("wrong-answer");
        return `<button class="${classes.join(" ")}" data-action="answer" data-question="${qi}" data-option="${oi}" role="radio" aria-checked="${selected === oi}" ${showInitialFeedback ? "disabled" : ""}><span class="answer-mark">${String.fromCharCode(65 + oi)}</span>${esc(option)}</button>`;
      }).join("")}
    </div>
    ${showFeedback ? renderFeedback(question, feedbackAnswer, feedbackCorrect) : ""}
  </article>`;
}

function renderFeedback(question, selected, correct) {
  const student = selected === null ? "未作答" : question.options[selected];
  return `<div class="feedback ${correct ? "ok" : "bad"}">
    <div class="feedback-title">${correct ? "✓ 回答正确" : "✕ 需要再看一下"}</div>
    <p><b>你的答案：</b>${esc(student)}</p>
    <p><b>正确答案：</b>${esc(question.options[question.answer])}</p>
    <p><b>解析：</b>${esc(question.explanation)}</p>
    <p><b>自然中文：</b>${esc(question.natural)}</p>
  </div>`;
}

function submitInitial() {
  const si = state.sectionIndex;
  const missing = state.answers[si].findIndex(a => a === null);
  if (missing !== -1) {
    showToast(`还有 ${state.answers[si].filter(a => a === null).length} 题未完成`);
    document.querySelector(`#q-${missing}`).scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const score = state.answers[si].reduce((n, answer, i) => n + Number(answer === sections[si].questions[i].answer), 0);
  state.initialSubmitted[si] = true;
  state.initialScores[si] = score;
  state.initialWrongCounts[si] = sections[si].questions.length - score;
  state.reviewQueue[si] = sections[si].questions.map((_, i) => i).filter(i => state.answers[si][i] !== sections[si].questions[i].answer);
  state.mastered[si] = state.reviewQueue[si].length === 0;
  renderSection({ focusSelector: state.mastered[si] ? '[data-action="next"]' : `#q-${state.reviewQueue[si][0]}` });
}

function startReview() {
  const si = state.sectionIndex;
  state.mode = "review";
  state.reviewQueue[si].forEach(i => { state.answers[si][i] = null; });
  state.reviewFeedback[si] = {};
  renderSection({ focusSelector: `#q-${state.reviewQueue[si][0]}` });
}

function submitReview() {
  const si = state.sectionIndex;
  const queue = state.reviewQueue[si];
  const missing = queue.filter(i => state.answers[si][i] === null);
  if (missing.length) {
    showToast(`还有 ${missing.length} 道错题未完成`);
    document.querySelector(`#q-${missing[0]}`).scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const remaining = [];
  const feedback = {};
  queue.forEach(i => {
    if (state.answers[si][i] !== sections[si].questions[i].answer) {
      remaining.push(i);
      feedback[i] = state.answers[si][i];
      state.answers[si][i] = null;
    }
  });
  state.reviewQueue[si] = remaining;
  state.reviewFeedback[si] = feedback;
  state.mastered[si] = remaining.length === 0;
  if (remaining.length) showToast(`本轮已改正 ${queue.length - remaining.length} 题，剩余 ${remaining.length} 题`);
  renderSection({ focusSelector: remaining.length ? `#q-${remaining[0]}` : '[data-action="next"]' });
}

function renderResults() {
  state.view = "results";
  const total = state.initialScores.reduce((sum, n) => sum + (n || 0), 0);
  const max = sections.reduce((sum, s) => sum + s.questions.length, 0);
  const corrected = state.initialWrongCounts.reduce((sum, n) => sum + n, 0);
  const rate = Math.round((total / max) * 100);
  app.innerHTML = `<div class="shell">
    <section class="score-hero">
      <div class="score-top"><div><p class="eyebrow">Ripasso completato · Modulo 1</p><h1>🎉 恭喜你完成了本次复习！</h1><p>你已经完成了 B1 Modulo 1 中关于情绪表达、固定搭配和地道反应的复习。</p></div><div class="score-ring"><div><strong>${rate}%</strong><small>第一次正确率</small></div></div></div>
    </section>
    <section class="completion-stats" aria-label="总体完成情况">
      <article><span>总题数</span><strong>${max}</strong></article>
      <article><span>第一次答对</span><strong>${total} / ${max}</strong></article>
      <article><span>修改错题</span><strong>${corrected} 道</strong></article>
      <article class="mastered-stat"><span>最终状态</span><strong>✅ 全部掌握</strong></article>
    </section>
    <div class="final-status">✅ 所有错题都已经修改正确</div>
    <section class="breakdown" aria-label="分项成绩">
      ${sections.map((s, i) => `<article class="score-card"><span class="score-label">第一次作答</span><span class="n">${state.initialScores[i]} / ${s.questions.length}</span><h3>${esc(i === 1 ? "Capire il tono" : i === 2 ? "Reagire in modo naturale" : s.title)}</h3><p>${esc(s.cn)}</p><span class="mini-mastered">✓ 最终全部完成</span></article>`).join("")}
    </section>
    <section class="summary-section">
      <div class="summary-heading"><p class="part-kicker">Che cosa hai ripassato?</p><h2>本次复习总结</h2></div>
      <div class="summary-grid">
        ${renderSummaryCard("01", "Parole ed espressioni", "词汇和固定搭配", [
          ["compilare un modulo", "填写表格"], ["inserire i dati", "录入资料"], ["litigare con qualcuno", "和某人吵架"], ["sembrare un po’ giù", "看起来有点低落"], ["essere stufo / stufa", "受够了"], ["metterci tanto / un sacco di tempo", "花很长时间"], ["essere al completo", "客满"], ["prendersi una serata solo per noi due", "留一个只属于两人的晚上"]
        ])}
        ${renderToneSummary()}
        ${renderSummaryCard("03", "Reagire in modo naturale", "地道反应", [
          ["Che ci fai qui?", "你怎么会在这里？"], ["Lascia stare.", "算了，别提了。"], ["Dai, racconta.", "来，说说看。"], ["Ti capisco.", "我理解你。"], ["Per una volta che…", "好不容易……一次，结果却……"], ["Per questa volta!", "这次就算了。"], ["C’è lo zampino di qualcuno.", "这里面有某人的手笔。"], ["Anche l’occhio vuole la sua parte.", "外观也很重要。"], ["Ecco, lo sapevo!", "你看吧，我就知道会这样！"]
        ])}
      </div>
    </section>
    <section class="encouragement"><span aria-hidden="true">✦</span><div><h2>Ottimo lavoro!</h2><p>现在你不仅能够理解这些词汇和表达，也能更准确地判断说话人的语气，并在真实聊天中作出更自然的反应。</p><p><strong>Non basta capire le parole: è importante capire anche il tono.</strong><br>只理解单词还不够，理解说话人的语气也很重要。</p></div></section>
    <div class="actions result-actions"><button class="btn btn-dark" data-action="restart-all">重新复习全部内容</button><button class="btn btn-secondary" data-action="home">返回首页</button></div>
  </div>`;
  scrollTopAndFocus();
}

function renderSummaryCard(num, title, cn, items) {
  return `<article class="summary-card"><span class="summary-num">${num}</span><h3>${esc(title)}</h3><p class="summary-cn">${esc(cn)}</p><ul>${items.map(([it, meaning]) => `<li><strong>${esc(it)}</strong><span>${esc(meaning)}</span></li>`).join("")}</ul></article>`;
}

function renderToneSummary() {
  const items = [
    ["Be’…", "这个嘛……；也可带反问和不满。"], ["Mah…", "不确定、不好说。"], ["Ehm…", "犹豫、尴尬或正在想怎么回答。"], ["Ecco…", "就是……；事情是这样的……；你看吧／果然。"], ["Ma dai!", "不会吧；真的假的；拜托；别夸张了。"], ["Addirittura!", "比预想更严重、夸张或出乎意料。"], ["Insomma!", "表达不满、无奈或“真是的”。"]
  ];
  return renderSummaryCard("02", "Capire il tono", "理解语气", items);
}

function next() {
  if (!state.mastered[state.sectionIndex]) return showToast("请先完成本部分的错题修改");
  if (state.sectionIndex === sections.length - 1) return renderResults();
  state.sectionIndex += 1;
  state.mode = "initial";
  renderSection({ resetScroll: true });
}

function resetState() {
  state.sectionIndex = 0;
  state.answers = sections.map(s => Array(s.questions.length).fill(null));
  state.initialSubmitted = sections.map(() => false);
  state.initialScores = sections.map(() => null);
  state.initialWrongCounts = sections.map(() => 0);
  state.mastered = sections.map(() => false);
  state.reviewQueue = sections.map(() => []);
  state.reviewFeedback = sections.map(() => ({}));
  state.mode = "initial";
}

function restartAll() {
  if (!confirm("确定重新复习全部内容吗？本次答题记录将被清空。")) return;
  resetState();
  renderSection({ resetScroll: true });
}

function resume() {
  if (state.mastered.every(Boolean)) return renderResults();
  const pending = sections.findIndex((_, i) => !state.mastered[i]);
  state.sectionIndex = pending === -1 ? 0 : pending;
  state.mode = state.initialSubmitted[state.sectionIndex] ? "review" : "initial";
  renderSection({ resetScroll: true });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function scrollTopAndFocus() {
  window.scrollTo({ top: 0, behavior: "auto" });
  app.focus({ preventScroll: true });
}

function smoothScrollTo(selector) {
  const target = document.querySelector(selector);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
}

app.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "start") resume();
  if (action === "answer") {
    const qi = Number(target.dataset.question);
    state.answers[state.sectionIndex][qi] = Number(target.dataset.option);
    delete state.reviewFeedback[state.sectionIndex][qi];
    renderSection();
    smoothScrollTo(`#q-${target.dataset.question}`);
  }
  if (action === "submit-initial") submitInitial();
  if (action === "start-review") startReview();
  if (action === "submit-review") submitReview();
  if (action === "next") next();
  if (action === "restart-all") restartAll();
  if (action === "home") renderHome();
});

document.querySelector(".brand").addEventListener("click", event => {
  event.preventDefault();
  renderHome();
});

renderHome();
