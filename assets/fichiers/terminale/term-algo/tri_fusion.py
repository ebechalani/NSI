# -*- coding: utf-8 -*-
# ============================================================
#  TRI FUSION — squelette élève (style épreuve pratique)
#  Thème : Algorithmique — diviser pour régner
# ============================================================
#  Consigne générale : comme à l'épreuve pratique, LIS D'ABORD
#  les asserts en bas du fichier, puis complète les fonctions.
#  Ton travail est terminé quand TOUS les asserts passent
#  (le programme affiche « Tous les tests passent, bravo ! »).
# ============================================================


def fusionner(a, b):
    """Fusionne deux listes DÉJÀ TRIÉES a et b en une seule liste triée."""
    # Étape 1 : crée une liste vide resultat, et deux indices i et j à 0
    #           (i avance dans a, j avance dans b).
    # Étape 2 : tant que i < len(a) ET j < len(b) :
    #           - compare a[i] et b[j] ;
    #           - ajoute le PLUS PETIT des deux à resultat ;
    #           - avance l'indice correspondant (i ou j) de 1.
    # Étape 3 : l'une des deux listes est épuisée : ajoute le reste
    #           de l'autre (a[i:] et b[j:]) et renvoie resultat.
    ...  # à toi de jouer


def tri_fusion(t):
    """Trie la liste t par la méthode « diviser pour régner »."""
    # Cas de base : une liste de 0 ou 1 élément est déjà triée
    #               -> renvoie-la telle quelle.
    # Sinon :
    #   1. DIVISER : calcule milieu = len(t) // 2 et coupe t en deux
    #      moitiés t[:milieu] et t[milieu:].
    #   2. RÉGNER : trie chaque moitié par un appel RÉCURSIF.
    #   3. COMBINER : renvoie la fusion des deux moitiés triées
    #      (avec la fonction fusionner).
    ...  # à toi de jouer


# ---------- Tests (ne rien modifier en dessous) ----------
assert fusionner([1, 3, 5], [2, 4]) == [1, 2, 3, 4, 5]
assert fusionner([], [1, 2]) == [1, 2]
assert fusionner([38], [27, 43]) == [27, 38, 43]

assert tri_fusion([]) == []
assert tri_fusion([5]) == [5]
assert tri_fusion([2, 1]) == [1, 2]
assert tri_fusion([38, 27, 43, 3, 9, 82, 10]) == [3, 9, 10, 27, 38, 43, 82]

print("Tous les tests passent, bravo !")
