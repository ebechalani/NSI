/* =====================================================================
   platform.js — Comptes, rôles, classes, suivi.
   ---------------------------------------------------------------------
   Deux modes, API identique pour le reste de l'appli :
   • FIREBASE (window.fbReady) : synchro temps réel prof ↔ élèves
       - prof : compte e-mail/mot de passe (1re connexion = création)
       - élève : connexion anonyme + rattachement par code de classe + nom
       - données dans Firestore (collections "classes" et "students" ;
         la progression vit dans le document élève)
   • LOCAL (repli) : tout dans localStorage (test sur une seule machine).

   Principe : un CACHE en mémoire (miroir localStorage) sert les lectures
   de façon SYNCHRONE ; les écritures mettent à jour le cache puis
   persistent (localStorage + Firestore). Les écoutes temps réel
   réconcilient le cache et déclenchent un nouveau rendu via onData().
   ===================================================================== */

(function () {
  "use strict";

  var FB = !!window.fbReady;
  var auth = FB ? window.fbAuth : null;
  var db = FB ? window.fbDB : null;

  // Administrateur unique : accès professeur réservé / validé par lui.
  var ADMIN_EMAIL = "ebechalani@gmail.com";

  // Comptes « démo prof » : accès professeur immédiat (sans validation admin),
  // mais SANS les droits admin (pas de gestion des comptes profs).
  var DEMO_EMAILS = ["prof.demo@nsi.app", "prof.demo2@nsi.app"];
  function isDemoEmail(e) { return DEMO_EMAILS.indexOf((e || "").toLowerCase()) !== -1; }

  var LS = { classes: "nsi-classes", students: "nsi-students", session: "nsi-session", link: "nsi-student-link" };

  function loadLS(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } }
  function saveLS(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
  function rid(p) { return (p || "id") + "-" + Math.random().toString(36).slice(2, 9); }
  function classCode() {
    var c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", s = "";
    for (var i = 0; i < 4; i++) s += c[Math.floor(Math.random() * c.length)];
    return "NSI-" + s;
  }
  var norm = function (s) {
    return String(s).trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ");
  };

  // ---- Cache (source synchrone pour les lectures) ----
  var cache = {
    session: loadLS(LS.session, null),
    classes: loadLS(LS.classes, []),
    students: loadLS(LS.students, []), // {uid, classId, teacherUid, name, qcm,exos,capacites,note, linkedUid}
  };
  function persistLocal() {
    saveLS(LS.classes, cache.classes);
    saveLS(LS.students, cache.students);
    if (cache.session) saveLS(LS.session, cache.session); else localStorage.removeItem(LS.session);
  }

  // ---- Hook de rafraîchissement (branché par app.js) ----
  var onData = null;
  function notify() { if (typeof onData === "function") { try { onData(); } catch (e) {} } }

  // ---- Lectures (synchrones depuis le cache) ----
  function getSession() { return cache.session; }
  function isTeacher() { return !!cache.session && cache.session.role === "teacher"; }
  function isStudent() { return !!cache.session && cache.session.role === "student"; }

  function getClasses() { return cache.classes.slice(); }
  function getClass(id) { return cache.classes.filter(function (c) { return c.id === id; })[0] || null; }
  function getStudents(classId) {
    return cache.students.filter(function (s) { return !classId || s.classId === classId; });
  }
  function studentByUid(u) { return cache.students.filter(function (s) { return s.uid === u; })[0] || null; }
  function getProgress(u) {
    var s = studentByUid(u);
    return s ? { qcm: s.qcm || {}, exos: s.exos || {}, capacites: s.capacites || {}, note: s.note || "", activite: s.activite || {} }
             : { qcm: {}, exos: {}, capacites: {}, note: "", activite: {} };
  }
  function studentSummary(u, courses) {
    var pr = getProgress(u), validés = 0, nbQcm = 0;
    var sumAns = 0, sumCorr = 0, sumTot = 0;
    var act = pr.activite || {};
    var totalActivites = 0;
    (courses || []).forEach(function (c) {
      var q = pr.qcm[c.id];
      if (q && q.total > 0) {
        // compat ancien format {score,total}
        var ans = q.answered != null ? q.answered : (q.score != null ? q.total : 0);
        var corr = q.correct != null ? q.correct : (q.score != null ? q.score : 0);
        if (ans > 0) nbQcm++;
        sumAns += ans; sumCorr += corr; sumTot += q.total;
        if (ans === q.total && corr === q.total) validés++;
      }
      totalActivites += act[c.id] || 0;
    });
    return {
      themesValidés: validés,
      qcmFaits: nbQcm,
      activites: totalActivites,
      progression: sumTot > 0 ? Math.round((sumAns / sumTot) * 100) : 0, // % de questions répondues (complétion)
      reussite: sumAns > 0 ? Math.round((sumCorr / sumAns) * 100) : 0, // % de bonnes réponses
      capacites: pr.capacites,
      note: pr.note,
    };
  }
  function isCorrectionsPushed(classId) {
    var cid = classId || (cache.session && cache.session.classId);
    var c = getClass(cid);
    return !!(c && c.pushed);
  }

  // ---- Écritures (cache + persistance) ----
  var warnedRules = false;
  function fbErr(e) {
    if (e && e.code === "permission-denied" && !warnedRules) {
      warnedRules = true;
      window.fbWriteError = true;
      console.warn("[Firestore] écriture refusée — colle les RÈGLES de sécurité (voir SETUP-FIREBASE.md). La synchro entre postes ne marchera pas tant que ce n'est pas fait.");
    }
  }
  function fbSet(coll, id, data) { if (FB && db) db.collection(coll).doc(id).set(data, { merge: true }).catch(fbErr); }
  function fbUpdatePath(coll, id, path, value) {
    if (!FB || !db) return;
    try {
      var fp = new firebase.firestore.FieldPath(path[0], path[1]);
      db.collection(coll).doc(id).update(fp, value).catch(fbErr);
    } catch (e) {}
  }
  function fbDelete(coll, id) { if (FB && db) db.collection(coll).doc(id).delete().catch(fbErr); }

  function newId(coll) {
    if (FB && db) return db.collection(coll).doc().id;
    return rid(coll === "classes" ? "cls" : "eleve");
  }

  function createClass(name) {
    var uid = cache.session ? cache.session.fbUid || "prof" : "prof";
    var cls = { id: newId("classes"), name: name || "Ma classe", code: classCode(), teacherUid: uid, pushed: false };
    cache.classes.push(cls); persistLocal(); notify();
    fbSet("classes", cls.id, { name: cls.name, code: cls.code, teacherUid: cls.teacherUid, pushed: false });
    return cls;
  }
  function renameClass(id, name) {
    var c = getClass(id); if (!c) return; c.name = name; persistLocal(); notify();
    fbSet("classes", id, { name: name });
  }
  function deleteClass(id) {
    cache.classes = cache.classes.filter(function (c) { return c.id !== id; });
    cache.students.filter(function (s) { return s.classId === id; }).forEach(function (s) { fbDelete("students", s.uid); });
    cache.students = cache.students.filter(function (s) { return s.classId !== id; });
    persistLocal(); notify(); fbDelete("classes", id);
  }
  function addStudent(classId, name) {
    if (!name || !name.trim()) return null;
    var teacherUid = cache.session ? cache.session.fbUid || "prof" : "prof";
    var st = { uid: newId("students"), classId: classId, teacherUid: teacherUid, name: name.trim(),
               qcm: {}, exos: {}, capacites: {}, note: "", linkedUid: null };
    cache.students.push(st); persistLocal(); notify();
    fbSet("students", st.uid, { classId: classId, teacherUid: teacherUid, name: st.name,
      qcm: {}, exos: {}, capacites: {}, note: "", linkedUid: null });
    return st;
  }
  function removeStudent(u) {
    cache.students = cache.students.filter(function (s) { return s.uid !== u; });
    persistLocal(); notify(); fbDelete("students", u);
  }
  // Garnit le compte démo (une seule fois) : crée une classe + des élèves avec
  // un peu de progression. Vérif AUTORITAIRE dans Firestore pour éviter les doublons.
  function ensureDemoData(spec) {
    if (!cache.session) return Promise.resolve(false);
    var uid = cache.session.fbUid || "prof";
    var doSeed = function () {
      var cls = createClass(spec.className);
      var writes = [];
      (spec.students || []).forEach(function (stu) {
        var st = addStudent(cls.id, stu.name);
        if (!st) return;
        var data = {};
        if (stu.qcm) data.qcm = stu.qcm;
        if (stu.exos) data.exos = stu.exos;
        if (stu.note != null) data.note = stu.note;
        st.qcm = data.qcm || {}; st.exos = data.exos || {}; if (data.note != null) st.note = data.note;
        if (FB && db) writes.push(db.collection("students").doc(st.uid).set(data, { merge: true }).catch(fbErr));
      });
      persistLocal(); notify();
      return Promise.all(writes).then(function () { return true; });
    };
    if (!FB || !db) { // mode local : se baser sur le cache
      if (cache.classes.some(function (c) { return c.teacherUid === uid; })) return Promise.resolve(false);
      return doSeed();
    }
    return db.collection("classes").where("teacherUid", "==", uid).limit(1).get()
      .then(function (q) { return q.empty ? doSeed() : false; })
      .catch(function () { return false; });
  }
  function recordQcm(themeId, answered, correct, total) {
    if (!isStudent()) return;
    var s = studentByUid(cache.session.uid); if (!s) return;
    var data = { answered: answered, correct: correct, total: total };
    s.qcm = s.qcm || {}; s.qcm[themeId] = data;
    persistLocal(); fbUpdatePath("students", s.uid, ["qcm", themeId], data);
  }
  function recordExo(key) { setExo(key, true); }
  function setExo(key, val) {
    if (!isStudent()) return;
    var s = studentByUid(cache.session.uid); if (!s) return;
    s.exos = s.exos || {};
    if (val) s.exos[key] = true; else delete s.exos[key];
    persistLocal();
    if (FB && db) {
      try {
        var fv = val ? true : firebase.firestore.FieldValue.delete();
        db.collection("students").doc(s.uid).update(new firebase.firestore.FieldPath("exos", key), fv).catch(fbErr);
      } catch (e) {}
    }
  }
  // Activité de travail dans un thème (code exécuté, texte à trou, exercice…),
  // comptée à chaque fois (les répétitions s'additionnent).
  function recordActivity(themeId) {
    if (!isStudent()) return;
    var s = studentByUid(cache.session.uid); if (!s) return;
    s.activite = s.activite || {};
    s.activite[themeId] = (s.activite[themeId] || 0) + 1;
    persistLocal();
    if (FB && db) {
      try {
        fbUpdatePath("students", s.uid, ["activite", themeId], firebase.firestore.FieldValue.increment(1));
      } catch (e) {}
    }
  }
  function setCapacite(u, capKey, val) {
    var s = studentByUid(u); if (!s) return;
    s.capacites = s.capacites || {}; s.capacites[capKey] = val;
    persistLocal(); notify(); fbUpdatePath("students", u, ["capacites", capKey], val);
  }
  function setNote(u, note) {
    var s = studentByUid(u); if (!s) return;
    s.note = note; persistLocal(); fbSet("students", u, { note: note });
  }
  function setCorrectionsPushed(classId, val) {
    var c = getClass(classId); if (c) { c.pushed = !!val; persistLocal(); notify(); }
    fbSet("classes", classId, { pushed: !!val });
  }

  // ---- Corrigés poussés PAR EXERCICE (clé = "themeId:exo:i") ----
  // Stockés sur le doc classe : pushedCorr = { cle: true }.
  function isCorrPushed(key) {
    if (cache.session && cache.session.role === "student") {
      var c = getClass(cache.session.classId);
      return !!(c && c.pushedCorr && c.pushedCorr[key]);
    }
    // prof : poussé si AU MOINS une de ses classes l'a
    var uid = cache.session && cache.session.fbUid;
    return cache.classes.some(function (c) {
      return c.teacherUid === uid && c.pushedCorr && c.pushedCorr[key];
    });
  }
  // Le prof pousse / retire le corrigé d'un exercice pour TOUTES ses classes.
  function setCorrPushed(key, val) {
    var uid = cache.session && cache.session.fbUid;
    cache.classes.filter(function (c) { return c.teacherUid === uid; }).forEach(function (c) {
      c.pushedCorr = c.pushedCorr || {};
      if (val) c.pushedCorr[key] = true; else delete c.pushedCorr[key];
      if (FB && db) {
        try {
          var fv = val ? true : firebase.firestore.FieldValue.delete();
          db.collection("classes").doc(c.id).update(new firebase.firestore.FieldPath("pushedCorr", key), fv).catch(fbErr);
        } catch (e) {}
      }
    });
    persistLocal(); notify();
  }

  // ---- Écoutes temps réel (Firebase) ----
  var unsub = [];
  function clearSubs() { unsub.forEach(function (u) { try { u(); } catch (e) {} }); unsub = []; }
  function subscribeTeacher(teacherUid) {
    if (!FB) return;
    clearSubs();
    unsub.push(db.collection("classes").where("teacherUid", "==", teacherUid).onSnapshot(function (snap) {
      cache.classes = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); });
      persistLocal(); notify();
    }, function () {}));
    unsub.push(db.collection("students").where("teacherUid", "==", teacherUid).onSnapshot(function (snap) {
      cache.students = snap.docs.map(function (d) { return Object.assign({ uid: d.id }, d.data()); });
      persistLocal(); notify();
    }, function () {}));
  }
  function subscribeStudent(studentId, classId) {
    if (!FB) return;
    clearSubs();
    unsub.push(db.collection("students").doc(studentId).onSnapshot(function (d) {
      if (!d.exists) return;
      var st = Object.assign({ uid: d.id }, d.data());
      cache.students = [st]; persistLocal(); notify();
    }, function () {}));
    unsub.push(db.collection("classes").doc(classId).onSnapshot(function (d) {
      if (!d.exists) return;
      var c = Object.assign({ id: d.id }, d.data());
      cache.classes = [c]; persistLocal(); notify();
    }, function () {}));
  }

  // ---- Établissement de session selon l'utilisateur Firebase ----
  var establishedUid = null;
  function establishSession(user) {
    if (!user) { cache.session = null; persistLocal(); return Promise.resolve(null); }
    if (user.isAnonymous) {
      var link = loadLS(LS.link, null);
      if (!link) { cache.session = null; return Promise.resolve(null); }
      return Promise.all([
        db.collection("students").doc(link.studentId).get(),
        db.collection("classes").doc(link.classId).get(),
      ]).then(function (r) {
        if (!r[0].exists) { cache.session = null; return null; }
        cache.students = [Object.assign({ uid: r[0].id }, r[0].data())];
        cache.classes = r[1].exists ? [Object.assign({ id: r[1].id }, r[1].data())] : [];
        cache.session = { role: "student", uid: link.studentId, name: r[0].data().name, classId: link.classId, fbUid: user.uid };
        persistLocal(); subscribeStudent(link.studentId, link.classId); establishedUid = user.uid;
        return cache.session;
      });
    }
    // Prof (compte e-mail) — accès soumis à validation par l'admin
    var email = (user.email || "").toLowerCase();
    var isAdmin = email === ADMIN_EMAIL;
    var isDemo = isDemoEmail(email);
    return db.collection("teachers").doc(user.uid).get().then(function (d) {
      var name = (d.exists && d.data().name) || (isDemo ? "Prof démo" : (email ? email.split("@")[0] : "Professeur"));
      var approved = isAdmin || isDemo || (d.exists && d.data().status === "approved");
      if (!d.exists) {
        fbSet("teachers", user.uid, { email: email, name: name, status: (isAdmin || isDemo) ? "approved" : "pending", requestedAt: Date.now() });
      } else if ((isAdmin || isDemo) && d.data().status !== "approved") {
        fbSet("teachers", user.uid, { status: "approved" });
      }
      if (!approved) {
        cache.session = null;
        cache.pending = { email: email };
        establishedUid = user.uid; // évite une re-boucle d'auth
        return { pending: true, email: email };
      }
      cache.pending = null;
      cache.session = { role: "teacher", uid: "prof", name: name, classId: null, fbUid: user.uid, admin: isAdmin, demo: isDemo };
      persistLocal(); subscribeTeacher(user.uid); establishedUid = user.uid;
      return cache.session;
    }).catch(function () {
      // Règles "teachers" pas encore publiées : l'admin et les comptes démo entrent via l'e-mail, les autres attendent.
      if (isAdmin || isDemo) {
        cache.pending = null;
        cache.session = { role: "teacher", uid: "prof", name: isDemo ? "Prof démo" : (email.split("@")[0] || "Professeur"), classId: null, fbUid: user.uid, admin: isAdmin, demo: isDemo };
        persistLocal(); subscribeTeacher(user.uid); establishedUid = user.uid;
        return cache.session;
      }
      cache.session = null; cache.pending = { email: email }; establishedUid = user.uid;
      return { pending: true, email: email };
    });
  }

  // ---- Connexions ----
  function loginTeacher(idOrEmail, password) {
    if (!FB) { // mode local : nom seul
      cache.session = { role: "teacher", uid: "prof", name: idOrEmail || "Professeur", classId: null, fbUid: "prof" };
      persistLocal(); return Promise.resolve(cache.session);
    }
    return auth.signInWithEmailAndPassword(idOrEmail, password)
      .catch(function (e) {
        if (e && (e.code === "auth/user-not-found" || e.code === "auth/invalid-credential" || e.code === "auth/invalid-login-credentials")) {
          return auth.createUserWithEmailAndPassword(idOrEmail, password);
        }
        throw e;
      })
      .then(function () { return establishSession(auth.currentUser); })
      .then(function (s) { return s; })
      .catch(function (e) { return { error: authMsg(e) }; });
  }

  function loginStudent(code, name) {
    if (!FB) { // mode local : rattachement par code + nom
      var cls = cache.classes.filter(function (c) { return c.code.toUpperCase() === String(code).trim().toUpperCase(); })[0];
      if (!cls) return Promise.resolve({ error: "Code de classe inconnu." });
      var st = cache.students.filter(function (s) { return s.classId === cls.id && norm(s.name) === norm(name); })[0];
      if (!st) return Promise.resolve({ error: "Élève introuvable dans cette classe. Demande au professeur de t'ajouter." });
      cache.session = { role: "student", uid: st.uid, name: st.name, classId: cls.id, fbUid: st.uid };
      persistLocal(); return Promise.resolve(cache.session);
    }
    return auth.signInAnonymously().then(function () {
      var uid = auth.currentUser.uid;
      return db.collection("classes").where("code", "==", String(code).trim().toUpperCase()).limit(1).get()
        .then(function (q) {
          if (q.empty) throw { code: "no-class" };
          var classId = q.docs[0].id;
          return db.collection("students").where("classId", "==", classId).get().then(function (sq) {
            var match = sq.docs.filter(function (d) { return norm(d.data().name) === norm(name); })[0];
            if (!match) throw { code: "no-student" };
            return db.collection("students").doc(match.id).set({ linkedUid: uid }, { merge: true }).then(function () {
              saveLS(LS.link, { studentId: match.id, classId: classId });
              return establishSession(auth.currentUser);
            });
          });
        });
    }).catch(function (e) {
      if (e && e.code === "no-class") return { error: "Code de classe inconnu." };
      if (e && e.code === "no-student") return { error: "Élève introuvable dans cette classe. Demande au professeur de t'ajouter." };
      return { error: authMsg(e) };
    });
  }

  function authMsg(e) {
    if (!e) return "Erreur de connexion.";
    if (e.code === "auth/wrong-password" || e.code === "auth/invalid-credential") return "Mot de passe incorrect.";
    if (e.code === "auth/invalid-email") return "Adresse e-mail invalide.";
    if (e.code === "auth/weak-password") return "Mot de passe trop court (6 caractères min).";
    if (e.code === "auth/operation-not-allowed") return "Active l'authentification (e-mail + anonyme) dans la console Firebase.";
    if (e.code === "auth/network-request-failed") return "Pas de connexion réseau.";
    return e.message || "Erreur de connexion.";
  }

  function logout() {
    clearSubs(); establishedUid = null;
    cache.session = null; cache.classes = []; cache.students = [];
    localStorage.removeItem(LS.session); localStorage.removeItem(LS.link);
    if (FB && auth.currentUser) auth.signOut().catch(function () {});
  }

  // ---- Démarrage : attendre l'état d'auth puis rendre la main ----
  function ready(cb) {
    if (!FB) { cb(); return; }
    var done = false;
    auth.onAuthStateChanged(function (user) {
      if (user && establishedUid === user.uid) { if (!done) { done = true; cb(); } return; }
      establishSession(user).then(function () { if (!done) { done = true; cb(); } else notify(); });
    });
  }

  window.Platform = {
    mode: FB ? "firebase" : "local",
    adminEmail: ADMIN_EMAIL,
    ready: ready,
    set onData(fn) { onData = fn; },
    get onData() { return onData; },
    getSession: getSession, isTeacher: isTeacher, isStudent: isStudent, logout: logout,
    isAdmin: isAdmin, pendingInfo: pendingInfo,
    fetchTeachers: fetchTeachers, approveTeacher: approveTeacher, rejectTeacher: rejectTeacher,
    loginTeacher: loginTeacher, loginStudent: loginStudent,
    getClasses: getClasses, getClass: getClass, createClass: createClass, renameClass: renameClass, deleteClass: deleteClass,
    getStudents: getStudents, addStudent: addStudent, removeStudent: removeStudent, ensureDemoData: ensureDemoData,
    getProgress: getProgress, recordQcm: recordQcm, recordExo: recordExo, setExo: setExo, recordActivity: recordActivity,
    setCapacite: setCapacite, setNote: setNote, studentSummary: studentSummary,
    isCorrectionsPushed: isCorrectionsPushed, setCorrectionsPushed: setCorrectionsPushed,
    isCorrPushed: isCorrPushed, setCorrPushed: setCorrPushed,
  };

  function isAdmin() { return !!(cache.session && cache.session.admin); }
  function pendingInfo() { return cache.pending || null; }
  function fetchTeachers() {
    if (!FB || !db) return Promise.resolve([]);
    return db.collection("teachers").get().then(function (snap) {
      return snap.docs.map(function (d) { return Object.assign({ uid: d.id }, d.data()); });
    }).catch(function () { return []; });
  }
  function approveTeacher(uid) { fbSet("teachers", uid, { status: "approved" }); }
  function rejectTeacher(uid) { fbSet("teachers", uid, { status: "rejected" }); }
})();
