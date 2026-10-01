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
    id: "py-variables-tp",
    theme: "langages-prog",
    lang: "python",
    titre: "TP Python — Variables, saisies, calculs et expressions booléennes",
    notebook: "assets/fichiers/premiere/langages-prog/tp_variables_capytale.ipynb",
    intro:
      "Objectif : consolider tout ce que tu sais faire avec des variables avant d'aborder les conditions : affectation, types et conversions, saisies avec input(), calculs (dont // et %), chaînes de caractères, f-strings et expressions booléennes. Huit exercices de difficulté croissante, sans if ni boucle, puis un bilan. Prévois toujours le résultat AVANT d'exécuter ; teste plusieurs valeurs. Les saisies input() s'affichent ici dans une petite fenêtre. La fiche élève (PDF) est à compléter et à rendre ; le notebook Capytale s'ouvre tel quel avec le bouton ⚡ Ouvrir dans Basthon.",
    prof:
      "<p><strong>Place dans la progression.</strong> Juste après la séance 2 (séquence 0 : variables, affectation, types, conversions, découverte de if/else) et avant la séance 3 (conditions). Le TP ne demande ni <code>if</code> ni boucle : il consolide exactement ce qui vient d'être vu et fait manipuler les booléens comme des valeurs, ce qui rend la séance 3 beaucoup plus fluide. D'après la fiche élève « TP Python — Variables, saisies, calculs et expressions booléennes » (PDF dans le kit du thème).</p><ul><li><strong>Objectifs (BO « Langages et programmation », constructions élémentaires).</strong> Affectation et évolution d'une variable ; types int, float, str, bool et conversions ; opérateurs arithmétiques dont // et % ; chaînes (concaténation, répétition, len, in) ; f-strings ; expressions booléennes avec comparaisons, and, or, not ; lecture d'un message d'erreur (ValueError).</li><li><strong>Déroulé (2 h, minutage de la fiche).</strong> Étapes 1 et 2 (10 min chacune) : prévoir sur la fiche PUIS vérifier ; étape 3 (15 min) puis mise en commun de 5 min sur « input() renvoie du texte » ; étapes 4 à 7 (15 min chacune) en binôme ; étape 8 (mini-projet) pour les rapides ou à la maison ; bilan individuel 5 min. Un fichier par exercice sur Thonny ou Capytale, ou les cellules du site (les saisies input() s'affichent dans une petite fenêtre).</li><li><strong>Supports.</strong> Sur le site : cette page (cellules exécutables, corrections poussées quand tu le décides). Notebook Capytale prêt à importer, ou bouton ⚡ Ouvrir dans Basthon (rien à installer). Fiche élève PDF à imprimer (une par élève, à rendre complétée : c'est la trace). Corrigé complet vérifié : tp_variables_corrige.py (kit du thème).</li><li><strong>Différenciation.</strong> Étapes 1 à 5 pour tous ; 6 et 7 pour la majorité ; 8 pour les rapides, sinon à la maison. Pour les élèves fragiles, l'étape 6 peut se limiter aux trois premiers booléens.</li><li><strong>Erreurs fréquentes.</strong> Oublier la conversion de input() (ou convertir après avoir collé) ; int() sur une saisie décimale ; croire que int() arrondit ; confondre // et % ; écrire 14 &lt;= age and &lt;= 17 ; or à la place de and (toujours vrai) ; :.2f pris pour un arrondi de la valeur ; majuscules et minuscules dans le test in.</li><li><strong>Évaluation.</strong> Fiche complétée + fichiers rendus (ou notebook). Les trois questions du bilan en réponse en direct (📡) donnent un diagnostic immédiat ; les reposer au rituel de la séance 3. Le TP noté n°1 (séance 6) reprend ces notions avec les conditions.</li></ul>",
    steps: [
      {
        num: "1", titre: "Suivre le score d'un joueur · 10 min", run: true,
        code: `# EXERCICE 1 — Suivre le score d'un joueur
# Avant d'exécuter : complète le tableau (score, bonus, ancien_score après chaque ligne ; ND = pas encore définie)
score = 12
bonus = 5
score = score + bonus
ancien_score = score
score = score * 2
bonus = 0
print(score)
print(ancien_score)
print(bonus)
# 4. À toi : ajoute une instruction qui retire 4 points au score final, puis affiche-le`,
        questions: [
          "Sans exécuter, complète le tableau : valeur de score, bonus et ancien_score après chaque instruction (« ND » si la variable n'existe pas encore).",
          "Prévois les trois valeurs affichées, puis vérifie en exécutant.",
          "Pourquoi ancien_score ne change-t-il pas quand score est multiplié par 2 ?",
          "Ajoute une instruction qui retire 4 points au score final, puis affiche-le.",
        ],
        correction: [
          "Après score = 12 : score 12, bonus ND, ancien_score ND. Après bonus = 5 : 12, 5, ND. Après score = score + bonus : 17, 5, ND. Après ancien_score = score : 17, 5, 17. Après score = score * 2 : 34, 5, 17. Après bonus = 0 : 34, 0, 17.",
          "Affichage : 34, puis 17, puis 0.",
          "Au moment de ancien_score = score, la variable ancien_score reçoit une COPIE de la valeur 17. Modifier score ensuite ne touche pas cette copie : une variable n'est pas un lien vers une autre variable, elle contient une valeur.",
          { code: `score = 12
bonus = 5
score = score + bonus
ancien_score = score
score = score * 2
bonus = 0
score = score - 4      # on retire 4 points au score final
print(score)           # 30
print(ancien_score)    # 17
print(bonus)           # 0` },
        ],
        prof: "<p>10 min, en autonomie mais tableau rempli AVANT toute exécution (passer vérifier les fiches). L'erreur typique : écrire 34 pour ancien_score en croyant qu'elle « suit » score. C'est l'occasion de redire que <code>=</code> copie une valeur à un instant donné. Si un élève écrit <code>score - 4</code> sans réaffecter, faire afficher score juste après : rien n'a changé.</p>",
      },
      {
        num: "2", titre: "Nombres ou textes ? · 10 min", run: true,
        code: `# EXERCICE 2 — Nombres ou textes ?
# Prévois la valeur ET le type de chaque expression sur ta fiche, puis vérifie ici.
resultat = 8 + 2
print(resultat)
print(type(resultat))
# À toi : vérifie de la même façon "8" + "2", "8" * 2, 8 / 2, 8 // 2, 8 > 2, float("8.5"), int(8.9)
# Puis, en dernier et séparément : int("bonjour") — quel nom d'erreur apparaît ?`,
        questions: [
          "Prévois la valeur et le type de chaque expression, puis vérifie dans Python.",
          "Quelle différence y a-t-il entre 8 et \"8\" ?",
          "Est-ce que int(8.9) arrondit à l'entier le plus proche ?",
          "Exécute séparément int(\"bonjour\"). Quel nom d'erreur apparaît ?",
        ],
        correction: [
          "8 + 2 → 10 (int) ; \"8\" + \"2\" → \"82\" (str, les textes se collent) ; \"8\" * 2 → \"88\" (str, le texte est répété) ; 8 / 2 → 4.0 (float, la division / donne toujours un flottant) ; 8 // 2 → 4 (int, quotient entier) ; 8 > 2 → True (bool) ; float(\"8.5\") → 8.5 (float) ; int(8.9) → 8 (int).",
          "8 est un nombre entier : on peut calculer avec. \"8\" est un texte d'un caractère : + le colle à un autre texte et on ne peut pas l'additionner à un nombre (8 + \"8\" provoque une erreur TypeError).",
          "Non : int() tronque, il garde la partie entière. int(8.9) vaut 8 et int(-8.9) vaut -8. Pour arrondir au plus proche, c'est round(8.9), qui donne 9.",
          "ValueError : int() ne sait pas transformer le texte \"bonjour\" en entier. Le message complet est « invalid literal for int() with base 10: 'bonjour' ».",
          { code: `print(8 + 2, type(8 + 2))
print("8" + "2", type("8" + "2"))
print("8" * 2, type("8" * 2))
print(8 / 2, type(8 / 2))
print(8 // 2, type(8 // 2))
print(8 > 2, type(8 > 2))
print(float("8.5"), type(float("8.5")))
print(int(8.9), type(int(8.9)))
# int("bonjour") -> ValueError: invalid literal for int() with base 10: 'bonjour'` },
        ],
        prof: "<p>10 min. Faire parier à voix haute avant d'exécuter (réponse en direct possible sur <code>\"8\" * 2</code>, choix « 16 / 88 / erreur »). Points à faire dire : <code>/</code> donne toujours un float, <code>int()</code> tronque, une erreur a un NOM qu'on lit. Le tableau rempli sert de trace écrite.</p>",
      },
      {
        num: "3", titre: "Réparer une calculatrice · 15 min", run: true,
        code: `# EXERCICE 3 — Réparer une calculatrice (saisis 12 puis 3 : pourquoi 123 ?)
nombre1 = input("Premier nombre : ")
nombre2 = input("Deuxième nombre : ")
somme = nombre1 + nombre2
print(f"La somme est {somme}")
# À toi : corrige pour additionner deux nombres décimaux, ajoute la différence et le produit,
# et affiche les trois résultats avec deux décimales.
# Test : 12.5 et 3 -> 15.50 ; 9.50 ; 37.50`,
        questions: [
          "Saisis 12 puis 3. Pourquoi le programme affiche-t-il 123 ?",
          "Corrige le programme pour additionner deux nombres décimaux.",
          "Ajoute l'affichage de leur différence et de leur produit.",
          "Affiche les trois résultats avec deux décimales (test : 12.5 et 3 → 15.50 ; 9.50 ; 37.50).",
        ],
        correction: [
          "input() renvoie TOUJOURS une chaîne de caractères : nombre1 vaut \"12\" et nombre2 vaut \"3\". Le + entre deux textes les colle : \"12\" + \"3\" donne \"123\".",
          "Il faut convertir les saisies avec float() (décimaux) avant de calculer.",
          "difference = nombre1 - nombre2 et produit = nombre1 * nombre2, puis deux print.",
          "Dans une f-string, {somme:.2f} affiche la valeur avec exactement deux décimales.",
          { code: `nombre1 = float(input("Premier nombre : "))
nombre2 = float(input("Deuxième nombre : "))
somme = nombre1 + nombre2
difference = nombre1 - nombre2
produit = nombre1 * nombre2
print(f"La somme est {somme:.2f}")
print(f"La différence est {difference:.2f}")
print(f"Le produit est {produit:.2f}")
# Test : 12.5 et 3 -> La somme est 15.50 / La différence est 9.50 / Le produit est 37.50` },
        ],
        prof: "<p>15 min, l'exercice clé du TP : « input() renvoie du texte » doit être écrit au tableau à la mise en commun. Erreurs vues : <code>int()</code> au lieu de <code>float()</code> (plante sur 12.5 avec ValueError, bon prétexte pour lire l'erreur), <code>float(somme)</code> après l'addition (trop tard, on a déjà collé), <code>round(somme, 2)</code> qui affiche 15.5 et non 15.50 (le format <code>:.2f</code> est un affichage, pas un arrondi de la valeur).</p>",
      },
      {
        num: "4", titre: "Préparer des boîtes de matériel · 15 min", run: true,
        code: `# EXERCICE 4 — Préparer des boîtes de matériel (utilise // et %)
total = int(input("Nombre total de composants : "))
capacite = int(input("Capacité d'une boîte : "))
boites_pleines = ...   # À COMPLÉTER
reste = ...            # À COMPLÉTER
print(f"Boîtes complètement remplies : {boites_pleines}")
print(f"Composants restants : {reste}")
# Tests : 53 et 8 -> 6 boîtes, reste 5 ; 48 et 8 -> 6, reste 0 ; 5 et 8 -> 0, reste 5`,
        questions: [
          "Écris le programme : nombre de boîtes complètement remplies, puis composants restants, avec // et %.",
          "Vérifie les trois lignes du tableau de tests.",
          "Pourquoi / ne convient-il pas pour calculer le nombre de boîtes pleines ?",
        ],
        correction: [
          "boites_pleines = total // capacite (quotient entier) et reste = total % capacite (reste de la division entière).",
          "53 // 8 = 6 et 53 % 8 = 5 ; 48 // 8 = 6 et 48 % 8 = 0 ; 5 // 8 = 0 et 5 % 8 = 5.",
          "53 / 8 = 6.625 : un flottant, alors qu'on ne remplit pas 0,625 boîte. Il faudrait tronquer, et on n'aurait toujours pas le reste. // donne directement le quotient entier et % le reste : les deux vont ensemble (6 × 8 + 5 = 53).",
          { code: `total = int(input("Nombre total de composants : "))
capacite = int(input("Capacité d'une boîte : "))
boites_pleines = total // capacite
reste = total % capacite
print(f"Boîtes complètement remplies : {boites_pleines}")
print(f"Composants restants : {reste}")
# 53 et 8 -> 6 et 5 ; 48 et 8 -> 6 et 0 ; 5 et 8 -> 0 et 5` },
        ],
        prof: "<p>15 min. Faire manipuler avec de vrais objets (ou dessiner) pour 5 composants dans des boîtes de 8 : 0 boîte pleine, il reste 5. La relation <code>total == boites * capacite + reste</code> est une bonne trace. Erreur classique : <code>int(total / capacite)</code> marche ici mais ne donne pas le reste ; accepter, puis faire écrire la version // et %.</p>",
      },
      {
        num: "5", titre: "Créer un badge personnalisé · 15 min", run: true,
        code: `# EXERCICE 5 — Créer un badge personnalisé (+, len(), in, f-string, "=" * 24)
prenom = input("Prénom : ")
nom = input("Nom : ")
classe = input("Classe : ")
nom_complet = ...   # À COMPLÉTER : le prénom, un espace, le nom
ligne = "=" * 24
print(ligne)
print("BADGE ÉLÈVE")
# À COMPLÉTER : la ligne « Nom : ... » et la ligne « Classe : ... » avec une f-string, puis la ligne de séparation
# À COMPLÉTER : « Nombre de caractères : ... » avec len(nom_complet)
# À COMPLÉTER : « Présence de la lettre a : ... » avec le test "a" in prenom
# Test : Lina, Haddad, Première NSI -> 11 caractères, True`,
        questions: [
          "Construis nom_complet avec le prénom, un espace et le nom.",
          "Affiche le badge comme dans l'exemple (lignes de séparation avec \"=\" * 24).",
          "Affiche le nombre de caractères de nom_complet, espace compris, puis le résultat du test « la lettre minuscule a est dans le prénom ».",
          "Le test \"a\" in prenom donne-t-il le même résultat pour \"Adam\" et \"ADAM\" ? Vérifie et explique.",
        ],
        correction: [
          "nom_complet = prenom + \" \" + nom : le + colle les trois textes.",
          "print(f\"Nom : {nom_complet}\") et print(f\"Classe : {classe}\"), entre deux print(\"=\" * 24).",
          "len(nom_complet) compte tous les caractères, espace compris : \"Lina Haddad\" en a 11. \"a\" in prenom vaut True pour Lina.",
          "Non : \"a\" in \"Adam\" vaut True (il y a un a minuscule en 3e position) mais \"a\" in \"ADAM\" vaut False : Python distingue majuscules et minuscules, \"a\" et \"A\" sont deux caractères différents. Pour ignorer la casse, on testerait \"a\" in prenom.lower().",
          { code: `prenom = input("Prénom : ")
nom = input("Nom : ")
classe = input("Classe : ")
nom_complet = prenom + " " + nom
ligne = "=" * 24
print(ligne)
print("BADGE ÉLÈVE")
print(f"Nom : {nom_complet}")
print(f"Classe : {classe}")
print(ligne)
print(f"Nombre de caractères : {len(nom_complet)}")
print(f"Présence de la lettre a : {'a' in prenom}")
# Lina, Haddad, Première NSI -> 11 ; True` },
        ],
        prof: "<p>15 min. Premier contact avec <code>in</code> sur une chaîne et <code>len()</code>. Le piège majuscule / minuscule (« Adam » / « ADAM ») est à faire découvrir par les élèves eux-mêmes : demander le résultat en réponse en direct avant d'exécuter. Rappeler que <code>\"=\" * 24</code> répète un texte (vu à l'exercice 2 avec <code>\"8\" * 2</code>). Dans la f-string de la dernière ligne, les guillemets simples autour de <code>'a'</code> évitent de fermer la chaîne.</p>",
      },
      {
        num: "6", titre: "Vérifier une inscription · 15 min", run: true,
        code: `# EXERCICE 6 — Vérifier une inscription (comparaisons, and, or, not ; SANS if)
age = int(input("Âge : "))
taille = int(input("Nombre d'élèves de l'équipe : "))
age_valide = ...          # À COMPLÉTER : entre 14 et 17 inclus (deux comparaisons et and)
equipe_valide = ...       # À COMPLÉTER : entre 2 et 4 inclus
inscription_valide = ...  # À COMPLÉTER : les deux conditions à la fois
print(f"Âge valide : {age_valide}")
print(f"Équipe valide : {equipe_valide}")
print(f"Inscription valide : {inscription_valide}")
# 3. et 4. À COMPLÉTER : correction_necessaire (avec not) et age_hors_limites (avec or), puis les afficher
# Tests : (14, 2) -> True ; (17, 4) -> True ; (13, 3) -> False ; (16, 5) -> False`,
        questions: [
          "Demande l'âge et le nombre d'élèves de l'équipe, puis complète age_valide, equipe_valide et inscription_valide (comparaisons et and, sans if).",
          "Vérifie les quatre lignes du tableau de tests.",
          "Ajoute correction_necessaire, calculée avec not, qui indique que l'inscription n'est pas valide.",
          "Ajoute age_hors_limites, calculée avec or, qui indique que l'âge est inférieur à 14 ou supérieur à 17. Note les deux expressions.",
        ],
        correction: [
          "age_valide = age >= 14 and age <= 17 (on peut aussi écrire 14 <= age <= 17) ; equipe_valide = taille >= 2 and taille <= 4 ; inscription_valide = age_valide and equipe_valide.",
          "(14, 2) → True, True, True ; (17, 4) → True, True, True ; (13, 3) → False, True, False ; (16, 5) → True, False, False.",
          "correction_necessaire = not inscription_valide : c'est le contraire exact de l'inscription valide.",
          "age_hors_limites = age < 14 or age > 17 : vrai dès qu'UNE des deux comparaisons est vraie. Remarque : age_hors_limites est exactement not age_valide.",
          { code: `age = int(input("Âge : "))
taille = int(input("Nombre d'élèves de l'équipe : "))
age_valide = age >= 14 and age <= 17
equipe_valide = taille >= 2 and taille <= 4
inscription_valide = age_valide and equipe_valide
print(f"Âge valide : {age_valide}")
print(f"Équipe valide : {equipe_valide}")
print(f"Inscription valide : {inscription_valide}")
correction_necessaire = not inscription_valide
age_hors_limites = age < 14 or age > 17
print(f"Correction nécessaire : {correction_necessaire}")
print(f"Âge hors limites : {age_hors_limites}")
# (14, 2) -> True ; (17, 4) -> True ; (13, 3) -> False ; (16, 5) -> False` },
        ],
        prof: "<p>15 min. C'est la préparation directe de la séance 3 (conditions) : un booléen est une VALEUR qu'on peut ranger dans une variable et afficher, avant même de savoir écrire un <code>if</code>. Erreurs vues : <code>14 &lt;= age and &lt;= 17</code> (syntaxe), <code>age &gt;= 14 or age &lt;= 17</code> (toujours vrai : faire tester 13), oubli des bornes incluses. Faire remarquer que <code>age_hors_limites</code> et <code>not age_valide</code> donnent toujours le même résultat.</p>",
      },
      {
        num: "7", titre: "Calculer une moyenne pondérée · 15 min", run: true,
        code: `# EXERCICE 7 — Calculer une moyenne pondérée (max(), :.2f, booléens)
prenom = input("Prénom : ")
quiz = float(input("Note du quiz (coefficient 1) : "))
tp = float(input("Note du TP (coefficient 2) : "))
projet = float(input("Note du projet (coefficient 3) : "))
moyenne = ...          # À COMPLÉTER : (quiz + 2 * tp + 3 * projet) / 6
meilleure = ...        # À COMPLÉTER : max(...)
# À COMPLÉTER : afficher le prénom, la meilleure note, la moyenne avec deux décimales,
# le booléen « moyenne >= 10 » et le booléen « les trois notes sont entre 0 et 20 »
# Test : 12, 15 et 18 -> moyenne 16.00, meilleure note 18.0`,
        questions: [
          "Demande le prénom et les trois notes décimales, puis calcule la moyenne pondérée.",
          "Affiche la meilleure note avec max() et la moyenne avec deux décimales.",
          "Affiche un booléen indiquant si la moyenne est supérieure ou égale à 10, puis un booléen indiquant si les trois notes sont comprises entre 0 et 20.",
          "Note un autre jeu de notes et les résultats obtenus (par exemple une note hors de [0 ; 20]).",
        ],
        correction: [
          "moyenne = (quiz + 2 * tp + 3 * projet) / 6 : la somme des coefficients est 1 + 2 + 3 = 6.",
          "meilleure = max(quiz, tp, projet) ; print(f\"Moyenne : {moyenne:.2f}\") affiche 16.00 pour 12, 15 et 18.",
          "moyenne >= 10 est déjà un booléen ; notes_valides = quiz >= 0 and quiz <= 20 and tp >= 0 and tp <= 20 and projet >= 0 and projet <= 20 (ou 0 <= quiz <= 20 and ...).",
          "Par exemple 8, 9 et 25 : moyenne (8 + 18 + 75) / 6 = 16.83, meilleure note 25.0, moyenne >= 10 True, notes valides False (25 est hors de [0 ; 20]).",
          { code: `prenom = input("Prénom : ")
quiz = float(input("Note du quiz (coefficient 1) : "))
tp = float(input("Note du TP (coefficient 2) : "))
projet = float(input("Note du projet (coefficient 3) : "))
moyenne = (quiz + 2 * tp + 3 * projet) / 6
meilleure = max(quiz, tp, projet)
notes_valides = quiz >= 0 and quiz <= 20 and tp >= 0 and tp <= 20 and projet >= 0 and projet <= 20
print(f"Élève : {prenom}")
print(f"Meilleure note : {meilleure}")
print(f"Moyenne pondérée : {moyenne:.2f}")
print(f"Moyenne >= 10 : {moyenne >= 10}")
print(f"Trois notes entre 0 et 20 : {notes_valides}")
# 12, 15 et 18 -> meilleure note 18.0, moyenne 16.00, True, True` },
        ],
        prof: "<p>15 min, à donner aussi aux rapides pendant que les autres terminent l'exercice 6. La moyenne pondérée est un calcul déjà connu des élèves : l'intérêt est la traduction fidèle d'une formule, puis <code>max()</code> à trois arguments. Erreur fréquente : diviser par 3 au lieu de 6. Le booléen « trois notes entre 0 et 20 » est long à écrire : c'est voulu, on verra plus tard qu'une fonction évite de se répéter.</p>",
      },
      {
        num: "8", titre: "Mini-projet : le ticket de commande · 15 min", run: true,
        code: `# EXERCICE 8 — Mini-projet : le ticket de commande (montants avec deux décimales, max())
club = input("Nom du club : ")
nb_kits = int(input("Nombre de kits : "))
prix_unitaire = float(input("Prix unitaire (en euros) : "))
remise_pct = float(input("Remise (en %) : "))
livraison = float(input("Frais de livraison (en euros) : "))
budget = float(input("Budget disponible (en euros) : "))
montant_initial = ...   # À COMPLÉTER : avant remise
montant_remise = ...    # À COMPLÉTER : montant_initial * remise_pct / 100
total = ...             # À COMPLÉTER : après remise, livraison comprise
budget_suffisant = ...  # À COMPLÉTER : un booléen
somme_manquante = ...   # À COMPLÉTER : avec max(), 0 si le budget suffit
print(f"===== Ticket : {club} =====")
# À COMPLÉTER : les cinq lignes du ticket, montants avec deux décimales
# Test : 3 kits à 40 €, remise 10 %, livraison 5 €, budget 100 € -> 120.00 ; 12.00 ; 113.00 ; False ; 13.00`,
        questions: [
          "Écris le programme complet (six saisies, cinq résultats affichés sur le ticket avec le nom du club).",
          "Vérifie avec les données de test : montant initial 120.00, remise 12.00, total 113.00, budget suffisant False, somme manquante 13.00.",
          "Reprends les mêmes données avec un budget de 150. Note les résultats concernant le budget et la somme manquante.",
          "Pourquoi max() convient-il pour calculer la somme manquante ?",
        ],
        correction: [
          "montant_initial = nb_kits * prix_unitaire ; montant_remise = montant_initial * remise_pct / 100 ; total = montant_initial - montant_remise + livraison ; budget_suffisant = budget >= total ; somme_manquante = max(0, total - budget).",
          "3 × 40 = 120.00 ; 10 % de 120 = 12.00 ; 120 - 12 + 5 = 113.00 ; 100 >= 113 est False ; max(0, 13) = 13.00.",
          "Avec un budget de 150 : budget suffisant True et somme manquante 0.00 (max(0, -37) vaut 0).",
          "total - budget est négatif quand le budget suffit ; max(0, total - budget) remplace ce négatif par 0 sans avoir besoin d'un if : c'est exactement « la somme manquante, zéro si le budget suffit ».",
          { code: `club = input("Nom du club : ")
nb_kits = int(input("Nombre de kits : "))
prix_unitaire = float(input("Prix unitaire (en euros) : "))
remise_pct = float(input("Remise (en %) : "))
livraison = float(input("Frais de livraison (en euros) : "))
budget = float(input("Budget disponible (en euros) : "))
montant_initial = nb_kits * prix_unitaire
montant_remise = montant_initial * remise_pct / 100
total = montant_initial - montant_remise + livraison
budget_suffisant = budget >= total
somme_manquante = max(0, total - budget)
print(f"===== Ticket : {club} =====")
print(f"Montant avant remise : {montant_initial:.2f} euros")
print(f"Remise ({remise_pct} %) : {montant_remise:.2f} euros")
print(f"Total à payer, livraison comprise : {total:.2f} euros")
print(f"Budget suffisant : {budget_suffisant}")
print(f"Somme manquante : {somme_manquante:.2f} euros")
# 3 kits, 40, 10, 5, 100 -> 120.00 ; 12.00 ; 113.00 ; False ; 13.00   (budget 150 -> True ; 0.00)` },
        ],
        prof: "<p>15 min, mini-projet pour les rapides ou à finir à la maison (notebook Capytale ou Basthon). Tout le TP s'y retrouve : conversions, calcul, f-string à deux décimales, booléen, <code>max()</code> comme substitut au <code>if</code>. Ne pas exiger l'ordre exact des lignes du ticket ; exiger les valeurs de test. Erreur vue : remise calculée sur le total livraison comprise.</p>",
      },
      {
        num: "9", titre: "Bilan individuel · 5 min",
        note: "Réponds sur ta fiche (ou en réponse en direct si le professeur la lance). À rendre : les fichiers Python des exercices réalisés et la fiche complétée.",
        questions: [
          "Pourquoi faut-il convertir une saisie pour effectuer un calcul ?",
          "Quelle différence y a-t-il entre // et % ?",
          "Quelle différence y a-t-il entre = et == ?",
        ],
        correction: [
          "input() renvoie toujours une chaîne de caractères, même si l'utilisateur tape des chiffres. Sans int() ou float(), + colle les textes (\"12\" + \"3\" donne \"123\") et - ou * provoquent une erreur.",
          "// est le quotient entier de la division (53 // 8 = 6 : combien de fois 8 tient dans 53) ; % est le reste (53 % 8 = 5 : ce qui reste après avoir retiré 6 × 8). On a toujours 53 == 6 * 8 + 5.",
          "= est l'affectation : score = 12 range la valeur 12 dans la variable score. == est la comparaison : score == 12 est une expression qui vaut True ou False sans rien modifier.",
        ],
        prof: "<p>5 min, en réponse en direct (texte court) ou sur la fiche. Ces trois réponses sont la trace écrite minimale du TP ; les relire au rituel de la séance 3. À rendre : les fichiers Python (ou le notebook) et la fiche complétée.</p>",
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
    intro: "Sept exercices, à faire toi-même : écris ton code dans la cellule (▶ Exécuter, ou ⚡ Basthon), puis ouvre le corrigé pour comparer. Au programme : les participants (listes), le planning (slicing), les durées (compréhensions), une session (tuples), un défi sur le coût d'une recherche (complexité), pile & file (avant-goût Terminale), et un bonus numpy (optionnel, hors module).",
    steps: [
      {
        num: "1", titre: "Exercice 1 — Les participants (listes : bases)",
        code: `# tâche 1 : une liste de 4 villes (déjà amorcée)
villes = ["Paris", "Montréal", "Tokyo", "Dakar"]

# À toi de jouer (tâches 2 à 5, consignes ci-dessous)
`,
        run: true,
        questions: [
          "Ajoute une ville EN FIN de liste (méthode append).",
          "Insère une ville EN PREMIÈRE position (méthode insert).",
          "Supprime l'une des villes par son nom (méthode remove).",
          "Affiche le NOMBRE de villes (len), la PREMIÈRE ([0]) et la DERNIÈRE ([-1]).",
        ],
        correction: [
          "append ajoute en fin ; insert(0, x) insère en tête ; remove(x) supprime la première occurrence de la valeur ; villes[-1] = le dernier élément.",
          { text: "Corrigé :" },
          { code: `villes = ["Paris", "Montréal", "Tokyo", "Dakar"]
villes.append("Nouméa")        # en fin
villes.insert(0, "Beyrouth")   # en tête
villes.remove("Tokyo")         # par son nom
print("nombre :", len(villes))
print("première :", villes[0])
print("dernière :", villes[-1])` },
        ],
      },
      {
        num: "2", titre: "Exercice 2 — Le planning (slicing)",
        code: `creneaux = [9, 10, 11, 13, 14, 15, 16]   # heures UTC

# À toi de jouer
`,
        run: true,
        questions: [
          "Affiche les 3 PREMIERS créneaux, puis les 2 DERNIERS.",
          "Affiche la journée À L'ENVERS.",
          "Affiche un créneau SUR DEUX.",
          "À l'aide de sorted, affiche les 3 DERNIERS créneaux de la journée.",
        ],
        correction: [
          "Le slice liste[début:fin:pas] : la fin est exclue ; un pas de -1 inverse ; un pas de 2 prend un élément sur deux ; sorted()[-3:] = les 3 plus grands.",
          { text: "Corrigé :" },
          { code: `creneaux = [9, 10, 11, 13, 14, 15, 16]
print(creneaux[:3])         # 3 premiers
print(creneaux[-2:])        # 2 derniers
print(creneaux[::-1])       # à l'envers
print(creneaux[::2])        # un sur deux
print(sorted(creneaux)[-3:])  # les 3 derniers (plus grands)` },
        ],
      },
      {
        num: "3", titre: "Exercice 3 — Durées des sessions (compréhensions)",
        code: `durees = [150, 45, 150, 30, 90, 150]   # minutes

# À toi de jouer
`,
        run: true,
        questions: [
          "En compréhension, construis la liste des durées EN HEURES (nombre décimal).",
          "Construis la liste des durées SUPÉRIEURES OU ÉGALES à 90 minutes.",
          "Bonus : à partir de villes = ['Paris', 'Dakar', 'Tokyo'], construis la liste de leurs INITIALES.",
        ],
        correction: [
          "Compréhension : [expression for élément in itérable if condition]. On transforme (d / 60) ou on filtre (if d >= 90).",
          { text: "Corrigé :" },
          { code: `durees = [150, 45, 150, 30, 90, 150]
heures = [d / 60 for d in durees]
print(heures)
longues = [d for d in durees if d >= 90]
print(longues)
initiales = [v[0] for v in ["Paris", "Dakar", "Tokyo"]]
print(initiales)   # ['P', 'D', 'T']` },
        ],
      },
      {
        num: "4", titre: "Exercice 4 — Une session (tuples & unpacking)",
        code: `# À toi de jouer (consignes ci-dessous)
`,
        run: true,
        questions: [
          "Représente une session par un TUPLE (date, heure_utc, sujet).",
          "DÉPAQUETTE-le dans trois variables et affiche-les.",
          "Écris une fonction min_max(valeurs) qui renvoie le MIN et le MAX sous forme de tuple ; teste-la sur durees = [150, 45, 150, 30, 90, 150].",
          "Échange deux variables a et b SANS variable temporaire.",
        ],
        correction: [
          "Un tuple regroupe des valeurs ; le déballage les distribue dans plusieurs variables. Une fonction peut renvoyer un tuple (min, max). L'échange a, b = b, a marche car Python construit d'abord le tuple de droite.",
          { text: "Corrigé :" },
          { code: `session = ("2026-06-22", 14, "Listes et tuples")
date, heure_utc, sujet = session
print(date, heure_utc, sujet)

def min_max(valeurs):
    return min(valeurs), max(valeurs)

durees = [150, 45, 150, 30, 90, 150]
print(min_max(durees))   # (30, 150)

a, b = 10, 20
a, b = b, a
print(a, b)              # 20 10` },
        ],
      },
      {
        num: "5", titre: "Exercice 5 — Défi : mesurer un coût (complexité)",
        code: `import timeit

# À toi de jouer (consignes ci-dessous)
`,
        run: true,
        questions: [
          "Construis une grande liste : grande = list(range(1_000_000)).",
          "Avec le module timeit, mesure le temps pour tester si un élément ABSENT (-1) est dans la liste (-1 in grande).",
          "Recommence avec une liste DIX FOIS plus petite. Que constates-tu ?",
          "Réflexion : pourquoi cette recherche est-elle « lente » ? (la réponse est dans le chapitre dictionnaires : O(1) vs O(n)).",
        ],
        correction: [
          "Tester « x in liste » parcourt la liste jusqu'à trouver (ou la fin). Pour un élément ABSENT, on parcourt TOUT → coût linéaire O(n). Dix fois plus d'éléments ⇒ environ dix fois plus lent.",
          { text: "Corrigé :" },
          { code: `import timeit

grande = list(range(1_000_000))
petite = list(range(100_000))

t_grande = timeit.timeit(lambda: -1 in grande, number=10)
t_petite = timeit.timeit(lambda: -1 in petite, number=10)
print(f"grande (1 000 000) : {t_grande:.3f} s")
print(f"petite (100 000)   : {t_petite:.3f} s")
# La grande liste est ~10x plus lente : coût linéaire O(n).` },
        ],
      },
      {
        num: "6", titre: "Exercice 6 — Pile & file (⭐ avant-goût Terminale)",
        code: `from collections import deque

# À toi de jouer (consignes ci-dessous)
`,
        run: true,
        note: "📌 Ces structures (pile, file) sont approfondies en <strong>Terminale</strong> (structures de données linéaires). Ici, simple avant-goût.",
        questions: [
          "Pile (annuler) : avec une list, empile 'slide 1', 'slide 2', 'slide 3', puis reviens DEUX fois en arrière (dépile) en affichant la slide quittée.",
          "File (questions Discord) : avec une collections.deque, fais entrer 'Q1', 'Q2', 'Q3', puis traite-les dans l'ordre d'arrivée (FIFO) en affichant celle qu'on traite.",
          "Question : pour la file, pourquoi deque plutôt qu'une list ?",
        ],
        correction: [
          "Pile = LIFO (dernier entré, premier sorti) → list.append / list.pop. File = FIFO (premier entré, premier sorti) → deque.append / deque.popleft. Sur une list, retirer en tête (pop(0)) décale tout → O(n) ; deque.popleft() est O(1).",
          { text: "Corrigé :" },
          { code: `from collections import deque

# pile (LIFO) : historique du diaporama
historique = []
for slide in ["slide 1", "slide 2", "slide 3"]:
    historique.append(slide)
for _ in range(2):
    print("retour, on quitte :", historique.pop())

# file (FIFO) : questions Discord
questions = deque()
for q in ["Q1", "Q2", "Q3"]:
    questions.append(q)
while questions:
    print("on traite :", questions.popleft())` },
        ],
      },
      {
        num: "7", titre: "Exercice 7 — Tableaux numpy (optionnel · hors module · ⚡ Basthon)",
        code: `import numpy as np
connectes = [42, 38, 51, 29, 47, 33]   # connectés par session

# À toi de jouer
`,
        run: true,
        note: "🔧 <strong>Optionnel et hors module.</strong> numpy n'est pas chargé dans l'aperçu rapide (▶) — exécute cet exercice avec <strong>⚡ Basthon</strong> (ou en local).",
        questions: [
          "Convertis cette liste en tableau numpy.",
          "Affiche la MOYENNE, le MINI et le MAXI.",
          "On attend +5 connexions à chaque session : ajoute 5 partout SANS boucle.",
          "Combien de sessions ont ≥ 40 connectés ? (indice : (tableau >= 40).sum())",
        ],
        correction: [
          "numpy permet le calcul VECTORISÉ : on opère sur tout le tableau sans boucle (connectes + 5), et les comparaisons donnent un tableau de booléens dont .sum() compte les True.",
          { text: "Corrigé (⚡ Basthon) :" },
          { code: `import numpy as np

connectes = np.array([42, 38, 51, 29, 47, 33])
print("moyenne :", connectes.mean())
print("min/max :", connectes.min(), connectes.max())
print(connectes + 5)                       # +5 partout, sans boucle
print("sessions >= 40 :", (connectes >= 40).sum())` },
        ],
      },
    ],
  },
  {
    id: "py-dictionnaires",
    theme: "types-construits",
    lang: "python",
    titre: "TP Python — Dictionnaires",
    intro: "Cinq exercices, à faire toi-même : écris ton code dans la cellule (▶ Exécuter, ou ⚡ Basthon), puis ouvre le corrigé pour comparer. Au programme : annuaire (bases du dict), comptage avec Counter, compréhension de dictionnaire, ensembles (set), et un défi agenda multi-fuseaux.",
    steps: [
      {
        num: "1", titre: "Exercice 1 — Annuaire de la formation (dictionnaire : bases)",
        code: `annuaire = {"Awa": "Dakar", "Lin": "Tokyo", "Marc": "Montréal"}

# À toi de jouer (consignes ci-dessous), puis ▶ Exécuter
`,
        run: true,
        questions: [
          "Un intervenant déménage : change la ville de 'Marc' en 'Québec'.",
          "Ajoute une nouvelle intervenante 'Sofia' à 'Beyrouth'.",
          "Affiche la ville de 'Inconnu' SANS provoquer d'erreur (valeur par défaut '?').",
          "Parcours l'annuaire et affiche « nom : ville » pour chaque ligne.",
        ],
        correction: [
          "On modifie/ajoute avec annuaire[cle] = valeur ; .get(cle, '?') évite la KeyError ; .items() donne les couples (nom, ville).",
          { text: "Corrigé :" },
          { code: `annuaire = {"Awa": "Dakar", "Lin": "Tokyo", "Marc": "Montréal"}
annuaire["Marc"] = "Québec"          # modifier
annuaire["Sofia"] = "Beyrouth"       # ajouter
print("inconnu :", annuaire.get("Inconnu", "?"))
for nom, ville in annuaire.items():
    print(f"{nom} : {ville}")` },
        ],
      },
      {
        num: "2", titre: "Exercice 2 — Pays des participants (comptage avec Counter)",
        code: `from collections import Counter

pays = ["France", "Sénégal", "France", "Japon", "France", "Canada", "Japon", "Liban"]

# À toi de jouer
`,
        run: true,
        questions: [
          "Avec collections.Counter, compte les participants par pays.",
          "Affiche le pays le plus représenté et son effectif.",
          "Affiche le classement des 3 premiers pays.",
        ],
        correction: [
          "Counter(liste) compte en une ligne ; .most_common(n) renvoie les n plus fréquents, du plus grand au plus petit. most_common(1)[0] donne le couple (pays, effectif) du premier.",
          { text: "Corrigé :" },
          { code: `from collections import Counter
pays = ["France", "Sénégal", "France", "Japon", "France", "Canada", "Japon", "Liban"]
compte = Counter(pays)
premier, effectif = compte.most_common(1)[0]
print(f"le plus représenté : {premier} ({effectif})")
print(compte.most_common(3))` },
        ],
      },
      {
        num: "3", titre: "Exercice 3 — Dictionnaire en compréhension",
        code: `villes = ["Paris", "Dakar", "Tokyo", "Montréal"]
fuseaux = {"Paris": 2, "Tokyo": 9, "Dakar": 0}

# À toi de jouer
`,
        run: true,
        questions: [
          "En compréhension, construis le dict « ville → longueur du nom ».",
          "À partir de fuseaux (décalage par rapport à UTC), construis le dict « ville → heure locale » quand il est 12h UTC.",
          "Bonus : ne garde que les villes dont l'heure locale est en après-midi (≥ 12).",
        ],
        correction: [
          "Compréhension : {cle: valeur for … in …}, avec un filtre if optionnel. Heure locale = (12 + décalage) % 24.",
          { text: "Corrigé :" },
          { code: `villes = ["Paris", "Dakar", "Tokyo", "Montréal"]
longueurs = {ville: len(ville) for ville in villes}
print(longueurs)

fuseaux = {"Paris": 2, "Tokyo": 9, "Dakar": 0}
locales = {ville: (12 + dec) % 24 for ville, dec in fuseaux.items()}
print(locales)

aprem = {ville: h for ville, h in locales.items() if h >= 12}
print(aprem)` },
        ],
      },
      {
        num: "4", titre: "Exercice 4 — Présence aux sessions (ensembles)",
        code: `session1 = {"Awa", "Lin", "Marc", "Sofia", "Ravi"}
session2 = {"Lin", "Sofia", "Ravi", "Yuki"}
connexions = ["Awa", "Lin", "Awa", "Marc", "Lin"]

# À toi de jouer
`,
        run: true,
        questions: [
          "Qui était présent AUX DEUX sessions ? (intersection &)",
          "Qui a assisté à AU MOINS UNE session ? (union |)",
          "Qui était à la 1re MAIS PAS à la 2e ? (différence -)",
          "À partir de connexions, combien de personnes DISTINCTES se sont connectées ?",
        ],
        correction: [
          "& = intersection, | = union, - = différence. set(liste) dédoublonne ; len(set(...)) compte les distincts. sorted(...) trie pour un affichage lisible.",
          { text: "Corrigé :" },
          { code: `session1 = {"Awa", "Lin", "Marc", "Sofia", "Ravi"}
session2 = {"Lin", "Sofia", "Ravi", "Yuki"}
connexions = ["Awa", "Lin", "Awa", "Marc", "Lin"]
print(sorted(session1 & session2))   # les deux
print(sorted(session1 | session2))   # au moins une
print(sorted(session1 - session2))   # 1re mais pas 2e
print(len(set(connexions)), "personnes distinctes")` },
        ],
      },
      {
        num: "5", titre: "Exercice 5 — Défi : agenda multi-fuseaux (et rapidité dict vs liste)",
        code: `import timeit

fuseaux = {"Paris": 2, "Montréal": -4, "Tokyo": 9, "Nouméa": 11, "Dakar": 0}

# À toi de jouer
`,
        run: true,
        questions: [
          "Une session démarre à 14h00 UTC. Écris une fonction heure_locale(ville, h_utc) qui renvoie l'heure locale (modulo 24).",
          "Affiche l'heure locale de début pour CHAQUE ville (parcours du dict).",
          "Perf : compare avec timeit le coût de « 'Tokyo' in fuseaux » (dict) vs la même recherche dans list(fuseaux.keys()) (liste). Que conclus-tu ?",
        ],
        correction: [
          "(h_utc + fuseaux[ville]) % 24 : le modulo gère le passage de minuit. « x in dict » va directement à la clé (O(1)) ; « x in liste » parcourt (O(n)). Sur 5 villes l'écart est minime, il se creuse avec la taille.",
          { text: "Corrigé :" },
          { code: `import timeit
fuseaux = {"Paris": 2, "Montréal": -4, "Tokyo": 9, "Nouméa": 11, "Dakar": 0}

def heure_locale(ville, h_utc):
    return (h_utc + fuseaux[ville]) % 24

for ville in fuseaux:
    print(f"{ville} : {heure_locale(ville, 14)}h")

cles_liste = list(fuseaux.keys())
t_dict = timeit.timeit(lambda: "Tokyo" in fuseaux, number=50000)
t_liste = timeit.timeit(lambda: "Tokyo" in cles_liste, number=50000)
print(f"dict  : {t_dict:.4f} s")
print(f"liste : {t_liste:.4f} s")` },
        ],
      },
    ],
  },

  /* ===================== Données en tables — thème donnees-tables ===================== */
  {
    id: "tp-table-csv",
    theme: "donnees-tables",
    lang: "python",
    titre: "TP Python — Une table de A à Z (csv)",
    intro: "Fil rouge : les notes d'une classe de Première. On construit une table (liste de dictionnaires), on la relit depuis un CSV, puis on filtre, on trie, on calcule des statistiques et on fusionne deux tables — tout le thème en un TP. Exécute chaque étape (▶), observe, puis réponds aux questions.",
    steps: [
      {
        num: "1", titre: "Une table = une liste de dictionnaires", run: true,
        code: `# Chaque LIGNE est un dictionnaire ; les CLÉS sont les noms de colonnes.
eleves = [
    {"nom": "Awa",   "classe": "1G1", "note": 15},
    {"nom": "Bilal", "classe": "1G2", "note": 12},
    {"nom": "Clara", "classe": "1G1", "note": 17},
]
print(len(eleves), "lignes")
print(eleves[0])              # la 1re ligne (un dictionnaire complet)
print(eleves[0]["nom"])       # UNE cellule : ligne 0, colonne 'nom'

# Parcourir la table = parcourir la liste
for e in eleves:
    print(e["nom"], "->", e["note"])`,
        questions: [
          "Quelle expression donne la note de Clara ?",
          "Que représentent eleves[1] et eleves[1][\"classe\"] ?",
        ],
        correction: [
          "eleves[2][\"note\"] → 17 : on donne d'abord l'indice de LIGNE (2), puis le nom de COLONNE ('note').",
          "eleves[1] est la ligne entière de Bilal (un dictionnaire) ; eleves[1][\"classe\"] est la cellule '1G2'. Ligne = dict, cellule = valeur associée à une clé.",
        ],
      },
      {
        num: "2", titre: "Lire un CSV avec csv.DictReader (et convertir les nombres !)", run: true,
        code: `import csv, io

# En vrai on ouvrirait un fichier ; ici le CSV est dans une chaîne,
# et io.StringIO la fait passer pour un fichier ouvert.
donnees = """nom,classe,note
Awa,1G1,15
Bilal,1G2,12
Clara,1G1,17
Dan,1G2,9
Elsa,1G1,14"""

lecteur = csv.DictReader(io.StringIO(donnees))
table = [dict(ligne) for ligne in lecteur]
print(table[0])
print(table[0]["note"] + table[1]["note"])   # surprise !

# Un CSV ne contient QUE du texte : on convertit la colonne note
for ligne in table:
    ligne["note"] = int(ligne["note"])
print(table[0]["note"] + table[1]["note"])   # cette fois c'est bon`,
        questions: [
          "Pourquoi le premier print des notes affiche-t-il 1512 et pas 27 ?",
          "Quel rôle joue la 1re ligne du CSV (nom,classe,note) pour DictReader ?",
        ],
        correction: [
          "Dans un fichier CSV, TOUT est du texte : '15' + '12' concatène les chaînes → '1512'. Il faut convertir avec int() (ou float()) avant de calculer — c'est l'oubli classique du thème.",
          "C'est la ligne d'en-tête : DictReader s'en sert comme CLÉS des dictionnaires. Chaque ligne suivante devient {'nom': …, 'classe': …, 'note': …}.",
        ],
      },
      {
        num: "3", titre: "Filtrer les lignes (compréhension de liste)", run: true,
        code: `eleves = [
    {"nom": "Awa",   "classe": "1G1", "note": 15},
    {"nom": "Bilal", "classe": "1G2", "note": 12},
    {"nom": "Clara", "classe": "1G1", "note": 17},
    {"nom": "Dan",   "classe": "1G2", "note": 9},
    {"nom": "Elsa",  "classe": "1G1", "note": 14},
]

# Filtrer = garder les lignes qui vérifient une condition
admis = [e for e in eleves if e["note"] >= 10]
print(len(admis), "admis sur", len(eleves))

# Filtrer + ne garder qu'une colonne (projection)
noms_1g1 = [e["nom"] for e in eleves if e["classe"] == "1G1"]
print("en 1G1 :", noms_1g1)`,
        questions: [
          "Écris la compréhension qui garde les élèves de 1G2 ayant au moins 10.",
          "Quelle différence entre [e for e in eleves if …] et [e[\"nom\"] for e in eleves if …] ?",
        ],
        correction: [
          "[e for e in eleves if e[\"classe\"] == \"1G2\" and e[\"note\"] >= 10] → seule la ligne de Bilal. On combine les conditions avec and.",
          "La 1re renvoie des LIGNES entières (une sous-table) ; la 2e ne renvoie que la colonne 'nom' (une liste de chaînes) : filtre + projection.",
        ],
      },
      {
        num: "4", titre: "Trier avec sorted et key", run: true,
        code: `eleves = [
    {"nom": "Awa",   "classe": "1G1", "note": 15},
    {"nom": "Bilal", "classe": "1G2", "note": 12},
    {"nom": "Clara", "classe": "1G1", "note": 17},
    {"nom": "Dan",   "classe": "1G2", "note": 9},
    {"nom": "Elsa",  "classe": "1G1", "note": 14},
]

# sorted(table, key=...) : key dit SUR QUELLE colonne trier
par_note = sorted(eleves, key=lambda e: e["note"], reverse=True)
for e in par_note:
    print(e["note"], e["nom"])

par_nom = sorted(eleves, key=lambda e: e["nom"])
print([e["nom"] for e in par_nom])
print(eleves[0]["nom"])   # la table d'origine n'a pas bougé`,
        questions: [
          "Pourquoi sorted(eleves) tout court provoquerait-il une erreur ?",
          "Que fait reverse=True ? Et quelle différence entre sorted(eleves, key=…) et eleves.sort(key=…) ?",
        ],
        correction: [
          "Les lignes sont des dictionnaires : Python ne sait pas comparer deux dicts entre eux. Le paramètre key donne LA valeur à comparer pour chaque ligne (ici sa note) — souvent via une fonction lambda.",
          "reverse=True trie du plus grand au plus petit (classement). sorted renvoie une NOUVELLE liste triée (l'original est intact) ; .sort() trie la liste SUR PLACE et renvoie None.",
        ],
      },
      {
        num: "5", titre: "Statistiques sur une colonne", run: true,
        code: `eleves = [
    {"nom": "Awa",   "classe": "1G1", "note": 15},
    {"nom": "Bilal", "classe": "1G2", "note": 12},
    {"nom": "Clara", "classe": "1G1", "note": 17},
    {"nom": "Dan",   "classe": "1G2", "note": 9},
    {"nom": "Elsa",  "classe": "1G1", "note": 14},
]

# 1) extraire la colonne, 2) calculer
notes = [e["note"] for e in eleves]
moyenne = sum(notes) / len(notes)
print(f"moyenne : {moyenne:.2f}")
print("min :", min(notes), "| max :", max(notes))

# Moyenne d'une seule classe : on filtre D'ABORD
notes_1g1 = [e["note"] for e in eleves if e["classe"] == "1G1"]
print(f"moyenne 1G1 : {sum(notes_1g1) / len(notes_1g1):.2f}")`,
        questions: [
          "Calcule la moyenne de la classe 1G2. Est-elle au-dessus ou en dessous de la moyenne générale ?",
          "Que se passerait-il si on calculait la moyenne d'une classe qui n'existe pas (liste vide) ?",
        ],
        correction: [
          "notes_1g2 = [e[\"note\"] for e in eleves if e[\"classe\"] == \"1G2\"] → [12, 9], moyenne 10.5, en dessous de la moyenne générale (13.4).",
          "len(liste_vide) vaut 0 → ZeroDivisionError. Un programme robuste teste if len(notes) > 0 avant de diviser.",
        ],
      },
      {
        num: "6", titre: "Défi — jointure de deux tables sur une clé",
        code: `# Deux tables qui partagent la colonne 'classe' (la CLÉ de jointure)
eleves = [
    {"nom": "Awa",   "classe": "1G1", "note": 15},
    {"nom": "Bilal", "classe": "1G2", "note": 12},
    {"nom": "Clara", "classe": "1G1", "note": 17},
]
salles = [
    {"classe": "1G1", "salle": "B204", "prof": "M. Turing"},
    {"classe": "1G2", "salle": "A112", "prof": "Mme Hopper"},
]

# À toi de jouer (consignes ci-dessous), puis ▶ Exécuter
`,
        run: true,
        questions: [
          "Construis la table fusion : chaque élève enrichi de sa salle et de son prof (jointure sur la colonne 'classe').",
          "Affiche « Awa -> B204 (M. Turing) » pour chaque élève.",
          "Bonus : pourquoi passer par un dictionnaire {classe: ligne} est-il plus efficace qu'une double boucle quand les tables grossissent ?",
        ],
        correction: [
          "Idée de la jointure : pour chaque ligne d'élève, retrouver dans l'autre table LA ligne qui a la même valeur de clé, puis fusionner les deux dictionnaires. L'index {classe: ligne} évite de re-parcourir salles à chaque élève : une double boucle fait n×m comparaisons, l'accès au dictionnaire est direct — c'est l'écart liste/dict déjà vu au TP dictionnaires.",
          { text: "Corrigé :" },
          { code: `eleves = [
    {"nom": "Awa",   "classe": "1G1", "note": 15},
    {"nom": "Bilal", "classe": "1G2", "note": 12},
    {"nom": "Clara", "classe": "1G1", "note": 17},
]
salles = [
    {"classe": "1G1", "salle": "B204", "prof": "M. Turing"},
    {"classe": "1G2", "salle": "A112", "prof": "Mme Hopper"},
]

# 1) index : classe -> ligne de la table salles
index = {s["classe"]: s for s in salles}

# 2) jointure : on fusionne chaque élève avec la ligne correspondante
fusion = []
for e in eleves:
    ligne = dict(e)                    # copie (ne pas modifier l'original)
    ligne["salle"] = index[e["classe"]]["salle"]
    ligne["prof"]  = index[e["classe"]]["prof"]
    fusion.append(ligne)

for l in fusion:
    print(f"{l['nom']} -> {l['salle']} ({l['prof']})")` },
        ],
      },
    ],
  },

  /* ===================== Algorithmique — kNN (d'après mon TP « XV de France » et le cours DIU de L. Amanton) ===================== */
  {
    id: "tp-knn-rugby",
    theme: "algorithmique",
    lang: "python",
    titre: "TP — kNN : avant ou arrière ? Le XV de France classé par taille et poids",
    intro:
      "Objectif : écrire l'algorithme des k plus proches voisins de A à Z (capacité du BO) et l'évaluer honnêtement : découper le jeu de données en entraînement / test, coder la distance et le vote, mesurer le taux de réussite, faire varier k. Données : 30 joueurs du XV de France (taille, poids, poste). D'après mon TP et le diaporama « K plus proches voisins (KNN) » de L. Amanton (DIU EIL, Université Le Havre Normandie).",
    steps: [
      {
        num: "1", titre: "Le jeu de données et son découpage entraînement / test", run: true,
        code: `# ÉTAPE 1 — Le jeu de données : le XV de France (nom, taille cm, poids kg, poste)
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

avants = [j for j in joueurs if j[3] == "Avant"]
arrieres = [j for j in joueurs if j[3] == "Arrière"]
print(len(joueurs), "joueurs :", len(avants), "avants et", len(arrieres), "arrières")

# Un nuage de points en mode texte : une ligne par tranche de 5 kg,
# une colonne par cm (A = avant, a = arrière, * = deux joueurs superposés)
for poids_min in range(145, 75, -5):
    ligne = ""
    for taille in range(172, 206):
        c = "."
        for j in joueurs:
            if poids_min <= j[2] < poids_min + 5 and j[1] == taille:
                c = "*" if c != "." else ("A" if j[3] == "Avant" else "a")
        ligne += c
    print(str(poids_min).rjust(3), "kg |", ligne)
print("            172 cm ......................... 205 cm")

# Jeu de TEST : 8 joueurs mis de côté (on connaît leur poste, on fera comme si non)
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]   # les 22 autres
print("entraînement :", len(entrainement), "joueurs ; test :", len(test), "joueurs")`,
        note: "Le « nuage de points » en mode texte remplace le graphique matplotlib du fichier knn_rugby.py (Thonny) : A = avant, a = arrière, * = deux joueurs superposés (Marchand, 181 cm et 108 kg, cache Danty, 181 cm et 106 kg) ; en haut les lourds, à droite les grands.",
        questions: [
          "Sur le nuage, où sont les avants ? les arrières ? Y a-t-il une zone où les deux se mélangent ?",
          "Pourquoi mettre 8 joueurs de côté AVANT de commencer, alors qu'on connaît leur poste ?",
          "Pourquoi le découpage est-il ici « statique » (une liste de noms) plutôt qu'aléatoire ? Quel est l'avantage, quel est le risque ?",
        ],
        correction: [
          "Les avants (A) occupent le haut et la droite : lourds et grands ; les arrières (a) le bas : moins de 100 kg, sauf Fickou (100 kg) et Danty (106 kg). La zone 105-110 kg / 181-185 cm mélange les deux : Marchand, Mauvaka et Wardi côté avants, Danty côté arrières (Marchand et Danty se superposent sur le nuage, d'où l'étoile).",
          "Pour mesurer si l'algorithme classe BIEN des joueurs qu'il n'a jamais vus : c'est le jeu de test. Si on l'évaluait sur les joueurs d'entraînement, il aurait 100 % avec k = 1 (chaque joueur est son propre plus proche voisin) et ça ne prouverait rien.",
          "Avantage : tout le monde obtient les mêmes résultats (reproductibilité), pratique pour un cours. Risque : le choix des 8 influence le taux mesuré (on a ici volontairement mis des cas limites comme Danty). Le bonus utilise random pour un découpage aléatoire.",
        ],
      },
      {
        num: "2", titre: "Coder la distance, puis le vote", run: true,
        code: `# ÉTAPE 2 — Distance puis vote : complète les deux fonctions
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

# Jeu de TEST : 8 joueurs mis de côté (on connaît leur poste, on fera comme si non)
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]   # les 22 autres

def distance(a, b):
    """Distance euclidienne entre deux joueurs, dans le plan (taille, poids)."""
    return 0   # À COMPLÉTER : racine de (écart de taille)² + (écart de poids)²

def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return postes[0]   # À COMPLÉTER : le poste le plus FRÉQUENT (vote), pas le premier

inconnu = ("Mystère", 195, 118, "?")
proches = sorted(entrainement, key=lambda j: distance(j, inconnu))[:3]
print("Les 3 plus proches de Mystère :", [j[0] for j in proches])
print("Prédiction pour Mystère :", knn(entrainement, inconnu, k=3))

# Décommente quand c'est prêt :
# assert round(distance(("A", 0, 0, ""), ("B", 3, 4, "")), 1) == 5.0
# assert knn(entrainement, ("Test", 175, 82, ""), k=3) == "Arrière"
# assert knn(entrainement, ("Test", 200, 130, ""), k=3) == "Avant"
# print("distance et knn OK")`,
        questions: [
          "Complète distance (Pythagore sur la taille et le poids) et le vote de knn, puis fais passer les asserts.",
          "Pourquoi la version fournie de knn (postes[0]) est-elle fausse ? Dans quel cas donnerait-elle quand même le bon résultat ?",
          "Que valent les 3 plus proches voisins de « Mystère » (195 cm, 118 kg) une fois distance corrigée ? Et sa prédiction ?",
        ],
        correction: [
          {
            code: `joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

# Jeu de TEST : 8 joueurs mis de côté (on connaît leur poste, on fera comme si non)
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]   # les 22 autres

def distance(a, b):
    """Distance euclidienne dans le plan (taille, poids)."""
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5

def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return max(set(postes), key=postes.count)

inconnu = ("Mystère", 195, 118, "?")
proches = sorted(entrainement, key=lambda j: distance(j, inconnu))[:3]
print("Les 3 plus proches de Mystère :", [j[0] for j in proches])
print("Prédiction pour Mystère :", knn(entrainement, inconnu, k=3))   # Avant
assert round(distance(("A", 0, 0, ""), ("B", 3, 4, "")), 1) == 5.0
assert knn(entrainement, ("Test", 175, 82, ""), k=3) == "Arrière"
assert knn(entrainement, ("Test", 200, 130, ""), k=3) == "Avant"
print("distance et knn OK")`,
          },
          "postes[0] renvoie le poste du voisin le plus proche : c'est kNN avec k = 1, pas un vote. Elle donne le bon résultat quand les k voisins sont tous du même poste (cas fréquent loin de la frontière), mais pas dans la zone de mélange.",
          "Alldritt, Ollivon et Flament : trois avants à 4, 5 et 2 kg et à 4, 4 et 8 cm de Mystère (distances 5,7, 6,4 et 8,2) : prédiction Avant. Tant que distance renvoie 0, sorted ne change rien et les « 3 plus proches » sont juste les 3 premiers de la liste : Atonio, Baille, Flament.",
        ],
      },
      {
        num: "3", titre: "Évaluer sur le jeu de test : qui est mal classé, et pourquoi ?", run: true,
        code: `# ÉTAPE 3 — Évaluer sur le jeu de test : qui est bien classé, qui ne l'est pas ?
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

# Jeu de TEST : 8 joueurs mis de côté (on connaît leur poste, on fera comme si non)
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]   # les 22 autres

def distance(a, b):
    """Distance euclidienne dans le plan (taille, poids)."""
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5

def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return max(set(postes), key=postes.count)

k = 3
bien_classes = 0
for joueur in test:
    prediction = knn(entrainement, joueur, k)
    marque = "" if prediction == joueur[3] else "<-- erreur"
    print(joueur[0].ljust(10), "| réel :", joueur[3].ljust(7), "| prédit :", prediction,
          marque)
    # À TOI : compte les bonnes prédictions dans bien_classes

print("Taux de réussite :", bien_classes, "/", len(test))

# À TOI : affiche, pour le joueur mal classé, ses 3 plus proches voisins et leur poste.
#         Pourquoi kNN se trompe-t-il ? Est-ce vraiment une erreur de l'algorithme ?`,
        questions: [
          "Complète le comptage de bien_classes. Quel taux de réussite obtiens-tu avec k = 3 ?",
          "Quel joueur est mal classé ? Affiche ses 3 plus proches voisins avec leur poste et leur distance.",
          "Est-ce une erreur de l'algorithme, des données, ou du choix des caractéristiques ? Quelle caractéristique ajouterais-tu pour l'aider ?",
        ],
        correction: [
          "7 / 8 : il faut ajouter bien_classes += 1 sous un test if prediction == joueur[3] (ou compter les lignes sans « erreur »).",
          {
            code: `joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

# Jeu de TEST : 8 joueurs mis de côté (on connaît leur poste, on fera comme si non)
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]   # les 22 autres

def distance(a, b):
    """Distance euclidienne dans le plan (taille, poids)."""
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5

def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return max(set(postes), key=postes.count)

k = 3
bien_classes = 0
for joueur in test:
    prediction = knn(entrainement, joueur, k)
    if prediction == joueur[3]:
        bien_classes += 1
print("Taux de réussite :", bien_classes, "/", len(test))   # 7 / 8

danty = [j for j in test if j[0] == "Danty"][0]
voisins = sorted(entrainement, key=lambda j: distance(j, danty))[:3]
print([(v[0], v[3], round(distance(v, danty), 1)) for v in voisins])
# [('Wardi', 'Avant', 5.7), ('Aldegheri', 'Avant', 9.0), ('Baille', 'Avant', 9.1)]`,
          },
          "Danty (181 cm, 106 kg) est un centre au gabarit d'avant : ses 3 plus proches voisins sont trois avants. L'algorithme fait exactement ce qu'on lui demande ; ce sont les deux caractéristiques (taille, poids) qui ne suffisent pas à séparer les postes. On pourrait ajouter le nombre de plaquages, de ballons portés, la vitesse sur 40 m…",
        ],
      },
      {
        num: "4", titre: "Faire varier k : trop petit, trop grand ?", run: true,
        code: `# ÉTAPE 4 — Faire varier k : trop petit, trop grand ?
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

# Jeu de TEST : 8 joueurs mis de côté (on connaît leur poste, on fera comme si non)
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]   # les 22 autres

def distance(a, b):
    """Distance euclidienne dans le plan (taille, poids)."""
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5

def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return max(set(postes), key=postes.count)

def taux_erreur(k):
    erreurs = 0
    for j in test:
        if knn(entrainement, j, k) != j[3]:
            erreurs += 1
    return erreurs / len(test)

for k in [1, 3, 5, 7, 11, 15, 21]:
    print("k =", str(k).rjust(2), "-> taux d'erreur :", round(100 * taux_erreur(k)), "%")

# À TOI : que se passe-t-il avec k = 22 (tous les joueurs d'entraînement) ? Explique.
# À TOI : avec k = 2, comment Python départage-t-il un vote 1 - 1 ?
#         (regarde max(set(...), key=...))`,
        questions: [
          "Quels k donnent le meilleur taux ? Que se passe-t-il pour k = 7 et 15, puis pour k = 21 ?",
          "Que renverra knn avec k = 22 (tous les joueurs d'entraînement) pour N'IMPORTE quel joueur ? Pourquoi ?",
          "Avec k = 2, un vote peut finir à 1 - 1 : comment max(set(postes), key=postes.count) départage-t-il ? Que faut-il en conclure ?",
        ],
        correction: [
          "k = 1, 3, 5 et 11 : 12 % d'erreur (Danty seulement). k = 7 et 15 : 25 %, Fickou bascule car parmi ses voisins on trouve désormais des avants (Jelonch, Cros…). k = 21 : 50 %, on prend presque tous les joueurs, la classe majoritaire (12 avants contre 10 arrières) l'emporte pour tout le monde. Au passage, k = 9 est piégeux : Alldritt (avant) et Jalibert (arrière) sont exactement à la même distance de Fickou, et c'est l'ordre de la liste qui départage.",
          "Toujours « Avant » : avec les 22 joueurs comme voisins, le vote est le même pour tout point, 12 avants contre 10 arrières. Un k égal au nombre d'exemples ignore complètement le point à classer.",
          "max(set(...)) parcourt un ensemble, dont l'ordre n'est pas garanti : en cas d'égalité, le résultat est arbitraire et peut même changer d'une exécution à l'autre. C'est pour cela qu'on choisit un k IMPAIR quand il y a deux classes. Variante plus robuste (fichier knn_rugby_prof.py du kit) : compter les postes dans un dictionnaire et prendre max(effectifs, key=effectifs.get) ; en cas d'égalité, c'est la classe rencontrée en premier, donc celle du voisin le plus proche, qui gagne.",
        ],
      },
      {
        num: "5", titre: "Bonus — découpage aléatoire avec random, et normalisation", bonus: true, run: true,
        code: `# BONUS — Découpage ALÉATOIRE entraînement / test (75 % / 25 %) avec random
import random
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

random.seed(2026)              # même « hasard » à chaque exécution (reproductible)
melange = joueurs[:]           # une copie, pour ne pas modifier la liste de départ
random.shuffle(melange)        # on mélange... puis on coupe aux 3/4
coupure = 3 * len(melange) // 4
entrainement = melange[:coupure]
test = melange[coupure:]
print(len(entrainement), "pour apprendre,", len(test), "pour tester")
print("jeu de test :", [j[0] for j in test])

def distance(a, b):
    """Distance euclidienne dans le plan (taille, poids)."""
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5

def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return max(set(postes), key=postes.count)

reussites = sum(1 for j in test if knn(entrainement, j, 5) == j[3])
print("k = 5 :", reussites, "/", len(test), "bien classés")

# À TOI : change la graine (random.seed(1), (2), (3)...) : le taux bouge-t-il ?
#         Que faut-il en conclure sur une mesure faite sur 8 joueurs seulement ?`,
        note: "random.seed fixe la graine du générateur : le « hasard » devient reproductible, ce qui permet de comparer les résultats entre élèves.",
        questions: [
          "Change la graine (1, 2, 3…) et note le taux obtenu à chaque fois. Que constates-tu ? Que faut-il en conclure sur une mesure faite sur 8 joueurs ?",
          "Les tailles vont de 174 à 203 cm (plage de 29) et les poids de 81 à 145 kg (plage de 64). Laquelle des deux colonnes pèse le plus dans la distance ? Écris normaliser_colonnes(joueurs) qui ramène taille et poids entre 0 et 1 (formule min-max) et refais la prédiction.",
        ],
        correction: [
          "Le taux varie selon la graine (par exemple 6, 7 ou 8 sur 8) : avec 8 joueurs de test, un seul joueur fait bouger la mesure de 12,5 points. Une mesure fiable demande beaucoup plus d'exemples, ou plusieurs découpages dont on fait la moyenne (c'est la validation croisée des professionnels). Le fichier knn_rugby_prof.py du kit fait ce mélange avec random.shuffle et trace la courbe du taux d'erreur pour k de 1 à 15.",
          {
            code: `import random
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"),
    ("Marchand", 181, 108, "Avant"), ("Flament", 203, 116, "Avant"),
    ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"),
    ("Wardi", 185, 110, "Avant"), ("Mauvaka", 183, 105, "Avant"),
    ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"),
    ("Jelonch", 193, 106, "Avant"), ("Bamba", 185, 117, "Avant"),
    ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"),
    ("Danty", 181, 106, "Arrière"), ("Bielle-Biarrey", 184, 82, "Arrière"),
    ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"),
    ("Depoortère", 194, 94, "Arrière"), ("Lebel", 185, 93, "Arrière"),
    ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

def normaliser_colonnes(joueurs):
    """Copie des joueurs avec taille et poids ramenés entre 0 et 1 (min-max)."""
    tailles = [j[1] for j in joueurs]
    poids = [j[2] for j in joueurs]
    t_min, t_max = min(tailles), max(tailles)
    p_min, p_max = min(poids), max(poids)
    resultat = []
    for j in joueurs:
        t = (j[1] - t_min) / (t_max - t_min)
        p = (j[2] - p_min) / (p_max - p_min)
        resultat.append((j[0], t, p, j[3]))
    return resultat

def distance(a, b):
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5

def knn(entrainement, inconnu, k=3):
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]
    postes = [v[3] for v in voisins]
    return max(set(postes), key=postes.count)

# Le poids pèse plus : sa plage (64 kg) est plus large que celle des tailles (29 cm).
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba",
             "Danty", "Moefana", "Fickou", "Barré"]
for version, donnees in [("brut", joueurs), ("normalisé", normaliser_colonnes(joueurs))]:
    test = [j for j in donnees if j[0] in noms_test]
    entrainement = [j for j in donnees if j[0] not in noms_test]
    reussites = sum(1 for j in test if knn(entrainement, j, 5) == j[3])
    print(version.ljust(10), ": k = 5 ->", reussites, "/ 8")
# brut       : k = 5 -> 7 / 8
# normalisé  : k = 5 -> 7 / 8  (échelles proches : la normalisation change peu ici)`,
          },
        ],
      },
    ],
  },
  {
    id: "tp-gloutons",
    theme: "algorithmique",
    lang: "python",
    titre: "TP — Algorithmes gloutons : monnaie, sac à dos, planning",
    notebook: "assets/fichiers/premiere/algorithmique/gloutons_capytale.ipynb",
    intro:
      "Objectif : mettre en œuvre un algorithme glouton (capacité du BO) sur quatre problèmes classiques, et surtout comprendre quand il donne la meilleure solution et quand il se trompe. Un algorithme glouton applique toujours la même règle locale (« le meilleur choix sur le moment ») et ne revient jamais en arrière : il est rapide et simple, mais pas toujours optimal. On finit par une recherche exhaustive (qui trouve toujours l'optimum, mais lentement) et par un bonus sur la récursivité de Fibonacci. D'après le notebook Capytale « Algorithmes gloutons » : le bouton ⚡ Ouvrir dans Basthon l'ouvre tel quel dans ton navigateur (il est aussi dans le kit du thème, avec le fichier gloutons.py pour Thonny).",
    prof:
      "<p><strong>Place dans la progression.</strong> Séance 6 du thème (les gloutons), après le tri et la dichotomie, avant kNN. Les élèves ont déjà écrit des boucles <code>while</code>, des fonctions avec <code>return</code> et manipulé des listes de tuples : tout le TP tient avec ces outils. La partie 5 (Fibonacci) mobilise la récursivité, hors programme de Première : c'est un bonus pour les élèves rapides ou une ouverture vers la Terminale.</p>" +
      "<ul>" +
      "<li><strong>Objectifs (BO « Algorithmes gloutons »).</strong> Mettre en œuvre un algorithme glouton ; comprendre que le glouton fait un choix local irrévocable ; savoir qu'il donne l'optimum dans certains cas (monnaie en euros, choix par heure de fin pour les conférences) et pas dans d'autres (monnaie non canonique, sac à dos) ; comparer avec une recherche exhaustive et son coût.</li>" +
      "<li><strong>Déroulé conseillé (2 séances de 2 h ou 1 séance + maison).</strong> Séance A : étapes 1 à 3 (échauffement binaire 15 min, monnaie 35 min, sac à dos 40 min, bilan 10 min). Séance B : étape 4 (planning glouton, 45 min, avec un travail sur frise au tableau avant de coder), étape 5 (recherche exhaustive, 30 min, lecture guidée du code récursif plutôt qu'écriture), étape 6 en bonus. Sur le site chaque cellule s'exécute dans le navigateur ; sur Capytale, déposer <code>gloutons_capytale.ipynb</code> ; sur Thonny, <code>gloutons.py</code> (squelette à compléter, asserts à décommenter). Le corrigé complet vérifié est <code>gloutons_corrige.py</code>.</li>" +
      "<li><strong>Différenciation.</strong> Étapes 1 et 2 pour tous ; étape 3 en autonomie pour la majorité ; l'étape 5 se fait en lecture de code pour les groupes fragiles (on exécute, on compare aux résultats du glouton, on explique <em>avec / sans</em> à l'oral) et en écriture pour les avancés. Le bonus 6 n'est pas exigible.</li>" +
      "<li><strong>Le fil conducteur à faire dire aux élèves.</strong> À chaque partie, la même phrase : « quelle est la règle locale ? » (la plus grande pièce ; l'objet le plus cher, puis le meilleur rapport ; la conférence qui finit le plus tôt) puis « cette règle donne-t-elle toujours l'optimum ? ». Faire écrire cette phrase dans le cahier après chaque partie : c'est la trace du cours.</li>" +
      "<li><strong>Pièges observés.</strong> (1) Confondre <code>i = i + 1</code> (passer à la pièce suivante) et retirer la pièce : les élèves incrémentent <code>i</code> dans les deux branches et perdent des pièces. (2) Oublier la condition <code>i &lt; len(lst_piece)</code> : sans pièce de 1 la boucle ne s'arrête plus (IndexError ou boucle infinie). (3) Trier avec <code>sorted(liste, reverse=True)</code> pour le sac à dos : ça marche par hasard car le tri se fait sur le premier élément du tuple (la valeur) ; faire expliciter <code>key=</code>. (4) Dans <code>planning1</code>, tester <code>debut &gt; fin_precedente</code> au lieu de <code>&gt;=</code> : une conférence qui commence pile à la fin de la précédente est compatible. (5) Croire qu'un résultat différent du corrigé est faux dans <code>planning3</code> : plusieurs plannings peuvent être optimaux à égalité (voir la note de l'étape 5).</li>" +
      "<li><strong>Évaluation.</strong> Sur le site : la réponse en direct (📡) avec la question « Combien de pièces pour 48 avec les pièces 30, 24, 12, 6, 3, 1 ? » (attendu : le glouton en donne 3, l'optimum est 2). Écrit : donner un nouveau système de pièces et demander si le glouton est optimal, en justifiant par un contre-exemple ; donner 5 conférences et demander le planning glouton. L'exercice 8 du thème (coder le rendu) reste l'entraînement de référence.</li>" +
      "<li><strong>Ce qui a changé par rapport au notebook Capytale.</strong> Le module <code>rcviz</code> (arbre d'appels de Fibonacci) n'existe pas dans le navigateur : il est remplacé par un compteur global d'appels, qui rend le même phénomène visible (25 appels pour n = 6, 242 785 pour n = 25). Les frises des conférences (images du notebook, que les élèves doivent traduire en tuples : cas 2 et 3) sont données ici en tuples et redessinées en mode texte ; un cas 5 est ajouté pour prendre en défaut la règle « la plus courte d'abord ».</li>" +
      "</ul>",
    steps: [
      {
        num: "1", titre: "Échauffement : du décimal au binaire, en glouton", run: true,
        code: `# ÉTAPE 1 — Écrire n en binaire sur 16 bits, du poids fort au poids faible
# Règle gloutonne : pour i = 15, 14, ..., 0, si n >= 2**i on écrit "1" et on retire 2**i, sinon "0".

def dec_vers_bin_16b(n):
    resultat = ""
    for i in range(15, -1, -1):
        if n >= 2 ** i:
            resultat = resultat + "1"
            n = n - 2 ** i
        else:
            resultat = resultat + "0"
    return resultat

print(dec_vers_bin_16b(5))       # attendu : 0000000000000101
print(dec_vers_bin_16b(1000))
print(dec_vers_bin_16b(65535))   # attendu : 16 fois "1"

# À toi : la même chose SANS limite de taille. Il faut d'abord trouver le plus grand
# rang i tel que 2**i <= n, puis appliquer la même règle avec un while.
def dec_vers_bin(n):
    if n == 0:
        return "0"
    i = 0
    # À COMPLÉTER : augmenter i tant que 2 ** (i + 1) <= n
    resultat = ""
    # À COMPLÉTER : while i >= 0 : même règle qu'au-dessus, puis i = i - 1
    return resultat

print(dec_vers_bin(5), dec_vers_bin(1000), dec_vers_bin(70000))
# Vérification automatique (Python sait déjà le faire : bin(n)[2:])
# assert dec_vers_bin(1000) == "1111101000" and dec_vers_bin(70000) == bin(70000)[2:]`,
        note: "On a déjà vu cette méthode dans le thème « Représentation des données ». Ici on la relit avec des lunettes d'algorithmicien : à chaque étape on prend la plus grande puissance de 2 possible et on ne revient jamais dessus. C'est déjà un algorithme glouton.",
        questions: [
          "Pourquoi peut-on dire que cette méthode est « gloutonne » ? Quelle est la règle appliquée à chaque étape ?",
          "Que se passe-t-il avec dec_vers_bin_16b(70000) ? Pourquoi ?",
          "Pourquoi n'y a-t-il aucun risque que cette méthode se trompe (donne une écriture fausse) ?",
        ],
        correction: [
          "À chaque rang i on fait le choix local « je prends 2**i si je peux » et on ne le remet jamais en question. C'est la définition d'un algorithme glouton : une règle simple, appliquée dans l'ordre, sans retour en arrière.",
          "70000 dépasse 65535 = 2**16 - 1 : il reste 4464 après la boucle qui n'est jamais écrit, le résultat (1111111111111111 tronqué) est faux. D'où la version dec_vers_bin qui commence par chercher le bon rang de départ.",
          "Parce que la décomposition en puissances de 2 distinctes est unique et que, si n < 2**(i+1), on a forcément n - 2**i < 2**i : prendre la plus grande puissance possible ne bloque jamais la suite. Ce n'est pas le cas de tous les problèmes du TP !",
          { code: `def dec_vers_bin(n):
    if n == 0:
        return "0"
    i = 0
    while 2 ** (i + 1) <= n:
        i = i + 1
    resultat = ""
    while i >= 0:
        if n >= 2 ** i:
            resultat = resultat + "1"
            n = n - 2 ** i
        else:
            resultat = resultat + "0"
        i = i - 1
    return resultat

assert dec_vers_bin(5) == "101"
assert dec_vers_bin(1000) == "1111101000"
assert dec_vers_bin(70000) == bin(70000)[2:]` },
        ],
        prof: "<p>Étape courte (15 min) qui rassure : le code est donné, on le relit. Faire verbaliser la règle au tableau avant de lancer la cellule. La question 3 est le point clé de tout le TP : le glouton binaire est <em>toujours</em> optimal parce que la structure du problème le garantit ; on passera ensuite à des problèmes où ce n'est plus vrai. Ne pas s'attarder sur la preuve, une phrase suffit.</p>",
      },
      {
        num: "2", titre: "Le rendu de monnaie : la plus grande pièce d'abord", run: true,
        code: `# ÉTAPE 2 — Rendre 5,48 € (548 centimes) avec le moins de pièces possible
# Règle gloutonne : tant qu'il reste quelque chose à rendre, on donne la plus grande pièce possible.
rst = 548
lst_piece = [200, 100, 50, 20, 10, 5, 2, 1]      # triée de la plus grande à la plus petite
lst_rendu = []
i = 0
while rst > 0 and i < len(lst_piece):
    if lst_piece[i] <= rst:      # la pièce i tient dans ce qui reste : on la rend
        lst_rendu.append(lst_piece[i])
        rst = rst - lst_piece[i]
    else:                        # trop grande : on passe à la pièce suivante
        i = i + 1
print(lst_rendu)                 # attendu : [200, 200, 100, 20, 20, 5, 2, 1]

# À toi : la même chose dans une fonction, réutilisable avec n'importe quel système de pièces
def rendu_glouton(rst, lst_piece):
    lst_rendu = []
    # À COMPLÉTER : reprendre la boucle ci-dessus
    return lst_rendu

print(rendu_glouton(548, [200, 100, 50, 20, 10, 5, 2, 1]))
print(rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2, 1]))    # attendu : [10, 1]

# Décommente quand la fonction est prête :
# Royaume-Uni avant 1971 : pièces de 30, 24, 12, 6, 3 et 1 (en pence)
# print("48 :", rendu_glouton(48, [30, 24, 12, 6, 3, 1]))
# print("52 :", rendu_glouton(52, [30, 24, 12, 6, 3, 1]))
# Et si la pièce de 1 centime disparaît ?
# print("11 sans pièce de 1 :", rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2]))`,
        note: "Dans la boucle, deux cas et deux actions différentes : quand la pièce tient, on la rend (et on garde le même i, la même pièce peut servir plusieurs fois) ; quand elle ne tient pas, on avance d'une pièce (i + 1). La condition i < len(lst_piece) évite de sortir de la liste.",
        questions: [
          "Avec les pièces en euros, le glouton rend-il toujours le nombre MINIMUM de pièces ? Essaie 48, 52, 99.",
          "Avec les pièces britanniques d'avant 1971 (30, 24, 12, 6, 3, 1), combien de pièces le glouton rend-il pour 48 ? Peut-on faire mieux ? Et pour 52 ?",
          "Sans pièce de 1 centime, que rend le glouton pour 11 ? Pourquoi est-ce un problème, alors qu'il existe une solution (laquelle) ?",
          "Pourquoi la liste de pièces doit-elle être triée par valeur décroissante ? Que se passerait-il sinon ?",
        ],
        correction: [
          "Oui : en euros (comme en dollars), le système de pièces est dit « canonique » et le glouton est optimal. 48 = 20 + 20 + 5 + 2 + 1 (5 pièces), 52 = 50 + 2 (2 pièces), 99 = 50 + 20 + 20 + 5 + 2 + 2 (6 pièces) : impossible de faire moins.",
          "48 → glouton [30, 12, 6] soit 3 pièces, alors que 24 + 24 en fait 2. 52 → glouton [30, 12, 6, 3, 1] soit 5 pièces, alors que 24 + 24 + 3 + 1 en fait 4. Le glouton n'est plus optimal : prendre la pièce de 30 « parce que c'est la plus grande » était un mauvais choix local, et il ne revient jamais dessus.",
          "Le glouton rend [10] et s'arrête avec 1 centime impossible à rendre (la boucle se termine parce que i atteint la fin de la liste). Pourtant 5 + 2 + 2 + 2 rend exactement 11. Le glouton peut donc non seulement être non optimal, mais carrément échouer.",
          "La règle « la plus grande pièce possible » suppose qu'on examine les pièces de la plus grande à la plus petite. Avec une liste croissante [1, 2, 5, ...], le glouton rendrait tout en pièces de 1 (548 pièces !) : la règle ne serait plus appliquée. Dans une version robuste on écrirait d'abord lst_piece = sorted(lst_piece, reverse=True).",
          { code: `def rendu_glouton(rst, lst_piece):
    """Pièces rendues pour la somme rst, toujours la plus grande possible."""
    lst_rendu = []
    i = 0
    while rst > 0 and i < len(lst_piece):
        if lst_piece[i] <= rst:
            lst_rendu.append(lst_piece[i])
            rst = rst - lst_piece[i]
        else:
            i = i + 1
    return lst_rendu

assert rendu_glouton(548, [200, 100, 50, 20, 10, 5, 2, 1]) == [200, 200, 100, 20, 20, 5, 2, 1]
assert rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2, 1]) == [10, 1]
print(rendu_glouton(48, [30, 24, 12, 6, 3, 1]))          # [30, 12, 6]        (24 + 24 : mieux)
print(rendu_glouton(52, [30, 24, 12, 6, 3, 1]))          # [30, 12, 6, 3, 1]  (24 + 24 + 3 + 1 : mieux)
print(rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2]))   # [10] : il reste 1, impasse` },
        ],
        prof: "<p>Cœur de la séance A (35 min). Commencer débranché : chacun rend 5,48 € avec de vraies pièces (ou des jetons) et explique sa méthode ; tout le monde fait du glouton sans le savoir. Puis on code. Le contre-exemple britannique est le moment fort : le faire trouver en <strong>réponse en direct</strong> (📡, question numérique « combien de pièces pour 48 ? ») avant d'exécuter, pour que la surprise soit collective. Terminer par la phrase à noter : « le glouton est optimal pour les euros, pas pour tout système de pièces ». Exercice 8 du thème pour l'entraînement.</p>",
      },
      {
        num: "3", titre: "Le sac à dos : quel critère glouton ?", run: true,
        code: `# ÉTAPE 3 — Remplir un sac de masse maximale sans dépasser, en emportant le plus de valeur possible
valeur_masse_objets = [(5, 13), (4, 8), (3, 10), (7, 12)]   # (valeur en €, masse en kg)

def masse(liste_objet):
    total = 0
    for v, m in liste_objet:
        total = total + m
    return total

def valeur(liste_objet):
    total = 0
    # À COMPLÉTER : additionner les valeurs
    return total

print("masse totale :", masse(valeur_masse_objets), "kg ; valeur totale :", valeur(valeur_masse_objets), "€")   # 43 kg, 19 €

# Critère 1 : on prend les objets du plus cher au moins cher, tant qu'ils rentrent
def sac_a_dos_1(masse_max, liste_objet):
    tries = sorted(liste_objet, key=lambda obj: obj[0], reverse=True)   # par valeur décroissante
    sac = []
    for obj in tries:
        if masse(sac) + obj[1] <= masse_max:   # il rentre encore ?
            sac.append(obj)
    return sac

for masse_max in (15, 21, 30):
    sac = sac_a_dos_1(masse_max, valeur_masse_objets)
    print("critère valeur, sac de", masse_max, "kg :", sac, "->", valeur(sac), "€ pour", masse(sac), "kg")

# Critère 2 : le meilleur rapport valeur / masse d'abord
def sac_a_dos_2(masse_max, liste_objet):
    tries = liste_objet   # À COMPLÉTER : trier par obj[0] / obj[1] décroissant
    sac = []
    # À COMPLÉTER : même boucle que sac_a_dos_1
    return sac

sac = sac_a_dos_2(30, valeur_masse_objets)
print("critère valeur/masse, sac de 30 kg :", sac, "->", valeur(sac), "€ pour", masse(sac), "kg")

# Décommente pour comparer les deux critères sur une vraie liste :
# valeur_masse = [(35, 120), (30, 30), (26, 50), (21, 20), (18, 40), (17, 60), (15, 30),
#                 (14, 10), (13, 14), (11, 36), (10, 72), (9, 86), (8, 5), (7, 3), (6, 7),
#                 (5, 23), (4, 49), (3, 57), (2, 69), (1, 12)]
# for max_sac in (205, 420):
#     s1 = sac_a_dos_1(max_sac, valeur_masse)
#     s2 = sac_a_dos_2(max_sac, valeur_masse)
#     print(max_sac, "kg : valeur ->", valeur(s1), "€", masse(s1), "kg ; valeur/masse ->", valeur(s2), "€", masse(s2), "kg")`,
        note: "Un tuple (valeur, masse) : obj[0] est la valeur, obj[1] la masse. sorted(..., key=lambda obj: ..., reverse=True) trie du plus grand au plus petit selon le critère donné par la lambda.",
        questions: [
          "Avec le critère 1 (valeur) et un sac de 30 kg, quel sac obtient-on ? Trouve à la main un sac qui vaut plus.",
          "Avec le critère 2 (valeur / masse) et un sac de 30 kg, quel sac obtient-on ? Est-il optimal ?",
          "Sur la grande liste : pour 205 kg, quel critère gagne ? Et pour 420 kg ? Que conclure ?",
          "Dans la boucle for, on n'utilise pas break quand un objet ne rentre pas. Pourquoi ?",
        ],
        correction: [
          "Critère 1, 30 kg : [(7, 12), (5, 13)] soit 12 € pour 25 kg. Il reste 5 kg inutilisés. Or (7, 12) + (4, 8) + (3, 10) pèse exactement 30 kg et vaut 14 € : le glouton « le plus cher d'abord » n'est pas optimal.",
          "Critère 2 : les rapports sont 7/12 ≈ 0,58 ; 4/8 = 0,5 ; 5/13 ≈ 0,38 ; 3/10 = 0,3. Le glouton prend (7, 12) puis (4, 8) puis saute (5, 13) (33 kg > 30) puis prend (3, 10) : [(7, 12), (4, 8), (3, 10)], 14 € pour 30 kg. Ici c'est l'optimum, mais c'est un coup de chance : aucun critère glouton n'est optimal dans tous les cas pour le sac à dos.",
          "205 kg : critère valeur → 99 € (205 kg) ; critère valeur/masse → 151 € (205 kg) : le rapport gagne largement. 420 kg : critère valeur → 215 € (418 kg) ; critère valeur/masse → 210 € (400 kg) : cette fois c'est le critère valeur qui gagne ! Conclusion : le meilleur critère dépend des données, aucun glouton ne garantit l'optimum pour le sac à dos. Seule une recherche exhaustive (essayer tous les sous-ensembles, 2**20 ≈ 1 million ici) le garantit.",
          "Parce qu'un objet trop lourd ne veut pas dire que les suivants le sont : après avoir sauté (5, 13), on peut encore prendre (3, 10). On continue à parcourir la liste et on saute simplement ceux qui ne rentrent pas.",
          { code: `def valeur(liste_objet):
    total = 0
    for v, m in liste_objet:
        total = total + v
    return total

def sac_a_dos_2(masse_max, liste_objet):
    tries = sorted(liste_objet, key=lambda obj: obj[0] / obj[1], reverse=True)
    sac = []
    for obj in tries:
        if masse(sac) + obj[1] <= masse_max:
            sac.append(obj)
    return sac

assert sac_a_dos_1(30, valeur_masse_objets) == [(7, 12), (5, 13)]            # 12 € : pas optimal
assert sac_a_dos_2(30, valeur_masse_objets) == [(7, 12), (4, 8), (3, 10)]    # 14 € : optimal ici
# Grande liste : 205 kg -> 99 € (valeur) contre 151 € (valeur/masse)
#                420 kg -> 215 € (valeur) contre 210 € (valeur/masse)` },
        ],
        prof: "<p>40 min. Commencer par 5 min de sac à dos « à la main » avec les 4 objets et 30 kg : les élèves trouvent 14 € et sont vexés que le programme « le plus cher d'abord » n'y arrive pas. Le résultat sur la grande liste (le critère valeur gagne à 420 kg) contredit l'intuition « le rapport est toujours meilleur » : c'est voulu, c'est l'argument pour dire qu'<em>aucun</em> glouton n'est optimal ici. Notion à évoquer sans développer : le sac à dos est un problème difficile (NP-complet), les gloutons donnent de bonnes solutions rapidement, pas la meilleure. Si le temps manque, donner <code>sac_a_dos_2</code> et ne faire coder que <code>valeur</code>.</p>",
      },
      {
        num: "4", titre: "Planning de conférences : quelle règle gloutonne ?", run: true,
        code: `# ÉTAPE 4 — Une seule salle, des conférences (début, fin, nom) : en accueillir le plus possible
# Deux conférences sont compatibles si l'une finit avant (ou pile quand) l'autre commence.
tab_conf_1 = [(3, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (1, 2, 'C4')]
tab_conf_2 = [(2, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (0, 2, 'C4')]
tab_conf_3 = [(0, 3, 'C1'), (1, 2, 'C2'), (2, 3, 'C3')]
tab_conf_4 = [(0, 7, 'C1'), (2, 5, 'C2'), (6, 8, 'C3'), (1, 2, 'C4'), (5, 6, 'C5'),
              (0, 2, 'C6'), (4, 7, 'C7'), (0, 1, 'C8'), (3, 6, 'C9'), (1, 3, 'C10'),
              (4, 5, 'C11'), (6, 8, 'C12'), (0, 2, 'C13'), (5, 7, 'C14'), (1, 4, 'C15')]
# Cas 5 (ajouté) : un cas de plus pour tester la règle « la plus courte d'abord »
tab_conf_5 = [(0, 3, 'C1'), (2, 4, 'C2'), (3, 6, 'C3'), (6, 8, 'C4')]

def frise(tab_inter):
    """Affiche chaque conférence sur une ligne, une colonne par heure."""
    for debut, fin, nom in sorted(tab_inter):
        print(nom.ljust(4), "." * debut + "#" * (fin - debut) + "." * (8 - fin))
    print("     01234567")

print("cas 2 :"); frise(tab_conf_2)
print("cas 3 :"); frise(tab_conf_3)
print("cas 5 :"); frise(tab_conf_5)

# Règle gloutonne : on prend toujours la conférence compatible qui FINIT le plus tôt
def planning1(tab_inter):
    tries = sorted(tab_inter, key=lambda c: c[1])   # par heure de fin croissante
    planning = []
    fin_precedente = 0
    for debut, fin, nom in tries:
        pass   # À COMPLÉTER : si debut >= fin_precedente, on garde nom et on met à jour fin_precedente
    return planning

for k, tab in enumerate([tab_conf_1, tab_conf_2, tab_conf_3, tab_conf_4, tab_conf_5], start=1):
    print("cas", k, ":", planning1(tab))
# attendus : ['C2', 'C4', 'C3', 'C1']  ['C2', 'C3']  ['C2', 'C3']  ['C8', 'C4', 'C2', 'C5', 'C3']  ['C1', 'C3', 'C4']`,
        note: "Les cas 1 à 4 sont ceux du notebook Capytale (les frises des cas 2 et 3 y sont des images : ici elles sont traduites en tuples). Trois règles gloutonnes sont possibles : la conférence qui commence le plus tôt, la plus courte, ou celle qui finit le plus tôt. Avant de coder, teste-les à la main sur les frises des cas 3 et 5 : une seule est toujours optimale.",
        questions: [
          "Cas 3 : quel planning donne la règle « celle qui COMMENCE le plus tôt » ? Est-il optimal ?",
          "Cas 5 : quel planning donne la règle « la plus COURTE d'abord » ? Est-il optimal ?",
          "La règle « celle qui FINIT le plus tôt » donne-t-elle un planning optimal dans les cas 1, 2, 3 et 5 ? Pourquoi est-elle la bonne intuition ?",
          "Pourquoi teste-t-on debut >= fin_precedente et non debut > fin_precedente ?",
        ],
        correction: [
          "Cas 3 : C1 (0→3) commence la première ; une fois prise, plus rien n'est compatible : planning ['C1'], 1 seule conférence. Or C2 (1→2) et C3 (2→3) sont compatibles entre elles : 2 conférences. La règle « commence le plus tôt » n'est pas optimale : une conférence qui commence tôt et dure longtemps bloque tout (même chose dans le cas 4 avec C1, 0→7).",
          "Cas 5 : les plus courtes sont C2 (2→4) et C4 (6→8), 2 h chacune ; C1 (0→3) et C3 (3→6) durent 3 h. Le glouton prend C2, puis C4 : 2 conférences. Or C1, C3 et C4 sont compatibles : 3 conférences. « La plus courte d'abord » n'est pas optimale : C2, courte mais mal placée, chevauche à la fois C1 et C3.",
          "Oui : cas 1 → ['C2', 'C4', 'C3', 'C1'] (4 sur 4), cas 2 → ['C2', 'C3'] (2, on ne peut pas faire mieux : C2 et C4 se chevauchent (0→1 et 0→2), C1 et C3 aussi (2→4 et 2→3), on ne garde qu'une conférence de chaque paire ; il y a d'ailleurs quatre plannings à 2 conférences, dont ['C4', 'C1'] qu'on retrouve à l'étape 5), cas 3 → ['C2', 'C3'] (2), cas 5 → ['C1', 'C3', 'C4'] (3). Prendre celle qui finit le plus tôt libère la salle au plus vite : ce qui reste de temps pour les suivantes est maximal. On peut prouver que cette règle est TOUJOURS optimale pour ce problème (c'est un des rares cas où le glouton est parfait).",
          "Une conférence qui commence exactement à l'heure où la précédente finit est compatible (la salle se libère à 2 h, la suivante commence à 2 h). Avec >, dans le cas 1 on refuserait déjà C2 (0 > 0 est faux, fin_precedente vaut 0 au départ), puis C3 (2 > 2 est faux) : le planning serait ['C4', 'C1'], 2 conférences au lieu de 4.",
          { code: `def planning1(tab_inter):
    """Glouton : la conférence compatible qui finit le plus tôt."""
    tries = sorted(tab_inter, key=lambda c: c[1])
    planning = []
    fin_precedente = 0
    for debut, fin, nom in tries:
        if debut >= fin_precedente:
            planning.append(nom)
            fin_precedente = fin
    return planning

assert planning1(tab_conf_1) == ['C2', 'C4', 'C3', 'C1']
assert planning1(tab_conf_2) == ['C2', 'C3']
assert planning1(tab_conf_3) == ['C2', 'C3']
assert planning1(tab_conf_4) == ['C8', 'C4', 'C2', 'C5', 'C3']
assert planning1(tab_conf_5) == ['C1', 'C3', 'C4']` },
        ],
        prof: "<p>45 min, début de la séance B. Projeter les frises des cas 3 et 5 (ou les images du notebook) et faire jouer les trois règles au tableau par trois élèves (feutres de couleurs) : c'est le débranché de la séance. La conclusion attendue est que « finit le plus tôt » est la seule règle sûre ; on affirme qu'elle est toujours optimale sans démontrer (l'argument « libérer la salle le plus tôt possible laisse le maximum de place » suffit en Première). Erreur classique : oublier de mettre à jour <code>fin_precedente</code>, ce qui garde toutes les conférences ; l'assert du cas 1 la détecte. Pour le cas 4, faire remarquer que le planning contient 5 conférences : on vérifiera à l'étape 5 qu'on ne peut pas faire mieux.</p>",
      },
      {
        num: "5", titre: "Vérifier l'optimum : la recherche exhaustive", run: true,
        code: `# ÉTAPE 5 — Essayer TOUTES les possibilités pour être sûr de l'optimum
tab_conf_1 = [(3, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (1, 2, 'C4')]
tab_conf_2 = [(2, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (0, 2, 'C4')]
tab_conf_3 = [(0, 3, 'C1'), (1, 2, 'C2'), (2, 3, 'C3')]
tab_conf_4 = [(0, 7, 'C1'), (2, 5, 'C2'), (6, 8, 'C3'), (1, 2, 'C4'), (5, 6, 'C5'),
              (0, 2, 'C6'), (4, 7, 'C7'), (0, 1, 'C8'), (3, 6, 'C9'), (1, 3, 'C10'),
              (4, 5, 'C11'), (6, 8, 'C12'), (0, 2, 'C13'), (5, 7, 'C14'), (1, 4, 'C15')]
tab_conf_5 = [(0, 3, 'C1'), (2, 4, 'C2'), (3, 6, 'C3'), (6, 8, 'C4')]   # (ajouté) contre-exemple de la règle « la plus courte »

appels = 0

def planning2(tab_inter, debut=0, i=0):
    """Meilleur planning avec les conférences d'indice >= i qui commencent après debut.
    tab_inter doit être trié par heure de début. Pour chaque conférence : AVEC ou SANS."""
    global appels
    appels = appels + 1
    if i >= len(tab_inter):            # plus de conférence à examiner
        return []
    d, f, nom = tab_inter[i]
    if d < debut:                      # incompatible : on passe à la suivante
        return planning2(tab_inter, debut, i + 1)
    avec = [nom] + planning2(tab_inter, f, i + 1)     # on la prend : la salle est occupée jusqu'à f
    sans = planning2(tab_inter, debut, i + 1)         # on ne la prend pas
    if len(avec) >= len(sans):
        return avec
    return sans

for k, tab in enumerate([tab_conf_1, tab_conf_2, tab_conf_3, tab_conf_4, tab_conf_5], start=1):
    appels = 0
    print("cas", k, ":", planning2(sorted(tab)), "en", appels, "appels")

# À toi : à nombre égal de conférences, préférer le planning qui occupe le plus la salle (moins de trous)
def duree_occupee(noms, tab_inter):
    total = 0
    # À COMPLÉTER : additionner fin - debut pour les conférences dont le nom est dans noms
    return total

def planning3(tab_inter, debut=0, i=0):
    if i >= len(tab_inter):
        return []
    d, f, nom = tab_inter[i]
    if d < debut:
        return planning3(tab_inter, debut, i + 1)
    avec = [nom] + planning3(tab_inter, f, i + 1)
    sans = planning3(tab_inter, debut, i + 1)
    # À COMPLÉTER : plus long gagne ; à égalité, celui qui a la plus grande duree_occupee
    return avec

print("cas 2, sans trou :", planning3(sorted(tab_conf_2)))   # attendu : ['C4', 'C1'] (4 h occupées, au lieu de C2 puis C3)
print("cas 4, sans trou :", planning3(sorted(tab_conf_4)))`,
        note: "planning2 est récursif : pour chaque conférence, il calcule le meilleur planning AVEC elle et le meilleur SANS elle, puis garde le plus long. Il explore donc toutes les combinaisons possibles : c'est une recherche exhaustive (« force brute »).",
        questions: [
          "Compare les résultats de planning2 à ceux de planning1 (étape 4) sur les cas 1 à 5. Le glouton « finit le plus tôt » était-il optimal à chaque fois ?",
          "Combien d'appels planning2 fait-il pour le cas 4 (15 conférences) ? Que se passerait-il avec 30 ou 60 conférences ? Et pourquoi planning1 n'a pas ce problème ?",
          "Cas 2 : le glouton donne ['C2', 'C3'] et planning3 donne ['C4', 'C1']. Les deux ont 2 conférences ; lequel est « meilleur » et selon quel critère ?",
          "Peut-on avoir plusieurs plannings optimaux ? Que fait le programme dans ce cas ?",
        ],
        correction: [
          "Cas 1, 2, 3 et 5 : mêmes plannings (4, 2, 2 et 3 conférences). Cas 4 : planning2 donne ['C8', 'C4', 'C2', 'C5', 'C12'], soit 5 conférences comme le glouton (['C8', 'C4', 'C2', 'C5', 'C3']) : seule la dernière diffère, C3 et C12 occupant le même créneau 6→8. Le glouton « finit le plus tôt » était bien optimal dans les 5 cas, ce qui confirme (sans le prouver) qu'il l'est toujours.",
          "Quelques centaines d'appels pour 15 conférences ; mais chaque conférence double au pire le nombre de chemins (avec / sans) : c'est en 2**n. À 30 conférences on approche du milliard, à 60 c'est hors de portée de tout ordinateur. planning1, lui, fait un tri puis un seul parcours : quelques dizaines d'opérations pour 15 conférences, quelques centaines pour 60. C'est tout l'intérêt d'un glouton quand il est optimal : rapide ET juste.",
          "Cas 2 : C2 = 0→1, C4 = 0→2, C3 = 2→3, C1 = 2→4. Les deux plannings sont optimaux en nombre de conférences (2). ['C4', 'C1'] occupe la salle de 0 à 4 sans trou (4 h) ; ['C2', 'C3'] laisse la salle vide de 1 à 2 et après 3 (2 h occupées). Avec le critère supplémentaire « le moins de trous », planning3 préfère ['C4', 'C1']. Le « meilleur » dépend toujours du critère qu'on choisit !",
          "Oui, souvent : dans le cas 4, ['C8', 'C4', 'C2', 'C5', 'C3'] et ['C8', 'C4', 'C2', 'C5', 'C12'] sont deux optimums (5 conférences, 8 h occupées). Le programme renvoie le premier qu'il rencontre selon son ordre d'exploration (ici « avec » gagne à égalité, d'où C12 plutôt que C3 dans planning2). Un résultat différent du corrigé peut donc être juste : il faut vérifier le nombre de conférences et la compatibilité, pas les noms.",
          { code: `def duree_occupee(noms, tab_inter):
    total = 0
    for d, f, nom in tab_inter:
        if nom in noms:
            total = total + (f - d)
    return total

def planning3(tab_inter, debut=0, i=0):
    if i >= len(tab_inter):
        return []
    d, f, nom = tab_inter[i]
    if d < debut:
        return planning3(tab_inter, debut, i + 1)
    avec = [nom] + planning3(tab_inter, f, i + 1)
    sans = planning3(tab_inter, debut, i + 1)
    if len(avec) > len(sans):
        return avec
    if len(avec) < len(sans):
        return sans
    if duree_occupee(avec, tab_inter) >= duree_occupee(sans, tab_inter):
        return avec
    return sans

assert planning3(sorted(tab_conf_2)) == ['C4', 'C1']                      # 4 h occupées sur 4
assert planning3(sorted(tab_conf_4)) == ['C8', 'C4', 'C2', 'C5', 'C12']   # 8 h occupées sur 8` },
        ],
        prof: "<p>30 min, en lecture de code guidée : la récursivité n'est pas au programme de Première, on ne demande pas de l'écrire mais de la comprendre comme « pour chaque conférence, on essaie avec et sans ». Dérouler à la main le cas 2 (4 conférences, 16 combinaisons au plus) au tableau sous forme d'arbre. Les élèves avancés complètent <code>planning3</code> ; les autres se contentent de <code>duree_occupee</code>. Le compteur d'appels sert à faire sentir l'explosion combinatoire (question 2) : le point à retenir est la <em>complexité</em>, glouton linéaire (après tri) contre exhaustif exponentiel. Attention à la question 4 : plusieurs optimums existent, ne pas compter faux un élève qui obtient ['C8', 'C4', 'C2', 'C5', 'C3'] avec sa propre version.</p>",
      },
      {
        num: "6", titre: "Bonus — Fibonacci : quand la récursivité explose, et comment la sauver", run: true, bonus: true,
        code: `# ÉTAPE 6 (bonus) — F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
appels = 0

def fiboR(n):
    global appels
    appels = appels + 1
    if n < 2:
        return n
    return fiboR(n - 1) + fiboR(n - 2)

for n in (6, 10, 20, 25):
    appels = 0
    r = fiboR(n)
    print("fiboR(", n, ") =", r, "en", appels, "appels")

# Programmation dynamique : on mémorise chaque résultat déjà calculé dans un dictionnaire
dicFibo = {0: 0, 1: 1}

def fiboD(n):
    if n in dicFibo:
        return dicFibo[n]
    # À COMPLÉTER : calculer fiboD(n - 1) + fiboD(n - 2), le ranger dans dicFibo[n], le renvoyer
    return 0

print("fiboD(25) =", fiboD(25))          # attendu : 75025
print("fiboD(60) =", fiboD(60))          # attendu : 1548008755920 (essaie fiboR(60)... non, ne le fais pas !)
print(len(dicFibo), "valeurs mémorisées")`,
        note: "Bonus au-delà de la Première (récursivité, programmation dynamique : programme de Terminale). Le compteur d'appels remplace l'arbre d'appels du notebook : chaque appel de fiboR(n) en déclenche deux autres, l'arbre double à chaque niveau.",
        questions: [
          "Combien d'appels pour fiboR(6) ? pour fiboR(25) ? Pourquoi fiboR(20) est-il calculé plusieurs milliers de fois quand on demande fiboR(25) ?",
          "Combien d'appels fait fiboD(60) environ ? Pourquoi si peu ?",
          "En quoi la recherche exhaustive de l'étape 5 ressemble-t-elle à fiboR ? Quelle idée de fiboD pourrait la sauver ?",
        ],
        correction: [
          "fiboR(6) : 25 appels ; fiboR(10) : 177 ; fiboR(20) : 21 891 ; fiboR(25) : 242 785. Chaque appel refait tout le travail des appels précédents : fiboR(25) appelle fiboR(24) et fiboR(23), qui appellent chacun fiboR(22)… le même sous-problème est recalculé un nombre exponentiel de fois.",
          "fiboD(60) remplit le dictionnaire de 61 valeurs (0 à 60) : chaque F(k) n'est calculé qu'une fois puis relu. Une centaine d'appels au total au lieu de 10**12 pour fiboR(60). C'est la programmation dynamique : mémoriser pour ne jamais recalculer.",
          "planning2 aussi recalcule les mêmes sous-problèmes (« meilleur planning à partir de l'indice i après l'heure debut ») dans plusieurs branches avec / sans. Un dictionnaire indexé par (debut, i) éviterait ces recalculs et rendrait la recherche exhaustive raisonnable même pour beaucoup de conférences.",
          { code: `dicFibo = {0: 0, 1: 1}

def fiboD(n):
    if n in dicFibo:
        return dicFibo[n]
    dicFibo[n] = fiboD(n - 1) + fiboD(n - 2)
    return dicFibo[n]

assert fiboD(25) == 75025
assert fiboD(60) == 1548008755920
print(len(dicFibo), "valeurs mémorisées")   # 61` },
        ],
        prof: "<p>Réservé aux élèves qui ont terminé, ou à donner en ouverture des 10 dernières minutes. Ne pas lancer <code>fiboR(35)</code> et au-delà dans le navigateur (plusieurs secondes, la page semble figée). L'intérêt pédagogique est de boucler le TP : glouton (rapide, parfois faux), exhaustif (juste, exponentiel), programmation dynamique (juste et rapide, en mémorisant). C'est exactement le trio qui structure le thème « Algorithmique » de Terminale.</p>",
      },
    ],
  },
  {
    id: "tp-preuve",
    theme: "algorithmique",
    lang: "python",
    titre: "TP — Prouver un programme : assertions, invariant, variant",
    intro:
      "Objectif : passer du « ça marche sur mes exemples » au « c'est juste dans tous les cas ». Tu vas écrire des préconditions, des postconditions, un invariant et un variant avec assert, puis raisonner pour les prouver : triplet {Pré} instruction {Post}, substitution, récurrence sur les tours de boucle, correction totale. D'après le cours « Correction des algorithmes » du DIU du Havre (B. Mermet) et ses exemples : la fonction f, le maximum, l'horloge, le tri à bulles. Le squelette preuve.py et son corrigé sont dans le kit du thème.",
    prof:
      "<p><strong>Place dans la progression.</strong> Séance 5 du thème (coût, terminaison, correction), après les tris et la dichotomie, en prolongement des sections 9 et 15 à 17. D'après le cours « Correction des algorithmes » du DIU du Havre (B. Mermet) : introduction à la validation (1 h) et preuve de programme (3 h 30), dont on garde ce qui est au programme de Première : tester / prouver, triplet {Pré} instruction {Post}, invariant de boucle, variant, correction totale. Les exemples du DIU (fonction f, maximum, horloge, tri à bulles) sont repris ; l'horloge, qui est une classe dans le cours, devient une fonction qui renvoie un couple.</p><ul><li><strong>Objectifs (BO « Algorithmique »).</strong> Justifier la terminaison d'une boucle (variant) ; décrire un invariant de boucle qui prouve la correction ; distinguer test et preuve ; écrire précondition, postcondition et invariant avec <code>assert</code> (thème Langages : spécifier, tester).</li><li><strong>Déroulé conseillé.</strong> Étapes 1 et 2 (20 min) en fin de séance 5 pour les élèves rapides, ou en ouverture d'une séance de consolidation ; étapes 3 et 4 (30 min) après le débranché « défendre son invariant » ; étape 5 (20 min) en autonomie ; étape 6 en bonus ou à la maison (squelette preuve.py sur Thonny ou Capytale, corrigé preuve_corrige.py dans le kit).</li><li><strong>Le fil conducteur.</strong> À chaque étape, la même question : « qu'est-ce qui garantit la propriété, l'exécution ou le raisonnement ? ». Les <code>assert</code> vérifient, le raisonnement prouve. Faire écrire les preuves de l'étape 3 (initialisation, conservation, sortie) en trois phrases dans le cahier : c'est le modèle de rédaction type bac.</li><li><strong>Différenciation.</strong> Étapes 1, 2 et 3 pour tous ; 4 et 5 pour la majorité ; 6 pour les rapides. Pour les élèves fragiles, l'étape 3 se fait en lecture : exécuter, lire l'invariant, le reformuler avec ses mots.</li><li><strong>Erreurs fréquentes.</strong> Croire qu'un assert prouve ; confondre variant et invariant ; oublier l'étape de sortie de la preuve ; proposer un « invariant » vrai mais inutile (« maxi est dans la liste ») ; proposer comme variant une quantité qui ne décroît pas à TOUS les tours (tri à bulles sans le + 1) ; pour l'horloge, corriger les minutes en oubliant minuit.</li><li><strong>Évaluation.</strong> Réponse en direct (📡) : « quel variant pour while n > 1: n = n // 2 ? » et « {x = n} x = 2 * x {?} ». Écrit : rédiger en trois phrases la preuve de l'invariant du maximum, donner le variant d'une boucle while simple. Le tri à bulles n'est pas exigible.</li></ul>",
    steps: [
      {
        num: "1", titre: "Le triplet {Pré} instruction {Post} : une affectation est une substitution", run: true,
        code: `# ÉTAPE 1 — Prouver f(x) instruction par instruction
def f(x):
    """Précondition : x >= 0.  Postcondition : le résultat est >= 1."""
    assert x >= 0, "précondition : x doit être positif ou nul"
    x = x + 1
    assert x >= 1          # PROP 1 : x >= 0 avant, donc x + 1 >= 1
    x = 2 * x
    assert x >= 2          # PROP 2 : x >= 1 avant, donc 2 * x >= 2
    x = x - 1
    assert x >= 1          # POST   : x >= 2 avant, donc x - 1 >= 1
    return x

for valeur in (0, 1, 5, 100):
    print("f(", valeur, ") =", f(valeur))

# À toi : que se passe-t-il avec f(-1) ? Décommente, lis l'erreur, puis remets le commentaire.
# print(f(-1))

# À toi : la fonction g ci-dessous a pour précondition x >= 3. Complète ses assert
# pour prouver que le résultat est >= 0.
def g(x):
    assert x >= 3
    x = x - 3
    # assert x >= ...
    x = x * x
    # assert x >= ...
    return x

print(g(3), g(10))     # 0 49`,
        note: "Pour prouver {P} x = e {Q}, on remplace x par e dans Q et on vérifie que P l'implique. Un assert ne prouve rien : il vérifie la propriété pour l'exécution en cours, et arrête le programme si elle est fausse.",
        questions: [
          "Recopie le tableau « propriété vraie après chaque instruction » de f et justifie chaque ligne par une implication.",
          "Que se passe-t-il avec f(-1) ? La postcondition est-elle fausse pour autant ?",
          "Complète les deux assert de g et prouve que g renvoie un résultat >= 0 quand x >= 3.",
          "Pourquoi dit-on qu'une affectation est une substitution ?",
        ],
        correction: [
          "x ≥ 0 (précondition) ; après x = x + 1 : x ≥ 1 car x ≥ 0 ⟹ x + 1 ≥ 1 ; après x = 2 * x : x ≥ 2 car x ≥ 1 ⟹ 2x ≥ 2 ; après x = x - 1 : x ≥ 1 car x ≥ 2 ⟹ x − 1 ≥ 1, c'est la postcondition.",
          "L'assert de la précondition échoue (AssertionError : « précondition : x doit être positif ou nul »). La postcondition n'est pas fausse : elle n'est garantie QUE si la précondition est respectée. C'est l'appelant qui a violé le contrat, pas la fonction.",
          "Après x = x - 3 : x ≥ 0 (car x ≥ 3). Après x = x * x : x ≥ 0 (le carré d'un nombre ≥ 0 est ≥ 0 ; d'ailleurs un carré est toujours ≥ 0). Donc g renvoie bien un résultat ≥ 0.",
          "Parce que pour savoir ce qui est vrai après x = e, il suffit de remplacer x par e dans la propriété voulue : la propriété « x ≥ 1 après x = x + 1 » est exactement « x + 1 ≥ 1 avant ».",
          { code: `def g(x):
    assert x >= 3
    x = x - 3
    assert x >= 0          # x >= 3 avant, donc x - 3 >= 0
    x = x * x
    assert x >= 0          # un carré est toujours >= 0
    return x

print(g(3), g(10))         # 0 49` },
        ],
        prof: "<p>10 min. Faire écrire les implications au tableau avant d'exécuter ; la cellule confirme seulement. Question 2 : c'est l'occasion de redire le contrat (thème Langages, section 7) : la postcondition n'engage la fonction que si l'appelant respecte la précondition. Pour g, certains élèves proposent x ≥ 9 après le carré : c'est vrai aussi (plus précis), accepter.</p>",
      },
      {
        num: "2", titre: "Valider : tester, prototyper… et tester tout", run: true,
        code: `# ÉTAPE 2 — Trois façons de valider maximum_v1
def maximum_v1(liste):
    """Renvoie le plus grand élément de liste (non vide)."""
    maxi = 0
    for x in liste:
        if x > maxi:
            maxi = x
    return maxi

# 1) TEST à la main : trois exemples
assert maximum_v1([3, 1, 4, 1, 5]) == 5
assert maximum_v1([7]) == 7
assert maximum_v1([2, 9, 9]) == 9
print("tests à la main : OK")

# 2) PROTOTYPE : une version sûre qui sert d'oracle (ici le max de Python)
prototype = max

# 3) TEST EXHAUSTIF sur un petit domaine : toutes les listes de 1 à 3 valeurs
valeurs = [0, 1, 2]           # À toi : que faut-il mettre dans ce domaine pour trouver le bug ?
cas = []
for a in valeurs:
    cas.append([a])
    for b in valeurs:
        cas.append([a, b])
        for c in valeurs:
            cas.append([a, b, c])
echecs = [l for l in cas if maximum_v1(l) != prototype(l)]
print(len(cas), "listes testées,", len(echecs), "en échec :", echecs[:4])`,
        note: "Un test qui échoue est une certitude. Des tests qui passent ne garantissent que les valeurs essayées : pour garantir TOUS les cas, il faut soit les essayer tous (possible seulement sur un domaine fini et petit : le test exhaustif, ou model checking), soit prouver.",
        questions: [
          "Les trois tests à la main passent. maximum_v1 est-elle juste ? Trouve une liste pour laquelle elle se trompe, sans exécuter.",
          "Modifie le domaine valeurs pour que le test exhaustif détecte le bug. Combien de listes sont testées ? Combien échouent ?",
          "Pourquoi max de Python peut-il servir de prototype ici ? Pourquoi n'écrit-on pas simplement maximum_v1 = max dans un TP ?",
          "Peut-on tester exhaustivement maximum_v1 sur TOUTES les listes d'entiers ? Que reste-t-il comme méthode ?",
        ],
        correction: [
          "Non. maxi part de 0 : pour une liste dont tous les éléments sont négatifs, par exemple [-3, -8, -1], elle renvoie 0, qui n'est même pas dans la liste. Le plus grand élément est -1.",
          "Avec valeurs = [-1, 0, 1] : 3 + 9 + 27 = 39 listes testées ; échouent toutes celles dont les éléments sont tous négatifs : [-1], [-1, -1], [-1, -1, -1], soit 3 listes. Avec [0, 1, 2], aucune liste ne contient de négatif : 0 en échec, le bug est invisible.",
          "max est une fonction de la bibliothèque standard, testée par des millions d'utilisateurs : on peut lui faire confiance comme oracle. Mais le but du TP est d'écrire et de prouver SA fonction : le prototype sert à comparer, pas à remplacer.",
          "Non : il y a une infinité de listes d'entiers. Le test exhaustif ne marche que sur un domaine fini et petit. Pour tous les cas, il reste la preuve : c'est l'étape 3.",
          { code: `def maximum_v2(liste):
    maxi = liste[0]           # on part du premier élément, pas de 0
    for x in liste:
        if x > maxi:
            maxi = x
    return maxi

valeurs = [-1, 0, 1]
cas = []
for a in valeurs:
    cas.append([a])
    for b in valeurs:
        cas.append([a, b])
        for c in valeurs:
            cas.append([a, b, c])
print("v1 :", len([l for l in cas if maximum_v1(l) != max(l)]), "échecs sur", len(cas))   # 3
print("v2 :", len([l for l in cas if maximum_v2(l) != max(l)]), "échecs sur", len(cas))   # 0` },
        ],
        prof: "<p>10 min, section 15 en actes. Faire parier sur le bug avant d'exécuter : « maxi = 0 » paraît innocent à la plupart. Le point important est la question 2 : le test exhaustif ne vaut que ce que vaut le domaine choisi. Vocabulaire du DIU à placer : test, prototype (preuve de concept), preuve, model checking (test exhaustif, hors programme).</p>",
      },
      {
        num: "3", titre: "L'invariant de boucle : prouver le maximum par récurrence", run: true,
        code: `# ÉTAPE 3 — L'invariant du maximum, écrit avec assert puis prouvé
def maximum(liste):
    """Précondition : liste non vide.  Postcondition : renvoie son plus grand élément."""
    assert len(liste) > 0, "précondition : liste non vide"
    maxi = liste[0]
    for i in range(len(liste)):
        if liste[i] > maxi:
            maxi = liste[i]
        # Invariant : après le tour i, maxi est le plus grand élément de liste[0..i]
        assert maxi == max(liste[:i + 1])      # max() de Python sert d'oracle, pas de preuve
        print("tour", i, ": maxi =", maxi, "  plus grand de", liste[:i + 1])
    assert maxi == max(liste)                  # postcondition
    return maxi

print(maximum([3, 1, 4, 1, 5, 9, 2, 6]))

# À toi : la fonction somme a pour postcondition « renvoie la somme des éléments ».
# Écris son invariant avec un assert (sum(liste[:i + 1]) peut servir d'oracle).
def somme(liste):
    total = 0
    for i in range(len(liste)):
        total = total + liste[i]
        # assert total == ...
    return total

print(somme([3, 1, 4, 1, 5]))     # 14`,
        note: "Prouver un invariant, c'est une récurrence sur les tours de boucle : initialisation (vrai avant le premier tour), conservation (vrai au tour i ⟹ vrai au tour i + 1), sortie (Pré ∧ condition d'arrêt ∧ invariant ⟹ Post).",
        questions: [
          "Rédige en trois phrases la preuve de l'invariant « maxi est le plus grand élément de liste[0..i] » : initialisation, conservation (deux cas), sortie.",
          "L'invariant « maxi est un élément de la liste » est vrai à chaque tour. Pourquoi ne suffit-il pas ?",
          "Écris l'invariant de somme et vérifie-le avec un assert.",
          "Que vérifie l'assert de l'invariant : la preuve, ou seulement cette exécution ?",
        ],
        correction: [
          "Initialisation : avant le premier tour, maxi = liste[0] est bien le plus grand de liste[0..0]. Conservation : supposons qu'après le tour i, maxi est le plus grand de liste[0..i]. Au tour i + 1, si liste[i+1] > maxi, maxi devient liste[i+1], plus grand que tout liste[0..i] et égal à liste[i+1] : c'est le plus grand de liste[0..i+1] ; sinon liste[i+1] ≤ maxi et maxi reste le plus grand. Sortie : après le dernier tour, i = len(liste) − 1, donc maxi est le plus grand de liste[0..len(liste)−1], toute la liste : c'est la postcondition.",
          "Parce qu'à la sortie il donne seulement « maxi est dans la liste », ce qui ne prouve pas que c'est le plus grand. Un invariant doit être assez fort pour que, combiné à la condition d'arrêt, il implique la postcondition.",
          "Invariant : après le tour i, total est la somme de liste[0..i] : assert total == sum(liste[:i + 1]). À la sortie, total est la somme de toute la liste.",
          "Seulement cette exécution : si l'assert échoue, l'invariant est faux (certitude) ; s'il passe sur dix listes, il n'est pas prouvé pour autant. La preuve est le raisonnement de la question 1.",
          { code: `def somme(liste):
    total = 0
    for i in range(len(liste)):
        total = total + liste[i]
        assert total == sum(liste[:i + 1])    # invariant : somme de liste[0..i]
    assert total == sum(liste)                # postcondition
    return total

print(somme([3, 1, 4, 1, 5]))     # 14` },
        ],
        prof: "<p>20 min, le cœur du TP. La question 1 est le modèle de rédaction type bac : exiger les trois mots initialisation / conservation / sortie et les DEUX cas de la conservation. La question 2 est celle qui fait comprendre ce qu'est un bon invariant. Pour somme, variante possible : faire écrire l'invariant AVANT la boucle (« total est la somme de liste[0..i−1] au début du tour i »), et comparer les deux formulations.</p>",
      },
      {
        num: "4", titre: "Terminaison : le variant, et la correction totale", run: true,
        code: `# ÉTAPE 4 — Le même maximum avec un while : prouver qu'il s'arrête
def maximum_while(liste):
    assert len(liste) > 0
    maxi = liste[0]
    i = 0
    while i < len(liste):
        variant = len(liste) - i               # À toi : pourquoi est-ce un entier naturel ?
        assert variant >= 1
        if liste[i] > maxi:
            maxi = liste[i]
        assert maxi == max(liste[:i + 1])      # invariant (correction partielle)
        i = i + 1
        assert len(liste) - i < variant        # le variant a strictement diminué (terminaison)
    assert maxi == max(liste)
    return maxi

print(maximum_while([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]))   # 9

# À toi : cette boucle se termine-t-elle toujours ? Propose un variant et vérifie-le.
def compte_a_rebours(n):
    tours = 0
    while n > 0:
        # variant = ...
        n = n - 3
        tours = tours + 1
        # assert ... < variant
    return tours

print(compte_a_rebours(10))      # 4`,
        note: "Correction partielle (invariant) : SI la boucle s'arrête, le résultat est juste. Terminaison (variant) : un entier naturel qui décroît strictement à chaque tour ne peut pas décroître indéfiniment. Les deux : correction totale.",
        questions: [
          "Pourquoi len(liste) − i est-il un entier naturel tant que la boucle tourne, et pourquoi décroît-il strictement à chaque tour ?",
          "Que prouve l'invariant de maximum_while ? Que prouve le variant ? Comment s'appelle l'ensemble des deux ?",
          "Donne un variant de compte_a_rebours et ajoute les assert. Attention : n peut devenir négatif. Ton variant reste-t-il un entier naturel ?",
          "Trouve une boucle while qui a un invariant juste mais pas de variant (qui ne se termine pas).",
        ],
        correction: [
          "Tant que la boucle tourne, i < len(liste), donc len(liste) − i ≥ 1 : un entier naturel non nul. À chaque tour, i augmente de 1, donc len(liste) − i diminue de 1 : décroissance stricte.",
          "L'invariant prouve la correction partielle : si la fonction s'arrête, maxi est le plus grand élément. Le variant prouve la terminaison : la boucle fait au plus len(liste) tours. Ensemble : la correction totale.",
          "Variant : n lui-même. Tant que la boucle tourne, n > 0 ; après n = n − 3, n a strictement diminué. Mais n peut finir négatif (10 → 7 → 4 → 1 → −2) : un variant doit rester dans ℕ tant que la boucle TOURNE, c'est le cas (on vérifie n ≥ 0 en entrée de tour, pas après le dernier tour). Variante plus propre : variant = max(n, 0).",
          "Par exemple while True: x = x, ou while n > 0: n = n + 1 (invariant « n > 0 » vrai à chaque tour, mais n croît : aucun entier naturel ne décroît, la boucle ne s'arrête jamais).",
          { code: `def compte_a_rebours(n):
    tours = 0
    while n > 0:
        variant = n                 # entier > 0 tant que la boucle tourne
        n = n - 3
        tours = tours + 1
        assert n < variant          # strictement décroissant
    return tours

print(compte_a_rebours(10))         # 4 (10, 7, 4, 1, puis -2 : on sort)` },
        ],
        prof: "<p>15 min. La question 3 soulève la subtilité « naturel tant que la boucle tourne » : le variant est évalué en ENTRÉE de tour, où la condition garantit n > 0 ; après le dernier tour il peut être négatif, ce n'est pas un problème. La question 4 (pas de variant) est une bonne question de réponse en direct.</p>",
      },
      {
        num: "5", titre: "L'horloge : un invariant qu'une fonction peut casser", run: true,
        code: `# ÉTAPE 5 — Une heure vérifie toujours 0 <= heures < 24 et 0 <= minutes < 60
def invariant_heure(heures, minutes):
    assert 0 <= heures < 24, "heures hors de [0, 23]"
    assert 0 <= minutes < 60, "minutes hors de [0, 59]"

def incrementer_naif(heures, minutes):
    """Version naïve : ajoute une minute."""
    invariant_heure(heures, minutes)
    minutes = minutes + 1
    invariant_heure(heures, minutes)
    return heures, minutes

print(incrementer_naif(10, 30))       # (10, 31)
# À toi : trouve SANS exécuter l'entrée qui casse l'invariant, puis vérifie :
# print(incrementer_naif(10, ...))

def incrementer(heures, minutes):
    """Ajoute une minute en conservant l'invariant (trois cas)."""
    invariant_heure(heures, minutes)
    heures_avant, minutes_avant = heures, minutes
    # À COMPLÉTER : si minutes < 59 ... ; sinon si heures < 23 ... ; sinon minuit
    # Postcondition (déjà écrite) : un assert par cas
    assert minutes_avant == 59 or (minutes == minutes_avant + 1 and heures == heures_avant)
    assert minutes_avant != 59 or heures_avant == 23 or (heures == heures_avant + 1 and minutes == 0)
    assert minutes_avant != 59 or heures_avant != 23 or (heures == 0 and minutes == 0)
    invariant_heure(heures, minutes)
    return heures, minutes

# Décommente quand c'est prêt : une journée entière, minute par minute
# h, m = 0, 0
# for _ in range(1440):
#     h, m = incrementer(h, m)
# print(h, m)                         # 0 0`,
        note: "La preuve se fait sans exécuter : {0 ≤ minutes < 60} minutes = minutes + 1 {0 ≤ minutes < 60} exige minutes + 1 < 60, donc minutes ≤ 58. La précondition ne le garantit pas : il manque des cas.",
        questions: [
          "Montre par substitution que incrementer_naif ne conserve pas l'invariant, puis donne l'entrée qui le casse.",
          "Complète incrementer avec trois cas et vérifie la journée de 1440 minutes.",
          "Lis la postcondition : que dit chacun des trois assert ? Pourquoi écrit-on « minutes_avant == 59 or … » plutôt que « si minutes_avant < 59 alors … » ?",
          "Pourquoi mémorise-t-on heures_avant et minutes_avant ?",
        ],
        correction: [
          "Pour que 0 ≤ minutes < 60 soit vrai après minutes = minutes + 1, il faut 0 ≤ minutes + 1 < 60 avant, soit minutes ≤ 58. L'invariant garantit seulement minutes ≤ 59 : pour minutes = 59 la propriété est fausse. incrementer_naif(10, 59) renvoie (10, 60) et l'assert échoue.",
          "if minutes < 59: minutes = minutes + 1 ; elif heures < 23: heures, minutes = heures + 1, 0 ; else: heures, minutes = 0, 0. Après 1440 appels depuis (0, 0), on retrouve (0, 0).",
          "Premier assert : si les minutes n'étaient pas à 59, elles ont augmenté de 1 et l'heure n'a pas bougé. Deuxième : si elles étaient à 59 et l'heure < 23, l'heure a augmenté de 1 et les minutes sont à 0. Troisième : à 23 h 59, on passe à 0 h 00. « A or B » est la façon d'écrire « si non A alors B » (une implication) avec une seule expression booléenne, sans if.",
          "Parce que la postcondition compare l'état APRÈS à l'état AVANT (« les minutes ont augmenté de 1 ») : une fois minutes modifiée, l'ancienne valeur est perdue si on ne l'a pas copiée.",
          { code: `def incrementer(heures, minutes):
    invariant_heure(heures, minutes)
    heures_avant, minutes_avant = heures, minutes
    if minutes < 59:
        minutes = minutes + 1
    elif heures < 23:
        heures, minutes = heures + 1, 0
    else:
        heures, minutes = 0, 0
    assert minutes_avant == 59 or (minutes == minutes_avant + 1 and heures == heures_avant)
    assert minutes_avant != 59 or heures_avant == 23 or (heures == heures_avant + 1 and minutes == 0)
    assert minutes_avant != 59 or heures_avant != 23 or (heures == 0 and minutes == 0)
    invariant_heure(heures, minutes)
    return heures, minutes

h, m = 0, 0
for _ in range(1440):
    h, m = incrementer(h, m)
print(h, m)                           # 0 0
print(incrementer(23, 59))            # (0, 0)` },
        ],
        prof: "<p>20 min. C'est l'exercice « Horloge » du DIU (classe Heure, méthode incrementer qui viole l'invariant à 59 minutes, correction à trois cas, puis écriture de la postcondition). En Première, l'heure est un couple et incrementer une fonction ; la version objet (invariant de classe) est en Terminale. La question 3 introduit la lecture d'une implication écrite avec or : à faire reformuler à l'oral.</p>",
      },
      {
        num: "6", titre: "Bonus — Le tri à bulles naïf : correction totale", run: true, bonus: true,
        code: `# ÉTAPE 6 (bonus) — Le tri à bulles naïf du DIU : invariant, variant, postcondition
def nb_inversions(liste):
    """Nombre de couples (i, j) avec i < j et liste[i] > liste[j] : la mesure du désordre."""
    total = 0
    for i in range(len(liste)):
        for j in range(i + 1, len(liste)):
            if liste[i] > liste[j]:
                total = total + 1
    return total

def tri_bulles(liste):
    inversion = True
    while inversion:
        variant = nb_inversions(liste) + 1     # + 1 : inversion vaut True en entrée de boucle
        inversion = False
        i = 0
        while i < len(liste) - 1:
            if liste[i] > liste[i + 1]:
                liste[i], liste[i + 1] = liste[i + 1], liste[i]
                inversion = True
            i = i + 1
        print("après ce passage :", liste, "désordre =", nb_inversions(liste))
        assert nb_inversions(liste) + (1 if inversion else 0) < variant
    assert nb_inversions(liste) == 0           # postcondition : trié
    return liste

print(tri_bulles([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]))`,
        note: "Le variant de la boucle externe n'est ni i ni la longueur : c'est le désordre, mesuré par le nombre d'inversions. Échanger deux voisins mal rangés en retire exactement une.",
        questions: [
          "Pourquoi échanger liste[i] et liste[i + 1] quand liste[i] > liste[i + 1] retire-t-il exactement une inversion ?",
          "Pourquoi le variant est-il nb_inversions(liste) + 1 et non nb_inversions(liste) seul ?",
          "Pourquoi « nb_inversions(liste) == 0 » signifie-t-il que la liste est triée ?",
          "Quel est le variant de la boucle interne (while i < len(liste) - 1) ?",
        ],
        correction: [
          "Les autres couples ne changent pas : un élément situé avant i (ou après i + 1) voit toujours les deux mêmes valeurs, dans le même ordre relatif. Seul le couple (i, i + 1) passe de mal rangé à bien rangé : une inversion de moins, exactement.",
          "Au dernier passage, aucun échange n'a lieu : le nombre d'inversions reste à 0, il ne décroît pas. Mais inversion passe de True à False, ce qui fait baisser la quantité de 1. Avec le + 1, le variant décroît strictement à CHAQUE passage, comme l'exige la preuve de terminaison.",
          "S'il n'y a aucun couple (i, j) avec i < j et liste[i] > liste[j], alors chaque élément est inférieur ou égal à tous ceux qui le suivent : c'est la définition d'une liste triée dans l'ordre croissant.",
          "len(liste) − 1 − i : entier naturel tant que la boucle tourne, il perd 1 à chaque tour.",
        ],
        prof: "<p>Bonus, 20 min pour les rapides ou en travail personnel (c'est le « travail personnel » du DIU). Le variant « nombre d'inversions » dépasse l'exigible en Première ; l'intérêt est de montrer qu'un variant peut être une quantité calculée, pas forcément une variable du programme. La cellule affiche le désordre à chaque passage : faire observer la décroissance avant d'expliquer.</p>",
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
