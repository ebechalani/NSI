/* =====================================================================
   COMPLÉMENTS PÉDAGOGIQUES PAR THÈME — Terminale NSI
   THEME_EXTRAS[themeId] = { resume[], erreurs[], exercices[], defi{} }
   exercice = { niveau, enonce, code?, gapcode?+gaps?, solution? }
   Renseigné pour les 6 thèmes du programme de Terminale.
   ===================================================================== */

const THEME_EXTRAS = {
  "term-structures": {
    resume: [
      "Interface = le contrat (les opérations) ; implémentation = le code qui le réalise. On programme contre l'interface.",
      "Pile = LIFO (dernier entré, premier sorti) ; opérations empiler / dépiler / sommet.",
      "File = FIFO (premier entré, premier sorti) ; à implémenter avec collections.deque (efficace aux deux bouts).",
      "Liste chaînée : maillons reliés par des flèches ; insertion en tête sans décalage, mais pas d'accès direct par indice.",
      "Arbre : structure hiérarchique. Taille = nombre de nœuds ; hauteur = plus long chemin racine → feuille. Définition récursive.",
      "ABR : parcours infixe = valeurs triées ; recherche/insertion en O(hauteur) — O(log n) si équilibré, O(n) si dégénéré (« peigne »).",
      "Graphe : sommets + arêtes ; matrice OU listes d'adjacence (on sait convertir). BFS s'appuie sur une file, DFS sur une pile ; cycle détecté par DFS + suivi du parent.",
    ],
    erreurs: [
      "Confondre pile (LIFO) et file (FIFO) : c'est l'ORDRE DE SORTIE qui les distingue.",
      "Utiliser list.pop(0) pour une file : correct mais lent (décalage de tous les éléments). Préférer deque.popleft().",
      "Confondre taille (nombre de nœuds) et hauteur (longueur du plus long chemin) d'un arbre.",
      "Oublier le cas de base (arbre/maillon None) dans une fonction récursive → récursion infinie.",
    ],
    exercices: [
      {
        niveau: "facile",
        enonce: "Texte à trou — empiler sur une pile (list) et lire le sommet.",
        gapcode: `pile = []
pile.append("A")      # empiler A
pile.___("B")         # empiler B (même opération)
sommet = pile[___]    # le sommet = le DERNIER élément
print(sommet)         # B`,
        gaps: ["append", "-1"],
        solution: "Sur une list, empiler = append (ajout en fin) ; le sommet est le dernier élément, donc l'indice -1.",
      },
      {
        niveau: "facile",
        enonce: "Texte à trou — défiler une file FIFO avec deque.",
        gapcode: `from collections import deque
f = deque()
f.append("Ava")       # enfiler
f.append("Bilal")
premier = f.___()     # défiler : retire et renvoie la TÊTE
print(premier)        # Ava`,
        gaps: ["popleft"],
        solution: "popleft() retire l'élément de tête en temps constant : c'est le comportement FIFO d'une file.",
      },
      {
        niveau: "moyen",
        enonce: "Écris taille(a) qui compte les nœuds d'un arbre binaire représenté par (valeur, gauche, droite), l'arbre vide étant None.",
        code: `arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def taille(a):
    if a is None:
        return 0
    valeur, gauche, droite = a
    return 1 + taille(gauche) + taille(droite)

print(taille(arbre))   # 5`,
        solution: "Récursion : un arbre vide a 0 nœud ; sinon 1 (la racine) + la taille du sous-arbre gauche + celle du droit.",
      },
      {
        niveau: "moyen",
        enonce: "Écris le parcours préfixe d'un arbre binaire (racine, puis gauche, puis droite) et renvoie la liste des valeurs.",
        code: `arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def prefixe(a):
    if a is None:
        return []
    valeur, gauche, droite = a
    return [valeur] + prefixe(gauche) + prefixe(droite)

print(prefixe(arbre))   # [7, 3, 1, 5, 9]`,
        solution: "Préfixe = on ajoute la racine AVANT de descendre : [valeur] + préfixe(gauche) + préfixe(droite).",
      },
      {
        niveau: "défi",
        enonce: "Utilise une pile pour inverser une chaîne de caractères (empile chaque lettre, puis dépile tout).",
        code: `def inverser(texte):
    pile = []
    for c in texte:
        pile.append(c)        # on empile
    resultat = ""
    while pile:
        resultat += pile.pop()  # on dépile : ordre inversé (LIFO)
    return resultat

print(inverser("NSI"))   # ISN`,
        solution: "Empiler les lettres dans l'ordre puis les dépiler renverse l'ordre : c'est l'effet LIFO de la pile.",
      },
      {
        niveau: "moyen",
        enonce: "Écris hauteur(a) d'un arbre binaire (valeur, gauche, droite) : le plus long chemin racine → feuille. Convention (comme dans le cours) : arbre vide → 0.",
        code: `arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def hauteur(a):
    if a is None:
        return 0
    _, gauche, droite = a
    return 1 + max(hauteur(gauche), hauteur(droite))

print(hauteur(arbre))   # 3`,
        solution: "Récursion : un arbre vide a une hauteur 0 ; sinon 1 + la plus grande des hauteurs des deux sous-arbres. Ici le plus long chemin 7 → 3 → 1 compte 3 nœuds, donc hauteur 3 (même convention que le cours).",
      },
      {
        niveau: "moyen",
        enonce: "Écris le parcours infixe (gauche, racine, droite) d'un arbre binaire. Que remarques-tu sur l'ordre, sachant que c'est un ABR ?",
        code: `arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def infixe(a):
    if a is None:
        return []
    valeur, gauche, droite = a
    return infixe(gauche) + [valeur] + infixe(droite)

print(infixe(arbre))   # [1, 3, 5, 7, 9]`,
        solution: "Infixe = on visite la racine ENTRE les deux sous-arbres : infixe(gauche) + [valeur] + infixe(droite). Sur un arbre binaire de recherche (ABR), le parcours infixe donne les valeurs TRIÉES.",
      },
      {
        niveau: "défi",
        enonce: "Écris recherche(a, cible) qui dit si une valeur est dans un ABR, en exploitant l'ordre (aller à gauche si plus petit, à droite sinon).",
        code: `arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))

def recherche(a, cible):
    if a is None:
        return False
    valeur, gauche, droite = a
    if cible == valeur:
        return True
    if cible < valeur:
        return recherche(gauche, cible)
    return recherche(droite, cible)

print(recherche(arbre, 5))   # True
print(recherche(arbre, 6))   # False`,
        solution: "Dans un ABR, à chaque nœud on élimine la moitié de l'arbre : si la cible est plus petite que la racine, elle ne peut être qu'à gauche, sinon à droite. Coût O(hauteur), bien plus rapide qu'un parcours complet.",
      },
      {
        niveau: "moyen",
        enonce: "Les 4 parcours du même arbre : sans exécuter, donne le préfixe, l'infixe, le suffixe et le parcours en largeur de l'arbre (4, (2, (1,None,None), (3,None,None)), (6, (5,None,None), (7,None,None))). Vérifie ensuite en codant les quatre fonctions.",
        code: `from collections import deque

arbre = (4, (2, (1, None, None), (3, None, None)), (6, (5, None, None), (7, None, None)))

def prefixe(a):
    if a is None:
        return []
    v, g, d = a
    return [v] + prefixe(g) + prefixe(d)

def infixe(a):
    if a is None:
        return []
    v, g, d = a
    return infixe(g) + [v] + infixe(d)

def suffixe(a):
    if a is None:
        return []
    v, g, d = a
    return suffixe(g) + suffixe(d) + [v]

def largeur(a):
    resultat, file = [], deque([a])
    while file:
        v, g, d = file.popleft()
        resultat.append(v)
        if g is not None:
            file.append(g)
        if d is not None:
            file.append(d)
    return resultat

print("Préfixe :", prefixe(arbre))   # [4, 2, 1, 3, 6, 5, 7]
print("Infixe  :", infixe(arbre))    # [1, 2, 3, 4, 5, 6, 7] (ABR -> trié)
print("Suffixe :", suffixe(arbre))   # [1, 3, 2, 5, 7, 6, 4]
print("Largeur :", largeur(arbre))   # [4, 2, 6, 1, 3, 5, 7]`,
        solution: "Préfixe : racine d'abord → [4, 2, 1, 3, 6, 5, 7]. Infixe : gauche-racine-droite → [1, 2, 3, 4, 5, 6, 7] (trié : c'est un ABR). Suffixe : racine en dernier → [1, 3, 2, 5, 7, 6, 4]. Largeur : niveau par niveau avec une FILE → [4, 2, 6, 1, 3, 5, 7].",
      },
      {
        niveau: "défi",
        enonce: "Écris inserer(a, c) qui insère la clé c dans un ABR en tuples (valeur, gauche, droite). Attention : les tuples sont immuables, il faut RECONSTRUIRE la branche parcourue et renvoyer un nouvel arbre ((c, None, None) si l'arbre est vide). Vérifie avec un parcours infixe.",
        code: `def inserer(a, c):
    if a is None:
        return (c, None, None)                        # nouvelle feuille
    valeur, gauche, droite = a
    if c < valeur:
        return (valeur, inserer(gauche, c), droite)   # on rebâtit à gauche
    if c > valeur:
        return (valeur, gauche, inserer(droite, c))   # on rebâtit à droite
    return a                                          # déjà présente

def infixe(a):
    if a is None:
        return []
    v, g, d = a
    return infixe(g) + [v] + infixe(d)

abr = None
for cle in [8, 3, 10, 1, 6]:
    abr = inserer(abr, cle)

print(infixe(abr))               # [1, 3, 6, 8, 10] -> trié : l'invariant tient
print(infixe(inserer(abr, 7)))   # [1, 3, 6, 7, 8, 10]`,
        solution: "On descend comme pour une recherche (à gauche si c < valeur, à droite si c > valeur). Comme les tuples sont immuables, chaque appel renvoie un NOUVEAU nœud : (valeur, inserer(gauche, c), droite) reconstruit la branche, le sous-arbre non parcouru est réutilisé tel quel. Cas de base : arbre vide → (c, None, None). Le parcours infixe trié prouve que l'invariant de l'ABR est préservé.",
      },
      {
        niveau: "défi",
        enonce: "Écris dfs(g, depart), le parcours en profondeur ITÉRATIF d'un graphe en dictionnaire d'adjacence, avec une pile (une simple list). Compare l'ordre obtenu au BFS sur le même graphe.",
        code: `graphe = {"A": ["B", "C"], "B": ["D"], "C": ["D", "E"], "D": [], "E": []}

def dfs(g, depart):
    vus = []
    pile = [depart]
    while pile:
        s = pile.pop()                    # LIFO : le dernier découvert d'abord
        if s not in vus:
            vus.append(s)
            for voisin in reversed(g[s]):
                if voisin not in vus:
                    pile.append(voisin)
    return vus

print(dfs(graphe, "A"))   # ['A', 'B', 'D', 'C', 'E']
# Le BFS sur le même graphe donnait ['A', 'B', 'C', 'D', 'E'] :
# le DFS s'enfonce (A -> B -> D) avant d'explorer C et E.`,
        solution: "On remplace la file du BFS par une PILE : pile.pop() prend le DERNIER sommet découvert, donc on s'enfonce le long d'un chemin avant de revenir. Le test 'if s not in vus' au dépilage évite les doublons (un sommet peut être empilé deux fois) ; reversed() sert juste à visiter les voisins dans l'ordre de la liste.",
      },
      {
        niveau: "défi",
        enonce: "Écris contient_cycle(g) qui détecte un cycle dans un graphe NON ORIENTÉ (dictionnaire d'adjacence) : DFS en retenant le parent de chaque sommet ; un voisin déjà vu qui n'est pas le parent signale un cycle.",
        code: `def contient_cycle(g):
    vus = set()

    def dfs(s, parent):
        vus.add(s)
        for voisin in g[s]:
            if voisin not in vus:
                if dfs(voisin, s):
                    return True
            elif voisin != parent:    # déjà vu et pas notre parent -> cycle
                return True
        return False

    for depart in g:                  # graphe éventuellement non connexe
        if depart not in vus and dfs(depart, None):
            return True
    return False

triangle = {"A": ["B", "C"], "B": ["A", "C"], "C": ["A", "B"]}
chaine   = {"A": ["B"], "B": ["A", "C"], "C": ["B"]}
print(contient_cycle(triangle))   # True  (A-B-C-A)
print(contient_cycle(chaine))     # False`,
        solution: "Dans un graphe non orienté, retomber sur un sommet déjà visité n'est un cycle QUE si ce n'est pas le parent (l'arête par laquelle on vient de passer). D'où le DFS avec le paramètre parent. La boucle finale sur tous les sommets couvre les graphes en plusieurs morceaux (non connexes).",
      },
    ],
    defi: {
      titre: "Mission : un correcteur de parenthèses",
      html: "Écris une fonction qui dit si une expression est bien parenthésée, en t'appuyant sur une <strong>pile</strong> (empiler les ouvrantes, dépiler aux fermantes, et vérifier que la pile finit vide).",
      code: `def bien_parenthese(expr):
    paires = {")": "(", "]": "[", "}": "{"}
    pile = []
    for c in expr:
        if c in "([{":
            pile.append(c)
        elif c in ")]}":
            if not pile or pile.pop() != paires[c]:
                return False
    return pile == []

print(bien_parenthese("(a+[b*c])"))  # True
print(bien_parenthese("(a+[b*c)"))   # False`,
    },
  },

  "term-langages": {
    resume: [
      "Trois paradigmes : impératif (instructions/état), fonctionnel (fonctions, sans état), orienté objet (classes & objets).",
      "POO : une classe est un moule ; __init__ initialise (constructeur) ; self = l'objet courant ; attributs (données) et méthodes (fonctions).",
      "Récursivité = cas de base + appel qui s'en rapproche. Sans cas de base : récursion infinie.",
      "Récursivité coûteuse (Fibonacci) → mémoïsation (retenir les résultats) → programmation dynamique.",
      "Mise au point : assert (préconditions/tests), jeux de tests (cas simples ET limites), doctest.",
      "Calculabilité : certains problèmes sont indécidables (problème de l'arrêt, Turing 1936).",
    ],
    erreurs: [
      "Oublier le cas de base d'une fonction récursive → RecursionError.",
      "Croire que la récursivité est toujours efficace : sans mémoïsation, Fibonacci explose.",
      "Oublier self dans une méthode ou en accédant à un attribut.",
      "Ne tester que le cas « qui marche » : il faut tester le vide, le zéro, le négatif, le très grand.",
    ],
    exercices: [
      {
        niveau: "facile",
        enonce: "Texte à trou — compléter le cas de base et l'appel récursif de la factorielle.",
        gapcode: `def factorielle(n):
    if n == ___:              # cas de base
        return 1
    return n * factorielle(n - ___)

print(factorielle(5))         # 120`,
        gaps: ["0", "1"],
        solution: "Cas de base : factorielle(0) = 1. Appel récursif sur n-1 pour se rapprocher de 0.",
      },
      {
        niveau: "facile",
        enonce: "Texte à trou — stocker un attribut dans l'objet courant.",
        gapcode: `class Chien:
    def __init__(self, nom):
        ___.nom = nom         # l'objet courant

rex = Chien("Rex")
print(rex.nom)                # Rex`,
        gaps: ["self"],
        solution: "self désigne l'objet en cours de création ; self.nom = nom y range l'attribut.",
      },
      {
        niveau: "moyen",
        enonce: "Écris une fonction récursive somme_liste(t) qui additionne les éléments d'une liste (cas de base : liste vide).",
        code: `def somme_liste(t):
    if t == []:
        return 0
    return t[0] + somme_liste(t[1:])   # premier + somme du reste

print(somme_liste([4, 8, 15, 16, 23, 42]))   # 108`,
        solution: "Cas de base : la somme d'une liste vide vaut 0. Sinon : premier élément + somme du reste (t[1:]).",
      },
      {
        niveau: "défi",
        enonce: "Mémoïse une fonction qui compte les façons de monter un escalier de n marches par pas de 1 ou 2 (c'est Fibonacci déguisé !).",
        code: `def escalier(n, memo={}):
    if n < 0:
        return 0
    if n == 0:
        return 1
    if n not in memo:
        memo[n] = escalier(n - 1, memo) + escalier(n - 2, memo)
    return memo[n]

print(escalier(5))    # 8
print(escalier(30))   # 1346269 (instantané grâce à la mémoïsation)`,
        solution: "Pour atteindre la marche n, on vient de n-1 (pas de 1) ou de n-2 (pas de 2) : escalier(n) = escalier(n-1) + escalier(n-2). La mémoïsation évite de recalculer.",
      },
      {
        niveau: "facile",
        enonce: "Définis une classe Compteur (attribut valeur initialisé à 0, méthode incrementer). Crée un compteur, incrémente-le deux fois, affiche valeur.",
        code: `class Compteur:
    def __init__(self):
        self.valeur = 0
    def incrementer(self):
        self.valeur += 1

c = Compteur()
c.incrementer()
c.incrementer()
print(c.valeur)   # 2`,
        solution: "__init__ crée l'attribut self.valeur ; chaque appel à incrementer() ajoute 1. Après deux appels : 2.",
      },
      {
        niveau: "moyen",
        enonce: "Écris une fonction RÉCURSIVE puissance(x, n) qui calcule x**n (cas de base : n == 0 renvoie 1).",
        code: `def puissance(x, n):
    if n == 0:
        return 1
    return x * puissance(x, n - 1)

print(puissance(2, 10))   # 1024`,
        solution: "Cas de base n = 0 → 1. Sinon x * puissance(x, n-1) : on multiplie par x à chaque appel, n fois au total.",
      },
      {
        niveau: "défi",
        enonce: "Objet + structure : écris une classe Pile (méthodes empiler, depiler, est_vide) en encapsulant une liste interne.",
        code: `class Pile:
    def __init__(self):
        self.contenu = []
    def est_vide(self):
        return self.contenu == []
    def empiler(self, x):
        self.contenu.append(x)
    def depiler(self):
        return self.contenu.pop()

p = Pile()
p.empiler(1)
p.empiler(2)
print(p.depiler(), p.est_vide())   # 2 False`,
        solution: "La classe encapsule une liste : empiler = append, depiler = pop (les deux en fin → LIFO), est_vide teste la liste. C'est l'implémentation d'une interface (la pile) par une classe.",
      },
    ],
    defi: {
      titre: "Mission : un test qui débusque le bug",
      html: "Écris une fonction <code>maximum(t)</code> qui renvoie le plus grand élément d'une liste, puis un <strong>jeu de tests</strong> (avec <code>assert</code>) couvrant un cas simple, une liste à un seul élément et des nombres négatifs.",
      code: `def maximum(t):
    m = t[0]
    for x in t:
        if x > m:
            m = x
    return m

assert maximum([3, 7, 2]) == 7
assert maximum([5]) == 5
assert maximum([-4, -1, -9]) == -1
print("Tous les tests passent ✅")`,
    },
  },

  "term-algo": {
    resume: [
      "Complexité : O(1), O(log n), O(n), O(n log n), O(n²)… On compte les opérations selon la taille n.",
      "Diviser pour régner : diviser → régner (récursif) → combiner. Ex. dichotomie (O(log n)), tri fusion (O(n log n)).",
      "Recherche dichotomique : tableau trié, on élimine une moitié à chaque comparaison.",
      "Programmation dynamique : sous-problèmes répétés + mémorisation. Ex. rendu de monnaie (optimum garanti, contrairement au glouton).",
      "Graphes pondérés : Dijkstra = plus court chemin depuis une source (file de priorité heapq).",
      "k-NN : on classe un point par l'étiquette majoritaire de ses k plus proches voisins (rappel de Première).",
      "Recherche textuelle : naïve en O(n×m) ; Boyer-Moore compare le motif de DROITE à GAUCHE et saute grâce à la règle du mauvais caractère (table du dernier indice).",
    ],
    erreurs: [
      "Appliquer la dichotomie sur un tableau NON trié.",
      "Confondre O(n) et O(n²) : une boucle vs deux boucles imbriquées.",
      "Croire que le glouton donne toujours l'optimum (faux pour certains systèmes de pièces).",
      "Oublier que Dijkstra suppose des poids positifs.",
    ],
    exercices: [
      {
        niveau: "facile",
        enonce: "Texte à trou — calculer l'indice du milieu (division entière) pour la dichotomie.",
        gapcode: `def milieu(gauche, droite):
    return (gauche + droite) ___ 2   # division ENTIÈRE

print(milieu(0, 9))   # 4`,
        gaps: ["//"],
        solution: "Le milieu d'un intervalle d'indices est (gauche+droite)//2 : la division entière donne un indice valide.",
      },
      {
        niveau: "moyen",
        enonce: "Écris une recherche dichotomique qui renvoie True si la cible est dans le tableau trié.",
        code: `def est_present(t, cible):
    g, d = 0, len(t) - 1
    while g <= d:
        m = (g + d) // 2
        if t[m] == cible:
            return True
        elif t[m] < cible:
            g = m + 1
        else:
            d = m - 1
    return False

print(est_present([2, 5, 8, 12, 16], 12))   # True
print(est_present([2, 5, 8, 12, 16], 7))    # False`,
        solution: "On garde un intervalle [g, d] et on le réduit de moitié à chaque tour selon la comparaison au milieu.",
      },
      {
        niveau: "moyen",
        enonce: "Écris la fonction fusionner(a, b) qui fusionne deux listes triées (cœur du tri fusion).",
        code: `def fusionner(a, b):
    res = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            res.append(a[i]); i += 1
        else:
            res.append(b[j]); j += 1
    return res + a[i:] + b[j:]

print(fusionner([1, 4, 7], [2, 3, 8]))   # [1, 2, 3, 4, 7, 8]`,
        solution: "On avance dans les deux listes en prenant à chaque fois le plus petit en tête, puis on ajoute le reste de celle qui n'est pas épuisée.",
      },
      {
        niveau: "défi",
        enonce: "Programmation dynamique : nombre minimal de pièces pour rendre 11 avec {1, 2, 5}. Vérifie que c'est 3 (5+5+1).",
        code: `def rendu(pieces, montant):
    INF = float("inf")
    mini = [0] + [INF] * montant
    for s in range(1, montant + 1):
        for p in pieces:
            if p <= s:
                mini[s] = min(mini[s], mini[s - p] + 1)
    return mini[montant]

print(rendu([1, 2, 5], 11))   # 3`,
        solution: "On calcule le minimum pour toutes les sommes de 1 à 11 en réutilisant mini[s-p]. Pour 11 : 5+5+1 → 3 pièces.",
      },
      {
        niveau: "moyen",
        enonce: "Complète le tri fusion : tri_fusion(t) coupe la liste en deux, trie chaque moitié récursivement, puis fusionne (réutilise fusionner).",
        code: `def fusionner(a, b):
    res, i, j = [], 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            res.append(a[i]); i += 1
        else:
            res.append(b[j]); j += 1
    return res + a[i:] + b[j:]

def tri_fusion(t):
    if len(t) <= 1:
        return t
    m = len(t) // 2
    return fusionner(tri_fusion(t[:m]), tri_fusion(t[m:]))

print(tri_fusion([5, 2, 9, 1, 7, 3]))   # [1, 2, 3, 5, 7, 9]`,
        solution: "Diviser pour régner : on coupe en deux, on trie chaque moitié récursivement, on fusionne les deux moitiés triées. Coût O(n log n).",
      },
      {
        niveau: "moyen",
        enonce: "Exponentiation rapide (diviser pour régner) : puissance_rapide(x, n) en O(log n) en élevant au carré la moitié.",
        code: `def puissance_rapide(x, n):
    if n == 0:
        return 1
    demi = puissance_rapide(x, n // 2)
    if n % 2 == 0:
        return demi * demi
    return demi * demi * x

print(puissance_rapide(2, 10))   # 1024`,
        solution: "x**n = (x**(n//2))² (× x de plus si n est impair). On divise n par 2 à chaque étape → O(log n) multiplications au lieu de n.",
      },
      {
        niveau: "défi",
        enonce: "Parcours en largeur (BFS) d'un graphe donné par un dictionnaire d'adjacence : renvoie l'ordre de visite depuis un sommet de départ.",
        code: `from collections import deque

graphe = {"A": ["B", "C"], "B": ["D"], "C": ["D", "E"], "D": [], "E": []}

def bfs(g, depart):
    vus = {depart}
    file = deque([depart])
    ordre = []
    while file:
        s = file.popleft()
        ordre.append(s)
        for voisin in g[s]:
            if voisin not in vus:
                vus.add(voisin)
                file.append(voisin)
    return ordre

print(bfs(graphe, "A"))   # ['A', 'B', 'C', 'D', 'E']`,
        solution: "Le BFS s'appuie sur une FILE : on visite un sommet, on enfile ses voisins non vus (l'ensemble 'vus' évite de repasser). On explore le graphe niveau par niveau.",
      },
      {
        niveau: "moyen",
        enonce: "Texte à trou — Boyer-Moore : construis la table du mauvais caractère (dernier indice de chaque caractère du motif) et rappelle le sens de comparaison.",
        gapcode: `def table_mauvais_caractere(motif):
    table = {}
    for i in range(len(motif)):
        table[motif[i]] = ___     # les occurrences suivantes écrasent : on garde la DERNIÈRE
    return table

print(table_mauvais_caractere("ananas"))
# {'a': 4, 'n': 3, 's': 5}

# Dans la recherche, on compare le motif au texte de droite à gauche :
# j démarre à len(motif) - ___ et diminue jusqu'à 0`,
        gaps: ["i", "1"],
        solution: "On range l'indice i : comme la boucle avance, la valeur finale est l'indice de la DERNIÈRE occurrence de chaque caractère ('a'→4, 'n'→3, 's'→5 pour « ananas »). La comparaison part de la fin du motif : j = len(motif) - 1. En cas d'échec sur un caractère, le saut vaut j - table.get(caractère, -1).",
      },
    ],
    defi: {
      titre: "Mission : le GPS du lycée",
      html: "À partir du graphe pondéré <code>reseau</code> (les couloirs du lycée), utilise Dijkstra pour trouver la distance minimale de la salle <code>A</code> à toutes les autres.",
      code: `import heapq
def dijkstra(g, depart):
    dist = {s: float("inf") for s in g}
    dist[depart] = 0
    tas = [(0, depart)]
    while tas:
        d, u = heapq.heappop(tas)
        if d > dist[u]:
            continue
        for v, w in g[u].items():
            if d + w < dist[v]:
                dist[v] = d + w
                heapq.heappush(tas, (dist[v], v))
    return dist

reseau = {"A": {"B": 5, "C": 1}, "B": {"A": 5, "C": 2, "D": 1},
          "C": {"A": 1, "B": 2, "D": 4}, "D": {"B": 1, "C": 4}}
print(dijkstra(reseau, "A"))   # {'A': 0, 'C': 1, 'B': 3, 'D': 4}`,
    },
  },

  "term-bdd": {
    resume: [
      "Base relationnelle = des tables (relations) reliées entre elles ; ligne = enregistrement, colonne = attribut (avec un domaine).",
      "Clé primaire : identifie chaque ligne (unique, non vide). Clé étrangère : référence la clé primaire d'une autre table.",
      "Intégrité : de domaine (valeurs valides), d'entité (clé primaire), référentielle (clé étrangère valide).",
      "Interroger : SELECT colonnes FROM table WHERE condition ; trier : ORDER BY ; agréger : COUNT/AVG/MIN/MAX/SUM, GROUP BY.",
      "Croiser des tables : JOIN ... ON clé_étrangère = clé_primaire.",
      "Modifier : INSERT INTO, UPDATE ... SET ... WHERE, DELETE FROM ... WHERE (jamais sans WHERE !).",
    ],
    erreurs: [
      "UPDATE ou DELETE sans WHERE : toute la table est touchée.",
      "Confondre SELECT (colonnes) et WHERE (lignes).",
      "Oublier la condition ON d'une jointure (on obtient alors toutes les combinaisons).",
      "Insérer une clé étrangère qui ne correspond à aucune clé primaire existante.",
    ],
    exercices: [
      {
        niveau: "facile",
        enonce: "Écris la requête SQL affichant le nom de tous les élèves de la table eleve, triés par moyenne décroissante.",
        solution: "SELECT nom FROM eleve ORDER BY moyenne DESC;",
      },
      {
        niveau: "facile",
        enonce: "Écris la requête affichant le nom et la moyenne des élèves dont la moyenne est inférieure à 10.",
        solution: "SELECT nom, moyenne FROM eleve WHERE moyenne < 10;",
      },
      {
        niveau: "moyen",
        enonce: "Écris la requête qui compte le nombre d'élèves par classe (attribut id_classe).",
        solution: "SELECT id_classe, COUNT(*) FROM eleve GROUP BY id_classe;",
      },
      {
        niveau: "moyen",
        enonce: "Écris la requête (jointure) affichant le nom de chaque élève avec le nom de sa classe.",
        solution: "SELECT eleve.nom, classe.nom FROM eleve JOIN classe ON eleve.id_classe = classe.id;",
      },
      {
        niveau: "défi",
        enonce: "Margaret a eu une nouvelle moyenne de 18. Écris la requête qui met à jour SA moyenne (et seulement la sienne).",
        solution: "UPDATE eleve SET moyenne = 18 WHERE nom = 'Margaret';  -- le WHERE évite de modifier tout le monde",
      },
      {
        niveau: "moyen",
        enonce: "Écris la requête qui affiche la liste des classes SANS doublon (un id_classe peut apparaître plusieurs fois dans la table eleve).",
        solution: "SELECT DISTINCT id_classe FROM eleve; — le mot-clé DISTINCT élimine les lignes en double.",
      },
      {
        niveau: "moyen",
        enonce: "Écris la requête qui affiche la moyenne générale de TOUTE la table eleve (une seule valeur).",
        solution: "SELECT AVG(moyenne) FROM eleve; — la fonction d'agrégation AVG calcule la moyenne sur toutes les lignes (sans GROUP BY, le résultat est une seule valeur).",
      },
      {
        niveau: "défi",
        enonce: "Inscris un nouvel élève : 'Lovelace', moyenne 19, classe 2 (attributs nom, moyenne, id_classe).",
        solution: "INSERT INTO eleve (nom, moyenne, id_classe) VALUES ('Lovelace', 19, 2); — INSERT INTO précise la table et les attributs, VALUES donne les valeurs dans le même ordre.",
      },
      {
        niveau: "moyen",
        enonce: "Repère les anomalies — un club de sport range tout dans une table unique : inscription(nom_adherent, telephone, nom_activite, jour, tarif). Exemple de lignes : (Ada, 0601..., Judo, mardi, 120), (Ada, 0601..., Escalade, jeudi, 150), (Alan, 0699..., Judo, mardi, 120). Identifie au moins trois anomalies de ce schéma (redondance, mise à jour, insertion, suppression), puis propose un découpage en plusieurs tables avec clés primaires et étrangères.",
        solution: "Anomalies : (1) redondance — le téléphone d'Ada et le couple (jour, tarif) du Judo sont recopiés à chaque ligne ; (2) mise à jour — si le tarif du Judo change, il faut modifier TOUTES les lignes Judo, en oublier une crée une incohérence ; (3) insertion — impossible d'enregistrer une nouvelle activité tant que personne n'y est inscrit ; (4) suppression — si Alan se désinscrit du Judo et qu'Ada aussi, l'activité Judo disparaît de la base. Schéma sain : adherent(id, nom, telephone) ; activite(id, nom, jour, tarif) ; inscription(#id_adherent, #id_activite) — chaque information n'est écrite qu'une fois, les clés étrangères font le lien.",
      },
    ],
    defi: {
      titre: "Mission : le tableau d'honneur",
      html: `<p>Écris la requête SQL qui affiche le nom et la moyenne des élèves de Terminale (classe d'<code>id</code> 2) ayant une moyenne d'au moins 16, du meilleur au moins bon. Compare ensuite avec une solution possible :</p>
        <pre class="sql">SELECT nom, moyenne
FROM   eleve
WHERE  id_classe = 2 AND moyenne &gt;= 16
ORDER BY moyenne DESC;</pre>`,
    },
  },

  "term-histoire": {
    resume: [
      "Préhistoire : Pascaline (calcul), Jacquard (cartes perforées = programme), Babbage & Ada Lovelace (1er programme).",
      "1936 : Turing fonde la calculabilité (machine de Turing) ; problèmes non calculables.",
      "1945 : architecture de von Neumann (programme stocké en mémoire) ; 1948 : Shannon, le bit.",
      "Langages (Fortran, Lisp, C), Unix ; micro-informatique (microprocesseur 1971, PC, interface graphique).",
      "Réseaux : ARPANET, TCP/IP (Cerf & Kahn) ; Web (Berners-Lee, 1989-1991). Internet ≠ Web.",
      "Aujourd'hui : mobile, données massives, IA — et leurs enjeux de société.",
    ],
    erreurs: [
      "Confondre Internet (le réseau) et le Web (un service qui circule dessus).",
      "Attribuer le Web à Turing ou l'ordinateur à Berners-Lee : bien situer chaque figure.",
      "Croire que le binaire date de l'électronique : Jacquard (1801) code déjà par deux états.",
    ],
    exercices: [
      {
        niveau: "facile",
        enonce: "Associe chaque personne à son apport : Ada Lovelace, Alan Turing, John von Neumann, Tim Berners-Lee.",
        solution: "Ada Lovelace → premier programme ; Turing → machine de Turing / calculabilité ; von Neumann → programme stocké en mémoire ; Berners-Lee → le Web.",
      },
      {
        niveau: "facile",
        enonce: "Range ces inventions dans l'ordre chronologique : microprocesseur, machine de Turing, Web, métier Jacquard.",
        solution: "Jacquard (1801) → machine de Turing (1936) → microprocesseur (1971) → Web (1989-1991).",
      },
      {
        niveau: "moyen",
        enonce: "Texte à trou — calculer, façon Shannon, le nombre de bits pour coder 256 puis 1024 possibilités.",
        gapcode: `import math
print(math.___(256))     # 8.0 bits
print(math.___(1024))    # 10.0 bits`,
        gaps: ["log2", "log2"],
        solution: "log₂(N) donne le nombre de bits pour N choix équiprobables : log2(256)=8, log2(1024)=10.",
      },
      {
        niveau: "facile",
        enonce: "Pourquoi dit-on que la machine de Turing (1936) est fondamentale, alors qu'elle n'a jamais vraiment été construite ?",
        solution: "C'est un MODÈLE THÉORIQUE : il définit ce qu'est un calcul et ce qui est « calculable ». Il établit les limites du calcul (problèmes indécidables) et sert de référence à tous les ordinateurs (équivalence de puissance de calcul).",
      },
      {
        niveau: "moyen",
        enonce: "Quelle est l'idée clé de l'architecture de von Neumann (1945), encore présente dans nos ordinateurs ?",
        solution: "Le PROGRAMME EST ENREGISTRÉ EN MÉMOIRE, au même endroit que les données : la machine peut charger et modifier ses instructions. C'est l'ordinateur universel programmable (unité de calcul + mémoire + entrées/sorties).",
      },
      {
        niveau: "moyen",
        enonce: "Internet et le Web, est-ce la même chose ? Explique la différence.",
        solution: "Non. Internet (années 1970, TCP/IP) est le RÉSEAU physique qui relie les machines. Le Web (Tim Berners-Lee, 1989) est UNE APPLICATION qui tourne dessus : des pages liées par hypertexte (HTTP, URL, HTML). Le courriel, par exemple, utilise Internet mais n'est pas le Web.",
      },
    ],
    defi: {
      titre: "Mission : la frise des idées",
      html: "Choisis <strong>une notion</strong> travaillée cette année (pile, dichotomie, base de données, routage…) et rédige 3 phrases : <em>d'où vient l'idée, qui l'a portée, à quoi elle sert aujourd'hui</em>. C'est l'esprit du fil rouge « histoire » de la NSI.",
    },
  },

  "term-archi-reseaux": {
    resume: [
      "SoC (système sur puce) : CPU, GPU, mémoire, modem radio et contrôleurs d'E/S gravés sur UNE seule puce — compact et économe en énergie, mais ni évolutif ni facile à refroidir.",
      "L'OS gère et partage les ressources : processus, mémoire, fichiers, périphériques (abstraction).",
      "Processus = programme en cours d'exécution (états : prêt / élu / bloqué). L'ordonnanceur répartit le processeur (ex. round-robin).",
      "Interblocage : des processus s'attendent mutuellement (dîner des philosophes). Casser une condition (ex. ordre d'acquisition) l'évite.",
      "Réseau : commutation de paquets, adresses IP, encapsulation TCP/IP.",
      "Routage : RIP (nombre de sauts) ; OSPF (coût des liens, via Dijkstra).",
      "Chiffrement : symétrique (même clé : César, AES) ; asymétrique (clé publique / privée : RSA, HTTPS).",
    ],
    erreurs: [
      "Confondre programme (fichier) et processus (exécution).",
      "Croire que le processeur exécute vraiment tout « en même temps » : c'est l'ordonnanceur qui alterne très vite.",
      "Oublier que le chiffrement symétrique exige de partager la clé secrètement à l'avance (problème résolu par l'asymétrique).",
      "Confondre clé publique et clé privée dans le chiffrement asymétrique.",
    ],
    exercices: [
      {
        niveau: "facile",
        enonce: "Système sur puce (SoC) : associe chaque fonction au composant qui la réalise — (1) exécuter les instructions des programmes ; (2) calculer l'image affichée à l'écran ; (3) stocker programmes et données en cours d'exécution ; (4) communiquer en 4G/5G, Wi-Fi et Bluetooth ; (5) piloter l'écran tactile, la caméra et les capteurs. Composants : CPU, GPU, mémoire (RAM), modem radio, contrôleurs d'entrées/sorties. Donne ensuite un avantage et une limite du SoC par rapport à un PC « en pièces détachées ».",
        solution: "(1) → CPU (le processeur exécute les instructions) ; (2) → GPU (processeur graphique) ; (3) → mémoire RAM ; (4) → modem radio ; (5) → contrôleurs d'entrées/sorties. Avantages : compacité (tout tient sur quelques mm², idéal smartphone) et consommation réduite (les données parcourent des distances minuscules). Limites : rien n'est évolutif (impossible d'ajouter de la RAM ou de changer le GPU, tout est gravé) et la dissipation thermique est difficile (la puce doit se brider quand elle chauffe).",
      },
      {
        niveau: "moyen",
        enonce: "Routage — reprends le réseau du cours : R1–R2 et R2–R5 à 10 Mbit/s (coût OSPF 10 chacun), R1–R3, R3–R4 et R4–R5 à 100 Mbit/s (coût OSPF 1 chacun). Remplis la table de routage de R1 pour la destination R5 : quel est le prochain saut choisi par RIP ? par OSPF ? Justifie avec le nombre de sauts et le coût total.",
        solution: "RIP (nombre de sauts) : R1→R2→R5 = 2 sauts contre R1→R3→R4→R5 = 3 sauts → RIP inscrit « destination R5 : prochain saut R2 ». OSPF (somme des coûts) : via R2 : 10 + 10 = 20 ; via R3 : 1 + 1 + 1 = 3 → OSPF inscrit « destination R5 : prochain saut R3 ». Les deux protocoles choisissent des routes différentes : RIP minimise les sauts (et emprunte les liaisons lentes), OSPF minimise le coût (∝ 1/débit, calculé par Dijkstra) et passe par le chemin rapide.",
      },
      {
        niveau: "facile",
        enonce: "Texte à trou — compléter le code de César (décalage d'une lettre majuscule, avec retour de Z à A).",
        gapcode: `def cesar(c, cle):
    return chr((ord(c) - ord("A") + cle) ___ 26 + ord("A"))

print(cesar("A", 3))   # D
print(cesar("Z", 1))   # A  (on boucle après Z)`,
        gaps: ["%"],
        solution: "Le modulo 26 (%) ramène le décalage dans l'alphabet : après Z (25), +1 donne 0 = A.",
      },
      {
        niveau: "moyen",
        enonce: "Déchiffre le message César 'PHVVDJH' (clé 3) en appliquant un décalage de -3.",
        code: `def cesar(texte, cle):
    res = ""
    for c in texte.upper():
        if "A" <= c <= "Z":
            res += chr((ord(c) - ord("A") + cle) % 26 + ord("A"))
        else:
            res += c
    return res

print(cesar("PHVVDJH", -3))   # MESSAGE`,
        solution: "Chaque lettre est reculée de 3 : P→M, H→E, V→S… → MESSAGE.",
      },
      {
        niveau: "moyen",
        enonce: "Simule un tourniquet (round-robin) avec quantum 2 sur {P1:4, P2:2} : dans quel ordre les processus se terminent-ils ?",
        code: `from collections import deque
def tourniquet(procs, q):
    file = deque(procs.items())
    t = 0
    while file:
        nom, reste = file.popleft()
        dt = min(q, reste); t += dt; reste -= dt
        if reste > 0:
            file.append((nom, reste))
        else:
            print(f"t={t} : {nom} terminé")

tourniquet({"P1": 4, "P2": 2}, 2)   # P2 finit avant P1`,
        solution: "P1(2), P2(2→fini à t=4), P1(2→fini à t=6). P2 termine avant P1 car plus court.",
      },
      {
        niveau: "moyen",
        enonce: "Chiffrement symétrique par XOR : écris chiffrer(texte, cle) qui applique un OU exclusif (^) entre chaque caractère et la clé. Vérifie que re-chiffrer redonne le texte.",
        code: `def chiffrer(texte, cle):
    return "".join(chr(ord(c) ^ cle) for c in texte)

secret = chiffrer("NSI", 42)
print(chiffrer(secret, 42))   # NSI (le XOR est sa propre réciproque)`,
        solution: "Le XOR est involutif : (x ^ k) ^ k = x. Chiffrer et déchiffrer utilisent donc la MÊME clé et la même opération — c'est l'idée du chiffrement symétrique.",
      },
      {
        niveau: "facile",
        enonce: "Qu'est-ce qu'un interblocage (deadlock) ? Donne un exemple de la vie courante.",
        solution: "Deux processus attendent chacun une ressource détenue par l'autre → aucun n'avance. Exemple : deux voitures bloquées dans une rue étroite, chacune attendant que l'autre recule. On l'évite par un ordre d'acquisition des ressources, des délais d'attente, etc.",
      },
      {
        niveau: "moyen",
        enonce: "Pourquoi le chiffrement asymétrique (clé publique) résout-il le problème d'échange de clé du chiffrement symétrique ?",
        solution: "En symétrique, il faut transmettre la clé secrète sans canal sûr (problème de l'œuf et la poule). En asymétrique, chacun a une clé PUBLIQUE (pour chiffrer, diffusable) et une clé PRIVÉE (pour déchiffrer, gardée secrète) : on n'échange jamais de secret. C'est la base de HTTPS.",
      },
    ],
    defi: {
      titre: "Mission : un message à l'épreuve des espions",
      html: "Chiffre un message avec Vigenère (clé = un mot), puis vérifie qu'on le retrouve en déchiffrant. Pourquoi Vigenère résiste-t-il mieux que César à l'analyse des fréquences ?",
      code: `def vigenere(texte, cle, sens=1):
    res, j = "", 0
    for c in texte.upper():
        if "A" <= c <= "Z":
            d = (ord(cle[j % len(cle)].upper()) - ord("A")) * sens
            res += chr((ord(c) - ord("A") + d) % 26 + ord("A"))
            j += 1
        else:
            res += c
    return res

secret = vigenere("ATTAQUE A L AUBE", "LYCEE")
print("Chiffré   :", secret)
print("Déchiffré :", vigenere(secret, "LYCEE", -1))`,
    },
  },
};
