# ============================================================
#  PORTES LOGIQUES ET DEMI-ADDITIONNEUR — squelette à compléter
#  Thème : Architectures matérielles et systèmes d'exploitation
#  (séance 3 — du transistor aux portes logiques)
# ------------------------------------------------------------
#  Les entrées et sorties valent 0 ou 1 (comme dans un circuit).
#  Rappel des portes :
#    ET  (AND) : donne 1 si les DEUX entrées valent 1
#    OU  (OR)  : donne 1 si AU MOINS UNE entrée vaut 1
#    NON (NOT) : inverse l'entrée
#    XOR       : donne 1 si les deux entrées sont DIFFERENTES
#
#  A FAIRE : complète les fonctions marquées ... puis lance le
#  fichier : tous les asserts doivent passer.
# ============================================================


def ET(a, b):
    """Porte ET : renvoie 1 si a et b valent tous les deux 1."""
    if a == 1 and b == 1:
        return 1
    return 0


def OU(a, b):
    """Porte OU : renvoie 1 si au moins une entrée vaut 1."""
    ...   # <-- à compléter (sur le modèle de ET)


def NON(a):
    """Porte NON : renvoie l'inverse de a."""
    ...   # <-- à compléter


def XOR(a, b):
    """Porte XOR : renvoie 1 si a et b sont différents.
    Défi : écris-la UNIQUEMENT avec ET, OU et NON."""
    ...   # <-- à compléter


def demi_additionneur(a, b):
    """Additionne deux bits : renvoie (somme, retenue).
    Souviens-toi du cours : somme = XOR, retenue = ET."""
    somme = ...      # <-- quelle porte donne la somme ?
    retenue = ...    # <-- quelle porte donne la retenue ?
    return somme, retenue


# ---------- Tests fournis : ne modifie pas cette partie ----------

assert ET(1, 1) == 1 and ET(1, 0) == 0 and ET(0, 0) == 0
assert OU(0, 0) == 0 and OU(1, 0) == 1 and OU(1, 1) == 1
assert NON(0) == 1 and NON(1) == 0
assert XOR(0, 0) == 0 and XOR(1, 1) == 0 and XOR(0, 1) == 1 and XOR(1, 0) == 1

assert demi_additionneur(0, 0) == (0, 0)
assert demi_additionneur(0, 1) == (1, 0)
assert demi_additionneur(1, 0) == (1, 0)
assert demi_additionneur(1, 1) == (0, 1), "1 + 1 = 10 en binaire : somme 0, retenue 1"

print("Toutes les portes fonctionnent !")

# Affiche la table de vérité complète du demi-additionneur :
print("a b | somme retenue")
for a in (0, 1):
    for b in (0, 1):
        s, r = demi_additionneur(a, b)
        print(a, b, "|", s, "    ", r)
