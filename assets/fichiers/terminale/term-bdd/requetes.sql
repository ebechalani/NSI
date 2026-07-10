-- ============================================================
-- requetes.sql — 10 requêtes à écrire sur la base « lycée »
-- ------------------------------------------------------------
-- Avant de commencer : exécute lycee.sql dans DB Browser for
-- SQLite (onglet « Exécuter le SQL ») pour créer les 4 tables :
--   matieres(id_matiere, nom)
--   professeurs(id_prof, nom, #id_matiere)
--   eleves(id_eleve, nom, classe)
--   notes(id_note, #id_eleve, #id_matiere, note)   -- NSI = 1, Maths = 2
--
-- Consigne : écris CHAQUE requête sous son énoncé, PUIS exécute-la.
-- Le « résultat attendu » joue le rôle des asserts de l'épreuve
-- pratique : si tu n'obtiens pas exactement cela, corrige ta requête.
-- Comme à l'écrit du bac : mots-clés SQL en MAJUSCULES, chaînes
-- entre apostrophes simples, point-virgule final.
-- ============================================================


-- Exercice 1 — Toute une table
-- Affiche toutes les colonnes et toutes les lignes de la table eleves.
-- Résultat attendu : 20 lignes, 3 colonnes.




-- Exercice 2 — Sélection (WHERE)
-- Affiche le nom des élèves de la classe TNSI.
-- Résultat attendu : 8 lignes (Ada, Lou, Sam, Margaret, Chloé, Farid, Inès, Katia).




-- Exercice 3 — Tri (ORDER BY)
-- Affiche le nom des élèves triés dans l'ordre alphabétique.
-- Résultat attendu : 20 lignes, de Ada à Tim.




-- Exercice 4 — Doublons (DISTINCT)
-- Affiche la liste des classes SANS doublon.
-- Résultat attendu : 4 lignes (TNSI, TG2, TG1, 1G2 — dans un ordre quelconque).




-- Exercice 5 — Compter (COUNT)
-- Combien y a-t-il de notes de NSI (id_matiere = 1) ?
-- Résultat attendu : 10.




-- Exercice 6 — Moyenne (AVG)
-- Quelle est la moyenne des notes de NSI ?
-- Résultat attendu : 13.9.




-- Exercice 7 — Jointure (JOIN … ON)
-- Affiche le nom de chaque élève et sa note de NSI.
-- Résultat attendu : 10 lignes, dont Ada|17, Lou|9, Eve|18, Sam|11.




-- Exercice 8 — Agréger par paquets (GROUP BY)
-- Pour chaque classe, affiche la classe et la moyenne des notes de
-- ses élèves (jointure eleves-notes, puis GROUP BY).
-- Résultat attendu : 4 lignes ; la TNSI a environ 13.23 de moyenne.




-- Exercice 9 — Double jointure : le tableau d'honneur
-- Affiche le nom de l'élève, le nom de la matière et la note, pour
-- toutes les notes supérieures ou égales à 17, triées de la
-- meilleure à la moins bonne.
-- Résultat attendu : 4 lignes (Margaret|NSI|19, Eve|NSI|18,
--                    Ada|NSI|17, Margaret|Maths|17).




-- Exercice 10 — Modifier la base (INSERT, UPDATE, DELETE)
-- a) Une nouvelle élève, Zoé, arrive en TNSI : ajoute-la avec
--    l'identifiant 21.
--    Vérification : SELECT COUNT(*) FROM eleves; doit renvoyer 21.
-- b) La note n°4 (le 9 de Lou en NSI) était une erreur de saisie,
--    c'était 12 : corrige-la. ATTENTION à la clause WHERE !
--    Vérification : SELECT note FROM notes WHERE id_note = 4; -> 12.
-- c) Essaie de supprimer l'élève n°5 (Sam). Que répond le SGBD, et
--    pourquoi ? Écris ta réponse en commentaire.
