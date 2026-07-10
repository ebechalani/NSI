# ============================================================
#  TP noté — Types construits — CORRIGÉ PROFESSEUR (/20)
#  Barème : Q1 = 5 pts, Q2 = 4 pts, Q3 = 4 pts, Q4 = 4 pts,
#           bonus Q5 = 3 pts. Valoriser la compréhension (Q3)
#           et le motif .get (Q5) ; pénaliser max()/min() en Q1.
# ============================================================

notes = [12, 8, 15, 17, 6, 14, 11]

# Question 1 (5 pts) — max/min sans fonctions natives
maxi = notes[0]
mini = notes[0]
for x in notes:
    if x > maxi:
        maxi = x
    if x < mini:
        mini = x
print("Question 1 — maxi :", maxi, "/ mini :", mini)   # 17 / 6

# Question 2 (4 pts) — moyenne par accumulation
total = 0
for x in notes:
    total = total + x
moyenne = total / len(notes)
print("Question 2 — moyenne :", moyenne)               # 11.857...

# Question 3 (4 pts) — compréhension
au_dessus = [x for x in notes if x >= 10]
print("Question 3 — notes >= 10 :", au_dessus)         # [12, 15, 17, 14, 11]

# Question 4 (4 pts) — dictionnaire bilan
bilan = {"reçus": len(au_dessus),
         "recalés": len(notes) - len(au_dessus)}
print("Question 4 — bilan :", bilan)                   # {'reçus': 5, 'recalés': 2}

# Question 5 — BONUS (3 pts) — comptage avec .get
occ = {}
for x in notes:
    occ[x] = occ.get(x, 0) + 1
print("Question 5 — occurrences :", occ)

# Vérifications
assert maxi == 17 and mini == 6
assert abs(moyenne - 83 / 7) < 1e-9
assert au_dessus == [12, 15, 17, 14, 11]
assert bilan == {"reçus": 5, "recalés": 2}
assert occ == {12: 1, 8: 1, 15: 1, 17: 1, 6: 1, 14: 1, 11: 1}
print("Corrigé : tout est OK")
