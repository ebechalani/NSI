/* =====================================================================
   QCM auto-corrigés — Terminale NSI.
   answer = indice de la bonne réponse (commence à 0).
   Les 6 thèmes du programme ont leur QCM (≈ 10 questions par thème,
   dont des questions « style bac » : lecture de code, déroulés, SQL).
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
    {
      q: "Le parcours en profondeur (DFS) d'un graphe s'appuie sur…",
      choices: ["une pile (ou la pile des appels récursifs)", "une file", "un dictionnaire trié", "une matrice d'adjacence obligatoirement"],
      answer: 0,
      explain:
        "Le DFS dépile le DERNIER sommet découvert (LIFO) : c'est ce qui le fait s'enfoncer le long d'un chemin. La version récursive utilise la pile d'appels de Python.",
    },
    {
      q: "Rechercher une clé parmi n = 1 000 000 de valeurs : quel coût dans un ABR équilibré, et dans un ABR dégénéré en « peigne » ?",
      choices: [
        "O(1) dans les deux cas",
        "O(n) dans les deux cas",
        "O(log n) équilibré (≈ 20 comparaisons) ; O(n) dégénéré (jusqu'à 1 000 000)",
        "O(n²) équilibré ; O(log n) dégénéré",
      ],
      answer: 2,
      explain:
        "Le coût est en O(hauteur). Équilibré : hauteur ≈ log₂(n) ≈ 20. Dégénéré (clés insérées déjà triées) : l'arbre est un fil de hauteur n, la recherche redevient linéaire.",
    },
    {
      q: "Dans un graphe NON orienté parcouru en profondeur, on détecte un cycle quand…",
      choices: [
        "on retombe sur n'importe quel sommet déjà visité",
        "on visite deux fois le sommet de départ",
        "la pile devient vide",
        "on retombe sur un sommet déjà visité qui n'est PAS le parent du sommet courant",
      ],
      answer: 3,
      explain:
        "Retomber sur son parent est normal (c'est l'arête par laquelle on vient d'arriver). Un autre sommet déjà vu, en revanche, referme une boucle : cycle détecté.",
    },
    {
      q: "Pour retrouver très souvent le numéro associé à un nom parmi 100 000 entrées, la meilleure structure est…",
      choices: [
        "une liste de couples (nom, numéro), parcourue à chaque recherche",
        "un dictionnaire nom → numéro : l'accès par clé est quasi immédiat",
        "une pile",
        "une file",
      ],
      answer: 1,
      explain:
        "Chercher dans une liste oblige à la parcourir : O(n). Le dictionnaire accède directement par la clé (quasi O(1)), quelle que soit la taille.",
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
    {
      q: "Une table unique inscription(nom, telephone, activite, tarif) où le tarif du Judo est recopié sur chaque ligne d'inscrit au Judo souffre d'abord…",
      choices: [
        "de redondance : la même information est écrite plusieurs fois, source d'incohérences",
        "d'un manque de lignes",
        "d'une erreur de syntaxe SQL",
        "d'un problème de chiffrement",
      ],
      answer: 0,
      explain:
        "C'est un schéma « malade » : changer le tarif oblige à modifier toutes les lignes concernées (anomalie de mise à jour). Le remède : découper en plusieurs tables reliées par des clés étrangères.",
    },
    {
      q: "Sur la table eleve du cours (Ada 18.5, Alan 16.0, Grace 14.5, Linus 9.5), combien de lignes renvoie SELECT nom FROM eleve WHERE moyenne >= 14.5 ;",
      choices: ["1", "2", "3", "4"],
      answer: 2,
      explain: "Ada (18.5), Alan (16.0) et Grace (14.5, car >= inclut l'égalité) passent le filtre ; Linus (9.5) non. Résultat : 3 lignes.",
    },
    {
      q: "Que fait le mot-clé DISTINCT dans SELECT DISTINCT id_classe FROM eleve ;",
      choices: [
        "il trie les id_classe",
        "il compte les id_classe",
        "il ne garde que les élèves distingués",
        "il élimine les doublons : chaque id_classe n'apparaît qu'une fois",
      ],
      answer: 3,
      explain: "DISTINCT supprime les lignes identiques du résultat : on obtient la liste des classes réellement présentes, une fois chacune.",
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
    {
      q: "Que renvoie f(\"NSI\") ? — def f(s): return \"\" if s == \"\" else f(s[1:]) + s[0]",
      choices: ["\"NSI\"", "\"ISN\"", "\"NNN\"", "une erreur RecursionError"],
      answer: 1,
      explain:
        "Déroulé : f(\"NSI\") = f(\"SI\") + \"N\" = (f(\"I\") + \"S\") + \"N\" = ((f(\"\") + \"I\") + \"S\") + \"N\" = \"ISN\". La fonction renverse la chaîne.",
    },
    {
      q: "def ajouter(x, resultats=[]): resultats.append(x); return resultats — pourquoi est-ce un piège ?",
      choices: [
        "append n'existe pas sur une liste",
        "la liste par défaut est créée UNE seule fois : elle est partagée entre tous les appels",
        "x ne peut pas être un entier",
        "return est interdit après append",
      ],
      answer: 1,
      explain:
        "La valeur par défaut est évaluée à la DÉFINITION de la fonction, pas à chaque appel : ajouter(1) puis ajouter(2) renvoie [1, 2] ! La forme sûre : resultats=None puis if resultats is None: resultats = [].",
    },
    {
      q: "exec(programme) où programme est une chaîne de caractères illustre l'idée fondamentale que…",
      choices: [
        "Python est plus rapide que C",
        "les chaînes sont immuables",
        "un programme est aussi une donnée (on peut le stocker, le transmettre, l'exécuter)",
        "exec remplace les fonctions",
      ],
      answer: 2,
      explain:
        "Le code source n'est qu'un texte : donnée ET programme à la fois. C'est le cœur de l'architecture de von Neumann et le point de départ du problème de l'arrêt.",
    },
    {
      q: "La calculabilité d'un problème dépend-elle du langage de programmation choisi ?",
      choices: [
        "Non : tous les langages « raisonnables » ont la même puissance de calcul (thèse de Church-Turing)",
        "Oui : Python calcule plus de choses que C",
        "Oui : seuls les langages compilés calculent tout",
        "Non, sauf pour les langages inventés après 2000",
      ],
      answer: 0,
      explain:
        "Ce qui est calculable en Python l'est en C, en Java ou sur une machine de Turing, et réciproquement. Le problème de l'arrêt reste indécidable dans TOUS les langages.",
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
    {
      q: "L'algorithme de Boyer-Moore (règle du mauvais caractère) compare le motif au texte…",
      choices: [
        "de gauche à droite, en se décalant toujours d'une position",
        "dans un ordre aléatoire",
        "de droite à gauche, et saute plusieurs positions d'un coup en cas d'échec",
        "uniquement sur la première lettre",
      ],
      answer: 2,
      explain:
        "On compare depuis la FIN du motif ; en cas d'échec, la table du dernier indice du « mauvais caractère » permet de décaler le motif de plusieurs positions : on lit une fraction du texte seulement.",
    },
    {
      q: "Que renvoie mystere(4) ? — def mystere(n): return 1 if n == 0 else 2 * mystere(n - 1)",
      choices: ["8", "4", "24", "16"],
      answer: 3,
      explain: "Déroulé : mystere(4) = 2×mystere(3) = 2×2×mystere(2) = … = 2⁴ × mystere(0) = 16 × 1 = 16. La fonction calcule 2 puissance n.",
    },
    {
      q: "Quel est le coût de ce fragment ? — for i in range(n): for j in range(n): total += t[i] * t[j]",
      choices: ["O(1)", "O(n²)", "O(n)", "O(log n)"],
      answer: 1,
      explain: "Deux boucles imbriquées de n tours chacune : n × n = n² opérations → coût quadratique O(n²).",
    },
    {
      q: "Une recherche dichotomique dans un tableau trié de 1024 éléments effectue au plus environ…",
      choices: ["1024 comparaisons", "512 comparaisons", "10 comparaisons", "2 comparaisons"],
      answer: 2,
      explain: "On divise l'intervalle par 2 à chaque étape : il faut log₂(1024) = 10 étapes pour tomber à un seul élément.",
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
    {
      q: "Grace Hopper a marqué l'histoire de l'informatique en…",
      choices: [
        "inventant le Web",
        "concevant le premier microprocesseur",
        "fondant la théorie de l'information",
        "inventant l'idée de compilateur et en contribuant à COBOL",
      ],
      answer: 3,
      explain:
        "Grace Hopper a eu l'idée de traduire un langage proche de l'humain en langage machine (compilateur) et a contribué à COBOL. On lui doit aussi la popularisation du mot « bug ».",
    },
    {
      q: "En 1948, Claude Shannon définit l'unité de mesure de l'information :",
      choices: ["l'octet", "le bit", "le pixel", "le hertz"],
      answer: 1,
      explain:
        "La théorie de l'information de Shannon définit le bit : il faut log₂(N) bits pour distinguer N possibilités équiprobables (8 bits pour 256).",
    },
    {
      q: "L'Intel 4004 (1971) est resté célèbre comme…",
      choices: [
        "le premier microprocesseur : tout un processeur gravé sur une seule puce",
        "le premier ordinateur électronique",
        "la première carte perforée",
        "le premier téléphone mobile",
      ],
      answer: 0,
      explain:
        "Graver le processeur entier sur une puce lance la micro-informatique — et ouvre la voie aux SoC actuels, qui intègrent l'ordinateur complet sur quelques mm².",
    },
    {
      q: "Classe dans l'ordre chronologique : (a) ENIAC, (b) machine analytique de Babbage, (c) IBM PC, (d) TCP/IP.",
      choices: ["a, b, c, d", "b, a, d, c", "b, d, a, c", "a, c, b, d"],
      answer: 1,
      explain:
        "Machine analytique (XIXᵉ siècle) → ENIAC (1945) → TCP/IP (années 1970) → IBM PC (1981).",
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
    {
      q: "Dans un smartphone, CPU, GPU, mémoire, modem radio et contrôleurs d'entrées/sorties sont…",
      choices: [
        "des cartes séparées enfichées sur une carte mère",
        "répartis entre le téléphone et le cloud",
        "intégrés sur une seule puce : un système sur puce (SoC)",
        "remplacés par un unique composant appelé BIOS",
      ],
      answer: 2,
      explain:
        "Un SoC (System on a Chip) grave tous ces blocs fonctionnels sur quelques mm² de silicium — c'est l'architecture des smartphones, tablettes et nano-ordinateurs (Raspberry Pi).",
    },
    {
      q: "Quel couple (avantage, limite) décrit correctement un SoC par rapport à un PC classique ?",
      choices: [
        "avantage : consommation réduite ; limite : rien n'est évolutif (RAM et GPU gravés une fois pour toutes)",
        "avantage : on peut changer chaque composant ; limite : très encombrant",
        "avantage : refroidissement facile ; limite : consommation énorme",
        "avantage : plus puissant qu'un PC ; limite : ne peut pas se connecter à Internet",
      ],
      answer: 0,
      explain:
        "Les données circulent sur quelques millimètres : moins d'énergie, format de poche. En contrepartie, impossible d'ajouter de la RAM ou de changer le GPU, et la chaleur est difficile à dissiper (throttling).",
    },
    {
      q: "Sur un même réseau, RIP et OSPF peuvent choisir des routes différentes parce que…",
      choices: [
        "RIP ne fonctionne que la nuit",
        "RIP minimise le nombre de sauts alors qu'OSPF minimise la somme des coûts des liens (liés au débit)",
        "OSPF choisit toujours la route la plus longue",
        "RIP chiffre les paquets, pas OSPF",
      ],
      answer: 1,
      explain:
        "RIP compte les routeurs traversés ; OSPF additionne des coûts ∝ 1/débit (via Dijkstra). Un chemin de 3 liaisons rapides peut battre un chemin de 2 liaisons lentes : mêmes réseaux, routes différentes.",
    },
    {
      q: "Sous Linux, quelle commande affiche les processus avec leur PID et le PID de leur parent (PPID) ?",
      choices: ["chmod", "cat", "mkdir", "ps -ef"],
      answer: 3,
      explain:
        "ps -ef liste tous les processus (PID, PPID…) ; pstree dessine l'arbre parent → fils. Tout processus est créé par un parent, d'où un arbre dont la racine est le processus n°1 (init/systemd).",
    },
  ],
};
