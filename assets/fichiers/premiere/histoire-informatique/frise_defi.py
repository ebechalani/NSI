# ============================================================
#  Défi frise — à faire APRÈS les thèmes « Types construits »
#  et « Données en tables » (lecture CSV, tri, filtre).
# ------------------------------------------------------------
#  Place frise.csv dans le même dossier que ce fichier.
# ============================================================
import csv

with open("frise.csv", encoding="utf-8") as f:
    frise = list(csv.DictReader(f))
for ligne in frise:
    ligne["annee"] = int(ligne["annee"])   # les nombres du CSV sont des chaînes !

# 1. Affiche le nombre d'événements de la frise.
# 2. Affiche les événements du XXe siècle (1900 à 1999), triés par année.
# 3. Défi : compte combien d'événements par siècle (dictionnaire de comptage).
