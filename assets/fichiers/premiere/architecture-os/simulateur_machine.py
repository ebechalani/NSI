# ============================================================
#  SIMULATEUR DE MACHINE A ACCUMULATEUR — squelette à compléter
#  Thème : Architectures matérielles et systèmes d'exploitation
#  (séance 2 — « je suis le processeur »)
# ------------------------------------------------------------
#  La machine possède :
#    - une mémoire de données  : mem (liste de nombres)
#    - un accumulateur         : acc (là où se font TOUS les calculs)
#    - un compteur de programme: pc  (numéro de l'instruction en cours)
#
#  Jeu d'instructions (une instruction = un tuple) :
#    ("LOAD", adr)   acc <- mem[adr]
#    ("ADD", adr)    acc <- acc + mem[adr]
#    ("STORE", adr)  mem[adr] <- acc
#    ("HALT",)       arrêt du programme
#
#  A FAIRE : complète la fonction executer() aux endroits marqués
#  par ... , puis lance le fichier : tous les asserts doivent passer.
#  Rappel du cycle de von Neumann : CHARGER -> DECODER -> EXECUTER.
# ============================================================


def executer(programme, mem):
    """Exécute le programme sur la mémoire mem.
    Renvoie le couple (acc, mem) à la fin de l'exécution."""
    acc = 0
    pc = 0
    while True:
        instr = programme[pc]        # 1. CHARGER (fetch) : lire l'instruction
        nom = instr[0]               # 2. DECODER (decode) : quel est son nom ?
        if nom == "HALT":            # 3. EXECUTER (execute)
            break
        adr = instr[1]
        if nom == "LOAD":
            acc = ...                # <-- copie la case mem[adr] dans l'accumulateur
        elif nom == "ADD":
            acc = ...                # <-- ajoute mem[adr] à l'accumulateur
        elif nom == "STORE":
            ...                      # <-- range l'accumulateur dans mem[adr]
        pc = ...                     # <-- fais avancer le compteur de programme
    return acc, mem


# ---------- Tests fournis : ne modifie pas cette partie ----------

# Programme 1 : mem[2] = mem[0] + mem[1]   (l'exemple du cours)
programme1 = [
    ("LOAD", 0),
    ("ADD", 1),
    ("STORE", 2),
    ("HALT",),
]
acc, mem = executer(programme1, [7, 5, 0])
assert mem == [7, 5, 12], "mem[2] devrait valoir 7 + 5 = 12"
assert acc == 12, "l'accumulateur devrait contenir 12 à la fin"

# Programme 2 : mem[2] = mem[0] + mem[1] + mem[1]
programme2 = [
    ("LOAD", 0),
    ("ADD", 1),
    ("ADD", 1),
    ("STORE", 2),
    ("HALT",),
]
acc, mem = executer(programme2, [7, 5, 0])
assert mem == [7, 5, 17], "mem[2] devrait valoir 7 + 5 + 5 = 17"

print("Bravo, ton processeur fonctionne !")

# ---------- Pour aller plus loin ----------
# 1. Ecris programme3 qui calcule le DOUBLE de mem[0] dans mem[1]
#    (astuce : on peut additionner une case avec elle-même).
# 2. Vérifie-le avec :
#    acc, mem = executer(programme3, [21, 0])
#    assert mem[1] == 42
