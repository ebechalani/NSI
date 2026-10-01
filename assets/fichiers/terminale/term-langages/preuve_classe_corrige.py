"""TP — Prouver une classe et une boucle : invariants, variant, assertions (corrigé prof, vérifié).

D'après le cours « Preuve de programme » du DIU Enseigner l'informatique au
lycée (B. Mermet, Université Le Havre Normandie) et ses exemples Personne,
Heure, maximum et tri à bulles. Exécuter le fichier : il rejoue toutes les
vérifications et affiche « Tout est vérifié. ».
"""


# ---------- Partie 1 : invariant de classe, précondition, postcondition ----------

class Personne:
    """Une personne a un nom non vide, un âge entier positif ou nul et un statut
    (« mineur » ou « majeur ») toujours cohérent avec son âge : c'est l'invariant."""

    def __init__(self, nom, prenom, age):
        self.nom = nom
        self.prenom = prenom
        self.age = age
        self.determiner_statut()
        self.invariant()                      # vérification en fin de constructeur

    def invariant(self):
        assert self.nom != "", "le nom ne peut pas être vide"
        assert self.age >= 0, "l'âge est positif ou nul"
        assert self.age >= 18 or self.statut == "mineur"
        assert self.age < 18 or self.statut == "majeur"

    def determiner_statut(self):
        assert self.age == int(self.age), "précondition : l'âge est un entier"
        if self.age >= 18:
            self.statut = "majeur"
        else:
            self.statut = "mineur"
        assert (self.age >= 18 and self.statut == "majeur") or (self.age < 18 and self.statut == "mineur")
        self.invariant()

    def annee_suivante_naive(self):
        """La version du cours DIU : elle oublie le statut et casse l'invariant à 18 ans."""
        self.invariant()
        age_avant = self.age                  # mémorisé pour la postcondition
        self.age = self.age + 1
        assert self.age == age_avant + 1      # postcondition
        self.invariant()

    def annee_suivante(self):
        """Version corrigée : le statut suit l'âge."""
        self.invariant()
        age_avant = self.age
        self.age = self.age + 1
        self.determiner_statut()
        assert self.age == age_avant + 1
        self.invariant()

    def __repr__(self):
        return self.prenom + " " + self.nom + " (" + str(self.age) + ", " + self.statut + ")"


p = Personne("Mermet", "Bruno", 16)
p.annee_suivante_naive()                      # 17 ans : encore mineur, tout va bien
assert p.age == 17 and p.statut == "mineur"
try:
    p.annee_suivante_naive()                  # 18 ans : le statut n'a pas suivi...
    raise RuntimeError("l'invariant aurait dû échouer")
except AssertionError:
    pass
p = Personne("Mermet", "Bruno", 17)
p.annee_suivante()
assert p.age == 18 and p.statut == "majeur"
for nom, prenom, age in (("Mermet", "Bruno", 20.4), ("", "Bruno", 20), ("Mermet", "Bruno", -1)):
    try:
        Personne(nom, prenom, age)
        raise RuntimeError("une assertion aurait dû échouer")
    except AssertionError:
        pass


# ---------- Partie 2 : l'horloge, prouver qu'une méthode préserve l'invariant ----------

class Heure:
    """Invariant : 0 <= heures < 24 et 0 <= minutes < 60."""

    def __init__(self, heures=0, minutes=0):
        assert heures >= 0 and minutes >= 0   # précondition (insuffisante : voir la preuve)
        self.heures = heures
        self.minutes = minutes
        self.invariant()

    def invariant(self):
        assert 0 <= self.heures < 24
        assert 0 <= self.minutes < 60

    def incrementer_naif(self):
        """La version du cours : {INV} minutes = minutes + 1 {INV} est FAUX quand minutes vaut 59."""
        self.invariant()
        self.minutes = self.minutes + 1
        self.invariant()

    def incrementer(self):
        """Version corrigée : trois cas, et une postcondition par cas."""
        self.invariant()
        minutes_avant, heures_avant = self.minutes, self.heures
        if self.minutes < 59:
            self.minutes = self.minutes + 1
        elif self.heures < 23:
            self.minutes = 0
            self.heures = self.heures + 1
        else:
            self.minutes = 0
            self.heures = 0
        # Postcondition
        assert minutes_avant == 59 or (self.minutes == minutes_avant + 1 and self.heures == heures_avant)
        assert minutes_avant != 59 or heures_avant == 23 or (self.heures == heures_avant + 1 and self.minutes == 0)
        assert minutes_avant != 59 or heures_avant != 23 or (self.heures == 0 and self.minutes == 0)
        self.invariant()

    def __repr__(self):
        return str(self.heures) + ":" + str(self.minutes).rjust(2, "0")


h = Heure(10, 58)
h.incrementer_naif()
assert (h.heures, h.minutes) == (10, 59)
try:
    h.incrementer_naif()                      # 10:60 viole l'invariant
    raise RuntimeError("l'invariant aurait dû échouer")
except AssertionError:
    pass
try:
    Heure(25, 0)                              # la précondition laisse passer, l'invariant refuse
    raise RuntimeError("l'invariant aurait dû échouer")
except AssertionError:
    pass
h = Heure()
for _ in range(1440):                         # une journée minute par minute
    h.incrementer()
assert (h.heures, h.minutes) == (0, 0)
h = Heure(23, 59)
h.incrementer()
assert repr(h) == "0:00"


# ---------- Partie 3 : invariant et variant d'une boucle (correction totale) ----------

def maximum(liste):
    """Précondition : liste non vide.  Postcondition : renvoie son plus grand élément."""
    assert len(liste) > 0
    maxi = liste[0]
    i = 0
    while i < len(liste):
        variant = len(liste) - i              # entier naturel, strictement décroissant
        if liste[i] > maxi:
            maxi = liste[i]
        assert maxi == max(liste[:i + 1])     # invariant (max() de Python sert d'oracle)
        i = i + 1
        assert 0 <= len(liste) - i < variant  # le variant reste un naturel et a diminué
    assert maxi == max(liste)                 # postcondition
    return maxi


liste = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]
assert maximum(liste) == 9
assert maximum(liste[:4]) == 4
assert maximum([-3, -8, -1]) == -1


# ---------- Partie 4 : le tri à bulles naïf (travail personnel du DIU) ----------

def nb_inversions(liste):
    """Nombre de couples mal rangés (i < j et liste[i] > liste[j]) : la mesure du désordre."""
    total = 0
    for i in range(len(liste)):
        for j in range(i + 1, len(liste)):
            if liste[i] > liste[j]:
                total = total + 1
    return total


def tri_bulles(liste):
    """Variant de la boucle externe : nb_inversions(liste) + 1 si inversion est True.
    Chaque échange de voisins retire exactement une inversion."""
    inversion = True
    while inversion:
        variant = nb_inversions(liste) + 1
        inversion = False
        i = 0
        while i < len(liste) - 1:
            if liste[i] > liste[i + 1]:
                liste[i], liste[i + 1] = liste[i + 1], liste[i]
                inversion = True
            i = i + 1
        assert nb_inversions(liste) + (1 if inversion else 0) < variant
    assert nb_inversions(liste) == 0          # postcondition : trié
    return liste


assert tri_bulles([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]) == [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 8, 9]
assert tri_bulles([]) == [] and tri_bulles([2, 1]) == [1, 2]

print("Tout est vérifié.")
