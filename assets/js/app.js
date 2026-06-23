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

  /* ---------------- Mode professeur (corrigés) ---------------- */
  const TEACHER_KEY = "nsi-teacher";
  function applyTeacher(on) {
    document.body.classList.toggle("teacher-on", on);
    const btn = $("#teacherToggle");
    if (btn) {
      btn.classList.toggle("active", on);
      btn.title = on
        ? "Mode professeur ACTIVÉ — les corrigés sont visibles"
        : "Mode professeur (corrigés masqués)";
    }
  }
  applyTeacher(localStorage.getItem(TEACHER_KEY) === "1");
  $("#teacherToggle").addEventListener("click", () => {
    const on = !document.body.classList.contains("teacher-on");
    localStorage.setItem(TEACHER_KEY, on ? "1" : "0");
    applyTeacher(on);
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
  let progress = loadProgress(); // { themeId: {answered, correct, total} }  (QCM par thème)
  let exosDone = {}; // { "themeId:exo:i": true }  exercices travaillés (code exécuté / texte à trou)

  // Nombre d'« items » à faire dans un thème (questions de QCM + exercices avec activité).
  function themeItems(themeId) {
    const q = (QUIZZES[themeId] || []).length;
    let ex = 0;
    const X = typeof THEME_EXTRAS !== "undefined" ? THEME_EXTRAS[themeId] : null;
    if (X && X.exercices) ex = X.exercices.filter((e) => e.code || e.gapcode).length;
    return q + ex;
  }
  function themeExosDone(themeId) {
    let n = 0;
    Object.keys(exosDone).forEach((k) => { if (k.indexOf(themeId + ":exo:") === 0) n++; });
    return n;
  }
  // Statistiques d'un élève (utilisé côté prof) à partir de sa fiche {qcm, exos, activite}.
  function statsFrom(qcm, exos, activite) {
    qcm = qcm || {}; exos = exos || {}; activite = activite || {};
    let done = 0, tot = 0, ansSum = 0, corrSum = 0, validés = 0, qcmFaits = 0;
    COURSES.forEach((c) => {
      const qTot = (QUIZZES[c.id] || []).length;
      tot += themeItems(c.id);
      const q = qcm[c.id];
      const ans = qcmAnswered(q), corr = qcmCorrect(q), t = qcmTotal(q);
      let ex = 0;
      Object.keys(exos).forEach((k) => { if (k.indexOf(c.id + ":exo:") === 0) ex++; });
      done += Math.min(ans, qTot) + ex;
      ansSum += ans; corrSum += corr;
      if (ans > 0) qcmFaits++;
      if (t > 0 && ans === t && corr === t) validés++;
    });
    const act = Object.values(activite).reduce((a, b) => a + (b || 0), 0);
    return {
      progression: tot ? Math.round((done / tot) * 100) : 0,
      reussite: ansSum ? Math.round((corrSum / ansSum) * 100) : 0,
      themesValidés: validés,
      qcmFaits: qcmFaits,
      activites: act,
    };
  }
  // Marque/démarque un exercice comme fait → fait monter/descendre la complétion.
  function setExoDone(key, val) {
    if (val) exosDone[key] = true; else delete exosDone[key];
    // reflète l'état sur la case à cocher correspondante
    const cb = document.querySelector('.exo-done input[data-key="' + (window.CSS && CSS.escape ? CSS.escape(key) : key) + '"]');
    if (cb) cb.checked = !!val;
    if (!P.isStudent()) return;
    P.setExo(key, val);
    updateGlobalProgress();
    refreshThemeBars(currentThemeId);
  }
  function markExoDone(key) { setExoDone(key, true); }

  // Lecture tolérante (compatibilité avec l'ancien format {score, total}).
  function qcmTotal(p) { return p && p.total > 0 ? p.total : 0; }
  function qcmAnswered(p) {
    if (!p) return 0;
    if (p.answered != null) return p.answered;
    return p.score != null ? p.total || 0 : 0; // ancien format = QCM terminé
  }
  function qcmCorrect(p) {
    if (!p) return 0;
    if (p.correct != null) return p.correct;
    return p.score != null ? p.score : 0;
  }
  function themePct(p) { return qcmTotal(p) ? Math.round((qcmAnswered(p) / p.total) * 100) : 0; } // complétion
  function themeReussite(p) { return qcmAnswered(p) ? Math.round((qcmCorrect(p) / qcmAnswered(p)) * 100) : 0; }
  function themePerfait(p) { return qcmTotal(p) > 0 && qcmAnswered(p) === p.total && qcmCorrect(p) === p.total; }

  // Recharge la progression de l'élève connecté depuis la plateforme (Firestore),
  // pour que les barres, badges et ✓ du sommaire le suivent d'un poste à l'autre.
  function syncStudentProgress() {
    if (!P.isStudent()) return;
    const pp = P.getProgress(P.getSession().uid);
    progress = {};
    Object.keys(pp.qcm || {}).forEach((t) => { progress[t] = pp.qcm[t]; });
    exosDone = {};
    Object.keys(pp.exos || {}).forEach((k) => { if (pp.exos[k]) exosDone[k] = true; });
    saveProgress(progress);
  }

  // Activité de travail (code exécuté, texte à trou) — comptée pour le suivi prof
  // (le nombre d'actions), sans piloter la barre de progression.
  function noteActivity(themeId) {
    if (!P.isStudent() || !themeId) return;
    P.recordActivity(themeId);
  }

  function updateGlobalProgress() {
    // Progression globale = items faits (questions de QCM répondues + exercices
    // travaillés) sur le total du programme → 100 % quand tout est complété.
    let done = 0, tot = 0;
    COURSES.forEach((c) => {
      const qTot = (QUIZZES[c.id] || []).length;
      tot += themeItems(c.id);
      done += Math.min(qcmAnswered(progress[c.id]), qTot) + themeExosDone(c.id);
    });
    const pct = tot ? Math.round((done / tot) * 100) : 0;
    $("#globalProgress").style.width = pct + "%";
    $("#globalProgressLabel").textContent = pct + " %";
    $("#globalProgressLabel").title = done + " / " + tot + " activités faites";
  }

  // Barres « de ce thème » : complétion (QCM répondu) + taux de réussite.
  let themeBars = null;
  function makeThemeBars(themeId) {
    const wrap = el("div", "theme-bars");
    wrap.dataset.theme = themeId;
    wrap.innerHTML =
      `<div class="tb-title">📊 Ta progression sur ce thème</div>` +
      `<div class="tb-row"><span class="tb-label">Progression du thème</span>` +
      `<div class="tb-track"><span class="tb-fill prog"></span></div><span class="tb-pct prog">0 %</span></div>` +
      `<div class="tb-row"><span class="tb-label">Taux de réussite</span>` +
      `<div class="tb-track"><span class="tb-fill reuss"></span></div><span class="tb-pct reuss">0 %</span></div>`;
    themeBars = wrap;
    refreshThemeBars(themeId);
    return wrap;
  }
  function refreshThemeBars(themeId, ans, corr) {
    if (!themeBars || themeBars.dataset.theme !== themeId) return;
    const p = progress[themeId];
    const qTot = (QUIZZES[themeId] || []).length;
    ans = ans != null ? ans : qcmAnswered(p); // questions de QCM répondues
    corr = corr != null ? corr : qcmCorrect(p);
    // Complétion = (questions répondues + exercices faits) / (questions + exercices)
    const items = themeItems(themeId) || 1;
    const done = Math.min(ans, qTot) + themeExosDone(themeId);
    const prog = Math.round((done / items) * 100);
    const reuss = ans ? Math.round((corr / ans) * 100) : 0;
    themeBars.querySelector(".tb-fill.prog").style.width = prog + "%";
    themeBars.querySelector(".tb-pct.prog").textContent = prog + " %";
    themeBars.querySelector(".tb-fill.reuss").style.width = reuss + "%";
    themeBars.querySelector(".tb-pct.reuss").textContent = reuss + " %";
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
      const done = themePerfait(progress[c.id]);
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

    // Séparateur + rubriques transversales
    const sep = el("li", "nav-sep", "Activités & ressources");
    navList.appendChild(sep);

    const extraLinks = [
      { target: "classe", num: "🏫", emoji: "", text: "Ma classe", prof: true },
      { target: "profs", num: "👤", emoji: "", text: "Comptes profs", admin: true },
      { target: "projets", num: "🏝️", emoji: "", text: "Projets en îlots" },
      { target: "debranche", num: "🎲", emoji: "", text: "Activités débranchées" },
      { target: "glossaire", num: "📖", emoji: "", text: "Glossaire NSI" },
      { target: "methodes", num: "🧭", emoji: "", text: "Fiches méthode" },
      { target: "tp", num: "🧪", emoji: "", text: "TP guidés (DIU)" },
      { target: "progression", num: "🗓️", emoji: "", text: "Progression annuelle", prof: true },
      { target: "didactique", num: "📚", emoji: "", text: "Enseigner la NSI (prof)", prof: true },
      { target: "evaluations", num: "📝", emoji: "", text: "Évaluations (prof)", prof: true },
      { target: "bo", num: "✅", emoji: "", text: "Conformité au BO", prof: true },
    ];
    extraLinks
      .filter((x) => (!x.prof || P.isTeacher()) && (!x.admin || P.isAdmin()))
      .forEach((x) => {
      const li = el("li");
      const link = el(
        "a",
        "nav-link",
        `<span class="nav-num">${x.num}</span>` +
          `<span class="nav-text">${x.text}</span>`
      );
      link.dataset.target = x.target;
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

    // --- Rubriques transversales (projets, glossaire) ---
    viewHome.appendChild(el("h2", "home-h2", "🏝️ Activités & ressources"));
    const rgrid = el("div", "card-grid");
    const ressources = [
      {
        emoji: "🏫",
        tag: "espace prof",
        title: "Ma classe",
        desc: "Crée ta classe, ajoute tes élèves et suis leur progression et leurs capacités.",
        target: "classe",
        prof: true,
      },
      {
        emoji: "✅",
        tag: "8 thèmes BO",
        title: "Conformité au BO",
        desc: "Les 8 thèmes officiels de Première et les capacités attendues, avec où chacune est traitée.",
        target: "bo",
        prof: true,
      },
      {
        emoji: "🏝️",
        tag: `${PROJECTS.length} projets`,
        title: "Projets en îlots",
        desc: "Des missions à mener en équipe : réfléchir, écrire l'algorithme, coder, tester, présenter.",
        target: "projets",
      },
      {
        emoji: "🎲",
        tag: `${typeof DEBRANCHE !== "undefined" ? DEBRANCHE.length : 0} activités`,
        title: "Activités débranchées",
        desc: "Sans ordinateur, en îlot : binaire, tri, réseau, robot, dichotomie — prêtes à animer.",
        target: "debranche",
      },
      {
        emoji: "📖",
        tag: `${GLOSSARY.length} termes`,
        title: "Glossaire NSI",
        desc: "Toutes les définitions clés du programme, recherchables et classées par thème.",
        target: "glossaire",
      },
      {
        emoji: "🧭",
        tag: `${typeof METHODES !== "undefined" ? METHODES.length : 0} fiches`,
        title: "Fiches méthode",
        desc: "Les réflexes transversaux : lire une erreur, écrire un test, convertir, parcourir un tableau…",
        target: "methodes",
      },
      {
        emoji: "🧪",
        tag: `${(typeof GUIDED_TP !== "undefined" ? GUIDED_TP.length : 0)} TP · ${(typeof MINI_PROJETS !== "undefined" ? MINI_PROJETS.length : 0)} projets`,
        title: "TP guidés & mini-projets (DIU)",
        desc: "TP pas-à-pas Linux & Python, mini-projets Python avec corrigés, et circuits Logisim — importés de mon DIU NSI.",
        target: "tp",
      },
      {
        emoji: "🗓️",
        tag: "4 h / sem.",
        title: "Progression annuelle",
        desc: "Planning indicatif des séquences sur l'année + l'encart « coder pour de vrai ».",
        target: "progression",
        prof: true,
      },
      {
        emoji: "📚",
        tag: "prof",
        title: "Enseigner la NSI",
        desc: "Programme & répartition, didactique, culture à transmettre, mise en œuvre — fiches développées + liens source.",
        target: "didactique",
        prof: true,
      },
      {
        emoji: "📝",
        tag: `${typeof EVALUATIONS !== "undefined" ? EVALUATIONS.length : 0} sujets`,
        title: "Évaluations (prof)",
        desc: "DS et TP notés avec barème ; corrigés affichés en mode professeur.",
        target: "evaluations",
        prof: true,
      },
    ];
    ressources
      .filter((r) => !r.prof || P.isTeacher())
      .forEach((r) => {
      const card = el("button", "theme-card");
      card.innerHTML = `
        <div class="tc-top"><span class="tc-emoji">${r.emoji}</span><span class="tc-num">${r.tag}</span></div>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <div class="tc-foot"><span>Ouvrir →</span></div>`;
      card.addEventListener("click", () => navigate(r.target));
      rgrid.appendChild(card);
    });
    viewHome.appendChild(rgrid);

    // --- Badges de progression (côté élève) ---
    if (!P.isTeacher()) {
      viewHome.appendChild(renderStudentNote());
      viewHome.appendChild(renderBadges());
    }

    const note = el(
      "div",
      "sidebar-foot",
      `<p style="margin-top:2rem">Contenu rédigé d'après le <strong>programme officiel de Première NSI</strong>
       (Bulletin officiel). Ce site est un support pédagogique indépendant et ne reproduit aucun manuel.</p>`
    );
    viewHome.appendChild(note);
  }

  /* ---------------- Vue Thème ---------------- */
  let currentThemeId = null; // thème affiché (pour rattacher l'activité de l'élève)
  function renderTheme(c) {
    currentThemeId = c.id;
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

    if (c.anticipation) {
      viewTheme.appendChild(
        el("div", "warnbox", `⭐ <strong>${c.anticipation}.</strong> Ce thème est proposé en ouverture : il n'est pas exigé par le programme de Première.`)
      );
    }

    // Capacités attendues (BO)
    const cap = el("div", "capacites");
    cap.innerHTML =
      `<h4>🎯 Capacités attendues (programme officiel)</h4><ul>` +
      c.capacites.map((x) => `<li>${x}</li>`).join("") +
      `</ul>`;
    viewTheme.appendChild(cap);

    // Barres « de ce thème » (progression de complétion + taux de réussite)
    viewTheme.appendChild(makeThemeBars(c.id));

    // Déroulé de séance (réservé au prof, masqué hors mode professeur)
    if (c.seance) viewTheme.appendChild(makeSeance(c.seance));

    // Sections
    c.sections.forEach((s, i) => {
      const sec = el("div", "section");
      sec.appendChild(el("h2", null, `${i + 1}. ${s.title}`));
      if (s.html) sec.appendChild(el("div", null, s.html));
      if (s.schema) sec.appendChild(el("div", "schema", s.schema));
      if (s.code) sec.appendChild(makeCodeCell(s.code));
      if (s.htmldemo) sec.appendChild(makeHtmlCell(s.htmldemo));
      if (s.game) sec.appendChild(makeGame(s.game));
      if (s.prof) sec.appendChild(makeProfNote(s.prof));
      viewTheme.appendChild(sec);
    });

    // Exercices progressifs + mini-défi (avant le QCM)
    const ex = THEME_EXTRAS[c.id];
    if (ex && ex.exercices) viewTheme.appendChild(makeExercices(ex.exercices, c.id));
    if (ex && ex.defi) viewTheme.appendChild(makeDefi(ex.defi));

    // Quiz
    if (QUIZZES[c.id]) viewTheme.appendChild(makeQuiz(c.id));

    // Erreurs fréquentes + fiche résumé (après le QCM)
    if (ex && ex.erreurs) viewTheme.appendChild(makeErreurs(ex.erreurs));
    if (ex && ex.resume) viewTheme.appendChild(makeResume(c, ex.resume));

    // Ressources importées du DIU rattachées à ce thème
    const du = makeThemeDUResources(c.id);
    if (du) viewTheme.appendChild(du);

    // Ressources externes (autres formations) liées avec attribution
    const ext = makeThemeExtResources(c.id);
    if (ext) viewTheme.appendChild(ext);

    // Navigation précédent / suivant
    viewTheme.appendChild(makeThemeNav(c));

    viewTheme.scrollIntoView({ behavior: "instant", block: "start" });
    $("#contenu").scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // Note pédagogique réservée au prof (visible en mode professeur)
  function makeProfNote(html) {
    const d = el("div", "prof-note teacher-block");
    d.innerHTML = `<div class="prof-note-head">👩‍🏫 Pour le prof</div>` + html;
    return d;
  }

  // Déroulé de séance (prof) — bloc dépliable, réservé au mode professeur
  function makeSeance(seance) {
    const det = el("details", "seance teacher-block");
    det.appendChild(el("summary", null, "📋 Déroulé de séance (prof) — " + (seance.duree || "")));
    const body = el("div", "seance-body");
    seance.etapes.forEach((e) => {
      body.appendChild(
        el(
          "div",
          "seance-etape",
          `<span class="seance-temps">${e.temps}</span>` +
            `<span class="seance-phase">${e.phase}</span>` +
            `<div class="seance-detail">${e.detail}</div>`
        )
      );
    });
    det.appendChild(body);
    return det;
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
  function makeCodeCell(code, onRun) {
    const cell = el("div", "code-cell");
    const bar = el("div", "code-toolbar");
    bar.innerHTML = `
      <span class="code-dot r"></span><span class="code-dot y"></span><span class="code-dot g"></span>
      <span class="code-title">python</span>
      <span class="spacer"></span>
    `;
    const btnViz = el("button", "btn-viz-cell", "🔎 Pas à pas");
    btnViz.title = "Visualiser l'exécution pas à pas (Python Tutor) : variables, mémoire, appels";
    const btnBasthon = el("button", "btn-basthon-cell", "⚡ Basthon");
    btnBasthon.title = "Ouvrir ce code dans Basthon (Python en ligne, gère input())";
    const btnReset = el("button", "btn-reset", "↺ Réinitialiser");
    const btnRun = el("button", "btn-run", "▶ Exécuter");
    bar.appendChild(btnViz);
    bar.appendChild(btnBasthon);
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

    btnRun.addEventListener("click", () => {
      runPython(ta.value, out, btnRun);
      if (onRun) onRun();
    });
    btnBasthon.addEventListener("click", () => openInBasthon(ta.value));
    btnViz.addEventListener("click", () => openInPythonTutor(ta.value));

    cell.appendChild(bar);
    cell.appendChild(ta);
    cell.appendChild(out);
    return cell;
  }

  /* ---------------- Basthon (ouvrir le code dans la console en ligne) ---------------- */
  // Encode une chaîne UTF-8 en base64 (gère les accents).
  function utf8ToB64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  // Ouvre le code dans le NOTEBOOK Basthon (et non la console) :
  // on fabrique un notebook .ipynb minimal (1 cellule de code) passé en ?ipynb=.
  function openInBasthon(code) {
    const lines = code.split("\n");
    const source = lines.map((l, i) => (i < lines.length - 1 ? l + "\n" : l));
    const nb = {
      cells: [{ cell_type: "code", metadata: {}, execution_count: null, outputs: [], source }],
      metadata: {
        kernelspec: { name: "python3", display_name: "Python 3" },
        language_info: { name: "python" },
      },
      nbformat: 4,
      nbformat_minor: 5,
    };
    let url = "https://notebook.basthon.fr/";
    try {
      url += "?ipynb=" + encodeURIComponent(utf8ToB64(JSON.stringify(nb)));
    } catch (e) {
      /* repli : notebook vide + presse-papiers */
    }
    const win = window.open(url, "_blank", "noopener");
    // Filet de sécurité : on copie aussi le code (au cas où l'import échoue).
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    if (!win) toast("Autorise les pop-ups pour ouvrir Basthon.");
    else toast("⚡ Notebook Basthon ouvert (code aussi copié, au cas où).");
  }

  // Cellule HTML/CSS éditable + aperçu en direct (iframe isolée).
  // Sert à rendre les exemples du thème Web interactifs (on édite, on voit le rendu).
  function makeHtmlCell(htmlCode) {
    const cell = el("div", "code-cell html-cell");
    const bar = el("div", "code-toolbar");
    bar.innerHTML =
      `<span class="code-dot r"></span><span class="code-dot y"></span><span class="code-dot g"></span>` +
      `<span class="code-title">HTML / CSS — éditable</span><span class="spacer"></span>`;
    const runBtn = el("button", "btn-run", "▶ Voir le résultat");
    bar.appendChild(runBtn);
    cell.appendChild(bar);

    const ta = el("textarea", "code-editor");
    ta.value = htmlCode;
    ta.spellcheck = false;
    ta.rows = Math.min(20, htmlCode.split("\n").length + 1);
    cell.appendChild(ta);

    const out = el("div", "html-preview-wrap");
    out.appendChild(el("div", "html-preview-label", "Aperçu (rendu par le navigateur)"));
    const frame = el("iframe", "html-preview");
    frame.setAttribute("sandbox", "allow-scripts"); // isolée : pas d'accès à la page
    frame.setAttribute("title", "Aperçu du rendu HTML");
    out.appendChild(frame);
    cell.appendChild(out);

    const render = () => { frame.srcdoc = ta.value; };
    runBtn.addEventListener("click", () => {
      render();
      if (P.isStudent() && currentThemeId) noteActivity(currentThemeId);
    });
    setTimeout(render, 0); // aperçu initial
    return cell;
  }

  // Visualiseur pas à pas (Python Tutor) — variables, mémoire, appels de fonctions.
  function openInPythonTutor(code) {
    const url =
      "https://pythontutor.com/visualize.html#code=" +
      encodeURIComponent(code) +
      "&cumulative=false&py=3&mode=display&origin=opt-frontend.js&rawInputLstJSON=%5B%5D";
    const win = window.open(url, "_blank", "noopener");
    if (!win) toast("Autorise les pop-ups pour ouvrir le visualiseur pas à pas.");
  }

  function toast(msg) {
    let t = $("#nsiToast");
    if (!t) {
      t = el("div", "nsi-toast");
      t.id = "nsiToast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 4000);
  }

  /* ---------------- Textes à trou (cloze interactif) ---------------- */
  // code : texte avec des marqueurs ___ ; gaps : réponses attendues
  //   (chaîne ou tableau de variantes acceptées, dans l'ordre des ___).
  function makeGapFill(code, gaps, onCheck) {
    const wrap = el("div", "gapfill");
    const bar = el("div", "code-toolbar");
    bar.innerHTML =
      `<span class="code-dot r"></span><span class="code-dot y"></span><span class="code-dot g"></span>` +
      `<span class="code-title">texte à trou</span><span class="spacer"></span>`;
    const btnCheck = el("button", "btn-run", "✅ Vérifier");
    const btnTry = el("button", "btn-reset", "▶ Tester");
    bar.appendChild(btnTry);
    bar.appendChild(btnCheck);

    const pre = el("pre", "gap-pre");
    const parts = code.split("___");
    const inputs = [];
    parts.forEach((part, i) => {
      pre.appendChild(document.createTextNode(part));
      if (i < parts.length - 1) {
        const inp = el("input", "gap-input");
        inp.type = "text";
        inp.spellcheck = false;
        inp.setAttribute("aria-label", "Trou " + (i + 1));
        const expected = gaps[i];
        const longest = Array.isArray(expected)
          ? expected.reduce((a, b) => (b.length > a.length ? b : a), "")
          : String(expected);
        inp.size = Math.max(longest.length + 1, 3);
        inputs.push(inp);
        pre.appendChild(inp);
      }
    });

    const feedback = el("div", "gap-feedback");
    const out = el("div", "code-output empty");

    const norm = (s) => String(s).trim().replace(/\s+/g, " ").replace(/\s*([(),:=+\-*/%<>])\s*/g, "$1");
    function accepts(expected, val) {
      const variants = Array.isArray(expected) ? expected : [expected];
      return variants.some((v) => norm(v) === norm(val));
    }
    function filledCode() {
      let r = "";
      parts.forEach((part, i) => {
        r += part;
        if (i < parts.length - 1) r += inputs[i].value;
      });
      return r;
    }

    btnCheck.addEventListener("click", () => {
      noteActivity(currentThemeId); // texte à trou = activité de travail
      if (onCheck) onCheck();
      let ok = 0;
      inputs.forEach((inp, i) => {
        const good = accepts(gaps[i], inp.value);
        inp.classList.toggle("gap-ok", good);
        inp.classList.toggle("gap-bad", !good && inp.value.trim() !== "");
        if (good) ok++;
      });
      feedback.className = "gap-feedback show " + (ok === inputs.length ? "good" : "bad");
      feedback.textContent =
        ok === inputs.length
          ? "🎉 Tous les trous sont corrects ! Clique sur ▶ Tester pour exécuter."
          : `${ok} / ${inputs.length} trou(s) correct(s). Réessaie les cases rouges.`;
    });
    btnTry.addEventListener("click", () => runPython(filledCode(), out, btnTry));

    wrap.appendChild(bar);
    wrap.appendChild(pre);
    wrap.appendChild(feedback);
    wrap.appendChild(out);
    return wrap;
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
    noteActivity(currentThemeId); // l'élève travaille ce thème
    out.className = "code-output";
    out.innerHTML = `<span class="muted">Exécution…</span>`;
    btn.disabled = true;
    try {
      const py = await loadPyodideOnce();
      // Redirige la sortie standard et les erreurs ; input() via prompt (comme Basthon)
      py.runPython(`
import sys, io, builtins
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
try:
    from js import prompt as _nsi_prompt
    def _nsi_input(invite=""):
        r = _nsi_prompt(str(invite))
        if r is None:
            raise KeyboardInterrupt("Saisie annulée")
        print(str(invite) + str(r))   # écho de la saisie dans la sortie
        return str(r)
    builtins.input = _nsi_input
except Exception:
    pass
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
      // barres « de ce thème » mises à jour en direct
      refreshThemeBars(themeId, nbRep, nbOk, questions.length);
      // sauvegarde au fil des réponses, sans dégrader une meilleure progression
      if (nbRep > 0 && nbRep >= qcmAnswered(progress[themeId])) {
        progress[themeId] = { answered: nbRep, correct: nbOk, total: questions.length };
        saveProgress(progress);
        P.recordQcm(themeId, nbRep, nbOk, questions.length);
        updateGlobalProgress();
      }
      if (nbRep === questions.length) {
        scoreLine.classList.add("done");
        if (nbOk === questions.length) scoreLine.textContent += "  🎉 Thème validé !";
        buildNav();
        setActiveNav(themeId);
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
            "La Pascaline gère les <em>retenues</em>. En binaire, l'addition <strong>1 + 1</strong> " +
            "ne donne pas « 2 » : elle dépasse le plus grand chiffre disponible et déclenche une retenue. " +
            "Écris le résultat de <strong>1 + 1</strong> <strong>en binaire</strong>.",
          answers: ["10", "10b", "0b10"],
          hint: "Comme 9+1 passe à « 10 » en base 10, ici on dépasse le chiffre 1 : on pose 0 et on retient 1.",
          fact: "À 19 ans, Pascal construit la Pascaline pour aider son père à calculer les impôts.",
        },
        {
          id: "jacquard",
          digit: "9",
          machine: "Le métier à tisser de Jacquard",
          era: "1801 · cartes perforées",
          riddle:
            "Une rangée de la carte code un <strong>octet</strong> (8 bits) : trou = <code>1</code>, " +
            "pas de trou = <code>0</code>. Convertis l'octet <strong>0011 0010</strong> en décimal.",
          answers: ["50", "cinquante"],
          hint: "Additionne les puissances de 2 des bits à 1 : 32 + 16 + 2.",
          fact: "Les cartes perforées de Jacquard inspireront Babbage, puis les premiers ordinateurs.",
        },
        {
          id: "turing",
          digit: "8",
          machine: "La machine de Turing",
          era: "1936 · Alan Turing",
          riddle:
            "Le ruban de la machine doit distinguer <strong>256 symboles</strong> différents. " +
            "Sachant qu'avec <em>n</em> bits on obtient 2<sup>n</sup> combinaisons, " +
            "combien de bits faut-il au minimum ?",
          answers: ["8", "huit", "8 bits"],
          hint: "Cherche n tel que 2ⁿ = 256 : 2¹=2, 2²=4, 2³=8 … continue.",
          fact: "En 1936, Turing définit ce qu'une machine peut calculer ; en 1940, il aide à percer Enigma.",
        },
        {
          id: "web",
          digit: "9",
          machine: "Le serveur du CERN",
          era: "1989 · Tim Berners-Lee",
          riddle:
            "Sur le Web, les couleurs CSS s'écrivent en <strong>hexadécimal</strong> (base 16), " +
            "où l'on compte 0…9 puis A=10, B=11, … Convertis le nombre hexadécimal " +
            "<strong>2A</strong> en décimal.",
          answers: ["42", "quarante-deux", "quarante deux"],
          hint: "2A = 2×16 + A, et le symbole A vaut 10 en base 16.",
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

  /* ---------------- Compléments pédagogiques d'un thème ---------------- */
  const NIVEAU_BADGE = {
    facile: { cls: "lv-facile", label: "🟢 Facile" },
    moyen: { cls: "lv-moyen", label: "🟠 Moyen" },
    défi: { cls: "lv-defi", label: "🔴 Défi" },
    defi: { cls: "lv-defi", label: "🔴 Défi" },
  };

  function makeExercices(liste, themeId) {
    const wrap = el("div", "extra-block exos");
    wrap.appendChild(el("h2", null, "🏋️ Exercices progressifs"));
    wrap.appendChild(
      el("p", "extra-hint", "Entraîne-toi du plus simple au plus difficile. Le corrigé est masqué (clique pour le révéler).")
    );
    liste.forEach((exo, i) => {
      const lv = NIVEAU_BADGE[exo.niveau] || NIVEAU_BADGE.facile;
      const box = el("div", "exo-item");
      box.appendChild(
        el(
          "div",
          "exo-head",
          `<span class="lv-tag ${lv.cls}">${lv.label}</span><span class="exo-n">Exercice ${i + 1}</span>`
        )
      );
      box.appendChild(el("div", "exo-enonce", exo.enonce));
      const exoKey = themeId + ":exo:" + i;
      const done = () => markExoDone(exoKey);
      if (exo.gapcode && exo.gaps) box.appendChild(makeGapFill(exo.gapcode, exo.gaps, done));
      if (exo.code) box.appendChild(makeCodeCell(exo.code, done));
      if (exo.solution) {
        const det = el("details", "corrige");
        det.appendChild(el("summary", null, "✅ Voir le corrigé"));
        det.appendChild(el("div", "corrige-body", exo.solution));
        box.appendChild(det);
      }
      // Case explicite « fait » (fait monter la barre du thème) — côté élève.
      if (P.isStudent()) {
        const doneRow = el("label", "exo-done");
        const cb = el("input");
        cb.type = "checkbox";
        cb.dataset.key = exoKey;
        cb.checked = !!exosDone[exoKey];
        cb.addEventListener("change", () => setExoDone(exoKey, cb.checked));
        doneRow.appendChild(cb);
        doneRow.appendChild(el("span", null, "J'ai fait cet exercice"));
        box.appendChild(doneRow);
      }
      wrap.appendChild(box);
    });
    return wrap;
  }

  function makeDefi(defi) {
    const wrap = el("div", "extra-block defi-block");
    wrap.appendChild(el("h2", null, "🚀 Mini-défi / mission"));
    const card = el("div", "defi-card");
    card.appendChild(el("h3", null, defi.titre));
    card.appendChild(el("div", null, defi.html));
    if (defi.code) card.appendChild(makeCodeCell(defi.code));
    wrap.appendChild(card);
    return wrap;
  }

  function makeErreurs(erreurs) {
    const wrap = el("div", "extra-block erreurs-block");
    wrap.appendChild(el("h2", null, "⚠️ Erreurs fréquentes"));
    const ul = el("ul", "erreurs-list");
    erreurs.forEach((e) => ul.appendChild(el("li", null, e)));
    wrap.appendChild(ul);
    return wrap;
  }

  function makeResume(c, resume) {
    const wrap = el("div", "extra-block resume-block");
    const head = el("div", "resume-head");
    head.appendChild(el("h2", null, "📋 Fiche résumé"));
    const print = el("button", "btn secondary", "🖨️ Imprimer la fiche");
    print.addEventListener("click", () => printResume(c, resume));
    head.appendChild(print);
    wrap.appendChild(head);
    const ul = el("ul", "resume-list");
    resume.forEach((r) => ul.appendChild(el("li", null, r)));
    wrap.appendChild(ul);
    return wrap;
  }

  function printResume(c, resume) {
    const items = resume.map((r) => `<li>${r}</li>`).join("");
    const caps = (c.capacites || []).map((x) => `<li>${x}</li>`).join("");
    openPrint(
      `Fiche résumé — ${c.title}`,
      `<h1>${c.emoji} ${c.title}</h1>` +
        `<p class="intro">${c.intro}</p>` +
        `<h2>🎯 Capacités attendues (BO)</h2><ul>${caps}</ul>` +
        `<h2>📋 À retenir</h2><ul>${items}</ul>`
    );
  }

  /* ---------------- Note / appréciation (côté élève) ---------------- */
  // La note est saisie par le prof dans « Ma classe » ; l'élève la voit ici,
  // mise à jour en temps réel (onSnapshot Firestore).
  function studentNoteValue() {
    if (!P.isStudent()) return "";
    const s = P.getSession();
    if (!s) return "";
    return String((P.getProgress(s.uid).note || "")).trim();
  }
  function fillStudentNote(wrap) {
    const note = studentNoteValue();
    wrap.innerHTML = "";
    if (!note) { wrap.classList.add("hidden"); return; }
    wrap.classList.remove("hidden");
    wrap.appendChild(el("h2", "home-h2", "📊 Ton évaluation"));
    const card = el("div", "note-card");
    card.appendChild(el("span", "note-card-label", "Note / appréciation du professeur"));
    const val = el("span", "note-card-value");
    val.textContent = note; // textContent : aucune injection HTML possible
    card.appendChild(val);
    wrap.appendChild(card);
  }
  function renderStudentNote() {
    const wrap = el("div", "note-block");
    wrap.id = "studentNoteCard";
    fillStudentNote(wrap);
    return wrap;
  }

  /* ---------------- Badges de progression ---------------- */
  function renderBadges() {
    const wrap = el("div", "badges-block");
    wrap.appendChild(el("h2", "home-h2", "🏅 Tes badges"));
    const done = COURSES.filter((c) => {
      return themePerfait(progress[c.id]);
    }).length;
    const anyQuiz = Object.keys(progress).length > 0;
    const defs = [
      { ok: anyQuiz, emoji: "🚀", label: "Premiers pas", desc: "Un premier QCM tenté" },
      { ok: done >= 1, emoji: "✅", label: "Premier thème validé", desc: "1 thème au score parfait" },
      { ok: done >= 3, emoji: "🔥", label: "Sur la lancée", desc: "3 thèmes validés" },
      { ok: done >= 5, emoji: "🧠", label: "Expert·e en herbe", desc: "5 thèmes validés" },
      { ok: done >= COURSES.length, emoji: "🏆", label: "Programme bouclé", desc: "Tous les thèmes validés" },
    ];
    const row = el("div", "badges-row");
    defs.forEach((b) => {
      const item = el("div", "badge-item" + (b.ok ? " earned" : " locked"));
      item.innerHTML = `<span class="badge-emoji">${b.ok ? b.emoji : "🔒"}</span>` +
        `<span class="badge-label">${b.label}</span>` +
        `<span class="badge-desc">${b.desc}</span>`;
      row.appendChild(item);
    });
    wrap.appendChild(row);
    return wrap;
  }

  /* ---------------- Vue : Projets en îlots (liste) ---------------- */
  function renderProjectsHome() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, `🏝️ Projets en îlots`));
    header.appendChild(
      el(
        "p",
        "theme-intro",
        "Des missions à mener en équipe. La démarche est toujours la même : <strong>comprendre → réfléchir en îlot → proposer un algorithme → coder → tester → améliorer → présenter</strong>."
      )
    );
    viewTheme.appendChild(header);

    // Fiche îlot + rôles + grille (ressources communes)
    const tools = el("div", "proj-tools");
    const bFiche = el("button", "btn secondary", "📄 Imprimer la fiche « réflexion en îlot »");
    bFiche.addEventListener("click", printFicheIlot);
    const bRoles = el("button", "btn secondary", "👥 Voir les rôles & la grille");
    bRoles.addEventListener("click", () => {
      rolesBox.classList.toggle("hidden");
    });
    tools.appendChild(bFiche);
    tools.appendChild(bRoles);
    viewTheme.appendChild(tools);

    const rolesBox = makeRolesGrille();
    rolesBox.classList.add("hidden");
    viewTheme.appendChild(rolesBox);

    const grid = el("div", "card-grid");
    PROJECTS.slice()
      .sort((a, b) => a.num - b.num)
      .forEach((p) => {
        const lv = NIVEAU_BADGE[p.niveau] || NIVEAU_BADGE.facile;
        const card = el("button", "theme-card proj-card");
        card.innerHTML = `
          <div class="tc-top"><span class="tc-emoji">${p.emoji}</span>
            <span class="lv-tag ${lv.cls}">${lv.label}</span></div>
          <h3>Projet ${p.num} — ${p.titre}</h3>
          <p>${p.objectif}</p>
          <div class="proj-notions">${p.notions
            .slice(0, 3)
            .map((n) => `<span class="chip">${n}</span>`)
            .join("")}</div>
          <div class="tc-foot"><span>⏱️ ${p.duree}</span><span>Ouvrir →</span></div>`;
        card.addEventListener("click", () => navigate("projet:" + p.id));
        grid.appendChild(card);
      });
    viewTheme.appendChild(grid);
    scrollTop();
  }

  function makeRolesGrille() {
    const box = el("div", "roles-grille");
    box.appendChild(el("h3", null, "👥 Rôles dans le groupe (à faire tourner à chaque projet)"));
    const r = el("div", "roles-row");
    PROJECT_ROLES.forEach((role) => {
      r.appendChild(
        el(
          "div",
          "role-item",
          `<span class="role-emoji">${role.emoji}</span><strong>${role.nom}</strong><span>${role.desc}</span>`
        )
      );
    });
    box.appendChild(r);

    box.appendChild(el("h3", null, "📊 Grille d'évaluation générique (/20)"));
    let total = 0;
    const rows = PROJECT_GRILLE.map((g) => {
      total += g.points;
      return `<tr><td>${g.critere}</td><td class="pts">${g.points}</td><td>${g.detail}</td></tr>`;
    }).join("");
    const tbl = el(
      "div",
      "grille-table",
      `<table><tr><th>Critère</th><th>Points</th><th>Indicateur</th></tr>${rows}` +
        `<tr class="total"><td>Total</td><td class="pts">${total}</td><td></td></tr></table>`
    );
    box.appendChild(tbl);
    return box;
  }

  /* ---------------- Vue : un projet détaillé ---------------- */
  function renderProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return renderProjectsHome();
    viewTheme.innerHTML = "";

    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "🏝️ Projets en îlots");
    crumb.addEventListener("click", () => navigate("projets"));
    header.appendChild(crumb);
    const lv = NIVEAU_BADGE[p.niveau] || NIVEAU_BADGE.facile;
    header.appendChild(
      el("h1", null, `<span class="th-emoji">${p.emoji}</span> Projet ${p.num} — ${p.titre}`)
    );
    header.appendChild(
      el(
        "div",
        "proj-meta",
        `<span class="lv-tag ${lv.cls}">${lv.label}</span>` +
          `<span class="chip">⏱️ ${p.duree}</span>` +
          p.notions.map((n) => `<span class="chip">${n}</span>`).join("")
      )
    );
    viewTheme.appendChild(header);

    // Boutons d'action
    const tools = el("div", "proj-tools");
    const bPrint = el("button", "btn secondary", "🖨️ Imprimer la fiche projet");
    bPrint.addEventListener("click", () => printProject(p));
    const bFiche = el("button", "btn secondary", "📄 Fiche « réflexion en îlot »");
    bFiche.addEventListener("click", printFicheIlot);
    tools.appendChild(bPrint);
    tools.appendChild(bFiche);
    viewTheme.appendChild(tools);

    // Objectif & situation
    const obj = el("div", "capacites");
    obj.innerHTML = `<h4>🎯 Objectif final</h4><p>${p.objectif}</p>`;
    viewTheme.appendChild(obj);
    const sit = el("div", "section");
    sit.appendChild(el("h2", null, "🧩 Situation-problème"));
    sit.appendChild(el("p", null, p.situation));
    viewTheme.appendChild(sit);

    // Phases
    const phasesSec = el("div", "section");
    phasesSec.appendChild(el("h2", null, "🗺️ Les 5 phases"));
    const ol = el("ol", "phases-list");
    p.phases.forEach((ph) => ol.appendChild(el("li", null, ph)));
    phasesSec.appendChild(ol);
    viewTheme.appendChild(phasesSec);

    // Rôles
    viewTheme.appendChild(makeRolesGrille());

    // Code de départ
    if (p.code) {
      const codeSec = el("div", "section");
      codeSec.appendChild(el("h2", null, "💻 Code de départ"));
      if (p.langue === "html") {
        codeSec.appendChild(
          el("p", "note", "⚠️ Ce code est du HTML/JS : recopie-le dans un fichier <code>.html</code> et ouvre-le dans un navigateur (l'éditeur ci-dessous exécute du Python).")
        );
        const pre = el("pre");
        pre.appendChild(el("code", null, escapeHtml(p.code)));
        codeSec.appendChild(pre);
      } else {
        codeSec.appendChild(makeCodeCell(p.code));
      }
      viewTheme.appendChild(codeSec);
    }

    // Tests attendus
    if (p.tests) {
      const testSec = el("div", "section");
      testSec.appendChild(el("h2", null, "🧪 Tests attendus"));
      const ul = el("ul");
      p.tests.forEach((t) => ul.appendChild(el("li", null, t)));
      testSec.appendChild(ul);
      viewTheme.appendChild(testSec);
    }

    // Bonus
    if (p.bonus) {
      const b = el("div", "note");
      b.innerHTML = `⭐ <strong>Bonus (groupes rapides) :</strong> ${p.bonus}`;
      viewTheme.appendChild(b);
    }

    // Corrigé enseignant (masqué)
    if (p.corrige) {
      const det = el("details", "corrige teacher-block");
      det.appendChild(el("summary", null, "🔑 Corrigé / pistes (enseignant)"));
      const body = el("div", "corrige-body");
      // Si le corrigé ressemble à du code Python, on l'exécute ; sinon texte.
      if (/\n/.test(p.corrige) && /[=():]/.test(p.corrige) && p.langue !== "html") {
        body.appendChild(makeCodeCell(p.corrige));
      } else {
        body.appendChild(el("p", null, p.corrige));
      }
      det.appendChild(body);
      viewTheme.appendChild(det);
    }

    scrollTop();
  }

  /* ---------------- Vue : Glossaire ---------------- */
  function renderGlossary() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "📖 Glossaire NSI"));
    header.appendChild(
      el("p", "theme-intro", "Les définitions clés du programme. Filtre par mot-clé ou par thème.")
    );
    viewTheme.appendChild(header);

    const bar = el("div", "gloss-bar");
    const input = el("input", "gloss-search");
    input.type = "search";
    input.placeholder = "Filtrer un terme…";
    bar.appendChild(input);
    viewTheme.appendChild(bar);

    const list = el("div", "gloss-list");
    viewTheme.appendChild(list);

    const themeName = {};
    COURSES.forEach((c) => (themeName[c.id] = c.title));

    function draw(filter) {
      list.innerHTML = "";
      const f = norm(filter || "");
      const items = GLOSSARY.filter(
        (g) => !f || norm(g.terme).includes(f) || norm(g.def).includes(f)
      ).sort((a, b) => a.terme.localeCompare(b.terme, "fr"));
      if (!items.length) {
        list.appendChild(el("p", "muted-text", "Aucun terme trouvé."));
        return;
      }
      items.forEach((g) => {
        const card = el("div", "gloss-item");
        card.innerHTML =
          `<div class="gloss-term">${g.terme}</div>` +
          `<div class="gloss-def">${g.def}</div>` +
          (themeName[g.theme]
            ? `<button class="gloss-link" data-go="${g.theme}">→ ${themeName[g.theme]}</button>`
            : "");
        const link = card.querySelector(".gloss-link");
        if (link) link.addEventListener("click", () => navigate(link.dataset.go));
        list.appendChild(card);
      });
    }
    input.addEventListener("input", () => draw(input.value));
    draw("");
    scrollTop();
  }

  /* ---------------- Vue : Conformité au BO ---------------- */
  function boCoverage(c) {
    const nbSections = c.sections.length;
    const nbQuiz = (QUIZZES[c.id] || []).length;
    const ex = (typeof THEME_EXTRAS !== "undefined" && THEME_EXTRAS[c.id]) || {};
    const nbExo = (ex.exercices || []).length;
    const projs =
      typeof PROJECTS !== "undefined"
        ? PROJECTS.filter((p) => p.theme === c.id)
        : [];
    const parts = [`${nbSections} parties de cours`];
    if (nbQuiz) parts.push(`QCM (${nbQuiz} questions)`);
    if (nbExo) parts.push(`${nbExo} exercices`);
    if (projs.length) parts.push(`projet « ${projs.map((p) => p.titre).join(" », « ")} »`);
    return parts.join(" · ");
  }

  function renderBO() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "✅ Conformité au programme (BO)"));
    header.appendChild(
      el(
        "p",
        "theme-intro",
        "Les <strong>8 thèmes officiels</strong> de la spécialité NSI en Première (Bulletin officiel) et, pour chacun, les <strong>capacités attendues</strong> avec l'endroit où elles sont travaillées sur le site."
      )
    );
    viewTheme.appendChild(header);

    const tools = el("div", "proj-tools");
    const bPrint = el("button", "btn secondary", "🖨️ Imprimer la grille de conformité");
    bPrint.addEventListener("click", printBO);
    tools.appendChild(bPrint);
    viewTheme.appendChild(tools);

    const officiels = COURSES.filter((c) => !c.anticipation);
    const bonus = COURSES.filter((c) => c.anticipation);

    viewTheme.appendChild(
      el("div", "info-callout", `📘 <strong>${officiels.length} thèmes au programme de Première</strong> couverts. Les thèmes marqués « bonus » sont des ouvertures qui anticipent la Terminale.`)
    );

    function carte(c) {
      const card = el("div", "bo-card");
      const badge = c.anticipation
        ? `<span class="lv-tag lv-defi">bonus · Terminale</span>`
        : `<span class="lv-tag lv-facile">Première · BO</span>`;
      let html =
        `<div class="bo-head"><h3>${c.emoji} ${c.title}</h3>${badge}</div>` +
        `<ul class="bo-caps">` +
        c.capacites.map((x) => `<li>${x}</li>`).join("") +
        `</ul>` +
        `<div class="bo-where">📍 Traité dans : ${boCoverage(c)}</div>` +
        `<button class="btn secondary bo-go">Ouvrir le thème →</button>`;
      card.innerHTML = html;
      card.querySelector(".bo-go").addEventListener("click", () => navigate(c.id));
      return card;
    }

    officiels.forEach((c) => viewTheme.appendChild(carte(c)));
    if (bonus.length) {
      viewTheme.appendChild(el("h2", "home-h2", "⭐ Bonus — anticipations de la Terminale"));
      viewTheme.appendChild(
        el("p", "extra-hint", "Hors programme de Première, proposés en ouverture : Réseaux, et la section « k plus proches voisins » du thème Algorithmique.")
      );
      bonus.forEach((c) => viewTheme.appendChild(carte(c)));
    }
    scrollTop();
  }

  function printBO() {
    const bloc = (c) =>
      `<h2>${c.emoji} ${c.title}${c.anticipation ? " (bonus · Terminale)" : ""}</h2>` +
      `<ul>${c.capacites.map((x) => `<li>${x}</li>`).join("")}</ul>` +
      `<p><em>Traité dans : ${boCoverage(c)}</em></p>`;
    const officiels = COURSES.filter((c) => !c.anticipation).map(bloc).join("");
    const bonus = COURSES.filter((c) => c.anticipation).map(bloc).join("");
    openPrint(
      "Conformité au BO — Première NSI",
      `<h1>✅ Conformité au programme — Première NSI</h1>` +
        `<p class="intro">Capacités attendues du Bulletin officiel et leur traitement sur le site.</p>` +
        officiels +
        (bonus ? `<h1 style="page-break-before:always">⭐ Bonus (anticipation Terminale)</h1>${bonus}` : "")
    );
  }

  /* ---------------- Vue : Progression annuelle ---------------- */
  function renderProgression() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "🗓️ Progression annuelle"));
    header.appendChild(el("p", "theme-intro", PROGRESSION_INTRO));
    viewTheme.appendChild(header);

    const tools = el("div", "proj-tools");
    const bPrint = el("button", "btn secondary", "🖨️ Imprimer la progression");
    bPrint.addEventListener("click", printProgression);
    tools.appendChild(bPrint);
    viewTheme.appendChild(tools);

    const rows = PROGRESSION.map(
      (p) =>
        `<tr><td><strong>${p.periode}</strong><br><span class="muted-text">${p.semaines} · ${p.heures}</span></td>` +
        `<td>${p.themeId ? `<button class="gloss-link" data-go="${p.themeId}">${p.theme} →</button>` : p.theme}` +
        `<div class="muted-text">${p.objectifs}</div></td>` +
        `<td>${p.activites}</td><td>${p.evaluation}</td></tr>`
    ).join("");
    const tbl = el(
      "div",
      "prog-table",
      `<table><tr><th>Période</th><th>Thème & objectifs</th><th>Activités</th><th>Évaluation</th></tr>${rows}</table>`
    );
    tbl.querySelectorAll(".gloss-link").forEach((b) =>
      b.addEventListener("click", () => navigate(b.dataset.go))
    );
    viewTheme.appendChild(tbl);

    // Encart « coder pour de vrai »
    const cr = el("div", "extra-block");
    cr.appendChild(el("h2", null, CODER_REEL.titre));
    cr.appendChild(el("div", null, CODER_REEL.html));
    viewTheme.appendChild(cr);
    scrollTop();
  }

  function printProgression() {
    const rows = PROGRESSION.map(
      (p) =>
        `<tr><td><strong>${p.periode}</strong><br>${p.semaines} · ${p.heures}</td>` +
        `<td><strong>${p.theme}</strong><br>${p.objectifs}</td>` +
        `<td>${p.activites}</td><td>${p.evaluation}</td></tr>`
    ).join("");
    openPrint(
      "Progression annuelle — Première NSI",
      `<h1>🗓️ Progression annuelle — Première NSI</h1><p class="intro">${PROGRESSION_INTRO}</p>` +
        `<table><tr><th>Période</th><th>Thème & objectifs</th><th>Activités</th><th>Évaluation</th></tr>${rows}</table>`
    );
  }

  /* ---------------- Vue : Fiches méthode ---------------- */
  function renderMethodes() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "🧭 Fiches méthode"));
    header.appendChild(
      el("p", "theme-intro", "Les réflexes transversaux à avoir toute l'année. À garder sous les yeux pendant les TP.")
    );
    viewTheme.appendChild(header);

    METHODES.forEach((m) => {
      const sec = el("div", "section");
      sec.appendChild(el("h2", null, m.titre));
      sec.appendChild(el("div", null, m.html));
      viewTheme.appendChild(sec);
    });
    const tools = el("div", "proj-tools");
    const bPrint = el("button", "btn secondary", "🖨️ Imprimer les fiches méthode");
    bPrint.addEventListener("click", () =>
      openPrint(
        "Fiches méthode — NSI Première",
        "<h1>🧭 Fiches méthode — NSI Première</h1>" +
          METHODES.map((m) => `<h2>${m.titre}</h2>${m.html}`).join("")
      )
    );
    tools.appendChild(bPrint);
    viewTheme.appendChild(tools);
    scrollTop();
  }

  /* ---------------- Vue : Évaluations (corrigés réservés au prof) ---------------- */
  function renderEvaluations() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "📝 Évaluations"));
    header.appendChild(
      el(
        "p",
        "theme-intro",
        "DS et TP notés prêts à l'emploi (barème sur 20). Les <strong>corrigés</strong> sont masqués : active le <strong>mode professeur</strong> (👩‍🏫 en haut) pour les afficher et les imprimer."
      )
    );
    viewTheme.appendChild(header);

    const TYPE = { DS: "📄 DS", TP: "💻 TP noté", pratique: "🧪 Épreuve pratique" };
    // Tri par thème (ordre du programme), DS avant TP ; transversal en dernier.
    const numByTheme = {};
    COURSES.forEach((c) => (numByTheme[c.id] = c.num));
    const ordered = EVALUATIONS.slice().sort((a, b) => {
      const na = a.themeId ? numByTheme[a.themeId] || 50 : 99;
      const nb = b.themeId ? numByTheme[b.themeId] || 50 : 99;
      if (na !== nb) return na - nb;
      return (a.type === "DS" ? 0 : 1) - (b.type === "DS" ? 0 : 1);
    });
    ordered.forEach((ev) => {
      const box = el("div", "exo-item");
      const head = el("div", "exo-head");
      head.innerHTML =
        `<span class="lv-tag lv-moyen">${TYPE[ev.type] || ev.type}</span>` +
        `<span class="exo-n">${ev.titre}</span>`;
      box.appendChild(head);
      box.appendChild(
        el("div", "proj-meta", `<span class="chip">⏱️ ${ev.duree}</span><span class="chip">/ ${ev.total} pts</span>`)
      );
      box.appendChild(el("div", "exo-enonce", ev.enonce));

      const tools = el("div", "proj-tools");
      const bPrint = el("button", "btn secondary", "🖨️ Imprimer le sujet");
      bPrint.addEventListener("click", () =>
        openPrint(
          ev.titre,
          `<h1>${ev.titre}</h1><p class="intro">Durée : ${ev.duree} · Barème : / ${ev.total} points</p>${ev.enonce}`
        )
      );
      tools.appendChild(bPrint);

      if (ev.corrige) {
        const det = el("details", "corrige teacher-block");
        det.appendChild(el("summary", null, "🔑 Corrigé (enseignant)"));
        det.appendChild(el("div", "corrige-body", ev.corrige));
        const bCor = el("button", "btn secondary", "🖨️ Imprimer le corrigé");
        bCor.addEventListener("click", () =>
          openPrint(
            "Corrigé — " + ev.titre,
            `<h1>Corrigé — ${ev.titre}</h1>${ev.corrige}`
          )
        );
        bCor.style.marginTop = ".6rem";
        det.appendChild(bCor); // dans le corrigé masqué : caché hors mode prof
        box.appendChild(tools);
        box.appendChild(det);
      } else {
        box.appendChild(tools);
      }
      viewTheme.appendChild(box);
    });
    scrollTop();
  }

  /* ---------------- TP guidés & ressources du DIU ---------------- */
  function themeTitle(id) {
    const c = COURSES.find((x) => x.id === id);
    return c ? c.title : id;
  }

  function makeTPStep(step, lang) {
    const box = el("div", "tp-step");
    box.appendChild(
      el("div", "tp-step-head", `<span class="tp-num">${step.num}</span>${step.titre}` + (step.bonus ? ` <span class="lv-tag lv-defi">bonus</span>` : ""))
    );
    if (step.gaps && step.gapcode) {
      box.appendChild(makeGapFill(step.gapcode, step.gaps));
    } else if (step.code) {
      if (lang === "python" && step.run) {
        box.appendChild(makeCodeCell(step.code));
      } else {
        const pre = el("pre", lang === "bash" ? "tp-bash" : null);
        pre.appendChild(el("code", null, escapeHtml(step.code)));
        box.appendChild(pre);
      }
    }
    if (step.note) box.appendChild(el("div", "note", step.note));
    if (step.questions && step.questions.length) {
      const ul = el("ul", "tp-questions");
      step.questions.forEach((q) => ul.appendChild(el("li", null, q)));
      box.appendChild(ul);
    }
    if (step.correction && step.correction.length) {
      const det = el("details", "corrige");
      det.appendChild(el("summary", null, "✅ Voir la correction"));
      const ol = el("ol", "corrige-body");
      step.correction.forEach((c) => {
        // c peut être une chaîne, {text} ou {code} (solution exécutable)
        if (typeof c === "string") {
          ol.appendChild(el("li", null, c));
        } else if (c && c.text) {
          ol.appendChild(el("li", null, c.text));
        } else if (c && c.code) {
          const li = el("li");
          li.appendChild(makeCodeCell(c.code));
          ol.appendChild(li);
        }
      });
      det.appendChild(ol);
      box.appendChild(det);
    }
    return box;
  }

  function makeTPCard(tp) {
    const card = el("div", "tp-card");
    const head = el("div", "exo-head");
    head.innerHTML =
      `<span class="lv-tag ${tp.lang === "python" ? "lv-facile" : "lv-moyen"}">${tp.lang === "python" ? "🐍 Python" : "🖥️ Terminal"}</span>` +
      `<span class="exo-n">${tp.titre}</span>`;
    card.appendChild(head);
    const link = el("button", "tp-theme-link", "→ " + themeTitle(tp.theme));
    link.addEventListener("click", () => navigate(tp.theme));
    card.appendChild(link);
    if (tp.intro) card.appendChild(el("p", "tp-intro", tp.intro));

    if (tp.type === "memo" && tp.table) {
      const rows = tp.table
        .map((r) => `<tr><td><code>${r.cmd}</code></td><td><code>${escapeHtml(r.synt)}</code></td><td>${r.desc}</td></tr>`)
        .join("");
      card.appendChild(
        el("div", "tp-memo", `<table><tr><th>Commande</th><th>Syntaxe</th><th>Rôle</th></tr>${rows}</table>`)
      );
    } else if (tp.steps) {
      tp.steps.forEach((s) => card.appendChild(makeTPStep(s, tp.lang)));
    }
    card.appendChild(el("div", "tp-source", "📎 " + TP_SOURCE));
    return card;
  }

  function makeFichePlus(f) {
    const card = el("div", "tp-card fiche-plus");
    const head = el("div", "exo-head");
    head.innerHTML = `<span class="lv-tag lv-moyen">📘 Fiche +</span><span class="exo-n">${f.titre}</span>`;
    card.appendChild(head);
    const link = el("button", "tp-theme-link", "→ " + themeTitle(f.theme));
    link.addEventListener("click", () => navigate(f.theme));
    card.appendChild(link);
    if (f.summary) card.appendChild(el("p", "tp-intro", f.summary));
    if (f.contenu) card.appendChild(el("div", null, f.contenu));
    if (f.code) card.appendChild(makeCodeCell(f.code));
    return card;
  }

  // Exemple d'utilisation de la « boîte noire » (.pyc) par mini-projet.
  const PYC_USAGE = {
    "mp-crible": "crible(30)",
    "mp-bases": 'decimal_vers_binaire(13)   # "1101"',
    "mp-cesar": 'cesar("BONJOUR", 3)        # "ERQMRXU"',
    "mp-pgcd": "pgcd(36, 24)               # 12",
    "mp-montecarlo": "estimer_pi(100000)         # ≈ 3.14",
    "mp-morpion": "gagnant(grille)            # 'X', 'O' ou None",
    "mp-pendu": "pendu()                    # lance le jeu",
    "mp-mastermind": "mastermind()               # lance le jeu",
    "mp-vigenere": 'vigenere("BONJOUR", "CLE")',
    "mp-tris": "tri_rapide([5, 2, 9, 1])   # [1, 2, 5, 9]",
  };

  // Versions de .pyc disponibles (3.12 par défaut = la plus répandue en lycée).
  const PYC_VERSIONS = ["3.12", "3.11", "3.14"];

  // Bloc « boîte noire » : le corrigé compilé (.pyc) à distribuer aux élèves,
  // + (côté prof) le source et la recette de recompilation.
  function makeBoiteNoire(p) {
    const mod = p.id.replace(/-/g, "_");
    const srcUrl = "assets/projets/src/" + mod + ".py";
    const usage = PYC_USAGE[p.id] || "";
    const wrap = el("div", "boite-noire");
    wrap.appendChild(el("div", "bn-head", "📦 Module « boîte noire » (.pyc)"));
    wrap.appendChild(
      el("p", "bn-desc", "Le corrigé <strong>compilé</strong> : on l'utilise comme un module, sans voir le code source.")
    );
    // Sélecteur de version + bouton de téléchargement (un .pyc ne marche qu'avec SA version).
    const row = el("div", "bn-verrow");
    row.appendChild(el("label", "bn-verlabel", "Version Python des élèves :"));
    const sel = el("select", "bn-ver");
    PYC_VERSIONS.forEach((v) => {
      const o = el("option", null, "Python " + v);
      o.value = v;
      sel.appendChild(o);
    });
    const dl = el("a", "btn secondary bn-dl", "⬇️ Télécharger le .pyc");
    const setHref = () => {
      dl.href = "assets/projets/pyc/" + sel.value + "/" + mod + ".pyc";
      dl.setAttribute("download", mod + ".pyc");
    };
    setHref();
    sel.addEventListener("change", setHref);
    row.appendChild(sel);
    row.appendChild(dl);
    wrap.appendChild(row);
    if (usage) {
      wrap.appendChild(
        el("pre", "bn-usage", `<code>&gt;&gt;&gt; import ${mod}\n&gt;&gt;&gt; ${mod}.${usage}</code>`)
      );
    }
    wrap.appendChild(
      el("p", "bn-note", "ℹ️ Choisis la version de Python de tes élèves (Thonny / Capytale l'affichent). Dispo : 3.11, 3.12, 3.14 — autre version : voir « Pour le prof ».")
    );
    const prof = el("details", "teacher-block bn-prof");
    prof.appendChild(el("summary", null, "👩‍🏫 Pour le prof — source & recette de recompilation"));
    const body = el("div", "corrige-body");
    body.innerHTML =
      `<a href="${srcUrl}" target="_blank" rel="noopener">Voir / télécharger le code source (.py) ↗</a>` +
      `<p>Recompiler le <code>.pyc</code> pour <strong>ta</strong> version de Python :</p>` +
      `<pre><code>python -m py_compile ${mod}.py\n# puis renomme __pycache__/${mod}.cpython-XY.pyc  en  ${mod}.pyc</code></pre>` +
      `<p>Ou tout recompiler d'un coup : <code>python assets/projets/build_pyc.py</code></p>`;
    prof.appendChild(body);
    wrap.appendChild(prof);
    return wrap;
  }

  function makeMiniProjet(p) {
    const card = el("div", "tp-card mini-projet");
    const head = el("div", "exo-head");
    head.innerHTML =
      `<span class="lv-tag ${p.bonus ? "lv-defi" : "lv-facile"}">${p.bonus ? "⭐ bonus" : "🐍 Projet"}</span>` +
      `<span class="exo-n">${p.titre}</span>`;
    card.appendChild(head);
    card.appendChild(el("div", "proj-meta", `<span class="chip">${p.cat}</span>`));
    const link = el("button", "tp-theme-link", "→ " + themeTitle(p.theme));
    link.addEventListener("click", () => navigate(p.theme));
    card.appendChild(link);
    if (p.summary) card.appendChild(el("p", "tp-intro", p.summary));
    if (p.objectifs) {
      const ul = el("ul", "tp-questions");
      p.objectifs.forEach((o) => ul.appendChild(el("li", null, o)));
      card.appendChild(ul);
    }
    if (p.interactif) {
      card.appendChild(el("div", "note", "🎮 Jeu interactif (input) : clique ▶ Exécuter et réponds dans la fenêtre, ou ⚡ Basthon."));
    }
    const det = el("details", "corrige");
    det.appendChild(el("summary", null, "💡 Solution commentée"));
    if (p.explication) det.appendChild(el("p", "corrige-body", p.explication));
    if (p.code) det.appendChild(makeCodeCell(p.code));
    if (p.extensions && p.extensions.length) {
      const ul = el("ul", "corrige-body");
      p.extensions.forEach((e) => ul.appendChild(el("li", null, "Extension — " + e)));
      det.appendChild(ul);
    }
    card.appendChild(det);
    if (p.code) card.appendChild(makeBoiteNoire(p));
    card.appendChild(el("div", "tp-source", "📎 " + TP_SOURCE));
    return card;
  }

  function makeLogisimBlock() {
    const wrap = el("div", "logisim-block");
    wrap.appendChild(
      el(
        "div",
        null,
        `<strong>🔌 ${LOGISIM_PLATFORM.title}</strong> — ${LOGISIM_PLATFORM.desc} ` +
          `<a href="${LOGISIM_PLATFORM.url}" target="_blank" rel="noopener">Télécharger Logisim ↗</a>`
      )
    );
    const cats = ["Logique combinatoire", "Logique séquentielle", "Microprocesseur"];
    cats.forEach((cat) => {
      const list = LOGISIM_CIRCUITS.filter((c) => c.cat === cat);
      if (!list.length) return;
      wrap.appendChild(el("h4", "logisim-cat", cat));
      const grid = el("div", "logisim-grid");
      list.forEach((c) => {
        const a = el("a", "logisim-item");
        a.href = LOGISIM_PLATFORM.dir + c.file;
        a.setAttribute("download", "");
        a.innerHTML =
          `<span class="logisim-icon">${c.icon}</span>` +
          `<span class="logisim-body"><strong>${c.titre}</strong><span>${c.desc}</span>` +
          `<span class="logisim-file">⬇ ${c.file}</span></span>`;
        grid.appendChild(a);
      });
      wrap.appendChild(grid);
    });
    if (typeof ARCHI_PDFS !== "undefined" && ARCHI_PDFS.length) {
      wrap.appendChild(el("h4", "logisim-cat", "📄 Supports de cours (PDF)"));
      const pl = el("div", "pdf-list");
      ARCHI_PDFS.forEach((p) => {
        const a = el("a", "pdf-item");
        a.href = p.file;
        a.target = "_blank";
        a.rel = "noopener";
        a.innerHTML = `📄 ${p.titre}`;
        pl.appendChild(a);
      });
      wrap.appendChild(pl);
    }
    return wrap;
  }

  // Bloc « Ressources du DIU » injecté en bas d'une page de thème.
  function makeThemeDUResources(themeId) {
    const tps = (typeof GUIDED_TP !== "undefined" ? GUIDED_TP : []).filter((t) => t.theme === themeId);
    const fiches = (typeof FICHES_PLUS !== "undefined" ? FICHES_PLUS : []).filter((f) => f.theme === themeId);
    const mps = (typeof MINI_PROJETS !== "undefined" ? MINI_PROJETS : []).filter((p) => p.theme === themeId);
    const dbs = (typeof DEBRANCHE !== "undefined" ? DEBRANCHE : []).filter((a) => a.theme === themeId);
    const hasLogisim = themeId === "architecture-os" && typeof LOGISIM_CIRCUITS !== "undefined";
    if (!tps.length && !fiches.length && !mps.length && !dbs.length && !hasLogisim) return null;

    const wrap = el("div", "extra-block du-block");
    wrap.appendChild(el("h2", null, "📦 Ressources du DIU"));
    wrap.appendChild(el("p", "extra-hint", "Du matériel issu de ma formation DIU NSI, rattaché à ce thème."));
    if (tps.length || fiches.length || mps.length || dbs.length) {
      const ul = el("div", "du-links");
      dbs.forEach((a) => {
        const b = el("button", "btn secondary", "🎲 " + a.titre);
        b.addEventListener("click", () => navigate("debranche"));
        ul.appendChild(b);
      });
      tps.forEach((t) => {
        const b = el("button", "btn secondary", (t.lang === "python" ? "🐍 " : "🖥️ ") + t.titre);
        b.addEventListener("click", () => navigate("tp"));
        ul.appendChild(b);
      });
      mps.forEach((p) => {
        const b = el("button", "btn secondary", "🐍 Projet — " + p.titre);
        b.addEventListener("click", () => navigate("tp"));
        ul.appendChild(b);
      });
      fiches.forEach((f) => {
        const b = el("button", "btn secondary", "📘 " + f.titre);
        b.addEventListener("click", () => navigate("tp"));
        ul.appendChild(b);
      });
      wrap.appendChild(ul);
    }
    if (hasLogisim) wrap.appendChild(makeLogisimBlock());
    return wrap;
  }

  // Ressources d'une autre formation, LIÉES avec attribution (jamais recopiées).
  function makeThemeExtResources(themeId) {
    const R = (typeof THEME_RESSOURCES_EXT !== "undefined" ? THEME_RESSOURCES_EXT : {})[themeId];
    if (!R) return null;
    const wrap = el("div", "extra-block du-block");
    wrap.appendChild(el("h2", null, "🔗 Pour aller plus loin — " + R.titre));
    wrap.appendChild(el("p", "extra-hint", "Support d'une autre formation (" + R.auteur + "), accessible en ligne."));
    const grid = el("div", "didac-grid");
    R.items.forEach((it) => {
      const a = el("a", "didac-card");
      a.href = /^https?:/i.test(it.url) ? it.url : R.base + it.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `<strong>${it.t} ↗</strong>`;
      grid.appendChild(a);
    });
    wrap.appendChild(grid);
    wrap.appendChild(el("p", "tp-source", "📎 Ces supports restent la propriété de leur auteur ; le site se contente de pointer vers eux."));
    return wrap;
  }

  /* ---------------- Vue : TP guidés (rubrique) ---------------- */
  let tpFilter = "all";
  function renderTP() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "🧪 TP guidés (DIU)"));
    header.appendChild(
      el(
        "p",
        "theme-intro",
        "Travaux pratiques pas-à-pas importés de mon DIU NSI : énoncé, code, questions et <strong>corrections masquées</strong> (clique pour révéler). Idéal à faire au poste, ou sur Capytale/Thonny."
      )
    );
    viewTheme.appendChild(header);

    // Filtre par thème
    const themesPresents = [];
    GUIDED_TP.concat(FICHES_PLUS).forEach((x) => {
      if (!themesPresents.includes(x.theme)) themesPresents.push(x.theme);
    });
    const bar = el("div", "du-filter");
    const mkBtn = (label, val) => {
      const b = el("button", "btn secondary" + (val === tpFilter ? " active-filter" : ""));
      b.textContent = label;
      b.addEventListener("click", () => {
        tpFilter = val;
        renderTP();
      });
      return b;
    };
    bar.appendChild(mkBtn("Tout", "all"));
    themesPresents.forEach((id) => bar.appendChild(mkBtn(themeTitle(id), id)));
    if (typeof MINI_PROJETS !== "undefined") bar.appendChild(mkBtn("🐍 Mini-projets", "miniprojets"));
    if (typeof LOGISIM_CIRCUITS !== "undefined") bar.appendChild(mkBtn("🔌 Logisim", "logisim"));
    viewTheme.appendChild(bar);

    const show = (id) => tpFilter === "all" || tpFilter === id;

    if (tpFilter === "logisim") {
      viewTheme.appendChild(el("h2", "home-h2", "🔌 Circuits Logisim"));
      viewTheme.appendChild(makeLogisimBlock());
    } else if (tpFilter === "miniprojets") {
      viewTheme.appendChild(el("h2", "home-h2", "🐍 Mini-projets Python"));
      MINI_PROJETS.forEach((p) => viewTheme.appendChild(makeMiniProjet(p)));
    } else {
      GUIDED_TP.filter((t) => show(t.theme)).forEach((t) => viewTheme.appendChild(makeTPCard(t)));
      FICHES_PLUS.filter((f) => show(f.theme)).forEach((f) => viewTheme.appendChild(makeFichePlus(f)));
      const mps = (typeof MINI_PROJETS !== "undefined" ? MINI_PROJETS : []).filter((p) => show(p.theme));
      if (mps.length) {
        viewTheme.appendChild(el("h2", "home-h2", "🐍 Mini-projets Python"));
        mps.forEach((p) => viewTheme.appendChild(makeMiniProjet(p)));
      }
      if (tpFilter === "all" || tpFilter === "architecture-os") {
        viewTheme.appendChild(el("h2", "home-h2", "🔌 Circuits Logisim (Architectures)"));
        viewTheme.appendChild(makeLogisimBlock());
      }
    }
    scrollTop();
  }

  /* ====================================================================
     PLATEFORME : connexion, rôles prof/élève, espace « Ma classe »
     ==================================================================== */
  const P = window.Platform;

  function applyRole() {
    const teacher = P.isTeacher();
    const student = P.isStudent();
    document.body.classList.toggle("role-teacher", teacher);
    document.body.classList.toggle("role-student", student);
    applyTeacher(teacher); // le prof voit automatiquement tous les corrigés
    document.body.classList.toggle(
      "corrections-pushed",
      student && P.isCorrectionsPushed()
    );
    const tt = $("#teacherToggle");
    if (tt) tt.style.display = "none"; // le rôle pilote la visibilité, plus le bouton
    renderAccountBox();
  }

  function renderAccountBox() {
    const box = $("#accountBox");
    if (!box) return;
    const s = P.getSession();
    if (!s) { box.innerHTML = ""; return; }
    const role = s.role === "teacher" ? "👩‍🏫 Prof" : "🎓 Élève";
    box.innerHTML =
      `<span class="acc-name" title="${escapeHtml(s.name)}">${role} · ${escapeHtml(s.name)}</span>` +
      `<button class="acc-logout" title="Se déconnecter">Quitter</button>`;
    box.querySelector(".acc-logout").addEventListener("click", () => {
      P.logout();
      progress = {}; // n'expose pas la progression au prochain utilisateur du poste
      localStorage.removeItem(PROG_KEY);
      location.hash = "";
      showAuthGate();
    });
  }

  /* ---------------- Écran de connexion ---------------- */
  function showAuthGate() {
    const gate = $("#authGate");
    document.body.classList.add("gated");
    gate.classList.remove("hidden");
    gate.innerHTML = `
      <div class="auth-card">
        <div class="auth-brand"><span class="brand-logo">&lt;/&gt;</span> NSI Première</div>
        <p class="auth-lead">Plateforme de la classe — choisis ton espace.</p>
        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="eleve">🎓 Espace élève</button>
          <button class="auth-tab" data-tab="prof">👩‍🏫 Espace professeur</button>
        </div>
        <form class="auth-form" data-form="eleve">
          <label>Code de la classe<input name="code" placeholder="NSI-XXXX" autocomplete="off" required></label>
          <label>Ton nom (celui donné par le prof)<input name="nom" placeholder="Prénom Nom" autocomplete="off" required></label>
          <div class="auth-error"></div>
          <button type="submit" class="btn">Entrer dans la classe</button>
        </form>
        <form class="auth-form hidden" data-form="prof">
          ${
            P.mode === "firebase"
              ? `<label>Adresse e-mail<input name="email" type="email" placeholder="prof@exemple.fr" autocomplete="username" required></label>
                 <label>Mot de passe<input name="password" type="password" placeholder="••••••" autocomplete="current-password" required></label>`
              : `<label>Ton nom<input name="nom" placeholder="M./Mme" autocomplete="off" required></label>`
          }
          <div class="auth-error"></div>
          <button type="submit" class="btn">Ouvrir l'espace professeur</button>
          <p class="auth-note">${
            P.mode === "firebase"
              ? "Première connexion ? Ton compte est créé automatiquement. Tes classes sont synchronisées."
              : "Mode local : tes classes restent sur ce navigateur."
          }</p>
        </form>
      </div>`;

    gate.querySelectorAll(".auth-tab").forEach((t) =>
      t.addEventListener("click", () => {
        gate.querySelectorAll(".auth-tab").forEach((x) => x.classList.toggle("active", x === t));
        gate.querySelectorAll(".auth-form").forEach((f) =>
          f.classList.toggle("hidden", f.dataset.form !== t.dataset.tab)
        );
      })
    );

    function busy(form, on) {
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = on;
      btn.textContent = on ? "Connexion…" : btn.dataset.label || btn.textContent;
    }
    gate.querySelector('[data-form="eleve"]').addEventListener("submit", async (e) => {
      e.preventDefault();
      const err = e.target.querySelector(".auth-error");
      err.textContent = "";
      busy(e.target, true);
      const res = await P.loginStudent(e.target.code.value, e.target.nom.value);
      busy(e.target, false);
      if (res && res.error) { err.textContent = "❌ " + res.error; return; }
      enterApp();
    });
    gate.querySelector('[data-form="prof"]').addEventListener("submit", async (e) => {
      e.preventDefault();
      const err = e.target.querySelector(".auth-error");
      err.textContent = "";
      busy(e.target, true);
      const res =
        P.mode === "firebase"
          ? await P.loginTeacher(e.target.email.value, e.target.password.value)
          : await P.loginTeacher(e.target.nom.value);
      busy(e.target, false);
      if (res && res.error) { err.textContent = "❌ " + res.error; return; }
      if (res && res.pending) {
        err.innerHTML =
          "⏳ Ton accès professeur est <strong>en attente de validation</strong> par l'administrateur (" +
          P.adminEmail + "). Tu pourras te connecter une fois approuvé.";
        return;
      }
      enterApp();
    });
  }

  function enterApp() {
    $("#authGate").classList.add("hidden");
    document.body.classList.remove("gated");
    startApp();
  }

  /* ---------------- Espace « Ma classe » (prof) ---------------- */
  let selectedClassId = null;
  function renderClasse() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "🏫 Ma classe"));
    header.appendChild(el("p", "theme-intro", "Crée ta classe, ajoute tes élèves et suis leur progression. Donne-leur le <strong>code de classe</strong> pour qu'ils se connectent."));
    viewTheme.appendChild(header);

    // Barre des classes + création
    const classes = P.getClasses();
    if (!selectedClassId && classes.length) selectedClassId = classes[0].id;
    const bar = el("div", "du-filter");
    classes.forEach((c) => {
      const b = el("button", "btn secondary" + (c.id === selectedClassId ? " active-filter" : ""));
      b.textContent = c.name;
      b.addEventListener("click", () => { selectedClassId = c.id; renderClasse(); });
      bar.appendChild(b);
    });
    const bNew = el("button", "btn", "+ Nouvelle classe");
    bNew.addEventListener("click", () => {
      const nom = prompt("Nom de la classe (ex. 1NSI groupe 1) :", "1NSI");
      if (nom) { const c = P.createClass(nom); selectedClassId = c.id; renderClasse(); }
    });
    bar.appendChild(bNew);
    viewTheme.appendChild(bar);

    if (!classes.length) {
      viewTheme.appendChild(el("div", "info-callout", "👋 Commence par créer une classe avec « + Nouvelle classe »."));
      scrollTop();
      return;
    }

    const cls = P.getClass(selectedClassId);
    if (!cls) { selectedClassId = classes[0].id; return renderClasse(); }

    // En-tête classe : code + corrigés + suppression
    const head = el("div", "classe-head");
    head.innerHTML =
      `<div><span class="muted-text">Code de classe (à donner aux élèves)</span>` +
      `<div class="classe-code">${cls.code}</div></div>`;
    const pushWrap = el("label", "switch-wrap");
    const pushed = P.isCorrectionsPushed(cls.id);
    pushWrap.innerHTML = `<input type="checkbox" ${pushed ? "checked" : ""}> Pousser les corrigés aux élèves`;
    pushWrap.querySelector("input").addEventListener("change", (e) => {
      P.setCorrectionsPushed(cls.id, e.target.checked);
    });
    head.appendChild(pushWrap);
    viewTheme.appendChild(head);

    // Ajout d'élève
    const addForm = el("form", "classe-add");
    addForm.innerHTML = `<input name="nom" placeholder="Nom d'un élève à ajouter" autocomplete="off"><button class="btn" type="submit">Ajouter</button>`;
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (P.addStudent(cls.id, e.target.nom.value)) renderClasse();
    });
    viewTheme.appendChild(addForm);

    // Tableau des élèves
    const students = P.getStudents(cls.id);
    if (!students.length) {
      viewTheme.appendChild(el("p", "muted-text", "Aucun élève pour l'instant. Ajoute-les ci-dessus."));
    } else {
      const tbl = el("div", "classe-table");
      const rows = students
        .map((st) => {
          const prog = P.getProgress(st.uid);
          const sum = statsFrom(prog.qcm, prog.exos, prog.activite);
          const nbCap = Object.values(prog.capacites || {}).filter(Boolean).length;
          return (
            `<tr data-uid="${st.uid}">` +
            `<td><strong>${escapeHtml(st.name)}</strong></td>` +
            `<td class="num" title="thèmes travaillés · ${sum.activites} activité(s) au total">${sum.progression} %</td>` +
            `<td class="num" title="${sum.themesValidés} thème(s) au QCM parfait">${sum.themesValidés}/${COURSES.length}</td>` +
            `<td class="num" title="réussite moyenne aux QCM faits">${sum.reussite} %</td>` +
            `<td class="num">${nbCap}</td>` +
            `<td><input class="note-input" value="${escapeHtml(prog.note || "")}" placeholder="note/appréc."></td>` +
            `<td><button class="btn secondary btn-detail">Capacités</button> <button class="btn secondary btn-del">✕</button></td>` +
            `</tr>`
          );
        })
        .join("");
      tbl.innerHTML =
        `<table><tr><th>Élève</th><th>Progression</th><th>Validés</th><th>Réussite</th><th>Capacités</th><th>Note / appréciation</th><th></th></tr>${rows}</table>`;
      tbl.querySelectorAll("tr[data-uid]").forEach((tr) => {
        const u = tr.dataset.uid;
        tr.querySelector(".note-input").addEventListener("change", (e) => P.setNote(u, e.target.value));
        tr.querySelector(".btn-del").addEventListener("click", () => {
          if (confirm("Retirer cet élève ?")) { P.removeStudent(u); renderClasse(); }
        });
        tr.querySelector(".btn-detail").addEventListener("click", () => openCapacites(u, students.find((s) => s.uid === u).name));
      });
      viewTheme.appendChild(tbl);
    }
    scrollTop();
  }

  // Grille des capacités BO d'un élève (cochables par le prof)
  function openCapacites(studentUid, name) {
    const prog = P.getProgress(studentUid);
    const wrap = el("div", "extra-block");
    wrap.appendChild(el("h2", null, "✅ Capacités — " + name));
    COURSES.slice().sort((a, b) => a.num - b.num).forEach((c) => {
      const det = el("details", "cap-theme");
      const done = (c.capacites || []).filter((_, i) => prog.capacites[c.id + ":" + i]).length;
      det.appendChild(el("summary", null, `${c.emoji} ${c.title} — ${done}/${(c.capacites || []).length}`));
      (c.capacites || []).forEach((cap, i) => {
        const key = c.id + ":" + i;
        const lab = el("label", "cap-item");
        const cb = el("input");
        cb.type = "checkbox";
        cb.checked = !!prog.capacites[key];
        cb.addEventListener("change", () => P.setCapacite(studentUid, key, cb.checked));
        lab.appendChild(cb);
        lab.appendChild(el("span", null, cap));
        det.appendChild(lab);
      });
      wrap.appendChild(det);
    });
    // remplace la vue par la grille, avec retour
    viewTheme.innerHTML = "";
    const back = el("span", "crumb", "← Retour à la classe");
    back.addEventListener("click", () => renderClasse());
    viewTheme.appendChild(back);
    viewTheme.appendChild(wrap);
    scrollTop();
  }

  /* ---------------- Espace admin : valider les comptes professeurs ---------------- */
  function renderTeachers() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "👤 Comptes professeurs"));
    header.appendChild(
      el("p", "theme-intro", `Seul l'administrateur (<strong>${P.adminEmail}</strong>) accède à l'espace professeur. Les autres demandes apparaissent ici et doivent être <strong>validées</strong>.`)
    );
    viewTheme.appendChild(header);

    const box = el("div", "classe-table");
    box.innerHTML = "<p class='muted-text'>Chargement…</p>";
    viewTheme.appendChild(box);

    P.fetchTeachers().then((teachers) => {
      const order = { pending: 0, approved: 1, rejected: 2 };
      teachers.sort((a, b) => (order[a.status] ?? 3) - (order[b.status] ?? 3));
      if (!teachers.length) { box.innerHTML = "<p class='muted-text'>Aucune demande pour l'instant.</p>"; return; }
      const label = { pending: "⏳ en attente", approved: "✅ validé", rejected: "⛔ refusé" };
      const rows = teachers.map((t) =>
        `<tr data-uid="${t.uid}"><td><strong>${escapeHtml(t.email || t.name || "?")}</strong></td>` +
        `<td>${label[t.status] || t.status}</td>` +
        `<td>${t.email === P.adminEmail ? "<em>admin</em>" : `<button class="btn secondary t-approve">Valider</button> <button class="btn secondary t-reject">Refuser</button>`}</td></tr>`
      ).join("");
      box.innerHTML = `<table><tr><th>Compte</th><th>Statut</th><th>Action</th></tr>${rows}</table>`;
      box.querySelectorAll("tr[data-uid]").forEach((tr) => {
        const u = tr.dataset.uid;
        const ap = tr.querySelector(".t-approve");
        const rj = tr.querySelector(".t-reject");
        if (ap) ap.addEventListener("click", () => { P.approveTeacher(u); renderTeachers(); });
        if (rj) rj.addEventListener("click", () => { P.rejectTeacher(u); renderTeachers(); });
      });
    });
    scrollTop();
  }

  /* ---------------- Vue : Activités débranchées (sans ordinateur) ---------------- */
  function makeDebrancheCard(a) {
    const card = el("div", "debranche-card");
    const head = el("div", "exo-head");
    head.innerHTML = `<span class="db-emoji">${a.emoji}</span><span class="exo-n">${a.titre}</span>`;
    card.appendChild(head);
    const meta = el("div", "proj-meta");
    meta.innerHTML =
      `<button class="tp-theme-link">→ ${themeTitle(a.theme)}</button>` +
      `<span class="chip">⏱️ ${a.duree}</span>` +
      `<span class="chip">🚫💻 sans ordinateur</span>`;
    meta.querySelector(".tp-theme-link").addEventListener("click", () => navigate(a.theme));
    card.appendChild(meta);

    card.appendChild(el("div", "db-block", `<strong>🎯 Objectif</strong><p>${a.objectif}</p>`));
    card.appendChild(el("div", "db-block", `<strong>📘 Capacité BO</strong><p>${a.bo}</p>`));
    card.appendChild(el("div", "db-block", `<strong>🧰 Matériel</strong><ul>${a.materiel.map((m) => `<li>${m}</li>`).join("")}</ul>`));
    card.appendChild(el("div", "db-block", `<strong>🗺️ Déroulé</strong><ol>${a.deroule.map((s) => `<li>${s}</li>`).join("")}</ol>`));
    if (a.variante) card.appendChild(el("div", "db-block", `<strong>⭐ Variante</strong><p>${a.variante}</p>`));

    const tools = el("div", "proj-tools");
    const bPrint = el("button", "btn secondary", "🖨️ Imprimer la fiche");
    bPrint.addEventListener("click", () => printDebranche(a));
    tools.appendChild(bPrint);
    card.appendChild(tools);

    if (a.noteProf) {
      const det = el("details", "corrige teacher-block");
      det.appendChild(el("summary", null, "👩‍🏫 Note pour le prof"));
      det.appendChild(el("div", "corrige-body", a.noteProf));
      card.appendChild(det);
    }
    return card;
  }

  function renderDebranche() {
    viewTheme.innerHTML = "";
    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "🎲 Activités débranchées"));
    header.appendChild(
      el("p", "theme-intro", "Des activités <strong>sans ordinateur</strong>, à faire en <strong>îlot</strong> : comprendre une notion en la vivant, avant de coder. Prêtes à animer (objectif, matériel, déroulé, variante).")
    );
    viewTheme.appendChild(header);
    (typeof DEBRANCHE !== "undefined" ? DEBRANCHE : []).forEach((a) => viewTheme.appendChild(makeDebrancheCard(a)));
    scrollTop();
  }

  function printDebranche(a) {
    openPrint(
      "Activité débranchée — " + a.titre,
      `<h1>${a.emoji} ${a.titre}</h1>` +
        `<p class="intro">${themeTitle(a.theme)} · ${a.duree} · sans ordinateur</p>` +
        `<h2>🎯 Objectif</h2><p>${a.objectif}</p>` +
        `<h2>📘 Capacité (BO)</h2><p>${a.bo}</p>` +
        `<h2>🧰 Matériel</h2><ul>${a.materiel.map((m) => `<li>${m}</li>`).join("")}</ul>` +
        `<h2>🗺️ Déroulé</h2><ol>${a.deroule.map((s) => `<li>${s}</li>`).join("")}</ol>` +
        (a.variante ? `<h2>⭐ Variante</h2><p>${a.variante}</p>` : "") +
        (a.noteProf ? `<h2>👩‍🏫 Note pour le prof</h2><p>${a.noteProf}</p>` : "")
    );
  }

  /* ---------------- Vue : Didactique & ressources (prof) ---------------- */
  const didacUrl = (base, file) => (/^https?:/i.test(file) ? file : base + file);

  function renderDidactique() {
    viewTheme.innerHTML = "";
    const D = typeof DIDACTIQUE !== "undefined" ? DIDACTIQUE : null;
    const base = typeof DIDACTIQUE_BASE !== "undefined" ? DIDACTIQUE_BASE : "";

    const header = el("div", "theme-header");
    const crumb = el("span", "crumb", "⌂ Accueil");
    crumb.addEventListener("click", () => navigate("home"));
    header.appendChild(crumb);
    header.appendChild(el("h1", null, "📚 Enseigner la NSI en Première"));
    header.appendChild(
      el("p", "theme-intro", "Repères pour préparer et donner le cours : programme & organisation, didactique, culture à transmettre, mise en œuvre. Clique un thème pour ouvrir sa <strong>fiche</strong> ; le lien « source ↗ » mène à la page d'origine.")
    );
    viewTheme.appendChild(header);
    if (!D) {
      scrollTop();
      return;
    }

    // En-tête de la carte (repères pour enseigner).
    const card = el("div", "agenda-card");
    const top = el("div", "agenda-top");
    const titWrap = el("div");
    titWrap.appendChild(el("div", "agenda-bloc", `<span class="agenda-badge">👩‍🏫 Prof</span>${D.bloc}`));
    titWrap.appendChild(el("div", "agenda-meta", D.meta));
    top.appendChild(titWrap);
    const idx = el("a", "agenda-index-btn", "Ouvrir l'index ↗");
    idx.href = base + D.index;
    idx.target = "_blank";
    idx.rel = "noopener";
    top.appendChild(idx);
    card.appendChild(top);

    // Une ligne d'item : bouton « fiche interne » (si fiche) + lien source.
    const makeItemRow = (it) => {
      const row = el("div", "agenda-item");
      if (it.fiche) {
        const btn = el("button", "agenda-fiche-btn", `<span class="agenda-item-ico">📝</span><span class="agenda-item-title">${it.t}</span>`);
        btn.addEventListener("click", () => showDidactiqueFiche(it, base));
        row.appendChild(btn);
        if (it.file) {
          const a = el("a", "agenda-source", "source ↗");
          a.href = didacUrl(base, it.file);
          a.target = "_blank";
          a.rel = "noopener";
          a.title = "Page d'origine (B. Mermet)";
          row.appendChild(a);
        }
      } else {
        const a = el("a", "agenda-link-ext", `<span class="agenda-item-ico">🔗</span><span class="agenda-item-title">${it.t}</span><span class="agenda-arrow">↗</span>`);
        a.href = didacUrl(base, it.file);
        a.target = "_blank";
        a.rel = "noopener";
        row.appendChild(a);
      }
      return row;
    };

    // Parties dépliables (la première ouverte).
    (D.parties || []).forEach((p, i) => {
      const det = el("details", "agenda-part");
      if (i === 0) det.open = true;
      det.appendChild(el("summary", "agenda-part-head", `${p.titre}${p.duree ? ` <span class="agenda-duree">· ${p.duree}</span>` : ""}`));
      const body = el("div", "agenda-part-body");
      if (p.groupes) {
        p.groupes.forEach((g) => {
          body.appendChild(el("div", "agenda-sub", g.sous));
          g.items.forEach((it) => body.appendChild(makeItemRow(it)));
        });
      } else {
        (p.items || []).forEach((it) => body.appendChild(makeItemRow(it)));
      }
      det.appendChild(body);
      card.appendChild(det);
    });
    viewTheme.appendChild(card);

    // Ressources complémentaires (utiles en classe).
    if (D.complement && D.complement.length) {
      viewTheme.appendChild(el("h2", "home-h2", "🧰 Ressources complémentaires"));
      const grid = el("div", "didac-grid");
      D.complement.forEach((it) => {
        const a = el("a", "didac-card");
        a.href = it.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.innerHTML = `<strong>${it.titre} ↗</strong><span>${it.desc}</span>`;
        grid.appendChild(a);
      });
      viewTheme.appendChild(grid);
    }

    viewTheme.appendChild(
      el("p", "tp-source", "📎 Source : formation DIU NSI — Bruno Mermet (GREYC, Université Le Havre). Les fiches sont des résumés rédigés pour le site ; les supports d'origine restent la propriété de leur auteur (liens « source »).")
    );
    scrollTop();
  }

  // Lecteur de fiche interne (document de lecture clair, façon DU).
  function showDidactiqueFiche(it, base) {
    viewTheme.innerHTML = "";
    const back = el("button", "fiche-back", "← Retour à l'ordre du jour");
    back.addEventListener("click", () => renderDidactique());
    viewTheme.appendChild(back);

    const doc = el("article", "fiche-doc");
    doc.appendChild(el("div", "fiche-eyebrow", "Didactique · DIU NSI — B. Mermet"));
    doc.appendChild(el("h1", "fiche-title", it.t));

    const tools = el("div", "fiche-tools");
    if (it.file) {
      const src = el("a", "btn secondary", "Page d'origine ↗");
      src.href = didacUrl(base, it.file);
      src.target = "_blank";
      src.rel = "noopener";
      tools.appendChild(src);
    }
    const pr = el("button", "btn secondary", "🖨️ Imprimer");
    pr.addEventListener("click", () => openPrint("Fiche — " + it.t, `<h1>${it.t}</h1>` + it.fiche));
    tools.appendChild(pr);
    doc.appendChild(tools);

    doc.appendChild(el("div", "fiche-body", it.fiche));
    viewTheme.appendChild(doc);
    scrollTop();
  }

  /* ---------------- Impressions communes ---------------- */
  function openPrint(title, bodyHtml) {
    const w = window.open("", "_blank");
    if (!w) {
      alert("🖨️ Le navigateur a bloqué la fenêtre d'impression. Autorise les pop-ups pour ce site.");
      return;
    }
    w.document.write(
      `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>${title}</title><style>` +
        `*{box-sizing:border-box;font-family:system-ui,Segoe UI,Roboto,sans-serif}` +
        `body{margin:1.5cm;color:#1f2733;line-height:1.5}` +
        `h1{font-size:18pt;margin:0 0 .2cm}h2{font-size:13pt;margin:.7cm 0 .2cm;border-bottom:1px solid #ccc}` +
        `h3{font-size:11pt;margin:.5cm 0 .1cm}.intro{color:#444;font-size:10.5pt}` +
        `ul,ol{font-size:10.5pt;margin:.2cm 0 .2cm 0;padding-left:.8cm}li{margin:.1cm 0}` +
        `table{border-collapse:collapse;width:100%;font-size:10pt;margin:.3cm 0}` +
        `td,th{border:1px solid #999;padding:.2cm .3cm;text-align:left}th{background:#eee}` +
        `.field{border:1px solid #999;border-radius:6px;min-height:1.1cm;margin:.15cm 0 .4cm;padding:.15cm .3cm}` +
        `.lbl{font-weight:700;font-size:10.5pt}code{background:#eee;padding:0 .15cm;border-radius:3px}` +
        `.no-print{margin-bottom:.5cm}@media print{.no-print{display:none}}` +
        `</style></head><body>` +
        `<button class="no-print" onclick="window.print()" style="padding:.3cm .7cm;font-size:11pt;cursor:pointer">🖨️ Imprimer</button>` +
        bodyHtml +
        `</body></html>`
    );
    w.document.close();
    w.focus();
  }

  function printFicheIlot() {
    const champs = FICHE_ILOT.champs
      .map((c) => `<div class="lbl">${c}</div><div class="field"></div>`)
      .join("");
    openPrint(
      FICHE_ILOT.titre,
      `<h1>📄 ${FICHE_ILOT.titre}</h1><p class="intro">${FICHE_ILOT.intro}</p>${champs}`
    );
  }

  function printProject(p) {
    const phases = p.phases.map((ph) => `<li>${ph}</li>`).join("");
    const notions = p.notions.map((n) => `<li>${n}</li>`).join("");
    const tests = (p.tests || []).map((t) => `<li>${t}</li>`).join("");
    const roles = PROJECT_ROLES.map((r) => `<li><strong>${r.nom}</strong> — ${r.desc}</li>`).join("");
    let total = 0;
    const grille = PROJECT_GRILLE.map((g) => {
      total += g.points;
      return `<tr><td>${g.critere}</td><td>${g.points}</td><td>${g.detail}</td></tr>`;
    }).join("");
    openPrint(
      `Projet ${p.num} — ${p.titre}`,
      `<h1>${p.emoji} Projet ${p.num} — ${p.titre}</h1>` +
        `<p class="intro">Niveau : ${p.niveau} · Durée : ${p.duree}</p>` +
        `<h2>🎯 Objectif</h2><p>${p.objectif}</p>` +
        `<h2>🧩 Situation-problème</h2><p>${p.situation}</p>` +
        `<h2>🧠 Notions travaillées</h2><ul>${notions}</ul>` +
        `<h2>🗺️ Les 5 phases</h2><ol>${phases}</ol>` +
        `<h2>👥 Rôles</h2><ul>${roles}</ul>` +
        (tests ? `<h2>🧪 Tests attendus</h2><ul>${tests}</ul>` : "") +
        (p.bonus ? `<h2>⭐ Bonus</h2><p>${p.bonus}</p>` : "") +
        `<h2>📊 Grille d'évaluation (/20)</h2><table><tr><th>Critère</th><th>Pts</th><th>Indicateur</th></tr>${grille}<tr><td><strong>Total</strong></td><td><strong>${total}</strong></td><td></td></tr></table>`
    );
  }

  /* ---------------- Recherche interne ---------------- */
  const norm = (s) =>
    String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");

  function buildSearchIndex() {
    const idx = [];
    COURSES.forEach((c) => {
      const txt = c.title + " " + c.intro + " " + c.sections.map((s) => s.title).join(" ");
      idx.push({ type: "Thème", icon: c.emoji, label: c.title, target: c.id, hay: norm(txt) });
    });
    PROJECTS.forEach((p) => {
      idx.push({
        type: "Projet",
        icon: p.emoji,
        label: p.titre,
        target: "projet:" + p.id,
        hay: norm(p.titre + " " + p.objectif + " " + p.notions.join(" ")),
      });
    });
    GLOSSARY.forEach((g) => {
      idx.push({
        type: "Glossaire",
        icon: "📖",
        label: g.terme,
        target: g.theme || "glossaire",
        hay: norm(g.terme + " " + g.def),
        sub: g.def,
      });
    });
    if (typeof METHODES !== "undefined") {
      METHODES.forEach((m) => {
        idx.push({ type: "Méthode", icon: "🧭", label: m.titre, target: "methodes", hay: norm(m.titre) });
      });
    }
    if (typeof GUIDED_TP !== "undefined") {
      GUIDED_TP.forEach((t) => {
        idx.push({ type: "TP", icon: t.lang === "python" ? "🐍" : "🖥️", label: t.titre, target: "tp", hay: norm(t.titre + " " + (t.intro || "")) });
      });
    }
    if (typeof MINI_PROJETS !== "undefined") {
      MINI_PROJETS.forEach((p) => {
        idx.push({ type: "Projet", icon: "🐍", label: p.titre, target: "tp", hay: norm(p.titre + " " + p.summary + " " + p.cat) });
      });
    }
    return idx;
  }
  const SEARCH_INDEX = buildSearchIndex();
  const searchInput = $("#searchInput");
  const searchResults = $("#searchResults");

  function runSearch(q) {
    const f = norm(q.trim());
    if (f.length < 2) {
      searchResults.classList.add("hidden");
      searchResults.innerHTML = "";
      return;
    }
    const hits = SEARCH_INDEX.filter((it) => it.hay.includes(f)).slice(0, 12);
    searchResults.innerHTML = "";
    if (!hits.length) {
      searchResults.innerHTML = `<div class="sr-empty">Aucun résultat pour « ${escapeHtml(q)} »</div>`;
    } else {
      hits.forEach((h) => {
        const item = el("button", "sr-item");
        item.innerHTML =
          `<span class="sr-icon">${h.icon}</span>` +
          `<span class="sr-main"><span class="sr-label">${escapeHtml(h.label)}</span>` +
          (h.sub ? `<span class="sr-sub">${escapeHtml(h.sub)}</span>` : "") +
          `</span><span class="sr-type">${h.type}</span>`;
        item.addEventListener("click", () => {
          searchInput.value = "";
          searchResults.classList.add("hidden");
          navigate(h.target);
        });
        searchResults.appendChild(item);
      });
    }
    searchResults.classList.remove("hidden");
  }
  searchInput.addEventListener("input", () => runSearch(searchInput.value));
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length >= 2) runSearch(searchInput.value);
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) searchResults.classList.add("hidden");
  });

  function scrollTop() {
    viewTheme.scrollIntoView({ behavior: "instant", block: "start" });
    $("#contenu").scrollTop = 0;
    window.scrollTo(0, 0);
  }

  /* ---------------- Routeur ---------------- */
  let currentTarget = "home";
  function navigate(target) {
    currentTarget = target && target !== "home" ? target : "";
    currentThemeId = null; // renderTheme le réaffectera pour les pages de thème
    if (target === "home" || !target) {
      viewHome.classList.remove("hidden");
      viewTheme.classList.add("hidden");
      setActiveNav("home");
      renderHome();
      location.hash = "";
    } else if (target === "projets") {
      showThemeView("projets");
      renderProjectsHome();
      location.hash = "projets";
    } else if (target.startsWith("projet:")) {
      showThemeView("projets");
      renderProject(target.slice(7));
      location.hash = target;
    } else if (target === "glossaire") {
      showThemeView("glossaire");
      renderGlossary();
      location.hash = "glossaire";
    } else if (target === "progression") {
      showThemeView("progression");
      renderProgression();
      location.hash = "progression";
    } else if (target === "methodes") {
      showThemeView("methodes");
      renderMethodes();
      location.hash = "methodes";
    } else if (target === "evaluations") {
      showThemeView("evaluations");
      renderEvaluations();
      location.hash = "evaluations";
    } else if (target === "bo") {
      showThemeView("bo");
      renderBO();
      location.hash = "bo";
    } else if (target === "tp") {
      showThemeView("tp");
      renderTP();
      location.hash = "tp";
    } else if (target === "classe") {
      if (!P.isTeacher()) return navigate("home");
      showThemeView("classe");
      renderClasse();
      location.hash = "classe";
    } else if (target === "profs") {
      if (!P.isAdmin()) return navigate("home");
      showThemeView("profs");
      renderTeachers();
      location.hash = "profs";
    } else if (target === "didactique") {
      if (!P.isTeacher()) return navigate("home");
      showThemeView("didactique");
      renderDidactique();
      location.hash = "didactique";
    } else if (target === "debranche") {
      showThemeView("debranche");
      renderDebranche();
      location.hash = "debranche";
    } else {
      const c = COURSES.find((x) => x.id === target);
      if (!c) return navigate("home");
      showThemeView(target);
      renderTheme(c);
      location.hash = target;
    }
    $("#contenu").focus({ preventScroll: true });
  }

  function showThemeView(activeTarget) {
    viewHome.classList.add("hidden");
    viewTheme.classList.remove("hidden");
    setActiveNav(activeTarget);
  }

  function isKnownTarget(t) {
    if (!t) return false;
    if (["projets", "glossaire", "progression", "methodes", "evaluations", "bo", "tp", "classe", "profs", "didactique", "debranche"].includes(t)) return true;
    if (t.startsWith("projet:")) return true;
    return !!COURSES.find((c) => c.id === t);
  }

  /* ---------------- Démarrage ---------------- */
  function startApp() {
    document.body.classList.remove("gated");
    applyRole();
    syncStudentProgress();
    buildNav();
    updateGlobalProgress();
    maybeSeedDemo();
    const initial = location.hash.replace("#", "");
    let target = isKnownTarget(initial) ? initial : "home";
    if (target === "classe" && !P.isTeacher()) target = "home";
    navigate(target);
  }

  // Données de démonstration : si le compte démo prof n'a aucune classe,
  // on crée une classe d'exemple + 3 élèves avec un peu de progression.
  function buildDemoSpec() {
    const qt = (t) => (typeof QUIZZES !== "undefined" && QUIZZES[t] ? QUIZZES[t].length : 0);
    const full = (t) => ({ answered: qt(t), correct: qt(t), total: qt(t) });
    const part = (t, frac, corrFrac) => {
      const tot = qt(t);
      const ans = Math.max(1, Math.round(tot * frac));
      return { answered: ans, correct: Math.round(ans * corrFrac), total: tot };
    };
    return {
      className: "1re NSI — Démo",
      students: [
        { name: "Ada Lovelace", note: "16 / 20 — excellent travail, continue ! 👏",
          qcm: { "histoire-informatique": full("histoire-informatique"), "donnees-base": full("donnees-base"),
                 "types-construits": full("types-construits"), "langages-prog": part("langages-prog", 0.7, 0.9) } },
        { name: "Alan Turing", note: "12 / 20 — bon début, revois les boucles.",
          qcm: { "histoire-informatique": full("histoire-informatique"), "donnees-base": part("donnees-base", 1, 0.7),
                 "langages-prog": part("langages-prog", 0.5, 0.7) } },
        { name: "Grace Hopper", note: "À encourager — viens me voir pour les bases. 🙂",
          qcm: { "donnees-base": part("donnees-base", 0.4, 0.6) } },
      ],
    };
  }
  function maybeSeedDemo() {
    const s = P.getSession();
    if (!s || !s.demo || !P.ensureDemoData) return;
    P.ensureDemoData(buildDemoSpec()).then((seeded) => {
      if (seeded && location.hash.replace("#", "") === "classe") renderClasse();
    });
  }

  // Rafraîchissement temps réel (snapshots Firebase) : met à jour l'UI.
  function handlePlatformData() {
    if (!P.getSession()) return;
    applyRole(); // pour l'élève : révèle/masque les corrigés poussés en direct
    if (P.isStudent()) {
      syncStudentProgress();
      updateGlobalProgress();
      const active = navList.querySelector(".nav-link.active");
      buildNav();
      if (active) setActiveNav(active.dataset.target);
      const noteCard = document.getElementById("studentNoteCard");
      if (noteCard) fillStudentNote(noteCard); // note mise à jour en direct
    }
    if (P.isTeacher() && location.hash.replace("#", "") === "classe" && !document.querySelector(".cap-theme")) {
      renderClasse();
    }
  }
  P.onData = handlePlatformData;

  document.body.classList.add("gated"); // page neutre pendant l'attente de l'auth
  P.ready(function () {
    if (P.getSession()) startApp();
    else showAuthGate();
  });

  window.addEventListener("hashchange", () => {
    if (!P.getSession()) return;
    const t = location.hash.replace("#", "");
    const current = viewTheme.classList.contains("hidden") ? "home" : "theme";
    // évite les boucles : ne renavigue que si nécessaire
    if (isKnownTarget(t)) {
      if (location.hash.replace("#", "") !== currentTarget) navigate(t);
    } else if (!t && current !== "home") {
      navigate("home");
    }
  });
})();
