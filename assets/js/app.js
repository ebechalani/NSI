/* =====================================================================
   app.js — navigation, rendu des thèmes, éditeur Python (Pyodide), QCM.
   ===================================================================== */

(function () {
  "use strict";

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
