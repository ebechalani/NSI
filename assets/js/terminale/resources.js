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
];

/* ---------------- Évaluations (à compléter) ---------------- */
const EVALUATIONS = [];
