# ============================================================
#  Algorithmes gloutons — monnaie, sac à dos, planning
#  (Capytale / Thonny)   Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  Un algorithme GLOUTON applique toujours la même règle locale
#  (« le meilleur choix sur le moment ») et ne revient jamais en arrière.
#  Rapide et simple… mais pas toujours optimal : c'est ce que ce TP montre.
#  Complète les fonctions dans l'ordre ; décommente les asserts au fur et à
#  mesure. Exécute le fichier : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================


# ---------- Partie 1 : décimal -> binaire (échauffement) ----------

def dec_vers_bin_16b(n):
    """Écriture binaire de n (0 <= n < 65536) sur 16 bits, méthode gloutonne :
    du poids fort au poids faible (i = 15, 14, ..., 0), si n >= 2**i on écrit
    "1" et on retire 2**i à n, sinon on écrit "0"."""
    resultat = ""
    for i in range(15, -1, -1):
        ...   # À COMPLÉTER : ajouter "1" ou "0" à resultat, retirer 2 ** i si besoin
    return resultat


def dec_vers_bin(n):
    """Écriture binaire de n sans limite : trouver d'abord le plus grand rang i
    tel que 2**i <= n, puis appliquer la méthode gloutonne avec un while."""
    if n == 0:
        return "0"
    i = 0
    ...   # À COMPLÉTER : augmenter i tant que 2 ** (i + 1) <= n
    resultat = ""
    ...   # À COMPLÉTER : while i >= 0 : même règle qu'au-dessus, puis i = i - 1
    return resultat


# assert dec_vers_bin_16b(5) == "0000000000000101"
# assert dec_vers_bin_16b(65535) == "1111111111111111"
# assert dec_vers_bin(5) == "101"
# assert dec_vers_bin(1000) == "1111101000"
# assert dec_vers_bin(70000) == bin(70000)[2:]


# ---------- Partie 2 : rendu de monnaie ----------

rst = 548
lst_piece = [200, 100, 50, 20, 10, 5, 2, 1]
lst_rendu = []
i = 0
...   # À COMPLÉTER : tant qu'il reste une somme à rendre, prendre la pièce lst_piece[i]
      # si elle est <= rst (et la retirer de rst), sinon passer à la pièce suivante (i + 1)
print(lst_rendu)   # attendu : [200, 200, 100, 20, 20, 5, 2, 1]


def rendu_glouton(rst, lst_piece):
    """Liste des pièces rendues pour la somme rst : toujours la plus grande pièce
    possible (lst_piece est triée par valeur décroissante)."""
    lst_rendu = []
    ...   # À COMPLÉTER : la même boucle, dans une fonction
    return lst_rendu


# assert rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2, 1]) == [10, 1]
# assert rendu_glouton(48, [200, 100, 50, 20, 10, 5, 2, 1]) == [20, 20, 5, 2, 1]
# assert rendu_glouton(52, [200, 100, 50, 20, 10, 5, 2, 1]) == [50, 2]

# Un système monétaire NON canonique (Royaume-Uni avant 1971) : optimal ?
# print(rendu_glouton(48, [30, 24, 12, 6, 3, 1]))
# print(rendu_glouton(52, [30, 24, 12, 6, 3, 1]))
# Plus de pièce de 1 centime : que se passe-t-il ?
# print(rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2]))


# ---------- Partie 3 : sac à dos ----------

valeur_masse_objets = [(5, 13), (4, 8), (3, 10), (7, 12)]   # (valeur en euros, masse en kg)


def masse(liste_objet):
    """Masse totale d'une liste d'objets (valeur, masse)."""
    total = 0
    ...   # À COMPLÉTER
    return total


def valeur(liste_objet):
    """Valeur totale d'une liste d'objets (valeur, masse)."""
    total = 0
    ...   # À COMPLÉTER
    return total


# assert masse(valeur_masse_objets) == 43
# assert valeur(valeur_masse_objets) == 19


def sac_a_dos_1(masse_max, liste_objet):
    """Critère 1 : on parcourt les objets par VALEUR décroissante et on prend
    chacun s'il rentre encore dans le sac."""
    tries = sorted(liste_objet, reverse=True)   # tri sur le premier élément : la valeur
    sac = []
    ...   # À COMPLÉTER : for obj in tries : si masse(sac) + obj[1] <= masse_max, l'ajouter
    return sac


# assert sac_a_dos_1(15, valeur_masse_objets) == [(7, 12)]
# assert sac_a_dos_1(21, valeur_masse_objets) == [(7, 12), (4, 8)]
# assert sac_a_dos_1(30, valeur_masse_objets) == [(7, 12), (5, 13)]   # 12 euros : est-ce optimal ?


def sac_a_dos_2(masse_max, liste_objet):
    """Critère 2 : on parcourt les objets par rapport VALEUR / MASSE décroissant."""
    tries = sorted(liste_objet, key=lambda obj: obj[0] / obj[1], reverse=True)
    sac = []
    ...   # À COMPLÉTER : la même boucle qu'au-dessus
    return sac


# assert sac_a_dos_2(30, valeur_masse_objets) == [(7, 12), (4, 8), (3, 10)]   # 14 euros pour 30 kg

