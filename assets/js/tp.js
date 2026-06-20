/* =====================================================================
   TP GUIDÉS & RESSOURCES — importés de mon site du DIU NSI (Le Havre)
   https://ebechalani.github.io/DuNSI/
   Adaptés pour la Première : chaque TP est rattaché à un thème (theme).
   - GUIDED_TP : TP pas-à-pas (énoncé, code, questions, corrigés masqués)
   - FICHES_PLUS : fiches « pour aller plus loin »
   - LOGISIM_PLATFORM / LOGISIM_CIRCUITS : circuits à ouvrir dans Logisim
   - ARCHI_PDFS : supports PDF d'architecture
   lang : 'bash' (affiché) | 'python' (exécutable si step.run)
   ===================================================================== */

const TP_SOURCE = "D'après mes TP du DIU NSI (Le Havre)";

const GUIDED_TP = [
  /* ===================== Linux / système — thème architecture-os ===================== */
  {
    id: "memo-linux",
    theme: "architecture-os",
    lang: "bash",
    type: "memo",
    titre: "Mémo — commandes Linux essentielles",
    intro: "Les commandes de base du terminal Unix/Linux, à garder sous les yeux pendant les TP.",
    table: [
      { cmd: "pwd", synt: "pwd", desc: "Affiche le répertoire courant (Present Working Directory)." },
      { cmd: "ls", synt: "ls [-l] [-a]", desc: "-l : format long (droits, taille) ; -a : fichiers cachés." },
      { cmd: "cd", synt: "cd [chemin]", desc: "Change de répertoire. cd ~ : home ; cd .. : parent ; cd - : précédent." },
      { cmd: "mkdir", synt: "mkdir [-p] nom", desc: "Crée un répertoire. -p : crée les parents manquants." },
      { cmd: "touch", synt: "touch fichier", desc: "Crée un fichier vide (ou met à jour sa date)." },
      { cmd: "cp", synt: "cp [-r] src dest", desc: "Copie. -r : récursif (pour les dossiers)." },
      { cmd: "mv", synt: "mv src dest", desc: "Déplace ou renomme (écrase la destination sans avertir !)." },
      { cmd: "rm", synt: "rm [-r] fichier", desc: "Supprime. -r : récursif. ⚠ irréversible (pas de corbeille)." },
      { cmd: "cat", synt: "cat fichier", desc: "Affiche le contenu d'un fichier." },
      { cmd: "wc", synt: "wc -l fichier", desc: "Compte les lignes (-l), mots (-w), caractères (-c)." },
      { cmd: "man", synt: "man commande", desc: "Manuel d'une commande (q pour quitter)." },
      { cmd: "chmod", synt: "chmod 755 fichier", desc: "Modifie les droits. Octal : 7=rwx, 5=r-x, 4=r--." },
    ],
  },
  {
    id: "tp-linux-arbo",
    theme: "architecture-os",
    lang: "bash",
    titre: "TP — Se repérer dans l'arborescence",
    intro: "Objectif : naviguer dans le système de fichiers Linux, comprendre chemins absolus et relatifs.",
    steps: [
      {
        num: "1", titre: "Où suis-je ? Que contient ce dossier ?",
        code: `$ pwd                # Où suis-je ?
$ ls                 # Que contient ce répertoire ?
$ ls -l              # Format long (droits, taille, date)
$ ls -la             # Inclure les fichiers cachés
$ ls /               # Contenu de la racine
$ ls /home           # Répertoires des utilisateurs`,
        questions: [
          "Quel est votre répertoire courant ? Que signifie le ~ dans l'invite ?",
          "Différence entre ls et ls -la ? Que sont les fichiers commençant par . ?",
        ],
        correction: [
          "pwd affiche le répertoire courant, typiquement /home/login. Le ~ (tilde) désigne ce répertoire personnel : cd ~ et cd seul y ramènent.",
          "ls liste les fichiers visibles ; ls -la ajoute les cachés (-a) et le format long (-l). Les fichiers en point (.bashrc) sont surtout des fichiers de configuration.",
        ],
      },
      {
        num: "2", titre: "Chemins absolus et relatifs",
        code: `$ ls /home          # chemin absolu (depuis la racine /)
$ ls ..             # chemin relatif : dossier parent
$ ls ../..          # deux niveaux au-dessus
$ cd ~              # retour au home
$ cd /tmp           # absolu
$ cd -              # revenir au dossier précédent`,
        note: "Chemin absolu = adresse complète depuis /. Chemin relatif = depuis l'endroit où l'on se trouve. ~ = votre dossier home.",
        questions: [
          "Depuis votre home, comment aller à /etc en relatif ? en absolu ?",
          "Que font cd (sans argument) et cd - ?",
        ],
        correction: [
          "Relatif : cd ../../etc (remonter à la racine puis descendre). Absolu : cd /etc (toujours valable).",
          "cd seul ramène au home ; cd - revient au dossier précédent (pratique pour les allers-retours).",
        ],
      },
      {
        num: "3", titre: "Créer l'arborescence d'un projet",
        code: `$ cd ~
$ mkdir NSI_projet
$ cd NSI_projet
$ mkdir scripts data docs
$ ls
$ mkdir -p scripts/utilitaires/maths   # crée toute la chaîne d'un coup`,
        questions: ["À quoi sert l'option -p de mkdir ?"],
        correction: ["-p crée tous les dossiers parents manquants en une fois : mkdir -p a/b/c crée a, puis a/b, puis a/b/c."],
      },
    ],
  },
  {
    id: "tp-linux-fichiers",
    theme: "architecture-os",
    lang: "bash",
    titre: "TP — Manipuler des fichiers",
    intro: "Objectif : créer, copier, déplacer, supprimer des fichiers ; comprendre les fichiers cachés.",
    steps: [
      {
        num: "1", titre: "Créer et inspecter",
        code: `$ touch data/eleves.txt
$ ls -l data/
$ cat > data/eleves.txt << 'EOF'
Alice 15
Bob 12
Clara 17
EOF
$ cat data/eleves.txt     # afficher
$ wc -l data/eleves.txt   # compter les lignes`,
        questions: [
          "Différence entre cat > fichier et cat >> fichier ?",
          "Que comptent wc -l, wc -w, wc -c ?",
        ],
        correction: [
          "cat > écrase le contenu ; cat >> ajoute à la fin sans rien effacer.",
          "wc -l : lignes ; wc -w : mots ; wc -c : caractères. Sur 3 lignes, wc -l renvoie 3.",
        ],
      },
      {
        num: "2", titre: "Copier, déplacer, renommer",
        code: `$ cp data/eleves.txt data/backup.txt   # copier
$ mv data/backup.txt docs/             # déplacer
$ mv docs/backup.txt docs/sauv.txt     # renommer
$ cp -r data/ data_sauvegarde/         # copier un dossier (récursif)`,
        note: "⚠ mv écrase la destination sans avertir si elle existe. Vérifiez avant.",
        questions: [
          "Différence entre cp et mv ?",
          "Pourquoi cp -r pour un dossier ?",
        ],
        correction: [
          "cp copie (l'original reste) ; mv déplace/renomme (l'original disparaît).",
          "Un dossier contient d'autres fichiers : -r (récursif) copie tout son contenu. Sans -r, cp refuse un dossier.",
        ],
      },
      {
        num: "3", titre: "Fichiers cachés et suppression",
        code: `$ touch .config_perso
$ ls            # invisible
$ ls -a         # visible avec -a
$ rm .config_perso
$ rm -r data_sauvegarde/   # dossier + contenu`,
        note: "⚠ rm est irréversible : pas de corbeille sous Linux.",
        questions: ["Pourquoi des fichiers commencent-ils par . ? (donnez des exemples)"],
        correction: ["Convention pour cacher des fichiers de configuration et ne pas encombrer l'affichage : .bashrc configure le shell, .ssh stocke les clés."],
      },
    ],
  },
  {
    id: "tp-linux-droits",
    theme: "architecture-os",
    lang: "bash",
    titre: "TP — Droits et permissions",
    intro: "Objectif : lire et modifier les permissions Unix (r, w, x) en notation octale et symbolique.",
    steps: [
      {
        num: "1", titre: "Lire les permissions",
        code: `$ ls -l ~/NSI_projet/
# -rw-r--r-- 1 user group 1234 ... fichier.txt
# drwxr-xr-x 2 user group 4096 ... scripts/
#  ↑ type | propriétaire | groupe | autres`,
        note: "Octal : r=4, w=2, x=1. On additionne par bloc de 3 (propriétaire, groupe, autres).",
        questions: ["Décodez -rwxr-x--- : qui peut faire quoi ?"],
        correction: ["Propriétaire (rwx) : tout. Groupe (r-x) : lire + exécuter. Autres (---) : rien."],
      },
      {
        num: "2", titre: "Modifier les permissions",
        code: `$ chmod 755 scripts/        # rwxr-xr-x
$ chmod 644 data/eleves.txt # rw-r--r--
$ chmod +x bonjour.sh       # ajouter exécution
$ chmod o-r secret.txt      # retirer la lecture aux autres`,
        questions: ["Quelle commande donne tout au propriétaire, lecture seule au groupe, rien aux autres ?"],
        correction: ["chmod 740 fichier : 7=rwx (propriétaire), 4=r-- (groupe), 0=--- (autres)."],
      },
      {
        num: "3", titre: "Bonus — premier script bash", bonus: true,
        code: `$ cat > bonjour.sh << 'FIN'
#!/bin/bash
NOM="Monde"
if [ -n "$1" ]; then NOM="$1"; fi
echo "Bonjour, $NOM !"
FIN
$ chmod +x bonjour.sh   # rendre exécutable
$ ./bonjour.sh "NSI"`,
        note: "Bonus (au-delà de la Première). Le shebang #!/bin/bash indique l'interpréteur ; sans chmod +x, le fichier reste du texte non exécutable.",
        questions: ["Pourquoi faut-il chmod +x avant de lancer ./bonjour.sh ?"],
        correction: ["Sans le droit d'exécution (x), Linux considère le fichier comme du simple texte et refuse de le lancer comme un programme."],
      },
    ],
  },

  /* ===================== Python — thème langages-prog ===================== */
  {
    id: "py-variables",
    theme: "langages-prog",
    lang: "python",
    titre: "TP Python — Variables et types",
    intro: "Exécute chaque étape (▶) et observe. Les booléens réservent une surprise !",
    steps: [
      {
        num: "1", titre: "Les 4 types fondamentaux", run: true,
        code: `age     = 17        # int   — entier
moyenne = 13.5      # float — décimal
prenom  = 'Alice'   # str   — chaîne
admis   = True      # bool  — booléen
print(type(age), type(moyenne), type(prenom), type(admis))

# bool est un sous-type de int :
print(True + True)    # ?
print(True == 1, False == 0)`,
        questions: ["Que renvoie True + True ? Qu'est-ce que cela révèle sur le type bool ?"],
        correction: ["True + True renvoie 2 : en Python bool est un sous-type de int (True=1, False=0). On peut donc compter des conditions vraies en additionnant des booléens."],
      },
      {
        num: "2", titre: "Les opérateurs", run: true,
        code: `print(17 / 5)    # division — TOUJOURS un float
print(17 // 5)   # division entière (quotient)
print(17 % 5)    # modulo (reste)
print(2 ** 10)   # puissance
print(17 == 17, 17 != 10, 17 >= 17)
print(True and False, True or False, not True)`,
        questions: ["Différence entre 17/5 et 17//5 ? Où utilise-t-on // et % en NSI ?"],
        correction: ["17/5 = 3.4 (float) ; 17//5 = 3 (quotient entier). On utilise // et % pour la division euclidienne, le test de parité (n % 2 == 0), l'extraction des chiffres, les conversions de base."],
      },
      {
        num: "3", titre: "Conversions de types", run: true,
        code: `print(int(3.9))     # troncature ou arrondi ?
print(float(17))
print(str(42))
print(int('42'))    # depuis une chaîne`,
        questions: ["int(3.9) fait-il un arrondi ou une troncature ?"],
        correction: ["int(3.9) renvoie 3 : c'est une TRONCATURE (on enlève la partie décimale). Un arrondi donnerait 4 ; pour cela on utilise round(3.9)."],
      },
      {
        num: "4", titre: "Exercice — calculatrice de moyenne",
        code: `# Complète les blancs, puis recopie dans l'éditeur pour exécuter :
note1 = ___
note2 = ___
note3 = ___
moyenne = ___
print(f'Moyenne : {moyenne:.2f}')
print(f'Meilleure : {max(note1, note2, note3)}')`,
        questions: ["Complète les quatre blancs."],
        correction: ["note1 = 15 ; note2 = 12 ; note3 = 18 ; moyenne = (note1 + note2 + note3) / 3. Affiche « Moyenne : 15.00 » (le :.2f impose 2 décimales) et « Meilleure : 18 »."],
      },
    ],
  },
  {
    id: "py-conditions",
    theme: "langages-prog",
    lang: "python",
    titre: "TP Python — Les conditions",
    intro: "L'indentation (4 espaces) est OBLIGATOIRE en Python : elle délimite les blocs. (Les exemples utilisent une note fixée ; change sa valeur et relance.)",
    steps: [
      {
        num: "1", titre: "if / else et indentation", run: true,
        code: `note = 8        # change la valeur et relance
if note >= 10:
    print('Admis(e)')      # 4 espaces — obligatoire !
else:
    print('Ajourné(e)')`,
        questions: ["Qu'est-ce qu'une IndentationError ? Pourquoi Python l'impose-t-il ?"],
        correction: ["Elle survient quand le code d'un bloc (après if:, for:…) n'est pas décalé vers la droite. Python utilise l'indentation pour délimiter les blocs (là où d'autres langages utilisent des accolades) : elle fait partie de la syntaxe."],
      },
      {
        num: "2", titre: "if / elif / else et ordre des conditions", run: true,
        code: `note = 17       # essaie 17, 13, 9…
if note >= 16:
    mention = 'Très Bien'
elif note >= 14:
    mention = 'Bien'
elif note >= 12:
    mention = 'Assez Bien'
elif note >= 10:
    mention = 'Passable'
else:
    mention = 'Ajourné(e)'
print(mention)`,
        note: "Piège : si on mettait elif note >= 14 AVANT elif note >= 16, une note de 17 afficherait 'Bien' (la 1re condition vraie l'emporte). On ordonne du plus restrictif au moins restrictif.",
        questions: ["Pourquoi l'ordre des conditions est-il important ?"],
        correction: ["Dès qu'une condition est vraie, Python ignore les elif suivants. Si l'ordre est inversé, une note de 17 valide d'abord >= 14 et reçoit 'Bien' à tort. Il faut tester du seuil le plus haut au plus bas."],
      },
      {
        num: "3", titre: "Exercice — valider la note",
        code: `# Refuser une note < 0 ou > 20 AVANT de calculer la mention.
note = 25
# if ___:
#     print('Note invalide !')
# else:
#     ... (mention)`,
        questions: ["Complète la validation."],
        correction: ["if note < 0 or note > 20: print('Note invalide !') else: (calcul de la mention). Le or est essentiel : la note est invalide si trop petite OU trop grande."],
      },
    ],
  },
  {
    id: "py-boucles",
    theme: "langages-prog",
    lang: "python",
    titre: "TP Python — Les boucles",
    intro: "for : nombre de tours connu (avec range). while : jusqu'à ce qu'une condition change.",
    steps: [
      {
        num: "1", titre: "Boucle for avec range()", run: true,
        code: `print(list(range(5)))          # 0 à 4
print(list(range(1, 6)))       # 1 à 5
print(list(range(0, 20, 5)))   # 0, 5, 10, 15
print(list(range(10, 0, -1)))  # 10 à 1 (décroissant)

total = 0
for i in range(1, 101):
    total += i
print(total)                   # 5050`,
        questions: ["Que produit range(1, 10, 2) ? Écris une boucle affichant les 10 premiers multiples de 7."],
        correction: ["range(1, 10, 2) → 1, 3, 5, 7, 9 (de 1 à 9 par pas de 2). Multiples de 7 : for i in range(1, 11): print(7 * i)."],
      },
      {
        num: "2", titre: "Boucle while (motif d'arrêt)", run: true,
        code: `# Combien de fois diviser 1000 par 2 avant d'atteindre 1 ?
n = 1000
compteur = 0
while n > 1:
    n = n // 2          # n évolue : la boucle finira
    compteur += 1
print('divisions :', compteur)`,
        note: "Danger : si rien n'évolue dans la boucle, la condition reste vraie pour toujours (boucle infinie).",
        questions: ["Pourquoi cette boucle se termine-t-elle forcément ?"],
        correction: ["n est un entier positif qui décroît strictement à chaque tour (division par 2) : il finit par atteindre 1, donc la condition n > 1 devient fausse. C'est un variant de boucle."],
      },
      {
        num: "3", titre: "Exercice — jeu du nombre (à finir en vrai)",
        code: `# À recopier dans Capytale/Thonny (input ne marche pas ici) :
import random
secret = random.randint(1, 20)
tentative = 0
while True:
    guess = int(input('Devine (1-20) : '))
    tentative += 1
    if guess == secret:
        print(f'Trouvé en {tentative} coups')
        break
    elif guess < secret:
        print('Trop petit')
    else:
        print('Trop grand')`,
        questions: ["Pourquoi while True plutôt que for ici ? Que se passe-t-il sans le break ?"],
        correction: ["On ne connaît pas d'avance le nombre d'essais (il dépend du joueur) : while convient. Sans break, while True reste vrai indéfiniment → boucle infinie même après avoir trouvé."],
      },
    ],
  },
];

