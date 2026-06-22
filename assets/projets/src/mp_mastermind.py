"""Mastermind — boîte noire (corrigé). Jeu interactif : mastermind()."""
import random


def mastermind():
    """Lance une partie de Mastermind (4 chiffres de 1 à 6) en console."""
    code = [random.randint(1, 6) for _ in range(4)]
    for tour in range(10):
        prop = [int(c) for c in input("4 chiffres (1-6) : ")]
        bien = sum(1 for i in range(4) if prop[i] == code[i])
        communs = sum(min(prop.count(d), code.count(d)) for d in set(prop))
        mal = communs - bien
        print(bien, "bien placés,", mal, "mal placés")
        if bien == 4:
            print("Gagné en", tour + 1, "coups !")
            return
    print("Perdu ! Code :", code)


if __name__ == "__main__":
    mastermind()
