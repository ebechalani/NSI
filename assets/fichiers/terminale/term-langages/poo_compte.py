# ============================================================
#  POO — classe CompteBancaire à compléter (Capytale / Thonny)
#  Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  Rappels du cours (Section 2 du thème) :
#    - une CLASSE est un moule, un OBJET en est une instance ;
#    - __init__ est le CONSTRUCTEUR ; self désigne l'objet courant ;
#    - les ATTRIBUTS portent l'état, les MÉTHODES agissent dessus.
#  Exécute le fichier : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================


class CompteBancaire:

    def __init__(self, titulaire, solde=0):
        """Crée un compte : mémorise le titulaire et le solde de départ
        dans deux attributs (self.titulaire et self.solde)."""
        # À toi de jouer
        ...

    def deposer(self, montant):
        """Ajoute montant au solde du compte."""
        # À toi de jouer
        ...

    def retirer(self, montant):
        """Retire montant du solde, SEULEMENT si le solde est suffisant.
        Sinon, le solde ne change pas (retrait refusé)."""
        # À toi de jouer
        ...

    def __str__(self):
        """Renvoie exactement la chaîne : Compte de Ada : 70 €
        (avec le bon titulaire et le bon solde, bien sûr)."""
        # À toi de jouer
        ...

    def virer(self, autre, montant):
        """DÉFI — Vire montant de ce compte vers le compte autre,
        seulement si le solde est suffisant.
        Aide : réutilise retirer et deposer au lieu de tout réécrire."""
        # À toi de jouer
        ...


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
