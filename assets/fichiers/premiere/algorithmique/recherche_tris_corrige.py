# CORRIGÉ PROF — recherche & tris
def recherche(tab, cible):
    for i in range(len(tab)):
        if tab[i] == cible:
            return i
    return -1

def dichotomie(tab, cible):
    gauche, droite = 0, len(tab) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if tab[milieu] == cible:
            return True
        if tab[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return False

def tri_insertion(tab):
    for i in range(1, len(tab)):
        cle = tab[i]
        j = i - 1
        while j >= 0 and tab[j] > cle:
            tab[j + 1] = tab[j]
            j = j - 1
        tab[j + 1] = cle
    return tab

assert recherche([5, 3, 8, 1], 8) == 2
assert recherche([5, 3, 8, 1], 9) == -1
assert dichotomie([1, 3, 5, 8, 12, 20], 12) is True
assert dichotomie([1, 3, 5, 8, 12, 20], 7) is False
assert tri_insertion([5, 2, 9, 1, 7]) == [1, 2, 5, 7, 9]
assert tri_insertion([]) == []
print("Tout est OK — bravo !")
