# Brancher Firebase (phase 2 — synchro réelle prof ↔ élèves)

La **phase 1** (rôles prof/élève, écran de connexion, espace « Ma classe », suivi,
« pousser les corrigés ») fonctionne déjà **en local** : tout est stocké dans le
navigateur (`localStorage`). C'est parfait pour tester sur **une** machine, mais le
prof ne voit pas encore les élèves qui travaillent sur **d'autres** postes.

La **phase 2** branche **Firebase** (Auth + Cloud Firestore) pour synchroniser
les données entre tous les postes. Le code est conçu pour ça : seule la couche
`assets/js/platform.js` changera, le reste de l'appli n'y touche pas.

## Ce dont j'ai besoin de toi
1. Crée (ou réutilise) un projet sur https://console.firebase.google.com
2. Ajoute une **application Web** au projet (icône `</>`), et copie la **config**
   qui ressemble à :
   ```js
   const firebaseConfig = {
     apiKey: "AIza…",
     authDomain: "ton-projet.firebaseapp.com",
     projectId: "ton-projet",
     storageBucket: "ton-projet.appspot.com",
     messagingSenderId: "123…",
     appId: "1:123…:web:…"
   };
   ```
   (Ces clés sont **publiques** : c'est normal, la sécurité passe par les *règles*
   Firestore ci-dessous.)
3. Active **Authentication → Sign-in method → E-mail/mot de passe**.
4. Crée une base **Cloud Firestore** (mode production).
5. Colle-moi la config : je l'intègre et je branche la synchro.

## Modèle de données (Firestore)
```
users/{uid}        { role: "teacher"|"student", name, classId }
classes/{classId}  { name, code, teacherUid, pushedCorrections: bool }
progress/{uid}     { qcm:{themeId:{score,total}}, exos:{}, capacites:{}, note }
```

## Règles de sécurité (à coller dans Firestore → Règles)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    function signedIn() { return request.auth != null; }
    function myUid() { return request.auth.uid; }
    function roleOf(uid) {
      return get(/databases/$(db)/documents/users/$(uid)).data.role;
    }

    // Profil : chacun lit/écrit le sien ; le prof lit ceux de sa classe
    match /users/{uid} {
      allow read: if signedIn();
      allow write: if signedIn() && uid == myUid();
    }

    // Classes : le prof propriétaire gère ; les élèves lisent (pour le code/corrigés)
    match /classes/{cid} {
      allow read: if signedIn();
      allow create: if signedIn() && request.resource.data.teacherUid == myUid();
      allow update, delete: if signedIn() && resource.data.teacherUid == myUid();
    }

    // Progression : l'élève écrit la sienne ; le prof la lit
    match /progress/{uid} {
      allow read: if signedIn();                       // affiné : prof de la classe
      allow write: if signedIn() && uid == myUid();
    }
  }
}
```

## « Le prof crée les comptes » — comment
Sur un site statique, on crée les comptes élèves sans déconnecter le prof grâce à
une **2ᵉ instance Firebase** (`initializeApp(config, "secondary")`) : on y appelle
`createUserWithEmailAndPassword(...)` pour l'élève, puis `signOut` de cette instance.
Le prof distribue à chaque élève son **identifiant + mot de passe** (l'e-mail peut
être *synthétique*, ex. `ada@1nsi.classe`, pour ne pas collecter d'e-mail réel de
mineur — bon pour le RGPD). Aucune adresse personnelle n'est requise.

> Dès que tu me donnes la config Firebase, je branche tout ça (≈ une itération).
