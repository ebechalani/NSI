# -*- coding: utf-8 -*-
# ============================================================
#  DIJKSTRA — corrigé professeur
#  Même code que la Section 6 du cours (thème Algorithmique).
# ============================================================

import heapq


def dijkstra(graphe, depart):
    """Renvoie le dictionnaire des plus courtes distances
    depuis 'depart' vers TOUS les sommets du graphe."""
    dist = {sommet: float("inf") for sommet in graphe}
    dist[depart] = 0
    a_traiter = [(0, depart)]            # file de priorité (distance, sommet)
    while a_traiter:
        d, u = heapq.heappop(a_traiter)  # le sommet le plus proche
        if d > dist[u]:                  # couple périmé
            continue
        for voisin, poids in graphe[u].items():
            if d + poids < dist[voisin]:
                dist[voisin] = d + poids
                heapq.heappush(a_traiter, (dist[voisin], voisin))
    return dist


# ---------- Tests ----------

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
