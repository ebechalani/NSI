/* =====================================================================
   platform.js — Couche « plateforme » : comptes, rôles, classes, suivi.
   ---------------------------------------------------------------------
   PHASE 1 : fonctionne en LOCAL (localStorage) — utile pour tester toute
   l'expérience prof/élève sur une même machine.
   PHASE 2 : sera branché sur Firebase (Auth + Firestore) pour la synchro
   réelle entre le poste du prof et ceux des élèves (voir SETUP-FIREBASE.md).
   L'API window.Platform reste identique : seule l'implémentation du
   stockage changera (le reste de l'appli n'a pas à le savoir).
   ===================================================================== */

(function () {
  "use strict";

  const K = {
    session: "nsi-session",
    classes: "nsi-classes",
    students: "nsi-students",
    progress: "nsi-progress",
    pushed: "nsi-pushed", // corrigés poussés aux élèves, par classe
  };

  function load(key, def) {
    try {
      return JSON.parse(localStorage.getItem(key)) || def;
    } catch (e) {
      return def;
    }
  }
  function save(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
  function uid(prefix) {
    return (prefix || "id") + "-" + Math.random().toString(36).slice(2, 9);
  }
  function classCode() {
    // Code lisible à dicter en classe (ex. NSI-7F3K)
    const c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 4; i++) s += c[Math.floor(Math.random() * c.length)];
    return "NSI-" + s;
  }

  /* ---------------- Session ---------------- */
  let session = load(K.session, null); // {role, uid, name, classId}

  function getSession() {
    return session;
  }
  function isTeacher() {
    return !!session && session.role === "teacher";
  }
  function isStudent() {
    return !!session && session.role === "student";
  }
  function logout() {
    session = null;
    localStorage.removeItem(K.session);
  }

  function loginTeacher(name) {
    session = { role: "teacher", uid: "prof", name: name || "Professeur", classId: null };
    save(K.session, session);
    return session;
  }

  // L'élève rejoint avec le code de classe + son nom (compte créé par le prof).
  function loginStudent(code, name) {
    const cls = getClasses().find((c) => c.code.toUpperCase() === String(code).trim().toUpperCase());
    if (!cls) return { error: "Code de classe inconnu." };
    const students = getStudents(cls.id);
    let st = students.find((s) => norm(s.name) === norm(name));
    if (!st) return { error: "Élève introuvable dans cette classe. Demande au professeur de t'ajouter." };
    session = { role: "student", uid: st.uid, name: st.name, classId: cls.id };
    save(K.session, session);
    return session;
  }

  const norm = (s) =>
    String(s).trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ");

  /* ---------------- Classes (prof) ---------------- */
  function getClasses() {
    return load(K.classes, []);
  }
  function getClass(id) {
    return getClasses().find((c) => c.id === id) || null;
  }
  function createClass(name) {
    const classes = getClasses();
    const cls = { id: uid("cls"), code: classCode(), name: name || "Ma classe", createdAt: Date.now() };
    classes.push(cls);
    save(K.classes, classes);
    return cls;
  }
  function renameClass(id, name) {
    const classes = getClasses();
    const c = classes.find((x) => x.id === id);
    if (c) { c.name = name; save(K.classes, classes); }
  }
  function deleteClass(id) {
    save(K.classes, getClasses().filter((c) => c.id !== id));
    save(K.students, getStudents().filter((s) => s.classId !== id));
  }

  /* ---------------- Élèves (créés par le prof) ---------------- */
  function getStudents(classId) {
    const all = load(K.students, []);
    return classId ? all.filter((s) => s.classId === classId) : all;
  }
  function addStudent(classId, name) {
    if (!name || !name.trim()) return null;
    const all = load(K.students, []);
    const st = { uid: uid("eleve"), classId, name: name.trim(), createdAt: Date.now() };
    all.push(st);
    save(K.students, all);
    return st;
  }
  function removeStudent(studentUid) {
    save(K.students, getStudents().filter((s) => s.uid !== studentUid));
  }

  /* ---------------- Progression / suivi ---------------- */
  function allProgress() {
    return load(K.progress, {});
  }
  function getProgress(u) {
    const p = allProgress();
    return p[u] || { qcm: {}, exos: {}, capacites: {}, note: "", updatedAt: 0 };
  }
  function setProgress(u, data) {
    const p = allProgress();
    p[u] = Object.assign(getProgress(u), data, { updatedAt: Date.now() });
    save(K.progress, p);
  }
  // Appelé par l'appli quand l'élève (connecté) valide un QCM.
  function recordQcm(themeId, score, total) {
    if (!isStudent()) return;
    const prog = getProgress(session.uid);
    prog.qcm[themeId] = { score, total };
    setProgress(session.uid, prog);
  }
  function recordExo(key) {
    if (!isStudent()) return;
    const prog = getProgress(session.uid);
    prog.exos[key] = true;
    setProgress(session.uid, prog);
  }
  // Capacités validées (par le prof) : { capKey: bool }
  function setCapacite(studentUid, capKey, val) {
    const prog = getProgress(studentUid);
    prog.capacites[capKey] = val;
    setProgress(studentUid, prog);
  }
  function setNote(studentUid, note) {
    const prog = getProgress(studentUid);
    prog.note = note;
    setProgress(studentUid, prog);
  }

  /* ---------------- Corrigés poussés aux élèves ---------------- */
  function pushedMap() {
    return load(K.pushed, {});
  }
  function isCorrectionsPushed(classId) {
    const cid = classId || (session && session.classId);
    return !!pushedMap()[cid];
  }
  function setCorrectionsPushed(classId, val) {
    const m = pushedMap();
    m[classId] = !!val;
    save(K.pushed, m);
  }

  /* ---------------- Statistiques pour le tableau de bord prof ---------------- */
  function studentSummary(studentUid, courses) {
    const prog = getProgress(studentUid);
    let validés = 0;
    let nbQcm = 0;
    (courses || []).forEach((c) => {
      const q = prog.qcm[c.id];
      if (q) {
        nbQcm++;
        if (q.total > 0 && q.score === q.total) validés++;
      }
    });
    return {
      themesValidés: validés,
      qcmFaits: nbQcm,
      capacites: prog.capacites,
      note: prog.note,
      updatedAt: prog.updatedAt,
    };
  }

  window.Platform = {
    // mode (local pour l'instant ; "firebase" en phase 2)
    mode: "local",
    // session
    getSession, isTeacher, isStudent, logout, loginTeacher, loginStudent,
    // classes
    getClasses, getClass, createClass, renameClass, deleteClass,
    // élèves
    getStudents, addStudent, removeStudent,
    // progression
    getProgress, setProgress, recordQcm, recordExo, setCapacite, setNote, studentSummary,
    // corrigés
    isCorrectionsPushed, setCorrectionsPushed,
  };
})();
