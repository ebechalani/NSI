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
        title: "Pourquoi tout est-il codé en 0 et 1 ?",
        html: `
        <p>Au cœur d'un ordinateur, il n'y a ni lettres, ni images, ni sons : il n'y a que de l'<strong>électricité</strong>. Dans un circuit, on sait fabriquer simplement et de façon fiable deux états bien distincts : le courant <strong>passe</strong> ou <strong>ne passe pas</strong>, la tension est <strong>haute</strong> ou <strong>basse</strong>. On note ces deux états <code>1</code> et <code>0</code>.</p>
        <p>On <em>pourrait</em> imaginer une machine qui distingue 10 niveaux de tension (pour compter en base 10), mais ce serait fragile : la moindre perturbation électrique ferait confondre un « 6 » avec un « 7 ». Avec seulement deux états très éloignés, la machine ne se trompe presque jamais. C'est pour cette <strong>fiabilité</strong> que toute l'informatique repose sur le <strong>binaire</strong> (base 2).</p>
        <p>Idée maîtresse de tout ce thème : <strong>une même suite de 0 et de 1 peut représenter des choses très différentes</strong> (un nombre entier, un nombre à virgule, un caractère, une couleur…) selon la <em>convention</em> que l'on décide d'utiliser. Apprendre la représentation des données, c'est apprendre ces conventions.</p>
        <p class="note">🎯 Activité débranchée d'introduction (en îlot) : avec 5 cartes (1, 2, 4, 8, 16) que l'on retourne face cachée/visible, faites afficher à votre voisin tous les nombres de 0 à 31. Que remarquez-vous sur le nombre de combinaisons possibles ?</p>`,
      },
      {
        title: "Le bit, l'octet et les puissances de 2",
        html: `
        <p>Un <strong>bit</strong> (de l'anglais <em>binary digit</em>, « chiffre binaire ») est la plus petite unité d'information possible : il vaut <code>0</code> ou <code>1</code>. C'est une seule « case » qui peut prendre deux valeurs.</p>
        <p>Que peut-on faire avec plusieurs bits ? Comptons les possibilités :</p>
        <ul>
          <li><strong>1 bit</strong> → 2 valeurs : 0, 1</li>
          <li><strong>2 bits</strong> → 4 valeurs : 00, 01, 10, 11</li>
          <li><strong>3 bits</strong> → 8 valeurs : 000, 001, 010, … 111</li>
          <li><strong>n bits</strong> → <strong>2<sup>n</sup></strong> valeurs</li>
        </ul>
        <p>Pourquoi cela double-t-il à chaque bit ajouté ? Parce que chaque combinaison existante peut être prolongée de deux façons : en lui ajoutant un <code>0</code> ou un <code>1</code> devant. On double donc le nombre de possibilités. Cette formule <strong>2<sup>n</sup></strong> est <u>la</u> formule à connaître par cœur de ce thème.</p>
        <p>Un <strong>octet</strong> (<em>byte</em> en anglais) est un paquet de <strong>8 bits</strong>. Il permet donc 2<sup>8</sup> = <strong>256</strong> combinaisons, soit les entiers de <strong>0 à 255</strong>. C'est l'unité de base de la mémoire.</p>
        <table>
          <tr><th>Unité</th><th>Vaut</th><th>Ordre de grandeur</th></tr>
          <tr><td>1 octet (o)</td><td>8 bits</td><td>1 caractère</td></tr>
          <tr><td>1 kilooctet (ko)</td><td>1000 o (kio = 1024 o)</td><td>une courte page de texte</td></tr>
          <tr><td>1 mégaoctet (Mo)</td><td>1000 ko</td><td>une photo, un livre</td></tr>
          <tr><td>1 gigaoctet (Go)</td><td>1000 Mo</td><td>un film</td></tr>
          <tr><td>1 téraoctet (To)</td><td>1000 Go</td><td>un disque dur</td></tr>
        </table>
        <p class="warnbox">⚠️ Piège classique : ne confondez pas le <strong>bit</strong> (noté <code>b</code>) et l'<strong>octet</strong> (noté <code>o</code>, ou <em>byte</em> = <code>B</code>). Un débit Internet annoncé « 100 Mb/s » (mégabits) vaut 100 ÷ 8 ≈ <strong>12,5 Mo/s</strong> (mégaoctets). C'est pour cela qu'un fichier de 100 Mo ne se télécharge pas en 1 seconde sur une ligne à 100 Mb/s.</p>`,
        code: `# La table des puissances de 2, à connaître jusqu'à 2^10
for n in range(11):
    print(f"{n:>2} bits -> 2**{n} = {2**n:>4} valeurs")

# Combien de valeurs sur un octet ? Et le plus grand entier codable ?
print("Un octet :", 2**8, "valeurs, de 0 à", 2**8 - 1)`,
      },
      {
        title: "Comprendre une base : le rôle de la position",
        html: `
        <p>Avant le binaire, redécouvrons notre propre système, le <strong>décimal</strong> (base 10). Pourquoi écrit-on « 2025 » ? Parce que la <strong>position</strong> de chaque chiffre lui donne un <em>poids</em>, qui est une puissance de 10 :</p>
        <p style="text-align:center"><strong>2</strong>×10³ + <strong>0</strong>×10² + <strong>2</strong>×10¹ + <strong>5</strong>×10⁰ = 2000 + 0 + 20 + 5 = <strong>2025</strong></p>
        <p>Le chiffre tout à droite a le poids le plus faible (10⁰ = 1), celui tout à gauche le poids le plus fort. C'est exactement le même principe dans <em>toutes</em> les bases — seule la base change.</p>
        <p>En <strong>base 2</strong>, on n'a que deux chiffres (0 et 1) et les poids sont les <strong>puissances de 2</strong> : …, 16, 8, 4, 2, 1. Le binaire <code>1101</code> se lit donc :</p>
        <table>
          <tr><th>Poids</th><td>8 (2³)</td><td>4 (2²)</td><td>2 (2¹)</td><td>1 (2⁰)</td></tr>
          <tr><th>Bit</th><td>1</td><td>1</td><td>0</td><td>1</td></tr>
          <tr><th>Contribue</th><td>8</td><td>4</td><td>0</td><td>1</td></tr>
        </table>
        <p style="text-align:center">8 + 4 + 0 + 1 = <strong>13</strong>. Donc <code>1101₂ = 13₁₀</code>.</p>
        <p class="note">💡 Astuce de lecture : le bit le plus à droite vaut 1 (il indique si le nombre est impair) ; chaque bit vers la gauche vaut le double du précédent.</p>`,
      },
      {
        title: "Convertir : binaire → décimal",
        html: `
        <p><strong>Méthode (à appliquer pas à pas) :</strong></p>
        <ol>
          <li>Écris au-dessus de chaque bit son poids (1, 2, 4, 8, 16… <em>de droite à gauche</em>).</li>
          <li>Ne garde que les poids des bits égaux à 1.</li>
          <li>Additionne ces poids.</li>
        </ol>
        <p><strong>Exemple travaillé — convertir <code>101010</code> :</strong></p>
        <p style="text-align:center">poids : 32 16 8 4 2 1 — bits : 1 0 1 0 1 0 → on garde 32 + 8 + 2 = <strong>42</strong></p>
        <p><strong>Deuxième exemple — <code>11111111</code> (un octet plein) :</strong> 128+64+32+16+8+4+2+1 = <strong>255</strong>. On retrouve bien le maximum d'un octet.</p>
        <p>Vérifie toujours ton calcul à la main d'abord, <em>puis</em> avec Python :</p>`,
        code: `# Conversion binaire -> décimal "à la main" (algorithme de Horner)
def bin_vers_dec(chaine):
    total = 0
    for bit in chaine:          # on lit de gauche à droite
        total = total * 2 + int(bit)
    return total

print(bin_vers_dec("101010"))   # 42
print(bin_vers_dec("11111111")) # 255

# Vérification avec l'outil intégré de Python
print(int("101010", 2), int("11111111", 2))`,
      },
      {
        title: "Convertir : décimal → binaire (divisions successives)",
        html: `
        <p>Dans l'autre sens, on utilise la méthode des <strong>divisions successives par 2</strong> :</p>
        <ol>
          <li>Divise le nombre par 2, note le <strong>reste</strong> (0 ou 1) et garde le quotient.</li>
          <li>Recommence avec le quotient, jusqu'à obtenir un quotient nul.</li>
          <li>Lis les restes <strong>de bas en haut</strong> : c'est l'écriture binaire.</li>
        </ol>
        <p><strong>Exemple travaillé — convertir 42 :</strong></p>
        <table>
          <tr><th>Division</th><th>Quotient</th><th>Reste</th></tr>
          <tr><td>42 ÷ 2</td><td>21</td><td>0</td></tr>
          <tr><td>21 ÷ 2</td><td>10</td><td>1</td></tr>
          <tr><td>10 ÷ 2</td><td>5</td><td>0</td></tr>
          <tr><td>5 ÷ 2</td><td>2</td><td>1</td></tr>
          <tr><td>2 ÷ 2</td><td>1</td><td>0</td></tr>
          <tr><td>1 ÷ 2</td><td>0</td><td>1</td></tr>
        </table>
        <p>En lisant les restes <em>de bas en haut</em> : <code>101010</code>. On retrouve bien 42 → on peut vérifier en reconvertissant !</p>
        <p class="note">🔁 <strong>Méthode alternative (soustraction des puissances)</strong> : cherche la plus grande puissance de 2 ≤ au nombre, mets un 1, soustrais, recommence. Pour 42 : 32 entre (1), reste 10 ; 16 n'entre pas (0) ; 8 entre (1), reste 2 ; 4 non (0) ; 2 oui (1) ; 1 non (0) → 101010.</p>`,
        code: `def dec_vers_bin(n):
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits   # le reste, ajouté DEVANT
        n = n // 2                 # division entière
    return bits

print(dec_vers_bin(42))    # 101010
print(dec_vers_bin(255))   # 11111111

# Python le fait aussi directement (préfixe 0b) :
print(bin(42))`,
      },
      {
        title: "L'hexadécimal (base 16) : le binaire « compact »",
        html: `
        <p>Le binaire est fiable pour la machine, mais pénible pour les humains : <code>11111111</code> est long et difficile à relire. D'où la <strong>base 16</strong> (hexadécimal), très utilisée en informatique (couleurs web, adresses mémoire…).</p>
        <p>En base 16, il faut 16 symboles. On réutilise 0 à 9, puis les lettres :</p>
        <table>
          <tr><th>Hexa</th><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr>
          <tr><th>Décimal</th><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
        </table>
        <p><strong>Le lien magique :</strong> 16 = 2⁴, donc <u>un chiffre hexadécimal correspond exactement à 4 bits</u> (un « quartet »). Convertir entre binaire et hexa devient un simple découpage en paquets de 4 bits :</p>
        <p style="text-align:center"><code>1111 1111</code> → <code>F F</code> → <strong>FF</strong> &nbsp;&nbsp; et &nbsp;&nbsp; <code>0010 1010</code> → <code>2 A</code> → <strong>2A</strong></p>
        <p><strong>Hexa → décimal :</strong> même principe positionnel, avec des poids en puissances de 16. <code>2A</code> = 2×16 + 10 = 32 + 10 = <strong>42</strong>.</p>
        <p>C'est pour cela qu'une couleur web comme <code>#FF8800</code> se lit : rouge = FF = 255 (max), vert = 88 = 136, bleu = 00 = 0 → un orange.</p>`,
        code: `# Python jongle entre les trois bases
n = 42
print("décimal :", n)
print("binaire :", bin(n))   # 0b101010
print("hexa    :", hex(n))   # 0x2a

# Lire des littéraux directement
print(0b101010, 0x2A)        # 42 42

# Conversions depuis une chaîne avec int(chaine, base)
print(int("2A", 16), int("FF", 16))   # 42 255

# Décomposer une couleur #FF8800
couleur = "FF8800"
r, v, b = int(couleur[0:2],16), int(couleur[2:4],16), int(couleur[4:6],16)
print("R,V,B =", r, v, b)`,
      },
      {
        title: "Coder les entiers négatifs : le complément à deux",
        html: `
        <p>Tout ce qu'on a vu code des entiers <strong>positifs</strong>. Mais comment coder <strong>−5</strong> alors qu'on n'a que des 0 et des 1, pas de signe « − » ? On pourrait réserver un bit pour le signe, mais cela crée des soucis (deux écritures du zéro, addition compliquée). La solution universelle est le <strong>complément à deux</strong>.</p>
        <p><strong>Recette pour coder un négatif sur 8 bits (exemple : −5) :</strong></p>
        <ol>
          <li>Coder la valeur <em>positive</em> : +5 = <code>0000 0101</code></li>
          <li><strong>Inverser</strong> tous les bits (0↔1) : <code>1111 1010</code></li>
          <li><strong>Ajouter 1</strong> : <code>1111 1011</code> ← voilà −5</li>
        </ol>
        <p><strong>Pourquoi ça marche ?</strong> Parce qu'alors <code>5 + (−5)</code> en binaire donne <code>1 0000 0000</code> : le 9ᵉ bit déborde et disparaît (on n'a que 8 bits), il reste <code>0000 0000</code> = 0. L'addition redonne bien zéro, <em>sans règle spéciale pour les négatifs</em> : c'est tout l'intérêt, le processeur additionne positifs et négatifs avec le même circuit.</p>
        <p>Le bit de gauche (poids fort) joue le rôle de <strong>signe</strong> : 0 → positif, 1 → négatif. Sur 8 bits, on couvre les entiers de <strong>−128 à +127</strong> (128 négatifs, le zéro, et 127 positifs = 256 valeurs au total).</p>`,
        code: `def complement_a_deux(n, bits=8):
    """Écriture binaire de n (positif ou négatif) sur 'bits' bits."""
    if n < 0:
        n = (1 << bits) + n      # équivaut à 2**bits + n
    return format(n, "0{}b".format(bits))

print(" 5 ->", complement_a_deux(5))     # 00000101
print("-5 ->", complement_a_deux(-5))    # 11111011
print("-1 ->", complement_a_deux(-1))    # 11111111
print("-128 ->", complement_a_deux(-128))# 10000000

# Vérifions que 5 + (-5) = 0 sur 8 bits
print((5 + (-5)) % 256)   # 0`,
      },
      {
        title: "Le débordement (overflow)",
        html: `
        <p>Un nombre de bits fixé impose une <strong>limite</strong>. Que se passe-t-il si un calcul dépasse cette limite ? Le résultat « tourne », comme le <strong>compteur kilométrique</strong> d'une voiture qui repasse à 000000 après 999999.</p>
        <p>Sur un octet non signé (0 à 255), <code>255 + 1</code> ne donne pas 256 (impossible à écrire sur 8 bits) mais <strong>0</strong>. C'est un <strong>débordement</strong> (<em>overflow</em>). Ce phénomène est une source de bugs célèbres (et de failles de sécurité) dans les vrais programmes.</p>
        <p class="note">En <strong>Python</strong>, les entiers sont de taille <em>illimitée</em> : ils grandissent automatiquement, donc pas de débordement. Mais dans la plupart des langages (C, Java…) et dans le matériel, la taille est fixe : il faut y penser.</p>`,
        code: `# Simulons un octet non signé (0..255) avec le modulo 256
def add8(a, b):
    return (a + b) % 256

print("255 + 1   =", add8(255, 1))     # 0  (déborde !)
print("200 + 100 =", add8(200, 100))   # 44

# Python pur, lui, ne déborde jamais :
print(2 ** 100)`,
      },
      {
        title: "Les nombres à virgule : les flottants",
        html: `
        <p>Pour les nombres « à virgule » (3,14 ; 0,5 ; …), l'ordinateur utilise le type <strong>flottant</strong> (<code>float</code>). L'idée importante à retenir n'est <em>pas</em> le détail technique du codage, mais une <strong>conséquence pratique</strong> :</p>
        <p class="warnbox">🔑 Les flottants sont des <strong>approximations</strong>. La mémoire étant finie, beaucoup de nombres décimaux n'ont pas d'écriture binaire <em>exacte</em> — exactement comme 1/3 = 0,3333… n'a pas d'écriture décimale finie. Résultat : <code>0.1 + 0.2</code> ne vaut pas exactement <code>0.3</code> en machine.</p>
        <p>Ce n'est pas un bug de Python : c'est une limite de <em>tous</em> les ordinateurs. La règle d'or qui en découle : <strong>on ne teste jamais l'égalité stricte (<code>==</code>) entre deux flottants</strong>. On vérifie plutôt qu'ils sont <em>proches</em>, à une petite tolérance près.</p>`,
        code: `print(0.1 + 0.2)             # 0.30000000000000004 (!)
print(0.1 + 0.2 == 0.3)      # False : surprenant mais normal

# Bonne pratique : comparer à une tolérance (epsilon)
def proche(a, b, eps=1e-9):
    return abs(a - b) < eps

print(proche(0.1 + 0.2, 0.3))   # True

# Autre conséquence : attention aux arrondis d'affichage
print(round(0.1 + 0.2, 2))      # 0.3`,
      },
      {
        title: "Les booléens et l'algèbre de Boole",
        html: `
        <p>Le type <strong>booléen</strong> (<code>bool</code>) n'a que deux valeurs : <code>True</code> (Vrai) et <code>False</code> (Faux). C'est le type des <em>conditions</em> (thème « Langages »). On combine les booléens avec trois opérateurs, formalisés par George Boole en 1854 :</p>
        <ul>
          <li><strong>et</strong> (<code>and</code>) : vrai seulement si les <em>deux</em> sont vrais ;</li>
          <li><strong>ou</strong> (<code>or</code>) : vrai si <em>au moins un</em> est vrai ;</li>
          <li><strong>non</strong> (<code>not</code>) : inverse la valeur.</li>
        </ul>
        <p>On résume leur comportement dans une <strong>table de vérité</strong> (V = Vrai, F = Faux) :</p>
        <table>
          <tr><th>a</th><th>b</th><th>a et b</th><th>a ou b</th><th>non a</th></tr>
          <tr><td>F</td><td>F</td><td>F</td><td>F</td><td>V</td></tr>
          <tr><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td></tr>
          <tr><td>V</td><td>F</td><td>F</td><td>V</td><td>F</td></tr>
          <tr><td>V</td><td>V</td><td>V</td><td>V</td><td>F</td></tr>
        </table>
        <p>Ces opérations sont la base des <strong>circuits électroniques</strong> (portes logiques, thème « Architecture ») et des conditions de tous les programmes. Exemple parlant : « je prends un parapluie <em>si</em> il pleut <strong>et</strong> je sors » = <code>pluie and je_sors</code>.</p>`,
        code: `# Affichons la table de vérité de and / or
for a in (False, True):
    for b in (False, True):
        print(a, b, "| et =", a and b, "| ou =", a or b)

print("non True =", not True)

# Exemple concret : un mot de passe valide a >= 8 caractères ET un chiffre
mdp = "robot2026"
valide = len(mdp) >= 8 and any(c.isdigit() for c in mdp)
print("Mot de passe valide ?", valide)`,
      },
      {
        title: "Le codage des caractères : ASCII, Unicode, UTF-8",
        html: `
        <p>Et les <strong>lettres</strong> ? Puisque la machine ne connaît que des nombres, on attribue à chaque caractère un <strong>numéro</strong>, via une table de correspondance.</p>
        <p>La première grande table est l'<strong>ASCII</strong> (années 1960) : 128 caractères codés sur 7 bits — lettres latines non accentuées, chiffres, ponctuation, espaces. Quelques repères utiles : <code>'A'</code> = 65, <code>'a'</code> = 97 (donc minuscule = majuscule + 32), <code>'0'</code> = 48, l'espace = 32.</p>
        <p>128 caractères, c'est bien trop peu pour les langues du monde (accents, grec, arabe, chinois, emoji…). D'où <strong>Unicode</strong>, qui attribue un numéro (<em>code point</em>) à plus de 140 000 caractères. <strong>UTF-8</strong> est la façon la plus répandue de stocker l'Unicode : il code chaque caractère sur <strong>1 à 4 octets</strong>, et reste <em>compatible</em> avec l'ASCII (les 128 premiers caractères sont codés à l'identique).</p>
        <p class="note">En Python : <code>ord(c)</code> donne le numéro d'un caractère, <code>chr(n)</code> fait l'inverse. C'est la base de petits chiffrages (décalage de César, par exemple).</p>`,
        code: `print(ord("A"), ord("a"), ord("0"))   # 65 97 48
print(chr(78), chr(83), chr(73))      # N S I
print(ord("é"))                        # 233 (au-delà de l'ASCII)
print(ord("😀"))                       # 128512 (emoji Unicode)

# La majuscule est 32 de plus que la minuscule
for c in "nsi":
    print(c, "->", chr(ord(c) - 32))   # passage en majuscule "à la main"`,
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
        title: "Pourquoi des types « construits » ?",
        html: `
        <p>Au thème précédent, on a vu les <strong>types de base</strong> : un entier, un flottant, un booléen, un caractère… c'est-à-dire <em>une seule</em> valeur à la fois. Mais un programme manipule rarement une valeur isolée : une classe a <em>plusieurs</em> élèves, un point a <em>deux</em> coordonnées, un élève a un nom <em>et</em> une moyenne <em>et</em> une classe.</p>
        <p>Les <strong>types construits</strong> permettent d'assembler plusieurs valeurs dans une seule structure. On en étudie trois, à bien distinguer :</p>
        <table>
          <tr><th>Structure</th><th>Forme</th><th>Modifiable ?</th><th>On accède par…</th></tr>
          <tr><td><strong>tuple</strong> (p-uplet)</td><td><code>(3, 5)</code></td><td>❌ non (immuable)</td><td>position</td></tr>
          <tr><td><strong>liste</strong> (tableau)</td><td><code>[12, 15, 9]</code></td><td>✅ oui</td><td>indice (position)</td></tr>
          <tr><td><strong>dictionnaire</strong></td><td><code>{"nom": "Ada"}</code></td><td>✅ oui</td><td>clé (nom)</td></tr>
        </table>
        <p>Tout le thème consiste à savoir <strong>laquelle choisir</strong> selon le besoin, et à savoir la <strong>parcourir</strong> pour en extraire de l'information.</p>
        <p class="note">🎯 Activité d'ouverture (en îlot) : sur papier, modélisez votre groupe. Quelle structure pour « les prénoms du groupe » ? Pour « le prénom ET l'âge de chacun » ? Justifiez.</p>`,
      },
      {
        title: "Les p-uplets (tuples)",
        html: `
        <p>Un <strong>tuple</strong> (on dit aussi <em>p-uplet</em>) est une séquence <strong>ordonnée</strong> et <strong>non modifiable</strong> (on dit <strong>immuable</strong>), écrite entre parenthèses. « Ordonnée » signifie que l'ordre des éléments compte ; « immuable » signifie qu'une fois créé, on ne peut plus changer son contenu.</p>
        <p>On l'utilise pour regrouper des données qui forment un tout et ne doivent pas changer : des <strong>coordonnées</strong> <code>(x, y)</code>, une <strong>date</strong> <code>(jour, mois, année)</code>, une couleur <code>(r, v, b)</code>.</p>
        <p>Deux opérations très pratiques :</p>
        <ul>
          <li>le <strong>déballage</strong> (<em>unpacking</em>) : <code>x, y = point</code> distribue les éléments dans plusieurs variables d'un coup ;</li>
          <li>le <strong>retour multiple</strong> : une fonction peut renvoyer plusieurs valeurs… qui forment en réalité un tuple.</li>
        </ul>`,
        code: `point = (3, 5)          # un couple (x, y)
print("abscisse :", point[0])   # accès par position
print("ordonnée :", point[1])

x, y = point            # déballage en deux variables
print("x =", x, "| y =", y)

def division(a, b):
    return a // b, a % b   # renvoie DEUX valeurs (un tuple)

q, r = division(17, 5)
print("quotient", q, "reste", r)

# Immuable : la ligne suivante provoquerait une ERREUR
# point[0] = 9   ->  TypeError`,
      },
      {
        title: "Les listes : créer et accéder aux éléments",
        html: `
        <p>Une <strong>liste</strong> (ou tableau) est une séquence ordonnée et <strong>modifiable</strong>, écrite entre crochets <code>[ ]</code>. C'est la structure la plus utilisée en NSI.</p>
        <p>On accède à un élément par son <strong>indice</strong>, c'est-à-dire sa position. Point crucial : <strong>les indices commencent à 0</strong>, pas à 1 !</p>
        <table>
          <tr><th>Liste <code>notes</code></th><td>12</td><td>15</td><td>9</td><td>18</td><td>11</td></tr>
          <tr><th>Indice</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
          <tr><th>Indice négatif</th><td>-5</td><td>-4</td><td>-3</td><td>-2</td><td>-1</td></tr>
        </table>
        <ul>
          <li><code>notes[0]</code> → le premier (12) ; <code>notes[-1]</code> → le dernier (11) ;</li>
          <li><code>len(notes)</code> → le nombre d'éléments (5), donc le <em>dernier indice valide</em> est <code>len(notes) - 1</code> ;</li>
          <li><code>notes[1:3]</code> → une <strong>tranche</strong> (<em>slice</em>) : les indices 1 et 2, soit <code>[15, 9]</code> (la borne de droite est exclue).</li>
        </ul>
        <p class="warnbox">⚠️ Erreur la plus fréquente du thème : <code>notes[5]</code> sur une liste de 5 éléments lève <code>IndexError</code>, car le dernier indice est 4.</p>`,
        code: `notes = [12, 15, 9, 18, 11]
print("premier :", notes[0])      # 12
print("dernier :", notes[-1])     # 11
print("combien :", len(notes))    # 5
print("tranche :", notes[1:3])    # [15, 9]  (1 et 2, pas 3)

# notes[5] provoquerait IndexError : le dernier indice est 4 !`,
      },
      {
        title: "Modifier une liste",
        html: `
        <p>Contrairement au tuple, une liste se <strong>modifie</strong>. Les opérations essentielles :</p>
        <table>
          <tr><th>Opération</th><th>Effet</th></tr>
          <tr><td><code>t[i] = v</code></td><td>remplace l'élément d'indice i</td></tr>
          <tr><td><code>t.append(x)</code></td><td>ajoute x <em>à la fin</em></td></tr>
          <tr><td><code>t.insert(i, x)</code></td><td>insère x à l'indice i</td></tr>
          <tr><td><code>t.remove(x)</code></td><td>supprime la première occurrence de x</td></tr>
          <tr><td><code>t.pop()</code></td><td>retire et renvoie le dernier élément</td></tr>
          <tr><td><code>x in t</code></td><td>teste si x est présent (renvoie un booléen)</td></tr>
        </table>
        <p class="note">🔎 À savoir pour plus tard : deux variables peuvent désigner <em>la même</em> liste (« alias »). Si <code>b = a</code> et qu'on modifie <code>b</code>, alors <code>a</code> change aussi ! Pour une vraie copie indépendante, on écrit <code>b = a.copy()</code> (ou <code>b = a[:]</code>).</p>`,
        code: `notes = [12, 15, 9, 18, 11]

notes[2] = 10            # corrige la 3e note (indice 2)
notes.append(20)         # ajoute 20 à la fin
notes.insert(0, 8)       # insère 8 en tête
print(notes)

print("18 présent ?", 18 in notes)   # True
notes.remove(8)          # enlève le 8
dernier = notes.pop()    # retire et récupère le dernier
print("retiré :", dernier, "->", notes)

# Piège de l'alias : décommente pour observer
# a = [1, 2, 3]; b = a; b.append(99); print(a)   # a vaut [1,2,3,99] !`,
      },
      {
        title: "Parcourir une liste",
        html: `
        <p>Le réflexe central : <strong>parcourir</strong> une liste pour calculer quelque chose (une somme, un maximum, un comptage…). Deux façons :</p>
        <ul>
          <li><strong>par élément</strong> : <code>for x in liste</code> — simple, quand on n'a pas besoin de la position ;</li>
          <li><strong>par indice</strong> : <code>for i in range(len(liste))</code> — quand on a besoin de la position (pour modifier, comparer des voisins…).</li>
        </ul>
        <p>Le schéma d'<strong>accumulation</strong> est à connaître par cœur : on prépare une variable « accumulateur » avant la boucle, on la met à jour à chaque tour.</p>`,
        code: `temperatures = [18, 21, 17, 25, 20, 23]

# 1) Somme et moyenne (accumulation)
total = 0
for t in temperatures:
    total += t
print("moyenne :", total / len(temperatures))

# 2) Maximum
maxi = temperatures[0]
for t in temperatures:
    if t > maxi:
        maxi = t
print("max :", maxi)

# 3) Compter celles > 20 (parcours + compteur)
chaudes = 0
for t in temperatures:
    if t > 20:
        chaudes += 1
print("journées > 20° :", chaudes)`,
      },
      {
        title: "La construction par compréhension",
        html: `
        <p>Très souvent, on construit une liste <em>à partir d'une autre</em> : transformer chaque élément, ou n'en garder que certains. La <strong>compréhension de liste</strong> est une écriture concise pour cela.</p>
        <p>Partons d'une boucle classique, puis voyons sa version compacte :</p>
        <pre><code># Version boucle
carres = []
for n in range(10):
    carres.append(n * n)

# Version compréhension (équivalente)
carres = [n * n for n in range(10)]</code></pre>
        <p>La structure se lit : <code>[ <strong>ce qu'on garde</strong> for <strong>variable</strong> in <strong>source</strong> if <strong>condition</strong> ]</code>. La partie <code>if</code> est facultative : c'est un <strong>filtre</strong>.</p>`,
        code: `# Transformer : les carrés de 0 à 9
print([n * n for n in range(10)])

# Filtrer : ne garder que les nombres pairs de 0 à 20
print([n for n in range(21) if n % 2 == 0])

# Transformer + filtrer en même temps :
# le carré des nombres impairs
print([n * n for n in range(10) if n % 2 == 1])

# Sur des chaînes : mettre des noms en majuscules
noms = ["ada", "alan", "grace"]
print([nom.upper() for nom in noms])`,
      },
      {
        title: "Tableaux de tableaux (matrices)",
        html: `
        <p>Un élément de liste peut <em>lui-même</em> être une liste : on obtient une structure à <strong>deux dimensions</strong>, parfaite pour une grille de jeu, une image (pixels), un tableur ou un plateau.</p>
        <p>On accède à une case par <strong>deux indices</strong> : <code>m[ligne][colonne]</code> (d'abord la ligne, puis la colonne). Pour tout parcourir, on imbrique deux boucles.</p>
        <p>Pour <strong>construire</strong> une grille remplie, on utilise une compréhension imbriquée.</p>
        <p class="warnbox">⚠️ Piège célèbre : <code>[[0] * 3] * 2</code> ne crée PAS deux lignes indépendantes mais deux <em>alias</em> de la même ligne (modifier l'une modifie l'autre). Utilisez toujours la compréhension : <code>[[0 for _ in range(3)] for _ in range(2)]</code>.</p>`,
        code: `# Une matrice 3x3
m = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

print("ligne 1, colonne 2 :", m[1][2])   # 6 (2e ligne, 3e colonne)

# Parcours complet (double boucle)
for ligne in m:
    for valeur in ligne:
        print(valeur, end=" ")
    print()   # saut de ligne après chaque rangée

# Construire une grille 3 lignes x 4 colonnes remplie de 0
grille = [[0 for _ in range(4)] for _ in range(3)]
print(grille)`,
      },
      {
        title: "Les dictionnaires",
        html: `
        <p>Un <strong>dictionnaire</strong> associe à chaque <strong>clé</strong> une <strong>valeur</strong> (des paires <em>clé → valeur</em>), écrit entre accolades <code>{ }</code>. Différence fondamentale avec la liste : on n'accède pas par une position (0, 1, 2…) mais par un <strong>nom</strong> de clé, ce qui est bien plus parlant.</p>
        <p>Comparez : <code>eleve[2]</code> (qu'est-ce que l'indice 2 ?) contre <code>eleve["moyenne"]</code> (limpide). Le dictionnaire est idéal pour modéliser un <strong>objet à attributs nommés</strong> — c'est la brique des « tables de données » du thème suivant.</p>
        <ul>
          <li><code>d["nom"]</code> : lire la valeur (erreur si la clé n'existe pas) ;</li>
          <li><code>d.get("nom", défaut)</code> : lire sans risque, avec une valeur par défaut ;</li>
          <li><code>d["classe"] = "1NSI"</code> : ajouter ou modifier une clé ;</li>
          <li><code>"nom" in d</code> : tester la présence d'une <em>clé</em> ;</li>
          <li>parcours : <code>d.keys()</code> (clés), <code>d.values()</code> (valeurs), <code>d.items()</code> (les paires).</li>
        </ul>`,
        code: `eleve = {"nom": "Lovelace", "prenom": "Ada", "moyenne": 17.5}

print(eleve["nom"])             # accès par la clé -> Lovelace
eleve["moyenne"] = 18           # modification
eleve["classe"] = "1NSI"        # ajout d'une nouvelle clé
print("clé 'age' présente ?", "age" in eleve)   # False
print("âge :", eleve.get("age", "non renseigné"))

# Parcourir les paires clé/valeur
for cle, valeur in eleve.items():
    print(cle, "=>", valeur)`,
      },
      {
        title: "Choisir la bonne structure (synthèse)",
        html: `
        <p>La compétence visée n'est pas de connaître la syntaxe par cœur, mais de <strong>choisir</strong> la structure adaptée. Petit guide de décision :</p>
        <table>
          <tr><th>Le besoin</th><th>La structure</th><th>Exemple</th></tr>
          <tr><td>Données fixes qui vont ensemble</td><td><strong>tuple</strong></td><td>une coordonnée <code>(x, y)</code></td></tr>
          <tr><td>Collection ordonnée et modifiable</td><td><strong>liste</strong></td><td>les notes d'un élève</td></tr>
          <tr><td>Association nom → valeur</td><td><strong>dictionnaire</strong></td><td>une fiche élève</td></tr>
          <tr><td>Tableau à 2 dimensions</td><td><strong>liste de listes</strong></td><td>une grille, une image</td></tr>
          <tr><td>Liste de fiches</td><td><strong>liste de dictionnaires</strong></td><td>une classe entière (→ thème 4)</td></tr>
        </table>
        <p>Cette dernière ligne est essentielle : une <strong>liste de dictionnaires</strong> est exactement ce qu'on appellera une <em>table de données</em> au thème suivant. Tout se tient !</p>`,
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
        title: "Des données partout : la notion de table",
        html: `
        <p>Listes d'élèves, résultats sportifs, catalogue de produits, relevés météo, jeux de données ouverts (<em>open data</em>)… une immense partie de l'information du monde se présente sous forme de <strong>tableaux</strong>. Apprendre à les traiter par programme est une compétence centrale de la NSI.</p>
        <p>Vocabulaire à fixer une fois pour toutes :</p>
        <table>
          <tr><th>nom</th><th>naissance</th><th>pays</th></tr>
          <tr><td>Turing</td><td>1912</td><td>UK</td></tr>
          <tr><td>Lovelace</td><td>1815</td><td>UK</td></tr>
        </table>
        <ul>
          <li>chaque <strong>ligne</strong> est un <strong>enregistrement</strong> (une « fiche ») ;</li>
          <li>chaque <strong>colonne</strong> est un <strong>descripteur</strong> (ou attribut) : ici <em>nom</em>, <em>naissance</em>, <em>pays</em> ;</li>
          <li>toutes les lignes ont <em>les mêmes</em> descripteurs.</li>
        </ul>
        <p>Cette régularité (mêmes colonnes pour toutes les lignes) est exactement ce qui se traduit en Python par une <strong>liste de dictionnaires</strong> — la structure vue à la fin du thème précédent. On y est !</p>`,
      },
      {
        title: "Représenter une table en Python",
        html: `
        <p>On représente une table par une <strong>liste de dictionnaires</strong> : la liste contient les lignes, et chaque ligne est un dictionnaire dont les <strong>clés sont les noms de colonnes</strong>.</p>
        <p>Avantages immédiats : <code>len(table)</code> donne le nombre de lignes, <code>table[0]</code> est la première ligne, et <code>table[0].keys()</code> donne les noms de colonnes. On accède à une cellule par <code>table[i]["colonne"]</code>.</p>`,
        code: `table = [
    {"nom": "Turing",   "naissance": 1912, "pays": "UK"},
    {"nom": "Lovelace", "naissance": 1815, "pays": "UK"},
    {"nom": "Hopper",   "naissance": 1906, "pays": "USA"},
]

print("Nombre de lignes :", len(table))
print("Colonnes         :", list(table[0].keys()))
print("Première ligne   :", table[0])
print("Pays de Hopper   :", table[2]["pays"])

# Afficher proprement toute la table
for ligne in table:
    print(ligne["nom"], "-", ligne["naissance"], "-", ligne["pays"])`,
      },
      {
        title: "Le format CSV : lire un fichier de données",
        html: `
        <p>Les tables circulent le plus souvent sous forme de fichiers <strong>CSV</strong> (<em>Comma-Separated Values</em>, « valeurs séparées par des virgules »). C'est un simple fichier <strong>texte</strong> : une ligne par enregistrement, des valeurs séparées par un caractère (virgule, ou très souvent point-virgule en France à cause des nombres décimaux). La <strong>première ligne</strong> donne en général les noms de colonnes (l'en-tête).</p>
        <pre><code>nom;naissance;pays
Turing;1912;UK
Lovelace;1815;UK</code></pre>
        <p>Le module <strong><code>csv</code></strong> de Python lit ces fichiers. <code>csv.DictReader</code> est idéal : il transforme directement <em>chaque ligne en dictionnaire</em>, en utilisant l'en-tête comme clés. (Ici on simule le fichier par une chaîne de texte, mais sur un vrai fichier on écrirait <code>open("donnees.csv")</code>.)</p>
        <p class="warnbox">⚠️ Piège n°1 du thème : les valeurs lues dans un CSV sont <strong>toujours des chaînes de caractères</strong>, même les nombres. <code>"1912"</code> n'est pas <code>1912</code> ! Il faut convertir avec <code>int(...)</code> ou <code>float(...)</code> avant tout calcul.</p>`,
        code: `import csv, io

contenu = """nom;naissance;pays
Turing;1912;UK
Lovelace;1815;UK
Hopper;1906;USA"""

# DictReader : chaque ligne devient un dictionnaire
lecteur = csv.DictReader(io.StringIO(contenu), delimiter=";")
table = list(lecteur)

for ligne in table:
    print(ligne["nom"], "né en", ligne["naissance"])

# Attention : naissance est une CHAÎNE. Pour calculer, on convertit :
plus_vieux = min(table, key=lambda l: int(l["naissance"]))
print("Le plus ancien :", plus_vieux["nom"])`,
      },
      {
        title: "Rechercher : filtrer des lignes",
        html: `
        <p><strong>Rechercher</strong> dans une table, c'est <strong>sélectionner</strong> les lignes qui vérifient une condition (un critère). La <strong>compréhension de liste</strong> du thème précédent est l'outil parfait : <code>[ ligne for ligne in table if condition ]</code>.</p>
        <p>On peut combiner plusieurs critères avec <code>and</code> / <code>or</code> (les booléens du thème 2 reviennent !). Et comme le résultat est encore une table, on peut compter ses lignes avec <code>len(...)</code>.</p>`,
        code: `table = [
    {"nom": "Turing",   "naissance": 1912, "pays": "UK"},
    {"nom": "Lovelace", "naissance": 1815, "pays": "UK"},
    {"nom": "Hopper",   "naissance": 1906, "pays": "USA"},
]

# Critère simple : les Britanniques
uk = [l for l in table if l["pays"] == "UK"]
print("UK :", [l["nom"] for l in uk])

# Nés après 1900
recents = [l for l in table if l["naissance"] > 1900]
print("Après 1900 :", [l["nom"] for l in recents])

# Deux critères combinés : UK ET nés après 1900
both = [l for l in table if l["pays"] == "UK" and l["naissance"] > 1900]
print("UK après 1900 :", len(both), "->", [l["nom"] for l in both])`,
      },
      {
        title: "Trier selon une colonne",
        html: `
        <p>La fonction <code>sorted(table, key=...)</code> renvoie une <em>nouvelle</em> table triée. Le paramètre <strong><code>key</code></strong> indique <em>sur quelle colonne</em> trier : on lui donne une petite fonction qui, pour une ligne, renvoie la valeur de la colonne.</p>
        <p>On l'écrit souvent avec <strong><code>lambda</code></strong> : <code>lambda l: l["naissance"]</code> se lit « pour une ligne <code>l</code>, renvoie <code>l["naissance"]</code> ». Ajouter <code>reverse=True</code> trie en ordre <strong>décroissant</strong>.</p>
        <p class="note">💡 <code>sorted</code> ne modifie pas la table d'origine (il en crée une copie triée) — pratique pour garder les données initiales intactes.</p>`,
        code: `table = [
    {"nom": "Turing",   "naissance": 1912},
    {"nom": "Lovelace", "naissance": 1815},
    {"nom": "Hopper",   "naissance": 1906},
]

# Tri croissant par année de naissance
par_annee = sorted(table, key=lambda l: l["naissance"])
print("Du + ancien :", [l["nom"] for l in par_annee])

# Tri alphabétique par nom
par_nom = sorted(table, key=lambda l: l["nom"])
print("Alphabétique :", [l["nom"] for l in par_nom])

# Tri décroissant (du plus récent)
recent = sorted(table, key=lambda l: l["naissance"], reverse=True)
print("Du + récent :", [l["nom"] for l in recent])`,
      },
      {
        title: "Calculer des statistiques sur une colonne",
        html: `
        <p>Au-delà de la recherche et du tri, on veut souvent <strong>résumer</strong> les données : combien de lignes ? quelle moyenne ? quel maximum ? On combine un <strong>parcours</strong> (ou une compréhension pour extraire une colonne) avec les fonctions <code>len</code>, <code>sum</code>, <code>min</code>, <code>max</code>.</p>
        <p>La technique clé : extraire d'abord la colonne dans une liste de nombres, puis appliquer la fonction.</p>`,
        code: `notes = [
    {"nom": "Ada",   "note": 17},
    {"nom": "Alan",  "note": 12},
    {"nom": "Grace", "note": 19},
    {"nom": "Linus", "note": 14},
]

# Extraire la colonne "note"
valeurs = [l["note"] for l in notes]
print("notes :", valeurs)

print("effectif :", len(notes))
print("moyenne  :", round(sum(valeurs) / len(valeurs), 2))
print("mini     :", min(valeurs))
print("maxi     :", max(valeurs))

# Le meilleur élève (la LIGNE qui maximise la note)
meilleur = max(notes, key=lambda l: l["note"])
print("major    :", meilleur["nom"])

# Combien ont la moyenne (>= 10) ?
print("reçus    :", len([l for l in notes if l["note"] >= 10]))`,
      },
      {
        title: "Fusionner deux tables (jointure)",
        html: `
        <p>Souvent l'information est répartie dans <strong>deux tables</strong> qui partagent une colonne commune (une « clé »). Les <strong>combiner</strong> s'appelle une <strong>jointure</strong> — le principe au cœur des bases de données.</p>
        <p>Exemple : une table de personnes contient un <em>code pays</em> ; une autre table (ici un dictionnaire) donne le <em>nom complet</em> de chaque pays. On enrichit chaque personne avec le nom complet.</p>
        <p class="note">On copie chaque ligne (<code>dict(p)</code>) avant de l'enrichir, pour ne pas modifier la table d'origine — bonne habitude vue avec le tri.</p>`,
        code: `personnes = [
    {"nom": "Turing", "code_pays": "UK"},
    {"nom": "Hopper", "code_pays": "US"},
]
noms_pays = {"UK": "Royaume-Uni", "US": "États-Unis"}

fusion = []
for p in personnes:
    ligne = dict(p)                            # copie de la ligne
    ligne["pays"] = noms_pays[p["code_pays"]]  # on ajoute la colonne
    fusion.append(ligne)

for l in fusion:
    print(l["nom"], "->", l["pays"])`,
      },
      {
        title: "Synthèse : la chaîne de traitement",
        html: `
        <p>Traiter des données en tables suit presque toujours le même <strong>pipeline</strong> :</p>
        <p style="text-align:center"><strong>charger</strong> (CSV → liste de dictionnaires) → <strong>filtrer</strong> (compréhension) → <strong>trier</strong> (<code>sorted</code>) → <strong>calculer</strong> (<code>len</code>/<code>sum</code>/<code>min</code>/<code>max</code>) → éventuellement <strong>fusionner</strong>.</p>
        <p>Chaque étape produit une nouvelle table ou une valeur, sans détruire les données d'origine. C'est exactement la démarche du <strong>projet « Enquête sur un fichier CSV »</strong> : entraîne-toi dessus pour mettre bout à bout toutes ces briques sur un vrai jeu de données.</p>
        <p class="warnbox">⚠️ Les deux pièges à retenir : (1) les valeurs d'un CSV sont des <em>chaînes</em> → convertir avant de calculer ; (2) un tri ou un filtre se fait <em>toujours</em> avec une <code>key</code>/condition portant sur la bonne colonne.</p>`,
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
        title: "Le Web : un dialogue client-serveur",
        html: `
        <p>Quand tu tapes une adresse dans ton navigateur, que se passe-t-il vraiment ? Le Web fonctionne sur un modèle <strong>client-serveur</strong>, comme un client au restaurant et la cuisine :</p>
        <ol>
          <li>ton <strong>navigateur</strong> (le <em>client</em> : Chrome, Firefox…) envoie une <strong>requête</strong> ;</li>
          <li>un <strong>serveur</strong> (un ordinateur distant qui héberge le site) reçoit la requête et renvoie une <strong>réponse</strong> : le plus souvent une page HTML.</li>
        </ol>
        <p>Cet échange suit un <strong>protocole</strong> commun, <strong>HTTP</strong>, et l'adresse demandée est une <strong>URL</strong>. Décortiquons une URL :</p>
        <pre><code>https://  www.exemple.fr  /recherche  ?ville=Beyrouth
└─protocole┘ └──domaine──┘ └─chemin─┘ └──paramètres──┘</code></pre>
        <p>Retiens dès maintenant cette idée : <strong>une page reçue est juste du texte</strong> (du HTML) que le navigateur sait afficher. C'est ce texte qu'on apprend à écrire.</p>`,
      },
      {
        title: "Les trois langages du Web",
        html: `
        <p>Une page web combine trois technologies aux rôles bien distincts. C'est <em>la</em> distinction fondatrice du thème :</p>
        <table>
          <tr><th>Langage</th><th>Rôle</th><th>Analogie (une maison)</th></tr>
          <tr><td><strong>HTML</strong></td><td>le contenu et la structure (titres, paragraphes, images, liens)</td><td>les murs, le squelette</td></tr>
          <tr><td><strong>CSS</strong></td><td>la présentation (couleurs, polices, mise en page)</td><td>la peinture, la déco</td></tr>
          <tr><td><strong>JavaScript</strong></td><td>l'interactivité (réagir aux actions de l'utilisateur)</td><td>l'électricité, les interrupteurs</td></tr>
        </table>
        <p>Une même page peut donc être <em>restructurée</em> (HTML), <em>redécorée</em> (CSS) ou <em>rendue interactive</em> (JS) indépendamment. C'est pourquoi on sépare ces trois langages.</p>
        <p class="note">🎯 Activité (en îlot) : sur la page d'accueil d'un site que vous connaissez, identifiez 3 éléments qui relèvent du HTML, 2 du CSS, 1 du JavaScript. Justifiez.</p>`,
      },
      {
        title: "Structure d'un document HTML",
        html: `
        <p>HTML organise le contenu avec des <strong>balises</strong> (<em>tags</em>), le plus souvent par <strong>paires</strong> : une balise ouvrante <code>&lt;p&gt;</code> et une fermante <code>&lt;/p&gt;</code> qui encadrent un contenu. Les balises peuvent être <strong>imbriquées</strong>. Voici une page complète minimale :</p>
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
        <p>Deux zones : le <code>&lt;head&gt;</code> contient les <strong>métadonnées</strong> (titre de l'onglet, encodage — non affichées dans la page) ; le <code>&lt;body&gt;</code> contient tout ce qui est <strong>affiché</strong>.</p>
        <p>Quelques balises à connaître :</p>
        <table>
          <tr><th>Balise</th><th>Rôle</th></tr>
          <tr><td><code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code></td><td>titres (du plus grand au plus petit)</td></tr>
          <tr><td><code>&lt;p&gt;</code></td><td>paragraphe</td></tr>
          <tr><td><code>&lt;a href="..."&gt;</code></td><td>lien hypertexte</td></tr>
          <tr><td><code>&lt;img src="..."&gt;</code></td><td>image (balise seule, sans fermeture)</td></tr>
          <tr><td><code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code></td><td>liste à puces et ses éléments</td></tr>
        </table>
        <p>Le <code>href</code> d'un lien et le <code>src</code> d'une image sont des <strong>attributs</strong> : des informations ajoutées dans la balise ouvrante sous la forme <code>nom="valeur"</code>.</p>`,
      },
      {
        title: "La mise en forme avec CSS",
        html: `
        <p>Le CSS décrit <strong>comment</strong> afficher les éléments. Une <strong>règle</strong> CSS = un <strong>sélecteur</strong> (quels éléments ?) suivi de <strong>propriétés</strong> entre accolades (quel style ?).</p>
        <pre><code>h1 { color: indigo; text-align: center; }
p  { font-size: 16px; line-height: 1.5; }
.important { background: yellow; }   /* une classe */
#menu      { border: 1px solid gray; } /* un identifiant */</code></pre>
        <p>Trois types de sélecteurs, à bien distinguer :</p>
        <table>
          <tr><th>Sélecteur</th><th>Cible</th><th>Côté HTML</th></tr>
          <tr><td><code>p</code></td><td>toutes les balises de ce type</td><td><code>&lt;p&gt;…&lt;/p&gt;</code></td></tr>
          <tr><td><code>.important</code> (point)</td><td>tous les éléments d'une <strong>classe</strong> (réutilisable)</td><td><code>&lt;p class="important"&gt;</code></td></tr>
          <tr><td><code>#menu</code> (dièse)</td><td>l'élément d'un <strong>identifiant</strong> (unique)</td><td><code>&lt;div id="menu"&gt;</code></td></tr>
        </table>
        <p class="warnbox">⚠️ Confusion classique : le <strong>point</strong> (<code>.</code>) cible une <em>classe</em> (plusieurs éléments) ; le <strong>dièse</strong> (<code>#</code>) cible un <em>identifiant</em> (un seul élément). À ne pas inverser.</p>`,
      },
      {
        title: "Client et serveur : qui exécute quoi ?",
        html: `
        <p>Reprenons le modèle client-serveur, mais côté <strong>exécution</strong> : où tourne le code ?</p>
        <ul>
          <li><strong>Côté client</strong> (dans <em>ton</em> navigateur) : HTML, CSS, JavaScript. C'est rapide et réactif, mais l'utilisateur peut tout <strong>voir et modifier</strong> (clic droit → « code source »).</li>
          <li><strong>Côté serveur</strong> (sur la machine distante) : le traitement des données, l'accès aux bases de données, les vérifications sensibles. Invisible et hors de portée de l'utilisateur.</li>
        </ul>
        <p class="warnbox">🔒 Règle de sécurité capitale : <strong>ne jamais faire confiance aux données venant du client</strong>. Une vérification faite uniquement en JavaScript (côté client) peut être contournée. Les contrôles qui comptent (mot de passe, prix, droits) se refont <strong>toujours côté serveur</strong>.</p>
        <p>Exemple : la validation JavaScript d'un formulaire améliore le <em>confort</em> (message d'erreur immédiat), mais le serveur doit re-vérifier avant d'enregistrer quoi que ce soit.</p>`,
      },
      {
        title: "Le protocole HTTP : GET et POST",
        html: `
        <p>Quand un <strong>formulaire</strong> envoie des données au serveur, il utilise une <strong>méthode</strong> HTTP. Les deux principales :</p>
        <table>
          <tr><th></th><th>GET</th><th>POST</th></tr>
          <tr><td>Où vont les données</td><td>dans l'<strong>URL</strong> (visibles)</td><td>dans le <strong>corps</strong> de la requête (hors URL)</td></tr>
          <tr><td>Usage typique</td><td>recherche, navigation, filtre</td><td>connexion, mot de passe, envoi de fichier</td></tr>
          <tr><td>Mémorisable en favori / partageable</td><td>oui</td><td>non</td></tr>
          <tr><td>Adapté aux données sensibles</td><td>non</td><td>oui</td></tr>
        </table>
        <p>Dans une URL, les paramètres GET suivent le <code>?</code>, sous forme de paires <code>clé=valeur</code> séparées par <code>&amp;</code> :</p>
        <pre><code>recherche?ville=Beyrouth&amp;jour=lundi&amp;age=15</code></pre>
        <p>On peut écrire en Python un petit « analyseur » qui retrouve ces paramètres — c'est exactement ce que fait le serveur en recevant la requête :</p>`,
        code: `# Décomposer les paramètres d'une URL (style GET)
url = "recherche?ville=Beyrouth&jour=lundi&age=15"

chemin, requete = url.split("?")        # sépare avant/après le ?
parametres = {}
for couple in requete.split("&"):       # chaque "clé=valeur"
    cle, valeur = couple.split("=")
    parametres[cle] = valeur

print("Page :", chemin)
print("Paramètres :", parametres)
print("Ville demandée :", parametres["ville"])`,
      },
      {
        title: "Réagir à un événement (JavaScript)",
        html: `
        <p>JavaScript rend la page <strong>interactive</strong> en réagissant à des <strong>événements</strong> : un clic (<code>click</code>), un survol, une frappe au clavier, l'envoi d'un formulaire (<code>submit</code>)… Le mécanisme : on attache un <strong>écouteur</strong> (<em>listener</em>) à un élément avec <code>addEventListener</code>, et on lui donne la fonction à exécuter quand l'événement survient.</p>
        <pre><code>&lt;button id="b"&gt;Cliquez-moi&lt;/button&gt;
&lt;p id="msg"&gt;&lt;/p&gt;
&lt;script&gt;
  const bouton = document.getElementById("b");
  bouton.addEventListener("click", function () {
    document.getElementById("msg").textContent = "Bravo, événement reçu !";
  });
&lt;/script&gt;</code></pre>
        <p>À chaque clic sur le bouton, la fonction s'exécute et change le texte du paragraphe. Étapes clés : (1) <strong>récupérer</strong> un élément (<code>getElementById</code>), (2) <strong>écouter</strong> un événement, (3) <strong>modifier</strong> la page en réponse.</p>
        <p class="note">▶️ Pour tester : recopie ce code dans un fichier <code>page.html</code> et ouvre-le dans un navigateur (l'éditeur Python du site n'exécute pas le JavaScript).</p>`,
      },
      {
        title: "Synthèse et mise en pratique",
        html: `
        <p>Récapitulons la répartition des rôles, qui est le cœur du thème :</p>
        <table>
          <tr><th>Je veux…</th><th>J'utilise…</th></tr>
          <tr><td>ajouter un titre, un champ, un bouton</td><td>HTML</td></tr>
          <tr><td>changer une couleur, centrer, espacer</td><td>CSS</td></tr>
          <tr><td>réagir à un clic, valider une saisie</td><td>JavaScript</td></tr>
          <tr><td>envoyer des données au serveur</td><td>un formulaire (GET ou POST)</td></tr>
          <tr><td>sécuriser un traitement</td><td>le serveur (jamais le client seul)</td></tr>
        </table>
        <p>Pour tout assembler sur un cas concret — maquette, formulaire, validation JavaScript, choix GET/POST — enchaîne sur le <strong>projet « Mini-site d'inscription »</strong>.</p>`,
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
        title: "Qu'y a-t-il dans un ordinateur ?",
        html: `
        <p>Avant de parler de logiciels, ouvrons le capot. Un ordinateur, c'est quelques grands organes qui coopèrent :</p>
        <table>
          <tr><th>Composant</th><th>Rôle</th><th>Analogie (un bureau)</th></tr>
          <tr><td><strong>Processeur (CPU)</strong></td><td>exécute les instructions, calcule</td><td>le cerveau / la personne qui travaille</td></tr>
          <tr><td><strong>Mémoire vive (RAM)</strong></td><td>stocke temporairement programme et données en cours</td><td>le bureau où on étale ses feuilles</td></tr>
          <tr><td><strong>Stockage (disque/SSD)</strong></td><td>conserve les données même éteint</td><td>les tiroirs/armoires</td></tr>
          <tr><td><strong>Entrées / sorties</strong></td><td>communiquent avec l'extérieur</td><td>clavier, écran, réseau</td></tr>
        </table>
        <p>La RAM est <strong>rapide mais volatile</strong> (effacée à l'extinction) ; le disque est <strong>lent mais permanent</strong>. C'est pour cela qu'on « enregistre » son travail : on le copie de la RAM vers le disque. Voyons maintenant comment tout cela s'articule, avec un modèle vieux de 1945 toujours d'actualité.</p>`,
      },
      {
        title: "Le modèle de von Neumann",
        html: `
        <p>Proposé en 1945 par John von Neumann, ce modèle décrit l'architecture de presque <em>tous</em> les ordinateurs actuels. Il distingue quatre composants :</p>
        <ul>
          <li><strong>Unité de commande (UC)</strong> — lit et <em>décode</em> les instructions du programme, et orchestre le reste ;</li>
          <li><strong>Unité arithmétique et logique (UAL)</strong> — <em>effectue</em> les calculs (additions, comparaisons, et/ou/non). UC + UAL forment le <strong>processeur (CPU)</strong> ;</li>
          <li><strong>Mémoire</strong> — stocke à la fois le <em>programme</em> ET les <em>données</em> ;</li>
          <li><strong>Entrées / sorties (E/S)</strong> — échangent avec l'extérieur (clavier, écran, disque).</li>
        </ul>
        <p><strong>L'idée révolutionnaire :</strong> le programme est rangé en mémoire <em>comme</em> des données (« programme enregistré »). On peut donc charger un nouveau programme sans recâbler la machine — c'est ce qui rend l'ordinateur <em>universel</em>.</p>
        <p>Le processeur répète sans cesse un cycle à trois temps :</p>
        <p style="text-align:center"><strong>charger</strong> (lire l'instruction en mémoire) → <strong>décoder</strong> (comprendre) → <strong>exécuter</strong> → (recommencer)</p>
        <p class="warnbox">⚠️ Distinction fréquemment demandée : l'<strong>UC</strong> <em>commande/décode</em>, l'<strong>UAL</strong> <em>calcule</em>. Ne pas confondre.</p>`,
      },
      {
        title: "Du transistor à la porte logique",
        html: `
        <p>Comment le processeur « calcule »-t-il, avec seulement de l'électricité ? Tout repose sur le <strong>transistor</strong> : un minuscule <em>interrupteur</em> commandé électriquement (passant = 1, bloqué = 0). Un processeur moderne en contient des <strong>milliards</strong>.</p>
        <p>En combinant des transistors, on fabrique des <strong>portes logiques</strong> qui réalisent les opérations booléennes du thème 2 :</p>
        <table>
          <tr><th>Porte</th><th>Donne 1 si…</th></tr>
          <tr><td><strong>ET</strong> (AND)</td><td>les deux entrées valent 1</td></tr>
          <tr><td><strong>OU</strong> (OR)</td><td>au moins une entrée vaut 1</td></tr>
          <tr><td><strong>NON</strong> (NOT)</td><td>l'entrée vaut 0 (elle inverse)</td></tr>
          <tr><td><strong>OU exclusif</strong> (XOR)</td><td>les deux entrées sont différentes</td></tr>
        </table>
        <p>En assemblant ces portes, on construit des circuits qui <em>additionnent</em>, <em>comparent</em>, <em>mémorisent</em>. L'algèbre de Boole (thème 2) est donc littéralement gravée dans le silicium. C'est le pont entre les maths logiques et le matériel.</p>`,
      },
      {
        title: "Construire un circuit : le demi-additionneur",
        html: `
        <p>Illustrons : comment additionner <strong>deux bits</strong> a et b ? Posons les 4 cas à la main :</p>
        <table>
          <tr><th>a</th><th>b</th><th>somme</th><th>retenue</th></tr>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
        </table>
        <p>On reconnaît : la <strong>somme</strong> est un <strong>XOR</strong> (1 si a et b diffèrent), la <strong>retenue</strong> est un <strong>ET</strong> (1 seulement si a=b=1). Ce circuit s'appelle un <strong>demi-additionneur</strong>. Simulons-le en Python avec des fonctions qui jouent le rôle des portes :</p>`,
        code: `# Les portes logiques, simulées par des fonctions booléennes
def ET(a, b):  return a and b
def OU(a, b):  return a or b
def NON(a):    return not a
def XOR(a, b): return (a or b) and not (a and b)

def demi_additionneur(a, b):
    somme = XOR(a, b)      # 1 si a et b diffèrent
    retenue = ET(a, b)     # 1 seulement si a = b = 1
    return somme, retenue

for a in (0, 1):
    for b in (0, 1):
        s, r = demi_additionneur(a, b)
        print(f"{a} + {b} -> somme = {int(s)}, retenue = {int(r)}")`,
      },
      {
        title: "Le rôle du système d'exploitation",
        html: `
        <p>Le matériel seul ne sait rien faire d'utile. Le <strong>système d'exploitation</strong> (OS : Windows, Linux, macOS, Android, iOS…) est le logiciel <em>chef d'orchestre</em> : il fait l'interface entre le matériel et les applications, et partage les ressources entre les programmes.</p>
        <p>Ses grandes missions :</p>
        <ul>
          <li>gérer les <strong>processus</strong> (les programmes en cours), en donnant à chacun un peu de temps de processeur (il y en a bien plus que de cœurs !) ;</li>
          <li>gérer la <strong>mémoire</strong> (qui occupe quoi en RAM) ;</li>
          <li>gérer le <strong>système de fichiers</strong> (organisation du disque) ;</li>
          <li>piloter les <strong>périphériques</strong> via des <em>pilotes</em> (drivers) ;</li>
          <li>assurer la <strong>sécurité</strong> : utilisateurs, mots de passe, droits d'accès.</li>
        </ul>
        <p class="note">💡 Les OS <strong>libres</strong> comme <strong>GNU/Linux</strong> (code source ouvert, gratuit) sont partout : serveurs du Web, box Internet, Android, supercalculateurs. Un même OS pilote des matériels très différents grâce aux pilotes.</p>
        <p class="warnbox">⚠️ L'OS <em>pilote</em> le matériel ; il ne le <em>fabrique</em> pas. C'est un logiciel, pas un composant physique.</p>`,
      },
      {
        title: "Le système de fichiers arborescent",
        html: `
        <p>L'OS range les fichiers dans une <strong>arborescence</strong> : des dossiers (répertoires) qui en contiennent d'autres, à partir d'une <strong>racine</strong>. C'est un arbre renversé.</p>
        <pre><code>/                  (racine)
└── home
    └── ada
        ├── photos
        └── cours
            └── nsi.py</code></pre>
        <p>Pour désigner un fichier, on donne son <strong>chemin</strong>, de deux façons :</p>
        <ul>
          <li><strong>chemin absolu</strong> — depuis la racine, commence par <code>/</code> : <code>/home/ada/cours/nsi.py</code> ;</li>
          <li><strong>chemin relatif</strong> — depuis le dossier où l'on se trouve : si je suis dans <code>/home/ada</code>, alors <code>cours/nsi.py</code> suffit ;</li>
          <li>deux raccourcis essentiels : <code>.</code> = le dossier courant, <code>..</code> = le dossier parent (remonter d'un cran).</li>
        </ul>
        <p>Exemple : depuis <code>/home/ada/cours</code>, le chemin relatif <code>../photos</code> mène à <code>/home/ada/photos</code> (on remonte avec <code>..</code> puis on descend dans photos).</p>`,
      },
      {
        title: "La ligne de commande",
        html: `
        <p>Le <strong>terminal</strong> permet de piloter l'ordinateur en <em>tapant</em> des commandes, sans souris. C'est puissant, rapide, et indispensable sur les serveurs (qui n'ont souvent pas d'écran graphique). Les commandes Unix/Linux essentielles :</p>
        <table>
          <tr><th>Commande</th><th>Rôle</th></tr>
          <tr><td><code>pwd</code></td><td><em>print working directory</em> : où suis-je ?</td></tr>
          <tr><td><code>ls</code></td><td>lister le contenu du dossier courant</td></tr>
          <tr><td><code>cd dossier</code></td><td>se déplacer dans un dossier (<code>cd ..</code> pour remonter)</td></tr>
          <tr><td><code>mkdir nom</code></td><td>créer un dossier</td></tr>
          <tr><td><code>cat fichier</code></td><td>afficher le contenu d'un fichier</td></tr>
          <tr><td><code>cp / mv / rm</code></td><td>copier / déplacer / supprimer</td></tr>
          <tr><td><code>chmod</code></td><td>changer les permissions d'un fichier</td></tr>
        </table>
        <p>Exemple de session pour atteindre <code>nsi.py</code> depuis la racine :</p>
        <pre><code>$ pwd
/
$ cd home/ada/cours
$ ls
nsi.py
$ cat nsi.py</code></pre>
        <p class="note">🎮 Le <strong>projet « Mission terminal »</strong> propose un simulateur pour t'entraîner à naviguer et retrouver un fichier caché.</p>`,
      },
      {
        title: "Droits et permissions",
        html: `
        <p>Sur un système multi-utilisateurs, chaque fichier porte des <strong>permissions</strong> pour trois catégories de personnes : le <strong>propriétaire</strong>, son <strong>groupe</strong>, et les <strong>autres</strong>. Pour chaque catégorie, trois droits possibles : <strong>r</strong> (lecture), <strong>w</strong> (écriture), <strong>x</strong> (exécution).</p>
        <p>La notation <code>rwxr-x---</code> se lit par blocs de 3 :</p>
        <table>
          <tr><th>propriétaire</th><th>groupe</th><th>autres</th></tr>
          <tr><td>rwx (tout)</td><td>r-x (lire + exécuter)</td><td>--- (rien)</td></tr>
        </table>
        <p>On code souvent ces droits en <strong>octal</strong> : <strong>r vaut 4, w vaut 2, x vaut 1</strong> ; on additionne par bloc. Ainsi <code>rwx</code> = 4+2+1 = 7, <code>r-x</code> = 4+0+1 = 5, <code>---</code> = 0. D'où la commande <code>chmod 750 fichier</code>.</p>`,
        code: `# Convertir une chaîne de droits en chiffre octal
def permissions_vers_octal(rwx):
    valeurs = {"r": 4, "w": 2, "x": 1}
    total = 0
    for c in rwx:
        total += valeurs.get(c, 0)   # un tiret '-' n'ajoute rien
    return total

prop   = permissions_vers_octal("rwx")  # 7
groupe = permissions_vers_octal("r-x")  # 5
autres = permissions_vers_octal("---")  # 0
print(f"chmod {prop}{groupe}{autres}")  # chmod 750`,
      },
      {
        title: "Synthèse : du transistor à l'utilisateur",
        html: `
        <p>Ce thème relie plusieurs niveaux qui s'empilent :</p>
        <p style="text-align:center"><strong>transistors</strong> → <strong>portes logiques</strong> → <strong>processeur</strong> (modèle de von Neumann) → <strong>système d'exploitation</strong> → <strong>applications</strong> que tu utilises.</p>
        <p>Chaque couche cache la complexité de celle d'en dessous : tu cliques sur une icône (application) sans penser aux milliards de transistors qui s'activent. On retrouve aussi le fil rouge de l'année : l'<em>algèbre de Boole</em> (thème 2) gravée dans le matériel, et le <em>binaire</em> partout.</p>
        <p>Pour pratiquer concrètement la partie « système de fichiers + ligne de commande », enchaîne sur le <strong>projet « Mission terminal »</strong>.</p>`,
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
      "Utiliser la documentation d'une bibliothèque (module).",
      "Comparer la syntaxe de plusieurs langages.",
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
        title: "Utiliser une bibliothèque et sa documentation",
        html: `
        <p>On ne réécrit pas tout soi-même : une <strong>bibliothèque</strong> (ou module) regroupe des fonctions prêtes à l'emploi. On l'<strong>importe</strong>, puis on lit sa <strong>documentation</strong> pour savoir ce qu'attend chaque fonction et ce qu'elle renvoie.</p>
        <ul>
          <li><code>import math</code> puis <code>math.sqrt(2)</code> ;</li>
          <li><code>help(fonction)</code> et <code>dir(module)</code> affichent l'aide et la liste des fonctions ;</li>
          <li>la documentation officielle décrit les <em>paramètres</em>, la <em>valeur de retour</em> et donne des exemples.</li>
        </ul>
        <p class="note">Réflexe NSI : devant une fonction inconnue, on lit sa documentation avant de l'utiliser, on teste sur un petit exemple.</p>`,
        code: `import math, random

print(math.sqrt(16))        # racine carrée -> 4.0
print(math.pi)              # constante
print(max([3, 9, 1]))       # fonction intégrée

# Lire l'aide d'une fonction (sa documentation)
help(math.factorial)

# random : tirer un entier entre 1 et 6 (dé)
random.seed(0)
print("dé :", random.randint(1, 6))`,
      },
      {
        title: "Comparer plusieurs langages",
        html: `
        <p>Python n'est pas le seul langage. Chaque langage a ses usages, mais les <strong>concepts</strong> (variables, conditions, boucles, fonctions) se retrouvent partout. Comparer aide à comprendre que l'on apprend des <em>idées</em>, pas seulement une syntaxe.</p>
        <table>
          <tr><th>Langage</th><th>Usage typique</th><th>« Bonjour »</th></tr>
          <tr><td>Python</td><td>apprentissage, données, IA</td><td><code>print("Bonjour")</code></td></tr>
          <tr><td>JavaScript</td><td>pages web (navigateur)</td><td><code>console.log("Bonjour");</code></td></tr>
          <tr><td>C</td><td>systèmes, performance</td><td><code>printf("Bonjour");</code></td></tr>
          <tr><td>Java</td><td>applications, Android</td><td><code>System.out.println("Bonjour");</code></td></tr>
        </table>
        <p>Différences fréquentes : Python délimite les blocs par l'<strong>indentation</strong>, beaucoup d'autres par des <strong>accolades</strong> <code>{ }</code> ; Python a un <strong>typage dynamique</strong>, C et Java un <strong>typage statique</strong> (on déclare le type).</p>`,
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
      "Classer des données avec les k plus proches voisins (kNN).",
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
        title: "Les k plus proches voisins (kNN)",
        html: `
        <p>Comment une machine peut-elle <strong>classer</strong> automatiquement un objet ? L'algorithme des <strong>k plus proches voisins</strong> (kNN) compare l'objet inconnu à des exemples déjà étiquetés : il regarde ses <em>k</em> voisins les plus proches et lui attribue la <strong>classe majoritaire</strong>.</p>
        <ol>
          <li>Calculer la <strong>distance</strong> entre le point inconnu et chaque exemple.</li>
          <li>Garder les <strong>k</strong> exemples les plus proches.</li>
          <li>Voter : la classe la plus fréquente parmi ces k voisins l'emporte.</li>
        </ol>
        <p class="note">On choisit souvent un <em>k</em> impair pour éviter les égalités. Un <em>k</em> trop petit est sensible au bruit ; trop grand, il mélange des classes éloignées.</p>`,
        code: `donnees = [
    (1, 1, "pomme"), (2, 1, "pomme"),
    (5, 4, "banane"), (6, 4, "banane"),
]

def distance(a, b):
    return ((a[0]-b[0])**2 + (a[1]-b[1])**2) ** 0.5

def knn(donnees, point, k=3):
    voisins = sorted(donnees, key=lambda d: distance(d, point))[:k]
    classes = [v[2] for v in voisins]
    return max(set(classes), key=classes.count)

print(knn(donnees, (5.2, 4.0), k=3))   # banane`,
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
        title: "🃏 Jeu : la frise à reconstituer",
        game: "histoire-frise",
        html: `
        <p>Pour ouvrir le thème, un défi en équipe ! Voici 18 cartes ; chacune décrit une grande étape de
        l'histoire de l'informatique, mais <strong>aucune n'affiche sa date</strong>. À vous de raisonner à partir
        des indices pour classer la frise, de la plus ancienne à la plus récente.</p>
        <p class="note">👥 <strong>En îlot</strong> : discutez à 2 ou 4, mettez-vous d'accord sur l'ordre, puis cliquez
        sur <em>Vérifier</em> pour la mise en commun. Le bouton <em>Imprimer les cartes</em> fournit aussi une version
        papier à découper, avec la frise corrigée pour l'enseignant.</p>`,
      },
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
      {
        title: "🔓 Bonus — Jeu d'évasion : la salle des machines",
        game: "histoire-escape",
        html: `
        <p>Pour finir, un défi individuel ! Te voilà enfermé(e) dans la réserve du
        <strong>musée de l'informatique</strong>. La seule sortie est verrouillée par un <strong>cadenas à 4 chiffres</strong>.
        Quatre machines mythiques gardent chacune un chiffre du code : résous leur énigme pour le libérer,
        puis compose le code complet et évade-toi !</p>`,
      },
    ],
  },

  /* ============================================================= 9 */
  {
    id: "reseaux",
    num: 9,
    emoji: "📡",
    title: "Réseaux : protocoles, paquets et routage",
    intro:
      "Comment deux machines échangent-elles des données à distance ? On découvre l'idée de protocole, le découpage des messages en paquets, le routage, et ce qui se passe quand un paquet est perdu ou arrive dans le désordre.",
    capacites: [
      "Expliquer le rôle d'un protocole de communication (règles communes).",
      "Comprendre le découpage d'un message en paquets numérotés.",
      "Décrire simplement le routage des paquets sur un réseau.",
      "Reconstituer un message dont les paquets arrivent dans le désordre.",
      "Comprendre les conséquences d'une perte ou d'un doublon de paquet.",
    ],
    sections: [
      {
        title: "Qu'est-ce qu'un réseau et un protocole ?",
        html: `
        <p>Un <strong>réseau</strong> relie des machines pour qu'elles échangent des données. Pour se comprendre, elles suivent un <strong>protocole</strong> : un ensemble de <em>règles communes</em> (format des messages, ordre des échanges). Sans règles communes, deux machines « parlent » sans se comprendre.</p>
        <p>Internet repose sur la famille de protocoles <strong>TCP/IP</strong>. Chaque machine possède une <strong>adresse IP</strong> qui l'identifie sur le réseau.</p>
        <p class="note">Analogie : envoyer une lettre suppose un format commun (adresse, timbre, enveloppe). Le protocole, c'est ce « format » partagé.</p>`,
      },
      {
        title: "Découper un message en paquets",
        html: `
        <p>Un message n'est pas envoyé d'un seul bloc : il est découpé en <strong>paquets</strong>. Chaque paquet contient un <strong>numéro</strong> (pour le remettre dans l'ordre) et un morceau des données. Les paquets voyagent <em>indépendamment</em> et peuvent prendre des chemins différents.</p>
        <ul>
          <li>Avantage : si un paquet est perdu, on ne renvoie que celui-là.</li>
          <li>Le destinataire <strong>réordonne</strong> les paquets grâce à leur numéro.</li>
        </ul>`,
        code: `# Un message est découpé en paquets numérotés
message = "Bonjour le monde"
mots = message.split(" ")
paquets = [{"num": i + 1, "data": m} for i, m in enumerate(mots)]
for p in paquets:
    print(p)

# Reconstruction : on trie par numéro puis on recolle
recompose = " ".join(p["data"] for p in sorted(paquets, key=lambda p: p["num"]))
print("Message reçu :", recompose)`,
      },
      {
        title: "Le routage : trouver le chemin",
        html: `
        <p>Entre l'expéditeur et le destinataire, les paquets traversent des <strong>routeurs</strong>. À chaque étape, le routeur choisit vers quel voisin transmettre le paquet pour se rapprocher de la destination : c'est le <strong>routage</strong>.</p>
        <p>S'il y a plusieurs chemins possibles, le réseau peut en choisir un plus court ou contourner une panne. C'est ce qui rend Internet <strong>robuste</strong>.</p>`,
      },
      {
        title: "Désordre, perte et doublon",
        html: `
        <p>Comme les paquets voyagent séparément, ils peuvent :</p>
        <ul>
          <li>arriver <strong>dans le désordre</strong> → on les retrie par numéro ;</li>
          <li>être <strong>perdus</strong> → il manque un numéro : le destinataire le détecte et peut le redemander ;</li>
          <li>arriver en <strong>double</strong> → on ignore les numéros déjà reçus.</li>
        </ul>
        <p>Le protocole <strong>TCP</strong> gère justement ces problèmes pour livrer un message complet et dans l'ordre.</p>`,
        code: `def reconstruire(paquets):
    vus = {}
    for p in paquets:
        vus[p["num"]] = p["data"]          # un doublon n'est pas répété
    manquants = [n for n in range(1, max(vus) + 1) if n not in vus]
    if manquants:
        print("⚠️ Paquet(s) perdu(s) :", manquants)
    return " ".join(vus[n] for n in sorted(vus))

# Désordre + doublon
paquets = [
    {"num": 3, "data": "monde"},
    {"num": 1, "data": "Bonjour"},
    {"num": 1, "data": "Bonjour"},   # doublon
    {"num": 2, "data": "le"},
]
print(reconstruire(paquets))`,
      },
    ],
  },
];
