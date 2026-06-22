"""Chiffre de César — boîte noire (corrigé)."""


def cesar(texte, decalage):
    """Chiffre (ou déchiffre avec un décalage négatif) par décalage des lettres."""
    res = ""
    for c in texte:
        if c.isalpha():
            base = ord("A") if c.isupper() else ord("a")
            res += chr((ord(c) - base + decalage) % 26 + base)
        else:
            res += c
    return res


if __name__ == "__main__":
    print(cesar("BONJOUR NSI", 3))
    print(cesar("ERQMRXU QVL", -3))
