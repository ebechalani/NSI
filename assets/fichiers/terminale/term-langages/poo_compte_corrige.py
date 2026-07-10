# ============================================================
#  POO — classe CompteBancaire — CORRIGÉ (réservé au professeur)
# ============================================================


class CompteBancaire:

    def __init__(self, titulaire, solde=0):
        """Crée un compte : mémorise le titulaire et le solde de départ."""
        self.titulaire = titulaire   # attribut
        self.solde = solde

    def deposer(self, montant):
        """Ajoute montant au solde du compte."""
        self.solde = self.solde + montant

    def retirer(self, montant):
        """Retire montant du solde, seulement si le solde est suffisant."""
        if montant <= self.solde:
            self.solde = self.solde - montant
        # sinon : retrait refusé, le solde ne change pas

    def __str__(self):
        """Affichage lisible de l'objet."""
        return f"Compte de {self.titulaire} : {self.solde} €"

    def virer(self, autre, montant):
        """Vire montant de ce compte vers le compte autre, si possible.
        On RÉUTILISE retirer et deposer : c'est ça, la modularité."""
        if montant <= self.solde:
            self.retirer(montant)
            autre.deposer(montant)


# ---- Vérifications (ne pas modifier) ----
c = CompteBancaire("Ada")
assert c.titulaire == "Ada"
assert c.solde == 0
c.deposer(100)
assert c.solde == 100
c.retirer(30)
assert c.solde == 70
c.retirer(500)                     # refusé : le solde ne doit pas bouger
assert c.solde == 70
assert str(c) == "Compte de Ada : 70 €"

c2 = CompteBancaire("Alan", 50)    # un solde de départ est possible
assert c2.solde == 50
c.virer(c2, 20)
assert c.solde == 50 and c2.solde == 70
c.virer(c2, 9999)                  # refusé : rien ne bouge nulle part
assert c.solde == 50 and c2.solde == 70

print("Tout est OK — bravo !")
