"""Conversion de bases — boîte noire (corrigé)."""


def decimal_vers_binaire(n):
    """Renvoie l'écriture binaire (chaîne) de l'entier n >= 0."""
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits
        n = n // 2
    return bits


def decimal_vers_base(n, b):
    """Renvoie l'écriture de n en base b (2 <= b <= 16)."""
    chiffres = "0123456789ABCDEF"
    if n == 0:
        return "0"
    res = ""
    while n > 0:
        res = chiffres[n % b] + res
        n = n // b
    return res


if __name__ == "__main__":
    print(decimal_vers_binaire(13))
    print(decimal_vers_base(255, 16))
