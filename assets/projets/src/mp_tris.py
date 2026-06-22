"""Tri rapide & tri fusion (récursifs) — boîte noire (corrigé)."""


def tri_rapide(lst):
    """Tri rapide (quicksort) — renvoie une nouvelle liste triée."""
    if len(lst) <= 1:
        return lst
    pivot = lst[0]
    petits = [x for x in lst[1:] if x < pivot]
    grands = [x for x in lst[1:] if x >= pivot]
    return tri_rapide(petits) + [pivot] + tri_rapide(grands)


def tri_fusion(lst):
    """Tri fusion (mergesort) — renvoie une nouvelle liste triée."""
    if len(lst) <= 1:
        return lst
    milieu = len(lst) // 2
    gauche = tri_fusion(lst[:milieu])
    droite = tri_fusion(lst[milieu:])
    res, i, j = [], 0, 0
    while i < len(gauche) and j < len(droite):
        if gauche[i] <= droite[j]:
            res.append(gauche[i]); i += 1
        else:
            res.append(droite[j]); j += 1
    return res + gauche[i:] + droite[j:]


if __name__ == "__main__":
    print(tri_rapide([5, 2, 9, 1, 7, 3]))
    print(tri_fusion([5, 2, 9, 1, 7, 3]))
