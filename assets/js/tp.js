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
        num: "4", titre: "Texte à trou — calculatrice de moyenne",
        gapcode: `note1, note2, note3 = 15, 12, 18
moyenne = (note1 + note2 + note3) ___ ___
print(f'Moyenne : {moyenne:.2f}')
print(f'Meilleure : {___(note1, note2, note3)}')`,
        gaps: ["/", "3", "max"],
        questions: ["Complète les trous, vérifie, puis exécute."],
        correction: ["moyenne = (note1 + note2 + note3) / 3 → 15.00 (le :.2f impose 2 décimales). La meilleure note s'obtient avec max(note1, note2, note3) → 18."],
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
        num: "3", titre: "Texte à trou — valider la note",
        gapcode: `note = 25
if note < 0 ___ note > 20:
    print('Note invalide !')
else:
    print('Note acceptée')`,
        gaps: ["or"],
        questions: ["Complète, vérifie, puis exécute. Pourquoi or et pas and ?"],
        correction: ["if note < 0 or note > 20 : la note est invalide si elle est trop petite OU trop grande. Avec and, aucune note ne serait jamais invalide (un nombre ne peut être à la fois < 0 et > 20)."],
      },
    ],
  },
  {
    id: "py-boucles",
    theme: "langages-prog",
    lang: "python",
    titre: "TP Python — Les boucles",
    intro: "for : nombre de tours connu (avec range). while : jusqu'à ce qu'une condition change. (Les saisies input() fonctionnent ici via une petite fenêtre.)",
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
        num: "3", titre: "Le jeu du nombre deviné", run: true,
        code: `# input() fonctionne ici : clique ▶ Exécuter et joue (ou ⚡ Basthon).
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

  {
    id: "py-structures",
    theme: "types-construits",
    lang: "python",
    titre: "TP Python — Fonctions & structures de données",
    intro: "Fonctions (return, défaut, portée), listes (slicing, copie vs référence), tuples, dictionnaires et compréhensions. Les démos sont des extraits de notebook (▶ ou ⚡ Basthon pour exécuter) ; les corrections contiennent du code exécutable.",
    steps: [
      {
        num: "1", titre: "Fonctions : return, paramètre par défaut, portée",
        code: `def carre(n):
    """Retourne le carré de n."""
    return n * n

def mention(note, seuil=10):
    return "Admis" if note >= seuil else "Ajourné"

print(mention(14))                 # Admis (seuil par défaut = 10)
print(mention(14, 15))             # Ajourné
print(mention(note=14, seuil=12))  # arguments nommés

# Renvoyer plusieurs valeurs (un tuple)
def statistiques(notes):
    return min(notes), max(notes), sum(notes) / len(notes)

mini, maxi, moy = statistiques([12, 15, 8, 17, 11])
print(mini, maxi, round(moy, 2))`,
        run: true,
        questions: [
          "Que vaut carre(carre(3)) ?",
          "Que se passe-t-il si on écrit print(x) hors de la fonction qui crée x ?",
          "Exercice : écris statistiques_complete(notes) renvoyant aussi l'écart-type.",
        ],
        correction: [
          "carre(3) = 9, puis carre(9) = 81 : une fonction peut prendre le résultat d'une autre.",
          "NameError : une variable créée dans une fonction est LOCALE (portée/scope) ; elle n'existe pas dehors. On note aussi le paramètre par défaut, les arguments nommés et le renvoi de plusieurs valeurs (tuple).",
          { text: "Solution — on calcule la moyenne, la variance (moyenne des carrés des écarts), puis l'écart-type (racine de la variance) :" },
          { code: `import math

def statistiques_complete(notes):
    n = len(notes)
    moyenne = sum(notes) / n
    variance = sum((x - moyenne) ** 2 for x in notes) / n
    return {"moyenne": round(moyenne, 2), "min": min(notes),
            "max": max(notes), "ecart_type": round(math.sqrt(variance), 2)}

print(statistiques_complete([12, 15, 8, 17, 11]))` },
        ],
      },
      {
        num: "2", titre: "Listes : slicing, méthodes, copie vs référence",
        code: `notes = [12, 15, 8, 17, 11, 14]
print(notes[0], notes[-1])   # 12 14
print(notes[1:4])            # [15, 8, 17]
print(notes[::-1])           # liste inversée
print(notes[::2])            # un sur deux

# PIÈGE : copie vs référence
a = [1, 2, 3]
b = a           # même liste
b.append(99)
print(a)        # [1, 2, 3, 99] : a aussi modifiée !
c = a.copy()    # vraie copie indépendante`,
        run: true,
        questions: [
          "Prédis notes[2:5] et notes[::2] sur [12, 15, 8, 17, 11, 14].",
          "Différence entre b = a et c = a.copy() ?",
        ],
        correction: [
          "notes[2:5] → [8, 17, 11] (le 5 est exclu). notes[::2] → [12, 8, 11].",
          "b = a copie la RÉFÉRENCE (a et b = même liste, modifier l'une modifie l'autre) ; c = a.copy() crée une liste indépendante. Distinction clé pour les objets mutables.",
          { text: "Exercice analyser_classe — solution (nb_admis via une compréhension) :" },
          { code: `def analyser_classe(notes):
    return {"min": min(notes), "max": max(notes),
            "moyenne": round(sum(notes) / len(notes), 2),
            "nb_admis": len([n for n in notes if n >= 10])}

print(analyser_classe([12, 15, 8, 17, 11, 14, 6, 18, 9, 13]))` },
        ],
      },
      {
        num: "3", titre: "Tuples et dictionnaires",
        code: `# Tuple : immuable
coord = (48.8566, 2.3522)
lat, lon = coord          # déballage
# coord[0] = 0  ->  TypeError

# Dictionnaire : clé -> valeur
eleve = {"nom": "Dupont", "prenom": "Alice", "note": 18}
print(eleve["nom"])
print(eleve.get("age", "non renseigné"))   # défaut si absent
eleve["classe"] = "1NSI"
for cle, val in eleve.items():
    print(cle, ":", val)`,
        run: true,
        questions: ["Quand préfère-t-on un tuple à une liste ?"],
        correction: [
          "Quand les données ne doivent PAS changer (coordonnées, date) : l'immuabilité protège et permet d'utiliser le tuple comme clé de dictionnaire. La liste sert quand le contenu évolue.",
          ".get(cle, defaut) évite l'erreur si la clé manque ; .items() parcourt les couples (clé, valeur).",
        ],
      },
      {
        num: "4", titre: "Compréhensions de liste et de dictionnaire",
        code: `notes = [12, 15, 8, 17, 11, 14, 6]
print([n**2 for n in notes])            # transformer
print([n for n in notes if n >= 10])    # filtrer

# Compréhension de dictionnaire + zip()
noms = ["Alice", "Bob", "Clara"]
vals = [15, 12, 17]
print({nom: note for nom, note in zip(noms, vals)})`,
        run: true,
        questions: [
          "Exercice final : sur une liste de dicts {nom, maths, info}, écris (1) les noms admis en info, (2) la moyenne en info, (3) le dict {nom: moyenne maths-info}.",
        ],
        correction: [
          { text: "Solution — chaque question est une compréhension [expression for élément in itérable if condition] :" },
          { code: `classe = [
    {"nom": "Alice", "maths": 15, "info": 18},
    {"nom": "Bob",   "maths": 12, "info": 14},
    {"nom": "Clara", "maths": 17, "info": 16},
    {"nom": "David", "maths":  9, "info": 11},
]
admis = [e["nom"] for e in classe if e["info"] >= 10]
moy_info = sum(e["info"] for e in classe) / len(classe)
moyennes = {e["nom"]: (e["maths"] + e["info"]) / 2 for e in classe}
print(admis); print(moy_info); print(moyennes)` },
        ],
      },
    ],
  },
  {
    id: "py-sequences",
    theme: "types-construits",
    lang: "python",
    titre: "TP Python — Séquences : listes, slicing, complexité",
    intro: "Manipuler des listes (ajouter/insérer/supprimer), le slicing et sorted, les compréhensions, les tuples (déballage, échange), et mesurer le coût d'une recherche. Chaque étape : exécute la démo (▶ ou ⚡ Basthon), traite les questions, puis ouvre la correction. (Pile/file = avant-goût Terminale.)",
    steps: [
      {
        num: "1", titre: "Listes : ajouter, insérer, supprimer",
        code: `villes = ["Paris", "Beyrouth", "Tokyo", "Dakar"]
villes.append("Montréal")     # ajoute EN FIN
villes.insert(0, "Oslo")      # insère EN TÊTE (indice 0)
villes.remove("Tokyo")        # supprime PAR VALEUR
print("nombre :", len(villes))
print("première :", villes[0])
print("dernière :", villes[-1])`,
        run: true,
        questions: [
          "Insère une ville en 2ᵉ position (indice 1).",
          "Retire la dernière ville SANS la nommer (méthode pop).",
        ],
        correction: [
          "append ajoute en fin, insert(i, x) insère à l'indice i, remove(x) supprime la première occurrence de la valeur x.",
          { text: "Solution :" },
          { code: `villes = ["Oslo", "Paris", "Beyrouth", "Dakar", "Montréal"]
villes.insert(1, "Genève")   # 2e position
derniere = villes.pop()      # retire et renvoie le dernier
print(villes)
print("retirée :", derniere)` },
        ],
      },
      {
        num: "2", titre: "Slicing et sorted",
        code: `creneaux = [9, 10, 11, 13, 14, 15, 16]
print(creneaux[:3])        # 3 premiers
print(creneaux[-2:])       # 2 derniers
print(creneaux[::-1])      # à l'envers
print(creneaux[::2])       # un sur deux
print(sorted(creneaux)[-3:])  # les 3 plus grands`,
        run: true,
        questions: [
          "Affiche les créneaux de l'après-midi (à partir de 13 h).",
          "Affiche le 2ᵉ créneau et l'avant-dernier.",
        ],
        correction: [
          "Le slice liste[début:fin:pas] : la fin est exclue ; pas négatif inverse ; sorted() trie sans modifier la liste.",
          { text: "Solution :" },
          { code: `creneaux = [9, 10, 11, 13, 14, 15, 16]
print(creneaux[3:])     # après-midi : [13, 14, 15, 16]
print(creneaux[1])      # 2e : 10
print(creneaux[-2])     # avant-dernier : 15` },
        ],
      },
      {
        num: "3", titre: "Compréhensions",
        code: `durees = [150, 45, 150, 30, 90]   # minutes
print([d / 60 for d in durees])           # en heures
print([d for d in durees if d >= 90])     # filtre : >= 90 min`,
        run: true,
        questions: [
          "Construis (en compréhension) la liste des durées en SECONDES.",
          "À partir de villes = ['Paris', 'Dakar', 'Tokyo'], construis la liste de leurs INITIALES.",
        ],
        correction: [
          "Compréhension : [expression for élément in itérable if condition]. On transforme (d*60) ou on filtre (if).",
          { text: "Solution :" },
          { code: `durees = [150, 45, 150, 30, 90]
print([d * 60 for d in durees])
villes = ["Paris", "Dakar", "Tokyo"]
print([v[0] for v in villes])   # ['P', 'D', 'T']` },
        ],
      },
      {
        num: "4", titre: "Tuples et déballage (unpacking)",
        code: `session = ("2026-06-23", 14, "Listes et tuples")
date, heure, sujet = session       # déballage
print(date, heure, sujet)

def min_max(valeurs):
    return min(valeurs), max(valeurs)   # renvoie un tuple

print(min_max([150, 45, 90, 30]))

a, b = 10, 20
a, b = b, a                         # échange SANS variable temporaire
print(a, b)`,
        run: true,
        questions: [
          "Écris somme_produit(a, b) qui renvoie le couple (a+b, a*b).",
          "Fais une rotation de 3 variables : a, b, c = c, a, b. Vérifie.",
        ],
        correction: [
          "Un tuple regroupe des valeurs ; le déballage les distribue dans plusieurs variables. Python construit d'abord le tuple de droite, d'où l'échange a, b = b, a.",
          { text: "Solution :" },
          { code: `def somme_produit(a, b):
    return a + b, a * b

print(somme_produit(3, 4))   # (7, 12)

a, b, c = 1, 2, 3
a, b, c = c, a, b
print(a, b, c)               # 3 1 2` },
        ],
      },
      {
        num: "5", titre: "Défi — mesurer un coût (complexité)",
        code: `# Recherche séquentielle : on COMPTE les comparaisons
def cherche(lst, cible):
    comparaisons = 0
    for x in lst:
        comparaisons += 1
        if x == cible:
            return comparaisons
    return comparaisons

petite = list(range(100))
grande = list(range(1000))
print("absent dans 100  :", cherche(petite, -1), "comparaisons")
print("absent dans 1000 :", cherche(grande, -1), "comparaisons")`,
        run: true,
        questions: [
          "Quand la liste est 10× plus grande, le nombre de comparaisons est-il 10× plus grand ?",
          "Pourquoi dit-on que x in liste a un coût « linéaire » O(n) ? Et la recherche dichotomique (liste triée) ?",
        ],
        correction: [
          "Oui : 100 → 1000 comparaisons (×10). Le coût grandit PROPORTIONNELLEMENT à la taille n : c'est O(n) (linéaire).",
          "Dans le pire cas (élément absent), on parcourt TOUTE la liste → n comparaisons. La recherche dichotomique, elle, divise par 2 à chaque étape → O(log n), bien plus rapide, mais exige une liste TRIÉE.",
        ],
      },
      {
        num: "6", titre: "⭐ Bonus (Terminale) — pile et file",
        code: `from collections import deque

# PILE (LIFO) : historique d'un diaporama, avec une list
historique = []
for slide in ["slide 1", "slide 2", "slide 3"]:
    historique.append(slide)        # empiler
print("retour :", historique.pop()) # dépiler (le dernier)
print("retour :", historique.pop())

# FILE (FIFO) : questions, avec une deque
questions = deque()
for q in ["Q1", "Q2", "Q3"]:
    questions.append(q)             # enfiler
print("on traite :", questions.popleft())  # défiler (le premier)`,
        run: true,
        questions: [
          "Pourquoi une deque plutôt qu'une list pour une file ?",
        ],
        correction: [
          "Pile = LIFO (dernier entré, premier sorti) ; file = FIFO (premier entré, premier sorti).",
          "Sur une list, retirer en tête (pop(0)) décale tous les éléments → coût O(n). deque.popleft() le fait en O(1). C'est une notion de Terminale (structures de données).",
        ],
      },
    ],
  },
  {
    id: "py-dictionnaires",
    theme: "types-construits",
    lang: "python",
    titre: "TP Python — Dictionnaires",
    intro: "Le dictionnaire associe une clé à une valeur. Créer/accéder (get), modifier/supprimer, parcourir (items), compter des occurrences, et la compréhension de dictionnaire. Chaque étape : exécute la démo (▶ ou ⚡ Basthon), traite les questions, puis ouvre la correction.",
    steps: [
      {
        num: "1", titre: "Créer et accéder (get, KeyError)",
        code: `stock = {"pomme": 12, "banane": 5, "kiwi": 8}

print(stock["pomme"])            # accès par la CLÉ -> 12
print(stock.get("mangue", 0))    # clé absente -> 0 (pas d'erreur)

# accès direct d'une clé absente :
try:
    print(stock["mangue"])
except KeyError as e:
    print("KeyError :", e)`,
        run: true,
        questions: [
          "Affiche le nombre de bananes, puis la quantité de 'cerise' SANS erreur (0 par défaut).",
        ],
        correction: [
          "On accède par la clé : stock['banane']. Pour éviter la KeyError sur une clé absente, on utilise .get(cle, defaut).",
          { text: "Solution :" },
          { code: `stock = {"pomme": 12, "banane": 5, "kiwi": 8}
print(stock["banane"])          # 5
print(stock.get("cerise", 0))   # 0` },
        ],
      },
      {
        num: "2", titre: "Ajouter, modifier, supprimer",
        code: `stock = {"pomme": 12, "banane": 5}

stock["cerise"] = 20        # ajouter une clé
stock["pomme"] += 3         # modifier (incrémenter) une clé existante
del stock["banane"]         # supprimer
retire = stock.pop("cerise")  # retirer ET récupérer la valeur

print(stock)
print("retiré :", retire)`,
        run: true,
        questions: [
          "On reçoit 10 kiwis : ajoute la clé 'kiwi'. Puis vends 2 pommes (-= 2).",
        ],
        correction: [
          "stock['classe'] = v ajoute OU modifie ; del stock[c] et stock.pop(c) suppriment (pop renvoie la valeur retirée).",
          { text: "Solution :" },
          { code: `stock = {"pomme": 12}
stock["kiwi"] = 10
stock["pomme"] -= 2
print(stock)   # {'pomme': 10, 'kiwi': 10}` },
        ],
      },
      {
        num: "3", titre: "Parcourir : items, keys, values",
        code: `stock = {"pomme": 12, "kiwi": 8, "cerise": 20}

# par couple (clé, valeur) -- le plus utile
for fruit, quantite in stock.items():
    print(fruit, "->", quantite)

print(list(stock.keys()))     # les clés
print(list(stock.values()))   # les valeurs`,
        run: true,
        questions: [
          "Calcule le nombre TOTAL de fruits (somme des valeurs).",
          "Affiche les fruits dont la quantité est < 10.",
        ],
        correction: [
          ".items() donne les couples (clé, valeur) ; .keys() les clés ; .values() les valeurs.",
          { text: "Solution :" },
          { code: `stock = {"pomme": 12, "kiwi": 8, "cerise": 20}
print("total :", sum(stock.values()))               # 40
print([f for f, q in stock.items() if q < 10])      # ['kiwi']` },
        ],
      },
      {
        num: "4", titre: "Compter avec un dictionnaire",
        code: `votes = ["chat", "chien", "chat", "oiseau", "chat", "chien"]

compte = {}
for animal in votes:
    compte[animal] = compte.get(animal, 0) + 1   # le motif à connaître

print(compte)
print("gagnant :", max(compte, key=compte.get))`,
        run: true,
        questions: [
          "Compte le nombre d'occurrences de chaque lettre du mot 'mississippi'.",
        ],
        correction: [
          "Motif de comptage : compte[x] = compte.get(x, 0) + 1 ; le get(x, 0) renvoie 0 la première fois. max(d, key=d.get) donne la clé de plus grande valeur.",
          { text: "Solution :" },
          { code: `mot = "mississippi"
occ = {}
for c in mot:
    occ[c] = occ.get(c, 0) + 1
print(occ)   # {'m': 1, 'i': 4, 's': 4, 'p': 2}` },
        ],
      },
      {
        num: "5", titre: "Compréhension de dictionnaire",
        code: `mots = ["python", "nsi", "lycee"]
longueurs = {m: len(m) for m in mots}
print(longueurs)               # {'python': 6, 'nsi': 3, 'lycee': 5}

# transformer les valeurs : prix + 10 %
prix = {"pomme": 2, "kiwi": 3}
nouveaux = {f: round(p * 1.1, 2) for f, p in prix.items()}
print(nouveaux)`,
        run: true,
        questions: [
          "À partir de noms = ['Ada', 'Alan', 'Grace'], construis {nom: longueur du nom}.",
        ],
        correction: [
          "Compréhension de dict : {cle: valeur for élément in itérable}. On peut partir d'une liste, ou de .items() pour transformer un dict existant.",
          { text: "Solution :" },
          { code: `noms = ["Ada", "Alan", "Grace"]
print({n: len(n) for n in noms})   # {'Ada': 3, 'Alan': 4, 'Grace': 5}` },
        ],
      },
      {
        num: "6", titre: "Défi — l'inventaire d'un jeu",
        code: `# Inventaire d'un héros : objet -> quantité
inventaire = {"potion": 3, "or": 150}

inventaire["potion"] += 2          # ramasse 2 potions
inventaire["bouclier"] = 1         # gagne un bouclier
print(inventaire)
print("flèches :", inventaire.get("fleche", 0))   # 0 sans erreur`,
        run: true,
        questions: [
          "Le héros dépense 50 or et perd son bouclier (supprime la clé). Affiche l'inventaire final et l'or restant.",
        ],
        correction: [
          { text: "Solution — += modifie une clé existante, del supprime, .get évite l'erreur :" },
          { code: `inventaire = {"potion": 5, "or": 150, "bouclier": 1}
inventaire["or"] -= 50
del inventaire["bouclier"]
print(inventaire)
print("or :", inventaire["or"])   # 100` },
        ],
      },
    ],
  },
];

