# ============================================================
#  Recherche & tris — entraînement style « épreuve pratique »
#  Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  Complète les 3 fonctions. Exécute : « Tout est OK » = réussi.
# ============================================================

def recherche(tab, cible):
    """Renvoie l'indice de cible dans tab (parcours séquentiel), ou -1."""
    # À toi de jouer
    ...

def dichotomie(tab, cible):
    """tab est TRIÉ. Renvoie True si cible est dans tab, en divisant
    l'intervalle par 2 à chaque étape (variables gauche / droite)."""
    # À toi de jouer
    ...

def tri_insertion(tab):
    """Trie tab EN PLACE par insertion et le renvoie."""
    # À toi de jouer
    ...

# ---- Vérifications (ne pas modifier) ----
assert recherche([5, 3, 8, 1], 8) == 2
assert recherche([5, 3, 8, 1], 9) == -1
assert dichotomie([1, 3, 5, 8, 12, 20], 12) is True
assert dichotomie([1, 3, 5, 8, 12, 20], 7) is False
assert tri_insertion([5, 2, 9, 1, 7]) == [1, 2, 5, 7, 9]
assert tri_insertion([]) == []
print("Tout est OK — bravo !")
