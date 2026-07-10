/* =====================================================================
   RESSOURCES — Terminale NSI
   Activités débranchées, progression annuelle, fiches méthode, encart
   « coder pour de vrai », didactique, ressources externes, évaluations.
   SQUELETTE : contenu volontairement léger, à compléter ensemble.
   ===================================================================== */

/* ---------------- Activités débranchées ---------------- */
const DEBRANCHE = [
  {
    id: "piles-files-gobelets",
    emoji: "🥤",
    titre: "Piles & files avec des gobelets",
    theme: "term-structures",
    bo: "Distinguer pile (LIFO) et file (FIFO) ; comprendre l'ordre de sortie.",
    duree: "30–40 min",
    materiel: ["Une pile de gobelets empilables par îlot", "Des étiquettes (lettres ou prénoms)"],
    objectif:
      "Faire vivre physiquement la différence LIFO / FIFO avant de la programmer, et nommer chaque opération (empiler/dépiler, enfiler/défiler).",
    deroule: [
      "PILE : chaque élève pose un gobelet étiqueté sur la pile (empiler). On ne peut retirer que celui du dessus (dépiler).",
      "Le prof demande de retrouver un gobelet du milieu : impossible sans dépiler ceux du dessus → c'est le LIFO.",
      "FILE : les élèves font la queue ; on entre par la fin, on est servi par le devant → FIFO.",
      "À chaque geste, l'îlot annonce l'opération à voix haute : « j'empile B », « je défile Ava »…",
      "Mise en commun : dans quels cas réels utilise-t-on l'un ou l'autre ? (Ctrl-Z, file d'impression…).",
    ],
    variante:
      "Prolongement : modéliser les amitiés de l'îlot par un graphe au tableau, puis faire le parcours en largeur (file) à la main.",
  },
  {
    id: "philosophes-interblocage",
    emoji: "🍝",
    titre: "Le dîner des philosophes (interblocage)",
    theme: "term-archi-reseaux",
    bo: "Comprendre l'interblocage et une stratégie pour l'éviter.",
    duree: "30 min",
    materiel: ["5 élèves « philosophes » en cercle", "5 stylos (les « fourchettes »), un entre chaque voisin"],
    objectif:
      "Faire vivre un interblocage (deadlock) puis découvrir une règle simple qui l'empêche, comme le fait un système d'exploitation.",
    deroule: [
      "Règle : pour manger, un philosophe a besoin des DEUX stylos qui l'entourent (gauche et droite).",
      "Consigne piège : « chacun prend d'abord le stylo de GAUCHE, puis attend celui de droite ».",
      "Tout le monde applique la consigne en même temps : chacun tient un stylo et attend l'autre → personne ne mange. C'est l'INTERBLOCAGE.",
      "Défi à l'îlot : trouver une règle qui débloque la situation.",
      "Mise en commun : numéroter les stylos et imposer de prendre TOUJOURS le plus petit numéro en premier casse l'attente circulaire → plus de blocage.",
    ],
    variante:
      "Prolongement : relier à l'ordonnancement (et si un philosophe « lâche » son stylo après un temps ?) et au rôle de l'OS qui arbitre les ressources.",
  },
];

/* ---------------- Didactique : enseigner la NSI en Terminale ----------------
   Fiches développées + liens vers le site du DIU NSI (Le Havre, B. Mermet),
   déjà utilisé en Première. Les pages générales de didactique valent pour les
   deux niveaux ; on ajoute des repères propres à la Terminale. */
const DIDACTIQUE_BASE = "https://mermet.users.greyc.fr/Enseignement/EnseignementInformatiqueLycee/Havre/Didactique/";
const DIDACTIQUE = {
  bloc: "Enseigner la NSI en Terminale — repères & ressources",
  meta: "Fiches d'après la formation DIU NSI — Bruno Mermet (GREYC, Université Le Havre)",
  index: "index.html",
  parties: [
    {
      titre: "1 · Le programme de Terminale et son organisation",
      items: [
        {
          t: "Le programme de Terminale & sa répartition annuelle", file: "resumeProgrammeTerminale.html",
          fiche: `
            <p>Le programme de <strong>Terminale NSI</strong> (Bulletin officiel spécial n°8 du 25 juillet 2019) se déploie sur <strong>6 h hebdomadaires</strong> (≈ 30 semaines utiles, soit ≈ 180 h), dont une part importante en <strong>projets</strong> et en <strong>pratique sur machine</strong>. Il prépare l'<strong>épreuve de spécialité</strong> au baccalauréat (une partie <strong>écrite</strong> et une partie <strong>pratique</strong> sur ordinateur) et le <strong>Grand oral</strong>.</p>
            <h3>Les cinq thèmes (+ histoire transversale)</h3>
            <table>
              <tr><th>Thème du programme</th><th>Volume indicatif</th></tr>
              <tr><td>Histoire de l'informatique <em>(transversal)</em></td><td>≈ fil rouge</td></tr>
              <tr><td>Structures de données (piles, files, arbres, graphes)</td><td>≈ 25 h</td></tr>
              <tr><td>Bases de données (modèle relationnel, SQL)</td><td>≈ 20 h</td></tr>
              <tr><td>Architectures matérielles, OS & réseaux</td><td>≈ 20 h</td></tr>
              <tr><td>Langages et programmation (récursivité, POO, calculabilité)</td><td>≈ 30 h</td></tr>
              <tr><td>Algorithmique (diviser pour régner, prog. dynamique, graphes)</td><td>≈ 35 h</td></tr>
              <tr><td><strong>Projets</strong> (≈ 1/3 du temps)</td><td>≈ 50 h</td></tr>
            </table>
            <h3>Articuler les thèmes</h3>
            <ul>
              <li><strong>Structures de données</strong> d'abord : elles irriguent toute l'<strong>algorithmique</strong> (arbres, graphes, piles/files).</li>
              <li>La <strong>récursivité</strong> (thème Langages) est un prérequis de « diviser pour régner » et de la programmation dynamique.</li>
              <li>Filer la <strong>pratique sur machine</strong> toute l'année (Capytale/Thonny) pour préparer l'épreuve pratique.</li>
            </ul>
            <p class="note">📝 <strong>Évaluation :</strong> alterner écrit (type bac) et pratique notée. La rubrique « Progression annuelle » du site propose un planning période par période.</p>`,
        },
        {
          t: "Situer Première → Terminale (continuité)", file: "organisationPremiere.html",
          fiche: `
            <p>La Terminale <strong>réinvestit</strong> et <strong>généralise</strong> la Première. Quelques fils de continuité utiles à garder en tête :</p>
            <ul>
              <li>Listes/dictionnaires (1re) → <strong>structures abstraites</strong> (pile, file, arbre, graphe) et distinction <strong>interface / implémentation</strong>.</li>
              <li>Tables de données et recherche (1re) → <strong>bases de données</strong> relationnelles et <strong>SQL</strong>.</li>
              <li>Fonctions, tris simples, dichotomie (1re) → <strong>récursivité</strong>, <strong>tri fusion</strong>, <strong>diviser pour régner</strong>, <strong>programmation dynamique</strong>.</li>
              <li>Architecture & OS (1re) → <strong>processus, ordonnancement</strong>, <strong>routage</strong> et <strong>sécurisation</strong> des réseaux.</li>
            </ul>
            <p class="note">🎓 On peut s'appuyer sur le site <strong>Première</strong> (bouton 🎓 de la barre) pour réviser un prérequis avant d'attaquer une notion de Terminale.</p>`,
        },
      ],
    },
    {
      titre: "2 · Repères didactiques (valables aux deux niveaux)",
      items: [
        { t: "Qu'est-ce que la didactique de l'informatique ?", file: "didactique.html" },
        { t: "La pensée informatique (Computational Thinking)", file: "computationalThinking.html" },
        { t: "Les compétences ADAGE", file: "adage.html" },
        { t: "« Enseigner l'informatique » — synthèse", file: "resumeLivreEnseignerInformatique.html" },
      ],
    },
  ],
};

/* ---------------- Ressources externes par thème (avec attribution) ---------------- */
const THEME_RESSOURCES_EXT = {
  "term-structures": {
    titre: "Piles, files & structures (notebooks)",
    auteur: "Module DIU EIL — Y. Pigné (LITIS, Univ. Le Havre)",
    base: "https://git.litislab.fr/ypigne/2026-EIL-listes-tuples-dictionnaires/-/",
    note: "📒 Notebooks (.ipynb) : le dépôt les affiche dans le navigateur. Pour les <strong>exécuter</strong>, ouvre-les dans <a href=\"https://notebook.basthon.fr\" target=\"_blank\" rel=\"noopener\">Basthon</a> ou Capytale.",
    items: [
      { t: "📁 Le dépôt complet (toujours à jour)", url: "tree/main" },
      { t: "⭐ Fiches élève — Piles, files & ensembles (Terminale)", url: "tree/main/eleves" },
    ],
  },
  "term-archi-reseaux": {
    titre: "Systèmes & réseaux (supports DIU)",
    auteur: "Mes supports du DIU NSI — Le Havre",
    base: "",
    note: "📎 Supports issus de ma formation DIU, hébergés sur le site : le PDF s'ouvre dans le navigateur, la fiche réseaux est une page web (repères TCP/IP, DNS, adressage, routage).",
    items: [
      { t: "📕 Cours — Introduction aux systèmes d'exploitation (PDF)", url: "assets/ressources/systeme/DIU_cours_systeme_intro.pdf" },
      { t: "🌐 Fiche — Repères réseaux (TCP/IP, DNS, masques, RIP, routage)", url: "assets/ressources/reseaux/Reseaux_reperes.html" },
    ],
  },
};

/* ---------------- Progression annuelle ---------------- */
const PROGRESSION_INTRO =
  "Planning indicatif pour la Terminale NSI (6 h/semaine). Il articule les cinq thèmes du programme autour de l'algorithmique, et prépare les deux épreuves de spécialité (écrite et pratique) ainsi que le Grand oral. À ajuster selon la classe.";

const PROGRESSION = [
  {
    periode: "Sept. — Période 1", semaines: "S1–S3", heures: "≈ 18 h",
    theme: "Structures de données", themeId: "term-structures",
    objectifs: "Interface vs implémentation ; piles (LIFO), files (FIFO), listes chaînées ; premiers arbres et graphes.",
    activites: "Activité débranchée (gobelets) + TP au poste (Pile, File, parcours).",
    evaluation: "TP noté n°1 (piles & files).",
  },
  {
    periode: "Oct.–Nov. — Période 2", semaines: "S4–S8", heures: "≈ 30 h",
    theme: "Langages et programmation", themeId: "term-langages",
    objectifs: "Paradigmes ; récursivité ; modularité et mise au point (assertions, tests) ; programmation dynamique.",
    activites: "Cours + exercices gradués ; beaucoup de code et de textes à trou.",
    evaluation: "DS n°1 (programmation, récursivité).",
  },
  {
    periode: "Déc.–Janv. — Période 3", semaines: "S9–S13", heures: "≈ 30 h",
    theme: "Algorithmique", themeId: "term-algo",
    objectifs: "Diviser pour régner (tri fusion, dichotomie) ; programmation dynamique ; graphes (parcours, Dijkstra) ; k-NN ; coût.",
    activites: "TP algorithmiques s'appuyant sur les structures de données.",
    evaluation: "DS n°2 (algorithmique) + préparation épreuve pratique.",
  },
  {
    periode: "Févr.–Mars — Période 4", semaines: "S14–S18", heures: "≈ 30 h",
    theme: "Bases de données", themeId: "term-bdd",
    objectifs: "Modèle relationnel, clés et contraintes ; requêtes SQL (SELECT, jointures, agrégats, mises à jour).",
    activites: "TP SQL sur une base « lycée » ; textes à trou de requêtes.",
    evaluation: "TP noté SQL. Entraînement épreuve écrite.",
  },
  {
    periode: "Avril — Période 5", semaines: "S19–S21", heures: "≈ 18 h",
    theme: "Architectures, systèmes & réseaux", themeId: "term-archi-reseaux",
    objectifs: "Processus et ordonnancement ; interblocage ; routage des paquets ; chiffrement symétrique/asymétrique.",
    activites: "Simulations et activités débranchées (réseau, routage).",
    evaluation: "DS bilan. Préparation du Grand oral.",
  },
];

/* ---------------- Déroulés heure par heure (prof) ----------------
   Pour chaque thème : séances de 2 h — contenu du site, déroulé minuté,
   préparation aux épreuves du bac intégrée. Rendu : makeThemePlan (app.js). */
