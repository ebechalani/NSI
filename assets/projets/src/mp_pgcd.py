"""PGCD (algorithme d'Euclide) — boîte noire (corrigé)."""


def pgcd(a, b):
    """Renvoie le plus grand commun diviseur de a et b."""
    while b != 0:
        a, b = b, a % b
    return a


def ppcm(a, b):
    """Renvoie le plus petit commun multiple de a et b."""
    return a * b // pgcd(a, b)


if __name__ == "__main__":
    print(pgcd(36, 24))
    print(ppcm(45, 30))
