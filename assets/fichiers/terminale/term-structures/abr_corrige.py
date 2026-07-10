# ============================================================
#  ARBRE BINAIRE DE RECHERCHE (ABR) — CORRIGÉ (prof)
#  Thème « Structures de données » — Terminale NSI
#  Représentation : None (vide) ou triplet (valeur, gauche, droite).
# ============================================================


def recherche(a, c):
    """La clé c est-elle dans l'ABR a ? Coût O(hauteur)."""
    if a is None:
        return False             # arbre vide : c n'y est pas
    valeur, gauche, droite = a
    if c == valeur:
        return True
    if c < valeur:
        return recherche(gauche, c)   # c ne peut être qu'à gauche
    return recherche(droite, c)       # sinon, qu'à droite


def inserer(a, c):
    """Renvoie un NOUVEL ABR contenant c (on reconstruit la
    branche parcourue, le reste de l'arbre est partagé)."""
    if a is None:
        return (c, None, None)                        # nouvelle feuille
    valeur, gauche, droite = a
    if c < valeur:
        return (valeur, inserer(gauche, c), droite)   # on rebâtit à gauche
    if c > valeur:
        return (valeur, gauche, inserer(droite, c))   # on rebâtit à droite
    return a                                          # c déjà présente


def infixe(a):
    """Gauche, racine, droite : trié sur un ABR."""
    if a is None:
        return []
    valeur, gauche, droite = a
    return infixe(gauche) + [valeur] + infixe(droite)


# ---------- Tests (identiques au squelette élève) ------------

abr = None
for cle in [7, 3, 9, 1, 5]:
    abr = inserer(abr, cle)

assert infixe(abr) == [1, 3, 5, 7, 9]     # trié : invariant respecté
assert recherche(abr, 5) == True
assert recherche(abr, 7) == True
assert recherche(abr, 6) == False
assert recherche(None, 1) == False        # arbre vide

abr = inserer(abr, 6)
assert infixe(abr) == [1, 3, 5, 6, 7, 9]  # 6 a trouvé sa place
assert recherche(abr, 6) == True

abr2 = None
for cle in [12, 5, 20, 3, 8, 15, 25]:
    abr2 = inserer(abr2, cle)
assert infixe(abr2) == [3, 5, 8, 12, 15, 20, 25]
assert recherche(abr2, 15) == True
assert recherche(abr2, 13) == False

print("Tous les tests passent, bravo !")
