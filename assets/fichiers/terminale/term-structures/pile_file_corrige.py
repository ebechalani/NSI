# ============================================================
#  PILE & FILE — CORRIGÉ (prof) — Terminale NSI
#  Thème « Structures de données »
# ============================================================


# ---------- Partie 1 : la classe Pile (LIFO) ----------------

class Pile:
    """Pile LIFO implémentée avec une liste Python (cachée)."""

    def __init__(self):
        self._elements = []      # détail d'implémentation (caché)

    def est_vide(self):
        return self._elements == []

    def empiler(self, x):
        self._elements.append(x)     # on ajoute à la fin = le sommet

    def depiler(self):
        return self._elements.pop()  # retire et renvoie le dernier

    def sommet(self):
        return self._elements[-1]


# ---------- Partie 2 : défi « correcteur de parenthèses » ---

def bien_parenthese(expr):
    paires = {")": "(", "]": "[", "}": "{"}
    p = Pile()
    for c in expr:
        if c in "([{":
            p.empiler(c)
        elif c in ")]}":
            if p.est_vide() or p.depiler() != paires[c]:
                return False     # jamais ouverte, ou mauvais type
    return p.est_vide()          # tout doit être refermé


# ---------- Tests (identiques au squelette élève) ------------

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
