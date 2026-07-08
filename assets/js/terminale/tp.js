/* =====================================================================
   TP GUIDÉS — Terminale NSI
   TP pas-à-pas au format de la Première : énoncé + code (exécutable si
   run:true et lang python) + questions + corrections masquées.
   Le TP SQL n'a volontairement AUCUNE cellule exécutable : Pyodide ne
   fournit pas sqlite3 — les requêtes s'écrivent sur papier / DB Browser.
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
];

const FICHES_PLUS = [];
