# ============================================================
#  Conversions de bases — à compléter (Capytale / Thonny)
#  Nom : ..................  Prénom : ..................
# ------------------------------------------------------------
#  Complète les fonctions SANS utiliser bin(), int(x, 2) ni hex().
#  Exécute le fichier : si « Tout est OK » s'affiche, c'est gagné.
# ============================================================

def binaire_vers_decimal(bits):
    """bits est une chaîne comme '1101'. Renvoie l'entier correspondant.
    Aide : parcours les caractères ; à chaque étape, valeur = valeur * 2 + chiffre."""
    # À toi de jouer
    ...

def decimal_vers_binaire(n):
    """Renvoie l'écriture binaire de n (chaîne), par divisions successives par 2."""
    # À toi de jouer
    ...

# ---- Vérifications (ne pas modifier) ----
assert binaire_vers_decimal("1101") == 13
assert binaire_vers_decimal("100000") == 32
assert binaire_vers_decimal("0") == 0
assert decimal_vers_binaire(13) == "1101"
assert decimal_vers_binaire(32) == "100000"
assert decimal_vers_binaire(255) == "11111111"
print("Tout est OK — bravo !")
