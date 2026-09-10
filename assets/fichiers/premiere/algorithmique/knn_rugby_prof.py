# ============================================================
#  kNN — avant ou arrière ? Le XV de France — VERSION COMPLÈTE DU PROFESSEUR
#  (à projeter depuis Thonny ; nécessite matplotlib)
# ------------------------------------------------------------
#  Mon TP de référence : mélange aléatoire du jeu de données (random.shuffle,
#  donc résultats différents à chaque exécution), vote par dictionnaire
#  (en cas d'égalité, la classe rencontrée en premier gagne), evaluer_modele
#  pour le taux d'erreur, puis courbe du taux d'erreur en fonction de k
#  (valeurs impaires de 1 à 15) avec les annotations sur-apprentissage /
#  sous-apprentissage, comme la figure du cours DIU de L. Amanton.
# ============================================================

import math
import random

import matplotlib.pyplot as plt

# 1. Le jeu de données étendu : [Nom, Taille (cm), Poids (kg), Poste]
# 30 joueurs (16 Avants, 14 Arrières)
joueurs = [
    # --- Avants ---
    ["Atonio", 196, 145, "Avant"], ["Baille", 182, 115, "Avant"],
    ["Marchand", 181, 108, "Avant"], ["Flament", 203, 116, "Avant"],
    ["Meafou", 203, 145, "Avant"], ["Alldritt", 191, 114, "Avant"],
    ["Ollivon", 199, 113, "Avant"], ["Cros", 190, 110, "Avant"],
    ["Wardi", 185, 110, "Avant"], ["Mauvaka", 183, 105, "Avant"],
    ["Aldegheri", 181, 115, "Avant"], ["Taofifenua", 200, 135, "Avant"],
    ["Woki", 196, 109, "Avant"], ["Boudehent", 192, 106, "Avant"],
    ["Jelonch", 193, 106, "Avant"], ["Bamba", 185, 117, "Avant"],
    # --- Arrières ---
    ["Dupont", 174, 85, "Arrière"], ["Ntamack", 186, 86, "Arrière"],
    ["Penaud", 192, 97, "Arrière"], ["Fickou", 190, 100, "Arrière"],
    ["Danty", 181, 106, "Arrière"], ["Bielle-Biarrey", 184, 82, "Arrière"],
    ["Ramos", 178, 81, "Arrière"], ["Lucu", 177, 84, "Arrière"],
    ["Jalibert", 189, 86, "Arrière"], ["Moefana", 183, 98, "Arrière"],
    ["Depoortère", 194, 94, "Arrière"], ["Lebel", 185, 93, "Arrière"],
    ["Gailleton", 185, 89, "Arrière"], ["Barré", 188, 88, "Arrière"]
]

# 2. Séparation Entraînement / Test (Environ 75% / 25%)
# mélange aléatoirement pour éviter tout biais de position dans la liste

random.shuffle(joueurs)

entrainement = joueurs[:22]
test = joueurs[22:30]  #8


def distance_euclidienne(p1, p2):
    return math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)


def knn(donnees_ent, cible, k):
    distances = []
    for joueur in donnees_ent:
        # On extrait la taille et le poids (index 1 et 2)
        caracteristiques = joueur[1:3]
        classe = joueur[3]
        dist = distance_euclidienne(caracteristiques, cible)
        distances.append((dist, classe))

    distances.sort(key=lambda x: x[0])
    k_voisins = distances[:k]

    # Variante plus élégante pour le comptage (idiome Python)
    effectifs = {}
    for _, classe in k_voisins:
        effectifs[classe] = effectifs.get(classe, 0) + 1

    return max(effectifs, key=effectifs.get)


def evaluer_modele(donnees_ent, donnees_test, k):
    """Calcule le taux d'erreur du modèle pour un k donné."""
    erreurs = 0
    for joueur in donnees_test:
        cible = joueur[1:3]
        vraie_classe = joueur[3]
        prediction = knn(donnees_ent, cible, k)

        if prediction != vraie_classe:
            erreurs += 1

    # Retourne le ratio d'erreurs (entre 0.0 et 1.0)
    return erreurs / len(donnees_test)


# 3. Étude de l'impact de k
# On teste uniquement des valeurs impaires pour éviter les cas d'égalité (ex-aequo)
valeurs_k = [1, 3, 5, 7, 9, 11, 13, 15]
taux_erreurs = []

for k in valeurs_k:
    erreur = evaluer_modele(entrainement, test, k)
    taux_erreurs.append(erreur)
    print(f"Pour k={k}, taux d'erreur = {erreur * 100:.1f}%")

# 4. Tracé de la courbe avec Matplotlib
plt.figure(figsize=(9, 5))
plt.plot(valeurs_k, taux_erreurs, marker='o', linestyle='-', color='crimson', linewidth=2)
plt.title("Évolution du taux d'erreur en fonction de k (Hyperparamètre)")
plt.xlabel("Valeur de k (Nombre de voisins considérés)")
plt.ylabel("Taux d'erreur (0.0 = aucune erreur)")
plt.xticks(valeurs_k)
plt.grid(True, linestyle='--', alpha=0.7)

# Annotation pédagogique sur le graphique
plt.text(valeurs_k[0], taux_erreurs[0], ' Overfitting potentiel', verticalalignment='bottom')
plt.text(valeurs_k[-1], taux_erreurs[-1], ' Sous-apprentissage\n (Bruitage par la classe majoritaire)',
         horizontalalignment='right')

plt.show()