# ============================================================
#  SIMULATEUR DE MACHINE A ACCUMULATEUR — CORRIGE PROF
#  Thème : Architectures matérielles et systèmes d'exploitation
# ============================================================


def executer(programme, mem):
    """Exécute le programme sur la mémoire mem.
    Renvoie le couple (acc, mem) à la fin de l'exécution."""
    acc = 0
    pc = 0
    while True:
        instr = programme[pc]        # 1. CHARGER (fetch)
        nom = instr[0]               # 2. DECODER (decode)
        if nom == "HALT":            # 3. EXECUTER (execute)
            break
        adr = instr[1]
        if nom == "LOAD":
            acc = mem[adr]
        elif nom == "ADD":
            acc = acc + mem[adr]
        elif nom == "STORE":
            mem[adr] = acc
        pc = pc + 1
    return acc, mem


# ---------- Tests ----------

programme1 = [
    ("LOAD", 0),
    ("ADD", 1),
    ("STORE", 2),
    ("HALT",),
]
acc, mem = executer(programme1, [7, 5, 0])
assert mem == [7, 5, 12]
assert acc == 12

programme2 = [
    ("LOAD", 0),
    ("ADD", 1),
    ("ADD", 1),
    ("STORE", 2),
    ("HALT",),
]
acc, mem = executer(programme2, [7, 5, 0])
assert mem == [7, 5, 17]

# Pour aller plus loin : le double de mem[0] dans mem[1]
programme3 = [
    ("LOAD", 0),
    ("ADD", 0),      # acc = mem[0] + mem[0]
    ("STORE", 1),
    ("HALT",),
]
acc, mem = executer(programme3, [21, 0])
assert mem[1] == 42

print("Corrigé : tous les tests passent.")

# Notes pour la classe :
# - erreur fréquente : oublier pc = pc + 1 -> boucle infinie sur la
#   même instruction (bien le faire remarquer : c'est le PC qui avance).
# - autre erreur : écrire acc = mem[adr] dans ADD (on écrase au lieu
#   d'accumuler) — à relier à l'erreur classique total = notes[i].
