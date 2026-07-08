# Firebase — état & dernière étape

Projet : **nsieddy-dd82c**. Le code est branché (`assets/js/firebase-config.js`
+ `assets/js/platform.js`). Mode **firebase** actif dès que les SDK se chargent.

## ✅ Ce qui fonctionne déjà (vérifié)
- SDK Firebase chargés, application initialisée.
- **Authentification e-mail / mot de passe** : la connexion prof crée le compte
  à la première fois et ouvre l'espace professeur.
- Firestore est joignable.

## ⚠️ Dernière étape à faire dans la console (sinon pas de synchro)
Firestore **refuse les écritures** tant que les **règles de sécurité** ne sont pas
posées (tu verras dans la console du navigateur : « écriture refusée »).

1. Console Firebase → **Firestore Database** → onglet **Règles**.
2. Colle ceci, puis **Publier** :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn()      { return request.auth != null; }
    // Prof = compte e-mail/mot de passe (les élèves sont en auth ANONYME, sans e-mail).
    function isTeacherAuth() { return signedIn() && request.auth.token.email != null; }
    function isAdmin()       { return isTeacherAuth() && request.auth.token.email == 'ebechalani@gmail.com'; }

    match /users/{uid} {
      allow read, write: if signedIn() && uid == request.auth.uid;
    }

    // Classes : lecture pour tout connecté (l'élève résout sa classe par code,
    // et écoute pushedCorr en temps réel). ÉCRITURE réservée au prof propriétaire :
    // un élève ne peut plus pousser les corrigés (pushed/pushedCorr) ni renommer.
    match /classes/{cid} {
      allow read: if signedIn();
      allow create: if isTeacherAuth() && request.resource.data.teacherUid == request.auth.uid;
      allow update, delete: if isTeacherAuth() && resource.data.teacherUid == request.auth.uid;
    }

    // Students : le prof propriétaire gère tout (création, note, capacités, suppression).
    // L'élève anonyme a exactement DEUX droits :
    //  (a) rattacher sa fiche : écrire UNIQUEMENT linkedUid = son propre uid
    //      (nécessaire à chaque nouveau poste, l'uid anonyme change) ;
    //  (b) sa progression : si sa fiche lui est rattachée, modifier UNIQUEMENT
    //      qcm / exos / activite. Il ne peut PAS toucher note, capacites, name…
    match /students/{sid} {
      allow read: if signedIn();
      allow create: if isTeacherAuth() && request.resource.data.teacherUid == request.auth.uid;
      allow delete: if isTeacherAuth() && resource.data.teacherUid == request.auth.uid;
      allow update: if
           (isTeacherAuth() && resource.data.teacherUid == request.auth.uid)
        || (signedIn()
            && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['linkedUid'])
            && request.resource.data.linkedUid == request.auth.uid)
        || (signedIn()
            && resource.data.linkedUid == request.auth.uid
            && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['qcm', 'exos', 'activite']));
    }

    // Comptes professeurs : chacun crée SA demande ; seul l'admin valide/refuse.
    match /teachers/{uid} {
      allow read:   if signedIn();
      allow create: if signedIn() && uid == request.auth.uid;
      allow update, delete: if isAdmin();
    }
  }
}
```

> ⚠️ **Important** : ces règles ajoutent la collection `teachers`. Tant qu'elles ne
> sont pas publiées, seul l'admin (`ebechalani@gmail.com`) peut ouvrir l'espace prof
> (l'appli le reconnaît à son e-mail) ; les autres restent « en attente ».
>
> 🔒 **Ce que ces règles garantissent** : un élève ne peut plus (1) pousser lui-même
> les corrigés, (2) modifier sa note/appréciation ou ses capacités, (3) toucher la
> fiche d'un camarade (hors rattachement de SA fiche), (4) supprimer quoi que ce soit.
> **Limites résiduelles assumées** (design « code + nom » sans mot de passe élève) :
> la liste {nom, classe} reste lisible par tout utilisateur connecté (nécessaire au
> login élève) — conseil : saisir « Prénom + initiale » plutôt que le nom complet ;
> et quiconque connaît le code + le nom peut rattacher la fiche à son appareil
> (l'ancien appareil est alors déconnecté — signalez tout comportement étrange).

3. Console Firebase → **Authentication → Sign-in method** : vérifie que
   **E-mail/Mot de passe** ET **Anonyme** sont **activés** (l'anonyme sert à la
   connexion des élèves par code + nom).

➡️ Une fois publié, recharge le site : créer une classe / ajouter un élève écrit
dans Firestore, et chaque élève (sur son poste) remonte au prof en **temps réel**.

## Pour durcir encore plus tard (optionnel)
Les règles ci-dessus verrouillent déjà l'écriture (prof propriétaire / élève limité
à sa progression). Pour aller plus loin : (1) fermer aussi la LECTURE de `students`
en déplaçant la recherche « code + nom » dans une Cloud Function (plan Blaze) ;
(2) exiger `teachers/{uid}.status == 'approved'` dans `isTeacherAuth()` via `get()` ;
(3) déplacer les corrigés hors du site statique (ils restent lisibles dans les .js
publics par un élève déterminé — le gating actuel est pédagogique, pas cryptographique).

## Modèle de données (Firestore)
```
users/{uid}       { role:"teacher", name }                 (profil prof)
classes/{id}      { name, code, teacherUid, pushed:bool }
students/{id}     { classId, teacherUid, name, linkedUid,
                    qcm:{themeId:{score,total}}, exos:{}, capacites:{}, note }
```

## Comment « le prof crée les comptes »
Le prof ajoute des élèves **par leur nom** dans sa classe (docs `students`).
L'élève se connecte avec le **code de classe + son nom** : l'appli ouvre une
session **anonyme** Firebase et rattache l'élève au document créé par le prof
(`linkedUid`). Aucun e-mail ni mot de passe d'élève à gérer (bon pour le RGPD).
