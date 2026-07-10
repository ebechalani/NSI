# ============================================================
#  ARBRE BINAIRE DE RECHERCHE (ABR) — squelette à compléter
#  Thème « Structures de données » — Terminale NSI
# ------------------------------------------------------------
#  Représentation (comme dans le cours) : un arbre binaire est
#   - soit None (arbre vide),
#   - soit un triplet (valeur, gauche, droite).
#  Invariant de l'ABR : tout le sous-arbre gauche < valeur
#  et valeur < tout le sous-arbre droit.
#  Consignes :
#  1. Complète recherche(a, c) : exploite l'ordre de l'ABR,
#     on ne descend QUE d'un seul côté à chaque étape.
#  2. Complète inserer(a, c) : les tuples sont IMMUABLES,
#     il faut RECONSTRUIRE la branche parcourue et renvoyer
#     un NOUVEL arbre ((c, None, None) si l'arbre est vide).
#  3. Exécute le fichier : les asserts vérifient tout,
#     y compris que le parcours infixe reste trié.
# ============================================================


def recherche(a, c):
    """La clé c est-elle dans l'ABR a ? Coût O(hauteur)."""
    if a is None:
        return ...               # arbre vide : c n'y est pas
    valeur, gauche, droite = a
    if c == valeur:
        return ...
    if c < valeur:
        return ...               # c ne peut être qu'à gauche
    return ...                   # sinon, qu'à droite


def inserer(a, c):
    """Renvoie un NOUVEL ABR contenant c (on reconstruit la
    branche parcourue, le reste de l'arbre est partagé)."""
    if a is None:
        return ...               # nouvelle feuille
    valeur, gauche, droite = a
    if c < valeur:
        return ...               # on rebâtit à gauche
    if c > valeur:
        return ...               # on rebâtit à droite
    return a                     # c déjà présente : rien à faire


def infixe(a):
    """Fournie : gauche, racine, droite. Sur un ABR, le
    résultat est TRIÉ — c'est notre outil de vérification."""
    if a is None:
        return []
    valeur, gauche, droite = a
    return infixe(gauche) + [valeur] + infixe(droite)


# ---------- Tests (ne modifie rien en dessous) ---------------

# L'ABR du cours :   7
#                   / \
#                  3   9
#                 / \
#                1   5
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

# L'ABR de l'exercice écrit type bac : 12, 5, 20, 3, 8, 15, 25
abr2 = None
for cle in [12, 5, 20, 3, 8, 15, 25]:
    abr2 = inserer(abr2, cle)
assert infixe(abr2) == [3, 5, 8, 12, 15, 20, 25]
assert recherche(abr2, 15) == True
assert recherche(abr2, 13) == False

print("Tous les tests passent, bravo !")
