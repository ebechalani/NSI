"""TP — Algorithmes gloutons (corrigé prof, vérifié).

Partie 1 : décimal → binaire par la méthode gloutonne.
Partie 2 : rendu de monnaie, systèmes canoniques ou non.
Partie 3 : sac à dos, critère valeur puis critère valeur/masse.
Partie 4 : planning de conférences, glouton puis recherche exhaustive.
Partie 5 : Fibonacci récursif, explosion des appels, programmation dynamique.
"""

# ---------- Partie 1 : décimal -> binaire ----------

def dec_vers_bin_16b(n):
    """Écriture binaire de n (0 <= n < 65536) sur 16 bits, méthode gloutonne :
    du poids fort au poids faible, on prend 2**i dès que c'est possible."""
    resultat = ""
    for i in range(15, -1, -1):        # 15, 14, ..., 0
        if n >= 2 ** i:
            resultat = resultat + "1"
            n = n - 2 ** i
        else:
            resultat = resultat + "0"
    return resultat


def dec_vers_bin(n):
    """Écriture binaire de n (sans limite) : on cherche d'abord le plus grand
    rang i tel que 2**i <= n, puis on applique la méthode gloutonne."""
    if n == 0:
        return "0"
    i = 0
    while 2 ** (i + 1) <= n:
        i = i + 1
    resultat = ""
    while i >= 0:
        if n >= 2 ** i:
            resultat = resultat + "1"
            n = n - 2 ** i
        else:
            resultat = resultat + "0"
        i = i - 1
    return resultat


assert dec_vers_bin_16b(5) == "0000000000000101"
assert dec_vers_bin_16b(65535) == "1111111111111111"
assert dec_vers_bin(5) == "101"
assert dec_vers_bin(1000) == "1111101000"
assert dec_vers_bin(70000) == bin(70000)[2:]


# ---------- Partie 2 : rendu de monnaie ----------

rst = 548
lst_piece = [200, 100, 50, 20, 10, 5, 2, 1]
lst_rendu = []
i = 0
while rst > 0 and i < len(lst_piece):
    if lst_piece[i] <= rst:            # la plus grande pièce possible
        lst_rendu.append(lst_piece[i])
        rst = rst - lst_piece[i]
    else:
        i = i + 1                      # cette pièce est trop grande : la suivante
print(lst_rendu)                       # [200, 200, 100, 20, 20, 5, 2, 1]


def rendu_glouton(rst, lst_piece):
    """Liste des pièces rendues pour la somme rst, en prenant toujours la plus
    grande pièce possible (lst_piece triée par valeur décroissante).
    S'il reste une somme impossible à rendre, elle est simplement abandonnée."""
    lst_rendu = []
    i = 0
    while rst > 0 and i < len(lst_piece):
        if lst_piece[i] <= rst:
            lst_rendu.append(lst_piece[i])
            rst = rst - lst_piece[i]
        else:
            i = i + 1
    return lst_rendu


assert rendu_glouton(548, [200, 100, 50, 20, 10, 5, 2, 1]) == [200, 200, 100, 20, 20, 5, 2, 1]
assert rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2, 1]) == [10, 1]
assert rendu_glouton(48, [200, 100, 50, 20, 10, 5, 2, 1]) == [20, 20, 5, 2, 1]
assert rendu_glouton(52, [200, 100, 50, 20, 10, 5, 2, 1]) == [50, 2]

# Système non canonique (Royaume-Uni avant 1971) : le glouton n'est plus optimal
print(rendu_glouton(48, [30, 24, 12, 6, 3, 1]))   # [30, 12, 6] : 3 pièces, or 24 + 24 en fait 2
print(rendu_glouton(52, [30, 24, 12, 6, 3, 1]))   # [30, 12, 6, 3, 1] : 5 pièces, or 24 + 24 + 3 + 1 en fait 4
# Plus de pièce de 1 : le glouton s'enferme dans une impasse
print(rendu_glouton(11, [200, 100, 50, 20, 10, 5, 2]))   # [10] : il reste 1 centime impossible à rendre ; 5 + 2 + 2 + 2 marchait


