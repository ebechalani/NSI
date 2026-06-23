/* =====================================================================
   GLOSSAIRE NSI — Terminale
   Définitions courtes, classées par thème, recherchables.
   theme : id du thème associé (sert au filtre et aux liens).
   Pour l'instant : termes du thème « Structures de données ».
   ===================================================================== */

const GLOSSARY = [
  { terme: "Type abstrait de données (TAD)", theme: "term-structures", def: "Description d'une structure par ses opérations (son interface), indépendamment du code qui la réalise." },
  { terme: "Interface", theme: "term-structures", def: "L'ensemble des opérations offertes par une structure et leurs promesses : le « contrat »." },
  { terme: "Implémentation", theme: "term-structures", def: "Le code concret qui réalise l'interface ; on peut la changer sans casser le code qui l'utilise." },
  { terme: "Pile (LIFO)", theme: "term-structures", def: "Structure où le dernier élément ajouté est le premier retiré (Last In, First Out)." },
  { terme: "File (FIFO)", theme: "term-structures", def: "Structure où le premier élément ajouté est le premier retiré (First In, First Out)." },
  { terme: "Liste chaînée", theme: "term-structures", def: "Suite de maillons reliés par des « flèches » ; chaque maillon contient une valeur et un lien vers le suivant." },
  { terme: "Arbre", theme: "term-structures", def: "Structure hiérarchique faite de nœuds : une racine, des nœuds internes, des feuilles." },
  { terme: "Racine / Feuille", theme: "term-structures", def: "La racine est le nœud du sommet ; une feuille est un nœud sans fils." },
  { terme: "Taille d'un arbre", theme: "term-structures", def: "Nombre total de nœuds de l'arbre." },
  { terme: "Hauteur d'un arbre", theme: "term-structures", def: "Longueur (en nombre de nœuds) du plus long chemin de la racine à une feuille." },
  { terme: "Arbre binaire", theme: "term-structures", def: "Arbre dont chaque nœud a au plus deux fils (gauche et droite)." },
  { terme: "Arbre binaire de recherche (ABR)", theme: "term-structures", def: "Arbre binaire où, pour chaque nœud, le sous-arbre gauche ne contient que des valeurs plus petites et le droit des valeurs plus grandes." },
  { terme: "Parcours infixe", theme: "term-structures", def: "Parcours gauche → racine → droite ; sur un ABR, il ressort les valeurs triées." },
  { terme: "Graphe", theme: "term-structures", def: "Ensemble de sommets reliés par des arêtes, pour modéliser des relations." },
  { terme: "Liste d'adjacence", theme: "term-structures", def: "Représentation d'un graphe associant à chaque sommet la liste de ses voisins (souvent un dictionnaire)." },
  { terme: "Parcours en largeur (BFS)", theme: "term-structures", def: "Exploration d'un graphe niveau par niveau, à l'aide d'une file." },
  { terme: "Parcours en profondeur (DFS)", theme: "term-structures", def: "Exploration d'un graphe en s'enfonçant le plus loin possible, à l'aide d'une pile." },

  { terme: "SGBD / SGBDR", theme: "term-bdd", def: "Système de gestion de bases de données (relationnelles) : logiciel qui stocke, sécurise et interroge les données (SQLite, PostgreSQL…)." },
  { terme: "Modèle relationnel", theme: "term-bdd", def: "Organisation des données en tables (relations) reliées par des clés." },
  { terme: "Table / Relation", theme: "term-bdd", def: "Ensemble d'enregistrements de même structure ; les colonnes sont les attributs, les lignes les enregistrements." },
  { terme: "Attribut", theme: "term-bdd", def: "Une colonne d'une table, avec un domaine (type des valeurs autorisées)." },
  { terme: "Clé primaire", theme: "term-bdd", def: "Attribut(s) identifiant de façon unique chaque ligne d'une table (ni vide, ni dupliqué)." },
  { terme: "Clé étrangère", theme: "term-bdd", def: "Attribut qui référence la clé primaire d'une autre table, pour relier les tables." },
  { terme: "Intégrité référentielle", theme: "term-bdd", def: "Contrainte garantissant qu'une clé étrangère pointe toujours vers une clé primaire existante." },
  { terme: "SQL", theme: "term-bdd", def: "Langage d'interrogation et de manipulation des bases relationnelles (SELECT, INSERT, UPDATE, DELETE…)." },
  { terme: "SELECT … WHERE", theme: "term-bdd", def: "Requête d'interrogation : SELECT choisit les colonnes (projection), WHERE filtre les lignes (sélection)." },
  { terme: "Jointure (JOIN)", theme: "term-bdd", def: "Opération reliant les lignes de deux tables là où la clé étrangère correspond à la clé primaire (ON)." },
  { terme: "Agrégat", theme: "term-bdd", def: "Fonction calculant sur un ensemble de lignes : COUNT, AVG, MIN, MAX, SUM (souvent avec GROUP BY)." },

  { terme: "Paradigme", theme: "term-langages", def: "Manière d'organiser un programme : impératif, fonctionnel, orienté objet." },
  { terme: "Classe / Objet", theme: "term-langages", def: "Une classe est un moule décrivant attributs et méthodes ; un objet (instance) en est fabriqué." },
  { terme: "Attribut / Méthode", theme: "term-langages", def: "Attribut = donnée d'un objet (son état) ; méthode = fonction attachée à l'objet." },
  { terme: "Constructeur (__init__)", theme: "term-langages", def: "Méthode spéciale qui initialise un nouvel objet ; self y désigne l'objet courant." },
  { terme: "Récursivité", theme: "term-langages", def: "Fonction qui s'appelle elle-même sur un problème plus petit ; nécessite un cas de base." },
  { terme: "Cas de base", theme: "term-langages", def: "Cas le plus simple d'une fonction récursive, traité sans nouvel appel (arrête la récursion)." },
  { terme: "Mémoïsation", theme: "term-langages", def: "Technique consistant à retenir les résultats déjà calculés pour ne pas les recalculer." },
  { terme: "Assertion (assert)", theme: "term-langages", def: "Instruction vérifiant une condition ; stoppe le programme avec une erreur si elle est fausse." },
  { terme: "Décidabilité", theme: "term-langages", def: "Un problème est décidable s'il existe un algorithme qui répond oui/non en temps fini pour toute entrée." },
  { terme: "Problème de l'arrêt", theme: "term-langages", def: "Problème indécidable : aucun programme ne peut dire, pour tout programme et toute entrée, s'il s'arrête (Turing, 1936)." },

  { terme: "Complexité (coût)", theme: "term-algo", def: "Ordre de grandeur du nombre d'opérations en fonction de la taille n des données, noté en « grand O »." },
  { terme: "Diviser pour régner", theme: "term-algo", def: "Stratégie : diviser le problème, résoudre les sous-problèmes (souvent récursivement), combiner les solutions." },
  { terme: "Recherche dichotomique", theme: "term-algo", def: "Recherche dans un tableau trié en éliminant une moitié à chaque comparaison ; coût O(log n)." },
  { terme: "Tri fusion", theme: "term-algo", def: "Tri « diviser pour régner » : couper en deux, trier chaque moitié, fusionner ; coût O(n log n)." },
  { terme: "Programmation dynamique", theme: "term-algo", def: "Résolution par sous-problèmes répétés et mémorisation des résultats (ex. rendu de monnaie optimal)." },
  { terme: "Dijkstra", theme: "term-algo", def: "Algorithme du plus court chemin depuis une source dans un graphe à poids positifs." },
  { terme: "k plus proches voisins (k-NN)", theme: "term-algo", def: "Méthode de classification : on attribue à un point l'étiquette majoritaire de ses k voisins les plus proches." },

  { terme: "Machine de Turing", theme: "term-histoire", def: "Modèle théorique du calcul (Turing, 1936) qui définit ce qui est calculable par un algorithme." },
  { terme: "Architecture de von Neumann", theme: "term-histoire", def: "Organisation d'un ordinateur où le programme est stocké dans la même mémoire que les données (1945)." },
  { terme: "Cartes perforées", theme: "term-histoire", def: "Support codant l'information par trou / pas de trou (métier Jacquard, 1801) : ancêtre du binaire." },
  { terme: "ARPANET / TCP-IP", theme: "term-histoire", def: "Ancêtre d'Internet et protocoles (Cerf & Kahn) permettant à des réseaux différents de communiquer." },
  { terme: "World Wide Web", theme: "term-histoire", def: "Service de pages liées par hypertexte (Berners-Lee, 1989-1991), distinct d'Internet (le réseau)." },

  { terme: "Système d'exploitation (OS)", theme: "term-archi-reseaux", def: "Logiciel qui gère et partage les ressources de la machine (processus, mémoire, fichiers, périphériques)." },
  { terme: "Processus", theme: "term-archi-reseaux", def: "Programme en cours d'exécution, avec son état (mémoire, position) ; distinct du fichier programme." },
  { terme: "Ordonnanceur", theme: "term-archi-reseaux", def: "Composant de l'OS qui répartit le temps de processeur entre les processus (ex. round-robin)." },
  { terme: "Interblocage (deadlock)", theme: "term-archi-reseaux", def: "Situation où des processus s'attendent mutuellement et ne peuvent plus avancer (dîner des philosophes)." },
  { terme: "Commutation de paquets", theme: "term-archi-reseaux", def: "Découpage d'un message en paquets acheminés indépendamment puis réassemblés : principe d'Internet." },
  { terme: "Routage (RIP, OSPF)", theme: "term-archi-reseaux", def: "Construction des tables de routage : RIP par nombre de sauts, OSPF par coût des liens (Dijkstra)." },
  { terme: "Chiffrement symétrique", theme: "term-archi-reseaux", def: "Même clé pour chiffrer et déchiffrer (César, AES) ; il faut partager la clé secrètement." },
  { terme: "Chiffrement asymétrique", theme: "term-archi-reseaux", def: "Clé publique (chiffrer) + clé privée (déchiffrer) ; base de RSA et de HTTPS, sans secret partagé." },
];
