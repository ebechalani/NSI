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
};