const THEME_PLANS = {
  "term-structures": {
    "heures": "24 h — 12 séances de 2 h (≈ 25 h prévues au BO pour ce thème)",
    "resume": "Des structures linéaires (pile, file, liste chaînée) aux arbres et aux graphes : le thème installe la distinction <strong>interface / implémentation</strong>, les parcours (préfixe, infixe, suffixe, largeur, BFS/DFS) et le choix raisonné d'une structure. Deux projets îlots (navigateur, file de priorité), un TP guidé, une séance complète d'entraînement aux deux épreuves du bac (EP blanche n°1 + exercice écrit type bac) et une séance finale QCM + diagnostic « Ma classe ».",
    "seances": [
      {
        "titre": "Séance 1 — Interface, implémentation et pile (LIFO)",
        "duree": "2 h",
        "objectif": "Distinguer le contrat d'une structure (interface) de son code (implémentation) et programmer une pile.",
        "surLeSite": [
          "Sections 1–2 (« Interface et implémentation », « La pile (LIFO) »)",
          "TP guidé « Pile & file : de l'interface à l'implémentation » étape 1",
          "Exercice 1 (texte à trou : empiler / sommet)",
          "Activité débranchée « Piles & files avec des gobelets »"
        ],
        "enClasse": [
          "0–15 min : réactivation Première — que sait faire une <em>list</em> Python (append, pop, indices) ? sondage oral rapide.",
          "15–35 min : débranché gobelets en îlots : empiler/dépiler à voix haute, impossible d'atteindre le milieu → LIFO.",
          "35–65 min : Sections 1–2 vidéoprojetées, cellules exécutées : le contrat (TAD), la classe Pile, l'image de la prise électrique.",
          "65–95 min : machine — TP guidé étape 1 (prédire les 4 print AVANT d'exécuter) + Exercice 1.",
          "95–120 min : institutionnalisation (interface = promesse, coût = implémentation) ; écriture libre : « pourquoi cacher _elements ? » ; corrigés poussés."
        ],
        "aPreparer": [
          "Une pile de gobelets + étiquettes par îlot",
          "TP distribué sur Capytale (ou Thonny prêt sur les postes)"
        ]
      },
      {
        "titre": "Séance 2 — La pile en action et la file (FIFO)",
        "duree": "2 h",
        "objectif": "Résoudre un vrai problème avec une pile (parenthésage) et implémenter une file efficace avec deque.",
        "surLeSite": [
          "Sections 3–4 (« Application de la pile : les parenthèses », « La file (FIFO) »)",
          "TP guidé « Pile & file » étapes 2–3 (+ étape 4 bonus)",
          "Exercice 2 (texte à trou : defiler avec deque)",
          "Défi « Mission : un correcteur de parenthèses »"
        ],
        "enClasse": [
          "0–10 min : réactivation — LIFO ou FIFO ? quiz éclair à l'oral sur des situations (Ctrl-Z, file d'impression…).",
          "10–35 min : Section 3 : déroulé À LA MAIN de la pile sur « (3+[2×(1-4)]) », un élève au tableau tient la pile.",
          "35–60 min : Section 4 : la file, pourquoi list.pop(0) est lent, deque.popleft() en O(1) ; cellule exécutée.",
          "60–100 min : machine — TP étapes 2–3 (file d'impression, puis mini-défi parenthèses à compléter jusqu'à faire passer les 5 asserts) ; étape 4 bonus pour les rapides.",
          "100–120 min : institutionnalisation : tableau comparatif pile/file (opérations, ordre de sortie, coûts) ; corrigés poussés."
        ],
        "aPreparer": [
          "TP étapes 2–4 prêt sur Capytale/Thonny",
          "Le déroulé des parenthèses préparé au tableau"
        ]
      },
      {
        "titre": "Séance 3 — Projet îlots : l'historique du navigateur",
        "duree": "2 h",
        "objectif": "Réinvestir la pile en autonomie : modéliser Précédent / Suivant avec deux piles et une classe testée par asserts.",
        "surLeSite": [
          "Projet îlots n°1 « L'historique du navigateur (pile) » (phases 1 à 5)",
          "Exercice 5 (défi : inverser une chaîne avec une pile)"
        ],
        "enClasse": [
          "0–10 min : réactivation — pourquoi le bouton Précédent est-il un LIFO ? discussion en îlots.",
          "10–30 min : phases 1–2 sur papier : décrire visiter / precedent / suivant avec DEUX piles (passé et futur).",
          "30–85 min : codage de la classe Navigateur + scénario de tests assert (visiter A, B, C ; revenir ; visiter D…).",
          "85–105 min : démonstrations éclair des îlots ; question piège : que devient le « futur » après une nouvelle visite ?",
          "105–120 min : bilan collectif ; Exercice 5 en autonomie pour les rapides ; corrigés poussés."
        ],
        "aPreparer": [
          "Thonny/Capytale sur tous les postes (le projet peut compter comme TP noté n°1)",
          "Grille d'évaluation du projet (structure choisie, tests, démo)"
        ]
      },
      {
        "titre": "Séance 4 — Listes chaînées et projet « file de priorité »",
        "duree": "2 h",
        "objectif": "Découvrir les maillons chaînés (définition récursive) et concevoir en îlot une structure absente de Python : la file de priorité.",
        "surLeSite": [
          "Section 5 (« Listes chaînées : des maillons reliés »)",
          "Projet îlots n°2 « Gestionnaire de tâches à priorité » (phases 1 à 4)"
        ],
        "enClasse": [
          "0–15 min : réactivation — fonctions récursives (lien Première / thème Langages) : cas de base + appel qui s'en rapproche.",
          "15–45 min : Section 5 : la classe Maillon, longueur récursive, insertion en tête sans décalage ; cellules exécutées.",
          "45–100 min : projet 2 en îlots : pourquoi ni pile ni file ne conviennent ; interface sur papier puis classe GestionnaireTaches avec tuples (priorite, numero, description) et asserts.",
          "100–120 min : mise en commun des deux implémentations possibles (chercher le max vs liste triée) et de leurs coûts ; corrigés poussés."
        ],
        "aPreparer": [
          "Thonny/Capytale prêt",
          "Notebooks DIU EIL « Piles, files & ensembles » en ressource complémentaire (Basthon)"
        ]
      },
      {
        "titre": "Séance 5 — Les arbres : vocabulaire, taille, hauteur",
        "duree": "2 h",
        "objectif": "Passer du linéaire au hiérarchique : définir récursivement un arbre binaire et calculer taille et hauteur.",
        "surLeSite": [
          "Section 6 (« Les arbres : une structure hiérarchique »)",
          "Exercices 3 et 6 (taille, hauteur)"
        ],
        "enClasse": [
          "0–15 min : réactivation — les tuples de Première (immuables, déballage) : ils vont représenter nos nœuds.",
          "15–40 min : vocabulaire construit au tableau sur l'arborescence des dossiers du lycée : racine, nœud, fils, feuille, taille, hauteur ; chaque îlot dessine un arbre et fait deviner ses mesures.",
          "40–70 min : Section 6 : triplets (valeur, gauche, droite), taille et hauteur récursives ; cellules exécutées et déroulées.",
          "70–100 min : machine — Exercices 3 et 6 (écrire les deux fonctions sans regarder le cours, puis comparer).",
          "100–120 min : écriture libre : rédiger la définition récursive d'un arbre binaire ; piège taille ≠ hauteur explicité ; corrigés poussés."
        ],
        "aPreparer": [
          "Feuilles quadrillées pour dessiner les arbres (réflexe épreuve écrite)"
        ]
      },
      {
        "titre": "Séance 6 — Les quatre parcours d'un arbre binaire",
        "duree": "2 h",
        "objectif": "Maîtriser préfixe, infixe, suffixe et largeur — et découvrir que l'infixe d'un ABR sort trié.",
        "surLeSite": [
          "Section 7 (« Parcourir un arbre binaire »)",
          "Exercices 4, 7 et 9 (préfixe, infixe, les 4 parcours du même arbre)"
        ],
        "enClasse": [
          "0–10 min : réactivation — taille/hauteur de l'arbre affiché, réponse sur ardoise.",
          "10–40 min : les 3 parcours en profondeur mimés au tableau (quand traite-t-on la racine ?) puis la largeur : la FILE de la séance 2 revient en scène.",
          "40–75 min : Exercice 9 en îlots : PRÉDIRE les 4 parcours sur papier SANS exécuter, puis vérifier sur machine.",
          "75–105 min : machine — Exercices 4 et 7 ; constat clé : l'infixe donne [1, 3, 5, 7, 9], trié.",
          "105–120 min : institutionnalisation : suffixe = racine en dernier, largeur = file ; teaser ABR ; corrigés poussés."
        ],
        "aPreparer": [
          "Un grand arbre affiché/projeté pour les déroulés à la main"
        ]
      },
      {
        "titre": "Séance 7 — L'arbre binaire de recherche : rechercher et insérer",
        "duree": "2 h",
        "objectif": "Exploiter l'invariant de l'ABR pour chercher et insérer en O(hauteur), et comprendre le cas dégénéré du « peigne ».",
        "surLeSite": [
          "Section 8 (« L'arbre binaire de recherche »)",
          "Exercices 8 et 10 (défis : recherche puis insertion par reconstruction)"
        ],
        "enClasse": [
          "0–15 min : réactivation — la dichotomie de Première : éliminer la moitié à chaque étape, c'est exactement l'idée de l'ABR.",
          "15–45 min : Section 8 : l'invariant gauche < racine < droite, recherche, insertion qui RECONSTRUIT la branche (tuples immuables) ; cellules exécutées.",
          "45–80 min : machine — Exercice 8 (recherche) puis Exercice 10 (inserer, vérifié par l'infixe trié).",
          "80–105 min : sur table, style bac : insérer 12, 5, 20, 3, 8, 15, 25 dans un ABR vide, dessiner l'arbre, donner hauteur et taille.",
          "105–120 min : le « peigne » : insérer 1, 2, 3, 4… → O(n) ; bilan O(log n) équilibré vs O(n) dégénéré ; corrigés poussés."
        ],
        "aPreparer": [
          "Exercice « insertion sur table » photocopié (entraînement écrit)"
        ]
      },
      {
        "titre": "Séance 8 — Les graphes : modéliser et représenter",
        "duree": "2 h",
        "objectif": "Modéliser des relations par un graphe et savoir écrire — et convertir — matrice et listes d'adjacence.",
        "surLeSite": [
          "Sections 9–10 (« Les graphes », « Matrice ou listes d'adjacence : passer de l'une à l'autre »)"
        ],
        "enClasse": [
          "0–15 min : réactivation — les dictionnaires de Première (clé → valeur) : ils vont porter nos listes d'adjacence.",
          "15–35 min : modéliser au tableau les amitiés de la classe (ou un plan de métro) : sommets, arêtes, graphe non orienté.",
          "35–70 min : Section 9 : listes d'adjacence en dictionnaire, premier parcours en largeur avec une file ; cellules exécutées.",
          "70–100 min : Section 10 : matrice d'adjacence (symétrie), conversions dans les deux sens ; chaque îlot écrit matrice_vers_listes sans regarder, puis compare.",
          "100–120 min : institutionnalisation : matrice = « voisins ? » en O(1) mais n² cases, listes = compactes ; corrigés poussés."
        ],
        "aPreparer": [
          "Le graphe support (amitiés ou plan) préparé au tableau"
        ]
      },
      {
        "titre": "Séance 9 — Parcours en largeur et en profondeur (BFS / DFS)",
        "duree": "2 h",
        "objectif": "Comprendre que changer la structure (file → pile) change le parcours, et écrire le DFS itératif et récursif.",
        "surLeSite": [
          "Section 11 (« Le parcours en profondeur (DFS) »)",
          "Exercice 11 (défi : dfs itératif avec une pile)"
        ],
        "enClasse": [
          "0–15 min : réactivation — BFS de la séance 8 déroulé à l'oral ; rappel : la pile d'appels de Python (récursivité).",
          "15–45 min : Section 11 : DFS itératif (pile explicite) vs récursif (pile d'appels), comparaison des deux ordres sur le MÊME graphe ; cellules exécutées.",
          "45–80 min : machine — Exercice 11 : écrire dfs(g, depart) et comparer à l'ordre BFS.",
          "80–105 min : sur table, style bac : dérouler BFS puis DFS à la main sur un graphe donné (voisins en ordre alphabétique).",
          "105–120 min : institutionnalisation : FILE → largeur, PILE → profondeur, une seule ligne change ; corrigés poussés."
        ],
        "aPreparer": [
          "Graphe de déroulé imprimé (format question d'écrit)"
        ]
      },
      {
        "titre": "Séance 10 — Cycles dans un graphe et choix de la bonne structure",
        "duree": "2 h",
        "objectif": "Détecter un cycle par DFS + suivi du parent, et savoir justifier le choix d'une structure (dont liste vs dictionnaire).",
        "surLeSite": [
          "Sections 12–13 (« Détecter un cycle », « Bien choisir : un récapitulatif »)",
          "Exercice 12 (défi : contient_cycle)"
        ],
        "enClasse": [
          "0–15 min : réactivation — DFS récursif récité en binômes (cas de base ? ensemble vus ?).",
          "15–45 min : Section 12 : cycle = voisin déjà vu qui n'est PAS le parent ; déroulé à la main sur le carré A-B-C-D-A puis la chaîne A-B-C.",
          "45–70 min : machine — Exercice 12 : contient_cycle, avec le cas du graphe non connexe.",
          "70–95 min : Section 13 : tableau récapitulatif + cellule chronométrée liste vs dictionnaire (200 000 entrées) : le dict gagne par milliers.",
          "95–120 min : écriture libre : pour 4 situations données (annulation, guichet, annuaire, réseau routier), choisir la structure et JUSTIFIER en une phrase ; corrigés poussés."
        ],
        "aPreparer": [
          "Les 4 situations à trancher photocopiées ou projetées"
        ]
      },
      {
        "titre": "Séance 11 — Entraînement épreuves du bac : EP + écrit",
        "duree": "2 h",
        "objectif": "Se placer dans les conditions réelles des deux épreuves : 1 h d'épreuve pratique sur machine, puis un exercice écrit type bac sur table.",
        "surLeSite": [
          "Évaluations : Épreuve pratique blanche n°1 « ABR & file » (2 exercices, 1 h, asserts)",
          "Évaluations : Bac blanc n°1, exercice 1 (arbres binaires de recherche et récursivité, 7 pts)",
          "Fiches méthode « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »"
        ],
        "enClasse": [
          "0–10 min : lecture guidée des fiches méthode : lire les asserts d'abord, respecter les noms, tester au fur et à mesure.",
          "10–70 min : EP blanche n°1 en conditions réelles sur un VRAI Python (Thonny/Capytale) : recherche dans un ABR + file à deux piles, sans document.",
          "70–105 min : sur table, au stylo : exercice 1 du bac blanc n°1 (dessiner l'ABR, hauteur/taille, infixe, fonction taille récursive, coûts).",
          "105–120 min : débrief croisé avec les barèmes du corrigé : erreurs de noms, cas de base oublié, version qui n'exploite pas l'ABR plafonnée ; corrigés poussés."
        ],
        "aPreparer": [
          "Postes avec un vrai Python (Thonny ou Capytale) — l'EP ne se passe pas dans le navigateur",
          "Sujet écrit imprimé + copies",
          "Quelques sujets de la banque officielle Éduscol en réserve pour les rapides"
        ]
      },
      {
        "titre": "Séance 12 — QCM bilan, diagnostic « Ma classe » et remédiation",
        "duree": "2 h",
        "objectif": "Mesurer les acquis du thème, cibler les fragilités question par question et remédier par groupes de besoin.",
        "surLeSite": [
          "QCM du thème (11 questions, dont coûts ABR et détection de cycle)",
          "Suivi « Ma classe » : matrice par thème + diagnostic par question",
          "Fiches « Résumé » et « Erreurs fréquentes » du thème ; exercices 1 à 12 selon besoin"
        ],
        "enClasse": [
          "0–25 min : QCM individuel sur le site, sans document.",
          "25–45 min : diagnostic « Ma classe » vidéoprojeté : les questions les plus ratées sont rejouées et expliquées par les élèves qui ont réussi.",
          "45–90 min : remédiation en îlots de besoin : pile/file → TP guidé à refaire ; arbres → Exercices 6, 7, 9 ; graphes → Exercices 11, 12 ; les solides prennent un sujet EP de la banque officielle.",
          "90–110 min : chaque îlot rédige une « carte erreur » (l'erreur fréquente + comment l'éviter) à partir de la fiche du thème.",
          "110–120 min : bilan du thème et annonce du suivant : ces structures reviendront partout en algorithmique (Dijkstra, tri fusion) ; corrigés poussés."
        ],
        "aPreparer": [
          "Suivi « Ma classe » ouvert sur le poste prof",
          "2–3 sujets de la banque officielle Éduscol déposés sur Capytale",
          "Fiches résumé/erreurs imprimées pour les cartes erreur"
        ]
      }
    ]
  },
  "term-algo": {
    "heures": "22 h (11 séances de 2 h)",
    "resume": "Le cœur de la Terminale : coût des algorithmes (grand O), diviser pour régner (dichotomie, tri fusion), programmation dynamique (rendu de monnaie), Dijkstra sur graphe pondéré, k-NN (révision de Première) et recherche textuelle (naïve puis Boyer-Moore). Le thème s'appuie sur les 9 sections du cours, le TP guidé « Tri fusion pas à pas », le projet îlots « Plus court chemin sur le plan du lycée » et débouche directement sur la préparation des deux épreuves du bac.",
    "seances": [
      {
        "titre": "Séance 1 — Coût d'un algorithme et recherche dichotomique",
        "duree": "2 h",
        "objectif": "Exprimer le coût en grand O et retrouver la dichotomie (révision de Première) comme premier exemple de « diviser pour régner ».",
        "surLeSite": [
          "Sections 1–3 (complexité, diviser pour régner, recherche dichotomique)",
          "Exercices 1 à 2 (texte à trou « milieu », dichotomie complète)",
          "Fiche méthode « Estimer le coût (complexité) d'un algorithme »"
        ],
        "enClasse": [
          "0–15 min : réactivation Première : jeu du nombre mystère (1–100) → séquentiel vs dichotomique, compter les questions",
          "15–45 min : Section 1 : exécuter les cellules doublon lent/rapide, comparer les compteurs O(n²) vs O(n)",
          "45–70 min : Sections 2–3 : principe diviser/régner/combiner ; Exercice 1 (indice du milieu, division entière)",
          "70–100 min : Exercice 2 en binômes ; institutionnalisation : tableau O(1) → O(n²), « couper en deux = log »",
          "100–120 min : écriture libre : justifier « 1024 éléments → 10 comparaisons » ; corrigés poussés"
        ],
        "aPreparer": [
          "Vidéoprojecteur + cellules exécutables du site testées",
          "Fiche méthode complexité imprimée ou projetée"
        ]
      },
      {
        "titre": "Séance 2 — Le tri fusion",
        "duree": "2 h",
        "objectif": "Construire le tri fusion comme application emblématique de diviser pour régner et justifier son coût O(n log n).",
        "surLeSite": [
          "Section 4 (le tri fusion)",
          "Exercices 3 et 5 (fusionner deux listes triées, tri fusion complet)"
        ],
        "enClasse": [
          "0–15 min : réactivation : tris de Première (sélection, insertion) et leur coût O(n²)",
          "15–35 min : débranché : fusionner deux paquets de cartes déjà triés, verbaliser les deux indices",
          "35–65 min : Section 4 : lire, exécuter, dérouler <em>fusionner</em> puis <em>tri_fusion</em> à la main",
          "65–95 min : Exercices 3 puis 5 en binômes ; arbre des découpages au tableau",
          "95–120 min : institutionnalisation : diviser/régner/combiner, log₂(n) niveaux × O(n) par niveau ; écriture libre ; corrigés poussés"
        ],
        "aPreparer": [
          "Deux jeux de cartes (ou étiquettes) par îlot pour la fusion débranchée"
        ]
      },
      {
        "titre": "Séance 3 — TP « Tri fusion pas à pas » sur un vrai Python",
        "duree": "2 h",
        "objectif": "Reprogrammer le tri fusion avec asserts dans les conditions de l'épreuve pratique et « voir » le coût en comptant les appels.",
        "surLeSite": [
          "TP guidé « Tri fusion pas à pas » étapes 1–4",
          "Exercice 6 (exponentiation rapide) pour les plus rapides",
          "Fiche méthode « Réussir l'épreuve pratique »"
        ],
        "enClasse": [
          "0–10 min : rappel : l'EP se passe sur un vrai Python → ouverture de Thonny/Capytale",
          "10–50 min : TP étapes 1–2 : fusion puis récursion, faire passer tous les asserts",
          "50–80 min : TP étape 3 : compter les appels, conjecturer et vérifier 2n − 1",
          "80–110 min : TP étape 4 (style EP) : <em>nb_inferieurs</em> écrit de zéro ; réflexe « lire les asserts d'abord »",
          "110–120 min : bilan méthode EP ; corrigés poussés"
        ],
        "aPreparer": [
          "Salle machines : Thonny installé ou activité Capytale distribuée",
          "Vérifier les comptes ENT/Capytale des élèves"
        ]
      },
      {
        "titre": "Séance 4 — Programmation dynamique : le rendu de monnaie",
        "duree": "2 h",
        "objectif": "Comprendre pourquoi le glouton échoue et mettre en œuvre la programmation dynamique (sous-problèmes + mémorisation).",
        "surLeSite": [
          "Section 5 (programmation dynamique : le rendu de monnaie)",
          "Exercice 4 (défi : rendu de 11 avec {1, 2, 5})"
        ],
        "enClasse": [
          "0–15 min : réactivation : mémoïsation de Fibonacci (thème Langages) — pourquoi mémoriser ?",
          "15–35 min : débranché : rendre 6 avec des pièces {1, 3, 4} → le glouton donne 3 pièces, l'optimum 2",
          "35–70 min : remplir à la main le tableau mini[0..6], puis exécuter le code de la Section 5",
          "70–100 min : Exercice 4 en autonomie ; variantes de montants et de systèmes de pièces",
          "100–120 min : institutionnalisation : glouton ≠ optimum, chaque sous-problème résolu une seule fois ; écriture libre ; corrigés poussés"
        ],
        "aPreparer": [
          "Jetons ou pièces factices {1, 3, 4} pour la phase débranchée"
        ]
      },
      {
        "titre": "Séance 5 — Plus court chemin : l'algorithme de Dijkstra",
        "duree": "2 h",
        "objectif": "Dérouler Dijkstra à la main puis le programmer sur un graphe pondéré (file de priorité heapq).",
        "surLeSite": [
          "Section 6 (Dijkstra)",
          "Exercices 7 (BFS, réactivation) et défi « Mission : le GPS du lycée »"
        ],
        "enClasse": [
          "0–15 min : réactivation : graphes du thème Structures (dictionnaire d'adjacence) ; Exercice 7 (BFS)",
          "15–40 min : problème GPS : pourquoi le BFS ne suffit plus quand les arêtes sont pondérées",
          "40–70 min : déroulé papier de Dijkstra sur le graphe de la Section 6 (tableau des distances, sommet choisi)",
          "70–100 min : exécuter le code heapq de la Section 6, puis défi « GPS du lycée » en binômes",
          "100–120 min : institutionnalisation : glouton mais exact, poids positifs obligatoires ; corrigés poussés"
        ],
        "aPreparer": [
          "Tableau des distances vierge (papier ou projeté) pour le déroulé à la main"
        ]
      },
      {
        "titre": "Séance 6 — Projet îlots « Plus court chemin sur le plan du lycée » (1/2)",
        "duree": "2 h",
        "objectif": "Modéliser le vrai plan du lycée en graphe pondéré et dérouler Dijkstra à la main avant tout codage.",
        "surLeSite": [
          "Projet « Plus court chemin sur le plan du lycée » — phases 1 à 3"
        ],
        "enClasse": [
          "0–15 min : lancement : situation (élève à mobilité réduite), constitution des îlots, attendus",
          "15–45 min : phase 1 : dessiner le plan du lycée en graphe — quels sommets garder ? estimer les distances",
          "45–75 min : phase 2 : traduire en dictionnaire de dictionnaires {lieu: {voisin: distance}}",
          "75–110 min : phase 3 : dérouler Dijkstra à la main sur le graphe de l'îlot (tableau des distances)",
          "110–120 min : point d'étape : chaque îlot annonce son graphe et un plus court chemin vérifié"
        ],
        "aPreparer": [
          "Plans du lycée imprimés (un par îlot)",
          "Grille d'évaluation du projet (modélisation, code, tests, présentation)"
        ]
      },
      {
        "titre": "Séance 7 — Projet îlots « Plus court chemin sur le plan du lycée » (2/2)",
        "duree": "2 h",
        "objectif": "Programmer Dijkstra avec reconstruction de l'itinéraire, tester contre le déroulé papier et présenter.",
        "surLeSite": [
          "Projet « Plus court chemin sur le plan du lycée » — phases 4 à 6 (code de départ fourni)"
        ],
        "enClasse": [
          "0–10 min : rappel des attendus, répartition des rôles dans l'îlot",
          "10–60 min : phase 4 : coder <em>dijkstra(graphe, depart)</em> (distances + prédécesseurs) et <em>chemin(pred, arrivee)</em>",
          "60–90 min : phase 5 : tests contre le déroulé papier de la séance 6 ; cas du lieu isolé (distance infinie)",
          "90–115 min : phase 6 : restitution éclair (2 min/îlot) : itinéraire affiché et « glouton mais exact » expliqué",
          "115–120 min : bilan et ramassage des productions"
        ],
        "aPreparer": [
          "Salle machines (Thonny/Capytale) ; code de départ du projet distribué"
        ]
      },
      {
        "titre": "Séance 8 — k plus proches voisins et recherche naïve d'un motif",
        "duree": "2 h",
        "objectif": "Réviser k-NN (capacité de Première, relue avec l'œil « coût ») et poser la recherche textuelle naïve en O(n×m).",
        "surLeSite": [
          "Sections 7–8 (k-NN, recherche d'un motif dans un texte)"
        ],
        "enClasse": [
          "0–15 min : réactivation Première : principe de k-NN (distance, k voisins, étiquette majoritaire)",
          "15–45 min : Section 7 : exécuter <em>knn</em>, faire varier k et le point testé ; où se cache le tri et son coût ?",
          "45–60 min : institutionnalisation : apprentissage supervisé, distances + tri = coût dominant",
          "60–90 min : Section 8 : recherche naïve, dérouler « abracadabra »/« abra », justifier O(n×m)",
          "90–115 min : réécrire <em>recherche_naive</em> de mémoire avec 3 asserts personnels",
          "115–120 min : teaser Boyer-Moore (« et si on sautait plusieurs cases ? ») ; corrigés poussés"
        ],
        "aPreparer": [
          "Repère quadrillé projeté (ou papier millimétré) pour placer les points k-NN"
        ]
      },
      {
        "titre": "Séance 9 — Boyer-Moore : la règle du mauvais caractère",
        "duree": "2 h",
        "objectif": "Comprendre la comparaison droite → gauche et la table du dernier indice, puis mesurer le gain face à la naïve.",
        "surLeSite": [
          "Section 9 (Boyer-Moore : la règle du mauvais caractère)",
          "Exercice 8 (texte à trou : table du mauvais caractère)",
          "QCM : question Boyer-Moore en sortie de séance"
        ],
        "enClasse": [
          "0–10 min : réactivation : coût de la recherche naïve, où perd-on du temps ?",
          "10–35 min : débranché : chercher « aiguille » avec des bandelettes, comparer depuis la droite, mimer les sauts",
          "35–65 min : construire la table du dernier indice pour « ananas » ; Exercice 8 en binômes",
          "65–95 min : Section 9 : exécuter la course naïve vs Boyer-Moore, comparer les compteurs de comparaisons",
          "95–120 min : institutionnalisation : saut = j − table[caractère] (minimum 1) ; écriture libre ; corrigés poussés"
        ],
        "aPreparer": [
          "Bandelettes texte/motif imprimées pour la manipulation débranchée"
        ]
      },
      {
        "titre": "Séance 10 — Entraînement épreuves du bac (écrit + pratique)",
        "duree": "2 h",
        "objectif": "S'entraîner dans les conditions réelles : un exercice écrit type bac sur table, puis une épreuve pratique blanche sur machine.",
        "surLeSite": [
          "Évaluations : Bac blanc n°1, exercice 3 (graphes : parcours et plus court chemin) — sur table",
          "Évaluations : EP blanche n°2 (fusion & programmation dynamique) — sur machine",
          "Fiches méthode « Réussir l'épreuve écrite » et « Réussir l'épreuve pratique »"
        ],
        "enClasse": [
          "0–10 min : lecture guidée des deux fiches méthode (gestion du temps, lire les asserts d'abord)",
          "10–55 min : sur table, au stylo, sans document : exercice 3 du Bac blanc n°1 (graphes)",
          "55–70 min : correction collective : barème, indentation au stylo, phrases de justification",
          "70–115 min : sur machine (Thonny/Capytale) : EP blanche n°2 complète, tous les asserts doivent passer",
          "115–120 min : auto-évaluation sur la grille EP ; corrigés poussés"
        ],
        "aPreparer": [
          "Sujets imprimés (Bac blanc n°1 ex. 3) + copies",
          "Salle machines avec vrai Python (Thonny) ou activité Capytale",
          "Repérer 2–3 sujets de la banque officielle Éduscol à donner en prolongement"
        ]
      },
      {
        "titre": "Séance 11 — QCM bilan, diagnostic « Ma classe » et remédiation",
        "duree": "2 h",
        "objectif": "Mesurer les acquis du thème, cibler les notions fragiles et y remédier par groupes de besoin avant le DS.",
        "surLeSite": [
          "QCM du thème (10 questions)",
          "Suivi « Ma classe » : matrice par thème et diagnostic par question",
          "Exercices 1 à 8 et défi « GPS du lycée » (rejoués en remédiation ciblée)"
        ],
        "enClasse": [
          "0–25 min : QCM individuel (10 questions), sans aide",
          "25–45 min : lecture collective du diagnostic « Ma classe » : questions les plus échouées, notions fragiles",
          "45–90 min : remédiation par groupes de besoin : dichotomie/complexité, rendu de monnaie, Dijkstra ou Boyer-Moore, via les exercices ciblés du site",
          "90–110 min : groupes solides : un sujet de la banque officielle EP en autonomie sur machine",
          "110–120 min : bilan du thème et annonce du DS d'algorithmique ; corrigés poussés"
        ],
        "aPreparer": [
          "Ouvrir le tableau de bord « Ma classe » avant la séance",
          "Sujets de la banque officielle EP téléchargés pour les groupes avancés"
        ]
      }
    ]
  },
  "term-langages": {
    "heures": "20 h — 10 séances de 2 h",
    "resume": "Du style de programmation à la limite du calcul : paradigmes (impératif, fonctionnel, objet), POO, récursivité et mémoïsation, modularité et git, mise au point (assert, jeux de tests, doctest), bugs classiques, calculabilité. Deux séances dédiées bac : entraînement croisé écrit + épreuve pratique, puis QCM diagnostic et remédiation.",
    "seances": [
      {
        "titre": "Séance 1 — Trois façons de programmer : les paradigmes",
        "duree": "2 h",
        "objectif": "Identifier impératif, fonctionnel et objet, et comprendre qu'un même problème admet plusieurs styles.",
        "surLeSite": [
          "Section 1 (cellule « somme des carrés » en 3 versions)",
          "Fiche méthode « Estimer le coût (complexité) d'un algorithme » (réactivation)"
        ],
        "enClasse": [
          "0–20 min : réactivation Première — fonctions, boucles, compréhensions ; sondage rapide « comment écririez-vous la somme des carrés ? »",
          "20–50 min : Section 1 — exécuter la cellule comparant les 3 paradigmes ; par binômes, réécrire un petit problème (moyenne, comptage) dans les 3 styles",
          "50–70 min : institutionnalisation — tableau paradigme / mots-clés / quand l'utiliser ; vocabulaire <strong>état</strong>, <strong>fonction pure</strong>",
          "70–100 min : manipulation libre — transformer une boucle donnée en <em>map/filter</em> puis en compréhension",
          "100–120 min : écriture libre — chaque élève rédige 3 phrases « impératif / fonctionnel / objet, c'est… » ; corrigé collectif poussé en fin de séance"
        ],
        "aPreparer": [
          "Créer l'activité Capytale de la séquence (notebook vierge « paradigmes »)",
          "Vérifier Thonny installé sur les postes (l'EP se passe sur un vrai Python)"
        ]
      },
      {
        "titre": "Séance 2 — POO (1) : classes, objets, attributs, méthodes",
        "duree": "2 h",
        "objectif": "Écrire une classe simple avec <strong>__init__</strong>, <strong>self</strong>, attributs et méthodes.",
        "surLeSite": [
          "Section 2 (classe CompteBancaire)",
          "Exercices 2 et 5 (texte à trou <em>self</em> ; classe Compteur)"
        ],
        "enClasse": [
          "0–15 min : réactivation — en Première on <em>utilisait</em> des objets (listes, chaînes : <em>t.append</em>, <em>s.upper</em>) ; aujourd'hui on fabrique le moule",
          "15–45 min : Section 2 — dérouler CompteBancaire ; schéma au tableau : classe = moule, objet = instance, <em>self</em> = l'objet courant",
          "45–75 min : Exercice 2 (trou <em>self</em>) puis Exercice 5 (Compteur) sur le site ; circulation dans les rangs",
          "75–105 min : extension guidée — ajouter une méthode <em>afficher()</em> et un attribut à CompteBancaire dans Thonny",
          "105–120 min : institutionnalisation + corrigés poussés ; trace écrite : vocabulaire classe/instance/attribut/méthode/constructeur"
        ],
        "aPreparer": [
          "Distribuer le squelette CompteBancaire sur Capytale",
          "Prévoir la fiche de vocabulaire POO à coller dans le cahier"
        ]
      },
      {
        "titre": "Séance 3 — POO (2) : encapsuler une structure (classe Pile)",
        "duree": "2 h",
        "objectif": "Relier POO et structures de données : implémenter une interface par une classe.",
        "surLeSite": [
          "Section 2 (relecture)",
          "Exercice 7 (défi : classe Pile — empiler, depiler, est_vide)",
          "Glossaire du thème"
        ],
        "enClasse": [
          "0–15 min : réactivation — interface vs implémentation (thème Structures de données) : que doit « savoir faire » une pile ?",
          "15–55 min : Exercice 7 en autonomie sur machine (Thonny) : classe Pile encapsulant une liste ; les rapides ajoutent une classe File",
          "55–75 min : mise en commun — pourquoi cacher la liste interne ? notion d'<strong>encapsulation</strong>",
          "75–105 min : réinvestissement — utiliser sa Pile pour vérifier un parenthésage (réécriture objet d'un algo connu)",
          "105–120 min : corrigé poussé + écriture libre : « en quoi la POO facilite le travail à plusieurs ? »"
        ],
        "aPreparer": [
          "Préparer le fichier de tests (asserts) à donner aux élèves dans Thonny",
          "Relire le corrigé de la vérification de parenthésage"
        ]
      },
      {
        "titre": "Séance 4 — La récursivité : cas de base + appel récursif",
        "duree": "2 h",
        "objectif": "Écrire et dérouler une fonction récursive simple ; comprendre la pile d'appels.",
        "surLeSite": [
          "Section 3 (factorielle, somme)",
          "Exercices 1, 3 et 6 (factorielle à trous ; somme_liste ; puissance)",
          "Fiche méthode « Écrire une fonction récursive sans se tromper »"
        ],
        "enClasse": [
          "0–15 min : réactivation — la pile (séance 3) : dérouler factorielle(3) au tableau en empilant les appels",
          "15–35 min : Section 3 — les 2 ingrédients obligatoires ; que se passe-t-il sans cas de base ? (RecursionError en direct)",
          "35–75 min : Exercices 1, 3 puis 6 sur le site, en autonomie graduée ; méthode des 3 questions de la fiche",
          "75–100 min : débogueur pas-à-pas de Thonny sur puissance(2, 5) — visualiser la pile d'appels réelle",
          "100–120 min : institutionnalisation + corrigés poussés ; trace écrite : gabarit « if cas de base … return … »"
        ],
        "aPreparer": [
          "Tester le débogueur pas-à-pas de Thonny sur un poste élève",
          "Imprimer la fiche méthode récursivité (1 par élève)"
        ]
      },
      {
        "titre": "Séance 5 — Récursivité (2) : coût et mémoïsation",
        "duree": "2 h",
        "objectif": "Mesurer le coût exponentiel de Fibonacci naïf et l'écraser par mémoïsation (porte d'entrée de la programmation dynamique).",
        "surLeSite": [
          "Section 4 (fib_naif vs fib_memo, piège memo={})",
          "Exercice 4 (défi : escalier mémoïsé)",
          "Fiche méthode « Estimer le coût »"
        ],
        "enClasse": [
          "0–15 min : réactivation — dessiner l'arbre des appels de fib(5) : combien de fois calcule-t-on fib(2) ?",
          "15–45 min : Section 4 — chronométrer fib_naif(30) vs fib_memo(50) ; institutionnaliser <strong>mémoïsation</strong> = dictionnaire de résultats",
          "45–60 min : le piège <em>memo={}</em> en argument par défaut (warnbox de la section) — bug classique du bac",
          "60–95 min : Exercice 4 (escalier) en binômes sur machine ; question bonus : pourquoi est-ce Fibonacci déguisé ?",
          "95–120 min : corrigés poussés + écriture libre : « expliquer la mémoïsation à un élève de Première en 4 lignes »"
        ],
        "aPreparer": [
          "Préparer un chronométrage (module time) prêt à coller dans Thonny",
          "Annoncer le DS écrit de fin de thème"
        ]
      },
      {
        "titre": "Séance 6 — Modularité, docstrings et gestion de versions (git)",
        "duree": "2 h",
        "objectif": "Découper un programme en fonctions et modules ; découvrir git comme outil d'historique et de travail collaboratif.",
        "surLeSite": [
          "Section 5 (est_premier / premiers_jusqu_a, encart git)",
          "Encart « Coder pour de vrai » (Capytale, Thonny, VS Code)"
        ],
        "enClasse": [
          "0–15 min : réactivation — la « décomposition » de la pensée informatique ; pourquoi une fonction = une responsabilité ?",
          "15–45 min : Section 5 — spécification par docstring ; séparer est_premier dans un module <em>outils.py</em> importé depuis un second fichier (vrais fichiers, dans Thonny)",
          "45–70 min : démonstration git au vidéoprojecteur : init, commit, historique, retour en arrière ; vocabulaire commit/branche/fusion",
          "70–105 min : mini-projet en binômes — découper un script monolithique fourni en 3 fonctions documentées + module",
          "105–120 min : institutionnalisation + corrigé poussé ; trace écrite sur git (3 verbes : enregistrer, revenir, fusionner)"
        ],
        "aPreparer": [
          "Installer git sur le poste prof et préparer un dépôt de démonstration",
          "Déposer le script monolithique à découper sur Capytale"
        ]
      },
      {
        "titre": "Séance 7 — Mise au point : assert, jeux de tests, doctest et bugs classiques",
        "duree": "2 h",
        "objectif": "Construire un jeu de tests couvrant les cas limites et reconnaître les bugs récurrents (flottants, effet de bord, off-by-one).",
        "surLeSite": [
          "Sections 6–7 (moyenne + doctest ; bestiaire des bugs)",
          "Défi « Mission : un test qui débusque le bug » (maximum + asserts)"
        ],
        "enClasse": [
          "0–15 min : réactivation — à l'épreuve pratique, les <em>assert</em> sont la spécification : les lire d'abord !",
          "15–45 min : Section 6 — assert, jeu de tests, doctest sur la fonction moyenne ; règle d'or : tester le vide, le zéro, le négatif",
          "45–70 min : Section 7 en îlots — chaque îlot exécute et explique un bug du bestiaire (flottants, b = a, off-by-one, elif) au reste de la classe",
          "70–100 min : défi « Mission » sur machine : écrire maximum(t) et son jeu de tests ; échanger les fonctions entre binômes pour les casser",
          "100–120 min : corrigés poussés + trace écrite : check-list « mon jeu de tests est-il complet ? »"
        ],
        "aPreparer": [
          "Préparer 4 fonctions volontairement buguées (une par îlot)",
          "Photocopier la check-list de tests"
        ]
      },
      {
        "titre": "Séance 8 — Calculabilité et décidabilité : les limites du calcul",
        "duree": "2 h",
        "objectif": "Distinguer calculable/décidable et présenter le problème de l'arrêt comme problème indécidable (Turing, 1936).",
        "surLeSite": [
          "Section 8 (cellule « un programme est une donnée », exec)",
          "QCM (10 questions) — 3 questions en sortie de séance",
          "Glossaire du thème"
        ],
        "enClasse": [
          "0–15 min : réactivation — architecture de von Neumann (Première) : programme et données dans la même mémoire",
          "15–35 min : activité débranchée — le paradoxe « cette phrase est fausse » joué à l'oral pour sentir la contradiction",
          "35–65 min : Section 8 — le problème de l'arrêt, l'idée de la preuve par l'absurde au tableau ; conséquence : pas d'antivirus parfait",
          "65–90 min : cellule exec() — la même chaîne est donnée puis programme ; thèse de Church-Turing (aucun langage ne fera mieux)",
          "90–120 min : écriture libre — rédiger en 10 lignes « pourquoi le problème de l'arrêt est indécidable » (entraînement question ouverte du bac) ; corrigé poussé"
        ],
        "aPreparer": [
          "Préparer les cartes de l'activité débranchée (phrases auto-référentes)",
          "Relire la preuve de l'arrêt pour la questionner en classe"
        ]
      },
      {
        "titre": "Séance 9 — Entraînement épreuves du bac (écrit + pratique)",
        "duree": "2 h",
        "objectif": "S'entraîner dans les conditions réelles : un exercice écrit type bac sur table, un exercice type EP avec asserts sur machine.",
        "surLeSite": [
          "Évaluations : Bac blanc n°2, exercice « POO & dynamique » (sur table)",
          "Évaluations : EP blanche n°2 — fusion & programmation dynamique (sur machine)",
          "Fiches méthode « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »"
        ],
        "enClasse": [
          "0–10 min : lecture guidée des deux fiches méthode — gestion du temps, lire les assert d'abord, respecter le nom demandé",
          "10–50 min : sur table, sans machine — exercice écrit type bac (POO & programmation dynamique du Bac blanc n°2), copies ramassées",
          "50–105 min : sur machine (Thonny, vrai Python) — EP blanche n°2 en conditions d'épreuve : 2 exercices, 55 min, asserts à faire passer",
          "105–120 min : débriefing croisé — erreurs de gestion du temps, cas limites oubliés ; corrigés poussés en fin de séance"
        ],
        "aPreparer": [
          "Imprimer le sujet écrit + prévoir des copies",
          "Télécharger 2 sujets de la banque officielle Éduscol en réserve pour les rapides"
        ]
      },
      {
        "titre": "Séance 10 — QCM bilan, diagnostic « Ma classe » et remédiation",
        "duree": "2 h",
        "objectif": "Évaluer les acquis du thème, cibler les fragilités question par question et y remédier immédiatement.",
        "surLeSite": [
          "QCM (10 questions) en conditions individuelles",
          "Tableau de bord « Ma classe » (diagnostic par question)",
          "Exercices 1 à 7 (reprise ciblée) et sections 3, 4, 6 selon les fragilités"
        ],
        "enClasse": [
          "0–25 min : QCM du thème (10 questions) en individuel sur le site",
          "25–45 min : projection du diagnostic « Ma classe » — repérer les 2–3 questions les plus échouées, verbaliser les confusions",
          "45–90 min : remédiation en groupes de besoin — groupe récursivité (Exercices 1, 3, 6 + Section 3), groupe POO (Exercices 2, 5, 7), groupe tests/mémoïsation (Exercice 4 + Section 6) ; les élèves solides tutorent ou attaquent un sujet EP de la banque",
          "90–110 min : reprise collective des 2 questions les plus ratées, nouvelle question flash de vérification",
          "110–120 min : bilan du thème + annonce du thème suivant (Algorithmique : la programmation dynamique y revient) ; corrigés poussés"
        ],
        "aPreparer": [
          "Vérifier la remontée des résultats dans « Ma classe » avant la séance",
          "Préparer la composition des groupes de besoin à partir des séances 4 à 9"
        ]
      }
    ]
  },
  "term-bdd": {
    "heures": "18 h (9 séances de 2 h)",
    "resume": "Du modèle relationnel (tables, clés, contraintes d'intégrité, anomalies de schéma) au SQL complet (SELECT/WHERE, ORDER BY, agrégats, GROUP BY, jointures, INSERT/UPDATE/DELETE), avec vérification systématique dans DB Browser for SQLite. Le projet îlots « médiathèque » relie SQL et Python (mini-moteur sélection/projection/jointure), puis deux séances de prépa bac : entraînement écrit + pratique, et QCM final avec diagnostic « Ma classe ».",
    "seances": [
      {
        "titre": "Du fichier au SGBD : le modèle relationnel",
        "duree": "2 h",
        "objectif": "Identifier relation, attribut, domaine, enregistrement ; distinguer structure et contenu ; comprendre le rôle d'un SGBD.",
        "surLeSite": [
          "Sections 1–2 (« Pourquoi des bases de données ? », « Le modèle relationnel ») avec la base « lycée » (tables <strong>classe</strong> et <strong>eleve</strong>)",
          "Capacités du thème (encadré d'ouverture) à projeter"
        ],
        "enClasse": [
          "0–15 min : réactivation Première — données en tables (CSV, dictionnaires) : limites d'un fichier unique (redondance, accès concurrent, recherche)",
          "15–40 min : Section 1 en lecture guidée — rôle du SGBD, idée ACID, exemples (SQLite, PostgreSQL)",
          "40–75 min : Section 2 — vocabulaire sur les tables classe/eleve ; écrire les schémas <em>eleve(id, nom, #id_classe, moyenne)</em>",
          "75–105 min : manipulation — ouvrir la base « lycée » dans DB Browser, distinguer onglet structure / onglet données",
          "105–120 min : institutionnalisation (schéma ≠ contenu) + écriture libre ; corrigés poussés"
        ],
        "aPreparer": [
          "DB Browser for SQLite installé sur les postes + fichier lycee.db pré-rempli (tables classe et eleve du cours)",
          "Vidéoprojecteur pour la démonstration"
        ]
      },
      {
        "titre": "Clés, contraintes d'intégrité et schémas « malades »",
        "duree": "2 h",
        "objectif": "Identifier clé primaire, clé étrangère et les trois contraintes d'intégrité ; repérer les anomalies d'un schéma redondant.",
        "surLeSite": [
          "Sections 3–4 (« Clés primaires, clés étrangères, intégrité », « Un schéma malade »)",
          "Exercice 9 (anomalies du club de sport, niveau moyen)"
        ],
        "enClasse": [
          "0–10 min : réactivation — interro flash sur le vocabulaire de la séance 1",
          "10–40 min : Section 3 — clés primaire/étrangère, contraintes de domaine, d'entité, référentielle ; démo DB Browser : le SGBD refuse une clé étrangère invalide",
          "40–70 min : Section 4 en îlots — la table <strong>emprunt</strong> du CDI : trouver les anomalies de mise à jour, d'insertion, de suppression",
          "70–100 min : Exercice 9 sur papier — découper la table du club de sport en 3 tables avec clés",
          "100–120 min : institutionnalisation (redondance = schéma malade) + écriture libre ; corrigés poussés"
        ],
        "aPreparer": [
          "Copies papier de la table « emprunt » malade et de l'énoncé du club de sport",
          "Base lycee.db pour la démo du refus d'intégrité référentielle"
        ]
      },
      {
        "titre": "Interroger : SELECT, FROM, WHERE, tri",
        "duree": "2 h",
        "objectif": "Écrire et vérifier des requêtes d'interrogation : projection (SELECT), sélection (WHERE), tri (ORDER BY), DISTINCT.",
        "surLeSite": [
          "Sections 5–6 (cellules Python exécutables « équivalent SQL »)",
          "TP guidé « TP — Requêtes SQL sur la base du lycée » étapes 1–2",
          "Exercices 1 et 2 (niveau facile)"
        ],
        "enClasse": [
          "0–10 min : réactivation — redessiner le schéma de la base lycée de mémoire",
          "10–35 min : Section 5 — SELECT = colonnes (projection), WHERE = lignes (sélection) ; exécuter la cellule Python équivalente",
          "35–60 min : TP étape 1 sur papier (comme à l'écrit), puis vérification dans DB Browser",
          "60–85 min : ORDER BY et DISTINCT (Section 6 début) + TP étape 2 sur machine",
          "85–110 min : Exercices 1 et 2 en autonomie, en vrai SQL sur la base",
          "110–120 min : institutionnalisation + corrigés poussés"
        ],
        "aPreparer": [
          "DB Browser + lycee.db sur tous les postes (tables eleve et note du TP)",
          "Fiche réponse papier pour l'écriture des requêtes avant exécution"
        ]
      },
      {
        "titre": "Agréger et croiser : GROUP BY et jointures",
        "duree": "2 h",
        "objectif": "Utiliser COUNT/AVG/MIN/MAX, agréger par paquets avec GROUP BY, croiser deux tables avec JOIN … ON.",
        "surLeSite": [
          "Sections 6–7 (cellules Python exécutables : GROUP BY et double boucle de jointure)",
          "TP guidé « Requêtes SQL sur la base du lycée » étapes 3–4",
          "Exercices 3, 4, 6 et 7 (niveau moyen)"
        ],
        "enClasse": [
          "0–10 min : réactivation — 3 requêtes SELECT/WHERE/ORDER BY à écrire au tableau",
          "10–35 min : Section 6 — fonctions d'agrégat puis GROUP BY « par paquets » ; cellule Python à l'appui",
          "35–55 min : TP étape 4 (agrégation) sur machine, calculs vérifiés à la main",
          "55–85 min : Section 7 — la jointure : ON relie clé étrangère et clé primaire ; démo du produit cartésien si on oublie ON",
          "85–110 min : TP étape 3 + Exercices 3, 4, 6 et 7 en autonomie",
          "110–120 min : institutionnalisation + corrigés poussés"
        ],
        "aPreparer": [
          "Base lycee.db avec la table note (étape 3 du TP) chargée",
          "Requête jointure sans ON préparée pour la démo du produit cartésien"
        ]
      },
      {
        "titre": "Modifier la base : INSERT, UPDATE, DELETE",
        "duree": "2 h",
        "objectif": "Écrire des requêtes de mise à jour en mesurant le danger du WHERE oublié ; consolider tout le SQL du thème.",
        "surLeSite": [
          "Sections 8–9 (« Modifier la base », « Mémo SQL »)",
          "TP guidé « Requêtes SQL sur la base du lycée » étape 5",
          "Exercices 5 et 8 (niveau défi) + défi « Mission : le tableau d'honneur »"
        ],
        "enClasse": [
          "0–10 min : réactivation — une jointure à écrire au tableau",
          "10–35 min : Section 8 — INSERT/UPDATE/DELETE ; démo live d'un UPDATE sans WHERE sur une copie jetable de la base (toute la table écrasée)",
          "35–65 min : TP étape 5 sur machine, dont le refus du SGBD pour la suppression d'un élève encore référencé",
          "65–90 min : Exercices 5 et 8, puis défi « tableau d'honneur » (requête complète WHERE + ORDER BY)",
          "90–110 min : Section 9 — construction collective du mémo SQL, fiche de synthèse personnelle",
          "110–120 min : écriture libre + corrigés poussés"
        ],
        "aPreparer": [
          "Copie jetable de lycee.db pour la démo destructive (UPDATE sans WHERE)",
          "Fiche mémo SQL vierge à compléter (recto-verso)"
        ]
      },
      {
        "titre": "Projet îlots « médiathèque » (1/2) : schéma et requêtes",
        "duree": "2 h",
        "objectif": "Concevoir en îlot un schéma relationnel sain (LIVRE, EMPRUNT) et écrire les requêtes SQL du documentaliste.",
        "surLeSite": [
          "Projet « Mini-base de données de la médiathèque », phases 1 à 3",
          "Sections 3–4 en appui (clés, anomalies)"
        ],
        "enClasse": [
          "0–15 min : lancement — situation du cahier d'emprunts, constitution des îlots, rappel des anomalies d'une table unique",
          "15–45 min : phases 1–2 — conception du schéma LIVRE/EMPRUNT sur papier, justification des clés primaires et étrangère",
          "45–90 min : phase 3 — écrire les requêtes du documentaliste (sélection, projection, jointure, COUNT) puis les vérifier dans DB Browser",
          "90–110 min : mise en commun inter-îlots — comparer les schémas, trancher les désaccords",
          "110–120 min : bilan intermédiaire, consignes pour la séance 2"
        ],
        "aPreparer": [
          "Base mediatheque.db pré-créée dans DB Browser (tables LIVRE et EMPRUNT vides ou remplies)",
          "Fiche projet imprimée par îlot (situation + questions du documentaliste)"
        ]
      },
      {
        "titre": "Projet îlots « médiathèque » (2/2) : mini-moteur SQL en Python",
        "duree": "2 h",
        "objectif": "Programmer sélection, projection et jointure en Python pur et retrouver les résultats des requêtes SQL (les asserts font foi).",
        "surLeSite": [
          "Projet « Mini-base de données de la médiathèque », phases 4 à 6 (code fourni)",
          "Sections 5 et 7 (cellules Python « équivalent SQL ») en appui"
        ],
        "enClasse": [
          "0–10 min : réactivation — SQL et Python côte à côte : une sélection = une compréhension de liste",
          "10–60 min : phase 4 — coder <strong>selection</strong>, <strong>projection</strong>, <strong>jointure</strong> sur Thonny ou Capytale (tables = listes de dictionnaires)",
          "60–85 min : phase 5 — tests : chaque requête papier doit donner le même résultat que le mini-moteur (asserts)",
          "85–110 min : phase 6 — présentations d'îlots : une requête SQL et « sa traduction » Python côte à côte",
          "110–120 min : institutionnalisation — ce qu'apporte un vrai SGBD (contraintes, persistance, concurrence) ; corrigés poussés"
        ],
        "aPreparer": [
          "Thonny ou Capytale opérationnels (l'épreuve pratique se passe sur un vrai Python)",
          "Squelette de code du mini-moteur à distribuer (tables livres/emprunts pré-saisies)"
        ]
      },
      {
        "titre": "Entraînement épreuves du bac : écrit + pratique",
        "duree": "2 h",
        "objectif": "S'entraîner dans les conditions réelles : exercice SQL type bac au stylo, puis exercice type épreuve pratique avec asserts sur machine.",
        "surLeSite": [
          "Évaluations : Bac blanc n°1 (écrit type bac « arbres · SQL · graphes »), exercice SQL",
          "Fiches méthode « Réussir l'épreuve écrite » et « Réussir l'épreuve pratique »"
        ],
        "enClasse": [
          "0–10 min : lecture guidée des deux fiches méthode — gestion du temps, SQL en majuscules, « lire les asserts d'abord »",
          "10–55 min : sur table — l'exercice SQL du Bac blanc n°1 en conditions réelles (stylo, sans document, temps limité)",
          "55–70 min : correction commentée « à la façon du correcteur » : points faciles à ne jamais laisser vides",
          "70–110 min : sur machine — 1 exercice type épreuve pratique avec asserts (sujet de la banque officielle sur dictionnaires/tables) sous Thonny",
          "110–120 min : bilan des réflexes (nom exact de la fonction, tester au fur et à mesure) ; corrigés poussés"
        ],
        "aPreparer": [
          "Sujets imprimés de l'exercice SQL (un par élève)",
          "Un sujet SQL/tables de la banque officielle d'épreuve pratique, prêt sur les postes",
          "Postes avec vrai Python (Thonny) — pas l'éditeur du navigateur"
        ]
      },
      {
        "titre": "QCM bilan, diagnostic « Ma classe » et remédiation",
        "duree": "2 h",
        "objectif": "Mesurer les acquis du thème question par question et remédier par groupes de besoin avant de quitter le SQL.",
        "surLeSite": [
          "QCM (10 questions)",
          "Suivi « Ma classe » : matrice par thème + diagnostic par question",
          "Section 9 (Mémo SQL) ; exercices non traités en réserve"
        ],
        "enClasse": [
          "0–25 min : QCM individuel des 10 questions, sans document",
          "25–45 min : diagnostic « Ma classe » projeté — repérer les questions massivement échouées (jointures ? WHERE ? anomalies ?)",
          "45–95 min : remédiation par groupes de besoin — reprise ciblée des étapes 3 et 5 du TP, exercices restants, défi pour les plus rapides",
          "95–110 min : mémo SQL finalisé + carte mentale du thème (clés → intégrité → requêtes)",
          "110–120 min : écriture libre bilan (« ce que je sais faire / ce qui me résiste ») ; corrigés poussés"
        ],
        "aPreparer": [
          "Comptes élèves actifs pour la remontée du QCM dans « Ma classe »",
          "Copies du mémo SQL pour le classeur de révision bac"
        ]
      }
    ]
  },
  "term-archi-reseaux": {
    "heures": "18 h (9 séances de 2 h — période 5, S19–S21)",
    "resume": "Sous le code, une machine et un réseau : SoC, système d'exploitation (processus, ordonnancement, interblocage), commandes système, acheminement par paquets, routage RIP/OSPF et chiffrement symétrique/asymétrique. Thème très présent à l'écrit du bac (exercice croisé processus/réseaux) ; la partie chiffrement fournit de bons exercices Python type EP.",
    "seances": [
      {
        "titre": "Séance 1 — Le SoC et le rôle de l'OS",
        "duree": "2 h",
        "objectif": "Identifier les blocs d'un SoC (CPU, GPU, mémoire, modem radio, E/S) et formuler le rôle de l'OS : gérer et partager les ressources.",
        "surLeSite": [
          "Sections 1–2",
          "Exercice 1 (facile, SoC)",
          "Ressource DIU : PDF « Introduction aux systèmes d'exploitation »"
        ],
        "enClasse": [
          "0–15 min : réactivation Première — architecture de von Neumann, composants d'un PC (au tableau, en îlots)",
          "15–45 min : Section 1 — schéma du SoC ; chaque îlot ouvre un smartphone virtuel : quel bloc fait quoi ?",
          "45–70 min : Exercice 1 sur table — associer fonctions et composants, avantage/limite du SoC",
          "70–100 min : Section 2 — l'OS chef d'orchestre ; débat : que se passe-t-il quand 2 applis veulent le processeur ?",
          "100–120 min : institutionnalisation + écriture libre (« un SoC, c'est… ») ; corrigé de l'exercice 1 poussé"
        ],
        "aPreparer": [
          "Vidéoprojecteur (schéma SoC de la section 1)",
          "Le PDF DIU « systèmes » en lien sur l'ENT"
        ]
      },
      {
        "titre": "Séance 2 — Processus et ordonnancement",
        "duree": "2 h",
        "objectif": "Décrire les états d'un processus (prêt/élu/bloqué) et simuler un ordonnanceur round-robin.",
        "surLeSite": [
          "Section 3 (cellule exécutable : tourniquet avec deque)",
          "Exercice 5 (moyen, simulation round-robin)"
        ],
        "enClasse": [
          "0–15 min : réactivation — différence programme (fichier) / processus (exécution) ; erreur classique du site",
          "15–40 min : Section 3 — les 3 états au tableau ; jeu de rôle : 4 élèves « processus », le prof « ordonnanceur »",
          "40–75 min : cellule exécutable de la section 3 sur Basthon, puis Exercice 5 : dérouler le tourniquet {P1:4, P2:2} à la main AVANT d'exécuter",
          "75–105 min : variantes en binômes : changer le quantum, 3 processus ; qui finit en premier et pourquoi ?",
          "105–120 min : institutionnalisation (chronologie type bac) ; corrigé poussé"
        ],
        "aPreparer": [
          "Salle info ou Basthon/Capytale (1 poste pour 2)"
        ]
      },
      {
        "titre": "Séance 3 — Interblocage et commandes système",
        "duree": "2 h",
        "objectif": "Identifier un interblocage et savoir le casser ; utiliser quelques commandes de gestion des processus et fichiers.",
        "surLeSite": [
          "Sections 4–5",
          "Exercice 7 (facile, deadlock)",
          "Débranché : « Le dîner des philosophes » (30 min)"
        ],
        "enClasse": [
          "0–30 min : activité débranchée « dîner des philosophes » — 5 élèves, 5 stylos ; vivre le blocage puis chercher la règle qui débloque",
          "30–50 min : Section 4 — formaliser : attente circulaire, ordre d'acquisition des ressources ; Exercice 7 à l'oral",
          "50–90 min : Section 5 sur machine — terminal réel : ps, kill, ls, cd, chmod… chaque îlot tient un « carnet de commandes »",
          "90–110 min : mini-défi : retrouver le PID d'un processus et l'arrêter proprement",
          "110–120 min : écriture libre (« un interblocage, c'est… ») ; corrigés poussés"
        ],
        "aPreparer": [
          "5 stylos + disposition en cercle pour le débranché",
          "Postes avec accès à un terminal (Linux ou WSL/PowerShell)"
        ]
      },
      {
        "titre": "Séance 4 — Les réseaux : communiquer par paquets",
        "duree": "2 h",
        "objectif": "Décrire la commutation de paquets et l'encapsulation TCP/IP, en réinvestissant les acquis de Première.",
        "surLeSite": [
          "Section 6",
          "Ressource DIU : fiche « Repères réseaux » (TCP/IP, DNS, masques, routage)"
        ],
        "enClasse": [
          "0–20 min : réactivation Première — adresses IP, protocole TCP/IP, client/serveur (quiz oral rapide)",
          "20–50 min : Section 6 — pourquoi découper en paquets ? Activité : envoyer une « lettre » découpée en 4 morceaux qui prennent des chemins différents",
          "50–80 min : lecture guidée de la fiche « Repères réseaux » en îlots : chaque îlot restitue une notion (DNS, masque, passerelle…)",
          "80–110 min : trace écrite collective — schéma de l'encapsulation au tableau, recopié et annoté",
          "110–120 min : institutionnalisation + annonce du routage (séance 5)"
        ],
        "aPreparer": [
          "Fiche « Repères réseaux » projetable",
          "Enveloppes/papiers pour l'activité paquets"
        ]
      },
      {
        "titre": "Séance 5 — Le routage : RIP contre OSPF",
        "duree": "2 h",
        "objectif": "Remplir une table de routage et comparer RIP (nombre de sauts) et OSPF (coût des liens, via Dijkstra).",
        "surLeSite": [
          "Section 7",
          "Exercice 2 (moyen, table de routage R1→R5)"
        ],
        "enClasse": [
          "0–15 min : réactivation — le réseau à 5 routeurs de la section 7 projeté ; lien avec Dijkstra vu au thème algorithmique",
          "15–45 min : Section 7 — RIP compte les sauts, OSPF somme les coûts : dérouler les deux sur le même graphe au tableau",
          "45–80 min : Exercice 2 sur table en îlots : table de routage de R1, justification saut par saut",
          "80–105 min : question type bac au tableau : panne d'une liaison → recalcul des routes ; rédiger la justification en 2 phrases",
          "105–120 min : institutionnalisation (RIP ∝ sauts, OSPF ∝ 1/débit) ; corrigé poussé"
        ],
        "aPreparer": [
          "Graphe du réseau imprimé (1 par îlot)",
          "Copies : question de routage rédigée à ramasser"
        ]
      },
      {
        "titre": "Séance 6 — Chiffrement symétrique : César et XOR",
        "duree": "2 h",
        "objectif": "Programmer un chiffrement symétrique (César, XOR) et comprendre le problème de l'échange de clé.",
        "surLeSite": [
          "Section 8 (cellule exécutable : code de César)",
          "Exercices 3 (texte à trou César), 4 (déchiffrer PHVVDJH) et 6 (XOR)"
        ],
        "enClasse": [
          "0–15 min : réactivation — codage des caractères (ord/chr, vu en Première) et opérateur modulo",
          "15–40 min : Section 8 — le code de César : exécuter la cellule, chiffrer son prénom à la main puis à la machine",
          "40–70 min : Exercice 3 (texte à trou : le modulo 26) puis Exercice 4 (déchiffrer avec la clé -3)",
          "70–100 min : Exercice 6 — chiffrement XOR ; constater que (x ^ k) ^ k = x : même clé pour chiffrer et déchiffrer",
          "100–120 min : institutionnalisation — <strong>symétrique = une seule clé partagée</strong>, d'où le problème de l'échange ; corrigés poussés"
        ],
        "aPreparer": [
          "Salle info (Basthon/Capytale)",
          "Alphabet + table ASCII imprimés en aide"
        ]
      },
      {
        "titre": "Séance 7 — Chiffrement asymétrique et HTTPS",
        "duree": "2 h",
        "objectif": "Expliquer le couple clé publique/clé privée, l'intérêt de HTTPS, et consolider en codant Vigenère.",
        "surLeSite": [
          "Section 9 (cellule exécutable : Vigenère)",
          "Exercice 8 (moyen, asymétrique)",
          "Défi « Mission : un message à l'épreuve des espions »"
        ],
        "enClasse": [
          "0–20 min : réactivation — pourquoi le symétrique coince : sketch du cadenas (boîte ouverte à tous, clé gardée secrète)",
          "20–50 min : Section 9 — clé publique/privée, HTTPS ; observer le cadenas et le certificat d'un vrai site dans le navigateur",
          "50–70 min : Exercice 8 sur table : rédiger pourquoi l'asymétrique résout l'échange de clé (2 phrases type bac)",
          "70–110 min : défi en îlots — Vigenère : chiffrer/déchiffrer, puis débattre : pourquoi résiste-t-il mieux que César aux fréquences ?",
          "110–120 min : institutionnalisation + corrigés poussés ; annonce de la séance d'entraînement bac"
        ],
        "aPreparer": [
          "Postes avec navigateur (inspection d'un certificat HTTPS)",
          "Deux cadenas ou images pour le sketch clé publique/privée"
        ]
      },
      {
        "titre": "Séance 8 — Entraînement épreuves du bac",
        "duree": "2 h",
        "objectif": "S'entraîner en conditions réelles : un exercice écrit type bac sur ce thème, un exercice type épreuve pratique sur machine.",
        "surLeSite": [
          "Évaluations : Bac blanc n°2, exercice 1 « Processus, ordonnancement et routage » (7 pts)",
          "Évaluations : EP blanche n°1 ou n°2 (1 exercice au choix)",
          "Méthodes : « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »"
        ],
        "enClasse": [
          "0–10 min : lecture des deux fiches méthode — lire les assert d'abord, ne jamais laisser une question de cours vide",
          "10–55 min : sur table, sans document : exercice 1 du Bac blanc n°2 (états, tourniquet, deadlock, RIP/OSPF), code au stylo",
          "55–65 min : correction croisée entre îlots avec le barème projeté",
          "65–110 min : sur Thonny (vrai Python) : 1 exercice d'EP blanche avec asserts — coder, exécuter, valider tous les tests",
          "110–120 min : bilan individuel : chacun note son point faible (écrit ou machine) ; corrigés poussés"
        ],
        "aPreparer": [
          "Copies + sujet écrit imprimé (exercice 1 du Bac blanc n°2)",
          "Thonny installé sur les postes — l'EP se passe sur un vrai Python",
          "Un sujet de la banque officielle Éduscol en réserve pour les rapides"
        ]
      },
      {
        "titre": "Séance 9 — QCM bilan, diagnostic et remédiation",
        "duree": "2 h",
        "objectif": "Évaluer les acquis du thème, diagnostiquer les fragilités avec « Ma classe » et remédier par groupes de besoin.",
        "surLeSite": [
          "QCM (10 questions)",
          "Suivi « Ma classe » : matrice du thème + diagnostic par question",
          "Exercices 1 à 8 (reprise ciblée)",
          "Résumé et erreurs fréquentes du thème"
        ],
        "enClasse": [
          "0–25 min : QCM du thème (10 questions) en autonomie, chacun sur son compte",
          "25–40 min : diagnostic « Ma classe » projeté (anonymisé) : quelles questions ont résisté ?",
          "40–85 min : remédiation par groupes de besoin — groupe processus/interblocage (Exercices 5 et 7), groupe routage (Exercice 2), groupe chiffrement (Exercices 6 et 8) ; les plus solides tutorent",
          "85–110 min : reprise collective des 2 questions les plus ratées + relecture des « erreurs fréquentes » du site",
          "110–120 min : écriture libre bilan (« ce que je dois revoir avant le bac ») versée au carnet de révision"
        ],
        "aPreparer": [
          "Vérifier les comptes élèves pour le QCM et l'accès « Ma classe »",
          "Prévoir les 3 pôles de remédiation (énoncés imprimés)"
        ]
      }
    ]
  },
  "term-histoire": {
    "heures": "4 h (2 séances de 2 h)",
    "resume": "Thème transversal d'ouverture d'année : construire la frise des idées (calcul mécanique → Turing → von Neumann → langages → Internet/Web → IA), installer les rituels de l'année (exposés courts type Grand oral) et lancer dès la séance 2 les réflexes des deux épreuves du bac (écrit rédigé + pratique sur machine avec asserts).",
    "seances": [
      {
        "titre": "Séance 1 — De la Pascaline à Unix : les concepts avant les machines",
        "duree": "2 h",
        "objectif": "Situer les grandes étapes et figures (Jacquard, Lovelace, Turing, von Neumann, Hopper, Shannon) et comprendre que les concepts (programme, calculabilité, architecture) précèdent les technologies.",
        "surLeSite": [
          "Sections 1–4 du cours (Avant l'ordinateur ; Turing 1936 ; premières machines & Shannon ; langages 1950-1970)",
          "Cellules exécutables : mini machine de Turing (incrémenter un binaire) et bits de Shannon (log2)",
          "Exercices 1, 2 et 4 (association figures/apports, chronologie, rôle de la machine de Turing)"
        ],
        "enClasse": [
          "0–15 min : réactivation Première (binaire, algorithme, architecture machine) par quiz oral ; annonce du fil rouge de l'année : rituels + exposés courts type Grand oral.",
          "15–40 min : lecture active des Sections 1–2 en îlots ; chaque îlot place 3 jalons sur une frise collective au tableau (Pascaline, Jacquard, Babbage/Lovelace, Turing).",
          "40–65 min : manipulation sur Basthon des 2 cellules exécutables — faire varier le ruban de la machine de Turing, tester log2(N) pour d'autres N ; verbaliser « avec des règles simples, on calcule ».",
          "65–90 min : Sections 3–4 puis Exercices 1, 2 et 4 en binômes ; mise en commun rapide.",
          "90–110 min : institutionnalisation — frise commune propre + tableau « le concept précède la technologie » ; écriture libre : 3 phrases sur une figure au choix.",
          "110–120 min : corrigés des exercices poussés sur le site ; attribution des sujets d'exposés (Lovelace, Turing, Hopper, Shannon, Cerf/Kahn, Berners-Lee…)."
        ],
        "aPreparer": [
          "Vidéoprojecteur + frise chronologique vierge (tableau ou affiche) à compléter en classe",
          "Vérifier l'accès Basthon/Capytale sur les postes pour les cellules exécutables",
          "Liste des sujets d'exposés courts (une figure ou une invention par binôme) pour le fil rouge Grand oral"
        ]
      },
      {
        "titre": "Séance 2 — Internet ≠ Web, enjeux actuels + entraînement épreuves et diagnostic",
        "duree": "2 h",
        "objectif": "Distinguer Internet et le Web, relier l'histoire aux enjeux actuels (données, IA, société) ; installer les réflexes des deux épreuves du bac ; diagnostiquer et remédier via le QCM.",
        "surLeSite": [
          "Sections 5–7 du cours (micro-informatique ; réseaux, Internet et le Web ; mobile, données massives et IA)",
          "Exercices 3, 5 et 6 (texte à trou log2, architecture de von Neumann, Internet ≠ Web)",
          "Défi « Mission : la frise des idées »",
          "QCM (10 questions)",
          "Méthodes « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »",
          "Évaluations : EP blanche n°1 (exercice 1 — recherche dans un ABR, en découverte du format)"
        ],
        "enClasse": [
          "0–10 min : rituel — 2 exposés courts de 3 min (figures de la séance 1) + une question du public : entraînement Grand oral.",
          "10–35 min : Sections 5–7 en lecture guidée ; débat éclair « Internet ≠ Web » ; Exercices 3, 5 et 6 en binômes.",
          "35–70 min : <strong>entraînement épreuves</strong> — lecture des deux fiches méthode du site, puis 1 exercice écrit rédigé façon bac sur table (questions de cours justifiées : von Neumann, Internet/Web) et l'exercice 1 de l'EP blanche n°1 sur machine, avec validation par les asserts (Thonny, vrai Python).",
          "70–90 min : QCM (10 questions) en individuel ; le professeur suit les résultats en direct dans « Ma classe ».",
          "90–110 min : diagnostic par question + remédiation par îlots selon les erreurs (chronologie, figures, Internet/Web) ; les plus rapides rédigent le défi « frise des idées » en écriture libre.",
          "110–120 min : corrigés poussés ; bilan du fil rouge histoire et calendrier des exposés de l'année."
        ],
        "aPreparer": [
          "Postes avec Thonny ou Capytale opérationnels : l'épreuve pratique se passe sur un vrai Python, pas seulement dans le navigateur",
          "Imprimer le sujet de la question écrite type bac (copies) et l'exercice 1 de l'EP blanche n°1 ; montrer la banque officielle des sujets d'EP (Éduscol)",
          "Ouvrir le tableau de bord « Ma classe » pour le suivi du QCM et préparer les groupes de remédiation"
        ]
      }
    ]
  }
};

