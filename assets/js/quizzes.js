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
    {
      q: "Que vaut len(set([3, 1, 3, 2, 1])) ?",
      choices: ["3", "5", "2", "1"],
      answer: 0,
      explain: "Un ensemble (set) élimine les doublons : il reste {1, 2, 3}, soit 3 éléments.",
    },
    {
      q: "Dans un comptage d'occurrences, que fait occ.get(c, 0) ?",
      choices: [
        "il supprime la clé c du dictionnaire",
        "il ajoute 0 à la clé c",
        "il renvoie la valeur associée à c, ou 0 si la clé n'existe pas encore",
        "il provoque une erreur si c est absent",
      ],
      answer: 2,
      explain: "get(clé, défaut) évite le KeyError : au premier passage, le compteur part de 0. occ[c] = occ.get(c, 0) + 1.",
    },
    {
      q: "Après a, b = 2, 7 puis a, b = b, a, que valent a et b ?",
      choices: ["a = 2 et b = 7", "a = 7 et b = 2", "a = 7 et b = 7", "erreur : il faut une variable temporaire"],
      answer: 1,
      explain: "L'affectation multiple évalue d'abord toute la partie droite (7, 2) puis affecte : les valeurs sont échangées sans variable temporaire.",
    },
    {
      q: "Quelle structure choisir pour associer à chaque élève sa note, avec un accès direct par le nom ?",
      choices: ["une liste", "un tuple", "un ensemble (set)", "un dictionnaire"],
      answer: 3,
      explain: "Le dictionnaire associe clé → valeur (nom → note). Liste/tuple : accès par position ; set : pas d'association, ni doublons.",
    },
    {
      q: "Après a = [1, 2, 3] puis b = a puis b.append(4), que vaut a ?",
      choices: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "erreur"],
      answer: 0,
      explain: "b = a ne copie PAS la liste : a et b sont deux noms (alias) de la MÊME liste. Pour copier : b = list(a) ou a[:].",
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
    {
      q: "Après lecture d'un CSV, pourquoi faut-il écrire int(ligne['age']) avant de comparer les âges ?",
      choices: [
        "pour arrondir les âges",
        "parce que int() trie la colonne",
        "parce que le CSV ne contient que des CHAÎNES : sans conversion, '9' > '10' !",
        "ce n'est pas nécessaire, Python convertit tout seul",
      ],
      answer: 2,
      explain: "Tout ce qui sort d'un fichier CSV est du texte. La comparaison de chaînes est alphabétique : '9' > '10'. Il faut convertir avec int() ou float().",
    },
    {
      q: "Que fait sorted(table, key=lambda l: l['note'], reverse=True) ?",
      choices: [
        "il trie la table par note DÉCROISSANTE (de la plus grande à la plus petite)",
        "il inverse les colonnes de la table",
        "il supprime les mauvaises notes",
        "il trie par note croissante",
      ],
      answer: 0,
      explain: "key indique la colonne de tri ; reverse=True inverse l'ordre : les plus grandes notes d'abord.",
    },
    {
      q: "Deux lignes STRICTEMENT identiques apparaissent dans une table. Pourquoi est-ce un problème ?",
      choices: [
        "la table devient illisible par Python",
        "les comptages et statistiques sont faussés (l'enregistrement est compté deux fois)",
        "le fichier CSV ne peut plus être enregistré",
        "ce n'est jamais un problème",
      ],
      answer: 1,
      explain: "Un doublon fausse effectifs, moyennes et jointures. Avant de traiter une table, on la nettoie : on détecte et on élimine les doublons.",
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
    {
      q: "En JavaScript moderne, pourquoi préférer let et const à var ?",
      choices: [
        "var n'existe plus dans les navigateurs",
        "let et const sont plus rapides à exécuter",
        "leur portée est limitée au bloc { }, ce qui évite des bugs (var « déborde » de son bloc)",
        "var ne peut stocker que des nombres",
      ],
      answer: 2,
      explain: "let/const ont une portée de bloc et const interdit la réaffectation ; var, à portée de fonction, provoque des surprises. var fonctionne encore, mais on l'évite.",
    },
    {
      q: "En JavaScript, quelle est la différence entre == et === ?",
      choices: [
        "=== compare valeur ET type, sans conversion automatique ('5' === 5 est faux)",
        "== est une affectation, === une comparaison",
        "aucune, ce sont des synonymes",
        "=== ne marche que sur les chaînes",
      ],
      answer: 0,
      explain: "== convertit les types avant de comparer ('5' == 5 est vrai !) ; === exige même type et même valeur. On privilégie ===.",
    },
    {
      q: "Que fait bouton.addEventListener('click', maFonction) ?",
      choices: [
        "il exécute maFonction immédiatement",
        "il demande d'exécuter maFonction À CHAQUE clic sur le bouton",
        "il supprime le bouton après un clic",
        "il crée un nouveau bouton",
      ],
      answer: 1,
      explain: "addEventListener « abonne » la fonction à l'événement : elle sera rappelée à chaque clic. Attention : on passe maFonction sans parenthèses.",
    },
    {
      q: "Quelle instruction sélectionne l'élément d'id 'titre' ?",
      choices: [
        "document.querySelector('titre')",
        "document.getElementById('#titre')",
        "document.querySelector('.titre')",
        "document.querySelector('#titre') ou document.getElementById('titre')",
      ],
      answer: 3,
      explain: "querySelector utilise la syntaxe CSS (# pour un id, . pour une classe) ; getElementById prend le nom de l'id SANS #.",
    },
    {
      q: "Pour afficher un texte saisi par l'utilisateur dans la page, pourquoi préférer textContent à innerHTML ?",
      choices: [
        "textContent traite la saisie comme du texte brut : une balise <script> injectée ne sera pas exécutée",
        "innerHTML est plus lent, c'est tout",
        "textContent met le texte en gras",
        "innerHTML n'existe que dans Firefox",
      ],
      answer: 0,
      explain: "innerHTML interprète la chaîne comme du HTML : un utilisateur malveillant peut injecter du code (attaque XSS). textContent affiche le texte tel quel.",
    },
    {
      q: "Le DOM (Document Object Model), c'est…",
      choices: [
        "le fichier CSS de la page",
        "le serveur qui héberge la page",
        "la représentation de la page en ARBRE d'objets, que JavaScript peut parcourir et modifier",
        "un langage de programmation",
      ],
      answer: 2,
      explain: "Le navigateur transforme le HTML en un arbre (éléments imbriqués = branches) ; JS modifie cet arbre, et l'affichage suit.",
    },
    {
      q: "Qu'est-ce que le format JSON ?",
      choices: [
        "un langage pour styliser les pages",
        "un format texte d'échange de données (clés/valeurs), très proche des dictionnaires Python",
        "un protocole de routage des paquets",
        "une base de données",
      ],
      answer: 1,
      explain: "JSON (JavaScript Object Notation) sert à échanger des données structurées entre client et serveur : {\"nom\": \"Ada\", \"age\": 17}.",
    },
    {
      q: "Un formulaire est vérifié en JavaScript côté client. Le serveur peut-il se dispenser de revérifier ?",
      choices: [
        "oui, le JavaScript garantit la validité",
        "oui, si le site est en HTTPS",
        "oui, sauf pour les mots de passe",
        "non : le client peut désactiver ou contourner le JS, le serveur doit TOUJOURS revalider",
      ],
      answer: 3,
      explain: "La validation client n'est que du confort (message immédiat). Une requête peut être forgée sans passer par la page : seule la vérification serveur protège.",
    },
    {
      q: "Sur le Wi-Fi public d'un café, tu envoies ton mot de passe par un formulaire en POST à un site en http:// (sans « s »). Que se passe-t-il ?",
      choices: [
        "Aucun risque : avec POST, le mot de passe est dans le corps de la requête et non dans l'URL, donc personne ne peut le lire",
        "Le navigateur chiffre automatiquement tout formulaire qui contient un champ mot de passe",
        "Le mot de passe circule en clair sur le réseau : quelqu'un connecté au même Wi-Fi peut l'intercepter et le lire",
        "Seul le serveur destinataire peut le lire, puisque la requête lui est adressée",
      ],
      answer: 2,
      explain: "POST évite seulement que le mot de passe apparaisse dans l'URL : sans HTTPS, tout le contenu de la requête circule en clair et un intermédiaire (Wi-Fi public, FAI) peut le lire. Seul le « s » de https (transmission chiffrée, cadenas dans le navigateur) rend l'échange illisible pour lui.",
    },
    {
      q: "Un site de vente en ligne affiche le cadenas (HTTPS) dans la barre d'adresse. Que garantit-il exactement ?",
      choices: [
        "La transmission entre ton navigateur et le serveur est chiffrée, et le serveur est bien celui du domaine affiché",
        "Le site est honnête : le cadenas n'est accordé qu'aux commerçants sérieux et vérifiés",
        "Tes données seront bien protégées une fois enregistrées sur le serveur du site",
        "La page n'utilise aucun cookie de pistage et ne collecte aucune trace",
      ],
      answer: 0,
      explain: "HTTPS protège le trajet des données (chiffrement de la transmission + certificat qui identifie le serveur), pas ce que le site en fait ensuite : un site frauduleux ou mal sécurisé peut très bien être en HTTPS. Le cadenas ne remplace pas ton esprit critique.",
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
    {
      q: "Avec mem = [7, 5], que vaut l'accumulateur après LOAD 0 puis ADD 1 ?",
      choices: ["7", "5", "12", "2"],
      answer: 2,
      explain: "LOAD 0 charge mem[0] = 7 dans l'accumulateur ; ADD 1 lui ajoute mem[1] = 5 → ACC = 12.",
    },
    {
      q: "Un capteur (sonde de température, caméra…) est un périphérique…",
      choices: [
        "d'ENTRÉE : il envoie une information du monde réel VERS la machine",
        "de SORTIE : il reçoit les ordres de la machine",
        "de stockage permanent",
        "de calcul, comme l'UAL",
      ],
      answer: 0,
      explain: "Un capteur mesure et informe la machine (entrée) ; un actionneur (moteur, haut-parleur…) reçoit un ordre et agit (sortie).",
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
    {
      q: "Quel équipement relie plusieurs réseaux entre eux et choisit, de proche en proche, le chemin des paquets ?",
      choices: ["l'écran", "le serveur web", "le disque dur", "le routeur"],
      answer: 3,
      explain: "Le routeur consulte sa table de routage et transmet chaque paquet au voisin le plus adapté ; les routeurs relient les réseaux entre eux.",
    },
    {
      q: "Quelle est la bonne répartition des rôles entre IP et TCP ?",
      choices: [
        "IP achemine les paquets vers la bonne machine ; TCP fiabilise (ordre, pertes, retransmission)",
        "TCP achemine les paquets ; IP corrige les erreurs",
        "IP et TCP font exactement la même chose",
        "TCP sert uniquement à chiffrer les données",
      ],
      answer: 0,
      explain: "IP = adressage et routage, sans garantie de livraison ; TCP = numérotation, accusés de réception et retransmission.",
    },
    {
      q: "Dans le protocole du bit alterné, à quoi sert l'ACK (accusé de réception) ?",
      choices: [
        "à chiffrer le paquet",
        "à donner l'adresse IP du destinataire",
        "à confirmer à l'émetteur que le paquet est bien arrivé : sans ACK avant le timeout, il retransmet",
        "à accélérer la transmission",
      ],
      answer: 2,
      explain: "L'émetteur attend un ACK portant le bit du paquet envoyé. S'il ne le reçoit pas à temps (timeout), il renvoie le même paquet.",
    },
    {
      q: "Bit alterné : pourquoi l'alternance 0/1 permet-elle de distinguer un doublon d'un nouveau paquet ?",
      choices: [
        "parce que le bit chiffre le contenu",
        "un paquet reçu avec le MÊME bit que le précédent est une retransmission (doublon) ; un bit différent annonce un NOUVEAU paquet",
        "parce que 0 signifie perdu et 1 signifie arrivé",
        "l'alternance ne sert qu'à compter les paquets",
      ],
      answer: 1,
      explain: "Le récepteur attend le bit opposé au dernier paquet accepté : même bit → doublon (ACK renvoyé mais paquet ignoré) ; bit attendu → nouveau paquet.",
    },
  ],
};
