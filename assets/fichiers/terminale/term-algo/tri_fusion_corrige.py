# -*- coding: utf-8 -*-
# ============================================================
#  TRI FUSION — corrigé professeur
#  Même code que la Section 4 du cours (thème Algorithmique).
# ============================================================


def fusionner(a, b):
    """Fusionne deux listes DÉJÀ TRIÉES a et b en une seule liste triée."""
    resultat = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i])
            i += 1
        else:
            resultat.append(b[j])
            j += 1
    return resultat + a[i:] + b[j:]   # on ajoute le reste


def tri_fusion(t):
    """Trie la liste t par la méthode « diviser pour régner »."""
    if len(t) <= 1:                    # cas de base : déjà trié
        return t
    milieu = len(t) // 2
    gauche = tri_fusion(t[:milieu])    # diviser + régner
    droite = tri_fusion(t[milieu:])
    return fusionner(gauche, droite)   # combiner


# ---------- Tests ----------
assert fusionner([1, 3, 5], [2, 4]) == [1, 2, 3, 4, 5]
assert fusionner([], [1, 2]) == [1, 2]
assert fusionner([38], [27, 43]) == [27, 38, 43]

assert tri_fusion([]) == []
assert tri_fusion([5]) == [5]
assert tri_fusion([2, 1]) == [1, 2]
assert tri_fusion([38, 27, 43, 3, 9, 82, 10]) == [3, 9, 10, 27, 38, 43, 82]

print("Tous les tests passent, bravo !")
