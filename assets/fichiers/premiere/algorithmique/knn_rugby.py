# ============================================================
#  kNN — avant ou arrière ? Le XV de France classé par taille et poids
#  (Capytale / Thonny)   Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  D'après mon TP et le cours « K plus proches voisins (KNN) » de
#  Laurent Amanton (DIU EIL, Université Le Havre Normandie).
#  Les trois étapes de kNN : DISTANCE -> les k plus PROCHES -> VOTE.
#  Exécute le fichier : si « Tout est OK » s'affiche, c'est gagné.
#  Si matplotlib est installé, un nuage de points s'affiche en plus.
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
    """Distance euclidienne entre deux joueurs dans le plan (taille, poids).
    Aide : racine carrée de (écart de taille)² + (écart de poids)²."""
    # À toi de jouer
    ...


def knn(entrainement, inconnu, k=3):
    """Renvoie le poste majoritaire parmi les k joueurs d'entraînement
    les plus proches de inconnu.
    Aide : trier entrainement par distance à inconnu (sorted + key), garder
    les k premiers, puis renvoyer le poste le plus fréquent (le VOTE)."""
    # À toi de jouer
    ...


def taux_reussite(k):
    """Proportion (entre 0 et 1) des joueurs de test dont le poste est bien prédit avec k voisins."""
    # À toi de jouer
    ...


def meilleur_k(candidats):
    """Renvoie le k de la liste candidats qui donne le meilleur taux de réussite
    (le premier en cas d'égalité)."""
    # À toi de jouer
    ...


# ---- Vérifications (ne pas modifier) ----
assert distance(("A", 0, 0, ""), ("B", 3, 4, "")) == 5.0, "distance"
assert knn(entrainement, ("Test", 175, 82, ""), k=3) == "Arrière"
assert knn(entrainement, ("Test", 200, 130, ""), k=3) == "Avant"
assert knn(entrainement, ("Danty", 181, 106, ""), k=3) == "Avant"   # un arrière au gabarit d'avant !
assert taux_reussite(3) == 7 / 8
assert taux_reussite(21) == 4 / 8
assert meilleur_k([3, 5, 7, 9, 21]) == 3
print("Tout est OK")

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
