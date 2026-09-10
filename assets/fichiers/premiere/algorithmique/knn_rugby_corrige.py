# ============================================================
#  kNN — avant ou arrière ? Le XV de France — CORRIGÉ PROF
# ------------------------------------------------------------
#  D'après mon TP et le cours « K plus proches voisins (KNN) » de
#  Laurent Amanton (DIU EIL, Université Le Havre Normandie).
#  Mêmes fonctions que les sections 11 à 13 du cours en ligne.
# ============================================================

# 1. Le jeu de données : (nom, taille en cm, poids en kg, poste)
joueurs = [
    ("Atonio", 196, 145, "Avant"), ("Baille", 182, 115, "Avant"), ("Marchand", 181, 108, "Avant"),
    ("Flament", 203, 116, "Avant"), ("Meafou", 203, 145, "Avant"), ("Alldritt", 191, 114, "Avant"),
    ("Ollivon", 199, 113, "Avant"), ("Cros", 190, 110, "Avant"), ("Wardi", 185, 110, "Avant"),
    ("Mauvaka", 183, 105, "Avant"), ("Aldegheri", 181, 115, "Avant"), ("Taofifenua", 200, 135, "Avant"),
    ("Woki", 196, 109, "Avant"), ("Boudehent", 192, 106, "Avant"), ("Jelonch", 193, 106, "Avant"),
    ("Bamba", 185, 117, "Avant"), ("Dupont", 174, 85, "Arrière"), ("Ntamack", 186, 86, "Arrière"),
    ("Penaud", 192, 97, "Arrière"), ("Fickou", 190, 100, "Arrière"), ("Danty", 181, 106, "Arrière"),
    ("Bielle-Biarrey", 184, 82, "Arrière"), ("Ramos", 178, 81, "Arrière"), ("Lucu", 177, 84, "Arrière"),
    ("Jalibert", 189, 86, "Arrière"), ("Moefana", 183, 98, "Arrière"), ("Depoortère", 194, 94, "Arrière"),
    ("Lebel", 185, 93, "Arrière"), ("Gailleton", 185, 89, "Arrière"), ("Barré", 188, 88, "Arrière"),
]

# 2. Séparation entraînement / test (environ 75 % / 25 %), statique pour la reproductibilité
noms_test = ["Marchand", "Mauvaka", "Boudehent", "Bamba", "Danty", "Moefana", "Fickou", "Barré"]
test = [j for j in joueurs if j[0] in noms_test]
entrainement = [j for j in joueurs if j[0] not in noms_test]


def distance(a, b):
    """Distance euclidienne entre deux joueurs dans le plan (taille, poids)."""
    return ((a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def knn(entrainement, inconnu, k=3):
    """Poste majoritaire parmi les k joueurs d'entraînement les plus proches."""
    voisins = sorted(entrainement, key=lambda j: distance(j, inconnu))[:k]   # tri par distance
    postes = [v[3] for v in voisins]                                          # les k plus proches
    return max(set(postes), key=postes.count)                                 # le vote


def taux_reussite(k):
    """Proportion des joueurs de test dont le poste est bien prédit avec k voisins."""
    justes = 0
    for joueur in test:
        if knn(entrainement, joueur, k) == joueur[3]:
            justes += 1
    return justes / len(test)


def meilleur_k(candidats):
    """Le k de la liste qui donne le meilleur taux de réussite (le premier en cas d'égalité)."""
    meilleur = candidats[0]
    for k in candidats:
        if taux_reussite(k) > taux_reussite(meilleur):
            meilleur = k
    return meilleur


# ---- Vérifications (ne pas modifier) ----
assert distance(("A", 0, 0, ""), ("B", 3, 4, "")) == 5.0, "distance"
assert knn(entrainement, ("Test", 175, 82, ""), k=3) == "Arrière"
assert knn(entrainement, ("Test", 200, 130, ""), k=3) == "Avant"
assert knn(entrainement, ("Danty", 181, 106, ""), k=3) == "Avant"   # un arrière au gabarit d'avant !
assert taux_reussite(3) == 7 / 8
assert taux_reussite(21) == 4 / 8
assert meilleur_k([3, 5, 7, 9, 21]) == 3
print("Tout est OK")

# Pour la classe : le détail par k (taux d'erreur = 1 - taux de réussite)
for k in [1, 3, 5, 7, 9, 11, 15, 21]:
    print("k =", str(k).rjust(2), "-> réussite", round(100 * taux_reussite(k)), "%")

# ---- Bonus : le nuage de points (seulement si matplotlib est installé) ----
try:
    import matplotlib.pyplot as plt
    for poste, couleur in [("Avant", "red"), ("Arrière", "blue")]:
        xs = [j[1] for j in joueurs if j[3] == poste]
        ys = [j[2] for j in joueurs if j[3] == poste]
        plt.scatter(xs, ys, c=couleur, label=poste)
    for j in test:
        plt.annotate(j[0], (j[1], j[2]), fontsize=8)
    plt.xlabel("Taille (cm)")
    plt.ylabel("Poids (kg)")
    plt.title("XV de France : avants et arrières (noms = jeu de test)")
    plt.legend()
    plt.show()
except ImportError:
    print("(matplotlib absent : pas de graphique, ce n'est pas grave)")
