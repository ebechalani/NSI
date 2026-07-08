/* =====================================================================
   PROJETS EN ÎLOTS — Terminale NSI
   Démarche identique à la Première : réfléchir en îlot → algorithme →
   coder → tester → présenter. Ossature (rôles, grille, fiche) commune ;
   4 projets : structures (×2), algorithmique (Dijkstra), bases de données.
   ===================================================================== */

/* ---------------- Rôles dans l'îlot (génériques) ---------------- */
const PROJECT_ROLES = [
  { nom: "Chef de projet", emoji: "🧭", desc: "Organise le groupe, répartit le travail et gère le temps." },
  { nom: "Analyste", emoji: "🔍", desc: "Comprend le problème, reformule, propose la stratégie et l'algorithme." },
  { nom: "Développeur", emoji: "⌨️", desc: "Écrit le code sur le poste informatique à partir de l'algorithme." },
  { nom: "Testeur", emoji: "🧪", desc: "Vérifie avec des exemples, cherche les cas qui font échouer." },
  { nom: "Rapporteur", emoji: "🗣️", desc: "Note les décisions et présente la solution à l'oral." },
];

/* ---------------- Grille d'évaluation générique (/20) ---------------- */
const PROJECT_GRILLE = [
  { critere: "Compréhension du problème", points: 4, detail: "Le groupe a reformulé le problème, identifié les entrées et le résultat attendu." },
  { critere: "Algorithme proposé", points: 4, detail: "Un algorithme clair en langage naturel a été écrit avant de coder." },
  { critere: "Code fonctionnel", points: 5, detail: "Le programme s'exécute et résout le problème dans les cas prévus." },
  { critere: "Tests réalisés", points: 3, detail: "Des tests (cas simples + cas limites) ont été écrits et passent." },
  { critere: "Travail en groupe", points: 2, detail: "Les rôles ont été répartis et respectés ; entraide effective." },
  { critere: "Présentation", points: 2, detail: "La solution est présentée clairement à l'oral, démarche comprise." },
];

/* ---------------- Fiche commune « réfléchir en îlot » ---------------- */
const FICHE_ILOT = {
  titre: "Avant de coder : réfléchir en îlot",
  intro:
    "À remplir en équipe AVANT de toucher au clavier. On ne code bien que ce que l'on a d'abord compris et décrit.",
  champs: [
    "Nom du projet",
    "Membres du groupe (et rôle de chacun)",
    "Quel est le problème à résoudre ? (en une phrase)",
    "Quelles sont les données d'entrée ?",
    "Quel résultat doit-on obtenir ?",
    "Quelle structure de données est la plus adaptée ? (pile, file, arbre, graphe…) Pourquoi ?",
    "Quel algorithme en langage naturel ? (étapes numérotées)",
    "Quels tests allons-nous utiliser ? (exemple → résultat attendu)",
    "Qui fait quoi dans le groupe ?",
    "Quelles difficultés avons-nous rencontrées ?",
    "Comment avons-nous amélioré notre solution ?",
  ],
};

