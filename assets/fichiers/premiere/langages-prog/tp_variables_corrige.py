"""TP Python — Variables, saisies, calculs et expressions booléennes (corrigé prof, vérifié).

Chaque exercice est une fonction : appelle exercice_3() par exemple pour le lancer
avec de vraies saisies. Exécuté tel quel, le fichier rejoue tous les exercices avec
les valeurs de test de la fiche et vérifie les affichages attendus.
"""
import io, contextlib


def exercice_1():
    """1. Suivre le score d'un joueur"""
    score = 12
    bonus = 5
    score = score + bonus
    ancien_score = score
    score = score * 2
    bonus = 0
    score = score - 4      # on retire 4 points au score final
    print(score)           # 30
    print(ancien_score)    # 17
    print(bonus)           # 0


def exercice_2():
    """2. Nombres ou textes ?"""
    print(8 + 2, type(8 + 2))
    print("8" + "2", type("8" + "2"))
    print("8" * 2, type("8" * 2))
    print(8 / 2, type(8 / 2))
    print(8 // 2, type(8 // 2))
    print(8 > 2, type(8 > 2))
    print(float("8.5"), type(float("8.5")))
    print(int(8.9), type(int(8.9)))
    # int("bonjour") -> ValueError: invalid literal for int() with base 10: 'bonjour'


def exercice_3():
    """3. Réparer une calculatrice"""
    nombre1 = float(input("Premier nombre : "))
    nombre2 = float(input("Deuxième nombre : "))
    somme = nombre1 + nombre2
    difference = nombre1 - nombre2
    produit = nombre1 * nombre2
    print(f"La somme est {somme:.2f}")
    print(f"La différence est {difference:.2f}")
    print(f"Le produit est {produit:.2f}")
    # Test : 12.5 et 3 -> La somme est 15.50 / La différence est 9.50 / Le produit est 37.50


def exercice_4():
    """4. Préparer des boîtes de matériel"""
    total = int(input("Nombre total de composants : "))
    capacite = int(input("Capacité d'une boîte : "))
    boites_pleines = total // capacite
    reste = total % capacite
    print(f"Boîtes complètement remplies : {boites_pleines}")
    print(f"Composants restants : {reste}")
    # 53 et 8 -> 6 et 5 ; 48 et 8 -> 6 et 0 ; 5 et 8 -> 0 et 5


def exercice_5():
    """5. Créer un badge personnalisé"""
    prenom = input("Prénom : ")
    nom = input("Nom : ")
    classe = input("Classe : ")
    nom_complet = prenom + " " + nom
    ligne = "=" * 24
    print(ligne)
    print("BADGE ÉLÈVE")
    print(f"Nom : {nom_complet}")
    print(f"Classe : {classe}")
    print(ligne)
    print(f"Nombre de caractères : {len(nom_complet)}")
    print(f"Présence de la lettre a : {'a' in prenom}")
    # Lina, Haddad, Première NSI -> 11 ; True


def exercice_6():
    """6. Vérifier une inscription"""
    age = int(input("Âge : "))
    taille = int(input("Nombre d'élèves de l'équipe : "))
    age_valide = age >= 14 and age <= 17
    equipe_valide = taille >= 2 and taille <= 4
    inscription_valide = age_valide and equipe_valide
    print(f"Âge valide : {age_valide}")
    print(f"Équipe valide : {equipe_valide}")
    print(f"Inscription valide : {inscription_valide}")
    correction_necessaire = not inscription_valide
    age_hors_limites = age < 14 or age > 17
    print(f"Correction nécessaire : {correction_necessaire}")
    print(f"Âge hors limites : {age_hors_limites}")
    # (14, 2) -> True ; (17, 4) -> True ; (13, 3) -> False ; (16, 5) -> False


def exercice_7():
    """7. Calculer une moyenne pondérée"""
    prenom = input("Prénom : ")
    quiz = float(input("Note du quiz (coefficient 1) : "))
    tp = float(input("Note du TP (coefficient 2) : "))
    projet = float(input("Note du projet (coefficient 3) : "))
    moyenne = (quiz + 2 * tp + 3 * projet) / 6
    meilleure = max(quiz, tp, projet)
    notes_valides = quiz >= 0 and quiz <= 20 and tp >= 0 and tp <= 20 and projet >= 0 and projet <= 20
    print(f"Élève : {prenom}")
    print(f"Meilleure note : {meilleure}")
    print(f"Moyenne pondérée : {moyenne:.2f}")
    print(f"Moyenne >= 10 : {moyenne >= 10}")
    print(f"Trois notes entre 0 et 20 : {notes_valides}")
    # 12, 15 et 18 -> meilleure note 18.0, moyenne 16.00, True, True


def exercice_8():
    """8. Mini-projet : le ticket de commande"""
    club = input("Nom du club : ")
    nb_kits = int(input("Nombre de kits : "))
    prix_unitaire = float(input("Prix unitaire (en euros) : "))
    remise_pct = float(input("Remise (en %) : "))
    livraison = float(input("Frais de livraison (en euros) : "))
    budget = float(input("Budget disponible (en euros) : "))
    montant_initial = nb_kits * prix_unitaire
    montant_remise = montant_initial * remise_pct / 100
    total = montant_initial - montant_remise + livraison
    budget_suffisant = budget >= total
    somme_manquante = max(0, total - budget)
    print(f"===== Ticket : {club} =====")
    print(f"Montant avant remise : {montant_initial:.2f} euros")
    print(f"Remise ({remise_pct} %) : {montant_remise:.2f} euros")
    print(f"Total à payer, livraison comprise : {total:.2f} euros")
    print(f"Budget suffisant : {budget_suffisant}")
    print(f"Somme manquante : {somme_manquante:.2f} euros")
    # 3 kits, 40, 10, 5, 100 -> 120.00 ; 12.00 ; 113.00 ; False ; 13.00   (budget 150 -> True ; 0.00)


# ---------- Vérification automatique avec les valeurs de test de la fiche ----------

def executer(fonction, saisies):
    """Exécute la fonction en lui fournissant les saisies (à la place du clavier),
    renvoie ce qu'elle a affiché."""
    saisies = list(saisies)
    global input
    ancien_input = input
    input = lambda invite="": saisies.pop(0)
    sortie = io.StringIO()
    try:
        with contextlib.redirect_stdout(sortie):
            fonction()
    finally:
        input = ancien_input
    return sortie.getvalue()


if __name__ == "__main__":
    s = executer(exercice_1, [])
    assert s.split() == ["30", "17", "0"], s
    s = executer(exercice_2, [])
    assert "82" in s and "88" in s and "4.0" in s and "True" in s and "8.5" in s, s
    s = executer(exercice_3, ["12.5", "3"])
    assert "15.50" in s and "9.50" in s and "37.50" in s, s
    for total, capacite, boites, reste in ((53, 8, 6, 5), (48, 8, 6, 0), (5, 8, 0, 5)):
        s = executer(exercice_4, [str(total), str(capacite)])
        assert f"remplies : {boites}" in s and f"restants : {reste}" in s, s
    s = executer(exercice_5, ["Lina", "Haddad", "Première NSI"])
    assert "Nom : Lina Haddad" in s and "Nombre de caractères : 11" in s and "lettre a : True" in s, s
    assert "lettre a : False" in executer(exercice_5, ["ADAM", "X", "1"])
    for age, taille, attendu in ((14, 2, True), (17, 4, True), (13, 3, False), (16, 5, False)):
        s = executer(exercice_6, [str(age), str(taille)])
        assert f"Inscription valide : {attendu}" in s and f"Correction nécessaire : {not attendu}" in s, s
    s = executer(exercice_7, ["Lina", "12", "15", "18"])
    assert "Meilleure note : 18.0" in s and "pondérée : 16.00" in s and ">= 10 : True" in s and "entre 0 et 20 : True" in s, s
    assert "entre 0 et 20 : False" in executer(exercice_7, ["Lina", "8", "9", "25"])
    s = executer(exercice_8, ["Robotix", "3", "40", "10", "5", "100"])
    assert "120.00" in s and "12.00" in s and "113.00" in s and "suffisant : False" in s and "manquante : 13.00" in s, s
    s = executer(exercice_8, ["Robotix", "3", "40", "10", "5", "150"])
    assert "suffisant : True" in s and "manquante : 0.00" in s, s
    print("Tout est vérifié.")
