# ============================================================
#  PORTES LOGIQUES ET DEMI-ADDITIONNEUR — CORRIGE PROF
#  Thème : Architectures matérielles et systèmes d'exploitation
# ============================================================


def ET(a, b):
    """Porte ET : renvoie 1 si a et b valent tous les deux 1."""
    if a == 1 and b == 1:
        return 1
    return 0


def OU(a, b):
    """Porte OU : renvoie 1 si au moins une entrée vaut 1."""
    if a == 1 or b == 1:
        return 1
    return 0


def NON(a):
    """Porte NON : renvoie l'inverse de a."""
    if a == 1:
        return 0
    return 1


def XOR(a, b):
    """Porte XOR écrite uniquement avec ET, OU, NON :
    (a OU b) ET NON(a ET b)."""
    return ET(OU(a, b), NON(ET(a, b)))


def demi_additionneur(a, b):
    """Additionne deux bits : renvoie (somme, retenue)."""
    somme = XOR(a, b)
    retenue = ET(a, b)
    return somme, retenue


# ---------- Tests ----------

assert ET(1, 1) == 1 and ET(1, 0) == 0 and ET(0, 0) == 0
assert OU(0, 0) == 0 and OU(1, 0) == 1 and OU(1, 1) == 1
assert NON(0) == 1 and NON(1) == 0
assert XOR(0, 0) == 0 and XOR(1, 1) == 0 and XOR(0, 1) == 1 and XOR(1, 0) == 1

assert demi_additionneur(0, 0) == (0, 0)
assert demi_additionneur(0, 1) == (1, 0)
assert demi_additionneur(1, 0) == (1, 0)
assert demi_additionneur(1, 1) == (0, 1)

print("Corrigé : toutes les portes fonctionnent.")

print("a b | somme retenue")
for a in (0, 1):
    for b in (0, 1):
        s, r = demi_additionneur(a, b)
        print(a, b, "|", s, "    ", r)

# Notes pour la classe :
# - le défi XOR avec ET/OU/NON : attendre (a OU b) ET NON(a ET b) ;
#   accepter aussi (a ET NON b) OU (NON a ET b).
# - bien faire verbaliser : 1 + 1 = 10 en binaire, d'où somme 0 retenue 1.
# - prolongement Logisim : câbler le même circuit avec Addition.circ.
