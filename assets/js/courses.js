/* =====================================================================
   COURS — Première NSI
   Contenu pédagogique original rédigé d'après le programme officiel
   (Bulletin officiel spécial n°1 du 22 janvier 2019, classe de Première,
   spécialité « Numérique et Sciences Informatiques »).
   Chaque thème reprend les "capacités attendues" du BO.
   ===================================================================== */

const COURSES = [
  /* ============================================================= 1 */
  {
    id: "donnees-base",
    num: 2,
    emoji: "🔢",
    title: "Représentation des données : types et valeurs de base",
    intro:
      "Tout, dans un ordinateur, est représenté par des suites de 0 et de 1. Ce thème montre comment on code les nombres entiers, les nombres à virgule, les booléens et les caractères.",
    capacites: [
      "Passer de la représentation d'une base dans une autre (binaire, décimal, hexadécimal).",
      "Évaluer le nombre de bits nécessaires pour écrire un entier, ou un nombre de valeurs.",
      "Représenter un entier relatif (complément à deux).",
      "Calculer sur des nombres entiers et observer les phénomènes de débordement.",
      "Comprendre les limites de la représentation des nombres flottants (norme IEEE 754).",
      "Utiliser l'algèbre de Boole : opérateurs et, ou, non ; tables de vérité.",
      "Connaître le codage des caractères (ASCII, Unicode, UTF-8).",
    ],
    sections: [
      {
        title: "Le bit, l'octet et les unités",
        html: `
        <p>Un <strong>bit</strong> (<em>binary digit</em>) est la plus petite unité d'information : il vaut <code>0</code> ou <code>1</code>. Un <strong>octet</strong> (<em>byte</em>) est un groupe de <strong>8 bits</strong>.</p>
        <p>Avec <em>n</em> bits, on peut représenter <strong>2<sup>n</sup></strong> valeurs différentes. Par exemple, un octet permet 2<sup>8</sup> = 256 combinaisons (de 0 à 255).</p>
        <table>
          <tr><th>Unité</th><th>Valeur</th></tr>
          <tr><td>1 octet (o)</td><td>8 bits</td></tr>
          <tr><td>1 kilooctet (ko)</td><td>1000 octets (kio = 1024 o)</td></tr>
          <tr><td>1 mégaoctet (Mo)</td><td>1000 ko</td></tr>
          <tr><td>1 gigaoctet (Go)</td><td>1000 Mo</td></tr>
        </table>
        <p class="note">⚠️ Attention à ne pas confondre <strong>bit</strong> (b) et <strong>octet</strong> (o). Un débit Internet de « 100 Mb/s » correspond à environ 12,5 Mo/s.</p>`,
      },
      {
        title: "La numération binaire et la conversion de bases",
        html: `
        <p>En base 10 (décimal), on utilise 10 chiffres (0 à 9). En base 2 (binaire), seulement deux : 0 et 1. La position d'un chiffre indique une puissance de la base.</p>
        <p>Exemple : le nombre binaire <code>1101</code> vaut :</p>
        <p style="text-align:center">1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = <strong>13</strong></p>
        <h3>Décimal → binaire (divisions successives)</h3>
        <p>On divise par 2 et on lit les restes de bas en haut. Pour 13 : 13→1, 6→0, 3→1, 1→1 ⇒ <code>1101</code>.</p>
        <h3>L'hexadécimal (base 16)</h3>
        <p>On utilise 16 symboles : 0-9 puis A=10, B=11, C=12, D=13, E=14, F=15. Un chiffre hexadécimal représente exactement 4 bits, ce qui rend les conversions avec le binaire très simples. Exemple : <code>FF</code> = 255 = <code>11111111</code>.</p>`,
        code: `# Python convertit facilement entre bases
n = 13
print("binaire   :", bin(n))   # 0b1101
print("hexa      :", hex(n))   # 0xd
print("octal     :", oct(n))

# Lire une écriture binaire ou hexa
print("0b1101 =", 0b1101)
print("0xFF   =", 0xFF)

# Conversion inverse avec int(chaine, base)
print(int("1101", 2), int("FF", 16))`,
      },
      {
        title: "Les entiers relatifs : le complément à deux",
        html: `
        <p>Comment coder un nombre <strong>négatif</strong> sans signe « − » ? On utilise le <strong>complément à deux</strong>. Sur 8 bits, le bit de poids fort indique le signe.</p>
        <p><strong>Méthode</strong> pour coder −5 sur 8 bits :</p>
        <ol>
          <li>Écrire +5 : <code>0000 0101</code></li>
          <li>Inverser tous les bits : <code>1111 1010</code></li>
          <li>Ajouter 1 : <code>1111 1011</code></li>
        </ol>
        <p>Sur 8 bits on couvre ainsi les entiers de <strong>−128 à +127</strong>. Le grand avantage : l'addition fonctionne sans cas particulier pour les négatifs.</p>`,
        code: `def complement_a_deux(n, bits=8):
    """Renvoie l'écriture binaire de n en complément à deux."""
    if n < 0:
        n = (1 << bits) + n      # 2**bits + n
    return format(n, '0{}b'.format(bits))

print(" 5 ->", complement_a_deux(5))
print("-5 ->", complement_a_deux(-5))
print("-1 ->", complement_a_deux(-1))   # 11111111
print("min ->", complement_a_deux(-128))`,
      },
      {
        title: "Débordement (overflow)",
        html: `
        <p>Quand le résultat d'un calcul dépasse la capacité du nombre de bits utilisés, on obtient un <strong>débordement</strong> : le résultat « tourne ». En Python, les entiers sont de taille illimitée, mais ce n'est pas le cas dans la plupart des langages (C, Java...) ni dans le matériel.</p>`,
        code: `# Simulation d'un entier non signé sur 8 bits (0..255)
def add8(a, b):
    return (a + b) % 256

print("255 + 1 =", add8(255, 1))   # déborde -> 0
print("200 + 100 =", add8(200, 100))

# En Python pur, pas de limite :
print(2**100)`,
      },
      {
        title: "Les nombres à virgule flottante (IEEE 754)",
        html: `
        <p>Les nombres réels sont approchés par des <strong>flottants</strong> (type <code>float</code>), codés selon la norme <strong>IEEE 754</strong> : un signe, un exposant et une mantisse. Comme la mémoire est finie, beaucoup de nombres n'ont pas d'écriture exacte en binaire.</p>
        <p class="warnbox">C'est pourquoi <code>0.1 + 0.2</code> ne donne pas exactement <code>0.3</code> ! Il ne faut jamais tester l'égalité stricte entre deux flottants.</p>`,
        code: `print(0.1 + 0.2)              # 0.30000000000000004
print(0.1 + 0.2 == 0.3)      # False !

# Bonne pratique : comparer à une tolérance près
def proche(a, b, eps=1e-9):
    return abs(a - b) < eps

print(proche(0.1 + 0.2, 0.3))   # True`,
      },
      {
        title: "L'algèbre de Boole",
        html: `
        <p>Un <strong>booléen</strong> n'a que deux valeurs : <code>True</code> (Vrai) ou <code>False</code> (Faux). On les combine avec trois opérateurs logiques de base.</p>
        <table>
          <tr><th>a</th><th>b</th><th>a et b (and)</th><th>a ou b (or)</th><th>non a (not)</th></tr>
          <tr><td>F</td><td>F</td><td>F</td><td>F</td><td>V</td></tr>
          <tr><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td></tr>
          <tr><td>V</td><td>F</td><td>F</td><td>V</td><td>F</td></tr>
          <tr><td>V</td><td>V</td><td>V</td><td>V</td><td>F</td></tr>
        </table>
        <p>Ces opérateurs sont à la base des circuits électroniques (portes logiques, thème 5).</p>`,
        code: `for a in (False, True):
    for b in (False, True):
        print(a, b, "| and =", a and b, "| or =", a or b)

print("not True =", not True)`,
      },
      {
        title: "Le codage des caractères",
        html: `
        <p>Les caractères sont eux aussi des nombres. La table <strong>ASCII</strong> (1960s) code 128 caractères sur 7 bits (lettres latines, chiffres, ponctuation). Insuffisant pour les langues du monde, elle a été remplacée par <strong>Unicode</strong>, qui attribue un numéro (<em>code point</em>) à plus de 140 000 caractères. <strong>UTF-8</strong> est l'encodage le plus répandu : il code chaque caractère sur 1 à 4 octets et reste compatible avec l'ASCII.</p>`,
        code: `print(ord('A'))     # 65  : code du caractère
print(chr(97))      # 'a' : caractère du code
print(ord('é'))     # 233 (Unicode)
print(ord('😀'))    # 128512

# La table ASCII des majuscules
for c in "NSI":
    print(c, "->", ord(c))`,
      },
    ],
  },

  /* ============================================================= 2 */
  {
    id: "types-construits",
    num: 3,
    emoji: "🧱",
    title: "Représentation des données : types construits",
    intro:
      "À partir des types de base, on assemble des structures plus riches : p-uplets (tuples), tableaux (listes) et dictionnaires. Elles permettent d'organiser des données complexes.",
    capacites: [
      "Écrire une fonction renvoyant un p-uplet (tuple) de valeurs.",
      "Construire un tableau (liste) par compréhension.",
      "Itérer sur les éléments d'un tableau.",
      "Manipuler des tableaux de tableaux.",
      "Construire une donnée structurée à l'aide d'un dictionnaire (paires clé/valeur).",
      "Itérer sur les éléments, les clés ou les valeurs d'un dictionnaire.",
    ],
    sections: [
      {
        title: "Les p-uplets (tuples)",
        html: `
        <p>Un <strong>tuple</strong> est une séquence <strong>ordonnée</strong> et <strong>non modifiable</strong> (immuable) de valeurs, écrite entre parenthèses. On l'utilise pour regrouper des données qui vont ensemble (ex. des coordonnées).</p>
        <p>Une fonction peut renvoyer plusieurs valeurs en les regroupant dans un tuple.</p>`,
        code: `point = (3, 5)          # un couple
x, y = point            # "déballage" (unpacking)
print("x =", x, "| y =", y)

def division(a, b):
    return a // b, a % b   # renvoie un tuple

q, r = division(17, 5)
print("quotient", q, "reste", r)

# Un tuple est immuable : point[0] = 9  -> ERREUR`,
      },
      {
        title: "Les tableaux (listes)",
        html: `
        <p>Une <strong>liste</strong> Python est une séquence ordonnée et <strong>modifiable</strong>. On accède aux éléments par leur <strong>indice</strong>, qui commence à <strong>0</strong>.</p>
        <ul>
          <li><code>t[0]</code> : premier élément ; <code>t[-1]</code> : dernier.</li>
          <li><code>len(t)</code> : nombre d'éléments.</li>
          <li><code>t.append(x)</code> : ajoute x à la fin.</li>
          <li><code>t[i] = v</code> : modifie l'élément d'indice i.</li>
        </ul>`,
        code: `notes = [12, 15, 9, 18, 11]
print("première note :", notes[0])
print("dernière note :", notes[-1])
print("nombre        :", len(notes))

notes.append(20)        # ajoute une note
notes[2] = 10           # corrige la 3e
print(notes)

# Parcours par élément
total = 0
for n in notes:
    total += n
print("moyenne :", total / len(notes))`,
      },
      {
        title: "La construction par compréhension",
        html: `
        <p>La <strong>compréhension de liste</strong> est une écriture concise pour construire un tableau à partir d'un autre, avec éventuellement une condition (filtre).</p>`,
        code: `# carrés des entiers de 0 à 9
carres = [n*n for n in range(10)]
print(carres)

# nombres pairs de 0 à 20
pairs = [n for n in range(21) if n % 2 == 0]
print(pairs)

# transformer une liste de noms en majuscules
noms = ["ada", "alan", "grace"]
print([nom.upper() for nom in noms])`,
      },
      {
        title: "Tableaux de tableaux (matrices)",
        html: `
        <p>Un élément de tableau peut lui-même être un tableau : on obtient une structure à deux dimensions, utile pour représenter une grille, une image ou un tableur. On accède à une case par <code>m[ligne][colonne]</code>.</p>`,
        code: `# matrice 3x3
m = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

print("élément ligne 1, colonne 2 :", m[1][2])  # 6

# parcours complet
for ligne in m:
    for valeur in ligne:
        print(valeur, end=" ")
    print()

# construire une grille 3x4 remplie de 0 par compréhension
grille = [[0 for _ in range(4)] for _ in range(3)]
print(grille)`,
      },
      {
        title: "Les dictionnaires",
        html: `
        <p>Un <strong>dictionnaire</strong> associe à chaque <strong>clé</strong> une <strong>valeur</strong> (paires clé/valeur). Contrairement aux listes, on n'accède pas par un indice numérique mais par la clé. Très pratique pour modéliser un objet avec des attributs nommés.</p>`,
        code: `eleve = {"nom": "Lovelace", "prenom": "Ada", "moyenne": 17.5}

print(eleve["nom"])            # accès par la clé
eleve["moyenne"] = 18          # modification
eleve["classe"] = "1NSI"       # ajout d'une clé

# Itérer sur clés, valeurs, ou les deux
for cle in eleve:
    print(cle, "=>", eleve[cle])

print(list(eleve.keys()))
print(list(eleve.values()))`,
      },
      {
        title: "Choisir la bonne structure",
        html: `
        <table>
          <tr><th>Besoin</th><th>Structure</th></tr>
          <tr><td>Données fixes qui vont ensemble (coordonnées)</td><td>tuple</td></tr>
          <tr><td>Collection ordonnée, modifiable, indexée</td><td>liste</td></tr>
          <tr><td>Association nom → valeur, recherche rapide par clé</td><td>dictionnaire</td></tr>
        </table>`,
      },
    ],
  },

  /* ============================================================= 3 */
  {
    id: "donnees-tables",
    num: 4,
    emoji: "📊",
    title: "Traitement de données en tables",
    intro:
      "Les données structurées (issues de fichiers CSV, de capteurs, du Web…) se présentent souvent sous forme de tables. On apprend à les charger, les rechercher, les trier et les fusionner.",
    capacites: [
      "Importer une table depuis un fichier au format CSV (texte).",
      "Rechercher les lignes d'une table vérifiant des critères.",
      "Trier une table suivant une colonne (clé).",
      "Construire une nouvelle table en combinant deux tables (fusion / jointure).",
    ],
    sections: [
      {
        title: "Qu'est-ce qu'une table de données ?",
        html: `
        <p>Une <strong>table</strong> est un ensemble de lignes (les <strong>enregistrements</strong>) décrites par les mêmes colonnes (les <strong>descripteurs</strong> ou <strong>attributs</strong>). On la représente naturellement en Python par une <strong>liste de dictionnaires</strong> : chaque dictionnaire est une ligne, ses clés sont les colonnes.</p>`,
        code: `table = [
    {"nom": "Turing",   "naissance": 1912, "pays": "UK"},
    {"nom": "Lovelace", "naissance": 1815, "pays": "UK"},
    {"nom": "Hopper",   "naissance": 1906, "pays": "USA"},
]
print("Nombre de lignes :", len(table))
print("Colonnes         :", list(table[0].keys()))
print("Première ligne   :", table[0])`,
      },
      {
        title: "Le format CSV",
        html: `
        <p>Le format <strong>CSV</strong> (<em>Comma-Separated Values</em>) est un fichier texte où chaque ligne est un enregistrement et où les valeurs sont séparées par un caractère (virgule ou point-virgule). La première ligne contient souvent les noms de colonnes.</p>
        <pre><code>nom;naissance;pays
Turing;1912;UK
Lovelace;1815;UK</code></pre>
        <p>Le module <code>csv</code> de Python permet de lire ces fichiers. Ci-dessous on simule le contenu d'un fichier avec une chaîne de texte.</p>`,
        code: `import csv, io

contenu = """nom;naissance;pays
Turing;1912;UK
Lovelace;1815;UK
Hopper;1906;USA"""

# DictReader transforme chaque ligne en dictionnaire
lecteur = csv.DictReader(io.StringIO(contenu), delimiter=";")
table = list(lecteur)

for ligne in table:
    print(ligne["nom"], "né en", ligne["naissance"])`,
      },
      {
        title: "Rechercher (filtrer) des lignes",
        html: `
        <p>Rechercher revient à <strong>sélectionner</strong> les lignes qui vérifient une condition. La compréhension de liste est idéale.</p>`,
        code: `table = [
    {"nom": "Turing",   "naissance": 1912, "pays": "UK"},
    {"nom": "Lovelace", "naissance": 1815, "pays": "UK"},
    {"nom": "Hopper",   "naissance": 1906, "pays": "USA"},
]

# Tous les UK
uk = [l for l in table if l["pays"] == "UK"]
print([l["nom"] for l in uk])

# Nés après 1900
recents = [l for l in table if l["naissance"] > 1900]
print([l["nom"] for l in recents])`,
      },
      {
        title: "Trier selon une colonne",
        html: `
        <p>La fonction <code>sorted</code> trie une table. On précise la <strong>clé de tri</strong> avec le paramètre <code>key</code>, souvent une fonction <code>lambda</code> qui extrait la colonne. <code>reverse=True</code> trie en ordre décroissant.</p>`,
        code: `table = [
    {"nom": "Turing",   "naissance": 1912},
    {"nom": "Lovelace", "naissance": 1815},
    {"nom": "Hopper",   "naissance": 1906},
]

par_annee = sorted(table, key=lambda l: l["naissance"])
print("Du plus ancien :", [l["nom"] for l in par_annee])

par_nom = sorted(table, key=lambda l: l["nom"])
print("Par ordre alpha :", [l["nom"] for l in par_nom])`,
      },
      {
        title: "Fusionner deux tables (jointure)",
        html: `
        <p>On peut <strong>combiner</strong> deux tables qui partagent une colonne commune. Par exemple, associer chaque élève à son pays grâce à un code commun. C'est le principe de la <strong>jointure</strong>, que l'on retrouvera dans les bases de données.</p>`,
        code: `personnes = [
    {"nom": "Turing", "code_pays": "UK"},
    {"nom": "Hopper", "code_pays": "US"},
]
pays = {"UK": "Royaume-Uni", "US": "États-Unis"}

# On ajoute le nom complet du pays à chaque personne
fusion = []
for p in personnes:
    ligne = dict(p)                       # copie
    ligne["pays"] = pays[p["code_pays"]]  # jointure
    fusion.append(ligne)

for l in fusion:
    print(l["nom"], "->", l["pays"])`,
      },
    ],
  },

  /* ============================================================= 4 */
  {
    id: "ihm-web",
    num: 5,
    emoji: "🌐",
    title: "Interactions homme-machine sur le Web",
    intro:
      "Le Web repose sur trois langages (HTML, CSS, JavaScript) et le protocole HTTP. On comprend comment une page est construite, mise en forme, rendue interactive, et comment un formulaire échange avec un serveur.",
    capacites: [
      "Identifier les rôles respectifs de HTML, CSS et JavaScript.",
      "Distinguer ce qui est exécuté côté client et côté serveur.",
      "Analyser et modifier le code HTML/CSS d'une page.",
      "Réagir à un événement (clic, saisie) avec JavaScript.",
      "Distinguer les requêtes HTTP GET et POST.",
      "Comprendre comment un formulaire transmet des paramètres.",
    ],
    sections: [
      {
        title: "Les trois langages du Web",
        html: `
        <p>Une page web combine trois technologies aux rôles complémentaires :</p>
        <ul>
          <li><strong>HTML</strong> — le <em>contenu</em> et la <em>structure</em> (titres, paragraphes, liens, images).</li>
          <li><strong>CSS</strong> — la <em>présentation</em> (couleurs, polices, mise en page).</li>
          <li><strong>JavaScript</strong> — l'<em>interactivité</em> (réagir aux actions de l'utilisateur).</li>
        </ul>
        <p>Analogie : HTML est le squelette, CSS l'habillage, JavaScript le comportement.</p>`,
      },
      {
        title: "Structure d'un document HTML",
        html: `
        <p>HTML organise le contenu avec des <strong>balises</strong> (<em>tags</em>), généralement par paires : une ouvrante <code>&lt;p&gt;</code> et une fermante <code>&lt;/p&gt;</code>. Une page minimale :</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Ma page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bonjour la NSI&lt;/h1&gt;
    &lt;p&gt;Mon premier &lt;strong&gt;paragraphe&lt;/strong&gt;.&lt;/p&gt;
    &lt;a href="https://eduscol.education.fr"&gt;Un lien&lt;/a&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        <p>Le <code>&lt;head&gt;</code> contient les métadonnées (titre, encodage) ; le <code>&lt;body&gt;</code> contient ce qui est affiché.</p>`,
      },
      {
        title: "La mise en forme avec CSS",
        html: `
        <p>Le CSS associe des <strong>règles de style</strong> à des éléments via des <strong>sélecteurs</strong>. Une règle : un sélecteur, puis des propriétés.</p>
        <pre><code>h1 { color: indigo; text-align: center; }
p  { font-size: 16px; line-height: 1.5; }
.important { background: yellow; }   /* classe */
#menu { border: 1px solid gray; }     /* identifiant */</code></pre>
        <p>On cible : un type de balise (<code>p</code>), une <strong>classe</strong> (<code>.important</code>, réutilisable) ou un <strong>identifiant</strong> unique (<code>#menu</code>).</p>`,
      },
      {
        title: "Client et serveur : qui exécute quoi ?",
        html: `
        <p>Le Web suit un modèle <strong>client-serveur</strong>. Le <strong>navigateur</strong> (client) envoie une <strong>requête</strong> ; le <strong>serveur</strong> renvoie une <strong>réponse</strong>.</p>
        <ul>
          <li><strong>Côté client</strong> (dans le navigateur) : HTML, CSS, JavaScript. Rapide, mais l'utilisateur peut tout voir et modifier.</li>
          <li><strong>Côté serveur</strong> : traitement des données, accès aux bases de données, vérifications de sécurité. Invisible pour l'utilisateur.</li>
        </ul>
        <p class="note">Règle de sécurité : ne jamais faire confiance aux données venant du client. Les contrôles sensibles se font <strong>côté serveur</strong>.</p>`,
      },
      {
        title: "Le protocole HTTP : GET et POST",
        html: `
        <p><strong>HTTP</strong> est le protocole de communication du Web. Deux méthodes principales pour envoyer des données via un formulaire :</p>
        <table>
          <tr><th></th><th>GET</th><th>POST</th></tr>
          <tr><td>Où vont les données</td><td>dans l'URL (visibles)</td><td>dans le corps (cachées de l'URL)</td></tr>
          <tr><td>Usage typique</td><td>recherche, navigation</td><td>connexion, envoi de mot de passe</td></tr>
          <tr><td>Peut être mis en favori</td><td>oui</td><td>non</td></tr>
        </table>
        <p>Exemple d'URL avec paramètres GET : <code>recherche?ville=Beyrouth&amp;jour=lundi</code>. Les paramètres sont des paires <code>clé=valeur</code> séparées par <code>&amp;</code>.</p>`,
        code: `# Décomposer les paramètres d'une URL (style GET)
url = "recherche?ville=Beyrouth&jour=lundi&age=15"

chemin, requete = url.split("?")
parametres = {}
for couple in requete.split("&"):
    cle, valeur = couple.split("=")
    parametres[cle] = valeur

print("Page :", chemin)
print("Paramètres :", parametres)
print("Ville demandée :", parametres["ville"])`,
      },
      {
        title: "Réagir à un événement (JavaScript)",
        html: `
        <p>JavaScript rend la page <strong>interactive</strong> en répondant à des <strong>événements</strong> : clic (<code>click</code>), survol, saisie clavier, etc. Exemple :</p>
        <pre><code>&lt;button id="b"&gt;Cliquez-moi&lt;/button&gt;
&lt;p id="msg"&gt;&lt;/p&gt;
&lt;script&gt;
  const bouton = document.getElementById("b");
  bouton.addEventListener("click", function () {
    document.getElementById("msg").textContent = "Bravo, événement reçu !";
  });
&lt;/script&gt;</code></pre>
        <p>Ce code (à exécuter dans un navigateur) attache un <em>écouteur</em> au bouton : à chaque clic, le texte du paragraphe change.</p>`,
      },
    ],
  },

  /* ============================================================= 5 */
  {
    id: "architecture-os",
    num: 6,
    emoji: "🖥️",
    title: "Architectures matérielles et systèmes d'exploitation",
    intro:
      "Comment un ordinateur est-il fait, et qu'est-ce qui le pilote ? On découvre le modèle de von Neumann, les portes logiques, le rôle du système d'exploitation et les commandes de base.",
    capacites: [
      "Décrire le modèle d'architecture de von Neumann (UC, UAL, mémoire, E/S).",
      "Réaliser des opérations logiques de base avec des portes logiques.",
      "Identifier les rôles d'un système d'exploitation.",
      "Utiliser des commandes de base en ligne de commande.",
      "Gérer les droits et permissions d'accès aux fichiers.",
      "Décrire l'organisation arborescente d'un système de fichiers.",
    ],
    sections: [
      {
        title: "Le modèle de von Neumann",
        html: `
        <p>Proposé en 1945, ce modèle décrit l'architecture de presque tous les ordinateurs actuels. Quatre composants principaux :</p>
        <ul>
          <li><strong>Unité de commande (UC)</strong> — lit et décode les instructions du programme.</li>
          <li><strong>Unité arithmétique et logique (UAL)</strong> — effectue les calculs (UC + UAL = le processeur / CPU).</li>
          <li><strong>Mémoire</strong> — stocke à la fois le programme <em>et</em> les données.</li>
          <li><strong>Entrées / sorties (E/S)</strong> — communiquent avec l'extérieur (clavier, écran, disque).</li>
        </ul>
        <p>Idée clé : programme et données partagent la même mémoire. Le processeur exécute en boucle le cycle <strong>charger → décoder → exécuter</strong>.</p>`,
      },
      {
        title: "Les portes logiques",
        html: `
        <p>Le processeur est construit à partir de <strong>transistors</strong> regroupés en <strong>portes logiques</strong>, qui réalisent les opérations booléennes du thème 1 (ET, OU, NON). En combinant des portes, on construit des circuits capables d'additionner, de comparer, de mémoriser.</p>
        <p>Exemple : un <strong>demi-additionneur</strong> additionne deux bits. La somme est donnée par un <strong>OU exclusif (XOR)</strong> et la retenue par un <strong>ET</strong>.</p>`,
        code: `# Simulation de portes logiques avec des booléens
def ET(a, b):  return a and b
def OU(a, b):  return a or b
def NON(a):    return not a
def XOR(a, b): return (a or b) and not (a and b)

def demi_additionneur(a, b):
    somme = XOR(a, b)
    retenue = ET(a, b)
    return somme, retenue

for a in (0, 1):
    for b in (0, 1):
        s, r = demi_additionneur(a, b)
        print(f"{a}+{b} -> somme={int(s)} retenue={int(r)}")`,
      },
      {
        title: "Le système d'exploitation",
        html: `
        <p>Le <strong>système d'exploitation</strong> (OS : Windows, Linux, macOS, Android…) est le logiciel qui fait l'interface entre le matériel et les applications. Ses rôles principaux :</p>
        <ul>
          <li>gérer les <strong>processus</strong> (programmes en cours d'exécution) ;</li>
          <li>gérer la <strong>mémoire</strong> ;</li>
          <li>gérer le <strong>système de fichiers</strong> (disques) ;</li>
          <li>gérer les <strong>périphériques</strong> (pilotes) ;</li>
          <li>assurer la <strong>sécurité</strong> et les droits des utilisateurs.</li>
        </ul>
        <p>Les OS libres comme <strong>GNU/Linux</strong> jouent un rôle important : code source ouvert, gratuits, très utilisés sur les serveurs.</p>`,
      },
      {
        title: "Le système de fichiers arborescent",
        html: `
        <p>Les fichiers sont organisés en une <strong>arborescence</strong> de dossiers (répertoires). On désigne un fichier par son <strong>chemin</strong> :</p>
        <ul>
          <li><strong>chemin absolu</strong> : depuis la racine, ex. <code>/home/ada/cours/nsi.py</code> ;</li>
          <li><strong>chemin relatif</strong> : depuis le dossier courant, ex. <code>cours/nsi.py</code> ;</li>
          <li><code>.</code> = dossier courant, <code>..</code> = dossier parent.</li>
        </ul>`,
      },
      {
        title: "La ligne de commande",
        html: `
        <p>Le <strong>terminal</strong> permet de piloter l'ordinateur en tapant des commandes. Quelques commandes Unix/Linux essentielles :</p>
        <table>
          <tr><th>Commande</th><th>Rôle</th></tr>
          <tr><td><code>pwd</code></td><td>afficher le dossier courant</td></tr>
          <tr><td><code>ls</code></td><td>lister le contenu d'un dossier</td></tr>
          <tr><td><code>cd dossier</code></td><td>changer de dossier</td></tr>
          <tr><td><code>mkdir nom</code></td><td>créer un dossier</td></tr>
          <tr><td><code>cp / mv / rm</code></td><td>copier / déplacer / supprimer</td></tr>
          <tr><td><code>cat fichier</code></td><td>afficher le contenu d'un fichier</td></tr>
          <tr><td><code>chmod</code></td><td>changer les permissions</td></tr>
        </table>`,
      },
      {
        title: "Droits et permissions",
        html: `
        <p>Sous Unix, chaque fichier a des <strong>permissions</strong> pour trois catégories : le <strong>propriétaire</strong>, le <strong>groupe</strong> et les <strong>autres</strong>. Trois droits possibles : <strong>r</strong> (lecture), <strong>w</strong> (écriture), <strong>x</strong> (exécution).</p>
        <p>La notation <code>rwxr-x---</code> signifie : propriétaire peut tout faire (rwx), le groupe peut lire et exécuter (r-x), les autres rien (---). En notation octale : <code>chmod 750 fichier</code>.</p>`,
        code: `# Chaque droit vaut une puissance de 2 : r=4, w=2, x=1
def permissions_vers_octal(rwx):
    valeurs = {'r': 4, 'w': 2, 'x': 1}
    total = 0
    for c in rwx:
        total += valeurs.get(c, 0)
    return total

prop   = permissions_vers_octal("rwx")  # 7
groupe = permissions_vers_octal("r-x")  # 5
autres = permissions_vers_octal("---")  # 0
print(f"chmod {prop}{groupe}{autres}")  # chmod 750`,
      },
    ],
  },

  /* ============================================================= 6 */
  {
    id: "langages-prog",
    num: 7,
    emoji: "🐍",
    title: "Langages et programmation",
    intro:
      "Le cœur de la NSI : écrire des programmes corrects. Variables, conditions, boucles, fonctions, spécification et mise au point d'un programme.",
    capacites: [
      "Utiliser l'affectation et repérer le type d'une variable.",
      "Mettre en place des instructions conditionnelles.",
      "Écrire des boucles bornées (for) et non bornées (while).",
      "Écrire une fonction avec des paramètres et une valeur de retour.",
      "Spécifier une fonction (signature, docstring, jeu de tests).",
      "Repérer et corriger des erreurs ; tester un programme.",
    ],
    sections: [
      {
        title: "Variables, affectation et types",
        html: `
        <p>Une <strong>variable</strong> est un nom qui désigne une valeur stockée en mémoire. L'<strong>affectation</strong> <code>=</code> donne une valeur à une variable. Python détermine seul le <strong>type</strong> (typage dynamique).</p>`,
        code: `age = 15            # int (entier)
taille = 1.72       # float (flottant)
nom = "Ada"         # str (chaîne de caractères)
majeur = False      # bool (booléen)

print(type(age), type(taille), type(nom), type(majeur))

# L'affectation peut réutiliser l'ancienne valeur
age = age + 1
print("Nouvel âge :", age)`,
      },
      {
        title: "Les instructions conditionnelles",
        html: `
        <p>Une <strong>condition</strong> exécute un bloc selon qu'un test est vrai ou faux : <code>if</code> / <code>elif</code> / <code>else</code>. L'<strong>indentation</strong> (les espaces en début de ligne) délimite les blocs en Python — elle est obligatoire.</p>`,
        code: `def mention(note):
    if note >= 16:
        return "Très bien"
    elif note >= 14:
        return "Bien"
    elif note >= 12:
        return "Assez bien"
    elif note >= 10:
        return "Passable"
    else:
        return "Insuffisant"

for n in [18, 13, 9]:
    print(n, "->", mention(n))`,
      },
      {
        title: "Les boucles bornées (for)",
        html: `
        <p>Une boucle <strong>bornée</strong> répète un bloc un nombre de fois <em>connu à l'avance</em>. En Python : <code>for</code> avec <code>range</code>.</p>
        <ul>
          <li><code>range(n)</code> : 0, 1, …, n−1</li>
          <li><code>range(a, b)</code> : a, …, b−1</li>
          <li><code>range(a, b, pas)</code> : avec un pas</li>
        </ul>`,
        code: `# table de multiplication de 7
for i in range(1, 11):
    print("7 x", i, "=", 7 * i)

# somme des entiers de 1 à 100
total = 0
for k in range(1, 101):
    total += k
print("Somme 1..100 =", total)`,
      },
      {
        title: "Les boucles non bornées (while)",
        html: `
        <p>Une boucle <strong>non bornée</strong> répète <em>tant qu'</em>une condition reste vraie : <code>while</code>. Le nombre de répétitions n'est pas connu d'avance. ⚠️ Il faut garantir que la condition finira par devenir fausse, sinon la boucle est <strong>infinie</strong>.</p>`,
        code: `# Combien de fois peut-on diviser 1000 par 2 ?
n = 1000
compteur = 0
while n > 1:
    n = n // 2
    compteur += 1
print("Nombre de divisions :", compteur)

# Suite de Syracuse à partir de 27
n = 27
etapes = 0
while n != 1:
    n = n // 2 if n % 2 == 0 else 3 * n + 1
    etapes += 1
print("Syracuse(27) atteint 1 en", etapes, "étapes")`,
      },
      {
        title: "Les fonctions",
        html: `
        <p>Une <strong>fonction</strong> regroupe des instructions réutilisables. Elle reçoit des <strong>paramètres</strong> et peut <strong>renvoyer</strong> un résultat avec <code>return</code>. Elle évite la répétition et structure le code.</p>`,
        code: `def est_pair(n):
    return n % 2 == 0

def maximum(a, b):
    if a > b:
        return a
    return b

print(est_pair(10), est_pair(7))
print("max :", maximum(3, 9))

# Une fonction peut en appeler une autre
def nb_pairs(liste):
    compte = 0
    for x in liste:
        if est_pair(x):
            compte += 1
    return compte

print(nb_pairs([1, 2, 3, 4, 5, 6]))`,
      },
      {
        title: "Spécifier une fonction",
        html: `
        <p><strong>Spécifier</strong> une fonction, c'est décrire ce qu'elle fait sans dire comment. On précise :</p>
        <ul>
          <li>la <strong>signature</strong> : nom, paramètres et leurs types ;</li>
          <li>une <strong>docstring</strong> : description du rôle ;</li>
          <li>les <strong>préconditions</strong> (ce qu'on suppose vrai en entrée) ;</li>
          <li>un <strong>jeu de tests</strong> avec <code>assert</code>.</li>
        </ul>`,
        code: `def moyenne(notes):
    """Renvoie la moyenne d'une liste de notes (float).
    Précondition : notes est une liste non vide de nombres.
    """
    return sum(notes) / len(notes)

# Jeu de tests : assert lève une erreur si le test échoue
assert moyenne([10, 20]) == 15
assert moyenne([12]) == 12
assert moyenne([0, 0, 0]) == 0
print("Tous les tests passent ✔")`,
      },
      {
        title: "Tester et mettre au point (débogage)",
        html: `
        <p>Un programme contient souvent des <strong>bugs</strong>. On distingue :</p>
        <ul>
          <li>les <strong>erreurs de syntaxe</strong> : le code ne s'exécute pas (oubli de <code>:</code>, parenthèse) ;</li>
          <li>les <strong>erreurs d'exécution</strong> : plantage en cours (division par zéro, mauvais indice) ;</li>
          <li>les <strong>erreurs de logique</strong> : le programme tourne mais donne un résultat faux.</li>
        </ul>
        <p>Pour les traquer : ajouter des <code>print</code> intermédiaires, écrire des tests avec <code>assert</code>, lire attentivement les messages d'erreur.</p>`,
        code: `# Ce code contient un bug de logique : à toi de le repérer.
def somme_jusqua(n):
    total = 0
    for i in range(n):     # range(n) s'arrête à n-1 !
        total += i
    return total

print("somme_jusqua(5) =", somme_jusqua(5))   # donne 10, pas 15
# Correction : range(n + 1). Modifie le code et relance.`,
      },
    ],
  },

  /* ============================================================= 7 */
  {
    id: "algorithmique",
    num: 8,
    emoji: "🧩",
    title: "Algorithmique",
    intro:
      "Un algorithme est une suite finie d'instructions résolvant un problème. On étudie les parcours, la recherche dichotomique, les tris, les algorithmes gloutons et la notion de coût (complexité).",
    capacites: [
      "Parcourir un tableau (recherche d'un élément, du maximum, calcul de moyenne).",
      "Mettre en œuvre la recherche dichotomique dans un tableau trié.",
      "Mettre en œuvre les tris par sélection et par insertion.",
      "Mettre en œuvre un algorithme glouton (ex. rendu de monnaie).",
      "Comparer le coût (nombre d'opérations) de deux algorithmes.",
      "Justifier la terminaison d'un algorithme (variant de boucle).",
    ],
    sections: [
      {
        title: "Parcours séquentiel d'un tableau",
        html: `
        <p>Beaucoup d'algorithmes consistent à <strong>parcourir</strong> un tableau du début à la fin pour en extraire une information : un maximum, une somme, la présence d'un élément.</p>`,
        code: `def recherche(tab, cible):
    """Recherche séquentielle : renvoie l'indice de cible, ou -1."""
    for i in range(len(tab)):
        if tab[i] == cible:
            return i
    return -1

def maximum(tab):
    m = tab[0]
    for x in tab:
        if x > m:
            m = x
    return m

donnees = [4, 8, 15, 16, 23, 42]
print("indice de 16 :", recherche(donnees, 16))
print("indice de 99 :", recherche(donnees, 99))
print("maximum      :", maximum(donnees))`,
      },
      {
        title: "La recherche dichotomique",
        html: `
        <p>Si le tableau est <strong>trié</strong>, on peut chercher bien plus vite. La <strong>recherche dichotomique</strong> compare la cible à l'élément du <em>milieu</em> et élimine la moitié du tableau à chaque étape.</p>
        <p>Pour 1 000 000 d'éléments, la recherche séquentielle peut faire 1 000 000 comparaisons ; la dichotomie en fait environ <strong>20</strong> seulement (log₂).</p>`,
        code: `def dichotomie(tab, cible):
    """tab doit être trié dans l'ordre croissant."""
    gauche, droite = 0, len(tab) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if tab[milieu] == cible:
            return milieu
        elif tab[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1

t = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print("indice de 23 :", dichotomie(t, 23))
print("indice de 17 :", dichotomie(t, 17))`,
      },
      {
        title: "Le tri par sélection",
        html: `
        <p>Le <strong>tri par sélection</strong> : on cherche le plus petit élément et on le place en première position, puis le plus petit du reste en deuxième position, etc.</p>`,
        code: `def tri_selection(tab):
    n = len(tab)
    for i in range(n):
        i_min = i
        for j in range(i + 1, n):
            if tab[j] < tab[i_min]:
                i_min = j
        tab[i], tab[i_min] = tab[i_min], tab[i]  # échange
    return tab

print(tri_selection([5, 2, 9, 1, 7, 3]))`,
      },
      {
        title: "Le tri par insertion",
        html: `
        <p>Le <strong>tri par insertion</strong> : on construit la partie triée élément par élément, en <em>insérant</em> chaque nouvel élément à sa place parmi les précédents. C'est la façon dont on trie souvent un jeu de cartes à la main.</p>`,
        code: `def tri_insertion(tab):
    for i in range(1, len(tab)):
        cle = tab[i]
        j = i - 1
        while j >= 0 and tab[j] > cle:
            tab[j + 1] = tab[j]
            j -= 1
        tab[j + 1] = cle
    return tab

print(tri_insertion([5, 2, 9, 1, 7, 3]))`,
      },
      {
        title: "Les algorithmes gloutons",
        html: `
        <p>Un algorithme <strong>glouton</strong> construit une solution pas à pas, en faisant à chaque étape le choix qui semble le meilleur sur le moment, sans jamais revenir en arrière. Exemple classique : le <strong>rendu de monnaie</strong> (donner le moins de pièces possible).</p>
        <p class="note">Le glouton est rapide mais ne donne pas toujours la solution optimale — cela dépend du système de pièces.</p>`,
        code: `def rendu_monnaie(somme, pieces):
    pieces = sorted(pieces, reverse=True)
    rendu = []
    for p in pieces:
        while somme >= p:
            somme -= p
            rendu.append(p)
    return rendu

systeme = [1, 2, 5, 10, 20, 50, 100, 200]   # centimes d'euro
print("Rendu de 67 :", rendu_monnaie(67, systeme))
print("Nb de pièces :", len(rendu_monnaie(67, systeme)))`,
      },
      {
        title: "Coût d'un algorithme (complexité)",
        html: `
        <p>Deux algorithmes corrects ne se valent pas forcément : l'un peut être beaucoup plus <strong>rapide</strong>. On estime le coût en comptant le nombre d'opérations en fonction de la taille <em>n</em> des données.</p>
        <table>
          <tr><th>Coût</th><th>Nom</th><th>Exemple</th></tr>
          <tr><td>constant</td><td>O(1)</td><td>accès <code>tab[i]</code></td></tr>
          <tr><td>logarithmique</td><td>O(log n)</td><td>recherche dichotomique</td></tr>
          <tr><td>linéaire</td><td>O(n)</td><td>parcours, recherche séquentielle</td></tr>
          <tr><td>quadratique</td><td>O(n²)</td><td>tris par sélection / insertion</td></tr>
        </table>`,
        code: `# Comparons concrètement le NOMBRE de comparaisons
def cout_sequentiel(n):
    return n                  # pire cas : on parcourt tout

def cout_dichotomie(n):
    comparaisons = 0
    while n > 1:
        n //= 2
        comparaisons += 1
    return comparaisons

for taille in [10, 1000, 1000000]:
    print(f"n={taille:>8} | séquentiel={cout_sequentiel(taille):>8}",
          f"| dichotomie={cout_dichotomie(taille)}")`,
      },
      {
        title: "Terminaison : le variant de boucle",
        html: `
        <p>Une boucle <code>while</code> doit <strong>se terminer</strong>. Pour le prouver, on exhibe un <strong>variant</strong> : une quantité entière, positive, qui <em>décroît strictement</em> à chaque tour. Comme un entier positif ne peut décroître indéfiniment, la boucle s'arrête.</p>
        <p>Exemple : dans la dichotomie, la quantité <code>droite − gauche</code> diminue à chaque tour : c'est le variant.</p>`,
      },
    ],
  },

  /* ============================================================= 8 */
  {
    id: "histoire-informatique",
    num: 1,
    emoji: "📜",
    title: "Histoire de l'informatique",
    intro:
      "Thème transversal du programme : situer dans le temps les grandes innovations, matérielles comme logicielles, qui ont façonné l'informatique — des premières machines à calculer à l'intelligence artificielle.",
    capacites: [
      "Situer dans le temps les principales innovations matérielles et logicielles.",
      "Relier une notion étudiée dans les autres thèmes à son contexte historique.",
      "Connaître quelques grandes figures de l'histoire de l'informatique et leur apport.",
    ],
    sections: [
      {
        title: "Pourquoi une histoire de l'informatique ?",
        html: `
        <p>L'informatique n'est pas apparue avec les ordinateurs : elle est l'aboutissement de siècles de recherches en <strong>mathématiques</strong>, en <strong>logique</strong> et en <strong>technique</strong>. Comprendre cette histoire aide à saisir <em>pourquoi</em> les machines fonctionnent comme elles le font (binaire, programme enregistré, langages…).</p>
        <p>Ce thème est <strong>transversal</strong> : chaque notion des autres chapitres a une histoire (le binaire vient de Leibniz, l'algorithme du nom d'Al-Khwârizmî, le Web de 1989…).</p>`,
      },
      {
        title: "Des premières machines à calculer (XVIIᵉ–XIXᵉ s.)",
        html: `
        <p>Avant l'électronique, on calculait avec des machines mécaniques :</p>
        <ul>
          <li><strong>1642 — Blaise Pascal</strong> : la <em>Pascaline</em>, machine à additionner à roues dentées.</li>
          <li><strong>1673 — Gottfried Leibniz</strong> : une machine qui multiplie ; il théorise aussi le <strong>système binaire</strong>.</li>
          <li><strong>1801 — Joseph Marie Jacquard</strong> : le métier à tisser programmé par <strong>cartes perforées</strong> — l'idée d'une machine pilotée par un « programme ».</li>
        </ul>`,
      },
      {
        title: "Babbage et Lovelace : la machine et le programme",
        html: `
        <p><strong>Charles Babbage</strong> conçoit vers 1837 la <strong>machine analytique</strong>, une calculatrice mécanique programmable jamais achevée, qui préfigure l'ordinateur (unité de calcul, mémoire, cartes perforées).</p>
        <p><strong>Ada Lovelace</strong> écrit en 1843 ce qui est considéré comme le <strong>premier algorithme destiné à être exécuté par une machine</strong>. Elle pressent qu'une telle machine pourrait manipuler bien plus que des nombres (symboles, musique…). On la considère comme la première programmeuse.</p>`,
      },
      {
        title: "Les fondements théoriques (1850–1940)",
        html: `
        <ul>
          <li><strong>1854 — George Boole</strong> : l'<em>algèbre de Boole</em> (vrai/faux, et/ou/non), base de la logique des circuits (thème 1 et 5).</li>
          <li><strong>1936 — Alan Turing</strong> : la <em>machine de Turing</em>, modèle théorique qui définit ce qu'est un calcul et les limites du <strong>calculable</strong>.</li>
          <li><strong>1937 — Claude Shannon</strong> : montre que les circuits électriques peuvent réaliser l'algèbre de Boole ; il fonde la <em>théorie de l'information</em>.</li>
          <li><strong>1945 — John von Neumann</strong> : formalise l'architecture à <strong>programme enregistré</strong> (thème 5).</li>
        </ul>`,
      },
      {
        title: "Les premiers ordinateurs (1940–1970)",
        html: `
        <ul>
          <li><strong>1945 — ENIAC</strong> : l'un des premiers grands calculateurs électroniques, programmé par câblage.</li>
          <li><strong>1947 — le transistor</strong> (Bell Labs) remplace les tubes à vide : plus petit, plus fiable, moins gourmand.</li>
          <li><strong>1958 — le circuit intégré</strong> regroupe de nombreux transistors sur une puce.</li>
          <li><strong>Grace Hopper</strong> développe l'idée de <strong>compilateur</strong> et participe au langage COBOL, rendant la programmation plus accessible.</li>
        </ul>
        <p class="note">La <strong>loi de Moore</strong> (1965) observe que le nombre de transistors par puce double environ tous les deux ans — moteur de la miniaturisation.</p>`,
      },
      {
        title: "Micro-informatique, logiciel et réseaux (1970–1990)",
        html: `
        <ul>
          <li><strong>1971 — Intel 4004</strong> : le premier <strong>microprocesseur</strong> ; tout le processeur tient sur une puce.</li>
          <li><strong>Années 1970–80</strong> : l'<strong>ordinateur personnel</strong> (Apple, IBM PC) sort des laboratoires.</li>
          <li><strong>1969 — ARPANET</strong>, ancêtre d'<strong>Internet</strong> ; les protocoles <strong>TCP/IP</strong> se généralisent dans les années 1980.</li>
          <li><strong>1983–1991 — logiciel libre</strong> : Richard Stallman lance le projet GNU, Linus Torvalds le noyau <strong>Linux</strong> (1991).</li>
        </ul>`,
      },
      {
        title: "Le Web, le mobile et aujourd'hui (1990 →)",
        html: `
        <ul>
          <li><strong>1989–1991 — Tim Berners-Lee</strong> invente le <strong>World Wide Web</strong> au CERN (HTML, HTTP, URL) — thème 4.</li>
          <li><strong>Années 2000</strong> : explosion d'Internet, moteurs de recherche, réseaux sociaux, <strong>données massives</strong> (big data).</li>
          <li><strong>2007 — smartphone</strong> : l'informatique devient mobile et omniprésente.</li>
          <li><strong>Années 2010–2020</strong> : essor de l'<strong>apprentissage automatique</strong> et de l'<strong>intelligence artificielle</strong>.</li>
        </ul>
        <p>L'histoire continue : chaque notion que tu apprends en NSI s'inscrit dans cette longue chaîne d'innovations.</p>`,
      },
      {
        title: "Construire et trier une frise chronologique",
        html: `
        <p>On peut représenter l'histoire comme une <strong>table de données</strong> (thème 3) et la trier par date. Voici une petite frise interactive : modifie-la, ajoute un événement !</p>`,
        code: `frise = [
    {"annee": 1642, "evenement": "Pascaline (Pascal)"},
    {"annee": 1843, "evenement": "Premier algorithme (Lovelace)"},
    {"annee": 1936, "evenement": "Machine de Turing"},
    {"annee": 1945, "evenement": "Architecture de von Neumann"},
    {"annee": 1947, "evenement": "Le transistor"},
    {"annee": 1971, "evenement": "Microprocesseur Intel 4004"},
    {"annee": 1991, "evenement": "Noyau Linux"},
    {"annee": 1991, "evenement": "Le World Wide Web"},
]

# Tri chronologique (thème 3 : trier une table selon une colonne)
for e in sorted(frise, key=lambda x: x["annee"]):
    print(e["annee"], "—", e["evenement"])

print("\\nNombre d'événements :", len(frise))`,
      },
    ],
  },
];