/* ---------------- Projets (à compléter au fil de l'année) ---------------- */
const PROJECTS = [
  {
    id: "term-historique-navigation",
    num: 1,
    emoji: "🌐",
    titre: "L'historique du navigateur (pile)",
    niveau: "moyen",
    duree: "1 à 2 séances",
    theme: "term-structures",
    notions: ["Pile (LIFO)", "Interface / implémentation", "Tests"],
    objectif:
      "Reproduire les boutons « Précédent » et « Suivant » d'un navigateur en s'appuyant sur deux piles.",
    situation:
      "Le club informatique veut un mini-navigateur en mode texte. Quand on visite une page, on doit pouvoir revenir en arrière (Précédent) puis ré-avancer (Suivant). Le groupe doit choisir la bonne structure de données et la programmer.",
    phases: [
      "<strong>Réflexion en îlot</strong> : pourquoi une pile (LIFO) modélise-t-elle exactement le bouton « Précédent » ? Décrire ce qui se passe à chaque clic.",
      "<strong>Algorithme sur papier</strong> : décrire « visiter une page », « revenir en arrière » et « ré-avancer » avec deux piles (passé et futur).",
      "<strong>Codage</strong> : implémenter une classe <code>Navigateur</code> avec <code>visiter(page)</code>, <code>precedent()</code> et <code>suivant()</code>.",
      "<strong>Tests</strong> : vérifier un scénario complet (visiter A, B, C ; revenir ; visiter D ; etc.) avec des <code>assert</code>.",
      "<strong>Présentation</strong> : démontrer la navigation et expliquer le rôle de chaque pile.",
    ],
    code: `class Navigateur:
    def __init__(self):
        self.actuelle = None
        self.passe = []     # pile des pages précédentes
        self.futur = []     # pile des pages « en avant »

    def visiter(self, page):
        if self.actuelle is not None:
            self.passe.append(self.actuelle)
        self.actuelle = page
        self.futur = []     # une nouvelle visite efface le « futur »

    def precedent(self):
        if self.passe:
            self.futur.append(self.actuelle)
            self.actuelle = self.passe.pop()
        return self.actuelle

    def suivant(self):
        if self.futur:
            self.passe.append(self.actuelle)
            self.actuelle = self.futur.pop()
        return self.actuelle

# À tester :
nav = Navigateur()
nav.visiter("A"); nav.visiter("B"); nav.visiter("C")
print(nav.precedent())   # B
print(nav.precedent())   # A
print(nav.suivant())     # B
`,
  },

  {
    id: "term-gestionnaire-taches",
    num: 2,
    emoji: "📋",
    titre: "Gestionnaire de tâches à priorité",
    niveau: "moyen",
    duree: "1 à 2 séances",
    theme: "term-structures",
    notions: ["File de priorité", "Interface / implémentation", "Tuples", "POO", "Coût des opérations"],
    objectif:
      "Programmer une file de priorité : les tâches ne sortent pas dans l'ordre d'arrivée (FIFO), mais par ordre d'urgence.",
    situation:
      "La vie scolaire veut un petit outil : on y note les tâches (« réparer le vidéoprojecteur », « changer une ampoule »…) avec une priorité de 1 (peut attendre) à 5 (urgent). L'outil doit toujours proposer LA tâche la plus urgente, et à priorité égale, la plus ancienne. Ni une pile ni une file simple ne conviennent : l'îlot doit concevoir une file de priorité.",
    phases: [
      "<strong>Réflexion en îlot</strong> : pourquoi une file (FIFO) ne convient-elle pas ? Et une pile ? Définir l'<em>interface</em> : <code>ajouter(description, priorite)</code>, <code>suivante()</code>, <code>est_vide()</code>.",
      "<strong>Algorithme sur papier</strong> : deux implémentations possibles — chercher le maximum au moment de <code>suivante()</code>, ou maintenir la liste triée dès <code>ajouter()</code>. Comparer le coût des deux choix.",
      "<strong>Codage</strong> : implémenter la classe <code>GestionnaireTaches</code> (tuples <code>(priorite, numero, description)</code> dans une liste).",
      "<strong>Tests</strong> : scénario complet avec des <code>assert</code> — priorités égales (l'ancienneté doit départager), gestionnaire vide, ajout après retrait.",
      "<strong>Présentation</strong> : démo + expliquer le choix d'implémentation et son coût. Ouverture : le module <code>heapq</code> de Python fait cela en O(log n).",
    ],
    code: `class GestionnaireTaches:
    def __init__(self):
        self.taches = []      # tuples (priorite, numero, description)
        self.numero = 0       # compteur d'arrivée (départage l'ancienneté)

    def est_vide(self):
        return self.taches == []

    def ajouter(self, description, priorite):
        self.numero += 1
        self.taches.append((priorite, self.numero, description))

    def suivante(self):
        """Retire et renvoie la tâche la plus urgente (priorité max) ;
        à priorité égale, la plus ancienne (numéro min)."""
        assert not self.est_vide(), "aucune tâche en attente !"
        meilleure = 0
        for i in range(len(self.taches)):
            prio_i, num_i, _ = self.taches[i]
            prio_m, num_m, _ = self.taches[meilleure]
            if prio_i > prio_m or (prio_i == prio_m and num_i < num_m):
                meilleure = i
        return self.taches.pop(meilleure)[2]

# À tester :
g = GestionnaireTaches()
g.ajouter("changer une ampoule", 2)
g.ajouter("réparer le vidéoprojecteur", 5)
g.ajouter("ranger la réserve", 2)
print(g.suivante())   # réparer le vidéoprojecteur
print(g.suivante())   # changer une ampoule (même priorité que ranger, mais plus ancienne)
print(g.suivante())   # ranger la réserve
print(g.est_vide())   # True
`,
  },

  {
    id: "term-plan-lycee-dijkstra",
    num: 3,
    emoji: "🗺️",
    titre: "Plus court chemin sur le plan du lycée",
    niveau: "defi",
    duree: "2 à 3 séances",
    theme: "term-algo",
    notions: ["Graphe pondéré", "Dictionnaires", "Algorithme de Dijkstra", "Plus court chemin"],
    objectif:
      "Modéliser le plan du lycée par un graphe pondéré et programmer l'algorithme de Dijkstra pour trouver le trajet le plus court entre deux lieux.",
    situation:
      "Un élève à mobilité réduite (ou un robot livreur de copies !) doit se déplacer dans le lycée : entrée, cour, CDI, bâtiments, cantine, labo… Les couloirs n'ont pas tous la même longueur. L'îlot doit modéliser SON lycée en graphe pondéré (les sommets sont les lieux, les poids des arêtes les distances en mètres), puis calculer automatiquement le chemin le plus court entre deux lieux quelconques.",
    phases: [
      "<strong>Réflexion en îlot</strong> : dessiner le plan (réel !) du lycée en graphe : quels lieux garder comme sommets ? Estimer les distances. Pourquoi un parcours en largeur ne suffit-il pas ici ?",
      "<strong>Modélisation</strong> : représenter le graphe par un dictionnaire de dictionnaires <code>{lieu: {voisin: distance}}</code>.",
      "<strong>Algorithme sur papier</strong> : dérouler Dijkstra à la main sur le graphe de l'îlot (tableau des distances, sommet choisi à chaque étape) AVANT de coder.",
      "<strong>Codage</strong> : programmer <code>dijkstra(graphe, depart)</code> (distances + prédécesseurs), puis <code>chemin(pred, arrivee)</code> qui reconstruit l'itinéraire.",
      "<strong>Tests</strong> : comparer les résultats du programme au déroulé papier ; tester un lieu isolé (distance infinie).",
      "<strong>Présentation</strong> : afficher l'itinéraire complet (« Entrée → Cour → Cantine → Labo : 85 m ») et expliquer pourquoi l'algorithme est glouton… mais exact.",
    ],
    code: `# Le plan du lycée : graphe pondéré (distances en mètres)
plan = {
    "Entree":  {"Cour": 30, "CDI": 50},
    "Cour":    {"Entree": 30, "Cantine": 40, "BatA": 25},
    "CDI":     {"Entree": 50, "BatA": 20},
    "BatA":    {"Cour": 25, "CDI": 20, "Labo": 35},
    "Cantine": {"Cour": 40, "Labo": 15},
    "Labo":    {"BatA": 35, "Cantine": 15},
}

def dijkstra(graphe, depart):
    dist = {s: float("inf") for s in graphe}   # meilleures distances connues
    pred = {s: None for s in graphe}           # pour reconstruire le chemin
    dist[depart] = 0
    a_traiter = list(graphe.keys())
    while a_traiter != []:
        # sommet non traité de distance minimale (choix glouton)
        u = a_traiter[0]
        for s in a_traiter:
            if dist[s] < dist[u]:
                u = s
        a_traiter.remove(u)
        for voisin, poids in graphe[u].items():
            if dist[u] + poids < dist[voisin]:   # on a trouvé mieux !
                dist[voisin] = dist[u] + poids
                pred[voisin] = u
    return dist, pred

def chemin(pred, arrivee):
    etapes = []
    s = arrivee
    while s is not None:
        etapes.append(s)
        s = pred[s]
    etapes.reverse()
    return etapes

dist, pred = dijkstra(plan, "Entree")
print("Distance Entrée → Labo :", dist["Labo"], "m")
print("Itinéraire :", " → ".join(chemin(pred, "Labo")))
`,
  },

  {
    id: "term-mediatheque-bdd",
    num: 4,
    emoji: "📚",
    titre: "Mini-base de données de la médiathèque",
    niveau: "moyen",
    duree: "2 séances",
    theme: "term-bdd",
    notions: ["Modèle relationnel", "Clés primaire et étrangère", "SQL (SELECT, jointure)", "Dictionnaires Python"],
    objectif:
      "Concevoir le schéma relationnel de la médiathèque du lycée, écrire les requêtes SQL… puis programmer en Python un mini-moteur qui exécute sélection, projection et jointure.",
    situation:
      "La médiathèque gère ses livres et ses emprunts sur un vieux cahier. L'îlot doit concevoir une vraie base relationnelle : tables LIVRE et EMPRUNT, clés primaires et étrangères, requêtes SQL pour les questions du documentaliste (« qui a emprunté quoi ? », « quels livres sont sortis ? »). Pour comprendre ce que fait VRAIMENT le SGBD, on programme ensuite les mêmes opérations en Python pur.",
    phases: [
      "<strong>Réflexion en îlot</strong> : quelles tables, quels attributs, quelles clés ? Pourquoi ne pas tout mettre dans UNE seule table ? (redondance, incohérences).",
      "<strong>Schéma relationnel sur papier</strong> : LIVRE(<u>id_livre</u>, titre, auteur, annee) et EMPRUNT(<u>id_emprunt</u>, #id_livre, emprunteur, retour_prevu). Justifier la clé étrangère.",
      "<strong>Requêtes SQL sur papier</strong> : écrire en SQL les questions du documentaliste (sélection, projection, jointure, COUNT) — à vérifier ensuite dans DB Browser for SQLite.",
      "<strong>Codage du mini-moteur</strong> : les tables sont des listes de dictionnaires ; programmer <code>selection</code>, <code>projection</code> et <code>jointure</code>, et retrouver les mêmes résultats que les requêtes SQL.",
      "<strong>Tests</strong> : chaque requête papier doit donner le même résultat que le mini-moteur (les <code>assert</code> font foi).",
      "<strong>Présentation</strong> : montrer une requête SQL et « sa traduction » Python côte à côte ; expliquer ce qu'apporte un vrai SGBD (contraintes, persistance, efficacité).",
    ],
    code: `# Les tables : des listes de dictionnaires (une ligne = un dict)
livres = [
    {"id_livre": 1, "titre": "Dune", "auteur": "Herbert", "annee": 1965},
    {"id_livre": 2, "titre": "Fondation", "auteur": "Asimov", "annee": 1951},
    {"id_livre": 3, "titre": "Le Guide du voyageur", "auteur": "Adams", "annee": 1979},
]
emprunts = [
    {"id_emprunt": 1, "id_livre": 2, "emprunteur": "Ada", "retour_prevu": "2026-10-05"},
    {"id_emprunt": 2, "id_livre": 1, "emprunteur": "Sam", "retour_prevu": "2026-10-12"},
]

# SELECT * FROM table WHERE condition
def selection(table, condition):
    return [ligne for ligne in table if condition(ligne)]

# SELECT col1, col2 FROM table
def projection(table, colonnes):
    return [{c: ligne[c] for c in colonnes} for ligne in table]

# SELECT * FROM t1 JOIN t2 ON t1.cle = t2.cle
def jointure(t1, t2, cle):
    resultat = []
    for l1 in t1:
        for l2 in t2:
            if l1[cle] == l2[cle]:
                fusion = dict(l1)
                fusion.update(l2)
                resultat.append(fusion)
    return resultat

# « Quels livres publiés avant 1970 ? »
# SQL : SELECT titre FROM livre WHERE annee < 1970;
anciens = projection(selection(livres, lambda l: l["annee"] < 1970), ["titre"])
print(anciens)   # Dune, Fondation

# « Qui a emprunté quel titre ? »
# SQL : SELECT emprunteur, titre FROM emprunt JOIN livre ON ... ;
sorties = projection(jointure(emprunts, livres, "id_livre"), ["emprunteur", "titre"])
print(sorties)   # Ada → Fondation, Sam → Dune
assert len(sorties) == 2
`,
  },
];
