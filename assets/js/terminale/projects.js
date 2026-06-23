/* =====================================================================
   PROJETS EN ÎLOTS — Terminale NSI
   Démarche identique à la Première : réfléchir en îlot → algorithme →
   coder → tester → présenter. Ossature (rôles, grille, fiche) commune ;
   un projet exemple est rattaché au thème « Structures de données ».
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
];