# ---------- Partie 3 : sac à dos ----------

valeur_masse_objets = [(5, 13), (4, 8), (3, 10), (7, 12)]   # (valeur en euros, masse en kg)


def masse(liste_objet):
    total = 0
    for v, m in liste_objet:
        total = total + m
    return total


def valeur(liste_objet):
    total = 0
    for v, m in liste_objet:
        total = total + v
    return total


assert masse(valeur_masse_objets) == 43
assert valeur(valeur_masse_objets) == 19


def sac_a_dos_1(masse_max, liste_objet):
    """Critère 1 : les objets par valeur décroissante ; on prend chacun s'il rentre."""
    tries = sorted(liste_objet, reverse=True)          # tri sur la valeur (premier élément)
    sac = []
    for obj in tries:
        if masse(sac) + obj[1] <= masse_max:
            sac.append(obj)
    return sac


assert sac_a_dos_1(15, valeur_masse_objets) == [(7, 12)]
assert sac_a_dos_1(21, valeur_masse_objets) == [(7, 12), (4, 8)]
assert sac_a_dos_1(30, valeur_masse_objets) == [(7, 12), (5, 13)]      # 12 € pour 25 kg : pas optimal !

# Critère 2 : le rapport valeur / masse
valeur_masse_2 = sorted([(v, m, v / m) for v, m in valeur_masse_objets], key=lambda x: x[2], reverse=True)
print(valeur_masse_2)   # (7, 12) puis (4, 8) puis (5, 13) puis (3, 10)


def sac_a_dos_2(masse_max, liste_objet):
    """Critère 2 : les objets par rapport valeur/masse décroissant ; on prend chacun s'il rentre."""
    tries = sorted(liste_objet, key=lambda obj: obj[0] / obj[1], reverse=True)
    sac = []
    for obj in tries:
        if masse(sac) + obj[1] <= masse_max:
            sac.append(obj)
    return sac


assert sac_a_dos_2(30, valeur_masse_objets) == [(7, 12), (4, 8), (3, 10)]   # 14 € pour 30 kg : optimal

valeur_masse = [(35, 120), (30, 30), (26, 50), (21, 20), (18, 40), (17, 60), (15, 30),
                (14, 10), (13, 14), (11, 36), (10, 72), (9, 86), (8, 5), (7, 3), (6, 7),
                (5, 23), (4, 49), (3, 57), (2, 69), (1, 12)]
for max_sac in (205, 420):
    s1 = sac_a_dos_1(max_sac, valeur_masse)
    s2 = sac_a_dos_2(max_sac, valeur_masse)
    print(max_sac, "kg : critère valeur ->", valeur(s1), "€", masse(s1), "kg ; critère valeur/masse ->", valeur(s2), "€", masse(s2), "kg")


# ---------- Partie 4 : planning de conférences ----------

