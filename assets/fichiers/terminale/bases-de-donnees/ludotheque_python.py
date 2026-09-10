"""
ludotheque_python.py — interroger la ludothèque depuis Python (sqlite3)
------------------------------------------------------------------------
À exécuter avec un VRAI Python (Thonny, Capytale, terminal), dans le même
dossier que ludotheque.db (ou après avoir exécuté ludotheque.sql dans
DB Browser et enregistré la base sous ce nom).

Adapté des scripts lectureLudotheque.py et du chapitre « Interagir avec
une base de données depuis Python » du cours DIU EIL « Bases de données »
(B. Mermet & G. Simon, Université Le Havre Normandie, CC BY-NC-SA).

Les 5 étapes du dialogue Python <-> SGBD :
  1. se connecter          sqlite3.connect("fichier.db")
  2. exécuter une requête  connexion.execute(requete, parametres)
  3. exploiter le résultat parcourir le curseur (un tuple par ligne)
  4. valider (si modif.)   connexion.commit()
  5. se déconnecter        connexion.close()

Complète les TODO puis lance le programme : les assert doivent tous passer.
"""

import sqlite3

connexion = sqlite3.connect("ludotheque.db")
connexion.execute("PRAGMA foreign_keys = ON")   # SQLite ne vérifie pas les clés étrangères par défaut !


# ---------------------------------------------------------------------
# Étape A — lire : chaque ligne du résultat est un tuple Python
# ---------------------------------------------------------------------
def noms_des_jeux():
    """Renvoie la liste des noms de jeux, par ordre alphabétique."""
    curseur = connexion.execute("SELECT nomJeu FROM jeu ORDER BY nomJeu")
    return [ligne[0] for ligne in curseur]


assert noms_des_jeux() == ["Cargo Noir", "Era: medieval age",
                           "Les chevaliers de la table ronde", "Smash up"]


# ---------------------------------------------------------------------
# Étape B — requête PARAMÉTRÉE : le « ? » est remplacé par la valeur
# fournie dans le tuple. JAMAIS de concaténation de chaînes avec une
# saisie utilisateur (risque d'injection SQL).
# ---------------------------------------------------------------------
def editeurs_de_nationalite(nationalite):
    """Renvoie les noms des éditeurs de la nationalité donnée (sans tenir compte de la casse)."""
    curseur = connexion.execute(
        """SELECT nomEditeur
           FROM editeur
           WHERE upper(nationaliteEditeur) = upper(?)
           ORDER BY nomEditeur""",
        (nationalite,))          # ATTENTION : un tuple à un élément, avec sa virgule
    return [ligne[0] for ligne in curseur]


assert editeurs_de_nationalite("française") == ["Days of wonder", "Iello"]
assert editeurs_de_nationalite("Allemande") == ["EggertSpiele"]


# ---------------------------------------------------------------------
# Étape C — à toi : une jointure paramétrée
# ---------------------------------------------------------------------
def illustrateurs_du_jeu(nom_jeu):
    """Renvoie la liste des noms de famille des illustrateurs du jeu, triés."""
    # TODO : écris la requête (jeu JOIN estDessinePar JOIN illustrateur),
    # paramétrée par le nom du jeu (un « ? »), triée par nomIllustrateur.
    requete = """SELECT nomIllustrateur
                 FROM illustrateur
                 WHERE nomIllustrateur = ?"""   # <-- à remplacer : il manque les jointures !
    curseur = connexion.execute(requete, (nom_jeu,))
    return [ligne[0] for ligne in curseur]


assert illustrateurs_du_jeu("Smash up") == ["Alsop", "Balixa", "Torres"]
assert illustrateurs_du_jeu("Cargo Noir") == ["Coimbra"]
assert illustrateurs_du_jeu("Inconnu") == []


# ---------------------------------------------------------------------
# Étape D — modifier : sans commit(), rien n'est écrit dans le fichier
# ---------------------------------------------------------------------
def ajouter_illustrateur(identifiant, nom, prenom, nationalite):
    """Ajoute un illustrateur. Renvoie True si l'insertion a été acceptée, False sinon."""
    try:
        connexion.execute("INSERT INTO illustrateur VALUES (?, ?, ?, ?)",
                          (identifiant, nom, prenom, nationalite))
        connexion.commit()       # validation de la transaction
        return True
    except sqlite3.IntegrityError as erreur:   # clé primaire déjà prise, etc.
        print("Insertion refusée :", erreur)
        connexion.rollback()     # on annule la transaction en cours
        return False


assert ajouter_illustrateur(7, "Cochard", "David", "Française") is True
assert ajouter_illustrateur(7, "Cardouat", "Marie", "Française") is False   # id 7 déjà utilisé
assert len(illustrateurs_du_jeu("Smash up")) == 3

# On remet la base dans son état initial (le WHERE vise l'illustrateur 7 seulement)
connexion.execute("DELETE FROM illustrateur WHERE idIllustrateur = 7")
connexion.commit()
assert connexion.execute("SELECT COUNT(*) FROM illustrateur").fetchone()[0] == 6


# ---------------------------------------------------------------------
# Étape E — l'intégrité référentielle protège la base
# ---------------------------------------------------------------------
try:
    connexion.execute("DELETE FROM editeur WHERE idEditeur = 1")
    print("Suppression acceptée ?! Vérifie le PRAGMA foreign_keys.")
except sqlite3.IntegrityError as erreur:
    print("Suppression de l'éditeur 1 refusée :", erreur)
    connexion.rollback()

connexion.close()
print("Tous les asserts passent : bravo !")