/* ---------------- Fiches « pour aller plus loin » ---------------- */
const FICHES_PLUS = [
  {
    theme: "langages-prog",
    titre: "Les 4 piliers de l'informatique",
    summary:
      "L'informatique repose sur 4 piliers : les données (ce qu'on manipule), les algorithmes (comment), les langages (comment on l'exprime), les machines (ce qui exécute).",
    contenu: `<ul>
      <li><strong>Données</strong> : toute information manipulée (nombres, texte, images, sons).</li>
      <li><strong>Algorithmes</strong> : la méthode pour résoudre un problème — indépendante du langage.</li>
      <li><strong>Langages</strong> : le moyen d'exprimer les algorithmes (du bas au haut niveau).</li>
      <li><strong>Machines</strong> : le matériel qui exécute (CPU, mémoire, entrées/sorties).</li>
    </ul>
    <p>Et les <strong>interfaces</strong> : le point de contact entre deux systèmes (clavier ↔ OS, OS ↔ programme). Chaque programme se situe dans ces 4 dimensions — ex. trier une liste : données (la liste), algorithme (le tri), langage (Python), machine (l'ordinateur).</p>`,
  },
  {
    theme: "langages-prog",
    titre: "Instructions de saut : break, continue, exceptions",
    summary:
      "Les sauts interrompent le flux séquentiel. break quitte la boucle, continue passe à l'itération suivante, return quitte la fonction. try/except gère les erreurs sans planter.",
    contenu: `<ul>
      <li><code>break</code> : sort immédiatement de la boucle la plus proche.</li>
      <li><code>continue</code> : passe directement à l'itération suivante (ignore la suite du bloc).</li>
      <li><code>return</code> : quitte la fonction (et renvoie éventuellement une valeur).</li>
      <li><code>try / except</code> : exécute un bloc « à risque » et rattrape l'erreur (ex. <code>ValueError</code> sur <code>int("abc")</code>) au lieu de planter.</li>
    </ul>`,
    code: `# break : sortir d'une boucle
for i in range(10):
    if i == 5:
        break
    print(i)        # 0 1 2 3 4

# continue : sauter une itération
for i in range(6):
    if i % 2 == 0:
        continue    # saute les pairs
    print(i)        # 1 3 5

# try / except : saisie sécurisée (input fonctionne ici)
try:
    n = int("abc")
except ValueError:
    print("Erreur : ce n'est pas un entier.")`,
  },
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

/* ---------------- Mini-projets Python (importés du DU) ---------------- */
/* Chaque projet : objectif + solution commentée (révélable) exécutable. */
const MINI_PROJETS = [
  {
    id: "mp-crible", cat: "Algorithmique & maths", theme: "algorithmique",
    titre: "Crible d'Ératosthène",
    summary: "Trouver tous les nombres premiers jusqu'à n en éliminant les multiples.",
    objectifs: ["Manipuler une liste de booléens.", "Comprendre une optimisation (s'arrêter à la racine de n)."],
    explication: "On suppose tous les nombres premiers, puis on barre les multiples de chaque premier trouvé. On ne teste que jusqu'à √n ; on commence à barrer à i×i.",
    code: `def crible(n):
    est_premier = [True] * (n + 1)
    est_premier[0] = est_premier[1] = False
    for i in range(2, int(n ** 0.5) + 1):
        if est_premier[i]:
            for multiple in range(i * i, n + 1, i):
                est_premier[multiple] = False
    return [i for i in range(n + 1) if est_premier[i]]

print(crible(30))   # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`,
    extensions: ["Afficher seulement le nombre de premiers ≤ n.", "Comparer le temps avec une méthode naïve."],
  },
  {
    id: "mp-bases", cat: "Algorithmique & maths", theme: "donnees-base",
    titre: "Conversion de bases",
    summary: "Convertir un nombre entre base 10, binaire et hexadécimal.",
    objectifs: ["Utiliser le modulo et la division entière.", "Construire une chaîne caractère par caractère."],
    explication: "n % 2 donne le bit de poids faible, n // 2 « décale » vers la droite. On reconstruit la chaîne en ajoutant chaque reste devant. Python fournit aussi bin(), hex() et int(s, base).",
    code: `def decimal_vers_binaire(n):
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits   # on ajoute le reste DEVANT
        n = n // 2
    return bits

print(decimal_vers_binaire(13))   # 1101
print(int("1101", 2))             # 13
print(bin(13), hex(255))          # 0b1101 0xff`,
    extensions: ["Écrire decimal_vers_base(n, b) pour une base 2 à 16.", "Écrire la conversion binaire → décimal à la main."],
  },
  {
    id: "mp-cesar", cat: "Cryptographie", theme: "donnees-base",
    titre: "Chiffre de César",
    summary: "Chiffrer et déchiffrer un texte par décalage des lettres.",
    objectifs: ["Utiliser ord(), chr() et le modulo 26.", "Comprendre un chiffrement par décalage."],
    explication: "ord(c) donne le code du caractère, chr() l'inverse. On ramène la lettre entre 0 et 25, on ajoute le décalage, le modulo 26 gère le repli (Z → A). Déchiffrer = décaler en sens inverse.",
    code: `def cesar(texte, decalage):
    res = ""
    for c in texte:
        if c.isalpha():
            base = ord("A") if c.isupper() else ord("a")
            res += chr((ord(c) - base + decalage) % 26 + base)
        else:
            res += c
    return res

print(cesar("BONJOUR NSI", 3))    # ERQMRXU QVL
print(cesar("ERQMRXU QVL", -3))   # BONJOUR NSI`,
    extensions: ["Casser le code par force brute (26 décalages).", "Conserver minuscules/majuscules d'origine."],
  },
  {
    id: "mp-pgcd", cat: "Algorithmique & maths", theme: "langages-prog",
    titre: "PGCD (algorithme d'Euclide)",
    summary: "Calculer le plus grand commun diviseur de deux entiers.",
    objectifs: ["Comprendre l'algorithme d'Euclide.", "Écrire la même fonction de deux façons."],
    explication: "À chaque étape on remplace (a, b) par (b, a % b) ; le reste diminue strictement, donc on atteint b = 0 et la réponse est a.",
    code: `def pgcd(a, b):
    while b != 0:
        a, b = b, a % b      # (a, b) -> (b, reste)
    return a

print(pgcd(36, 24))      # 12
print(45 * 30 // pgcd(45, 30))   # PPCM`,
    extensions: ["Écrire ppcm(a, b) à partir de pgcd.", "Compter le nombre d'étapes de l'algorithme."],
  },
  {
    id: "mp-montecarlo", cat: "Algorithmique & maths", theme: "algorithmique",
    titre: "Approximation de π (Monte-Carlo)",
    summary: "Estimer π par tirage aléatoire de points dans un carré.",
    objectifs: ["Utiliser le hasard (random).", "Relier une proportion géométrique à π."],
    explication: "La proportion de points tombant dans le quart de cercle vaut π/4 (rapport des aires). On multiplie donc par 4. Plus n est grand, plus c'est précis.",
    code: `import random

def estimer_pi(n):
    dedans = 0
    for _ in range(n):
        x, y = random.random(), random.random()
        if x * x + y * y <= 1:
            dedans += 1
    return 4 * dedans / n

print(estimer_pi(100000))   # ≈ 3.14...`,
    extensions: ["Afficher l'erreur (écart avec math.pi) pour n = 100, 1000, 100000.", "Tracer les points avec matplotlib."],
  },
  {
    id: "mp-morpion", cat: "Jeux", theme: "types-construits",
    titre: "Morpion — détection du gagnant",
    summary: "Représenter une grille 3×3 et tester toutes les conditions de victoire.",
    objectifs: ["Représenter et afficher une grille 2D.", "Tester lignes, colonnes et diagonales."],
    explication: "zip(*g) transpose la grille (colonnes → lignes). On rassemble lignes, colonnes et les deux diagonales, puis on teste si l'une a trois symboles identiques non vides.",
    code: `def afficher(g):
    for ligne in g:
        print(" | ".join(ligne))

def gagnant(g):
    lignes = [list(l) for l in g]
    lignes += [list(col) for col in zip(*g)]
    lignes.append([g[i][i] for i in range(3)])
    lignes.append([g[i][2 - i] for i in range(3)])
    for l in lignes:
        if l[0] != " " and l[0] == l[1] == l[2]:
            return l[0]
    return None

g = [[" "] * 3 for _ in range(3)]
g[0][0] = g[1][1] = g[2][2] = "X"
afficher(g)
print("Gagnant :", gagnant(g))   # X`,
    extensions: ["Écrire la boucle de jeu complète à deux joueurs.", "Étendre à un Puissance 4."],
  },
  {
    id: "mp-pendu", cat: "Jeux", theme: "langages-prog",
    titre: "Le Pendu",
    summary: "Deviner un mot lettre par lettre, avec un nombre d'essais limité.",
    objectifs: ["Manipuler chaînes et ensembles.", "Gérer une boucle de jeu avec condition de fin."],
    explication: "L'ensemble trouvees mémorise les bonnes lettres. L'affichage se reconstruit à chaque tour par compréhension. La partie s'arrête quand il n'y a plus de « _ » (gagné) ou plus d'essais (perdu).",
    interactif: true,
    code: `import random

def pendu():
    mots = ["python", "ordinateur", "algorithme", "variable"]
    mot = random.choice(mots)
    trouvees = set()
    essais = 6
    while essais > 0:
        affichage = "".join(c if c in trouvees else "_" for c in mot)
        print(affichage, "  essais restants :", essais)
        if "_" not in affichage:
            print("Gagné !"); return
        lettre = input("Propose une lettre : ").lower()
        if lettre in mot:
            trouvees.add(lettre)
        else:
            essais -= 1
    print("Perdu ! Le mot était :", mot)

pendu()`,
    extensions: ["Lire la liste de mots depuis un fichier .txt.", "Dessiner un pendu ASCII selon les erreurs."],
  },
  {
    id: "mp-mastermind", cat: "Jeux", theme: "algorithmique",
    titre: "Mastermind",
    summary: "Deviner une combinaison de chiffres avec des indices bien/mal placés.",
    objectifs: ["Comparer deux listes terme à terme.", "Compter des occurrences."],
    explication: "« bien placés » = mêmes chiffres aux mêmes positions. « communs » compte pour chaque chiffre le minimum entre proposition et code. « mal placés » = communs − bien.",
    interactif: true,
    code: `import random

def mastermind():
    code = [random.randint(1, 6) for _ in range(4)]
    for tour in range(10):
        prop = [int(c) for c in input("4 chiffres (1-6) : ")]
        bien = sum(1 for i in range(4) if prop[i] == code[i])
        communs = sum(min(prop.count(d), code.count(d)) for d in set(prop))
        mal = communs - bien
        print(bien, "bien placés,", mal, "mal placés")
        if bien == 4:
            print("Gagné en", tour + 1, "coups !"); return
    print("Perdu ! Code :", code)

mastermind()`,
    extensions: ["Vérifier la validité de la saisie.", "Faire jouer l'ordinateur (deviner)."],
  },
  {
    id: "mp-vigenere", cat: "Cryptographie", theme: "donnees-base", bonus: true,
    titre: "Chiffre de Vigenère",
    summary: "Chiffrement poly-alphabétique : un décalage variable donné par une clé.",
    objectifs: ["Réutiliser une clé de façon cyclique (modulo).", "Généraliser le chiffre de César."],
    explication: "La clé donne une suite de décalages ; cle[j % len(cle)] la répète en boucle. Le compteur j n'avance que sur les lettres. Déchiffrer = sens opposé (-1).",
    code: `def vigenere(texte, cle, sens=1):
    res, j = "", 0
    for c in texte:
        if c.isalpha():
            d = (ord(cle[j % len(cle)].lower()) - ord("a")) * sens
            base = ord("A") if c.isupper() else ord("a")
            res += chr((ord(c) - base + d) % 26 + base)
            j += 1
        else:
            res += c
    return res

chiffre = vigenere("BONJOUR", "CLE")
print(chiffre)
print(vigenere(chiffre, "CLE", -1))   # déchiffrement`,
    extensions: ["Gérer une clé avec espaces/accents.", "Expliquer pourquoi l'analyse de fréquences échoue."],
  },
  {
    id: "mp-tris", cat: "Algorithmique & maths", theme: "algorithmique", bonus: true,
    titre: "Tri rapide & tri fusion (récursifs)",
    summary: "Deux tris efficaces en O(n log n) (diviser pour régner).",
    objectifs: ["Écrire un algorithme récursif.", "Comprendre « diviser pour régner »."],
    explication: "Bonus (récursivité = Terminale). Tri rapide : pivot, plus petits à gauche, plus grands à droite. Tri fusion : couper en deux, trier chaque moitié, fusionner. Les deux sont en O(n log n).",
    code: `def tri_rapide(lst):
    if len(lst) <= 1:
        return lst
    pivot = lst[0]
    petits = [x for x in lst[1:] if x < pivot]
    grands = [x for x in lst[1:] if x >= pivot]
    return tri_rapide(petits) + [pivot] + tri_rapide(grands)

print(tri_rapide([5, 2, 9, 1, 7, 3]))`,
    extensions: ["Chronométrer sur 10000 éléments.", "Que se passe-t-il sur une liste déjà triée ?"],
  },
];
