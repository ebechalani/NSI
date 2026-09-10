-- ============================================================
-- ludotheque_requetes_corrige.sql — CORRIGÉ PROF (ne pas distribuer)
-- Vérifié par exécution sur ludotheque.sql (SQLite 3).
-- Jeu de données du cours DIU EIL « Bases de données » (B. Mermet &
-- G. Simon, Université Le Havre Normandie, CC BY-NC-SA).
-- ============================================================

-- 1. Projection + tri sur deux attributs
SELECT prenomIllustrateur, nomIllustrateur
FROM   illustrateur
ORDER BY nationaliteIllustrateur, nomIllustrateur;
-- Dave Alsop, Bruno Balixa, Francisco Rico Torres (Américaine),
-- Chris Quilliams (Canadienne), Miguel Coimbra, Julien Delval (Française).

-- 2. Restriction + tri
SELECT nomJeu, duree
FROM   jeu
WHERE  duree < 60
ORDER BY duree;
-- Smash up 45 ; Era: medieval age 50.

-- 3. LIKE : % = n'importe quelle suite de caractères, _ = exactement un caractère
SELECT nomIllustrateur
FROM   illustrateur
WHERE  nationaliteIllustrateur LIKE '%i_e%';
-- « Française » (i-s-e) et « Américaine » (i-n-e) conviennent, pas « Canadienne ».
-- Delval, Coimbra, Balixa, Alsop, Torres.

-- 4. AND / OR avec parenthèses ; upper() pour ignorer la casse
SELECT nomIllustrateur
FROM   illustrateur
WHERE  (nationaliteIllustrateur = 'Américaine' AND upper(prenomIllustrateur) LIKE '%O%')
   OR  nationaliteIllustrateur = 'Française';
-- Delval, Coimbra, Balixa (Bruno), Torres (Francisco Rico). Dave Alsop n'a pas de « o ».

-- 5. DISTINCT
SELECT DISTINCT nationaliteIllustrateur
FROM   illustrateur;
-- Française, Canadienne, Américaine.

-- 6. Deux agrégats dans un même SELECT (pas d'autre attribut sans GROUP BY !)
SELECT COUNT(*), COUNT(DISTINCT nationaliteIllustrateur)
FROM   illustrateur;
-- 6 | 3

-- 7. Jointure 1-N (ON) + tri
SELECT   nomJeu, nationaliteEditeur
FROM     jeu JOIN editeur ON jeu.idEditeur = editeur.idEditeur
ORDER BY nationaliteEditeur, nomJeu;
-- Era: medieval age Allemande ; Cargo Noir, Les chevaliers de la table ronde, Smash up Française.

-- 8. Jointure + restriction (variante USING, possible car l'attribut porte le même nom)
SELECT nomJeu
FROM   jeu JOIN editeur USING (idEditeur)
WHERE  nationaliteEditeur = 'Française';
-- Les chevaliers de la table ronde, Cargo Noir, Smash up.

-- 9. Association N-M : la table estDessinePar fait le pont
SELECT   nomJeu, prenomIllustrateur, nomIllustrateur
FROM     jeu JOIN estDessinePar USING (idJeu)
             JOIN illustrateur  USING (idIllustrateur)
ORDER BY nomJeu, nomIllustrateur;
-- Cargo Noir Miguel Coimbra ; Era: medieval age Chris Quilliams ;
-- Les chevaliers de la table ronde Julien Delval ;
-- Smash up Dave Alsop ; Smash up Bruno Balixa ; Smash up Francisco Rico Torres.

-- 10. GROUP BY sur une jointure
SELECT   nomEditeur, COUNT(*)
FROM     jeu JOIN editeur USING (idEditeur)
GROUP BY nomEditeur;
-- Days of wonder 2 ; EggertSpiele 1 ; Iello 1.

-- 11. Défi : « jouable à 4 joueurs » = 4 est entre le min et le max
SELECT nomJeu
FROM   jeu JOIN parleDe USING (idJeu)
           JOIN theme   USING (idTheme)
WHERE  nbJoueursMin <= 4 AND nbJoueursMax >= 4
AND    duree <= 60
AND    nomTheme = 'Navigation marchande';
-- Cargo Noir (2 à 5 joueurs, 60 min).
-- Piège classique : écrire nbJoueursMin = 4 ne renvoie rien.

-- 12. Défi : 4 tables + DISTINCT (Smash up a 3 illustrateurs, sans DISTINCT un jeu pourrait sortir 3 fois)
SELECT DISTINCT nomJeu
FROM   illustrateur JOIN estDessinePar USING (idIllustrateur)
                    JOIN jeu           USING (idJeu)
                    JOIN editeur       USING (idEditeur)
WHERE  nationaliteIllustrateur = nationaliteEditeur;
-- Les chevaliers de la table ronde (Delval / Days of wonder : Française),
-- Cargo Noir (Coimbra / Days of wonder : Française).

-- 13. Modifications (avec PRAGMA foreign_keys = ON ;)
PRAGMA foreign_keys = ON;

-- 13a.
INSERT INTO illustrateur VALUES (7, 'Cochard', 'David', 'Française');

-- 13b. Colonnes nommées : prenomIllustrateur reçoit NULL (absence de valeur)
INSERT INTO illustrateur (idIllustrateur, nomIllustrateur, nationaliteIllustrateur)
VALUES (8, 'Naiade', 'Française');
-- SELECT nomIllustrateur FROM illustrateur WHERE prenomIllustrateur IS NULL ;  → Naiade
-- (attention : = NULL ne marche jamais, NULL n'est pas une valeur)

-- 13c.
UPDATE editeur
SET    nomEditeur = 'Days of Wonder'
WHERE  idEditeur = 1;

-- 13d.
DELETE FROM editeur WHERE idEditeur = 1;
-- → « FOREIGN KEY constraint failed » : les jeux 1 et 2 référencent cet éditeur
-- (jeu.idEditeur = 1). Le SGBD protège l'intégrité référentielle.
-- Sans le PRAGMA, SQLite laisserait passer la suppression : la base serait incohérente.

-- 13e.
DELETE FROM illustrateur WHERE idIllustrateur >= 7;
