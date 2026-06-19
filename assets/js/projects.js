/* =====================================================================
   PROJETS EN ÎLOTS — Première NSI
   Démarche : comprendre → réfléchir en îlot → proposer un algorithme →
   coder → tester → améliorer → présenter.
   Contenu pédagogique original rédigé d'après le programme officiel (BO).

   Globales exportées :
     PROJECT_ROLES  — rôles tournants dans le groupe
     PROJECT_GRILLE — grille d'évaluation générique sur 20 points
     FICHE_ILOT     — fiche commune « Avant de coder : réfléchir en îlot »
     PROJECTS       — tableau des 8 projets
   Chaque projet : { id, num, emoji, niveau, duree, notions[], objectif,
                     situation, phases[], roles[], code, tests, bonus,
                     corrige } (corrige = réservé enseignant, masqué).
   ===================================================================== */

/* ---------------- Rôles dans le groupe (tournants) ---------------- */
const PROJECT_ROLES = [
  { nom: "Chef de projet", emoji: "🧭", desc: "Organise le groupe, répartit le travail et gère le temps." },
  { nom: "Analyste", emoji: "🔍", desc: "Comprend le problème, reformule, propose la stratégie et l'algorithme." },
  { nom: "Développeur", emoji: "⌨️", desc: "Écrit le code sur le poste informatique à partir de l'algorithme." },
  { nom: "Testeur", emoji: "🧪", desc: "Vérifie avec des exemples, cherche les cas qui font échouer." },
  { nom: "Rapporteur", emoji: "🗣️", desc: "Note les décisions et présente la solution à l'oral." },
];

/* ---------------- Grille d'évaluation générique (/20) ---------------- */
const PROJECT_GRILLE = [
  { critere: "Compréhension du problème", points: 4, detail: "Le groupe a reformulé le problème, identifié les entrées et le résultat attendu." },
  { critere: "Algorithme proposé", points: 4, detail: "Un algorithme clair en langage naturel a été écrit avant de coder." },
  { critere: "Code fonctionnel", points: 5, detail: "Le programme s'exécute et résout le problème dans les cas prévus." },
  { critere: "Tests réalisés", points: 3, detail: "Des tests (cas simples + cas limites) ont été écrits et passent." },
  { critere: "Travail en groupe", points: 2, detail: "Les rôles ont été répartis et respectés ; entraide effective." },
  { critere: "Présentation", points: 2, detail: "La solution est présentée clairement à l'oral, démarche comprise." },
];

/* ---------------- Fiche commune « réfléchir en îlot » ---------------- */
const FICHE_ILOT = {
  titre: "Avant de coder : réfléchir en îlot",
  intro:
    "À remplir en équipe AVANT de toucher au clavier. On ne code bien que ce que l'on a d'abord compris et décrit.",
  champs: [
    "Nom du projet",
    "Membres du groupe (et rôle de chacun)",
    "Quel est le problème à résoudre ? (en une phrase)",
    "Quelles sont les données d'entrée ?",
    "Quel résultat doit-on obtenir ?",
    "Quelle stratégie propose le groupe ?",
    "Quel algorithme en langage naturel ? (étapes numérotées)",
    "Quels tests allons-nous utiliser ? (exemple → résultat attendu)",
    "Qui fait quoi dans le groupe ?",
    "Quelles difficultés avons-nous rencontrées ?",
    "Comment avons-nous amélioré notre solution ?",
  ],
};

