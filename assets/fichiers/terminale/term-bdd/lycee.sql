-- ============================================================
-- lycee.sql — la base « lycée » du thème Bases de données (TNSI)
-- ------------------------------------------------------------
-- Comment l'utiliser :
--   1. Ouvre DB Browser for SQLite.
--   2. Fichier > Nouvelle base de données > enregistre-la sous lycee.db
--   3. Onglet « Exécuter le SQL » > ouvre ce fichier > Exécuter (F5)
--   4. Onglet « Parcourir les données » : les 4 tables sont remplies.
-- Tu peux ré-exécuter ce fichier autant de fois que tu veux :
-- il efface et recrée tout (pratique après une fausse manipulation).
-- ============================================================

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS professeurs;
DROP TABLE IF EXISTS eleves;
DROP TABLE IF EXISTS matieres;

-- ------------------------------------------------------------
-- Schéma relationnel (souligne les clés primaires, # = clé étrangère) :
--   matieres(id_matiere, nom)
--   professeurs(id_prof, nom, #id_matiere)
--   eleves(id_eleve, nom, classe)
--   notes(id_note, #id_eleve, #id_matiere, note)
-- ------------------------------------------------------------

CREATE TABLE matieres (
    id_matiere INTEGER PRIMARY KEY,
    nom        TEXT NOT NULL
);

CREATE TABLE professeurs (
    id_prof    INTEGER PRIMARY KEY,
    nom        TEXT NOT NULL,
    id_matiere INTEGER NOT NULL,
    FOREIGN KEY (id_matiere) REFERENCES matieres(id_matiere)
);

CREATE TABLE eleves (
    id_eleve INTEGER PRIMARY KEY,
    nom      TEXT NOT NULL,
    classe   TEXT NOT NULL
);

CREATE TABLE notes (
    id_note    INTEGER PRIMARY KEY,
    id_eleve   INTEGER NOT NULL,
    id_matiere INTEGER NOT NULL,
    note       REAL NOT NULL CHECK (note >= 0 AND note <= 20),
    FOREIGN KEY (id_eleve)   REFERENCES eleves(id_eleve),
    FOREIGN KEY (id_matiere) REFERENCES matieres(id_matiere)
);

-- ------------------------------------------------------------
-- Contenu : 15 matières
-- ------------------------------------------------------------
INSERT INTO matieres (id_matiere, nom) VALUES
    (1,  'NSI'),
    (2,  'Maths'),
    (3,  'Physique-Chimie'),
    (4,  'SVT'),
    (5,  'Français'),
    (6,  'Philosophie'),
    (7,  'Histoire-Géographie'),
    (8,  'Anglais'),
    (9,  'Espagnol'),
    (10, 'Allemand'),
    (11, 'EPS'),
    (12, 'SES'),
    (13, 'Arts plastiques'),
    (14, 'Musique'),
    (15, 'Latin');

-- ------------------------------------------------------------
-- 15 professeurs (chacun enseigne une matière : clé étrangère)
-- ------------------------------------------------------------
INSERT INTO professeurs (id_prof, nom, id_matiere) VALUES
    (1,  'Mme Lovelace',  1),
    (2,  'M. Martin',     2),
    (3,  'Mme Curie',     3),
    (4,  'M. Pasteur',    4),
    (5,  'Mme Duras',     5),
    (6,  'M. Descartes',  6),
    (7,  'Mme Michelet',  7),
    (8,  'Mme Shelley',   8),
    (9,  'M. Cervantes',  9),
    (10, 'Mme Zuse',      10),
    (11, 'M. Coubertin',  11),
    (12, 'Mme Perroux',   12),
    (13, 'M. Monet',      13),
    (14, 'Mme Boulanger', 14),
    (15, 'M. Ovide',      15);

-- ------------------------------------------------------------
-- 20 élèves (les 5 premiers sont ceux du TP du site)
-- ------------------------------------------------------------
INSERT INTO eleves (id_eleve, nom, classe) VALUES
    (1,  'Ada',      'TNSI'),
    (2,  'Tim',      'TG2'),
    (3,  'Lou',      'TNSI'),
    (4,  'Eve',      'TG1'),
    (5,  'Sam',      'TNSI'),
    (6,  'Alan',     'TG1'),
    (7,  'Grace',    '1G2'),
    (8,  'Linus',    '1G2'),
    (9,  'Margaret', 'TNSI'),
    (10, 'Alice',    'TG2'),
    (11, 'Bob',      'TG2'),
    (12, 'Chloé',    'TNSI'),
    (13, 'Driss',    'TG1'),
    (14, 'Emma',     '1G2'),
    (15, 'Farid',    'TNSI'),
    (16, 'Gaëlle',   'TG2'),
    (17, 'Hugo',     'TG1'),
    (18, 'Inès',     'TNSI'),
    (19, 'Jules',    '1G2'),
    (20, 'Katia',    'TNSI');

-- ------------------------------------------------------------
-- 25 notes (les 8 premières sont celles du TP du site :
--            id_matiere 1 = NSI, 2 = Maths)
-- ------------------------------------------------------------
INSERT INTO notes (id_note, id_eleve, id_matiere, note) VALUES
    (1,  1,  1, 17),
    (2,  1,  2, 15),
    (3,  2,  2, 12),
    (4,  3,  1, 9),
    (5,  3,  2, 14),
    (6,  4,  1, 18),
    (7,  5,  1, 11),
    (8,  5,  2, 8),
    (9,  6,  1, 16),
    (10, 6,  2, 13),
    (11, 7,  2, 15),
    (12, 8,  2, 9),
    (13, 9,  1, 19),
    (14, 9,  2, 17),
    (15, 10, 3, 12),
    (16, 11, 3, 10),
    (17, 12, 1, 14),
    (18, 12, 5, 13),
    (19, 13, 2, 11),
    (20, 14, 5, 16),
    (21, 15, 1, 8),
    (22, 16, 3, 14),
    (23, 17, 2, 10),
    (24, 18, 1, 15),
    (25, 20, 1, 12);
