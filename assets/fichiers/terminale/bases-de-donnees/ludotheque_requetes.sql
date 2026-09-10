-- ============================================================
-- ludotheque_requetes.sql — 12 requêtes à écrire sur la ludothèque
-- ------------------------------------------------------------
-- Base : ludotheque.sql (à exécuter d'abord dans DB Browser for SQLite).
-- Jeu de données du cours DIU EIL « Bases de données » (B. Mermet &
-- G. Simon, Université Le Havre Normandie, CC BY-NC-SA), exercices
-- adaptés des chapitres « SQL » et « Contraintes de référence ».
--
-- Méthode : écris CHAQUE requête sur ta feuille AVANT de l'exécuter
-- (comme à l'épreuve écrite), puis vérifie avec le résultat attendu.
-- Rappel du schéma :
--   editeur(idEditeur, nomEditeur, nationaliteEditeur)
--   illustrateur(idIllustrateur, nomIllustrateur, prenomIllustrateur, nationaliteIllustrateur)
--   auteur(idAuteur, nomAuteur, prenomAuteur)
--   theme(idTheme, nomTheme)
--   jeu(idJeu, nomJeu, nbJoueursMin, nbJoueursMax, duree, #idEditeur)
--   estDessinePar(#idIllustrateur, #idJeu)
--   estAuteurDe(#idAuteur, #idJeu)
--   parleDe(#idTheme, #idJeu)
-- ============================================================

-- 1. (projection + tri) Les prénoms et noms des illustrateurs, triés par
--    nationalité puis par nom.
-- Résultat attendu : 6 lignes — Dave Alsop, Bruno Balixa, Francisco Rico Torres,
--    Chris Quilliams, Miguel Coimbra, Julien Delval.



-- 2. (restriction) Les noms des jeux qui durent moins d'une heure, du plus
--    court au plus long, avec leur durée.
-- Résultat attendu : Smash up 45, Era: medieval age 50.



-- 3. (LIKE) Les noms des illustrateurs dont la nationalité contient un « i »
--    puis un « e » séparés par exactement un caractère.
-- Résultat attendu : Delval, Coimbra, Balixa, Alsop, Torres (5 lignes).



-- 4. (AND / OR) Tous les illustrateurs français, et les illustrateurs
--    américains dont le prénom contient un « o » (majuscule ou minuscule).
-- Résultat attendu : Delval, Coimbra, Balixa, Torres (4 lignes — pas Alsop).



-- 5. (DISTINCT) La liste des nationalités des illustrateurs, sans doublon.
-- Résultat attendu : Française, Canadienne, Américaine (3 lignes).



-- 6. (agrégats) En UNE requête : le nombre d'illustrateurs et le nombre de
--    nationalités différentes parmi eux.
-- Résultat attendu : 6 | 3



-- 7. (jointure) Le nom de chaque jeu avec la nationalité de son éditeur,
--    trié par nationalité puis par nom de jeu.
-- Résultat attendu : Era: medieval age Allemande, Cargo Noir Française,
--    Les chevaliers de la table ronde Française, Smash up Française.



-- 8. (jointure + restriction) Les noms des jeux édités par un éditeur français.
-- Résultat attendu : Les chevaliers de la table ronde, Cargo Noir, Smash up.



-- 9. (association N-M, 3 tables) Pour chaque jeu, le prénom et le nom de
--    ses illustrateurs, triés par nom de jeu puis nom d'illustrateur.
-- Résultat attendu : 6 lignes — Smash up apparaît 3 fois (Alsop, Balixa, Torres).



-- 10. (GROUP BY) Le nombre de jeux publiés par chaque éditeur (nom de l'éditeur
--     et nombre).
-- Résultat attendu : Days of wonder 2, EggertSpiele 1, Iello 1.



-- 11. (défi, 3 tables) Les jeux jouables à 4 joueurs, en 1 h au plus, et
--     portant sur le thème « Navigation marchande ».
-- Résultat attendu : Cargo Noir.



-- 12. (défi, 4 tables) Les jeux dont l'éditeur a la même nationalité qu'au
--     moins un de ses illustrateurs (chaque jeu une seule fois).
-- Résultat attendu : Les chevaliers de la table ronde, Cargo Noir.



-- ============================================================
-- 13. Modifier la base (à faire EN DERNIER, puis ré-exécute ludotheque.sql
--     pour tout remettre en place).
-- ============================================================
-- 13a. Ajoute l'illustrateur n° 7 : David Cochard, de nationalité française.
--      Résultat attendu : SELECT COUNT(*) FROM illustrateur ; renvoie 7.

-- 13b. Ajoute l'illustrateur n° 8 « Naiade », dont on ne connaît pas le prénom
--      (nationalité française). Vérifie avec SELECT ... WHERE prenomIllustrateur IS NULL ;

-- 13c. Corrige la majuscule de l'éditeur 1 : son nom est « Days of Wonder ».
--      (la clause WHERE doit viser UNE seule ligne !)

-- 13d. Essaie de supprimer l'éditeur n° 1. Que répond SQLite ? Pourquoi ?
--      (assure-toi que PRAGMA foreign_keys = ON ; a bien été exécuté)

-- 13e. Supprime les deux illustrateurs ajoutés en 13a et 13b en UNE requête.
