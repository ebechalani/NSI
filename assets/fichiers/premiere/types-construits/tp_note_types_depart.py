# ============================================================
#  TP noté — Types construits (1 h, note sur 20)
#  Nom : ..................  Prénom : ..................  Classe : ......
# ------------------------------------------------------------
#  Consignes :
#  - Complète ce fichier là où tu vois « À toi de jouer ».
#  - N'utilise ni max() ni min() pour la question 1.
#  - À la fin, exécute le fichier : si « Tout est OK » s'affiche,
#    tes réponses passent les vérifications.
#  - Enregistre ton fichier sous nom_prenom_tp_types.py et rends-le.
# ============================================================

notes = [12, 8, 15, 17, 6, 14, 11]

# ------------------------------------------------------------
# Question 1 (5 pts)
# Trouve la plus grande et la plus petite note SANS max() ni min().
# Range tes résultats dans les variables maxi et mini.
# ------------------------------------------------------------
maxi = notes[0]
mini = notes[0]
# À toi de jouer : parcours la liste et mets à jour maxi et mini.


print("Question 1 — maxi :", maxi, "/ mini :", mini)

# ------------------------------------------------------------
# Question 2 (4 pts)
# Calcule la moyenne des notes dans la variable moyenne
# (par accumulation : initialise un total AVANT la boucle).
# ------------------------------------------------------------
moyenne = 0
# À toi de jouer :


print("Question 2 — moyenne :", moyenne)

# ------------------------------------------------------------
# Question 3 (4 pts)
# Construis PAR COMPRÉHENSION la liste des notes >= 10,
# dans l'ordre de la liste de départ, dans la variable au_dessus.
# ------------------------------------------------------------
au_dessus = []
# À toi de jouer :


print("Question 3 — notes >= 10 :", au_dessus)

# ------------------------------------------------------------
# Question 4 (4 pts)
# Construis un dictionnaire bilan de la forme
# {"reçus": ..., "recalés": ...} qui compte les notes >= 10
# et les notes < 10.
# ------------------------------------------------------------
bilan = {}
# À toi de jouer :


print("Question 4 — bilan :", bilan)

# ------------------------------------------------------------
# Question 5 — BONUS (3 pts)
# Construis un dictionnaire occ qui compte le nombre
# d'occurrences de chaque note (utilise .get(clé, 0)).
# ------------------------------------------------------------
occ = {}
# À toi de jouer :


print("Question 5 — occurrences :", occ)

# ============================================================
#  Vérifications — NE MODIFIE RIEN SOUS CETTE LIGNE
# ============================================================
assert maxi == 17 and mini == 6, "Question 1 à revoir"
assert abs(moyenne - 83 / 7) < 1e-9, "Question 2 à revoir"
assert au_dessus == [12, 15, 17, 14, 11], "Question 3 à revoir"
assert bilan == {"reçus": 5, "recalés": 2}, "Question 4 à revoir"
print("Tout est OK pour les questions 1 à 4 — pense au bonus !")
