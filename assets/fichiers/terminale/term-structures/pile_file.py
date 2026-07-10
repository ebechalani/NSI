# ============================================================
#  PILE & FILE — squelette à compléter (Terminale NSI)
#  Thème « Structures de données »
# ------------------------------------------------------------
#  Consignes :
#  1. Complète la classe Pile (remplace chaque ... par ton code).
#  2. Complète ensuite le défi « correcteur de parenthèses »
#     en UTILISANT ta classe Pile.
#  3. Exécute le fichier : si tout est bon, tu verras
#     « Tous les tests passent, bravo ! ».
#  Rappel du cours : empiler = append, dépiler = pop (LIFO).
# ============================================================


# ---------- Partie 1 : la classe Pile (LIFO) ----------------

class Pile:
    """Pile LIFO implémentée avec une liste Python (cachée)."""

    def __init__(self):
        self._elements = []      # détail d'implémentation (caché)

    def est_vide(self):
        # Renvoie True si la pile est vide, False sinon.
        ...

    def empiler(self, x):
        # Pose x au sommet de la pile (fin de la liste).
        ...

    def depiler(self):
        # Retire ET renvoie l'élément du sommet.
        ...

    def sommet(self):
        # Renvoie l'élément du sommet SANS le retirer.
        ...


# ---------- Partie 2 : défi « correcteur de parenthèses » ---
#  Une expression est bien parenthésée si chaque ( [ {
#  est refermée par la bonne parenthèse, dans le bon ordre.
#  Idée (vue en cours) :
#   - parenthèse OUVRANTE  -> on l'empile ;
#   - parenthèse FERMANTE  -> on dépile : la dernière ouverte
#     doit correspondre (sinon c'est perdu) ;
#   - à la fin, la pile doit être vide.

def bien_parenthese(expr):
    paires = {")": "(", "]": "[", "}": "{"}
    p = Pile()
    for c in expr:
        if c in "([{":
            ...                  # empiler la parenthèse ouvrante
        elif c in ")]}":
            if p.est_vide() or ... != paires[c]:
                return False     # jamais ouverte, ou mauvais type
    return ...                   # la pile doit être vide à la fin


# ---------- Tests (ne modifie rien en dessous) ---------------

p = Pile()
assert p.est_vide() == True
p.empiler("N"); p.empiler("S"); p.empiler("I")
assert p.sommet() == "I"          # le dernier empilé
assert p.depiler() == "I"         # LIFO : il ressort en premier
assert p.depiler() == "S"
assert p.est_vide() == False      # il reste "N"

assert bien_parenthese("(3+[2*(1-4)])") == True
assert bien_parenthese("(3+[2*(1-4])") == False   # crochet mal fermé
assert bien_parenthese("))((") == False
assert bien_parenthese("") == True
assert bien_parenthese("({[]})") == True

print("Tous les tests passent, bravo !")