# Un conférencier = (début, fin, nom)
tab_conf_1 = [(3, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (1, 2, 'C4')]
tab_conf_2 = [(0, 4, 'C1'), (1, 2, 'C2'), (2, 3, 'C3'), (3, 4, 'C4')]
tab_conf_3 = [(0, 3, 'C1'), (2, 4, 'C2'), (3, 6, 'C3'), (6, 8, 'C4')]
tab_conf_4 = [(0, 7, 'C1'), (2, 5, 'C2'), (6, 8, 'C3'), (1, 2, 'C4'), (5, 6, 'C5'),
              (0, 2, 'C6'), (4, 7, 'C7'), (0, 1, 'C8'), (3, 6, 'C9'), (1, 3, 'C10'),
              (4, 5, 'C11'), (6, 8, 'C12'), (0, 2, 'C13'), (5, 7, 'C14'), (1, 4, 'C15')]
# cas 5 : deux plannings optimaux (2 conférences) mais l'un laisse des trous
tab_conf_5 = [(2, 4, 'C1'), (0, 1, 'C2'), (2, 3, 'C3'), (0, 2, 'C4')]


def planning1(tab_inter):
    """Glouton : on prend toujours la conférence compatible qui FINIT le plus tôt."""
    tries = sorted(tab_inter, key=lambda c: c[1])      # par heure de fin croissante
    planning = []
    fin_precedente = 0
    for debut, fin, nom in tries:
        if debut >= fin_precedente:
            planning.append(nom)
            fin_precedente = fin
    return planning


assert planning1(tab_conf_1) == ['C2', 'C4', 'C3', 'C1']
assert planning1(tab_conf_2) == ['C2', 'C3', 'C4']   # « commence le plus tôt » aurait donné ['C1'] seule
assert planning1(tab_conf_3) == ['C1', 'C3', 'C4']   # « la plus courte » aurait donné ['C2', 'C4']
assert planning1(tab_conf_4) == ['C8', 'C4', 'C2', 'C5', 'C3']
assert planning1(tab_conf_5) == ['C2', 'C3']


def planning2(tab_inter, debut=0, i=0):
    """Recherche exhaustive (récursive) : meilleur planning avec les conférences
    d'indice >= i qui commencent après debut. tab_inter est trié par heure de début."""
    if i >= len(tab_inter):
        return []
    d, f, nom = tab_inter[i]
    if d < debut:
        return planning2(tab_inter, debut, i + 1)
    avec = [nom] + planning2(tab_inter, f, i + 1)      # on prend la conférence i
    sans = planning2(tab_inter, debut, i + 1)          # on ne la prend pas
    if len(avec) >= len(sans):
        return avec
    return sans


assert planning2(sorted(tab_conf_1)) == ['C2', 'C4', 'C3', 'C1']
assert planning2(sorted(tab_conf_2)) == ['C2', 'C3', 'C4']
assert planning2(sorted(tab_conf_3)) == ['C1', 'C3', 'C4']
assert planning2(sorted(tab_conf_4)) == ['C8', 'C4', 'C2', 'C5', 'C12']
assert planning2(sorted(tab_conf_5)) == ['C2', 'C3']


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
    if i >= len(tab_inter):
        return []
    d, f, nom = tab_inter[i]
    if d < debut:
        return planning3(tab_inter, debut, i + 1)
    avec = [nom] + planning3(tab_inter, f, i + 1)
    sans = planning3(tab_inter, debut, i + 1)
    if len(avec) > len(sans):
        return avec
    if len(avec) < len(sans):
        return sans
    if duree_occupee(avec, tab_inter) >= duree_occupee(sans, tab_inter):
        return avec
    return sans


assert planning3(sorted(tab_conf_1)) == ['C2', 'C4', 'C3', 'C1']
assert planning3(sorted(tab_conf_2)) == ['C2', 'C3', 'C4']
assert planning3(sorted(tab_conf_3)) == ['C1', 'C3', 'C4']
assert planning3(sorted(tab_conf_4)) == ['C8', 'C4', 'C2', 'C5', 'C12']   # 8 h occupées sur 8 : aucun trou
assert planning3(sorted(tab_conf_5)) == ['C4', 'C1']                      # 4 h occupées, au lieu de C2 puis C3 (2 h)


# ---------- Partie 5 : Fibonacci, récursif puis dynamique ----------

appels = 0


def fiboR(n):
    """Fibonacci récursif : F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)."""
    global appels
    appels = appels + 1
    if n < 2:
        return n
    return fiboR(n - 1) + fiboR(n - 2)


for n in (6, 10, 20, 25):
    appels = 0
    r = fiboR(n)
    print("fiboR(", n, ") =", r, "en", appels, "appels")

dicFibo = {0: 0, 1: 1}


def fiboD(n):
    """Programmation dynamique : chaque résultat connu est mémorisé dans dicFibo."""
    if n in dicFibo:
        return dicFibo[n]
    dicFibo[n] = fiboD(n - 1) + fiboD(n - 2)
    return dicFibo[n]


assert fiboD(25) == 75025
assert fiboD(60) == 1548008755920
print("fiboD(60) =", fiboD(60), "avec", len(dicFibo), "valeurs mémorisées")
print("Tout est vérifié.")