/* ---------------- Fiches « pour aller plus loin » ---------------- */
const FICHES_PLUS = [
  {
    theme: "langages-prog",
    titre: "Le typage : fort/faible, statique/dynamique",
    summary:
      "Le type définit les valeurs possibles et les opérations autorisées. Python est typé dynamiquement et fortement.",
    contenu: `<ul>
      <li><strong>Fort</strong> (Python, Java) : les conversions doivent être explicites → <code>"3" + 3</code> lève une TypeError.</li>
      <li><strong>Faible</strong> (JavaScript) : conversions implicites → <code>"3" + 3</code> donne <code>"33"</code>.</li>
      <li><strong>Statique</strong> (C, Java) : le type est déclaré et vérifié à la compilation.</li>
      <li><strong>Dynamique</strong> (Python) : le type est déterminé à l'exécution (plus souple, erreurs détectées plus tard).</li>
    </ul>`,
    code: `x = 42
print(str(x) + " ans")   # conversion explicite : "42 ans"
# print(x + " ans")      # TypeError (typage fort)`,
  },
  {
    theme: "langages-prog",
    titre: "Interprétation vs compilation",
    summary:
      "Un programme source (texte) doit être traduit pour la machine. Compilation = tout traduire avant (C, Rust). Interprétation = ligne par ligne (Python). Java : hybride (bytecode + JVM).",
    contenu: `<p><strong>Analogie :</strong> le compilateur traduit tout le livre avant de le publier ; l'interprète traduit en direct, phrase par phrase.</p>
      <ul>
        <li><strong>Compilé</strong> (C, C++, Rust) : rapide à l'exécution, erreurs détectées avant de lancer, peu portable.</li>
        <li><strong>Interprété</strong> (Python, JavaScript) : immédiat et portable, mais plus lent.</li>
      </ul>`,
    code: `print("Ligne 1")    # Python interprété : s'exécute ligne par ligne

def bug_cache():
    return 1 / 0    # ZeroDivisionError — seulement si on l'appelle !

print("Ligne 2")    # s'exécute malgré le bug caché plus haut`,
  },
  {
    theme: "types-construits",
    titre: "Valeur vs référence (le piège des alias)",
    summary:
      "Copier une variable de liste copie une RÉFÉRENCE : les deux pointent le même objet. Les données immuables (str, int, tuple) ne posent pas ce problème.",
    contenu: `<p>Modifier un objet via l'une de ses références affecte toutes les variables qui pointent dessus. Pour une vraie copie indépendante d'une liste : <code>b = a.copy()</code>.</p>`,
    code: `a = [1, 2, 3]
b = a              # b et a -> MÊME objet
b.append(4)
print(a)           # [1, 2, 3, 4] : a aussi modifié !

s = "bonjour"
t = s
t = t.upper()      # crée une NOUVELLE chaîne (str immuable)
print(s, t)        # bonjour BONJOUR`,
  },
];