/* ---------------- Kits de préparation (prof) ----------------
   Matériel débranché imprimable (design « mission » engageant), fichiers réels
   (assets/fichiers/terminale/) pour Capytale/Thonny/DB Browser, et pointeurs
   évaluations. Rendu : makeThemeKit (app.js). */
const THEME_KITS = {
  "term-structures": {
    "intro": "Kit de préparation du thème « Structures de données » (12 séances de 2 h). Il fournit la colonne « À préparer toi-même » du déroulé : un arbre géant à annoter (séances 5–7, mêmes valeurs que l'exercice 1 du Bac blanc n°1), des cartes à découper pour l'activité gobelets pile/file (séances 1–2), et quatre fichiers Python prêts à déposer sur Capytale/Thonny (squelettes élève avec asserts + corrigés prof vérifiés).",
    "imprimables": [
      {
        "titre": "L'arbre mystère — perce les secrets de l'ABR (taille, hauteur, 4 parcours)",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #7c3aed;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🌳</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">L'arbre mystère</div><div style=\"font-size:14px;color:#475569\">ABR obtenu en insérant 12, 5, 20, 3, 8, 15, 25 — sauras-tu percer tous ses secrets ?</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✍️ 8 secrets à trouver</span></div><div style=\"border-left:6px solid #7c3aed;background:#ede9fe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> cet arbre cache 8 secrets — sa taille, sa hauteur, ses feuilles, les fils de 5 et ses quatre parcours. Complète les mesures et les quatre parcours, puis vérifie avec ton voisin : un point par secret percé !</div><p style=\"font-size:15px;margin:6px 0 10px\">Nom : .............................................</p><svg viewBox=\"0 0 700 330\" style=\"width:100%;height:auto;display:block\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"350\" y1=\"55\" x2=\"180\" y2=\"165\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"350\" y1=\"55\" x2=\"520\" y2=\"165\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"180\" y1=\"165\" x2=\"90\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"180\" y1=\"165\" x2=\"270\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"520\" y1=\"165\" x2=\"430\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"520\" y1=\"165\" x2=\"610\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><circle cx=\"350\" cy=\"55\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"180\" cy=\"165\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"520\" cy=\"165\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"90\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"270\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"430\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"610\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><text x=\"350\" y=\"64\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">12</text><text x=\"180\" y=\"174\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">5</text><text x=\"520\" y=\"174\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">20</text><text x=\"90\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">3</text><text x=\"270\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">8</text><text x=\"430\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">15</text><text x=\"610\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">25</text><text x=\"415\" y=\"40\" font-size=\"16\" font-style=\"italic\" fill=\"#475569\">racine</text></svg><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin-top:12px\"><table style=\"width:100%;border-collapse:collapse;font-size:18px\"><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;width:50%\"><strong>Taille</strong> (nombre de nœuds) = ............</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Hauteur</strong> = ............ &nbsp;<span style=\"font-size:14px;color:#64748b\">(convention du cours : arbre vide → 0)</span></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Feuilles</strong> : .............................</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Fils de 5</strong> : .............................</td></tr><tr><td colspan=\"2\" style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Parcours préfixe</strong> (racine, gauche, droite) : ......................................................................</td></tr><tr style=\"background:#f8fafc\"><td colspan=\"2\" style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Parcours infixe</strong> (gauche, racine, droite) : ...................................................................... <br><span style=\"font-size:15px\">Que remarques-tu ? ......................................................................</span></td></tr><tr><td colspan=\"2\" style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Parcours suffixe</strong> (gauche, droite, racine) : ......................................................................</td></tr><tr style=\"background:#f8fafc\"><td colspan=\"2\" style=\"padding:.3cm\"><strong>Parcours en largeur</strong> (avec une file) : ......................................................................</td></tr></table></div><p style=\"font-size:14px;margin-top:8px;color:#475569\">⚠️ Certains sujets de bac prennent « hauteur d'une racine seule = 0 » : lis toujours la convention de l'énoncé.</p><div style=\"border:2.5px dashed #7c3aed;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 8 &nbsp; ⭐ Défi bonus réussi : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> taille 7 ; hauteur 3 (convention cours) ; préfixe 12 5 3 8 20 15 25 ; infixe 3 5 8 12 15 20 25 (trié : c'est un ABR) ; suffixe 3 8 5 15 25 20 12 ; largeur 12 5 20 3 8 15 25.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Structures de données · A4</div></div>"
      },
      {
        "titre": "Le grand jeu des gobelets — cartes pile / file à découper (valeurs, opérations, rôles)",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #7c3aed;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🥤</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le grand jeu des gobelets</div><div style=\"font-size:14px;color:#475569\">Cartes pile / file — séances 1–2 · LIFO contre FIFO, à toi de jouer</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎭 Jeu de rôle</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #7c3aed;background:#ede9fe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpe les cartes — un jeu par îlot : 6 cartes-valeurs à empiler ou enfiler, 6 cartes-opérations à piocher et annoncer à voix haute, 3 cartes-rôles à se répartir. À chaque opération, le greffier prédit la prochaine sortie : gagnera-t-il son duel contre la structure ?</div><table style=\"width:100%;border-collapse:separate;border-spacing:8px;table-layout:fixed\"><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;width:6cm;height:4.6cm;text-align:center;font-size:30px;font-weight:800;color:#1e293b\">🔤 N<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:30px;font-weight:800;color:#1e293b\">🔤 S<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:30px;font-weight:800;color:#1e293b\">🔤 I<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:28px;font-weight:800;color:#1e293b\">🙋 Ava<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:28px;font-weight:800;color:#1e293b\">🙋 Bilal<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:28px;font-weight:800;color:#1e293b\">🙋 Chloé<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">📥 empiler(...)<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE — pose au sommet</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">📤 depiler()<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE — retire le sommet</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">👀 sommet()<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE — regarde sans retirer</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">🚶 enfiler(...)<div style=\"font-size:18px;font-weight:normal;color:#475569\">FILE — entre par la fin</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">🏃 defiler()<div style=\"font-size:18px;font-weight:normal;color:#475569\">FILE — sort par le début</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">❓ est_vide()<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE ou FILE — vrai ou faux ?</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:22px;font-weight:800;color:#1e293b\">🥞 Rôle : PILE (LIFO)<div style=\"font-size:18px;font-weight:normal;color:#475569\">« Le dernier arrivé sort en premier »</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:22px;font-weight:800;color:#1e293b\">🚶‍♀️ Rôle : FILE (FIFO)<div style=\"font-size:18px;font-weight:normal;color:#475569\">« Le premier arrivé sort en premier »</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:22px;font-weight:800;color:#1e293b\">📝 Rôle : GREFFIER<div style=\"font-size:18px;font-weight:normal;color:#475569\">« Je note chaque opération annoncée et je prédis la prochaine sortie »</div></td></tr></table><div style=\"border:2.5px dashed #7c3aed;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot (prédictions justes du greffier) : ______ / 6 &nbsp; ⭐ Défi bonus réussi : ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Structures de données · A4</div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "pile_file.py",
        "chemin": "assets/fichiers/terminale/term-structures/pile_file.py",
        "desc": "Squelette élève : classe Pile à compléter (est_vide, empiler, depiler, sommet, liste _elements cachée comme dans le cours) puis défi « correcteur de parenthèses » utilisant la Pile — consignes en commentaires, asserts fournis (mêmes exemples que la section 3 du cours). À déposer sur Capytale/Thonny pour les séances 1–2."
      },
      {
        "nom": "pile_file_corrige.py",
        "chemin": "assets/fichiers/terminale/term-structures/pile_file_corrige.py",
        "desc": "Corrigé prof de pile_file.py — exécuté et vérifié : tous les asserts passent."
      },
      {
        "nom": "abr.py",
        "chemin": "assets/fichiers/terminale/term-structures/abr.py",
        "desc": "Squelette élève : recherche(a, c) et inserer(a, c) à compléter sur un ABR en triplets (valeur, gauche, droite) comme dans la section 8 du cours ; infixe fournie pour vérifier que l'ordre reste trié ; asserts sur l'ABR du cours [7, 3, 9, 1, 5] et sur celui du Bac blanc n°1 (12, 5, 20, 3, 8, 15, 25). Pour la séance 7."
      },
      {
        "nom": "abr_corrige.py",
        "chemin": "assets/fichiers/terminale/term-structures/abr_corrige.py",
        "desc": "Corrigé prof d'abr.py — exécuté et vérifié : tous les asserts passent (insertion par reconstruction, recherche en O(hauteur))."
      }
    ],
    "evals": [
      "<strong>Séance 11 (entraînement bac)</strong> : Évaluations → EP blanche n°1 « ABR &amp; file » sur machine (1 h, vrai Python), puis exercice 1 du DS écrit type bac n°1 (« arbres · SQL · graphes ») sur table — l'arbre du sujet est celui de l'imprimable.",
      "<strong>Séance 12 (bilan)</strong> : QCM du thème (11 questions) puis diagnostic « Ma classe » ; l'EP blanche n°2 et le DS écrit n°2 (exercice « piles/tris ») serviront plus tard en révision transversale.",
      "<strong>Prolongements</strong> : banque officielle des sujets d'épreuve pratique (lien Éduscol dans la fiche méthode « Réussir l'épreuve pratique » du site) pour les élèves rapides des séances 11–12 — en déposer 2–3 sur Capytale avant la séance."
    ]
  },
  "term-algo": {
    "intro": "Kit de préparation du thème « Algorithmique » (11 séances de 2 h). Il couvre la colonne « À préparer toi-même » du déroulé : les cartes du tri fusion humain débranché (séance 2), le graphe pondéré à 6 sommets avec table de Dijkstra vierge (séances 5–7), et quatre fichiers Python style épreuve pratique (squelettes élève + corrigés prof, asserts vérifiés) reprenant exactement les exemples du cours — liste [38, 27, 43, 3, 9, 82, 10] de la Section 4 et code heapq de la Section 6.",
    "imprimables": [
      {
        "titre": "⚔️ Le tournoi du tri fusion — 8 cartes à départager (séance 2)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>Le tournoi du tri fusion — cartes et schéma</title></head><body style='font-family:Arial,Helvetica,sans-serif;margin:1cm;color:#1e293b'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #2563eb;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🃏</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>Le tournoi du tri fusion</div><div style='font-size:14px;color:#475569'>8 cartes à départager — diviser pour régner, littéralement (séance 2)</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👥 En îlot</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>✂️ À découper</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 20 min</span></div><div style='border-left:6px solid #2563eb;background:#dbeafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> ton îlot devient un ordinateur (un jeu par îlot). <b>1.</b> Découpe les 8 cartes et pose-les en ligne, dans cet ordre. <b>2.</b> <b>Diviser</b> : coupe le paquet en deux moitiés, puis chaque moitié en deux, jusqu'aux cartes seules. <b>3.</b> <b>Combiner</b> : fusionne les paquets deux à deux en ne comparant que les <b>cartes du dessus</b> (le plus petit passe devant). <b>4.</b> Remplis le schéma de fusion à chaque étape de la remontée.</div><table style='border-collapse:collapse;margin:0 auto'><tr><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>38</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>27</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>43</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>3</div></div></td></tr><tr><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>9</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>82</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>10</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>55</div></div></td></tr></table><h2 style='font-size:16px;margin:12px 0 6px;color:#1e40af'>Le tableau de marque de la remontée (à remplir pendant les fusions)</h2><div style='text-align:center;font-size:12px;color:#475569;margin:4px 0'>Cartes seules (après le découpage) :</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>38</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center;margin-right:0.5cm'>27</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>43</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center;margin-right:0.5cm'>3</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>9</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center;margin-right:0.5cm'>82</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>10</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>55</span></div><div style='text-align:center;font-size:12px;color:#475569;margin:8px 0 2px'>1<sup>re</sup> fusion — paquets de 2 :</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span></div><div style='text-align:center;font-size:12px;color:#475569;margin:8px 0 2px'>2<sup>e</sup> fusion — paquets de 4 :</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span></div><div style='text-align:center;font-size:12px;color:#475569;margin:8px 0 2px'>3<sup>e</sup> fusion — le paquet de 8 est la liste triée !</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span></div><div style='border:2.5px dashed #2563eb;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>⚡ Duel inter-îlots : le premier îlot qui pose la ligne finale triée gagne. &nbsp; 🏆 Score de l'îlot : ______ / 3 fusions justes &nbsp; ⭐ Duel remporté : ☐</div><div style='margin-top:8px;font-size:11px;color:#94a3b8'>✂️ plier ici — <strong>réponses prof :</strong> mêmes nombres que la Section 4 du cours et que tri_fusion.py (+ la carte 55 pour obtenir 8 cartes). Ligne finale attendue : 3, 9, 10, 27, 38, 43, 55, 82. Compter les comparaisons par niveau pour préparer le « n log n » de la séance 3.</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Algorithmique · A4</div></body></html>"
      },
      {
        "titre": "🧭 Mission GPS du lycée — Dijkstra à la main (séances 5 à 7)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>Mission GPS — Dijkstra à la main</title></head><body style='font-family:Arial,Helvetica,sans-serif;margin:1cm;color:#1e293b'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #2563eb;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🧭</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>Mission GPS : le plan du lycée</div><div style='font-size:14px;color:#475569'>L'algorithme de Dijkstra à la main — 6 lieux, 1 plus court chemin (séances 5 à 7)</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👥 En îlot</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 30 min</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>📋 Table à compléter</span></div><div style='border-left:6px solid #2563eb;background:#dbeafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> ton GPS est en panne — deviens-le. On part du sommet <b>A</b>. À chaque étape : <b>1.</b> choisis le sommet non traité dont la distance est la plus petite et écris-le dans la colonne « Sommet choisi » ; <b>2.</b> mets à jour les distances de ses voisins (ancienne valeur barrée, nouvelle à côté) ; <b>3.</b> recopie les autres distances. Écris ∞ pour « pas encore atteint ».</div><svg width='620' height='300' viewBox='0 0 620 300' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:4px auto'><line x1='80' y1='150' x2='250' y2='60' stroke='#2563eb' stroke-width='2'/><line x1='80' y1='150' x2='250' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='60' x2='250' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='60' x2='430' y2='60' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='240' x2='430' y2='60' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='240' x2='430' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='430' y1='60' x2='430' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='430' y1='60' x2='560' y2='150' stroke='#2563eb' stroke-width='2'/><line x1='430' y1='240' x2='560' y2='150' stroke='#2563eb' stroke-width='2'/><text x='150' y='96' font-size='17' font-weight='bold' fill='#b00020'>4</text><text x='150' y='212' font-size='17' font-weight='bold' fill='#b00020'>2</text><text x='260' y='155' font-size='17' font-weight='bold' fill='#b00020'>1</text><text x='335' y='50' font-size='17' font-weight='bold' fill='#b00020'>5</text><text x='352' y='165' font-size='17' font-weight='bold' fill='#b00020'>8</text><text x='330' y='262' font-size='17' font-weight='bold' fill='#b00020'>10</text><text x='440' y='155' font-size='17' font-weight='bold' fill='#b00020'>2</text><text x='503' y='92' font-size='17' font-weight='bold' fill='#b00020'>6</text><text x='503' y='215' font-size='17' font-weight='bold' fill='#b00020'>3</text><circle cx='80' cy='150' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='250' cy='60' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='250' cy='240' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='430' cy='60' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='430' cy='240' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='560' cy='150' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><text x='80' y='157' font-size='19' font-weight='bold' text-anchor='middle'>A</text><text x='250' y='67' font-size='19' font-weight='bold' text-anchor='middle'>B</text><text x='250' y='247' font-size='19' font-weight='bold' text-anchor='middle'>C</text><text x='430' y='67' font-size='19' font-weight='bold' text-anchor='middle'>D</text><text x='430' y='247' font-size='19' font-weight='bold' text-anchor='middle'>E</text><text x='560' y='157' font-size='19' font-weight='bold' text-anchor='middle'>F</text><text x='80' y='115' font-size='12' text-anchor='middle' fill='#555'>Accueil</text><text x='250' y='28' font-size='12' text-anchor='middle' fill='#555'>CDI</text><text x='250' y='278' font-size='12' text-anchor='middle' fill='#555'>Cantine</text><text x='430' y='28' font-size='12' text-anchor='middle' fill='#555'>Labo NSI</text><text x='430' y='278' font-size='12' text-anchor='middle' fill='#555'>Gymnase</text><text x='560' y='115' font-size='12' text-anchor='middle' fill='#555'>Internat</text></svg><div style='border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin-top:6px'><table style='border-collapse:collapse;width:100%;font-size:16px;text-align:center'><tr><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0;width:2.2cm'>Étape</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0;width:2.8cm'>Sommet choisi</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>A</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>B</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>C</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>D</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>E</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm'>F</th></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>Départ</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>—</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;font-weight:bold'>0</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0'>∞</td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>1</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>2</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>3</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>4</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>5</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr><td style='border-right:1px solid #e2e8f0;height:0.9cm'>6</td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td></td></tr></table></div><p style='font-size:15px;font-weight:700;margin-top:10px'>🏁 Plus courte distance de A (Accueil) à F (Internat) : ________ &nbsp;&nbsp;Chemin : A → ____ → ____ → ____ → F</p><div style='border:2.5px dashed #2563eb;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>🏆 Score de l'îlot : ______ / 6 étapes justes &nbsp; ⭐ Défi bonus réussi (chemin complet annoncé avant les autres îlots) : ☐</div><div style='margin-top:8px;font-size:11px;color:#94a3b8'>✂️ plier ici — <strong>réponses prof :</strong> mêmes poids que le graphe « lycee » de dijkstra.py — attendu : A 0, B 3, C 2, D 8, E 10, F 13 ; chemin A → C → B → D → E → F. Vérification en séance 7 en exécutant dijkstra_corrige.py.</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Algorithmique · A4</div></body></html>"
      }
    ],
    "fichiers": [
      {
        "nom": "tri_fusion.py",
        "chemin": "assets/fichiers/terminale/term-algo/tri_fusion.py",
        "desc": "Squelette élève style EP (séance 3) : fusionner puis tri_fusion récursif à écrire, consignes en commentaires, asserts fournis — mêmes listes que la Section 4 du cours."
      },
      {
        "nom": "tri_fusion_corrige.py",
        "chemin": "assets/fichiers/terminale/term-algo/tri_fusion_corrige.py",
        "desc": "Corrigé prof du tri fusion (code identique à la Section 4 du cours) — asserts vérifiés, tous passent."
      },
      {
        "nom": "dijkstra.py",
        "chemin": "assets/fichiers/terminale/term-algo/dijkstra.py",
        "desc": "Squelette élève (séances 5 à 7) : dijkstra(graphe, depart) sur dictionnaire d'adjacence pondéré avec heapq, consignes en commentaires ; asserts sur le réseau à 4 sommets du cours, le graphe du lycée à 6 sommets de la fiche imprimée, et un sommet isolé (distance infinie)."
      },
      {
        "nom": "dijkstra_corrige.py",
        "chemin": "assets/fichiers/terminale/term-algo/dijkstra_corrige.py",
        "desc": "Corrigé prof de Dijkstra (code identique à la Section 6 du cours) — asserts vérifiés, tous passent."
      }
    ],
    "evals": [
      "<strong>Séance 10</strong> : sur table, exercice 3 du « Bac blanc n°1 » (graphes : parcours et plus court chemin) ; sur machine, « EP blanche n°2 — fusion &amp; programmation dynamique » en conditions réelles (1 h, tous les asserts doivent passer).",
      "<strong>Après le thème</strong> : DS n°2 d'algorithmique en piochant dans le « Bac blanc n°2 » (exercice piles/tris) ; « EP blanche n°1 — ABR &amp; file » en révision transversale avant l'épreuve pratique de juin.",
      "<strong>Séance 11</strong> : QCM du thème (10 questions) + diagnostic « Ma classe » pour former les groupes de remédiation ; pour les groupes solides, sujets de la banque officielle Éduscol via la fiche méthode « Réussir l'épreuve pratique » (aussi en prolongement des séances 3 et 10)."
    ]
  },
  "term-langages": {
    "intro": "Kit de préparation du thème « Langages et programmation » (10 séances de 2 h). Il matérialise la colonne « À préparer toi-même » du déroulé : la fiche « pile d'appels » à dérouler à la main (séance 4, à imprimer 1 par élève), les cartes « bug classique » à découper (séance 7, 1 carte par îlot), le squelette CompteBancaire à distribuer sur Capytale (séances 2-3) et le fichier de 3 fonctions récursives avec asserts (séances 4-5). Les corrigés prof (*_corrige.py) passent tous leurs asserts — vérifié en exécution.",
    "imprimables": [
      {
        "titre": "🐍 Plongée dans la pile — la trace secrète de factorielle(4) (séance 4)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>Plongée dans la pile — factorielle(4)</title></head><body style='font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:19cm;margin:0 auto;padding:0.7cm'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🐍</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>Plongée dans la pile d'appels</div><div style='font-size:14px;color:#475569'>La trace secrète de factorielle(4) · Séance 4 — Nom : ................................</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👤 En solo</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 15 min</span></div><div style='border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> deviens l'interprète Python. Déroule factorielle(4) à la main, de la descente jusqu'au résultat final — aucun appel ne doit t'échapper.</div><pre style='background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:8px 12px;font-size:16px;margin:0 0 12px'>def factorielle(n):\n    if n == 0:           # cas de base\n        return 1\n    return n * factorielle(n - 1)   # appel récursif</pre><h2 style='font-size:19px;margin:10px 0 6px;color:#15803d'>1 · La descente : complète chaque appel</h2><div style='border:2px solid #cbd5e1;border-radius:12px;overflow:hidden'><table style='border-collapse:collapse;width:100%;font-size:18px'><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(4)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= 4 × factorielle(3)</td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(3)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:1cm;border-bottom:2px dotted #777'>&nbsp;</span>)</td></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(2)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:1cm;border-bottom:2px dotted #777'>&nbsp;</span>)</td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(1)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:1cm;border-bottom:2px dotted #777'>&nbsp;</span>)</td></tr><tr><td style='border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(0)</td><td style='padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;← c'est le <strong>cas de base</strong> : on répond sans s'appeler</td></tr></table></div><h2 style='font-size:19px;margin:14px 0 6px;color:#15803d'>2 · La pile au plus profond : complète les cadres empilés</h2><p style='font-size:15px;margin:0 0 6px'>Chaque appel <strong>attend</strong> le résultat de l'appel du dessus. Le dernier arrivé est en haut (LIFO, comme la pile du thème « Structures de données »).</p><div style='width:12cm;margin:0 auto'><div style='border:2px solid #16a34a;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px;background:#dcfce7'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — répond directement : renvoie <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span></div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — attend <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>)</div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — attend <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>)</div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — attend <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>)</div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;font-size:19px;background:#f8fafc'>factorielle(4) — attend 4 × factorielle(3) &nbsp;<em style='font-size:14px'>(exemple : le 1er appel, tout en bas)</em></div></div><h2 style='font-size:19px;margin:14px 0 6px;color:#15803d'>3 · La remontée : chaque cadre se dépile en renvoyant sa valeur</h2><p style='font-size:18px;line-height:2;margin:0'>factorielle(0) renvoie 1 &nbsp;→&nbsp; factorielle(1) renvoie 1 × 1 = <span style='display:inline-block;min-width:1.2cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;→&nbsp; factorielle(2) renvoie <span style='display:inline-block;min-width:1.2cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;→&nbsp; factorielle(3) renvoie <span style='display:inline-block;min-width:1.2cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;→&nbsp; <strong>factorielle(4) renvoie <span style='display:inline-block;min-width:1.5cm;border-bottom:2px dotted #777'>&nbsp;</span></strong></p><p style='font-size:14px;color:#475569;margin:12px 0 0'>💡 Vérifie ensuite ta trace avec le débogueur pas-à-pas de Thonny : tu verras cette pile pour de vrai.</p><div style='border:2.5px dashed #16a34a;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>🏆 Score de ta trace : ______ / 22 cases justes &nbsp; ⭐ Défi bonus — pile vérifiée dans le débogueur Thonny : ☐</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Langages et programmation · A4</div></body></html>"
      },
      {
        "titre": "🐛 La chasse aux bugs — 6 créatures à capturer, 1 carte par îlot (séance 7)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>La chasse aux bugs — cartes à découper</title></head><body style='font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:19cm;margin:0 auto;padding:0.7cm'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🐛</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>La chasse aux bugs</div><div style='font-size:14px;color:#475569'>6 créatures échappées de la Section 7 du cours… et des sujets du bac (séance 7)</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👥 En îlot</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>✂️ À découper</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 15 min</span></div><div style='border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> une carte par îlot. Exécute le code dans ta tête, traque le bug, capture-le en le corrigeant, puis explique ta prise à la classe. Tous ces bugs sont dans la Section 7 du cours… et dans les sujets du bac.</div><table style='border-collapse:collapse;width:100%'><tr><td style='width:50%;padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>🔇 Carte 1 — Rien ne s'affiche !</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>a = 0.1 + 0.2\nif a == 0.3:\n    print(\"égal\")</pre><div style='font-size:16px'>Pourquoi le print ne s'exécute-t-il jamais ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td><td style='width:50%;padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#fff;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>👻 Carte 2 — La liste hantée</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)</pre><div style='font-size:16px'>Qu'affiche ce code ? Pourquoi « a » a-t-il changé « tout seul » ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td></tr><tr><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#fff;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>📏 Carte 3 — L'erreur d'une unité</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>mots = [\"un\", \"deux\", \"trois\"]\nprint(mots[len(mots)])</pre><div style='font-size:16px'>Quelle erreur Python obtient-on, et pourquoi ?<br>Le dernier indice valable est : <span style='display:inline-block;min-width:3cm;border-bottom:2px dotted #777'>&nbsp;</span><br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>🏅 Carte 4 — La mention volée</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>note = 18\nif note >= 16:\n    mention = \"très bien\"\nif note >= 12:\n    mention = \"assez bien\"\nprint(mention)</pre><div style='font-size:16px'>Qu'affiche ce code, et quel mot-clé manque-t-il ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td></tr><tr><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>♾️ Carte 5 (bonus) — Sans fin</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>def somme(n):\n    return n + somme(n - 1)\n\nprint(somme(100))</pre><div style='font-size:16px'>Quelle erreur obtient-on (RecursionError) ? Quel ingrédient obligatoire manque-t-il ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#fff;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>🧟 Carte 6 (bonus) — La mémoire fantôme</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>def ajoute(x, t=[]):\n    t.append(x)\n    return t\n\nprint(ajoute(1))\nprint(ajoute(2))</pre><div style='font-size:16px'>Pourquoi le 2e appel affiche-t-il [1, 2] ? (cf. le piège memo={} du cours)<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td></tr></table><div style='border:2.5px dashed #16a34a;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>🏆 Score de l'îlot : ______ / 2 (bug trouvé + correction juste) &nbsp; ⭐ Défi bonus — la carte d'un autre îlot corrigée aussi : ☐</div><div style='margin-top:8px;font-size:11px;color:#94a3b8'>✂️ plier ici — <strong>réponses prof :</strong> 1 : comparer abs(a - 0.3) &lt; 1e-9 ; 2 : b = list(a) (b = a ne copie pas) ; 3 : IndexError, dernier indice len - 1 ; 4 : elif ; 5 : cas de base if n == 0: return 0 ; 6 : t=None puis if t is None: t = [].</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Langages et programmation · A4</div></body></html>"
      }
    ],
    "fichiers": [
      {
        "nom": "recursivite.py",
        "chemin": "assets/fichiers/terminale/term-langages/recursivite.py",
        "desc": "Squelette élève (séances 4-5) : 3 fonctions récursives à écrire — somme_liste (récursion sur liste), puissance (x^n sans **) et escalier mémoïsé (Fibonacci déguisé, l'assert escalier(50) impose la mémoïsation). Consignes en commentaires, asserts fournis, à déposer sur Capytale/Thonny."
      },
      {
        "nom": "recursivite_corrige.py",
        "chemin": "assets/fichiers/terminale/term-langages/recursivite_corrige.py",
        "desc": "Corrigé prof : cas de base commentés, mémoïsation avec le motif propre memo=None (cf. le piège memo={} de la Section 4). Tous les asserts passent (vérifié en exécution)."
      },
      {
        "nom": "poo_compte.py",
        "chemin": "assets/fichiers/terminale/term-langages/poo_compte.py",
        "desc": "Squelette élève (séances 2-3) : la classe CompteBancaire du cours à compléter — __init__, deposer, retirer (refus si solde insuffisant), __str__, et le défi virer qui réutilise les méthodes existantes. Asserts fournis, dont str(c)."
      },
      {
        "nom": "poo_compte_corrige.py",
        "chemin": "assets/fichiers/terminale/term-langages/poo_compte_corrige.py",
        "desc": "Corrigé prof fidèle à la Section 2 du cours (mêmes noms, même __str__), virer par réutilisation de retirer/deposer (modularité). Tous les asserts passent (vérifié en exécution)."
      }
    ],
    "evals": [
      "<strong>Séance 9 (entraînement bac)</strong> : sur table, l'exercice « POO &amp; dynamique » du <em>Bac blanc n°2</em> (DS écrit type bac) ; sur machine, l'<em>EP blanche n°2 — fusion &amp; programmation dynamique</em> en conditions réelles (asserts, Thonny). Garde l'<em>EP blanche n°1</em> et le <em>Bac blanc n°1</em> pour les révisions transversales de fin de trimestre.",
      "<strong>Séance 10 (bilan)</strong> : QCM du thème (10 questions) en individuel sur le site, puis projection du diagnostic « Ma classe » pour composer les groupes de remédiation question par question.",
      "<strong>Pour les rapides et l'entraînement continu</strong> : la banque officielle des sujets d'épreuve pratique (lien dans la fiche méthode « Réussir l'épreuve pratique » du site) — télécharge 2 sujets d'avance comme prévu au déroulé de la séance 9."
    ]
  },
  "term-bdd": {
    "intro": "Kit de préparation du thème « Bases de données » (18 h, 9 séances) : la base « lycée » prête pour DB Browser for SQLite (lycee.sql, mêmes tables et mêmes élèves que le cours et le TP du site), 10 requêtes à écrire avec leur corrigé vérifié, un imprimable « schéma relationnel à compléter » (clés primaires, clés étrangères, flèches) et un jeu de cartes « requête → résultat » à apparier pour les îlots. Tout est aligné sur la colonne « À préparer toi-même » du déroulé heure par heure.",
    "imprimables": [
      {
        "titre": "L'énigme de lycee.db — le plan secret de la base à reconstituer (séances 1-2)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:14px;line-height:1.35\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #d97706;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🗄️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">L'énigme de lycee.db</div><div style=\"font-size:14px;color:#475569\">Reconstitue le plan secret de la base du lycée · 4 tables · séances 1-2</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✏️ Solo puis îlot</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">📚 Séances 1-2</span></div><p style=\"margin:4px 0\">Nom : .............................. &nbsp;Classe : ........ &nbsp;&nbsp;<em>Base lycee.db — 4 tables</em></p><div style=\"border-left:6px solid #d97706;background:#fef3c7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> quatre tables, trois liens cachés. Retrouve qui référence qui dans la base lycee.db et écris son plan complet — un vrai travail d'architecte des données !</div><ol style=\"margin:6px 0 10px 18px;padding:0\"><li><strong>Souligne</strong> la clé primaire de chaque table.</li><li>Écris <strong>#</strong> devant chaque clé étrangère.</li><li><strong>Relie par une flèche</strong> chaque clé étrangère à la clé primaire qu'elle référence (3 flèches à tracer).</li><li>Écris les 4 schémas en notation du cours, en bas de page.</li></ol><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"width:6.5cm;vertical-align:top;padding:0\"><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ eleves</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_eleve</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">nom</td></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">classe</td></tr></table></div><div style=\"height:1.4cm\"></div><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ matieres</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_matiere</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">nom</td></tr></table></div></td><td style=\"width:5cm;text-align:center;vertical-align:middle;font-size:12px;color:#64748b\">🏹 (zone des flèches)</td><td style=\"width:6.5cm;vertical-align:top;padding:0\"><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ notes</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_note</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_eleve</td></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_matiere</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">note</td></tr></table></div><div style=\"height:1.4cm\"></div><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ professeurs</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_prof</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">nom</td></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_matiere</td></tr></table></div></td></tr></table><h2 style=\"font-size:16px;margin:12px 0 4px 0;color:#92400e\">📝 Les 4 schémas (notation du cours : souligne la clé primaire, # devant les clés étrangères)</h2><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">eleves( .......................................................................... )</p><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">matieres( ........................................................................ )</p><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">professeurs( ..................................................................... )</p><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">notes( ............................................................................ )</p><h2 style=\"font-size:16px;margin:10px 0 4px 0;color:#92400e\">🕵️ Question bonus</h2><p style=\"margin:2px 0\">Pourquoi ne stocke-t-on <strong>pas</strong> le nom de l'élève directement dans la table <strong>notes</strong> ?</p><p style=\"margin:10px 0;border-bottom:1px dotted #64748b\">&nbsp;</p><p style=\"margin:10px 0;border-bottom:1px dotted #64748b\">&nbsp;</p><div style=\"border:2.5px dashed #d97706;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score : ______ / 11 &nbsp;(4 clés primaires + 3 flèches + 4 schémas) &nbsp; ⭐ Question bonus réussie : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> clés primaires : id_eleve, id_matiere, id_prof, id_note. Clés étrangères : notes.id_eleve → eleves.id_eleve ; notes.id_matiere → matieres.id_matiere ; professeurs.id_matiere → matieres.id_matiere. Bonus : le nom serait recopié à chaque note (redondance → anomalies de mise à jour) ; la clé étrangère suffit, la jointure reconstitue l'information.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Bases de données · A4</div></div>"
      },
      {
        "titre": "Le grand match SQL — 8 requêtes cherchent leur résultat (séances 3-5, îlots)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:13px;line-height:1.3\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #d97706;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🃏</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le grand match SQL</div><div style=\"font-size:14px;color:#475569\">8 requêtes, 8 résultats, une seule combinaison parfaite · séances 3-5</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #d97706;background:#fef3c7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpez les cartes, mélangez-les, puis associez chaque carte <strong>REQUÊTE</strong> (1 à 8) à sa carte <strong>RÉSULTAT</strong> (A à H) — sans machine, juste avec les tables ci-dessous. À vos cerveaux !</div><p style=\"margin:4px 0\">Extrait simplifié de la base lycee.db (la colonne <em>matiere</em> remplace <em>id_matiere</em> pour lire sans jointure) :</p><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"vertical-align:top;width:7cm;padding-right:8px\"><div style=\"display:inline-block;border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"border-collapse:collapse;font-size:12px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:.3cm;border-bottom:1px solid #e2e8f0\" colspan=\"3\">eleves</th></tr><tr><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">id_eleve</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">nom</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">classe</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Ada</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TNSI</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">2</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Tim</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TG2</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Lou</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TNSI</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">4</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Eve</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TG1</td></tr><tr><td style=\"padding:2px 8px\">5</td><td style=\"padding:2px 8px\">Sam</td><td style=\"padding:2px 8px\">TNSI</td></tr></table></div></td><td style=\"vertical-align:top\"><div style=\"display:inline-block;border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"border-collapse:collapse;font-size:12px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:.3cm;border-bottom:1px solid #e2e8f0\" colspan=\"4\">notes</th></tr><tr><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">id_note</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">id_eleve</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">matiere</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">note</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">17</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">2</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">Maths</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">15</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">2</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">Maths</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">12</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">4</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">9</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">5</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">Maths</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">14</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">6</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">4</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">18</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">7</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">5</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">11</td></tr><tr style=\"background:#f8fafc\"><td style=\"padding:1px 8px\">8</td><td style=\"padding:1px 8px\">5</td><td style=\"padding:1px 8px\">Maths</td><td style=\"padding:1px 8px\">8</td></tr></table></div></td></tr></table><h2 style=\"font-size:14px;margin:8px 0 4px 0;color:#92400e\">⚔️ Cartes REQUÊTE (à découper)</h2><table style=\"width:100%;border-collapse:collapse;table-layout:fixed\"><tr><td style=\"width:50%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">1 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT nom FROM eleves<br>WHERE classe = 'TNSI';</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">2 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT DISTINCT classe<br>FROM eleves;</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">3 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT nom FROM eleves<br>ORDER BY nom;</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">4 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT COUNT(*) FROM notes<br>WHERE matiere = 'NSI';</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">5 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT AVG(note) FROM notes<br>WHERE matiere = 'NSI';</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">6 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT MAX(note)<br>FROM notes;</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">7 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT eleves.nom FROM eleves<br>JOIN notes ON notes.id_eleve = eleves.id_eleve<br>WHERE matiere = 'Maths' AND note &gt; 12;</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">8 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">UPDATE notes<br>SET note = 12;</div></div></td></tr></table><h2 style=\"font-size:14px;margin:8px 0 4px 0;color:#92400e\">🎁 Cartes RÉSULTAT (à découper)</h2><table style=\"width:100%;border-collapse:collapse;table-layout:fixed\"><tr><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">A 🎯</strong><div style=\"font-size:24px;text-align:center;font-weight:800\">18</div></div></td><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">B 🎯</strong><div style=\"font-size:20px;text-align:center;font-weight:800\">Ada<br>Lou</div></div></td><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">C 🎯</strong><div style=\"font-size:20px;text-align:center;font-weight:800\">TNSI<br>TG2<br>TG1</div></div></td><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">D 🎯</strong><div style=\"font-size:24px;text-align:center;font-weight:800\">13.75</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">E 🎯</strong><div style=\"font-size:18px;text-align:center;font-weight:800\">Ada, Eve, Lou,<br>Sam, Tim</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">F 🎯</strong><div style=\"font-size:18px;text-align:center;font-weight:800\">Toutes les notes<br>valent 12 !</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">G 🎯</strong><div style=\"font-size:20px;text-align:center;font-weight:800\">Ada<br>Lou<br>Sam</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">H 🎯</strong><div style=\"font-size:24px;text-align:center;font-weight:800\">4</div></div></td></tr></table><div style=\"border:2.5px dashed #d97706;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 8 paires &nbsp; ⚡ Défi éclair — les 8 paires trouvées avant l'îlot voisin : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> 1-G · 2-C · 3-E · 4-H · 5-D · 6-A · 7-B · 8-F. La carte 8 lance le débat « où est passé le WHERE ? » avant la séance INSERT/UPDATE/DELETE.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Bases de données · A4</div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "lycee.sql",
        "chemin": "assets/fichiers/terminale/term-bdd/lycee.sql",
        "desc": "La base « lycée » complète, prête pour DB Browser for SQLite : 4 tables (matieres, professeurs, eleves, notes) avec clés primaires, clés étrangères et contrainte CHECK sur les notes ; 15 à 25 lignes par table, reprenant les élèves du TP du site (Ada, Tim, Lou, Eve, Sam…). Ré-exécutable à volonté (DROP puis CREATE) : à faire tourner une fois sur chaque poste avant la séance 1 pour produire lycee.db."
      },
      {
        "nom": "requetes.sql",
        "chemin": "assets/fichiers/terminale/term-bdd/requetes.sql",
        "desc": "Squelette élève : 10 exercices en commentaires (SELECT, WHERE, ORDER BY, DISTINCT, COUNT, AVG, jointure, GROUP BY, double jointure, INSERT/UPDATE/DELETE), chacun avec son résultat attendu qui joue le rôle des asserts. À distribuer aux séances 3 à 5 avec la fiche réponse papier (écrire d'abord, exécuter ensuite)."
      },
      {
        "nom": "requetes_corrige.sql",
        "chemin": "assets/fichiers/terminale/term-bdd/requetes_corrige.sql",
        "desc": "Corrigé prof des 10 requêtes, vérifié par exécution sur lycee.sql (résultats conformes aux valeurs annoncées, y compris le refus du SGBD à la suppression de Sam pour cause d'intégrité référentielle — exercice 10c)."
      }
    ],
    "evals": [
      "<p><strong>Pendant le thème</strong> : le TP noté SQL s'appuie sur requetes.sql (séances 3-5) ; les cartes à apparier servent d'évaluation formative en îlots.</p>",
      "<p><strong>Séance 8 (entraînement bac)</strong> : l'exercice SQL du <em>Bac blanc n°1 — écrit type bac (arbres · SQL · graphes)</em> en conditions réelles au stylo, puis un sujet SQL/tables de la <em>banque officielle des sujets d'épreuve pratique</em> sur machine, préparé avec la fiche méthode « Réussir l'épreuve pratique » du site ; les <em>EP blanches n°1 et n°2</em> (transversales) restent disponibles pour un entraînement machine supplémentaire.</p>",
      "<p><strong>Séance 9 (bilan)</strong> : le <em>QCM du thème</em> (10 questions) avec remontée dans « Ma classe » pour piloter la remédiation par groupes de besoin.</p>"
    ]
  },
  "term-archi-reseaux": {
    "intro": "Kit de préparation du thème « Architectures, systèmes & réseaux » (18 h, période 5). Il couvre la colonne « À préparer toi-même » du déroulé : le graphe du réseau à 5 routeurs du cours avec tables RIP/OSPF vierges (1 par îlot, séance 5), les cartes découpables « états d'un processus » pour le jeu de rôle de la séance 2, et un squelette Python routage.py (table de routage en dictionnaire, plus court chemin en nombre de sauts) avec son corrigé vérifié.",
    "imprimables": [
      {
        "titre": "La course des paquets — RIP contre OSPF sur le réseau du cours (séance 5, 1 par îlot)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:14px;line-height:1.35\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0891b2;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🛰️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La course des paquets — RIP contre OSPF</div><div style=\"font-size:14px;color:#475569\">Le réseau à 5 routeurs du cours · tables de routage à remplir · séance 5</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🗺️ 1 fiche par îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #0891b2;background:#cffafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> deux protocoles, deux visions de la « meilleure » route. Remplis la table de routage de R1 en RIP puis en OSPF — et compare leurs choix !</div><p style=\"font-size:13px;margin:0 0 8px\">Coût OSPF proportionnel à 1/débit : liaison 100 Mbit/s → coût 1 ; liaison 10 Mbit/s → coût 10. RIP compte les <strong>sauts</strong>, OSPF additionne les <strong>coûts</strong>.</p><svg viewBox=\"0 0 620 300\" width=\"620\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;margin:0 auto 10px;border:2px solid #cbd5e1;border-radius:12px\"><line x1=\"85\" y1=\"140\" x2=\"300\" y2=\"55\" stroke=\"#c0392b\" stroke-width=\"3\"/><line x1=\"300\" y1=\"55\" x2=\"520\" y2=\"140\" stroke=\"#c0392b\" stroke-width=\"3\"/><line x1=\"85\" y1=\"150\" x2=\"215\" y2=\"235\" stroke=\"#0891b2\" stroke-width=\"5\"/><line x1=\"215\" y1=\"235\" x2=\"390\" y2=\"235\" stroke=\"#0891b2\" stroke-width=\"5\"/><line x1=\"390\" y1=\"235\" x2=\"520\" y2=\"150\" stroke=\"#0891b2\" stroke-width=\"5\"/><text x=\"165\" y=\"80\" font-size=\"13\" fill=\"#c0392b\">10 Mbit/s · coût 10</text><text x=\"400\" y=\"80\" font-size=\"13\" fill=\"#c0392b\">10 Mbit/s · coût 10</text><text x=\"70\" y=\"210\" font-size=\"13\" fill=\"#0891b2\">100 Mbit/s · coût 1</text><text x=\"240\" y=\"260\" font-size=\"13\" fill=\"#0891b2\">100 Mbit/s · coût 1</text><text x=\"455\" y=\"215\" font-size=\"13\" fill=\"#0891b2\">100 Mbit/s · coût 1</text><g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\"><circle cx=\"70\" cy=\"145\" r=\"26\" fill=\"#fdf2e9\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"70\" y=\"151\">R1</text><circle cx=\"300\" cy=\"50\" r=\"26\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"300\" y=\"56\">R2</text><circle cx=\"215\" cy=\"235\" r=\"26\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"215\" y=\"241\">R3</text><circle cx=\"390\" cy=\"235\" r=\"26\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"390\" y=\"241\">R4</text><circle cx=\"535\" cy=\"145\" r=\"26\" fill=\"#eafaf1\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"535\" y=\"151\">R5</text></g></svg><h2 style=\"font-size:16px;margin:4px 0;color:#155e75\">🧭 1. Table de routage de R1</h2><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"border-collapse:collapse;width:100%;font-size:15px;text-align:center\"><tr><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">Destination</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">RIP : prochain saut</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">RIP : nb de sauts</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">OSPF : prochain saut</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">OSPF : coût total</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:12px;font-weight:bold\">R2</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:12px;font-weight:bold\">R3</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:12px;font-weight:bold\">R4</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"padding:12px;font-weight:bold\">R5</td><td style=\"border-left:1px solid #e2e8f0\"></td><td style=\"border-left:1px solid #e2e8f0\"></td><td style=\"border-left:1px solid #e2e8f0\"></td><td style=\"border-left:1px solid #e2e8f0\"></td></tr></table></div><h2 style=\"font-size:16px;margin:12px 0 4px;color:#155e75\">🚨 2. Alerte panne — question type bac (2 phrases rédigées)</h2><p style=\"font-size:14px;margin:0 0 4px\">La liaison R3–R4 tombe en panne. Quelle devient la route choisie par OSPF de R1 vers R5 ? Quel est son nouveau coût ?</p><div style=\"border:2px solid #cbd5e1;border-radius:12px;height:2.6cm\"></div><div style=\"border:2.5px dashed #0891b2;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 16 cases &nbsp; ⚡ Duel inter-îlots — première table entièrement juste : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> R1 vers R5 : RIP inscrit « prochain saut R2 » (2 sauts) ; OSPF inscrit « prochain saut R3 » (coût 1+1+1 = 3 contre 20 via R2). Panne R3–R4 : OSPF bascule sur R1→R2→R5, coût 20.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Architectures, systèmes &amp; réseaux · A4</div></div>"
      },
      {
        "titre": "La vie secrète d'un processus — jeu de rôle et tri de scénarios (séance 2)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:13px;line-height:1.3\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0891b2;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🎭</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La vie secrète d'un processus</div><div style=\"font-size:14px;color:#475569\">4 états, 8 scénarios vécus — à toi de reconstituer le cycle de vie · séance 2</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎭 Jeu de rôle</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #0891b2;background:#cffafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpe les 4 cartes ÉTAT et les 8 cartes SCÉNARIO. En îlot : pose chaque scénario sur l'état (ou la transition entre deux états) qui lui correspond, puis reconstitue le cycle de vie complet au tableau.</div><h2 style=\"font-size:14px;margin:8px 0 4px 0;color:#155e75\">🏷️ Cartes ÉTAT</h2><table style=\"border-collapse:collapse;width:100%;text-align:center;table-layout:fixed\"><tr><td style=\"width:50%;padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">✨ NOUVEAU</div></td><td style=\"width:50%;padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">🚦 PRÊT</div></td></tr><tr><td style=\"padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">⚡ ÉLU</div></td><td style=\"padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">🚧 BLOQUÉ</div></td></tr></table><h2 style=\"font-size:14px;margin:10px 0 4px 0;color:#155e75\">🎬 Cartes SCÉNARIO</h2><table style=\"border-collapse:collapse;width:100%;margin-top:2px;font-size:18px;table-layout:fixed\"><tr><td style=\"width:50%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">① 🖱️ Tu double-cliques sur l'icône de Thonny : le système charge le programme en mémoire.</div></td><td style=\"width:50%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">② 🪑 Le processus a toutes ses ressources et attend son tour dans la file de l'ordonnanceur.</div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">③ ⚙️ L'ordonnanceur lui donne le processeur : ses instructions s'exécutent.</div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">④ ⏰ Son quantum de temps est écoulé : le tourniquet le remet en fin de file.</div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">⑤ 💾 Il demande une lecture sur le disque et ne peut rien faire tant qu'elle n'est pas finie.</div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">⑥ ✅ La lecture disque se termine : il peut de nouveau demander le processeur.</div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">⑦ ⌨️ Le programme attend une touche du clavier ; l'utilisateur est parti en récré…</div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">⑧ 🔒 Deux processus détiennent chacun un fichier et attendent celui de l'autre : personne n'avance.</div></td></tr></table><div style=\"border:2.5px dashed #0891b2;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 8 scénarios bien placés &nbsp; ⭐ Défi bonus — cycle de vie complet reconstitué au tableau : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> ① nouveau ; ② prêt ; ③ élu (transition prêt → élu) ; ④ élu → prêt ; ⑤ élu → bloqué ; ⑥ bloqué → prêt ; ⑦ bloqué ; ⑧ interblocage : deux processus bloqués pour toujours (ouvre la séance 3).</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Architectures, systèmes &amp; réseaux · A4</div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "routage.py",
        "chemin": "assets/fichiers/terminale/term-archi-reseaux/routage.py",
        "desc": "Squelette élève (séance 5, prolongement machine de l'exercice 2) : le réseau R1–R5 du cours en dictionnaire, trois fonctions à compléter — nb_sauts (RIP, parcours en largeur avec deque), cout_ospf (somme des coûts d'un chemin) et table_rip (table de routage {destination: prochain saut}). Consignes en commentaires, asserts fournis : RIP choisit R2 (2 sauts) là où OSPF choisit R3 (coût 3)."
      },
      {
        "nom": "routage_corrige.py",
        "chemin": "assets/fichiers/terminale/term-archi-reseaux/routage_corrige.py",
        "desc": "Corrigé professeur complet ; exécuté et vérifié : tous les asserts passent (nb_sauts par BFS, cout_ospf, table_rip avec min sur les voisins)."
      }
    ],
    "evals": [
      "<strong>Séance 8</strong> — imprimer l'exercice 1 « Processus, ordonnancement et routage » du <strong>Bac blanc n°2</strong> (rubrique Évaluations, sur table, 45 min) puis un exercice au choix de l'<strong>EP blanche n°1 ou n°2</strong> sur Thonny (vrai Python, asserts à faire passer).",
      "<strong>Séance 9</strong> — QCM du thème (10 questions) sur les comptes élèves, diagnostic par question dans « Ma classe », remédiation par pôles (Exercices 2, 5–8).",
      "Pour les rapides et les révisions : un sujet de la <strong>banque officielle Éduscol</strong> des épreuves pratiques, préparé avec la fiche méthode « Réussir l'épreuve pratique » du site."
    ]
  },
  "term-histoire": {
    "intro": "Kit de préparation du thème « Histoire de l'informatique » (4 h, fil rouge de l'année). Il couvre la colonne « À préparer toi-même » du déroulé : la fiche « exposé express » avec sa grille d'évaluation par les pairs (rituel Grand oral installé dès la séance 1) et les cartes de sujets d'exposés à distribuer aux binômes (mêmes figures que le cours : Lovelace, Turing, von Neumann, Hopper, Shannon, Cerf/Kahn, Berners-Lee…). La frise chronologique vierge se trace directement au tableau ; le sujet machine de la séance 2 est déjà fourni par l'EP blanche n°1 du site. Aucun fichier Python : le thème se travaille sur le site et sur papier.",
    "imprimables": [
      {
        "titre": "5 minutes pour briller — exposé express + grille d'évaluation par les pairs",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b;font-size:14px\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #db2777;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🎤</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">5 minutes pour briller</div><div style=\"font-size:14px;color:#475569\">Exposé express · Histoire de l'informatique · entraînement au Grand oral</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En binôme</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">⏱ 3 à 5 min chrono</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎤 À l'oral, sans lire</span></div><div style=\"border-left:6px solid #db2777;background:#fce7f3;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> tu as 5 minutes chrono pour faire découvrir ta figure de l'informatique à la classe — une problématique, trois repères datés, un lien avec le programme. Le concept avant l'anecdote : fais-nous retenir l'essentiel !</div><p style=\"margin:4px 0 10px\">Binôme : ______________________ &nbsp; Date de passage : __________</p><div style=\"background:#fce7f3;color:#9d174d;font-size:17px;font-weight:800;padding:6px 12px;border-radius:10px;margin:10px 0 6px\">1. Fiche de préparation (à rendre avant le passage)</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;width:32%;font-weight:bold;background:#f8fafc\">Sujet (figure ou invention)</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;height:34px\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;font-weight:bold;background:#f8fafc\">Problématique (une seule question, à laquelle l'exposé répond)</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;height:48px\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;font-weight:bold;background:#f8fafc\">3 repères historiques (date + fait précis)</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">1. ________________________________________________<br><br>2. ________________________________________________<br><br>3. ________________________________________________</td></tr><tr><td style=\"padding:.3cm;font-weight:bold;background:#f8fafc\">1 lien avec le programme de Terminale (quel thème, quelle notion ?)</td><td style=\"padding:.3cm;height:48px\"></td></tr></table></div><p style=\"margin:6px 0 12px;font-style:italic;color:#475569\">Consignes : 3 à 5 minutes, sans lire ses notes (un plan de 5 mots maximum est autorisé), puis une question du public. Le concept avant l'anecdote : que doit-on retenir de cette personne ou de cette invention ?</p><div style=\"background:#fce7f3;color:#9d174d;font-size:17px;font-weight:800;padding:6px 12px;border-radius:10px;margin:10px 0 6px\">2. Grille d'évaluation par les pairs (évaluateur : ______________________)</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse\"><tr><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;text-align:left\">Critère</th><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;width:12%\">0</th><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;width:12%\">1</th><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;width:12%\">2</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Contenu exact et daté (les 3 repères sont justes)</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Problématique claire, annoncée au début, réponse à la fin</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Lien explicite avec une notion du programme de NSI</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Qualité orale : voix posée, regard vers le public, sans lire</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Temps respecté (3 à 5 min) et réponse à la question du public</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#fce7f3\"><td style=\"padding:.3cm;font-weight:bold;color:#9d174d\">Total</td><td colspan=\"3\" style=\"padding:.3cm;font-weight:bold;color:#9d174d;border-left:1px solid #e2e8f0\">&nbsp;&nbsp;/ 10</td></tr></table></div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin-top:8px\"><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"padding:.3cm;width:50%;vertical-align:top;height:56px;border-right:1px solid #e2e8f0\"><strong>Un point fort :</strong></td><td style=\"padding:.3cm;vertical-align:top\"><strong>Un conseil pour le Grand oral :</strong></td></tr></table></div><div style=\"border:2.5px dashed #db2777;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score du binôme : ______ / 10 &nbsp; ⭐ Défi bonus — pas un seul regard sur les notes : ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Histoire de l'informatique · A4</div></div>"
      },
      {
        "titre": "La loterie des pionniers — 12 cartes de sujets d'exposés à tirer au sort",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #db2777;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🕰️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La loterie des pionniers</div><div style=\"font-size:14px;color:#475569\">12 figures et inventions qui ont fait l'informatique — un sujet d'exposé par binôme</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En binôme</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎲 Tirage au sort</span></div><div style=\"border-left:6px solid #db2777;background:#fce7f3;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpe les cartes pour le tirage au sort en fin de séance 1. Ton binôme tire une carte : c'est ta figure, ta légende, ton « exposé express » de 5 min (fiche fournie). Les mots-clés de la carte sont un point de départ, pas un plan !</div><table style=\"width:100%;border-collapse:separate;border-spacing:8px;table-layout:fixed\"><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;width:33%;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">✒️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Ada Lovelace</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1843 · le premier programme · machine analytique de Babbage</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;width:33%;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🔐</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Alan Turing</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1936 · calculabilité · Bletchley Park · test de Turing (1950)</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;width:33%;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🧠</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">John von Neumann</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1945 · le programme stocké en mémoire · architecture</div></td></tr><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🐛</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Grace Hopper</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">compilateur · COBOL · le premier « bug » (1947)</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">💡</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Claude Shannon</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1948 · le bit · théorie de l'information · log2(N)</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🧵</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Le métier de Jacquard</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1801 · cartes perforées · la première machine programmée</div></td></tr><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">⚙️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Pascal et Leibniz</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1642 · la Pascaline · calcul mécanique · le binaire</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🌐</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Cerf et Kahn</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">années 1970 · TCP/IP · ARPANET · la naissance d'Internet</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🕸️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Tim Berners-Lee</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1989-1991 · CERN · le Web : HTML, URL, HTTP</div></td></tr><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🐧</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Thompson et Ritchie</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">années 1970 · Unix · le langage C · Linux, macOS</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🖱️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Engelbart et le Xerox PARC</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1968 · la souris · fenêtres et icônes · interface graphique</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">📱</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">De l'ENIAC au smartphone</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1945-2007 · miniaturisation · l'ordinateur dans la poche · IA</div></td></tr></table><div style=\"border:2.5px dashed #db2777;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Sujet tiré par le binôme : ____________________ &nbsp; ⭐ Défi bonus — une date de la carte citée de mémoire, sans la relire : ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Histoire de l'informatique · A4</div></div>"
      }
    ],
    "fichiers": [],
    "evals": [
      "<p><strong>Séance 2 :</strong> fais passer sur machine (Thonny/Capytale) l'exercice 1 de l'<strong>EP blanche n°1</strong> (recherche dans un ABR, en découverte du format) et le <strong>QCM du thème</strong> (10 questions) avec suivi en direct dans « Ma classe ».</p>",
      "<p><strong>Plus tard dans l'année :</strong> l'<strong>EP blanche n°2</strong> et les <strong>DS écrits n°1 et n°2</strong> (transversaux, type bac) se placent après les thèmes structures de données et algorithmique.</p>",
      "<p><strong>Dès maintenant :</strong> projette la fiche méthode « Réussir l'épreuve pratique » du site et montre la banque officielle des sujets d'EP (Éduscol) — l'entraînement sur les vrais sujets commence en début d'année.</p>"
    ]
  }
};

