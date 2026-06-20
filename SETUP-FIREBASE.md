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
    function signedIn() { return request.auth != null; }

    // MVP classe : tout utilisateur connecté (prof e-mail OU élève anonyme)
    // peut lire/écrire les données de classe. Données pseudonymes (scores QCM).
    match /users/{uid}     { allow read, write: if signedIn(); }
    match /classes/{cid}   { allow read, write: if signedIn(); }
    match /students/{sid}  { allow read, write: if signedIn(); }
  }
}
```

3. Console Firebase → **Authentication → Sign-in method** : vérifie que
   **E-mail/Mot de passe** ET **Anonyme** sont **activés** (l'anonyme sert à la
   connexion des élèves par code + nom).

➡️ Une fois publié, recharge le site : créer une classe / ajouter un élève écrit
dans Firestore, et chaque élève (sur son poste) remonte au prof en **temps réel**.

## Pour durcir la sécurité plus tard (optionnel)
Le MVP ci-dessus autorise tout utilisateur connecté à toucher les données de
classe (acceptable pour des scores pseudonymes entre élèves non hostiles). Pour
restreindre (le prof ne gère que ses classes, l'élève n'écrit que sa fiche), on
remplacera par des règles avec vérification de `teacherUid == request.auth.uid`
et du `linkedUid` de l'élève — à faire quand tout le reste est stabilisé.

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