/* ---------------- Logisim — circuits logiques (thème architecture-os) ---------------- */
const LOGISIM_PLATFORM = {
  title: "Logisim Evolution",
  desc: "Simulateur libre de circuits logiques (gratuit, nécessite Java). Installe-le, puis ouvre les fichiers .circ ci-dessous (Fichier → Ouvrir).",
  url: "https://github.com/logisim-evolution/logisim-evolution/releases/latest",
  dir: "assets/logisim/",
};
const LOGISIM_CIRCUITS = [
  { file: "Addition.circ", icon: "➕", titre: "Additionneurs & soustracteur", cat: "Logique combinatoire", desc: "Demi-additionneur, additionneur complet, 4 bits, additionneur/soustracteur." },
  { file: "Plexer.circ", icon: "🔀", titre: "Encodeurs, décodeurs, multiplexeurs", cat: "Logique combinatoire", desc: "Encodeurs, décodeurs, multiplexeurs et démultiplexeurs (2 et 4 bits)." },
  { file: "ByteToBCD.circ", icon: "🔢", titre: "Conversion octet → BCD", cat: "Logique combinatoire", desc: "Convertit un octet en décimal codé binaire pour l'affichage." },
  { file: "Aff7seg.circ", icon: "🔡", titre: "Afficheur 7 segments", cat: "Logique combinatoire", desc: "Décodage d'une valeur vers un afficheur 7 segments." },
  { file: "FF.circ", icon: "🔁", titre: "Bascules (flip-flops)", cat: "Logique séquentielle", desc: "Bascules RS, RS à horloge, JK, JK maître-esclave, D et T." },
  { file: "Sequentiel.circ", icon: "⏱️", titre: "Horloges & registres à décalage", cat: "Logique séquentielle", desc: "Horloges, bascules, décalages, rotation." },
  { file: "Memoire.circ", icon: "💾", titre: "Registres & mémoire", cat: "Logique séquentielle", desc: "Registre 1/4 bits, mémoires 8×4 et 32×4 bits, décodeurs d'adresse." },
  { file: "Sequenceur.circ", icon: "🎚️", titre: "Séquenceur", cat: "Logique séquentielle", desc: "Séquenceurs asynchrones et synchrone." },
  { file: "ALU.circ", icon: "🧮", titre: "Unité Arithmétique et Logique (UAL)", cat: "Microprocesseur", desc: "Décodeur, multiplexeur, additionneur, UAL 1 bit puis 4 bits." },
  { file: "HighLevel.circ", icon: "🖥️", titre: "Processeur complet (vue haut niveau)", cat: "Microprocesseur", desc: "Décodeur d'instruction, unité de commande, séquenceur, registres, ROM/RAM." },
];

/* ---------------- Supports PDF d'architecture (recopiés du DU) ---------------- */
const ARCHI_PDFS = [
  { file: "assets/ressources/architecture/01-introduction.pdf", titre: "1 — Introduction à l'architecture" },
  { file: "assets/ressources/architecture/03-representation.pdf", titre: "3 — Représentation des données" },
  { file: "assets/ressources/architecture/04-combinatoire.pdf", titre: "4 — Logique combinatoire" },
  { file: "assets/ressources/architecture/05-sequentielle.pdf", titre: "5 — Logique séquentielle" },
  { file: "assets/ressources/architecture/06-microprocesseur.pdf", titre: "6 — Microprocesseur" },
];