/* ---------------- Encart « coder pour de vrai » ---------------- */
const CODER_REEL = {
  titre: "💻 Coder pour de vrai (au-delà du site)",
  html: `
    <p>L'éditeur Python de ce site (Pyodide) tourne <em>dans le navigateur</em> : parfait pour expérimenter vite.
    Mais en Terminale, l'<strong>épreuve pratique</strong> se déroule sur un <strong>vrai ordinateur</strong>, avec un vrai
    interpréteur Python et de vrais fichiers. Il est donc indispensable de coder aussi dans un environnement réel :</p>
    <ul>
      <li><strong>Capytale</strong> — service de l'Éducation nationale (compte ENT) pour distribuer/ramasser des notebooks et scripts.</li>
      <li><strong>Thonny</strong> — IDE Python simple et gratuit, avec un débogueur pas-à-pas idéal pour comprendre la récursivité.</li>
      <li><strong>IDLE</strong> (livré avec Python) ou un éditeur comme VS Code pour les plus à l'aise.</li>
      <li>Pour le SQL : <strong>DB Browser for SQLite</strong> ou le module <code>sqlite3</code> de Python.</li>
    </ul>
    <p class="note">Bon réflexe : <em>découvrir/réviser</em> une notion sur le site, puis <em>produire</em> le code sur
    Capytale/Thonny, dans les conditions de l'épreuve pratique (vrais fichiers, exécution complète).</p>`,
};

