# ============================================================
#  Découpage en paquets & reconstruction — à compléter
# ------------------------------------------------------------
#  Un paquet = un dictionnaire {"src", "dst", "num", "data"}.
# ============================================================

def decouper(message, taille, src, dst):
    """Découpe message en morceaux de « taille » caractères et renvoie
    la liste des paquets numérotés à partir de 0."""
    # À toi de jouer
    ...

def reconstituer(paquets):
    """Les paquets arrivent DANS LE DÉSORDRE : trie-les par num
    puis recolle les data pour retrouver le message."""
    # À toi de jouer
    ...

# ---- Vérifications (ne pas modifier) ----
p = decouper("BONJOUR NSI", 4, "1.2.3.4", "5.6.7.8")
assert len(p) == 3 and p[0]["data"] == "BONJ" and p[2]["num"] == 2
melange = [p[2], p[0], p[1]]
assert reconstituer(melange) == "BONJOUR NSI"
print("Tout est OK — bravo !")
