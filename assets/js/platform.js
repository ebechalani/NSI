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
    var pr = getProgress(u), validés = 0, nbQcm = 0, sumRatio = 0;
    var total = (courses || []).length || 1;
    var act = pr.activite || {};
    var travaillés = 0, totalActivites = 0;
    (courses || []).forEach(function (c) {
      var q = pr.qcm[c.id];
      var hasQcm = q && q.total > 0;
      if (hasQcm) {
        nbQcm++;
        sumRatio += q.score / q.total;
        if (q.score === q.total) validés++;
      }
      var a = act[c.id] || 0;
      totalActivites += a;
      if (hasQcm || a > 0) travaillés++; // thème « travaillé »
    });
    return {
      themesValidés: validés,
      qcmFaits: nbQcm,
      activites: totalActivites, // nb d'actions (compte aussi les répétitions)
      progression: Math.round((travaillés / total) * 100), // % de thèmes travaillés
      reussite: nbQcm > 0 ? Math.round((sumRatio / nbQcm) * 100) : 0, // % de réussite moyenne aux QCM
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
  function recordQcm(themeId, score, total) {
    if (!isStudent()) return;
    var s = studentByUid(cache.session.uid); if (!s) return;
    s.qcm = s.qcm || {}; s.qcm[themeId] = { score: score, total: total };
    persistLocal(); fbUpdatePath("students", s.uid, ["qcm", themeId], { score: score, total: total });
  }
  function recordExo(key) {
    if (!isStudent()) return;
    var s = studentByUid(cache.session.uid); if (!s) return;
    s.exos = s.exos || {}; s.exos[key] = true;
    persistLocal(); fbUpdatePath("students", s.uid, ["exos", key], true);
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
    return db.collection("teachers").doc(user.uid).get().then(function (d) {
      var name = (d.exists && d.data().name) || (email ? email.split("@")[0] : "Professeur");
      var approved = isAdmin || (d.exists && d.data().status === "approved");
      if (!d.exists) {
        fbSet("teachers", user.uid, { email: email, name: name, status: isAdmin ? "approved" : "pending", requestedAt: Date.now() });
      } else if (isAdmin && d.data().status !== "approved") {
        fbSet("teachers", user.uid, { status: "approved" });
      }
      if (!approved) {
        cache.session = null;
        cache.pending = { email: email };
        establishedUid = user.uid; // évite une re-boucle d'auth
        return { pending: true, email: email };
      }
      cache.pending = null;
      cache.session = { role: "teacher", uid: "prof", name: name, classId: null, fbUid: user.uid, admin: isAdmin };
      persistLocal(); subscribeTeacher(user.uid); establishedUid = user.uid;
      return cache.session;
    }).catch(function () {
      // Règles "teachers" pas encore publiées : l'admin entre via l'e-mail, les autres attendent.
      if (isAdmin) {
        cache.pending = null;
        cache.session = { role: "teacher", uid: "prof", name: email.split("@")[0] || "Professeur", classId: null, fbUid: user.uid, admin: true };
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
    getStudents: getStudents, addStudent: addStudent, removeStudent: removeStudent,
    getProgress: getProgress, recordQcm: recordQcm, recordExo: recordExo, recordActivity: recordActivity,
    setCapacite: setCapacite, setNote: setNote, studentSummary: studentSummary,
    isCorrectionsPushed: isCorrectionsPushed, setCorrectionsPushed: setCorrectionsPushed,
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
