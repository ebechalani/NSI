# ============================================================
#  Routage : RIP contre OSPF — à compléter
# ------------------------------------------------------------
#  Le réseau du cours (5 routeurs) est représenté par un
#  dictionnaire : à chaque routeur on associe le dictionnaire
#  de ses voisins, avec le COÛT OSPF du lien (coût = 1/débit :
#  liaison 100 Mbit/s -> coût 1, liaison 10 Mbit/s -> coût 10).
#
#        R1 --10-- R2 --10-- R5
#        R1 --1--- R3 --1--- R4 --1-- R5
# ============================================================

RESEAU = {
    "R1": {"R2": 10, "R3": 1},
    "R2": {"R1": 10, "R5": 10},
    "R3": {"R1": 1, "R4": 1},
    "R4": {"R3": 1, "R5": 1},
    "R5": {"R2": 10, "R4": 1},
}


def nb_sauts(reseau, depart, arrivee):
    """RIP : renvoie le plus petit NOMBRE DE SAUTS entre depart
    et arrivee (0 si depart == arrivee).
    Méthode : parcours en largeur avec une file (deque), comme
    au thème structures de données.
      - mets (depart, 0) dans la file, marque depart comme visité ;
      - tant que la file n'est pas vide, défile (routeur, distance) ;
      - si un voisin est l'arrivée, renvoie distance + 1 ;
      - sinon enfile les voisins non visités avec distance + 1."""
    # À toi de jouer
    ...


def cout_ospf(reseau, chemin):
    """OSPF : renvoie le coût total d'un chemin donné sous forme
    de liste de routeurs, ex. ["R1", "R2", "R5"].
    Additionne le coût de chaque lien du chemin."""
    # À toi de jouer
    ...


def table_rip(reseau, routeur):
    """Construit la TABLE DE ROUTAGE de routeur au sens de RIP :
    un dictionnaire {destination: prochain saut}.
    Pour chaque destination (différente de routeur), le prochain
    saut est le voisin qui minimise nb_sauts(reseau, voisin, destination)."""
    # À toi de jouer
    ...


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
