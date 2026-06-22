"""Chiffre de Vigenère — boîte noire (corrigé)."""


def vigenere(texte, cle, sens=1):
    """Chiffre (sens=1) ou déchiffre (sens=-1) avec la clé donnée."""
    res, j = "", 0
    for c in texte:
        if c.isalpha():
            d = (ord(cle[j % len(cle)].lower()) - ord("a")) * sens
            base = ord("A") if c.isupper() else ord("a")
            res += chr((ord(c) - base + d) % 26 + base)
            j += 1
        else:
            res += c
    return res


if __name__ == "__main__":
    chiffre = vigenere("BONJOUR", "CLE")
    print(chiffre)
    print(vigenere(chiffre, "CLE", -1))
