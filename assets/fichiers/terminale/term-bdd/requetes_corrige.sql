-- ============================================================
-- requetes_corrige.sql — corrigé prof des 10 requêtes (base lycee.sql)
-- ============================================================

-- Exercice 1 — Toute une table (20 lignes)
SELECT * FROM eleves;

-- Exercice 2 — Sélection (8 lignes : Ada, Lou, Sam, Margaret, Chloé, Farid, Inès, Katia)
SELECT nom FROM eleves WHERE classe = 'TNSI';

-- Exercice 3 — Tri (20 lignes, de Ada à Tim)
SELECT nom FROM eleves ORDER BY nom;

-- Exercice 4 — Doublons (4 lignes)
SELECT DISTINCT classe FROM eleves;

-- Exercice 5 — Compter (résultat : 10)
SELECT COUNT(*) FROM notes WHERE id_matiere = 1;

-- Exercice 6 — Moyenne (résultat : 13.9)
SELECT AVG(note) FROM notes WHERE id_matiere = 1;

-- Exercice 7 — Jointure (10 lignes)
SELECT eleves.nom, notes.note
FROM   eleves
JOIN   notes ON notes.id_eleve = eleves.id_eleve
WHERE  notes.id_matiere = 1;

-- Exercice 8 — GROUP BY (4 lignes ; TNSI : environ 13.23)
SELECT eleves.classe, AVG(notes.note)
FROM   eleves
JOIN   notes ON notes.id_eleve = eleves.id_eleve
GROUP BY eleves.classe;

-- Exercice 9 — Double jointure, tableau d'honneur (4 lignes :
-- Margaret|NSI|19, Eve|NSI|18, Ada|NSI|17, Margaret|Maths|17)
SELECT eleves.nom, matieres.nom, notes.note
FROM   notes
JOIN   eleves   ON notes.id_eleve   = eleves.id_eleve
JOIN   matieres ON notes.id_matiere = matieres.id_matiere
WHERE  notes.note >= 17
ORDER BY notes.note DESC;

-- Exercice 10 — Modifier la base
-- a) INSERT : en nommant les colonnes, c'est plus sûr.
INSERT INTO eleves (id_eleve, nom, classe) VALUES (21, 'Zoé', 'TNSI');

-- b) UPDATE : la clé primaire dans le WHERE cible UNE seule ligne.
--    (UPDATE notes SET note = 12; sans WHERE écraserait les 25 notes !)
UPDATE notes SET note = 12 WHERE id_note = 4;

-- c) DELETE FROM eleves WHERE id_eleve = 5;
--    Le SGBD REFUSE : les notes n°7 et n°8 référencent encore Sam via
--    la clé étrangère id_eleve (contrainte d'intégrité référentielle).
--    Il faudrait d'abord supprimer ses notes :
--      DELETE FROM notes WHERE id_eleve = 5;
--      DELETE FROM eleves WHERE id_eleve = 5;
