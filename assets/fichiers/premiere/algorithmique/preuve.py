# ============================================================
#  TP — Prouver un programme : assertions, invariant, variant
#  (Capytale / Thonny)   Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  Un assert ne PROUVE rien : il vérifie une propriété à l'exécution et
#  arrête le programme si elle est fausse. Mais écrire les propriétés
#  (précondition, postcondition, invariant, variant) est la première étape
#  de la preuve. Complète dans l'ordre, décommente les asserts de test.
#  Exécute : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================


# ---------- Partie 1 : précondition, postcondition, substitution ----------

def f(x):
    """Précondition : x >= 0.  Postcondition : le résultat est >= 1."""
    assert x >= 0, "précondition : x doit être positif ou nul"
    x = x + 1
    ...   # À COMPLÉTER : assert de la propriété vraie ici (PROP 1)
    x = 2 * x
    ...   # À COMPLÉTER : PROP 2
    x = x - 1
    ...   # À COMPLÉTER : la postcondition
    return x


# assert f(0) == 1 and f(5) == 11


# ---------- Partie 2 : invariant de boucle (correction partielle) ----------

def maximum(liste):
    """Précondition : liste non vide.  Postcondition : renvoie son plus grand élément."""
    assert len(liste) > 0, "précondition : liste non vide"
    maxi = liste[0]
    for i in range(len(liste)):
        if liste[i] > maxi:
            maxi = liste[i]
        ...   # À COMPLÉTER : assert de l'invariant « maxi est le plus grand de liste[0..i] »
              # (max(liste[:i + 1]) peut servir d'oracle)
    ...       # À COMPLÉTER : assert de la postcondition
    return maxi


liste = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]
# assert maximum(liste) == 9
# assert maximum(liste[:4]) == 4
# assert maximum([-3, -8, -1]) == -1


# ---------- Partie 3 : variant de boucle (terminaison, correction totale) ----------

def maximum_while(liste):
    """Même fonction avec un while : le variant prouve la terminaison."""
    assert len(liste) > 0
    maxi = liste[0]
    i = 0
    while i < len(liste):
        variant = ...                          # À COMPLÉTER : un entier naturel qui décroît à chaque tour
        if liste[i] > maxi:
            maxi = liste[i]
        i = i + 1
        ...   # À COMPLÉTER : assert que le variant a strictement diminué
    return maxi


# assert maximum_while(liste) == 9


# ---------- Partie 4 : l'horloge, un invariant qu'une fonction peut casser ----------

def invariant_heure(heures, minutes):
    """L'invariant d'une heure affichée : 0 <= heures < 24 et 0 <= minutes < 60."""
    assert 0 <= heures < 24, "heures hors de [0, 23]"
    assert 0 <= minutes < 60, "minutes hors de [0, 59]"


def incrementer_naif(heures, minutes):
    """Version naïve : ajoute une minute. Trouve une entrée qui casse l'invariant."""
    invariant_heure(heures, minutes)
    minutes = minutes + 1
    invariant_heure(heures, minutes)
    return heures, minutes


def incrementer(heures, minutes):
    """Ajoute une minute en conservant l'invariant (trois cas)."""
    invariant_heure(heures, minutes)
    ...   # À COMPLÉTER : si minutes < 59 ... sinon si heures < 23 ... sinon ...
    invariant_heure(heures, minutes)
    return heures, minutes


# assert incrementer(10, 59) == (11, 0)
# assert incrementer(23, 59) == (0, 0)
# h, m = 0, 0
# for _ in range(1440):
#     h, m = incrementer(h, m)
# assert (h, m) == (0, 0)


# ---------- Partie 5 (bonus) : le tri à bulles naïf, correction totale ----------

def nb_inversions(liste):
    """Nombre de couples mal rangés (i < j et liste[i] > liste[j])."""
    total = 0
    ...   # À COMPLÉTER : deux boucles imbriquées
    return total


def tri_bulles(liste):
    inversion = True
    while inversion:
        inversion = False
        i = 0
        while i < len(liste) - 1:
            if liste[i] > liste[i + 1]:
                liste[i], liste[i + 1] = liste[i + 1], liste[i]
                inversion = True
            i = i + 1
    return liste


# assert nb_inversions([3, 1, 2]) == 2
# assert tri_bulles([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]) == [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9]

print("Tout est OK")