/* ---------------- Fiches méthode (transversales) ---------------- */
const METHODES = [
  {
    titre: "Écrire une fonction récursive sans se tromper",
    html: `
      <p>Une fonction <strong>récursive</strong> s'appelle elle-même sur un problème plus petit. Pour qu'elle se termine,
      il faut <strong>toujours</strong> deux ingrédients :</p>
      <ul>
        <li>un ou plusieurs <strong>cas de base</strong> : un problème si petit qu'on répond directement (ex. liste vide, arbre <code>None</code>) ;</li>
        <li>un <strong>appel récursif</strong> qui se rapproche du cas de base (sinon, récursion infinie !).</li>
      </ul>
      <p>Méthode en 3 questions : <strong>1.</strong> Quel est le cas le plus simple ? (cas de base)
      <strong>2.</strong> Comment réduire le problème d'un cran ? <strong>3.</strong> Comment combiner le résultat de l'appel
      récursif avec l'élément courant ?</p>
      <p class="warnbox">⚠️ Oublier le cas de base = boucle infinie / dépassement de pile (« RecursionError »). Toujours l'écrire en premier.</p>`,
  },
  {
    titre: "Estimer le coût (complexité) d'un algorithme",
    html: `
      <p>Le <strong>coût</strong> d'un algorithme, c'est l'<strong>ordre de grandeur</strong> du nombre d'opérations selon
      la taille <code>n</code> des données. On le note avec un « grand O » :</p>
      <ul>
        <li><strong>O(1)</strong> — temps constant : accès à <code>liste[i]</code>, empiler/dépiler une pile.</li>
        <li><strong>O(log n)</strong> — on divise le problème par 2 à chaque étape : recherche dichotomique.</li>
        <li><strong>O(n)</strong> — on parcourt les données une fois : somme d'une liste, parcours d'un graphe.</li>
        <li><strong>O(n²)</strong> — deux boucles imbriquées : tri par sélection, comparaison de toutes les paires.</li>
      </ul>
      <p class="note">💡 Réflexe : compter les boucles et leur imbrication, et repérer si l'on « coupe le problème en deux »
      (souvent un <code>log</code>). Un O(n²) sur 10 000 données = 100 millions d'opérations : on cherche mieux.</p>`,
  },
  {
    titre: "🎯 Réussir l'épreuve pratique",
    html: `
      <p>L'<strong>épreuve pratique</strong> de spécialité se déroule <strong>sur ordinateur</strong>, avec un vrai
      interpréteur Python : <strong>2 exercices à traiter en 1 heure</strong>, notés sur 20. Le sujet est tiré d'une
      banque nationale <strong>publique</strong> : on peut (on doit !) s'entraîner sur les vrais sujets toute l'année.</p>
      <ul>
        <li><strong>Exercice 1</strong> — écrire <em>de zéro</em> une fonction à partir d'une spécification et de tests fournis.</li>
        <li><strong>Exercice 2</strong> — <em>compléter</em> un programme donné (trous <code>...</code>, assertions, docstring…).</li>
      </ul>
      <h3>Le déroulé conseillé (1 h)</h3>
      <ol>
        <li><strong>≈ 5 min</strong> — lire les <em>deux</em> exercices en entier avant de taper quoi que ce soit ; commencer par celui qui t'inspire le plus (pas forcément le 1 !).</li>
        <li><strong>≈ 20 min</strong> — premier exercice : coder, exécuter, vérifier les <code>assert</code>.</li>
        <li><strong>≈ 25 min</strong> — second exercice : compléter <em>trou par trou</em>, en relançant le programme après chaque trou rempli.</li>
        <li><strong>≈ 10 min</strong> — tout relancer une dernière fois, vérifier les cas limites (liste vide, valeur absente…).</li>
      </ol>
      <h3>Les bons réflexes</h3>
      <ul>
        <li><strong>Lis les <code>assert</code> d'abord</strong> : ce sont eux, la spécification exacte. Ils te donnent le nom de la fonction, l'ordre des paramètres et le type du résultat (<code>True</code> ? un indice ? une liste ?).</li>
        <li><strong>Teste au fur et à mesure</strong> : n'écris jamais 15 lignes d'un coup. Une ligne ou deux → on exécute → on regarde. Un <code>print</code> temporaire pour voir une variable, c'est permis (pense à l'enlever).</li>
        <li><strong>Respecte scrupuleusement le nom demandé</strong> : <code>recherche</code> ≠ <code>Recherche</code> ≠ <code>rechercher</code>. Sinon, aucun test ne passe.</li>
        <li>Bloqué ? Une version <em>simple</em> qui passe les tests vaut tous les points : il n'y a pas de points de style ni de bonus d'élégance.</li>
        <li>Pendant l'année : code aussi <em>hors du site</em> (Thonny, Capytale) pour être à l'aise dans les conditions réelles de l'épreuve.</li>
      </ul>
      <p class="note">📚 <strong>Entraîne-toi sur les sujets officiels</strong> : la
      <a href="https://eduscol.education.fr/2661/banque-des-epreuves-pratiques-de-specialite-nsi" target="_blank" rel="noopener">banque
      des sujets de l'épreuve pratique de NSI (Éduscol)</a> est publiée chaque année. Les deux « épreuves pratiques blanches »
      de la rubrique <strong>Évaluations</strong> de ce site sont construites sur ce format.</p>`,
  },
  {
    titre: "✍️ Réussir l'épreuve écrite",
    html: `
      <p>L'<strong>épreuve écrite</strong> de spécialité dure <strong>3 h 30</strong> et comporte
      <strong>3 exercices</strong> indépendants, notés sur 20 au total. Chaque exercice <strong>croise plusieurs thèmes</strong>
      du programme (par exemple : arbres + récursivité, SQL, graphes + parcours, réseaux + processus…).</p>
      <h3>Gérer son temps (3 exercices en 3 h 30)</h3>
      <ul>
        <li>Budget indicatif : <strong>≈ 1 h par exercice</strong>, plus 10 min de lecture au début et 20 min de relecture à la fin.</li>
        <li>Commence par lire <strong>tout le sujet</strong>, puis attaque l'exercice où tu es le plus à l'aise : les points valent pareil partout.</li>
        <li>Dans un exercice, les questions sont <strong>graduées</strong> : les premières (lire un code, dérouler un algorithme à la main, question de cours) sont accessibles — ne les laisse <em>jamais</em> vides.</li>
        <li>Bloqué plus de 5 minutes sur une question ? Saute-la et <strong>reviens plus tard</strong>. Les questions suivantes sont souvent indépendantes, et tu as le droit d'<em>utiliser</em> une fonction d'une question précédente même sans l'avoir écrite.</li>
      </ul>
      <h3>Rédiger le code au propre</h3>
      <ul>
        <li>Écris d'abord ton code <strong>au brouillon</strong>, déroule-le à la main sur un petit exemple, puis recopie-le <strong>au propre</strong> sur ta copie.</li>
        <li>En Python, l'<strong>indentation fait partie de la syntaxe</strong> : au stylo, décale nettement chaque bloc (≈ 1 cm par niveau) et aligne verticalement les instructions d'un même bloc.</li>
        <li>Respecte les <strong>noms</strong> de fonctions et de variables imposés par l'énoncé, et n'oublie pas le <code>return</code>.</li>
        <li>Pour les questions de cours ou de justification : une ou deux <strong>phrases rédigées</strong> suffisent, mais il faut une justification (« car on divise le problème par 2 à chaque étape », « car la clé étrangère référence… »).</li>
        <li>En SQL : écris les mots-clés en majuscules (<code>SELECT … FROM … WHERE …</code>) et termine par <code>;</code> — c'est plus lisible pour le correcteur (et pour toi).</li>
      </ul>
      <p class="note">🎯 Entraînement : les deux sujets « Bac blanc écrit » de la rubrique <strong>Évaluations</strong> reproduisent
      ce format (3 exercices croisés). Fais-les en temps limité, sans document, code au stylo — comme le jour J.</p>`,
  },
];

