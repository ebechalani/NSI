/* =====================================================================
   QCM auto-corrigés — Terminale NSI.
   answer = indice de la bonne réponse (commence à 0).
   Seul le thème « Structures de données » a un QCM pour l'instant
   (les autres thèmes sont au stade squelette).
   ===================================================================== */

const QUIZZES = {
  "term-structures": [
    {
      q: "Que sépare-t-on quand on distingue « interface » et « implémentation » d'une structure ?",
      choices: [
        "Le nom de la structure et sa couleur",
        "Les opérations promises (le contrat) et le code concret qui les réalise",
        "Le code Python et le code C",
        "Les données et les commentaires",
      ],
      answer: 1,
      explain:
        "L'interface décrit les opérations offertes (le contrat) ; l'implémentation est le code qui tient ce contrat. On peut changer l'implémentation sans changer le code qui utilise la structure.",
    },
    {
      q: "Une pile suit le principe…",
      choices: ["FIFO (premier arrivé, premier servi)", "LIFO (dernier arrivé, premier servi)", "aléatoire", "trié"],
      answer: 1,
      explain: "Pile = LIFO : on ajoute et on retire toujours par le sommet, comme une pile d'assiettes.",
    },
    {
      q: "Pour une file d'attente, quelle structure et quel ordre de sortie ?",
      choices: ["Pile, LIFO", "File, LIFO", "File, FIFO", "Arbre, infixe"],
      answer: 2,
      explain: "Une file est FIFO : le premier entré (en queue) est le premier servi (en tête).",
    },
    {
      q: "Pourquoi préfère-t-on collections.deque à une list pour implémenter une file ?",
      choices: [
        "deque trie automatiquement les éléments",
        "list ne sait pas faire append",
        "popleft() retire en tête en temps constant, alors que list.pop(0) doit décaler tous les éléments",
        "deque utilise moins de mémoire que n'importe quoi",
      ],
      answer: 2,
      explain:
        "Retirer en tête d'une list (pop(0)) oblige à décaler tout le reste : c'est lent. deque est conçu pour ajouter/retirer aux deux bouts en temps constant.",
    },
    {
      q: "Dans l'arbre binaire (7, (3, (1,None,None), (5,None,None)), (9,None,None)), quelle est sa hauteur ?",
      choices: ["2", "3", "5", "9"],
      answer: 1,
      explain:
        "La hauteur est la longueur du plus long chemin racine → feuille : 7 → 3 → 1 (ou 7 → 3 → 5) compte 3 nœuds, donc hauteur 3. La taille (nombre de nœuds), elle, vaut 5.",
    },
    {
      q: "Sur un arbre binaire de recherche (ABR), quel parcours ressort les valeurs dans l'ordre croissant ?",
      choices: ["Préfixe", "Infixe", "Suffixe", "En largeur"],
      answer: 1,
      explain:
        "Le parcours infixe (gauche, racine, droite) d'un ABR produit les valeurs triées, car le sous-arbre gauche ne contient que des valeurs plus petites.",
    },
    {
      q: "Le parcours en largeur (BFS) d'un graphe s'appuie naturellement sur…",
      choices: ["une pile", "une file", "un arbre binaire de recherche", "une matrice triée"],
      answer: 1,
      explain:
        "BFS utilise une file (on traite d'abord les sommets proches du départ). Le parcours en profondeur (DFS), lui, s'appuie sur une pile.",
    },
  ],

  "term-bdd": [
    {
      q: "Dans une table relationnelle, qu'est-ce qu'un attribut ?",
      choices: ["Une ligne (un enregistrement)", "Une colonne", "La table entière", "Une clé étrangère"],
      answer: 1,
      explain: "Un attribut est une colonne (ex. nom, moyenne) ; une ligne est un enregistrement.",
    },
    {
      q: "À quoi sert une clé primaire ?",
      choices: [
        "À relier deux tables",
        "À identifier de façon unique chaque ligne d'une table",
        "À trier les résultats",
        "À chiffrer les données",
      ],
      answer: 1,
      explain: "La clé primaire identifie chaque ligne de manière unique (ni dupliquée, ni vide) : c'est la contrainte d'entité.",
    },
    {
      q: "Une clé étrangère qui référence une classe inexistante viole…",
      choices: ["la contrainte de domaine", "la contrainte d'intégrité référentielle", "la syntaxe SQL", "la clé primaire"],
      answer: 1,
      explain: "L'intégrité référentielle exige qu'une clé étrangère pointe vers une clé primaire existante.",
    },
    {
      q: "Quelle requête affiche le nom des élèves ayant plus de 15 de moyenne ?",
      choices: [
        "SELECT nom FROM eleve ORDER BY moyenne;",
        "SELECT nom FROM eleve WHERE moyenne > 15;",
        "SELECT moyenne FROM eleve WHERE nom > 15;",
        "INSERT nom FROM eleve WHERE moyenne > 15;",
      ],
      answer: 1,
      explain: "SELECT choisit la colonne (nom), WHERE filtre les lignes (moyenne > 15).",
    },
    {
      q: "Que calcule SELECT AVG(moyenne) FROM eleve; ?",
      choices: ["le nombre d'élèves", "la moyenne des moyennes", "la meilleure moyenne", "la somme des moyennes"],
      answer: 1,
      explain: "AVG est la fonction d'agrégat « moyenne ». COUNT compte, MAX donne le maximum, SUM la somme.",
    },
    {
      q: "À quoi sert une jointure (JOIN) ?",
      choices: [
        "À trier deux tables",
        "À supprimer des doublons",
        "À relier les lignes de deux tables via clé étrangère = clé primaire",
        "À ajouter une colonne",
      ],
      answer: 2,
      explain: "JOIN ... ON apparie les lignes de deux tables là où la clé étrangère correspond à la clé primaire.",
    },
    {
      q: "Pourquoi un UPDATE sans WHERE est-il dangereux ?",
      choices: [
        "Il provoque une erreur de syntaxe",
        "Il ne modifie rien",
        "Il modifie TOUTES les lignes de la table",
        "Il supprime la table",
      ],
      answer: 2,
      explain: "Sans condition WHERE, la modification s'applique à toutes les lignes. Toujours préciser et vérifier le WHERE.",
    },
  ],

  "term-langages": [
    {
      q: "Quels sont les trois paradigmes au programme illustrables en Python ?",
      choices: [
        "compilé, interprété, hybride",
        "impératif, fonctionnel, orienté objet",
        "binaire, décimal, hexadécimal",
        "client, serveur, pair-à-pair",
      ],
      answer: 1,
      explain: "Python permet les paradigmes impératif, fonctionnel et orienté objet.",
    },
    {
      q: "Dans une classe, à quoi sert la méthode __init__ ?",
      choices: ["à afficher l'objet", "à détruire l'objet", "à initialiser un nouvel objet (constructeur)", "à comparer deux objets"],
      answer: 2,
      explain: "__init__ est le constructeur : il initialise les attributs du nouvel objet ; self désigne l'objet courant.",
    },
    {
      q: "Que doit OBLIGATOIREMENT contenir une fonction récursive ?",
      choices: [
        "une boucle for",
        "un cas de base et un appel qui s'en rapproche",
        "un dictionnaire",
        "au moins deux paramètres",
      ],
      answer: 1,
      explain: "Sans cas de base (ou si l'appel ne s'en rapproche pas), la récursion ne s'arrête jamais.",
    },
    {
      q: "Pourquoi la version naïve de Fibonacci est-elle lente ?",
      choices: [
        "Python est lent",
        "Elle recalcule de nombreuses fois les mêmes valeurs",
        "Elle utilise trop de mémoire",
        "Elle contient une boucle infinie",
      ],
      answer: 1,
      explain: "fib_naif recalcule sans cesse les mêmes sous-résultats. La mémoïsation les retient pour ne les calculer qu'une fois.",
    },
    {
      q: "À quoi sert assert dans la mise au point d'un programme ?",
      choices: [
        "à afficher une variable",
        "à vérifier une condition et stopper le programme si elle est fausse",
        "à importer un module",
        "à accélérer le code",
      ],
      answer: 1,
      explain: "assert vérifie une propriété (précondition, test) ; si elle est fausse, le programme s'arrête avec une erreur.",
    },
    {
      q: "Le problème de l'arrêt est…",
      choices: [
        "facile à résoudre avec une boucle",
        "indécidable : aucun programme ne peut le résoudre pour tous les cas",
        "interdit par Python",
        "résolu par les antivirus",
      ],
      answer: 1,
      explain: "Turing (1936) a démontré qu'aucun programme ne peut décider, pour tout programme et toute entrée, s'il s'arrête.",
    },
  ],

  "term-algo": [
    {
      q: "Une recherche dichotomique a un coût de…",
      choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      answer: 1,
      explain: "On divise l'intervalle par deux à chaque étape → O(log n). Elle exige un tableau trié.",
    },
    {
      q: "Quelle condition est indispensable pour la recherche dichotomique ?",
      choices: ["le tableau doit être trié", "le tableau doit être vide", "les éléments doivent être uniques", "le tableau doit avoir une taille paire"],
      answer: 0,
      explain: "La dichotomie élimine une moitié en comparant au milieu : cela suppose un tableau trié.",
    },
    {
      q: "Le tri fusion est un exemple de la stratégie…",
      choices: ["programmation dynamique", "diviser pour régner", "glouton", "force brute"],
      answer: 1,
      explain: "Tri fusion = diviser (couper en deux), régner (trier chaque moitié), combiner (fusionner). Coût O(n log n).",
    },
    {
      q: "Pourquoi l'algorithme glouton échoue-t-il parfois pour le rendu de monnaie ?",
      choices: [
        "il est trop lent",
        "il ne donne pas toujours le nombre minimal de pièces",
        "il ne fonctionne qu'avec l'euro",
        "il boucle à l'infini",
      ],
      answer: 1,
      explain: "Avec {1,3,4} pour rendre 6, le glouton donne 4+1+1 (3 pièces) au lieu de 3+3 (2 pièces). La programmation dynamique garantit l'optimum.",
    },
    {
      q: "L'algorithme de Dijkstra sert à…",
      choices: [
        "trier une liste",
        "trouver le plus court chemin dans un graphe pondéré",
        "chercher un mot dans un texte",
        "classer un point par k-NN",
      ],
      answer: 1,
      explain: "Dijkstra calcule les plus courts chemins depuis une source dans un graphe à arêtes pondérées (GPS, routage).",
    },
    {
      q: "La méthode des k plus proches voisins (k-NN) attribue à un point…",
      choices: [
        "une valeur aléatoire",
        "l'étiquette majoritaire parmi ses k voisins les plus proches",
        "la moyenne de tous les points",
        "toujours l'étiquette du point le plus éloigné",
      ],
      answer: 1,
      explain: "On regarde les k exemples les plus proches (par la distance) et on prend l'étiquette la plus fréquente.",
    },
  ],

  "term-histoire": [
    {
      q: "Qui a écrit ce qui est considéré comme le premier programme de l'histoire ?",
      choices: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "Charles Babbage"],
      answer: 1,
      explain: "Ada Lovelace (1843) a écrit un programme pour la machine analytique de Babbage et entrevu qu'elle pourrait manipuler des symboles, pas seulement des nombres.",
    },
    {
      q: "Qu'est-ce qui pilotait le métier à tisser de Jacquard (1801) ?",
      choices: ["des transistors", "des cartes perforées (trou / pas de trou)", "un microprocesseur", "un logiciel"],
      answer: 1,
      explain: "Les cartes perforées codent l'information par deux états (trou ou non) : un ancêtre du binaire et de la « machine programmée ».",
    },
    {
      q: "L'apport majeur d'Alan Turing en 1936 est…",
      choices: [
        "le premier ordinateur personnel",
        "un modèle théorique du calcul (machine de Turing) et la notion de calculabilité",
        "le World Wide Web",
        "le microprocesseur",
      ],
      answer: 1,
      explain: "La machine de Turing définit ce qui est calculable par un algorithme — et démontre l'existence de problèmes non calculables.",
    },
    {
      q: "L'architecture de von Neumann repose sur l'idée de…",
      choices: [
        "séparer physiquement chaque programme",
        "stocker le programme dans la même mémoire que les données",
        "utiliser uniquement des cartes perforées",
        "se passer de processeur",
      ],
      answer: 1,
      explain: "Programme et données partagent la même mémoire : c'est l'architecture de tous nos ordinateurs actuels.",
    },
    {
      q: "Qui a inventé le World Wide Web (1989-1991) ?",
      choices: ["Vint Cerf", "Tim Berners-Lee", "Steve Jobs", "Claude Shannon"],
      answer: 1,
      explain: "Tim Berners-Lee, au CERN, a créé le Web (HTML, URL, HTTP). Cerf et Kahn, eux, ont conçu TCP/IP (Internet).",
    },
    {
      q: "Quelle est la bonne distinction ?",
      choices: [
        "Internet et le Web sont la même chose",
        "Internet est le réseau physique ; le Web est un service qui circule dessus",
        "Le Web est le réseau ; Internet est un site",
        "Le Web a précédé Internet",
      ],
      answer: 1,
      explain: "Internet = les « tuyaux » mondiaux ; le Web = un service (pages liées) parmi d'autres (mail, visio…).",
    },
  ],

  "term-archi-reseaux": [
    {
      q: "Quelle est la différence entre un programme et un processus ?",
      choices: [
        "aucune, ce sont des synonymes",
        "un programme est un fichier ; un processus est ce programme en cours d'exécution",
        "un processus est plus lent qu'un programme",
        "un programme tourne, un processus est stocké",
      ],
      answer: 1,
      explain: "Le programme est un fichier sur le disque ; le processus est son exécution (avec son état). Un programme peut donner plusieurs processus.",
    },
    {
      q: "À quoi sert l'ordonnanceur d'un système d'exploitation ?",
      choices: [
        "à ranger les fichiers par ordre alphabétique",
        "à répartir le temps de processeur entre les processus",
        "à chiffrer les communications",
        "à router les paquets",
      ],
      answer: 1,
      explain: "L'ordonnanceur décide quel processus s'exécute et quand, donnant l'illusion du « en même temps » (ex. round-robin).",
    },
    {
      q: "Un interblocage (deadlock) se produit quand…",
      choices: [
        "un processus va trop vite",
        "des processus s'attendent mutuellement et aucun ne peut avancer",
        "la mémoire est pleine",
        "le réseau est coupé",
      ],
      answer: 1,
      explain: "Chaque processus détient une ressource et attend celle de l'autre : blocage circulaire (cf. le dîner des philosophes).",
    },
    {
      q: "La « commutation de paquets » consiste à…",
      choices: [
        "envoyer le message d'un seul bloc",
        "découper le message en paquets qui voyagent indépendamment puis sont réassemblés",
        "chiffrer chaque message",
        "supprimer les doublons",
      ],
      answer: 1,
      explain: "Les paquets peuvent prendre des chemins différents et tolèrent les pannes : c'est le principe de robustesse d'Internet.",
    },
    {
      q: "Le protocole de routage OSPF calcule le plus court chemin avec…",
      choices: ["un tri fusion", "l'algorithme de Dijkstra", "une recherche dichotomique", "les k plus proches voisins"],
      answer: 1,
      explain: "OSPF (état de liens) applique Dijkstra sur la carte du réseau pondérée par le coût des liens — d'où le lien avec l'algorithmique.",
    },
    {
      q: "Dans le chiffrement asymétrique, pour m'envoyer un message secret, on utilise…",
      choices: [
        "ma clé privée",
        "ma clé publique (et moi seul déchiffre avec ma clé privée)",
        "une clé partagée à l'avance",
        "aucune clé",
      ],
      answer: 1,
      explain: "On chiffre avec la clé publique du destinataire ; seule sa clé privée déchiffre. Plus besoin de partager un secret au préalable.",
    },
  ],
};
