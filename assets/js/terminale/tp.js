/* =====================================================================
   TP GUIDÉS — Terminale NSI
   TP pas-à-pas au format de la Première : énoncé + code (exécutable si
   run:true et lang python) + questions + corrections masquées.
   Les TP SQL n'ont volontairement AUCUNE cellule exécutable : Pyodide ne
   charge pas sqlite3 par défaut (module « unvendored », import impossible
   sans loadPackage) — les requêtes s'écrivent sur papier / DB Browser.
   Les globals LOGISIM_*, ARCHI_PDFS et MINI_PROJETS restent absents
   (gardés par typeof dans app.js) : leurs boutons restent masqués.
   ===================================================================== */

const TP_SOURCE = "TP de Terminale NSI — préparation à l'épreuve pratique";

const GUIDED_TP = [
  /* ===================== Structures de données ===================== */
  {
    id: "term-tp-pile-file",
    theme: "term-structures",
    lang: "python",
    titre: "TP — Pile & file : de l'interface à l'implémentation",
    intro:
      "Objectif : programmer une pile (LIFO) puis une file (FIFO) en distinguant l'INTERFACE (ce que la structure sait faire) de l'IMPLÉMENTATION (comment on le programme), puis utiliser une pile pour résoudre un vrai problème.",
    steps: [
      {
        num: "1", titre: "L'interface de la pile, implémentée avec une list", run: true,
        code: `# INTERFACE d'une pile : creer_pile, est_vide, empiler, depiler.
# IMPLÉMENTATION choisie : une list Python, sommet = FIN de la liste
# (append et pop y sont très efficaces : coût O(1)).

def creer_pile():
    return []

def est_vide(p):
    return p == []

def empiler(p, x):
    p.append(x)

def depiler(p):
    assert not est_vide(p), "on ne dépile pas une pile vide !"
    return p.pop()

p = creer_pile()
empiler(p, "A")
empiler(p, "B")
empiler(p, "C")
print(depiler(p))   # ?
print(depiler(p))   # ?
empiler(p, "D")
print(depiler(p))   # ?
print(est_vide(p))  # ?`,
        questions: [
          "Avant d'exécuter : qu'affichent les quatre print ? Vérifie ensuite. Quel principe (LIFO/FIFO) reconnais-tu ?",
          "L'utilisateur de la pile a-t-il besoin de savoir qu'elle est programmée avec une list ? Comment s'appelle cette séparation ?",
          "Pourquoi choisir la FIN de la liste comme sommet plutôt que le début (indice 0) ?",
        ],
        correction: [
          "C, B, D puis False. Le dernier élément empilé sort en premier : c'est le LIFO (Last In, First Out). D, empilé après le dépilage de B, sort avant A.",
          "Non : il n'utilise que les quatre fonctions de l'interface. C'est la séparation interface / implémentation : on peut changer l'implémentation (liste chaînée, tableau…) sans toucher au code qui UTILISE la pile.",
          "append et pop en fin de liste sont en O(1) (temps constant). Insérer ou retirer en tête (indice 0) obligerait Python à décaler tous les éléments : coût O(n).",
        ],
      },
      {
        num: "2", titre: "La file : pourquoi pas une simple list ?", run: true,
        code: `# Une FILE (FIFO) : on entre d'un côté, on sort de l'autre.
# Avec une list, defiler = pop(0)... qui décale TOUS les éléments : O(n).
# Le module standard collections fournit deque, efficace AUX DEUX bouts.

from collections import deque

def creer_file():
    return deque()

def enfiler(f, x):
    f.append(x)          # on entre par la droite...

def defiler(f):
    assert len(f) > 0, "on ne défile pas une file vide !"
    return f.popleft()   # ... on sort par la gauche : FIFO

def est_vide(f):
    return len(f) == 0

# La file d'attente de l'imprimante du lycée :
impression = creer_file()
enfiler(impression, "devoir_ada.pdf")
enfiler(impression, "tp_tim.pdf")
enfiler(impression, "cours_lou.pdf")
print(defiler(impression))   # ?
enfiler(impression, "poeme_eve.pdf")
print(defiler(impression))   # ?
print(defiler(impression))   # ?
print(defiler(impression))   # ?`,
        note: "deque (« double-ended queue ») fait partie de la bibliothèque standard : append et popleft sont tous deux en O(1). C'est l'implémentation de référence d'une file en Python.",
        questions: [
          "Dans quel ordre les documents sortent-ils ? Est-ce le même principe qu'à l'étape 1 ?",
          "Pourquoi une pile serait-elle une très mauvaise file d'impression ?",
          "Quel est le coût de defiler avec deque ? Et si on avait utilisé liste.pop(0) ?",
        ],
        correction: [
          "devoir_ada, tp_tim, cours_lou, poeme_eve : premier arrivé, premier servi (FIFO). C'est l'inverse de la pile : ici l'ordre d'arrivée est respecté.",
          "Avec une pile (LIFO), le dernier document envoyé sortirait en premier : celui qui a lancé son impression en premier attendrait indéfiniment tant que d'autres arrivent.",
          "deque.popleft() est en O(1). liste.pop(0) est en O(n) car tous les éléments restants sont décalés d'une case : sur une file de 100 000 éléments, la différence est énorme.",
        ],
      },
      {
        num: "3", titre: "Mini-défi — parenthèses bien fermées (avec une pile)", run: true,
        code: `# DÉFI (style épreuve pratique) : écrire bien_parenthesee(expr) qui
# renvoie True si chaque "(" est refermée par une ")" dans le bon ordre.
# Idée : parcourir expr ; "(" -> empiler ; ")" -> dépiler (si possible !).
# À la fin, la pile doit être vide.

def bien_parenthesee(expr):
    pile = []
    for c in expr:
        pass   # À COMPLÉTER : traiter "(" et ")" (les autres caractères sont ignorés)
    return None  # À COMPLÉTER : quelle condition finale ?

# Décommente les tests quand ta fonction est écrite :
# assert bien_parenthesee("(2 + 3) * (4 - 1)") == True
# assert bien_parenthesee("((a + b) * c)") == True
# assert bien_parenthesee("(2 + 3)) * (") == False
# assert bien_parenthesee(")(") == False
# assert bien_parenthesee("") == True
# print("Tous les tests passent !")`,
        questions: [
          "Pourquoi une pile est-elle exactement la bonne structure ici ?",
          "Quels sont les DEUX cas d'échec que ta fonction doit détecter ?",
          "Complète la fonction et fais passer les 5 asserts.",
        ],
        correction: [
          "Une parenthèse fermante doit correspondre à la DERNIÈRE ouvrante non encore fermée : « la dernière ouverte est la première fermée », c'est exactement le LIFO.",
          "1) Une \")\" arrive alors que la pile est vide (fermeture sans ouverture, ex. \")(\"). 2) À la fin du parcours, la pile n'est pas vide (ouvertures jamais refermées, ex. \"((\").",
          {
            code: `def bien_parenthesee(expr):
    pile = []
    for c in expr:
        if c == "(":
            pile.append(c)
        elif c == ")":
            if pile == []:
                return False   # fermeture sans ouverture
            pile.pop()
    return pile == []          # tout doit être refermé

assert bien_parenthesee("(2 + 3) * (4 - 1)") == True
assert bien_parenthesee("((a + b) * c)") == True
assert bien_parenthesee("(2 + 3)) * (") == False
assert bien_parenthesee(")(") == False
assert bien_parenthesee("") == True
print("Tous les tests passent !")`,
          },
        ],
      },
      {
        num: "4", titre: "Bonus — plusieurs types de délimiteurs", bonus: true,
        code: `# Bonus : gérer (), [] et {} — la fermante doit correspondre à la
# BONNE ouvrante : "([)]" est mal parenthésée, "([])" est correcte.

def bien_delimitee(expr):
    correspond = {")": "(", "]": "[", "}": "{"}
    pile = []
    for c in expr:
        if c in "([{":
            pile.append(c)
        elif c in ")]}":
            if pile == [] or pile.pop() != correspond[c]:
                return False
    return pile == []

assert bien_delimitee("([{}])") == True
assert bien_delimitee("([)]") == False
assert bien_delimitee("{[()()]}") == True
print("Bonus OK !")`,
        run: true,
        questions: ["Pourquoi \"([)]\" est-elle refusée alors qu'elle contient autant d'ouvrantes que de fermantes ?"],
        correction: [
          "Compter ne suffit plus : quand la \")\" arrive, le sommet de la pile est \"[\" (la dernière ouverte), pas \"(\". L'ORDRE d'imbrication est vérifié grâce à la pile, pas seulement le nombre.",
        ],
      },
    ],
  },

  /* ===================== Algorithmique ===================== */
  {
    id: "term-tp-tri-fusion",
    theme: "term-algo",
    lang: "python",
    titre: "TP — Tri fusion pas à pas",
    intro:
      "Objectif : construire le tri fusion en deux temps — d'abord la fusion de deux listes triées, puis la récursion « diviser pour régner » — et mesurer son coût en comptant les appels.",
    steps: [
      {
        num: "1", titre: "Fusionner deux listes déjà triées", run: true,
        code: `# Étape clé : deux listes TRIÉES peuvent être fusionnées en une seule
# liste triée en un seul parcours (deux indices qui avancent).

def fusion(a, b):
    resultat = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i])
            i = i + 1
        else:
            resultat.append(b[j])
            j = j + 1
    # une des deux listes est épuisée : on recopie la fin de l'autre
    resultat.extend(a[i:])
    resultat.extend(b[j:])
    return resultat

assert fusion([1, 4, 9], [2, 3, 10]) == [1, 2, 3, 4, 9, 10]
assert fusion([], [5, 6]) == [5, 6]
assert fusion([2, 2], [2]) == [2, 2, 2]
print(fusion([1, 3, 5, 7], [2, 4, 6]))`,
        questions: [
          "Déroule fusion([1, 4, 9], [2, 3, 10]) à la main : donne les valeurs successives de i, j et resultat.",
          "Pourquoi la comparaison a[i] <= b[j] (et pas <) est-elle importante pour les doublons ?",
          "Quel est le coût de fusion en fonction de len(a) + len(b) ? Justifie.",
        ],
        correction: [
          "(i=0,j=0) 1≤2 → [1] ; (1,0) 4>2 → [1,2] ; (1,1) 4>3 → [1,2,3] ; (1,2) 4≤10 → [1,2,3,4] ; (2,2) 9≤10 → [1,2,3,4,9] ; i épuise a, on recopie [10] → [1,2,3,4,9,10].",
          "Avec <=, en cas d'égalité on prend d'abord l'élément de a : chaque élément est traité une seule fois et les doublons sont tous conservés. (Cela rend aussi le tri « stable ».)",
          "O(n) avec n = len(a) + len(b) : à chaque tour de boucle, exactement un élément rejoint resultat, et chaque élément n'y entre qu'une fois.",
        ],
      },
      {
        num: "2", titre: "Le tri fusion récursif (diviser pour régner)", run: true,
        code: `# DIVISER : couper la liste en deux moitiés.
# RÉGNER   : les trier (récursivement !).
# COMBINER : fusionner les deux moitiés triées.

def fusion(a, b):
    resultat = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i]); i += 1
        else:
            resultat.append(b[j]); j += 1
    resultat.extend(a[i:])
    resultat.extend(b[j:])
    return resultat

def tri_fusion(t):
    if len(t) <= 1:               # cas de base : déjà trié !
        return t
    milieu = len(t) // 2
    gauche = tri_fusion(t[:milieu])
    droite = tri_fusion(t[milieu:])
    return fusion(gauche, droite)

print(tri_fusion([8, 3, 5, 1, 7, 2]))
assert tri_fusion([8, 3, 5, 1, 7, 2]) == [1, 2, 3, 5, 7, 8]
assert tri_fusion([]) == []
assert tri_fusion([42]) == [42]
assert tri_fusion([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]
print("Tri fusion OK !")`,
        questions: [
          "Quel est le cas de base ? Pourquoi une liste de 0 ou 1 élément est-elle « déjà triée » ?",
          "Dessine l'arbre des découpages de [8, 3, 5, 1, 7, 2] : combien de niveaux de découpe ?",
          "Le tri modifie-t-il la liste de départ ? (Ajoute un print pour vérifier.)",
        ],
        correction: [
          "len(t) <= 1 : une liste vide ou à un seul élément ne peut pas être « dans le désordre ». Sans ce cas de base, la récursion ne s'arrêterait jamais (RecursionError).",
          "[8,3,5,1,7,2] → [8,3,5] / [1,7,2] → [8]/[3,5] et [1]/[7,2] → [3]/[5] et [7]/[2] : 3 niveaux de découpe, soit environ log₂(6) ≈ 2,6 arrondi au-dessus. En général : log₂(n) niveaux.",
          "Non : t[:milieu] et t[milieu:] créent des copies, et fusion construit une NOUVELLE liste. La liste d'origine reste intacte (tri non « en place »).",
        ],
      },
      {
        num: "3", titre: "Compter les appels pour « voir » le coût", run: true,
        code: `# Combien de fois tri_fusion est-elle appelée ? Comptons !

compteur = 0

def fusion(a, b):
    resultat = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i]); i += 1
        else:
            resultat.append(b[j]); j += 1
    resultat.extend(a[i:])
    resultat.extend(b[j:])
    return resultat

def tri_fusion(t):
    global compteur
    compteur = compteur + 1
    if len(t) <= 1:
        return t
    milieu = len(t) // 2
    return fusion(tri_fusion(t[:milieu]), tri_fusion(t[milieu:]))

for n in [4, 8, 16, 32, 64]:
    compteur = 0
    tri_fusion(list(range(n, 0, -1)))   # liste n, n-1, ..., 1
    print("n =", n, "-> appels :", compteur)`,
        note: "Pour une liste de taille n (puissance de 2), on observe 2n − 1 appels : le nombre d'appels reste LINÉAIRE. Le coût total O(n log n) vient des fusions : log₂(n) niveaux × O(n) de fusion par niveau.",
        questions: [
          "Quelle formule relie le nombre d'appels à n ? Vérifie-la sur les valeurs affichées.",
          "Le nombre d'appels dépend-il de l'ordre initial de la liste (triée, inversée, mélangée) ?",
          "Tri par sélection : O(n²). Tri fusion : O(n log n). Pour n = 1 000 000, environ combien d'opérations chacun ?",
        ],
        correction: [
          "appels = 2n − 1 : 7 pour n=4, 15 pour n=8, 31, 63, 127… Chaque appel sur une liste de taille ≥ 2 engendre deux appels sur des moitiés, jusqu'aux n feuilles de taille 1.",
          "Non : le tri fusion découpe TOUJOURS au milieu, quel que soit le contenu. Son coût est le même dans le meilleur et le pire cas — contrairement à d'autres tris.",
          "Sélection : n² = 10¹² opérations (des heures). Fusion : n × log₂(n) ≈ 10⁶ × 20 = 2×10⁷ (une fraction de seconde). C'est tout l'enjeu du « diviser pour régner ».",
        ],
      },
      {
        num: "4", titre: "Style épreuve pratique — à toi de jouer", run: true,
        code: `# Exercice type épreuve pratique (exercice 1) : écrire de zéro la
# fonction nb_inferieurs(t, x) qui renvoie le nombre d'éléments de la
# liste TRIÉE t strictement inférieurs à x... en utilisant l'idée de la
# fusion : UN SEUL parcours, on s'arrête dès que t[i] >= x.

def nb_inferieurs(t, x):
    pass   # À COMPLÉTER

# Décommente les tests quand ta fonction est écrite :
# assert nb_inferieurs([1, 3, 5, 7, 9], 6) == 3
# assert nb_inferieurs([1, 3, 5], 10) == 3
# assert nb_inferieurs([4, 5, 6], 2) == 0
# assert nb_inferieurs([], 3) == 0
# print("Épreuve pratique : réussie !")`,
        questions: [
          "Avant de coder : que t'apprennent les asserts sur les paramètres et la valeur de retour ? (le bon réflexe de l'épreuve !)",
          "Écris la fonction, teste au fur et à mesure, puis fais passer les 4 asserts.",
        ],
        correction: [
          "Les asserts donnent la spécification : t est une liste triée (éventuellement vide), x un nombre, et le résultat un ENTIER (un compte, pas une liste). Les cas limites « tous inférieurs » et « aucun » sont testés.",
          {
            code: `def nb_inferieurs(t, x):
    n = 0
    for e in t:
        if e < x:
            n = n + 1
        else:
            break   # t est triée : plus rien d'inférieur ensuite
    return n

assert nb_inferieurs([1, 3, 5, 7, 9], 6) == 3
assert nb_inferieurs([1, 3, 5], 10) == 3
assert nb_inferieurs([4, 5, 6], 2) == 0
assert nb_inferieurs([], 3) == 0
print("Épreuve pratique : réussie !")`,
          },
        ],
      },
    ],
  },

  /* ===================== Bases de données ===================== */
  {
    id: "term-tp-sql",
    theme: "term-bdd",
    lang: "sql",
    titre: "TP — Requêtes SQL sur la base du lycée",
    intro:
      "Objectif : écrire des requêtes SQL sur papier (comme à l'épreuve écrite !) puis les vérifier. Ce TP ne s'exécute pas dans le navigateur : recopie tes requêtes dans DB Browser for SQLite ou dans le module sqlite3 d'un vrai Python pour les tester.",
    steps: [
      {
        num: "1", titre: "SELECT … FROM … WHERE — interroger une table",
        note: `La base du lycée contient la table <strong>eleve</strong> (clé primaire : <code>id_eleve</code>) :
          <table>
            <tr><th>id_eleve</th><th>nom</th><th>classe</th></tr>
            <tr><td>1</td><td>Ada</td><td>TNSI</td></tr>
            <tr><td>2</td><td>Tim</td><td>TG2</td></tr>
            <tr><td>3</td><td>Lou</td><td>TNSI</td></tr>
            <tr><td>4</td><td>Eve</td><td>TG1</td></tr>
            <tr><td>5</td><td>Sam</td><td>TNSI</td></tr>
          </table>`,
        questions: [
          "Écris la requête qui affiche TOUTE la table eleve.",
          "Écris la requête qui donne le nom des élèves de la classe TNSI. Quel est le résultat attendu ?",
          "Écris la requête qui donne le nom et la classe de l'élève n°4.",
        ],
        correction: [
          "SELECT * FROM eleve ; — l'étoile * signifie « toutes les colonnes ». Résultat : les 5 lignes complètes.",
          "SELECT nom FROM eleve WHERE classe = 'TNSI' ; — résultat attendu : Ada, Lou, Sam (3 lignes). Attention : en SQL, les chaînes s'écrivent entre apostrophes simples.",
          "SELECT nom, classe FROM eleve WHERE id_eleve = 4 ; — résultat : Eve | TG1 (une seule ligne, garantie par la clé primaire).",
        ],
      },
      {
        num: "2", titre: "Trier, éliminer les doublons",
        note: "Toujours la table <strong>eleve</strong> de l'étape 1. Deux outils : <code>ORDER BY colonne [DESC]</code> pour trier le résultat, <code>DISTINCT</code> pour supprimer les doublons.",
        questions: [
          "Écris la requête qui donne les noms des élèves dans l'ordre alphabétique.",
          "Écris la requête qui donne la liste des classes SANS doublon. Combien de lignes obtient-on ?",
          "Que renverrait SELECT classe FROM eleve ; sans DISTINCT ?",
        ],
        correction: [
          "SELECT nom FROM eleve ORDER BY nom ; — résultat : Ada, Eve, Lou, Sam, Tim. (ORDER BY nom DESC donnerait l'ordre inverse.)",
          "SELECT DISTINCT classe FROM eleve ; — résultat : TNSI, TG2, TG1 → 3 lignes.",
          "5 lignes, avec TNSI répété 3 fois : sans DISTINCT, une ligne de résultat par ligne de la table.",
        ],
      },
      {
        num: "3", titre: "La jointure — croiser deux tables",
        note: `On ajoute la table <strong>note</strong> (clé primaire <code>id_note</code> ; <code>id_eleve</code> est une <strong>clé étrangère</strong> qui référence eleve) :
          <table>
            <tr><th>id_note</th><th>id_eleve</th><th>matiere</th><th>note</th></tr>
            <tr><td>1</td><td>1</td><td>NSI</td><td>17</td></tr>
            <tr><td>2</td><td>1</td><td>Maths</td><td>15</td></tr>
            <tr><td>3</td><td>2</td><td>Maths</td><td>12</td></tr>
            <tr><td>4</td><td>3</td><td>NSI</td><td>9</td></tr>
            <tr><td>5</td><td>3</td><td>Maths</td><td>14</td></tr>
            <tr><td>6</td><td>4</td><td>NSI</td><td>18</td></tr>
            <tr><td>7</td><td>5</td><td>NSI</td><td>11</td></tr>
            <tr><td>8</td><td>5</td><td>Maths</td><td>8</td></tr>
          </table>
          Schéma de la jointure : <code>SELECT … FROM table1 JOIN table2 ON table1.cle = table2.cle WHERE …</code>`,
        questions: [
          "Pourquoi ne stocke-t-on PAS le nom de l'élève directement dans la table note ?",
          "Écris la requête qui affiche le nom de chaque élève et sa note de NSI. Donne le résultat attendu.",
          "Écris la requête qui donne le nom des élèves ayant eu plus de 12 en Maths.",
        ],
        correction: [
          "Pour éviter la redondance : le nom serait dupliqué à chaque note (risque d'incohérence en cas de faute de frappe ou de changement). La clé étrangère id_eleve suffit à retrouver l'élève : c'est le principe du modèle relationnel.",
          "SELECT eleve.nom, note.note FROM eleve JOIN note ON note.id_eleve = eleve.id_eleve WHERE note.matiere = 'NSI' ; — résultat attendu : Ada 17, Lou 9, Eve 18, Sam 11 (4 lignes).",
          "SELECT eleve.nom FROM eleve JOIN note ON note.id_eleve = eleve.id_eleve WHERE note.matiere = 'Maths' AND note.note > 12 ; — résultat : Ada (15) et Lou (14).",
        ],
      },
      {
        num: "4", titre: "Les fonctions d'agrégation",
        note: "Sur les tables des étapes 1 et 3. Les fonctions d'agrégation résument une colonne en UNE valeur : <code>COUNT(*)</code> (nombre de lignes), <code>AVG</code>, <code>MAX</code>, <code>MIN</code>, <code>SUM</code>.",
        questions: [
          "Écris la requête qui compte le nombre de notes de NSI. Résultat attendu ?",
          "Écris la requête qui donne la moyenne des notes de NSI. Calcule le résultat à la main pour vérifier.",
          "Écris la requête qui donne la meilleure note toutes matières confondues.",
        ],
        correction: [
          "SELECT COUNT(*) FROM note WHERE matiere = 'NSI' ; — résultat : 4.",
          "SELECT AVG(note) FROM note WHERE matiere = 'NSI' ; — résultat : (17 + 9 + 18 + 11) / 4 = 13.75.",
          "SELECT MAX(note) FROM note ; — résultat : 18 (la note de NSI d'Eve).",
        ],
      },
      {
        num: "5", titre: "Modifier la base : INSERT, UPDATE, DELETE",
        note: "⚠️ Ces requêtes MODIFIENT les données : à l'écrit du bac, on te demande souvent de les rédiger ; sur machine, vérifie toujours la clause WHERE avant d'exécuter !",
        questions: [
          "Une nouvelle élève, Zoé, arrive en TNSI : écris la requête qui l'ajoute avec l'identifiant 6.",
          "La note n°4 (le 9 de Lou en NSI) était une erreur de saisie, c'était 12 : écris la requête de correction.",
          "Que se passe-t-il si on exécute DELETE FROM eleve WHERE id_eleve = 5 ; alors que Sam a encore des notes dans la table note ?",
          "Qu'aurait fait UPDATE note SET note = 12 ; (sans WHERE) ? Quelle leçon en tirer ?",
        ],
        correction: [
          "INSERT INTO eleve VALUES (6, 'Zoé', 'TNSI') ; — ou, plus sûr, en nommant les colonnes : INSERT INTO eleve (id_eleve, nom, classe) VALUES (6, 'Zoé', 'TNSI') ;",
          "UPDATE note SET note = 12 WHERE id_note = 4 ; — la clause WHERE cible UNE ligne grâce à la clé primaire.",
          "Le SGBD refuse la suppression : les notes 7 et 8 référencent l'élève 5 via la clé étrangère (contrainte de référence). Il faudrait d'abord supprimer ses notes.",
          "TOUTES les notes de la table seraient remplacées par 12 ! Leçon : sur INSERT/UPDATE/DELETE, relire deux fois la clause WHERE — c'est elle qui délimite les dégâts.",
        ],
      },
    ],
  },

  /* TP adapté du cours DIU EIL « Bases de données » (B. Mermet & G. Simon,
     Université Le Havre Normandie, CC BY-NC-SA) — chapitres « SQL »,
     « Contraintes de référence » et « SQL et Python ». Toutes les requêtes
     des corrections ont été exécutées sur ludotheque.sql (SQLite 3). */
  {
    id: "term-tp-ludotheque",
    theme: "term-bdd",
    lang: "sql",
    titre: "TP — La ludothèque : jointures, associations N-M et SQL depuis Python",
    intro:
      "Deuxième base pour t'entraîner, adaptée du cours du DIU EIL (Université Le Havre Normandie, licence CC BY-NC-SA) : une ludothèque en 8 tables, avec de vraies associations N-M. Écris chaque requête sur papier, puis vérifie-la dans DB Browser for SQLite (exécute d'abord ludotheque.sql, dans le kit du thème) ou dans Thonny avec ludotheque.db et le module sqlite3. Ce TP ne s'exécute pas dans le navigateur.",
    steps: [
      {
        num: "1", titre: "Découvrir la base : schéma, projection, tri",
        note: `Le schéma complet (clé primaire soulignée, # = clé étrangère) :
          <pre class="sql">editeur(<u>idEditeur</u>, nomEditeur, nationaliteEditeur)
illustrateur(<u>idIllustrateur</u>, nomIllustrateur, prenomIllustrateur, nationaliteIllustrateur)
auteur(<u>idAuteur</u>, nomAuteur, prenomAuteur)
theme(<u>idTheme</u>, nomTheme)
jeu(<u>idJeu</u>, nomJeu, nbJoueursMin, nbJoueursMax, duree, #idEditeur)
estDessinePar(<u>#idIllustrateur, #idJeu</u>)
estAuteurDe(<u>#idAuteur, #idJeu</u>)
parleDe(<u>#idTheme, #idJeu</u>)</pre>
          La table <strong>illustrateur</strong> :
          <table>
            <tr><th>idIllustrateur</th><th>nomIllustrateur</th><th>prenomIllustrateur</th><th>nationaliteIllustrateur</th></tr>
            <tr><td>1</td><td>Delval</td><td>Julien</td><td>Française</td></tr>
            <tr><td>2</td><td>Coimbra</td><td>Miguel</td><td>Française</td></tr>
            <tr><td>3</td><td>Quilliams</td><td>Chris</td><td>Canadienne</td></tr>
            <tr><td>4</td><td>Balixa</td><td>Bruno</td><td>Américaine</td></tr>
            <tr><td>5</td><td>Alsop</td><td>Dave</td><td>Américaine</td></tr>
            <tr><td>6</td><td>Torres</td><td>Francisco Rico</td><td>Américaine</td></tr>
          </table>`,
        questions: [
          "Dans DB Browser, onglet « Exécuter le SQL », ouvre ludotheque.sql et exécute-le (F5). Combien de tables la base contient-elle ? Lesquelles sont des tables d'association, et à quoi le vois-tu dans le schéma ?",
          "Écris la requête qui affiche toute la table illustrateur, puis celle qui n'affiche que les prénoms et noms.",
          "Écris la requête qui affiche les prénoms et noms triés par nationalité, puis par nom en cas d'égalité. Donne le résultat.",
          "Écris la requête qui affiche toutes les informations sur les illustrateurs par identifiant décroissant.",
        ],
        correction: [
          "8 tables. Les tables d'association sont estDessinePar, estAuteurDe et parleDe : leur clé primaire est composée de deux clés étrangères (le couple est souligné et chaque attribut porte un #). Elles représentent les liens N-M (plusieurs illustrateurs par jeu, plusieurs jeux par illustrateur…).",
          "SELECT * FROM illustrateur ; puis SELECT prenomIllustrateur, nomIllustrateur FROM illustrateur ; — le SELECT choisit les colonnes : c'est la projection.",
          "SELECT prenomIllustrateur, nomIllustrateur FROM illustrateur ORDER BY nationaliteIllustrateur, nomIllustrateur ; — résultat : Dave Alsop, Bruno Balixa, Francisco Rico Torres (Américaine), Chris Quilliams (Canadienne), Miguel Coimbra, Julien Delval (Française). Le tri porte sur la nationalité même si elle n'est pas affichée.",
          "SELECT * FROM illustrateur ORDER BY idIllustrateur DESC ; — DESC inverse l'ordre (Torres en premier, Delval en dernier).",
        ],
      },
      {
        num: "2", titre: "Restreindre : WHERE, LIKE, DISTINCT",
        note: "Rappels : les constantes texte sont entre apostrophes simples et les <em>données</em> sont sensibles à la casse ('française' ne trouve rien). Dans un motif LIKE, <code>%</code> = n'importe quelle suite de caractères, <code>_</code> = exactement un caractère.",
        questions: [
          "Écris la requête qui affiche les illustrateurs de nationalité française. Que renvoie la même requête avec 'française' (minuscule) ? Comment rendre la comparaison insensible à la casse ?",
          "Avant d'exécuter : quels illustrateurs renvoie SELECT nomIllustrateur FROM illustrateur WHERE nationaliteIllustrateur LIKE '%i_e%' ; ? Vérifie.",
          "Écris la requête qui affiche tous les illustrateurs français ET les illustrateurs américains dont le prénom contient un « o » (majuscule ou minuscule). Attention aux parenthèses.",
          "Écris la requête qui donne la liste des nationalités sans doublon, puis celle qui compte le nombre de nationalités différentes.",
        ],
        correction: [
          "SELECT * FROM illustrateur WHERE nationaliteIllustrateur = 'Française' ; — Delval et Coimbra. Avec 'française' : aucune ligne (égalité stricte, sensible à la casse). Solution : WHERE upper(nationaliteIllustrateur) = upper('française').",
          "Delval, Coimbra (Française contient « ise »), Balixa, Alsop, Torres (Américaine contient « ine ») : 5 lignes. Canadienne ne convient pas : après le i vient un e puis un n, pas i-?-e.",
          "SELECT nomIllustrateur FROM illustrateur WHERE (nationaliteIllustrateur = 'Américaine' AND upper(prenomIllustrateur) LIKE '%O%') OR nationaliteIllustrateur = 'Française' ; — résultat : Delval, Coimbra, Balixa (Bruno), Torres (Francisco Rico). Dave Alsop est exclu (pas de o). Sans parenthèses, le AND serait évalué avant le OR : le sens changerait.",
          "SELECT DISTINCT nationaliteIllustrateur FROM illustrateur ; — Française, Canadienne, Américaine (3 lignes au lieu de 6). Puis SELECT COUNT(DISTINCT nationaliteIllustrateur) FROM illustrateur ; — 3.",
        ],
      },
      {
        num: "3", titre: "Croiser deux tables : du produit cartésien à la jointure",
        note: `Les tables <strong>editeur</strong> et <strong>jeu</strong> (jeu.idEditeur est une clé étrangère vers editeur) :
          <table>
            <tr><th>idEditeur</th><th>nomEditeur</th><th>nationaliteEditeur</th></tr>
            <tr><td>1</td><td>Days of wonder</td><td>Française</td></tr>
            <tr><td>2</td><td>EggertSpiele</td><td>Allemande</td></tr>
            <tr><td>3</td><td>Iello</td><td>Française</td></tr>
          </table>
          <table>
            <tr><th>idJeu</th><th>nomJeu</th><th>nbJoueursMin</th><th>nbJoueursMax</th><th>duree</th><th>idEditeur</th></tr>
            <tr><td>1</td><td>Les chevaliers de la table ronde</td><td>3</td><td>7</td><td>90</td><td>1</td></tr>
            <tr><td>2</td><td>Cargo Noir</td><td>2</td><td>5</td><td>60</td><td>1</td></tr>
            <tr><td>3</td><td>Era: medieval age</td><td>1</td><td>4</td><td>50</td><td>2</td></tr>
            <tr><td>4</td><td>Smash up</td><td>2</td><td>4</td><td>45</td><td>3</td></tr>
          </table>`,
        questions: [
          "Avant d'exécuter : combien de lignes renvoie SELECT * FROM jeu, editeur ; ? Exécute, puis explique pourquoi la plupart de ces lignes sont fausses.",
          "Écris la requête qui associe à chaque nom de jeu la nationalité de son éditeur, triée par nationalité puis nom de jeu. Donne le résultat.",
          "Réécris la requête précédente avec USING. À quelle condition ce raccourci est-il possible ?",
          "Écris la requête qui affiche les noms des jeux édités par un éditeur français.",
          "Écris la requête qui affiche le nombre de jeux de chaque éditeur (nom de l'éditeur, nombre).",
        ],
        correction: [
          "4 × 3 = 12 lignes : le produit cartésien combine CHAQUE jeu avec CHAQUE éditeur, sans regarder idEditeur. Seules 4 lignes sont vraies (celles où jeu.idEditeur = editeur.idEditeur).",
          "SELECT nomJeu, nationaliteEditeur FROM jeu JOIN editeur ON jeu.idEditeur = editeur.idEditeur ORDER BY nationaliteEditeur, nomJeu ; — Era: medieval age (Allemande), puis Cargo Noir, Les chevaliers de la table ronde, Smash up (Française).",
          "SELECT nomJeu, nationaliteEditeur FROM jeu JOIN editeur USING (idEditeur) ORDER BY nationaliteEditeur, nomJeu ; — possible seulement si la colonne de jointure porte exactement le même nom dans les deux tables et que la condition est une égalité.",
          "SELECT nomJeu FROM jeu JOIN editeur USING (idEditeur) WHERE nationaliteEditeur = 'Française' ; — Les chevaliers de la table ronde, Cargo Noir, Smash up.",
          "SELECT nomEditeur, COUNT(*) FROM jeu JOIN editeur USING (idEditeur) GROUP BY nomEditeur ; — Days of wonder 2, EggertSpiele 1, Iello 1. GROUP BY fait des paquets par éditeur, COUNT compte dans chaque paquet.",
        ],
      },
      {
        num: "4", titre: "Association N-M : trois tables (et plus)",
        note: `La table d'association <strong>estDessinePar</strong> relie jeux et illustrateurs :
          <table>
            <tr><th>idIllustrateur</th><th>idJeu</th></tr>
            <tr><td>1</td><td>1</td></tr><tr><td>2</td><td>2</td></tr><tr><td>3</td><td>3</td></tr>
            <tr><td>4</td><td>4</td></tr><tr><td>5</td><td>4</td></tr><tr><td>6</td><td>4</td></tr>
          </table>
          De même, <strong>parleDe(#idTheme, #idJeu)</strong> relie les jeux à leurs thèmes (theme : 1 Moyen-âge, 2 Légende arthurienne, 3 Marché noir, 4 Navigation marchande, 5 Médiéval, 6 Construction, 7 Fantastique, 8 Monstre, 9 Pirate ; Cargo Noir parle des thèmes 3 et 4, Smash up des thèmes 7, 8 et 9).`,
        questions: [
          "Pourquoi ne peut-on pas mettre simplement une colonne idIllustrateur dans la table jeu ?",
          "Écris la requête qui affiche, pour chaque jeu, son nom et le prénom et le nom de ses illustrateurs (tri par nom de jeu puis nom d'illustrateur). Combien de lignes ?",
          "Écris la requête qui compte le nombre d'illustrateurs de chaque jeu, du plus illustré au moins illustré.",
          "Défi : les jeux jouables à 4 joueurs, en une heure au plus, et portant sur la « Navigation marchande ».",
          "Défi : les jeux dont l'éditeur a la même nationalité qu'au moins un de ses illustrateurs (chaque jeu une seule fois).",
        ],
        correction: [
          "Parce que Smash up a TROIS illustrateurs : une colonne ne pourrait en stocker qu'un. Et une colonne « 4, 5, 6 » ne serait pas atomique. Le lien est N-M : il faut une table d'association, une ligne par couple (jeu, illustrateur).",
          "SELECT nomJeu, prenomIllustrateur, nomIllustrateur FROM jeu JOIN estDessinePar USING (idJeu) JOIN illustrateur USING (idIllustrateur) ORDER BY nomJeu, nomIllustrateur ; — 6 lignes : Cargo Noir / Miguel Coimbra ; Era: medieval age / Chris Quilliams ; Les chevaliers de la table ronde / Julien Delval ; Smash up / Dave Alsop, Bruno Balixa, Francisco Rico Torres.",
          "SELECT nomJeu, COUNT(*) AS nb FROM jeu JOIN estDessinePar USING (idJeu) GROUP BY nomJeu ORDER BY nb DESC ; — Smash up 3, puis 1 pour chacun des trois autres.",
          "SELECT nomJeu FROM jeu JOIN parleDe USING (idJeu) JOIN theme USING (idTheme) WHERE nbJoueursMin <= 4 AND nbJoueursMax >= 4 AND duree <= 60 AND nomTheme = 'Navigation marchande' ; — Cargo Noir. Piège : « jouable à 4 » se traduit par 4 compris entre le minimum et le maximum, pas par nbJoueursMin = 4 (qui ne renverrait rien).",
          "SELECT DISTINCT nomJeu FROM illustrateur JOIN estDessinePar USING (idIllustrateur) JOIN jeu USING (idJeu) JOIN editeur USING (idEditeur) WHERE nationaliteIllustrateur = nationaliteEditeur ; — Les chevaliers de la table ronde (Delval, Française / Days of wonder, Française) et Cargo Noir (Coimbra / Days of wonder). DISTINCT évite qu'un jeu à plusieurs illustrateurs sorte plusieurs fois.",
        ],
      },
      {
        num: "5", titre: "Modifier et protéger : INSERT, UPDATE, DELETE, PRAGMA",
        note: "⚠️ Ces requêtes modifient la base : exécute d'abord <code>PRAGMA foreign_keys = ON ;</code> (SQLite ne vérifie pas les clés étrangères par défaut !). Quand tu as fini, relance ludotheque.sql pour tout remettre en place.",
        questions: [
          "Ajoute l'illustrateur n°7, David Cochard, de nationalité française. Que se passe-t-il si tu réessaies avec l'identifiant 1 ?",
          "Ajoute l'illustrateur n°8 « Naiade », dont on ne connaît pas le prénom. Écris ensuite la requête qui trouve les illustrateurs sans prénom. Pourquoi WHERE prenomIllustrateur = NULL ne marche-t-il pas ?",
          "Le nom de l'éditeur 1 s'écrit « Days of Wonder » avec un W majuscule : corrige-le. Pourquoi viser idEditeur plutôt que nomEditeur dans le WHERE ?",
          "Essaie de supprimer l'éditeur n°1. Que répond SQLite ? Qu'aurait-il fait sans le PRAGMA ?",
          "Supprime en une seule requête les deux illustrateurs ajoutés.",
        ],
        correction: [
          "INSERT INTO illustrateur VALUES (7, 'Cochard', 'David', 'Française') ; — avec l'identifiant 1 : « UNIQUE constraint failed: illustrateur.idIllustrateur », la clé primaire refuse le doublon (contrainte d'entité).",
          "INSERT INTO illustrateur (idIllustrateur, nomIllustrateur, nationaliteIllustrateur) VALUES (8, 'Naiade', 'Française') ; — ou VALUES (8, 'Naiade', NULL, 'Française'). Recherche : SELECT nomIllustrateur FROM illustrateur WHERE prenomIllustrateur IS NULL ; — NULL n'est pas une valeur mais l'absence de valeur : = NULL n'est jamais vrai, il faut IS NULL.",
          "UPDATE editeur SET nomEditeur = 'Days of Wonder' WHERE idEditeur = 1 ; — la clé primaire cible UNE ligne à coup sûr ; un WHERE sur le nom pourrait rater la ligne (faute de frappe) ou en toucher plusieurs.",
          "DELETE FROM editeur WHERE idEditeur = 1 ; → « FOREIGN KEY constraint failed » : les jeux 1 et 2 référencent cet éditeur, le SGBD protège l'intégrité référentielle. Sans PRAGMA foreign_keys = ON, SQLite aurait supprimé l'éditeur et laissé deux jeux orphelins : base incohérente.",
          "DELETE FROM illustrateur WHERE idIllustrateur >= 7 ; — le WHERE délimite les dégâts : sans lui, toute la table disparaîtrait.",
        ],
      },
      {
        num: "6", titre: "Depuis Python : requête paramétrée et transaction",
        code: `import sqlite3

connexion = sqlite3.connect("ludotheque.db")
connexion.execute("PRAGMA foreign_keys = ON")

def editeurs_de_nationalite(nationalite):
    curseur = connexion.execute(
        """SELECT nomEditeur
           FROM editeur
           WHERE upper(nationaliteEditeur) = upper(?)
           ORDER BY nomEditeur""",
        (nationalite,))
    return [ligne[0] for ligne in curseur]

print(editeurs_de_nationalite("française"))   # ['Days of wonder', 'Iello']

connexion.execute("INSERT INTO illustrateur VALUES (?, ?, ?, ?)",
                  (7, "Cochard", "David", "Française"))
connexion.commit()
connexion.close()`,
        note: "À tester dans Thonny ou Capytale (pas dans le navigateur), avec ludotheque.db dans le même dossier. Le fichier ludotheque_python.py du kit reprend ce code avec des asserts et une fonction à compléter.",
        questions: [
          "À quoi sert le ? dans la requête, et pourquoi écrit-on (nationalite,) avec une virgule ?",
          "Un utilisateur tape x' OR '1'='1 comme nationalité. Que se passe-t-il avec la requête paramétrée ? Et si on avait construit la requête par concaténation de chaînes ?",
          "Commente la ligne connexion.commit(), relance le programme, puis ouvre la base dans DB Browser : l'illustrateur 7 y est-il ? Explique.",
          "Bonus : écris la fonction illustrateurs_du_jeu(nom_jeu) qui renvoie la liste triée des noms des illustrateurs d'un jeu (jointure à travers estDessinePar), paramétrée par le nom du jeu.",
        ],
        correction: [
          "Le ? est un paramètre : le SGBD le remplace par la valeur fournie dans le tuple, en la traitant comme une donnée. (nationalite,) est un tuple à UN élément : sans la virgule, ce serait une simple chaîne entre parenthèses.",
          "Avec le paramètre, le SGBD cherche une nationalité qui vaut littéralement x' OR '1'='1 : aucun éditeur, aucun dégât. Par concaténation, la requête deviendrait WHERE upper(nationaliteEditeur) = upper('x' OR '1'='1') : la condition est toujours vraie et renvoie toute la table — avec un DELETE, elle la viderait. C'est l'injection SQL.",
          "Non : sans commit(), l'insertion n'a existé qu'en mémoire, dans une transaction jamais validée. Fermer la connexion l'annule. Une transaction est validée en bloc (commit) ou annulée en bloc (rollback) : c'est ce qui garantit la cohérence de la base.",
          "def illustrateurs_du_jeu(nom_jeu): curseur = connexion.execute(\"SELECT nomIllustrateur FROM jeu JOIN estDessinePar USING (idJeu) JOIN illustrateur USING (idIllustrateur) WHERE nomJeu = ? ORDER BY nomIllustrateur\", (nom_jeu,)) ; return [ligne[0] for ligne in curseur] — illustrateurs_du_jeu('Smash up') renvoie ['Alsop', 'Balixa', 'Torres'] (vérifié dans ludotheque_python_corrige.py).",
        ],
      },
    ],
  },
];

const FICHES_PLUS = [];
