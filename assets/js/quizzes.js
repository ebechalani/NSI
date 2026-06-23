/* =====================================================================
   QCM auto-corrigés — un jeu de questions par thème.
   answer = indice de la bonne réponse (commence à 0).
   ===================================================================== */

const QUIZZES = {
  "donnees-base": [
    {
      q: "Combien de valeurs différentes peut-on coder sur 4 bits ?",
      choices: ["4", "8", "16", "32"],
      answer: 2,
      explain: "Avec n bits on code 2ⁿ valeurs. 2⁴ = 16.",
    },
    {
      q: "Que vaut le nombre binaire 1010 en décimal ?",
      choices: ["5", "10", "12", "20"],
      answer: 1,
      explain: "1×8 + 0×4 + 1×2 + 0×1 = 10.",
    },
    {
      q: "En hexadécimal, à combien de bits correspond un seul chiffre (0–F) ?",
      choices: ["2 bits", "3 bits", "4 bits", "8 bits"],
      answer: 2,
      explain: "16 = 2⁴, donc un chiffre hexa représente exactement 4 bits.",
    },
    {
      q: "Pourquoi 0.1 + 0.2 == 0.3 renvoie-t-il False en Python ?",
      choices: [
        "C'est un bug de Python",
        "Les flottants sont des approximations (IEEE 754)",
        "Il faut écrire 0.10 + 0.20",
        "L'addition de flottants est interdite",
      ],
      answer: 1,
      explain: "Beaucoup de décimaux n'ont pas d'écriture binaire exacte : les float sont approchés.",
    },
    {
      q: "Quel est le code ASCII du caractère 'A' ?",
      choices: ["32", "65", "97", "128"],
      answer: 1,
      explain: "'A' = 65 ; 'a' = 97 ; l'espace = 32.",
    },
    {
      q: "Sur 8 bits, quelle plage couvre le complément à deux (entiers signés) ?",
      choices: ["0 à 255", "−127 à 127", "−128 à 127", "−255 à 255"],
      answer: 2,
      explain: "Le bit de signe ôte une moitié : −128 à +127.",
    },
    {
      q: "Quelle est l'écriture binaire de l'entier 13 ?",
      choices: ["1011", "1101", "1110", "1001"],
      answer: 1,
      explain: "8 + 4 + 0 + 1 = 13, soit 1101.",
    },
    {
      q: "Quel est le plus grand entier que l'on peut coder sur un octet (non signé) ?",
      choices: ["127", "128", "255", "256"],
      answer: 2,
      explain: "Un octet = 8 bits = 2⁸ = 256 valeurs, de 0 à 255.",
    },
    {
      q: "Que vaut 0xFF (hexadécimal) en décimal ?",
      choices: ["15", "16", "255", "256"],
      answer: 2,
      explain: "F = 15 ; 15×16 + 15 = 255. C'est un octet « plein ».",
    },
    {
      q: "Comment s'écrit l'octet 1111 1010 en hexadécimal ?",
      choices: ["FA", "AF", "F8", "EA"],
      answer: 0,
      explain: "On groupe par 4 bits : 1111 = F et 1010 = A, donc FA.",
    },
    {
      q: "Sur un octet non signé (0 à 255), que donne 255 + 1 ?",
      choices: ["256", "0", "255", "une erreur"],
      answer: 1,
      explain: "Débordement (overflow) : le compteur « tourne » et repasse à 0.",
    },
    {
      q: "En complément à deux sur 8 bits, comment code-t-on −1 ?",
      choices: ["1000 0001", "1111 1110", "1111 1111", "0000 0001"],
      answer: 2,
      explain: "On inverse 0000 0001 → 1111 1110, puis on ajoute 1 → 1111 1111.",
    },
    {
      q: "1 kibioctet (Kio) vaut exactement :",
      choices: ["1000 octets", "1024 octets", "1000 bits", "1024 bits"],
      answer: 1,
      explain: "Kio = 2¹⁰ = 1024 octets ; le kilooctet « officiel » (ko) vaut 1000 o.",
    },
    {
      q: "Que vaut « Vrai ET Faux » en logique booléenne ?",
      choices: ["Vrai", "Faux", "Indéterminé", "1"],
      answer: 1,
      explain: "ET (and) ne renvoie Vrai que si les DEUX opérandes sont Vrai.",
    },
    {
      q: "Sur combien de bits l'ASCII d'origine code-t-il un caractère ?",
      choices: ["7 bits", "8 bits", "16 bits", "32 bits"],
      answer: 0,
      explain: "ASCII = 128 caractères = 2⁷, donc 7 bits.",
    },
    {
      q: "En UTF-8, combien d'octets occupe le caractère « é » ?",
      choices: ["1", "2", "3", "4"],
      answer: 1,
      explain: "Au-delà de l'ASCII (code 233), UTF-8 code « é » sur 2 octets (0xC3 0xA9).",
    },
    {
      q: "Avec quel codage UTF-8 est-il rétro-compatible ?",
      choices: ["ISO-8859", "ASCII", "UTF-16", "aucun"],
      answer: 1,
      explain: "Les 128 premiers caractères UTF-8 sont codés à l'identique de l'ASCII, sur 1 octet.",
    },
    {
      q: "Pourquoi a-t-on créé Unicode en plus de l'ASCII ?",
      choices: [
        "Pour aller plus vite",
        "Pour coder les caractères de toutes les langues (accents, emoji…)",
        "Pour économiser de la mémoire",
        "Pour remplacer le binaire",
      ],
      answer: 1,
      explain: "128 caractères ASCII ne suffisent pas : Unicode dépasse 140 000 caractères.",
    },
  ],

  "types-construits": [
    {
      q: "Quelle structure est ordonnée et NON modifiable (immuable) ?",
      choices: ["la liste", "le tuple", "le dictionnaire", "l'ensemble"],
      answer: 1,
      explain: "Le tuple (p-uplet) est immuable, contrairement à la liste.",
    },
    {
      q: "Quel est le premier indice d'une liste en Python ?",
      choices: ["0", "1", "-1", "ça dépend"],
      answer: 0,
      explain: "L'indexation commence à 0 ; t[-1] désigne le dernier.",
    },
    {
      q: "Que renvoie [n*n for n in range(4)] ?",
      choices: ["[1, 4, 9, 16]", "[0, 1, 4, 9]", "[0, 1, 2, 3]", "[1, 2, 3, 4]"],
      answer: 1,
      explain: "range(4) = 0,1,2,3 ; leurs carrés sont 0,1,4,9.",
    },
    {
      q: "Comment accède-t-on à la valeur associée à la clé 'nom' d'un dictionnaire d ?",
      choices: ["d.nom", "d(0)", "d['nom']", "d->nom"],
      answer: 2,
      explain: "On indexe par la clé entre crochets : d['nom'].",
    },
    {
      q: "Dans la matrice m = [[1,2],[3,4]], que vaut m[1][0] ?",
      choices: ["1", "2", "3", "4"],
      answer: 2,
      explain: "m[1] est la 2e ligne [3,4] ; son indice 0 vaut 3.",
    },
  ],

  "donnees-tables": [
    {
      q: "Comment représente-t-on naturellement une table en Python ?",
      choices: [
        "une chaîne de caractères",
        "une liste de dictionnaires",
        "un seul tuple",
        "un entier",
      ],
      answer: 1,
      explain: "Chaque ligne est un dictionnaire ; la table est la liste de ces lignes.",
    },
    {
      q: "Dans un fichier CSV, que contient généralement la première ligne ?",
      choices: [
        "des données vides",
        "les noms des colonnes (descripteurs)",
        "la moyenne des valeurs",
        "le nom du fichier",
      ],
      answer: 1,
      explain: "La première ligne (en-tête) donne le nom des colonnes.",
    },
    {
      q: "Quel paramètre de sorted() indique la colonne de tri ?",
      choices: ["sort", "key", "order", "by"],
      answer: 1,
      explain: "key=lambda l: l['colonne'] précise la clé de tri.",
    },
    {
      q: "Filtrer une table, c'est…",
      choices: [
        "sélectionner les lignes vérifiant une condition",
        "supprimer toutes les lignes",
        "trier les colonnes",
        "convertir en image",
      ],
      answer: 0,
      explain: "On garde les enregistrements qui satisfont un critère.",
    },
    {
      q: "Combiner deux tables partageant une colonne commune s'appelle…",
      choices: ["un tri", "un filtre", "une fusion (jointure)", "une compression"],
      answer: 2,
      explain: "La jointure relie les lignes par leur valeur commune.",
    },
  ],

  "ihm-web": [
    {
      q: "Quel langage gère la STRUCTURE et le contenu d'une page ?",
      choices: ["CSS", "HTML", "JavaScript", "Python"],
      answer: 1,
      explain: "HTML = structure ; CSS = présentation ; JS = interactivité.",
    },
    {
      q: "Où sont visibles les paramètres d'une requête GET ?",
      choices: [
        "cachés dans le corps de la requête",
        "dans l'URL",
        "uniquement sur le serveur",
        "ils n'existent pas",
      ],
      answer: 1,
      explain: "GET place les paramètres dans l'URL (visibles, mémorisables).",
    },
    {
      q: "Pour envoyer un mot de passe, quelle méthode HTTP privilégier ?",
      choices: ["GET", "POST", "peu importe", "aucune"],
      answer: 1,
      explain: "POST ne place pas les données dans l'URL.",
    },
    {
      q: "Quel code s'exécute CÔTÉ CLIENT (dans le navigateur) ?",
      choices: [
        "la base de données",
        "HTML, CSS et JavaScript",
        "le traitement serveur sécurisé",
        "rien",
      ],
      answer: 1,
      explain: "Le trio HTML/CSS/JS est interprété par le navigateur du client.",
    },
    {
      q: "En CSS, que cible le sélecteur .important ?",
      choices: [
        "la balise <important>",
        "l'élément d'identifiant 'important'",
        "tous les éléments de classe 'important'",
        "le texte en gras",
      ],
      answer: 2,
      explain: "Le point désigne une classe ; le dièse (#) un identifiant.",
    },
    {
      q: "Quelle est la bonne pratique pour appliquer du CSS à tout un site ?",
      choices: [
        "un attribut style sur chaque balise",
        "un fichier externe relié par <link rel=\"stylesheet\">",
        "réécrire le CSS sur chaque page",
        "le mettre dans le <body>",
      ],
      answer: 1,
      explain: "Un fichier .css externe relié par <link> : on style tout le site depuis un seul endroit.",
    },
    {
      q: "Dans le modèle de boîte, quel espace est INTÉRIEUR (entre le contenu et la bordure) ?",
      choices: ["le margin", "le padding", "le border", "le contenu"],
      answer: 1,
      explain: "padding = espace intérieur ; margin = espace extérieur (autour de la boîte).",
    },
    {
      q: "À quoi sert principalement un cookie ?",
      choices: [
        "accélérer le processeur",
        "permettre au site de te « reconnaître » d'une requête à l'autre",
        "compiler le JavaScript",
        "chiffrer le mot de passe",
      ],
      answer: 1,
      explain: "HTTP est sans mémoire : le cookie, stocké par le navigateur et renvoyé, maintient l'état (session, panier).",
    },
    {
      q: "Que garantit le RGPD concernant les cookies de pistage ?",
      choices: [
        "ils sont interdits",
        "ton consentement est requis, avec un droit d'accès et de suppression",
        "ils sont obligatoires",
        "ils sont invisibles",
      ],
      answer: 1,
      explain: "Le RGPD impose le consentement (bandeaux cookies), l'information et des droits sur tes données.",
    },
  ],

  "architecture-os": [
    {
      q: "Dans le modèle de von Neumann, qui effectue les calculs ?",
      choices: [
        "l'unité de commande",
        "l'unité arithmétique et logique (UAL)",
        "la mémoire",
        "les entrées/sorties",
      ],
      answer: 1,
      explain: "L'UAL réalise les opérations ; l'UC décode les instructions.",
    },
    {
      q: "Quelle particularité du modèle de von Neumann ?",
      choices: [
        "programme et données partagent la même mémoire",
        "il n'a pas de mémoire",
        "il n'utilise pas le binaire",
        "il n'a qu'un seul composant",
      ],
      answer: 0,
      explain: "Le programme est stocké en mémoire, comme les données.",
    },
    {
      q: "Les processeurs sont construits à partir de…",
      choices: ["pixels", "portes logiques", "fichiers", "pages web"],
      answer: 1,
      explain: "Les portes logiques (ET, OU, NON) combinent des transistors.",
    },
    {
      q: "Quel n'est PAS un rôle du système d'exploitation ?",
      choices: [
        "gérer les processus",
        "gérer la mémoire",
        "compiler le matériel physique du CPU",
        "gérer le système de fichiers",
      ],
      answer: 2,
      explain: "L'OS pilote le matériel mais ne le fabrique pas.",
    },
    {
      q: "Que fait la commande Unix 'ls' ?",
      choices: [
        "supprime un fichier",
        "liste le contenu d'un dossier",
        "change les permissions",
        "affiche le dossier courant",
      ],
      answer: 1,
      explain: "ls = lister ; pwd affiche le dossier courant ; rm supprime.",
    },
    {
      q: "Les permissions 'rwxr-x---' en octal donnent…",
      choices: ["777", "750", "640", "700"],
      answer: 1,
      explain: "rwx=7, r-x=5, ---=0 → 750.",
    },
  ],

  "langages-prog": [
    {
      q: "Que délimite les blocs de code en Python ?",
      choices: ["les accolades { }", "l'indentation", "les points-virgules", "les parenthèses"],
      answer: 1,
      explain: "Python utilise l'indentation (espaces) pour structurer les blocs.",
    },
    {
      q: "Quelle boucle utiliser quand le nombre de répétitions est connu d'avance ?",
      choices: ["while", "for", "if", "def"],
      answer: 1,
      explain: "for (boucle bornée) ; while pour un nombre inconnu (non bornée).",
    },
    {
      q: "Que renvoie range(2, 6) ?",
      choices: ["2,3,4,5,6", "2,3,4,5", "3,4,5,6", "2,4,6"],
      answer: 1,
      explain: "range(a,b) s'arrête à b−1 : 2,3,4,5.",
    },
    {
      q: "À quoi sert le mot-clé return dans une fonction ?",
      choices: [
        "afficher à l'écran",
        "renvoyer une valeur à l'appelant",
        "créer une variable",
        "arrêter le programme entier",
      ],
      answer: 1,
      explain: "return fournit le résultat ; print ne fait qu'afficher.",
    },
    {
      q: "Un assert qui échoue indique…",
      choices: [
        "que tout va bien",
        "qu'un test n'est pas vérifié (bug probable)",
        "la fin du programme",
        "un commentaire",
      ],
      answer: 1,
      explain: "assert vérifie une propriété ; s'il échoue, il lève une erreur.",
    },
    {
      q: "Un programme qui tourne mais donne un mauvais résultat contient une erreur…",
      choices: ["de syntaxe", "d'exécution", "de logique", "d'indentation"],
      answer: 2,
      explain: "Erreur de logique : le code s'exécute mais le raisonnement est faux.",
    },
  ],

  "algorithmique": [
    {
      q: "La recherche dichotomique nécessite que le tableau soit…",
      choices: ["vide", "trié", "très grand", "composé d'entiers"],
      answer: 1,
      explain: "Elle compare au milieu : cela n'a de sens que sur un tableau trié.",
    },
    {
      q: "Pour ~1 000 000 d'éléments, combien d'étapes environ pour la dichotomie ?",
      choices: ["1 000 000", "1 000", "20", "1"],
      answer: 2,
      explain: "log₂(1 000 000) ≈ 20 : on divise par deux à chaque étape.",
    },
    {
      q: "Quel est le coût (complexité) du tri par sélection ?",
      choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      answer: 3,
      explain: "Deux boucles imbriquées → de l'ordre de n² comparaisons.",
    },
    {
      q: "Un algorithme glouton…",
      choices: [
        "essaie toutes les solutions possibles",
        "fait le meilleur choix local sans revenir en arrière",
        "donne toujours la solution optimale",
        "ne se termine jamais",
      ],
      answer: 1,
      explain: "Choix localement optimal, sans retour arrière ; pas toujours optimal globalement.",
    },
    {
      q: "Pour prouver qu'une boucle while se termine, on utilise…",
      choices: [
        "un invariant",
        "un variant (entier positif qui décroît)",
        "un assert",
        "un commentaire",
      ],
      answer: 1,
      explain: "Le variant décroît strictement et reste positif : la boucle finit donc.",
    },
    {
      q: "Que renvoie une recherche séquentielle si l'élément est absent ?",
      choices: ["0", "-1 (par convention)", "le dernier indice", "une erreur"],
      answer: 1,
      explain: "On convient souvent de renvoyer −1 pour 'non trouvé'.",
    },
  ],

  "histoire-informatique": [
    {
      q: "Qui est considérée comme l'autrice du premier algorithme destiné à une machine ?",
      choices: ["Grace Hopper", "Ada Lovelace", "Marie Curie", "Margaret Hamilton"],
      answer: 1,
      explain: "Ada Lovelace, en 1843, pour la machine analytique de Babbage.",
    },
    {
      q: "Quel mathématicien définit en 1936 un modèle théorique du calcul ?",
      choices: ["George Boole", "Alan Turing", "Blaise Pascal", "Gottfried Leibniz"],
      answer: 1,
      explain: "La machine de Turing fonde la notion de calculabilité.",
    },
    {
      q: "Quelle invention de 1947 remplace les tubes à vide ?",
      choices: ["le circuit intégré", "le transistor", "le microprocesseur", "le disque dur"],
      answer: 1,
      explain: "Le transistor (Bell Labs) : plus petit, fiable et économe.",
    },
    {
      q: "Qui invente le World Wide Web, et en quelle année (environ) ?",
      choices: [
        "Steve Jobs, 1976",
        "Tim Berners-Lee, 1989–1991",
        "Alan Turing, 1936",
        "Bill Gates, 1995",
      ],
      answer: 1,
      explain: "Tim Berners-Lee au CERN : HTML, HTTP et URL.",
    },
    {
      q: "À quoi correspond la Pascaline (1642) ?",
      choices: [
        "un langage de programmation",
        "une machine mécanique à additionner",
        "le premier ordinateur électronique",
        "un protocole réseau",
      ],
      answer: 1,
      explain: "Blaise Pascal conçoit une machine à additionner à roues dentées.",
    },
    {
      q: "Que dit, en substance, la loi de Moore (1965) ?",
      choices: [
        "le prix des ordinateurs double chaque année",
        "le nombre de transistors par puce double environ tous les deux ans",
        "Internet double de taille chaque mois",
        "les logiciels deviennent deux fois plus lents",
      ],
      answer: 1,
      explain: "Elle décrit la miniaturisation rapide des circuits intégrés.",
    },
  ],

  "reseaux": [
    {
      q: "À quoi sert un protocole de communication ?",
      choices: [
        "à accélérer l'ordinateur",
        "à fixer des règles communes pour que les machines se comprennent",
        "à stocker des fichiers",
        "à afficher des images",
      ],
      answer: 1,
      explain: "Un protocole (ex. TCP/IP) est un ensemble de règles communes d'échange.",
    },
    {
      q: "Pourquoi découpe-t-on un message en paquets numérotés ?",
      choices: [
        "pour le rendre illisible",
        "pour pouvoir le réordonner et ne renvoyer que ce qui est perdu",
        "pour le compresser",
        "pour le chiffrer",
      ],
      answer: 1,
      explain: "Le numéro permet de remettre les paquets dans l'ordre ; on ne renvoie qu'un paquet perdu.",
    },
    {
      q: "Que fait un routeur ?",
      choices: [
        "il affiche les pages web",
        "il choisit le chemin des paquets vers leur destination",
        "il stocke les mots de passe",
        "il fabrique les adresses IP",
      ],
      answer: 1,
      explain: "Le routage consiste à transmettre les paquets de proche en proche vers la destination.",
    },
    {
      q: "Les paquets d'un message arrivent dans le désordre. Que fait-on ?",
      choices: [
        "on jette le message",
        "on les retrie grâce à leur numéro",
        "on redemande tout depuis le début",
        "rien, c'est impossible à corriger",
      ],
      answer: 1,
      explain: "On trie les paquets par leur numéro pour reconstituer le message d'origine.",
    },
    {
      q: "Si un numéro de paquet est totalement absent à l'arrivée, c'est…",
      choices: ["un doublon", "un paquet perdu", "un routeur en panne définitive", "une adresse IP"],
      answer: 1,
      explain: "Un numéro manquant signale une perte : le protocole TCP peut redemander ce paquet.",
    },
  ],
};
