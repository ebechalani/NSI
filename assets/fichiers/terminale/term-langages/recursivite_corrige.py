# ============================================================
#  Récursivité — CORRIGÉ (réservé au professeur)
# ============================================================


def somme_liste(t):
    """Renvoie la somme des éléments de la liste t, SANS boucle ni sum()."""
    if t == []:                      # cas de base : liste vide
        return 0
    return t[0] + somme_liste(t[1:])  # appel récursif sur une liste plus courte


def puissance(x, n):
    """Renvoie x élevé à la puissance n (n entier >= 0), SANS ** ni boucle."""
    if n == 0:                       # cas de base : x^0 = 1
        return 1
    return x * puissance(x, n - 1)   # appel récursif : n diminue


def escalier(n, memo=None):
    """Nombre de façons de monter un escalier de n marches (pas de 1 ou 2),
    avec mémoïsation — c'est Fibonacci déguisé, en O(n) grâce au dictionnaire."""
    if memo is None:                 # version propre du piège memo={}
        memo = {}
    if n <= 1:                       # cas de base : 0 ou 1 marche
        return 1
    if n not in memo:                # pas encore calculé ?
        memo[n] = escalier(n - 1, memo) + escalier(n - 2, memo)
    return memo[n]


# ---- Vérifications (ne pas modifier) ----
assert somme_liste([]) == 0
assert somme_liste([5]) == 5
assert somme_liste([1, 2, 3, 4]) == 10

assert puissance(2, 0) == 1
assert puissance(5, 3) == 125
assert puissance(2, 10) == 1024

assert escalier(1) == 1
assert escalier(3) == 3
assert escalier(10) == 89
assert escalier(50) == 20365011074   # instantané si la mémoïsation est là !

print("Tout est OK — bravo !")
