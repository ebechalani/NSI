# ----------------------------------------------------------------
# CORRIGÉ PROF — Mini-projet : LE PENDU (séance 11)
# ----------------------------------------------------------------
# Version conforme au mini-projet « Le Pendu » du site (le corrigé
# du site utilise un set et une compréhension ; ici on reste au
# niveau de la séance 11 : chaîne trouvees + boucle for).
#
# Points de vigilance observés en classe :
#   - resultat = "_"  (au lieu de resultat + "_") : écrase la chaîne
#   - essais - 1 sans réaffectation (il faut essais = essais - 1)
#   - oubli du .lower() : « A » n'est jamais trouvé dans « python »
# ----------------------------------------------------------------

import random

def affichage(mot, trouvees):
    resultat = ""
    for c in mot:
        if c in trouvees:
            resultat = resultat + c
        else:
            resultat = resultat + "_"
    return resultat

assert affichage("python", "") == "______"
assert affichage("python", "on") == "___o_n"
assert affichage("python", "python") == "python"
print("Étape 1 : OK !")

def pendu():
    mots = ["python", "ordinateur", "algorithme", "variable"]
    mot = random.choice(mots)
    trouvees = ""
    essais = 6

    while essais > 0:
        etat = affichage(mot, trouvees)
        print(etat, "  essais restants :", essais)
        if "_" not in etat:
            print("Gagné !")
            return
        lettre = input("Propose une lettre : ").lower()
        if lettre in mot:
            trouvees = trouvees + lettre
        else:
            essais = essais - 1

    print("Perdu ! Le mot était :", mot)

pendu()

# --- Bonus 2 (lettre déjà proposée), à montrer aux rapides -------
#        if lettre in trouvees or lettre in deja_fausses:
#            print("Déjà proposée !")
#        (mémoriser aussi les lettres fausses dans une chaîne
#         deja_fausses = "" initialisée avant la boucle)
