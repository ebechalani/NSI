# ============================================================
#  Récursivité — 3 fonctions à écrire (Capytale / Thonny)
#  Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  Méthode (fiche « Écrire une fonction récursive sans se tromper ») :
#    1) le CAS DE BASE : un cas si simple qu'on répond directement ;
#    2) l'APPEL RÉCURSIF, sur un problème PLUS PETIT ;
#    3) vérifie qu'on se rapproche bien du cas de base.
#  Exécute le fichier : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================


def somme_liste(t):
    """Renvoie la somme des éléments de la liste t, SANS boucle ni sum().
    Aide : la somme de [] vaut 0 ; sinon c'est t[0] + la somme du reste t[1:]."""
    # À toi de jouer
    ...


def puissance(x, n):
    """Renvoie x élevé à la puissance n (n entier >= 0), SANS ** ni boucle.
    Aide : x puissance 0 vaut 1 ; sinon x puissance n = x * (x puissance n-1)."""
    # À toi de jouer
    ...


def escalier(n, memo=None):
    """Nombre de façons de monter un escalier de n marches,
    par pas de 1 ou 2 marches.
    Aide : escalier(0) = 1, escalier(1) = 1,
           escalier(n) = escalier(n-1) + escalier(n-2).
    Sans MÉMOÏSATION, escalier(50) est inatteignable : utilise le
    dictionnaire memo pour retenir les résultats déjà calculés
    (et commence par « if memo is None: memo = {} » — cf. le piège du cours)."""
    # À toi de jouer
    ...


# ---- Vérifications (ne pas modifier) ----
assert somme_liste([]) == 0
assert somme_liste([5]) == 5
assert somme_liste([1, 2, 3, 4]) == 10

assert puissance(2, 0) == 1
assert puissance(5, 3) == 125
assert puissance(2, 10) == 1024

assert escalier(1) == 1
assert escalier(3) == 3
assert escalier(10) == 89
assert escalier(50) == 20365011074   # instantané si la mémoïsation est là !

print("Tout est OK — bravo !")
