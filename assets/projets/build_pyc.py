#!/usr/bin/env python3
"""
Génère les modules « boîte noire » des mini-projets corrigés.

Pour CHAQUE mini-projet, ce script écrit :
  - assets/projets/src/<module>.py   (le corrigé, source — réservé au prof)
  - assets/projets/pyc/<module>.pyc  (la BOÎTE NOIRE distribuée aux élèves)

⚠️ Un .pyc est lié à la version de Python qui l'a compilé. Si tes élèves
utilisent une AUTRE version, relance simplement ce script avec LEUR version :

    python build_pyc.py

(ou, pour un seul fichier :  python -m py_compile src/mp_cesar.py
 puis renomme __pycache__/mp_cesar.cpython-XY.pyc en pyc/mp_cesar.pyc)

Côté élève, on utilise la boîte noire comme un module normal :
    >>> import mp_cesar
    >>> mp_cesar.cesar("BONJOUR", 3)
    'ERQMRXU'
"""
import os
import sys
import py_compile

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")
PYC = os.path.join(HERE, "pyc")

# id du mini-projet (tp.js) -> source du module (corrigé, démo sous __main__)
MODULES = {
    "mp_crible": '''\
"""Crible d'Ératosthène — boîte noire (corrigé)."""


def crible(n):
    """Renvoie la liste des nombres premiers <= n."""
    est_premier = [True] * (n + 1)
    est_premier[0] = est_premier[1] = False
    for i in range(2, int(n ** 0.5) + 1):
        if est_premier[i]:
            for multiple in range(i * i, n + 1, i):
                est_premier[multiple] = False
    return [i for i in range(n + 1) if est_premier[i]]


if __name__ == "__main__":
    print(crible(30))
''',
    "mp_bases": '''\
"""Conversion de bases — boîte noire (corrigé)."""


def decimal_vers_binaire(n):
    """Renvoie l'écriture binaire (chaîne) de l'entier n >= 0."""
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits
        n = n // 2
    return bits


def decimal_vers_base(n, b):
    """Renvoie l'écriture de n en base b (2 <= b <= 16)."""
    chiffres = "0123456789ABCDEF"
    if n == 0:
        return "0"
    res = ""
    while n > 0:
        res = chiffres[n % b] + res
        n = n // b
    return res


if __name__ == "__main__":
    print(decimal_vers_binaire(13))
    print(decimal_vers_base(255, 16))
''',
    "mp_cesar": '''\
"""Chiffre de César — boîte noire (corrigé)."""


def cesar(texte, decalage):
    """Chiffre (ou déchiffre avec un décalage négatif) par décalage des lettres."""
    res = ""
    for c in texte:
        if c.isalpha():
            base = ord("A") if c.isupper() else ord("a")
            res += chr((ord(c) - base + decalage) % 26 + base)
        else:
            res += c
    return res


if __name__ == "__main__":
    print(cesar("BONJOUR NSI", 3))
    print(cesar("ERQMRXU QVL", -3))
''',
    "mp_pgcd": '''\
"""PGCD (algorithme d'Euclide) — boîte noire (corrigé)."""


def pgcd(a, b):
    """Renvoie le plus grand commun diviseur de a et b."""
    while b != 0:
        a, b = b, a % b
    return a


def ppcm(a, b):
    """Renvoie le plus petit commun multiple de a et b."""
    return a * b // pgcd(a, b)


if __name__ == "__main__":
    print(pgcd(36, 24))
    print(ppcm(45, 30))
''',
    "mp_montecarlo": '''\
"""Approximation de pi (Monte-Carlo) — boîte noire (corrigé)."""
import random


def estimer_pi(n):
    """Estime pi par n tirages aléatoires dans le carré unité."""
    dedans = 0
    for _ in range(n):
        x, y = random.random(), random.random()
        if x * x + y * y <= 1:
            dedans += 1
    return 4 * dedans / n


if __name__ == "__main__":
    print(estimer_pi(100000))
''',
    "mp_morpion": '''\
"""Morpion — détection du gagnant — boîte noire (corrigé)."""


def afficher(g):
    """Affiche une grille 3x3 (liste de listes)."""
    for ligne in g:
        print(" | ".join(ligne))


def gagnant(g):
    """Renvoie le symbole gagnant ('X'/'O') ou None."""
    lignes = [list(l) for l in g]
    lignes += [list(col) for col in zip(*g)]
    lignes.append([g[i][i] for i in range(3)])
    lignes.append([g[i][2 - i] for i in range(3)])
    for l in lignes:
        if l[0] != " " and l[0] == l[1] == l[2]:
            return l[0]
    return None


if __name__ == "__main__":
    grille = [[" "] * 3 for _ in range(3)]
    grille[0][0] = grille[1][1] = grille[2][2] = "X"
    afficher(grille)
    print("Gagnant :", gagnant(grille))
''',
    "mp_pendu": '''\
"""Le Pendu — boîte noire (corrigé). Jeu interactif : pendu()."""
import random


def pendu(mots=None):
    """Lance une partie de pendu en console."""
    if mots is None:
        mots = ["python", "ordinateur", "algorithme", "variable"]
    mot = random.choice(mots)
    trouvees = set()
    essais = 6
    while essais > 0:
        affichage = "".join(c if c in trouvees else "_" for c in mot)
        print(affichage, "  essais restants :", essais)
        if "_" not in affichage:
            print("Gagné !")
            return
        lettre = input("Propose une lettre : ").lower()
        if lettre in mot:
            trouvees.add(lettre)
        else:
            essais -= 1
    print("Perdu ! Le mot était :", mot)


if __name__ == "__main__":
    pendu()
''',
    "mp_mastermind": '''\
"""Mastermind — boîte noire (corrigé). Jeu interactif : mastermind()."""
import random


def mastermind():
    """Lance une partie de Mastermind (4 chiffres de 1 à 6) en console."""
    code = [random.randint(1, 6) for _ in range(4)]
    for tour in range(10):
        prop = [int(c) for c in input("4 chiffres (1-6) : ")]
        bien = sum(1 for i in range(4) if prop[i] == code[i])
        communs = sum(min(prop.count(d), code.count(d)) for d in set(prop))
        mal = communs - bien
        print(bien, "bien placés,", mal, "mal placés")
        if bien == 4:
            print("Gagné en", tour + 1, "coups !")
            return
    print("Perdu ! Code :", code)


if __name__ == "__main__":
    mastermind()
''',
    "mp_vigenere": '''\
"""Chiffre de Vigenère — boîte noire (corrigé)."""


def vigenere(texte, cle, sens=1):
    """Chiffre (sens=1) ou déchiffre (sens=-1) avec la clé donnée."""
    res, j = "", 0
    for c in texte:
        if c.isalpha():
            d = (ord(cle[j % len(cle)].lower()) - ord("a")) * sens
            base = ord("A") if c.isupper() else ord("a")
            res += chr((ord(c) - base + d) % 26 + base)
            j += 1
        else:
            res += c
    return res


if __name__ == "__main__":
    chiffre = vigenere("BONJOUR", "CLE")
    print(chiffre)
    print(vigenere(chiffre, "CLE", -1))
''',
    "mp_tris": '''\
"""Tri rapide & tri fusion (récursifs) — boîte noire (corrigé)."""


def tri_rapide(lst):
    """Tri rapide (quicksort) — renvoie une nouvelle liste triée."""
    if len(lst) <= 1:
        return lst
    pivot = lst[0]
    petits = [x for x in lst[1:] if x < pivot]
    grands = [x for x in lst[1:] if x >= pivot]
    return tri_rapide(petits) + [pivot] + tri_rapide(grands)


def tri_fusion(lst):
    """Tri fusion (mergesort) — renvoie une nouvelle liste triée."""
    if len(lst) <= 1:
        return lst
    milieu = len(lst) // 2
    gauche = tri_fusion(lst[:milieu])
    droite = tri_fusion(lst[milieu:])
    res, i, j = [], 0, 0
    while i < len(gauche) and j < len(droite):
        if gauche[i] <= droite[j]:
            res.append(gauche[i]); i += 1
        else:
            res.append(droite[j]); j += 1
    return res + gauche[i:] + droite[j:]


if __name__ == "__main__":
    print(tri_rapide([5, 2, 9, 1, 7, 3]))
    print(tri_fusion([5, 2, 9, 1, 7, 3]))
''',
}


def main():
    os.makedirs(SRC, exist_ok=True)
    ver = f"{sys.version_info.major}.{sys.version_info.minor}"
    # Les .pyc sont rangés par version de Python (un .pyc ne marche qu'avec SA version).
    out_dir = os.path.join(PYC, ver)
    os.makedirs(out_dir, exist_ok=True)
    for name, source in MODULES.items():
        src_path = os.path.join(SRC, name + ".py")
        pyc_path = os.path.join(out_dir, name + ".pyc")
        with open(src_path, "w", encoding="utf-8", newline="\n") as f:
            f.write(source)
        # cfile = chemin de sortie direct ; on enleve le tag de version du nom.
        py_compile.compile(src_path, cfile=pyc_path, optimize=2)
        print(f"  [ok] {name}.pyc  (Python {ver})")
    print(f"{len(MODULES)} modules generes dans pyc/{ver}/ (Python {ver}).")


if __name__ == "__main__":
    main()
