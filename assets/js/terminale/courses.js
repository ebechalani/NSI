/* =====================================================================
   COURS — Terminale NSI
   Contenu pédagogique original rédigé d'après le programme officiel
   (Bulletin officiel spécial n°8 du 25 juillet 2019, classe de Terminale,
   spécialité « Numérique et Sciences Informatiques »).
   Chaque thème reprend les "capacités attendues" du BO.

   ⚠️ SQUELETTE : seul le thème « Structures de données » est entièrement
   développé (démonstration). Les autres thèmes contiennent l'intro, les
   capacités du BO et une section « à compléter » — on les remplit ensemble.
   ===================================================================== */

const COURSES = [
  /* ============================================================= 1 */
  {
    id: "term-histoire",
    num: 1,
    emoji: "🕰️",
    title: "Histoire de l'informatique",
    intro:
      "Un fil transversal de toute l'année : d'où viennent les idées que l'on manipule (algorithme, machine programmable, langages, réseaux, IA) et qui les a portées.",
    capacites: [
      "Situer dans le temps les grandes étapes : machines à calculer, machine de Turing, premiers ordinateurs, langages, micro-informatique, Internet et le Web.",
      "Repérer l'apport de quelques figures (Ada Lovelace, Alan Turing, John von Neumann, Grace Hopper…).",
      "Comprendre que les concepts (algorithme, calculabilité, architecture) précèdent et structurent les technologies.",
    ],
    sections: [
      {
        title: "Avant l'ordinateur : calculer et automatiser",
        html: `
        <p>L'informatique a une longue préhistoire : celle des machines à <strong>calculer</strong> et des machines <strong>programmables</strong>. Deux idées vont peu à peu se rejoindre.</p>
        <ul>
          <li><strong>Calculer mécaniquement</strong> : la <strong>Pascaline</strong> de Blaise Pascal (1642) additionne par engrenages ; Leibniz (1673) y ajoute la multiplication et défend déjà le <strong>binaire</strong>.</li>
          <li><strong>Automatiser par un programme</strong> : le <strong>métier à tisser de Jacquard</strong> (1801) est piloté par des <strong>cartes perforées</strong> — un trou ou pas de trou, c'est-à-dire des 0 et des 1 ! C'est la première « machine programmée ».</li>
        </ul>
        <p>Au XIXᵉ siècle, <strong>Charles Babbage</strong> conçoit la <strong>machine analytique</strong>, un calculateur universel mécanique (jamais achevé). <strong>Ada Lovelace</strong> (1843) écrit pour elle ce qui est considéré comme le <strong>premier programme</strong> de l'histoire, et comprend qu'une telle machine pourrait manipuler bien plus que des nombres : des symboles, de la musique… une intuition géniale, un siècle en avance.</p>
        <p class="note">💡 À retenir : l'idée de <strong>coder l'information par deux états</strong> (trou / pas de trou) et celle de <strong>programme</strong> (une suite d'instructions exécutée par une machine) existent bien avant l'électronique.</p>`,
      },
      {
        title: "Fonder la science : Turing et la calculabilité (1936)",
        html: `
        <p>En 1936, le mathématicien britannique <strong>Alan Turing</strong> répond à une question abstraite : <em>qu'est-ce qu'un calcul ?</em> Il imagine une machine théorique très simple — la <strong>machine de Turing</strong> — capable, en principe, d'effectuer <strong>tout calcul réalisable par un algorithme</strong>.</p>
        <p>Ce modèle fonde l'informatique <strong>théorique</strong> : il définit ce qui est <strong>calculable</strong>… et démontre qu'il existe des problèmes <strong>non calculables</strong> (le <strong>problème de l'arrêt</strong>, revu dans le thème « Langages et programmation »).</p>
        <p>Pendant la Seconde Guerre mondiale, Turing joue un rôle majeur à <strong>Bletchley Park</strong> dans le <strong>décryptage</strong> des messages allemands (machine Enigma) — un effort qui a accéléré la fin de la guerre. En 1950, il propose le <strong>test de Turing</strong> pour la question « une machine peut-elle penser ? ».</p>
        <p>Une machine de Turing manipule un <strong>ruban</strong> de cases selon des <strong>règles</strong> très simples. Voici un mini-simulateur qui <em>incrémente de 1</em> un nombre binaire — pour sentir qu'avec des règles élémentaires, on calcule vraiment :</p>`,
        code: `# Mini machine de Turing : ajoute 1 à un nombre binaire (lu de gauche à droite)
# Règle : on part de la droite ; tant qu'on voit un 1, on le met à 0 et on continue ;
# dès qu'on voit un 0 (ou le bord), on écrit 1 et on s'arrête.
def incrementer(ruban):
    ruban = list(ruban)
    i = len(ruban) - 1
    while i >= 0 and ruban[i] == "1":
        ruban[i] = "0"
        i -= 1
    if i >= 0:
        ruban[i] = "1"
    else:
        ruban = ["1"] + ruban     # retenue qui déborde à gauche
    return "".join(ruban)

n = "1011"          # 11 en binaire
for _ in range(3):
    print(n, "->", incrementer(n))
    n = incrementer(n)
# 1011 -> 1100 (12), 1100 -> 1101 (13), 1101 -> 1110 (14)`,
      },
      {
        title: "Les premières machines & la théorie de l'information (1940-1950)",
        html: `
        <p>L'électronique rend enfin les calculateurs <strong>rapides</strong>. L'<strong>ENIAC</strong> (1945, États-Unis) est l'un des premiers grands ordinateurs électroniques. Mais il fallait le « reprogrammer » en rebranchant des câbles…</p>
        <p>La grande idée vient de <strong>John von Neumann</strong> (1945) : <strong>stocker le programme dans la même mémoire que les données</strong>. C'est l'<strong>architecture de von Neumann</strong> (unité de calcul, mémoire, entrées/sorties) — celle de <em>tous</em> nos ordinateurs aujourd'hui (revue dans le thème Architectures).</p>
        <p><strong>Grace Hopper</strong>, pionnière américaine, invente l'idée de <strong>compilateur</strong> (traduire un langage proche de l'humain en langage machine) et contribue à <strong>COBOL</strong>. On lui doit aussi la popularisation du mot <strong>« bug »</strong> (un vrai papillon coincé dans un relais, 1947 !).</p>
        <p>En 1948, <strong>Claude Shannon</strong> fonde la <strong>théorie de l'information</strong> : il définit le <strong>bit</strong> comme unité de mesure de l'information. Combien de bits pour distinguer N possibilités équiprobables ? <strong>log₂(N)</strong>.</p>`,
        code: `import math

# Théorie de l'information (Shannon) : nombre de bits pour coder N choix équiprobables
for n in [2, 8, 16, 256, 1000]:
    bits = math.log2(n)
    print(f"{n:>4} possibilités -> {bits:.2f} bits")
# 256 -> 8.00 bits (un octet), 1000 -> 9.97 bits (il en faut donc 10)`,
      },
      {
        title: "Langages, logiciel et systèmes (1950-1970)",
        html: `
        <p>Programmer en binaire est inhumain : on invente des <strong>langages de programmation</strong> de plus en plus abstraits.</p>
        <ul>
          <li><strong>Fortran</strong> (1957) pour le calcul scientifique ; <strong>Lisp</strong> (1958) pour le traitement symbolique et l'IA ; <strong>COBOL</strong> (1959) pour la gestion ; <strong>Algol</strong> introduit les structures de contrôle modernes.</li>
          <li><strong>Edsger Dijkstra</strong> milite pour une <strong>programmation structurée</strong> (« Go To Statement Considered Harmful », 1968) et donne son nom à l'algorithme de plus court chemin (thème Algorithmique).</li>
          <li>Au début des années 1970, <strong>Unix</strong> (Thompson, Ritchie) et le langage <strong>C</strong> posent les bases des systèmes d'exploitation modernes (Linux, macOS en descendent).</li>
        </ul>
        <p class="note">📌 Idée clé : chaque langage ajoute une <strong>couche d'abstraction</strong> qui rapproche le code de la pensée humaine, en s'éloignant de l'électronique. C'est tout le sens du thème « Langages et programmation ».</p>`,
      },
      {
        title: "La micro-informatique : l'ordinateur pour tous (1970-1990)",
        html: `
        <p>En 1971, Intel grave tout un processeur sur une puce : le <strong>microprocesseur</strong> (Intel 4004). La machine devient petite et bon marché : c'est la révolution de la <strong>micro-informatique</strong>.</p>
        <ul>
          <li><strong>Apple</strong> (1976-1977) et l'<strong>IBM PC</strong> (1981) font entrer l'ordinateur dans les foyers et les bureaux.</li>
          <li>Au <strong>Xerox PARC</strong>, on invente l'<strong>interface graphique</strong> (fenêtres, icônes) et la <strong>souris</strong> (Douglas Engelbart en avait fait la démonstration dès 1968, « la mère de toutes les démos »). Apple puis Microsoft la popularisent.</li>
        </ul>
        <p>L'informatique cesse d'être réservée aux experts : on interagit avec elle par des <strong>images</strong> et des gestes — préfiguration du thème « Interactions homme-machine » de Première.</p>`,
      },
      {
        title: "Réseaux, Internet et le Web",
        html: `
        <p>Relier les machines change tout. À la fin des années 1960, <strong>ARPANET</strong> (ancêtre d'Internet) relie quelques universités américaines. Le secret de sa robustesse : la <strong>commutation de paquets</strong> (revue dans ce thème).</p>
        <ul>
          <li><strong>Vint Cerf</strong> et <strong>Robert Kahn</strong> conçoivent les protocoles <strong>TCP/IP</strong> (années 1970) : un « langage commun » qui permet à des réseaux différents de communiquer. Internet est né.</li>
          <li>En 1989-1991, au <strong>CERN</strong>, <strong>Tim Berners-Lee</strong> invente le <strong>World Wide Web</strong> : les liens hypertextes, le HTML, les URL, le protocole HTTP. Le Web <em>rend Internet utilisable par tous</em>.</li>
        </ul>
        <p class="warnbox">⚠️ Ne pas confondre : <strong>Internet</strong> est le réseau physique mondial (les « tuyaux ») ; le <strong>Web</strong> est <em>un</em> service qui circule dessus (les pages liées). Le mail, la visio, le jeu en ligne sont d'<em>autres</em> services d'Internet.</p>`,
      },
      {
        title: "Aujourd'hui : mobile, données massives et IA",
        html: `
        <p>Depuis 2007 (le smartphone moderne), l'ordinateur est <strong>dans la poche</strong> et connecté en permanence. Trois grandes tendances marquent notre époque :</p>
        <ul>
          <li><strong>Données massives</strong> (<em>big data</em>) : on collecte et traite des quantités gigantesques d'informations (thèmes Données & Bases de données).</li>
          <li><strong>Intelligence artificielle</strong> : l'<em>apprentissage automatique</em> (dont les k plus proches voisins, vus en Algorithmique) permet aux machines d'apprendre à partir d'exemples ; les réseaux de neurones et les grands modèles de langage en sont l'aboutissement actuel.</li>
          <li><strong>Enjeux de société</strong> : vie privée et données personnelles, biais des algorithmes, désinformation, <strong>impact environnemental</strong> du numérique. La NSI forme des citoyens <em>lucides</em>, pas seulement des techniciens.</li>
        </ul>
        <p class="note">🎯 Fil rouge de l'année : à chaque nouvelle notion (structure, algorithme, base de données, réseau), demande-toi <em>« d'où vient cette idée, et qui l'a portée ? »</em>. L'histoire donne du sens à la technique.</p>`,
      },
    ],
  },

  /* ============================================================= 2
     THÈME DÉTAILLÉ — démonstration de « la même manière » :
     cours développé, cellules Python exécutables (Pyodide + Basthon),
     exercices et textes à trou (dans terminale/exercises.js et quizzes.js).
  */
  {
    id: "term-structures",
    num: 2,
    emoji: "🗃️",
    title: "Structures de données",
    intro:
      "Une donnée seule, c'est peu de choses : ce qui compte, c'est la façon dont on organise un ensemble de données pour les utiliser efficacement. Piles, files, listes chaînées, arbres et graphes sont les « boîtes à outils » de la Terminale.",
    capacites: [
      "Écrire la définition d'une classe ; instancier un objet, accéder à ses attributs et appeler ses méthodes (vocabulaire de la programmation objet).",
      "Distinguer des structures de données par le jeu de méthodes qui les caractérisent (interface), indépendamment de leur implémentation ; choisir une structure adaptée à la situation à modéliser.",
      "Spécifier et implémenter les structures linéaires : listes, piles (LIFO) et files (FIFO).",
      "Distinguer une recherche dans une liste d'une recherche dans un dictionnaire (par clé).",
      "Identifier des situations nécessitant une structure arborescente ; évaluer quelques mesures d'un arbre binaire (taille, hauteur) ; le parcourir (préfixe, infixe, suffixe, en largeur).",
      "Modéliser des situations à l'aide de graphes ; écrire les implémentations d'un graphe (matrice d'adjacence, listes d'adjacence) et passer de l'une à l'autre ; le parcourir (en profondeur, en largeur).",
    ],
    sections: [
      {
        title: "Interface et implémentation : le contrat d'une structure",
        html: `
        <p>En Première, on a beaucoup utilisé la <code>list</code> de Python. En Terminale, on prend de la hauteur : on distingue ce qu'une structure <strong>fait</strong> de la manière dont elle est <strong>fabriquée</strong>.</p>
        <ul>
          <li>L'<strong>interface</strong> (ou <em>type abstrait</em>), c'est la <strong>liste des opérations</strong> proposées et ce qu'elles promettent : par exemple, « je peux empiler un élément, et dépiler renvoie le dernier empilé ». C'est un <strong>contrat</strong>.</li>
          <li>L'<strong>implémentation</strong>, c'est le <strong>code concret</strong> qui réalise ce contrat : on peut tenir la même promesse avec une <code>list</code>, avec une liste chaînée, etc.</li>
        </ul>
        <p>Pourquoi séparer les deux ? Parce que celui qui <em>utilise</em> la structure n'a besoin de connaître que l'interface. Si demain on change l'implémentation (pour aller plus vite), <strong>son code continue de marcher</strong>. C'est exactement l'idée d'une prise électrique : la forme de la prise (interface) ne change pas, même si la centrale derrière (implémentation) est solaire ou nucléaire.</p>
        <p class="note">💡 Vocabulaire : on parle de <strong>type abstrait de données</strong> (TAD) pour l'interface. « Pile », « File », « Arbre » sont des TAD ; une <code>list</code> Python est une implémentation possible.</p>
        <p class="warnbox">⚠️ Le coût (le temps d'exécution) dépend de l'implémentation, pas de l'interface. Deux piles offrant le même contrat peuvent ne pas avoir la même rapidité. C'est tout l'enjeu du thème : choisir la bonne structure.</p>`,
      },
      {
        title: "La pile (LIFO) : le dernier arrivé, premier servi",
        html: `
        <p>Une <strong>pile</strong> (<em>stack</em>) fonctionne comme une pile d'assiettes : on ajoute et on retire <strong>toujours par le haut</strong>. Le dernier élément posé est le premier repris. On résume par <strong>LIFO</strong> : <em>Last In, First Out</em>.</p>
        <p>Son interface tient en quelques opérations :</p>
        <ul>
          <li><code>empiler(x)</code> (<em>push</em>) : poser <code>x</code> au sommet ;</li>
          <li><code>depiler()</code> (<em>pop</em>) : retirer et renvoyer l'élément du sommet ;</li>
          <li><code>est_vide()</code> : la pile est-elle vide ?</li>
          <li><code>sommet()</code> : regarder le sommet sans le retirer.</li>
        </ul>
        <p>Où sert une pile ? Partout où il faut « revenir en arrière » : le bouton <strong>Précédent</strong> d'un navigateur, l'annulation <strong>Ctrl-Z</strong>, la pile d'appels des fonctions, la vérification de parenthèses…</p>
        <p>On peut l'implémenter très simplement avec une <code>list</code> Python (<code>append</code> = empiler, <code>pop</code> = dépiler) :</p>`,
        code: `class Pile:
    """Pile LIFO implémentée avec une liste Python."""
    def __init__(self):
        self._elements = []        # détail d'implémentation (caché)

    def est_vide(self):
        return self._elements == []

    def empiler(self, x):
        self._elements.append(x)   # on ajoute à la fin = le sommet

    def depiler(self):
        return self._elements.pop()  # retire et renvoie le dernier

    def sommet(self):
        return self._elements[-1]

# Utilisation : on ne manipule QUE l'interface
p = Pile()
for lettre in "NSI":
    p.empiler(lettre)
print("Sommet :", p.sommet())     # I (dernier empilé)
print("On dépile :", p.depiler()) # I
print("On dépile :", p.depiler()) # S
print("Vide ?", p.est_vide())     # False (il reste N)`,
      },
      {
        title: "Application de la pile : les parenthèses sont-elles bien fermées ?",
        html: `
        <p>Un exemple classique et utile : vérifier qu'une expression est <strong>bien parenthésée</strong>, comme <code>(3+[2×(1-4)])</code>. L'idée avec une pile :</p>
        <ol>
          <li>À chaque parenthèse <strong>ouvrante</strong>, on l'<strong>empile</strong>.</li>
          <li>À chaque parenthèse <strong>fermante</strong>, on <strong>dépile</strong> : la dernière ouverte doit correspondre.</li>
          <li>À la fin, la pile doit être <strong>vide</strong>.</li>
        </ol>
        <p>C'est exactement le principe « dernier ouvert, premier fermé » → LIFO.</p>`,
        code: `def bien_parenthese(expr):
    paires = {")": "(", "]": "[", "}": "{"}
    pile = []
    for c in expr:
        if c in "([{":
            pile.append(c)
        elif c in ")]}":
            if not pile or pile.pop() != paires[c]:
                return False          # ferme une parenthèse jamais ouverte / mauvais type
    return pile == []                 # tout doit être refermé

print(bien_parenthese("(3+[2*(1-4)])"))  # True
print(bien_parenthese("(3+[2*(1-4])"))   # False (crochet mal fermé)
print(bien_parenthese("))(("))           # False`,
      },
      {
        title: "La file (FIFO) : le premier arrivé, premier servi",
        html: `
        <p>Une <strong>file</strong> (<em>queue</em>) fonctionne comme une file d'attente à la boulangerie : on entre <strong>par la fin</strong>, on est servi <strong>par le début</strong>. Le premier arrivé est le premier servi. On résume par <strong>FIFO</strong> : <em>First In, First Out</em>.</p>
        <p>Interface symétrique de la pile, mais l'ordre de sortie change tout :</p>
        <ul>
          <li><code>enfiler(x)</code> : ajouter <code>x</code> en queue ;</li>
          <li><code>defiler()</code> : retirer et renvoyer l'élément de tête ;</li>
          <li><code>est_vide()</code>.</li>
        </ul>
        <p>Où sert une file ? File d'impression, messages reçus traités dans l'ordre, parcours « en largeur » d'un graphe (plus loin dans le thème), ordonnancement de tâches…</p>
        <p class="warnbox">⚠️ Avec une <code>list</code>, <code>pop(0)</code> retire le premier élément mais doit <strong>décaler tous les autres</strong> : c'est lent (coût proportionnel à la taille). Pour une vraie file efficace, Python fournit <code>collections.deque</code>, conçu pour ajouter/retirer aux deux bouts en temps constant.</p>`,
        code: `from collections import deque

class File:
    """File FIFO efficace grâce à deque."""
    def __init__(self):
        self._elements = deque()

    def est_vide(self):
        return len(self._elements) == 0

    def enfiler(self, x):
        self._elements.append(x)       # entre par la fin

    def defiler(self):
        return self._elements.popleft()  # sort par le début

f = File()
for client in ["Ava", "Bilal", "Chloé"]:
    f.enfiler(client)
print("On sert :", f.defiler())  # Ava (arrivée en premier)
print("On sert :", f.defiler())  # Bilal
print("Vide ?", f.est_vide())    # False (reste Chloé)`,
      },
      {
        title: "Listes chaînées : des maillons reliés",
        html: `
        <p>La <code>list</code> de Python range ses éléments côte à côte en mémoire. Une <strong>liste chaînée</strong> propose une autre organisation : une suite de <strong>maillons</strong>, où chaque maillon contient une <strong>valeur</strong> et une <strong>flèche</strong> vers le maillon suivant (et le dernier pointe vers « rien », <code>None</code>).</p>
        <p>Avantage : on peut insérer un élément en début de liste <strong>sans rien décaler</strong> (il suffit de rebrancher une flèche). Inconvénient : pour atteindre le 100ᵉ élément, on doit suivre les flèches une à une (pas d'accès direct par indice).</p>
        <p>On la construit naturellement de façon <strong>récursive</strong> : une liste chaînée est <em>soit vide</em>, <em>soit</em> un maillon suivi d'une liste chaînée.</p>`,
        code: `class Maillon:
    def __init__(self, valeur, suivant=None):
        self.valeur = valeur
        self.suivant = suivant     # flèche vers le maillon d'après (ou None)

# Construire la chaîne 1 -> 2 -> 3 « à la main »
tete = Maillon(1, Maillon(2, Maillon(3)))

def longueur(maillon):
    """Compte les maillons en suivant les flèches (version récursive)."""
    if maillon is None:            # cas de base : liste vide
        return 0
    return 1 + longueur(maillon.suivant)

def afficher(maillon):
    while maillon is not None:
        print(maillon.valeur, end=" -> ")
        maillon = maillon.suivant
    print("None")

afficher(tete)            # 1 -> 2 -> 3 -> None
print("Longueur :", longueur(tete))   # 3`,
      },
      {
        title: "Les arbres : une structure hiérarchique",
        html: `
        <p>Piles, files et listes sont <strong>linéaires</strong> : les éléments se suivent en ligne. Un <strong>arbre</strong> est <strong>hiérarchique</strong> : il se ramifie. Pensez à un arbre généalogique, à l'arborescence des dossiers, au menu d'un jeu.</p>
        <p>Vocabulaire à connaître :</p>
        <ul>
          <li>La <strong>racine</strong> : le nœud tout en haut (par convention, l'arbre est dessiné à l'envers) ;</li>
          <li>un <strong>nœud</strong> a des <strong>fils</strong> ; un nœud sans fils est une <strong>feuille</strong> ;</li>
          <li>la <strong>taille</strong> = nombre total de nœuds ; la <strong>hauteur</strong> = longueur du plus long chemin de la racine à une feuille.</li>
        </ul>
        <p>Un <strong>arbre binaire</strong> est un arbre où chaque nœud a <strong>au plus deux fils</strong> (gauche et droite). On le définit <strong>récursivement</strong> : un arbre binaire est <em>soit vide</em>, <em>soit</em> une valeur avec un sous-arbre gauche et un sous-arbre droit. On peut le représenter par un triplet <code>(valeur, gauche, droite)</code>, l'arbre vide étant <code>None</code>.</p>`,
        code: `# Arbre binaire représenté par des triplets (valeur, gauche, droite) ; None = vide
#        7
#       / \\
#      3   9
#     / \\
#    1   5
arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def taille(a):
    if a is None:
        return 0
    valeur, gauche, droite = a
    return 1 + taille(gauche) + taille(droite)

def hauteur(a):
    if a is None:
        return 0
    valeur, gauche, droite = a
    return 1 + max(hauteur(gauche), hauteur(droite))

print("Taille  :", taille(arbre))   # 5 nœuds
print("Hauteur :", hauteur(arbre))  # 3 (chemin 7 -> 3 -> 1 ou 7 -> 3 -> 5)`,
      },
      {
        title: "Parcourir un arbre binaire",
        html: `
        <p>Pour « visiter » tous les nœuds, on choisit un <strong>ordre de parcours</strong>. Les trois parcours en profondeur diffèrent par le <em>moment où l'on traite la racine</em> :</p>
        <ul>
          <li><strong>Préfixe</strong> : racine, puis gauche, puis droite ;</li>
          <li><strong>Infixe</strong> : gauche, puis racine, puis droite ;</li>
          <li><strong>Suffixe</strong> : gauche, puis droite, puis racine.</li>
        </ul>
        <p>Détail important : pour un <strong>arbre binaire de recherche</strong> (ABR), où tout ce qui est à gauche d'un nœud est plus petit et tout ce qui est à droite est plus grand, le parcours <strong>infixe</strong> ressort les valeurs <strong>dans l'ordre croissant</strong>. C'est ce qui rend les ABR si pratiques pour ranger et rechercher.</p>`,
        code: `arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def infixe(a):
    if a is None:
        return []
    valeur, gauche, droite = a
    return infixe(gauche) + [valeur] + infixe(droite)

def prefixe(a):
    if a is None:
        return []
    valeur, gauche, droite = a
    return [valeur] + prefixe(gauche) + prefixe(droite)

print("Infixe  :", infixe(arbre))   # [1, 3, 5, 7, 9]  -> trié (c'est un ABR)
print("Préfixe :", prefixe(arbre))  # [7, 3, 1, 5, 9]`,
      },
      {
        title: "Les graphes : modéliser des relations",
        html: `
        <p>Un <strong>graphe</strong> sert à modéliser des <strong>relations</strong> entre objets : des villes reliées par des routes, des personnes « amies » sur un réseau social, des pages liées par des liens. On parle de <strong>sommets</strong> (les objets) et d'<strong>arêtes</strong> (les liens).</p>
        <p>Deux représentations classiques :</p>
        <ul>
          <li>la <strong>matrice d'adjacence</strong> : un tableau où la case (i, j) vaut 1 s'il y a une arête entre i et j ;</li>
          <li>les <strong>listes d'adjacence</strong> : pour chaque sommet, la liste de ses voisins. On l'écrit très bien avec un dictionnaire Python.</li>
        </ul>
        <p>Pour explorer un graphe, on réutilise nos structures linéaires ! Le <strong>parcours en largeur</strong> (BFS) utilise une <strong>file</strong> (on visite d'abord les voisins proches), le <strong>parcours en profondeur</strong> (DFS) utilise une <strong>pile</strong> (on s'enfonce le plus loin possible avant de revenir).</p>`,
        code: `from collections import deque

# Graphe en listes d'adjacence (dictionnaire) : un petit réseau d'amis
graphe = {
    "Ava":   ["Bilal", "Chloé"],
    "Bilal": ["Ava", "Dan"],
    "Chloé": ["Ava", "Dan"],
    "Dan":   ["Bilal", "Chloé"],
}

def parcours_largeur(g, depart):
    vus = [depart]
    file = deque([depart])
    while file:
        sommet = file.popleft()        # une FILE -> parcours en largeur
        for voisin in g[sommet]:
            if voisin not in vus:
                vus.append(voisin)
                file.append(voisin)
    return vus

print(parcours_largeur(graphe, "Ava"))  # ['Ava', 'Bilal', 'Chloé', 'Dan']`,
      },
      {
        title: "Bien choisir : un récapitulatif",
        html: `
        <p>Le réflexe de Terminale : avant de coder, se demander « <strong>de quelle structure ai-je besoin ?</strong> » selon les opérations dominantes.</p>
        <p>Un cas très fréquent : <strong>retrouver une information par une clé</strong>. Dans une <strong>liste</strong>, il faut parcourir les éléments un à un (coût proportionnel à la taille). Dans un <strong>dictionnaire</strong>, la recherche par clé est <strong>quasi immédiate</strong> (accès direct), quelle que soit la taille. D'où la règle : si l'on cherche souvent « l'élément associé à telle clé », on choisit un dictionnaire, pas une liste.</p>
        <table>
          <tr><th>Besoin</th><th>Structure</th><th>Pourquoi</th></tr>
          <tr><td>Revenir en arrière, annuler</td><td>Pile (LIFO)</td><td>Le dernier ajouté est le premier repris.</td></tr>
          <tr><td>Traiter dans l'ordre d'arrivée</td><td>File (FIFO)</td><td>Premier arrivé, premier servi.</td></tr>
          <tr><td>Insérer souvent en tête</td><td>Liste chaînée</td><td>On rebranche une flèche, sans décaler.</td></tr>
          <tr><td>Ranger pour rechercher vite</td><td>Arbre binaire de recherche</td><td>On élimine la moitié des nœuds à chaque étape.</td></tr>
          <tr><td>Retrouver par une clé</td><td>Dictionnaire</td><td>Accès direct ≈ immédiat, sans parcourir.</td></tr>
          <tr><td>Représenter des relations</td><td>Graphe</td><td>Sommets + arêtes ; parcours BFS/DFS.</td></tr>
        </table>
        <p class="note">🎯 Activité débranchée (en îlot) : avec des gobelets empilables et une file d'élèves, faites « jouer » une pile puis une file, et notez à voix haute LIFO / FIFO à chaque opération. Puis modélisez les amitiés de l'îlot par un graphe au tableau et faites-en le parcours en largeur.</p>`,
      },
    ],
  },

  /* ============================================================= 3 */
  {
    id: "term-bdd",
    num: 3,
    emoji: "🗄️",
    title: "Bases de données",
    intro:
      "Comment stocker, organiser et interroger de grandes quantités de données de façon fiable et partagée ? Le modèle relationnel et le langage SQL répondent à cette question depuis les années 1970.",
    capacites: [
      "Identifier les concepts définissant le modèle relationnel : relation, attribut, domaine, clé primaire, clé étrangère, schéma relationnel.",
      "Distinguer la structure d'une base de données de son contenu ; repérer des anomalies dans un schéma relationnel.",
      "Identifier des contraintes d'intégrité (de domaine, de clé/d'entité, référentielle).",
      "Construire des requêtes d'interrogation en SQL : SELECT, FROM, WHERE, jointures, ORDER BY, fonctions d'agrégat (COUNT, AVG…) et GROUP BY.",
      "Construire des requêtes d'insertion et de mise à jour : INSERT, UPDATE, DELETE (avec les clauses VALUES, SET, WHERE).",
      "Identifier le rôle d'un système de gestion de bases de données (SGBD) : persistance, cohérence, accès concurrents, sécurité.",
    ],
    sections: [
      {
        title: "Pourquoi des bases de données ?",
        html: `
        <p>Dès qu'on manipule <strong>beaucoup de données partagées</strong> (les élèves d'un lycée, les comptes d'une banque, le catalogue d'un site), un simple fichier ou un tableur montre vite ses limites :</p>
        <ul>
          <li><strong>Redondance et incohérence</strong> : la même information recopiée à plusieurs endroits finit par se contredire ;</li>
          <li><strong>Accès concurrent</strong> : que se passe-t-il si deux personnes modifient la même ligne en même temps ?</li>
          <li><strong>Recherche</strong> : retrouver « tous les élèves de Première ayant plus de 15 de moyenne » dans un gros fichier devient pénible ;</li>
          <li><strong>Sécurité et intégrité</strong> : comment garantir qu'une note reste entre 0 et 20, et que chaque note se rattache à un élève existant ?</li>
        </ul>
        <p>Un <strong>SGBD</strong> (système de gestion de bases de données) répond à tout cela. Les plus courants suivent le <strong>modèle relationnel</strong> (on parle de <strong>SGBDR</strong>) et se pilotent avec le langage <strong>SQL</strong> : <em>SQLite</em> (léger, dans un simple fichier), <em>PostgreSQL</em>, <em>MySQL/MariaDB</em>…</p>
        <p class="note">💡 Un SGBD garantit les bonnes propriétés d'une transaction (souvent résumées par <strong>ACID</strong> : Atomicité, Cohérence, Isolation, Durabilité). Retenez l'idée : une base de données est <strong>fiable</strong> et <strong>partagée</strong>, là où un fichier est fragile.</p>`,
      },
      {
        title: "Le modèle relationnel : tables, attributs, domaines",
        html: `
        <p>Dans le modèle relationnel, les données sont rangées dans des <strong>tables</strong> (on dit aussi <em>relations</em>). Chaque table décrit <em>un type d'objet</em> :</p>
        <ul>
          <li>une <strong>colonne</strong> = un <strong>attribut</strong> (ex. <code>nom</code>), avec un <strong>domaine</strong> (son type : texte, entier, réel…) ;</li>
          <li>une <strong>ligne</strong> = un <strong>enregistrement</strong> (un objet précis : un élève donné).</li>
        </ul>
        <p>Pour tout le thème, on travaille sur une petite base <strong>« lycée »</strong> à deux tables. La table <code>classe</code> :</p>
        <table>
          <tr><th>id</th><th>nom</th><th>niveau</th></tr>
          <tr><td>1</td><td>1G2</td><td>Première</td></tr>
          <tr><td>2</td><td>TG1</td><td>Terminale</td></tr>
        </table>
        <p>… et la table <code>eleve</code>, dont l'attribut <code>id_classe</code> indique <em>dans quelle classe</em> est l'élève :</p>
        <table>
          <tr><th>id</th><th>nom</th><th>id_classe</th><th>moyenne</th></tr>
          <tr><td>1</td><td>Ada</td><td>2</td><td>18.5</td></tr>
          <tr><td>2</td><td>Alan</td><td>2</td><td>16.0</td></tr>
          <tr><td>3</td><td>Grace</td><td>1</td><td>14.5</td></tr>
          <tr><td>4</td><td>Linus</td><td>1</td><td>9.5</td></tr>
        </table>
        <p>On définit le <strong>schéma</strong> d'une table en l'écrivant ainsi : <code>eleve(<u>id</u>, nom, #id_classe, moyenne)</code>. On souligne la clé primaire et on préfixe d'un <code>#</code> une clé étrangère (section suivante).</p>`,
      },
      {
        title: "Clés primaires, clés étrangères, intégrité",
        html: `
        <p>Pour que la base reste <strong>cohérente</strong>, le modèle relationnel impose des <strong>contraintes</strong>.</p>
        <ul>
          <li>La <strong>clé primaire</strong> (<em>primary key</em>) identifie <strong>de façon unique</strong> chaque ligne : ici l'attribut <code>id</code>. Elle ne peut être ni dupliquée, ni vide. → <strong>contrainte d'entité</strong>.</li>
          <li>Une <strong>clé étrangère</strong> (<em>foreign key</em>) est un attribut qui <strong>référence la clé primaire d'une autre table</strong> : <code>eleve.id_classe</code> doit correspondre à un <code>classe.id</code> existant. → <strong>contrainte d'intégrité référentielle</strong>.</li>
          <li>Le <strong>domaine</strong> de chaque attribut limite les valeurs acceptées (une <code>moyenne</code> est un réel entre 0 et 20). → <strong>contrainte de domaine</strong>.</li>
        </ul>
        <p>Grâce aux clés étrangères, on évite de recopier le nom de la classe dans chaque élève : l'information n'est écrite <strong>qu'une seule fois</strong>, et on relie les tables au besoin (par une <em>jointure</em>).</p>
        <p class="warnbox">⚠️ L'intégrité référentielle protège la base : le SGBD <strong>refusera</strong> d'insérer un élève dont <code>id_classe</code> ne correspond à aucune classe, ou de supprimer une classe encore référencée par des élèves.</p>`,
      },
      {
        title: "Interroger : SELECT … FROM … WHERE",
        html: `
        <p>On <em>interroge</em> une base avec l'instruction <strong>SELECT</strong>. Sa forme de base :</p>
        <pre class="sql">SELECT colonnes      -- ce qu'on veut afficher (projection)
FROM   table         -- d'où ça vient
WHERE  condition     -- quelles lignes garder (sélection)</pre>
        <p>Exemple : <em>« le nom et la moyenne des élèves ayant plus de 15 »</em>.</p>
        <pre class="sql">SELECT nom, moyenne
FROM   eleve
WHERE  moyenne &gt; 15;</pre>
        <p>Résultat :</p>
        <table>
          <tr><th>nom</th><th>moyenne</th></tr>
          <tr><td>Ada</td><td>18.5</td></tr>
          <tr><td>Alan</td><td>16.0</td></tr>
        </table>
        <p>Retenez les deux opérations : <strong>SELECT</strong> choisit les <em>colonnes</em> (projection), <strong>WHERE</strong> choisit les <em>lignes</em> (sélection). <code>SELECT *</code> prend toutes les colonnes. La cellule ci-dessous <strong>exécute l'équivalent en Python</strong> (une table = une liste d'enregistrements) pour bien voir le résultat.</p>`,
        code: `# Une table = une liste d'enregistrements (dictionnaires)
eleve = [
    {"id": 1, "nom": "Ada",   "id_classe": 2, "moyenne": 18.5},
    {"id": 2, "nom": "Alan",  "id_classe": 2, "moyenne": 16.0},
    {"id": 3, "nom": "Grace", "id_classe": 1, "moyenne": 14.5},
    {"id": 4, "nom": "Linus", "id_classe": 1, "moyenne": 9.5},
]

# Équivaut à : SELECT nom, moyenne FROM eleve WHERE moyenne > 15;
resultat = [(e["nom"], e["moyenne"]) for e in eleve if e["moyenne"] > 15]
for ligne in resultat:
    print(ligne)
# ('Ada', 18.5)
# ('Alan', 16.0)`,
      },
      {
        title: "Trier et agréger : ORDER BY, COUNT, AVG, GROUP BY",
        html: `
        <p>On peut <strong>trier</strong> le résultat avec <strong>ORDER BY</strong> (<code>ASC</code> croissant par défaut, <code>DESC</code> décroissant) :</p>
        <pre class="sql">SELECT nom, moyenne FROM eleve ORDER BY moyenne DESC;</pre>
        <p>On peut aussi <strong>calculer</strong> sur un ensemble de lignes avec les <strong>fonctions d'agrégat</strong> : <code>COUNT</code> (compter), <code>AVG</code> (moyenne), <code>MIN</code>, <code>MAX</code>, <code>SUM</code>.</p>
        <pre class="sql">SELECT COUNT(*), AVG(moyenne) FROM eleve;   -- 4 élèves, moyenne ≈ 14.6</pre>
        <p>Enfin, <strong>GROUP BY</strong> applique l'agrégat <em>par paquets</em>. <em>« La moyenne des élèves, classe par classe »</em> :</p>
        <pre class="sql">SELECT id_classe, AVG(moyenne)
FROM   eleve
GROUP BY id_classe;</pre>
        <table>
          <tr><th>id_classe</th><th>AVG(moyenne)</th></tr>
          <tr><td>1</td><td>12.0</td></tr>
          <tr><td>2</td><td>17.25</td></tr>
        </table>`,
        code: `eleve = [
    {"nom": "Ada",   "id_classe": 2, "moyenne": 18.5},
    {"nom": "Alan",  "id_classe": 2, "moyenne": 16.0},
    {"nom": "Grace", "id_classe": 1, "moyenne": 14.5},
    {"nom": "Linus", "id_classe": 1, "moyenne": 9.5},
]

# ORDER BY moyenne DESC
for e in sorted(eleve, key=lambda e: e["moyenne"], reverse=True):
    print(e["nom"], e["moyenne"])

# GROUP BY id_classe -> AVG(moyenne)
classes = {}
for e in eleve:
    classes.setdefault(e["id_classe"], []).append(e["moyenne"])
print("--- moyenne par classe ---")
for id_classe, notes in classes.items():
    print(id_classe, round(sum(notes) / len(notes), 2))`,
      },
      {
        title: "Croiser les tables : les jointures (JOIN)",
        html: `
        <p>La moyenne « par <code>id_classe</code> » n'est pas très parlante : on veut le <strong>nom</strong> de la classe. Il faut <strong>relier</strong> les deux tables là où la clé étrangère correspond à la clé primaire : c'est une <strong>jointure</strong>.</p>
        <pre class="sql">SELECT eleve.nom, classe.nom
FROM   eleve
JOIN   classe ON eleve.id_classe = classe.id;</pre>
        <p>Résultat : chaque élève est apparié à sa classe.</p>
        <table>
          <tr><th>eleve.nom</th><th>classe.nom</th></tr>
          <tr><td>Ada</td><td>TG1</td></tr>
          <tr><td>Alan</td><td>TG1</td></tr>
          <tr><td>Grace</td><td>1G2</td></tr>
          <tr><td>Linus</td><td>1G2</td></tr>
        </table>
        <p>La condition <strong>ON</strong> dit <em>comment</em> apparier les lignes (clé étrangère = clé primaire). C'est l'opération la plus puissante de SQL : elle reconstitue l'information éclatée entre plusieurs tables.</p>`,
        code: `eleve = [
    {"nom": "Ada",   "id_classe": 2},
    {"nom": "Alan",  "id_classe": 2},
    {"nom": "Grace", "id_classe": 1},
    {"nom": "Linus", "id_classe": 1},
]
classe = [
    {"id": 1, "nom": "1G2"},
    {"id": 2, "nom": "TG1"},
]

# Équivaut à : SELECT eleve.nom, classe.nom FROM eleve JOIN classe ON eleve.id_classe = classe.id;
for e in eleve:
    for c in classe:
        if e["id_classe"] == c["id"]:        # la condition ON
            print(e["nom"], "->", c["nom"])`,
      },
      {
        title: "Modifier la base : INSERT, UPDATE, DELETE",
        html: `
        <p>SQL ne sert pas qu'à lire : il <strong>modifie</strong> aussi les données (on parle de langage de <em>manipulation</em>).</p>
        <p><strong>Ajouter</strong> une ligne avec <strong>INSERT</strong> :</p>
        <pre class="sql">INSERT INTO eleve (id, nom, id_classe, moyenne)
VALUES (5, 'Margaret', 2, 17.0);</pre>
        <p><strong>Modifier</strong> des lignes existantes avec <strong>UPDATE</strong> (le <code>WHERE</code> est crucial : sans lui, <em>toutes</em> les lignes sont changées !) :</p>
        <pre class="sql">UPDATE eleve SET moyenne = 10.5 WHERE nom = 'Linus';</pre>
        <p><strong>Supprimer</strong> des lignes avec <strong>DELETE</strong> :</p>
        <pre class="sql">DELETE FROM eleve WHERE moyenne &lt; 10;</pre>
        <p class="warnbox">⚠️ Erreur classique et dangereuse : un <code>UPDATE</code> ou un <code>DELETE</code> <strong>sans WHERE</strong> s'applique à toute la table. Toujours écrire (et vérifier) la condition d'abord.</p>`,
      },
      {
        title: "Mémo SQL",
        html: `
        <p>L'essentiel à savoir lire et écrire pour l'épreuve :</p>
        <table>
          <tr><th>Objectif</th><th>SQL</th></tr>
          <tr><td>Choisir des colonnes / lignes</td><td><code>SELECT … FROM … WHERE …</code></td></tr>
          <tr><td>Trier</td><td><code>ORDER BY col [ASC|DESC]</code></td></tr>
          <tr><td>Compter / moyenne / extrêmes</td><td><code>COUNT(*)</code>, <code>AVG(col)</code>, <code>MIN</code>, <code>MAX</code>, <code>SUM</code></td></tr>
          <tr><td>Agréger par paquets</td><td><code>GROUP BY col</code></td></tr>
          <tr><td>Croiser deux tables</td><td><code>JOIN autre ON cle_etrangere = cle_primaire</code></td></tr>
          <tr><td>Ajouter / modifier / supprimer</td><td><code>INSERT INTO</code>, <code>UPDATE … SET … WHERE</code>, <code>DELETE FROM … WHERE</code></td></tr>
        </table>
        <p class="note">🎯 Pour pratiquer du <strong>vrai</strong> SQL (et pas seulement l'équivalent Python), ouvre la base « lycée » dans <strong>DB Browser for SQLite</strong> ou avec le module <code>sqlite3</code> de Python sur Capytale/Thonny — voir l'encart « Coder pour de vrai » de la rubrique Progression.</p>`,
      },
    ],
  },

  /* ============================================================= 4 */
  {
    id: "term-archi-reseaux",
    num: 4,
    emoji: "🖧",
    title: "Architectures matérielles, systèmes d'exploitation et réseaux",
    intro:
      "Sous le code, il y a une machine et un réseau. On approfondit le rôle du système d'exploitation (processus, ordonnancement) et le fonctionnement d'Internet (paquets, routage, sécurisation des échanges).",
    capacites: [
      "Décrire les principales caractéristiques d'un processus ; mettre en évidence le rôle de l'ordonnanceur et simuler son fonctionnement (ex. tourniquet / round-robin).",
      "Identifier une situation d'interblocage (deadlock).",
      "Utiliser quelques commandes du système d'exploitation pour gérer les processus et les fichiers.",
      "Décrire l'acheminement des données par paquets et le rôle des protocoles de routage : RIP (nombre de sauts), OSPF (coût des liens, via l'algorithme de Dijkstra).",
      "Décrire les principes du chiffrement symétrique et asymétrique, et l'intérêt des protocoles sécurisés (HTTPS).",
    ],
    sections: [
      {
        title: "Le système d'exploitation : chef d'orchestre de la machine",
        html: `
        <p>Entre le <strong>matériel</strong> (processeur, mémoire, disque, réseau) et les <strong>applications</strong>, il y a un logiciel essentiel : le <strong>système d'exploitation</strong> (OS) — Linux, Windows, macOS, Android…</p>
        <p>Son rôle est d'<strong>abstraire</strong> et de <strong>partager</strong> les ressources entre tous les programmes qui tournent en même temps :</p>
        <ul>
          <li>gérer les <strong>processus</strong> (les programmes en cours d'exécution) et leur donner du temps de calcul ;</li>
          <li>gérer la <strong>mémoire</strong> (donner à chaque programme son espace, sans qu'ils s'écrasent) ;</li>
          <li>gérer les <strong>fichiers</strong> (organisation en dossiers, droits d'accès) et les <strong>périphériques</strong> (clavier, écran, réseau).</li>
        </ul>
        <p class="note">💡 Grâce à l'OS, le programmeur écrit <code>open("notes.txt")</code> sans savoir <em>où</em> ni <em>comment</em> le fichier est physiquement stocké : c'est de l'<strong>abstraction</strong>. On retrouve l'architecture de <strong>von Neumann</strong> (vue en histoire et en Première) que l'OS pilote.</p>`,
      },
      {
        title: "Processus et ordonnancement",
        html: `
        <p>Un <strong>programme</strong> est un fichier sur le disque ; un <strong>processus</strong> est ce programme <em>en train de s'exécuter</em>, avec son état (mémoire, position dans le code…). Un même programme peut donner plusieurs processus.</p>
        <p>Un processeur ne traite qu'<strong>une instruction à la fois par cœur</strong>. Pourtant, des dizaines de processus semblent tourner « en même temps » : l'OS les fait avancer <strong>chacun à son tour, très vite</strong>. C'est le rôle de l'<strong>ordonnanceur</strong> (<em>scheduler</em>).</p>
        <p>Un processus passe par trois états principaux :</p>
        <ul>
          <li><strong>prêt</strong> : il attend son tour de processeur ;</li>
          <li><strong>élu</strong> (actif) : il s'exécute ;</li>
          <li><strong>bloqué</strong> : il attend quelque chose (une saisie, le disque) et laisse la place.</li>
        </ul>
        <p>Une stratégie simple et juste est le <strong>tourniquet</strong> (<em>round-robin</em>) : chaque processus reçoit une petite tranche de temps (<em>quantum</em>), puis on passe au suivant. Simulons-la :</p>`,
        code: `from collections import deque

def tourniquet(processus, quantum):
    """processus = {nom: temps de calcul restant}. Ordonnancement round-robin."""
    file = deque(processus.items())
    horloge = 0
    while file:
        nom, restant = file.popleft()
        execute = min(quantum, restant)
        horloge += execute
        restant -= execute
        print(f"t={horloge:>2} : {nom} s'exécute ({execute} u.) ", end="")
        if restant > 0:
            print(f"-> remis en file (reste {restant})")
            file.append((nom, restant))     # pas fini : retourne à la fin
        else:
            print("-> TERMINÉ")

tourniquet({"P1": 5, "P2": 3, "P3": 4}, quantum=2)`,
      },
      {
        title: "Quand tout se bloque : l'interblocage",
        html: `
        <p>Le partage des ressources peut mal tourner. Imaginez deux processus : A détient le fichier 1 et veut le fichier 2 ; B détient le fichier 2 et veut le fichier 1. Chacun <strong>attend l'autre</strong>… pour toujours. C'est un <strong>interblocage</strong> (<em>deadlock</em>).</p>
        <p>L'image classique est le <strong>dîner des philosophes</strong> (Dijkstra) : des philosophes autour d'une table, une fourchette entre chaque. Si tous saisissent <em>en même temps</em> leur fourchette gauche et attendent la droite, personne ne mange : blocage total.</p>
        <p>Quatre conditions doivent être réunies pour un interblocage (exclusion mutuelle, détention + attente, pas de réquisition, attente circulaire). En <strong>casser une seule</strong> suffit à l'éviter — par exemple imposer un <strong>ordre d'acquisition</strong> des ressources (tout le monde prend toujours la fourchette de plus petit numéro en premier).</p>
        <p class="note">🎯 Activité débranchée : faire jouer les philosophes en îlot avec des stylos pour fourchettes ; provoquer le blocage, puis trouver ensemble une règle qui le supprime.</p>`,
      },
      {
        title: "Dialoguer avec le système : quelques commandes",
        html: `
        <p>Sous Unix/Linux, on pilote le système avec des <strong>commandes</strong> dans un terminal. En voici quelques-unes au programme, utiles pour observer processus et fichiers :</p>
        <table>
          <tr><th>Commande</th><th>Rôle</th></tr>
          <tr><td><code>ls</code> / <code>cd</code> / <code>pwd</code></td><td>lister un dossier / changer de dossier / afficher le dossier courant</td></tr>
          <tr><td><code>ps</code></td><td>lister les processus en cours</td></tr>
          <tr><td><code>top</code></td><td>voir en direct les processus et leur consommation</td></tr>
          <tr><td><code>kill <em>pid</em></code></td><td>terminer le processus de numéro <em>pid</em></td></tr>
          <tr><td><code>chmod</code></td><td>modifier les droits (lecture/écriture/exécution) d'un fichier</td></tr>
          <tr><td><code>cat</code> / <code>mkdir</code> / <code>rm</code></td><td>afficher un fichier / créer un dossier / supprimer</td></tr>
        </table>
        <p class="note">🧪 Ces commandes s'exécutent dans un <strong>vrai terminal</strong> (ou les TP Linux du DIU), pas dans l'éditeur Python du site. Le bouton 🎓 « Première » contient une rubrique TP Linux pas-à-pas ; on en ajoutera pour la Terminale.</p>`,
      },
      {
        title: "Les réseaux : communiquer par paquets",
        html: `
        <p>Comment un message (un mail, une vidéo) traverse-t-il la planète ? Il n'est <strong>pas</strong> envoyé d'un bloc : il est découpé en petits <strong>paquets</strong> qui voyagent <strong>indépendamment</strong>, puis sont réassemblés à l'arrivée. C'est la <strong>commutation de paquets</strong>, le principe d'Internet.</p>
        <p>Avantages : si un câble tombe, les paquets prennent un <strong>autre chemin</strong> ; plusieurs communications partagent les mêmes liens. Chaque paquet porte l'<strong>adresse IP</strong> de destination, comme une enveloppe porte une adresse postale.</p>
        <p>Les données sont <strong>encapsulées</strong> en couches (modèle TCP/IP) : l'application produit le contenu, TCP le découpe et numérote les paquets (pour les remettre dans l'ordre et redemander ceux qui manquent), IP les adresse, et la couche physique les transporte.</p>
        <p class="note">📌 Lien avec l'histoire : ce sont <strong>Cerf et Kahn</strong> (TCP/IP, années 1970) qui ont rendu possible l'interconnexion de réseaux différents — l'« inter-net ».</p>`,
      },
      {
        title: "Le routage : trouver le chemin (RIP, OSPF)",
        html: `
        <p>Entre l'expéditeur et le destinataire, les paquets traversent des <strong>routeurs</strong>. Chaque routeur possède une <strong>table de routage</strong> qui dit, pour chaque destination, <em>vers quel voisin</em> envoyer le paquet. Mais comment construire ces tables ? Grâce à des <strong>protocoles de routage</strong>.</p>
        <ul>
          <li><strong>RIP</strong> (<em>Routing Information Protocol</em>) — par <strong>vecteur de distance</strong> : chaque routeur choisit le chemin avec le <strong>moins de sauts</strong> (de routeurs traversés). Simple, mais ignore le débit des liens.</li>
          <li><strong>OSPF</strong> (<em>Open Shortest Path First</em>) — par <strong>état de liens</strong> : chaque routeur connaît la carte du réseau avec le <strong>coût</strong> de chaque lien, et calcule le plus court chemin… avec l'algorithme de <strong>Dijkstra</strong> (thème Algorithmique !). Plus efficace sur les grands réseaux.</li>
        </ul>
        <p>Autrement dit, le « GPS d'Internet » (OSPF) est exactement l'algorithme de plus court chemin que vous avez codé. Réseau et algorithmique se rejoignent.</p>`,
      },
      {
        title: "Sécuriser les communications : le chiffrement",
        html: `
        <p>Un paquet peut être intercepté. Pour protéger un message, on le <strong>chiffre</strong> : on le rend illisible sans la bonne <strong>clé</strong>. Deux grandes familles.</p>
        <p><strong>1) Chiffrement symétrique</strong> : la <em>même</em> clé sert à chiffrer et à déchiffrer (ex. le code de César, ou l'AES moderne). Rapide, mais il faut <strong>partager la clé secrètement</strong> au préalable — c'est tout le problème.</p>`,
        code: `# Chiffrement symétrique : le code de César (décalage des lettres)
def cesar(texte, cle):
    res = ""
    for c in texte.upper():
        if "A" <= c <= "Z":
            res += chr((ord(c) - ord("A") + cle) % 26 + ord("A"))
        else:
            res += c
    return res

message = "RENDEZ-VOUS A MIDI"
secret = cesar(message, 3)        # on chiffre avec la clé 3
print("Chiffré   :", secret)
print("Déchiffré :", cesar(secret, -3))   # même clé (à l'envers) pour déchiffrer`,
      },
      {
        title: "Chiffrement asymétrique : la clé publique",
        html: `
        <p><strong>2) Chiffrement asymétrique</strong> : chaque personne possède <strong>deux clés liées</strong> — une <strong>clé publique</strong> (distribuée à tous) et une <strong>clé privée</strong> (gardée secrète). Ce qui est chiffré avec la clé publique ne se déchiffre qu'avec la clé privée correspondante (et inversement).</p>
        <p>Génial : pour m'écrire un message secret, n'importe qui utilise <strong>ma clé publique</strong> ; <strong>seul moi</strong>, avec ma clé privée, peux le lire. <strong>Plus besoin de partager un secret à l'avance !</strong> C'est le principe de <strong>RSA</strong>, fondé sur la difficulté de factoriser de très grands nombres.</p>
        <p>En pratique, le Web combine les deux : <strong>HTTPS</strong> (le cadenas 🔒) utilise l'asymétrique pour <em>échanger</em> une clé symétrique, puis le symétrique (rapide) pour le reste de la conversation. La signature numérique, elle, garantit l'<strong>authenticité</strong> (chiffrer avec sa clé privée prouve son identité).</p>
        <p>Pour illustrer le chiffrement symétrique « clé = mot », voici <strong>Vigenère</strong>, plus robuste que César car le décalage change à chaque lettre :</p>`,
        code: `def vigenere(texte, cle, sens=1):
    res = ""
    j = 0
    for c in texte.upper():
        if "A" <= c <= "Z":
            d = (ord(cle[j % len(cle)].upper()) - ord("A")) * sens
            res += chr((ord(c) - ord("A") + d) % 26 + ord("A"))
            j += 1
        else:
            res += c
    return res

secret = vigenere("MESSAGE SECRET", "NSI")        # chiffrer
print("Chiffré   :", secret)
print("Déchiffré :", vigenere(secret, "NSI", -1)) # déchiffrer (sens inverse)`,
      },
    ],
  },

  /* ============================================================= 5 */
  {
    id: "term-langages",
    num: 5,
    emoji: "🐍",
    title: "Langages et programmation",
    intro:
      "On élargit la façon de programmer : différents paradigmes (impératif, fonctionnel, objet), la récursivité, la mise au point rigoureuse, et quelques idées profondes (programmation dynamique, calculabilité).",
    capacites: [
      "Identifier les principaux paradigmes de programmation (impératif, fonctionnel, orienté objet) et choisir celui adapté à un problème.",
      "Écrire un programme récursif et analyser son fonctionnement (et l'optimiser par mémoïsation).",
      "Décomposer un problème en sous-problèmes (modularité) ; mettre au point un programme : spécification, jeux de tests, assertions, mise au point.",
      "Utiliser un système de gestion de versions (suivre les modifications d'un projet, travailler à plusieurs).",
      "Distinguer, sur des exemples, les notions de calculabilité et de décidabilité ; présenter le problème de l'arrêt comme problème indécidable.",
    ],
    sections: [
      {
        title: "Plusieurs façons de programmer : les paradigmes",
        html: `
        <p>Un <strong>paradigme</strong> de programmation est une <em>manière de penser</em> et d'organiser un programme. Un même problème peut se résoudre de plusieurs façons : ce n'est pas le langage qui change, c'est le <strong>style</strong>. Python permet les trois grands paradigmes au programme.</p>
        <ul>
          <li><strong>Impératif</strong> : on décrit une <em>suite d'instructions</em> qui modifient des variables (affectations, boucles, conditions). C'est le style que vous connaissez depuis la Première.</li>
          <li><strong>Fonctionnel</strong> : on combine des <em>fonctions</em> et on évite de modifier les données (on en crée de nouvelles). On s'appuie sur <code>map</code>, <code>filter</code>, les compréhensions, la récursivité.</li>
          <li><strong>Orienté objet (POO)</strong> : on regroupe des <em>données</em> et les <em>fonctions qui agissent dessus</em> dans des <strong>objets</strong>, créés à partir de <strong>classes</strong>.</li>
        </ul>
        <p>Comparons les trois sur la même tâche : <em>« calculer la somme des carrés des nombres de 1 à n »</em>.</p>`,
        code: `n = 5

# 1) Impératif : une boucle qui accumule dans une variable
total = 0
for k in range(1, n + 1):
    total = total + k * k
print("Impératif  :", total)

# 2) Fonctionnel : on transforme puis on agrège, sans variable d'état
print("Fonctionnel:", sum(map(lambda k: k * k, range(1, n + 1))))

# 3) Avec une compréhension (très lisible, proche du fonctionnel)
print("Compréhens.:", sum(k * k for k in range(1, n + 1)))`,
      },
      {
        title: "La programmation orientée objet : classes et objets",
        html: `
        <p>Une <strong>classe</strong> est un <em>moule</em> : elle décrit ce que « savent » et ce que « font » les objets d'un même type. Un <strong>objet</strong> (ou <em>instance</em>) est fabriqué à partir de ce moule.</p>
        <ul>
          <li>Les <strong>attributs</strong> sont les <em>données</em> de l'objet (son état) ;</li>
          <li>les <strong>méthodes</strong> sont les <em>fonctions</em> attachées à l'objet ;</li>
          <li>la méthode spéciale <code>__init__</code> (le <strong>constructeur</strong>) initialise un nouvel objet ; <code>self</code> désigne « l'objet courant ».</li>
        </ul>
        <p>On a déjà croisé la POO dans le thème « Structures de données » (les classes <code>Pile</code> et <code>File</code>) : c'est exactement l'outil pour fabriquer ses propres structures, en cachant l'implémentation derrière des méthodes.</p>`,
        code: `class CompteBancaire:
    def __init__(self, titulaire, solde=0):
        self.titulaire = titulaire   # attribut
        self.solde = solde

    def deposer(self, montant):      # méthode
        self.solde = self.solde + montant

    def retirer(self, montant):
        if montant <= self.solde:
            self.solde = self.solde - montant
        else:
            print("Refusé : solde insuffisant")

    def __str__(self):               # affichage lisible de l'objet
        return f"Compte de {self.titulaire} : {self.solde} €"

c = CompteBancaire("Ada")   # on fabrique un objet
c.deposer(100)
c.retirer(30)
c.retirer(500)              # Refusé
print(c)                    # Compte de Ada : 70 €`,
      },
      {
        title: "La récursivité : une fonction qui s'appelle elle-même",
        html: `
        <p>Une fonction est <strong>récursive</strong> quand, pour résoudre un problème, elle s'appelle elle-même sur un problème <em>plus petit</em>. C'est une façon très naturelle de décrire les choses « définies en fonction d'elles-mêmes ».</p>
        <p>Deux ingrédients sont <strong>obligatoires</strong> :</p>
        <ol>
          <li>un <strong>cas de base</strong> : un cas si simple qu'on répond directement, sans s'appeler ;</li>
          <li>un <strong>appel récursif</strong> qui se <em>rapproche</em> du cas de base (sinon, la fonction ne s'arrête jamais).</li>
        </ol>
        <p>Exemple canonique, la <strong>factorielle</strong> : n! = n × (n−1)! et 0! = 1.</p>`,
        code: `def factorielle(n):
    if n == 0:           # cas de base
        return 1
    return n * factorielle(n - 1)   # appel récursif (n diminue)

print(factorielle(5))    # 120

# Autre exemple : somme des entiers de 1 à n, récursivement
def somme(n):
    if n == 0:
        return 0
    return n + somme(n - 1)

print(somme(100))        # 5050`,
        prof:
          "Faire dérouler factorielle(3) au tableau en empilant les appels (3×, 2×, 1×, puis 0→1) montre la PILE d'appels. Lien direct avec le thème Structures de données : chaque appel attend le résultat du suivant.",
      },
      {
        title: "Récursivité (2) : le piège du coût, et la mémoïsation",
        html: `
        <p>La récursivité peut être <strong>élégante mais coûteuse</strong>. L'exemple classique est la suite de <strong>Fibonacci</strong> : fib(n) = fib(n−1) + fib(n−2), avec fib(0)=0 et fib(1)=1.</p>
        <p>Écrite naïvement, fib(n) <strong>recalcule des milliers de fois</strong> les mêmes valeurs : fib(30) déclenche plus d'un million d'appels ! Le problème : on refait sans cesse le même travail.</p>
        <p>La <strong>mémoïsation</strong> corrige cela : on <strong>retient</strong> (dans un dictionnaire) les résultats déjà calculés pour ne jamais les recalculer. C'est la porte d'entrée de la <strong>programmation dynamique</strong> (revue dans le thème Algorithmique).</p>`,
        code: `# Version naïve : correcte mais TRÈS lente quand n grandit
def fib_naif(n):
    if n < 2:
        return n
    return fib_naif(n - 1) + fib_naif(n - 2)

# Version mémoïsée : on garde en mémoire ce qui est déjà calculé
def fib_memo(n, memo={}):
    if n < 2:
        return n
    if n not in memo:                       # pas encore calculé ?
        memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

print(fib_naif(20))    # 6765 (déjà un peu lent)
print(fib_memo(50))    # 12586269025 (instantané grâce à la mémoïsation)`,
      },
      {
        title: "Modularité : découper pour mieux régner",
        html: `
        <p>Un gros programme ne s'écrit pas d'un bloc. On le <strong>découpe</strong> en fonctions courtes, chacune avec une responsabilité claire — puis on regroupe les fonctions liées dans des <strong>modules</strong> (fichiers <code>.py</code>) que l'on <code>import</code>e.</p>
        <p>Avantages : on <em>lit</em> mieux, on <em>teste</em> chaque morceau séparément, on <em>réutilise</em>, et plusieurs personnes peuvent travailler en parallèle. C'est la compétence <strong>« décomposition »</strong> de la pensée informatique.</p>
        <p>Chaque fonction mérite une <strong>docstring</strong> qui dit ce qu'elle fait (sa <em>spécification</em>), sans dire comment.</p>
        <p class="note">🔁 <strong>Travailler à plusieurs : le gestionnaire de versions.</strong> Dès qu'un projet grossit ou qu'on est plusieurs, on utilise un <strong>système de gestion de versions</strong> comme <strong>git</strong>. Il <em>enregistre l'historique</em> de toutes les modifications (chaque <em>commit</em> = une photo du projet), permet de <em>revenir en arrière</em>, de <em>travailler en parallèle</em> (branches) puis de <em>fusionner</em> les contributions. Des plateformes comme <strong>GitHub</strong> ou <strong>la Forge des Communs Numériques Éducatifs</strong> hébergent ces dépôts. C'est l'outil de base du travail collaboratif sur du code.</p>`,
        code: `def est_premier(n):
    """Renvoie True si n est un nombre premier, False sinon."""
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

def premiers_jusqu_a(limite):
    """Renvoie la liste des nombres premiers < limite (réutilise est_premier)."""
    return [n for n in range(limite) if est_premier(n)]

print(premiers_jusqu_a(30))   # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`,
      },
      {
        title: "Mettre au point : assertions, jeux de tests, doctest",
        html: `
        <p>Un programme qui « tourne » n'est pas forcément <strong>correct</strong>. La mise au point consiste à <strong>chercher activement</strong> les cas où il échoue.</p>
        <ul>
          <li><strong>assert condition</strong> : vérifie une propriété ; si elle est fausse, le programme s'arrête net avec une erreur. Idéal pour <em>préconditions</em> et <em>tests</em>.</li>
          <li><strong>Jeu de tests</strong> : une liste d'« entrée → résultat attendu » couvrant les cas simples <em>et</em> les cas limites (0, liste vide, valeur négative…).</li>
          <li><strong>doctest</strong> : on écrit des exemples directement dans la docstring ; Python peut les exécuter pour vérifier qu'ils donnent bien le résultat annoncé.</li>
        </ul>
        <p class="warnbox">⚠️ Le réflexe d'expert : tester d'abord ce qui <em>pourrait casser</em> (le vide, le zéro, le négatif, le très grand), pas seulement le cas « qui marche ».</p>`,
        code: `def moyenne(notes):
    """Moyenne d'une liste non vide de notes.

    >>> moyenne([10, 20])
    15.0
    >>> moyenne([12])
    12.0
    """
    assert len(notes) > 0, "la liste de notes ne doit pas être vide"
    return sum(notes) / len(notes)

# Jeu de tests par assertions
assert moyenne([10, 20]) == 15.0
assert moyenne([12]) == 12.0
print("Tous les tests passent ✅")

# Vérifier les exemples de la docstring (doctest)
import doctest
print(doctest.testmod())   # TestResults(failed=0, attempted=2)`,
      },
      {
        title: "Calculabilité & décidabilité : les limites du calcul",
        html: `
        <p>Question vertigineuse : <strong>existe-t-il des problèmes qu'aucun programme ne pourra jamais résoudre</strong>, même avec un ordinateur infiniment rapide ? La réponse, démontrée par <strong>Alan Turing</strong> en 1936, est <strong>oui</strong>.</p>
        <p>Un problème est <strong>décidable</strong> s'il existe un algorithme qui, pour <em>toute</em> entrée, répond « oui » ou « non » en un temps fini. Le plus célèbre problème <strong>indécidable</strong> est le <strong>problème de l'arrêt</strong> :</p>
        <p class="note">🛑 <strong>Problème de l'arrêt :</strong> peut-on écrire un programme <code>arrete?(P, e)</code> qui, en lisant le code d'un programme <code>P</code> et une entrée <code>e</code>, dirait toujours correctement si <code>P</code> <em>s'arrête</em> ou <em>tourne à l'infini</em> sur <code>e</code> ? Turing a prouvé qu'un tel programme <strong>ne peut pas exister</strong>.</p>
        <p>L'idée de la preuve (par l'absurde) : si <code>arrete?</code> existait, on pourrait construire un programme « diabolique » qui s'arrête <em>si et seulement si</em> il ne s'arrête pas — une contradiction. Donc l'hypothèse de départ est fausse.</p>
        <p>Conséquence très concrète : il <strong>n'existera jamais</strong> de logiciel parfait capable de détecter à coup sûr toutes les boucles infinies (ou tous les virus) dans n'importe quel programme. Certaines limites ne sont pas techniques mais <strong>mathématiques</strong>.</p>
        <p class="note">🎯 Activité débranchée : faire « jouer » le paradoxe avec une phrase auto-référente (« cette phrase est fausse ») pour faire sentir la contradiction du programme diabolique.</p>`,
      },
    ],
  },

  /* ============================================================= 6 */
  {
    id: "term-algo",
    num: 6,
    emoji: "🧩",
    title: "Algorithmique",
    intro:
      "Le cœur de la Terminale : des stratégies générales pour résoudre des problèmes — diviser pour régner, programmation dynamique, algorithmes sur les graphes — et la mesure de leur coût.",
    capacites: [
      "Évaluer et comparer le coût (en temps) de plusieurs algorithmes résolvant un même problème (notation en grand O).",
      "Mettre en œuvre la stratégie « diviser pour régner » : recherche dichotomique, tri fusion.",
      "Mettre en œuvre la programmation dynamique sur des exemples (rendu de monnaie, etc.).",
      "Parcourir un graphe et y chercher un plus court chemin (algorithme de Dijkstra).",
      "Mettre en œuvre l'algorithme des k plus proches voisins (k-NN).",
      "Mettre en œuvre un algorithme de recherche textuelle (recherche d'un motif dans un texte).",
    ],
    sections: [
      {
        title: "Évaluer le coût d'un algorithme (complexité)",
        html: `
        <p>Pour un même problème, plusieurs algorithmes corrects peuvent exister — mais ils ne se valent pas. Le <strong>coût</strong> (ou <strong>complexité</strong>) mesure le nombre d'opérations en fonction de la <strong>taille des données</strong> <code>n</code>. On l'exprime en « grand O » :</p>
        <table>
          <tr><th>Notation</th><th>Nom</th><th>Exemple</th></tr>
          <tr><td>O(1)</td><td>constant</td><td>accéder à <code>liste[i]</code>, empiler/dépiler</td></tr>
          <tr><td>O(log n)</td><td>logarithmique</td><td>recherche dichotomique (on divise par 2)</td></tr>
          <tr><td>O(n)</td><td>linéaire</td><td>parcourir une liste une fois</td></tr>
          <tr><td>O(n log n)</td><td>quasi-linéaire</td><td>tri fusion</td></tr>
          <tr><td>O(n²)</td><td>quadratique</td><td>deux boucles imbriquées (tri par sélection)</td></tr>
        </table>
        <p>On ne chronomètre pas : on <strong>compte les opérations</strong> et on garde l'<em>ordre de grandeur</em>. Vérifions sur deux algorithmes le nombre de comparaisons pour trouver un doublon.</p>`,
        code: `def a_un_doublon_lent(t):
    """Compare toutes les paires : O(n²)."""
    comparaisons = 0
    for i in range(len(t)):
        for j in range(i + 1, len(t)):
            comparaisons += 1
            if t[i] == t[j]:
                return True, comparaisons
    return False, comparaisons

def a_un_doublon_rapide(t):
    """Utilise un ensemble : O(n)."""
    vus = set()
    operations = 0
    for x in t:
        operations += 1
        if x in vus:
            return True, operations
        vus.add(x)
    return False, operations

donnees = list(range(1000)) + [500]   # un doublon à la fin
print("O(n²) :", a_un_doublon_lent(donnees)[1], "comparaisons")
print("O(n)  :", a_un_doublon_rapide(donnees)[1], "opérations")`,
      },
      {
        title: "Diviser pour régner : le principe",
        html: `
        <p><strong>Diviser pour régner</strong> est une stratégie en trois temps :</p>
        <ol>
          <li><strong>Diviser</strong> le problème en sous-problèmes plus petits du même type ;</li>
          <li><strong>Régner</strong> : résoudre chaque sous-problème (souvent par récursivité) ;</li>
          <li><strong>Combiner</strong> les solutions pour obtenir la solution globale.</li>
        </ol>
        <p>Cette idée, très puissante, mène à des algorithmes efficaces (souvent O(n log n) ou O(log n)) : la <strong>recherche dichotomique</strong> et le <strong>tri fusion</strong> en sont les deux exemples emblématiques du programme, que nous détaillons ensuite.</p>
        <p class="note">💡 Le « log n » apparaît dès qu'on <strong>coupe le problème en deux</strong> à chaque étape : couper 1000 éléments en deux jusqu'à 1 ne prend que ≈ 10 étapes (car 2¹⁰ ≈ 1000).</p>`,
      },
      {
        title: "Recherche dichotomique (dans un tableau trié)",
        html: `
        <p>Chercher un mot dans un dictionnaire papier : on ne lit pas page après page ! On ouvre au milieu, on compare, et on élimine d'un coup <strong>la moitié</strong>. C'est la <strong>recherche dichotomique</strong> — qui exige que le tableau soit <strong>trié</strong>.</p>
        <p>À chaque étape, l'intervalle de recherche est divisé par deux : le coût est en <strong>O(log n)</strong>. Sur un million d'éléments, ≈ 20 comparaisons suffisent (contre un million pour une recherche linéaire).</p>`,
        code: `def recherche_dichotomique(t, cible):
    """Renvoie l'indice de cible dans le tableau trié t, ou -1 si absente."""
    gauche, droite = 0, len(t) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if t[milieu] == cible:
            return milieu
        elif t[milieu] < cible:
            gauche = milieu + 1     # on élimine la moitié gauche
        else:
            droite = milieu - 1     # on élimine la moitié droite
    return -1

tab = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(recherche_dichotomique(tab, 23))   # 5
print(recherche_dichotomique(tab, 100))  # -1 (absente)`,
      },
      {
        title: "Le tri fusion (merge sort)",
        html: `
        <p>Le <strong>tri fusion</strong> applique « diviser pour régner » au tri :</p>
        <ol>
          <li><strong>Diviser</strong> : couper la liste en deux moitiés ;</li>
          <li><strong>Régner</strong> : trier chaque moitié (récursivement) ;</li>
          <li><strong>Combiner</strong> : <em>fusionner</em> les deux moitiés triées en une seule liste triée.</li>
        </ol>
        <p>Son coût est <strong>O(n log n)</strong> : bien meilleur que les tris « naïfs » en O(n²) dès que la liste grandit. La clé est l'étape de <strong>fusion</strong>, qui parcourt les deux moitiés en parallèle.</p>`,
        code: `def fusionner(a, b):
    """Fusionne deux listes déjà triées en une seule liste triée."""
    resultat = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i]); i += 1
        else:
            resultat.append(b[j]); j += 1
    return resultat + a[i:] + b[j:]   # on ajoute le reste

def tri_fusion(t):
    if len(t) <= 1:                   # cas de base : déjà trié
        return t
    milieu = len(t) // 2
    gauche = tri_fusion(t[:milieu])   # diviser + régner
    droite = tri_fusion(t[milieu:])
    return fusionner(gauche, droite)  # combiner

print(tri_fusion([38, 27, 43, 3, 9, 82, 10]))   # [3, 9, 10, 27, 38, 43, 82]`,
      },
      {
        title: "Programmation dynamique : le rendu de monnaie",
        html: `
        <p>La <strong>programmation dynamique</strong> résout un problème en le décomposant en sous-problèmes <em>qui se répètent</em>, et en <strong>mémorisant</strong> leurs solutions (comme la mémoïsation de Fibonacci).</p>
        <p>Exemple : rendre une somme avec le <strong>moins de pièces possible</strong>. L'algorithme « glouton » (prendre la plus grosse pièce à chaque fois) marche pour l'euro… mais <strong>échoue</strong> pour d'autres systèmes : avec des pièces {1, 3, 4}, rendre 6, le glouton donne 4+1+1 (3 pièces) alors que 3+3 suffit (2 pièces) !</p>
        <p>La programmation dynamique, elle, garantit l'<strong>optimum</strong> : on calcule le nombre minimal de pièces pour <em>toutes</em> les sommes de 0 à n, en réutilisant les résultats précédents.</p>`,
        code: `def rendu_monnaie(pieces, montant):
    """Nombre minimal de pièces pour faire 'montant' (ou l'infini si impossible)."""
    INF = float("inf")
    mini = [0] + [INF] * montant       # mini[s] = nb min de pièces pour la somme s
    for s in range(1, montant + 1):
        for p in pieces:
            if p <= s and mini[s - p] + 1 < mini[s]:
                mini[s] = mini[s - p] + 1
    return mini[montant]

print(rendu_monnaie([1, 3, 4], 6))    # 2  (3 + 3, pas 4 + 1 + 1)
print(rendu_monnaie([1, 2, 5], 11))   # 3  (5 + 5 + 1)`,
      },
      {
        title: "Plus court chemin dans un graphe : Dijkstra",
        html: `
        <p>On reprend les <strong>graphes</strong> du thème Structures de données, mais cette fois les arêtes portent un <strong>poids</strong> (distance, durée, coût). Question : quel est le chemin de <strong>coût total minimal</strong> entre deux sommets ? C'est le problème du <strong>plus court chemin</strong>, au cœur des GPS et du routage réseau.</p>
        <p>L'<strong>algorithme de Dijkstra</strong> le résout : on part de la source, et on « visite » toujours le sommet <em>le plus proche encore non traité</em>, en mettant à jour les distances de ses voisins. Une <strong>file de priorité</strong> (module <code>heapq</code>) rend l'opération efficace.</p>`,
        code: `import heapq

def dijkstra(graphe, depart):
    """Plus courtes distances de 'depart' vers tous les sommets."""
    dist = {sommet: float("inf") for sommet in graphe}
    dist[depart] = 0
    a_traiter = [(0, depart)]          # file de priorité (distance, sommet)
    while a_traiter:
        d, u = heapq.heappop(a_traiter)  # le sommet le plus proche
        if d > dist[u]:
            continue
        for voisin, poids in graphe[u].items():
            if d + poids < dist[voisin]:
                dist[voisin] = d + poids
                heapq.heappush(a_traiter, (dist[voisin], voisin))
    return dist

reseau = {
    "A": {"B": 5, "C": 1},
    "B": {"A": 5, "C": 2, "D": 1},
    "C": {"A": 1, "B": 2, "D": 4},
    "D": {"B": 1, "C": 4},
}
print(dijkstra(reseau, "A"))   # {'A': 0, 'C': 1, 'B': 3, 'D': 4}`,
      },
      {
        title: "Les k plus proches voisins (k-NN)",
        html: `
        <p>Comment un programme <strong>classe</strong>-t-il un objet nouveau (un mail en spam/non-spam, une fleur par espèce) ? Une méthode simple et efficace : les <strong>k plus proches voisins</strong>.</p>
        <p>Principe : on dispose d'exemples déjà étiquetés. Pour un nouveau point, on calcule sa <strong>distance</strong> à tous les exemples, on garde les <strong>k plus proches</strong>, et on lui attribue l'étiquette <strong>majoritaire</strong> parmi ces voisins. C'est une première brique d'<strong>intelligence artificielle</strong> (apprentissage supervisé).</p>`,
        code: `def distance(p, q):
    return ((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2) ** 0.5

def knn(exemples, point, k=3):
    """exemples = [((x, y), etiquette), ...] ; renvoie l'étiquette majoritaire."""
    voisins = sorted(exemples, key=lambda e: distance(e[0], point))[:k]
    etiquettes = [etq for (_, etq) in voisins]
    return max(set(etiquettes), key=etiquettes.count)

exemples = [((1, 1), "A"), ((2, 1), "A"), ((1, 2), "A"),
            ((6, 6), "B"), ((7, 6), "B"), ((6, 7), "B")]
print(knn(exemples, (2, 2)))   # A (entouré de A)
print(knn(exemples, (6, 5)))   # B (entouré de B)`,
      },
      {
        title: "Recherche d'un motif dans un texte",
        html: `
        <p>Retrouver un mot (<em>motif</em>) dans un texte est une opération omniprésente (Ctrl-F, moteurs de recherche, ADN). L'approche <strong>naïve</strong> essaie le motif à chaque position du texte.</p>
        <p>Son coût peut atteindre O(n×m) (texte de taille n, motif de taille m). Des algorithmes plus malins (<strong>Boyer-Moore</strong>) évitent des comparaisons inutiles en se décalant de plusieurs positions d'un coup — mais l'idée de base se comprend déjà très bien avec la version naïve.</p>`,
        code: `def recherche_naive(texte, motif):
    """Renvoie la liste des positions où 'motif' apparaît dans 'texte'."""
    positions = []
    n, m = len(texte), len(motif)
    for i in range(n - m + 1):
        if texte[i:i + m] == motif:   # le motif commence-t-il ici ?
            positions.append(i)
    return positions

print(recherche_naive("abracadabra", "abra"))   # [0, 7]
print(recherche_naive("aaaa", "aa"))            # [0, 1, 2]`,
      },
    ],
  },
];
