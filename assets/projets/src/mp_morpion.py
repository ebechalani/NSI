"""Morpion — détection du gagnant — boîte noire (corrigé)."""


def afficher(g):
    """Affiche une grille 3x3 (liste de listes)."""
    for ligne in g:
        print(" | ".join(ligne))


def gagnant(g):
    """Renvoie le symbole gagnant ('X'/'O') ou None."""
    lignes = [list(l) for l in g]
    lignes += [list(col) for col in zip(*g)]
    lignes.append([g[i][i] for i in range(3)])
    lignes.append([g[i][2 - i] for i in range(3)])
    for l in lignes:
        if l[0] != " " and l[0] == l[1] == l[2]:
            return l[0]
    return None


if __name__ == "__main__":
    grille = [[" "] * 3 for _ in range(3)]
    grille[0][0] = grille[1][1] = grille[2][2] = "X"
    afficher(grille)
    print("Gagnant :", gagnant(grille))
