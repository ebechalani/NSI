/* =====================================================================
   GLOSSAIRE NSI — Première
   Définitions courtes, classées par thème, recherchables.
   theme : id du thème associé (sert au filtre et aux liens).
   ===================================================================== */

const GLOSSARY = [
  { terme: "Bit", theme: "donnees-base", def: "Plus petite unité d'information : vaut 0 ou 1 (binary digit)." },
  { terme: "Octet", theme: "donnees-base", def: "Groupe de 8 bits. Permet 256 valeurs (de 0 à 255)." },
  { terme: "Binaire (base 2)", theme: "donnees-base", def: "Système de numération à deux chiffres (0 et 1) utilisé par les machines." },
  { terme: "Hexadécimal (base 16)", theme: "donnees-base", def: "Système à 16 symboles (0-9 puis A-F) ; un chiffre code exactement 4 bits." },
  { terme: "Complément à deux", theme: "donnees-base", def: "Méthode pour représenter les entiers négatifs en binaire sans signe « − »." },
  { terme: "Débordement (overflow)", theme: "donnees-base", def: "Le résultat d'un calcul dépasse la capacité des bits prévus : il « tourne »." },
  { terme: "Flottant (float)", theme: "donnees-base", def: "Nombre à virgule, stocké de façon approchée : 0.1 + 0.2 ≠ 0.3 exactement." },
  { terme: "Booléen", theme: "donnees-base", def: "Valeur logique : True (vrai) ou False (faux)." },
  { terme: "ASCII", theme: "donnees-base", def: "Table associant un code numérique à 128 caractères (lettres latines, chiffres…)." },
  { terme: "Unicode / UTF-8", theme: "donnees-base", def: "Codage de plus de 140 000 caractères du monde ; UTF-8 reste compatible ASCII." },

  { terme: "Tuple (p-uplet)", theme: "types-construits", def: "Séquence ordonnée et NON modifiable de valeurs, écrite entre parenthèses." },
  { terme: "Liste", theme: "types-construits", def: "Séquence ordonnée et modifiable, indexée à partir de 0." },
  { terme: "Indice", theme: "types-construits", def: "Position d'un élément dans une liste ; commence à 0, t[-1] est le dernier." },
  { terme: "Compréhension de liste", theme: "types-construits", def: "Écriture concise pour construire une liste, avec filtre éventuel : [x for x in ...]." },
  { terme: "Dictionnaire", theme: "types-construits", def: "Structure associant des clés à des valeurs (paires clé/valeur)." },
  { terme: "Matrice", theme: "types-construits", def: "Tableau de tableaux (deux dimensions) ; accès par m[ligne][colonne]." },

  { terme: "Table de données", theme: "donnees-tables", def: "Ensemble de lignes décrites par les mêmes colonnes ; en Python, liste de dictionnaires." },
  { terme: "CSV", theme: "donnees-tables", def: "Fichier texte où les valeurs sont séparées par un caractère (virgule ou point-virgule)." },
  { terme: "Descripteur (attribut)", theme: "donnees-tables", def: "Nom d'une colonne d'une table de données." },
  { terme: "Filtrer", theme: "donnees-tables", def: "Sélectionner les lignes d'une table qui vérifient une condition." },
  { terme: "Jointure (fusion)", theme: "donnees-tables", def: "Combiner deux tables partageant une colonne commune." },

  { terme: "HTML", theme: "ihm-web", def: "Langage de structure et de contenu d'une page web (balises)." },
  { terme: "CSS", theme: "ihm-web", def: "Langage de mise en forme (couleurs, polices, mise en page)." },
  { terme: "JavaScript", theme: "ihm-web", def: "Langage qui rend une page web interactive (réagit aux événements)." },
  { terme: "Client / serveur", theme: "ihm-web", def: "Le client (navigateur) envoie une requête ; le serveur renvoie une réponse." },
  { terme: "HTTP", theme: "ihm-web", def: "Protocole de communication du Web entre client et serveur." },
  { terme: "GET", theme: "ihm-web", def: "Méthode HTTP : paramètres visibles dans l'URL (recherche, navigation)." },
  { terme: "POST", theme: "ihm-web", def: "Méthode HTTP : données dans le corps, cachées de l'URL (mot de passe)." },
  { terme: "Événement", theme: "ihm-web", def: "Action de l'utilisateur (clic, saisie) à laquelle JavaScript peut réagir." },

  { terme: "Architecture de von Neumann", theme: "architecture-os", def: "Modèle : unité de commande, UAL, mémoire et entrées/sorties ; programme et données en mémoire." },
  { terme: "Processeur (CPU)", theme: "architecture-os", def: "Composant qui exécute les instructions : unité de commande + UAL." },
  { terme: "Porte logique", theme: "architecture-os", def: "Circuit réalisant une opération booléenne (ET, OU, NON) à partir de transistors." },
  { terme: "Système d'exploitation", theme: "architecture-os", def: "Logiciel qui gère le matériel, les processus, la mémoire, les fichiers (Windows, Linux…)." },
  { terme: "Arborescence", theme: "architecture-os", def: "Organisation des fichiers en dossiers imbriqués depuis une racine." },
  { terme: "Chemin absolu / relatif", theme: "architecture-os", def: "Absolu : depuis la racine. Relatif : depuis le dossier courant (. et ..)." },
  { terme: "Permissions", theme: "architecture-os", def: "Droits r (lecture), w (écriture), x (exécution) pour propriétaire, groupe, autres." },

  { terme: "Variable", theme: "langages-prog", def: "Nom qui désigne une valeur stockée en mémoire." },
  { terme: "Affectation", theme: "langages-prog", def: "Donner une valeur à une variable avec =." },
  { terme: "Condition (if/elif/else)", theme: "langages-prog", def: "Exécute un bloc selon qu'un test est vrai ou faux." },
  { terme: "Boucle bornée (for)", theme: "langages-prog", def: "Répète un bloc un nombre de fois connu d'avance." },
  { terme: "Boucle non bornée (while)", theme: "langages-prog", def: "Répète tant qu'une condition reste vraie." },
  { terme: "Fonction", theme: "langages-prog", def: "Bloc d'instructions réutilisable, avec paramètres et valeur de retour (return)." },
  { terme: "Spécification", theme: "langages-prog", def: "Description de ce que fait une fonction : signature, docstring, préconditions, tests." },
  { terme: "assert", theme: "langages-prog", def: "Instruction de test : lève une erreur si une propriété attendue est fausse." },

  { terme: "Algorithme", theme: "algorithmique", def: "Suite finie d'instructions résolvant un problème." },
  { terme: "Recherche séquentielle", theme: "algorithmique", def: "Parcourir un tableau du début à la fin pour trouver un élément." },
  { terme: "Recherche dichotomique", theme: "algorithmique", def: "Sur un tableau trié, couper en deux à chaque étape (coût log n)." },
  { terme: "Tri par sélection", theme: "algorithmique", def: "Placer successivement le plus petit élément restant en tête." },
  { terme: "Tri par insertion", theme: "algorithmique", def: "Insérer chaque élément à sa place parmi les précédents (comme des cartes)." },
  { terme: "Algorithme glouton", theme: "algorithmique", def: "Faire à chaque étape le meilleur choix local, sans revenir en arrière." },
  { terme: "Complexité (coût)", theme: "algorithmique", def: "Nombre d'opérations en fonction de la taille n : O(1), O(log n), O(n), O(n²)." },
  { terme: "Variant de boucle", theme: "algorithmique", def: "Quantité entière positive qui décroît à chaque tour : prouve la terminaison." },
  { terme: "k plus proches voisins (kNN)", theme: "algorithmique", def: "Classer un point selon la classe majoritaire de ses k voisins les plus proches." },

  { terme: "Réseau", theme: "reseaux", def: "Ensemble de machines reliées pour échanger des données." },
  { terme: "Protocole", theme: "reseaux", def: "Ensemble de règles communes qui permettent à deux machines de se comprendre (ex. TCP/IP)." },
  { terme: "Paquet", theme: "reseaux", def: "Petit morceau numéroté d'un message, transmis indépendamment sur le réseau." },
  { terme: "Routage", theme: "reseaux", def: "Choix du chemin que suivent les paquets entre l'expéditeur et le destinataire." },
  { terme: "Adresse IP", theme: "reseaux", def: "Identifiant numérique d'une machine sur un réseau." },

  { terme: "Bibliothèque (module)", theme: "langages-prog", def: "Ensemble de fonctions prêtes à l'emploi qu'on importe (ex. math, random, csv)." },
  { terme: "Documentation", theme: "langages-prog", def: "Texte décrivant comment utiliser une fonction ou une bibliothèque (help, docstring)." },
];