/* ---------------- Évaluations — préparation aux épreuves du bac ----------------
   enonce = sujet élève (html) ; corrige = corrigé réservé au prof (html).
   type "pratique" = format officiel de l'épreuve pratique (2 exercices, 1 h) ;
   type "DS" avec themeId null = écrit type bac (3 exercices croisés, 3 h 30). */
const EVALUATIONS = [
  {
    id: "term-ep-blanche-1",
    titre: "Épreuve pratique blanche n°1 — ABR & file",
    type: "pratique", themeId: null,
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Conditions de l'épreuve : sur ordinateur, avec un vrai Python (Thonny / Capytale). Deux exercices, une heure.
      Chaque fonction doit passer <strong>tous</strong> ses tests <code>assert</code>. Aucun document.</em></p>
      <h4>Exercice 1 — Recherche dans un arbre binaire de recherche (10 pts)</h4>
      <p>Un <strong>arbre binaire de recherche</strong> (ABR) est représenté par des tuples imbriqués
      <code>(gauche, valeur, droite)</code>, l'arbre vide étant <code>None</code>. Dans un ABR, toutes les valeurs du
      sous-arbre gauche sont <strong>inférieures</strong> à la valeur de la racine, et toutes celles du sous-arbre droit
      lui sont <strong>supérieures</strong>.</p>
      <p>Écrire une fonction <code>recherche(abr, x)</code> qui renvoie <code>True</code> si <code>x</code> est présent
      dans l'ABR et <code>False</code> sinon, <strong>en exploitant l'ordre de l'ABR</strong> : à chaque étape, on ne
      descend que dans <em>un seul</em> des deux sous-arbres.</p>
      <pre><code>abr = ((None, 2, None), 5, ((None, 6, None), 8, (None, 9, None)))

assert recherche(abr, 5) == True
assert recherche(abr, 2) == True
assert recherche(abr, 9) == True
assert recherche(abr, 7) == False
assert recherche(None, 1) == False</code></pre>
      <h4>Exercice 2 — Une file construite avec deux piles (10 pts)</h4>
      <p>On implémente une <strong>file</strong> (FIFO) à l'aide de <strong>deux piles</strong> (des listes Python
      utilisées uniquement avec <code>append</code> et <code>pop</code>) : la pile <code>entree</code> reçoit les
      arrivées ; la pile <code>sortie</code> sert les départs. Quand <code>sortie</code> est vide, on y
      <strong>transvase</strong> toute la pile <code>entree</code>, ce qui inverse l'ordre des éléments.</p>
      <p>Compléter le code aux endroits marqués <code>...</code> pour que tous les tests passent :</p>
      <pre><code>class File:
    def __init__(self):
        self.entree = []
        self.sortie = []

    def est_vide(self):
        return self.entree == ... and self.sortie == ...

    def enfiler(self, x):
        self.entree.append(...)

    def defiler(self):
        if self.sortie == []:
            while self.entree != []:
                ...   # transvaser : self.sortie reçoit le sommet dépilé de self.entree
        return ...    # renvoyer l'élément défilé

f = File()
f.enfiler(1); f.enfiler(2); f.enfiler(3)
assert f.defiler() == 1
f.enfiler(4)
assert f.defiler() == 2
assert f.defiler() == 3
assert f.defiler() == 4
assert f.est_vide() == True</code></pre>`,
    corrige: `
      <h4>Exercice 1</h4>
      <pre><code>def recherche(abr, x):
    if abr is None:               # arbre vide : x n'y est pas
        return False
    gauche, valeur, droite = abr
    if x == valeur:
        return True
    elif x < valeur:              # propriété de l'ABR : on ne visite
        return recherche(gauche, x)   # qu'une seule branche
    else:
        return recherche(droite, x)</code></pre>
      <p><strong>Barème indicatif :</strong> cas de base <code>None</code> (3 pts) ; test d'égalité (2 pts) ;
      descente du bon côté selon l'ordre (4 pts) ; tous les asserts passent (1 pt).
      Une version qui visite <em>les deux</em> sous-arbres trouve la réponse mais n'exploite pas l'ABR : plafonner à 6 pts.</p>
      <h4>Exercice 2</h4>
      <pre><code>class File:
    def __init__(self):
        self.entree = []
        self.sortie = []

    def est_vide(self):
        return self.entree == [] and self.sortie == []

    def enfiler(self, x):
        self.entree.append(x)

    def defiler(self):
        if self.sortie == []:
            while self.entree != []:
                self.sortie.append(self.entree.pop())
        return self.sortie.pop()</code></pre>
      <p><strong>Pourquoi ça marche :</strong> dépiler <code>entree</code> pour empiler <code>sortie</code> inverse
      l'ordre : le premier entré se retrouve <em>au sommet</em> de <code>sortie</code>, donc il sort le premier — c'est
      bien une file (FIFO). On ne transvase que lorsque <code>sortie</code> est vide : les éléments déjà transvasés
      gardent leur ordre de service.</p>
      <p><strong>Barème indicatif :</strong> <code>est_vide</code> (2 pts) ; <code>enfiler</code> (2 pts) ;
      transvasement correct (4 pts) ; <code>return self.sortie.pop()</code> (2 pts).</p>`,
  },

  {
    id: "term-ep-blanche-2",
    titre: "Épreuve pratique blanche n°2 — fusion & programmation dynamique",
    type: "pratique", themeId: null,
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Conditions de l'épreuve : sur ordinateur, deux exercices, une heure. Chaque fonction doit passer
      <strong>tous</strong> ses tests <code>assert</code>. Aucun document.</em></p>
      <h4>Exercice 1 — Fusion de deux listes triées (10 pts)</h4>
      <p>Écrire une fonction <code>fusion(a, b)</code> qui prend deux listes de nombres <strong>déjà triées</strong>
      dans l'ordre croissant et renvoie une <strong>nouvelle</strong> liste triée contenant tous leurs éléments.
      <strong>Interdiction</strong> d'utiliser <code>sort</code> ou <code>sorted</code> : on avance avec deux indices,
      en comparant à chaque étape les deux éléments courants (c'est l'étape clé du <em>tri fusion</em>).</p>
      <pre><code>assert fusion([1, 4, 9], [2, 3, 10]) == [1, 2, 3, 4, 9, 10]
assert fusion([1, 2], [3, 4, 5]) == [1, 2, 3, 4, 5]
assert fusion([], [7, 8]) == [7, 8]
assert fusion([5], []) == [5]
assert fusion([2, 2], [2]) == [2, 2, 2]</code></pre>
      <h4>Exercice 2 — Rendu de monnaie par programmation dynamique (10 pts)</h4>
      <p>On veut le <strong>nombre minimal de pièces</strong> pour payer <code>montant</code> avec le système de pièces
      <code>pieces</code> (quantités illimitées). L'algorithme <strong>glouton</strong> n'est pas toujours optimal :
      avec les pièces <code>[1, 3, 4]</code> et un montant de 6, il rend 4+1+1 (3 pièces) alors que 3+3 (2 pièces) est
      possible. On utilise donc la <strong>programmation dynamique</strong> : on remplit un tableau <code>nb</code> où
      <code>nb[m]</code> est le nombre minimal de pièces pour le montant <code>m</code>, en réutilisant les résultats
      des montants plus petits.</p>
      <p>Compléter le code aux endroits marqués <code>...</code> :</p>
      <pre><code>def nb_pieces(montant, pieces):
    INFINI = float("inf")
    nb = [0] + [INFINI] * montant     # nb[0] = 0 : montant nul, zéro pièce
    for m in range(1, montant + 1):
        for p in pieces:
            if p <= m and nb[m - p] + 1 < nb[...]:
                nb[m] = nb[...] + 1   # on paie p, puis le reste (m - p) au mieux
    return nb[...]

assert nb_pieces(6, [1, 3, 4]) == 2       # 3 + 3
assert nb_pieces(7, [1, 3, 4]) == 2       # 3 + 4
assert nb_pieces(13, [1, 2, 5]) == 4      # 5 + 5 + 2 + 1
assert nb_pieces(0, [1, 2, 5]) == 0</code></pre>`,
    corrige: `
      <h4>Exercice 1</h4>
      <pre><code>def fusion(a, b):
    resultat = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i])
            i = i + 1
        else:
            resultat.append(b[j])
            j = j + 1
    # l'une des deux listes est épuisée : on recopie la fin de l'autre
    while i < len(a):
        resultat.append(a[i]); i = i + 1
    while j < len(b):
        resultat.append(b[j]); j = j + 1
    return resultat</code></pre>
      <p><strong>Barème indicatif :</strong> boucle de comparaison à deux indices (5 pts) ; recopie des restes (3 pts) ;
      cas limites — liste vide, doublons — (2 pts). Coût linéaire O(len(a)+len(b)) : chaque élément n'est examiné qu'une fois.</p>
      <h4>Exercice 2</h4>
      <pre><code>def nb_pieces(montant, pieces):
    INFINI = float("inf")
    nb = [0] + [INFINI] * montant
    for m in range(1, montant + 1):
        for p in pieces:
            if p <= m and nb[m - p] + 1 < nb[m]:
                nb[m] = nb[m - p] + 1
    return nb[montant]</code></pre>
      <p><strong>L'idée dynamique :</strong> pour payer <code>m</code>, on essaie chaque pièce <code>p</code> : si on
      l'utilise, il reste <code>m − p</code> à payer, et on connaît <em>déjà</em> la meilleure façon de le faire
      (<code>nb[m-p]</code>, calculé avant). On garde le minimum. Chaque sous-problème n'est résolu qu'une seule fois,
      puis <strong>réutilisé</strong> — c'est ce qui distingue la programmation dynamique de la récursivité naïve.</p>
      <p><strong>Barème indicatif :</strong> 2 pts par trou correct (<code>nb[m]</code>, <code>nb[m - p]</code>,
      <code>nb[montant]</code>) + 4 pts si tous les tests passent et que l'élève sait expliquer la ligne complétée.</p>`,
  },

  {
    id: "term-bac-blanc-1",
    titre: "Bac blanc n°1 — écrit type bac (arbres · SQL · graphes)",
    type: "DS", themeId: null,
    duree: "3 h 30", total: 20,
    enonce: `
      <p><em>Épreuve écrite type bac : 3 exercices indépendants, à traiter dans l'ordre de votre choix.
      Calculatrice et documents interdits. Le code s'écrit au stylo, indentation soignée.</em></p>

      <h4>Exercice 1 — Arbres binaires de recherche et récursivité (7 pts)</h4>
      <p>On insère successivement, dans un ABR initialement vide, les valeurs : <code>12, 5, 20, 3, 8, 15, 25</code>.</p>
      <ol type="a">
        <li>Dessiner l'ABR obtenu. (1,5 pts)</li>
        <li>Donner sa <strong>hauteur</strong> et sa <strong>taille</strong> (conventions : hauteur d'un arbre réduit à
        sa racine = 0 ; taille = nombre de nœuds). (1 pt)</li>
        <li>Donner la liste des valeurs visitées par un parcours <strong>infixe</strong> (gauche, racine, droite).
        Que remarque-t-on ? (1,5 pts)</li>
        <li>Un arbre est représenté par <code>None</code> (vide) ou <code>(gauche, valeur, droite)</code>. Écrire la
        fonction récursive <code>taille(arbre)</code> qui renvoie son nombre de nœuds. (2 pts)</li>
        <li>Quel est le coût d'une recherche dans un ABR <strong>équilibré</strong> de n nœuds ? Et dans un ABR
        <strong>filiforme</strong> (obtenu en insérant des valeurs déjà triées) ? Justifier. (1 pt)</li>
      </ol>

      <h4>Exercice 2 — Base de données d'un cinéma (7 pts)</h4>
      <p>Un cinéma utilise la base relationnelle suivante (clés primaires <u>soulignées</u>, clé étrangère précédée de #) :</p>
      <pre><code>FILM  (<u>id_film</u>, titre, duree, annee)
SEANCE(<u>id_seance</u>, #id_film, jour, heure, salle, places_restantes)</code></pre>
      <ol type="a">
        <li>Que garantit la contrainte de <strong>clé primaire</strong> sur <code>id_film</code> ? Que garantit la
        contrainte de <strong>référence</strong> (clé étrangère) sur <code>SEANCE.id_film</code> ? (1,5 pts)</li>
        <li>Écrire la requête donnant le titre et l'année des films sortis à partir de 2020. (1 pt)</li>
        <li>Écrire la requête donnant, <strong>sans doublon</strong>, les titres des films projetés le samedi
        (jointure). (1,5 pts)</li>
        <li>Écrire la requête comptant le nombre de séances du samedi. (1 pt)</li>
        <li>La séance n°17 vient de vendre 2 places : écrire la requête qui diminue de 2 son attribut
        <code>places_restantes</code>. (1 pt)</li>
        <li>On tente de supprimer de <code>FILM</code> un film qui possède encore des séances : que se passe-t-il, et
        pourquoi ? (1 pt)</li>
      </ol>

      <h4>Exercice 3 — Graphes : parcours et plus court chemin (6 pts)</h4>
      <p>On considère le graphe <strong>pondéré</strong> non orienté suivant (les poids sont des durées en minutes) :
      sommets A, B, C, D, E ; arêtes : A–B (2), A–C (5), B–C (1), B–D (4), C–D (2), C–E (7), D–E (3).</p>
      <ol type="a">
        <li>Donner la représentation de ce graphe par <strong>liste d'adjacence</strong> (dictionnaire Python,
        sans les poids). (1,5 pts)</li>
        <li>On effectue un <strong>parcours en largeur</strong> (BFS) depuis A, les voisins étant explorés dans l'ordre
        alphabétique. Donner l'ordre de visite des sommets. Quelle structure de données ce parcours utilise-t-il, et
        pourquoi ? (1,5 pts)</li>
        <li>Dérouler l'algorithme de <strong>Dijkstra</strong> depuis A (tableau des distances étape par étape),
        puis donner le plus court chemin de A à E et sa durée. (2,5 pts)</li>
        <li>Pourquoi un parcours en largeur ne suffit-il pas pour trouver ce plus court chemin ? (0,5 pt)</li>
      </ol>`,
    corrige: `
      <h4>Exercice 1</h4>
      <p><strong>a)</strong> Racine 12 ; à gauche 5 (avec 3 à gauche, 8 à droite) ; à droite 20 (avec 15 à gauche, 25 à droite).
      L'arbre est parfaitement équilibré.</p>
      <p><strong>b)</strong> Hauteur = 2 ; taille = 7.</p>
      <p><strong>c)</strong> Infixe : 3, 5, 8, 12, 15, 20, 25 — les valeurs sortent <strong>triées</strong> : c'est la
      propriété caractéristique de l'ABR (le parcours infixe d'un ABR est croissant).</p>
      <p><strong>d)</strong></p>
      <pre><code>def taille(arbre):
    if arbre is None:
        return 0
    gauche, valeur, droite = arbre
    return 1 + taille(gauche) + taille(droite)</code></pre>
      <p><strong>e)</strong> Équilibré : O(log n) — chaque comparaison élimine la moitié de l'arbre (hauteur ≈ log₂ n).
      Filiforme : O(n) — l'arbre dégénère en liste chaînée, on peut visiter tous les nœuds.</p>

      <h4>Exercice 2</h4>
      <p><strong>a)</strong> Clé primaire : chaque <code>id_film</code> est unique et non nul — il identifie une seule
      ligne. Contrainte de référence : toute valeur de <code>SEANCE.id_film</code> doit exister dans
      <code>FILM.id_film</code> — pas de séance « orpheline » d'un film inexistant.</p>
      <p><strong>b)</strong> <code>SELECT titre, annee FROM FILM WHERE annee &gt;= 2020;</code></p>
      <p><strong>c)</strong></p>
      <pre><code>SELECT DISTINCT FILM.titre
FROM FILM
JOIN SEANCE ON SEANCE.id_film = FILM.id_film
WHERE SEANCE.jour = 'samedi';</code></pre>
      <p><strong>d)</strong> <code>SELECT COUNT(*) FROM SEANCE WHERE jour = 'samedi';</code></p>
      <p><strong>e)</strong> <code>UPDATE SEANCE SET places_restantes = places_restantes - 2 WHERE id_seance = 17;</code></p>
      <p><strong>f)</strong> Le SGBD <strong>refuse</strong> la suppression : elle violerait la contrainte de référence
      (des lignes de <code>SEANCE</code> pointeraient vers un film disparu). Il faut d'abord supprimer ou modifier les
      séances concernées.</p>

      <h4>Exercice 3</h4>
      <p><strong>a)</strong> <code>{"A": ["B", "C"], "B": ["A", "C", "D"], "C": ["A", "B", "D", "E"],
      "D": ["B", "C", "E"], "E": ["C", "D"]}</code></p>
      <p><strong>b)</strong> Ordre BFS depuis A : A, B, C, D, E. Le parcours en largeur utilise une <strong>file</strong>
      (FIFO) : les sommets découverts sont servis dans l'ordre de leur découverte, ce qui explore le graphe
      « couche par couche ».</p>
      <p><strong>c)</strong> Déroulé de Dijkstra depuis A :</p>
      <table>
        <tr><th>Sommet choisi</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
        <tr><td>départ</td><td><strong>0</strong></td><td>∞</td><td>∞</td><td>∞</td><td>∞</td></tr>
        <tr><td>A (0)</td><td>—</td><td><strong>2</strong></td><td>5</td><td>∞</td><td>∞</td></tr>
        <tr><td>B (2)</td><td>—</td><td>—</td><td><strong>3</strong></td><td>6</td><td>∞</td></tr>
        <tr><td>C (3)</td><td>—</td><td>—</td><td>—</td><td><strong>5</strong></td><td>10</td></tr>
        <tr><td>D (5)</td><td>—</td><td>—</td><td>—</td><td>—</td><td><strong>8</strong></td></tr>
      </table>
      <p>Plus court chemin A → E : <strong>A – B – C – D – E</strong>, durée <strong>8 min</strong>
      (2 + 1 + 2 + 3).</p>
      <p><strong>d)</strong> Le BFS minimise le <em>nombre d'arêtes</em>, pas la somme des <em>poids</em> : ici
      A–C–E ne fait que 2 arêtes mais dure 12 min, plus que le chemin en 4 arêtes trouvé par Dijkstra.</p>`,
  },

  {
    id: "term-bac-blanc-2",
    titre: "Bac blanc n°2 — écrit type bac (processus/réseaux · POO & dynamique · piles/tris)",
    type: "DS", themeId: null,
    duree: "3 h 30", total: 20,
    enonce: `
      <p><em>Épreuve écrite type bac : 3 exercices indépendants. Calculatrice et documents interdits.
      Le code s'écrit au stylo, indentation soignée.</em></p>

      <h4>Exercice 1 — Processus, ordonnancement et routage (7 pts)</h4>
      <ol type="a">
        <li>Citer les trois principaux états d'un processus et décrire, pour chacun, une transition qui y mène. (1,5 pts)</li>
        <li>Un ordonnanceur « tourniquet » (round-robin) donne un quantum de 2 ms. Trois processus arrivent à t = 0,
        dans l'ordre P1 (5 ms de calcul), P2 (3 ms), P3 (2 ms). Établir la chronologie d'exécution et donner l'instant
        de fin de chaque processus. (2 pts)</li>
        <li>Deux processus P et Q ont chacun besoin des deux mêmes ressources R1 et R2. P verrouille R1 puis demande R2 ;
        Q verrouille R2 puis demande R1. Comment s'appelle cette situation ? Proposer une règle simple qui l'empêche. (1,5 pts)</li>
        <li>Dans un réseau, le protocole de routage <strong>RIP</strong> choisit les routes selon le nombre de sauts, et
        <strong>OSPF</strong> selon le coût des liaisons (lié au débit). Un routeur A peut joindre H soit par 2 sauts en
        liaisons lentes (coût total 30), soit par 4 sauts en fibre (coût total 4). Quelle route choisit RIP ? OSPF ?
        Justifier. (2 pts)</li>
      </ol>

      <h4>Exercice 2 — POO, récursivité et mémoïsation (7 pts)</h4>
      <p><strong>Partie A.</strong> Une médiathèque gère ses adhérents avec la classe suivante :</p>
      <pre><code>class Adherent:
    def __init__(self, nom):
        self.nom = nom
        self.emprunts = []

    def emprunter(self, titre):
        if len(self.emprunts) < 3:
            self.emprunts.append(titre)
            return True
        return False</code></pre>
      <ol type="a">
        <li>Donner le vocabulaire : comment s'appellent <code>__init__</code>, <code>nom</code> et
        <code>emprunter</code> ? Que désigne <code>self</code> ? (1,5 pts)</li>
        <li>Que vaut <code>a.emprunter("Dune")</code> si <code>a</code> a déjà 3 emprunts ? (0,5 pt)</li>
        <li>Écrire la méthode <code>rendre(self, titre)</code> qui retire <code>titre</code> de la liste des emprunts
        s'il s'y trouve et renvoie <code>True</code>, et renvoie <code>False</code> sinon. (1,5 pts)</li>
      </ol>
      <p><strong>Partie B.</strong> On rappelle la suite de Fibonacci : F(0)=0, F(1)=1, F(n)=F(n−1)+F(n−2).</p>
      <ol type="a" start="4">
        <li>Écrire la fonction récursive naïve <code>fib(n)</code>. (1 pt)</li>
        <li>Dessiner l'arbre des appels de <code>fib(5)</code>. Combien d'appels au total ? Quel appel est calculé
        plusieurs fois ? (1,5 pts)</li>
        <li>Expliquer le principe de la <strong>mémoïsation</strong> et pourquoi elle rend le calcul de
        <code>fib(50)</code> possible alors que la version naïve ne termine pas en temps raisonnable. (1 pt)</li>
      </ol>

      <h4>Exercice 3 — Piles et tri fusion (6 pts)</h4>
      <p><strong>Partie A.</strong> On donne la fonction :</p>
      <pre><code>def mystere(expr):
    p = []
    for c in expr:
        if c == "(":
            p.append(c)
        elif c == ")":
            if p == []:
                return False
            p.pop()
    return p == []</code></pre>
      <ol type="a">
        <li>Quelle structure de données la variable <code>p</code> implémente-t-elle ? Avec quelles opérations ? (1 pt)</li>
        <li>Dérouler <code>mystere("(a(b)c)")</code> puis <code>mystere("(a))(")</code> en donnant l'évolution de
        <code>p</code>. Que renvoie chaque appel ? (1,5 pts)</li>
        <li>Que calcule cette fonction ? (0,5 pt)</li>
      </ol>
      <p><strong>Partie B.</strong> On trie la liste <code>[8, 3, 5, 1, 7, 2]</code> par <strong>tri fusion</strong>.</p>
      <ol type="a" start="4">
        <li>Représenter les découpages successifs (phase « diviser ») puis les fusions (phase « régner »). (1,5 pts)</li>
        <li>Donner le coût du tri fusion et celui du tri par sélection, et expliquer d'où vient le facteur
        <code>log n</code>. (1 pt)</li>
        <li>Le tri fusion est dit « diviser pour régner ». Citer un autre algorithme du programme relevant de cette
        stratégie. (0,5 pt)</li>
      </ol>`,
    corrige: `
      <h4>Exercice 1</h4>
      <p><strong>a)</strong> <em>Élu</em> (en cours d'exécution sur le processeur) — un processus prêt y passe quand
      l'ordonnanceur le choisit. <em>Prêt</em> — un processus élu y retourne quand son quantum expire. <em>Bloqué</em>
      (en attente d'une entrée/sortie ou d'une ressource) — un processus élu y passe quand il demande une E/S ;
      il redevient prêt quand elle se termine.</p>
      <p><strong>b)</strong> Chronologie (quantum 2 ms) : P1 [0–2], P2 [2–4], P3 [4–6, terminé], P1 [6–8],
      P2 [8–9, terminé], P1 [9–10, terminé]. Fins : <strong>P3 à 6 ms, P2 à 9 ms, P1 à 10 ms</strong>.</p>
      <p><strong>c)</strong> C'est un <strong>interblocage</strong> (deadlock) : chacun tient une ressource et attend
      celle de l'autre — attente circulaire. Règle qui l'empêche : imposer un <strong>ordre global</strong> d'acquisition
      (tout processus demande R1 avant R2) : l'attente circulaire devient impossible.</p>
      <p><strong>d)</strong> RIP minimise le <strong>nombre de sauts</strong> : il choisit la route à 2 sauts (lente).
      OSPF minimise le <strong>coût total</strong> : il choisit la route en fibre à 4 sauts (coût 4 &lt; 30). OSPF prend
      donc ici la route la plus rapide même si elle traverse plus de routeurs.</p>

      <h4>Exercice 2</h4>
      <p><strong>a)</strong> <code>__init__</code> est le <strong>constructeur</strong> ; <code>nom</code> est un
      <strong>attribut</strong> ; <code>emprunter</code> est une <strong>méthode</strong>. <code>self</code> désigne
      l'objet lui-même (l'instance sur laquelle la méthode est appelée).</p>
      <p><strong>b)</strong> <code>False</code> : la limite de 3 emprunts est atteinte, le livre n'est pas ajouté.</p>
      <p><strong>c)</strong></p>
      <pre><code>def rendre(self, titre):
    if titre in self.emprunts:
        self.emprunts.remove(titre)
        return True
    return False</code></pre>
      <p><strong>d)</strong></p>
      <pre><code>def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)</code></pre>
      <p><strong>e)</strong> fib(5) appelle fib(4) et fib(3) ; fib(4) appelle fib(3) et fib(2), etc. Total :
      <strong>15 appels</strong>. fib(3) est calculé 2 fois, fib(2) 3 fois, fib(1) 5 fois : les mêmes sous-problèmes
      sont recalculés.</p>
      <p><strong>f)</strong> La mémoïsation <strong>stocke</strong> (par exemple dans un dictionnaire) le résultat de
      chaque appel déjà effectué ; avant de calculer fib(k), on regarde s'il est déjà connu. Chaque valeur n'est alors
      calculée qu'<strong>une seule fois</strong> : le coût passe d'exponentiel (≈ 2ⁿ appels) à linéaire (n calculs),
      et fib(50) devient instantané.</p>

      <h4>Exercice 3</h4>
      <p><strong>a)</strong> Une <strong>pile</strong> (LIFO), avec <code>append</code> = empiler et <code>pop</code> =
      dépiler (et le test <code>p == []</code> = est_vide).</p>
      <p><strong>b)</strong> <code>"(a(b)c)"</code> : ( → p=["("] ; ( → p=["(", "("] ; ) → p=["("] ; ) → p=[] ;
      lettres ignorées → renvoie <code>True</code>. <code>"(a))("</code> : ( → p=["("] ; ) → p=[] ; ) → pile vide au
      moment de dépiler → renvoie <code>False</code> immédiatement.</p>
      <p><strong>c)</strong> Elle teste si l'expression est <strong>bien parenthésée</strong> (chaque « ( » fermée par
      une « ) », dans le bon ordre).</p>
      <p><strong>d)</strong> Découpes : [8,3,5,1,7,2] → [8,3,5] et [1,7,2] → [8],[3,5] et [1],[7,2] → feuilles.
      Fusions : [3,5]+[8] → [3,5,8] ; [7,2] → [2,7] puis [1]+[2,7] → [1,2,7] ; enfin [3,5,8] et [1,2,7] fusionnent en
      <strong>[1,2,3,5,7,8]</strong>.</p>
      <p><strong>e)</strong> Tri fusion : O(n log n) ; tri par sélection : O(n²). Le log n vient du nombre de niveaux de
      découpage (on divise la liste par 2 à chaque niveau : log₂ n niveaux), et chaque niveau coûte O(n) en fusions.</p>
      <p><strong>f)</strong> La <strong>recherche dichotomique</strong> (dans un tableau trié) — ou la rotation
      d'images par quadrants, autre exemple de « diviser pour régner ».</p>`,
  },
];
