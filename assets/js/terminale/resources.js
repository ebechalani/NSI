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
];

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
];
