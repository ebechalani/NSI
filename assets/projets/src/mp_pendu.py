"""Le Pendu — boîte noire (corrigé). Jeu interactif : pendu()."""
import random


def pendu(mots=None):
    """Lance une partie de pendu en console."""
    if mots is None:
        mots = ["python", "ordinateur", "algorithme", "variable"]
    mot = random.choice(mots)
    trouvees = set()
    essais = 6
    while essais > 0:
        affichage = "".join(c if c in trouvees else "_" for c in mot)
        print(affichage, "  essais restants :", essais)
        if "_" not in affichage:
            print("Gagné !")
            return
        lettre = input("Propose une lettre : ").lower()
        if lettre in mot:
            trouvees.add(lettre)
        else:
            essais -= 1
    print("Perdu ! Le mot était :", mot)


if __name__ == "__main__":
    pendu()
