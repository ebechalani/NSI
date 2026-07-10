# ============================================================
#  TP noté — Traitement de données en tables (1 h, note sur 20)
#  Nom : ..................  Prénom : ..................  Classe : ......
# ------------------------------------------------------------
#  Consignes :
#  - Complète ce fichier là où tu vois « À toi de jouer ».
#  - La table eleves est déjà fournie : ne la modifie pas.
#  - À la fin, exécute le fichier : si « Tout est OK » s'affiche,
#    tes réponses passent les vérifications.
#  - Enregistre ton fichier sous nom_prenom_tp_tables.py et rends-le.
# ============================================================

eleves = [
    {"nom": "Ada", "classe": "1NSI", "note": 17},
    {"nom": "Tim", "classe": "1G2",  "note": 12},
    {"nom": "Lou", "classe": "1NSI", "note": 9},
    {"nom": "Eve", "classe": "1NSI", "note": 18},
    {"nom": "Sam", "classe": "1G2",  "note": 14},
]

# ------------------------------------------------------------
# Question 1 (3 pts)
# Range dans nb_eleves le nombre d'élèves et dans colonnes
# la liste des descripteurs (les clés de la première ligne).
# ------------------------------------------------------------
nb_eleves = 0
colonnes = []
# À toi de jouer :


print("Question 1 :", nb_eleves, "élèves —", colonnes)

# ------------------------------------------------------------
# Question 2 (4 pts)
# Construis PAR COMPRÉHENSION la liste nsi_noms des noms
# des élèves de la classe 1NSI (filtre puis extraction du nom).
# ------------------------------------------------------------
nsi_noms = []
# À toi de jouer :


print("Question 2 :", nsi_noms)

# ------------------------------------------------------------
# Question 3 (4 pts)
# Calcule la note moyenne de la table dans la variable moyenne.
# ------------------------------------------------------------
moyenne = 0
# À toi de jouer :


print("Question 3 — moyenne :", moyenne)

# ------------------------------------------------------------
# Question 4 (4 pts)
# Range dans classement la table triée par note DÉCROISSANTE
# (sorted + key), puis affiche nom et note ligne par ligne.
# ------------------------------------------------------------
classement = []
# À toi de jouer :


for e in classement:
    print("Question 4 :", e["nom"], e["note"])

# ------------------------------------------------------------
# Question 5 (2 pts)
# Range dans nb_recus le nombre d'élèves ayant la moyenne (>= 10).
# ------------------------------------------------------------
nb_recus = 0
# À toi de jouer :


print("Question 5 — reçus :", nb_recus)

# ------------------------------------------------------------
# Question 6 — BONUS (3 pts)
# Range dans major le NOM de l'élève ayant la meilleure note.
# ------------------------------------------------------------
major = ""
# À toi de jouer :


print("Question 6 — major :", major)

# ============================================================
#  Vérifications — NE MODIFIE RIEN SOUS CETTE LIGNE
# ============================================================
assert nb_eleves == 5, "Question 1 à revoir (nombre d'élèves)"
assert colonnes == ["nom", "classe", "note"], "Question 1 à revoir (colonnes)"
assert nsi_noms == ["Ada", "Lou", "Eve"], "Question 2 à revoir"
assert abs(moyenne - 14.0) < 1e-9, "Question 3 à revoir"
assert [e["nom"] for e in classement] == ["Eve", "Ada", "Sam", "Tim", "Lou"], "Question 4 à revoir"
assert nb_recus == 4, "Question 5 à revoir"
print("Tout est OK pour les questions 1 à 5 — pense au bonus !")
