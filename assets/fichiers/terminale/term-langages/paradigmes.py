# ============================================================
#  Paradigmes — la suite de Fibonacci en trois styles (Capytale / Thonny)
#  Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  D'après le chapitre « Paradigmes de programmation » du DIU EIL
#  (Bruno Mermet & Gaële Simon, Université Le Havre Normandie,
#  licence CC BY-NC-SA) — https://bases-de-donnees-26b46e.gitlab.io/
#  Convention du DIU : fibo(0) = fibo(1) = 1  ->  1, 1, 2, 3, 5, 8, 13...
#  Exécute le fichier : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================


def fibo_imperatif(n):
    """Version IMPÉRATIVE : une boucle et deux variables (ua, ub) dont
    l'état change à chaque tour. Aide : ua, ub = ub, ua + ub."""
    # À toi de jouer
    ...


def fibo_fonctionnel(n):
    """Version FONCTIONNELLE : aucune affectation, la répétition = récursivité.
    Traduis la version Haskell du cours :
        fibo n = if (n < 2) then 1 else fibo(n-1) + fibo(n-2)
    en UNE ligne : return ... if ... else ..."""
    # À toi de jouer
    ...


class SuiteFibonacci:
    """Version OBJET : l'objet garde en mémoire (attribut calcules) les termes
    déjà obtenus, ce qui rend terme(80) instantané."""

    def __init__(self):
        self.calcules = {0: 1, 1: 1}

    def terme(self, n):
        """Renvoie fibo(n) : si n n'est pas encore dans self.calcules,
        le calculer à partir de terme(n-1) et terme(n-2) puis le ranger."""
        # À toi de jouer
        ...


def termes(n):
    """Renvoie la liste [fibo(0), fibo(1), ..., fibo(n)] SANS boucle for
    explicite : utilise map (ou une compréhension) avec fibo_imperatif."""
    # À toi de jouer
    ...


# ---- Vérifications (ne pas modifier) ----
for k, attendu in [(0, 1), (1, 1), (2, 2), (6, 13), (10, 89)]:
    assert fibo_imperatif(k) == attendu, "fibo_imperatif(" + str(k) + ")"
    assert fibo_fonctionnel(k) == attendu, "fibo_fonctionnel(" + str(k) + ")"
    assert SuiteFibonacci().terme(k) == attendu, "terme(" + str(k) + ")"
assert SuiteFibonacci().terme(80) == 37889062373143906, "terme(80) : as-tu bien mémorisé ?"
assert termes(6) == [1, 1, 2, 3, 5, 8, 13], "termes(6)"
print("Tout est OK")
