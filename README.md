# NSI — Cours interactif Première & Terminale

**➡️ Site en ligne : https://ebechalani.github.io/NSI/**

Plateforme pédagogique complète pour la spécialité **NSI** (Première **et**
Terminale), conforme aux programmes officiels, avec comptes professeur/élève
et suivi de progression en temps réel.

Par **Eddy Bachaalany** — professeur d'informatique, Lycée Montaigne (Liban).
Contact : ebechalani@gmail.com

## Ce que contient le site

**Pour l'élève**
- Cours interactifs des **9 thèmes de Première** et **6 thèmes de Terminale**,
  vérifiés capacité par capacité contre le BO — code Python exécutable dans le
  navigateur (Pyodide), démos HTML/CSS/JS live, jeux (frise historique avec
  correction expliquée, escape game) ;
- Exercices progressifs à compléter (le corrigé n'arrive que quand le
  professeur le « pousse »), TP guidés pas à pas, QCM avec explications ;
- Préparation au bac : épreuves pratiques blanches, bacs blancs écrits,
  fiches méthode (épreuve pratique, épreuve écrite, Grand oral).

**Pour le professeur**
- Espace classe : création de classes (code + nom, sans mot de passe élève),
  suivi en temps réel, matrice de réussite par thème, diagnostic par question,
  export CSV, corrigés poussés exercice par exercice ;
- **Déroulés heure par heure** de chaque thème (109 séances de 2 h) avec, pour
  chaque séance : quoi utiliser sur le site, le déroulé minuté en classe, et
  le kit de préparation (27 imprimables « mission », 39 fichiers réels
  `.py`/`.sql`/`.csv` à déposer sur Capytale/Thonny/DB Browser) ;
- 21 sujets d'évaluation avec corrigés et barèmes.

## Structure du projet

```
index.html                  Bootstrap : sélecteur de niveau + chargement des scripts
assets/css/style.css        Styles (clair/sombre, impression, accessibilité)
assets/js/app.js            Moteur partagé (rendu, jeux, quiz, espace prof)
assets/js/platform.js       Comptes, classes, progression (Firebase + repli local)
assets/js/*.js              Contenus Première (courses, exercises, quizzes, tp,
                            projects, glossary, resources)
assets/js/terminale/*.js    Contenus Terminale (mêmes structures)
assets/fichiers/            Fichiers téléchargeables (squelettes .py, .sql, .csv)
firestore.rules             Règles de sécurité Firestore (copie de référence)
SETUP-FIREBASE.md           Installation/maintenance du backend Firebase
.github/workflows/check.yml Vérification syntaxe + chargement à chaque push
```

## Développement

Site **100 % statique** (aucun build) : servir le dossier avec n'importe quel
serveur HTTP (`python -m http.server`) et ouvrir `index.html`.

Après toute modification de contenu, **incrémenter la version de cache** dans
`index.html` (`var v = "N"` **et** les `?v=N` des balises statiques).

Backend : projet Firebase (Auth e-mail prof + anonyme élève, Firestore).
Voir `SETUP-FIREBASE.md` (règles à publier, modèle de données, limites).

## Licences

- **Code** : MIT — **Contenus pédagogiques** : CC BY-NC-SA 4.0 (voir `LICENSE`).
- Certaines ressources **liées** (jamais copiées) restent la propriété de leurs
  auteurs : supports du DIU « Enseigner l'informatique au lycée » (Université
  Le Havre Normandie — B. Mermet, Y. Pigné, J.-M. Barbier).
