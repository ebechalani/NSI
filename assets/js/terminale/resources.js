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
