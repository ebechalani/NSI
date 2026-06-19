/* =====================================================================
   app.js — navigation, rendu des thèmes, éditeur Python (Pyodide), QCM.
   ===================================================================== */

(function () {
  "use strict";

  // Ordre d'affichage = progression pédagogique (champ num de chaque thème)
  COURSES.sort((a, b) => a.num - b.num);

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  /* ---------------- Thème clair / sombre ---------------- */
  const THEME_KEY = "nsi-theme";
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    $("#themeToggle").textContent = t === "dark" ? "☀️" : "🌙";
  }
  applyTheme(localStorage.getItem(THEME_KEY) || "light");
  $("#themeToggle").addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  /* ---------------- Menu mobile ---------------- */
  const sidebar = $("#sidebar");
  const overlay = $("#overlay");
  function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.add("hidden");
  }
  $("#menuToggle").addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("hidden");
  });
  overlay.addEventListener("click", closeMenu);

  /* ---------------- Progression (localStorage) ---------------- */
  const PROG_KEY = "nsi-progression";
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROG_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    localStorage.setItem(PROG_KEY, JSON.stringify(p));
  }
  let progress = loadProgress(); // { themeId: {score, total} }

  function updateGlobalProgress() {
    let acquis = 0;
    let totalThemes = COURSES.length;
    COURSES.forEach((c) => {
      const p = progress[c.id];
      if (p && p.total > 0 && p.score === p.total) acquis++;
    });
    const pct = Math.round((acquis / totalThemes) * 100);
    $("#globalProgress").style.width = pct + "%";
    $("#globalProgressLabel").textContent = pct + " %";
  }

  /* ---------------- Construction du sommaire ---------------- */
  const navList = $("#navList");
  function buildNav() {
    navList.innerHTML = "";
    const home = el("li");
    const homeLink = el(
      "a",
      "nav-link",
      `<span class="nav-num">⌂</span><span class="nav-text">Accueil</span>`
    );
    homeLink.dataset.target = "home";
    home.appendChild(homeLink);
    navList.appendChild(home);

    COURSES.forEach((c) => {
      const li = el("li");
      const done = progress[c.id] && progress[c.id].total > 0 &&
        progress[c.id].score === progress[c.id].total;
      const link = el(
        "a",
        "nav-link",
        `<span class="nav-num">${c.num}</span>` +
          `<span class="nav-emoji">${c.emoji}</span>` +
          `<span class="nav-text">${c.title}</span>` +
          (done ? `<span class="nav-check">✓</span>` : ``)
      );
      link.dataset.target = c.id;
      li.appendChild(link);
      navList.appendChild(li);
    });

    navList.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigate(link.dataset.target);
        closeMenu();
      });
    });
  }

  function setActiveNav(target) {
    navList.querySelectorAll(".nav-link").forEach((l) => {
      l.classList.toggle("active", l.dataset.target === target);
    });
  }

  /* ---------------- Vue Accueil ---------------- */
  const viewHome = $("#view-home");
  const viewTheme = $("#view-theme");

  function renderHome() {
    viewHome.innerHTML = "";
    const hero = el("div", "hero");
    hero.innerHTML = `
      <div class="hero-badges">
        <span class="badge">🎓 Première NSI</span>
        <span class="badge">📘 Programme officiel (BO)</span>
        <span class="badge">🐍 Python exécutable</span>
        <span class="badge">✅ ${COURSES.length} thèmes • QCM</span>
      </div>
      <h1>Apprendre la NSI, en pratiquant</h1>
      <p class="lead">Cours interactif de spécialité <strong>Numérique et Sciences Informatiques</strong>
      pour la classe de Première. Lis le cours, exécute du vrai code Python directement
      dans ton navigateur, puis valide tes connaissances avec les QCM.</p>
    `;
    viewHome.appendChild(hero);

    const info = el(
      "div",
      "info-callout",
      `💡 <strong>Comment l'utiliser ?</strong> Choisis un thème ci-dessous. Dans chaque cours,
       clique sur <strong>▶ Exécuter</strong> pour lancer le code Python (modifie-le, expérimente !),
       puis réponds au QCM en bas de page. Ta progression est enregistrée dans ce navigateur.`
    );
    viewHome.appendChild(info);

    const grid = el("div", "card-grid");
    COURSES.forEach((c) => {
      const nbQ = (QUIZZES[c.id] || []).length;
      const card = el("button", "theme-card");
      card.innerHTML = `
        <div class="tc-top">
          <span class="tc-emoji">${c.emoji}</span>
          <span class="tc-num">Thème ${c.num}</span>
        </div>
        <h3>${c.title}</h3>
        <p>${c.intro}</p>
        <div class="tc-foot"><span>${c.sections.length} parties</span><span>${nbQ} questions →</span></div>
      `;
      card.addEventListener("click", () => navigate(c.id));
      grid.appendChild(card);
    });
    viewHome.appendChild(grid);

    const note = el(
      "div",
      "sidebar-foot",
      `<p style="margin-top:2rem">Contenu rédigé d'après le <strong>programme officiel de Première NSI</strong>
       (Bulletin officiel). Ce site est un support pédagogique indépendant et ne reproduit aucun manuel.</p>`
    );
    viewHome.appendChild(note);
  }

  /* ---------------- Vue Thème ---------------- */
  function renderTheme(c) {
    viewTheme.innerHTML = "";

    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(
      el(
        "h1",
        null,
        `<span class="th-emoji">${c.emoji}</span> Thème ${c.num} — ${c.title}`
      )
    );
    header.appendChild(el("p", "theme-intro", c.intro));
    viewTheme.appendChild(header);

    // Capacités attendues (BO)
    const cap = el("div", "capacites");
    cap.innerHTML =
      `<h4>🎯 Capacités attendues (programme officiel)</h4><ul>` +
      c.capacites.map((x) => `<li>${x}</li>`).join("") +
      `</ul>`;
    viewTheme.appendChild(cap);

    // Sections
    c.sections.forEach((s, i) => {
      const sec = el("div", "section");
      sec.appendChild(el("h2", null, `${i + 1}. ${s.title}`));
      if (s.html) sec.appendChild(el("div", null, s.html));
      if (s.code) sec.appendChild(makeCodeCell(s.code));
      if (s.game) sec.appendChild(makeGame(s.game));
      viewTheme.appendChild(sec);
    });

    // Quiz
    if (QUIZZES[c.id]) viewTheme.appendChild(makeQuiz(c.id));

    // Navigation précédent / suivant
    viewTheme.appendChild(makeThemeNav(c));

    viewTheme.scrollIntoView({ behavior: "instant", block: "start" });
    $("#contenu").scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function makeThemeNav(c) {
    const idx = COURSES.findIndex((x) => x.id === c.id);
    const prev = COURSES[idx - 1];
    const next = COURSES[idx + 1];
    const nav = el("div", "theme-nav");

    const bPrev = el("button");
    if (prev) {
      bPrev.innerHTML = `<span class="tn-label">← Précédent</span><span class="tn-title">${prev.emoji} ${prev.title}</span>`;
      bPrev.addEventListener("click", () => navigate(prev.id));
    } else {
      bPrev.disabled = true;
      bPrev.innerHTML = `<span class="tn-label">←</span><span class="tn-title">Début</span>`;
    }

    const bNext = el("button", "next");
    if (next) {
      bNext.innerHTML = `<span class="tn-label">Suivant →</span><span class="tn-title">${next.emoji} ${next.title}</span>`;
      bNext.addEventListener("click", () => navigate(next.id));
    } else {
      bNext.disabled = true;
      bNext.innerHTML = `<span class="tn-label">→</span><span class="tn-title">Fin du programme 🎉</span>`;
    }
    nav.appendChild(bPrev);
    nav.appendChild(bNext);
    return nav;
  }

  /* ---------------- Éditeur de code Python ---------------- */
  function makeCodeCell(code) {
    const cell = el("div", "code-cell");
    const bar = el("div", "code-toolbar");
    bar.innerHTML = `
      <span class="code-dot r"></span><span class="code-dot y"></span><span class="code-dot g"></span>
      <span class="code-title">python</span>
      <span class="spacer"></span>
    `;
    const btnReset = el("button", "btn-reset", "↺ Réinitialiser");
    const btnRun = el("button", "btn-run", "▶ Exécuter");
    bar.appendChild(btnReset);
    bar.appendChild(btnRun);

    const ta = el("textarea", "code-editor");
    ta.value = code;
    ta.spellcheck = false;
    ta.rows = Math.min(Math.max(code.split("\n").length, 3), 22);

    // Tabulation = 4 espaces
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = ta.selectionStart,
          en = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + "    " + ta.value.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 4;
      }
    });

    const out = el("div", "code-output empty");

    btnReset.addEventListener("click", () => {
      ta.value = code;
      out.className = "code-output empty";
      out.textContent = "";
    });

    btnRun.addEventListener("click", () => runPython(ta.value, out, btnRun));

    cell.appendChild(bar);
    cell.appendChild(ta);
    cell.appendChild(out);
    return cell;
  }

  /* ---------------- Pyodide (Python dans le navigateur) ---------------- */
  let pyodide = null;
  let pyodideLoading = null;

  function showPyStatus(text, spin) {
    let s = $("#pyStatus");
    if (!s) {
      s = el("div", "pyodide-status");
      s.id = "pyStatus";
      document.body.appendChild(s);
    }
    s.innerHTML = (spin ? `<span class="spinner"></span>` : "✅ ") + text;
    return s;
  }
  function hidePyStatus(delay = 1500) {
    const s = $("#pyStatus");
    if (s) setTimeout(() => s.remove(), delay);
  }

  function loadPyodideOnce() {
    if (pyodide) return Promise.resolve(pyodide);
    if (pyodideLoading) return pyodideLoading;

    showPyStatus("Chargement de Python… (première fois)", true);
    pyodideLoading = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
      script.onload = async () => {
        try {
          // eslint-disable-next-line no-undef
          pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
          });
          showPyStatus("Python prêt", false);
          hidePyStatus();
          resolve(pyodide);
        } catch (err) {
          reject(err);
        }
      };
      script.onerror = () =>
        reject(new Error("Impossible de charger Pyodide (vérifie ta connexion Internet)."));
      document.head.appendChild(script);
    });
    return pyodideLoading;
  }

  async function runPython(source, out, btn) {
    out.className = "code-output";
    out.innerHTML = `<span class="muted">Exécution…</span>`;
    btn.disabled = true;
    try {
      const py = await loadPyodideOnce();
      // Redirige la sortie standard et les erreurs
      py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);
      let errored = false;
      try {
        await py.runPythonAsync(source);
      } catch (e) {
        errored = true;
        const text = py.runPython("sys.stdout.getvalue()");
        const errMsg = cleanTraceback(String(e.message || e));
        out.innerHTML =
          (text ? escapeHtml(text) : "") +
          `<span class="err">${escapeHtml(errMsg)}</span>`;
      }
      if (!errored) {
        const text = py.runPython("sys.stdout.getvalue()");
        const err = py.runPython("sys.stderr.getvalue()");
        if (text || err) {
          out.innerHTML =
            escapeHtml(text) +
            (err ? `<span class="err">${escapeHtml(err)}</span>` : "");
        } else {
          out.innerHTML = `<span class="muted">(aucune sortie — utilise print(...) pour afficher un résultat)</span>`;
        }
      }
    } catch (err) {
      out.innerHTML = `<span class="err">${escapeHtml(err.message || String(err))}</span>`;
    } finally {
      btn.disabled = false;
    }
  }

  function cleanTraceback(msg) {
    // Ne garde que les lignes utiles du traceback Python
    const lines = msg.split("\n").filter((l) => l.trim().length);
    // On retire les premières lignes internes à Pyodide si présentes
    const idx = lines.findIndex((l) => l.includes('File "<exec>"') || l.includes("Traceback"));
    const kept = idx >= 0 ? lines.slice(idx) : lines;
    return kept.join("\n");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* ---------------- QCM ---------------- */
  function makeQuiz(themeId) {
    const questions = QUIZZES[themeId];
    const wrap = el("div", "quiz");
    wrap.appendChild(el("h2", null, "📝 Quiz — teste tes connaissances"));

    const answered = new Array(questions.length).fill(false);
    const correct = new Array(questions.length).fill(false);

    const scoreLine = el("div", "quiz-score", "");
    function refreshScore() {
      const nbRep = answered.filter(Boolean).length;
      const nbOk = correct.filter(Boolean).length;
      scoreLine.textContent = `Score : ${nbOk} / ${questions.length}` +
        (nbRep < questions.length ? `  (${nbRep} répondue${nbRep > 1 ? "s" : ""})` : "");
      if (nbRep === questions.length) {
        scoreLine.classList.add("done");
        if (nbOk === questions.length) {
          scoreLine.textContent += "  🎉 Thème validé !";
        }
        // sauvegarde
        progress[themeId] = { score: nbOk, total: questions.length };
        saveProgress(progress);
        buildNav();
        setActiveNav(themeId);
        updateGlobalProgress();
      }
    }

    questions.forEach((item, qi) => {
      const qbox = el("div", "quiz-item");
      qbox.appendChild(
        el("div", "quiz-q", `<span class="qn">Q${qi + 1}.</span>${item.q}`)
      );
      const choices = el("div", "quiz-choices");
      const name = `${themeId}-q${qi}`;
      const feedback = el("div", "quiz-feedback");

      item.choices.forEach((choiceText, ci) => {
        const lab = el("label", "choice");
        const input = el("input");
        input.type = "radio";
        input.name = name;
        input.value = ci;
        lab.appendChild(input);
        lab.appendChild(el("span", null, choiceText));
        choices.appendChild(lab);

        input.addEventListener("change", () => {
          if (answered[qi]) return;
          answered[qi] = true;
          const ok = ci === item.answer;
          correct[qi] = ok;

          // verrouille et colore
          choices.querySelectorAll(".choice").forEach((c, idx) => {
            c.classList.add("disabled");
            const radio = c.querySelector("input");
            radio.disabled = true;
            if (idx === item.answer) c.classList.add("correct");
            else if (idx === ci) c.classList.add("wrong");
          });

          feedback.classList.add("show", ok ? "good" : "bad");
          feedback.innerHTML =
            (ok ? "✅ Correct. " : "❌ Incorrect. ") + item.explain;
          refreshScore();
        });
      });

      qbox.appendChild(choices);
      qbox.appendChild(feedback);
      wrap.appendChild(qbox);
    });

    const actions = el("div", "quiz-actions");
    actions.appendChild(scoreLine);
    const reset = el("button", "btn secondary", "↺ Recommencer le quiz");
    reset.addEventListener("click", () => {
      delete progress[themeId];
      saveProgress(progress);
      const fresh = makeQuiz(themeId);
      wrap.replaceWith(fresh);
      buildNav();
      setActiveNav(themeId);
      updateGlobalProgress();
    });
    actions.appendChild(reset);
    wrap.appendChild(actions);

    refreshScore();
    return wrap;
  }

  /* ---------------- Jeu d'évasion (escape game) ---------------- */
  // Chaque jeu : un cadenas dont chaque chiffre est gardé par une énigme.
  const GAMES = {
    "histoire-escape": {
      kind: "escape",
      storageKey: "nsi-escape-histoire",
      code: "1989",
      finale:
        "🎉 <strong>1989</strong> — c'est l'année où Tim Berners-Lee invente le " +
        "<strong>World Wide Web</strong> au CERN ! La porte s'ouvre… tu t'es évadé(e). " +
        "Tu recroiseras le Web dans le thème « Interactions homme-machine sur le Web ».",
      enigmes: [
        {
          id: "pascal",
          digit: "1",
          machine: "La Pascaline",
          era: "1642 · Blaise Pascal",
          riddle:
            "Cette machine additionne avec des roues dentées. Quand une roue passe de 9 à 0, " +
            "elle pousse sa voisine : c'est la <em>retenue</em>. Combien font <strong>7 + 5</strong> ?",
          answers: ["12", "douze"],
          hint: "Compte normalement en base 10 ; la retenue, c'est juste « je pose 2 et je retiens 1 ».",
          fact: "À 19 ans, Pascal construit la Pascaline pour aider son père à calculer les impôts.",
        },
        {
          id: "jacquard",
          digit: "9",
          machine: "Le métier à tisser de Jacquard",
          era: "1801 · cartes perforées",
          riddle:
            "Une carte perforée code en binaire : un trou = <code>1</code>, pas de trou = <code>0</code>. " +
            "Décode la carte <strong>1001</strong> en nombre décimal.",
          answers: ["9", "neuf"],
          hint: "1001 = 1×8 + 0×4 + 0×2 + 1×1.",
          fact: "Les cartes perforées de Jacquard inspireront Babbage, puis les premiers ordinateurs.",
        },
        {
          id: "turing",
          digit: "8",
          machine: "La machine de Turing",
          era: "1936 · Alan Turing",
          riddle:
            "Message codé ! Décale chaque lettre d'un cran <em>en arrière</em> dans l'alphabet " +
            "(B→A, C→B…). Décode le nom : <strong>UVSJOH</strong>.",
          answers: ["turing"],
          hint: "U→T, V→U, S→R… c'est le savant qui contribua à casser le code Enigma.",
          fact: "En 1936, Turing définit ce qu'une machine peut calculer ; en 1940, il aide à percer Enigma.",
        },
        {
          id: "web",
          digit: "9",
          machine: "Le serveur du CERN",
          era: "1989 · Tim Berners-Lee",
          riddle:
            "La toute première page web est servie ici. Le langage des pages est l'HTML. " +
            "Combien de lettres compte le sigle <strong>HTML</strong> ?",
          answers: ["4", "quatre"],
          hint: "H — T — M — L.",
          fact: "En 1989, au CERN, Tim Berners-Lee propose le Web : HTML, HTTP et les URL.",
        },
      ],
    },

    "histoire-frise": {
      kind: "timeline",
      bestKey: "nsi-frise-histoire-best",
      // 18 événements clés, du plus ancien au plus récent.
      // L'indice (clue) ne donne JAMAIS l'année : c'est aux élèves de raisonner.
      events: [
        { year: 820, icon: "📜", title: "Le mot « algorithme »", clue: "Un savant perse, Al-Khwârizmî, rédige un traité de calcul ; son nom latinisé donnera le mot « algorithme »." },
        { year: 1642, icon: "🧮", title: "La Pascaline", clue: "Blaise Pascal construit une machine à additionner à roues dentées pour aider son père." },
        { year: 1703, icon: "🔢", title: "L'arithmétique binaire", clue: "Leibniz publie le calcul en base 2 (uniquement des 0 et des 1)." },
        { year: 1801, icon: "🧵", title: "Le métier Jacquard", clue: "Un métier à tisser est piloté par des cartes perforées : première « machine programmée »." },
        { year: 1843, icon: "👩‍💻", title: "Le premier algorithme (Ada Lovelace)", clue: "Ada Lovelace écrit un programme destiné à la machine analytique de Babbage." },
        { year: 1854, icon: "🔣", title: "L'algèbre de Boole", clue: "George Boole formalise une algèbre du vrai/faux (et, ou, non)." },
        { year: 1936, icon: "🧠", title: "La machine de Turing", clue: "Alan Turing décrit une machine abstraite qui définit ce qu'est « calculer »." },
        { year: 1945, icon: "🖥️", title: "ENIAC & von Neumann", clue: "Un énorme calculateur électronique ; von Neumann formalise le « programme enregistré »." },
        { year: 1947, icon: "🔌", title: "Le transistor", clue: "Aux Bell Labs, un minuscule composant remplace les encombrants tubes à vide." },
        { year: 1958, icon: "🪙", title: "Le circuit intégré", clue: "De nombreux transistors sont gravés ensemble sur une même puce de silicium." },
        { year: 1969, icon: "🌐", title: "ARPANET", clue: "Le réseau ancêtre d'Internet relie ses tout premiers ordinateurs." },
        { year: 1971, icon: "🔳", title: "Le microprocesseur (Intel 4004)", clue: "Tout un processeur tient désormais sur une seule puce." },
        { year: 1977, icon: "💻", title: "L'ordinateur personnel", clue: "L'Apple II popularise l'ordinateur individuel à la maison." },
        { year: 1983, icon: "📡", title: "Internet (TCP/IP)", clue: "Le réseau adopte les protocoles TCP/IP : Internet tel qu'on le connaît démarre." },
        { year: 1989, icon: "🕸️", title: "Le World Wide Web", clue: "Tim Berners-Lee invente le Web au CERN (HTML, HTTP, URL)." },
        { year: 1991, icon: "🐧", title: "Le noyau Linux", clue: "Linus Torvalds publie un système d'exploitation libre et gratuit." },
        { year: 2007, icon: "📱", title: "Le smartphone", clue: "L'iPhone rend l'informatique mobile, tactile et grand public." },
        { year: 2012, icon: "🤖", title: "L'essor de l'IA", clue: "L'apprentissage profond fait bondir la reconnaissance d'images : l'IA moderne décolle." },
      ],
    },
  };

  function makeGame(type) {
    const cfg = GAMES[type];
    if (!cfg) return el("div", "escape");
    if (cfg.kind === "timeline") return buildTimeline(cfg, type);
    return buildEscape(cfg, type);
  }

  function buildEscape(cfg, type) {
    const wrap = el("div", "escape");

    const norm = (s) =>
      String(s)
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, "");

    // État persistant (énigmes résolues + évasion finale)
    let solved = {};
    try {
      solved = JSON.parse(localStorage.getItem(cfg.storageKey)) || {};
    } catch (e) {
      solved = {};
    }
    const save = () =>
      localStorage.setItem(cfg.storageKey, JSON.stringify(solved));

    // Affichage du cadenas (un emplacement par énigme)
    const top = el("div", "esc-top");
    const lock = el("div", "esc-lock");
    const slots = cfg.enigmes.map(() => el("div", "esc-slot", "?"));
    slots.forEach((s) => lock.appendChild(s));
    const counter = el("div", "esc-counter", "");
    top.appendChild(lock);
    top.appendChild(counter);
    wrap.appendChild(top);

    // La porte finale (cadenas à composer), masquée tant que tout n'est pas résolu
    const door = el("div", "esc-door hidden");
    door.innerHTML =
      `<h3>🚪 La porte verrouillée</h3>` +
      `<p>Tu as récupéré les 4 chiffres. Compose le code et évade-toi !</p>`;
    const dform = el("div", "esc-form");
    const dinput = el("input", "esc-input esc-code-input");
    dinput.type = "text";
    dinput.maxLength = cfg.code.length;
    dinput.inputMode = "numeric";
    dinput.placeholder = "••••";
    dinput.setAttribute("aria-label", "Code du cadenas");
    const dbtn = el("button", "btn esc-open", "🔓 Ouvrir la porte");
    dform.appendChild(dinput);
    dform.appendChild(dbtn);
    const dfeedback = el("div", "esc-feedback");
    door.appendChild(dform);
    door.appendChild(dfeedback);

    function escape() {
      solved.__escaped = true;
      save();
      wrap.classList.add("escaped");
      dfeedback.className = "esc-feedback good show";
      dfeedback.innerHTML = cfg.finale;
      dinput.disabled = true;
      dbtn.disabled = true;
    }
    function tryOpen() {
      if (solved.__escaped) return;
      if (norm(dinput.value) === norm(cfg.code)) {
        escape();
      } else {
        door.classList.add("shake");
        setTimeout(() => door.classList.remove("shake"), 450);
        dfeedback.className = "esc-feedback bad show";
        dfeedback.textContent =
          "❌ Code refusé. Relis les chiffres récupérés ci-dessus.";
      }
    }
    dbtn.addEventListener("click", tryOpen);
    dinput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") tryOpen();
    });

    function refresh() {
      cfg.enigmes.forEach((en, i) => {
        const done = !!solved[en.id];
        slots[i].textContent = done ? en.digit : "?";
        slots[i].classList.toggle("filled", done);
      });
      const nb = cfg.enigmes.filter((en) => solved[en.id]).length;
      counter.textContent = `${nb} / ${cfg.enigmes.length} machines déverrouillées`;
      const all = nb === cfg.enigmes.length;
      door.classList.toggle("hidden", !all);
      if (all && solved.__escaped) {
        wrap.classList.add("escaped");
        dfeedback.className = "esc-feedback good show";
        dfeedback.innerHTML = cfg.finale;
        dinput.disabled = true;
        dbtn.disabled = true;
      }
    }

    // Une carte par énigme
    const grid = el("div", "esc-grid");
    cfg.enigmes.forEach((en) => {
      const card = el("div", "esc-card");
      card.innerHTML =
        `<div class="esc-card-head">` +
        `<span class="esc-machine">${en.machine}</span>` +
        `<span class="esc-era">${en.era}</span></div>` +
        `<div class="esc-riddle">${en.riddle}</div>`;

      const form = el("div", "esc-form");
      const input = el("input", "esc-input");
      input.type = "text";
      input.placeholder = "Ta réponse…";
      input.setAttribute("aria-label", "Réponse pour " + en.machine);
      const btn = el("button", "btn esc-validate", "Valider");
      form.appendChild(input);
      form.appendChild(btn);

      const hintBtn = el("button", "esc-hint-btn", "💡 Indice");
      const hint = el("div", "esc-hint hidden", en.hint);
      hintBtn.addEventListener("click", () => hint.classList.toggle("hidden"));

      const feedback = el("div", "esc-feedback");
      const fact = el(
        "div",
        "esc-fact hidden",
        `🔑 Chiffre obtenu : <strong>${en.digit}</strong> — <em>${en.fact}</em>`
      );

      function markSolved() {
        card.classList.add("solved");
        input.disabled = true;
        btn.disabled = true;
        fact.classList.remove("hidden");
      }
      function check() {
        if (solved[en.id]) return;
        const val = norm(input.value);
        if (!val) return;
        if (en.answers.some((a) => norm(a) === val)) {
          solved[en.id] = true;
          save();
          markSolved();
          feedback.className = "esc-feedback good show";
          feedback.textContent = "✅ Bravo ! La machine libère son chiffre.";
          refresh();
        } else {
          card.classList.add("shake");
          setTimeout(() => card.classList.remove("shake"), 450);
          feedback.className = "esc-feedback bad show";
          feedback.textContent =
            "❌ Ce n'est pas ça… réessaie ou demande un indice.";
        }
      }
      btn.addEventListener("click", check);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") check();
      });

      if (solved[en.id]) markSolved();

      card.appendChild(form);
      card.appendChild(hintBtn);
      card.appendChild(hint);
      card.appendChild(feedback);
      card.appendChild(fact);
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    wrap.appendChild(door);

    const reset = el("button", "btn secondary esc-reset", "↺ Recommencer le jeu");
    reset.addEventListener("click", () => {
      localStorage.removeItem(cfg.storageKey);
      wrap.replaceWith(makeGame(type));
    });
    wrap.appendChild(reset);

    refresh();
    return wrap;
  }

  /* ---------------- Jeu de tri chronologique (« la frise à reconstituer ») ---------------- */
  function buildTimeline(cfg, type) {
    const wrap = el("div", "frise");
    const events = cfg.events;
    const N = events.length;

    wrap.appendChild(
      el(
        "div",
        "frise-rules",
        `🃏 <strong>Règle du jeu.</strong> Chaque carte décrit un événement de l'histoire de l'informatique, ` +
          `<strong>sans sa date</strong>. À vous de les classer de la <strong>plus ancienne</strong> (en haut) à la ` +
          `<strong>plus récente</strong> (en bas), en discutant des indices. Déplacez les cartes par ` +
          `<em>glisser-déposer</em> ou avec les flèches ▲▼, puis cliquez sur <strong>Vérifier</strong>.`
      )
    );

    const toolbar = el("div", "frise-toolbar");
    const bShuffle = el("button", "btn secondary", "🔀 Mélanger");
    const bCheck = el("button", "btn", "✅ Vérifier la frise");
    const bPrint = el("button", "btn secondary", "🖨️ Imprimer les cartes");
    toolbar.appendChild(bShuffle);
    toolbar.appendChild(bCheck);
    toolbar.appendChild(bPrint);
    wrap.appendChild(toolbar);

    const board = el("div", "frise-board");
    wrap.appendChild(board);

    const result = el("div", "frise-result");
    wrap.appendChild(result);

    function clearMarks() {
      board.querySelectorAll(".frise-card").forEach((c) => {
        c.classList.remove("good", "bad", "revealed");
        c.querySelector(".fc-year").textContent = "";
      });
      result.className = "frise-result";
      result.textContent = "";
    }

    function getDragAfter(y) {
      const els = [...board.querySelectorAll(".frise-card:not(.dragging)")];
      let closest = { offset: -Infinity, element: null };
      for (const child of els) {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset)
          closest = { offset, element: child };
      }
      return closest.element;
    }

    board.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = board.querySelector(".dragging");
      if (!dragging) return;
      const after = getDragAfter(e.clientY);
      if (after == null) board.appendChild(dragging);
      else board.insertBefore(dragging, after);
    });

    function makeCard(ev) {
      const card = el("div", "frise-card");
      card.draggable = true;
      card.dataset.year = ev.year;
      card.innerHTML =
        `<span class="fc-handle" title="Glisser pour déplacer">⠿</span>` +
        `<span class="fc-icon">${ev.icon}</span>` +
        `<span class="fc-body"><span class="fc-title">${ev.title}</span>` +
        `<span class="fc-clue">${ev.clue}</span></span>` +
        `<span class="fc-year"></span>` +
        `<span class="fc-moves">` +
        `<button class="fc-up" aria-label="Monter cette carte">▲</button>` +
        `<button class="fc-down" aria-label="Descendre cette carte">▼</button></span>`;

      card.querySelector(".fc-up").addEventListener("click", () => {
        const prev = card.previousElementSibling;
        if (prev) board.insertBefore(card, prev);
        clearMarks();
      });
      card.querySelector(".fc-down").addEventListener("click", () => {
        const next = card.nextElementSibling;
        if (next) board.insertBefore(next, card);
        clearMarks();
      });
      card.addEventListener("dragstart", () => {
        card.classList.add("dragging");
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
        clearMarks();
      });
      return card;
    }

    function shuffle() {
      const arr = [...events];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      board.innerHTML = "";
      arr.forEach((ev) => board.appendChild(makeCard(ev)));
      clearMarks();
    }

    function verify() {
      const order = [...board.querySelectorAll(".frise-card")];
      const sorted = [...order].sort(
        (a, b) => Number(a.dataset.year) - Number(b.dataset.year)
      );
      let wellPlaced = 0;
      order.forEach((card, i) => {
        const ok = card === sorted[i];
        card.classList.add("revealed");
        card.classList.toggle("good", ok);
        card.classList.toggle("bad", !ok);
        card.querySelector(".fc-year").textContent = card.dataset.year;
        if (ok) wellPlaced++;
      });
      let pairs = 0;
      for (let i = 0; i < order.length - 1; i++) {
        if (Number(order[i].dataset.year) <= Number(order[i + 1].dataset.year))
          pairs++;
      }
      const perfect = wellPlaced === N;
      result.className = "frise-result show " + (perfect ? "good" : "partial");
      result.innerHTML =
        `<strong>${wellPlaced} / ${N}</strong> cartes à la bonne place · ` +
        `<strong>${pairs} / ${N - 1}</strong> paires dans le bon ordre` +
        (perfect ? " — 🎉 Frise parfaite, bravo !" : " — réajustez les cartes rouges et revérifiez.");

      // Meilleur score (par groupe / par poste)
      if (cfg.bestKey) {
        const prev = Number(localStorage.getItem(cfg.bestKey) || 0);
        if (wellPlaced > prev) {
          localStorage.setItem(cfg.bestKey, String(wellPlaced));
          if (!perfect) result.innerHTML += ` <em>(nouveau record : ${wellPlaced})</em>`;
        }
      }
    }

    function printCards() {
      const chrono = [...events].sort((a, b) => a.year - b.year);
      const recto = events
        .map(
          (ev) =>
            `<div class="pcard"><div class="pc-icon">${ev.icon}</div>` +
            `<div class="pc-title">${ev.title}</div>` +
            `<div class="pc-clue">${ev.clue}</div></div>`
        )
        .join("");
      const corrige = chrono
        .map(
          (ev) =>
            `<li><span class="pa-year">${ev.year}</span> ${ev.icon} <strong>${ev.title}</strong> — ${ev.clue}</li>`
        )
        .join("");
      const w = window.open("", "_blank");
      if (!w) {
        result.className = "frise-result show partial";
        result.textContent =
          "🖨️ Le navigateur a bloqué la fenêtre d'impression. Autorise les pop-ups pour ce site.";
        return;
      }
      w.document.write(
        `<!doctype html><html lang="fr"><head><meta charset="utf-8">` +
          `<title>Cartes — Histoire de l'informatique</title><style>` +
          `*{box-sizing:border-box;font-family:system-ui,Segoe UI,Roboto,sans-serif}` +
          `body{margin:1.5cm;color:#1f2733}` +
          `h1{font-size:18pt}h2{font-size:15pt;margin-top:1cm}` +
          `.intro{font-size:10pt;color:#444;margin-bottom:.6cm}` +
          `.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.4cm}` +
          `.pcard{border:2px solid #333;border-radius:10px;padding:.45cm;min-height:4.3cm;display:flex;flex-direction:column;gap:.15cm;page-break-inside:avoid}` +
          `.pc-icon{font-size:24pt}.pc-title{font-weight:700;font-size:12pt}` +
          `.pc-clue{font-size:10pt;color:#333}` +
          `ol{font-size:11pt;line-height:1.5}.pa-year{display:inline-block;min-width:1.6cm;font-weight:700}` +
          `.no-print{margin-bottom:.6cm}` +
          `@media print{.no-print{display:none}}` +
          `</style></head><body>` +
          `<button class="no-print" onclick="window.print()" style="padding:.4cm .8cm;font-size:12pt;cursor:pointer">🖨️ Imprimer</button>` +
          `<h1>Frise de l'histoire de l'informatique — cartes à découper</h1>` +
          `<p class="intro">Découpez les ${N} cartes, mélangez-les, puis classez-les en équipe de la plus ancienne à la plus récente. ` +
          `Vérifiez ensuite avec la frise corrigée (dernière page, à garder par l'enseignant).</p>` +
          `<div class="grid">${recto}</div>` +
          `<h2 style="page-break-before:always">Frise corrigée — ${N} événements</h2>` +
          `<ol>${corrige}</ol>` +
          `</body></html>`
      );
      w.document.close();
      w.focus();
    }

    bShuffle.addEventListener("click", shuffle);
    bCheck.addEventListener("click", verify);
    bPrint.addEventListener("click", printCards);

    shuffle(); // démarre mélangé
    return wrap;
  }

  /* ---------------- Routeur ---------------- */
  function navigate(target) {
    if (target === "home" || !target) {
      viewHome.classList.remove("hidden");
      viewTheme.classList.add("hidden");
      setActiveNav("home");
      renderHome();
      location.hash = "";
    } else {
      const c = COURSES.find((x) => x.id === target);
      if (!c) return navigate("home");
      viewHome.classList.add("hidden");
      viewTheme.classList.remove("hidden");
      setActiveNav(target);
      renderTheme(c);
      location.hash = target;
    }
    $("#contenu").focus({ preventScroll: true });
  }

  /* ---------------- Démarrage ---------------- */
  buildNav();
  updateGlobalProgress();
  const initial = location.hash.replace("#", "");
  navigate(initial && COURSES.find((c) => c.id === initial) ? initial : "home");

  window.addEventListener("hashchange", () => {
    const t = location.hash.replace("#", "");
    const current = viewTheme.classList.contains("hidden") ? "home" : "theme";
    // évite les boucles : ne renavigue que si nécessaire
    if (t && COURSES.find((c) => c.id === t)) {
      const active = navList.querySelector(".nav-link.active");
      if (!active || active.dataset.target !== t) navigate(t);
    } else if (!t && current !== "home") {
      navigate("home");
    }
  });
})();
