# ============================================================
#  TP — Prouver une classe et une boucle : invariants, variant, assertions
#  (Capytale / Thonny)   Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  D'après les exemples du DIU (B. Mermet) : Personne, Heure, maximum, tri à bulles.
#  Complète dans l'ordre, décommente les tests au fur et à mesure.
#  Exécute : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================


# ---------- Partie 1 : invariant de classe, précondition, postcondition ----------

class Personne:
    def __init__(self, nom, prenom, age):
        self.nom = nom
        self.prenom = prenom
        self.age = age
        self.determiner_statut()
        self.invariant()

    def invariant(self):
        assert self.nom != "", "le nom ne peut pas être vide"
        assert self.age >= 0, "l'âge est positif ou nul"
        ...   # À COMPLÉTER : deux asserts reliant l'âge et le statut (mineur < 18 <= majeur)

    def determiner_statut(self):
        assert self.age == int(self.age), "précondition : l'âge est un entier"
        if self.age >= 18:
            self.statut = "majeur"
        else:
            self.statut = "mineur"
        ...   # À COMPLÉTER : la postcondition (un seul assert)
        self.invariant()

    def annee_suivante(self):
        self.invariant()
        age_avant = self.age
        self.age = self.age + 1
        ...   # À COMPLÉTER : que manque-t-il pour que l'invariant tienne à 18 ans ?
        assert self.age == age_avant + 1
        self.invariant()

    def __repr__(self):
        return self.prenom + " " + self.nom + " (" + str(self.age) + ", " + self.statut + ")"


# p = Personne("Mermet", "Bruno", 17)
# p.annee_suivante()
# assert p.age == 18 and p.statut == "majeur"


# ---------- Partie 2 : l'horloge, prouver qu'une méthode préserve l'invariant ----------

class Heure:
    def __init__(self, heures=0, minutes=0):
        self.heures = heures
        self.minutes = minutes
        self.invariant()

    def invariant(self):
        assert 0 <= self.heures < 24
        assert 0 <= self.minutes < 60

    def incrementer(self):
        self.invariant()
        minutes_avant, heures_avant = self.minutes, self.heures
        ...   # À COMPLÉTER : trois cas (minutes < 59 ; sinon heures < 23 ; sinon minuit)
        ...   # À COMPLÉTER : la postcondition, un assert par cas
        self.invariant()

    def __repr__(self):
        return str(self.heures) + ":" + str(self.minutes).rjust(2, "0")


# h = Heure()
# for _ in range(1440):
#     h.incrementer()
# assert (h.heures, h.minutes) == (0, 0)


# ---------- Partie 3 : invariant et variant d'une boucle (correction totale) ----------

def maximum(liste):
    assert len(liste) > 0
    maxi = liste[0]
    i = 0
    while i < len(liste):
        variant = ...                         # À COMPLÉTER
        if liste[i] > maxi:
            maxi = liste[i]
        ...   # À COMPLÉTER : assert de l'invariant (max(liste[:i + 1]) sert d'oracle)
        i = i + 1
        ...   # À COMPLÉTER : assert que le variant a strictement diminué
    return maxi


# assert maximum([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]) == 9


# ---------- Partie 4 (travail personnel) : le tri à bulles naïf ----------

def nb_inversions(liste):
    total = 0
    ...   # À COMPLÉTER : compter les couples (i < j) avec liste[i] > liste[j]
    return total


def tri_bulles(liste):
    inversion = True
    while inversion:
        ...   # À COMPLÉTER : mémoriser le variant nb_inversions(liste) + 1
        inversion = False
        i = 0
        while i < len(liste) - 1:
            if liste[i] > liste[i + 1]:
                liste[i], liste[i + 1] = liste[i + 1], liste[i]
                inversion = True
            i = i + 1
        ...   # À COMPLÉTER : assert que le variant a strictement diminué
    return liste


# assert tri_bulles([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]) == [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9]

print("Tout est OK")
