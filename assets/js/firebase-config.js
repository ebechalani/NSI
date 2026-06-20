/* =====================================================================
   firebase-config.js — Initialisation Firebase (projet nsieddy-dd82c).
   Chargé APRÈS les SDK compat (firebase-app/auth/firestore) et AVANT
   platform.js. Les clés ci-dessous sont publiques par nature : la
   sécurité est assurée par les règles Firestore (voir SETUP-FIREBASE.md).
   Si Firebase est indisponible, l'appli bascule automatiquement en mode
   local (localStorage) grâce à window.fbReady = false.
   ===================================================================== */
(function () {
  "use strict";
  var firebaseConfig = {
    apiKey: "AIzaSyBLnzuWKC4E_ez-HQkNVreW7IAD4-NcOkw",
    authDomain: "nsieddy-dd82c.firebaseapp.com",
    projectId: "nsieddy-dd82c",
    storageBucket: "nsieddy-dd82c.firebasestorage.app",
    messagingSenderId: "826220557331",
    appId: "1:826220557331:web:082e02da41538669ac3be6",
    measurementId: "G-E7P84DBZD1",
  };
  try {
    if (typeof firebase === "undefined") throw new Error("SDK Firebase non chargé");
    firebase.initializeApp(firebaseConfig);
    window.fbConfig = firebaseConfig;
    window.fbAuth = firebase.auth();
    window.fbDB = firebase.firestore();
    window.fbReady = true;
  } catch (e) {
    window.fbReady = false;
    console.warn("[Firebase] indisponible → mode local.", e && e.message);
  }
})();
