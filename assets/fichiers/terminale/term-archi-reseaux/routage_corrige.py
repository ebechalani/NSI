# ============================================================
#  Routage : RIP contre OSPF — CORRIGÉ (version professeur)
# ------------------------------------------------------------
#  Réseau du cours : R1-R2 et R2-R5 à 10 Mbit/s (coût 10),
#  R1-R3, R3-R4, R4-R5 à 100 Mbit/s (coût 1).
# ============================================================

from collections import deque

RESEAU = {
    "R1": {"R2": 10, "R3": 1},
    "R2": {"R1": 10, "R5": 10},
    "R3": {"R1": 1, "R4": 1},
    "R4": {"R3": 1, "R5": 1},
    "R5": {"R2": 10, "R4": 1},
}


def nb_sauts(reseau, depart, arrivee):
    """RIP : plus petit nombre de sauts entre depart et arrivee
    (parcours en largeur, donc distance minimale en nombre de liens)."""
    if depart == arrivee:
        return 0
    file = deque([(depart, 0)])
    visites = {depart}
    while file:
        routeur, distance = file.popleft()
        for voisin in reseau[routeur]:
            if voisin == arrivee:
                return distance + 1
            if voisin not in visites:
                visites.add(voisin)
                file.append((voisin, distance + 1))
    return None  # arrivee injoignable (réseau coupé)


def cout_ospf(reseau, chemin):
    """OSPF : coût total d'un chemin = somme des coûts des liens."""
    total = 0
    for i in range(len(chemin) - 1):
        total += reseau[chemin[i]][chemin[i + 1]]
    return total


def table_rip(reseau, routeur):
    """Table de routage RIP : {destination: prochain saut}.
    Le prochain saut est le voisin le plus proche (en sauts) de la
    destination — un saut pour l'atteindre, puis nb_sauts restants."""
    table = {}
    for destination in reseau:
        if destination != routeur:
            meilleur = min(reseau[routeur],
                           key=lambda v: nb_sauts(reseau, v, destination))
            table[destination] = meilleur
    return table


# ---- Vérifications (ne pas modifier) ----
assert nb_sauts(RESEAU, "R1", "R1") == 0
assert nb_sauts(RESEAU, "R1", "R5") == 2          # via R2 : 2 sauts
assert nb_sauts(RESEAU, "R3", "R5") == 2          # R3 -> R4 -> R5
assert cout_ospf(RESEAU, ["R1", "R2", "R5"]) == 20
assert cout_ospf(RESEAU, ["R1", "R3", "R4", "R5"]) == 3
table = table_rip(RESEAU, "R1")
assert table["R5"] == "R2"                        # RIP choisit la route lente !
assert table["R4"] == "R3"
assert table["R2"] == "R2" and table["R3"] == "R3"
print("Tout est OK — bravo !")
print("RIP envoie R1->R5 via R2 (2 sauts, coût 20) ;")
print("OSPF préfère R1->R3->R4->R5 (3 sauts, coût 3) : même réseau, deux routes.")
