-- ============================================================
-- ludotheque.sql — la base « ludothèque » du cours DIU EIL
-- ------------------------------------------------------------
-- Source : « Bloc 4, chapitre 1 : Bases de données », cours du DIU
-- Enseigner l'informatique au lycée (EIL), Bruno Mermet & Gaële Simon,
-- Université Le Havre Normandie, 2020-2026 — licence CC BY-NC-SA.
-- https://bases-de-donnees-26b46e.gitlab.io/
-- Adaptation : les 4 tables du fichier ludotheque.db du cours
-- (illustrateur, editeur, jeu, estDessinePar) sont complétées par les
-- 4 tables obtenues dans le cours « Modèle conceptuel » (exercices 4-5) :
-- auteur, estAuteurDe, theme, parleDe. Les noms des attributs suivent
-- la convention du cours (camelCase, suffixés par le nom de la table).
-- ------------------------------------------------------------
-- Comment l'utiliser :
--   1. Ouvre DB Browser for SQLite.
--   2. Fichier > Nouvelle base de données > enregistre-la sous ludotheque.db
--   3. Onglet « Exécuter le SQL » > ouvre ce fichier > Exécuter (F5)
--   4. Onglet « Parcourir les données » : les 8 tables sont remplies.
-- Tu peux ré-exécuter ce fichier autant de fois que tu veux :
-- il efface et recrée tout (pratique après une fausse manipulation).
-- ============================================================

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS parleDe;
DROP TABLE IF EXISTS estAuteurDe;
DROP TABLE IF EXISTS estDessinePar;
DROP TABLE IF EXISTS theme;
DROP TABLE IF EXISTS auteur;
DROP TABLE IF EXISTS jeu;
DROP TABLE IF EXISTS illustrateur;
DROP TABLE IF EXISTS editeur;

-- ------------------------------------------------------------
-- Schéma relationnel (souligne les clés primaires, # = clé étrangère) :
--   editeur(idEditeur, nomEditeur, nationaliteEditeur)
--   illustrateur(idIllustrateur, nomIllustrateur, prenomIllustrateur, nationaliteIllustrateur)
--   auteur(idAuteur, nomAuteur, prenomAuteur)
--   theme(idTheme, nomTheme)
--   jeu(idJeu, nomJeu, nbJoueursMin, nbJoueursMax, duree, #idEditeur)
--   estDessinePar(#idIllustrateur, #idJeu)      -- clé primaire = le couple
--   estAuteurDe(#idAuteur, #idJeu)              -- clé primaire = le couple
--   parleDe(#idTheme, #idJeu)                   -- clé primaire = le couple
-- ------------------------------------------------------------

CREATE TABLE editeur (
    idEditeur          INTEGER PRIMARY KEY NOT NULL,
    nomEditeur         TEXT NOT NULL,
    nationaliteEditeur TEXT
);

CREATE TABLE illustrateur (
    idIllustrateur          INTEGER PRIMARY KEY NOT NULL,
    nomIllustrateur         TEXT NOT NULL,
    prenomIllustrateur      TEXT,
    nationaliteIllustrateur TEXT
);

CREATE TABLE auteur (
    idAuteur     INTEGER PRIMARY KEY NOT NULL,
    nomAuteur    TEXT NOT NULL,
    prenomAuteur TEXT
);

CREATE TABLE theme (
    idTheme  INTEGER PRIMARY KEY NOT NULL,
    nomTheme TEXT NOT NULL
);

CREATE TABLE jeu (
    idJeu        INTEGER PRIMARY KEY NOT NULL,
    nomJeu       TEXT NOT NULL,
    nbJoueursMin INTEGER,
    nbJoueursMax INTEGER,
    duree        INTEGER,                       -- en minutes
    idEditeur    INTEGER REFERENCES editeur(idEditeur)
);

-- Association N-M : un jeu a plusieurs illustrateurs, un illustrateur dessine plusieurs jeux.
CREATE TABLE estDessinePar (
    idIllustrateur INTEGER NOT NULL,
    idJeu          INTEGER NOT NULL,
    PRIMARY KEY (idJeu, idIllustrateur),
    FOREIGN KEY (idJeu)          REFERENCES jeu(idJeu),
    FOREIGN KEY (idIllustrateur) REFERENCES illustrateur(idIllustrateur)
);

CREATE TABLE estAuteurDe (
    idAuteur INTEGER NOT NULL,
    idJeu    INTEGER NOT NULL,
    PRIMARY KEY (idJeu, idAuteur),
    FOREIGN KEY (idJeu)    REFERENCES jeu(idJeu),
    FOREIGN KEY (idAuteur) REFERENCES auteur(idAuteur)
);

CREATE TABLE parleDe (
    idTheme INTEGER NOT NULL,
    idJeu   INTEGER NOT NULL,
    PRIMARY KEY (idJeu, idTheme),
    FOREIGN KEY (idJeu)   REFERENCES jeu(idJeu),
    FOREIGN KEY (idTheme) REFERENCES theme(idTheme)
);

-- ------------------------------------------------------------
-- Contenu (données du cours DIU)
-- ------------------------------------------------------------
INSERT INTO editeur (idEditeur, nomEditeur, nationaliteEditeur) VALUES
    (1, 'Days of wonder', 'Française'),
    (2, 'EggertSpiele',   'Allemande'),
    (3, 'Iello',          'Française');

INSERT INTO illustrateur (idIllustrateur, nomIllustrateur, prenomIllustrateur, nationaliteIllustrateur) VALUES
    (1, 'Delval',    'Julien',         'Française'),
    (2, 'Coimbra',   'Miguel',         'Française'),
    (3, 'Quilliams', 'Chris',          'Canadienne'),
    (4, 'Balixa',    'Bruno',          'Américaine'),
    (5, 'Alsop',     'Dave',           'Américaine'),
    (6, 'Torres',    'Francisco Rico', 'Américaine');

INSERT INTO auteur (idAuteur, nomAuteur, prenomAuteur) VALUES
    (1, 'Laget',    'Serge'),
    (2, 'Cathala',  'Bruno'),
    (3, 'Leacock',  'Matt'),
    (4, 'Peterson', 'Paul');

INSERT INTO theme (idTheme, nomTheme) VALUES
    (1, 'Moyen-âge'),
    (2, 'Légende arthurienne'),
    (3, 'Marché noir'),
    (4, 'Navigation marchande'),
    (5, 'Médiéval'),
    (6, 'Construction'),
    (7, 'Fantastique'),
    (8, 'Monstre'),
    (9, 'Pirate');

INSERT INTO jeu (idJeu, nomJeu, nbJoueursMin, nbJoueursMax, duree, idEditeur) VALUES
    (1, 'Les chevaliers de la table ronde', 3, 7, 90, 1),
    (2, 'Cargo Noir',                       2, 5, 60, 1),
    (3, 'Era: medieval age',                1, 4, 50, 2),
    (4, 'Smash up',                         2, 4, 45, 3);

INSERT INTO estDessinePar (idIllustrateur, idJeu) VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4), (5, 4), (6, 4);

INSERT INTO estAuteurDe (idAuteur, idJeu) VALUES
    (1, 1), (2, 1),
    (1, 2),
    (3, 3),
    (4, 4);

INSERT INTO parleDe (idTheme, idJeu) VALUES
    (1, 1), (2, 1),
    (3, 2), (4, 2),
    (5, 3), (6, 3),
    (7, 4), (8, 4), (9, 4);
