"""TP — Prouver un programme : assertions, invariant, variant (corrigé prof, vérifié).

D'après le cours « Correction des algorithmes » du DIU Enseigner l'informatique
au lycée (B. Mermet, Université Le Havre Normandie) : validation, preuve de
programme, invariant et variant de boucle. Exécuter le fichier : il rejoue
toutes les vérifications et affiche « Tout est vérifié. ».
"""

# ---------- Partie 1 : précondition, postcondition, substitution ----------

def f(x):
    """Précondition : x >= 0.  Postcondition : le résultat est >= 1."""
    assert x >= 0, "précondition : x doit être positif ou nul"
    x = x + 1
    assert x >= 1          # PROP 1 : x >= 0 avant, donc x + 1 >= 1
    x = 2 * x
    assert x >= 2          # PROP 2 : x >= 1 avant, donc 2 * x >= 2
    x = x - 1
    assert x >= 1          # POST   : x >= 2 avant, donc x - 1 >= 1
    return x


for valeur in (0, 1, 5, 100):
    assert f(valeur) >= 1
assert f(0) == 1 and f(5) == 11


# ---------- Partie 2 : invariant de boucle (correction partielle) ----------

def maximum(liste):
    """Précondition : liste non vide.  Postcondition : renvoie son plus grand élément."""
    assert len(liste) > 0, "précondition : liste non vide"
    maxi = liste[0]
    for i in range(len(liste)):
        if liste[i] > maxi:
            maxi = liste[i]
        # Invariant : maxi est le plus grand élément de liste[0], ..., liste[i]
        assert maxi == max(liste[:i + 1])      # max() de Python sert d'oracle, pas de preuve
    assert maxi == max(liste)                  # postcondition
    return maxi


liste = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]
assert maximum(liste) == 9
assert maximum(liste[:4]) == 4
assert maximum([7]) == 7
assert maximum([-3, -8, -1]) == -1


# ---------- Partie 3 : variant de boucle (terminaison, correction totale) ----------

def maximum_while(liste):
    """Même fonction avec un while : le variant len(liste) - i prouve la terminaison."""
    assert len(liste) > 0
    maxi = liste[0]
    i = 0
    while i < len(liste):
        variant = len(liste) - i               # entier naturel (i < len(liste))
        assert variant >= 1
        if liste[i] > maxi:
            maxi = liste[i]
        assert maxi == max(liste[:i + 1])      # invariant
        i = i + 1
        assert len(liste) - i < variant        # le variant a strictement diminué
    assert maxi == max(liste)
    return maxi


assert maximum_while(liste) == 9
assert maximum_while([42]) == 42


# ---------- Partie 4 : l'horloge, un invariant qu'une fonction peut casser ----------

def invariant_heure(heures, minutes):
    """L'invariant d'une heure affichée : 0 <= heures < 24 et 0 <= minutes < 60."""
    assert 0 <= heures < 24, "heures hors de [0, 23]"
    assert 0 <= minutes < 60, "minutes hors de [0, 59]"


def incrementer_naif(heures, minutes):
    """Version naïve : ajoute une minute. Elle casse l'invariant dès que minutes vaut 59."""
    invariant_heure(heures, minutes)
    minutes = minutes + 1
    invariant_heure(heures, minutes)
    return heures, minutes


def incrementer(heures, minutes):
    """Ajoute une minute en conservant l'invariant (trois cas)."""
    invariant_heure(heures, minutes)
    heures_avant, minutes_avant = heures, minutes
    if minutes < 59:
        minutes = minutes + 1
    elif heures < 23:
        heures, minutes = heures + 1, 0
    else:
        heures, minutes = 0, 0
    # Postcondition, un assert par cas
    assert minutes_avant == 59 or (minutes == minutes_avant + 1 and heures == heures_avant)
    assert minutes_avant != 59 or heures_avant == 23 or (heures == heures_avant + 1 and minutes == 0)
    assert minutes_avant != 59 or heures_avant != 23 or (heures == 0 and minutes == 0)
    invariant_heure(heures, minutes)
    return heures, minutes


assert incrementer_naif(10, 30) == (10, 31)
try:
    incrementer_naif(10, 59)
    raise RuntimeError("la version naïve aurait dû échouer")
except AssertionError:
    pass                                       # l'invariant a bien détecté 10 h 60
assert incrementer(10, 59) == (11, 0)
assert incrementer(23, 59) == (0, 0)
h, m = 0, 0
for _ in range(1440):                          # une journée entière, minute par minute
    h, m = incrementer(h, m)
assert (h, m) == (0, 0)


# ---------- Partie 5 : le tri à bulles naïf, correction totale ----------

def nb_inversions(liste):
    """Nombre de couples mal rangés (i < j et liste[i] > liste[j]) : la mesure du désordre."""
    total = 0
    for i in range(len(liste)):
        for j in range(i + 1, len(liste)):
            if liste[i] > liste[j]:
                total = total + 1
    return total


def tri_bulles(liste):
    """Tri à bulles naïf (d'après le DIU) : on échange deux voisins mal rangés,
    et on recommence un passage tant que le précédent a produit un échange."""
    inversion = True
    while inversion:
        variant = nb_inversions(liste) + 1     # + 1 : inversion vaut True en entrée de boucle
        inversion = False
        i = 0
        while i < len(liste) - 1:
            if liste[i] > liste[i + 1]:
                liste[i], liste[i + 1] = liste[i + 1], liste[i]   # exactement une inversion de moins
                inversion = True
            i = i + 1
        assert nb_inversions(liste) + (1 if inversion else 0) < variant   # le variant décroît
    assert nb_inversions(liste) == 0           # postcondition : plus aucun couple mal rangé
    return liste


assert tri_bulles([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]) == [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9]
assert tri_bulles([]) == []
assert tri_bulles([5]) == [5]
assert tri_bulles([2, 1]) == [1, 2]
assert nb_inversions([3, 1, 2]) == 2

print("Tout est vérifié.")
