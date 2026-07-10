# -*- coding: utf-8 -*-
# ============================================================
#  DIJKSTRA — squelette élève
#  Thème : Algorithmique — plus court chemin sur graphe pondéré
# ============================================================
#  Le graphe est un dictionnaire de dictionnaires (comme au cours,
#  Section 6) : graphe[u][v] = poids de l'arête entre u et v.
#  Comme à l'épreuve pratique : LIS D'ABORD les asserts en bas,
#  puis complète la fonction. Terminé quand tout passe !
# ============================================================

import heapq


def dijkstra(graphe, depart):
    """Renvoie le dictionnaire des plus courtes distances
    depuis 'depart' vers TOUS les sommets du graphe."""
    # Étape 1 : crée le dictionnaire dist : chaque sommet du graphe
    #           est à float("inf"), sauf depart qui est à 0.
    # Étape 2 : crée la file de priorité a_traiter = [(0, depart)]
    #           (des couples (distance, sommet)).
    # Étape 3 : tant que a_traiter n'est pas vide :
    #           - retire le couple (d, u) le plus proche avec
    #             heapq.heappop(a_traiter) ;
    #           - si d > dist[u], ce couple est périmé : continue ;
    #           - pour chaque (voisin, poids) de graphe[u].items() :
    #               si d + poids < dist[voisin], mets à jour
    #               dist[voisin] et pousse (dist[voisin], voisin)
    #               dans a_traiter avec heapq.heappush.
    # Étape 4 : renvoie dist.
    ...  # à toi de jouer


# ---------- Tests (ne rien modifier en dessous) ----------

# 1) Le réseau à 4 sommets de la Section 6 du cours
reseau = {
    "A": {"B": 5, "C": 1},
    "B": {"A": 5, "C": 2, "D": 1},
    "C": {"A": 1, "B": 2, "D": 4},
    "D": {"B": 1, "C": 4},
}
assert dijkstra(reseau, "A") == {"A": 0, "B": 3, "C": 1, "D": 4}

# 2) Le plan du lycée à 6 sommets (celui de la fiche imprimée)
lycee = {
    "A": {"B": 4, "C": 2},
    "B": {"A": 4, "C": 1, "D": 5},
    "C": {"A": 2, "B": 1, "D": 8, "E": 10},
    "D": {"B": 5, "C": 8, "E": 2, "F": 6},
    "E": {"C": 10, "D": 2, "F": 3},
    "F": {"D": 6, "E": 3},
}
assert dijkstra(lycee, "A") == {"A": 0, "B": 3, "C": 2, "D": 8, "E": 10, "F": 13}
assert dijkstra(lycee, "F") == {"A": 13, "B": 10, "C": 11, "D": 5, "E": 3, "F": 0}

# 3) Un sommet isolé reste à distance infinie
isole = {"A": {"B": 1}, "B": {"A": 1}, "C": {}}
assert dijkstra(isole, "A") == {"A": 0, "B": 1, "C": float("inf")}

print("Tous les tests passent, bravo !")
