/* =====================================================================
   COMPLÉMENTS PÉDAGOGIQUES PAR THÈME
   Pour chaque thème : fiche résumé, erreurs fréquentes, exercices
   progressifs (facile / moyen / défi) et un mini-défi (mission).
   THEME_EXTRAS[themeId] = { resume[], erreurs[], exercices[], defi{} }
   exercice = { niveau, enonce, code?, solution? }  (solution = corrigé masqué)
   ===================================================================== */

const THEME_EXTRAS = {
  "donnees-base": {
    resume: [
      "n bits permettent de coder 2ⁿ valeurs ; 1 octet = 8 bits = 256 valeurs.",
      "Conversions : binaire ↔ décimal (puissances de 2 / divisions), hexa = 4 bits par chiffre.",
      "Entiers négatifs : complément à deux ; sur 8 bits, plage −128 à +127.",
      "Les flottants sont des approximations : 0.1 + 0.2 ≠ 0.3, on ne teste pas l'égalité stricte.",
      "Caractères : ASCII (128), Unicode/UTF-8 ; ord() et chr() en Python.",
    ],
    erreurs: [
      "Confondre bit (b) et octet (o) : un débit de 100 Mb/s ≈ 12,5 Mo/s.",
      "Oublier que 2⁴ = 16 (un chiffre hexa = 4 bits, pas 8).",
      "Comparer deux flottants avec == : préférer une tolérance (abs(a-b) < 1e-9).",
    ],
    exercices: [
      { niveau: "facile", enonce: "Sans ordinateur, convertis le binaire 1011 en décimal. Détaille les poids, puis vérifie avec Python.",
        code: `print(0b1011)          # vérification directe\nprint(int("1011", 2))  # depuis une chaîne`,
        solution: "Poids 8 4 2 1 ; bits 1 0 1 1 → on garde 8 + 0 + 2 + 1 = 11. Donc 1011₂ = 11₁₀." },
      { niveau: "facile", enonce: "Combien de valeurs différentes peut-on coder sur 5 bits ? Et sur 12 bits  ? (réponds avec la formule 2ⁿ)",
        code: `print(2**5)\nprint(2**12)`,
        solution: "5 bits → 2⁵ = 32 valeurs (0 à 31). 12 bits → 2¹² = 4096 valeurs (0 à 4095)." },
      { niveau: "facile", enonce: "Convertis 38 en binaire par divisions successives (écris le tableau des restes), puis vérifie.",
        code: `print(bin(38))   # attendu : 0b100110`,
        solution: "38→0, 19→1, 9→1, 4→0, 2→0, 1→1 ; restes lus de bas en haut = 100110. Vérif : 32+4+2 = 38. ✔" },
      { niveau: "moyen", enonce: "Écris nb_bits(v) qui renvoie le nombre minimal de bits pour coder v valeurs différentes.",
        code: `def nb_bits(v):\n    n = 0\n    while 2**n < v:\n        n += 1\n    return n\n\nprint(nb_bits(256), nb_bits(1000))`,
        solution: "On augmente n tant que 2ⁿ < v. 256 → 8 (2⁸ = 256). 1000 → 10 (2⁹ = 512 < 1000 ≤ 2¹⁰ = 1024)." },
      { niveau: "moyen", enonce: "Convertis l'octet 11001010 en hexadécimal en le découpant en deux quartets de 4 bits, puis donne sa valeur décimale.",
        code: `print(hex(0b11001010))  # vérif hexa\nprint(0b11001010)       # vérif décimal`,
        solution: "1100 = C (12), 1010 = A (10) → CA. Décimal : 12×16 + 10 = 202. Donc 11001010₂ = CA₁₆ = 202₁₀." },
      { niveau: "moyen", enonce: "Une couleur web s'écrit #RRVVBB en hexa. Décompose #1E90FF en ses trois valeurs (rouge, vert, bleu) entre 0 et 255.",
        code: `c = "1E90FF"\nr = int(c[0:2], 16)\nv = int(c[2:4], 16)\nb = int(c[4:6], 16)\nprint(r, v, b)`,
        solution: "1E = 30, 90 = 144, FF = 255 → R=30, V=144, B=255 (un bleu « dodger »)." },
      { niveau: "défi", enonce: "Écris add8(a, b) qui additionne deux entiers comme sur un octet non signé (0..255), et montre le débordement de 250 + 10.",
        code: `def add8(a, b):\n    return (a + b) % 256\n\nprint(add8(250, 10))   # ?\nprint(add8(255, 1))    # ?`,
        solution: "Le modulo 256 simule le « retour à zéro ». 250 + 10 = 260 → 260 % 256 = 4. 255 + 1 = 0 (overflow)." },
      { niveau: "défi", enonce: "Pourquoi 0.1 + 0.2 == 0.3 vaut-il False ? Écris une fonction proche(a, b) qui compare deux flottants correctement.",
        code: `def proche(a, b, eps=1e-9):\n    return abs(a - b) < eps\n\nprint(0.1 + 0.2 == 0.3)        # False\nprint(proche(0.1 + 0.2, 0.3))  # True`,
        solution: "Les flottants sont des approximations : 0.1 et 0.2 n'ont pas d'écriture binaire exacte, leur somme vaut 0.3000…04. On ne compare jamais des flottants avec == : on teste si leur écart est plus petit qu'une tolérance eps." },
      { niveau: "défi", enonce: "Chiffre de César : écris cesar(texte, decalage) qui décale chaque lettre majuscule dans l'alphabet (avec retour de Z à A) en utilisant ord et chr.",
        code: `def cesar(texte, d):\n    res = ""\n    for c in texte:\n        if "A" <= c <= "Z":\n            res += chr((ord(c) - ord("A") + d) % 26 + ord("A"))\n        else:\n            res += c\n    return res\n\nprint(cesar("NSI", 3))        # QVL\nprint(cesar(cesar("NSI", 3), -3))  # NSI`,
        solution: "On ramène la lettre dans 0..25 (ord(c) - ord('A')), on ajoute le décalage modulo 26 (pour boucler après Z), puis on revient à un caractère. 'N'(13)+3 = 16 = 'Q', etc. Déchiffrer = décaler de -d." },
    ],
    defi: { titre: "Mission : le décodeur secret",
      html: "Décode le message ASCII suivant : [72, 73, 32, 78, 83, 73]. Écris une fonction qui transforme une liste de codes en texte.",
      code: `codes = [72, 73, 32, 78, 83, 73]\nprint("".join(chr(c) for c in codes))   # ?` },
  },

  "types-construits": {
    resume: [
      "Tuple = ordonné, immuable, entre parenthèses ; pratique pour renvoyer plusieurs valeurs.",
      "Liste = ordonnée, modifiable, indexée à partir de 0 ; len, append, t[i]=v.",
      "Compréhension : [expr for x in iterable if condition].",
      "Matrice = liste de listes ; accès m[ligne][colonne].",
      "Dictionnaire = paires clé/valeur ; accès par la clé d['nom'].",
    ],
    erreurs: [
      "Indices : le premier est 0, le dernier est len(t)-1 (ou t[-1]).",
      "Modifier un tuple : impossible (t[0]=9 lève une erreur).",
      "Confondre liste [..] et dictionnaire {clé: valeur}.",
    ],
    exercices: [
      { niveau: "facile", enonce: "Crée la liste des carrés de 1 à 5 par compréhension.",
        code: `carres = [n*n for n in range(1, 6)]\nprint(carres)`,
        solution: "[1, 4, 9, 16, 25]." },
      { niveau: "moyen", enonce: "À partir de notes = [12,15,9,18], calcule la moyenne avec une boucle.",
        code: `notes = [12, 15, 9, 18]\ntotal = 0\nfor n in notes:\n    total += n\nprint(total / len(notes))`,
        solution: "Moyenne = 54 / 4 = 13.5." },
      { niveau: "défi", enonce: "Construis un dictionnaire {lettre: nombre d'occurrences} pour le mot 'mississippi'.",
        code: `mot = "mississippi"\nocc = {}\nfor c in mot:\n    occ[c] = occ.get(c, 0) + 1\nprint(occ)`,
        solution: "{'m':1,'i':4,'s':4,'p':2}." },
    ],
    defi: { titre: "Mission : carnet de classe",
      html: "Modélise 3 élèves comme une liste de dictionnaires (nom, moyenne), puis affiche le nom de celui qui a la meilleure moyenne." },
  },

  "donnees-tables": {
    resume: [
      "Une table = liste de dictionnaires (1 ligne = 1 dictionnaire).",
      "CSV : fichier texte, valeurs séparées ; 1re ligne = noms de colonnes.",
      "Filtrer = compréhension avec condition ; Trier = sorted(..., key=...).",
      "Fusionner (jointure) = relier deux tables par une colonne commune.",
    ],
    erreurs: [
      "Oublier que les valeurs lues dans un CSV sont des chaînes (int(...) pour calculer).",
      "Trier sans key : compare alors des dictionnaires entiers (erreur ou tri inattendu).",
      "Modifier la table d'origine au lieu d'en construire une nouvelle.",
    ],
    exercices: [
      { niveau: "facile", enonce: "Sur la table donnée, affiche les noms des personnes nées avant 1910.",
        code: `table = [{"nom":"Turing","an":1912},{"nom":"Hopper","an":1906}]\nprint([l["nom"] for l in table if l["an"] < 1910])`,
        solution: "['Hopper']." },
      { niveau: "moyen", enonce: "Trie la table par année croissante et affiche l'ordre des noms.",
        code: `table = [{"nom":"Turing","an":1912},{"nom":"Lovelace","an":1815}]\nprint([l["nom"] for l in sorted(table, key=lambda l: l["an"])])`,
        solution: "['Lovelace', 'Turing']." },
      { niveau: "défi", enonce: "Calcule l'année de naissance moyenne de la table.",
        code: `table = [{"an":1912},{"an":1815},{"an":1906}]\nprint(sum(l["an"] for l in table) / len(table))`,
        solution: "(1912+1815+1906)/3 ≈ 1877.7." },
    ],
    defi: { titre: "Mission : enquête express",
      html: "Voir le projet « Enquête sur un fichier CSV » : charge un CSV simulé et réponds à 3 questions (filtre, tri, moyenne)." },
  },

  "ihm-web": {
    resume: [
      "HTML = structure, CSS = présentation, JavaScript = interactivité.",
      "Client (navigateur) ↔ serveur : requête / réponse (HTTP).",
      "GET = paramètres dans l'URL ; POST = données dans le corps.",
      "JavaScript réagit aux événements (addEventListener).",
      "Sécurité : ne jamais faire confiance aux données du client.",
    ],
    erreurs: [
      "Croire que la validation JavaScript suffit : la sécurité se fait côté serveur.",
      "Confondre classe CSS (.nom) et identifiant (#nom).",
      "Mettre un mot de passe en GET (visible dans l'URL).",
    ],
    exercices: [
      { niveau: "facile", enonce: "Décompose l'URL 'page?ville=Beyrouth&jour=lundi' en un dictionnaire de paramètres.",
        code: `url = "page?ville=Beyrouth&jour=lundi"\nchemin, req = url.split("?")\nparams = dict(c.split("=") for c in req.split("&"))\nprint(params)`,
        solution: "{'ville':'Beyrouth','jour':'lundi'}." },
      { niveau: "moyen", enonce: "Sur papier : écris le HTML d'un formulaire avec un champ texte et un bouton 'Envoyer'.",
        solution: "<form><input type='text'><button>Envoyer</button></form>." },
      { niveau: "défi", enonce: "Voir le projet « Mini-site d'inscription » : ajoute une validation qui refuse un champ vide.",
        solution: "Utiliser e.preventDefault() et tester if (nom === '')." },
    ],
    defi: { titre: "Mission : maquette de page club",
      html: "En îlot, dessine sur papier la page d'accueil du club NSI : titre, image, menu, bouton d'inscription. Indique pour chaque zone si c'est HTML, CSS ou JS." },
  },

  "architecture-os": {
    resume: [
      "Modèle de von Neumann : UC, UAL (= CPU), mémoire, entrées/sorties.",
      "Programme et données partagent la même mémoire.",
      "Portes logiques (ET, OU, NON) construites avec des transistors.",
      "L'OS gère processus, mémoire, fichiers, périphériques, sécurité.",
      "Fichiers en arborescence ; chemins absolu (/...) ou relatif (. / ..).",
    ],
    erreurs: [
      "Confondre l'UC (commande) et l'UAL (calculs).",
      "Penser que l'OS fabrique le matériel : il le pilote seulement.",
      "Oublier que .. remonte au dossier parent.",
    ],
    exercices: [
      { niveau: "facile", enonce: "Traduis les permissions 'rwxr-x---' en notation octale.",
        solution: "rwx=7, r-x=5, ---=0 → 750." },
      { niveau: "moyen", enonce: "Écris la fonction qui convertit une chaîne de droits ('r-x') en valeur octale.",
        code: `def vers_octal(rwx):\n    val = {'r':4,'w':2,'x':1}\n    return sum(val.get(c,0) for c in rwx)\n\nprint(vers_octal("rwx"), vers_octal("r-x"))`,
        solution: "rwx → 7, r-x → 5." },
      { niveau: "défi", enonce: "Voir le projet « Mission terminal » : retrouve secret.txt avec pwd, ls, cd, cat.",
        solution: "Chemin : /serveur/prive/secret.txt." },
    ],
    defi: { titre: "Mission : demi-additionneur",
      html: "Avec les portes ET, OU, NON, construis (en Python) un demi-additionneur : somme = XOR, retenue = ET.",
      code: `def XOR(a,b): return (a or b) and not (a and b)\ndef ET(a,b): return a and b\nfor a in (0,1):\n    for b in (0,1):\n        print(a, b, int(XOR(a,b)), int(ET(a,b)))` },
  },

  "langages-prog": {
    resume: [
      "Affectation = ; types : int, float, str, bool ; typage dynamique.",
      "Conditions if/elif/else ; l'indentation délimite les blocs.",
      "for = boucle bornée (range), while = boucle non bornée.",
      "Fonctions : paramètres + return ; spécifier (docstring + assert).",
      "Bibliothèques : import + lire la documentation (help).",
    ],
    erreurs: [
      "Oublier les deux-points : ou mal indenter un bloc.",
      "range(n) s'arrête à n-1 (pas n).",
      "Confondre print (affiche) et return (renvoie une valeur).",
      "Boucle while infinie : la condition ne devient jamais fausse.",
    ],
    exercices: [
      { niveau: "facile", enonce: "Écris une fonction est_pair(n) qui renvoie True si n est pair.",
        code: `def est_pair(n):\n    return n % 2 == 0\n\nprint(est_pair(10), est_pair(7))`,
        solution: "Tester n % 2 == 0." },
      { niveau: "moyen", enonce: "Avec une boucle for, calcule la somme des entiers de 1 à 100.",
        code: `total = 0\nfor k in range(1, 101):\n    total += k\nprint(total)`,
        solution: "5050." },
      { niveau: "défi", enonce: "Écris mention(note) (Très bien ≥16, Bien ≥14, AB ≥12, Passable ≥10, sinon Insuffisant) avec son jeu de tests assert.",
        code: `def mention(n):\n    if n >= 16: return "Très bien"\n    elif n >= 14: return "Bien"\n    elif n >= 12: return "Assez bien"\n    elif n >= 10: return "Passable"\n    return "Insuffisant"\n\nassert mention(18) == "Très bien"\nassert mention(9) == "Insuffisant"\nprint("OK")`,
        solution: "Cascade de if/elif/else, du plus haut seuil au plus bas." },
    ],
    defi: { titre: "Mission : devine le nombre",
      html: "Écris un programme qui, pour un nombre secret, compte combien d'essais une recherche par dichotomie met pour le trouver entre 1 et 100." },
  },

  "algorithmique": {
    resume: [
      "Parcours séquentiel : recherche, max, somme en O(n).",
      "Recherche dichotomique : tableau trié, O(log n).",
      "Tris par sélection et insertion : O(n²).",
      "Glouton : meilleur choix local, sans retour arrière.",
      "kNN : classer selon la classe majoritaire des k plus proches voisins.",
      "Coût (complexité) : O(1), O(log n), O(n), O(n²) ; terminaison = variant.",
    ],
    erreurs: [
      "Appliquer la dichotomie sur un tableau NON trié.",
      "Confondre indice (position) et valeur de l'élément.",
      "Oublier l'échange tab[i], tab[j] = tab[j], tab[i] dans un tri.",
      "Croire que le glouton donne toujours l'optimum.",
    ],
    exercices: [
      { niveau: "facile", enonce: "Écris une recherche séquentielle qui renvoie l'indice d'une cible (ou -1).",
        code: `def recherche(tab, cible):\n    for i in range(len(tab)):\n        if tab[i] == cible:\n            return i\n    return -1\n\nprint(recherche([4,8,15,16], 15))`,
        solution: "Indice 2." },
      { niveau: "moyen", enonce: "Implémente la dichotomie sur un tableau trié et teste-la.",
        code: `def dicho(tab, c):\n    g, d = 0, len(tab)-1\n    while g <= d:\n        m = (g+d)//2\n        if tab[m] == c: return m\n        elif tab[m] < c: g = m+1\n        else: d = m-1\n    return -1\n\nprint(dicho([2,5,8,12,16,23], 16))`,
        solution: "Indice 4." },
      { niveau: "défi", enonce: "Voir le projet kNN : code distance + vote pour classer un point mystère.",
        solution: "Trier par distance, garder k voisins, voter la classe majoritaire." },
    ],
    defi: { titre: "Mission : duel d'algorithmes",
      html: "Compte et compare le nombre d'étapes de la recherche séquentielle et de la dichotomie pour n = 10, 1000, 1 000 000. Conclus sur O(n) vs O(log n)." },
  },

  "histoire-informatique": {
    resume: [
      "Avant l'électronique : Pascaline (1642), Leibniz (binaire), Jacquard (cartes perforées).",
      "Babbage (machine analytique) et Lovelace (1er algorithme, 1843).",
      "Fondements : Boole (1854), Turing (1936), Shannon (1937), von Neumann (1945).",
      "Matériel : transistor (1947), circuit intégré (1958), microprocesseur (1971).",
      "Réseaux et Web : ARPANET (1969), TCP/IP, Web (1989), mobile (2007), IA (2010s).",
    ],
    erreurs: [
      "Attribuer le Web à l'invention d'Internet : ce sont deux choses (Internet ≠ Web).",
      "Confondre Pascaline (mécanique) et premiers ordinateurs électroniques.",
      "Croire que l'informatique commence avec l'ordinateur (elle a des racines anciennes).",
    ],
    exercices: [
      { niveau: "facile", enonce: "Classe par ordre chronologique : Web, transistor, Pascaline, machine de Turing.",
        solution: "Pascaline (1642) → Turing (1936) → transistor (1947) → Web (1989)." },
      { niveau: "moyen", enonce: "Relie chaque notion d'un autre thème à son origine historique (binaire, algorithme, Web).",
        solution: "Binaire → Leibniz ; algorithme → Al-Khwârizmî ; Web → Berners-Lee." },
      { niveau: "défi", enonce: "Trie une frise (liste de dictionnaires) par année avec sorted.",
        code: `frise = [{"an":1971,"e":"microprocesseur"},{"an":1642,"e":"Pascaline"}]\nfor x in sorted(frise, key=lambda d: d["an"]):\n    print(x["an"], x["e"])`,
        solution: "Trier par la clé 'an'." },
    ],
    defi: { titre: "Mission : la frise vivante",
      html: "Voir les jeux du thème : reconstituez la frise en îlot, puis chaque élève relie une notion qu'il a étudiée à son inventeur." },
  },

  "reseaux": {
    resume: [
      "Réseau = machines reliées ; protocole = règles communes (TCP/IP).",
      "Message découpé en paquets numérotés, transmis indépendamment.",
      "Routage = choix du chemin des paquets via des routeurs.",
      "Désordre → on retrie ; perte → numéro manquant ; doublon → on ignore.",
    ],
    erreurs: [
      "Penser qu'un message voyage d'un seul bloc (il est découpé en paquets).",
      "Oublier le rôle du numéro de paquet pour le réordonnancement.",
      "Confondre adresse IP (machine) et numéro de paquet.",
    ],
    exercices: [
      { niveau: "facile", enonce: "Recolle ces paquets dans l'ordre : [{3,'monde'},{1,'Bonjour'},{2,'le'}].",
        code: `p = [{"n":3,"d":"monde"},{"n":1,"d":"Bonjour"},{"n":2,"d":"le"}]\nprint(" ".join(x["d"] for x in sorted(p, key=lambda x: x["n"])))`,
        solution: "« Bonjour le monde »." },
      { niveau: "moyen", enonce: "Détecte un paquet manquant dans la séquence reçue (numéros 1,2,4).",
        code: `recus = [1, 2, 4]\nmanquants = [n for n in range(1, max(recus)+1) if n not in recus]\nprint("manquants :", manquants)`,
        solution: "Il manque le paquet 3." },
      { niveau: "défi", enonce: "Voir le projet « Simulation de paquets réseau » : gère désordre, perte ET doublon.",
        solution: "Stocker dans un dictionnaire {num: data} puis vérifier les numéros manquants." },
    ],
    defi: { titre: "Mission : le réseau vivant",
      html: "En îlot, jouez le réseau : chaque élève est un routeur. Faites passer un message découpé en 4 cartes-paquets, puis brouillez l'ordre et reconstituez-le." },
  },
};