valeur_masse = [(35, 120), (30, 30), (26, 50), (21, 20), (18, 40), (17, 60), (15, 30),
                (14, 10), (13, 14), (11, 36), (10, 72), (9, 86), (8, 5), (7, 3), (6, 7),
                (5, 23), (4, 49), (3, 57), (2, 69), (1, 12)]
# for max_sac in (205, 420):
#     s1 = sac_a_dos_1(max_sac, valeur_masse)
#     s2 = sac_a_dos_2(max_sac, valeur_masse)
#     print(max_sac, "kg : critère valeur ->", valeur(s1), "euros", masse(s1), "kg ;",
#           "critère valeur/masse ->", valeur(s2), "euros", masse(s2), "kg")


# ---------- Partie 4 : planning de conférences ----------

# Un conférencier = (début, fin, nom). Cas 1 et 4 fournis ; cas 2 et 3 décrits sur le site.
tab_conf_1 = [(3, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (1, 2, 'C4')]
tab_conf_2 = [(2, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (0, 2, 'C4')]
tab_conf_3 = [(0, 3, 'C1'), (1, 2, 'C2'), (2, 3, 'C3')]
tab_conf_4 = [(0, 7, 'C1'), (2, 5, 'C2'), (6, 8, 'C3'), (1, 2, 'C4'), (5, 6, 'C5'),
              (0, 2, 'C6'), (4, 7, 'C7'), (0, 1, 'C8'), (3, 6, 'C9'), (1, 3, 'C10'),
              (4, 5, 'C11'), (6, 8, 'C12'), (0, 2, 'C13'), (5, 7, 'C14'), (1, 4, 'C15')]
tab_conf_5 = [(0, 3, 'C1'), (2, 4, 'C2'), (3, 6, 'C3'), (6, 8, 'C4')]   # (ajouté) contre-exemple de la règle « la plus courte »


def planning1(tab_inter):
    """Glouton : on prend toujours la conférence compatible qui FINIT le plus tôt."""
    tries = sorted(tab_inter, key=lambda c: c[1])   # par heure de fin croissante
    planning = []
    fin_precedente = 0
    ...   # À COMPLÉTER : for debut, fin, nom in tries : si debut >= fin_precedente,
          # ajouter nom au planning et mettre à jour fin_precedente
    return planning


# assert planning1(tab_conf_1) == ['C2', 'C4', 'C3', 'C1']
# assert planning1(tab_conf_2) == ['C2', 'C3']
# assert planning1(tab_conf_3) == ['C2', 'C3']
# assert planning1(tab_conf_5) == ['C1', 'C3', 'C4']
# assert planning1(tab_conf_4) == ['C8', 'C4', 'C2', 'C5', 'C3']


# ---------- Partie 5 : recherche exhaustive (récursive) ----------

def planning2(tab_inter, debut=0, i=0):
    """Meilleur planning (le plus de conférences) avec les conférences d'indice
    >= i qui commencent après debut. tab_inter est trié par heure de début.
    - plus de conférence : planning vide
    - la conférence i commence avant debut : on passe à i + 1
    - sinon : solution AVEC la conférence i (puis les suivantes après sa fin)
      ou SANS elle ; on renvoie la plus longue."""
    if i >= len(tab_inter):
        return []
    d, f, nom = tab_inter[i]
    ...   # À COMPLÉTER
    return []


# assert planning2(sorted(tab_conf_1)) == ['C2', 'C4', 'C3', 'C1']
# assert planning2(sorted(tab_conf_4)) == ['C8', 'C4', 'C2', 'C5', 'C12']


def duree_occupee(noms, tab_inter):
    """Somme des durées des conférences retenues (moins de trous = plus occupé)."""
    total = 0
    for d, f, nom in tab_inter:
        if nom in noms:
            total = total + (f - d)
    return total


def planning3(tab_inter, debut=0, i=0):
    """Comme planning2 ; à nombre égal de conférences, on garde la solution qui
    occupe le plus la salle (le moins de trous)."""
    ...   # À COMPLÉTER
    return []


# assert planning3(sorted(tab_conf_2)) == ['C4', 'C1']   # 2 conférences sans trou, au lieu de C2 puis C3


# ---------- Partie 6 (bonus) : Fibonacci, récursif puis dynamique ----------

appels = 0


def fiboR(n):
    """Fibonacci récursif : F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).
    La variable globale appels compte les appels de la fonction."""
    global appels
    appels = appels + 1
    ...   # À COMPLÉTER
    return 0


dicFibo = {0: 0, 1: 1}


def fiboD(n):
    """Programmation dynamique : si n est déjà dans dicFibo on renvoie la valeur
    mémorisée, sinon on la calcule, on la range dans dicFibo et on la renvoie."""
    ...   # À COMPLÉTER
    return 0


# for n in (6, 10, 20, 25):
#     appels = 0
#     print("fiboR(", n, ") =", fiboR(n), "en", appels, "appels")
# assert fiboD(25) == 75025
# assert fiboD(60) == 1548008755920
# print("Tout est OK")
