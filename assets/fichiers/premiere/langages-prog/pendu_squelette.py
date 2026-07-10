# ----------------------------------------------------------------
# Mini-projet : LE PENDU (thème Langages et programmation, séance 11)
# ----------------------------------------------------------------
# L'ordinateur choisit un mot au hasard ; tu le devines lettre par
# lettre, avec 6 essais. Notions : variables, chaînes, if/else,
# while, for, fonctions, bibliothèque random.
#
# Complète les zones marquées « À TOI » (remplace les ...), puis
# exécute : les tests assert de l'étape 1 doivent passer AVANT de
# jouer. Sauvegarde ton fichier sous pendu_tonprenom.py
# ----------------------------------------------------------------

import random

# --- Étape 1 : la fonction d'affichage ---------------------------
# affichage(mot, trouvees) renvoie le mot où chaque lettre non
# encore trouvée est remplacée par un underscore « _ ».
# Exemple : affichage("python", "on") renvoie "___o_n"

def affichage(mot, trouvees):
    resultat = ""
    for c in mot:
        if c in trouvees:
            resultat = resultat + c      # la lettre est déjà trouvée
        else:
            resultat = ...               # À TOI : ajoute "_" à resultat
    return resultat

# Ces tests doivent passer sans erreur avant de continuer :
assert affichage("python", "") == "______"
assert affichage("python", "on") == "___o_n"
assert affichage("python", "python") == "python"
print("Étape 1 : OK !")

# --- Étape 2 : la boucle de jeu ----------------------------------
def pendu():
    mots = ["python", "ordinateur", "algorithme", "variable"]
    mot = random.choice(mots)    # le mot secret
    trouvees = ""                # les lettres déjà trouvées
    essais = 6

    while essais > 0:
        etat = affichage(mot, trouvees)
        print(etat, "  essais restants :", essais)
        if "_" not in etat:
            print("Gagné !")
            return
        lettre = input("Propose une lettre : ").lower()
        if ...:                  # À TOI : teste si la lettre est dans le mot
            trouvees = trouvees + lettre
        else:
            essais = ...         # À TOI : on perd un essai

    print("Perdu ! Le mot était :", mot)

# --- Étape 3 : joue ! --------------------------------------------
pendu()

# --- Bonus (si tu as fini) ---------------------------------------
# 1. Ajoute 4 mots à la liste.
# 2. Si la lettre a déjà été proposée, affiche « Déjà proposée ! »
#    sans faire perdre d'essai.
# 3. Affiche le nombre de lettres du mot au début de la partie.
