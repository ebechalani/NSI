# NSI Première — Cours interactif

Site web interactif pour enseigner et apprendre la spécialité **Numérique et Sciences
Informatiques** (NSI) en classe de **Première**. Cours, **code Python exécutable dans le
navigateur** et **QCM auto-corrigés**, conformes au **programme officiel** (Bulletin officiel
spécial n°1 du 22 janvier 2019).

> Support pédagogique indépendant. Le contenu est rédigé d'après le programme officiel (public)
> et ne reproduit aucun manuel sous droits d'auteur.

## Les 7 thèmes du programme

1. 🔢 Représentation des données : types et valeurs de base
2. 🧱 Représentation des données : types construits
3. 📊 Traitement de données en tables
4. 🌐 Interactions homme-machine sur le Web
5. 🖥️ Architectures matérielles et systèmes d'exploitation
6. 🐍 Langages et programmation
7. 🧩 Algorithmique

Chaque thème comprend : les **capacités attendues** du BO, un cours structuré, des **cellules de
code Python** modifiables et exécutables, et un **QCM** avec correction et explication.

## Fonctionnalités

- ▶ **Python réel dans le navigateur** via [Pyodide](https://pyodide.org) (aucune installation).
- 📝 **QCM auto-corrigés** avec explication de chaque réponse.
- 📊 **Progression enregistrée** localement (un thème est « validé » quand son QCM est tout juste).
- 🌙 **Thème clair / sombre**, mise en page **responsive** (mobile, tablette, ordinateur).
- 🔗 Navigation par URL (`#nom-du-theme`) pour partager un thème précis.

## Utilisation

Aucune compilation nécessaire. Deux options :

- **Ouvrir directement** `index.html` dans un navigateur (double-clic).
- **Servir localement** (recommandé) :
  ```bash
  python -m http.server 8000
  # puis ouvrir http://localhost:8000
  ```

> ⚠️ La **première exécution** d'un code Python télécharge Pyodide (~10 Mo) depuis un CDN :
> une connexion Internet est nécessaire cette fois-là. Le reste du site fonctionne hors-ligne.

## Structure du projet

```
NSI/
├── index.html              page unique (SPA)
├── assets/
│   ├── css/style.css       styles + thème clair/sombre
│   └── js/
│       ├── courses.js      contenu des 7 thèmes (cours + code)
│       ├── quizzes.js      questions de QCM par thème
│       └── app.js          navigation, éditeur Python, logique QCM
└── README.md
```

## Ajouter / modifier du contenu

- **Un paragraphe ou un exemple de code** : éditer `assets/js/courses.js`. Chaque section a un
  champ `html` (le cours) et un champ optionnel `code` (la cellule Python exécutable).
- **Une question de QCM** : éditer `assets/js/quizzes.js`. `answer` est l'indice (à partir de 0)
  de la bonne réponse, `explain` le texte de correction.

## Pistes d'extension

- Ajouter le programme de **Terminale NSI** (mêmes structures de données).
- Exercices de programmation auto-évalués (comparaison de la sortie attendue).
- Export PDF d'un thème pour distribution en classe.