/* ---------------- Les 8 projets ---------------- */
const PROJECTS = [
  /* ===================== Projet 1 ===================== */
  {
    id: "coffre-binaire",
    num: 1,
    emoji: "🔐",
    titre: "Le coffre binaire",
    niveau: "facile",
    duree: "1 à 2 séances",
    theme: "donnees-base",
    notions: ["Représentation des données", "Binaire", "Hexadécimal", "ASCII", "Fonctions Python"],
    objectif:
      "Ouvrir un coffre numérique en décodant des nombres, puis automatiser les conversions décimal ↔ binaire ↔ hexadécimal avec Python.",
    situation:
      "Un vieux coffre du club de robotique affiche un cadenas électronique. Le code est donné sous forme binaire et hexadécimale sur de petites étiquettes. Pour l'ouvrir vite la prochaine fois, le groupe doit fabriquer un convertisseur fiable.",
    phases: [
      "<strong>Réflexion en îlot</strong> : convertir à la main 3 nombres (binaire→décimal, décimal→binaire, hexa→décimal). Comparer les méthodes de chaque membre et choisir la plus sûre.",
      "<strong>Algorithme sur papier</strong> : écrire en langage naturel l'algorithme « décimal → binaire » par divisions successives, et « binaire → décimal » par puissances de 2.",
      "<strong>Codage</strong> : écrire les fonctions <code>dec_vers_bin</code>, <code>bin_vers_dec</code> et <code>hexa_vers_dec</code>.",
      "<strong>Tests</strong> : vérifier avec des cas connus (0, 1, 255, 0xFF) à l'aide de <code>assert</code>.",
      "<strong>Présentation</strong> : démontrer le coffre qui s'ouvre en convertissant le code, expliquer une conversion à la main.",
    ],
    code: `# Coffre binaire — fonctions à compléter
def bin_vers_dec(chaine):
    """Convertit une chaîne binaire ('1101') en entier décimal."""
    total = 0
    for bit in chaine:
        total = total * 2 + int(bit)
    return total

def dec_vers_bin(n):
    """Convertit un entier décimal en chaîne binaire."""
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits
        n = n // 2
    return bits

def hexa_vers_dec(chaine):
    """À COMPLÉTER : convertir 'FF' (base 16) en décimal."""
    # Astuce : int(chaine, 16) le fait, mais essayez à la main !
    return 0

# Le code du coffre est : binaire 101010, hexa 2A
print("101010 ->", bin_vers_dec("101010"))
print("42 ->", dec_vers_bin(42))
print("0xFF ->", hexa_vers_dec("FF"))`,
    tests: [
      "bin_vers_dec('0') == 0 et bin_vers_dec('1101') == 13",
      "dec_vers_bin(0) == '0' et dec_vers_bin(255) == '11111111'",
      "hexa_vers_dec('FF') == 255 et hexa_vers_dec('2A') == 42",
    ],
    bonus:
      "Ajouter une fonction qui décode un message ASCII : une liste de codes [78, 83, 73] doit donner « NSI » (avec chr).",
    corrige: `def hexa_vers_dec(chaine):
    chiffres = "0123456789ABCDEF"
    total = 0
    for c in chaine.upper():
        total = total * 16 + chiffres.index(c)
    return total

assert bin_vers_dec("1101") == 13
assert dec_vers_bin(255) == "11111111"
assert hexa_vers_dec("2A") == 42

# Bonus ASCII
def decode_ascii(codes):
    return "".join(chr(c) for c in codes)
assert decode_ascii([78, 83, 73]) == "NSI"
print("Tous les tests passent ✔")`,
  },

  /* ===================== Projet 2 ===================== */
  {
    id: "groupes-camp",
    num: 2,
    emoji: "🤖",
    titre: "Organiser les groupes du camp robotique",
    niveau: "moyen",
    duree: "2 séances",
    theme: "types-construits",
    notions: ["Listes", "Dictionnaires", "Conditions", "Boucles", "Algorithme glouton"],
    objectif:
      "À partir d'une liste d'élèves (âge, niveau, activité préférée), créer automatiquement des groupes équilibrés.",
    situation:
      "Le camp robotique accueille 12 inscrits. Il faut former des équipes équilibrées : ni un groupe de débutants seul, ni tous les grands ensemble. Le groupe décide des règles « justes », puis programme la répartition.",
    phases: [
      "<strong>Réflexion en îlot</strong> : qu'est-ce qu'un groupe « équilibré » ? Décider 2 ou 3 règles (ex. mélanger les niveaux, équilibrer l'âge moyen).",
      "<strong>Algorithme sur papier</strong> : décrire une stratégie gloutonne : trier par niveau, puis distribuer un par un dans chaque groupe (façon « cartes que l'on donne »).",
      "<strong>Codage</strong> : écrire <code>former_groupes(eleves, nb_groupes)</code> qui renvoie une liste de listes.",
      "<strong>Tests</strong> : vérifier que chaque élève est placé une seule fois et que les tailles sont proches.",
      "<strong>Présentation</strong> : justifier les règles choisies et montrer les groupes obtenus.",
    ],
    code: `eleves = [
    {"nom": "Ada",   "age": 15, "niveau": 3, "activite": "drone"},
    {"nom": "Alan",  "age": 16, "niveau": 1, "activite": "capteurs"},
    {"nom": "Grace", "age": 15, "niveau": 2, "activite": "drone"},
    {"nom": "Linus", "age": 16, "niveau": 3, "activite": "moteurs"},
    {"nom": "Hedy",  "age": 15, "niveau": 1, "activite": "capteurs"},
    {"nom": "Tim",   "age": 16, "niveau": 2, "activite": "moteurs"},
]

def former_groupes(eleves, nb_groupes):
    """Répartit les élèves dans nb_groupes équipes équilibrées."""
    # 1) trier par niveau décroissant
    tries = sorted(eleves, key=lambda e: e["niveau"], reverse=True)
    # 2) distribuer un par un dans chaque groupe (serpentin)
    groupes = [[] for _ in range(nb_groupes)]
    for i, e in enumerate(tries):
        groupes[i % nb_groupes].append(e["nom"])
    return groupes

for i, g in enumerate(former_groupes(eleves, 2)):
    print("Groupe", i + 1, ":", g)`,
    tests: [
      "Chaque élève apparaît dans exactement un groupe.",
      "Avec 6 élèves et 2 groupes, on obtient deux groupes de 3.",
      "Les niveaux sont répartis (pas tous les niveaux 3 dans le même groupe).",
    ],
    bonus:
      "Calculer l'âge moyen de chaque groupe et l'afficher pour vérifier l'équilibre.",
    corrige: `def ages_moyens(eleves, groupes_noms):
    par_nom = {e["nom"]: e for e in eleves}
    for i, g in enumerate(groupes_noms):
        moy = sum(par_nom[n]["age"] for n in g) / len(g)
        print(f"Groupe {i+1} : âge moyen = {moy:.1f}")

g = former_groupes(eleves, 2)
ages_moyens(eleves, g)
# Vérif : tous les élèves placés une seule fois
places = [n for grp in g for n in grp]
assert sorted(places) == sorted(e["nom"] for e in eleves)
print("Répartition correcte ✔")`,
  },

  /* ===================== Projet 3 ===================== */
  {
    id: "enquete-csv",
    num: 3,
    emoji: "🕵️",
    titre: "Enquête sur un fichier CSV",
    niveau: "moyen",
    duree: "2 séances",
    theme: "donnees-tables",
    notions: ["Traitement de données en tables", "CSV", "Filtrage", "Tri", "Fusion"],
    objectif:
      "Analyser un fichier CSV d'inscriptions : filtrer, trier, calculer des statistiques et fusionner deux tables.",
    situation:
      "Le secrétariat fournit un fichier des inscriptions au club (nom, classe, activité, note de motivation). Le groupe joue les enquêteurs : répondre à des questions précises à partir des données.",
    phases: [
      "<strong>Réflexion en îlot</strong> : lister 4 questions auxquelles on veut répondre (ex. « qui en 1NSI ? », « moyenne des notes ? »).",
      "<strong>Algorithme sur papier</strong> : pour chaque question, dire si c'est un filtre, un tri ou un calcul, et sur quelle colonne.",
      "<strong>Codage</strong> : charger le CSV en liste de dictionnaires, puis répondre aux questions.",
      "<strong>Tests</strong> : vérifier le nombre de lignes chargées et un filtre simple.",
      "<strong>Présentation</strong> : présenter les réponses comme un rapport d'enquête.",
    ],
    code: `import csv, io

# Fichier CSV simulé (séparateur ;)
donnees = """nom;classe;activite;note
Ada;1NSI;drone;17
Alan;1NSI;capteurs;12
Grace;1G2;drone;19
Linus;1NSI;moteurs;14
Hedy;1G2;capteurs;9
Tim;1NSI;moteurs;16"""

table = list(csv.DictReader(io.StringIO(donnees), delimiter=";"))
print("Lignes chargées :", len(table))

# Filtrer : les 1NSI
nsi = [l for l in table if l["classe"] == "1NSI"]
print("1NSI :", [l["nom"] for l in nsi])

# Trier par note décroissante
classement = sorted(table, key=lambda l: int(l["note"]), reverse=True)
print("Classement :", [l["nom"] for l in classement])

# Statistique : moyenne des notes
moyenne = sum(int(l["note"]) for l in table) / len(table)
print("Note moyenne :", round(moyenne, 2))`,
    tests: [
      "len(table) == 6 (toutes les lignes chargées).",
      "Le filtre 1NSI renvoie 4 élèves.",
      "Le premier du classement est Grace (note 19).",
    ],
    bonus:
      "Fusionner avec une 2e table {classe → professeur} pour afficher, à côté de chaque élève, le nom de son professeur principal.",
    corrige: `profs = {"1NSI": "M. Turing", "1G2": "Mme Hopper"}
for l in table:
    l["prof"] = profs[l["classe"]]
for l in table[:3]:
    print(l["nom"], "->", l["prof"])

assert len(nsi) == 4
assert sorted(table, key=lambda l: int(l["note"]), reverse=True)[0]["nom"] == "Grace"
print("Enquête validée ✔")`,
  },

  /* ===================== Projet 4 ===================== */
  {
    id: "mini-site",
    num: 4,
    emoji: "📝",
    titre: "Mini-site d'inscription",
    niveau: "moyen",
    duree: "2 à 3 séances",
    theme: "ihm-web",
    notions: ["HTML", "CSS", "JavaScript", "Formulaires", "GET/POST", "Événements"],
    objectif:
      "Créer une page d'inscription pour le club NSI/robotique, avec une validation simple en JavaScript.",
    situation:
      "Le club veut une page d'inscription en ligne. Le groupe dessine d'abord la maquette sur papier (champs, bouton), puis code la page et empêche l'envoi si un champ est vide.",
    phases: [
      "<strong>Réflexion en îlot</strong> : quels champs ? (nom, classe, activité…) Quelles vérifications avant d'envoyer ?",
      "<strong>Maquette sur papier</strong> : dessiner la page, placer les champs, le bouton, les messages d'erreur.",
      "<strong>Codage</strong> : écrire le HTML du formulaire, un peu de CSS, et un écouteur d'événement JavaScript qui valide.",
      "<strong>Tests</strong> : laisser un champ vide → message d'erreur ; tout remplir → message de succès.",
      "<strong>Présentation</strong> : montrer la page et expliquer la différence GET / POST.",
    ],
    langue: "html",
    code: `<!-- À ouvrir dans un navigateur (cette cellule n'exécute pas le HTML,
     mais sert de modèle à recopier dans un fichier .html). -->
<form id="inscription">
  <label>Nom : <input type="text" id="nom"></label>
  <label>Activité :
    <select id="activite">
      <option>drone</option><option>capteurs</option><option>moteurs</option>
    </select>
  </label>
  <button type="submit">S'inscrire</button>
  <p id="message"></p>
</form>

<script>
  const form = document.getElementById("inscription");
  form.addEventListener("submit", function (e) {
    e.preventDefault();                 // empêche l'envoi automatique
    const nom = document.getElementById("nom").value.trim();
    const msg = document.getElementById("message");
    if (nom === "") {
      msg.textContent = "❌ Le nom est obligatoire.";
    } else {
      msg.textContent = "✅ Inscription enregistrée pour " + nom + " !";
    }
  });
</script>`,
    tests: [
      "Champ nom vide → le message affiche une erreur.",
      "Champ nom rempli → message de succès avec le nom.",
      "Le bouton ne recharge pas la page (preventDefault).",
    ],
    bonus:
      "Vérifier aussi que le nom contient au moins 2 caractères, et changer la couleur du message (rouge/vert) avec une classe CSS.",
    corrige:
      "Côté pédagogie : faire distinguer client (validation JS, confort) et serveur (validation obligatoire, sécurité). GET = paramètres dans l'URL (recherche) ; POST = données dans le corps (inscription, mot de passe). La validation JavaScript améliore l'expérience mais ne remplace JAMAIS un contrôle côté serveur.",
  },

  /* ===================== Projet 5 ===================== */
  {
    id: "mission-terminal",
    num: 5,
    emoji: "💻",
    titre: "Mission terminal",
    niveau: "facile",
    duree: "1 séance",
    theme: "architecture-os",
    notions: ["Systèmes d'exploitation", "Fichiers", "Chemins", "Commandes Unix"],
    objectif:
      "Retrouver un fichier secret dans une arborescence en utilisant les commandes pwd, ls, cd, mkdir, cat.",
    situation:
      "Un fichier <code>secret.txt</code> est caché quelque part dans l'arborescence d'un serveur. Le groupe doit le localiser en se déplaçant de dossier en dossier, uniquement avec des commandes.",
    phases: [
      "<strong>Réflexion en îlot</strong> : dessiner l'arborescence comme un arbre, repérer racine, dossiers, fichiers.",
      "<strong>Algorithme sur papier</strong> : écrire la suite de commandes pour aller de la racine jusqu'au fichier.",
      "<strong>Codage / simulation</strong> : utiliser le simulateur ci-dessous (Python) pour exécuter pwd, ls, cd, cat.",
      "<strong>Tests</strong> : retrouver le contenu du fichier secret.",
      "<strong>Présentation</strong> : expliquer la différence entre chemin absolu et relatif, et le rôle de <code>..</code>.",
    ],
    code: `# Mini-simulateur de terminal (arborescence en dictionnaire)
fs = {
    "/": ["maison", "serveur"],
    "/maison": ["photos"],
    "/serveur": ["public", "prive"],
    "/serveur/public": ["index.html"],
    "/serveur/prive": ["secret.txt"],
}
fichiers = {"/serveur/prive/secret.txt": "Le code du robot est 4042."}

courant = "/"
def pwd():            print(courant)
def ls():             print("  ".join(fs.get(courant, [])))
def cd(nom):
    global courant
    if nom == "..":
        courant = "/" + "/".join(courant.strip("/").split("/")[:-1])
        courant = courant if courant != "/" * len(courant) else "/"
    else:
        courant = (courant.rstrip("/") + "/" + nom) or "/"
def cat(nom):
    chemin = courant.rstrip("/") + "/" + nom
    print(fichiers.get(chemin, "(fichier introuvable)"))

# À toi de jouer : modifie ces appels pour atteindre secret.txt
pwd(); ls()
cd("serveur"); ls()
cd("prive"); ls()
cat("secret.txt")`,
    tests: [
      "Depuis la racine, ls affiche « maison serveur ».",
      "Après cd serveur puis cd prive, ls affiche « secret.txt ».",
      "cat secret.txt affiche le message caché.",
    ],
    bonus:
      "Ajouter une commande mkdir qui crée un nouveau dossier dans l'arborescence, puis vérifier avec ls.",
    corrige:
      "Chemin absolu de la cible : /serveur/prive/secret.txt. Suite de commandes minimale depuis la racine : cd serveur → cd prive → cat secret.txt. Insister sur : pwd = où suis-je, ls = ce qu'il y a ici, cd .. = remonter d'un cran. Le contenu attendu : « Le code du robot est 4042. »",
  },

  /* ===================== Projet 6 ===================== */
  {
    id: "paquets-reseau",
    num: 6,
    emoji: "📡",
    titre: "Simulation de paquets réseau",
    niveau: "défi",
    duree: "2 séances",
    theme: "reseaux",
    notions: ["Réseaux", "Protocoles", "Paquets", "Tri", "Listes de dictionnaires"],
    objectif:
      "Reconstituer un message dont les paquets sont arrivés dans le désordre, puis gérer les pertes et les doublons.",
    situation:
      "Sur un réseau, un message est découpé en paquets numérotés qui voyagent indépendamment. Ils arrivent dans le désordre. Le groupe joue le rôle du destinataire qui doit remettre le message dans l'ordre.",
    phases: [
      "<strong>Réflexion en îlot</strong> : pourquoi découper un message en paquets ? Que faut-il pour les remettre dans l'ordre (un numéro !) ?",
      "<strong>Algorithme sur papier</strong> : décrire comment trier les paquets par numéro et recoller les morceaux.",
      "<strong>Codage</strong> : trier la liste de paquets puis reconstruire le texte.",
      "<strong>Tests</strong> : message reconstruit correct ; cas d'un paquet en double.",
      "<strong>Présentation</strong> : expliquer ce qui se passe si un paquet est perdu (détection, redemande).",
    ],
    code: `# Les paquets arrivent dans le désordre
paquets = [
    {"num": 3, "data": "monde"},
    {"num": 1, "data": "Bonjour"},
    {"num": 4, "data": "!"},
    {"num": 2, "data": "le"},
]

def reconstruire(paquets):
    """Remet les paquets dans l'ordre et recolle le message."""
    ordonnes = sorted(paquets, key=lambda p: p["num"])
    return " ".join(p["data"] for p in ordonnes)

print(reconstruire(paquets))   # Bonjour le monde !`,
    tests: [
      "reconstruire(paquets) renvoie « Bonjour le monde ! »",
      "Avec un paquet en double (même num), le message reste correct.",
      "Avec un numéro manquant, on détecte qu'il manque un paquet.",
    ],
    bonus:
      "Extension : détecter un paquet PERDU (un numéro manquant dans la séquence) et un DOUBLON (numéro répété), et l'afficher.",
    corrige: `def reconstruire_robuste(paquets):
    vus = {}
    for p in paquets:
        vus[p["num"]] = p["data"]          # un doublon écrase : pas de répétition
    attendus = range(1, max(vus) + 1)
    manquants = [n for n in attendus if n not in vus]
    if manquants:
        print("⚠️ Paquets perdus :", manquants)
    return " ".join(vus[n] for n in sorted(vus))

p2 = paquets + [{"num": 2, "data": "le"}]   # doublon
print(reconstruire_robuste(p2))
assert reconstruire(paquets) == "Bonjour le monde !"
print("OK ✔")`,
  },

  /* ===================== Projet 7 ===================== */
  {
    id: "recherche-comparee",
    num: 7,
    emoji: "⚖️",
    titre: "Recherche séquentielle vs dichotomique",
    niveau: "moyen",
    duree: "1 à 2 séances",
    theme: "algorithmique",
    notions: ["Algorithmique", "Recherche", "Complexité", "Coût", "Comparaison d'algorithmes"],
    objectif:
      "Comparer deux algorithmes de recherche en comptant le nombre d'étapes pour différentes tailles de données.",
    situation:
      "Le groupe doit retrouver un numéro dans un annuaire trié. Faut-il tout lire ligne par ligne, ou couper en deux à chaque fois ? On mesure pour décider.",
    phases: [
      "<strong>Réflexion en îlot</strong> : jouer « devine le nombre » entre 1 et 100. Compter les coups en cherchant au hasard vs en coupant en deux.",
      "<strong>Algorithme sur papier</strong> : écrire les deux algorithmes (séquentiel, dichotomique).",
      "<strong>Codage</strong> : coder les deux fonctions en comptant les comparaisons.",
      "<strong>Tests</strong> : vérifier qu'elles trouvent le bon indice ; comparer les compteurs.",
      "<strong>Présentation</strong> : montrer un tableau du nombre d'étapes selon la taille (10, 1000, 1 000 000).",
    ],
    code: `def recherche_seq(tab, cible):
    """Renvoie (indice, nb_etapes)."""
    etapes = 0
    for i in range(len(tab)):
        etapes += 1
        if tab[i] == cible:
            return i, etapes
    return -1, etapes

def dichotomie(tab, cible):
    """tab trié. Renvoie (indice, nb_etapes)."""
    g, d, etapes = 0, len(tab) - 1, 0
    while g <= d:
        etapes += 1
        m = (g + d) // 2
        if tab[m] == cible:
            return m, etapes
        elif tab[m] < cible:
            g = m + 1
        else:
            d = m - 1
    return -1, etapes

tab = list(range(0, 1000, 2))   # 0,2,4,... trié
print("séquentielle :", recherche_seq(tab, 998))
print("dichotomique :", dichotomie(tab, 998))`,
    tests: [
      "Les deux fonctions renvoient le même indice pour une valeur présente.",
      "Pour 500 éléments, la dichotomie fait ≤ 9 étapes, la séquentielle peut en faire 500.",
      "Recherche d'une valeur absente → indice -1.",
    ],
    bonus:
      "Tracer (ou afficher) le nombre d'étapes pour des tailles 10, 100, 1000, 10000 et conclure sur O(n) vs O(log n).",
    corrige: `for n in [10, 100, 1000, 10000]:
    tab = list(range(n))
    _, e_seq = recherche_seq(tab, n - 1)   # pire cas séquentiel
    _, e_dic = dichotomie(tab, n - 1)
    print(f"n={n:>6} | séquentiel={e_seq:>6} | dichotomie={e_dic}")
# Conclusion : séquentiel ~ n (linéaire) ; dichotomie ~ log2(n).`,
  },

  /* ===================== Projet 8 ===================== */
  {
    id: "knn",
    num: 8,
    emoji: "🎯",
    titre: "Classer des objets avec les k plus proches voisins",
    niveau: "défi",
    duree: "2 à 3 séances",
    theme: "algorithmique",
    notions: ["Algorithmique", "Données", "Distance", "k plus proches voisins (kNN)"],
    objectif:
      "Classer automatiquement un objet inconnu selon deux critères, en s'inspirant de ses voisins les plus proches.",
    situation:
      "On dispose de fruits décrits par deux mesures (ex. largeur, hauteur) et leur étiquette (pomme / banane). Un fruit mystère arrive : à quelle catégorie appartient-il ? Le groupe place les points sur une grille, puis automatise.",
    phases: [
      "<strong>Réflexion en îlot</strong> : placer les points connus sur une grille papier, poser le point mystère, l'entourer de ses voisins.",
      "<strong>Algorithme sur papier</strong> : « calculer la distance à chaque point, garder les k plus proches, voter la classe majoritaire ».",
      "<strong>Codage</strong> : coder la distance, le tri par distance, le vote.",
      "<strong>Tests</strong> : un point évident doit recevoir la bonne classe ; tester k = 1 et k = 3.",
      "<strong>Présentation</strong> : expliquer le rôle de k et ce qui se passe s'il est trop petit ou trop grand.",
    ],
    code: `# Données : (x, y, classe)
donnees = [
    (1, 1, "pomme"), (1.5, 1.2, "pomme"), (2, 1, "pomme"),
    (5, 4, "banane"), (5.5, 4.2, "banane"), (6, 3.8, "banane"),
]

def distance(a, b):
    """Distance entre deux points (x, y)."""
    return ((a[0] - b[0])**2 + (a[1] - b[1])**2) ** 0.5

def knn(donnees, point, k=3):
    """Renvoie la classe majoritaire parmi les k plus proches voisins."""
    voisins = sorted(donnees, key=lambda d: distance(d, point))[:k]
    classes = [v[2] for v in voisins]
    # vote majoritaire
    return max(set(classes), key=classes.count)

mystere = (5.2, 4.0)
print("Le fruit mystère est une :", knn(donnees, mystere, k=3))`,
    tests: [
      "Un point près des pommes est classé « pomme ».",
      "Un point près des bananes est classé « banane ».",
      "knn fonctionne pour k = 1 et k = 3.",
    ],
    bonus:
      "Ajouter une 3e catégorie (ex. citron) et tester un point à la frontière entre deux groupes : observer comment k change la décision.",
    corrige: `assert knn(donnees, (1.2, 1.1), k=3) == "pomme"
assert knn(donnees, (5.4, 4.1), k=3) == "banane"
assert knn(donnees, (1.2, 1.1), k=1) == "pomme"
print("kNN validé ✔")
# Pédagogie : k trop petit -> sensible au bruit ; k trop grand -> on
# mélange des classes éloignées. On prend souvent k impair pour éviter
# les égalités de vote.`,
  },
];
