# ============================================================
#  Paradigmes — la suite de Fibonacci en trois styles — CORRIGÉ PROF
# ------------------------------------------------------------
#  D'après le chapitre « Paradigmes de programmation » du DIU EIL
#  (Bruno Mermet & Gaële Simon, Université Le Havre Normandie,
#  licence CC BY-NC-SA) — https://bases-de-donnees-26b46e.gitlab.io/
#  Convention du DIU : fibo(0) = fibo(1) = 1  ->  1, 1, 2, 3, 5, 8, 13...
# ============================================================


def fibo_imperatif(n):
    """Version IMPÉRATIVE : une boucle et deux variables (ua, ub) dont
    l'état change à chaque tour."""
    ua, ub = 1, 1
    for indice in range(2, n + 1):
        ua, ub = ub, ua + ub          # l'état de la mémoire est modifié
    return ub


def fibo_fonctionnel(n):
    """Version FONCTIONNELLE : aucune affectation, la répétition = récursivité.
    (Haskell du DIU : fibo n = if (n < 2) then 1 else fibo(n-1) + fibo(n-2))
    Coût exponentiel : fibo_fonctionnel(35) prend déjà plusieurs secondes."""
    return 1 if n < 2 else fibo_fonctionnel(n - 1) + fibo_fonctionnel(n - 2)


class SuiteFibonacci:
    """Version OBJET : l'objet garde en mémoire (attribut calcules) les termes
    déjà obtenus — c'est la mémoïsation de la section 4 du cours, mais l'état
    vit dans l'objet au lieu d'un paramètre memo."""

    def __init__(self):
        self.calcules = {0: 1, 1: 1}

    def terme(self, n):
        if n not in self.calcules:
            self.calcules[n] = self.terme(n - 1) + self.terme(n - 2)
        return self.calcules[n]


def termes(n):
    """Liste [fibo(0), ..., fibo(n)] par mapping (style fonctionnel)."""
    return list(map(fibo_imperatif, range(n + 1)))
    # Variante en compréhension : [fibo_imperatif(k) for k in range(n + 1)]


# ---- Vérifications (ne pas modifier) ----
for k, attendu in [(0, 1), (1, 1), (2, 2), (6, 13), (10, 89)]:
    assert fibo_imperatif(k) == attendu, "fibo_imperatif(" + str(k) + ")"
    assert fibo_fonctionnel(k) == attendu, "fibo_fonctionnel(" + str(k) + ")"
    assert SuiteFibonacci().terme(k) == attendu, "terme(" + str(k) + ")"
assert SuiteFibonacci().terme(80) == 37889062373143906, "terme(80) : as-tu bien mémorisé ?"
assert termes(6) == [1, 1, 2, 3, 5, 8, 13], "termes(6)"
print("Tout est OK")
