/* =====================================================================
   RESSOURCES — Terminale NSI
   Activités débranchées, progression annuelle, fiches méthode, encart
   « coder pour de vrai », didactique, ressources externes, évaluations.
   SQUELETTE : contenu volontairement léger, à compléter ensemble.
   ===================================================================== */

/* ---------------- Activités débranchées ---------------- */
const DEBRANCHE = [
  {
    id: "piles-files-gobelets",
    emoji: "🥤",
    titre: "Piles & files avec des gobelets",
    theme: "term-structures",
    bo: "Distinguer pile (LIFO) et file (FIFO) ; comprendre l'ordre de sortie.",
    duree: "30–40 min",
    materiel: ["Une pile de gobelets empilables par îlot", "Des étiquettes (lettres ou prénoms)"],
    objectif:
      "Faire vivre physiquement la différence LIFO / FIFO avant de la programmer, et nommer chaque opération (empiler/dépiler, enfiler/défiler).",
    deroule: [
      "PILE : chaque élève pose un gobelet étiqueté sur la pile (empiler). On ne peut retirer que celui du dessus (dépiler).",
      "Le prof demande de retrouver un gobelet du milieu : impossible sans dépiler ceux du dessus → c'est le LIFO.",
      "FILE : les élèves font la queue ; on entre par la fin, on est servi par le devant → FIFO.",
      "À chaque geste, l'îlot annonce l'opération à voix haute : « j'empile B », « je défile Ava »…",
      "Mise en commun : dans quels cas réels utilise-t-on l'un ou l'autre ? (Ctrl-Z, file d'impression…).",
    ],
    variante:
      "Prolongement : modéliser les amitiés de l'îlot par un graphe au tableau, puis faire le parcours en largeur (file) à la main.",
  },
  {
    id: "philosophes-interblocage",
    emoji: "🍝",
    titre: "Le dîner des philosophes (interblocage)",
    theme: "term-archi-reseaux",
    bo: "Comprendre l'interblocage et une stratégie pour l'éviter.",
    duree: "30 min",
    materiel: ["5 élèves « philosophes » en cercle", "5 stylos (les « fourchettes »), un entre chaque voisin"],
    objectif:
      "Faire vivre un interblocage (deadlock) puis découvrir une règle simple qui l'empêche, comme le fait un système d'exploitation.",
    deroule: [
      "Règle : pour manger, un philosophe a besoin des DEUX stylos qui l'entourent (gauche et droite).",
      "Consigne piège : « chacun prend d'abord le stylo de GAUCHE, puis attend celui de droite ».",
      "Tout le monde applique la consigne en même temps : chacun tient un stylo et attend l'autre → personne ne mange. C'est l'INTERBLOCAGE.",
      "Défi à l'îlot : trouver une règle qui débloque la situation.",
      "Mise en commun : numéroter les stylos et imposer de prendre TOUJOURS le plus petit numéro en premier casse l'attente circulaire → plus de blocage.",
    ],
    variante:
      "Prolongement : relier à l'ordonnancement (et si un philosophe « lâche » son stylo après un temps ?) et au rôle de l'OS qui arbitre les ressources.",
  },
];

/* ---------------- Didactique : enseigner la NSI en Terminale ----------------
   Fiches développées + liens vers le site du DIU NSI (Le Havre, B. Mermet),
   déjà utilisé en Première. Les pages générales de didactique valent pour les
   deux niveaux ; on ajoute des repères propres à la Terminale. */
const DIDACTIQUE_BASE = "https://mermet.users.greyc.fr/Enseignement/EnseignementInformatiqueLycee/Havre/Didactique/";
const DIDACTIQUE = {
  bloc: "Enseigner la NSI en Terminale — repères & ressources",
  meta: "Fiches d'après la formation DIU NSI — Bruno Mermet (GREYC, Université Le Havre)",
  index: "index.html",
  parties: [
    {
      titre: "1 · Le programme de Terminale et son organisation",
      items: [
        {
          t: "Le programme de Terminale & sa répartition annuelle", file: "resumeProgrammeTerminale.html",
          fiche: `
            <p>Le programme de <strong>Terminale NSI</strong> (Bulletin officiel spécial n°8 du 25 juillet 2019) se déploie sur <strong>6 h hebdomadaires</strong> (≈ 30 semaines utiles, soit ≈ 180 h), dont une part importante en <strong>projets</strong> et en <strong>pratique sur machine</strong>. Il prépare l'<strong>épreuve de spécialité</strong> au baccalauréat (une partie <strong>écrite</strong> et une partie <strong>pratique</strong> sur ordinateur) et le <strong>Grand oral</strong>.</p>
            <h3>Les cinq thèmes (+ histoire transversale)</h3>
            <table>
              <tr><th>Thème du programme</th><th>Volume indicatif</th></tr>
              <tr><td>Histoire de l'informatique <em>(transversal)</em></td><td>≈ fil rouge</td></tr>
              <tr><td>Structures de données (piles, files, arbres, graphes)</td><td>≈ 25 h</td></tr>
              <tr><td>Bases de données (modèle relationnel, SQL)</td><td>≈ 20 h</td></tr>
              <tr><td>Architectures matérielles, OS & réseaux</td><td>≈ 20 h</td></tr>
              <tr><td>Langages et programmation (récursivité, POO, calculabilité)</td><td>≈ 30 h</td></tr>
              <tr><td>Algorithmique (diviser pour régner, prog. dynamique, graphes)</td><td>≈ 35 h</td></tr>
              <tr><td><strong>Projets</strong> (≈ 1/3 du temps)</td><td>≈ 50 h</td></tr>
            </table>
            <h3>Articuler les thèmes</h3>
            <ul>
              <li><strong>Structures de données</strong> d'abord : elles irriguent toute l'<strong>algorithmique</strong> (arbres, graphes, piles/files).</li>
              <li>La <strong>récursivité</strong> (thème Langages) est un prérequis de « diviser pour régner » et de la programmation dynamique.</li>
              <li>Filer la <strong>pratique sur machine</strong> toute l'année (Capytale/Thonny) pour préparer l'épreuve pratique.</li>
            </ul>
            <p class="note">📝 <strong>Évaluation :</strong> alterner écrit (type bac) et pratique notée. La rubrique « Progression annuelle » du site propose un planning période par période.</p>`,
        },
        {
          t: "Situer Première → Terminale (continuité)", file: "organisationPremiere.html",
          fiche: `
            <p>La Terminale <strong>réinvestit</strong> et <strong>généralise</strong> la Première. Quelques fils de continuité utiles à garder en tête :</p>
            <ul>
              <li>Listes/dictionnaires (1re) → <strong>structures abstraites</strong> (pile, file, arbre, graphe) et distinction <strong>interface / implémentation</strong>.</li>
              <li>Tables de données et recherche (1re) → <strong>bases de données</strong> relationnelles et <strong>SQL</strong>.</li>
              <li>Fonctions, tris simples, dichotomie (1re) → <strong>récursivité</strong>, <strong>tri fusion</strong>, <strong>diviser pour régner</strong>, <strong>programmation dynamique</strong>.</li>
              <li>Architecture & OS (1re) → <strong>processus, ordonnancement</strong>, <strong>routage</strong> et <strong>sécurisation</strong> des réseaux.</li>
            </ul>
            <p class="note">🎓 On peut s'appuyer sur le site <strong>Première</strong> (bouton 🎓 de la barre) pour réviser un prérequis avant d'attaquer une notion de Terminale.</p>`,
        },
      ],
    },
    {
      titre: "2 · Repères didactiques (valables aux deux niveaux)",
      items: [
        { t: "Qu'est-ce que la didactique de l'informatique ?", file: "didactique.html" },
        { t: "La pensée informatique (Computational Thinking)", file: "computationalThinking.html" },
        { t: "Les compétences ADAGE", file: "adage.html" },
        { t: "« Enseigner l'informatique » — synthèse", file: "resumeLivreEnseignerInformatique.html" },
      ],
    },
  ],
};

/* ---------------- Ressources externes par thème (avec attribution) ---------------- */
const THEME_RESSOURCES_EXT = {
  "term-structures": {
    titre: "Piles, files & structures (notebooks)",
    auteur: "Module DIU EIL — Y. Pigné (LITIS, Univ. Le Havre)",
    base: "https://git.litislab.fr/ypigne/2026-EIL-listes-tuples-dictionnaires/-/",
    note: "📒 Notebooks (.ipynb) : le dépôt les affiche dans le navigateur. Pour les <strong>exécuter</strong>, ouvre-les dans <a href=\"https://notebook.basthon.fr\" target=\"_blank\" rel=\"noopener\">Basthon</a> ou Capytale.",
    items: [
      { t: "📁 Le dépôt complet (toujours à jour)", url: "tree/main" },
      { t: "⭐ Fiches élève — Piles, files & ensembles (Terminale)", url: "tree/main/eleves" },
    ],
  },
  "term-archi-reseaux": {
    titre: "Systèmes & réseaux (supports DIU)",
    auteur: "Mes supports du DIU NSI — Le Havre",
    base: "",
    note: "📎 Supports issus de ma formation DIU, hébergés sur le site : le PDF s'ouvre dans le navigateur, la fiche réseaux est une page web (repères TCP/IP, DNS, adressage, routage).",
    items: [
      { t: "📕 Cours — Introduction aux systèmes d'exploitation (PDF)", url: "assets/ressources/systeme/DIU_cours_systeme_intro.pdf" },
      { t: "🌐 Fiche — Repères réseaux (TCP/IP, DNS, masques, RIP, routage)", url: "assets/ressources/reseaux/Reseaux_reperes.html" },
    ],
  },
};

/* ---------------- Progression annuelle ---------------- */
const PROGRESSION_INTRO =
  "Planning indicatif pour la Terminale NSI (6 h/semaine). Il articule les cinq thèmes du programme autour de l'algorithmique, et prépare les deux épreuves de spécialité (écrite et pratique) ainsi que le Grand oral. À ajuster selon la classe.";

const PROGRESSION = [
  {
    periode: "Sept. — Période 1", semaines: "S1–S3", heures: "≈ 18 h",
    theme: "Structures de données", themeId: "term-structures",
    objectifs: "Interface vs implémentation ; piles (LIFO), files (FIFO), listes chaînées ; premiers arbres et graphes.",
    activites: "Activité débranchée (gobelets) + TP au poste (Pile, File, parcours).",
    evaluation: "TP noté n°1 (piles & files).",
  },
  {
    periode: "Oct.–Nov. — Période 2", semaines: "S4–S8", heures: "≈ 30 h",
    theme: "Langages et programmation", themeId: "term-langages",
    objectifs: "Paradigmes ; récursivité ; modularité et mise au point (assertions, tests) ; programmation dynamique.",
    activites: "Cours + exercices gradués ; beaucoup de code et de textes à trou.",
    evaluation: "DS n°1 (programmation, récursivité).",
  },
  {
    periode: "Déc.–Janv. — Période 3", semaines: "S9–S13", heures: "≈ 30 h",
    theme: "Algorithmique", themeId: "term-algo",
    objectifs: "Diviser pour régner (tri fusion, dichotomie) ; programmation dynamique ; graphes (parcours, Dijkstra) ; k-NN ; coût.",
    activites: "TP algorithmiques s'appuyant sur les structures de données.",
    evaluation: "DS n°2 (algorithmique) + préparation épreuve pratique.",
  },
  {
    periode: "Févr.–Mars — Période 4", semaines: "S14–S18", heures: "≈ 30 h",
    theme: "Bases de données", themeId: "term-bdd",
    objectifs: "Modèle relationnel, clés et contraintes ; requêtes SQL (SELECT, jointures, agrégats, mises à jour).",
    activites: "TP SQL sur une base « lycée » ; textes à trou de requêtes.",
    evaluation: "TP noté SQL. Entraînement épreuve écrite.",
  },
  {
    periode: "Avril — Période 5", semaines: "S19–S21", heures: "≈ 18 h",
    theme: "Architectures, systèmes & réseaux", themeId: "term-archi-reseaux",
    objectifs: "Processus et ordonnancement ; interblocage ; routage des paquets ; chiffrement symétrique/asymétrique.",
    activites: "Simulations et activités débranchées (réseau, routage).",
    evaluation: "DS bilan. Préparation du Grand oral.",
  },
  {
    periode: "Mai — Période 6", semaines: "S22–S25", heures: "≈ 24 h",
    theme: "Révisions croisées — tous les thèmes", themeId: null,
    objectifs: "Consolider les notions les plus tombées à l'écrit (arbres, graphes, SQL, récursivité, réseaux…) ; automatiser le format de l'épreuve écrite (3 exercices en 3 h 30) et de l'épreuve pratique ; finaliser les deux questions du Grand oral.",
    activites: "Chaque semaine : 1 thème dominant revu (cours + QCM + fiches méthode du site) + 1 sujet d'annale complet en temps limité (3 h 30, code au stylo) + 1 épreuve pratique chronométrée (1 h, sujets de la banque officielle).",
    evaluation: "Bac blanc n°3 (écrit type bac, 3 h 30) ; EP blanches notées ; validation des questions du Grand oral avec la grille d'auto-évaluation.",
  },
  {
    periode: "Juin — Période 6", semaines: "S26–S27", heures: "≈ 12 h",
    theme: "Derniers entraînements & épreuves", themeId: null,
    objectifs: "Arriver aux épreuves confiant et organisé : derniers réflexes d'épreuve pratique, aisance à l'oral, gestion du stress et logistique du jour J.",
    activites: "EP express (1 exercice en 25 min, correction immédiate) ; oraux blancs du Grand oral en conditions réelles (20 min de préparation + 10 min d'exposé + 10 min d'entretien, jury de 2) ; check-list logistique (convocation, pièce d'identité, horaires, matériel autorisé) ; relecture ciblée des fiches méthode et des erreurs types relevées en mai.",
    evaluation: "Oral blanc évalué avec la grille du Grand oral (retour individuel) ; plus aucun DS nouveau — place aux épreuves.",
  },
];

/* ---------------- Déroulés heure par heure (prof) ----------------
   Pour chaque thème : séances de 2 h — contenu du site, déroulé minuté,
   préparation aux épreuves du bac intégrée. Rendu : makeThemePlan (app.js). */
const THEME_PLANS = {
 "term-structures": {
  "heures": "24 h — 12 séances de 2 h (≈ 25 h prévues au BO pour ce thème)",
  "resume": "Des structures linéaires (pile, file, liste chaînée) aux arbres et aux graphes : le thème installe la distinction <strong>interface / implémentation</strong>, les parcours (préfixe, infixe, suffixe, largeur, BFS/DFS) et le choix raisonné d'une structure. Deux projets îlots (navigateur, file de priorité), un TP guidé, une séance complète d'entraînement aux deux épreuves du bac (EP blanche n°1 + exercice écrit type bac) et une séance finale QCM + diagnostic « Ma classe ».",
  "seances": [
   {
    "titre": "Séance 1 — Interface, implémentation et pile (LIFO)",
    "duree": "2 h",
    "objectif": "Distinguer le contrat d'une structure (interface) de son code (implémentation) et programmer une pile.",
    "surLeSite": [
     "Sections 1–2 (« Interface et implémentation », « La pile (LIFO) »)",
     "TP guidé « Pile & file : de l'interface à l'implémentation » étape 1",
     "Exercice 1 (texte à trou : empiler / sommet)",
     "Activité débranchée « Piles & files avec des gobelets »"
    ],
    "enClasse": [
     "0–15 min : réactivation Première — que sait faire une <em>list</em> Python (append, pop, indices) ? sondage oral rapide.",
     "15–35 min : débranché gobelets en îlots : empiler/dépiler à voix haute, impossible d'atteindre le milieu → LIFO.",
     "35–65 min : Sections 1–2 vidéoprojetées, cellules exécutées : le contrat (TAD), la classe Pile, l'image de la prise électrique.",
     "65–95 min : machine — TP guidé étape 1 (prédire les 4 print AVANT d'exécuter) + Exercice 1.",
     "95–120 min : institutionnalisation (interface = promesse, coût = implémentation) ; écriture libre : « pourquoi cacher _elements ? » ; corrigés poussés."
    ],
    "aPreparer": [
     "Une pile de gobelets + étiquettes par îlot",
     "TP distribué sur Capytale (ou Thonny prêt sur les postes)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>En Première, la <code>list</code> de Python servait à tout. En Terminale, on prend de la hauteur en distinguant deux choses. L'<strong>interface</strong> d'une structure de données, c'est la liste des opérations qu'elle promet : un <strong>contrat</strong>, aussi appelé <em>type abstrait de données</em> (TAD). L'<strong>implémentation</strong>, c'est le code concret qui tient cette promesse. C'est l'image de la prise électrique : la forme de la prise (interface) ne change pas, que la centrale derrière (implémentation) soit solaire ou nucléaire. Celui qui utilise la structure n'a besoin de connaître que l'interface.</p><p>Première structure au contrat très strict : la <strong>pile</strong> (<em>stack</em>), qui fonctionne comme une pile d'assiettes : on ajoute et on retire <strong>toujours par le haut</strong>. Déroulons à la main avec les gobelets : on empile N, puis S, puis I. Le sommet est I. Pour récupérer N, impossible d'attraper le milieu : il faut d'abord dépiler I, puis S. Le dernier entré sort en premier : on résume par <strong>LIFO</strong> (<em>Last In, First Out</em>). L'interface d'une pile tient en quatre opérations : <code>empiler(x)</code>, <code>depiler()</code>, <code>sommet()</code>, <code>est_vide()</code>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> on réalise ce contrat avec une <code>list</code> Python dont la <strong>fin</strong> joue le rôle du sommet.</p><pre><code>class Pile:\n    def __init__(self):\n        self._elements = []          # détail d'implémentation (caché)\n    def est_vide(self):\n        return self._elements == []\n    def empiler(self, x):\n        self._elements.append(x)     # on ajoute à la fin = le sommet\n    def depiler(self):\n        return self._elements.pop()  # retire et renvoie le dernier\n    def sommet(self):\n        return self._elements[-1]\n\np = Pile()\nfor lettre in \"NSI\":\n    p.empiler(lettre)\nprint(p.sommet())    # affiche I\nprint(p.depiler())   # affiche I\nprint(p.depiler())   # affiche S\nprint(p.est_vide())  # affiche False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>append</code> ajoute en fin de liste et <code>pop()</code> retire le dernier élément : la fin de la liste joue le rôle du sommet, et ces deux opérations se font en temps constant.</li><li>Le tiret bas de <code>_elements</code> signale un détail d'implémentation caché : l'utilisateur ne manipule que les quatre méthodes de l'interface.</li><li><code>sommet()</code> regarde <code>self._elements[-1]</code> sans rien retirer ; <code>depiler()</code> retire <strong>et</strong> renvoie : c'est la différence entre lire le sommet et le prendre.</li></ul><p><strong>📋 Trace d'exécution :</strong> on déroule le programme à la main.</p><table><tr><th>Opération</th><th>_elements après</th><th>Valeur renvoyée</th></tr><tr><td>empiler(\"N\")</td><td>[\"N\"]</td><td>—</td></tr><tr><td>empiler(\"S\")</td><td>[\"N\", \"S\"]</td><td>—</td></tr><tr><td>empiler(\"I\")</td><td>[\"N\", \"S\", \"I\"]</td><td>—</td></tr><tr><td>sommet()</td><td>[\"N\", \"S\", \"I\"]</td><td>\"I\"</td></tr><tr><td>depiler()</td><td>[\"N\", \"S\"]</td><td>\"I\"</td></tr><tr><td>depiler()</td><td>[\"N\"]</td><td>\"S\"</td></tr><tr><td>est_vide()</td><td>[\"N\"]</td><td>False</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la classe <code>Pile</code> (cinq trous).</p><pre><code>class Pile:\n    def __init__(self):\n        self._elements = ______\n    def est_vide(self):\n        return self._elements == ______\n    def empiler(self, x):\n        self._elements.______(x)\n    def depiler(self):\n        return self._elements.______()\n    def sommet(self):\n        return self._elements[______]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>class Pile:\n    def __init__(self):\n        self._elements = []\n    def est_vide(self):\n        return self._elements == []\n    def empiler(self, x):\n        self._elements.append(x)\n    def depiler(self):\n        return self._elements.pop()\n    def sommet(self):\n        return self._elements[-1]\n\np = Pile()\np.empiler(\"gobelet\")\nprint(p.sommet())   # affiche gobelet</code></pre><ul><li>Interface = la promesse (les opérations), implémentation = le code qui la tient : on programme contre l'interface, jamais contre les détails cachés.</li><li>Pile = <strong>LIFO</strong> : dernier entré, premier sorti. <code>sommet()</code> regarde sans retirer, <code>depiler()</code> retire et renvoie.</li><li>Le coût (temps d'exécution) dépend de l'implémentation, pas de l'interface : deux piles offrant le même contrat peuvent ne pas avoir la même rapidité.</li></ul>"
   },
   {
    "titre": "Séance 2 — La pile en action et la file (FIFO)",
    "duree": "2 h",
    "objectif": "Résoudre un vrai problème avec une pile (parenthésage) et implémenter une file efficace avec deque.",
    "surLeSite": [
     "Sections 3–4 (« Application de la pile : les parenthèses », « La file (FIFO) »)",
     "TP guidé « Pile & file » étapes 2–3 (+ étape 4 bonus)",
     "Exercice 2 (texte à trou : defiler avec deque)",
     "Défi « Mission : un correcteur de parenthèses »"
    ],
    "enClasse": [
     "0–10 min : réactivation — LIFO ou FIFO ? quiz éclair à l'oral sur des situations (Ctrl-Z, file d'impression…).",
     "10–35 min : Section 3 : déroulé À LA MAIN de la pile sur « (3+[2×(1-4)]) », un élève au tableau tient la pile.",
     "35–60 min : Section 4 : la file, pourquoi list.pop(0) est lent, deque.popleft() en O(1) ; cellule exécutée.",
     "60–100 min : machine — TP étapes 2–3 (file d'impression, puis mini-défi parenthèses à compléter jusqu'à faire passer les 5 asserts) ; étape 4 bonus pour les rapides.",
     "100–120 min : institutionnalisation : tableau comparatif pile/file (opérations, ordre de sortie, coûts) ; corrigés poussés."
    ],
    "aPreparer": [
     "TP étapes 2–4 prêt sur Capytale/Thonny",
     "Le déroulé des parenthèses préparé au tableau"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>À quoi sert une pile ? Par exemple à vérifier qu'une expression est <strong>bien parenthésée</strong>. La règle du parenthésage est exactement le LIFO : la <strong>dernière</strong> parenthèse ouverte doit être la <strong>première</strong> refermée. Déroulons à la main sur <code>(3+[2×(1-4)])</code> : on lit « ( », on l'empile ; « [ », on l'empile ; « ( », on l'empile — la pile contient ( [ ( ; puis « ) » arrive : on dépile « ( », ça correspond ; « ] » : on dépile « [ », ça correspond ; « ) » : on dépile « ( ». Fin de la lecture, la pile est <strong>vide</strong> : l'expression est bien parenthésée.</p><p>Deuxième structure de la séance : la <strong>file</strong> (<em>queue</em>), comme la file d'attente à la boulangerie : on entre <strong>par la fin</strong>, on est servi <strong>par le début</strong>. Ava arrive, puis Bilal, puis Chloé : on sert Ava d'abord, puis Bilal. Premier arrivé, premier servi : <strong>FIFO</strong> (<em>First In, First Out</em>). Interface : <code>enfiler(x)</code>, <code>defiler()</code>, <code>est_vide()</code>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le correcteur de parenthèses, avec une pile.</p><pre><code>def bien_parenthese(expr):\n    paires = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n    pile = []\n    for c in expr:\n        if c in \"([{\":\n            pile.append(c)\n        elif c in \")]}\":\n            if not pile or pile.pop() != paires[c]:\n                return False\n    return pile == []\n\nprint(bien_parenthese(\"(3+[2*(1-4)])\"))  # affiche True\nprint(bien_parenthese(\"(3+[2*(1-4])\"))   # affiche False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Le dictionnaire <code>paires</code> associe chaque fermante à l'ouvrante attendue : quand « ] » arrive, le sommet dépilé doit être « [ ».</li><li><code>not pile</code> détecte une fermante alors que rien n'est ouvert ; <code>pile.pop() != paires[c]</code> détecte un mauvais emboîtement.</li><li><code>return pile == []</code> : à la fin, toute parenthèse ouverte doit avoir été refermée.</li></ul><p><strong>⚡ Méthode plus efficace :</strong> pour la file, on pourrait défiler avec <code>list.pop(0)</code>… mais retirer le premier élément oblige Python à <strong>décaler tous les autres</strong> : coût proportionnel à la taille. Le module standard fournit <code>collections.deque</code>, efficace <strong>aux deux bouts</strong> : <code>popleft()</code> est en temps constant.</p><pre><code>from collections import deque\n\nclass File:\n    def __init__(self):\n        self._elements = deque()\n    def est_vide(self):\n        return len(self._elements) == 0\n    def enfiler(self, x):\n        self._elements.append(x)         # entre par la fin\n    def defiler(self):\n        return self._elements.popleft()  # sort par le début\n\nf = File()\nfor client in [\"Ava\", \"Bilal\", \"Chloé\"]:\n    f.enfiler(client)\nprint(f.defiler())   # affiche Ava\nprint(f.defiler())   # affiche Bilal\nprint(f.est_vide())  # affiche False</code></pre><p><strong>📋 Trace d'exécution :</strong> <code>bien_parenthese(\"(3+[2*(1-4)])\")</code> déroulée à la main.</p><table><tr><th>Caractère lu</th><th>Action</th><th>Pile après</th></tr><tr><td>(</td><td>empiler</td><td>(</td></tr><tr><td>3, +</td><td>ignorés</td><td>(</td></tr><tr><td>[</td><td>empiler</td><td>( [</td></tr><tr><td>2, *</td><td>ignorés</td><td>( [</td></tr><tr><td>(</td><td>empiler</td><td>( [ (</td></tr><tr><td>1, -, 4</td><td>ignorés</td><td>( [ (</td></tr><tr><td>)</td><td>dépiler « ( » : correspond</td><td>( [</td></tr><tr><td>]</td><td>dépiler « [ » : correspond</td><td>(</td></tr><tr><td>)</td><td>dépiler « ( » : correspond</td><td>vide</td></tr><tr><td>fin</td><td>pile vide</td><td>renvoie True</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la version simple (une seule sorte de parenthèses), comme au TP.</p><pre><code>def bien_parenthesee(expr):\n    pile = []\n    for c in expr:\n        if c == \"(\":\n            pile.______(c)\n        elif c == \")\":\n            if pile == ______:\n                return False\n            pile.______()\n    return pile == ______</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def bien_parenthesee(expr):\n    pile = []\n    for c in expr:\n        if c == \"(\":\n            pile.append(c)\n        elif c == \")\":\n            if pile == []:\n                return False   # fermeture sans ouverture\n            pile.pop()\n    return pile == []          # tout doit être refermé\n\nassert bien_parenthesee(\"(2 + 3) * (4 - 1)\") == True\nassert bien_parenthesee(\")(\") == False\nassert bien_parenthesee(\"\") == True\nprint(\"Tous les tests passent !\")</code></pre><ul><li>Pile = LIFO, file = FIFO : c'est l'<strong>ordre de sortie</strong> qui les distingue, pas l'ordre d'entrée.</li><li>Ne jamais implémenter une file avec <code>list.pop(0)</code> : correct mais lent (décalage de tous les éléments) ; <code>deque.popleft()</code> est l'implémentation de référence.</li><li>« Dernière ouverte, première fermée » : dès qu'un problème ressemble à cela, penser à une pile.</li></ul>"
   },
   {
    "titre": "Séance 3 — Projet îlots : l'historique du navigateur",
    "duree": "2 h",
    "objectif": "Réinvestir la pile en autonomie : modéliser Précédent / Suivant avec deux piles et une classe testée par asserts.",
    "surLeSite": [
     "Projet îlots n°1 « L'historique du navigateur (pile) » (phases 1 à 5)",
     "Exercice 5 (défi : inverser une chaîne avec une pile)"
    ],
    "enClasse": [
     "0–10 min : réactivation — pourquoi le bouton Précédent est-il un LIFO ? discussion en îlots.",
     "10–30 min : phases 1–2 sur papier : décrire visiter / precedent / suivant avec DEUX piles (passé et futur).",
     "30–85 min : codage de la classe Navigateur + scénario de tests assert (visiter A, B, C ; revenir ; visiter D…).",
     "85–105 min : démonstrations éclair des îlots ; question piège : que devient le « futur » après une nouvelle visite ?",
     "105–120 min : bilan collectif ; Exercice 5 en autonomie pour les rapides ; corrigés poussés."
    ],
    "aPreparer": [
     "Thonny/Capytale sur tous les postes (le projet peut compter comme TP noté n°1)",
     "Grille d'évaluation du projet (structure choisie, tests, démo)"
    ],
    "cours": "<p><strong>📖 La notion :</strong> le bouton <strong>Précédent</strong> d'un navigateur est un LIFO : la dernière page visitée est la première vers laquelle on revient. Mais une seule pile ne suffit pas, car il faut aussi pouvoir ré-avancer avec <strong>Suivant</strong>. La solution du projet : <strong>deux piles</strong>. La pile <code>passe</code> mémorise les pages quittées, la pile <code>futur</code> mémorise les pages « en avant » ; la page affichée (<code>actuelle</code>) n'est dans aucune des deux. Déroulé à la main : on visite A, puis B, puis C — <code>passe</code> contient [A, B], la page actuelle est C. Un clic sur Précédent : C part dans <code>futur</code>, on affiche B. Encore Précédent : on affiche A et <code>futur</code> contient [C, B]. Un clic sur Suivant dépile <code>futur</code> : on réaffiche B.</p><p><strong>🎯 Bilan :</strong></p><ul><li>La classe <code>Navigateur</code> expose trois méthodes d'interface : <code>visiter(page)</code>, <code>precedent()</code>, <code>suivant()</code> — l'utilisateur n'a pas besoin de connaître les deux piles.</li><li><code>visiter</code> empile l'ancienne page actuelle sur <code>passe</code> et <strong>vide la pile <code>futur</code></strong> : une nouvelle visite efface le « futur », comme dans un vrai navigateur.</li><li><code>precedent</code> et <code>suivant</code> font transiter la page actuelle d'une pile à l'autre ; si la pile concernée est vide, le bouton ne fait rien.</li><li>Le scénario de tests s'écrit avec des <code>assert</code> avant de coder : après avoir visité A, B, C, <code>precedent()</code> doit renvoyer B puis A, et <code>suivant()</code> doit renvoyer B.</li></ul><p><strong>❓ Question type (le piège de la séance) :</strong> on exécute <code>visiter(\"A\")</code>, <code>visiter(\"B\")</code>, <code>visiter(\"C\")</code>, <code>precedent()</code>, <code>precedent()</code>, puis <code>visiter(\"D\")</code>. Que contiennent <code>actuelle</code>, <code>passe</code> et <code>futur</code> ? Le bouton Suivant fonctionne-t-il encore ?</p><p><strong>✅ Réponse :</strong> on déroule à la main.</p><table><tr><th>Action</th><th>passe</th><th>actuelle</th><th>futur</th></tr><tr><td>visiter(\"A\")</td><td>[]</td><td>A</td><td>[]</td></tr><tr><td>visiter(\"B\")</td><td>[A]</td><td>B</td><td>[]</td></tr><tr><td>visiter(\"C\")</td><td>[A, B]</td><td>C</td><td>[]</td></tr><tr><td>precedent()</td><td>[A]</td><td>B</td><td>[C]</td></tr><tr><td>precedent()</td><td>[]</td><td>A</td><td>[C, B]</td></tr><tr><td>visiter(\"D\")</td><td>[A]</td><td>D</td><td>[]</td></tr></table><p>La visite de D empile A sur <code>passe</code> et <strong>vide <code>futur</code></strong> : on obtient <code>actuelle</code> = D, <code>passe</code> = [A], <code>futur</code> = []. Suivant ne fait plus rien : les pages B et C sont définitivement perdues — c'est exactement le comportement d'un vrai navigateur.</p>"
   },
   {
    "titre": "Séance 4 — Listes chaînées et projet « file de priorité »",
    "duree": "2 h",
    "objectif": "Découvrir les maillons chaînés (définition récursive) et concevoir en îlot une structure absente de Python : la file de priorité.",
    "surLeSite": [
     "Section 5 (« Listes chaînées : des maillons reliés »)",
     "Projet îlots n°2 « Gestionnaire de tâches à priorité » (phases 1 à 4)"
    ],
    "enClasse": [
     "0–15 min : réactivation — fonctions récursives (lien Première / thème Langages) : cas de base + appel qui s'en rapproche.",
     "15–45 min : Section 5 : la classe Maillon, longueur récursive, insertion en tête sans décalage ; cellules exécutées.",
     "45–100 min : projet 2 en îlots : pourquoi ni pile ni file ne conviennent ; interface sur papier puis classe GestionnaireTaches avec tuples (priorite, numero, description) et asserts.",
     "100–120 min : mise en commun des deux implémentations possibles (chercher le max vs liste triée) et de leurs coûts ; corrigés poussés."
    ],
    "aPreparer": [
     "Thonny/Capytale prêt",
     "Notebooks DIU EIL « Piles, files & ensembles » en ressource complémentaire (Basthon)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>La <code>list</code> de Python range ses éléments côte à côte en mémoire : pour insérer en tête, il faut tout décaler. La <strong>liste chaînée</strong> organise les données autrement : une suite de <strong>maillons</strong>, chaque maillon contenant une <strong>valeur</strong> et une <strong>flèche</strong> vers le maillon suivant, le dernier pointant vers « rien » (<code>None</code>).</p><p>Déroulons à la main la chaîne 1 → 2 → 3 → None. Pour insérer 0 en tête, on crée un maillon 0 dont la flèche vise l'ancienne tête : 0 → 1 → 2 → 3 → None. <strong>Aucun décalage</strong>, une seule flèche à brancher — mais pour atteindre le 3, il faut suivre les flèches une à une : <strong>pas d'accès direct par indice</strong>. La définition est naturellement <strong>récursive</strong> (lien avec le thème Langages) : une liste chaînée est <em>soit vide</em>, <em>soit</em> un maillon suivi d'une liste chaînée.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la classe <code>Maillon</code> et la longueur récursive.</p><pre><code>class Maillon:\n    def __init__(self, valeur, suivant=None):\n        self.valeur = valeur\n        self.suivant = suivant   # flèche vers le maillon d'après (ou None)\n\ntete = Maillon(1, Maillon(2, Maillon(3)))   # la chaîne 1 -&gt; 2 -&gt; 3\n\ndef longueur(maillon):\n    if maillon is None:          # cas de base : liste vide\n        return 0\n    return 1 + longueur(maillon.suivant)\n\nprint(longueur(tete))     # affiche 3\ntete = Maillon(0, tete)   # insertion en tête : on rebranche une flèche\nprint(longueur(tete))     # affiche 4</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>suivant=None</code> par défaut : un maillon créé seul est un dernier maillon ; <code>Maillon(1, Maillon(2, Maillon(3)))</code> construit la chaîne en partant de la fin.</li><li><code>longueur</code> suit mot à mot la définition récursive : liste vide → 0 ; sinon 1 (ce maillon) plus la longueur du reste. Sans le cas de base <code>None</code>, la récursion serait infinie.</li><li>L'insertion en tête tient en une ligne, <code>tete = Maillon(0, tete)</code> : exactement l'opération que la <code>list</code> paie au prix fort.</li></ul><p><strong>📋 Trace d'exécution :</strong> <code>longueur(tete)</code> sur la chaîne 1 → 2 → 3.</p><table><tr><th>Appel</th><th>Cas</th><th>Renvoie</th></tr><tr><td>longueur(maillon 1)</td><td>appel récursif</td><td>1 + longueur(maillon 2)</td></tr><tr><td>longueur(maillon 2)</td><td>appel récursif</td><td>1 + longueur(maillon 3)</td></tr><tr><td>longueur(maillon 3)</td><td>appel récursif</td><td>1 + longueur(None)</td></tr><tr><td>longueur(None)</td><td>cas de base</td><td>0</td></tr></table><p>À la remontée : 1 + (1 + (1 + 0)) = 3 — la chaîne compte bien 3 maillons.</p><p><strong>🧩 Le projet de la séance :</strong> concevoir une structure absente de Python, la <strong>file de priorité</strong>. La vie scolaire note des tâches avec une priorité de 1 (peut attendre) à 5 (urgent) ; l'outil doit toujours proposer la tâche la plus urgente et, à priorité égale, la plus ancienne. Ni une pile (LIFO) ni une file (FIFO) ne conviennent : l'ordre de sortie ne dépend pas de l'ordre d'arrivée. On définit d'abord l'<em>interface</em> — <code>ajouter(description, priorite)</code>, <code>suivante()</code>, <code>est_vide()</code> — puis on implémente la classe <code>GestionnaireTaches</code> avec des tuples <code>(priorite, numero, description)</code>, le compteur <code>numero</code> départageant l'ancienneté : « réparer le vidéoprojecteur » (priorité 5) sort avant « changer une ampoule » (priorité 2). Deux implémentations possibles à comparer : chercher le maximum au moment de <code>suivante()</code>, ou maintenir la liste triée dès <code>ajouter()</code> — même interface, coûts différents.</p><p><strong>🎯 Défi élève :</strong> compléter la chaîne et sa longueur (cinq trous).</p><pre><code>class Maillon:\n    def __init__(self, valeur, suivant=______):\n        self.valeur = valeur\n        self.suivant = suivant\n\ndef longueur(maillon):\n    if maillon is ______:\n        return ______\n    return 1 + longueur(maillon.______)\n\ntete = Maillon(1, Maillon(2, Maillon(3)))\ntete = Maillon(0, ______)   # insérer 0 en tête\nprint(longueur(tete))       # affiche 4</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>class Maillon:\n    def __init__(self, valeur, suivant=None):\n        self.valeur = valeur\n        self.suivant = suivant\n\ndef longueur(maillon):\n    if maillon is None:\n        return 0\n    return 1 + longueur(maillon.suivant)\n\ntete = Maillon(1, Maillon(2, Maillon(3)))\ntete = Maillon(0, tete)     # insérer 0 en tête\nprint(longueur(tete))       # affiche 4</code></pre><ul><li>Liste chaînée : insertion en tête immédiate, mais pas d'accès direct par indice — l'inverse exact de la <code>list</code>.</li><li>Toute fonction récursive sur une chaîne commence par le cas de base <code>maillon is None</code> ; l'oublier provoque une récursion infinie.</li><li>File de priorité : ce n'est ni l'ordre d'arrivée ni l'ordre inverse qui commande, c'est l'<strong>urgence</strong> — et l'interface reste la même quel que soit le choix d'implémentation.</li></ul>"
   },
   {
    "titre": "Séance 5 — Les arbres : vocabulaire, taille, hauteur",
    "duree": "2 h",
    "objectif": "Passer du linéaire au hiérarchique : définir récursivement un arbre binaire et calculer taille et hauteur.",
    "surLeSite": [
     "Section 6 (« Les arbres : une structure hiérarchique »)",
     "Exercices 3 et 6 (taille, hauteur)"
    ],
    "enClasse": [
     "0–15 min : réactivation — les tuples de Première (immuables, déballage) : ils vont représenter nos nœuds.",
     "15–40 min : vocabulaire construit au tableau sur l'arborescence des dossiers du lycée : racine, nœud, fils, feuille, taille, hauteur ; chaque îlot dessine un arbre et fait deviner ses mesures.",
     "40–70 min : Section 6 : triplets (valeur, gauche, droite), taille et hauteur récursives ; cellules exécutées et déroulées.",
     "70–100 min : machine — Exercices 3 et 6 (écrire les deux fonctions sans regarder le cours, puis comparer).",
     "100–120 min : écriture libre : rédiger la définition récursive d'un arbre binaire ; piège taille ≠ hauteur explicité ; corrigés poussés."
    ],
    "aPreparer": [
     "Feuilles quadrillées pour dessiner les arbres (réflexe épreuve écrite)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Piles, files et listes chaînées sont <strong>linéaires</strong> : les éléments se suivent en ligne. Un <strong>arbre</strong> est <strong>hiérarchique</strong> : il se ramifie, comme l'arborescence des dossiers du lycée ou un arbre généalogique. Vocabulaire à connaître : la <strong>racine</strong> est le nœud tout en haut (par convention, l'arbre se dessine à l'envers) ; un <strong>nœud</strong> a des <strong>fils</strong> ; un nœud sans fils est une <strong>feuille</strong> ; la <strong>taille</strong> est le nombre total de nœuds ; la <strong>hauteur</strong> est le nombre de nœuds du plus long chemin de la racine à une feuille.</p><p>Exemple à la main : la racine 7 a deux fils, 3 et 9 ; le nœud 3 a deux fils, 1 et 5. Les feuilles sont 1, 5 et 9. Taille : on compte tous les nœuds — 7, 3, 9, 1, 5 — soit <strong>5</strong>. Hauteur : le plus long chemin est 7 → 3 → 1 (ou 7 → 3 → 5), qui compte 3 nœuds — hauteur <strong>3</strong>. Taille et hauteur ne mesurent donc pas la même chose.</p><p>Un <strong>arbre binaire</strong> est un arbre où chaque nœud a <strong>au plus deux fils</strong> (gauche et droite). Définition <strong>récursive</strong>, à savoir rédiger : un arbre binaire est <em>soit vide</em>, <em>soit</em> une valeur avec un sous-arbre gauche et un sous-arbre droit. En Python, on le représente par un triplet <code>(valeur, gauche, droite)</code> — les tuples de Première, immuables et déballables —, l'arbre vide étant <code>None</code>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la taille.</p><pre><code>#        7\n#       / \\\n#      3   9\n#     / \\\n#    1   5\narbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef taille(a):\n    if a is None:\n        return 0\n    valeur, gauche, droite = a\n    return 1 + taille(gauche) + taille(droite)\n\nprint(taille(arbre))   # affiche 5</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>if a is None: return 0</code> : le cas de base — un arbre vide n'a aucun nœud. Sans lui, récursion infinie.</li><li><code>valeur, gauche, droite = a</code> : le déballage de tuple vu en Première sépare la racine de ses deux sous-arbres.</li><li>On compte 1 pour la racine, puis on laisse la récursion compter chaque sous-arbre : la fonction épouse la définition récursive de l'arbre.</li></ul><p><strong>📋 Trace d'exécution :</strong> déroulé de <code>taille(arbre)</code> :</p><table><tr><th>Appel</th><th>Calcul</th><th>Renvoie</th></tr><tr><td>taille(sous-arbre de racine 7)</td><td>1 + taille(3…) + taille(9…)</td><td>1 + 3 + 1 = 5</td></tr><tr><td>taille(sous-arbre de racine 3)</td><td>1 + taille(1…) + taille(5…)</td><td>1 + 1 + 1 = 3</td></tr><tr><td>taille(1…), taille(5…), taille(9…)</td><td>1 + taille(None) + taille(None)</td><td>1</td></tr><tr><td>taille(None)</td><td>cas de base</td><td>0</td></tr></table><p><strong>🎯 Défi élève :</strong> écrire <code>hauteur(a)</code> sur le même modèle — le plus long chemin racine → feuille (trois trous).</p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef hauteur(a):\n    if a is ______:\n        return 0\n    valeur, gauche, droite = ______\n    return 1 + ______(hauteur(gauche), hauteur(droite))\n\nprint(hauteur(arbre))   # affiche 3</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef hauteur(a):\n    if a is None:\n        return 0\n    valeur, gauche, droite = a\n    return 1 + max(hauteur(gauche), hauteur(droite))\n\nprint(hauteur(arbre))   # affiche 3</code></pre><p>Le chemin le plus long l'emporte : c'est le rôle de <code>max</code>. Ici 1 + max(2, 1) = 3, le chemin 7 → 3 → 1.</p><ul><li><strong>Taille ≠ hauteur</strong> : nombre total de nœuds contre longueur du plus long chemin — l'erreur classique du QCM.</li><li>Convention du cours : l'arbre vide a une taille 0 <em>et</em> une hauteur 0.</li><li>Toute fonction sur un arbre commence par le cas de base <code>a is None</code>, puis déballe le triplet.</li></ul>"
   },
   {
    "titre": "Séance 6 — Les quatre parcours d'un arbre binaire",
    "duree": "2 h",
    "objectif": "Maîtriser préfixe, infixe, suffixe et largeur — et découvrir que l'infixe d'un ABR sort trié.",
    "surLeSite": [
     "Section 7 (« Parcourir un arbre binaire »)",
     "Exercices 4, 7 et 9 (préfixe, infixe, les 4 parcours du même arbre)"
    ],
    "enClasse": [
     "0–10 min : réactivation — taille/hauteur de l'arbre affiché, réponse sur ardoise.",
     "10–40 min : les 3 parcours en profondeur mimés au tableau (quand traite-t-on la racine ?) puis la largeur : la FILE de la séance 2 revient en scène.",
     "40–75 min : Exercice 9 en îlots : PRÉDIRE les 4 parcours sur papier SANS exécuter, puis vérifier sur machine.",
     "75–105 min : machine — Exercices 4 et 7 ; constat clé : l'infixe donne [1, 3, 5, 7, 9], trié.",
     "105–120 min : institutionnalisation : suffixe = racine en dernier, largeur = file ; teaser ABR ; corrigés poussés."
    ],
    "aPreparer": [
     "Un grand arbre affiché/projeté pour les déroulés à la main"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Parcourir un arbre, c'est visiter tous ses nœuds dans un <strong>ordre choisi</strong>. Les trois parcours <strong>en profondeur</strong> ne diffèrent que par une question : <em>quand traite-t-on la racine ?</em> <strong>Préfixe</strong> : racine, puis gauche, puis droite. <strong>Infixe</strong> : gauche, puis racine, puis droite. <strong>Suffixe</strong> : gauche, puis droite, puis racine. Le quatrième parcours, <strong>en largeur</strong>, visite l'arbre <strong>niveau par niveau</strong>.</p><p>Déroulé à la main du préfixe sur l'arbre de la séance précédente (racine 7, fils 3 et 9, le nœud 3 ayant pour fils 1 et 5) : on écrit 7 (la racine d'abord), on parcourt entièrement le sous-arbre gauche — 3, puis 1, puis 5 — puis le droit : 9. Résultat : 7, 3, 1, 5, 9. De même, l'infixe donne 1, 3, 5, 7, 9 ; le suffixe 1, 5, 3, 9, 7 (la racine en dernier) ; la largeur 7, 3, 9, 1, 5 (la racine, puis ses fils, puis les fils de ses fils).</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le préfixe.</p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef prefixe(a):\n    if a is None:\n        return []\n    valeur, gauche, droite = a\n    return [valeur] + prefixe(gauche) + prefixe(droite)\n\nprint(prefixe(arbre))   # affiche [7, 3, 1, 5, 9]</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Cas de base : un arbre vide ne fournit aucune valeur, d'où la liste vide <code>[]</code>.</li><li>La ligne clé est la concaténation <code>[valeur] + prefixe(gauche) + prefixe(droite)</code> : la <strong>position de <code>[valeur]</code></strong> fait tout. Au début → préfixe ; au milieu → infixe ; à la fin → suffixe.</li></ul><p><strong>🔁 L'infixe et le constat clé :</strong></p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef infixe(a):\n    if a is None:\n        return []\n    valeur, gauche, droite = a\n    return infixe(gauche) + [valeur] + infixe(droite)\n\nprint(infixe(arbre))   # affiche [1, 3, 5, 7, 9]</code></pre><p>La sortie est <strong>triée</strong> : cet arbre est un arbre binaire de recherche (ABR), et le parcours infixe d'un ABR ressort toujours les valeurs dans l'ordre croissant — c'est le fil rouge de la séance prochaine.</p><p><strong>🚶 Le parcours en largeur — la file revient :</strong> pour visiter niveau par niveau, on s'appuie sur la <strong>file</strong> (FIFO) de la séance 2 : on défile un nœud, on le traite, on enfile ses deux fils.</p><pre><code>from collections import deque\n\narbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef largeur(a):\n    if a is None:\n        return []\n    resultat = []\n    file = deque([a])\n    while file:\n        valeur, gauche, droite = file.popleft()\n        resultat.append(valeur)\n        if gauche is not None:\n            file.append(gauche)\n        if droite is not None:\n            file.append(droite)\n    return resultat\n\nprint(largeur(arbre))   # affiche [7, 3, 9, 1, 5]</code></pre><p><strong>📋 Trace d'exécution :</strong> déroulé de <code>largeur(arbre)</code> :</p><table><tr><th>Nœud défilé</th><th>File après enfilement des fils</th><th>resultat</th></tr><tr><td>7</td><td>3, 9</td><td>[7]</td></tr><tr><td>3</td><td>9, 1, 5</td><td>[7, 3]</td></tr><tr><td>9</td><td>1, 5</td><td>[7, 3, 9]</td></tr><tr><td>1</td><td>5</td><td>[7, 3, 9, 1]</td></tr><tr><td>5</td><td>vide</td><td>[7, 3, 9, 1, 5]</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter le suffixe (trois trous).</p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef suffixe(a):\n    if a is None:\n        return ______\n    valeur, gauche, droite = a\n    return suffixe(______) + suffixe(droite) + [______]\n\nprint(suffixe(arbre))   # affiche [1, 5, 3, 9, 7]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef suffixe(a):\n    if a is None:\n        return []\n    valeur, gauche, droite = a\n    return suffixe(gauche) + suffixe(droite) + [valeur]\n\nprint(suffixe(arbre))   # affiche [1, 5, 3, 9, 7]</code></pre><ul><li>Le nom du parcours indique la place de la racine : <strong>pré</strong> = avant, <strong>in</strong> = entre les deux, <strong>suf</strong> = après (la racine en dernier).</li><li>Profondeur = récursion (la pile d'appels) ; <strong>largeur = file</strong> (<code>deque</code> et <code>popleft</code>).</li><li>Un infixe trié est la signature d'un ABR : constat à savoir citer à l'écrit.</li></ul>"
   },
   {
    "titre": "Séance 7 — L'arbre binaire de recherche : rechercher et insérer",
    "duree": "2 h",
    "objectif": "Exploiter l'invariant de l'ABR pour chercher et insérer en O(hauteur), et comprendre le cas dégénéré du « peigne ».",
    "surLeSite": [
     "Section 8 (« L'arbre binaire de recherche »)",
     "Exercices 8 et 10 (défis : recherche puis insertion par reconstruction)"
    ],
    "enClasse": [
     "0–15 min : réactivation — la dichotomie de Première : éliminer la moitié à chaque étape, c'est exactement l'idée de l'ABR.",
     "15–45 min : Section 8 : l'invariant gauche < racine < droite, recherche, insertion qui RECONSTRUIT la branche (tuples immuables) ; cellules exécutées.",
     "45–80 min : machine — Exercice 8 (recherche) puis Exercice 10 (inserer, vérifié par l'infixe trié).",
     "80–105 min : sur table, style bac : insérer 12, 5, 20, 3, 8, 15, 25 dans un ABR vide, dessiner l'arbre, donner hauteur et taille.",
     "105–120 min : le « peigne » : insérer 1, 2, 3, 4… → O(n) ; bilan O(log n) équilibré vs O(n) dégénéré ; corrigés poussés."
    ],
    "aPreparer": [
     "Exercice « insertion sur table » photocopié (entraînement écrit)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>arbre binaire de recherche</strong> (ABR) est un arbre binaire qui respecte partout le même <strong>invariant</strong> : pour chaque nœud, tout le sous-arbre gauche &lt; racine &lt; tout le sous-arbre droit. C'est la <strong>dichotomie</strong> de Première devenue structure : chaque comparaison <strong>élimine un sous-arbre entier</strong>.</p><p>Recherche à la main de la clé 5 dans l'arbre des séances précédentes (racine 7, fils 3 et 9, le nœud 3 ayant pour fils 1 et 5) : 5 &lt; 7, la clé ne peut être qu'à gauche — on ne regardera jamais 9. Puis 5 &gt; 3 : à droite. On tombe sur 5 : trouvé en trois comparaisons, sans visiter tout l'arbre. Le coût est en <strong>O(hauteur)</strong> : si l'arbre est équilibré, la hauteur vaut environ log₂(n) — une vingtaine de comparaisons suffisent pour un million de clés.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la recherche.</p><pre><code>arbre = (7, (3, (1, None, None), (5, None, None)), (9, None, None))\n\ndef recherche(a, c):\n    if a is None:\n        return False              # arbre vide : c n'y est pas\n    valeur, gauche, droite = a\n    if c == valeur:\n        return True\n    if c &lt; valeur:\n        return recherche(gauche, c)   # c ne peut être qu'à gauche\n    return recherche(droite, c)       # sinon, qu'à droite\n\nprint(recherche(arbre, 5))   # affiche True\nprint(recherche(arbre, 6))   # affiche False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Trois issues à chaque nœud : égal → trouvé ; plus petit → on ne descend qu'à gauche ; plus grand → qu'à droite.</li><li>Atteindre <code>None</code> signifie que la descente s'est achevée sans rencontrer la clé : elle est absente.</li><li>Un seul chemin racine → feuille est suivi, d'où le coût en O(hauteur) — à comparer au parcours complet en O(n) d'un arbre quelconque.</li></ul><p><strong>📋 Trace d'exécution :</strong> déroulé de <code>recherche(arbre, 6)</code> :</p><table><tr><th>Nœud visité</th><th>Comparaison</th><th>Direction</th></tr><tr><td>7</td><td>6 &lt; 7</td><td>à gauche</td></tr><tr><td>3</td><td>6 &gt; 3</td><td>à droite</td></tr><tr><td>5</td><td>6 &gt; 5</td><td>à droite</td></tr><tr><td>None</td><td>arbre vide</td><td>renvoie False</td></tr></table><p><strong>🧱 Insérer : reconstruire la branche :</strong></p><p>Pour insérer une clé, on descend exactement comme pour la recherche et on accroche une <strong>nouvelle feuille</strong> à la place vide où la descente s'arrête : insérer 6 suit le chemin 7 → 3 → 5, puis accroche <code>(6, None, None)</code> à droite de 5 ; l'invariant est préservé. Mais nos arbres sont des <strong>tuples</strong>, donc <strong>immuables</strong> : impossible de modifier l'arbre existant. La fonction <code>inserer</code> renvoie donc un <em>nouvel</em> arbre en <strong>reconstruisant uniquement la branche parcourue</strong> ; le reste est réutilisé tel quel.</p><p><strong>🎯 Défi élève :</strong> compléter <code>inserer</code> (quatre trous).</p><pre><code>def inserer(a, c):\n    if a is None:\n        return (______, None, None)               # nouvelle feuille\n    valeur, gauche, droite = a\n    if c &lt; valeur:\n        return (valeur, inserer(______, c), droite)\n    if c &gt; valeur:\n        return (valeur, gauche, inserer(droite, ______))\n    return ______                                 # c déjà présente\n\nabr = None\nfor cle in [7, 3, 9, 1, 5]:\n    abr = inserer(abr, cle)\nprint(abr)   # affiche (7, (3, (1, None, None), (5, None, None)), (9, None, None))</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def inserer(a, c):\n    if a is None:\n        return (c, None, None)                    # nouvelle feuille\n    valeur, gauche, droite = a\n    if c &lt; valeur:\n        return (valeur, inserer(gauche, c), droite)\n    if c &gt; valeur:\n        return (valeur, gauche, inserer(droite, c))\n    return a                                      # c déjà présente\n\ndef infixe(a):\n    if a is None:\n        return []\n    valeur, gauche, droite = a\n    return infixe(gauche) + [valeur] + infixe(droite)\n\nabr = None\nfor cle in [7, 3, 9, 1, 5]:\n    abr = inserer(abr, cle)\nprint(abr)   # affiche (7, (3, (1, None, None), (5, None, None)), (9, None, None))\nprint(infixe(inserer(abr, 6)))   # affiche [1, 3, 5, 6, 7, 9]</code></pre><p>On retrouve exactement l'arbre des séances précédentes, et l'infixe trié prouve que l'invariant tient toujours.</p><p><strong>⚠️ Le cas dégénéré — l'arbre « peigne » :</strong> insérer des clés déjà triées (1, 2, 3, 4…) envoie chaque clé à droite de la précédente : l'arbre devient un long fil de hauteur n, et la recherche retombe à <strong>O(n)</strong>, comme dans une liste. L'efficacité d'un ABR dépend de son <strong>équilibre</strong>.</p><ul><li>L'invariant se récite : gauche &lt; racine &lt; droite, valable pour <em>tout</em> le sous-arbre, pas seulement pour les fils directs.</li><li>Recherche et insertion coûtent O(hauteur) : O(log n) si l'arbre est équilibré, O(n) pour le « peigne ».</li><li><code>inserer</code> ne modifie rien : elle renvoie un nouvel arbre (tuples immuables) — ne pas oublier <code>abr = inserer(abr, cle)</code>.</li></ul>"
   },
   {
    "titre": "Séance 8 — Les graphes : modéliser et représenter",
    "duree": "2 h",
    "objectif": "Modéliser des relations par un graphe et savoir écrire — et convertir — matrice et listes d'adjacence.",
    "surLeSite": [
     "Sections 9–10 (« Les graphes », « Matrice ou listes d'adjacence : passer de l'une à l'autre »)"
    ],
    "enClasse": [
     "0–15 min : réactivation — les dictionnaires de Première (clé → valeur) : ils vont porter nos listes d'adjacence.",
     "15–35 min : modéliser au tableau les amitiés de la classe (ou un plan de métro) : sommets, arêtes, graphe non orienté.",
     "35–70 min : Section 9 : listes d'adjacence en dictionnaire, premier parcours en largeur avec une file ; cellules exécutées.",
     "70–100 min : Section 10 : matrice d'adjacence (symétrie), conversions dans les deux sens ; chaque îlot écrit matrice_vers_listes sans regarder, puis compare.",
     "100–120 min : institutionnalisation : matrice = « voisins ? » en O(1) mais n² cases, listes = compactes ; corrigés poussés."
    ],
    "aPreparer": [
     "Le graphe support (amitiés ou plan) préparé au tableau"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>graphe</strong> sert à modéliser des <strong>relations</strong> entre objets : des villes reliées par des routes, des personnes « amies » sur un réseau social, des pages liées par des liens. Les objets sont les <strong>sommets</strong>, les liens sont les <strong>arêtes</strong>. Prenons un petit réseau d'amis : Ava, Bilal, Chloé et Dan, avec quatre amitiés — Ava–Bilal, Ava–Chloé, Bilal–Dan et Chloé–Dan. Déroulons à la main les voisins de chaque sommet : Ava → Bilal et Chloé ; Bilal → Ava et Dan ; Chloé → Ava et Dan ; Dan → Bilal et Chloé. Chaque amitié est réciproque (si Ava est amie de Bilal, alors Bilal est ami d'Ava) : le graphe est <strong>non orienté</strong>.</p><p>Deux représentations classiques du même graphe :</p><ul><li>les <strong>listes d'adjacence</strong> : pour chaque sommet, la liste de ses voisins — un dictionnaire Python s'y prête parfaitement ;</li><li>la <strong>matrice d'adjacence</strong> : on numérote les sommets (Ava = 0, Bilal = 1, Chloé = 2, Dan = 3) et la case (i, j) vaut 1 s'il y a une arête entre i et j, 0 sinon.</li></ul><p>Construisons la matrice à la main :</p><table><tr><th></th><th>Ava</th><th>Bilal</th><th>Chloé</th><th>Dan</th></tr><tr><th>Ava</th><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><th>Bilal</th><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><th>Chloé</th><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><th>Dan</th><td>0</td><td>1</td><td>1</td><td>0</td></tr></table><p>La matrice est <strong>symétrique</strong> par rapport à sa diagonale : c'est la signature d'un graphe non orienté.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> les listes d'adjacence en dictionnaire.</p><pre><code># Le réseau d'amis en listes d'adjacence : sommet -&gt; liste de ses voisins\ngraphe = {\n    \"Ava\":   [\"Bilal\", \"Chloé\"],\n    \"Bilal\": [\"Ava\", \"Dan\"],\n    \"Chloé\": [\"Ava\", \"Dan\"],\n    \"Dan\":   [\"Bilal\", \"Chloé\"],\n}\n\nprint(graphe[\"Ava\"])   # affiche ['Bilal', 'Chloé']\nprint(len(graphe))     # affiche 4</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>chaque clé du dictionnaire est un sommet ; sa valeur est la liste de ses voisins ;</li><li>la symétrie se lit aussi ici : Bilal figure dans la liste d'Ava <em>et</em> Ava dans celle de Bilal ;</li><li><code>graphe[sommet]</code> donne directement les voisins : exactement ce dont un parcours a besoin — le <strong>parcours en largeur</strong> (BFS) vu en classe visite ainsi les sommets de proche en proche à l'aide d'une <strong>file</strong> (<code>deque</code>).</li></ul><p><strong>📋 Trace d'exécution :</strong> déroulons la conversion <code>matrice_vers_listes</code> à la main — pour chaque ligne i de la matrice, on collecte les colonnes j où la case vaut 1.</p><table><tr><th>i</th><th>noms[i]</th><th>cases à 1</th><th>voisins collectés</th></tr><tr><td>0</td><td>Ava</td><td>j = 1 et j = 2</td><td>['Bilal', 'Chloé']</td></tr><tr><td>1</td><td>Bilal</td><td>j = 0 et j = 3</td><td>['Ava', 'Dan']</td></tr><tr><td>2</td><td>Chloé</td><td>j = 0 et j = 3</td><td>['Ava', 'Dan']</td></tr><tr><td>3</td><td>Dan</td><td>j = 1 et j = 2</td><td>['Bilal', 'Chloé']</td></tr></table><p>On retrouve exactement le dictionnaire <code>graphe</code> : les deux représentations décrivent bien <strong>le même graphe</strong> (la conversion inverse, <code>listes_vers_matrice</code>, a été écrite en classe).</p><p><strong>🎯 Défi élève :</strong> compléter la conversion matrice → listes d'adjacence.</p><pre><code>sommets = [\"Ava\", \"Bilal\", \"Chloé\", \"Dan\"]   # Ava = 0, Bilal = 1, Chloé = 2, Dan = 3\nmatrice = [\n    [0, 1, 1, 0],\n    [1, 0, 0, 1],\n    [1, 0, 0, 1],\n    [0, 1, 1, 0],\n]\n\ndef matrice_vers_listes(m, noms):\n    g = {}\n    for i in range(______):\n        g[______] = [noms[j] for j in range(len(noms)) if ______ == 1]\n    return g\n\nprint(matrice_vers_listes(matrice, sommets)[\"Dan\"])   # doit afficher ['Bilal', 'Chloé']</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>sommets = [\"Ava\", \"Bilal\", \"Chloé\", \"Dan\"]   # Ava = 0, Bilal = 1, Chloé = 2, Dan = 3\nmatrice = [\n    [0, 1, 1, 0],\n    [1, 0, 0, 1],\n    [1, 0, 0, 1],\n    [0, 1, 1, 0],\n]\n\ndef matrice_vers_listes(m, noms):\n    g = {}\n    for i in range(len(noms)):\n        g[noms[i]] = [noms[j] for j in range(len(noms)) if m[i][j] == 1]\n    return g\n\nprint(matrice_vers_listes(matrice, sommets)[\"Dan\"])   # affiche ['Bilal', 'Chloé']</code></pre><ul><li>Graphe <strong>non orienté</strong> : matrice symétrique, et chaque arête apparaît deux fois dans les listes d'adjacence.</li><li>Matrice : répond en O(1) à « i et j sont-ils voisins ? » mais occupe toujours n² cases ; listes d'adjacence : compactes, et elles donnent directement les voisins d'un sommet.</li><li>Vocabulaire à connaître par cœur : sommet, arête, voisin, matrice d'adjacence, listes d'adjacence.</li></ul>"
   },
   {
    "titre": "Séance 9 — Parcours en largeur et en profondeur (BFS / DFS)",
    "duree": "2 h",
    "objectif": "Comprendre que changer la structure (file → pile) change le parcours, et écrire le DFS itératif et récursif.",
    "surLeSite": [
     "Section 11 (« Le parcours en profondeur (DFS) »)",
     "Exercice 11 (défi : dfs itératif avec une pile)"
    ],
    "enClasse": [
     "0–15 min : réactivation — BFS de la séance 8 déroulé à l'oral ; rappel : la pile d'appels de Python (récursivité).",
     "15–45 min : Section 11 : DFS itératif (pile explicite) vs récursif (pile d'appels), comparaison des deux ordres sur le MÊME graphe ; cellules exécutées.",
     "45–80 min : machine — Exercice 11 : écrire dfs(g, depart) et comparer à l'ordre BFS.",
     "80–105 min : sur table, style bac : dérouler BFS puis DFS à la main sur un graphe donné (voisins en ordre alphabétique).",
     "105–120 min : institutionnalisation : FILE → largeur, PILE → profondeur, une seule ligne change ; corrigés poussés."
    ],
    "aPreparer": [
     "Graphe de déroulé imprimé (format question d'écrit)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Deux stratégies pour explorer un graphe à partir d'un sommet de départ. Le <strong>parcours en largeur</strong> (BFS) explore « en cercles concentriques » : le départ, puis tous ses voisins, puis les voisins des voisins. Le <strong>parcours en profondeur</strong> (DFS, <em>Depth-First Search</em>) fait l'inverse : il <strong>s'enfonce le plus loin possible</strong> le long d'un chemin et ne revient en arrière que lorsqu'il est bloqué — comme on explore un labyrinthe en suivant un mur.</p><p>Déroulons les deux à la main sur le réseau d'amis de la séance précédente (Ava–Bilal, Ava–Chloé, Bilal–Dan, Chloé–Dan), en partant d'Ava :</p><ul><li><strong>en largeur</strong> : Ava, puis ses deux voisins Bilal et Chloé, puis Dan → Ava, Bilal, <strong>Chloé, Dan</strong> ;</li><li><strong>en profondeur</strong> : Ava, puis Bilal (son premier voisin), puis Dan (on s'enfonce), et enfin Chloé (retour en arrière) → Ava, Bilal, <strong>Dan, Chloé</strong>.</li></ul><p>Même graphe, deux ordres différents. Le secret est le changement de structure : la <strong>file</strong> (FIFO) du BFS devient une <strong>pile</strong> (LIFO). Le dernier sommet découvert est le premier exploré : c'est exactement ce qui fait « descendre » le parcours.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le DFS itératif, avec une pile explicite (une simple <code>list</code> et ses méthodes <code>append</code> / <code>pop</code>).</p><pre><code>graphe = {\n    \"Ava\":   [\"Bilal\", \"Chloé\"],\n    \"Bilal\": [\"Ava\", \"Dan\"],\n    \"Chloé\": [\"Ava\", \"Dan\"],\n    \"Dan\":   [\"Bilal\", \"Chloé\"],\n}\n\ndef parcours_profondeur(g, depart):\n    vus = []\n    pile = [depart]\n    while pile:\n        s = pile.pop()                      # on dépile le DERNIER découvert (LIFO)\n        if s not in vus:\n            vus.append(s)\n            for voisin in reversed(g[s]):   # reversed : voisins explorés dans l'ordre\n                if voisin not in vus:\n                    pile.append(voisin)\n    return vus\n\nprint(parcours_profondeur(graphe, \"Ava\"))   # affiche ['Ava', 'Bilal', 'Dan', 'Chloé']</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>pile.pop()</code> retire le dernier sommet découvert : le parcours s'enfonce au lieu de s'élargir ;</li><li>le test <code>if s not in vus</code> est indispensable : un même sommet peut être empilé deux fois (c'est le cas de Chloé dans la trace ci-dessous) ;</li><li>il suffit de remplacer la pile par la file de la séance 8 (<code>deque</code> et <code>popleft()</code>) pour retrouver le BFS <code>['Ava', 'Bilal', 'Chloé', 'Dan']</code> : <strong>une seule ligne change</strong>.</li></ul><p><strong>⚡ Deuxième écriture — le DFS récursif :</strong> aucune pile visible… car c'est la <strong>pile d'appels</strong> de Python qui joue ce rôle : chaque appel en attente mémorise un sommet où revenir.</p><pre><code>def parcours_profondeur_rec(g, s, vus=None):\n    if vus is None:\n        vus = []\n    vus.append(s)\n    for voisin in g[s]:\n        if voisin not in vus:\n            parcours_profondeur_rec(g, voisin, vus)\n    return vus\n\nprint(parcours_profondeur_rec(graphe, \"Ava\"))   # affiche ['Ava', 'Bilal', 'Dan', 'Chloé']</code></pre><p><strong>📋 Trace d'exécution :</strong> le DFS itératif depuis Ava, pas à pas.</p><table><tr><th>sommet dépilé</th><th>vus</th><th>pile après l'étape</th></tr><tr><td>(départ)</td><td>[]</td><td>['Ava']</td></tr><tr><td>Ava</td><td>['Ava']</td><td>['Chloé', 'Bilal']</td></tr><tr><td>Bilal</td><td>['Ava', 'Bilal']</td><td>['Chloé', 'Dan']</td></tr><tr><td>Dan</td><td>['Ava', 'Bilal', 'Dan']</td><td>['Chloé', 'Chloé']</td></tr><tr><td>Chloé</td><td>['Ava', 'Bilal', 'Dan', 'Chloé']</td><td>['Chloé']</td></tr><tr><td>Chloé (déjà vue)</td><td>inchangé</td><td>[] → Stop</td></tr></table><p><strong>🎯 Défi élève :</strong> réécrire <code>dfs(g, depart)</code> sans regarder le cours (exercice 11 du site).</p><pre><code>def dfs(g, depart):\n    vus = []\n    pile = [______]\n    while pile:\n        s = ______                # LIFO : le dernier découvert sort en premier\n        if s not in vus:\n            vus.append(______)\n            for voisin in reversed(g[s]):\n                if voisin not in vus:\n                    ______\n    return vus\n\nprint(dfs(graphe, \"Ava\"))   # doit afficher ['Ava', 'Bilal', 'Dan', 'Chloé']</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def dfs(g, depart):\n    vus = []\n    pile = [depart]\n    while pile:\n        s = pile.pop()            # LIFO : le dernier découvert sort en premier\n        if s not in vus:\n            vus.append(s)\n            for voisin in reversed(g[s]):\n                if voisin not in vus:\n                    pile.append(voisin)\n    return vus\n\nprint(dfs(graphe, \"Ava\"))   # affiche ['Ava', 'Bilal', 'Dan', 'Chloé']</code></pre><ul><li>FILE → parcours en largeur ; PILE → parcours en profondeur : seule la structure change, pas le reste de l'algorithme.</li><li>Dans la version récursive, la pile d'appels remplace la pile explicite ; la liste <code>vus</code> est partagée entre tous les appels.</li><li>À l'écrit, dérouler le parcours en examinant les voisins dans l'ordre donné par l'énoncé (souvent alphabétique) et noter l'état de la pile ou de la file à chaque étape.</li></ul>"
   },
   {
    "titre": "Séance 10 — Cycles dans un graphe et choix de la bonne structure",
    "duree": "2 h",
    "objectif": "Détecter un cycle par DFS + suivi du parent, et savoir justifier le choix d'une structure (dont liste vs dictionnaire).",
    "surLeSite": [
     "Sections 12–13 (« Détecter un cycle », « Bien choisir : un récapitulatif »)",
     "Exercice 12 (défi : contient_cycle)"
    ],
    "enClasse": [
     "0–15 min : réactivation — DFS récursif récité en binômes (cas de base ? ensemble vus ?).",
     "15–45 min : Section 12 : cycle = voisin déjà vu qui n'est PAS le parent ; déroulé à la main sur le carré A-B-C-D-A puis la chaîne A-B-C.",
     "45–70 min : machine — Exercice 12 : contient_cycle, avec le cas du graphe non connexe.",
     "70–95 min : Section 13 : tableau récapitulatif + cellule chronométrée liste vs dictionnaire (200 000 entrées) : le dict gagne par milliers.",
     "95–120 min : écriture libre : pour 4 situations données (annulation, guichet, annuaire, réseau routier), choisir la structure et JUSTIFIER en une phrase ; corrigés poussés."
    ],
    "aPreparer": [
     "Les 4 situations à trancher photocopiées ou projetées"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>cycle</strong> est un chemin qui revient à son point de départ sans réutiliser la même arête. Savoir en repérer un est utile partout : détecter un interblocage entre processus, vérifier qu'un réseau électrique ne boucle pas, s'assurer qu'un plan de tâches « A avant B » est réalisable…</p><p>Déroulons l'idée à la main sur deux graphes non orientés : le <strong>carré</strong> A-B-C-D-A et la <strong>chaîne</strong> A-B-C. L'outil est le DFS de la séance précédente, avec une astuce : pendant le parcours, on retient pour chaque sommet <strong>d'où l'on vient</strong> (son <em>parent</em>). Sur le carré : depuis A on visite B (parent : A), puis C (parent : B), puis D (parent : C) ; arrivé en D, on regarde le voisin A — <strong>déjà vu, et ce n'est pas le parent de D</strong> : on vient de refermer une boucle, <strong>cycle détecté !</strong> Sur la chaîne, le seul sommet « déjà vu » que l'on croise est toujours le parent, c'est-à-dire l'arête par laquelle on est arrivé : aucun cycle.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> un DFS récursif qui transmet le parent.</p><pre><code>def contient_cycle(g):\n    \"\"\"Cycle dans un graphe NON ORIENTÉ : DFS + suivi du parent.\"\"\"\n    vus = set()\n\n    def dfs(s, parent):\n        vus.add(s)\n        for voisin in g[s]:\n            if voisin not in vus:\n                if dfs(voisin, s):        # on descend en retenant d'où l'on vient\n                    return True\n            elif voisin != parent:        # déjà vu et PAS notre parent -> cycle !\n                return True\n        return False\n\n    for depart in g:                      # le graphe peut être en plusieurs morceaux\n        if depart not in vus and dfs(depart, None):\n            return True\n    return False\n\n# Un carré A-B-C-D-A : il y a un cycle ; une chaîne A-B-C : aucun\ncarre = {\"A\": [\"B\", \"D\"], \"B\": [\"A\", \"C\"], \"C\": [\"B\", \"D\"], \"D\": [\"A\", \"C\"]}\nchaine = {\"A\": [\"B\"], \"B\": [\"A\", \"C\"], \"C\": [\"B\"]}\n\nprint(contient_cycle(carre))    # affiche True\nprint(contient_cycle(chaine))   # affiche False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>vus</code> est un ensemble (<code>set</code>) : le test d'appartenance y est immédiat ;</li><li>voisin jamais vu → on descend avec <code>dfs(voisin, s)</code> : il devient un fils ; voisin déjà vu qui n'est <strong>pas</strong> le parent → cycle (le parent, lui, n'est que l'arête d'arrivée) ;</li><li>la boucle finale <code>for depart in g</code> relance le DFS sur chaque morceau jamais visité : un graphe <strong>non connexe</strong> est ainsi entièrement couvert.</li></ul><p><strong>📋 Trace d'exécution :</strong> sur le carré A-B-C-D-A.</p><table><tr><th>appel</th><th>vus après</th><th>voisins examinés</th><th>conclusion</th></tr><tr><td>dfs(A, None)</td><td>{A}</td><td>B : jamais vu</td><td>on descend</td></tr><tr><td>dfs(B, A)</td><td>{A, B}</td><td>A = parent : ignoré ; C : jamais vu</td><td>on descend</td></tr><tr><td>dfs(C, B)</td><td>{A, B, C}</td><td>B = parent : ignoré ; D : jamais vu</td><td>on descend</td></tr><tr><td>dfs(D, C)</td><td>{A, B, C, D}</td><td>A : déjà vu et différent du parent</td><td>cycle → True</td></tr></table><p><strong>📌 Bien choisir sa structure :</strong> le réflexe de Terminale — avant de coder, se demander « de quelle structure ai-je besoin ? » selon les opérations dominantes.</p><table><tr><th>Besoin</th><th>Structure</th><th>Pourquoi</th></tr><tr><td>Revenir en arrière, annuler</td><td>Pile (LIFO)</td><td>Le dernier ajouté est le premier repris.</td></tr><tr><td>Traiter dans l'ordre d'arrivée</td><td>File (FIFO)</td><td>Premier arrivé, premier servi.</td></tr><tr><td>Insérer souvent en tête</td><td>Liste chaînée</td><td>On rebranche une flèche, sans décaler.</td></tr><tr><td>Ranger pour rechercher vite</td><td>Arbre binaire de recherche</td><td>On élimine la moitié des nœuds à chaque étape.</td></tr><tr><td>Retrouver par une clé</td><td>Dictionnaire</td><td>Accès direct ≈ immédiat, sans parcourir.</td></tr><tr><td>Représenter des relations</td><td>Graphe</td><td>Sommets + arêtes ; parcours BFS/DFS.</td></tr></table><p>Cas très fréquent : <strong>retrouver une information par une clé</strong>. Dans une liste, il faut parcourir les éléments un à un (coût proportionnel à la taille) ; dans un dictionnaire, la recherche par clé est <strong>quasi immédiate</strong>, quelle que soit la taille. La cellule chronométrée en classe (annuaire de 200 000 entrées) le confirme : le dictionnaire gagne par milliers. Les quatre situations tranchées en classe — annulation (pile), guichet (file), annuaire (dictionnaire), réseau routier (graphe) — se justifient chacune en une phrase à l'aide de ce tableau.</p><p><strong>🎯 Défi élève :</strong> compléter <code>contient_cycle</code> (exercice 12 du site).</p><pre><code>def contient_cycle(g):\n    vus = set()\n\n    def dfs(s, parent):\n        vus.add(s)\n        for voisin in g[s]:\n            if voisin not in vus:\n                if ______:            # on descend en retenant d'où l'on vient\n                    return True\n            elif ______:              # déjà vu et PAS notre parent\n                return True\n        return False\n\n    for depart in g:\n        if ______ and dfs(depart, None):   # ne relancer que sur les sommets jamais vus\n            return True\n    return False</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def contient_cycle(g):\n    vus = set()\n\n    def dfs(s, parent):\n        vus.add(s)\n        for voisin in g[s]:\n            if voisin not in vus:\n                if dfs(voisin, s):            # on descend en retenant d'où l'on vient\n                    return True\n            elif voisin != parent:            # déjà vu et PAS notre parent\n                return True\n        return False\n\n    for depart in g:\n        if depart not in vus and dfs(depart, None):   # ne relancer que sur les sommets jamais vus\n            return True\n    return False\n\ncarre = {\"A\": [\"B\", \"D\"], \"B\": [\"A\", \"C\"], \"C\": [\"B\", \"D\"], \"D\": [\"A\", \"C\"]}\nchaine = {\"A\": [\"B\"], \"B\": [\"A\", \"C\"], \"C\": [\"B\"]}\nprint(contient_cycle(carre))    # affiche True\nprint(contient_cycle(chaine))   # affiche False</code></pre><ul><li>La règle : voisin déjà vu qui n'est <strong>pas</strong> le parent → cycle ; retomber sur le parent est normal, c'est l'arête d'arrivée.</li><li>Ne pas oublier les graphes en plusieurs morceaux (non connexes) ; et pour un graphe <strong>orienté</strong>, le test du parent ne suffit plus (coloriage en 3 états — blanc, gris, noir).</li><li>Recherche fréquente par clé → dictionnaire, pas liste : à l'écrit, le choix d'une structure se <strong>justifie</strong> toujours en une phrase.</li></ul>"
   },
   {
    "titre": "Séance 11 — Entraînement épreuves du bac : EP + écrit",
    "duree": "2 h",
    "objectif": "Se placer dans les conditions réelles des deux épreuves : 1 h d'épreuve pratique sur machine, puis un exercice écrit type bac sur table.",
    "surLeSite": [
     "Évaluations : Épreuve pratique blanche n°1 « ABR & file » (2 exercices, 1 h, asserts)",
     "Évaluations : Bac blanc n°1, exercice 1 (arbres binaires de recherche et récursivité, 7 pts)",
     "Fiches méthode « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »"
    ],
    "enClasse": [
     "0–10 min : lecture guidée des fiches méthode : lire les asserts d'abord, respecter les noms, tester au fur et à mesure.",
     "10–70 min : EP blanche n°1 en conditions réelles sur un VRAI Python (Thonny/Capytale) : recherche dans un ABR + file à deux piles, sans document.",
     "70–105 min : sur table, au stylo : exercice 1 du bac blanc n°1 (dessiner l'ABR, hauteur/taille, infixe, fonction taille récursive, coûts).",
     "105–120 min : débrief croisé avec les barèmes du corrigé : erreurs de noms, cas de base oublié, version qui n'exploite pas l'ABR plafonnée ; corrigés poussés."
    ],
    "aPreparer": [
     "Postes avec un vrai Python (Thonny ou Capytale) — l'EP ne se passe pas dans le navigateur",
     "Sujet écrit imprimé + copies",
     "Quelques sujets de la banque officielle Éduscol en réserve pour les rapides"
    ],
    "cours": "<p><strong>🎯 Bilan — réussir les deux épreuves :</strong></p><ul><li><strong>Épreuve pratique</strong> (1 h, 2 exercices, sur un vrai Python) : lire d'abord les tests <code>assert</code> — ils définissent exactement le contrat de la fonction ; respecter à la lettre les noms de fonctions et de paramètres imposés ; exécuter et tester au fur et à mesure, pas seulement à la fin.</li><li><strong>Vérifier la convention de l'énoncé</strong> avant d'écrire : dans l'épreuve blanche, les ABR sont des tuples <code>(gauche, valeur, droite)</code> alors que le cours utilisait <code>(valeur, gauche, droite)</code> — le déballage du tuple doit suivre l'énoncé, pas l'habitude.</li><li><strong>Exploiter la structure</strong> : une recherche qui visite les deux sous-arbres d'un ABR trouve la réponse, mais n'utilise pas l'invariant « gauche &lt; racine &lt; droite » ; au barème, elle est plafonnée (6 pts sur 10 dans le corrigé).</li><li><strong>Épreuve écrite</strong> : dessiner l'arbre au brouillon, donner hauteur et taille sans les confondre, et ne jamais oublier le cas de base (<code>None</code>, l'arbre vide) d'une fonction récursive.</li></ul><p><strong>📖 Question type corrigée</strong> (épreuve pratique blanche, exercice 1) : un ABR est représenté par des tuples imbriqués <code>(gauche, valeur, droite)</code>, l'arbre vide étant <code>None</code>. Écrire <code>recherche(abr, x)</code> qui renvoie <code>True</code> si <code>x</code> est présent, <strong>en exploitant l'ordre de l'ABR</strong> : à chaque étape, on ne descend que dans un seul des deux sous-arbres.</p><p>Déroulé à la main pour <code>recherche(abr, 9)</code>, avec 5 à la racine : 9 &gt; 5 → on descend à droite (racine 8) ; 9 &gt; 8 → à droite (feuille 9) ; trouvé en deux comparaisons, sans jamais visiter 2 ni 6.</p><p><strong>✅ Réponse :</strong></p><pre><code>abr = ((None, 2, None), 5, ((None, 6, None), 8, (None, 9, None)))\n\ndef recherche(abr, x):\n    if abr is None:                   # cas de base : arbre vide, x n'y est pas\n        return False\n    gauche, valeur, droite = abr\n    if x == valeur:\n        return True\n    elif x &lt; valeur:\n        return recherche(gauche, x)   # propriété de l'ABR : une seule branche visitée\n    else:\n        return recherche(droite, x)\n\nprint(recherche(abr, 9))   # affiche True\nprint(recherche(abr, 7))   # affiche False</code></pre><ul><li>Barème indicatif de l'exercice : cas de base <code>None</code> (3 pts), test d'égalité (2 pts), descente du bon côté selon l'ordre (4 pts), tous les asserts passent (1 pt).</li><li>Le coût de la recherche est en O(hauteur) : tout l'intérêt d'un ABR équilibré, face au « peigne » qui retombe en O(n).</li></ul>"
   },
   {
    "titre": "Séance 12 — QCM bilan, diagnostic « Ma classe » et remédiation",
    "duree": "2 h",
    "objectif": "Mesurer les acquis du thème, cibler les fragilités question par question et remédier par groupes de besoin.",
    "surLeSite": [
     "QCM du thème (11 questions, dont coûts ABR et détection de cycle)",
     "Suivi « Ma classe » : matrice par thème + diagnostic par question",
     "Fiches « Résumé » et « Erreurs fréquentes » du thème ; exercices 1 à 12 selon besoin"
    ],
    "enClasse": [
     "0–25 min : QCM individuel sur le site, sans document.",
     "25–45 min : diagnostic « Ma classe » vidéoprojeté : les questions les plus ratées sont rejouées et expliquées par les élèves qui ont réussi.",
     "45–90 min : remédiation en îlots de besoin : pile/file → TP guidé à refaire ; arbres → Exercices 6, 7, 9 ; graphes → Exercices 11, 12 ; les solides prennent un sujet EP de la banque officielle.",
     "90–110 min : chaque îlot rédige une « carte erreur » (l'erreur fréquente + comment l'éviter) à partir de la fiche du thème.",
     "110–120 min : bilan du thème et annonce du suivant : ces structures reviendront partout en algorithmique (Dijkstra, tri fusion) ; corrigés poussés."
    ],
    "aPreparer": [
     "Suivi « Ma classe » ouvert sur le poste prof",
     "2–3 sujets de la banque officielle Éduscol déposés sur Capytale",
     "Fiches résumé/erreurs imprimées pour les cartes erreur"
    ],
    "cours": "<p><strong>🎯 Bilan — l'essentiel du thème en cinq points :</strong></p><ul><li><strong>Interface / implémentation</strong> : l'interface est le contrat (les opérations promises), l'implémentation est le code qui le tient ; on peut changer l'implémentation sans toucher au code qui utilise la structure.</li><li><strong>Structures linéaires</strong> : pile = LIFO (revenir en arrière, annuler), file = FIFO (ordre d'arrivée), implémentée avec <code>deque</code> et <code>popleft()</code> — jamais <code>list.pop(0)</code> ; liste chaînée : insertion en tête en O(1), mais pas d'accès direct par indice.</li><li><strong>Arbres</strong> : taille (nombre de nœuds) ≠ hauteur (plus long chemin racine → feuille) ; quatre parcours — préfixe, infixe, suffixe, largeur (avec une file) ; dans un ABR (invariant gauche &lt; racine &lt; droite), l'infixe sort trié et rechercher/insérer coûte O(hauteur).</li><li><strong>Graphes</strong> : matrice d'adjacence (symétrique si non orienté) ou listes d'adjacence en dictionnaire ; FILE → parcours en largeur (BFS), PILE → parcours en profondeur (DFS) ; cycle détecté quand on retombe sur un voisin déjà vu qui n'est <strong>pas</strong> le parent.</li><li><strong>Choisir se justifie en une phrase</strong> : recherche fréquente par clé → dictionnaire, pas liste ; annulation → pile ; guichet → file ; relations → graphe.</li></ul><p><strong>❓ Question type corrigée</strong> (l'une des plus ratées du QCM, à rejouer après le diagnostic « Ma classe ») : rechercher une clé parmi n = 1 000 000 de valeurs — quel coût dans un ABR équilibré, et dans un ABR dégénéré en « peigne » ?</p><ul><li>a) O(1) dans les deux cas ;</li><li>b) O(n) dans les deux cas ;</li><li>c) O(log n) équilibré (≈ 20 comparaisons) ; O(n) dégénéré (jusqu'à 1 000 000) ;</li><li>d) O(n²) équilibré ; O(log n) dégénéré.</li></ul><p><strong>✅ Réponse : c.</strong> Le coût d'une recherche est en O(hauteur), car on ne suit qu'un seul chemin racine → feuille. Déroulé à la main : dans un arbre équilibré, chaque comparaison élimine la moitié des nœuds restants — 1 000 000, puis 500 000, puis 250 000… environ log₂(1 000 000) ≈ 20 comparaisons suffisent. Dans le « peigne » (clés insérées déjà triées : 1, 2, 3, 4…), l'arbre n'est qu'un long fil de hauteur n : la recherche redevient linéaire, jusqu'à 1 000 000 de comparaisons, comme dans une liste.</p><ul><li>Au QCM, les distracteurs recyclent les confusions classiques : taille / hauteur, LIFO / FIFO, « déjà vu » / « déjà vu et pas le parent » — les nommer, c'est déjà les éviter.</li><li>La « carte erreur » rédigée en îlot (l'erreur fréquente + comment l'éviter) est la trace écrite de la remédiation.</li><li>Ces structures ne se referment pas avec le thème : Dijkstra (graphes), le tri fusion et l'épreuve pratique les réutiliseront sans les réintroduire.</li></ul>"
   }
  ]
 },
 "term-algo": {
  "heures": "22 h (11 séances de 2 h)",
  "resume": "Le cœur de la Terminale : coût des algorithmes (grand O), diviser pour régner (dichotomie, tri fusion), programmation dynamique (rendu de monnaie), Dijkstra sur graphe pondéré, k-NN (révision de Première) et recherche textuelle (naïve puis Boyer-Moore). Le thème s'appuie sur les 9 sections du cours, le TP guidé « Tri fusion pas à pas », le projet îlots « Plus court chemin sur le plan du lycée » et débouche directement sur la préparation des deux épreuves du bac.",
  "seances": [
   {
    "titre": "Séance 1 — Coût d'un algorithme et recherche dichotomique",
    "duree": "2 h",
    "objectif": "Exprimer le coût en grand O et retrouver la dichotomie (révision de Première) comme premier exemple de « diviser pour régner ».",
    "surLeSite": [
     "Sections 1–3 (complexité, diviser pour régner, recherche dichotomique)",
     "Exercices 1 à 2 (texte à trou « milieu », dichotomie complète)",
     "Fiche méthode « Estimer le coût (complexité) d'un algorithme »"
    ],
    "enClasse": [
     "0–15 min : réactivation Première : jeu du nombre mystère (1–100) → séquentiel vs dichotomique, compter les questions",
     "15–45 min : Section 1 : exécuter les cellules doublon lent/rapide, comparer les compteurs O(n²) vs O(n)",
     "45–70 min : Sections 2–3 : principe diviser/régner/combiner ; Exercice 1 (indice du milieu, division entière)",
     "70–100 min : Exercice 2 en binômes ; institutionnalisation : tableau O(1) → O(n²), « couper en deux = log »",
     "100–120 min : écriture libre : justifier « 1024 éléments → 10 comparaisons » ; corrigés poussés"
    ],
    "aPreparer": [
     "Vidéoprojecteur + cellules exécutables du site testées",
     "Fiche méthode complexité imprimée ou projetée"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Pour un même problème, plusieurs algorithmes corrects peuvent exister — mais ils ne se valent pas. Le <strong>coût</strong> (ou <strong>complexité</strong>) d'un algorithme est le nombre d'opérations effectuées en fonction de la taille <code>n</code> des données. On ne chronomètre pas : on <strong>compte les opérations</strong> et on garde l'ordre de grandeur, noté en « grand O » : O(1) constant, O(log n) logarithmique, O(n) linéaire, O(n log n) quasi-linéaire, O(n²) quadratique.</p><p>Exemple à la main : le jeu du nombre mystère entre 1 et 100 (ici, 73). En essayant 1, 2, 3… il faudrait jusqu'à 100 questions. En demandant à chaque fois « plus grand que le milieu ? » : 50 → trop petit ; 75 → trop grand ; 62 → trop petit ; 68 → trop petit ; 71 → trop petit ; 73 → trouvé en 6 questions. Couper l'intervalle en deux à chaque question, c'est la stratégie <strong>diviser pour régner</strong> : <strong>diviser</strong> le problème en sous-problèmes plus petits, <strong>régner</strong> (les résoudre), <strong>combiner</strong> leurs solutions. Appliquée à un tableau <strong>trié</strong>, cette idée s'appelle la <strong>recherche dichotomique</strong>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la recherche séquentielle examine les cases une par une, du début à la fin.</p><pre><code>def recherche_lineaire(t, cible):\n    for i in range(len(t)):\n        if t[i] == cible:\n            return i\n    return -1\n\ntab = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint(recherche_lineaire(tab, 23))   # affiche 5</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>La boucle compare <code>t[i]</code> à la cible pour chaque indice : dans le pire cas (cible absente ou en dernière position), elle effectue <code>n</code> comparaisons, d'où un coût <strong>O(n)</strong>.</li><li><code>return i</code> interrompt la fonction dès que la cible est trouvée ; si la boucle se termine sans succès, la fonction renvoie <code>-1</code>.</li><li>Cette méthode fonctionne sur n'importe quel tableau, trié ou non.</li></ul><p><strong>⚡ Méthode plus efficace :</strong> si le tableau est <strong>trié</strong>, on compare la cible à la case du milieu et on élimine d'un coup <strong>la moitié</strong> de l'intervalle — comme dans un dictionnaire papier.</p><pre><code>def recherche_dichotomique(t, cible):\n    gauche, droite = 0, len(t) - 1\n    while gauche &lt;= droite:\n        milieu = (gauche + droite) // 2   # division entière\n        if t[milieu] == cible:\n            return milieu\n        elif t[milieu] &lt; cible:\n            gauche = milieu + 1     # on élimine la moitié gauche\n        else:\n            droite = milieu - 1     # on élimine la moitié droite\n    return -1\n\ntab = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint(recherche_dichotomique(tab, 23))   # affiche 5</code></pre><p>À chaque tour de boucle, l'intervalle de recherche est divisé par deux : le coût est en <strong>O(log n)</strong>. « Couper en deux = log » : 1024 éléments ne demandent que 10 comparaisons, car 2¹⁰ = 1024.</p><p><strong>📋 Trace d'exécution :</strong> recherche de 23 dans <code>tab</code>.</p><table><tr><th>gauche</th><th>droite</th><th>milieu</th><th>t[milieu]</th><th>action</th></tr><tr><td>0</td><td>9</td><td>4</td><td>16</td><td>16 &lt; 23 → gauche = 5</td></tr><tr><td>5</td><td>9</td><td>7</td><td>56</td><td>56 &gt; 23 → droite = 6</td></tr><tr><td>5</td><td>6</td><td>5</td><td>23</td><td>trouvé → renvoie 5</td></tr></table><p>Trois comparaisons au lieu de six pour la version séquentielle — et l'écart explose quand <code>n</code> grandit.</p><p><strong>🎯 Défi élève :</strong> compléter la recherche dichotomique.</p><pre><code>def recherche_dichotomique(t, cible):\n    gauche, droite = 0, len(t) - 1\n    while gauche ______ droite:\n        milieu = (gauche + droite) ______ 2\n        if t[milieu] == cible:\n            return milieu\n        elif t[milieu] &lt; cible:\n            gauche = ______\n        else:\n            droite = ______\n    return -1\n\nprint(recherche_dichotomique([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))   # affiche 5</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def recherche_dichotomique(t, cible):\n    gauche, droite = 0, len(t) - 1\n    while gauche &lt;= droite:\n        milieu = (gauche + droite) // 2\n        if t[milieu] == cible:\n            return milieu\n        elif t[milieu] &lt; cible:\n            gauche = milieu + 1\n        else:\n            droite = milieu - 1\n    return -1\n\nprint(recherche_dichotomique([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))   # affiche 5</code></pre><ul><li>La dichotomie exige un tableau <strong>trié</strong> ; si la cible est absente, les deux fonctions renvoient <code>-1</code>.</li><li><code>//</code> est la <strong>division entière</strong> : indispensable pour obtenir un indice valide.</li><li>Vocabulaire : coût = complexité ; O(n) se dit « linéaire », O(log n) « logarithmique ».</li></ul>"
   },
   {
    "titre": "Séance 2 — Le tri fusion",
    "duree": "2 h",
    "objectif": "Construire le tri fusion comme application emblématique de diviser pour régner et justifier son coût O(n log n).",
    "surLeSite": [
     "Section 4 (le tri fusion)",
     "Exercices 3 et 5 (fusionner deux listes triées, tri fusion complet)"
    ],
    "enClasse": [
     "0–15 min : réactivation : tris de Première (sélection, insertion) et leur coût O(n²)",
     "15–35 min : débranché : fusionner deux paquets de cartes déjà triés, verbaliser les deux indices",
     "35–65 min : Section 4 : lire, exécuter, dérouler <em>fusionner</em> puis <em>tri_fusion</em> à la main",
     "65–95 min : Exercices 3 puis 5 en binômes ; arbre des découpages au tableau",
     "95–120 min : institutionnalisation : diviser/régner/combiner, log₂(n) niveaux × O(n) par niveau ; écriture libre ; corrigés poussés"
    ],
    "aPreparer": [
     "Deux jeux de cartes (ou étiquettes) par îlot pour la fusion débranchée"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le <strong>tri fusion</strong> applique « diviser pour régner » au tri : <strong>diviser</strong> la liste en deux moitiés, <strong>régner</strong> en triant chaque moitié récursivement, <strong>combiner</strong> en <strong>fusionnant</strong> les deux moitiés triées en une seule liste triée.</p><p>Exemple à la main : fusionnons deux paquets de cartes déjà triés, [27, 38, 43] et [3, 9, 10, 82]. On compare les deux cartes du dessus et on prend toujours la plus petite : 27 contre 3 → on prend 3 ; 27 contre 9 → 9 ; 27 contre 10 → 10 ; 27 contre 82 → 27 ; 38 contre 82 → 38 ; 43 contre 82 → 43 ; il ne reste que 82, on l'ajoute à la fin. Résultat : [3, 9, 10, 27, 38, 43, 82], trié sans jamais revenir en arrière. Toute la puissance du tri fusion tient dans cette étape de <strong>fusion</strong>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le tri par sélection de Première cherche le minimum, le place au début, et recommence sur le reste.</p><pre><code>def tri_selection(t):\n    for i in range(len(t)):\n        mini = i\n        for j in range(i + 1, len(t)):\n            if t[j] &lt; t[mini]:\n                mini = j\n        t[i], t[mini] = t[mini], t[i]\n    return t\n\nprint(tri_selection([38, 27, 43, 3, 9, 82, 10]))   # affiche [3, 9, 10, 27, 38, 43, 82]</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>La boucle interne cherche l'indice du minimum du reste de la liste ; l'échange <code>t[i], t[mini] = t[mini], t[i]</code> le place à sa position définitive.</li><li>Deux boucles imbriquées → environ n²/2 comparaisons : coût <strong>O(n²)</strong>, comme tous les tris « naïfs » de Première (sélection, insertion).</li></ul><p><strong>⚡ Méthode plus efficace :</strong> le tri fusion, avec sa fonction auxiliaire <code>fusionner</code> qui parcourt les deux listes en parallèle grâce aux deux indices <code>i</code> et <code>j</code>.</p><pre><code>def fusionner(a, b):\n    \"\"\"Fusionne deux listes déjà triées en une seule liste triée.\"\"\"\n    resultat = []\n    i = j = 0\n    while i &lt; len(a) and j &lt; len(b):\n        if a[i] &lt;= b[j]:\n            resultat.append(a[i]); i += 1\n        else:\n            resultat.append(b[j]); j += 1\n    return resultat + a[i:] + b[j:]   # on ajoute le reste\n\ndef tri_fusion(t):\n    if len(t) &lt;= 1:                   # cas de base : déjà trié\n        return t\n    milieu = len(t) // 2\n    gauche = tri_fusion(t[:milieu])   # diviser + régner\n    droite = tri_fusion(t[milieu:])\n    return fusionner(gauche, droite)  # combiner\n\nprint(tri_fusion([38, 27, 43, 3, 9, 82, 10]))   # affiche [3, 9, 10, 27, 38, 43, 82]</code></pre><p>L'arbre des découpages a log₂(n) niveaux et chaque niveau coûte O(n) opérations de fusion : coût total <strong>O(n log n)</strong>, bien meilleur que O(n²) dès que la liste grandit.</p><p><strong>📋 Trace d'exécution :</strong> <code>fusionner([27, 38, 43], [3, 9, 10, 82])</code>, pas à pas.</p><table><tr><th>a[i]</th><th>b[j]</th><th>plus petit</th><th>resultat</th></tr><tr><td>27</td><td>3</td><td>3</td><td>[3]</td></tr><tr><td>27</td><td>9</td><td>9</td><td>[3, 9]</td></tr><tr><td>27</td><td>10</td><td>10</td><td>[3, 9, 10]</td></tr><tr><td>27</td><td>82</td><td>27</td><td>[3, 9, 10, 27]</td></tr><tr><td>38</td><td>82</td><td>38</td><td>[3, 9, 10, 27, 38]</td></tr><tr><td>43</td><td>82</td><td>43</td><td>[3, 9, 10, 27, 38, 43]</td></tr><tr><td>—</td><td>82</td><td>reste</td><td>[3, 9, 10, 27, 38, 43, 82]</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la fusion.</p><pre><code>def fusionner(a, b):\n    resultat = []\n    i = j = 0\n    while i &lt; len(a) ______ j &lt; len(b):\n        if a[i] ______ b[j]:\n            resultat.append(a[i]); i += 1\n        else:\n            resultat.append(______); j += 1\n    return resultat + ______ + b[j:]\n\nprint(fusionner([27, 38, 43], [3, 9, 10, 82]))   # affiche [3, 9, 10, 27, 38, 43, 82]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def fusionner(a, b):\n    resultat = []\n    i = j = 0\n    while i &lt; len(a) and j &lt; len(b):\n        if a[i] &lt;= b[j]:\n            resultat.append(a[i]); i += 1\n        else:\n            resultat.append(b[j]); j += 1\n    return resultat + a[i:] + b[j:]\n\nprint(fusionner([27, 38, 43], [3, 9, 10, 82]))   # affiche [3, 9, 10, 27, 38, 43, 82]</code></pre><ul><li><code>fusionner</code> suppose ses deux listes <strong>déjà triées</strong> : c'est elle qui fait tout le travail.</li><li>Le cas de base de la récursion est une liste de longueur ≤ 1, déjà triée par définition.</li><li>À retenir : sélection O(n²), fusion O(n log n) ; le « log n » vient des découpages en deux.</li></ul>"
   },
   {
    "titre": "Séance 3 — TP « Tri fusion pas à pas » sur un vrai Python",
    "duree": "2 h",
    "objectif": "Reprogrammer le tri fusion avec asserts dans les conditions de l'épreuve pratique et « voir » le coût en comptant les appels.",
    "surLeSite": [
     "TP guidé « Tri fusion pas à pas » étapes 1–4",
     "Exercice 6 (exponentiation rapide) pour les plus rapides",
     "Fiche méthode « Réussir l'épreuve pratique »"
    ],
    "enClasse": [
     "0–10 min : rappel : l'EP se passe sur un vrai Python → ouverture de Thonny/Capytale",
     "10–50 min : TP étapes 1–2 : fusion puis récursion, faire passer tous les asserts",
     "50–80 min : TP étape 3 : compter les appels, conjecturer et vérifier 2n − 1",
     "80–110 min : TP étape 4 (style EP) : <em>nb_inferieurs</em> écrit de zéro ; réflexe « lire les asserts d'abord »",
     "110–120 min : bilan méthode EP ; corrigés poussés"
    ],
    "aPreparer": [
     "Salle machines : Thonny installé ou activité Capytale distribuée",
     "Vérifier les comptes ENT/Capytale des élèves"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <code>assert</code> vérifie qu'une condition est vraie : si elle l'est, rien ne s'affiche et l'exécution continue ; sinon, le programme s'arrête avec une <code>AssertionError</code>. À l'<strong>épreuve pratique</strong> du bac, qui se déroule sur un vrai Python (Thonny, Capytale), chaque fonction demandée est accompagnée d'asserts : les lire <strong>d'abord</strong> donne des exemples concrets d'entrées et de sorties attendues.</p><p>Exemple à la main : que nous apprend <code>assert nb_inferieurs([5, 1, 8, 3], 5) == 2</code> ? Que dans la liste [5, 1, 8, 3], les valeurs <em>strictement</em> inférieures à 5 sont 1 et 3 : il y en a bien 2 (5 lui-même ne compte pas, l'inégalité est stricte). Et <code>assert nb_inferieurs([], 10) == 0</code> précise le cas limite : liste vide → réponse 0. Sans lire l'énoncé, les asserts décrivent déjà le comportement complet de la fonction.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> écrire la fonction avec le motif « compteur », puis faire passer tous les asserts.</p><pre><code>def nb_inferieurs(t, x):\n    \"\"\"Nombre de valeurs de t strictement inférieures à x.\"\"\"\n    compteur = 0\n    for v in t:\n        if v &lt; x:\n            compteur += 1\n    return compteur\n\nassert nb_inferieurs([5, 1, 8, 3], 5) == 2\nassert nb_inferieurs([], 10) == 0\nprint(\"Tous les asserts passent\")   # affiche Tous les asserts passent</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Le motif « compteur » : on part de 0 et on ajoute 1 à chaque valeur qui vérifie la condition <code>v &lt; x</code>.</li><li>Un assert qui passe est <strong>silencieux</strong> : seule la ligne <code>print</code> finale confirme que tout va bien.</li><li>Sur la liste vide, la boucle ne s'exécute pas du tout : la fonction renvoie 0, exactement ce que demande le second assert.</li></ul><p><strong>📋 Trace d'exécution :</strong> <code>nb_inferieurs([5, 1, 8, 3], 5)</code>, valeur par valeur.</p><table><tr><th>v</th><th>v &lt; 5 ?</th><th>compteur</th></tr><tr><td>5</td><td>non</td><td>0</td></tr><tr><td>1</td><td>oui</td><td>1</td></tr><tr><td>8</td><td>non</td><td>1</td></tr><tr><td>3</td><td>oui</td><td>2</td></tr></table><p>La fonction renvoie 2 : l'assert passe. Même démarche pour « voir » le coût du tri fusion : en comptant les appels avec un compteur global, une liste de n éléments provoque exactement <strong>2n − 1</strong> appels de <code>tri_fusion</code> (13 appels pour les 7 éléments de la séance précédente).</p><p><strong>🎯 Défi élève :</strong> dans les conditions de l'épreuve pratique, compléter la fonction à partir de ses asserts.</p><pre><code>def nb_occurrences(t, x):\n    \"\"\"Nombre d'apparitions de x dans t.\"\"\"\n    compteur = ______\n    for v in t:\n        if v ______ x:\n            compteur += ______\n    return ______\n\nassert nb_occurrences([5, 1, 5, 3, 5], 5) == 3\nassert nb_occurrences([1, 2, 3], 7) == 0\nprint(\"Tous les asserts passent\")   # affiche Tous les asserts passent</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def nb_occurrences(t, x):\n    \"\"\"Nombre d'apparitions de x dans t.\"\"\"\n    compteur = 0\n    for v in t:\n        if v == x:\n            compteur += 1\n    return compteur\n\nassert nb_occurrences([5, 1, 5, 3, 5], 5) == 3\nassert nb_occurrences([1, 2, 3], 7) == 0\nprint(\"Tous les asserts passent\")   # affiche Tous les asserts passent</code></pre><ul><li>Réflexe épreuve pratique : <strong>lire les asserts d'abord</strong>, puis exécuter souvent, après chaque petite modification.</li><li>Un assert silencieux est une bonne nouvelle ; une <code>AssertionError</code> indique le test qui échoue.</li><li>Attention au vocabulaire : « strictement inférieur » se traduit par <code>&lt;</code>, jamais par <code>&lt;=</code>.</li></ul>"
   },
   {
    "titre": "Séance 4 — Programmation dynamique : le rendu de monnaie",
    "duree": "2 h",
    "objectif": "Comprendre pourquoi le glouton échoue et mettre en œuvre la programmation dynamique (sous-problèmes + mémorisation).",
    "surLeSite": [
     "Section 5 (programmation dynamique : le rendu de monnaie)",
     "Exercice 4 (défi : rendu de 11 avec {1, 2, 5})"
    ],
    "enClasse": [
     "0–15 min : réactivation : mémoïsation de Fibonacci (thème Langages) — pourquoi mémoriser ?",
     "15–35 min : débranché : rendre 6 avec des pièces {1, 3, 4} → le glouton donne 3 pièces, l'optimum 2",
     "35–70 min : remplir à la main le tableau mini[0..6], puis exécuter le code de la Section 5",
     "70–100 min : Exercice 4 en autonomie ; variantes de montants et de systèmes de pièces",
     "100–120 min : institutionnalisation : glouton ≠ optimum, chaque sous-problème résolu une seule fois ; écriture libre ; corrigés poussés"
    ],
    "aPreparer": [
     "Jetons ou pièces factices {1, 3, 4} pour la phase débranchée"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>La <strong>programmation dynamique</strong> résout un problème en le décomposant en sous-problèmes <em>qui se répètent</em> et en <strong>mémorisant</strong> leurs solutions, comme la mémoïsation de Fibonacci vue au thème Langages : chaque sous-problème n'est résolu qu'une seule fois.</p><p>Exemple à la main : rendre 6 avec des pièces {1, 3, 4}, en un minimum de pièces. L'idée « gloutonne » — prendre la plus grosse pièce à chaque fois — donne 4, puis 1, puis 1 : trois pièces. Or 3 + 3 rend 6 avec deux pièces seulement ! Le glouton, qui fonctionne pour les pièces de l'euro, n'est donc pas toujours optimal. La programmation dynamique, elle, garantit l'<strong>optimum</strong> : on calcule le nombre minimal de pièces <code>mini[s]</code> pour <em>toutes</em> les sommes s de 0 à 6, chaque case réutilisant les précédentes.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> l'algorithme glouton.</p><pre><code>def rendu_glouton(pieces, montant):\n    \"\"\"Prend toujours la plus grosse pièce possible.\"\"\"\n    nb = 0\n    for p in sorted(pieces, reverse=True):\n        while p &lt;= montant:\n            montant -= p\n            nb += 1\n    return nb\n\nprint(rendu_glouton([1, 3, 4], 6))   # affiche 3</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>sorted(pieces, reverse=True)</code> parcourt les pièces de la plus grosse à la plus petite ; le <code>while</code> en prend autant que possible avant de passer à la suivante.</li><li>Sur 6 : une pièce de 4 (reste 2), puis deux pièces de 1 → 3 pièces au lieu de 2.</li><li>Le glouton ne revient jamais sur ses choix : c'est sa force (rapidité) et sa faiblesse (pas toujours l'optimum).</li></ul><p><strong>⚡ Méthode plus efficace :</strong> la programmation dynamique. Rendre la somme s avec une pièce p, c'est rendre s − p (<em>déjà calculé</em> dans le tableau) plus une pièce.</p><pre><code>def rendu_monnaie(pieces, montant):\n    \"\"\"Nombre minimal de pièces pour faire 'montant'.\"\"\"\n    INF = float(\"inf\")\n    mini = [0] + [INF] * montant   # mini[s] = nb min de pièces pour s\n    for s in range(1, montant + 1):\n        for p in pieces:\n            if p &lt;= s and mini[s - p] + 1 &lt; mini[s]:\n                mini[s] = mini[s - p] + 1\n    return mini[montant]\n\nprint(rendu_monnaie([1, 3, 4], 6))    # affiche 2\nprint(rendu_monnaie([1, 2, 5], 11))   # affiche 3</code></pre><p>Aucun sous-problème n'est recalculé et toutes les pièces sont essayées pour chaque somme : l'optimum est garanti.</p><p><strong>📋 Trace d'exécution :</strong> le tableau <code>mini[0..6]</code> rempli à la main pour les pièces {1, 3, 4}.</p><table><tr><th>s</th><th>meilleur choix</th><th>mini[s]</th></tr><tr><td>0</td><td>rien à rendre</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>1 + 1</td><td>2</td></tr><tr><td>3</td><td>3</td><td>1</td></tr><tr><td>4</td><td>4</td><td>1</td></tr><tr><td>5</td><td>4 + 1</td><td>2</td></tr><tr><td>6</td><td>3 + 3</td><td>2</td></tr></table><p>Pour s = 6 : la pièce 3 donne <code>mini[3] + 1 = 2</code>, meilleur que la pièce 4 qui donne <code>mini[2] + 1 = 3</code> — le tableau trouve 3 + 3 tout seul.</p><p><strong>🎯 Défi élève :</strong> compléter le rendu de monnaie dynamique (défi de l'Exercice 4 : rendre 11 avec {1, 2, 5}).</p><pre><code>def rendu_monnaie(pieces, montant):\n    INF = float(\"inf\")\n    mini = [______] + [INF] * montant\n    for s in range(1, montant + 1):\n        for p in pieces:\n            if p &lt;= s and mini[______] + 1 &lt; mini[s]:\n                mini[s] = mini[s - p] + ______\n    return mini[______]\n\nprint(rendu_monnaie([1, 2, 5], 11))   # affiche 3</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def rendu_monnaie(pieces, montant):\n    INF = float(\"inf\")\n    mini = [0] + [INF] * montant\n    for s in range(1, montant + 1):\n        for p in pieces:\n            if p &lt;= s and mini[s - p] + 1 &lt; mini[s]:\n                mini[s] = mini[s - p] + 1\n    return mini[montant]\n\nprint(rendu_monnaie([1, 2, 5], 11))   # affiche 3</code></pre><ul><li>Glouton ≠ optimum en général : contre-exemple {1, 3, 4} pour rendre 6 (il fonctionne pour l'euro).</li><li>Chaque case <code>mini[s]</code> réutilise les résultats précédents <code>mini[s - p]</code> : aucun sous-problème n'est recalculé.</li><li>Rendre 11 avec {1, 2, 5} : 3 pièces (5 + 5 + 1), et <code>float(\"inf\")</code> signale une somme impossible.</li></ul>"
   },
   {
    "titre": "Séance 5 — Plus court chemin : l'algorithme de Dijkstra",
    "duree": "2 h",
    "objectif": "Dérouler Dijkstra à la main puis le programmer sur un graphe pondéré (file de priorité heapq).",
    "surLeSite": [
     "Section 6 (Dijkstra)",
     "Exercices 7 (BFS, réactivation) et défi « Mission : le GPS du lycée »"
    ],
    "enClasse": [
     "0–15 min : réactivation : graphes du thème Structures (dictionnaire d'adjacence) ; Exercice 7 (BFS)",
     "15–40 min : problème GPS : pourquoi le BFS ne suffit plus quand les arêtes sont pondérées",
     "40–70 min : déroulé papier de Dijkstra sur le graphe de la Section 6 (tableau des distances, sommet choisi)",
     "70–100 min : exécuter le code heapq de la Section 6, puis défi « GPS du lycée » en binômes",
     "100–120 min : institutionnalisation : glouton mais exact, poids positifs obligatoires ; corrigés poussés"
    ],
    "aPreparer": [
     "Tableau des distances vierge (papier ou projeté) pour le déroulé à la main"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>On reprend les graphes du thème Structures de données, mais cette fois chaque arête porte un <strong>poids</strong> (distance, durée, coût) : le graphe est <strong>pondéré</strong>. Le problème du <strong>plus court chemin</strong> consiste à trouver le chemin de <strong>coût total minimal</strong> entre deux sommets — c'est le cœur des GPS et du routage réseau. Le parcours en largeur (BFS) ne suffit plus : il compte les arêtes sans regarder les poids.</p><p>Exemple à la main sur quatre sommets A, B, C, D reliés par les arêtes A–B (poids 5), A–C (1), B–C (2), B–D (1) et C–D (4). Pour aller de A à B, l'arête directe coûte 5, mais le détour A → C → B coûte 1 + 2 = 3 : c'est mieux. Pour aller de A à D : A → C → D coûte 1 + 4 = 5, A → B → D coûte 5 + 1 = 6, mais A → C → B → D coûte 1 + 2 + 1 = 4 : c'est le plus court. L'<strong>algorithme de Dijkstra</strong> systématise cette recherche : on visite toujours le sommet <em>le plus proche encore non traité</em>, en mettant à jour les distances de ses voisins.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def dijkstra(graphe, depart):\n    dist = {sommet: float(\"inf\") for sommet in graphe}\n    dist[depart] = 0\n    a_traiter = list(graphe.keys())\n    while a_traiter != []:\n        u = min(a_traiter, key=lambda s: dist[s])   # le plus proche non traité\n        a_traiter.remove(u)\n        for voisin, poids in graphe[u].items():\n            if dist[u] + poids &lt; dist[voisin]:\n                dist[voisin] = dist[u] + poids\n    return dist\n\nreseau = {\"A\": {\"B\": 5, \"C\": 1}, \"B\": {\"A\": 5, \"C\": 2, \"D\": 1},\n          \"C\": {\"A\": 1, \"B\": 2, \"D\": 4}, \"D\": {\"B\": 1, \"C\": 4}}\nprint(dijkstra(reseau, \"A\"))   # affiche {'A': 0, 'B': 3, 'C': 1, 'D': 4}</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Le graphe pondéré s'écrit en dictionnaire de dictionnaires <code>{sommet: {voisin: poids}}</code> ; toutes les distances démarrent à <code>float(\"inf\")</code>, sauf le départ à 0.</li><li><code>min(a_traiter, ...)</code> réalise le <strong>choix glouton</strong> : parmi les sommets non traités, on prend le plus proche de la source.</li><li>La condition <code>dist[u] + poids &lt; dist[voisin]</code> se lit « passer par u raccourcit le chemin vers ce voisin » : on a trouvé mieux, on met à jour.</li><li>Défaut : chercher ce minimum en parcourant toute la liste coûte cher sur un grand graphe.</li></ul><p><strong>⚡ Méthode plus efficace :</strong></p><p>Une <strong>file de priorité</strong> (module <code>heapq</code>) évite ce parcours : <code>heapq.heappop</code> renvoie toujours le couple (distance, sommet) <strong>le plus petit</strong> — donc le sommet le plus proche encore non traité — et <code>heapq.heappush</code> insère un nouveau couple au bon endroit.</p><pre><code>import heapq\nfile = [(0, \"A\")]              # file de priorité (distance, sommet)\nheapq.heappush(file, (5, \"B\"))\nheapq.heappush(file, (1, \"C\"))\nprint(heapq.heappop(file))   # affiche (0, 'A')\nprint(heapq.heappop(file))   # affiche (1, 'C')</code></pre><p><strong>📋 Trace d'exécution :</strong> déroulé de Dijkstra sur <code>reseau</code> depuis A — une ligne par sommet traité, on entoure le sommet choisi (le plus proche encore non traité).</p><table><tr><th>Sommet choisi</th><th>dist A</th><th>dist B</th><th>dist C</th><th>dist D</th></tr><tr><td>(départ)</td><td>0</td><td>∞</td><td>∞</td><td>∞</td></tr><tr><td>A (0)</td><td>0</td><td>5</td><td>1</td><td>∞</td></tr><tr><td>C (1)</td><td>0</td><td>3</td><td>1</td><td>5</td></tr><tr><td>B (3)</td><td>0</td><td>3</td><td>1</td><td>4</td></tr><tr><td>D (4)</td><td>0</td><td>3</td><td>1</td><td>4 — Stop</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la version avec file de priorité.</p><pre><code>import heapq\n\ndef dijkstra(graphe, depart):\n    dist = {sommet: float(\"inf\") for sommet in graphe}\n    dist[______] = 0\n    a_traiter = [(0, depart)]          # file de priorité (distance, sommet)\n    while a_traiter:\n        d, u = heapq.______(a_traiter)  # le sommet le plus proche\n        if d &gt; dist[u]:\n            continue\n        for voisin, poids in graphe[u].items():\n            if d + poids &lt; dist[______]:\n                dist[voisin] = d + poids\n                heapq.heappush(a_traiter, (______, voisin))\n    return dist</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>import heapq\n\ndef dijkstra(graphe, depart):\n    dist = {sommet: float(\"inf\") for sommet in graphe}\n    dist[depart] = 0\n    a_traiter = [(0, depart)]          # file de priorité (distance, sommet)\n    while a_traiter:\n        d, u = heapq.heappop(a_traiter)  # le sommet le plus proche\n        if d &gt; dist[u]:\n            continue\n        for voisin, poids in graphe[u].items():\n            if d + poids &lt; dist[voisin]:\n                dist[voisin] = d + poids\n                heapq.heappush(a_traiter, (dist[voisin], voisin))\n    return dist\n\nreseau = {\"A\": {\"B\": 5, \"C\": 1}, \"B\": {\"A\": 5, \"C\": 2, \"D\": 1},\n          \"C\": {\"A\": 1, \"B\": 2, \"D\": 4}, \"D\": {\"B\": 1, \"C\": 4}}\nprint(dijkstra(reseau, \"A\"))   # affiche {'A': 0, 'B': 3, 'C': 1, 'D': 4}</code></pre><ul><li>Dijkstra est <strong>glouton mais exact</strong> : le choix local « le plus proche d'abord » donne bien l'optimum, à condition que tous les poids soient <strong>positifs</strong>.</li><li>Ne pas confondre : le BFS compte les arêtes, Dijkstra additionne les <strong>poids</strong> — vers D, le meilleur chemin passe par C puis B (coût 4).</li><li><code>heapq.heappop</code> renvoie toujours le couple le plus petit : c'est lui qui fournit « le sommet le plus proche encore non traité ».</li></ul>"
   },
   {
    "titre": "Séance 6 — Projet îlots « Plus court chemin sur le plan du lycée » (1/2)",
    "duree": "2 h",
    "objectif": "Modéliser le vrai plan du lycée en graphe pondéré et dérouler Dijkstra à la main avant tout codage.",
    "surLeSite": [
     "Projet « Plus court chemin sur le plan du lycée » — phases 1 à 3"
    ],
    "enClasse": [
     "0–15 min : lancement : situation (élève à mobilité réduite), constitution des îlots, attendus",
     "15–45 min : phase 1 : dessiner le plan du lycée en graphe — quels sommets garder ? estimer les distances",
     "45–75 min : phase 2 : traduire en dictionnaire de dictionnaires {lieu: {voisin: distance}}",
     "75–110 min : phase 3 : dérouler Dijkstra à la main sur le graphe de l'îlot (tableau des distances)",
     "110–120 min : point d'étape : chaque îlot annonce son graphe et un plus court chemin vérifié"
    ],
    "aPreparer": [
     "Plans du lycée imprimés (un par îlot)",
     "Grille d'évaluation du projet (modélisation, code, tests, présentation)"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li><strong>Modéliser</strong> le lycée en graphe, c'est choisir les <strong>sommets</strong> utiles (entrée, cour, CDI, bâtiments, cantine, labo…) et estimer les <strong>poids</strong> des arêtes (distances en mètres) — avant toute ligne de code.</li><li>Un parcours en largeur (BFS) ne suffit pas : il compte les arêtes sans regarder les poids ; il faut l'algorithme de <strong>Dijkstra</strong>.</li><li>En Python, le graphe pondéré se traduit en <strong>dictionnaire de dictionnaires</strong> : <code>{lieu: {voisin: distance}}</code>.</li><li>Dérouler Dijkstra à la main, c'est remplir un <strong>tableau des distances</strong>, une ligne par étape, en entourant le sommet choisi (le plus proche encore non traité) ; ce déroulé papier servira de <strong>test de référence</strong> pour le programme de la prochaine séance.</li></ul><pre><code>plan = {\n    \"Entree\":  {\"Cour\": 30, \"CDI\": 50},\n    \"Cour\":    {\"Entree\": 30, \"Cantine\": 40, \"BatA\": 25},\n    \"CDI\":     {\"Entree\": 50, \"BatA\": 20},\n    \"BatA\":    {\"Cour\": 25, \"CDI\": 20, \"Labo\": 35},\n    \"Cantine\": {\"Cour\": 40, \"Labo\": 15},\n    \"Labo\":    {\"BatA\": 35, \"Cantine\": 15},\n}   # graphe pondéré : distances en mètres</code></pre><p><strong>❓ Question type :</strong> sur ce plan, quelle est la plus courte distance de l'Entrée au Labo, et par quel itinéraire ?</p><p><strong>✅ Correction :</strong> on compare les itinéraires candidats : Entrée → Cour → BatA → Labo = 30 + 25 + 35 = 90 m ; Entrée → CDI → BatA → Labo = 50 + 20 + 35 = 105 m ; Entrée → Cour → Cantine → Labo = 30 + 40 + 15 = <strong>85 m</strong>. Le plus court est donc « Entrée → Cour → Cantine → Labo : 85 m ». C'est exactement ce que le déroulé de Dijkstra retrouve sans rien oublier, en traitant les lieux du plus proche au plus lointain.</p>"
   },
   {
    "titre": "Séance 7 — Projet îlots « Plus court chemin sur le plan du lycée » (2/2)",
    "duree": "2 h",
    "objectif": "Programmer Dijkstra avec reconstruction de l'itinéraire, tester contre le déroulé papier et présenter.",
    "surLeSite": [
     "Projet « Plus court chemin sur le plan du lycée » — phases 4 à 6 (code de départ fourni)"
    ],
    "enClasse": [
     "0–10 min : rappel des attendus, répartition des rôles dans l'îlot",
     "10–60 min : phase 4 : coder <em>dijkstra(graphe, depart)</em> (distances + prédécesseurs) et <em>chemin(pred, arrivee)</em>",
     "60–90 min : phase 5 : tests contre le déroulé papier de la séance 6 ; cas du lieu isolé (distance infinie)",
     "90–115 min : phase 6 : restitution éclair (2 min/îlot) : itinéraire affiché et « glouton mais exact » expliqué",
     "115–120 min : bilan et ramassage des productions"
    ],
    "aPreparer": [
     "Salle machines (Thonny/Capytale) ; code de départ du projet distribué"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li>La version complète <code>dijkstra(graphe, depart)</code> renvoie <strong>deux</strong> dictionnaires : <code>dist</code> (les meilleures distances) et <code>pred</code> (le <strong>prédécesseur</strong> de chaque lieu sur son plus court chemin).</li><li><code>chemin(pred, arrivee)</code> reconstruit l'itinéraire <strong>à l'envers</strong> : on remonte les prédécesseurs depuis l'arrivée jusqu'à <code>None</code>, puis on retourne la liste.</li><li>Un lieu inaccessible garde une distance <strong>infinie</strong> (<code>float(\"inf\")</code>) : le programme doit le signaler proprement, pas planter.</li><li>Tester, c'est comparer les sorties du programme au <strong>déroulé papier</strong> de la séance précédente ; phrase à savoir expliquer : Dijkstra est <strong>glouton mais exact</strong> quand tous les poids sont positifs.</li></ul><pre><code>def chemin(pred, arrivee):\n    etapes = []\n    s = arrivee\n    while s is not None:\n        etapes.append(s)\n        s = pred[s]\n    etapes.reverse()\n    return etapes</code></pre><p><strong>❓ Question type :</strong> après <code>dijkstra(plan, \"Entree\")</code>, on obtient <code>pred = {\"Entree\": None, \"Cour\": \"Entree\", \"CDI\": \"Entree\", \"BatA\": \"Cour\", \"Cantine\": \"Cour\", \"Labo\": \"Cantine\"}</code>. Que renvoie <code>chemin(pred, \"Labo\")</code> ?</p><p><strong>✅ Correction :</strong> on part de « Labo » et on remonte les prédécesseurs : celui de Labo est Cantine, celui de Cantine est Cour, celui de Cour est Entree, celui d'Entree est <code>None</code> — stop. La liste construite <code>[\"Labo\", \"Cantine\", \"Cour\", \"Entree\"]</code> est ensuite retournée : la fonction renvoie <code>['Entree', 'Cour', 'Cantine', 'Labo']</code>, soit l'itinéraire « Entrée → Cour → Cantine → Labo : 85 m » vérifié au déroulé papier.</p>"
   },
   {
    "titre": "Séance 8 — k plus proches voisins et recherche naïve d'un motif",
    "duree": "2 h",
    "objectif": "Réviser k-NN (capacité de Première, relue avec l'œil « coût ») et poser la recherche textuelle naïve en O(n×m).",
    "surLeSite": [
     "Sections 7–8 (k-NN, recherche d'un motif dans un texte)"
    ],
    "enClasse": [
     "0–15 min : réactivation Première : principe de k-NN (distance, k voisins, étiquette majoritaire)",
     "15–45 min : Section 7 : exécuter <em>knn</em>, faire varier k et le point testé ; où se cache le tri et son coût ?",
     "45–60 min : institutionnalisation : apprentissage supervisé, distances + tri = coût dominant",
     "60–90 min : Section 8 : recherche naïve, dérouler « abracadabra »/« abra », justifier O(n×m)",
     "90–115 min : réécrire <em>recherche_naive</em> de mémoire avec 3 asserts personnels",
     "115–120 min : teaser Boyer-Moore (« et si on sautait plusieurs cases ? ») ; corrigés poussés"
    ],
    "aPreparer": [
     "Repère quadrillé projeté (ou papier millimétré) pour placer les points k-NN"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>L'algorithme des <strong>k plus proches voisins</strong> (k-NN) classe un objet nouveau (un mail en spam/non-spam, une fleur par espèce) à partir d'exemples déjà étiquetés : on calcule sa <strong>distance</strong> à tous les exemples, on garde les <strong>k plus proches</strong> et on lui attribue l'étiquette <strong>majoritaire</strong>. C'est de l'<strong>apprentissage supervisé</strong>, une première brique d'intelligence artificielle — et une capacité de Première, relue ici avec l'œil « coût ».</p><p>Exemple à la main : six points étiquetés — (1, 1), (2, 1) et (1, 2) portent l'étiquette A ; (6, 6), (7, 6) et (6, 7) l'étiquette B. Où classer le point (2, 2) ? Ses distances aux trois premiers valent environ 1,41 ; 1 ; 1, celles aux trois autres dépassent 5. Les k = 3 plus proches voisins sont donc (2, 1), (1, 2) et (1, 1), tous étiquetés A : le point (2, 2) est classé <strong>A</strong>.</p><p>Seconde notion : la <strong>recherche d'un motif</strong> dans un texte, opération omniprésente (Ctrl-F, moteurs de recherche, ADN). L'approche <strong>naïve</strong> essaie le motif à chaque position du texte : dans « abracadabra », le motif « abra » apparaît aux positions 0 et 7. Son coût peut atteindre <strong>O(n×m)</strong> pour un texte de taille n et un motif de taille m.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def distance(p, q):\n    return ((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2) ** 0.5\n\ndef knn(exemples, point, k=3):\n    voisins = sorted(exemples, key=lambda e: distance(e[0], point))[:k]\n    etiquettes = [etq for (_, etq) in voisins]\n    return max(set(etiquettes), key=etiquettes.count)\n\nexemples = [((1, 1), \"A\"), ((2, 1), \"A\"), ((1, 2), \"A\"),\n            ((6, 6), \"B\"), ((7, 6), \"B\"), ((6, 7), \"B\")]\nprint(knn(exemples, (2, 2)))   # affiche A\nprint(knn(exemples, (6, 5)))   # affiche B</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>distance(p, q)</code> est la distance euclidienne du plan (théorème de Pythagore, la racine carrée s'écrit exposant 0.5).</li><li><code>sorted(..., key=...)</code> trie les exemples du plus proche au plus lointain et <code>[:k]</code> garde les k premiers : c'est le <strong>coût dominant</strong> de k-NN — n distances, puis un tri en O(n log n).</li><li><code>max(set(etiquettes), key=etiquettes.count)</code> renvoie l'étiquette la plus fréquente parmi les k voisins : l'étiquette <strong>majoritaire</strong>.</li></ul><p><strong>📋 Trace d'exécution :</strong> recherche naïve de « abra » dans « abracadabra » (n = 11, m = 4) — on teste chaque position i de 0 à n − m = 7.</p><table><tr><th>i</th><th>texte[i:i+4]</th><th>égal à « abra » ?</th><th>positions</th></tr><tr><td>0</td><td>abra</td><td>oui</td><td>[0]</td></tr><tr><td>1</td><td>brac</td><td>non</td><td>[0]</td></tr><tr><td>2</td><td>raca</td><td>non</td><td>[0]</td></tr><tr><td>3</td><td>acad</td><td>non</td><td>[0]</td></tr><tr><td>4</td><td>cada</td><td>non</td><td>[0]</td></tr><tr><td>5</td><td>adab</td><td>non</td><td>[0]</td></tr><tr><td>6</td><td>dabr</td><td>non</td><td>[0]</td></tr><tr><td>7</td><td>abra</td><td>oui</td><td>[0, 7]</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la recherche naïve.</p><pre><code>def recherche_naive(texte, motif):\n    positions = []\n    n, m = len(texte), len(motif)\n    for i in range(______):\n        if texte[______] == motif:   # le motif commence-t-il ici ?\n            positions.append(______)\n    return positions</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def recherche_naive(texte, motif):\n    positions = []\n    n, m = len(texte), len(motif)\n    for i in range(n - m + 1):\n        if texte[i:i + m] == motif:   # le motif commence-t-il ici ?\n            positions.append(i)\n    return positions\n\nprint(recherche_naive(\"abracadabra\", \"abra\"))   # affiche [0, 7]\nprint(recherche_naive(\"aaaa\", \"aa\"))            # affiche [0, 1, 2]</code></pre><ul><li>Dans k-NN, le coût dominant est le calcul des n distances suivi du <strong>tri</strong> ; changer k peut changer la classe attribuée.</li><li>Les occurrences peuvent se <strong>chevaucher</strong> : dans « aaaa », « aa » apparaît aux positions 0, 1 et 2 — d'où le <code>range(n - m + 1)</code>.</li><li>La naïve repart de zéro à chaque position ; Boyer-Moore (prochaine séance) comparera de droite à gauche et sautera plusieurs cases d'un coup.</li></ul>"
   },
   {
    "titre": "Séance 9 — Boyer-Moore : la règle du mauvais caractère",
    "duree": "2 h",
    "objectif": "Comprendre la comparaison droite → gauche et la table du dernier indice, puis mesurer le gain face à la naïve.",
    "surLeSite": [
     "Section 9 (Boyer-Moore : la règle du mauvais caractère)",
     "Exercice 8 (texte à trou : table du mauvais caractère)",
     "QCM : question Boyer-Moore en sortie de séance"
    ],
    "enClasse": [
     "0–10 min : réactivation : coût de la recherche naïve, où perd-on du temps ?",
     "10–35 min : débranché : chercher « aiguille » avec des bandelettes, comparer depuis la droite, mimer les sauts",
     "35–65 min : construire la table du dernier indice pour « ananas » ; Exercice 8 en binômes",
     "65–95 min : Section 9 : exécuter la course naïve vs Boyer-Moore, comparer les compteurs de comparaisons",
     "95–120 min : institutionnalisation : saut = j − table[caractère] (minimum 1) ; écriture libre ; corrigés poussés"
    ],
    "aPreparer": [
     "Bandelettes texte/motif imprimées pour la manipulation débranchée"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>L'algorithme de <strong>Boyer-Moore</strong> (1977) accélère la recherche d'un motif dans un texte grâce à deux idées contre-intuitives : on compare le motif au texte <strong>de droite à gauche</strong> (en commençant par la <em>dernière</em> lettre du motif) et, en cas d'échec, on ne se décale pas d'une case — on <strong>saute</strong> le plus loin possible grâce à la <strong>règle du mauvais caractère</strong>. Pour décider vite, on précalcule une <strong>table</strong> (un dictionnaire) donnant, pour chaque caractère du motif, l'indice de sa <strong>dernière occurrence</strong>.</p><p>Construisons à la main la table du motif « ananas ». On lit le motif de gauche à droite en notant l'indice de chaque lettre : a → 0, n → 1, a → 2 (écrase 0), n → 3 (écrase 1), a → 4 (écrase 2), s → 5. Résultat : a → 4, n → 3, s → 5. La règle du mauvais caractère s'en déduit : si la comparaison échoue face à un « b » du texte, absent du motif, aucun alignement chevauchant ce « b » ne peut marcher — on décale le motif entièrement après lui ; si elle échoue face à un « n », on décale juste ce qu'il faut pour aligner la dernière occurrence de « n » (indice 3) sous lui.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> construire la table du dernier indice.</p><pre><code>def table_mauvais_caractere(motif):\n    \"\"\"Pour chaque caractère du motif : l'indice de sa DERNIÈRE occurrence.\"\"\"\n    table = {}\n    for i in range(len(motif)):\n        table[motif[i]] = i   # les occurrences suivantes écrasent les précédentes\n    return table\n\nprint(table_mauvais_caractere(\"ananas\"))\n# affiche {'a': 4, 'n': 3, 's': 5}</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>À chaque tour, on range dans <code>table[motif[i]]</code> l'indice courant <code>i</code> : quand une lettre réapparaît, la nouvelle affectation écrase l'ancienne — à la fin, il reste bien l'indice de la <strong>dernière</strong> occurrence.</li><li>Dans la recherche, quand la comparaison échoue à la position <code>j</code> du motif, le décalage vaut <code>j - table[caractère]</code>, avec un minimum de 1 (on avance toujours).</li><li>Un caractère absent du motif donne <code>dernier.get(caractère, -1)</code>, donc le saut maximal <code>j + 1</code> : le motif est décalé entièrement après lui.</li></ul><p><strong>⚡ Méthode plus efficace :</strong> la recherche complète avec sauts.</p><pre><code>def boyer_moore(texte, motif):\n    n, m = len(texte), len(motif)\n    dernier = table_mauvais_caractere(motif)\n    positions = []\n    i = 0                     # position d'alignement du motif dans le texte\n    while i &lt;= n - m:\n        j = m - 1             # on compare de DROITE à GAUCHE\n        while j &gt;= 0 and texte[i + j] == motif[j]:\n            j -= 1\n        if j &lt; 0:\n            positions.append(i)        # motif trouvé en i\n            i += 1\n        else:\n            saut = j - dernier.get(texte[i + j], -1)   # règle du mauvais caractère\n            i += max(1, saut)          # on saute, jamais moins de 1\n    return positions\n\nprint(boyer_moore(\"abracadabra\", \"abra\"))   # affiche [0, 7]</code></pre><p>La recherche naïve repart de zéro à chaque position (coût jusqu'à O(n×m)) ; grâce aux sauts, Boyer-Moore ne lit qu'une <em>fraction</em> des caractères du texte — c'est l'algorithme derrière bien des Ctrl-F.</p><p><strong>📋 Trace d'exécution :</strong> <code>boyer_moore(\"abracadabra\", \"abra\")</code>, avec la table de « abra » : a → 3, b → 1, r → 2.</p><table><tr><th>i</th><th>Comparaisons (droite → gauche)</th><th>Décision</th></tr><tr><td>0</td><td>« a », « r », « b », « a » : tout correspond</td><td>motif trouvé en 0 ; i = 1</td></tr><tr><td>1</td><td>texte[4] = « c » ≠ « a » ; « c » absent du motif</td><td>saut = 3 − (−1) = 4 ; i = 5</td></tr><tr><td>5</td><td>texte[8] = « b » ≠ « a » ; dernier[« b »] = 1</td><td>saut = 3 − 1 = 2 ; i = 7</td></tr><tr><td>7</td><td>« a », « r », « b », « a » : tout correspond</td><td>motif trouvé en 7 ; i = 8, fin</td></tr></table><p>Résultat : [0, 7], comme la naïve — mais 4 alignements testés au lieu de 8.</p><p><strong>🎯 Défi élève :</strong> compléter les cinq trous.</p><pre><code>def table_mauvais_caractere(motif):\n    table = {}\n    for i in range(len(motif)):\n        table[motif[i]] = ______   # on garde la DERNIÈRE occurrence\n    return table\n\ndef boyer_moore(texte, motif):\n    n, m = len(texte), len(motif)\n    dernier = table_mauvais_caractere(motif)\n    positions = []\n    i = 0\n    while i &lt;= n - m:\n        j = m - ______             # on part de la DERNIÈRE lettre du motif\n        while j &gt;= 0 and texte[i + j] == motif[j]:\n            j -= 1\n        if j &lt; 0:\n            positions.append(______)\n            i += 1\n        else:\n            saut = j - dernier.get(texte[i + j], ______)\n            i += max(______, saut)\n    return positions\n\nprint(boyer_moore(\"abracadabra\", \"abra\"))   # affiche [0, 7]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def table_mauvais_caractere(motif):\n    table = {}\n    for i in range(len(motif)):\n        table[motif[i]] = i        # on garde la DERNIÈRE occurrence\n    return table\n\ndef boyer_moore(texte, motif):\n    n, m = len(texte), len(motif)\n    dernier = table_mauvais_caractere(motif)\n    positions = []\n    i = 0\n    while i &lt;= n - m:\n        j = m - 1                  # on part de la DERNIÈRE lettre du motif\n        while j &gt;= 0 and texte[i + j] == motif[j]:\n            j -= 1\n        if j &lt; 0:\n            positions.append(i)\n            i += 1\n        else:\n            saut = j - dernier.get(texte[i + j], -1)\n            i += max(1, saut)\n    return positions\n\nprint(boyer_moore(\"abracadabra\", \"abra\"))   # affiche [0, 7]</code></pre><ul><li>La comparaison commence toujours par la <strong>dernière</strong> lettre du motif : droite → gauche.</li><li>Le saut vaut <code>j - dernier.get(caractère, -1)</code>, jamais moins de 1 ; un caractère absent du motif donne le saut maximal.</li><li>Boyer-Moore trouve exactement les <strong>mêmes positions</strong> que la recherche naïve, avec bien moins de comparaisons : les sauts payent.</li></ul>"
   },
   {
    "titre": "Séance 10 — Entraînement épreuves du bac (écrit + pratique)",
    "duree": "2 h",
    "objectif": "S'entraîner dans les conditions réelles : un exercice écrit type bac sur table, puis une épreuve pratique blanche sur machine.",
    "surLeSite": [
     "Évaluations : Bac blanc n°1, exercice 3 (graphes : parcours et plus court chemin) — sur table",
     "Évaluations : EP blanche n°2 (fusion & programmation dynamique) — sur machine",
     "Fiches méthode « Réussir l'épreuve écrite » et « Réussir l'épreuve pratique »"
    ],
    "enClasse": [
     "0–10 min : lecture guidée des deux fiches méthode (gestion du temps, lire les asserts d'abord)",
     "10–55 min : sur table, au stylo, sans document : exercice 3 du Bac blanc n°1 (graphes)",
     "55–70 min : correction collective : barème, indentation au stylo, phrases de justification",
     "70–115 min : sur machine (Thonny/Capytale) : EP blanche n°2 complète, tous les asserts doivent passer",
     "115–120 min : auto-évaluation sur la grille EP ; corrigés poussés"
    ],
    "aPreparer": [
     "Sujets imprimés (Bac blanc n°1 ex. 3) + copies",
     "Salle machines avec vrai Python (Thonny) ou activité Capytale",
     "Repérer 2–3 sujets de la banque officielle Éduscol à donner en prolongement"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li><strong>Épreuve écrite</strong> : lire tout l'exercice avant de répondre, rédiger des <strong>phrases de justification</strong>, soigner l'indentation même au stylo.</li><li><strong>Épreuve pratique</strong> : <strong>lire les asserts d'abord</strong> (ils décrivent les entrées et les sorties attendues), exécuter souvent, faire passer tous les asserts avant de raffiner le code.</li><li>Notions mobilisées aujourd'hui : parcours de graphes et plus court chemin (Dijkstra), fusion de listes triées, programmation dynamique.</li><li>Gérer son temps : à l'écrit comme sur machine, ne pas rester bloqué — passer à la question suivante et revenir ensuite.</li></ul><p><strong>✍️ Question type corrigée (Bac blanc n°1, exercice 3) :</strong> dérouler l'algorithme de <strong>Dijkstra</strong> depuis A sur le graphe pondéré suivant (durées en minutes) : sommets A, B, C, D, E ; arêtes A–B (2), A–C (5), B–C (1), B–D (4), C–D (2), C–E (7), D–E (3). Donner le plus court chemin de A à E et sa durée.</p><p><strong>✅ Corrigé :</strong> à chaque étape, on choisit le sommet <em>le plus proche encore non traité</em> (en gras) et on met à jour les distances de ses voisins :</p><table><tr><th>Sommet choisi</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr><tr><td>départ</td><td><strong>0</strong></td><td>∞</td><td>∞</td><td>∞</td><td>∞</td></tr><tr><td>A (0)</td><td>—</td><td><strong>2</strong></td><td>5</td><td>∞</td><td>∞</td></tr><tr><td>B (2)</td><td>—</td><td>—</td><td><strong>3</strong></td><td>6</td><td>∞</td></tr><tr><td>C (3)</td><td>—</td><td>—</td><td>—</td><td><strong>5</strong></td><td>10</td></tr><tr><td>D (5)</td><td>—</td><td>—</td><td>—</td><td>—</td><td><strong>8</strong></td></tr></table><p>Plus court chemin A → E : <strong>A – B – C – D – E</strong>, durée <strong>8 min</strong> (2 + 1 + 2 + 3). Un parcours en largeur ne suffirait pas : le BFS minimise le <em>nombre d'arêtes</em>, pas la somme des <em>poids</em> — A–C–E ne compte que 2 arêtes mais dure 12 min.</p>"
   },
   {
    "titre": "Séance 11 — QCM bilan, diagnostic « Ma classe » et remédiation",
    "duree": "2 h",
    "objectif": "Mesurer les acquis du thème, cibler les notions fragiles et y remédier par groupes de besoin avant le DS.",
    "surLeSite": [
     "QCM du thème (10 questions)",
     "Suivi « Ma classe » : matrice par thème et diagnostic par question",
     "Exercices 1 à 8 et défi « GPS du lycée » (rejoués en remédiation ciblée)"
    ],
    "enClasse": [
     "0–25 min : QCM individuel (10 questions), sans aide",
     "25–45 min : lecture collective du diagnostic « Ma classe » : questions les plus échouées, notions fragiles",
     "45–90 min : remédiation par groupes de besoin : dichotomie/complexité, rendu de monnaie, Dijkstra ou Boyer-Moore, via les exercices ciblés du site",
     "90–110 min : groupes solides : un sujet de la banque officielle EP en autonomie sur machine",
     "110–120 min : bilan du thème et annonce du DS d'algorithmique ; corrigés poussés"
    ],
    "aPreparer": [
     "Ouvrir le tableau de bord « Ma classe » avant la séance",
     "Sujets de la banque officielle EP téléchargés pour les groupes avancés"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li>Coût en grand O : O(1), O(log n), O(n), O(n log n), O(n²) ; la <strong>recherche dichotomique</strong> exige un tableau trié et coûte O(log n) — « couper en deux = log ».</li><li><strong>Tri fusion</strong> : diviser / régner / combiner, coût O(n log n) grâce à la fusion de listes triées.</li><li><strong>Programmation dynamique</strong> : le glouton n'est pas toujours optimal (contre-exemple : rendre 6 avec {1, 3, 4}) ; chaque sous-problème est résolu une seule fois (rendu de monnaie).</li><li><strong>Dijkstra</strong> : plus court chemin dans un graphe pondéré à poids positifs, file de priorité <code>heapq</code>, « glouton mais exact ».</li><li><strong>k-NN</strong> (distances + étiquette majoritaire) et recherche textuelle : naïve en O(n×m), <strong>Boyer-Moore</strong> compare de droite à gauche et saute grâce à la table du dernier indice.</li></ul><p><strong>✍️ Question type corrigée (QCM) :</strong> une recherche dichotomique dans un tableau trié de 1024 éléments effectue au plus environ… 1024 comparaisons ? 512 ? 10 ? 2 ?</p><p><strong>✅ Corrigé :</strong> environ <strong>10 comparaisons</strong> : chaque étape divise l'intervalle par 2, et log₂(1024) = 10 — c'est le réflexe « couper en deux = log ». Après le QCM, chaque question échouée désigne directement la notion à retravailler en remédiation (exercices ciblés du site, du texte à trou « milieu » au défi « GPS du lycée »).</p>"
   }
  ]
 },
 "term-langages": {
  "heures": "20 h — 10 séances de 2 h",
  "resume": "Du style de programmation à la limite du calcul : paradigmes (impératif, fonctionnel, objet), POO, récursivité et mémoïsation, modularité et git, mise au point (assert, jeux de tests, doctest), bugs classiques, calculabilité. Deux séances dédiées bac : entraînement croisé écrit + épreuve pratique, puis QCM diagnostic et remédiation.",
  "seances": [
   {
    "titre": "Séance 1 — Trois façons de programmer : les paradigmes",
    "duree": "2 h",
    "objectif": "Identifier impératif, fonctionnel et objet, et comprendre qu'un même problème admet plusieurs styles.",
    "surLeSite": [
     "Section 1 (cellule « somme des carrés » en 3 versions)",
     "Fiche méthode « Estimer le coût (complexité) d'un algorithme » (réactivation)"
    ],
    "enClasse": [
     "0–20 min : réactivation Première — fonctions, boucles, compréhensions ; sondage rapide « comment écririez-vous la somme des carrés ? »",
     "20–50 min : Section 1 — exécuter la cellule comparant les 3 paradigmes ; par binômes, réécrire un petit problème (moyenne, comptage) dans les 3 styles",
     "50–70 min : institutionnalisation — tableau paradigme / mots-clés / quand l'utiliser ; vocabulaire <strong>état</strong>, <strong>fonction pure</strong>",
     "70–100 min : manipulation libre — transformer une boucle donnée en <em>map/filter</em> puis en compréhension",
     "100–120 min : écriture libre — chaque élève rédige 3 phrases « impératif / fonctionnel / objet, c'est… » ; corrigé collectif poussé en fin de séance"
    ],
    "aPreparer": [
     "Créer l'activité Capytale de la séquence (notebook vierge « paradigmes »)",
     "Vérifier Thonny installé sur les postes (l'EP se passe sur un vrai Python)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>paradigme</strong> de programmation est une manière de penser et d'organiser un programme. Un même problème admet plusieurs styles : ce n'est pas le langage qui change, c'est le <strong>style</strong> — Python permet les trois paradigmes au programme. Prenons la somme des carrés des nombres de 1 à 5, à la main : 1 + 4 + 9 + 16 + 25 = 55. Deux manières de raisonner :</p><ul><li><strong>Impératif</strong> : on tient un total qui évolue au fil des additions — c'est une variable d'<strong>état</strong> : 0, puis 1, puis 5, puis 14, puis 30, puis 55.</li><li><strong>Fonctionnel</strong> : on transforme d'abord chaque nombre en son carré (1, 4, 9, 16, 25), puis on agrège le tout par une somme : 55. Aucun état intermédiaire à surveiller.</li><li><strong>Orienté objet</strong> : on regroupe les données et les fonctions qui agissent dessus dans des <strong>objets</strong> fabriqués à partir de <strong>classes</strong> — ce paradigme sera détaillé dès la prochaine séance.</li></ul><p><strong>🐢 Première méthode — simple à comprendre :</strong> le style impératif, celui de la Première.</p><pre><code>n = 5\ntotal = 0\nfor k in range(1, n + 1):\n    total = total + k * k\n\nprint(total)   # affiche 55</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>total</code> est la variable d'<strong>état</strong> : chaque tour de boucle la modifie par une affectation.</li><li><code>range(1, n + 1)</code> parcourt les entiers de 1 à n inclus (la borne droite est exclue).</li><li>À chaque tour, on ajoute le carré <code>k * k</code> au total déjà accumulé.</li></ul><p><strong>⚡ Méthode plus efficace :</strong> le style fonctionnel n'est pas plus rapide, mais plus concis et plus sûr : aucune variable d'état à surveiller, donc moins d'occasions de se tromper. Une <strong>fonction pure</strong> renvoie toujours le même résultat pour les mêmes arguments, sans effet sur l'extérieur.</p><pre><code>n = 5\nprint(sum(map(lambda k: k * k, range(1, n + 1))))   # affiche 55\nprint(sum(k * k for k in range(1, n + 1)))          # affiche 55</code></pre><p><strong>📋 Trace d'exécution :</strong> déroulé de la boucle impérative pour n = 5.</p><table><tr><th>k</th><th>k * k</th><th>total après l'ajout</th></tr><tr><td>départ</td><td>—</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>4</td><td>5</td></tr><tr><td>3</td><td>9</td><td>14</td></tr><tr><td>4</td><td>16</td><td>30</td></tr><tr><td>5</td><td>25</td><td>55</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter les trois versions du même calcul.</p><pre><code>n = 5\ntotal = 0\nfor k in range(1, n + 1):\n    total = ______ + k * k\nprint(total)                                           # affiche 55\n\nprint(sum(______(lambda k: k * k, range(1, n + 1))))   # affiche 55\nprint(sum(k * k for k in ______(1, n + 1)))            # affiche 55</code></pre><p>✅ Réponse :</p><pre><code>n = 5\ntotal = 0\nfor k in range(1, n + 1):\n    total = total + k * k\nprint(total)                                        # affiche 55\n\nprint(sum(map(lambda k: k * k, range(1, n + 1))))   # affiche 55\nprint(sum(k * k for k in range(1, n + 1)))          # affiche 55</code></pre><ul><li>Trois paradigmes à connaître : <strong>impératif</strong> (suite d'instructions qui modifient un état), <strong>fonctionnel</strong> (fonctions combinées, sans modifier les données), <strong>orienté objet</strong> (classes et objets).</li><li><code>map</code>, <code>filter</code>, les compréhensions et la récursivité relèvent du style fonctionnel.</li><li>Choisir un paradigme, c'est choisir un style, pas un langage : les trois versions ci-dessus sont toutes du Python.</li></ul>"
   },
   {
    "titre": "Séance 2 — POO (1) : classes, objets, attributs, méthodes",
    "duree": "2 h",
    "objectif": "Écrire une classe simple avec <strong>__init__</strong>, <strong>self</strong>, attributs et méthodes.",
    "surLeSite": [
     "Section 2 (classe CompteBancaire)",
     "Exercices 2 et 5 (texte à trou <em>self</em> ; classe Compteur)"
    ],
    "enClasse": [
     "0–15 min : réactivation — en Première on <em>utilisait</em> des objets (listes, chaînes : <em>t.append</em>, <em>s.upper</em>) ; aujourd'hui on fabrique le moule",
     "15–45 min : Section 2 — dérouler CompteBancaire ; schéma au tableau : classe = moule, objet = instance, <em>self</em> = l'objet courant",
     "45–75 min : Exercice 2 (trou <em>self</em>) puis Exercice 5 (Compteur) sur le site ; circulation dans les rangs",
     "75–105 min : extension guidée — ajouter une méthode <em>afficher()</em> et un attribut à CompteBancaire dans Thonny",
     "105–120 min : institutionnalisation + corrigés poussés ; trace écrite : vocabulaire classe/instance/attribut/méthode/constructeur"
    ],
    "aPreparer": [
     "Distribuer le squelette CompteBancaire sur Capytale",
     "Prévoir la fiche de vocabulaire POO à coller dans le cahier"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Une <strong>classe</strong> est un <em>moule</em> : elle décrit ce que savent et ce que font tous les objets d'un même type. Un <strong>objet</strong> (ou <strong>instance</strong>) est fabriqué à partir de ce moule. Les <strong>attributs</strong> sont les données de l'objet (son état) ; les <strong>méthodes</strong> sont les fonctions attachées à l'objet. Exemple à la main, sans code : le moule « CompteBancaire » impose deux cases, <em>titulaire</em> et <em>solde</em>. On fabrique le compte d'Ada : titulaire = « Ada », solde = 0. On dépose 100 € : le solde passe à 100. On retire 30 € : il passe à 70. On tente de retirer 500 € : refusé, car 500 &gt; 70, le solde reste 70. Le compte de Turing, fabriqué avec le même moule, garde son propre solde : chaque objet a son propre état.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la classe <code>CompteBancaire</code> du cours.</p><pre><code>class CompteBancaire:\n    def __init__(self, titulaire, solde=0):   # constructeur\n        self.titulaire = titulaire            # attribut\n        self.solde = solde\n\n    def deposer(self, montant):               # méthode\n        self.solde = self.solde + montant\n\n    def retirer(self, montant):\n        if montant &lt;= self.solde:\n            self.solde = self.solde - montant\n\nc = CompteBancaire(\"Ada\")   # c est un objet (une instance)\nc.deposer(100)\nc.retirer(30)\nc.retirer(500)              # 500 &gt; 70 : rien ne change\nprint(c.solde)              # affiche 70</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>__init__</code>, le <strong>constructeur</strong>, est appelé automatiquement par <code>CompteBancaire(\"Ada\")</code> ; <code>solde=0</code> est une valeur par défaut.</li><li><code>self</code> désigne « l'objet courant » : <code>self.solde</code> est l'attribut de <em>cet</em> objet-là, pas d'un autre compte.</li><li>On accède aux attributs et aux méthodes avec le point : <code>c.solde</code>, <code>c.deposer(100)</code>.</li><li>Dans <code>retirer</code>, la condition protège le solde : si <code>montant</code> dépasse, rien n'est modifié.</li></ul><p><strong>📋 Trace d'exécution :</strong></p><table><tr><th>Instruction</th><th>c.titulaire</th><th>c.solde</th></tr><tr><td><code>c = CompteBancaire(\"Ada\")</code></td><td>\"Ada\"</td><td>0</td></tr><tr><td><code>c.deposer(100)</code></td><td>\"Ada\"</td><td>100</td></tr><tr><td><code>c.retirer(30)</code></td><td>\"Ada\"</td><td>70</td></tr><tr><td><code>c.retirer(500)</code></td><td>\"Ada\"</td><td>70 (condition fausse)</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la classe <code>Compteur</code>.</p><pre><code>class Compteur:\n    def ______(self):\n        self.valeur = 0\n\n    def incrementer(______):\n        ______.valeur = ______.valeur + 1\n\nc = Compteur()\nc.incrementer()\nc.incrementer()\nprint(c.valeur)   # affiche 2</code></pre><p>✅ Réponse :</p><pre><code>class Compteur:\n    def __init__(self):\n        self.valeur = 0\n\n    def incrementer(self):\n        self.valeur = self.valeur + 1\n\nc = Compteur()\nc.incrementer()\nc.incrementer()\nprint(c.valeur)   # affiche 2</code></pre><ul><li>Oublier <code>self</code> — dans l'en-tête d'une méthode ou devant un attribut — est l'erreur classique de la POO.</li><li>En Première, on <em>utilisait</em> déjà des objets (<code>t.append(x)</code>, <code>s.upper()</code>) ; désormais, on fabrique le moule.</li><li>Vocabulaire à connaître : classe, instance, attribut, méthode, constructeur.</li></ul>"
   },
   {
    "titre": "Séance 3 — POO (2) : encapsuler une structure (classe Pile)",
    "duree": "2 h",
    "objectif": "Relier POO et structures de données : implémenter une interface par une classe.",
    "surLeSite": [
     "Section 2 (relecture)",
     "Exercice 7 (défi : classe Pile — empiler, depiler, est_vide)",
     "Glossaire du thème"
    ],
    "enClasse": [
     "0–15 min : réactivation — interface vs implémentation (thème Structures de données) : que doit « savoir faire » une pile ?",
     "15–55 min : Exercice 7 en autonomie sur machine (Thonny) : classe Pile encapsulant une liste ; les rapides ajoutent une classe File",
     "55–75 min : mise en commun — pourquoi cacher la liste interne ? notion d'<strong>encapsulation</strong>",
     "75–105 min : réinvestissement — utiliser sa Pile pour vérifier un parenthésage (réécriture objet d'un algo connu)",
     "105–120 min : corrigé poussé + écriture libre : « en quoi la POO facilite le travail à plusieurs ? »"
    ],
    "aPreparer": [
     "Préparer le fichier de tests (asserts) à donner aux élèves dans Thonny",
     "Relire le corrigé de la vérification de parenthésage"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>L'<strong>interface</strong> d'une structure de données est ce qu'elle sait faire ; son <strong>implémentation</strong> est la manière dont c'est réalisé. <strong>Encapsuler</strong>, c'est cacher l'implémentation derrière des méthodes. Exemple à la main, avec une pile d'assiettes : on pose l'assiette 1, puis la 2, puis la 3 ; on ne peut reprendre que celle du dessus. Dépiler rend donc 3, puis 2, puis 1 : dernier entré, premier sorti (<strong>LIFO</strong>). L'interface d'une pile tient en trois opérations : <code>empiler</code>, <code>depiler</code>, <code>est_vide</code>. Que la pile soit rangée dans une liste Python ou dans une autre structure, l'utilisateur n'a pas à le savoir : il n'utilise que l'interface.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> une classe qui encapsule une liste interne.</p><pre><code>class Pile:\n    def __init__(self):\n        self.contenu = []          # liste interne cachée\n\n    def est_vide(self):\n        return self.contenu == []\n\n    def empiler(self, x):\n        self.contenu.append(x)\n\n    def depiler(self):\n        return self.contenu.pop()\n\np = Pile()\np.empiler(1)\np.empiler(2)\nprint(p.depiler(), p.est_vide())   # affiche 2 False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>empiler</code> = <code>append</code> et <code>depiler</code> = <code>pop</code> : les deux agissent en <em>fin</em> de liste, d'où le LIFO (dernier entré, premier sorti).</li><li><code>est_vide</code> compare la liste interne à <code>[]</code> et renvoie un booléen.</li><li>L'utilisateur ne touche jamais directement à <code>self.contenu</code> : il passe par les méthodes de l'interface.</li></ul><p><strong>📋 Trace d'exécution :</strong></p><table><tr><th>Instruction</th><th>p.contenu après</th><th>Valeur renvoyée</th></tr><tr><td><code>p = Pile()</code></td><td>[]</td><td>—</td></tr><tr><td><code>p.empiler(1)</code></td><td>[1]</td><td>—</td></tr><tr><td><code>p.empiler(2)</code></td><td>[1, 2]</td><td>—</td></tr><tr><td><code>p.depiler()</code></td><td>[1]</td><td>2</td></tr><tr><td><code>p.est_vide()</code></td><td>[1]</td><td>False</td></tr></table><p><strong>🎯 Défi élève :</strong> réinvestir la classe <code>Pile</code> ci-dessus pour vérifier qu'une expression est bien parenthésée.</p><pre><code>def bien_parenthese(expression):\n    p = Pile()\n    for c in expression:\n        if c == \"(\":\n            p.______(c)\n        elif c == \")\":\n            if p.______():\n                return False       # une ) sans ( qui l'attend\n            p.______()\n    return p.______()              # vrai si tout est refermé\n\nprint(bien_parenthese(\"(1 + 2) * (3 - 4)\"))   # affiche True\nprint(bien_parenthese(\"((1 + 2)\"))            # affiche False</code></pre><p>✅ Réponse :</p><pre><code>def bien_parenthese(expression):\n    p = Pile()\n    for c in expression:\n        if c == \"(\":\n            p.empiler(c)\n        elif c == \")\":\n            if p.est_vide():\n                return False       # une ) sans ( qui l'attend\n            p.depiler()\n    return p.est_vide()            # vrai si tout est refermé\n\nprint(bien_parenthese(\"(1 + 2) * (3 - 4)\"))   # affiche True\nprint(bien_parenthese(\"((1 + 2)\"))            # affiche False</code></pre><ul><li>Une classe est l'outil idéal pour <strong>implémenter une interface</strong> : ici, la pile du thème « Structures de données ».</li><li>On n'accède jamais à <code>self.contenu</code> depuis l'extérieur — c'est tout le sens de l'<strong>encapsulation</strong>.</li><li>Encapsuler facilite le travail à plusieurs : chacun utilise l'interface sans connaître l'implémentation.</li></ul>"
   },
   {
    "titre": "Séance 4 — La récursivité : cas de base + appel récursif",
    "duree": "2 h",
    "objectif": "Écrire et dérouler une fonction récursive simple ; comprendre la pile d'appels.",
    "surLeSite": [
     "Section 3 (factorielle, somme)",
     "Exercices 1, 3 et 6 (factorielle à trous ; somme_liste ; puissance)",
     "Fiche méthode « Écrire une fonction récursive sans se tromper »"
    ],
    "enClasse": [
     "0–15 min : réactivation — la pile (séance 3) : dérouler factorielle(3) au tableau en empilant les appels",
     "15–35 min : Section 3 — les 2 ingrédients obligatoires ; que se passe-t-il sans cas de base ? (RecursionError en direct)",
     "35–75 min : Exercices 1, 3 puis 6 sur le site, en autonomie graduée ; méthode des 3 questions de la fiche",
     "75–100 min : débogueur pas-à-pas de Thonny sur puissance(2, 5) — visualiser la pile d'appels réelle",
     "100–120 min : institutionnalisation + corrigés poussés ; trace écrite : gabarit « if cas de base … return … »"
    ],
    "aPreparer": [
     "Tester le débogueur pas-à-pas de Thonny sur un poste élève",
     "Imprimer la fiche méthode récursivité (1 par élève)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Une fonction est <strong>récursive</strong> quand, pour résoudre un problème, elle s'appelle elle-même sur un problème <em>plus petit</em>. Exemple à la main avec la <strong>factorielle</strong> : n! = n × (n−1)! et 0! = 1. Calculons 3! sans code : 3! = 3 × 2! ; il faut donc 2! = 2 × 1! ; il faut donc 1! = 1 × 0! ; or 0! = 1, réponse directe. On remonte alors : 1! = 1 × 1 = 1 ; 2! = 2 × 1 = 2 ; 3! = 3 × 2 = 6. Deux ingrédients sont <strong>obligatoires</strong> : un <strong>cas de base</strong> (ici 0! = 1), si simple qu'on répond directement sans s'appeler, et un <strong>appel récursif</strong> qui se <em>rapproche</em> du cas de base (ici, n diminue de 1 à chaque appel).</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def factorielle(n):\n    if n == 0:           # cas de base\n        return 1\n    return n * factorielle(n - 1)   # appel récursif (n diminue)\n\nprint(factorielle(5))    # affiche 120</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Le cas de base est testé <em>en premier</em> : sans lui, ou s'il n'est jamais atteint, la fonction ne s'arrête jamais — <code>RecursionError</code>.</li><li>Chaque appel en attente est rangé sur la <strong>pile d'appels</strong> — la pile de la séance précédente ! <code>factorielle(3)</code> attend le résultat de <code>factorielle(2)</code>, qui attend celui de <code>factorielle(1)</code>…</li><li>Quand le cas de base répond, la pile se dépile et les résultats remontent un à un.</li></ul><p><strong>📋 Trace d'exécution :</strong> déroulé de <code>factorielle(3)</code> — les appels s'empilent (lecture vers le bas), puis les résultats remontent (lecture vers le haut).</p><table><tr><th>Appel</th><th>Calcul en attente</th><th>Résultat renvoyé</th></tr><tr><td><code>factorielle(3)</code></td><td>3 × factorielle(2)</td><td>3 × 2 = 6</td></tr><tr><td><code>factorielle(2)</code></td><td>2 × factorielle(1)</td><td>2 × 1 = 2</td></tr><tr><td><code>factorielle(1)</code></td><td>1 × factorielle(0)</td><td>1 × 1 = 1</td></tr><tr><td><code>factorielle(0)</code></td><td>cas de base</td><td>1</td></tr></table><p><strong>🎯 Défi élève :</strong> écrire <code>puissance(x, n)</code> qui calcule x élevé à la puissance n, récursivement.</p><pre><code>def puissance(x, n):\n    if n == ______:              # cas de base\n        return ______\n    return ______ * puissance(x, n - ______)\n\nprint(puissance(2, 10))   # affiche 1024</code></pre><p>✅ Réponse :</p><pre><code>def puissance(x, n):\n    if n == 0:               # cas de base : x puissance 0 vaut 1\n        return 1\n    return x * puissance(x, n - 1)\n\nprint(puissance(2, 10))   # affiche 1024</code></pre><ul><li>Toujours écrire le cas de base <strong>en premier</strong> ; l'oublier est l'erreur numéro 1 (→ <code>RecursionError</code>).</li><li>Méthode des 3 questions : quel est le cas le plus simple ? comment réduire le problème d'un cran ? comment combiner le résultat de l'appel récursif avec l'élément courant ?</li><li>La mémoïsation — retenir les résultats déjà calculés pour ne jamais les recalculer — sera vue à la prochaine séance avec Fibonacci.</li></ul>"
   },
   {
    "titre": "Séance 5 — Récursivité (2) : coût et mémoïsation",
    "duree": "2 h",
    "objectif": "Mesurer le coût exponentiel de Fibonacci naïf et l'écraser par mémoïsation (porte d'entrée de la programmation dynamique).",
    "surLeSite": [
     "Section 4 (fib_naif vs fib_memo, piège memo={})",
     "Exercice 4 (défi : escalier mémoïsé)",
     "Fiche méthode « Estimer le coût »"
    ],
    "enClasse": [
     "0–15 min : réactivation — dessiner l'arbre des appels de fib(5) : combien de fois calcule-t-on fib(2) ?",
     "15–45 min : Section 4 — chronométrer fib_naif(30) vs fib_memo(50) ; institutionnaliser <strong>mémoïsation</strong> = dictionnaire de résultats",
     "45–60 min : le piège <em>memo={}</em> en argument par défaut (warnbox de la section) — bug classique du bac",
     "60–95 min : Exercice 4 (escalier) en binômes sur machine ; question bonus : pourquoi est-ce Fibonacci déguisé ?",
     "95–120 min : corrigés poussés + écriture libre : « expliquer la mémoïsation à un élève de Première en 4 lignes »"
    ],
    "aPreparer": [
     "Préparer un chronométrage (module time) prêt à coller dans Thonny",
     "Annoncer le DS écrit de fin de thème"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>La suite de <strong>Fibonacci</strong> est définie par fib(0) = 0, fib(1) = 1, puis fib(n) = fib(n−1) + fib(n−2). Écrite récursivement de façon naïve, elle est correcte mais très coûteuse. Déroulons fib(5) à la main : fib(5) demande fib(4) et fib(3) ; fib(4) demande fib(3) et fib(2) ; fib(3) demande fib(2) et fib(1)… Au total, fib(3) est calculé 2 fois, fib(2) 3 fois, fib(1) 5 fois : on refait sans cesse le même travail, et cela s'aggrave à chaque rang — plus d'un million d'appels pour fib(30). La <strong>mémoïsation</strong> corrige cela : on <strong>retient dans un dictionnaire</strong> les résultats déjà calculés pour ne jamais les recalculer. C'est la porte d'entrée de la <strong>programmation dynamique</strong>, revue dans le thème Algorithmique.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def fib_naif(n):\n    if n &lt; 2:\n        return n\n    return fib_naif(n - 1) + fib_naif(n - 2)\n\nprint(fib_naif(20))   # affiche 6765</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>if n &lt; 2: return n</code> traite les deux cas de base d'un coup : fib(0) = 0 et fib(1) = 1.</li><li>Chaque appel en déclenche deux autres : le nombre d'appels explose, le coût est <strong>exponentiel</strong>.</li><li>Le problème n'est pas la récursivité mais la <strong>répétition</strong> : les mêmes valeurs sont recalculées des milliers de fois.</li></ul><p><strong>⚡ Méthode plus efficace — la mémoïsation :</strong></p><pre><code>def fib_memo(n, memo={}):\n    if n &lt; 2:\n        return n\n    if n not in memo:                # pas encore calculé ?\n        memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)\n    return memo[n]\n\nprint(fib_memo(50))   # affiche 12586269025</code></pre><p>Chaque valeur n'est calculée qu'<strong>une seule fois</strong>, puis relue dans le dictionnaire : <code>fib_memo(50)</code> est instantané là où <code>fib_naif(50)</code> demanderait des dizaines de milliards d'appels.</p><p><strong>📋 Trace d'exécution :</strong> remplissage du dictionnaire lors de l'appel <code>fib_memo(5)</code> (les cas de base fib(0) = 0 et fib(1) = 1 ne sont pas stockés) :</p><table><tr><th>Calcul effectué</th><th>Résultat</th><th>Contenu de memo</th></tr><tr><td>fib(2) = fib(1) + fib(0) = 1 + 0</td><td>1</td><td>{2: 1}</td></tr><tr><td>fib(3) = fib(2) + fib(1) = 1 + 1</td><td>2</td><td>{2: 1, 3: 2}</td></tr><tr><td>fib(4) = fib(3) + fib(2) = 2 + 1</td><td>3</td><td>{2: 1, 3: 2, 4: 3}</td></tr><tr><td>fib(5) = fib(4) + fib(3) = 3 + 2</td><td>5</td><td>{2: 1, 3: 2, 4: 3, 5: 5}</td></tr></table><p>Chaque valeur n'apparaît qu'une fois : quand fib(5) redemande fib(3), le résultat est simplement relu dans le dictionnaire.</p><p><strong>🎯 Défi élève :</strong> l'escalier (Exercice 4) — de combien de façons peut-on monter n marches, par pas de 1 ou de 2 ?</p><pre><code>def escalier(n, memo={}):\n    if n &lt;= 1:\n        return 1\n    if n not in ______:\n        memo[n] = escalier(______, memo) + escalier(______, memo)\n    return ______\n\nprint(escalier(10))   # affiche 89</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def escalier(n, memo={}):\n    if n &lt;= 1:\n        return 1\n    if n not in memo:\n        memo[n] = escalier(n - 1, memo) + escalier(n - 2, memo)\n    return memo[n]\n\nprint(escalier(10))   # affiche 89</code></pre><ul><li>Piège du bac : la valeur par défaut <code>memo={}</code> est créée <strong>une seule fois</strong>, à la définition de la fonction — le dictionnaire est partagé entre tous les appels. Ici c'est voulu (le cache survit) ; la version propre : <code>memo=None</code> puis <code>if memo is None: memo = {}</code>.</li><li>Vocabulaire : <strong>mémoïsation</strong> = dictionnaire des résultats déjà calculés ; c'est le premier pas de la <strong>programmation dynamique</strong>.</li><li>L'escalier est Fibonacci déguisé : pour atteindre la marche n, on vient de la marche n−1 (pas de 1) ou de la marche n−2 (pas de 2), d'où <code>escalier(n) = escalier(n-1) + escalier(n-2)</code>.</li></ul>"
   },
   {
    "titre": "Séance 6 — Modularité, docstrings et gestion de versions (git)",
    "duree": "2 h",
    "objectif": "Découper un programme en fonctions et modules ; découvrir git comme outil d'historique et de travail collaboratif.",
    "surLeSite": [
     "Section 5 (est_premier / premiers_jusqu_a, encart git)",
     "Encart « Coder pour de vrai » (Capytale, Thonny, VS Code)"
    ],
    "enClasse": [
     "0–15 min : réactivation — la « décomposition » de la pensée informatique ; pourquoi une fonction = une responsabilité ?",
     "15–45 min : Section 5 — spécification par docstring ; séparer est_premier dans un module <em>outils.py</em> importé depuis un second fichier (vrais fichiers, dans Thonny)",
     "45–70 min : démonstration git au vidéoprojecteur : init, commit, historique, retour en arrière ; vocabulaire commit/branche/fusion",
     "70–105 min : mini-projet en binômes — découper un script monolithique fourni en 3 fonctions documentées + module",
     "105–120 min : institutionnalisation + corrigé poussé ; trace écrite sur git (3 verbes : enregistrer, revenir, fusionner)"
    ],
    "aPreparer": [
     "Installer git sur le poste prof et préparer un dépôt de démonstration",
     "Déposer le script monolithique à découper sur Capytale"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un gros programme ne s'écrit pas d'un bloc : on le <strong>découpe</strong> en fonctions courtes, chacune avec <em>une</em> responsabilité claire, puis on regroupe les fonctions liées dans des <strong>modules</strong> (fichiers <code>.py</code>) que l'on importe. C'est la <strong>modularité</strong>, la compétence « décomposition » de la pensée informatique. Chaque fonction reçoit une <strong>docstring</strong> : sa <strong>spécification</strong>, qui dit <em>ce qu'elle fait</em> sans dire comment. Exemple à la main : pour « afficher les nombres premiers plus petits que 30 », on repère deux responsabilités — décider si un nombre est premier, puis parcourir les nombres en gardant les bons. Et pour décider que 29 est premier, inutile de tester tous les diviseurs : il suffit d'aller jusqu'à √29 ≈ 5,4. Or 29 % 2 = 1, 29 % 3 = 2, 29 % 4 = 1, 29 % 5 = 4 : aucun reste nul, donc 29 est premier.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def est_premier(n):\n    \"\"\"Renvoie True si n est un nombre premier, False sinon.\"\"\"\n    if n &lt; 2:\n        return False\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            return False\n    return True\n\nprint(est_premier(29))   # affiche True</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>n % d == 0</code> teste si d divise n : un seul diviseur trouvé suffit pour répondre <code>False</code>.</li><li>On s'arrête à √n (d'où <code>int(n ** 0.5) + 1</code>) : si n = a × b, l'un des deux facteurs est forcément inférieur ou égal à √n.</li><li>La docstring est lue par l'utilisateur de la fonction : elle annonce le résultat, jamais la méthode. Placée dans un module <code>outils.py</code>, la fonction se réutilise depuis un autre fichier grâce à <code>import</code>.</li></ul><p><strong>📋 Trace d'exécution :</strong> <code>est_premier(29)</code> — la boucle parcourt <code>range(2, 6)</code> car int(√29) + 1 = 6 :</p><table><tr><th>d</th><th>29 % d</th><th>Conclusion</th></tr><tr><td>2</td><td>1</td><td>non nul, on continue</td></tr><tr><td>3</td><td>2</td><td>non nul, on continue</td></tr><tr><td>4</td><td>1</td><td>non nul, on continue</td></tr><tr><td>5</td><td>4</td><td>non nul, fin de boucle</td></tr><tr><td>—</td><td>—</td><td>return True : 29 est premier</td></tr></table><p><strong>🔁 La gestion de versions (git) :</strong> dès qu'un projet grossit ou qu'on travaille à plusieurs, on utilise un <strong>système de gestion de versions</strong> comme <strong>git</strong>. Il <strong>enregistre</strong> l'historique de toutes les modifications (chaque <em>commit</em> est une photo du projet), permet de <strong>revenir</strong> en arrière, et de travailler en parallèle sur des <em>branches</em> avant de <strong>fusionner</strong> les contributions. Des plateformes comme GitHub ou la Forge des Communs Numériques Éducatifs hébergent ces dépôts.</p><p><strong>🎯 Défi élève :</strong> compléter le module pour afficher les nombres premiers plus petits que 30.</p><pre><code>def est_premier(n):\n    \"\"\"Renvoie True si n est un nombre premier, False sinon.\"\"\"\n    if n &lt; 2:\n        return ______\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == ______:\n            return False\n    return ______\n\ndef premiers_jusqu_a(limite):\n    \"\"\"Renvoie la liste des nombres premiers &lt; limite.\"\"\"\n    return [n for n in range(limite) if ______(n)]\n\nprint(premiers_jusqu_a(30))\n# affiche [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def est_premier(n):\n    \"\"\"Renvoie True si n est un nombre premier, False sinon.\"\"\"\n    if n &lt; 2:\n        return False\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            return False\n    return True\n\ndef premiers_jusqu_a(limite):\n    \"\"\"Renvoie la liste des nombres premiers &lt; limite.\"\"\"\n    return [n for n in range(limite) if est_premier(n)]\n\nprint(premiers_jusqu_a(30))\n# affiche [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]</code></pre><ul><li>Une fonction = <strong>une</strong> responsabilité : on lit mieux, on teste chaque morceau séparément, on réutilise (<code>premiers_jusqu_a</code> appelle <code>est_premier</code> sans la réécrire).</li><li>Docstring = <strong>spécification</strong> : <em>ce que</em> fait la fonction, jamais <em>comment</em>.</li><li>git en 3 verbes : <strong>enregistrer</strong> (commit), <strong>revenir</strong> (historique), <strong>fusionner</strong> (branches) — l'outil de base du travail collaboratif.</li></ul>"
   },
   {
    "titre": "Séance 7 — Mise au point : assert, jeux de tests, doctest et bugs classiques",
    "duree": "2 h",
    "objectif": "Construire un jeu de tests couvrant les cas limites et reconnaître les bugs récurrents (flottants, effet de bord, off-by-one).",
    "surLeSite": [
     "Sections 6–7 (moyenne + doctest ; bestiaire des bugs)",
     "Défi « Mission : un test qui débusque le bug » (maximum + asserts)"
    ],
    "enClasse": [
     "0–15 min : réactivation — à l'épreuve pratique, les <em>assert</em> sont la spécification : les lire d'abord !",
     "15–45 min : Section 6 — assert, jeu de tests, doctest sur la fonction moyenne ; règle d'or : tester le vide, le zéro, le négatif",
     "45–70 min : Section 7 en îlots — chaque îlot exécute et explique un bug du bestiaire (flottants, b = a, off-by-one, elif) au reste de la classe",
     "70–100 min : défi « Mission » sur machine : écrire maximum(t) et son jeu de tests ; échanger les fonctions entre binômes pour les casser",
     "100–120 min : corrigés poussés + trace écrite : check-list « mon jeu de tests est-il complet ? »"
    ],
    "aPreparer": [
     "Préparer 4 fonctions volontairement buguées (une par îlot)",
     "Photocopier la check-list de tests"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un programme qui « tourne » n'est pas forcément <strong>correct</strong> : la mise au point consiste à <strong>chercher activement</strong> les cas où il échoue. Trois outils : <code>assert condition</code> vérifie une propriété et arrête net le programme si elle est fausse (préconditions et tests) ; un <strong>jeu de tests</strong> est une liste d'« entrée → résultat attendu » ; avec <strong>doctest</strong>, les exemples écrits dans la docstring sont exécutés et vérifiés par Python. Construisons à la main le jeu de tests de la fonction <code>moyenne</code> : un cas simple, moyenne([10, 20]) doit valoir 15.0 ; un cas limite, moyenne([12]) doit valoir 12.0 (un seul élément) ; un cas interdit, moyenne([]) doit être refusé, car diviser par zéro n'a pas de sens. Règle d'or : tester d'abord ce qui <em>pourrait casser</em> (le vide, le zéro, le négatif), pas seulement le cas « qui marche ».</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def moyenne(notes):\n    \"\"\"Moyenne d'une liste non vide de notes.\"\"\"\n    assert len(notes) &gt; 0, \"la liste de notes ne doit pas être vide\"\n    return sum(notes) / len(notes)\n\nassert moyenne([10, 20]) == 15.0   # cas simple\nassert moyenne([12]) == 12.0       # cas limite : un seul élément\nprint(\"Tous les tests passent\")    # affiche Tous les tests passent</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>L'<code>assert</code> à l'intérieur de la fonction est une <strong>précondition</strong> : il interdit <code>moyenne([])</code> avec un message clair, au lieu d'une division par zéro incompréhensible.</li><li>Les <code>assert</code> à l'extérieur forment le <strong>jeu de tests</strong> : si l'un échoue, le programme s'arrête avec <code>AssertionError</code> ; si tout passe, on atteint le <code>print</code> final.</li><li>À l'épreuve pratique, les <code>assert</code> fournis sont la <strong>spécification</strong> : les lire d'abord.</li></ul><p><strong>🐛 Le bestiaire des bugs classiques :</strong> certains bugs reviennent si souvent qu'ils ont un nom.</p><table><tr><th>Bug</th><th>Symptôme</th><th>Parade</th></tr><tr><td>Flottants inexacts</td><td><code>0.1 + 0.2 == 0.3</code> vaut False !</td><td>comparer l'écart à un seuil : <code>abs(x - y) &lt; 1e-9</code></td></tr><tr><td>Effet de bord</td><td><code>b = a</code> ne copie pas la liste : même objet</td><td>vraie copie avec <code>list(a)</code></td></tr><tr><td>Off-by-one</td><td><code>IndexError</code>, un élément de trop ou de moins</td><td>le dernier indice est <code>len(t) - 1</code></td></tr><tr><td>elif manquant</td><td>des <code>if</code> successifs s'exécutent tous</td><td>enchaîner les cas exclusifs avec <code>elif</code></td></tr></table><p><strong>📋 Trace d'exécution :</strong> le bug du <code>elif</code> manquant, déroulé avec note = 18 :</p><table><tr><th>Instruction</th><th>Condition</th><th>mention</th></tr><tr><td>if note &gt;= 16</td><td>vraie</td><td>\"très bien\"</td></tr><tr><td>if note &gt;= 12</td><td>vraie aussi !</td><td>\"assez bien\" (écrase la précédente)</td></tr><tr><td>print(mention)</td><td>—</td><td>affiche assez bien au lieu de très bien</td></tr></table><p>Avec <code>elif</code>, la seconde condition n'aurait même pas été testée : la mention serait restée « très bien ».</p><p><strong>🎯 Défi élève :</strong> écrire <code>maximum(t)</code> et le jeu de tests qui débusque le bug classique « partir de 0 ».</p><pre><code>def maximum(t):\n    \"\"\"Renvoie le plus grand élément de la liste non vide t.\"\"\"\n    assert len(t) &gt; 0, \"liste vide\"\n    m = t[______]\n    for x in t:\n        if ______:\n            m = x\n    return m\n\nassert maximum([3, 8, 5]) == 8\nassert maximum([-4, -9]) == ______   # cas limite : que des négatifs\nprint(\"Tous les tests passent\")      # affiche Tous les tests passent</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def maximum(t):\n    \"\"\"Renvoie le plus grand élément de la liste non vide t.\"\"\"\n    assert len(t) &gt; 0, \"liste vide\"\n    m = t[0]\n    for x in t:\n        if x &gt; m:\n            m = x\n    return m\n\nassert maximum([3, 8, 5]) == 8\nassert maximum([-4, -9]) == -4       # cas limite : que des négatifs\nprint(\"Tous les tests passent\")      # affiche Tous les tests passent</code></pre><ul><li>On ne teste <strong>jamais</strong> l'égalité de deux flottants : on compare leur écart à un petit seuil.</li><li>Initialiser <code>m = 0</code> au lieu de <code>m = t[0]</code> est exactement le bug que révèle <code>maximum([-4, -9])</code> : d'où l'importance des cas limites.</li><li>Check-list d'un bon jeu de tests : le vide, le zéro, le négatif, le très grand.</li></ul>"
   },
   {
    "titre": "Séance 8 — Calculabilité et décidabilité : les limites du calcul",
    "duree": "2 h",
    "objectif": "Distinguer calculable/décidable et présenter le problème de l'arrêt comme problème indécidable (Turing, 1936).",
    "surLeSite": [
     "Section 8 (cellule « un programme est une donnée », exec)",
     "QCM (10 questions) — 3 questions en sortie de séance",
     "Glossaire du thème"
    ],
    "enClasse": [
     "0–15 min : réactivation — architecture de von Neumann (Première) : programme et données dans la même mémoire",
     "15–35 min : activité débranchée — le paradoxe « cette phrase est fausse » joué à l'oral pour sentir la contradiction",
     "35–65 min : Section 8 — le problème de l'arrêt, l'idée de la preuve par l'absurde au tableau ; conséquence : pas d'antivirus parfait",
     "65–90 min : cellule exec() — la même chaîne est donnée puis programme ; thèse de Church-Turing (aucun langage ne fera mieux)",
     "90–120 min : écriture libre — rédiger en 10 lignes « pourquoi le problème de l'arrêt est indécidable » (entraînement question ouverte du bac) ; corrigé poussé"
    ],
    "aPreparer": [
     "Préparer les cartes de l'activité débranchée (phrases auto-référentes)",
     "Relire la preuve de l'arrêt pour la questionner en classe"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un problème est <strong>décidable</strong> s'il existe un algorithme qui, pour <em>toute</em> entrée, répond « oui » ou « non » en un temps fini. Question vertigineuse : existe-t-il des problèmes qu'aucun programme ne pourra jamais résoudre, même avec un ordinateur infiniment rapide ? Oui. Le plus célèbre est le <strong>problème de l'arrêt</strong> : écrire un programme <code>arrete(P, e)</code> qui, en lisant le code d'un programme P et une entrée e, dirait toujours correctement si P s'arrête ou tourne à l'infini sur e. <strong>Alan Turing</strong> a prouvé en 1936 qu'un tel programme ne peut pas exister : le problème de l'arrêt est <strong>indécidable</strong>.</p><p><strong>✋ La preuve, déroulée à la main</strong> (par l'absurde, sur le modèle du paradoxe « cette phrase est fausse ») :</p><ul><li>Supposons que <code>arrete(P, e)</code> existe et réponde toujours juste.</li><li>Construisons un programme « diabolique » : <code>diabolique(P)</code> boucle à l'infini si <code>arrete(P, P)</code> répond « s'arrête », et s'arrête sinon.</li><li>Lançons <code>diabolique(diabolique)</code> : il s'arrête <em>si et seulement si</em> il ne s'arrête pas — contradiction !</li><li>L'hypothèse de départ est donc fausse : <code>arrete</code> ne peut pas exister.</li></ul><p><strong>💻 La manipulation — un programme est une donnée :</strong> toute la preuve repose sur cette idée : le texte d'un programme n'est qu'une suite de caractères, que l'on peut mesurer, afficher… ou exécuter. La même chaîne est tour à tour donnée, puis programme :</p><pre><code>programme = 'for k in range(1, 4): print(\"ligne\", k)'\n\n# 1) comme DONNÉE : une simple chaîne de caractères\nprint(len(programme))   # affiche 39\n\n# 2) comme PROGRAMME : on peut l'exécuter !\nexec(programme)         # affiche ligne 1  puis  ligne 2  puis  ligne 3</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>C'est exactement ce que fait l'interpréteur Python en permanence : lire du texte (le code source) et l'exécuter.</li><li>C'est le cœur de l'<strong>architecture de von Neumann</strong> (vue en Première) : programme et données partagent la même mémoire.</li><li>Puisqu'un programme est une donnée, un programme peut recevoir un programme en entrée — c'est l'énoncé même du problème de l'arrêt.</li></ul><p><strong>📋 Trace du raisonnement :</strong> les deux réponses possibles de <code>arrete(diabolique, diabolique)</code> mènent chacune à une contradiction :</p><table><tr><th>Réponse supposée de arrete</th><th>Comportement réel de diabolique(diabolique)</th><th>Verdict</th></tr><tr><td>« il s'arrête »</td><td>il boucle à l'infini (c'est sa définition)</td><td>arrete s'est trompé</td></tr><tr><td>« il ne s'arrête pas »</td><td>il s'arrête (c'est sa définition)</td><td>arrete s'est trompé</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la trace écrite (entraînement à la question ouverte du bac).</p><pre><code>Un problème est ______ s'il existe un algorithme qui, pour toute\nentrée, répond « oui » ou « non » en un temps fini.\nLe problème de l'______ est indécidable : Alan ______ l'a\ndémontré en ______, par un raisonnement par l'______.</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>Un problème est décidable s'il existe un algorithme qui, pour toute\nentrée, répond « oui » ou « non » en un temps fini.\nLe problème de l'arrêt est indécidable : Alan Turing l'a\ndémontré en 1936, par un raisonnement par l'absurde.</code></pre><ul><li>Conséquence très concrète : aucun logiciel ne détectera à coup sûr toutes les boucles infinies (ni tous les virus) — cette limite est <strong>mathématique</strong>, pas technique.</li><li>Thèse de <strong>Church-Turing</strong> : tous les langages « raisonnables » ont la même puissance de calcul ; le problème de l'arrêt n'est pas une faiblesse de Python, aucun langage présent ou futur ne le résoudra.</li><li>Vocabulaire : <strong>calculable</strong> (une fonction qu'un programme peut calculer), <strong>décidable</strong> (une question oui/non tranchée par un algorithme en temps fini), <strong>indécidable</strong> (aucun algorithme ne tranche pour toutes les entrées).</li></ul>"
   },
   {
    "titre": "Séance 9 — Entraînement épreuves du bac (écrit + pratique)",
    "duree": "2 h",
    "objectif": "S'entraîner dans les conditions réelles : un exercice écrit type bac sur table, un exercice type EP avec asserts sur machine.",
    "surLeSite": [
     "Évaluations : Bac blanc n°2, exercice « POO & dynamique » (sur table)",
     "Évaluations : EP blanche n°2 — fusion & programmation dynamique (sur machine)",
     "Fiches méthode « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »"
    ],
    "enClasse": [
     "0–10 min : lecture guidée des deux fiches méthode — gestion du temps, lire les assert d'abord, respecter le nom demandé",
     "10–50 min : sur table, sans machine — exercice écrit type bac (POO & programmation dynamique du Bac blanc n°2), copies ramassées",
     "50–105 min : sur machine (Thonny, vrai Python) — EP blanche n°2 en conditions d'épreuve : 2 exercices, 55 min, asserts à faire passer",
     "105–120 min : débriefing croisé — erreurs de gestion du temps, cas limites oubliés ; corrigés poussés en fin de séance"
    ],
    "aPreparer": [
     "Imprimer le sujet écrit + prévoir des copies",
     "Télécharger 2 sujets de la banque officielle Éduscol en réserve pour les rapides"
    ],
    "cours": "<p><strong>🎯 Bilan — réussir l'écrit et l'épreuve pratique :</strong></p><ul><li>À l'épreuve pratique, les <code>assert</code> fournis sont la <strong>spécification</strong> : les lire en premier, respecter exactement le nom de fonction et l'ordre des paramètres demandés, et exécuter le code souvent pour tester au fur et à mesure.</li><li>Gérer le temps : ne pas rester bloqué sur le premier exercice — passer au second et revenir ; avant de rendre, vérifier soi-même les cas limites (liste vide, zéro, valeurs négatives, doublons).</li><li>À l'écrit, dérouler une fonction récursive <em>à la main</em> (le cas de base est-il atteint ?) ; en POO, ne jamais oublier <code>self</code> dans l'en-tête des méthodes et devant les attributs.</li><li>Dès qu'un calcul récursif se répète (Fibonacci, rendu de monnaie), penser <strong>mémoïsation</strong> (dictionnaire des résultats déjà calculés) ou tableau de <strong>programmation dynamique</strong> : chaque sous-problème n'est résolu qu'une fois, puis réutilisé.</li><li>Dans <code>fusion(a, b)</code> (EP blanche n°2), on avance avec deux indices en comparant les éléments courants, puis on recopie la fin de la liste non épuisée — sans <code>sort</code> ni <code>sorted</code>.</li></ul><p><strong>✍️ Question type corrigée (Bac blanc n°2, exercice « POO &amp; dynamique ») :</strong> une médiathèque gère ses adhérents avec la classe ci-dessous. Écrire la méthode <code>rendre(self, titre)</code> qui retire <code>titre</code> de la liste des emprunts s'il s'y trouve et renvoie <code>True</code>, et renvoie <code>False</code> sinon.</p><pre><code>class Adherent:\n    def __init__(self, nom):\n        self.nom = nom\n        self.emprunts = []\n\n    def emprunter(self, titre):\n        if len(self.emprunts) &lt; 3:\n            self.emprunts.append(titre)\n            return True\n        return False</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>class Adherent:\n    def __init__(self, nom):\n        self.nom = nom\n        self.emprunts = []\n\n    def emprunter(self, titre):\n        if len(self.emprunts) &lt; 3:\n            self.emprunts.append(titre)\n            return True\n        return False\n\n    def rendre(self, titre):\n        if titre in self.emprunts:\n            self.emprunts.remove(titre)\n            return True\n        return False\n\na = Adherent(\"Ada\")\na.emprunter(\"Dune\")\nprint(a.rendre(\"Dune\"), a.rendre(\"Dune\"))   # affiche True False</code></pre><p>Les points sont donnés pour le test d'appartenance avec <code>in</code>, le retrait avec <code>remove</code> et les <strong>deux</strong> <code>return</code> ; le second appel renvoie <code>False</code> car « Dune » a déjà été rendu.</p><ul><li>Le correcteur d'EP ne lit pas le code : seuls comptent les <code>assert</code> qui passent — d'où l'importance des cas limites.</li><li>Une méthode reçoit toujours <code>self</code> en premier paramètre ; on accède aux attributs par <code>self.emprunts</code>, jamais par <code>emprunts</code> seul.</li></ul>"
   },
   {
    "titre": "Séance 10 — QCM bilan, diagnostic « Ma classe » et remédiation",
    "duree": "2 h",
    "objectif": "Évaluer les acquis du thème, cibler les fragilités question par question et y remédier immédiatement.",
    "surLeSite": [
     "QCM (10 questions) en conditions individuelles",
     "Tableau de bord « Ma classe » (diagnostic par question)",
     "Exercices 1 à 7 (reprise ciblée) et sections 3, 4, 6 selon les fragilités"
    ],
    "enClasse": [
     "0–25 min : QCM du thème (10 questions) en individuel sur le site",
     "25–45 min : projection du diagnostic « Ma classe » — repérer les 2–3 questions les plus échouées, verbaliser les confusions",
     "45–90 min : remédiation en groupes de besoin — groupe récursivité (Exercices 1, 3, 6 + Section 3), groupe POO (Exercices 2, 5, 7), groupe tests/mémoïsation (Exercice 4 + Section 6) ; les élèves solides tutorent ou attaquent un sujet EP de la banque",
     "90–110 min : reprise collective des 2 questions les plus ratées, nouvelle question flash de vérification",
     "110–120 min : bilan du thème + annonce du thème suivant (Algorithmique : la programmation dynamique y revient) ; corrigés poussés"
    ],
    "aPreparer": [
     "Vérifier la remontée des résultats dans « Ma classe » avant la séance",
     "Préparer la composition des groupes de besoin à partir des séances 4 à 9"
    ],
    "cours": "<p><strong>🎯 Bilan — l'essentiel du thème :</strong></p><ul><li>Trois <strong>paradigmes</strong> : <strong>impératif</strong> (suite d'instructions qui modifient un état), <strong>fonctionnel</strong> (combiner des fonctions sans modifier les données), <strong>orienté objet</strong> (classes et objets) — Python permet les trois.</li><li><strong>POO</strong> : une classe est un moule, un objet une instance ; <code>__init__</code> est le constructeur, <code>self</code> désigne l'objet courant ; attributs = données, méthodes = fonctions attachées.</li><li><strong>Récursivité</strong> = un <strong>cas de base</strong> + un <strong>appel récursif</strong> qui s'en rapproche ; sans cas de base : <code>RecursionError</code>. Fibonacci naïf a un coût exponentiel → <strong>mémoïsation</strong> (dictionnaire des résultats déjà calculés), porte d'entrée de la programmation dynamique.</li><li><strong>Mise au point</strong> : <code>assert</code>, jeu de tests couvrant cas simples <em>et</em> limites (vide, zéro, négatif), doctest ; bugs classiques : flottants inexacts, <code>b = a</code> qui ne copie pas la liste, erreur d'une unité (<em>off-by-one</em>), <code>elif</code> manquant.</li><li><strong>Limites du calcul</strong> : le problème de l'arrêt est <strong>indécidable</strong> (Turing, 1936) ; un programme est aussi une donnée ; la calculabilité ne dépend pas du langage (thèse de Church-Turing).</li></ul><p><strong>✍️ Question type corrigée (QCM du thème) :</strong> que renvoie l'appel <code>f(\"NSI\")</code> ?</p><pre><code>def f(s):\n    return \"\" if s == \"\" else f(s[1:]) + s[0]</code></pre><p><strong>✅ Réponse :</strong> <code>\"ISN\"</code>. On déroule à la main : <code>f(\"NSI\")</code> vaut <code>f(\"SI\") + \"N\"</code>, qui vaut <code>(f(\"I\") + \"S\") + \"N\"</code>, qui vaut <code>((f(\"\") + \"I\") + \"S\") + \"N\"</code> ; le cas de base donne <code>f(\"\") = \"\"</code>, et à la remontée de la pile d'appels on obtient <code>\"I\"</code>, puis <code>\"IS\"</code>, puis <code>\"ISN\"</code> : chaque premier caractère est recollé <em>après</em> le renversement du reste — la fonction <strong>renverse la chaîne</strong>.</p><pre><code>def f(s):\n    return \"\" if s == \"\" else f(s[1:]) + s[0]\n\nprint(f(\"NSI\"))   # affiche ISN</code></pre><ul><li>Face à une fonction récursive inconnue, toujours commencer par identifier le cas de base, puis dérouler sur une petite entrée.</li><li>La remédiation se fait par groupes de besoin : récursivité (Exercices 1, 3, 6), POO (Exercices 2, 5, 7), tests et mémoïsation (Exercice 4) ; la programmation dynamique revient dans le thème Algorithmique.</li></ul>"
   }
  ]
 },
 "term-bdd": {
  "heures": "18 h (9 séances de 2 h)",
  "resume": "Du modèle relationnel (tables, clés, contraintes d'intégrité, anomalies de schéma) au SQL complet (SELECT/WHERE, ORDER BY, agrégats, GROUP BY, jointures, INSERT/UPDATE/DELETE), avec vérification systématique dans DB Browser for SQLite. Le projet îlots « médiathèque » relie SQL et Python (mini-moteur sélection/projection/jointure), puis deux séances de prépa bac : entraînement écrit + pratique, et QCM final avec diagnostic « Ma classe ».",
  "seances": [
   {
    "titre": "Du fichier au SGBD : le modèle relationnel",
    "duree": "2 h",
    "objectif": "Identifier relation, attribut, domaine, enregistrement ; distinguer structure et contenu ; comprendre le rôle d'un SGBD.",
    "surLeSite": [
     "Sections 1–2 (« Pourquoi des bases de données ? », « Le modèle relationnel ») avec la base « lycée » (tables <strong>classe</strong> et <strong>eleve</strong>)",
     "Capacités du thème (encadré d'ouverture) à projeter"
    ],
    "enClasse": [
     "0–15 min : réactivation Première — données en tables (CSV, dictionnaires) : limites d'un fichier unique (redondance, accès concurrent, recherche)",
     "15–40 min : Section 1 en lecture guidée — rôle du SGBD, idée ACID, exemples (SQLite, PostgreSQL)",
     "40–75 min : Section 2 — vocabulaire sur les tables classe/eleve ; écrire les schémas <em>eleve(id, nom, #id_classe, moyenne)</em>",
     "75–105 min : manipulation — ouvrir la base « lycée » dans DB Browser, distinguer onglet structure / onglet données",
     "105–120 min : institutionnalisation (schéma ≠ contenu) + écriture libre ; corrigés poussés"
    ],
    "aPreparer": [
     "DB Browser for SQLite installé sur les postes + fichier lycee.db pré-rempli (tables classe et eleve du cours)",
     "Vidéoprojecteur pour la démonstration"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Dès qu'une organisation manipule <strong>beaucoup de données partagées</strong> (les élèves d'un lycée, les comptes d'une banque, le catalogue d'un site), un simple fichier montre vite ses limites : la même information recopiée à plusieurs endroits finit par se contredire (<strong>redondance</strong>), deux personnes ne peuvent pas modifier la même ligne en même temps (<strong>accès concurrent</strong>), et la recherche devient pénible. Un <strong>SGBD</strong> (système de gestion de bases de données) est le logiciel qui répond à ces problèmes : il rend les données <strong>fiables et partagées</strong> et garantit les bonnes propriétés d'une transaction (résumées par <strong>ACID</strong>). Exemples : <em>SQLite</em> (léger, dans un simple fichier), <em>PostgreSQL</em>, <em>MySQL/MariaDB</em>. Les plus courants suivent le <strong>modèle relationnel</strong> : les données sont rangées dans des <strong>tables</strong> (on dit aussi <em>relations</em>). Une colonne est un <strong>attribut</strong>, avec son <strong>domaine</strong> (texte, entier, réel…) ; une ligne est un <strong>enregistrement</strong>.</p><p>Exemple déroulé à la main sur la base <strong>« lycée »</strong>, utilisée tout le thème. La table <code>classe</code> :</p><table><tr><th>id</th><th>nom</th><th>niveau</th></tr><tr><td>1</td><td>1G2</td><td>Première</td></tr><tr><td>2</td><td>TG1</td><td>Terminale</td></tr></table><p>… et la table <code>eleve</code> :</p><table><tr><th>id</th><th>nom</th><th>id_classe</th><th>moyenne</th></tr><tr><td>1</td><td>Ada</td><td>2</td><td>18.5</td></tr><tr><td>2</td><td>Alan</td><td>2</td><td>16.0</td></tr><tr><td>3</td><td>Grace</td><td>1</td><td>14.5</td></tr><tr><td>4</td><td>Linus</td><td>1</td><td>9.5</td></tr></table><p>Lecture à la main : la table <code>eleve</code> possède 4 attributs (<code>id</code>, <code>nom</code>, <code>id_classe</code>, <code>moyenne</code>) et 4 enregistrements. L'enregistrement de Grace est la ligne (3, Grace, 1, 14.5) : son attribut <code>moyenne</code> vaut 14.5, un réel entre 0 et 20 (son domaine). L'attribut <code>id_classe</code> indique dans quelle classe est l'élève : Grace est dans la classe 1, c'est-à-dire 1G2.</p><p><strong>🔍 Structure ou contenu :</strong></p><p>Le <strong>schéma</strong> décrit la <strong>structure</strong> de la base (les tables, leurs attributs, leurs domaines) ; le <strong>contenu</strong>, ce sont les enregistrements. Il ne faut pas les confondre : on écrit le schéma d'une table en soulignant (à la main) la clé primaire et en préfixant la clé étrangère par <code>#</code> :</p><pre><code>classe(id, nom, niveau)\neleve(id, nom, #id_classe, moyenne)</code></pre><p>Dans DB Browser for SQLite, l'onglet « Structure de la base de données » montre le schéma, l'onglet « Parcourir les données » montre le contenu.</p><p><strong>💻 Une table en Python :</strong></p><pre><code># Une table = une liste d'enregistrements (dictionnaires)\neleve = [\n    {\"id\": 1, \"nom\": \"Ada\",   \"id_classe\": 2, \"moyenne\": 18.5},\n    {\"id\": 2, \"nom\": \"Alan\",  \"id_classe\": 2, \"moyenne\": 16.0},\n    {\"id\": 3, \"nom\": \"Grace\", \"id_classe\": 1, \"moyenne\": 14.5},\n    {\"id\": 4, \"nom\": \"Linus\", \"id_classe\": 1, \"moyenne\": 9.5},\n]\npremier = eleve[0]         # un enregistrement (une ligne)\nprint(premier[\"nom\"])      # affiche Ada\nprint(premier[\"moyenne\"])  # affiche 18.5</code></pre><p>Une ligne est un dictionnaire ; un attribut est une clé de ce dictionnaire. Ce parallèle avec les données en tables de Première servira tout le thème.</p><p><strong>🎯 Défi élève :</strong> compléter pour obtenir exactement les affichages annoncés.</p><pre><code>premier = eleve[______]\nprint(premier[\"______\"])   # affiche Ada\ntroisieme = eleve[______]\nprint(troisieme[\"nom\"])    # affiche Grace\nprint(______(eleve))       # affiche 4</code></pre><p>✅ Réponse :</p><pre><code>eleve = [\n    {\"id\": 1, \"nom\": \"Ada\",   \"id_classe\": 2, \"moyenne\": 18.5},\n    {\"id\": 2, \"nom\": \"Alan\",  \"id_classe\": 2, \"moyenne\": 16.0},\n    {\"id\": 3, \"nom\": \"Grace\", \"id_classe\": 1, \"moyenne\": 14.5},\n    {\"id\": 4, \"nom\": \"Linus\", \"id_classe\": 1, \"moyenne\": 9.5},\n]\npremier = eleve[0]\nprint(premier[\"nom\"])      # affiche Ada\ntroisieme = eleve[2]\nprint(troisieme[\"nom\"])    # affiche Grace\nprint(len(eleve))          # affiche 4</code></pre><ul><li>Vocabulaire à connaître : table = relation, colonne = attribut, ligne = enregistrement, type = domaine.</li><li>Ne pas confondre la <strong>structure</strong> (le schéma) et le <strong>contenu</strong> (les enregistrements) : deux onglets différents dans DB Browser.</li><li>Un fichier unique est fragile ; une base gérée par un SGBD est fiable et partagée (propriétés ACID).</li></ul>"
   },
   {
    "titre": "Clés, contraintes d'intégrité et schémas « malades »",
    "duree": "2 h",
    "objectif": "Identifier clé primaire, clé étrangère et les trois contraintes d'intégrité ; repérer les anomalies d'un schéma redondant.",
    "surLeSite": [
     "Sections 3–4 (« Clés primaires, clés étrangères, intégrité », « Un schéma malade »)",
     "Exercice 9 (anomalies du club de sport, niveau moyen)"
    ],
    "enClasse": [
     "0–10 min : réactivation — interro flash sur le vocabulaire de la séance 1",
     "10–40 min : Section 3 — clés primaire/étrangère, contraintes de domaine, d'entité, référentielle ; démo DB Browser : le SGBD refuse une clé étrangère invalide",
     "40–70 min : Section 4 en îlots — la table <strong>emprunt</strong> du CDI : trouver les anomalies de mise à jour, d'insertion, de suppression",
     "70–100 min : Exercice 9 sur papier — découper la table du club de sport en 3 tables avec clés",
     "100–120 min : institutionnalisation (redondance = schéma malade) + écriture libre ; corrigés poussés"
    ],
    "aPreparer": [
     "Copies papier de la table « emprunt » malade et de l'énoncé du club de sport",
     "Base lycee.db pour la démo du refus d'intégrité référentielle"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Pour que la base reste <strong>cohérente</strong>, le modèle relationnel impose des <strong>contraintes d'intégrité</strong>. La <strong>clé primaire</strong> (<em>primary key</em>) identifie <strong>de façon unique</strong> chaque ligne d'une table : elle ne peut être ni dupliquée, ni vide — c'est la <strong>contrainte d'entité</strong>. Une <strong>clé étrangère</strong> (<em>foreign key</em>) est un attribut qui <strong>référence la clé primaire d'une autre table</strong> — c'est la <strong>contrainte d'intégrité référentielle</strong>. Enfin, le <strong>domaine</strong> de chaque attribut limite les valeurs acceptées — c'est la <strong>contrainte de domaine</strong>.</p><p>Exemple déroulé à la main sur la base « lycée » : dans la table <code>eleve</code>, Ada porte <code>id_classe = 2</code> ; dans la table <code>classe</code>, la ligne dont la clé primaire <code>id</code> vaut 2 est TG1 : Ada est donc en TG1, sans que « TG1 » soit recopié dans sa ligne. Essayons maintenant d'insérer un élève avec <code>id_classe = 7</code> : aucune classe n'a l'identifiant 7, le SGBD <strong>refuse</strong>. Il refuse de même une <code>moyenne</code> de 25 (hors domaine), deux élèves avec le même <code>id</code>, ou la suppression de la classe TG1 tant que des élèves la référencent.</p><table><tr><th>Contrainte</th><th>Règle</th><th>Exemple refusé par le SGBD</th></tr><tr><td>de domaine</td><td>chaque valeur respecte le type prévu</td><td>moyenne = 25</td></tr><tr><td>d'entité (clé primaire)</td><td>clé unique, jamais vide</td><td>deux élèves avec id = 3</td></tr><tr><td>référentielle (clé étrangère)</td><td>la valeur référencée doit exister</td><td>id_classe = 7 sans classe 7</td></tr></table><p><strong>🤒 Un schéma « malade » :</strong></p><p>Le symptôme numéro un d'un mauvais schéma est la <strong>redondance</strong>. Voici la table unique <code>emprunt</code> qu'un CDI mal conseillé pourrait utiliser :</p><table><tr><th>nom_eleve</th><th>classe</th><th>prof_principal</th><th>titre_livre</th><th>auteur</th><th>date_emprunt</th></tr><tr><td>Ada</td><td>TG1</td><td>M. Martin</td><td>1984</td><td>Orwell</td><td>2026-01-10</td></tr><tr><td>Ada</td><td>TG1</td><td>M. Martin</td><td>Dune</td><td>Herbert</td><td>2026-02-03</td></tr><tr><td>Alan</td><td>TG1</td><td>M. Martin</td><td>1984</td><td>Orwell</td><td>2026-02-15</td></tr><tr><td>Grace</td><td>1G2</td><td>Mme Curie</td><td>Fondation</td><td>Asimov</td><td>2026-03-01</td></tr></table><p>Déroulons à la main les trois <strong>anomalies</strong> :</p><ul><li><strong>Anomalie de mise à jour</strong> : si le professeur principal de TG1 change, il faut corriger <em>trois</em> lignes ; en oublier une et la base se contredit.</li><li><strong>Anomalie d'insertion</strong> : impossible d'enregistrer un nouveau livre tant que personne ne l'a emprunté — il n'a pas de ligne où exister.</li><li><strong>Anomalie de suppression</strong> : si Grace rend son livre et qu'on efface sa ligne, on perd toute trace du livre « Fondation »… et de la classe 1G2.</li></ul><p><strong>💊 Le remède :</strong> découper en plusieurs tables, une par type d'objet, reliées par des clés étrangères — chaque information n'est écrite qu'<strong>une seule fois</strong>. On dit qu'on <strong>normalise</strong> le schéma :</p><pre><code>eleve(id, nom, #id_classe)\nclasse(id, nom, prof_principal)\nlivre(id, titre, auteur)\nemprunt(#id_eleve, #id_livre, date_emprunt)</code></pre><p><strong>🎯 Défi élève :</strong> le club de sport note tout dans une table unique <code>inscription(nom_eleve, classe, sport, jour, prof_sport)</code>. Compléter le découpage sain :</p><pre><code>eleve(id, nom, #______)\nclasse(______, nom)\nsport(id, nom, jour, ______)\ninscription(#id_eleve, #______)</code></pre><p>✅ Réponse :</p><pre><code>eleve(id, nom, #id_classe)\nclasse(id, nom)\nsport(id, nom, jour, prof_sport)\ninscription(#id_eleve, #id_sport)</code></pre><ul><li>Réflexe de diagnostic : la <em>même</em> information sur <em>plusieurs</em> lignes = schéma probablement malade.</li><li>Trois anomalies à connaître : mise à jour (corriger plusieurs lignes), insertion (pas de ligne où exister), suppression (perdre une information au passage).</li><li>Les contraintes ne sont pas des options : le SGBD <strong>refuse</strong> toute opération qui les viole — c'est ce qui protège la base.</li></ul>"
   },
   {
    "titre": "Interroger : SELECT, FROM, WHERE, tri",
    "duree": "2 h",
    "objectif": "Écrire et vérifier des requêtes d'interrogation : projection (SELECT), sélection (WHERE), tri (ORDER BY), DISTINCT.",
    "surLeSite": [
     "Sections 5–6 (cellules Python exécutables « équivalent SQL »)",
     "TP guidé « TP — Requêtes SQL sur la base du lycée » étapes 1–2",
     "Exercices 1 et 2 (niveau facile)"
    ],
    "enClasse": [
     "0–10 min : réactivation — redessiner le schéma de la base lycée de mémoire",
     "10–35 min : Section 5 — SELECT = colonnes (projection), WHERE = lignes (sélection) ; exécuter la cellule Python équivalente",
     "35–60 min : TP étape 1 sur papier (comme à l'écrit), puis vérification dans DB Browser",
     "60–85 min : ORDER BY et DISTINCT (Section 6 début) + TP étape 2 sur machine",
     "85–110 min : Exercices 1 et 2 en autonomie, en vrai SQL sur la base",
     "110–120 min : institutionnalisation + corrigés poussés"
    ],
    "aPreparer": [
     "DB Browser + lycee.db sur tous les postes (tables eleve et note du TP)",
     "Fiche réponse papier pour l'écriture des requêtes avant exécution"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>On interroge une base avec l'instruction <strong>SELECT</strong>. Deux opérations à bien distinguer : <strong>SELECT</strong> choisit les <em>colonnes</em> — c'est la <strong>projection</strong> — et <strong>WHERE</strong> choisit les <em>lignes</em> — c'est la <strong>sélection</strong>. <code>SELECT *</code> prend toutes les colonnes.</p><p>Exemple déroulé à la main : <em>« le nom et la moyenne des élèves ayant plus de 15 »</em>, sur la table <code>eleve</code> de la base « lycée » :</p><table><tr><th>id</th><th>nom</th><th>id_classe</th><th>moyenne</th></tr><tr><td>1</td><td>Ada</td><td>2</td><td>18.5</td></tr><tr><td>2</td><td>Alan</td><td>2</td><td>16.0</td></tr><tr><td>3</td><td>Grace</td><td>1</td><td>14.5</td></tr><tr><td>4</td><td>Linus</td><td>1</td><td>9.5</td></tr></table><p>On parcourt les lignes une à une : Ada (18.5 &gt; 15 : gardée), Alan (16.0 &gt; 15 : gardée), Grace (14.5 : écartée), Linus (9.5 : écartée). Puis on ne garde que les colonnes <code>nom</code> et <code>moyenne</code>. Résultat : (Ada, 18.5) et (Alan, 16.0).</p><p><strong>🐢 La requête SQL :</strong></p><pre><code>SELECT colonnes      -- ce qu'on veut afficher (projection)\nFROM   table         -- d'où ça vient\nWHERE  condition     -- quelles lignes garder (sélection)</code></pre><p>Sur notre exemple :</p><pre><code>SELECT nom, moyenne\nFROM   eleve\nWHERE  moyenne &gt; 15;\n-- nom  | moyenne\n-- Ada  | 18.5\n-- Alan | 16.0</code></pre><p>On trie le résultat avec <strong>ORDER BY</strong> (croissant par défaut, décroissant avec <code>DESC</code>) et on élimine les doublons avec <strong>DISTINCT</strong> :</p><pre><code>SELECT nom, moyenne FROM eleve ORDER BY moyenne DESC;\nSELECT DISTINCT id_classe FROM eleve;</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>FROM</code> désigne la table interrogée ; <code>WHERE</code> teste chaque ligne et ne garde que celles où la condition est vraie ; <code>SELECT</code> projette ensuite les colonnes demandées ;</li><li>en SQL, les chaînes s'écrivent entre apostrophes simples : <code>WHERE nom = 'Ada'</code> ;</li><li>en Python (une table = une liste de dictionnaires), la même requête est une compréhension de liste :</li></ul><pre><code>eleve = [\n    {\"id\": 1, \"nom\": \"Ada\",   \"id_classe\": 2, \"moyenne\": 18.5},\n    {\"id\": 2, \"nom\": \"Alan\",  \"id_classe\": 2, \"moyenne\": 16.0},\n    {\"id\": 3, \"nom\": \"Grace\", \"id_classe\": 1, \"moyenne\": 14.5},\n    {\"id\": 4, \"nom\": \"Linus\", \"id_classe\": 1, \"moyenne\": 9.5},\n]\n# Équivaut à : SELECT nom, moyenne FROM eleve WHERE moyenne &gt; 15;\nresultat = [(e[\"nom\"], e[\"moyenne\"]) for e in eleve if e[\"moyenne\"] &gt; 15]\nfor ligne in resultat:\n    print(ligne)\n# affiche ('Ada', 18.5)\n# affiche ('Alan', 16.0)</code></pre><p><strong>📋 Trace d'exécution :</strong> la clause <code>WHERE moyenne &gt; 15</code> déroulée ligne par ligne :</p><table><tr><th>nom</th><th>moyenne</th><th>moyenne &gt; 15 ?</th><th>ligne conservée ?</th></tr><tr><td>Ada</td><td>18.5</td><td>vrai</td><td>oui</td></tr><tr><td>Alan</td><td>16.0</td><td>vrai</td><td>oui</td></tr><tr><td>Grace</td><td>14.5</td><td>faux</td><td>non</td></tr><tr><td>Linus</td><td>9.5</td><td>faux</td><td>non</td></tr></table><p><strong>🎯 Défi élève :</strong> écrire <em>« le nom et la moyenne des élèves de la classe 1, triés par moyenne décroissante »</em> :</p><pre><code>SELECT ______, ______\nFROM   ______\nWHERE  id_classe = 1\nORDER BY moyenne ______;</code></pre><p>✅ Réponse :</p><pre><code>SELECT nom, moyenne\nFROM   eleve\nWHERE  id_classe = 1\nORDER BY moyenne DESC;\n-- nom   | moyenne\n-- Grace | 14.5\n-- Linus | 9.5</code></pre><ul><li>Ne pas confondre : <strong>SELECT</strong> = colonnes (projection), <strong>WHERE</strong> = lignes (sélection).</li><li>Sans <code>DISTINCT</code>, le résultat garde les doublons ; sans <code>DESC</code>, le tri est croissant.</li><li>Réflexe de travail : écrire la requête sur papier (comme à l'écrit du bac), puis la vérifier dans DB Browser for SQLite.</li></ul>"
   },
   {
    "titre": "Agréger et croiser : GROUP BY et jointures",
    "duree": "2 h",
    "objectif": "Utiliser COUNT/AVG/MIN/MAX, agréger par paquets avec GROUP BY, croiser deux tables avec JOIN … ON.",
    "surLeSite": [
     "Sections 6–7 (cellules Python exécutables : GROUP BY et double boucle de jointure)",
     "TP guidé « Requêtes SQL sur la base du lycée » étapes 3–4",
     "Exercices 3, 4, 6 et 7 (niveau moyen)"
    ],
    "enClasse": [
     "0–10 min : réactivation — 3 requêtes SELECT/WHERE/ORDER BY à écrire au tableau",
     "10–35 min : Section 6 — fonctions d'agrégat puis GROUP BY « par paquets » ; cellule Python à l'appui",
     "35–55 min : TP étape 4 (agrégation) sur machine, calculs vérifiés à la main",
     "55–85 min : Section 7 — la jointure : ON relie clé étrangère et clé primaire ; démo du produit cartésien si on oublie ON",
     "85–110 min : TP étape 3 + Exercices 3, 4, 6 et 7 en autonomie",
     "110–120 min : institutionnalisation + corrigés poussés"
    ],
    "aPreparer": [
     "Base lycee.db avec la table note (étape 3 du TP) chargée",
     "Requête jointure sans ON préparée pour la démo du produit cartésien"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Les <strong>fonctions d'agrégat</strong> résument un ensemble de lignes en une seule valeur : <code>COUNT</code> (compter), <code>AVG</code> (moyenne), <code>MIN</code>, <code>MAX</code>, <code>SUM</code>. <strong>GROUP BY</strong> applique l'agrégat <em>par paquets</em> : un résultat par groupe. Enfin, une <strong>jointure</strong> (<strong>JOIN … ON</strong>) relie deux tables là où la clé étrangère correspond à la clé primaire : elle reconstitue l'information éclatée entre plusieurs tables.</p><p>Exemple déroulé à la main : <em>« la moyenne des élèves, classe par classe »</em> sur la table <code>eleve</code> de la base « lycée ». On forme les paquets selon <code>id_classe</code> : le paquet de la classe 1 contient Grace (14.5) et Linus (9.5) ; celui de la classe 2 contient Ada (18.5) et Alan (16.0). On calcule l'agrégat dans chaque paquet : (14.5 + 9.5) / 2 = 12.0 pour la classe 1 ; (18.5 + 16.0) / 2 = 17.25 pour la classe 2. Sans <code>GROUP BY</code>, <code>AVG(moyenne)</code> ferait un seul paquet de toute la table : 58.5 / 4 = 14.625.</p><p><strong>🐢 Agréger en SQL :</strong></p><pre><code>SELECT COUNT(*), AVG(moyenne) FROM eleve;  -- 4 élèves, moyenne 14.625\nSELECT id_classe, AVG(moyenne)\nFROM   eleve\nGROUP BY id_classe;</code></pre><table><tr><th>id_classe</th><th>AVG(moyenne)</th></tr><tr><td>1</td><td>12.0</td></tr><tr><td>2</td><td>17.25</td></tr></table><p><strong>🔗 Croiser deux tables : la jointure :</strong></p><p>La moyenne « par <code>id_classe</code> » n'est pas très parlante : on veut le <strong>nom</strong> de la classe, rangé dans l'autre table. La jointure apparie chaque élève à sa classe :</p><pre><code>SELECT eleve.nom, classe.nom\nFROM   eleve\nJOIN   classe ON eleve.id_classe = classe.id;</code></pre><table><tr><th>eleve.nom</th><th>classe.nom</th></tr><tr><td>Ada</td><td>TG1</td></tr><tr><td>Alan</td><td>TG1</td></tr><tr><td>Grace</td><td>1G2</td></tr><tr><td>Linus</td><td>1G2</td></tr></table><p><strong>🔍 Comment ça marche :</strong></p><ul><li>la condition <strong>ON</strong> dit <em>comment</em> apparier les lignes : clé étrangère = clé primaire ; sans ON, on obtient toutes les combinaisons (produit cartésien : 4 × 2 = 8 lignes) ;</li><li>en Python, une jointure est une double boucle avec un test <code>if</code> qui joue le rôle du ON :</li></ul><pre><code>eleve = [\n    {\"nom\": \"Ada\",   \"id_classe\": 2},\n    {\"nom\": \"Alan\",  \"id_classe\": 2},\n    {\"nom\": \"Grace\", \"id_classe\": 1},\n    {\"nom\": \"Linus\", \"id_classe\": 1},\n]\nclasse = [\n    {\"id\": 1, \"nom\": \"1G2\"},\n    {\"id\": 2, \"nom\": \"TG1\"},\n]\nfor e in eleve:\n    for c in classe:\n        if e[\"id_classe\"] == c[\"id\"]:   # la condition ON\n            print(e[\"nom\"], \"-&gt;\", c[\"nom\"])\n# affiche Ada -&gt; TG1\n# affiche Alan -&gt; TG1\n# affiche Grace -&gt; 1G2\n# affiche Linus -&gt; 1G2</code></pre><p><strong>📋 Trace d'exécution :</strong> la jointure déroulée à la main :</p><table><tr><th>eleve.nom</th><th>id_classe</th><th>classe.id apparié</th><th>classe.nom</th></tr><tr><td>Ada</td><td>2</td><td>2</td><td>TG1</td></tr><tr><td>Alan</td><td>2</td><td>2</td><td>TG1</td></tr><tr><td>Grace</td><td>1</td><td>1</td><td>1G2</td></tr><tr><td>Linus</td><td>1</td><td>1</td><td>1G2</td></tr></table><p><strong>🎯 Défi élève :</strong> écrire <em>« la moyenne par classe, avec le nom de la classe »</em> (jointure + agrégat) :</p><pre><code>SELECT classe.nom, ______(eleve.moyenne)\nFROM   eleve\n______ classe ON eleve.id_classe = classe.______\nGROUP BY ______;</code></pre><p>✅ Réponse :</p><pre><code>SELECT classe.nom, AVG(eleve.moyenne)\nFROM   eleve\nJOIN   classe ON eleve.id_classe = classe.id\nGROUP BY classe.nom;\n-- classe.nom | AVG(eleve.moyenne)\n-- 1G2        | 12.0\n-- TG1        | 17.25</code></pre><ul><li>La condition <strong>ON</strong> relie clé étrangère et clé primaire — l'oublier produit le produit cartésien.</li><li><code>COUNT(*)</code> compte les lignes ; <code>AVG</code>, <code>MIN</code>, <code>MAX</code>, <code>SUM</code> calculent sur une colonne.</li><li><strong>GROUP BY</strong> = un résultat par paquet ; dans le SELECT, tout attribut hors du GROUP BY doit passer par une fonction d'agrégat.</li></ul>"
   },
   {
    "titre": "Modifier la base : INSERT, UPDATE, DELETE",
    "duree": "2 h",
    "objectif": "Écrire des requêtes de mise à jour en mesurant le danger du WHERE oublié ; consolider tout le SQL du thème.",
    "surLeSite": [
     "Sections 8–9 (« Modifier la base », « Mémo SQL »)",
     "TP guidé « Requêtes SQL sur la base du lycée » étape 5",
     "Exercices 5 et 8 (niveau défi) + défi « Mission : le tableau d'honneur »"
    ],
    "enClasse": [
     "0–10 min : réactivation — une jointure à écrire au tableau",
     "10–35 min : Section 8 — INSERT/UPDATE/DELETE ; démo live d'un UPDATE sans WHERE sur une copie jetable de la base (toute la table écrasée)",
     "35–65 min : TP étape 5 sur machine, dont le refus du SGBD pour la suppression d'un élève encore référencé",
     "65–90 min : Exercices 5 et 8, puis défi « tableau d'honneur » (requête complète WHERE + ORDER BY)",
     "90–110 min : Section 9 — construction collective du mémo SQL, fiche de synthèse personnelle",
     "110–120 min : écriture libre + corrigés poussés"
    ],
    "aPreparer": [
     "Copie jetable de lycee.db pour la démo destructive (UPDATE sans WHERE)",
     "Fiche mémo SQL vierge à compléter (recto-verso)"
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>SQL ne sert pas qu'à lire une base : c'est aussi un langage de <strong>manipulation</strong>, qui modifie les données. Trois verbes suffisent : <strong>INSERT</strong> ajoute une ligne, <strong>UPDATE</strong> modifie des lignes existantes, <strong>DELETE</strong> en supprime. Déroulons la situation à la main sur la table <code>eleve</code> de la base « lycée » :</p><table><tr><th>id</th><th>nom</th><th>id_classe</th><th>moyenne</th></tr><tr><td>1</td><td>Ada</td><td>2</td><td>18.5</td></tr><tr><td>2</td><td>Alan</td><td>2</td><td>16.0</td></tr><tr><td>3</td><td>Grace</td><td>1</td><td>14.5</td></tr><tr><td>4</td><td>Linus</td><td>1</td><td>9.5</td></tr></table><p>Margaret arrive au lycée : il faut <em>ajouter</em> une cinquième ligne complète. On découvre ensuite que la moyenne de Linus était mal saisie (10.5 et non 9.5) : il faut <em>corriger une valeur</em> dans sa ligne, sans toucher aux autres. Enfin, on veut <em>retirer</em> les élèves de moyenne inférieure à 10 : il faut <em>supprimer des lignes entières</em>, choisies par une condition. Chaque ordre doit donc préciser : la table visée, les valeurs en jeu, et surtout <strong>quelles lignes</strong> sont concernées.</p><p><strong>🛠️ La manipulation pas à pas :</strong></p><p><strong>Ajouter</strong> une ligne : on nomme la table, les attributs, puis les valeurs <em>dans le même ordre</em> :</p><pre><code>INSERT INTO eleve (id, nom, id_classe, moyenne)\nVALUES (5, 'Margaret', 2, 17.0);</code></pre><p><strong>Modifier</strong> des lignes existantes : <code>SET</code> dit ce qui change, <code>WHERE</code> dit où :</p><pre><code>UPDATE eleve SET moyenne = 10.5 WHERE nom = 'Linus';</code></pre><p><strong>Supprimer</strong> des lignes entières :</p><pre><code>DELETE FROM eleve WHERE moyenne &lt; 10;</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>INSERT</code> crée une ligne complète ; en SQL, les chaînes s'écrivent entre apostrophes simples : <code>'Margaret'</code>.</li><li><code>UPDATE</code> et <code>DELETE</code> ne s'appliquent qu'aux lignes qui vérifient la condition <code>WHERE</code> ; sans <code>WHERE</code>, ils s'appliquent à <strong>toute la table</strong>.</li><li>Le SGBD veille : il refuserait d'insérer un élève dont <code>id_classe</code> ne correspond à aucune classe, ou de supprimer un élève encore référencé par des notes (contrainte d'intégrité référentielle).</li></ul><p><strong>📋 Trace d'exécution :</strong> suivons l'état de la table après chaque requête :</p><table><tr><th>Requête exécutée</th><th>Effet sur la table</th><th>Lignes</th></tr><tr><td>— (départ)</td><td>Ada, Alan, Grace, Linus</td><td>4</td></tr><tr><td>INSERT … 'Margaret' …</td><td>la ligne (5, Margaret, 2, 17.0) est ajoutée</td><td>5</td></tr><tr><td>UPDATE … WHERE nom = 'Linus'</td><td>la moyenne de Linus passe de 9.5 à 10.5</td><td>5</td></tr><tr><td>DELETE … WHERE moyenne &lt; 10</td><td>aucune ligne supprimée : plus personne sous 10</td><td>5</td></tr></table><p>L'ordre des requêtes compte : exécuté <em>avant</em> l'UPDATE, le DELETE aurait supprimé Linus.</p><p><strong>🎯 Défi élève :</strong> compléter les trois requêtes (Zoé, élève n°6, arrive dans la classe 2 avec 12.0 de moyenne ; la moyenne d'Alan était en réalité 16.5) :</p><pre><code>______ INTO eleve (id, nom, id_classe, moyenne)\nVALUES (6, ______, 2, 12.0);\n\nUPDATE eleve ______ moyenne = 16.5 WHERE nom = 'Alan';\n\nDELETE ______ eleve ______ moyenne &lt; 10;</code></pre><p>✅ Réponse :</p><pre><code>INSERT INTO eleve (id, nom, id_classe, moyenne)\nVALUES (6, 'Zoé', 2, 12.0);\n\nUPDATE eleve SET moyenne = 16.5 WHERE nom = 'Alan';\n\nDELETE FROM eleve WHERE moyenne &lt; 10;</code></pre><ul><li>Erreur classique et dangereuse : un <code>UPDATE</code> ou un <code>DELETE</code> <strong>sans WHERE</strong> touche toute la table — relire deux fois la clause WHERE avant d'exécuter.</li><li>Mémo : <strong>SELECT</strong> lit ; <strong>INSERT</strong> ajoute ; <strong>UPDATE</strong> modifie ; <strong>DELETE</strong> supprime.</li><li>Vocabulaire : SELECT relève de l'<em>interrogation</em> ; INSERT, UPDATE et DELETE relèvent de la <em>manipulation</em> (mise à jour) des données.</li></ul>"
   },
   {
    "titre": "Projet îlots « médiathèque » (1/2) : schéma et requêtes",
    "duree": "2 h",
    "objectif": "Concevoir en îlot un schéma relationnel sain (LIVRE, EMPRUNT) et écrire les requêtes SQL du documentaliste.",
    "surLeSite": [
     "Projet « Mini-base de données de la médiathèque », phases 1 à 3",
     "Sections 3–4 en appui (clés, anomalies)"
    ],
    "enClasse": [
     "0–15 min : lancement — situation du cahier d'emprunts, constitution des îlots, rappel des anomalies d'une table unique",
     "15–45 min : phases 1–2 — conception du schéma LIVRE/EMPRUNT sur papier, justification des clés primaires et étrangère",
     "45–90 min : phase 3 — écrire les requêtes du documentaliste (sélection, projection, jointure, COUNT) puis les vérifier dans DB Browser",
     "90–110 min : mise en commun inter-îlots — comparer les schémas, trancher les désaccords",
     "110–120 min : bilan intermédiaire, consignes pour la séance 2"
    ],
    "aPreparer": [
     "Base mediatheque.db pré-créée dans DB Browser (tables LIVRE et EMPRUNT vides ou remplies)",
     "Fiche projet imprimée par îlot (situation + questions du documentaliste)"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li>Le cahier d'emprunts de la médiathèque rangé dans une <strong>table unique</strong> serait un schéma « malade » : titre et auteur recopiés à chaque emprunt, donc <strong>redondance</strong> et anomalies de mise à jour, d'insertion et de suppression.</li><li>Schéma relationnel retenu : <code>LIVRE(id_livre, titre, auteur, annee)</code> et <code>EMPRUNT(id_emprunt, #id_livre, emprunteur, retour_prevu)</code> — une table par type d'objet.</li><li>Chaque <strong>clé primaire</strong> identifie une ligne de façon unique ; la <strong>clé étrangère</strong> <code>id_livre</code> relie chaque emprunt à son livre et ne peut référencer qu'un livre existant (intégrité référentielle).</li><li>Les questions du documentaliste se traduisent en SQL : sélection (<code>WHERE</code>), projection (<code>SELECT</code>), jointure (<code>JOIN … ON</code>), comptage (<code>COUNT</code>).</li><li>Toute requête écrite sur papier est ensuite <strong>vérifiée</strong> dans DB Browser for SQLite.</li></ul><p><strong>❓ Question type corrigée :</strong> « Qui a emprunté quel titre ? » sur les deux tables de la médiathèque :</p><table><tr><th>id_livre</th><th>titre</th><th>auteur</th><th>annee</th></tr><tr><td>1</td><td>Dune</td><td>Herbert</td><td>1965</td></tr><tr><td>2</td><td>Fondation</td><td>Asimov</td><td>1951</td></tr><tr><td>3</td><td>Le Guide du voyageur</td><td>Adams</td><td>1979</td></tr></table><table><tr><th>id_emprunt</th><th>id_livre</th><th>emprunteur</th><th>retour_prevu</th></tr><tr><td>1</td><td>2</td><td>Ada</td><td>2026-10-05</td></tr><tr><td>2</td><td>1</td><td>Sam</td><td>2026-10-12</td></tr></table><pre><code>SELECT emprunt.emprunteur, livre.titre\nFROM   emprunt\nJOIN   livre ON emprunt.id_livre = livre.id_livre;</code></pre><p>La condition <code>ON</code> apparie chaque emprunt au livre dont la clé primaire vaut sa clé étrangère : l'emprunt d'Ada porte <code>id_livre = 2</code>, donc « Fondation » ; celui de Sam porte <code>id_livre = 1</code>, donc « Dune ». Résultat :</p><table><tr><th>emprunteur</th><th>titre</th></tr><tr><td>Ada</td><td>Fondation</td></tr><tr><td>Sam</td><td>Dune</td></tr></table>"
   },
   {
    "titre": "Projet îlots « médiathèque » (2/2) : mini-moteur SQL en Python",
    "duree": "2 h",
    "objectif": "Programmer sélection, projection et jointure en Python pur et retrouver les résultats des requêtes SQL (les asserts font foi).",
    "surLeSite": [
     "Projet « Mini-base de données de la médiathèque », phases 4 à 6 (code fourni)",
     "Sections 5 et 7 (cellules Python « équivalent SQL ») en appui"
    ],
    "enClasse": [
     "0–10 min : réactivation — SQL et Python côte à côte : une sélection = une compréhension de liste",
     "10–60 min : phase 4 — coder <strong>selection</strong>, <strong>projection</strong>, <strong>jointure</strong> sur Thonny ou Capytale (tables = listes de dictionnaires)",
     "60–85 min : phase 5 — tests : chaque requête papier doit donner le même résultat que le mini-moteur (asserts)",
     "85–110 min : phase 6 — présentations d'îlots : une requête SQL et « sa traduction » Python côte à côte",
     "110–120 min : institutionnalisation — ce qu'apporte un vrai SGBD (contraintes, persistance, concurrence) ; corrigés poussés"
    ],
    "aPreparer": [
     "Thonny ou Capytale opérationnels (l'épreuve pratique se passe sur un vrai Python)",
     "Squelette de code du mini-moteur à distribuer (tables livres/emprunts pré-saisies)"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li>En Python, une table est une <strong>liste de dictionnaires</strong> : une ligne = un dictionnaire, une colonne = une clé.</li><li>Correspondances du mini-moteur : <code>selection(table, condition)</code> ↔ <code>WHERE</code> ; <code>projection(table, colonnes)</code> ↔ <code>SELECT</code> ; <code>jointure(t1, t2, cle)</code> ↔ <code>JOIN … ON</code> (double boucle + test d'égalité sur la clé).</li><li>Les <code>assert</code> font foi : chaque requête SQL écrite sur papier doit donner le même résultat que le mini-moteur.</li><li>Un vrai SGBD apporte ce que le mini-moteur n'a pas : contraintes d'intégrité, persistance des données, accès concurrents, efficacité.</li></ul><p><strong>❓ Question type corrigée :</strong> traduire en Python la requête <code>SELECT titre FROM livre WHERE annee &lt; 1970;</code> à l'aide du mini-moteur.</p><pre><code>livres = [\n    {\"id_livre\": 1, \"titre\": \"Dune\", \"auteur\": \"Herbert\", \"annee\": 1965},\n    {\"id_livre\": 2, \"titre\": \"Fondation\", \"auteur\": \"Asimov\", \"annee\": 1951},\n    {\"id_livre\": 3, \"titre\": \"Le Guide du voyageur\", \"auteur\": \"Adams\", \"annee\": 1979},\n]\n\ndef selection(table, condition):\n    return [ligne for ligne in table if condition(ligne)]\n\ndef projection(table, colonnes):\n    return [{c: ligne[c] for c in colonnes} for ligne in table]\n\n# WHERE annee &lt; 1970, puis SELECT titre :\nanciens = projection(selection(livres, lambda l: l[\"annee\"] &lt; 1970), [\"titre\"])\nprint(anciens)\n# affiche [{'titre': 'Dune'}, {'titre': 'Fondation'}]</code></pre><p>La sélection garde « Dune » (1965) et « Fondation » (1951) et écarte le livre de 1979 ; la projection ne conserve que la colonne <code>titre</code>. C'est exactement le résultat de la requête SQL, vérifiable par un <code>assert</code>.</p>"
   },
   {
    "titre": "Entraînement épreuves du bac : écrit + pratique",
    "duree": "2 h",
    "objectif": "S'entraîner dans les conditions réelles : exercice SQL type bac au stylo, puis exercice type épreuve pratique avec asserts sur machine.",
    "surLeSite": [
     "Évaluations : Bac blanc n°1 (écrit type bac « arbres · SQL · graphes »), exercice SQL",
     "Fiches méthode « Réussir l'épreuve écrite » et « Réussir l'épreuve pratique »"
    ],
    "enClasse": [
     "0–10 min : lecture guidée des deux fiches méthode — gestion du temps, SQL en majuscules, « lire les asserts d'abord »",
     "10–55 min : sur table — l'exercice SQL du Bac blanc n°1 en conditions réelles (stylo, sans document, temps limité)",
     "55–70 min : correction commentée « à la façon du correcteur » : points faciles à ne jamais laisser vides",
     "70–110 min : sur machine — 1 exercice type épreuve pratique avec asserts (sujet de la banque officielle sur dictionnaires/tables) sous Thonny",
     "110–120 min : bilan des réflexes (nom exact de la fonction, tester au fur et à mesure) ; corrigés poussés"
    ],
    "aPreparer": [
     "Sujets imprimés de l'exercice SQL (un par élève)",
     "Un sujet SQL/tables de la banque officielle d'épreuve pratique, prêt sur les postes",
     "Postes avec vrai Python (Thonny) — pas l'éditeur du navigateur"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li>Épreuve écrite : mots-clés SQL en <strong>MAJUSCULES</strong>, chaînes entre <strong>apostrophes simples</strong> (<code>'NSI'</code>), requête terminée par un <strong>point-virgule</strong> ; gérer son temps et ne jamais laisser vides les points faciles (schéma, SELECT simple).</li><li>Jointure type bac : <code>JOIN … ON clé_étrangère = clé_primaire</code>, en préfixant les attributs par leur table (<code>eleve.nom</code>, <code>note.note</code>) pour lever toute ambiguïté.</li><li>Épreuve pratique : lire les <code>assert</code> <strong>d'abord</strong> — ils donnent le nom exact de la fonction, ses paramètres et les résultats attendus.</li><li>Sur machine, tester au fur et à mesure, pas seulement à la fin.</li></ul><p><strong>❓ Question type corrigée</strong> (écrit) : on donne le schéma <code>eleve(id_eleve, nom, classe)</code> et <code>note(id_note, #id_eleve, matiere, note)</code>. Écrire la requête qui affiche le nom de chaque élève et sa note de NSI.</p><pre><code>SELECT eleve.nom, note.note\nFROM   eleve\nJOIN   note ON note.id_eleve = eleve.id_eleve\nWHERE  note.matiere = 'NSI';</code></pre><p>Lecture « à la façon du correcteur » : la condition <code>ON</code> relie la clé étrangère <code>note.id_eleve</code> à la clé primaire <code>eleve.id_eleve</code> ; le <code>WHERE</code> filtre ensuite les lignes de la matière NSI ; les attributs sont préfixés car la colonne <code>note</code> porte le même nom que sa table. Sur la base du TP du lycée, résultat attendu : Ada 17, Lou 9, Eve 18, Sam 11 (4 lignes).</p>"
   },
   {
    "titre": "QCM bilan, diagnostic « Ma classe » et remédiation",
    "duree": "2 h",
    "objectif": "Mesurer les acquis du thème question par question et remédier par groupes de besoin avant de quitter le SQL.",
    "surLeSite": [
     "QCM (10 questions)",
     "Suivi « Ma classe » : matrice par thème + diagnostic par question",
     "Section 9 (Mémo SQL) ; exercices non traités en réserve"
    ],
    "enClasse": [
     "0–25 min : QCM individuel des 10 questions, sans document",
     "25–45 min : diagnostic « Ma classe » projeté — repérer les questions massivement échouées (jointures ? WHERE ? anomalies ?)",
     "45–95 min : remédiation par groupes de besoin — reprise ciblée des étapes 3 et 5 du TP, exercices restants, défi pour les plus rapides",
     "95–110 min : mémo SQL finalisé + carte mentale du thème (clés → intégrité → requêtes)",
     "110–120 min : écriture libre bilan (« ce que je sais faire / ce qui me résiste ») ; corrigés poussés"
    ],
    "aPreparer": [
     "Comptes élèves actifs pour la remontée du QCM dans « Ma classe »",
     "Copies du mémo SQL pour le classeur de révision bac"
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li><strong>Modèle relationnel</strong> : table = relation, colonne = attribut (avec son domaine), ligne = enregistrement ; le schéma décrit la structure, à ne pas confondre avec le contenu. Écriture normalisée : <code>eleve(id, nom, #id_classe, moyenne)</code>, clé primaire soulignée, clé étrangère préfixée par <code>#</code>.</li><li><strong>Clés et intégrité</strong> : la clé primaire identifie chaque ligne de façon unique (ni dupliquée, ni vide : contrainte d'entité) ; la clé étrangère doit référencer une clé primaire existante (intégrité référentielle) ; le domaine limite les valeurs acceptées. La redondance signale un schéma « malade », à découper en plusieurs tables reliées par des clés.</li><li><strong>Interroger</strong> : <code>SELECT</code> choisit les colonnes (projection), <code>WHERE</code> les lignes (sélection) ; <code>ORDER BY</code> trie, <code>DISTINCT</code> élimine les doublons ; agrégats <code>COUNT/AVG/MIN/MAX/SUM</code>, par paquets avec <code>GROUP BY</code> ; jointure <code>JOIN … ON</code> clé étrangère = clé primaire.</li><li><strong>Modifier</strong> : <code>INSERT INTO … VALUES</code>, <code>UPDATE … SET … WHERE</code>, <code>DELETE FROM … WHERE</code> — jamais sans WHERE, sinon toute la table est touchée.</li><li><strong>SGBD</strong> : persistance, cohérence, accès concurrents, sécurité (idée ACID) — ce qu'un simple fichier ne garantit pas.</li></ul><p><strong>📖 Question type corrigée</strong> (extraite du QCM) : sur la table <code>eleve</code> de la base « lycée », combien de lignes renvoie la requête suivante ?</p><pre><code>SELECT nom FROM eleve WHERE moyenne &gt;= 14.5;</code></pre><p>On déroule la condition WHERE à la main, ligne par ligne :</p><table><tr><th>nom</th><th>moyenne</th><th>moyenne &gt;= 14.5 ?</th></tr><tr><td>Ada</td><td>18.5</td><td>oui — ligne gardée</td></tr><tr><td>Alan</td><td>16.0</td><td>oui — ligne gardée</td></tr><tr><td>Grace</td><td>14.5</td><td>oui — l'égalité passe le filtre</td></tr><tr><td>Linus</td><td>9.5</td><td>non — ligne éliminée</td></tr></table><p><strong>✅ Réponse :</strong> 3 lignes (Ada, Alan, Grace). Le piège classique est l'égalité : <code>&gt;=</code> inclut Grace (14.5), alors que <code>&gt;</code> l'aurait exclue. Toujours vérifier si la borne est incluse ou non avant de compter.</p><ul><li>Après le diagnostic « Ma classe », chacun retravaille en groupe de besoin la notion échouée (jointures, WHERE, anomalies…) avec les étapes 3 et 5 du TP et les exercices restants.</li><li>Le mémo SQL finalisé (section 9) rejoint le classeur de révision : c'est la fiche à relire avant l'épreuve écrite du bac.</li></ul>"
   }
  ]
 },
 "term-archi-reseaux": {
  "heures": "18 h (9 séances de 2 h — période 5, S19–S21)",
  "resume": "Sous le code, une machine et un réseau : SoC, système d'exploitation (processus, ordonnancement, interblocage), commandes système, acheminement par paquets, routage RIP/OSPF et chiffrement symétrique/asymétrique. Thème très présent à l'écrit du bac (exercice croisé processus/réseaux) ; la partie chiffrement fournit de bons exercices Python type EP.",
  "seances": [
   {
    "titre": "Séance 1 — Le SoC et le rôle de l'OS",
    "duree": "2 h",
    "objectif": "Identifier les blocs d'un SoC (CPU, GPU, mémoire, modem radio, E/S) et formuler le rôle de l'OS : gérer et partager les ressources.",
    "surLeSite": [
     "Sections 1–2",
     "Exercice 1 (facile, SoC)",
     "Ressource DIU : PDF « Introduction aux systèmes d'exploitation »"
    ],
    "enClasse": [
     "0–15 min : réactivation Première — architecture de von Neumann, composants d'un PC (au tableau, en îlots)",
     "15–45 min : Section 1 — schéma du SoC ; chaque îlot ouvre un smartphone virtuel : quel bloc fait quoi ?",
     "45–70 min : Exercice 1 sur table — associer fonctions et composants, avantage/limite du SoC",
     "70–100 min : Section 2 — l'OS chef d'orchestre ; débat : que se passe-t-il quand 2 applis veulent le processeur ?",
     "100–120 min : institutionnalisation + écriture libre (« un SoC, c'est… ») ; corrigé de l'exercice 1 poussé"
    ],
    "aPreparer": [
     "Vidéoprojecteur (schéma SoC de la section 1)",
     "Le PDF DIU « systèmes » en lien sur l'ENT"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>système sur puce</strong> (<em>SoC</em>, <strong>System on a Chip</strong>) regroupe sur une seule puce de quelques mm² les principaux composants d'un ordinateur : <strong>CPU</strong> (exécute les instructions), <strong>GPU</strong> (calcule l'affichage), <strong>mémoire</strong> (RAM et caches), <strong>modem radio</strong> (4G/5G, Wi-Fi, Bluetooth) et <strong>contrôleurs d'entrées/sorties</strong>. Le <strong>système d'exploitation</strong> (OS) est le logiciel placé entre le matériel et les applications : il <strong>gère et partage les ressources</strong> (processus, mémoire, fichiers, périphériques) entre tous les programmes qui tournent en même temps.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>soc = {\"CPU\": \"exécute les instructions des programmes\",\n       \"GPU\": \"calcule l'affichage\",\n       \"Mémoire\": \"stocke les données et programmes en cours\"}\nfor bloc in soc:\n    print(bloc, \":\", soc[bloc])\n# affiche CPU : exécute les instructions des programmes\n#         GPU : calcule l'affichage\n#         Mémoire : stocke les données et programmes en cours</code></pre><ul><li>Avantages du SoC : <strong>compacité</strong> et <strong>consommation réduite</strong> ; limites : <strong>non évolutif</strong> (tout est gravé) et dissipation thermique délicate (<em>throttling</em>).</li><li>Un SoC reste une machine de <strong>von Neumann</strong> : processeur + mémoire + entrées/sorties, programme stocké en mémoire.</li><li>L'OS <strong>abstrait</strong> le matériel : on écrit <code>open(\"notes.txt\")</code> sans savoir où le fichier est physiquement stocké.</li></ul>"
   },
   {
    "titre": "Séance 2 — Processus et ordonnancement",
    "duree": "2 h",
    "objectif": "Décrire les états d'un processus (prêt/élu/bloqué) et simuler un ordonnanceur round-robin.",
    "surLeSite": [
     "Section 3 (cellule exécutable : tourniquet avec deque)",
     "Exercice 5 (moyen, simulation round-robin)"
    ],
    "enClasse": [
     "0–15 min : réactivation — différence programme (fichier) / processus (exécution) ; erreur classique du site",
     "15–40 min : Section 3 — les 3 états au tableau ; jeu de rôle : 4 élèves « processus », le prof « ordonnanceur »",
     "40–75 min : cellule exécutable de la section 3 sur Basthon, puis Exercice 5 : dérouler le tourniquet {P1:4, P2:2} à la main AVANT d'exécuter",
     "75–105 min : variantes en binômes : changer le quantum, 3 processus ; qui finit en premier et pourquoi ?",
     "105–120 min : institutionnalisation (chronologie type bac) ; corrigé poussé"
    ],
    "aPreparer": [
     "Salle info ou Basthon/Capytale (1 poste pour 2)"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>programme</strong> est un fichier sur le disque ; un <strong>processus</strong> est ce programme <em>en train de s'exécuter</em>. Chaque processus reçoit un numéro unique, son <strong>PID</strong>, et est créé par un processus <strong>parent</strong> (dont il connaît le <strong>PPID</strong>). Un processus passe par trois états : <strong>prêt</strong> (il attend son tour), <strong>élu</strong> (il s'exécute), <strong>bloqué</strong> (il attend une entrée/sortie). L'<strong>ordonnanceur</strong> (<em>scheduler</em>) de l'OS partage le processeur ; avec le <strong>tourniquet</strong> (<em>round-robin</em>), chaque processus reçoit une tranche de temps fixe, le <strong>quantum</strong>, puis retourne en fin de file.</p><pre><code>from collections import deque\nfile = deque([...])   # file d'attente des processus prêts\nfile.popleft()        # défile le processus en tête\nfile.append(...)      # enfile en queue (pas fini : il attendra son tour)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>from collections import deque\nfile = deque([(\"P1\", 4), (\"P2\", 2)])   # quantum = 2\nhorloge = 0\nwhile file:\n    nom, restant = file.popleft()\n    execute = min(2, restant)\n    horloge, restant = horloge + execute, restant - execute\n    print(f\"t={horloge} : {nom}\", \"TERMINÉ\" if restant == 0 else \"-&gt; remis en file\")\n    if restant &gt; 0:\n        file.append((nom, restant))\n# affiche t=2 : P1 -&gt; remis en file\n#         t=4 : P2 TERMINÉ\n#         t=6 : P1 TERMINÉ</code></pre><ul><li>Erreur classique : confondre <strong>programme</strong> (fichier) et <strong>processus</strong> (exécution) — un même programme peut donner plusieurs processus.</li><li>Quantum écoulé mais calcul non terminé : le processus repasse à l'état <strong>prêt</strong> et retourne <strong>en fin de file</strong>.</li><li>Sous Linux, <code>ps -ef</code> liste les processus (PID, PPID) et <code>pstree</code> dessine l'<strong>arbre</strong> des processus.</li></ul>"
   },
   {
    "titre": "Séance 3 — Interblocage et commandes système",
    "duree": "2 h",
    "objectif": "Identifier un interblocage et savoir le casser ; utiliser quelques commandes de gestion des processus et fichiers.",
    "surLeSite": [
     "Sections 4–5",
     "Exercice 7 (facile, deadlock)",
     "Débranché : « Le dîner des philosophes » (30 min)"
    ],
    "enClasse": [
     "0–30 min : activité débranchée « dîner des philosophes » — 5 élèves, 5 stylos ; vivre le blocage puis chercher la règle qui débloque",
     "30–50 min : Section 4 — formaliser : attente circulaire, ordre d'acquisition des ressources ; Exercice 7 à l'oral",
     "50–90 min : Section 5 sur machine — terminal réel : ps, kill, ls, cd, chmod… chaque îlot tient un « carnet de commandes »",
     "90–110 min : mini-défi : retrouver le PID d'un processus et l'arrêter proprement",
     "110–120 min : écriture libre (« un interblocage, c'est… ») ; corrigés poussés"
    ],
    "aPreparer": [
     "5 stylos + disposition en cercle pour le débranché",
     "Postes avec accès à un terminal (Linux ou WSL/PowerShell)"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>interblocage</strong> (<em>deadlock</em>) survient quand des processus s'attendent mutuellement, chacun détenant une ressource que l'autre demande : c'est une <strong>attente circulaire</strong>, plus personne n'avance. Quatre conditions doivent être réunies (exclusion mutuelle, détention + attente, pas de réquisition, attente circulaire) ; en <strong>casser une seule</strong> suffit à l'éviter, par exemple en imposant un <strong>ordre d'acquisition</strong> des ressources.</p><pre><code>ls / cd / pwd   # lister un dossier / changer de dossier / afficher le dossier courant\nps              # lister les processus en cours (avec leur PID)\ntop             # voir en direct les processus et leur consommation\nkill pid        # terminer le processus de numéro pid\nchmod           # modifier les droits (lecture/écriture/exécution) d'un fichier\ncat / mkdir / rm  # afficher un fichier / créer un dossier / supprimer</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>detient = {\"A\": \"fichier 1\", \"B\": \"fichier 2\"}\nattend  = {\"A\": \"fichier 2\", \"B\": \"fichier 1\"}\nfor p in detient:\n    print(p, \"détient le\", detient[p], \"et attend le\", attend[p])\nprint(\"Attente circulaire : A attend B, qui attend A -&gt; interblocage\")\n# affiche A détient le fichier 1 et attend le fichier 2\n#         B détient le fichier 2 et attend le fichier 1\n#         Attente circulaire : A attend B, qui attend A -&gt; interblocage</code></pre><ul><li><strong>Dîner des philosophes</strong> (Dijkstra) : si tous saisissent leur fourchette gauche en même temps, personne ne mange ; la règle « prendre d'abord la fourchette de plus petit numéro » supprime le blocage.</li><li><code>kill</code> s'utilise avec le <strong>PID</strong> trouvé grâce à <code>ps</code>.</li><li>Ces commandes s'exécutent dans un <strong>vrai terminal</strong> (Unix/Linux), pas dans l'éditeur Python.</li></ul>"
   },
   {
    "titre": "Séance 4 — Les réseaux : communiquer par paquets",
    "duree": "2 h",
    "objectif": "Décrire la commutation de paquets et l'encapsulation TCP/IP, en réinvestissant les acquis de Première.",
    "surLeSite": [
     "Section 6",
     "Ressource DIU : fiche « Repères réseaux » (TCP/IP, DNS, masques, routage)"
    ],
    "enClasse": [
     "0–20 min : réactivation Première — adresses IP, protocole TCP/IP, client/serveur (quiz oral rapide)",
     "20–50 min : Section 6 — pourquoi découper en paquets ? Activité : envoyer une « lettre » découpée en 4 morceaux qui prennent des chemins différents",
     "50–80 min : lecture guidée de la fiche « Repères réseaux » en îlots : chaque îlot restitue une notion (DNS, masque, passerelle…)",
     "80–110 min : trace écrite collective — schéma de l'encapsulation au tableau, recopié et annoté",
     "110–120 min : institutionnalisation + annonce du routage (séance 5)"
    ],
    "aPreparer": [
     "Fiche « Repères réseaux » projetable",
     "Enveloppes/papiers pour l'activité paquets"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Sur Internet, un message n'est <strong>pas</strong> envoyé d'un bloc : il est découpé en petits <strong>paquets</strong> qui voyagent <strong>indépendamment</strong>, puis sont réassemblés à l'arrivée. C'est la <strong>commutation de paquets</strong>. Chaque paquet porte l'<strong>adresse IP</strong> de destination, comme une enveloppe porte une adresse postale. Les données sont <strong>encapsulées</strong> en couches (modèle <strong>TCP/IP</strong>) : l'application produit le contenu, <strong>TCP</strong> le découpe et numérote les paquets, <strong>IP</strong> les adresse, la couche physique les transporte.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>message = \"RENDEZ-VOUS A MIDI\"\ntaille = 5\npaquets = [message[i:i+taille] for i in range(0, len(message), taille)]\nprint(paquets)\nprint(\"\".join(paquets) == message)\n# affiche ['RENDE', 'Z-VOU', 'S A M', 'IDI']\n#         True</code></pre><ul><li>Si un câble tombe, les paquets prennent un <strong>autre chemin</strong> ; plusieurs communications partagent les mêmes liens.</li><li><strong>TCP numérote</strong> les paquets : à l'arrivée on les remet dans l'ordre et on redemande ceux qui manquent.</li><li>Repère historique : <strong>Cerf et Kahn</strong> (TCP/IP, années 1970) ont permis l'interconnexion de réseaux différents — l'« inter-net ».</li></ul>"
   },
   {
    "titre": "Séance 5 — Le routage : RIP contre OSPF",
    "duree": "2 h",
    "objectif": "Remplir une table de routage et comparer RIP (nombre de sauts) et OSPF (coût des liens, via Dijkstra).",
    "surLeSite": [
     "Section 7",
     "Exercice 2 (moyen, table de routage R1→R5)"
    ],
    "enClasse": [
     "0–15 min : réactivation — le réseau à 5 routeurs de la section 7 projeté ; lien avec Dijkstra vu au thème algorithmique",
     "15–45 min : Section 7 — RIP compte les sauts, OSPF somme les coûts : dérouler les deux sur le même graphe au tableau",
     "45–80 min : Exercice 2 sur table en îlots : table de routage de R1, justification saut par saut",
     "80–105 min : question type bac au tableau : panne d'une liaison → recalcul des routes ; rédiger la justification en 2 phrases",
     "105–120 min : institutionnalisation (RIP ∝ sauts, OSPF ∝ 1/débit) ; corrigé poussé"
    ],
    "aPreparer": [
     "Graphe du réseau imprimé (1 par îlot)",
     "Copies : question de routage rédigée à ramasser"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Entre l'expéditeur et le destinataire, les paquets traversent des <strong>routeurs</strong>. Chaque routeur possède une <strong>table de routage</strong> qui indique, pour chaque destination, vers quel voisin (<strong>prochain saut</strong>) envoyer le paquet. Ces tables sont construites par des <strong>protocoles de routage</strong> : <strong>RIP</strong> (vecteur de distance) choisit le chemin avec le <strong>moins de sauts</strong> ; <strong>OSPF</strong> (état de liens) additionne les <strong>coûts</strong> des liaisons (coût ∝ 1/débit) et calcule le plus court chemin avec l'algorithme de <strong>Dijkstra</strong>.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>sauts = {\"R1-R2-R5\": 2, \"R1-R3-R4-R5\": 3}                # métrique RIP\ncouts = {\"R1-R2-R5\": 10 + 10, \"R1-R3-R4-R5\": 1 + 1 + 1}  # métrique OSPF\nprint(\"RIP choisit  :\", min(sauts, key=sauts.get), \"-\", min(sauts.values()), \"sauts\")\nprint(\"OSPF choisit :\", min(couts, key=couts.get), \"- coût\", min(couts.values()))\n# affiche RIP choisit  : R1-R2-R5 - 2 sauts\n#         OSPF choisit : R1-R3-R4-R5 - coût 3</code></pre><ul><li>Sur le réseau à 5 routeurs de la section 7, RIP emprunte les liaisons <strong>lentes</strong> (R1→R2→R5, 2 sauts) alors qu'OSPF choisit R1→R3→R4→R5 : un saut de plus, mais dix fois plus rapide.</li><li>Dans la table de routage de R1 pour la destination R5 : prochain saut = <strong>R2</strong> avec RIP, prochain saut = <strong>R3</strong> avec OSPF.</li><li>En cas de panne d'une liaison, les routeurs <strong>recalculent</strong> les routes : le routage est dynamique et robuste.</li></ul>"
   },
   {
    "titre": "Séance 6 — Chiffrement symétrique : César et XOR",
    "duree": "2 h",
    "objectif": "Programmer un chiffrement symétrique (César, XOR) et comprendre le problème de l'échange de clé.",
    "surLeSite": [
     "Section 8 (cellule exécutable : code de César)",
     "Exercices 3 (texte à trou César), 4 (déchiffrer PHVVDJH) et 6 (XOR)"
    ],
    "enClasse": [
     "0–15 min : réactivation — codage des caractères (ord/chr, vu en Première) et opérateur modulo",
     "15–40 min : Section 8 — le code de César : exécuter la cellule, chiffrer son prénom à la main puis à la machine",
     "40–70 min : Exercice 3 (texte à trou : le modulo 26) puis Exercice 4 (déchiffrer avec la clé -3)",
     "70–100 min : Exercice 6 — chiffrement XOR ; constater que (x ^ k) ^ k = x : même clé pour chiffrer et déchiffrer",
     "100–120 min : institutionnalisation — <strong>symétrique = une seule clé partagée</strong>, d'où le problème de l'échange ; corrigés poussés"
    ],
    "aPreparer": [
     "Salle info (Basthon/Capytale)",
     "Alphabet + table ASCII imprimés en aide"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>chiffrement symétrique</strong> utilise la <em>même</em> clé pour chiffrer et déchiffrer (code de César, XOR, AES moderne). Le <strong>code de César</strong> décale chaque lettre de <code>cle</code> positions dans l'alphabet, modulo 26. Rapide, mais il faut <strong>partager la clé secrètement</strong> au préalable : c'est tout le problème du symétrique.</p><pre><code>ord(\"A\")               # 65 : le code du caractère \"A\"\nchr(65)                # \"A\" : le caractère de code 65\n(rang + cle) % 26      # décalage circulaire dans l'alphabet (26 lettres)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def cesar(texte, cle):\n    res = \"\"\n    for c in texte.upper():\n        if \"A\" &lt;= c &lt;= \"Z\":\n            res += chr((ord(c) - ord(\"A\") + cle) % 26 + ord(\"A\"))\n        else:\n            res += c\n    return res\nsecret = cesar(\"RENDEZ-VOUS A MIDI\", 3)\nprint(secret, \"-&gt;\", cesar(secret, -3))\n# affiche UHQGHC-YRXV D PLGL -&gt; RENDEZ-VOUS A MIDI</code></pre><ul><li>On déchiffre avec la clé opposée : <code>cesar(\"PHVVDJH\", -3)</code> renvoie <code>\"MESSAGE\"</code> (exercice 4).</li><li>Le <code>% 26</code> fait « reboucler » l'alphabet : X décalé de 3 donne A (piège de l'exercice 3).</li><li>Pour le XOR (exercice 6) : <code>(x ^ k) ^ k = x</code> — la même clé chiffre et déchiffre. <strong>Symétrique = une seule clé partagée.</strong></li></ul>"
   },
   {
    "titre": "Séance 7 — Chiffrement asymétrique et HTTPS",
    "duree": "2 h",
    "objectif": "Expliquer le couple clé publique/clé privée, l'intérêt de HTTPS, et consolider en codant Vigenère.",
    "surLeSite": [
     "Section 9 (cellule exécutable : Vigenère)",
     "Exercice 8 (moyen, asymétrique)",
     "Défi « Mission : un message à l'épreuve des espions »"
    ],
    "enClasse": [
     "0–20 min : réactivation — pourquoi le symétrique coince : sketch du cadenas (boîte ouverte à tous, clé gardée secrète)",
     "20–50 min : Section 9 — clé publique/privée, HTTPS ; observer le cadenas et le certificat d'un vrai site dans le navigateur",
     "50–70 min : Exercice 8 sur table : rédiger pourquoi l'asymétrique résout l'échange de clé (2 phrases type bac)",
     "70–110 min : défi en îlots — Vigenère : chiffrer/déchiffrer, puis débattre : pourquoi résiste-t-il mieux que César aux fréquences ?",
     "110–120 min : institutionnalisation + corrigés poussés ; annonce de la séance d'entraînement bac"
    ],
    "aPreparer": [
     "Postes avec navigateur (inspection d'un certificat HTTPS)",
     "Deux cadenas ou images pour le sketch clé publique/privée"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>chiffrement asymétrique</strong> donne à chacun <strong>deux clés liées</strong> : une <strong>clé publique</strong> distribuée à tous et une <strong>clé privée</strong> gardée secrète. Ce qui est chiffré avec la clé publique ne se déchiffre qu'avec la clé privée correspondante : <strong>plus besoin de partager un secret à l'avance</strong> (principe de RSA, fondé sur la difficulté de factoriser de très grands nombres). <strong>HTTPS</strong> (le cadenas 🔒) combine les deux : l'asymétrique sert à <em>échanger</em> une clé symétrique, puis le symétrique, rapide, chiffre le reste de la conversation.</p><p><strong>✍️ Exemple rédigé :</strong> Vigenère, un symétrique « clé = mot », plus robuste que César.</p><pre><code>def vigenere(texte, cle):\n    res, j = \"\", 0\n    for c in texte.upper():\n        if \"A\" &lt;= c &lt;= \"Z\":\n            d = ord(cle[j % len(cle)]) - ord(\"A\")\n            res += chr((ord(c) - ord(\"A\") + d) % 26 + ord(\"A\"))\n            j += 1\n        else: res += c\n    return res\nprint(vigenere(\"MESSAGE SECRET\", \"NSI\"))\n# affiche ZWAFSOR KMPJMG</code></pre><ul><li>Vigenère résiste mieux que César à l'analyse des <strong>fréquences</strong> : le décalage change à chaque lettre selon la clé ; on déchiffre avec <code>vigenere(secret, \"NSI\", -1)</code> (sens inverse, version du site).</li><li>Chiffrer avec sa <strong>clé privée</strong> = <strong>signature numérique</strong> : cela prouve l'authenticité de l'expéditeur.</li><li>Vigenère reste <strong>symétrique</strong> (clé partagée) : seul l'asymétrique résout le problème de l'échange de clé.</li></ul>"
   },
   {
    "titre": "Séance 8 — Entraînement épreuves du bac",
    "duree": "2 h",
    "objectif": "S'entraîner en conditions réelles : un exercice écrit type bac sur ce thème, un exercice type épreuve pratique sur machine.",
    "surLeSite": [
     "Évaluations : Bac blanc n°2, exercice 1 « Processus, ordonnancement et routage » (7 pts)",
     "Évaluations : EP blanche n°1 ou n°2 (1 exercice au choix)",
     "Méthodes : « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »"
    ],
    "enClasse": [
     "0–10 min : lecture des deux fiches méthode — lire les assert d'abord, ne jamais laisser une question de cours vide",
     "10–55 min : sur table, sans document : exercice 1 du Bac blanc n°2 (états, tourniquet, deadlock, RIP/OSPF), code au stylo",
     "55–65 min : correction croisée entre îlots avec le barème projeté",
     "65–110 min : sur Thonny (vrai Python) : 1 exercice d'EP blanche avec asserts — coder, exécuter, valider tous les tests",
     "110–120 min : bilan individuel : chacun note son point faible (écrit ou machine) ; corrigés poussés"
    ],
    "aPreparer": [
     "Copies + sujet écrit imprimé (exercice 1 du Bac blanc n°2)",
     "Thonny installé sur les postes — l'EP se passe sur un vrai Python",
     "Un sujet de la banque officielle Éduscol en réserve pour les rapides"
    ],
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li><strong>Processus</strong> : trois états (prêt / élu / bloqué) ; tourniquet = un quantum chacun puis retour en fin de file ; savoir dérouler la chronologie t par t comme au bac.</li><li><strong>Interblocage</strong> : attente circulaire entre processus ; casser une seule des quatre conditions (ex. ordre d'acquisition des ressources) le supprime.</li><li><strong>Routage</strong> : RIP compte les sauts, OSPF additionne les coûts (∝ 1/débit) avec Dijkstra — les deux peuvent choisir des routes différentes.</li><li><strong>Épreuve écrite</strong> : ne jamais laisser une question de cours vide ; rédiger le code au stylo, proprement, en justifiant.</li><li><strong>Épreuve pratique</strong> : lire les <code>assert</code> d'abord pour comprendre la spécification, puis exécuter et valider tous les tests avant de rendre.</li></ul>"
   },
   {
    "titre": "Séance 9 — QCM bilan, diagnostic et remédiation",
    "duree": "2 h",
    "objectif": "Évaluer les acquis du thème, diagnostiquer les fragilités avec « Ma classe » et remédier par groupes de besoin.",
    "surLeSite": [
     "QCM (10 questions)",
     "Suivi « Ma classe » : matrice du thème + diagnostic par question",
     "Exercices 1 à 8 (reprise ciblée)",
     "Résumé et erreurs fréquentes du thème"
    ],
    "enClasse": [
     "0–25 min : QCM du thème (10 questions) en autonomie, chacun sur son compte",
     "25–40 min : diagnostic « Ma classe » projeté (anonymisé) : quelles questions ont résisté ?",
     "40–85 min : remédiation par groupes de besoin — groupe processus/interblocage (Exercices 5 et 7), groupe routage (Exercice 2), groupe chiffrement (Exercices 6 et 8) ; les plus solides tutorent",
     "85–110 min : reprise collective des 2 questions les plus ratées + relecture des « erreurs fréquentes » du site",
     "110–120 min : écriture libre bilan (« ce que je dois revoir avant le bac ») versée au carnet de révision"
    ],
    "aPreparer": [
     "Vérifier les comptes élèves pour le QCM et l'accès « Ma classe »",
     "Prévoir les 3 pôles de remédiation (énoncés imprimés)"
    ],
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li><strong>SoC</strong> : CPU, GPU, mémoire, modem radio et entrées/sorties sur une seule puce — compact et économe, mais non évolutif.</li><li><strong>OS</strong> : gérer et partager les ressources (processus, mémoire, fichiers, périphériques) ; commandes : <code>ps</code>, <code>kill</code>, <code>ls</code>, <code>cd</code>, <code>chmod</code>.</li><li><strong>Ordonnancement</strong> : états prêt / élu / bloqué ; tourniquet (round-robin) avec quantum ; interblocage = attente circulaire.</li><li><strong>Réseaux</strong> : commutation de paquets, encapsulation TCP/IP ; routage RIP (nombre de sauts) contre OSPF (coût des liens, Dijkstra).</li><li><strong>Chiffrement</strong> : symétrique = une seule clé partagée (César, XOR, AES) ; asymétrique = clé publique / clé privée ; HTTPS combine les deux.</li></ul>"
   }
  ]
 },
 "term-histoire": {
  "heures": "4 h (2 séances de 2 h)",
  "resume": "Thème transversal d'ouverture d'année : construire la frise des idées (calcul mécanique → Turing → von Neumann → langages → Internet/Web → IA), installer les rituels de l'année (exposés courts type Grand oral) et lancer dès la séance 2 les réflexes des deux épreuves du bac (écrit rédigé + pratique sur machine avec asserts).",
  "seances": [
   {
    "titre": "Séance 1 — De la Pascaline à Unix : les concepts avant les machines",
    "duree": "2 h",
    "objectif": "Situer les grandes étapes et figures (Jacquard, Lovelace, Turing, von Neumann, Hopper, Shannon) et comprendre que les concepts (programme, calculabilité, architecture) précèdent les technologies.",
    "surLeSite": [
     "Sections 1–4 du cours (Avant l'ordinateur ; Turing 1936 ; premières machines & Shannon ; langages 1950-1970)",
     "Cellules exécutables : mini machine de Turing (incrémenter un binaire) et bits de Shannon (log2)",
     "Exercices 1, 2 et 4 (association figures/apports, chronologie, rôle de la machine de Turing)"
    ],
    "enClasse": [
     "0–15 min : réactivation Première (binaire, algorithme, architecture machine) par quiz oral ; annonce du fil rouge de l'année : rituels + exposés courts type Grand oral.",
     "15–40 min : lecture active des Sections 1–2 en îlots ; chaque îlot place 3 jalons sur une frise collective au tableau (Pascaline, Jacquard, Babbage/Lovelace, Turing).",
     "40–65 min : manipulation sur Basthon des 2 cellules exécutables — faire varier le ruban de la machine de Turing, tester log2(N) pour d'autres N ; verbaliser « avec des règles simples, on calcule ».",
     "65–90 min : Sections 3–4 puis Exercices 1, 2 et 4 en binômes ; mise en commun rapide.",
     "90–110 min : institutionnalisation — frise commune propre + tableau « le concept précède la technologie » ; écriture libre : 3 phrases sur une figure au choix.",
     "110–120 min : corrigés des exercices poussés sur le site ; attribution des sujets d'exposés (Lovelace, Turing, Hopper, Shannon, Cerf/Kahn, Berners-Lee…)."
    ],
    "aPreparer": [
     "Vidéoprojecteur + frise chronologique vierge (tableau ou affiche) à compléter en classe",
     "Vérifier l'accès Basthon/Capytale sur les postes pour les cellules exécutables",
     "Liste des sujets d'exposés courts (une figure ou une invention par binôme) pour le fil rouge Grand oral"
    ],
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>programme</strong> est une suite d'instructions exécutée par une machine : l'idée existe avant l'électronique (cartes perforées du métier à tisser de Jacquard, 1801 ; premier programme d'Ada Lovelace, 1843). En 1936, la <strong>machine de Turing</strong> — un modèle théorique qui manipule un ruban selon des règles très simples — définit ce qui est <strong>calculable</strong> par un algorithme. En 1945, l'<strong>architecture de von Neumann</strong> stocke le programme dans la même mémoire que les données : c'est celle de tous nos ordinateurs. En 1948, Claude Shannon définit le <strong>bit</strong>, unité de mesure de l'information.</p><pre><code>import math\nmath.log2(N)   # nombre de bits pour distinguer N possibilités équiprobables</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>import math\n# Théorie de l'information (Shannon)\nfor n in [2, 8, 256, 1000]:\n    bits = math.log2(n)\n    print(f\"{n:&gt;4} possibilités -&gt; {bits:.2f} bits\")\n# affiche    2 possibilités -&gt; 1.00 bits\n#            8 possibilités -&gt; 3.00 bits\n#          256 possibilités -&gt; 8.00 bits\n#         1000 possibilités -&gt; 9.97 bits</code></pre><ul><li>La fonction <code>incrementer(ruban)</code> vue sur le site montre qu'avec des règles élémentaires, une machine de Turing calcule vraiment ; mais il existe des problèmes <strong>non calculables</strong> (problème de l'arrêt).</li><li>Grace Hopper invente l'idée de <strong>compilateur</strong> et popularise le mot « bug » (1947).</li><li>Idée clé : le <strong>concept précède la technologie</strong> — programme, calculabilité et architecture sont pensés avant les machines qui les réalisent.</li></ul>"
   },
   {
    "titre": "Séance 2 — Internet ≠ Web, enjeux actuels + entraînement épreuves et diagnostic",
    "duree": "2 h",
    "objectif": "Distinguer Internet et le Web, relier l'histoire aux enjeux actuels (données, IA, société) ; installer les réflexes des deux épreuves du bac ; diagnostiquer et remédier via le QCM.",
    "surLeSite": [
     "Sections 5–7 du cours (micro-informatique ; réseaux, Internet et le Web ; mobile, données massives et IA)",
     "Exercices 3, 5 et 6 (texte à trou log2, architecture de von Neumann, Internet ≠ Web)",
     "Défi « Mission : la frise des idées »",
     "QCM (10 questions)",
     "Méthodes « Réussir l'épreuve pratique » et « Réussir l'épreuve écrite »",
     "Évaluations : EP blanche n°1 (exercice 1 — recherche dans un ABR, en découverte du format)"
    ],
    "enClasse": [
     "0–10 min : rituel — 2 exposés courts de 3 min (figures de la séance 1) + une question du public : entraînement Grand oral.",
     "10–35 min : Sections 5–7 en lecture guidée ; débat éclair « Internet ≠ Web » ; Exercices 3, 5 et 6 en binômes.",
     "35–70 min : <strong>entraînement épreuves</strong> — lecture des deux fiches méthode du site, puis 1 exercice écrit rédigé façon bac sur table (questions de cours justifiées : von Neumann, Internet/Web) et l'exercice 1 de l'EP blanche n°1 sur machine, avec validation par les asserts (Thonny, vrai Python).",
     "70–90 min : QCM (10 questions) en individuel ; le professeur suit les résultats en direct dans « Ma classe ».",
     "90–110 min : diagnostic par question + remédiation par îlots selon les erreurs (chronologie, figures, Internet/Web) ; les plus rapides rédigent le défi « frise des idées » en écriture libre.",
     "110–120 min : corrigés poussés ; bilan du fil rouge histoire et calendrier des exposés de l'année."
    ],
    "aPreparer": [
     "Postes avec Thonny ou Capytale opérationnels : l'épreuve pratique se passe sur un vrai Python, pas seulement dans le navigateur",
     "Imprimer le sujet de la question écrite type bac (copies) et l'exercice 1 de l'EP blanche n°1 ; montrer la banque officielle des sujets d'EP (Éduscol)",
     "Ouvrir le tableau de bord « Ma classe » pour le suivi du QCM et préparer les groupes de remédiation"
    ],
    "cours": "<p><strong>📖 Définition :</strong> <strong>Internet</strong> est le réseau physique mondial qui relie les machines (les « tuyaux ») : sa robustesse repose sur la <strong>commutation de paquets</strong>, et son « langage commun » est la famille de protocoles <strong>TCP/IP</strong> (Vint Cerf et Robert Kahn, années 1970). Le <strong>Web</strong>, inventé par Tim Berners-Lee au CERN (1989-1991), est <em>un</em> service qui circule sur Internet : des pages écrites en HTML, reliées par des liens hypertextes, désignées par des URL et transportées par le protocole HTTP. Le mail, la visio ou le jeu en ligne sont d'<em>autres</em> services d'Internet.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code># Frise des idées : de la micro-informatique au mobile\nfrise = {1971: \"microprocesseur Intel 4004\", 1981: \"IBM PC\",\n         1991: \"Web (Tim Berners-Lee, CERN)\", 2007: \"smartphone moderne\"}\nfor annee in sorted(frise):\n    print(annee, \":\", frise[annee])\n# affiche 1971 : microprocesseur Intel 4004\n#         1981 : IBM PC\n#         1991 : Web (Tim Berners-Lee, CERN)\n#         2007 : smartphone moderne</code></pre><ul><li>Ne pas confondre : <strong>Internet</strong> = le réseau (TCP/IP) ; le <strong>Web</strong> = les pages liées (HTML, URL, HTTP), un service <em>parmi d'autres</em>.</li><li>Aujourd'hui : <strong>données massives</strong>, <strong>intelligence artificielle</strong> (apprentissage automatique) et enjeux de société — vie privée, biais des algorithmes, impact environnemental.</li><li>Bac : à l'épreuve écrite, toute réponse se <strong>justifie</strong> ; à l'épreuve pratique, le programme est validé par les <strong>asserts</strong> du sujet.</li></ul>"
   }
  ]
 }
};

/* ---------------- Kits de préparation (prof) ----------------
   Matériel débranché imprimable (design « mission » engageant), fichiers réels
   (assets/fichiers/terminale/) pour Capytale/Thonny/DB Browser, et pointeurs
   évaluations. Rendu : makeThemeKit (app.js). */
const THEME_KITS = {
  "term-structures": {
    "intro": "Kit de préparation du thème « Structures de données » (12 séances de 2 h). Il fournit la colonne « À préparer toi-même » du déroulé : un arbre géant à annoter (séances 5–7, mêmes valeurs que l'exercice 1 du Bac blanc n°1), des cartes à découper pour l'activité gobelets pile/file (séances 1–2), et quatre fichiers Python prêts à déposer sur Capytale/Thonny (squelettes élève avec asserts + corrigés prof vérifiés).",
    "imprimables": [
      {
        "titre": "L'arbre mystère — perce les secrets de l'ABR (taille, hauteur, 4 parcours)",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #7c3aed;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🌳</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">L'arbre mystère</div><div style=\"font-size:14px;color:#475569\">ABR obtenu en insérant 12, 5, 20, 3, 8, 15, 25 — sauras-tu percer tous ses secrets ?</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✍️ 8 secrets à trouver</span></div><div style=\"border-left:6px solid #7c3aed;background:#ede9fe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> cet arbre cache 8 secrets — sa taille, sa hauteur, ses feuilles, les fils de 5 et ses quatre parcours. Complète les mesures et les quatre parcours, puis vérifie avec ton voisin : un point par secret percé !</div><p style=\"font-size:15px;margin:6px 0 10px\">Nom : .............................................</p><svg viewBox=\"0 0 700 330\" style=\"width:100%;height:auto;display:block\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"350\" y1=\"55\" x2=\"180\" y2=\"165\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"350\" y1=\"55\" x2=\"520\" y2=\"165\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"180\" y1=\"165\" x2=\"90\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"180\" y1=\"165\" x2=\"270\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"520\" y1=\"165\" x2=\"430\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><line x1=\"520\" y1=\"165\" x2=\"610\" y2=\"275\" stroke=\"#7c3aed\" stroke-width=\"2\"/><circle cx=\"350\" cy=\"55\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"180\" cy=\"165\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"520\" cy=\"165\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"90\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"270\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"430\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><circle cx=\"610\" cy=\"275\" r=\"32\" fill=\"#fff\" stroke=\"#7c3aed\" stroke-width=\"2.5\"/><text x=\"350\" y=\"64\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">12</text><text x=\"180\" y=\"174\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">5</text><text x=\"520\" y=\"174\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">20</text><text x=\"90\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">3</text><text x=\"270\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">8</text><text x=\"430\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">15</text><text x=\"610\" y=\"284\" font-size=\"26\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">25</text><text x=\"415\" y=\"40\" font-size=\"16\" font-style=\"italic\" fill=\"#475569\">racine</text></svg><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin-top:12px\"><table style=\"width:100%;border-collapse:collapse;font-size:18px\"><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;width:50%\"><strong>Taille</strong> (nombre de nœuds) = ............</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Hauteur</strong> = ............ &nbsp;<span style=\"font-size:14px;color:#64748b\">(convention du cours : arbre vide → 0)</span></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Feuilles</strong> : .............................</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Fils de 5</strong> : .............................</td></tr><tr><td colspan=\"2\" style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Parcours préfixe</strong> (racine, gauche, droite) : ......................................................................</td></tr><tr style=\"background:#f8fafc\"><td colspan=\"2\" style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Parcours infixe</strong> (gauche, racine, droite) : ...................................................................... <br><span style=\"font-size:15px\">Que remarques-tu ? ......................................................................</span></td></tr><tr><td colspan=\"2\" style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\"><strong>Parcours suffixe</strong> (gauche, droite, racine) : ......................................................................</td></tr><tr style=\"background:#f8fafc\"><td colspan=\"2\" style=\"padding:.3cm\"><strong>Parcours en largeur</strong> (avec une file) : ......................................................................</td></tr></table></div><p style=\"font-size:14px;margin-top:8px;color:#475569\">⚠️ Certains sujets de bac prennent « hauteur d'une racine seule = 0 » : lis toujours la convention de l'énoncé.</p><div style=\"border:2.5px dashed #7c3aed;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 8 &nbsp; ⭐ Défi bonus réussi : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> taille 7 ; hauteur 3 (convention cours) ; préfixe 12 5 3 8 20 15 25 ; infixe 3 5 8 12 15 20 25 (trié : c'est un ABR) ; suffixe 3 8 5 15 25 20 12 ; largeur 12 5 20 3 8 15 25.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Structures de données · A4</div></div>"
      },
      {
        "titre": "Le grand jeu des gobelets — cartes pile / file à découper (valeurs, opérations, rôles)",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #7c3aed;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🥤</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le grand jeu des gobelets</div><div style=\"font-size:14px;color:#475569\">Cartes pile / file — séances 1–2 · LIFO contre FIFO, à toi de jouer</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎭 Jeu de rôle</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #7c3aed;background:#ede9fe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpe les cartes — un jeu par îlot : 6 cartes-valeurs à empiler ou enfiler, 6 cartes-opérations à piocher et annoncer à voix haute, 3 cartes-rôles à se répartir. À chaque opération, le greffier prédit la prochaine sortie : gagnera-t-il son duel contre la structure ?</div><table style=\"width:100%;border-collapse:separate;border-spacing:8px;table-layout:fixed\"><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;width:6cm;height:4.6cm;text-align:center;font-size:30px;font-weight:800;color:#1e293b\">🔤 N<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:30px;font-weight:800;color:#1e293b\">🔤 S<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:30px;font-weight:800;color:#1e293b\">🔤 I<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:28px;font-weight:800;color:#1e293b\">🙋 Ava<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:28px;font-weight:800;color:#1e293b\">🙋 Bilal<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:28px;font-weight:800;color:#1e293b\">🙋 Chloé<div style=\"font-size:18px;font-weight:normal;color:#475569\">valeur</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">📥 empiler(...)<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE — pose au sommet</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">📤 depiler()<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE — retire le sommet</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">👀 sommet()<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE — regarde sans retirer</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">🚶 enfiler(...)<div style=\"font-size:18px;font-weight:normal;color:#475569\">FILE — entre par la fin</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">🏃 defiler()<div style=\"font-size:18px;font-weight:normal;color:#475569\">FILE — sort par le début</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:24px;font-weight:800;color:#1e293b\">❓ est_vide()<div style=\"font-size:18px;font-weight:normal;color:#475569\">PILE ou FILE — vrai ou faux ?</div></td></tr><tr><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:22px;font-weight:800;color:#1e293b\">🥞 Rôle : PILE (LIFO)<div style=\"font-size:18px;font-weight:normal;color:#475569\">« Le dernier arrivé sort en premier »</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#fff;height:4.6cm;text-align:center;font-size:22px;font-weight:800;color:#1e293b\">🚶‍♀️ Rôle : FILE (FIFO)<div style=\"font-size:18px;font-weight:normal;color:#475569\">« Le premier arrivé sort en premier »</div></td><td style=\"border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;height:4.6cm;text-align:center;font-size:22px;font-weight:800;color:#1e293b\">📝 Rôle : GREFFIER<div style=\"font-size:18px;font-weight:normal;color:#475569\">« Je note chaque opération annoncée et je prédis la prochaine sortie »</div></td></tr></table><div style=\"border:2.5px dashed #7c3aed;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot (prédictions justes du greffier) : ______ / 6 &nbsp; ⭐ Défi bonus réussi : ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Structures de données · A4</div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "pile_file.py",
        "chemin": "assets/fichiers/terminale/term-structures/pile_file.py",
        "desc": "Squelette élève : classe Pile à compléter (est_vide, empiler, depiler, sommet, liste _elements cachée comme dans le cours) puis défi « correcteur de parenthèses » utilisant la Pile — consignes en commentaires, asserts fournis (mêmes exemples que la section 3 du cours). À déposer sur Capytale/Thonny pour les séances 1–2."
      },
      {
        "nom": "pile_file_corrige.py",
        "chemin": "assets/fichiers/terminale/term-structures/pile_file_corrige.py",
        "desc": "Corrigé prof de pile_file.py — exécuté et vérifié : tous les asserts passent."
      },
      {
        "nom": "abr.py",
        "chemin": "assets/fichiers/terminale/term-structures/abr.py",
        "desc": "Squelette élève : recherche(a, c) et inserer(a, c) à compléter sur un ABR en triplets (valeur, gauche, droite) comme dans la section 8 du cours ; infixe fournie pour vérifier que l'ordre reste trié ; asserts sur l'ABR du cours [7, 3, 9, 1, 5] et sur celui du Bac blanc n°1 (12, 5, 20, 3, 8, 15, 25). Pour la séance 7."
      },
      {
        "nom": "abr_corrige.py",
        "chemin": "assets/fichiers/terminale/term-structures/abr_corrige.py",
        "desc": "Corrigé prof d'abr.py — exécuté et vérifié : tous les asserts passent (insertion par reconstruction, recherche en O(hauteur))."
      }
    ],
    "evals": [
      "<strong>Séance 11 (entraînement bac)</strong> : Évaluations → EP blanche n°1 « ABR &amp; file » sur machine (1 h, vrai Python), puis exercice 1 du DS écrit type bac n°1 (« arbres · SQL · graphes ») sur table — l'arbre du sujet est celui de l'imprimable.",
      "<strong>Séance 12 (bilan)</strong> : QCM du thème (11 questions) puis diagnostic « Ma classe » ; l'EP blanche n°2 et le DS écrit n°2 (exercice « piles/tris ») serviront plus tard en révision transversale.",
      "<strong>Prolongements</strong> : banque officielle des sujets d'épreuve pratique (lien Éduscol dans la fiche méthode « Réussir l'épreuve pratique » du site) pour les élèves rapides des séances 11–12 — en déposer 2–3 sur Capytale avant la séance."
    ]
  },
  "term-algo": {
    "intro": "Kit de préparation du thème « Algorithmique » (11 séances de 2 h). Il couvre la colonne « À préparer toi-même » du déroulé : les cartes du tri fusion humain débranché (séance 2), le graphe pondéré à 6 sommets avec table de Dijkstra vierge (séances 5–7), et quatre fichiers Python style épreuve pratique (squelettes élève + corrigés prof, asserts vérifiés) reprenant exactement les exemples du cours — liste [38, 27, 43, 3, 9, 82, 10] de la Section 4 et code heapq de la Section 6.",
    "imprimables": [
      {
        "titre": "⚔️ Le tournoi du tri fusion — 8 cartes à départager (séance 2)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>Le tournoi du tri fusion — cartes et schéma</title></head><body style='font-family:Arial,Helvetica,sans-serif;margin:1cm;color:#1e293b'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #2563eb;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🃏</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>Le tournoi du tri fusion</div><div style='font-size:14px;color:#475569'>8 cartes à départager — diviser pour régner, littéralement (séance 2)</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👥 En îlot</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>✂️ À découper</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 20 min</span></div><div style='border-left:6px solid #2563eb;background:#dbeafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> ton îlot devient un ordinateur (un jeu par îlot). <b>1.</b> Découpe les 8 cartes et pose-les en ligne, dans cet ordre. <b>2.</b> <b>Diviser</b> : coupe le paquet en deux moitiés, puis chaque moitié en deux, jusqu'aux cartes seules. <b>3.</b> <b>Combiner</b> : fusionne les paquets deux à deux en ne comparant que les <b>cartes du dessus</b> (le plus petit passe devant). <b>4.</b> Remplis le schéma de fusion à chaque étape de la remontée.</div><table style='border-collapse:collapse;margin:0 auto'><tr><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>38</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>27</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>43</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>3</div></div></td></tr><tr><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>9</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>82</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#fff;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>10</div></div></td><td style='padding:5px'><div style='border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;width:4.5cm;height:4.5cm;text-align:center;color:#1e293b'><div style='font-size:15px;padding-top:0.5cm'>🃏</div><div style='font-size:34px;font-weight:800;padding-top:0.7cm'>55</div></div></td></tr></table><h2 style='font-size:16px;margin:12px 0 6px;color:#1e40af'>Le tableau de marque de la remontée (à remplir pendant les fusions)</h2><div style='text-align:center;font-size:12px;color:#475569;margin:4px 0'>Cartes seules (après le découpage) :</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>38</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center;margin-right:0.5cm'>27</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>43</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center;margin-right:0.5cm'>3</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>9</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center;margin-right:0.5cm'>82</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>10</span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;line-height:0.9cm;font-size:18px;text-align:center'>55</span></div><div style='text-align:center;font-size:12px;color:#475569;margin:8px 0 2px'>1<sup>re</sup> fusion — paquets de 2 :</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span></div><div style='text-align:center;font-size:12px;color:#475569;margin:8px 0 2px'>2<sup>e</sup> fusion — paquets de 4 :</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm;margin-right:0.5cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span></div><div style='text-align:center;font-size:12px;color:#475569;margin:8px 0 2px'>3<sup>e</sup> fusion — le paquet de 8 est la liste triée !</div><div style='text-align:center'><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span><span style='display:inline-block;border:1.5px solid #2563eb;width:1.5cm;height:0.9cm'></span></div><div style='border:2.5px dashed #2563eb;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>⚡ Duel inter-îlots : le premier îlot qui pose la ligne finale triée gagne. &nbsp; 🏆 Score de l'îlot : ______ / 3 fusions justes &nbsp; ⭐ Duel remporté : ☐</div><div style='margin-top:8px;font-size:11px;color:#94a3b8'>✂️ plier ici — <strong>réponses prof :</strong> mêmes nombres que la Section 4 du cours et que tri_fusion.py (+ la carte 55 pour obtenir 8 cartes). Ligne finale attendue : 3, 9, 10, 27, 38, 43, 55, 82. Compter les comparaisons par niveau pour préparer le « n log n » de la séance 3.</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Algorithmique · A4</div></body></html>"
      },
      {
        "titre": "🧭 Mission GPS du lycée — Dijkstra à la main (séances 5 à 7)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>Mission GPS — Dijkstra à la main</title></head><body style='font-family:Arial,Helvetica,sans-serif;margin:1cm;color:#1e293b'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #2563eb;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🧭</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>Mission GPS : le plan du lycée</div><div style='font-size:14px;color:#475569'>L'algorithme de Dijkstra à la main — 6 lieux, 1 plus court chemin (séances 5 à 7)</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👥 En îlot</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 30 min</span><span style='display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>📋 Table à compléter</span></div><div style='border-left:6px solid #2563eb;background:#dbeafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> ton GPS est en panne — deviens-le. On part du sommet <b>A</b>. À chaque étape : <b>1.</b> choisis le sommet non traité dont la distance est la plus petite et écris-le dans la colonne « Sommet choisi » ; <b>2.</b> mets à jour les distances de ses voisins (ancienne valeur barrée, nouvelle à côté) ; <b>3.</b> recopie les autres distances. Écris ∞ pour « pas encore atteint ».</div><svg width='620' height='300' viewBox='0 0 620 300' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:4px auto'><line x1='80' y1='150' x2='250' y2='60' stroke='#2563eb' stroke-width='2'/><line x1='80' y1='150' x2='250' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='60' x2='250' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='60' x2='430' y2='60' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='240' x2='430' y2='60' stroke='#2563eb' stroke-width='2'/><line x1='250' y1='240' x2='430' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='430' y1='60' x2='430' y2='240' stroke='#2563eb' stroke-width='2'/><line x1='430' y1='60' x2='560' y2='150' stroke='#2563eb' stroke-width='2'/><line x1='430' y1='240' x2='560' y2='150' stroke='#2563eb' stroke-width='2'/><text x='150' y='96' font-size='17' font-weight='bold' fill='#b00020'>4</text><text x='150' y='212' font-size='17' font-weight='bold' fill='#b00020'>2</text><text x='260' y='155' font-size='17' font-weight='bold' fill='#b00020'>1</text><text x='335' y='50' font-size='17' font-weight='bold' fill='#b00020'>5</text><text x='352' y='165' font-size='17' font-weight='bold' fill='#b00020'>8</text><text x='330' y='262' font-size='17' font-weight='bold' fill='#b00020'>10</text><text x='440' y='155' font-size='17' font-weight='bold' fill='#b00020'>2</text><text x='503' y='92' font-size='17' font-weight='bold' fill='#b00020'>6</text><text x='503' y='215' font-size='17' font-weight='bold' fill='#b00020'>3</text><circle cx='80' cy='150' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='250' cy='60' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='250' cy='240' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='430' cy='60' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='430' cy='240' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><circle cx='560' cy='150' r='20' fill='#fff' stroke='#1e293b' stroke-width='2.5'/><text x='80' y='157' font-size='19' font-weight='bold' text-anchor='middle'>A</text><text x='250' y='67' font-size='19' font-weight='bold' text-anchor='middle'>B</text><text x='250' y='247' font-size='19' font-weight='bold' text-anchor='middle'>C</text><text x='430' y='67' font-size='19' font-weight='bold' text-anchor='middle'>D</text><text x='430' y='247' font-size='19' font-weight='bold' text-anchor='middle'>E</text><text x='560' y='157' font-size='19' font-weight='bold' text-anchor='middle'>F</text><text x='80' y='115' font-size='12' text-anchor='middle' fill='#555'>Accueil</text><text x='250' y='28' font-size='12' text-anchor='middle' fill='#555'>CDI</text><text x='250' y='278' font-size='12' text-anchor='middle' fill='#555'>Cantine</text><text x='430' y='28' font-size='12' text-anchor='middle' fill='#555'>Labo NSI</text><text x='430' y='278' font-size='12' text-anchor='middle' fill='#555'>Gymnase</text><text x='560' y='115' font-size='12' text-anchor='middle' fill='#555'>Internat</text></svg><div style='border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin-top:6px'><table style='border-collapse:collapse;width:100%;font-size:16px;text-align:center'><tr><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0;width:2.2cm'>Étape</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0;width:2.8cm'>Sommet choisi</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>A</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>B</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>C</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>D</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm;border-right:1px solid #e2e8f0'>E</th><th style='background:#dbeafe;color:#1e40af;padding:.3cm'>F</th></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>Départ</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>—</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;font-weight:bold'>0</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'>∞</td><td style='border-bottom:1px solid #e2e8f0'>∞</td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>1</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>2</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>3</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>4</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;height:0.9cm'>5</td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0'></td><td style='border-bottom:1px solid #e2e8f0'></td></tr><tr><td style='border-right:1px solid #e2e8f0;height:0.9cm'>6</td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td style='border-right:1px solid #e2e8f0'></td><td></td></tr></table></div><p style='font-size:15px;font-weight:700;margin-top:10px'>🏁 Plus courte distance de A (Accueil) à F (Internat) : ________ &nbsp;&nbsp;Chemin : A → ____ → ____ → ____ → F</p><div style='border:2.5px dashed #2563eb;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>🏆 Score de l'îlot : ______ / 6 étapes justes &nbsp; ⭐ Défi bonus réussi (chemin complet annoncé avant les autres îlots) : ☐</div><div style='margin-top:8px;font-size:11px;color:#94a3b8'>✂️ plier ici — <strong>réponses prof :</strong> mêmes poids que le graphe « lycee » de dijkstra.py — attendu : A 0, B 3, C 2, D 8, E 10, F 13 ; chemin A → C → B → D → E → F. Vérification en séance 7 en exécutant dijkstra_corrige.py.</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Algorithmique · A4</div></body></html>"
      }
    ],
    "fichiers": [
      {
        "nom": "tri_fusion.py",
        "chemin": "assets/fichiers/terminale/term-algo/tri_fusion.py",
        "desc": "Squelette élève style EP (séance 3) : fusionner puis tri_fusion récursif à écrire, consignes en commentaires, asserts fournis — mêmes listes que la Section 4 du cours."
      },
      {
        "nom": "tri_fusion_corrige.py",
        "chemin": "assets/fichiers/terminale/term-algo/tri_fusion_corrige.py",
        "desc": "Corrigé prof du tri fusion (code identique à la Section 4 du cours) — asserts vérifiés, tous passent."
      },
      {
        "nom": "dijkstra.py",
        "chemin": "assets/fichiers/terminale/term-algo/dijkstra.py",
        "desc": "Squelette élève (séances 5 à 7) : dijkstra(graphe, depart) sur dictionnaire d'adjacence pondéré avec heapq, consignes en commentaires ; asserts sur le réseau à 4 sommets du cours, le graphe du lycée à 6 sommets de la fiche imprimée, et un sommet isolé (distance infinie)."
      },
      {
        "nom": "dijkstra_corrige.py",
        "chemin": "assets/fichiers/terminale/term-algo/dijkstra_corrige.py",
        "desc": "Corrigé prof de Dijkstra (code identique à la Section 6 du cours) — asserts vérifiés, tous passent."
      }
    ],
    "evals": [
      "<strong>Séance 10</strong> : sur table, exercice 3 du « Bac blanc n°1 » (graphes : parcours et plus court chemin) ; sur machine, « EP blanche n°2 — fusion &amp; programmation dynamique » en conditions réelles (1 h, tous les asserts doivent passer).",
      "<strong>Après le thème</strong> : DS n°2 d'algorithmique en piochant dans le « Bac blanc n°2 » (exercice piles/tris) ; « EP blanche n°1 — ABR &amp; file » en révision transversale avant l'épreuve pratique de juin.",
      "<strong>Séance 11</strong> : QCM du thème (10 questions) + diagnostic « Ma classe » pour former les groupes de remédiation ; pour les groupes solides, sujets de la banque officielle Éduscol via la fiche méthode « Réussir l'épreuve pratique » (aussi en prolongement des séances 3 et 10)."
    ]
  },
  "term-langages": {
    "intro": "Kit de préparation du thème « Langages et programmation » (10 séances de 2 h). Il matérialise la colonne « À préparer toi-même » du déroulé : la fiche « pile d'appels » à dérouler à la main (séance 4, à imprimer 1 par élève), les cartes « bug classique » à découper (séance 7, 1 carte par îlot), le squelette CompteBancaire à distribuer sur Capytale (séances 2-3) et le fichier de 3 fonctions récursives avec asserts (séances 4-5). Les corrigés prof (*_corrige.py) passent tous leurs asserts — vérifié en exécution.",
    "imprimables": [
      {
        "titre": "🐍 Plongée dans la pile — la trace secrète de factorielle(4) (séance 4)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>Plongée dans la pile — factorielle(4)</title></head><body style='font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:19cm;margin:0 auto;padding:0.7cm'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🐍</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>Plongée dans la pile d'appels</div><div style='font-size:14px;color:#475569'>La trace secrète de factorielle(4) · Séance 4 — Nom : ................................</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👤 En solo</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 15 min</span></div><div style='border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> deviens l'interprète Python. Déroule factorielle(4) à la main, de la descente jusqu'au résultat final — aucun appel ne doit t'échapper.</div><pre style='background:#f8fafc;border:1px solid #cbd5e1;border-radius:12px;padding:8px 12px;font-size:16px;margin:0 0 12px'>def factorielle(n):\n    if n == 0:           # cas de base\n        return 1\n    return n * factorielle(n - 1)   # appel récursif</pre><h2 style='font-size:19px;margin:10px 0 6px;color:#15803d'>1 · La descente : complète chaque appel</h2><div style='border:2px solid #cbd5e1;border-radius:12px;overflow:hidden'><table style='border-collapse:collapse;width:100%;font-size:18px'><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(4)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= 4 × factorielle(3)</td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(3)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:1cm;border-bottom:2px dotted #777'>&nbsp;</span>)</td></tr><tr><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(2)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:1cm;border-bottom:2px dotted #777'>&nbsp;</span>)</td></tr><tr style='background:#f8fafc'><td style='border-bottom:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(1)</td><td style='border-bottom:1px solid #e2e8f0;padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:1cm;border-bottom:2px dotted #777'>&nbsp;</span>)</td></tr><tr><td style='border-right:1px solid #e2e8f0;padding:7px 10px'>factorielle(0)</td><td style='padding:7px 10px'>= <span style='display:inline-block;min-width:1.4cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;← c'est le <strong>cas de base</strong> : on répond sans s'appeler</td></tr></table></div><h2 style='font-size:19px;margin:14px 0 6px;color:#15803d'>2 · La pile au plus profond : complète les cadres empilés</h2><p style='font-size:15px;margin:0 0 6px'>Chaque appel <strong>attend</strong> le résultat de l'appel du dessus. Le dernier arrivé est en haut (LIFO, comme la pile du thème « Structures de données »).</p><div style='width:12cm;margin:0 auto'><div style='border:2px solid #16a34a;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px;background:#dcfce7'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — répond directement : renvoie <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span></div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — attend <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>)</div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — attend <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>)</div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;margin:0 0 3px;font-size:19px'>factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>) — attend <span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span> × factorielle(<span style='display:inline-block;min-width:0.9cm;border-bottom:2px dotted #777'>&nbsp;</span>)</div><div style='border:2px solid #475569;border-radius:12px;padding:8px 12px;font-size:19px;background:#f8fafc'>factorielle(4) — attend 4 × factorielle(3) &nbsp;<em style='font-size:14px'>(exemple : le 1er appel, tout en bas)</em></div></div><h2 style='font-size:19px;margin:14px 0 6px;color:#15803d'>3 · La remontée : chaque cadre se dépile en renvoyant sa valeur</h2><p style='font-size:18px;line-height:2;margin:0'>factorielle(0) renvoie 1 &nbsp;→&nbsp; factorielle(1) renvoie 1 × 1 = <span style='display:inline-block;min-width:1.2cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;→&nbsp; factorielle(2) renvoie <span style='display:inline-block;min-width:1.2cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;→&nbsp; factorielle(3) renvoie <span style='display:inline-block;min-width:1.2cm;border-bottom:2px dotted #777'>&nbsp;</span> &nbsp;→&nbsp; <strong>factorielle(4) renvoie <span style='display:inline-block;min-width:1.5cm;border-bottom:2px dotted #777'>&nbsp;</span></strong></p><p style='font-size:14px;color:#475569;margin:12px 0 0'>💡 Vérifie ensuite ta trace avec le débogueur pas-à-pas de Thonny : tu verras cette pile pour de vrai.</p><div style='border:2.5px dashed #16a34a;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>🏆 Score de ta trace : ______ / 22 cases justes &nbsp; ⭐ Défi bonus — pile vérifiée dans le débogueur Thonny : ☐</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Langages et programmation · A4</div></body></html>"
      },
      {
        "titre": "🐛 La chasse aux bugs — 6 créatures à capturer, 1 carte par îlot (séance 7)",
        "html": "<!DOCTYPE html><html lang='fr'><head><meta charset='utf-8'><title>La chasse aux bugs — cartes à découper</title></head><body style='font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:19cm;margin:0 auto;padding:0.7cm'><div style='display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:10px'><div style='font-size:44px;line-height:1'>🐛</div><div><div style='font-size:26px;font-weight:800;color:#1e293b'>La chasse aux bugs</div><div style='font-size:14px;color:#475569'>6 créatures échappées de la Section 7 du cours… et des sujets du bac (séance 7)</div></div></div><div style='margin-bottom:4px'><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>👥 En îlot</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>✂️ À découper</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>🧠 Sans machine</span><span style='display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0'>⏱ 15 min</span></div><div style='border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px'><strong>🎯 Mission :</strong> une carte par îlot. Exécute le code dans ta tête, traque le bug, capture-le en le corrigeant, puis explique ta prise à la classe. Tous ces bugs sont dans la Section 7 du cours… et dans les sujets du bac.</div><table style='border-collapse:collapse;width:100%'><tr><td style='width:50%;padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>🔇 Carte 1 — Rien ne s'affiche !</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>a = 0.1 + 0.2\nif a == 0.3:\n    print(\"égal\")</pre><div style='font-size:16px'>Pourquoi le print ne s'exécute-t-il jamais ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td><td style='width:50%;padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#fff;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>👻 Carte 2 — La liste hantée</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)</pre><div style='font-size:16px'>Qu'affiche ce code ? Pourquoi « a » a-t-il changé « tout seul » ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td></tr><tr><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#fff;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>📏 Carte 3 — L'erreur d'une unité</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>mots = [\"un\", \"deux\", \"trois\"]\nprint(mots[len(mots)])</pre><div style='font-size:16px'>Quelle erreur Python obtient-on, et pourquoi ?<br>Le dernier indice valable est : <span style='display:inline-block;min-width:3cm;border-bottom:2px dotted #777'>&nbsp;</span><br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>🏅 Carte 4 — La mention volée</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>note = 18\nif note >= 16:\n    mention = \"très bien\"\nif note >= 12:\n    mention = \"assez bien\"\nprint(mention)</pre><div style='font-size:16px'>Qu'affiche ce code, et quel mot-clé manque-t-il ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td></tr><tr><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>♾️ Carte 5 (bonus) — Sans fin</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>def somme(n):\n    return n + somme(n - 1)\n\nprint(somme(100))</pre><div style='font-size:16px'>Quelle erreur obtient-on (RecursionError) ? Quel ingrédient obligatoire manque-t-il ?<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td><td style='padding:5px;vertical-align:top'><div style='border:2.5px solid #16a34a;border-radius:14px;background:#fff;height:6cm;padding:10px'><div style='font-size:20px;font-weight:800;color:#1e293b;margin-bottom:6px'>🧟 Carte 6 (bonus) — La mémoire fantôme</div><pre style='font-size:18px;margin:0 0 8px;font-family:Consolas,monospace'>def ajoute(x, t=[]):\n    t.append(x)\n    return t\n\nprint(ajoute(1))\nprint(ajoute(2))</pre><div style='font-size:16px'>Pourquoi le 2e appel affiche-t-il [1, 2] ? (cf. le piège memo={} du cours)<br>La correction : <span style='display:inline-block;min-width:4cm;border-bottom:2px dotted #777'>&nbsp;</span></div></div></td></tr></table><div style='border:2.5px dashed #16a34a;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700'>🏆 Score de l'îlot : ______ / 2 (bug trouvé + correction juste) &nbsp; ⭐ Défi bonus — la carte d'un autre îlot corrigée aussi : ☐</div><div style='margin-top:8px;font-size:11px;color:#94a3b8'>✂️ plier ici — <strong>réponses prof :</strong> 1 : comparer abs(a - 0.3) &lt; 1e-9 ; 2 : b = list(a) (b = a ne copie pas) ; 3 : IndexError, dernier indice len - 1 ; 4 : elif ; 5 : cas de base if n == 0: return 0 ; 6 : t=None puis if t is None: t = [].</div><div style='margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right'>NSI Terminale · Langages et programmation · A4</div></body></html>"
      }
    ],
    "fichiers": [
      {
        "nom": "recursivite.py",
        "chemin": "assets/fichiers/terminale/term-langages/recursivite.py",
        "desc": "Squelette élève (séances 4-5) : 3 fonctions récursives à écrire — somme_liste (récursion sur liste), puissance (x^n sans **) et escalier mémoïsé (Fibonacci déguisé, l'assert escalier(50) impose la mémoïsation). Consignes en commentaires, asserts fournis, à déposer sur Capytale/Thonny."
      },
      {
        "nom": "recursivite_corrige.py",
        "chemin": "assets/fichiers/terminale/term-langages/recursivite_corrige.py",
        "desc": "Corrigé prof : cas de base commentés, mémoïsation avec le motif propre memo=None (cf. le piège memo={} de la Section 4). Tous les asserts passent (vérifié en exécution)."
      },
      {
        "nom": "poo_compte.py",
        "chemin": "assets/fichiers/terminale/term-langages/poo_compte.py",
        "desc": "Squelette élève (séances 2-3) : la classe CompteBancaire du cours à compléter — __init__, deposer, retirer (refus si solde insuffisant), __str__, et le défi virer qui réutilise les méthodes existantes. Asserts fournis, dont str(c)."
      },
      {
        "nom": "poo_compte_corrige.py",
        "chemin": "assets/fichiers/terminale/term-langages/poo_compte_corrige.py",
        "desc": "Corrigé prof fidèle à la Section 2 du cours (mêmes noms, même __str__), virer par réutilisation de retirer/deposer (modularité). Tous les asserts passent (vérifié en exécution)."
      }
    ],
    "evals": [
      "<strong>Séance 9 (entraînement bac)</strong> : sur table, l'exercice « POO &amp; dynamique » du <em>Bac blanc n°2</em> (DS écrit type bac) ; sur machine, l'<em>EP blanche n°2 — fusion &amp; programmation dynamique</em> en conditions réelles (asserts, Thonny). Garde l'<em>EP blanche n°1</em> et le <em>Bac blanc n°1</em> pour les révisions transversales de fin de trimestre.",
      "<strong>Séance 10 (bilan)</strong> : QCM du thème (10 questions) en individuel sur le site, puis projection du diagnostic « Ma classe » pour composer les groupes de remédiation question par question.",
      "<strong>Pour les rapides et l'entraînement continu</strong> : la banque officielle des sujets d'épreuve pratique (lien dans la fiche méthode « Réussir l'épreuve pratique » du site) — télécharge 2 sujets d'avance comme prévu au déroulé de la séance 9."
    ]
  },
  "term-bdd": {
    "intro": "Kit de préparation du thème « Bases de données » (18 h, 9 séances) : la base « lycée » prête pour DB Browser for SQLite (lycee.sql, mêmes tables et mêmes élèves que le cours et le TP du site), 10 requêtes à écrire avec leur corrigé vérifié, un imprimable « schéma relationnel à compléter » (clés primaires, clés étrangères, flèches) et un jeu de cartes « requête → résultat » à apparier pour les îlots. Tout est aligné sur la colonne « À préparer toi-même » du déroulé heure par heure.",
    "imprimables": [
      {
        "titre": "L'énigme de lycee.db — le plan secret de la base à reconstituer (séances 1-2)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:14px;line-height:1.35\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #d97706;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🗄️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">L'énigme de lycee.db</div><div style=\"font-size:14px;color:#475569\">Reconstitue le plan secret de la base du lycée · 4 tables · séances 1-2</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✏️ Solo puis îlot</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">📚 Séances 1-2</span></div><p style=\"margin:4px 0\">Nom : .............................. &nbsp;Classe : ........ &nbsp;&nbsp;<em>Base lycee.db — 4 tables</em></p><div style=\"border-left:6px solid #d97706;background:#fef3c7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> quatre tables, trois liens cachés. Retrouve qui référence qui dans la base lycee.db et écris son plan complet — un vrai travail d'architecte des données !</div><ol style=\"margin:6px 0 10px 18px;padding:0\"><li><strong>Souligne</strong> la clé primaire de chaque table.</li><li>Écris <strong>#</strong> devant chaque clé étrangère.</li><li><strong>Relie par une flèche</strong> chaque clé étrangère à la clé primaire qu'elle référence (3 flèches à tracer).</li><li>Écris les 4 schémas en notation du cours, en bas de page.</li></ol><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"width:6.5cm;vertical-align:top;padding:0\"><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ eleves</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_eleve</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">nom</td></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">classe</td></tr></table></div><div style=\"height:1.4cm\"></div><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ matieres</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_matiere</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">nom</td></tr></table></div></td><td style=\"width:5cm;text-align:center;vertical-align:middle;font-size:12px;color:#64748b\">🏹 (zone des flèches)</td><td style=\"width:6.5cm;vertical-align:top;padding:0\"><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ notes</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_note</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_eleve</td></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_matiere</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">note</td></tr></table></div><div style=\"height:1.4cm\"></div><div style=\"width:6.2cm;border:2.5px solid #d97706;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse;font-size:16px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:6px;font-size:17px\">🗂️ professeurs</th></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_prof</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">nom</td></tr><tr><td style=\"border-top:1px solid #e2e8f0;padding:7px 10px\">id_matiere</td></tr></table></div></td></tr></table><h2 style=\"font-size:16px;margin:12px 0 4px 0;color:#92400e\">📝 Les 4 schémas (notation du cours : souligne la clé primaire, # devant les clés étrangères)</h2><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">eleves( .......................................................................... )</p><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">matieres( ........................................................................ )</p><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">professeurs( ..................................................................... )</p><p style=\"font-family:Consolas,monospace;font-size:15px;margin:6px 0\">notes( ............................................................................ )</p><h2 style=\"font-size:16px;margin:10px 0 4px 0;color:#92400e\">🕵️ Question bonus</h2><p style=\"margin:2px 0\">Pourquoi ne stocke-t-on <strong>pas</strong> le nom de l'élève directement dans la table <strong>notes</strong> ?</p><p style=\"margin:10px 0;border-bottom:1px dotted #64748b\">&nbsp;</p><p style=\"margin:10px 0;border-bottom:1px dotted #64748b\">&nbsp;</p><div style=\"border:2.5px dashed #d97706;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score : ______ / 11 &nbsp;(4 clés primaires + 3 flèches + 4 schémas) &nbsp; ⭐ Question bonus réussie : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> clés primaires : id_eleve, id_matiere, id_prof, id_note. Clés étrangères : notes.id_eleve → eleves.id_eleve ; notes.id_matiere → matieres.id_matiere ; professeurs.id_matiere → matieres.id_matiere. Bonus : le nom serait recopié à chaque note (redondance → anomalies de mise à jour) ; la clé étrangère suffit, la jointure reconstitue l'information.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Bases de données · A4</div></div>"
      },
      {
        "titre": "Le grand match SQL — 8 requêtes cherchent leur résultat (séances 3-5, îlots)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:13px;line-height:1.3\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #d97706;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🃏</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le grand match SQL</div><div style=\"font-size:14px;color:#475569\">8 requêtes, 8 résultats, une seule combinaison parfaite · séances 3-5</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #d97706;background:#fef3c7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpez les cartes, mélangez-les, puis associez chaque carte <strong>REQUÊTE</strong> (1 à 8) à sa carte <strong>RÉSULTAT</strong> (A à H) — sans machine, juste avec les tables ci-dessous. À vos cerveaux !</div><p style=\"margin:4px 0\">Extrait simplifié de la base lycee.db (la colonne <em>matiere</em> remplace <em>id_matiere</em> pour lire sans jointure) :</p><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"vertical-align:top;width:7cm;padding-right:8px\"><div style=\"display:inline-block;border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"border-collapse:collapse;font-size:12px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:.3cm;border-bottom:1px solid #e2e8f0\" colspan=\"3\">eleves</th></tr><tr><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">id_eleve</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">nom</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">classe</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Ada</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TNSI</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">2</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Tim</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TG2</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Lou</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TNSI</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">4</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">Eve</td><td style=\"border-bottom:1px solid #e2e8f0;padding:2px 8px\">TG1</td></tr><tr><td style=\"padding:2px 8px\">5</td><td style=\"padding:2px 8px\">Sam</td><td style=\"padding:2px 8px\">TNSI</td></tr></table></div></td><td style=\"vertical-align:top\"><div style=\"display:inline-block;border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"border-collapse:collapse;font-size:12px\"><tr><th style=\"background:#fef3c7;color:#92400e;padding:.3cm;border-bottom:1px solid #e2e8f0\" colspan=\"4\">notes</th></tr><tr><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">id_note</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">id_eleve</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">matiere</th><th style=\"background:#fef3c7;color:#92400e;padding:2px 8px;border-bottom:1px solid #e2e8f0\">note</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">17</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">2</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">1</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">Maths</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">15</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">2</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">Maths</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">12</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">4</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">9</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">5</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">3</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">Maths</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">14</td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">6</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">4</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">18</td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">7</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">5</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">NSI</td><td style=\"border-bottom:1px solid #e2e8f0;padding:1px 8px\">11</td></tr><tr style=\"background:#f8fafc\"><td style=\"padding:1px 8px\">8</td><td style=\"padding:1px 8px\">5</td><td style=\"padding:1px 8px\">Maths</td><td style=\"padding:1px 8px\">8</td></tr></table></div></td></tr></table><h2 style=\"font-size:14px;margin:8px 0 4px 0;color:#92400e\">⚔️ Cartes REQUÊTE (à découper)</h2><table style=\"width:100%;border-collapse:collapse;table-layout:fixed\"><tr><td style=\"width:50%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">1 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT nom FROM eleves<br>WHERE classe = 'TNSI';</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">2 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT DISTINCT classe<br>FROM eleves;</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">3 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT nom FROM eleves<br>ORDER BY nom;</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">4 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT COUNT(*) FROM notes<br>WHERE matiere = 'NSI';</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">5 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT AVG(note) FROM notes<br>WHERE matiere = 'NSI';</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">6 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT MAX(note)<br>FROM notes;</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">7 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">SELECT eleves.nom FROM eleves<br>JOIN notes ON notes.id_eleve = eleves.id_eleve<br>WHERE matiere = 'Maths' AND note &gt; 12;</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.6cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">8 🔍</strong><div style=\"font-family:Consolas,monospace;font-size:18px\">UPDATE notes<br>SET note = 12;</div></div></td></tr></table><h2 style=\"font-size:14px;margin:8px 0 4px 0;color:#92400e\">🎁 Cartes RÉSULTAT (à découper)</h2><table style=\"width:100%;border-collapse:collapse;table-layout:fixed\"><tr><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">A 🎯</strong><div style=\"font-size:24px;text-align:center;font-weight:800\">18</div></div></td><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">B 🎯</strong><div style=\"font-size:20px;text-align:center;font-weight:800\">Ada<br>Lou</div></div></td><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">C 🎯</strong><div style=\"font-size:20px;text-align:center;font-weight:800\">TNSI<br>TG2<br>TG1</div></div></td><td style=\"width:25%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">D 🎯</strong><div style=\"font-size:24px;text-align:center;font-weight:800\">13.75</div></div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">E 🎯</strong><div style=\"font-size:18px;text-align:center;font-weight:800\">Ada, Eve, Lou,<br>Sam, Tim</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">F 🎯</strong><div style=\"font-size:18px;text-align:center;font-weight:800\">Toutes les notes<br>valent 12 !</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">G 🎯</strong><div style=\"font-size:20px;text-align:center;font-weight:800\">Ada<br>Lou<br>Sam</div></div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #d97706;border-radius:14px;background:#fff;height:2.4cm;padding:6px;color:#1e293b\"><strong style=\"font-weight:800\">H 🎯</strong><div style=\"font-size:24px;text-align:center;font-weight:800\">4</div></div></td></tr></table><div style=\"border:2.5px dashed #d97706;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 8 paires &nbsp; ⚡ Défi éclair — les 8 paires trouvées avant l'îlot voisin : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> 1-G · 2-C · 3-E · 4-H · 5-D · 6-A · 7-B · 8-F. La carte 8 lance le débat « où est passé le WHERE ? » avant la séance INSERT/UPDATE/DELETE.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Bases de données · A4</div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "lycee.sql",
        "chemin": "assets/fichiers/terminale/term-bdd/lycee.sql",
        "desc": "La base « lycée » complète, prête pour DB Browser for SQLite : 4 tables (matieres, professeurs, eleves, notes) avec clés primaires, clés étrangères et contrainte CHECK sur les notes ; 15 à 25 lignes par table, reprenant les élèves du TP du site (Ada, Tim, Lou, Eve, Sam…). Ré-exécutable à volonté (DROP puis CREATE) : à faire tourner une fois sur chaque poste avant la séance 1 pour produire lycee.db."
      },
      {
        "nom": "requetes.sql",
        "chemin": "assets/fichiers/terminale/term-bdd/requetes.sql",
        "desc": "Squelette élève : 10 exercices en commentaires (SELECT, WHERE, ORDER BY, DISTINCT, COUNT, AVG, jointure, GROUP BY, double jointure, INSERT/UPDATE/DELETE), chacun avec son résultat attendu qui joue le rôle des asserts. À distribuer aux séances 3 à 5 avec la fiche réponse papier (écrire d'abord, exécuter ensuite)."
      },
      {
        "nom": "requetes_corrige.sql",
        "chemin": "assets/fichiers/terminale/term-bdd/requetes_corrige.sql",
        "desc": "Corrigé prof des 10 requêtes, vérifié par exécution sur lycee.sql (résultats conformes aux valeurs annoncées, y compris le refus du SGBD à la suppression de Sam pour cause d'intégrité référentielle — exercice 10c)."
      }
    ],
    "evals": [
      "<p><strong>Pendant le thème</strong> : le TP noté SQL s'appuie sur requetes.sql (séances 3-5) ; les cartes à apparier servent d'évaluation formative en îlots.</p>",
      "<p><strong>Séance 8 (entraînement bac)</strong> : l'exercice SQL du <em>Bac blanc n°1 — écrit type bac (arbres · SQL · graphes)</em> en conditions réelles au stylo, puis un sujet SQL/tables de la <em>banque officielle des sujets d'épreuve pratique</em> sur machine, préparé avec la fiche méthode « Réussir l'épreuve pratique » du site ; les <em>EP blanches n°1 et n°2</em> (transversales) restent disponibles pour un entraînement machine supplémentaire.</p>",
      "<p><strong>Séance 9 (bilan)</strong> : le <em>QCM du thème</em> (10 questions) avec remontée dans « Ma classe » pour piloter la remédiation par groupes de besoin.</p>"
    ]
  },
  "term-archi-reseaux": {
    "intro": "Kit de préparation du thème « Architectures, systèmes & réseaux » (18 h, période 5). Il couvre la colonne « À préparer toi-même » du déroulé : le graphe du réseau à 5 routeurs du cours avec tables RIP/OSPF vierges (1 par îlot, séance 5), les cartes découpables « états d'un processus » pour le jeu de rôle de la séance 2, et un squelette Python routage.py (table de routage en dictionnaire, plus court chemin en nombre de sauts) avec son corrigé vérifié.",
    "imprimables": [
      {
        "titre": "La course des paquets — RIP contre OSPF sur le réseau du cours (séance 5, 1 par îlot)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:14px;line-height:1.35\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0891b2;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🛰️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La course des paquets — RIP contre OSPF</div><div style=\"font-size:14px;color:#475569\">Le réseau à 5 routeurs du cours · tables de routage à remplir · séance 5</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🗺️ 1 fiche par îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #0891b2;background:#cffafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> deux protocoles, deux visions de la « meilleure » route. Remplis la table de routage de R1 en RIP puis en OSPF — et compare leurs choix !</div><p style=\"font-size:13px;margin:0 0 8px\">Coût OSPF proportionnel à 1/débit : liaison 100 Mbit/s → coût 1 ; liaison 10 Mbit/s → coût 10. RIP compte les <strong>sauts</strong>, OSPF additionne les <strong>coûts</strong>.</p><svg viewBox=\"0 0 620 300\" width=\"620\" height=\"300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display:block;margin:0 auto 10px;border:2px solid #cbd5e1;border-radius:12px\"><line x1=\"85\" y1=\"140\" x2=\"300\" y2=\"55\" stroke=\"#c0392b\" stroke-width=\"3\"/><line x1=\"300\" y1=\"55\" x2=\"520\" y2=\"140\" stroke=\"#c0392b\" stroke-width=\"3\"/><line x1=\"85\" y1=\"150\" x2=\"215\" y2=\"235\" stroke=\"#0891b2\" stroke-width=\"5\"/><line x1=\"215\" y1=\"235\" x2=\"390\" y2=\"235\" stroke=\"#0891b2\" stroke-width=\"5\"/><line x1=\"390\" y1=\"235\" x2=\"520\" y2=\"150\" stroke=\"#0891b2\" stroke-width=\"5\"/><text x=\"165\" y=\"80\" font-size=\"13\" fill=\"#c0392b\">10 Mbit/s · coût 10</text><text x=\"400\" y=\"80\" font-size=\"13\" fill=\"#c0392b\">10 Mbit/s · coût 10</text><text x=\"70\" y=\"210\" font-size=\"13\" fill=\"#0891b2\">100 Mbit/s · coût 1</text><text x=\"240\" y=\"260\" font-size=\"13\" fill=\"#0891b2\">100 Mbit/s · coût 1</text><text x=\"455\" y=\"215\" font-size=\"13\" fill=\"#0891b2\">100 Mbit/s · coût 1</text><g font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\"><circle cx=\"70\" cy=\"145\" r=\"26\" fill=\"#fdf2e9\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"70\" y=\"151\">R1</text><circle cx=\"300\" cy=\"50\" r=\"26\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"300\" y=\"56\">R2</text><circle cx=\"215\" cy=\"235\" r=\"26\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"215\" y=\"241\">R3</text><circle cx=\"390\" cy=\"235\" r=\"26\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"390\" y=\"241\">R4</text><circle cx=\"535\" cy=\"145\" r=\"26\" fill=\"#eafaf1\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"535\" y=\"151\">R5</text></g></svg><h2 style=\"font-size:16px;margin:4px 0;color:#155e75\">🧭 1. Table de routage de R1</h2><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"border-collapse:collapse;width:100%;font-size:15px;text-align:center\"><tr><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">Destination</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">RIP : prochain saut</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">RIP : nb de sauts</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">OSPF : prochain saut</th><th style=\"background:#cffafe;color:#155e75;padding:.3cm;border-bottom:1px solid #e2e8f0\">OSPF : coût total</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:12px;font-weight:bold\">R2</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:12px;font-weight:bold\">R3</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:12px;font-weight:bold\">R4</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"padding:12px;font-weight:bold\">R5</td><td style=\"border-left:1px solid #e2e8f0\"></td><td style=\"border-left:1px solid #e2e8f0\"></td><td style=\"border-left:1px solid #e2e8f0\"></td><td style=\"border-left:1px solid #e2e8f0\"></td></tr></table></div><h2 style=\"font-size:16px;margin:12px 0 4px;color:#155e75\">🚨 2. Alerte panne — question type bac (2 phrases rédigées)</h2><p style=\"font-size:14px;margin:0 0 4px\">La liaison R3–R4 tombe en panne. Quelle devient la route choisie par OSPF de R1 vers R5 ? Quel est son nouveau coût ?</p><div style=\"border:2px solid #cbd5e1;border-radius:12px;height:2.6cm\"></div><div style=\"border:2.5px dashed #0891b2;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 16 cases &nbsp; ⚡ Duel inter-îlots — première table entièrement juste : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> R1 vers R5 : RIP inscrit « prochain saut R2 » (2 sauts) ; OSPF inscrit « prochain saut R3 » (coût 1+1+1 = 3 contre 20 via R2). Panne R3–R4 : OSPF bascule sur R1→R2→R5, coût 20.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Architectures, systèmes &amp; réseaux · A4</div></div>"
      },
      {
        "titre": "La vie secrète d'un processus — jeu de rôle et tri de scénarios (séance 2)",
        "html": "<div style=\"font-family:Arial,Helvetica,sans-serif;width:19cm;margin:0 auto;color:#1e293b;font-size:13px;line-height:1.3\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0891b2;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🎭</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La vie secrète d'un processus</div><div style=\"font-size:14px;color:#475569\">4 états, 8 scénarios vécus — à toi de reconstituer le cycle de vie · séance 2</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎭 Jeu de rôle</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🧠 Sans machine</span></div><div style=\"border-left:6px solid #0891b2;background:#cffafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpe les 4 cartes ÉTAT et les 8 cartes SCÉNARIO. En îlot : pose chaque scénario sur l'état (ou la transition entre deux états) qui lui correspond, puis reconstitue le cycle de vie complet au tableau.</div><h2 style=\"font-size:14px;margin:8px 0 4px 0;color:#155e75\">🏷️ Cartes ÉTAT</h2><table style=\"border-collapse:collapse;width:100%;text-align:center;table-layout:fixed\"><tr><td style=\"width:50%;padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">✨ NOUVEAU</div></td><td style=\"width:50%;padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">🚦 PRÊT</div></td></tr><tr><td style=\"padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">⚡ ÉLU</div></td><td style=\"padding:4px\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.6cm;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#1e293b\">🚧 BLOQUÉ</div></td></tr></table><h2 style=\"font-size:14px;margin:10px 0 4px 0;color:#155e75\">🎬 Cartes SCÉNARIO</h2><table style=\"border-collapse:collapse;width:100%;margin-top:2px;font-size:18px;table-layout:fixed\"><tr><td style=\"width:50%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">① 🖱️ Tu double-cliques sur l'icône de Thonny : le système charge le programme en mémoire.</div></td><td style=\"width:50%;padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">② 🪑 Le processus a toutes ses ressources et attend son tour dans la file de l'ordonnanceur.</div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">③ ⚙️ L'ordonnanceur lui donne le processeur : ses instructions s'exécutent.</div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">④ ⏰ Son quantum de temps est écoulé : le tourniquet le remet en fin de file.</div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">⑤ 💾 Il demande une lecture sur le disque et ne peut rien faire tant qu'elle n'est pas finie.</div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">⑥ ✅ La lecture disque se termine : il peut de nouveau demander le processeur.</div></td></tr><tr><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;height:2.5cm;padding:8px;color:#1e293b\">⑦ ⌨️ Le programme attend une touche du clavier ; l'utilisateur est parti en récré…</div></td><td style=\"padding:4px;vertical-align:top\"><div style=\"border:2.5px solid #0891b2;border-radius:14px;background:#fff;height:2.5cm;padding:8px;color:#1e293b\">⑧ 🔒 Deux processus détiennent chacun un fichier et attendent celui de l'autre : personne n'avance.</div></td></tr></table><div style=\"border:2.5px dashed #0891b2;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score de l'îlot : ______ / 8 scénarios bien placés &nbsp; ⭐ Défi bonus — cycle de vie complet reconstitué au tableau : ☐</div><div style=\"margin-top:8px;font-size:11px;color:#94a3b8\">✂️ plier ici — <strong>réponses prof :</strong> ① nouveau ; ② prêt ; ③ élu (transition prêt → élu) ; ④ élu → prêt ; ⑤ élu → bloqué ; ⑥ bloqué → prêt ; ⑦ bloqué ; ⑧ interblocage : deux processus bloqués pour toujours (ouvre la séance 3).</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Architectures, systèmes &amp; réseaux · A4</div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "routage.py",
        "chemin": "assets/fichiers/terminale/term-archi-reseaux/routage.py",
        "desc": "Squelette élève (séance 5, prolongement machine de l'exercice 2) : le réseau R1–R5 du cours en dictionnaire, trois fonctions à compléter — nb_sauts (RIP, parcours en largeur avec deque), cout_ospf (somme des coûts d'un chemin) et table_rip (table de routage {destination: prochain saut}). Consignes en commentaires, asserts fournis : RIP choisit R2 (2 sauts) là où OSPF choisit R3 (coût 3)."
      },
      {
        "nom": "routage_corrige.py",
        "chemin": "assets/fichiers/terminale/term-archi-reseaux/routage_corrige.py",
        "desc": "Corrigé professeur complet ; exécuté et vérifié : tous les asserts passent (nb_sauts par BFS, cout_ospf, table_rip avec min sur les voisins)."
      }
    ],
    "evals": [
      "<strong>Séance 8</strong> — imprimer l'exercice 1 « Processus, ordonnancement et routage » du <strong>Bac blanc n°2</strong> (rubrique Évaluations, sur table, 45 min) puis un exercice au choix de l'<strong>EP blanche n°1 ou n°2</strong> sur Thonny (vrai Python, asserts à faire passer).",
      "<strong>Séance 9</strong> — QCM du thème (10 questions) sur les comptes élèves, diagnostic par question dans « Ma classe », remédiation par pôles (Exercices 2, 5–8).",
      "Pour les rapides et les révisions : un sujet de la <strong>banque officielle Éduscol</strong> des épreuves pratiques, préparé avec la fiche méthode « Réussir l'épreuve pratique » du site."
    ]
  },
  "term-histoire": {
    "intro": "Kit de préparation du thème « Histoire de l'informatique » (4 h, fil rouge de l'année). Il couvre la colonne « À préparer toi-même » du déroulé : la fiche « exposé express » avec sa grille d'évaluation par les pairs (rituel Grand oral installé dès la séance 1) et les cartes de sujets d'exposés à distribuer aux binômes (mêmes figures que le cours : Lovelace, Turing, von Neumann, Hopper, Shannon, Cerf/Kahn, Berners-Lee…). La frise chronologique vierge se trace directement au tableau ; le sujet machine de la séance 2 est déjà fourni par l'EP blanche n°1 du site. Aucun fichier Python : le thème se travaille sur le site et sur papier.",
    "imprimables": [
      {
        "titre": "5 minutes pour briller — exposé express + grille d'évaluation par les pairs",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b;font-size:14px\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #db2777;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🎤</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">5 minutes pour briller</div><div style=\"font-size:14px;color:#475569\">Exposé express · Histoire de l'informatique · entraînement au Grand oral</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En binôme</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">⏱ 3 à 5 min chrono</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎤 À l'oral, sans lire</span></div><div style=\"border-left:6px solid #db2777;background:#fce7f3;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> tu as 5 minutes chrono pour faire découvrir ta figure de l'informatique à la classe — une problématique, trois repères datés, un lien avec le programme. Le concept avant l'anecdote : fais-nous retenir l'essentiel !</div><p style=\"margin:4px 0 10px\">Binôme : ______________________ &nbsp; Date de passage : __________</p><div style=\"background:#fce7f3;color:#9d174d;font-size:17px;font-weight:800;padding:6px 12px;border-radius:10px;margin:10px 0 6px\">1. Fiche de préparation (à rendre avant le passage)</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;width:32%;font-weight:bold;background:#f8fafc\">Sujet (figure ou invention)</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;height:34px\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;font-weight:bold;background:#f8fafc\">Problématique (une seule question, à laquelle l'exposé répond)</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;height:48px\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm;font-weight:bold;background:#f8fafc\">3 repères historiques (date + fait précis)</td><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">1. ________________________________________________<br><br>2. ________________________________________________<br><br>3. ________________________________________________</td></tr><tr><td style=\"padding:.3cm;font-weight:bold;background:#f8fafc\">1 lien avec le programme de Terminale (quel thème, quelle notion ?)</td><td style=\"padding:.3cm;height:48px\"></td></tr></table></div><p style=\"margin:6px 0 12px;font-style:italic;color:#475569\">Consignes : 3 à 5 minutes, sans lire ses notes (un plan de 5 mots maximum est autorisé), puis une question du public. Le concept avant l'anecdote : que doit-on retenir de cette personne ou de cette invention ?</p><div style=\"background:#fce7f3;color:#9d174d;font-size:17px;font-weight:800;padding:6px 12px;border-radius:10px;margin:10px 0 6px\">2. Grille d'évaluation par les pairs (évaluateur : ______________________)</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden\"><table style=\"width:100%;border-collapse:collapse\"><tr><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;text-align:left\">Critère</th><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;width:12%\">0</th><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;width:12%\">1</th><th style=\"background:#fce7f3;color:#9d174d;padding:.3cm;width:12%\">2</th></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Contenu exact et daté (les 3 repères sont justes)</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Problématique claire, annoncée au début, réponse à la fin</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Lien explicite avec une notion du programme de NSI</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#f8fafc\"><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Qualité orale : voix posée, regard vers le public, sans lire</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr><td style=\"border-bottom:1px solid #e2e8f0;padding:.3cm\">Temps respecté (3 à 5 min) et réponse à la question du public</td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td><td style=\"border-bottom:1px solid #e2e8f0;border-left:1px solid #e2e8f0\"></td></tr><tr style=\"background:#fce7f3\"><td style=\"padding:.3cm;font-weight:bold;color:#9d174d\">Total</td><td colspan=\"3\" style=\"padding:.3cm;font-weight:bold;color:#9d174d;border-left:1px solid #e2e8f0\">&nbsp;&nbsp;/ 10</td></tr></table></div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin-top:8px\"><table style=\"width:100%;border-collapse:collapse\"><tr><td style=\"padding:.3cm;width:50%;vertical-align:top;height:56px;border-right:1px solid #e2e8f0\"><strong>Un point fort :</strong></td><td style=\"padding:.3cm;vertical-align:top\"><strong>Un conseil pour le Grand oral :</strong></td></tr></table></div><div style=\"border:2.5px dashed #db2777;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Score du binôme : ______ / 10 &nbsp; ⭐ Défi bonus — pas un seul regard sur les notes : ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Histoire de l'informatique · A4</div></div>"
      },
      {
        "titre": "La loterie des pionniers — 12 cartes de sujets d'exposés à tirer au sort",
        "html": "<div style=\"width:19cm;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#1e293b\"><div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #db2777;padding-bottom:10px;margin-bottom:10px\"><div style=\"font-size:44px;line-height:1\">🕰️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La loterie des pionniers</div><div style=\"font-size:14px;color:#475569\">12 figures et inventions qui ont fait l'informatique — un sujet d'exposé par binôme</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">👥 En binôme</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 6px 0\">🎲 Tirage au sort</span></div><div style=\"border-left:6px solid #db2777;background:#fce7f3;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px\"><strong>🎯 Mission :</strong> découpe les cartes pour le tirage au sort en fin de séance 1. Ton binôme tire une carte : c'est ta figure, ta légende, ton « exposé express » de 5 min (fiche fournie). Les mots-clés de la carte sont un point de départ, pas un plan !</div><table style=\"width:100%;border-collapse:separate;border-spacing:8px;table-layout:fixed\"><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;width:33%;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">✒️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Ada Lovelace</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1843 · le premier programme · machine analytique de Babbage</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;width:33%;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🔐</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Alan Turing</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1936 · calculabilité · Bletchley Park · test de Turing (1950)</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;width:33%;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🧠</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">John von Neumann</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1945 · le programme stocké en mémoire · architecture</div></td></tr><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🐛</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Grace Hopper</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">compilateur · COBOL · le premier « bug » (1947)</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">💡</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Claude Shannon</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1948 · le bit · théorie de l'information · log2(N)</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🧵</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Le métier de Jacquard</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1801 · cartes perforées · la première machine programmée</div></td></tr><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">⚙️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Pascal et Leibniz</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1642 · la Pascaline · calcul mécanique · le binaire</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🌐</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Cerf et Kahn</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">années 1970 · TCP/IP · ARPANET · la naissance d'Internet</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🕸️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Tim Berners-Lee</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1989-1991 · CERN · le Web : HTML, URL, HTTP</div></td></tr><tr><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🐧</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Thompson et Ritchie</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">années 1970 · Unix · le langage C · Linux, macOS</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">🖱️</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">Engelbart et le Xerox PARC</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1968 · la souris · fenêtres et icônes · interface graphique</div></td><td style=\"border:2.5px solid #db2777;border-radius:14px;background:#fff;height:5cm;text-align:center;vertical-align:middle;padding:6px\"><div style=\"font-size:26px\">📱</div><div style=\"font-size:22px;font-weight:800;color:#1e293b\">De l'ENIAC au smartphone</div><div style=\"font-size:16px;margin-top:6px;color:#475569\">1945-2007 · miniaturisation · l'ordinateur dans la poche · IA</div></td></tr></table><div style=\"border:2.5px dashed #db2777;border-radius:12px;padding:10px;margin-top:10px;font-size:16px;font-weight:700\">🏆 Sujet tiré par le binôme : ____________________ &nbsp; ⭐ Défi bonus — une date de la carte citée de mémoire, sans la relire : ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Terminale · Histoire de l'informatique · A4</div></div>"
      }
    ],
    "fichiers": [],
    "evals": [
      "<p><strong>Séance 2 :</strong> fais passer sur machine (Thonny/Capytale) l'exercice 1 de l'<strong>EP blanche n°1</strong> (recherche dans un ABR, en découverte du format) et le <strong>QCM du thème</strong> (10 questions) avec suivi en direct dans « Ma classe ».</p>",
      "<p><strong>Plus tard dans l'année :</strong> l'<strong>EP blanche n°2</strong> et les <strong>DS écrits n°1 et n°2</strong> (transversaux, type bac) se placent après les thèmes structures de données et algorithmique.</p>",
      "<p><strong>Dès maintenant :</strong> projette la fiche méthode « Réussir l'épreuve pratique » du site et montre la banque officielle des sujets d'EP (Éduscol) — l'entraînement sur les vrais sujets commence en début d'année.</p>"
    ]
  }
};

/* ---------------- Encart « coder pour de vrai » ---------------- */
const CODER_REEL = {
  titre: "💻 Coder pour de vrai (au-delà du site)",
  html: `
    <p>L'éditeur Python de ce site (Pyodide) tourne <em>dans le navigateur</em> : parfait pour expérimenter vite.
    Mais en Terminale, l'<strong>épreuve pratique</strong> se déroule sur un <strong>vrai ordinateur</strong>, avec un vrai
    interpréteur Python et de vrais fichiers. Il est donc indispensable de coder aussi dans un environnement réel :</p>
    <ul>
      <li><strong>Capytale</strong> — service de l'Éducation nationale (compte ENT) pour distribuer/ramasser des notebooks et scripts.</li>
      <li><strong>Thonny</strong> — IDE Python simple et gratuit, avec un débogueur pas-à-pas idéal pour comprendre la récursivité.</li>
      <li><strong>IDLE</strong> (livré avec Python) ou un éditeur comme VS Code pour les plus à l'aise.</li>
      <li>Pour le SQL : <strong>DB Browser for SQLite</strong> ou le module <code>sqlite3</code> de Python.</li>
    </ul>
    <p class="note">Bon réflexe : <em>découvrir/réviser</em> une notion sur le site, puis <em>produire</em> le code sur
    Capytale/Thonny, dans les conditions de l'épreuve pratique (vrais fichiers, exécution complète).</p>`,
};

/* ---------------- Fiches méthode (transversales) ---------------- */
const METHODES = [
  {
    titre: "Écrire une fonction récursive sans se tromper",
    html: `
      <p>Une fonction <strong>récursive</strong> s'appelle elle-même sur un problème plus petit. Pour qu'elle se termine,
      il faut <strong>toujours</strong> deux ingrédients :</p>
      <ul>
        <li>un ou plusieurs <strong>cas de base</strong> : un problème si petit qu'on répond directement (ex. liste vide, arbre <code>None</code>) ;</li>
        <li>un <strong>appel récursif</strong> qui se rapproche du cas de base (sinon, récursion infinie !).</li>
      </ul>
      <p>Méthode en 3 questions : <strong>1.</strong> Quel est le cas le plus simple ? (cas de base)
      <strong>2.</strong> Comment réduire le problème d'un cran ? <strong>3.</strong> Comment combiner le résultat de l'appel
      récursif avec l'élément courant ?</p>
      <p class="warnbox">⚠️ Oublier le cas de base = boucle infinie / dépassement de pile (« RecursionError »). Toujours l'écrire en premier.</p>`,
  },
  {
    titre: "Estimer le coût (complexité) d'un algorithme",
    html: `
      <p>Le <strong>coût</strong> d'un algorithme, c'est l'<strong>ordre de grandeur</strong> du nombre d'opérations selon
      la taille <code>n</code> des données. On le note avec un « grand O » :</p>
      <ul>
        <li><strong>O(1)</strong> — temps constant : accès à <code>liste[i]</code>, empiler/dépiler une pile.</li>
        <li><strong>O(log n)</strong> — on divise le problème par 2 à chaque étape : recherche dichotomique.</li>
        <li><strong>O(n)</strong> — on parcourt les données une fois : somme d'une liste, parcours d'un graphe.</li>
        <li><strong>O(n²)</strong> — deux boucles imbriquées : tri par sélection, comparaison de toutes les paires.</li>
      </ul>
      <p class="note">💡 Réflexe : compter les boucles et leur imbrication, et repérer si l'on « coupe le problème en deux »
      (souvent un <code>log</code>). Un O(n²) sur 10 000 données = 100 millions d'opérations : on cherche mieux.</p>`,
  },
  {
    titre: "🎯 Réussir l'épreuve pratique",
    html: `
      <p>L'<strong>épreuve pratique</strong> de spécialité se déroule <strong>sur ordinateur</strong>, avec un vrai
      interpréteur Python : <strong>2 exercices à traiter en 1 heure</strong>, notés sur 20. Le sujet est tiré d'une
      banque nationale <strong>publique</strong> : on peut (on doit !) s'entraîner sur les vrais sujets toute l'année.</p>
      <ul>
        <li><strong>Exercice 1</strong> — écrire <em>de zéro</em> une fonction à partir d'une spécification et de tests fournis.</li>
        <li><strong>Exercice 2</strong> — <em>compléter</em> un programme donné (trous <code>...</code>, assertions, docstring…).</li>
      </ul>
      <h3>Le déroulé conseillé (1 h)</h3>
      <ol>
        <li><strong>≈ 5 min</strong> — lire les <em>deux</em> exercices en entier avant de taper quoi que ce soit ; commencer par celui qui t'inspire le plus (pas forcément le 1 !).</li>
        <li><strong>≈ 20 min</strong> — premier exercice : coder, exécuter, vérifier les <code>assert</code>.</li>
        <li><strong>≈ 25 min</strong> — second exercice : compléter <em>trou par trou</em>, en relançant le programme après chaque trou rempli.</li>
        <li><strong>≈ 10 min</strong> — tout relancer une dernière fois, vérifier les cas limites (liste vide, valeur absente…).</li>
      </ol>
      <h3>Les bons réflexes</h3>
      <ul>
        <li><strong>Lis les <code>assert</code> d'abord</strong> : ce sont eux, la spécification exacte. Ils te donnent le nom de la fonction, l'ordre des paramètres et le type du résultat (<code>True</code> ? un indice ? une liste ?).</li>
        <li><strong>Teste au fur et à mesure</strong> : n'écris jamais 15 lignes d'un coup. Une ligne ou deux → on exécute → on regarde. Un <code>print</code> temporaire pour voir une variable, c'est permis (pense à l'enlever).</li>
        <li><strong>Respecte scrupuleusement le nom demandé</strong> : <code>recherche</code> ≠ <code>Recherche</code> ≠ <code>rechercher</code>. Sinon, aucun test ne passe.</li>
        <li>Bloqué ? Une version <em>simple</em> qui passe les tests vaut tous les points : il n'y a pas de points de style ni de bonus d'élégance.</li>
        <li>Pendant l'année : code aussi <em>hors du site</em> (Thonny, Capytale) pour être à l'aise dans les conditions réelles de l'épreuve.</li>
      </ul>
      <p class="note">📚 <strong>Entraîne-toi sur les sujets officiels</strong> : la
      <a href="https://eduscol.education.fr/2661/banque-des-epreuves-pratiques-de-specialite-nsi" target="_blank" rel="noopener">banque
      des sujets de l'épreuve pratique de NSI (Éduscol)</a> est publiée chaque année. Les deux « épreuves pratiques blanches »
      de la rubrique <strong>Évaluations</strong> de ce site sont construites sur ce format.</p>`,
  },
  {
    titre: "✍️ Réussir l'épreuve écrite",
    html: `
      <p>L'<strong>épreuve écrite</strong> de spécialité dure <strong>3 h 30</strong> et comporte
      <strong>3 exercices</strong> indépendants, notés sur 20 au total. Chaque exercice <strong>croise plusieurs thèmes</strong>
      du programme (par exemple : arbres + récursivité, SQL, graphes + parcours, réseaux + processus…).</p>
      <h3>Gérer son temps (3 exercices en 3 h 30)</h3>
      <ul>
        <li>Budget indicatif : <strong>≈ 1 h par exercice</strong>, plus 10 min de lecture au début et 20 min de relecture à la fin.</li>
        <li>Commence par lire <strong>tout le sujet</strong>, puis attaque l'exercice où tu es le plus à l'aise : les points valent pareil partout.</li>
        <li>Dans un exercice, les questions sont <strong>graduées</strong> : les premières (lire un code, dérouler un algorithme à la main, question de cours) sont accessibles — ne les laisse <em>jamais</em> vides.</li>
        <li>Bloqué plus de 5 minutes sur une question ? Saute-la et <strong>reviens plus tard</strong>. Les questions suivantes sont souvent indépendantes, et tu as le droit d'<em>utiliser</em> une fonction d'une question précédente même sans l'avoir écrite.</li>
      </ul>
      <h3>Rédiger le code au propre</h3>
      <ul>
        <li>Écris d'abord ton code <strong>au brouillon</strong>, déroule-le à la main sur un petit exemple, puis recopie-le <strong>au propre</strong> sur ta copie.</li>
        <li>En Python, l'<strong>indentation fait partie de la syntaxe</strong> : au stylo, décale nettement chaque bloc (≈ 1 cm par niveau) et aligne verticalement les instructions d'un même bloc.</li>
        <li>Respecte les <strong>noms</strong> de fonctions et de variables imposés par l'énoncé, et n'oublie pas le <code>return</code>.</li>
        <li>Pour les questions de cours ou de justification : une ou deux <strong>phrases rédigées</strong> suffisent, mais il faut une justification (« car on divise le problème par 2 à chaque étape », « car la clé étrangère référence… »).</li>
        <li>En SQL : écris les mots-clés en majuscules (<code>SELECT … FROM … WHERE …</code>) et termine par <code>;</code> — c'est plus lisible pour le correcteur (et pour toi).</li>
      </ul>
      <p class="note">🎯 Entraînement : les deux sujets « Bac blanc écrit » de la rubrique <strong>Évaluations</strong> reproduisent
      ce format (3 exercices croisés). Fais-les en temps limité, sans document, code au stylo — comme le jour J.</p>`,
  },
  {
    titre: "📚 S'entraîner sur les annales",
    html: `
      <p>Rien ne prépare mieux à l'épreuve écrite que les <strong>vrais sujets</strong> : mêmes notions, mêmes formulations,
      même barème. Les sujets tombent chaque année dans plusieurs centres (Métropole, Amérique du Nord, Asie, Polynésie,
      Centres étrangers…) : cela fait des <strong>dizaines de sujets complets</strong> à ta disposition.</p>
      <h3>Où trouver les sujets officiels</h3>
      <ul>
        <li><a href="https://eduscol.education.gouv.fr/5199/annales-des-epreuves-du-baccalaureat-des-voies-generale-et-technologique" target="_blank" rel="noopener">Éduscol
        — annales des épreuves du baccalauréat</a> : la page <strong>officielle</strong> du ministère, avec les
        <strong>sujets zéro</strong>, les spécimens et les sujets des sessions précédentes.</li>
        <li><a href="https://www.sujetdebac.fr/annales/specialites/spe-numerique-informatique/" target="_blank" rel="noopener">sujetdebac.fr
        — spécialité NSI</a> : tous les sujets NSI <strong>archivés session par session</strong> (Métropole, Antilles-Guyane,
        Amérique du Nord, Asie…), avec des corrigés.</li>
        <li><a href="https://glassus.github.io/terminale_nsi/T6_Annales/epreuve_bac/" target="_blank" rel="noopener">Site
        de G. Lassus — annales de l'épreuve écrite</a> : les sujets classés et commentés par un professeur de NSI.</li>
        <li>Pour l'épreuve <strong>pratique</strong> : la <a href="https://eduscol.education.fr/2661/banque-des-epreuves-pratiques-de-specialite-nsi" target="_blank" rel="noopener">banque
        officielle des sujets (Éduscol)</a>, publiée chaque année.</li>
      </ul>
      <h3>Travailler une annale en conditions réelles</h3>
      <ol>
        <li><strong>Avant</strong> — choisis un sujet <em>complet</em> (3 exercices, notés sur 20) et bloque
        <strong>3 h 30</strong> sans téléphone : code au stylo, aucun document, comme le jour J.</li>
        <li><strong>Pendant</strong> — applique la fiche « Réussir l'épreuve écrite » : 10 min de lecture,
        ≈ 1 h par exercice en commençant par le plus confortable, 20 min de relecture. Ne laisse <em>aucune</em>
        première question vide.</li>
        <li><strong>Après</strong> — corrige-toi <strong>au barème</strong>, note ta note sur 20, et surtout tiens une
        <strong>fiche d'erreurs</strong> : pour chaque point perdu, la notion en cause et la page du site où la revoir.
        Une semaine plus tard, <strong>refais</strong> les questions ratées : c'est là que tu progresses vraiment.</li>
      </ol>
      <h3>Les 10 notions qui tombent le plus à l'écrit — et où les réviser ici</h3>
      <table>
        <tr><th>Notion (très fréquente dans les sujets)</th><th>Où réviser sur le site</th></tr>
        <tr><td>Arbres binaires, ABR, parcours (infixe, préfixe, suffixe)</td><td><a href="#term-structures">Structures de données</a></td></tr>
        <tr><td>Graphes : représentations, BFS/DFS, plus court chemin</td><td><a href="#term-structures">Structures de données</a> puis <a href="#term-algo">Algorithmique</a> (Dijkstra)</td></tr>
        <tr><td>SQL : SELECT, jointures, agrégats, UPDATE/INSERT</td><td><a href="#term-bdd">Bases de données</a></td></tr>
        <tr><td>POO : classes, attributs, méthodes, self</td><td><a href="#term-langages">Langages et programmation</a></td></tr>
        <tr><td>Récursivité (écrire, dérouler, arbre des appels)</td><td><a href="#term-langages">Langages et programmation</a></td></tr>
        <tr><td>Listes chaînées, piles, files (interface vs implémentation)</td><td><a href="#term-structures">Structures de données</a></td></tr>
        <tr><td>Routage : tables, RIP (sauts) vs OSPF (coût)</td><td><a href="#term-archi-reseaux">Architectures, systèmes &amp; réseaux</a></td></tr>
        <tr><td>Processus : états, ordonnancement, interblocage</td><td><a href="#term-archi-reseaux">Architectures, systèmes &amp; réseaux</a></td></tr>
        <tr><td>Dichotomie, tri fusion, diviser pour régner, coûts</td><td><a href="#term-algo">Algorithmique</a></td></tr>
        <tr><td>Programmation dynamique et mémoïsation</td><td><a href="#term-langages">Langages</a> puis <a href="#term-algo">Algorithmique</a></td></tr>
      </table>
      <p class="note">💡 Rythme conseillé en période de révisions : <strong>1 annale complète par semaine</strong> en temps
      limité + les QCM du site sur le thème dominant de la semaine. Les bac blancs de la rubrique Évaluations complètent
      ce que les annales ne couvrent pas encore.</p>`,
  },
  {
    titre: "🎤 Réussir le Grand oral",
    html: `
      <p>Le <strong>Grand oral</strong> est l'épreuve au plus gros coefficient du bac général : <strong>coefficient 10</strong>.
      Il se prépare toute l'année — pas dans les quinze derniers jours. Bonne nouvelle : la NSI regorge de questions
      passionnantes à défendre.</p>
      <h3>Le format officiel (en vigueur depuis la session 2024)</h3>
      <ul>
        <li><strong>20 minutes de préparation</strong> — le jury choisit <strong>une</strong> de tes deux questions ;
        tu peux préparer un support (schéma, mots-clés) que tu remets au jury, mais il n'est <strong>pas évalué</strong>.</li>
        <li><strong>10 minutes d'exposé</strong> — <strong>debout, sans notes</strong> : tu expliques pourquoi tu as choisi
        cette question, puis tu y réponds de façon construite.</li>
        <li><strong>10 minutes d'entretien</strong> — le jury (2 examinateurs) rebondit sur ton exposé pour te faire
        approfondir et préciser.</li>
      </ul>
      <p class="warnbox">⚠️ Depuis 2024, il n'y a <strong>plus</strong> de temps dédié au projet d'orientation : toute
      l'épreuve porte sur ta question et son contenu. L'exposé dure 10 minutes (et non plus 5) : il faut du fond.</p>
      <h3>Ce que le jury évalue vraiment</h3>
      <ul>
        <li><strong>La qualité orale</strong> : voix posée et audible, regard vers le jury, débit maîtrisé — pas de récitation.</li>
        <li><strong>La prise de parole en continu</strong> : tenir 10 minutes structurées (accroche → développement → réponse à la question).</li>
        <li><strong>Les connaissances</strong> : des notions NSI <em>exactes</em>, illustrées par un exemple concret que tu maîtrises (un algorithme déroulé, une expérience menée en TP…).</li>
        <li><strong>L'interaction</strong> : écouter la question, répondre honnêtement — un « je ne sais pas, mais je peux raisonner ainsi… » vaut mieux qu'un bluff.</li>
        <li><strong>L'argumentation</strong> : un vrai cheminement (pourquoi cette question, quelles limites, quelle réponse nuancée), pas un exposé de cours.</li>
      </ul>
      <h3>Construire ta question en 4 étapes</h3>
      <ol>
        <li><strong>Pars d'un thème du programme qui te plaît</strong> — celui où tu as pris du plaisir en TP :
        graphes, chiffrement, bases de données, récursivité…</li>
        <li><strong>Croise-le avec un angle</strong> : société (vie privée, réseaux sociaux), histoire (Turing, Ada Lovelace),
        éthique (algorithmes de recommandation), ou ton projet (un programme que tu as réellement écrit).</li>
        <li><strong>Formule une vraie question</strong>, débattable, à laquelle un non-spécialiste a envie qu'on réponde —
        pas un titre de chapitre. « Comment fonctionne Dijkstra ? » est un cours ; « Un GPS peut-il se tromper ? » est une question.</li>
        <li><strong>Teste-la</strong> : peux-tu l'expliquer 10 minutes à quelqu'un qui ne fait pas NSI, avec au moins une
        notion du programme déroulée en profondeur et un exemple personnel ? Sinon, resserre ou change d'angle.</li>
      </ol>
      <h3>16 exemples de questions NSI réalistes</h3>
      <table>
        <tr><th>Question possible</th><th>Notions à mobiliser — où réviser</th></tr>
        <tr><td>« Peut-on tout calculer ? »</td><td>Calculabilité, problème de l'arrêt — <a href="#term-langages">Langages</a></td></tr>
        <tr><td>« Le chiffrement protège-t-il vraiment ma vie privée ? »</td><td>Chiffrement symétrique/asymétrique, RSA, HTTPS — <a href="#term-archi-reseaux">Archi &amp; réseaux</a></td></tr>
        <tr><td>« Comment Google classe-t-il les pages du Web ? »</td><td>Graphes, parcours, idée du PageRank — <a href="#term-structures">Structures</a> et <a href="#term-histoire">Histoire</a></td></tr>
        <tr><td>« Les données ont-elles besoin d'être rangées ? »</td><td>Modèle relationnel, clés, anomalies — <a href="#term-bdd">Bases de données</a></td></tr>
        <tr><td>« Un GPS peut-il se tromper ? »</td><td>Graphes pondérés, Dijkstra — <a href="#term-algo">Algorithmique</a></td></tr>
        <tr><td>« Une machine peut-elle apprendre ? »</td><td>k plus proches voisins, données d'entraînement — <a href="#term-algo">Algorithmique</a></td></tr>
        <tr><td>« Comment mon ordinateur fait-il plusieurs choses à la fois ? »</td><td>Processus, ordonnancement — <a href="#term-archi-reseaux">Archi &amp; réseaux</a></td></tr>
        <tr><td>« Internet peut-il tomber en panne ? »</td><td>Routage, RIP/OSPF, résilience — <a href="#term-archi-reseaux">Archi &amp; réseaux</a></td></tr>
        <tr><td>« Faut-il se méfier des algorithmes de recommandation ? »</td><td>Graphes (réseaux sociaux), enjeux de société — <a href="#term-structures">Structures</a></td></tr>
        <tr><td>« Comment Ctrl-F trouve-t-il un mot en un éclair ? »</td><td>Recherche textuelle, Boyer-Moore — <a href="#term-algo">Algorithmique</a></td></tr>
        <tr><td>« Pourquoi un bon mot de passe doit-il être long ? »</td><td>Force brute, coût exponentiel, chiffrement — <a href="#term-archi-reseaux">Archi &amp; réseaux</a></td></tr>
        <tr><td>« Ada Lovelace a-t-elle écrit le premier programme de l'histoire ? »</td><td>Histoire de l'informatique, notion de programme — <a href="#term-histoire">Histoire</a></td></tr>
        <tr><td>« Peut-on prouver qu'un programme n'a aucun bug ? »</td><td>Tests, assertions, limites de la calculabilité — <a href="#term-langages">Langages</a></td></tr>
        <tr><td>« Le glouton a-t-il toujours raison ? »</td><td>Rendu de monnaie, programmation dynamique — <a href="#term-langages">Langages</a> et <a href="#term-algo">Algorithmique</a></td></tr>
        <tr><td>« Trier ses données, est-ce gagner du temps ? »</td><td>Tris, dichotomie, coûts comparés — <a href="#term-algo">Algorithmique</a></td></tr>
        <tr><td>« Pourquoi l'informatique voit-elle des arbres partout ? »</td><td>Arbres (fichiers, ABR, arbres des appels) — <a href="#term-structures">Structures</a></td></tr>
      </table>
      <h3>Grille d'auto-évaluation (entraînement)</h3>
      <table>
        <tr><th>Critère</th><th>À travailler</th><th>Presque</th><th>Acquis</th></tr>
        <tr><td>Je tiens 10 minutes debout, sans notes, sans réciter</td><td>☐</td><td>☐</td><td>☐</td></tr>
        <tr><td>Mon exposé a un fil clair : accroche → développement → réponse</td><td>☐</td><td>☐</td><td>☐</td></tr>
        <tr><td>J'explique au moins une notion NSI en profondeur, avec un exemple à moi</td><td>☐</td><td>☐</td><td>☐</td></tr>
        <tr><td>Ma voix porte, je regarde le jury, mon débit est posé</td><td>☐</td><td>☐</td><td>☐</td></tr>
        <tr><td>En entretien, j'écoute la question avant de répondre, et je sais dire « je ne sais pas »</td><td>☐</td><td>☐</td><td>☐</td></tr>
        <tr><td>Je sais dire pourquoi <em>moi</em> j'ai choisi cette question</td><td>☐</td><td>☐</td><td>☐</td></tr>
      </table>
      <h3>Le calendrier de l'année</h3>
      <ul>
        <li><strong>Septembre → décembre</strong> — au fil des thèmes, note dans un carnet 2 ou 3 sujets qui t'accrochent.</li>
        <li><strong>Janvier → février</strong> — formule tes <strong>deux questions</strong> (thème × angle) et fais-les
        valider par ton professeur : contenu NSI solide, question réellement débattable.</li>
        <li><strong>Mars → avril</strong> — dépôt officiel : tes deux questions sont récapitulées sur un document signé
        par ton professeur et ton établissement, transmis au jury (au plus tard à la date fixée par ton lycée).</li>
        <li><strong>Avril → mai</strong> — un <strong>oral blanc par mois</strong> : chronomètre-toi, filme-toi si possible,
        remplis la grille d'auto-évaluation, travaille l'entretien avec des questions imprévues.</li>
        <li><strong>Juin</strong> — derniers oraux blancs en conditions réelles (20 min + 10 min + 10 min), puis l'épreuve,
        fin juin, après les écrits. La veille : on relit son plan, on dort.</li>
      </ul>
      <p class="note">💡 Le meilleur entraînement : expliquer ta question à quelqu'un qui n'y connaît rien (famille, ami).
      S'il a compris <em>et</em> appris quelque chose, ton Grand oral est sur de bons rails.</p>`,
  },
];

/* ---------------- Évaluations — préparation aux épreuves du bac ----------------
   enonce = sujet élève (html) ; corrige = corrigé réservé au prof (html).
   type "pratique" = format officiel de l'épreuve pratique (2 exercices, 1 h) ;
   type "DS" avec themeId null = écrit type bac (3 exercices croisés, 3 h 30). */
const EVALUATIONS = [
  {
    id: "term-ep-blanche-1",
    titre: "Épreuve pratique blanche n°1 — ABR & file",
    type: "pratique", themeId: null,
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Conditions de l'épreuve : sur ordinateur, avec un vrai Python (Thonny / Capytale). Deux exercices, une heure.
      Chaque fonction doit passer <strong>tous</strong> ses tests <code>assert</code>. Aucun document.</em></p>
      <h4>Exercice 1 — Recherche dans un arbre binaire de recherche (10 pts)</h4>
      <p>Un <strong>arbre binaire de recherche</strong> (ABR) est représenté par des tuples imbriqués
      <code>(gauche, valeur, droite)</code>, l'arbre vide étant <code>None</code>. Dans un ABR, toutes les valeurs du
      sous-arbre gauche sont <strong>inférieures</strong> à la valeur de la racine, et toutes celles du sous-arbre droit
      lui sont <strong>supérieures</strong>.</p>
      <p>Écrire une fonction <code>recherche(abr, x)</code> qui renvoie <code>True</code> si <code>x</code> est présent
      dans l'ABR et <code>False</code> sinon, <strong>en exploitant l'ordre de l'ABR</strong> : à chaque étape, on ne
      descend que dans <em>un seul</em> des deux sous-arbres.</p>
      <pre><code>abr = ((None, 2, None), 5, ((None, 6, None), 8, (None, 9, None)))

assert recherche(abr, 5) == True
assert recherche(abr, 2) == True
assert recherche(abr, 9) == True
assert recherche(abr, 7) == False
assert recherche(None, 1) == False</code></pre>
      <h4>Exercice 2 — Une file construite avec deux piles (10 pts)</h4>
      <p>On implémente une <strong>file</strong> (FIFO) à l'aide de <strong>deux piles</strong> (des listes Python
      utilisées uniquement avec <code>append</code> et <code>pop</code>) : la pile <code>entree</code> reçoit les
      arrivées ; la pile <code>sortie</code> sert les départs. Quand <code>sortie</code> est vide, on y
      <strong>transvase</strong> toute la pile <code>entree</code>, ce qui inverse l'ordre des éléments.</p>
      <p>Compléter le code aux endroits marqués <code>...</code> pour que tous les tests passent :</p>
      <pre><code>class File:
    def __init__(self):
        self.entree = []
        self.sortie = []

    def est_vide(self):
        return self.entree == ... and self.sortie == ...

    def enfiler(self, x):
        self.entree.append(...)

    def defiler(self):
        if self.sortie == []:
            while self.entree != []:
                ...   # transvaser : self.sortie reçoit le sommet dépilé de self.entree
        return ...    # renvoyer l'élément défilé

f = File()
f.enfiler(1); f.enfiler(2); f.enfiler(3)
assert f.defiler() == 1
f.enfiler(4)
assert f.defiler() == 2
assert f.defiler() == 3
assert f.defiler() == 4
assert f.est_vide() == True</code></pre>`,
    corrige: `
      <h4>Exercice 1</h4>
      <pre><code>def recherche(abr, x):
    if abr is None:               # arbre vide : x n'y est pas
        return False
    gauche, valeur, droite = abr
    if x == valeur:
        return True
    elif x < valeur:              # propriété de l'ABR : on ne visite
        return recherche(gauche, x)   # qu'une seule branche
    else:
        return recherche(droite, x)</code></pre>
      <p><strong>Barème indicatif :</strong> cas de base <code>None</code> (3 pts) ; test d'égalité (2 pts) ;
      descente du bon côté selon l'ordre (4 pts) ; tous les asserts passent (1 pt).
      Une version qui visite <em>les deux</em> sous-arbres trouve la réponse mais n'exploite pas l'ABR : plafonner à 6 pts.</p>
      <h4>Exercice 2</h4>
      <pre><code>class File:
    def __init__(self):
        self.entree = []
        self.sortie = []

    def est_vide(self):
        return self.entree == [] and self.sortie == []

    def enfiler(self, x):
        self.entree.append(x)

    def defiler(self):
        if self.sortie == []:
            while self.entree != []:
                self.sortie.append(self.entree.pop())
        return self.sortie.pop()</code></pre>
      <p><strong>Pourquoi ça marche :</strong> dépiler <code>entree</code> pour empiler <code>sortie</code> inverse
      l'ordre : le premier entré se retrouve <em>au sommet</em> de <code>sortie</code>, donc il sort le premier — c'est
      bien une file (FIFO). On ne transvase que lorsque <code>sortie</code> est vide : les éléments déjà transvasés
      gardent leur ordre de service.</p>
      <p><strong>Barème indicatif :</strong> <code>est_vide</code> (2 pts) ; <code>enfiler</code> (2 pts) ;
      transvasement correct (4 pts) ; <code>return self.sortie.pop()</code> (2 pts).</p>`,
  },

  {
    id: "term-ep-blanche-2",
    titre: "Épreuve pratique blanche n°2 — fusion & programmation dynamique",
    type: "pratique", themeId: null,
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Conditions de l'épreuve : sur ordinateur, deux exercices, une heure. Chaque fonction doit passer
      <strong>tous</strong> ses tests <code>assert</code>. Aucun document.</em></p>
      <h4>Exercice 1 — Fusion de deux listes triées (10 pts)</h4>
      <p>Écrire une fonction <code>fusion(a, b)</code> qui prend deux listes de nombres <strong>déjà triées</strong>
      dans l'ordre croissant et renvoie une <strong>nouvelle</strong> liste triée contenant tous leurs éléments.
      <strong>Interdiction</strong> d'utiliser <code>sort</code> ou <code>sorted</code> : on avance avec deux indices,
      en comparant à chaque étape les deux éléments courants (c'est l'étape clé du <em>tri fusion</em>).</p>
      <pre><code>assert fusion([1, 4, 9], [2, 3, 10]) == [1, 2, 3, 4, 9, 10]
assert fusion([1, 2], [3, 4, 5]) == [1, 2, 3, 4, 5]
assert fusion([], [7, 8]) == [7, 8]
assert fusion([5], []) == [5]
assert fusion([2, 2], [2]) == [2, 2, 2]</code></pre>
      <h4>Exercice 2 — Rendu de monnaie par programmation dynamique (10 pts)</h4>
      <p>On veut le <strong>nombre minimal de pièces</strong> pour payer <code>montant</code> avec le système de pièces
      <code>pieces</code> (quantités illimitées). L'algorithme <strong>glouton</strong> n'est pas toujours optimal :
      avec les pièces <code>[1, 3, 4]</code> et un montant de 6, il rend 4+1+1 (3 pièces) alors que 3+3 (2 pièces) est
      possible. On utilise donc la <strong>programmation dynamique</strong> : on remplit un tableau <code>nb</code> où
      <code>nb[m]</code> est le nombre minimal de pièces pour le montant <code>m</code>, en réutilisant les résultats
      des montants plus petits.</p>
      <p>Compléter le code aux endroits marqués <code>...</code> :</p>
      <pre><code>def nb_pieces(montant, pieces):
    INFINI = float("inf")
    nb = [0] + [INFINI] * montant     # nb[0] = 0 : montant nul, zéro pièce
    for m in range(1, montant + 1):
        for p in pieces:
            if p <= m and nb[m - p] + 1 < nb[...]:
                nb[m] = nb[...] + 1   # on paie p, puis le reste (m - p) au mieux
    return nb[...]

assert nb_pieces(6, [1, 3, 4]) == 2       # 3 + 3
assert nb_pieces(7, [1, 3, 4]) == 2       # 3 + 4
assert nb_pieces(13, [1, 2, 5]) == 4      # 5 + 5 + 2 + 1
assert nb_pieces(0, [1, 2, 5]) == 0</code></pre>`,
    corrige: `
      <h4>Exercice 1</h4>
      <pre><code>def fusion(a, b):
    resultat = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultat.append(a[i])
            i = i + 1
        else:
            resultat.append(b[j])
            j = j + 1
    # l'une des deux listes est épuisée : on recopie la fin de l'autre
    while i < len(a):
        resultat.append(a[i]); i = i + 1
    while j < len(b):
        resultat.append(b[j]); j = j + 1
    return resultat</code></pre>
      <p><strong>Barème indicatif :</strong> boucle de comparaison à deux indices (5 pts) ; recopie des restes (3 pts) ;
      cas limites — liste vide, doublons — (2 pts). Coût linéaire O(len(a)+len(b)) : chaque élément n'est examiné qu'une fois.</p>
      <h4>Exercice 2</h4>
      <pre><code>def nb_pieces(montant, pieces):
    INFINI = float("inf")
    nb = [0] + [INFINI] * montant
    for m in range(1, montant + 1):
        for p in pieces:
            if p <= m and nb[m - p] + 1 < nb[m]:
                nb[m] = nb[m - p] + 1
    return nb[montant]</code></pre>
      <p><strong>L'idée dynamique :</strong> pour payer <code>m</code>, on essaie chaque pièce <code>p</code> : si on
      l'utilise, il reste <code>m − p</code> à payer, et on connaît <em>déjà</em> la meilleure façon de le faire
      (<code>nb[m-p]</code>, calculé avant). On garde le minimum. Chaque sous-problème n'est résolu qu'une seule fois,
      puis <strong>réutilisé</strong> — c'est ce qui distingue la programmation dynamique de la récursivité naïve.</p>
      <p><strong>Barème indicatif :</strong> 2 pts par trou correct (<code>nb[m]</code>, <code>nb[m - p]</code>,
      <code>nb[montant]</code>) + 4 pts si tous les tests passent et que l'élève sait expliquer la ligne complétée.</p>`,
  },

  {
    id: "term-bac-blanc-1",
    titre: "Bac blanc n°1 — écrit type bac (arbres · SQL · graphes)",
    type: "DS", themeId: null,
    duree: "3 h 30", total: 20,
    enonce: `
      <p><em>Épreuve écrite type bac : 3 exercices indépendants, à traiter dans l'ordre de votre choix.
      Calculatrice et documents interdits. Le code s'écrit au stylo, indentation soignée.</em></p>

      <h4>Exercice 1 — Arbres binaires de recherche et récursivité (7 pts)</h4>
      <p>On insère successivement, dans un ABR initialement vide, les valeurs : <code>12, 5, 20, 3, 8, 15, 25</code>.</p>
      <ol type="a">
        <li>Dessiner l'ABR obtenu. (1,5 pts)</li>
        <li>Donner sa <strong>hauteur</strong> et sa <strong>taille</strong> (conventions : hauteur d'un arbre réduit à
        sa racine = 0 ; taille = nombre de nœuds). (1 pt)</li>
        <li>Donner la liste des valeurs visitées par un parcours <strong>infixe</strong> (gauche, racine, droite).
        Que remarque-t-on ? (1,5 pts)</li>
        <li>Un arbre est représenté par <code>None</code> (vide) ou <code>(gauche, valeur, droite)</code>. Écrire la
        fonction récursive <code>taille(arbre)</code> qui renvoie son nombre de nœuds. (2 pts)</li>
        <li>Quel est le coût d'une recherche dans un ABR <strong>équilibré</strong> de n nœuds ? Et dans un ABR
        <strong>filiforme</strong> (obtenu en insérant des valeurs déjà triées) ? Justifier. (1 pt)</li>
      </ol>

      <h4>Exercice 2 — Base de données d'un cinéma (7 pts)</h4>
      <p>Un cinéma utilise la base relationnelle suivante (clés primaires <u>soulignées</u>, clé étrangère précédée de #) :</p>
      <pre><code>FILM  (<u>id_film</u>, titre, duree, annee)
SEANCE(<u>id_seance</u>, #id_film, jour, heure, salle, places_restantes)</code></pre>
      <ol type="a">
        <li>Que garantit la contrainte de <strong>clé primaire</strong> sur <code>id_film</code> ? Que garantit la
        contrainte de <strong>référence</strong> (clé étrangère) sur <code>SEANCE.id_film</code> ? (1,5 pts)</li>
        <li>Écrire la requête donnant le titre et l'année des films sortis à partir de 2020. (1 pt)</li>
        <li>Écrire la requête donnant, <strong>sans doublon</strong>, les titres des films projetés le samedi
        (jointure). (1,5 pts)</li>
        <li>Écrire la requête comptant le nombre de séances du samedi. (1 pt)</li>
        <li>La séance n°17 vient de vendre 2 places : écrire la requête qui diminue de 2 son attribut
        <code>places_restantes</code>. (1 pt)</li>
        <li>On tente de supprimer de <code>FILM</code> un film qui possède encore des séances : que se passe-t-il, et
        pourquoi ? (1 pt)</li>
      </ol>

      <h4>Exercice 3 — Graphes : parcours et plus court chemin (6 pts)</h4>
      <p>On considère le graphe <strong>pondéré</strong> non orienté suivant (les poids sont des durées en minutes) :
      sommets A, B, C, D, E ; arêtes : A–B (2), A–C (5), B–C (1), B–D (4), C–D (2), C–E (7), D–E (3).</p>
      <ol type="a">
        <li>Donner la représentation de ce graphe par <strong>liste d'adjacence</strong> (dictionnaire Python,
        sans les poids). (1,5 pts)</li>
        <li>On effectue un <strong>parcours en largeur</strong> (BFS) depuis A, les voisins étant explorés dans l'ordre
        alphabétique. Donner l'ordre de visite des sommets. Quelle structure de données ce parcours utilise-t-il, et
        pourquoi ? (1,5 pts)</li>
        <li>Dérouler l'algorithme de <strong>Dijkstra</strong> depuis A (tableau des distances étape par étape),
        puis donner le plus court chemin de A à E et sa durée. (2,5 pts)</li>
        <li>Pourquoi un parcours en largeur ne suffit-il pas pour trouver ce plus court chemin ? (0,5 pt)</li>
      </ol>`,
    corrige: `
      <h4>Exercice 1</h4>
      <p><strong>a)</strong> Racine 12 ; à gauche 5 (avec 3 à gauche, 8 à droite) ; à droite 20 (avec 15 à gauche, 25 à droite).
      L'arbre est parfaitement équilibré.</p>
      <p><strong>b)</strong> Hauteur = 2 ; taille = 7.</p>
      <p><strong>c)</strong> Infixe : 3, 5, 8, 12, 15, 20, 25 — les valeurs sortent <strong>triées</strong> : c'est la
      propriété caractéristique de l'ABR (le parcours infixe d'un ABR est croissant).</p>
      <p><strong>d)</strong></p>
      <pre><code>def taille(arbre):
    if arbre is None:
        return 0
    gauche, valeur, droite = arbre
    return 1 + taille(gauche) + taille(droite)</code></pre>
      <p><strong>e)</strong> Équilibré : O(log n) — chaque comparaison élimine la moitié de l'arbre (hauteur ≈ log₂ n).
      Filiforme : O(n) — l'arbre dégénère en liste chaînée, on peut visiter tous les nœuds.</p>

      <h4>Exercice 2</h4>
      <p><strong>a)</strong> Clé primaire : chaque <code>id_film</code> est unique et non nul — il identifie une seule
      ligne. Contrainte de référence : toute valeur de <code>SEANCE.id_film</code> doit exister dans
      <code>FILM.id_film</code> — pas de séance « orpheline » d'un film inexistant.</p>
      <p><strong>b)</strong> <code>SELECT titre, annee FROM FILM WHERE annee &gt;= 2020;</code></p>
      <p><strong>c)</strong></p>
      <pre><code>SELECT DISTINCT FILM.titre
FROM FILM
JOIN SEANCE ON SEANCE.id_film = FILM.id_film
WHERE SEANCE.jour = 'samedi';</code></pre>
      <p><strong>d)</strong> <code>SELECT COUNT(*) FROM SEANCE WHERE jour = 'samedi';</code></p>
      <p><strong>e)</strong> <code>UPDATE SEANCE SET places_restantes = places_restantes - 2 WHERE id_seance = 17;</code></p>
      <p><strong>f)</strong> Le SGBD <strong>refuse</strong> la suppression : elle violerait la contrainte de référence
      (des lignes de <code>SEANCE</code> pointeraient vers un film disparu). Il faut d'abord supprimer ou modifier les
      séances concernées.</p>

      <h4>Exercice 3</h4>
      <p><strong>a)</strong> <code>{"A": ["B", "C"], "B": ["A", "C", "D"], "C": ["A", "B", "D", "E"],
      "D": ["B", "C", "E"], "E": ["C", "D"]}</code></p>
      <p><strong>b)</strong> Ordre BFS depuis A : A, B, C, D, E. Le parcours en largeur utilise une <strong>file</strong>
      (FIFO) : les sommets découverts sont servis dans l'ordre de leur découverte, ce qui explore le graphe
      « couche par couche ».</p>
      <p><strong>c)</strong> Déroulé de Dijkstra depuis A :</p>
      <table>
        <tr><th>Sommet choisi</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
        <tr><td>départ</td><td><strong>0</strong></td><td>∞</td><td>∞</td><td>∞</td><td>∞</td></tr>
        <tr><td>A (0)</td><td>—</td><td><strong>2</strong></td><td>5</td><td>∞</td><td>∞</td></tr>
        <tr><td>B (2)</td><td>—</td><td>—</td><td><strong>3</strong></td><td>6</td><td>∞</td></tr>
        <tr><td>C (3)</td><td>—</td><td>—</td><td>—</td><td><strong>5</strong></td><td>10</td></tr>
        <tr><td>D (5)</td><td>—</td><td>—</td><td>—</td><td>—</td><td><strong>8</strong></td></tr>
      </table>
      <p>Plus court chemin A → E : <strong>A – B – C – D – E</strong>, durée <strong>8 min</strong>
      (2 + 1 + 2 + 3).</p>
      <p><strong>d)</strong> Le BFS minimise le <em>nombre d'arêtes</em>, pas la somme des <em>poids</em> : ici
      A–C–E ne fait que 2 arêtes mais dure 12 min, plus que le chemin en 4 arêtes trouvé par Dijkstra.</p>`,
  },

  {
    id: "term-bac-blanc-2",
    titre: "Bac blanc n°2 — écrit type bac (processus/réseaux · POO & dynamique · piles/tris)",
    type: "DS", themeId: null,
    duree: "3 h 30", total: 20,
    enonce: `
      <p><em>Épreuve écrite type bac : 3 exercices indépendants. Calculatrice et documents interdits.
      Le code s'écrit au stylo, indentation soignée.</em></p>

      <h4>Exercice 1 — Processus, ordonnancement et routage (7 pts)</h4>
      <ol type="a">
        <li>Citer les trois principaux états d'un processus et décrire, pour chacun, une transition qui y mène. (1,5 pts)</li>
        <li>Un ordonnanceur « tourniquet » (round-robin) donne un quantum de 2 ms. Trois processus arrivent à t = 0,
        dans l'ordre P1 (5 ms de calcul), P2 (3 ms), P3 (2 ms). Établir la chronologie d'exécution et donner l'instant
        de fin de chaque processus. (2 pts)</li>
        <li>Deux processus P et Q ont chacun besoin des deux mêmes ressources R1 et R2. P verrouille R1 puis demande R2 ;
        Q verrouille R2 puis demande R1. Comment s'appelle cette situation ? Proposer une règle simple qui l'empêche. (1,5 pts)</li>
        <li>Dans un réseau, le protocole de routage <strong>RIP</strong> choisit les routes selon le nombre de sauts, et
        <strong>OSPF</strong> selon le coût des liaisons (lié au débit). Un routeur A peut joindre H soit par 2 sauts en
        liaisons lentes (coût total 30), soit par 4 sauts en fibre (coût total 4). Quelle route choisit RIP ? OSPF ?
        Justifier. (2 pts)</li>
      </ol>

      <h4>Exercice 2 — POO, récursivité et mémoïsation (7 pts)</h4>
      <p><strong>Partie A.</strong> Une médiathèque gère ses adhérents avec la classe suivante :</p>
      <pre><code>class Adherent:
    def __init__(self, nom):
        self.nom = nom
        self.emprunts = []

    def emprunter(self, titre):
        if len(self.emprunts) < 3:
            self.emprunts.append(titre)
            return True
        return False</code></pre>
      <ol type="a">
        <li>Donner le vocabulaire : comment s'appellent <code>__init__</code>, <code>nom</code> et
        <code>emprunter</code> ? Que désigne <code>self</code> ? (1,5 pts)</li>
        <li>Que vaut <code>a.emprunter("Dune")</code> si <code>a</code> a déjà 3 emprunts ? (0,5 pt)</li>
        <li>Écrire la méthode <code>rendre(self, titre)</code> qui retire <code>titre</code> de la liste des emprunts
        s'il s'y trouve et renvoie <code>True</code>, et renvoie <code>False</code> sinon. (1,5 pts)</li>
      </ol>
      <p><strong>Partie B.</strong> On rappelle la suite de Fibonacci : F(0)=0, F(1)=1, F(n)=F(n−1)+F(n−2).</p>
      <ol type="a" start="4">
        <li>Écrire la fonction récursive naïve <code>fib(n)</code>. (1 pt)</li>
        <li>Dessiner l'arbre des appels de <code>fib(5)</code>. Combien d'appels au total ? Quel appel est calculé
        plusieurs fois ? (1,5 pts)</li>
        <li>Expliquer le principe de la <strong>mémoïsation</strong> et pourquoi elle rend le calcul de
        <code>fib(50)</code> possible alors que la version naïve ne termine pas en temps raisonnable. (1 pt)</li>
      </ol>

      <h4>Exercice 3 — Piles et tri fusion (6 pts)</h4>
      <p><strong>Partie A.</strong> On donne la fonction :</p>
      <pre><code>def mystere(expr):
    p = []
    for c in expr:
        if c == "(":
            p.append(c)
        elif c == ")":
            if p == []:
                return False
            p.pop()
    return p == []</code></pre>
      <ol type="a">
        <li>Quelle structure de données la variable <code>p</code> implémente-t-elle ? Avec quelles opérations ? (1 pt)</li>
        <li>Dérouler <code>mystere("(a(b)c)")</code> puis <code>mystere("(a))(")</code> en donnant l'évolution de
        <code>p</code>. Que renvoie chaque appel ? (1,5 pts)</li>
        <li>Que calcule cette fonction ? (0,5 pt)</li>
      </ol>
      <p><strong>Partie B.</strong> On trie la liste <code>[8, 3, 5, 1, 7, 2]</code> par <strong>tri fusion</strong>.</p>
      <ol type="a" start="4">
        <li>Représenter les découpages successifs (phase « diviser ») puis les fusions (phase « régner »). (1,5 pts)</li>
        <li>Donner le coût du tri fusion et celui du tri par sélection, et expliquer d'où vient le facteur
        <code>log n</code>. (1 pt)</li>
        <li>Le tri fusion est dit « diviser pour régner ». Citer un autre algorithme du programme relevant de cette
        stratégie. (0,5 pt)</li>
      </ol>`,
    corrige: `
      <h4>Exercice 1</h4>
      <p><strong>a)</strong> <em>Élu</em> (en cours d'exécution sur le processeur) — un processus prêt y passe quand
      l'ordonnanceur le choisit. <em>Prêt</em> — un processus élu y retourne quand son quantum expire. <em>Bloqué</em>
      (en attente d'une entrée/sortie ou d'une ressource) — un processus élu y passe quand il demande une E/S ;
      il redevient prêt quand elle se termine.</p>
      <p><strong>b)</strong> Chronologie (quantum 2 ms) : P1 [0–2], P2 [2–4], P3 [4–6, terminé], P1 [6–8],
      P2 [8–9, terminé], P1 [9–10, terminé]. Fins : <strong>P3 à 6 ms, P2 à 9 ms, P1 à 10 ms</strong>.</p>
      <p><strong>c)</strong> C'est un <strong>interblocage</strong> (deadlock) : chacun tient une ressource et attend
      celle de l'autre — attente circulaire. Règle qui l'empêche : imposer un <strong>ordre global</strong> d'acquisition
      (tout processus demande R1 avant R2) : l'attente circulaire devient impossible.</p>
      <p><strong>d)</strong> RIP minimise le <strong>nombre de sauts</strong> : il choisit la route à 2 sauts (lente).
      OSPF minimise le <strong>coût total</strong> : il choisit la route en fibre à 4 sauts (coût 4 &lt; 30). OSPF prend
      donc ici la route la plus rapide même si elle traverse plus de routeurs.</p>

      <h4>Exercice 2</h4>
      <p><strong>a)</strong> <code>__init__</code> est le <strong>constructeur</strong> ; <code>nom</code> est un
      <strong>attribut</strong> ; <code>emprunter</code> est une <strong>méthode</strong>. <code>self</code> désigne
      l'objet lui-même (l'instance sur laquelle la méthode est appelée).</p>
      <p><strong>b)</strong> <code>False</code> : la limite de 3 emprunts est atteinte, le livre n'est pas ajouté.</p>
      <p><strong>c)</strong></p>
      <pre><code>def rendre(self, titre):
    if titre in self.emprunts:
        self.emprunts.remove(titre)
        return True
    return False</code></pre>
      <p><strong>d)</strong></p>
      <pre><code>def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)</code></pre>
      <p><strong>e)</strong> fib(5) appelle fib(4) et fib(3) ; fib(4) appelle fib(3) et fib(2), etc. Total :
      <strong>15 appels</strong>. fib(3) est calculé 2 fois, fib(2) 3 fois, fib(1) 5 fois : les mêmes sous-problèmes
      sont recalculés.</p>
      <p><strong>f)</strong> La mémoïsation <strong>stocke</strong> (par exemple dans un dictionnaire) le résultat de
      chaque appel déjà effectué ; avant de calculer fib(k), on regarde s'il est déjà connu. Chaque valeur n'est alors
      calculée qu'<strong>une seule fois</strong> : le coût passe d'exponentiel (≈ 2ⁿ appels) à linéaire (n calculs),
      et fib(50) devient instantané.</p>

      <h4>Exercice 3</h4>
      <p><strong>a)</strong> Une <strong>pile</strong> (LIFO), avec <code>append</code> = empiler et <code>pop</code> =
      dépiler (et le test <code>p == []</code> = est_vide).</p>
      <p><strong>b)</strong> <code>"(a(b)c)"</code> : ( → p=["("] ; ( → p=["(", "("] ; ) → p=["("] ; ) → p=[] ;
      lettres ignorées → renvoie <code>True</code>. <code>"(a))("</code> : ( → p=["("] ; ) → p=[] ; ) → pile vide au
      moment de dépiler → renvoie <code>False</code> immédiatement.</p>
      <p><strong>c)</strong> Elle teste si l'expression est <strong>bien parenthésée</strong> (chaque « ( » fermée par
      une « ) », dans le bon ordre).</p>
      <p><strong>d)</strong> Découpes : [8,3,5,1,7,2] → [8,3,5] et [1,7,2] → [8],[3,5] et [1],[7,2] → feuilles.
      Fusions : [3,5]+[8] → [3,5,8] ; [7,2] → [2,7] puis [1]+[2,7] → [1,2,7] ; enfin [3,5,8] et [1,2,7] fusionnent en
      <strong>[1,2,3,5,7,8]</strong>.</p>
      <p><strong>e)</strong> Tri fusion : O(n log n) ; tri par sélection : O(n²). Le log n vient du nombre de niveaux de
      découpage (on divise la liste par 2 à chaque niveau : log₂ n niveaux), et chaque niveau coûte O(n) en fusions.</p>
      <p><strong>f)</strong> La <strong>recherche dichotomique</strong> (dans un tableau trié) — ou la rotation
      d'images par quadrants, autre exemple de « diviser pour régner ».</p>`,
  },

  {
    id: "term-bac-blanc-3",
    titre: "Bac blanc n°3 — écrit type bac (recherche textuelle · BDD avancées · routage & bit alterné)",
    type: "DS", themeId: null,
    duree: "3 h 30", total: 20,
    enonce: `
      <p><em>Épreuve écrite type bac : 3 exercices indépendants, à traiter dans l'ordre de votre choix.
      Calculatrice et documents interdits. Le code s'écrit au stylo, indentation soignée.</em></p>

      <h4>Exercice 1 — Recherche textuelle : naïve et Boyer-Moore (7 pts)</h4>
      <p>On cherche le motif <code>DAB</code> dans le texte <code>ABRACADABRA</code> (les positions sont numérotées
      à partir de 0).</p>
      <ol type="a">
        <li>Dérouler la <strong>recherche naïve</strong> : pour chaque position d'essai du motif (0, 1, 2, …), indiquer
        le nombre de comparaisons de caractères effectuées avant l'échec ou le succès. Donner la position de la première
        occurrence et le <strong>nombre total</strong> de comparaisons. (1,5 pts)</li>
        <li>Écrire une fonction <code>recherche_naive(texte, motif)</code> qui renvoie la <strong>liste</strong> des
        positions de toutes les occurrences de <code>motif</code> dans <code>texte</code> (liste vide si aucune). (2 pts)</li>
        <li>L'algorithme de <strong>Boyer-Moore</strong> (règle du mauvais caractère) compare le motif <strong>de la
        droite vers la gauche</strong> et utilise la table des <strong>dernières occurrences</strong> de chaque caractère
        du motif. Donner cette table pour le motif <code>DAB</code>. (1 pt)</li>
        <li>Dérouler Boyer-Moore sur le même exemple : pour chaque position d'essai, indiquer le caractère du texte
        comparé en premier, le décalage appliqué en cas d'échec (rappel : décalage = indice du mismatch dans le motif −
        indice de dernière occurrence du caractère lu, valeur −1 si le caractère est absent du motif, décalage minimal 1),
        et le nombre total de comparaisons. Comparer avec la question a. (1,5 pts)</li>
        <li>Donner le coût de la recherche naïve dans le <strong>pire cas</strong> pour un texte de taille n et un motif
        de taille m, et exhiber un exemple de texte et de motif réalisant ce pire cas. Pourquoi Boyer-Moore est-il
        souvent bien plus rapide en pratique ? (1 pt)</li>
      </ol>

      <h4>Exercice 2 — Base de données d'un festival (7 pts)</h4>
      <p>Un festival de musique stocke d'abord tout dans une <strong>table unique</strong> :</p>
      <pre><code>CONCERT_TOUT(nom_artiste, pays, nom_scene, capacite, jour, heure)</code></pre>
      <ol type="a">
        <li>Chaque artiste donne plusieurs concerts et chaque scène en accueille des dizaines : citer <strong>deux
        anomalies</strong> que provoque ce schéma (penser à la redondance, aux mises à jour, aux suppressions), puis
        expliquer en quoi le schéma relationnel ci-dessous y remédie. (1,5 pts)</li>
      </ol>
      <p>Le festival adopte donc le schéma suivant (clés primaires <u>soulignées</u>, clés étrangères précédées de #) :</p>
      <pre><code>ARTISTE(<u>id_artiste</u>, nom, pays)
SCENE  (<u>id_scene</u>, nom, capacite)
CONCERT(<u>id_concert</u>, #id_artiste, #id_scene, jour, heure, duree)</code></pre>
      <ol type="a" start="2">
        <li>Écrire la requête donnant le nom des artistes et le nom de la scène pour tous les concerts du samedi
        (<strong>double jointure</strong>), triés par heure croissante. (1,5 pts)</li>
        <li>Écrire la requête donnant la <strong>durée moyenne</strong> des concerts ayant lieu sur la scène
        n°2. (1 pt)</li>
        <li>Écrire la requête comptant le nombre de concerts donnés par des artistes dont le pays est
        <code>'France'</code> (jointure + agrégat). (1 pt)</li>
        <li>L'artiste « Nova » (pays « Liban ») rejoint la programmation : écrire la requête qui l'insère dans
        <code>ARTISTE</code> avec l'identifiant 42. (1 pt)</li>
        <li>Le concert n°12 est décalé à 21 h : écrire la requête de mise à jour. (0,5 pt)</li>
        <li>On tente d'insérer dans <code>CONCERT</code> une ligne avec <code>id_artiste = 99</code>, identifiant
        absent de la table <code>ARTISTE</code> : que fait le SGBD, et quelle contrainte est en jeu ? (0,5 pt)</li>
      </ol>

      <h4>Exercice 3 — Routage et fiabilité de la transmission (6 pts)</h4>
      <p>Un réseau relie cinq routeurs. Liaisons (avec le coût OSPF, lié au débit — plus le lien est rapide, plus le
      coût est faible) : R1–R2 en fibre (coût 1), R2–R3 en fibre (coût 1), R3–R5 en fibre (coût 1),
      R1–R4 en liaison lente (coût 10), R4–R5 en liaison lente (coût 10).</p>
      <ol type="a">
        <li>Le protocole <strong>RIP</strong> minimise le <strong>nombre de sauts</strong>. Donner la table de routage
        de R1 obtenue avec RIP, sous la forme : destination / prochain saut / nombre de sauts (destinations R2, R3, R4,
        R5). (2 pts)</li>
        <li>Le protocole <strong>OSPF</strong> minimise le <strong>coût total</strong> du chemin. Donner la route
        R1 → R5 choisie par OSPF et son coût, et la comparer à celle de RIP. (1,5 pts)</li>
        <li>La liaison R4–R5 tombe en panne : que devient la route R1 → R5 avec RIP ? Qu'est-ce que cela illustre sur
        le routage d'Internet ? (0,5 pt)</li>
        <li>Pour fiabiliser une transmission entre deux machines A et B, on utilise le <strong>protocole du bit
        alterné</strong> : chaque trame porte un bit (0 ou 1), alterné à chaque nouvelle trame, et B renvoie un
        acquittement portant le bit reçu ; sans acquittement avant l'expiration d'un délai, A <strong>réémet</strong>
        la trame. Dérouler l'échange suivant en indiquant, à chaque étape, ce que fait A et ce que fait B :
        A envoie la trame T0 (bit 0) ; l'acquittement ACK 0 revient ; A envoie T1 (bit 1) ; <strong>ACK 1 est
        perdu</strong>. Que fait A à l'expiration du délai ? B reçoit alors une seconde fois T1 : comment détecte-t-il
        le doublon, et que doit-il faire ? (2 pts)</li>
      </ol>`,
    corrige: `
      <h4>Exercice 1</h4>
      <p><strong>a)</strong> Déroulé naïf de <code>DAB</code> dans <code>ABRACADABRA</code> (comparaison de gauche à
      droite, motif glissé d'une position à chaque échec) :</p>
      <table>
        <tr><th>Position d'essai</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
        <tr><td>Fenêtre du texte</td><td>ABR</td><td>BRA</td><td>RAC</td><td>ACA</td><td>CAD</td><td>ADA</td><td>DAB</td></tr>
        <tr><td>Comparaisons</td><td>1 (A≠D)</td><td>1 (B≠D)</td><td>1 (R≠D)</td><td>1 (A≠D)</td><td>1 (C≠D)</td><td>1 (A≠D)</td><td>3 (succès)</td></tr>
      </table>
      <p>Première occurrence à la position <strong>6</strong> ; total : 6 × 1 + 3 = <strong>9 comparaisons</strong>.</p>
      <p><strong>b)</strong></p>
      <pre><code>def recherche_naive(texte, motif):
    positions = []
    n = len(texte)
    m = len(motif)
    for i in range(n - m + 1):        # chaque position d'essai
        j = 0
        while j < m and texte[i + j] == motif[j]:
            j = j + 1
        if j == m:                    # tout le motif a coïncidé
            positions.append(i)
    return positions</code></pre>
      <p><strong>Barème :</strong> boucle sur les positions avec la bonne borne n − m + 1 (0,5 pt) ; comparaison
      caractère par caractère (1 pt) ; accumulation dans une liste renvoyée (0,5 pt).</p>
      <p><strong>c)</strong> Table des dernières occurrences de <code>DAB</code> : D → 0, A → 1, B → 2
      (soit le dictionnaire <code>{"D": 0, "A": 1, "B": 2}</code>).</p>
      <p><strong>d)</strong> Boyer-Moore compare d'abord le caractère du texte aligné avec la <em>fin</em> du motif
      (indice 2) :</p>
      <table>
        <tr><th>Essai (position)</th><th>Caractère lu</th><th>Résultat</th><th>Décalage</th></tr>
        <tr><td>0</td><td>texte[2] = R</td><td>R ≠ B, R absent du motif</td><td>2 − (−1) = 3</td></tr>
        <tr><td>3</td><td>texte[5] = A</td><td>A ≠ B, dernière occ. de A = 1</td><td>2 − 1 = 1</td></tr>
        <tr><td>4</td><td>texte[6] = D</td><td>D ≠ B, dernière occ. de D = 0</td><td>2 − 0 = 2</td></tr>
        <tr><td>6</td><td>texte[8] = B, puis A, puis D</td><td>3 comparaisons : succès</td><td>—</td></tr>
      </table>
      <p>Total : 1 + 1 + 1 + 3 = <strong>6 comparaisons</strong> contre 9 pour la naïve — et l'écart se creuse très vite
      sur des textes longs, car les caractères absents du motif font sauter des positions entières.</p>
      <p><strong>e)</strong> Pire cas de la naïve : <strong>O(n × m)</strong> — exemple : texte
      <code>AAAAAAAAA</code> et motif <code>AAB</code> : à chaque position, on compare presque tout le motif avant
      d'échouer. Boyer-Moore est rapide en pratique car, en lisant d'abord le caractère de droite, un caractère absent
      du motif permet de <strong>sauter m positions d'un coup</strong> : sur un texte ordinaire, on ne lit qu'une
      fraction des caractères.</p>

      <h4>Exercice 2</h4>
      <p><strong>a)</strong> Anomalies de la table unique : <strong>redondance</strong> — le pays d'un artiste et la
      capacité d'une scène sont recopiés à chaque concert ; une <strong>mise à jour</strong> (la capacité d'une scène
      change) doit être répétée sur des dizaines de lignes, avec risque d'<strong>incohérence</strong> si on en oublie ;
      une <strong>suppression</strong> (annuler le dernier concert d'un artiste) fait disparaître toute information sur
      cet artiste. Le schéma en trois relations stocke chaque fait <strong>une seule fois</strong> (l'artiste dans
      ARTISTE, la scène dans SCENE) et les relie par des clés étrangères : plus de duplication, donc plus d'anomalies.</p>
      <p><strong>b)</strong></p>
      <pre><code>SELECT ARTISTE.nom, SCENE.nom
FROM CONCERT
JOIN ARTISTE ON CONCERT.id_artiste = ARTISTE.id_artiste
JOIN SCENE   ON CONCERT.id_scene   = SCENE.id_scene
WHERE CONCERT.jour = 'samedi'
ORDER BY CONCERT.heure;</code></pre>
      <p><strong>Barème :</strong> 0,5 pt par jointure correcte, 0,5 pt pour WHERE + ORDER BY.</p>
      <p><strong>c)</strong> <code>SELECT AVG(duree) FROM CONCERT WHERE id_scene = 2;</code></p>
      <p><strong>d)</strong></p>
      <pre><code>SELECT COUNT(*)
FROM CONCERT
JOIN ARTISTE ON CONCERT.id_artiste = ARTISTE.id_artiste
WHERE ARTISTE.pays = 'France';</code></pre>
      <p><strong>e)</strong> <code>INSERT INTO ARTISTE VALUES (42, 'Nova', 'Liban');</code>
      (accepter la forme avec liste de colonnes explicite.)</p>
      <p><strong>f)</strong> <code>UPDATE CONCERT SET heure = '21:00' WHERE id_concert = 12;</code></p>
      <p><strong>g)</strong> Le SGBD <strong>refuse l'insertion</strong> : la contrainte de <strong>référence</strong>
      (clé étrangère) impose que toute valeur de <code>CONCERT.id_artiste</code> existe dans
      <code>ARTISTE.id_artiste</code> — pas de concert « orphelin ».</p>

      <h4>Exercice 3</h4>
      <p><strong>a)</strong> Table de routage de R1 avec RIP (nombre de sauts minimal) :</p>
      <table>
        <tr><th>Destination</th><th>Prochain saut</th><th>Nb de sauts</th></tr>
        <tr><td>R2</td><td>R2</td><td>1</td></tr>
        <tr><td>R3</td><td>R2</td><td>2</td></tr>
        <tr><td>R4</td><td>R4</td><td>1</td></tr>
        <tr><td>R5</td><td>R4</td><td>2 (via R4, contre 3 via R2–R3)</td></tr>
      </table>
      <p><strong>b)</strong> OSPF compare les coûts totaux vers R5 : R1–R4–R5 = 10 + 10 = 20 ;
      R1–R2–R3–R5 = 1 + 1 + 1 = <strong>3</strong>. OSPF choisit <strong>R1 → R2 → R3 → R5</strong> (coût 3, prochain
      saut R2) : plus de routeurs traversés que RIP, mais des liaisons bien plus rapides — c'est tout l'intérêt d'un
      protocole à coût.</p>
      <p><strong>c)</strong> RIP bascule sur la route restante R1–R2–R3–R5 (3 sauts) après mise à jour des tables :
      le réseau <strong>s'auto-répare</strong>. C'est la résilience d'Internet : le routage recalcule les chemins quand
      une liaison disparaît.</p>
      <p><strong>d)</strong> Déroulé du bit alterné :</p>
      <ol>
        <li>A envoie T0 (bit 0) et arme un délai ; B reçoit T0, la traite et renvoie ACK 0.</li>
        <li>A reçoit ACK 0 : il passe au bit 1 et envoie T1 ; B reçoit T1, la traite et renvoie ACK 1.</li>
        <li>ACK 1 est perdu : A n'a rien reçu à l'expiration du délai, donc il <strong>réémet T1</strong> (toujours
        avec le bit 1).</li>
        <li>B reçoit une trame portant le bit 1 alors qu'il <strong>attend le bit 0</strong> : c'est un
        <strong>doublon</strong>. Il ne la traite pas une seconde fois, mais <strong>renvoie quand même ACK 1</strong>
        pour débloquer A, qui peut alors passer à la trame suivante (bit 0).</li>
      </ol>
      <p><strong>Barème :</strong> réémission sur expiration du délai (1 pt) ; détection du doublon par le bit et
      renvoi de l'acquittement sans retraitement (1 pt).</p>`,
  },
];
