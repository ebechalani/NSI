/* =====================================================================
   RESSOURCES ENSEIGNANT — Première NSI
   - PROGRESSION : progression annuelle indicative (4 h/semaine, ~30 sem.)
   - METHODES    : fiches méthode élève (réflexes transversaux)
   - CODER_REEL  : encart « coder pour de vrai » (Capytale / Thonny)
   - EVALUATIONS : DS et TP notés avec barème ; corrigés réservés au prof
   ===================================================================== */

/* ---------------- Activités débranchées (sans ordinateur, en îlot) ----------------
   Clés en main : objectif BO, matériel, déroulé, variante, notes prof.
   Inspirées des classiques « informatique débranchée » (CS Unplugged, CC), réécrites. */
const DEBRANCHE = [
  {
    id: "binaire-cartes",
    emoji: "🃏",
    titre: "Le coffre binaire (cartes)",
    theme: "donnees-base",
    bo: "Passer d'une base à une autre ; évaluer le nombre de bits.",
    duree: "30–40 min",
    materiel: ["5 cartes par îlot : 16, 8, 4, 2, 1 (points dessinés au recto, vide au verso)"],
    objectif:
      "Comprendre que le binaire code un nombre avec des « interrupteurs » (bit = carte visible ou cachée), et que n bits donnent 2ⁿ valeurs.",
    deroule: [
      "Chaque îlot pose les 5 cartes côte à côte, dans l'ordre 16 8 4 2 1.",
      "Convention : carte <strong>visible</strong> = bit 1 (on compte ses points), carte <strong>cachée</strong> = bit 0.",
      "Le prof annonce un nombre (ex. 13) : l'îlot le forme en retournant les bonnes cartes (8+4+1).",
      "Inverse : le prof montre une configuration, les îlots lisent le nombre.",
      "Mise en commun : combien de nombres différents avec 5 cartes ? (0 à 31 = 2⁵). Relier à 2ⁿ.",
    ],
    variante:
      "ASCII : avec 8 cartes (un octet), coder son initiale (A = 65 = 0100 0001). Échanger des « messages binaires » entre îlots.",
    noteProf:
      "Erreurs fréquentes : oublier le 0 (carte cachée compte pour 0), inverser l'ordre des poids. Institutionnaliser ensuite le cours « bit/octet/2ⁿ » et la conversion. Prolonge avec le projet « Le coffre binaire ».",
  },
  {
    id: "tri-cartes",
    emoji: "🔢",
    titre: "Trier à la main & compter le coût",
    theme: "algorithmique",
    bo: "Mettre en œuvre les tris par sélection/insertion ; comparer le coût de deux algorithmes.",
    duree: "30–45 min",
    materiel: ["Un jeu de 6 à 8 cartes numérotées par îlot (ou objets de tailles différentes)"],
    objectif:
      "Exécuter à la main un tri par sélection, puis par insertion, et compter le nombre de comparaisons pour ressentir le coût (complexité).",
    deroule: [
      "Mélanger les cartes, face cachée, alignées.",
      "<strong>Tri par sélection</strong> : chercher la plus petite (en comparant deux à deux), la mettre en tête ; recommencer sur le reste.",
      "Compter un jeton à chaque comparaison de deux cartes.",
      "Recommencer le même paquet avec le <strong>tri par insertion</strong> (insérer chaque carte à sa place comme au jeu).",
      "Comparer le nombre de comparaisons des deux méthodes ; discuter : et avec 100 cartes ?",
    ],
    variante:
      "Réseau de tri : tracer au sol des « comparateurs » (deux élèves échangent s'ils sont dans le désordre) et faire passer une rangée d'élèves numérotés.",
    noteProf:
      "Faire émerger que les deux sont en ~n² (quadratique). Relier au cours « tris » et « coût d'un algorithme ». Prolonge avec le projet « Recherche séquentielle vs dichotomique ».",
  },
  {
    id: "reseau-vivant",
    emoji: "📡",
    titre: "Le réseau vivant (paquets)",
    theme: "reseaux",
    bo: "Découpage d'un message en paquets ; désordre, perte, reconstruction.",
    duree: "25–35 min",
    materiel: ["Cartes-paquets numérotées (n° + un mot) ; les élèves jouent les routeurs"],
    objectif:
      "Comprendre pourquoi un message est découpé en paquets numérotés, et comment le destinataire le reconstitue malgré le désordre et les pertes.",
    deroule: [
      "Écrire une phrase courte ; la découper en 5 cartes-paquets numérotées (1 mot par carte).",
      "Les élèves « routeurs » se font passer les cartes dans le désordre jusqu'au « destinataire ».",
      "Le destinataire <strong>retrie par numéro</strong> et lit le message.",
      "Le prof <strong>retire une carte</strong> en route (paquet perdu) : le destinataire détecte le numéro manquant et le <strong>redemande</strong>.",
      "Glisser un <strong>doublon</strong> : montrer qu'on l'ignore.",
    ],
    variante:
      "Plusieurs chemins : si un « routeur » tombe en panne, faire passer les paquets par un autre (robustesse / routage).",
    noteProf:
      "Relier au cours « réseaux » (protocole, paquets, routage, TCP/IP). Prolonge avec le projet « Simulation de paquets réseau » (version codée).",
  },
  {
    id: "robot-humain",
    emoji: "🤖",
    titre: "Programmer un robot humain",
    theme: "langages-prog",
    bo: "Séquence d'instructions, boucles ; rigueur et débogage (pensée informatique).",
    duree: "30–40 min",
    materiel: ["Un quadrillage au sol (ou tapis), des obstacles, une cible"],
    objectif:
      "Écrire un algorithme précis et non ambigu, le faire exécuter littéralement, repérer et corriger les bugs.",
    deroule: [
      "Un élève est le « robot » ; il n'obéit qu'à 3 ordres : <em>avance d'une case</em>, <em>tourne à gauche</em>, <em>tourne à droite</em>.",
      "L'îlot écrit sur papier la suite d'instructions pour amener le robot du départ à la cible.",
      "Le robot exécute <strong>exactement</strong> les instructions (pas d'initiative) → on voit les bugs.",
      "L'îlot corrige son « programme » et réessaie (débogage).",
      "Introduire une <strong>boucle</strong> : « répéter 3 fois (avance) » pour raccourcir le programme.",
    ],
    variante:
      "Ajouter une condition : « si mur devant, tourne à droite ». Faire écrire le programme d'un autre îlot (lecture de code).",
    noteProf:
      "C'est le cœur du « computational thinking » : décomposer, séquencer, abstraire (boucle). Relier au cours « langages » (séquence, boucles, débogage).",
  },
  {
    id: "dichotomie-annuaire",
    emoji: "🔎",
    titre: "Recherche : au hasard vs dichotomie",
    theme: "algorithmique",
    bo: "Recherche séquentielle et dichotomique ; coût (log n).",
    duree: "20–30 min",
    materiel: ["Rien (jeu oral) ou une liste triée (annuaire, cartes triées)"],
    objectif:
      "Comparer deux stratégies de recherche dans un ensemble trié et compter les étapes pour découvrir l'intérêt de la dichotomie.",
    deroule: [
      "Jeu « devine le nombre entre 1 et 100 » : un élève choisit, l'îlot devine.",
      "1ʳᵉ manche : deviner <strong>au hasard / dans l'ordre</strong> ; compter les essais.",
      "2ᵉ manche : deviner en <strong>coupant en deux</strong> à chaque fois (« plus grand / plus petit ») ; compter.",
      "Comparer : ~50 essais au pire contre ~7 (log₂ 100 ≈ 7).",
      "Faire le lien : pourquoi la dichotomie exige une liste <strong>triée</strong> ?",
    ],
    variante:
      "Chercher un nom dans un annuaire papier : à la main, puis en ouvrant « au milieu ». Estimer pour 1 000 000 d'éléments (~20 étapes).",
    noteProf:
      "Relier au cours « recherche dichotomique » et « coût » (O(n) vs O(log n)). Prolonge avec le projet « Recherche séquentielle vs dichotomique ».",
  },
];

/* ---------------- Didactique & ressources (prof) ----------------
   « Ordre du jour » de la formation (B. Mermet, DIU NSI Le Havre). Comme sur le
   site DU : chaque item ouvre une FICHE INTERNE (résumé rédigé, original) + un
   lien « source ↗ » vers la page d'origine. On résume/lie, on ne recopie pas. */
const DIDACTIQUE_BASE = "https://mermet.users.greyc.fr/Enseignement/EnseignementInformatiqueLycee/Havre/Didactique/";
const DIDACTIQUE = {
  bloc: "Enseigner la NSI en Première — repères & ressources",
  meta: "Fiches d'après la formation DIU NSI — Bruno Mermet (GREYC, Université Le Havre)",
  index: "index.html",
  parties: [
    {
      titre: "1 · Le programme de NSI et son organisation",
      items: [
        {
          t: "Le programme de Première & sa répartition annuelle", file: "organisationPremiere.html",
          fiche: `
            <p>Le programme de <strong>Première NSI</strong> (Bulletin officiel) s'organise en <strong>8 thèmes</strong>, pour <strong>4 h hebdomadaires</strong> (≈ 30 semaines utiles, soit ≈ 120 h). Le BO impose qu'une part importante du temps soit consacrée à la <strong>pratique sur machine</strong> et aux <strong>projets</strong> (≈ 25 à 30 %).</p>
            <h3>Répartition indicative par thème (cohérente avec le BO)</h3>
            <table>
              <tr><th>Thème du programme</th><th>Volume indicatif</th></tr>
              <tr><td>Histoire de l'informatique <em>(transversal)</em></td><td>≈ 4 h</td></tr>
              <tr><td>Représentation des données — types de base</td><td>≈ 12 h</td></tr>
              <tr><td>Représentation des données — types construits</td><td>≈ 10 h</td></tr>
              <tr><td>Traitement de données en tables</td><td>≈ 10 h</td></tr>
              <tr><td>Interactions homme-machine sur le Web</td><td>≈ 14 h</td></tr>
              <tr><td>Architectures matérielles & systèmes d'exploitation</td><td>≈ 14 h</td></tr>
              <tr><td>Langages et programmation</td><td>≈ 22 h</td></tr>
              <tr><td>Algorithmique</td><td>≈ 16 h</td></tr>
              <tr><td><strong>Projets en îlots</strong> (≈ 25-30 %)</td><td>≈ 30 h</td></tr>
            </table>
            <p>La <strong>programmation Python est introduite très tôt</strong> et <em>filée</em> toute l'année : elle sert d'outil pour tous les autres thèmes (données, tables, Web, algorithmique). On évite donc de « bloquer » 22 h d'affilée de programmation.</p>
            <h3>Articuler cours, TP et projets</h3>
            <ul>
              <li><strong>Projets ≈ 25-30 %</strong> du temps : soit un grand projet (≈ 30-35 h à partir de janvier), soit un projet court (semestre 1) + un projet long (semestre 2).</li>
              <li>Sujets « <strong>motivants et réalisables</strong> », choisis par les élèves dans une liste validée.</li>
              <li>Alterner <strong>débranché</strong> → <strong>formalisation</strong> → <strong>machine</strong> dans une même séquence.</li>
            </ul>
            <h3>Formats de séance efficaces</h3>
            <ul>
              <li><strong>Informatique débranchée</strong> : exploration concrète (≈ 45 min) → formalisation (≈ 30 min) → exercices machine (≈ 45 min).</li>
              <li>Apprendre <strong>à partir de code existant</strong> : exécuter → modifier → créer en autonomie.</li>
              <li>Méthode du <strong>puzzle</strong> : des groupes « experts » d'un sous-thème, puis recomposition pour un projet intégrateur.</li>
            </ul>
            <p class="note">📝 <strong>Évaluation :</strong> combiner QCM (connaissances) et travail <strong>sur machine</strong> (code, projets), avec un <strong>barème annoncé dès le départ</strong>. La rubrique « Progression annuelle » du site propose un planning détaillé semaine par semaine.</p>`,
        },
        { t: "Programme officiel de Première (PDF, Éduscol)", file: "https://cache.media.education.gouv.fr/file/SP1-MEN-22-1-2019/26/8/spe633_annexe_1063268.pdf" },
        { t: "Modalités d'évaluation en Première (BO)", file: "https://www.education.gouv.fr/pid285/bulletin_officiel.html?cid_bo=141199" },
        {
          t: "Le programme de Terminale (pour situer la suite)", file: "resumeProgrammeTerminale.html",
          fiche: `
            <p>Savoir <strong>où mène la Première</strong> aide à doser ses cours. La Terminale NSI (<strong>6 h/semaine</strong>, dont ≈ 1/3 en projets) élargit fortement le programme et débouche sur l'<strong>épreuve de spécialité au bac</strong>.</p>
            <h3>Les grands domaines de Terminale</h3>
            <ul>
              <li><strong>Structures de données</strong> : listes, piles, files, dictionnaires, <strong>arbres</strong>, <strong>graphes</strong> ; distinction interface / implémentation ; notions de <strong>programmation objet</strong>.</li>
              <li><strong>Bases de données</strong> : modèle relationnel, rôle d'un SGBD, langage <strong>SQL</strong> (sélections, jointures, mises à jour).</li>
              <li><strong>Programmation</strong> : <strong>récursivité</strong>, calculabilité/décidabilité, paradigmes, mise au point et tests.</li>
              <li><strong>Algorithmique</strong> : parcours d'arbres et de graphes, « <strong>diviser pour régner</strong> », programmation dynamique, recherche textuelle.</li>
              <li><strong>Architectures & réseaux</strong> : gestion des processus, protocoles de routage, sécurisation des communications.</li>
            </ul>
            <p class="note">🎓 En Première, on <strong>installe les bases</strong> (types, boucles, fonctions, tables, dichotomie, tris simples) sur lesquelles tout cela reposera. Inutile d'anticiper la POO ou la récursivité : mieux vaut consolider.</p>`,
        },
      ],
    },
    {
      titre: "2 · Repères didactiques (comment enseigner)",
      items: [
        {
          t: "Qu'est-ce que la didactique de l'informatique ?", file: "didactique.html",
          fiche: `
            <p>La <strong>didactique</strong> étudie l'enseignement d'un <em>savoir précis</em> : comment le rendre apprenable, quels obstacles surgissent, comment les dépasser. Elle est plus ciblée que la <strong>pédagogie</strong> (qui concerne la relation et la gestion de classe en général).</p>
            <h3>Le triangle pédagogique (Houssaye, 1988)</h3>
            <p>Trois pôles : <strong>enseignant</strong>, <strong>élève</strong>, <strong>savoir</strong>. Au départ, seul existe le lien enseignant ↔ savoir ; le but de l'enseignement est de consolider le lien <strong>élève ↔ savoir</strong>, jusqu'à ce qu'il soit le seul à subsister (l'élève sait, sans le prof).</p>
            <h3>L'informatique est une science (épistémologie)</h3>
            <p>Pour bien l'enseigner, il faut savoir ce qu'elle est. G. <strong>Dowek</strong> propose <strong>4 piliers</strong> :</p>
            <ul>
              <li><strong>Information</strong> (les données et leur représentation) ;</li>
              <li><strong>Algorithmes</strong> (la description des traitements) ;</li>
              <li><strong>Machines</strong> (les systèmes physiques qui exécutent) ;</li>
              <li><strong>Langages</strong> (pour décrire les traitements à la machine).</li>
            </ul>
            <p>G. <strong>Berry</strong> y ajoute les <strong>interfaces et interactions</strong>. On retrouve directement ces piliers dans les thèmes du programme.</p>
            <h3>Deux idées clés pour la classe</h3>
            <ul>
              <li><strong>Knuth</strong> : la pensée algorithmique a deux traits absents des maths — l'<strong>efficacité</strong> (le coût compte) et l'<strong>assignation</strong> (une variable change d'état au fil du temps). C'est souvent un obstacle pour les élèves : <code>x = x + 1</code> n'est pas une équation !</li>
              <li><strong>Brousseau</strong> — <em>situations a-didactiques</em> : l'enseignant s'efface et organise une situation où l'élève <strong>découvre</strong> lui-même la solution et la règle, plutôt que de la recevoir.</li>
            </ul>`,
        },
        {
          t: "La pensée informatique (Computational Thinking)", file: "computationalThinking.html",
          fiche: `
            <p>La <strong>pensée informatique</strong> désigne l'ensemble des démarches mentales pour <strong>formuler un problème</strong> de façon à le faire résoudre par une machine. C'est l'objectif de fond de la NSI : développer une <em>manière de penser</em>, pas seulement apprendre une syntaxe.</p>
            <h3>Repères historiques</h3>
            <ul>
              <li><strong>Seymour Papert</strong> (1980) introduit l'idée avec le langage Logo.</li>
              <li><strong>Jeannette Wing</strong> (2006) la popularise par un article fondateur.</li>
              <li><strong>Dagienė & Jevsikova</strong> en explorent les liens avec les compétences numériques (et le concours <strong>Bebras</strong> / Castor informatique).</li>
            </ul>
            <h3>Les démarches à faire pratiquer</h3>
            <ul>
              <li><strong>Décomposer</strong> un problème complexe en sous-problèmes ;</li>
              <li><strong>Abstraire</strong> : ne garder que l'essentiel, modéliser les données ;</li>
              <li><strong>Reconnaître des motifs</strong> (des régularités, des cas semblables) ;</li>
              <li><strong>Algorithmiser</strong> : décrire une suite d'étapes non ambiguë ;</li>
              <li><strong>Généraliser</strong> et <strong>évaluer</strong> la qualité d'une solution.</li>
            </ul>
            <p class="note">🧠 Idée forte de Wing : viser la <strong>conceptualisation</strong> (« penser comme un informaticien ») plutôt que la seule programmation. Ces démarches se travaillent très bien en <strong>débranché</strong> (voir la rubrique « Activités débranchées »).</p>`,
        },
        {
          t: "Les compétences ADAGE", file: "adage.html",
          fiche: `
            <p><strong>ADAGE</strong> est un moyen mnémotechnique pour <strong>5 compétences</strong> de la pensée informatique (d'après Selby & Woollard, 2013 ; reprises par le concours Bebras et le programme anglais « Computing at School »). C'est un cadre commode pour <strong>concevoir ses séances</strong> et ses <strong>évaluations</strong>.</p>
            <table>
              <tr><th>Lettre</th><th>Compétence</th><th>Exemple en classe</th></tr>
              <tr><td><strong>A</strong></td><td>Abstraction</td><td>représenter un élève par un dictionnaire {nom, note}</td></tr>
              <tr><td><strong>D</strong></td><td>Décomposition</td><td>découper « gérer un bulletin » en lire / calculer / afficher</td></tr>
              <tr><td><strong>A</strong></td><td>Algorithmique (pensée)</td><td>écrire une boucle qui parcourt et accumule</td></tr>
              <tr><td><strong>G</strong></td><td>Généralisation</td><td>voir que tri de notes = tri de n'importe quelle liste</td></tr>
              <tr><td><strong>É</strong></td><td>Évaluation</td><td>comparer deux solutions (lisibilité, coût)</td></tr>
            </table>
            <p class="note">📋 Astuce : pour chaque activité, demande-toi <em>quelle(s) lettre(s) d'ADAGE</em> elle fait travailler. Cela aide à équilibrer l'année et à rédiger des critères d'évaluation explicites.</p>`,
        },
        {
          t: "« Enseigner l'informatique » — synthèse", file: "resumeLivreEnseignerInformatique.html",
          fiche: `
            <p>Quelques thèses et conseils marquants de l'ouvrage :</p>
            <h3>Posture de l'enseignant</h3>
            <ul>
              <li>Le prof de NSI n'est <strong>pas</strong> un « monsieur TICE » ni un dépanneur matériel : il enseigne une <strong>science</strong> qui évolue vite et demande une mise à jour constante.</li>
              <li>Privilégier les <strong>concepts fondamentaux</strong> (qui durent) plutôt que les technologies (vite obsolètes).</li>
            </ul>
            <h3>Conduite des séances</h3>
            <ul>
              <li>Alterner <strong>descendant</strong> (théorie) et <strong>ascendant</strong> (pratique) : partir d'un <strong>problème concret</strong>, formaliser, puis réinvestir.</li>
              <li>Enseigner la <strong>lecture</strong> de code de qualité <em>avant</em> la production.</li>
              <li>Utiliser des <strong>métaphores</strong> et des <strong>visualisations</strong> pour rendre l'abstrait concret (ex. Python Tutor).</li>
              <li>Planifier en tenant compte de la <strong>lenteur réelle</strong> des élèves sur machine.</li>
            </ul>
            <h3>TP & travail de groupe</h3>
            <ul>
              <li>TP à <strong>deux niveaux</strong> : une partie obligatoire pour tous + une partie optionnelle pour les plus rapides (éviter l'ennui et la démotivation).</li>
              <li>Travail de groupe : méthode du <strong>puzzle</strong> ou binômes avec <strong>rotation des rôles</strong>.</li>
              <li>Préférer une démarche <strong>agile guidée</strong> à une gestion de projet classique.</li>
            </ul>`,
        },
        {
          t: "Psychologie du développeur", file: "psychologieDeveloppeur.html",
          fiche: `
            <p>Programmer mobilise des <strong>qualités mentales</strong> autant que des connaissances techniques. Les connaître aide à <strong>valoriser les bons réflexes</strong> chez les élèves.</p>
            <h3>Sept qualités à cultiver</h3>
            <ul>
              <li><strong>Curiosité</strong> : le domaine évolue vite, on apprend en continu.</li>
              <li><strong>Esprit critique</strong> : peser chaque solution, éviter le « marteau doré » (utiliser toujours le même outil familier au lieu du plus adapté).</li>
              <li><strong>Paresse constructive</strong> : réutiliser/factoriser le code plutôt que dupliquer (moins d'incohérences).</li>
              <li><strong>Humilité</strong> : accepter que son code contient des bugs, ne pas se vexer du débogage.</li>
              <li><strong>Esprit d'équipe</strong> : penser aux développeurs suivants — documentation, <strong>lisibilité</strong>.</li>
              <li><strong>Exigence de qualité</strong> : refuser le travail bâclé, <em>refactorer</em> au lieu de se contenter d'un code « qui marche ».</li>
            </ul>
            <p class="note">💡 En classe : traiter le <strong>débogage comme une activité normale</strong> (pas une faute), instaurer le <strong>droit à l'erreur</strong>, et faire relire le code entre pairs. La charge cognitive d'un débutant est énorme : avancer par petits pas.</p>`,
        },
        {
          t: "Écueils fréquents des élèves (et comment les lever)",
          fiche: `
            <p>Une liste d'<strong>obstacles récurrents</strong> en Première, avec un exemple et la manière d'y remédier. À garder sous le coude pour anticiper les questions.</p>
            <h3>1. « = » n'est pas une égalité</h3>
            <p>L'affectation <em>range</em> une valeur ; ce n'est pas une équation mathématique.</p>
            <pre><code>x = 5
x = x + 1   # x vaut maintenant 6 (et non « x = x+1 » impossible)</code></pre>
            <p>👉 Faire visualiser pas à pas (bouton « 🔎 Pas à pas ») pour <em>voir</em> la variable changer d'état.</p>
            <h3>2. Confondre = et ==</h3>
            <pre><code>if note = 10:   # ❌ SyntaxError
if note == 10:  # ✅ comparaison</code></pre>
            <h3>3. Oublier de convertir l'entrée</h3>
            <pre><code>age = input("Âge ? ")      # age est une CHAÎNE
if age &gt; 18:               # ❌ compare texte et nombre
age = int(input("Âge ? "))  # ✅</code></pre>
            <p>👉 Même piège avec les valeurs lues dans un CSV (toujours des chaînes).</p>
            <h3>4. Les bornes de range</h3>
            <pre><code>for i in range(1, 5):   # 1, 2, 3, 4  → 5 EXCLU
    print(i)</code></pre>
            <h3>5. Comparer des flottants</h3>
            <pre><code>0.1 + 0.2 == 0.3   # ❌ False (arrondis binaires)</code></pre>
            <p>👉 Comparer avec une tolérance, ou rester sur l'idée « approximation ».</p>
            <h3>6. Alias de listes (effet de bord)</h3>
            <pre><code>a = [1, 2, 3]
b = a          # b et a désignent la MÊME liste
b.append(4)
print(a)       # [1, 2, 3, 4] — surprise !</code></pre>
            <p>👉 Pour copier : <code>b = a.copy()</code>.</p>
            <h3>7. return dans la boucle</h3>
            <p>Un <code>return</code> placé <em>dans</em> la boucle sort dès le 1ᵉʳ tour : souvent on le veut <em>après</em> la boucle.</p>
            <p class="note">🧠 Beaucoup de ces écueils relèvent de l'<strong>assignation</strong> et de l'<strong>abstraction</strong> (cf. fiches « didactique » et « ADAGE »). Les nommer explicitement en classe aide énormément.</p>`,
        },
      ],
    },
    {
      titre: "3 · Culture informatique à transmettre",
      items: [
        {
          t: "Histoire de l'informatique", file: "histoireInformatique.html",
          fiche: `
            <p>L'informatique n'est pas née avec l'ordinateur : c'est l'aboutissement de <strong>siècles de mathématiques, de logique et de technique</strong>. Ce thème, <strong>transversal</strong>, donne du sens à tous les autres (le binaire vient de Leibniz, le mot « algorithme » d'Al-Khwârizmî, le Web de 1989…).</p>
            <h3>Grandes périodes</h3>
            <ul>
              <li><strong>Antiquité → IXᵉ s.</strong> : premiers algorithmes (Euclide, Archimède) ; <strong>Al-Khwârizmî</strong> donne son nom à « algorithme » et « algèbre ».</li>
              <li><strong>XVIIᵉ–XIXᵉ s.</strong> : machines à calculer (Pascal, Leibniz), métier Jacquard à cartes perforées, <strong>Babbage & Lovelace</strong> (machine programmable + premier algorithme).</li>
              <li><strong>1850–1945</strong> : fondements théoriques — Boole, Hilbert, Gödel, Church, <strong>Turing (1936)</strong>, Shannon, von Neumann.</li>
              <li><strong>1945–1970</strong> : ENIAC, <strong>transistor (1947)</strong>, circuit intégré (1958), premiers langages (Fortran, Lisp, COBOL).</li>
              <li><strong>1970–1990</strong> : <strong>microprocesseur (1971)</strong>, micro-ordinateur, ARPANET → Internet, logiciel libre.</li>
              <li><strong>1990 →</strong> : <strong>Web (1989)</strong>, mobile (2007), big data, intelligence artificielle.</li>
            </ul>
            <p class="note">📚 Tout est <strong>développé et illustré</strong> dans le thème <strong>« Histoire de l'informatique »</strong> du site : frise interactive, histoire de l'IA, évolution du stockage, métiers et études.</p>`,
        },
        {
          t: "Typologie des langages de programmation", file: "typologieLangages.html",
          fiche: `
            <p>Il existe des centaines de langages, mais on les <strong>situe</strong> selon quelques axes et on les regroupe en <strong>paradigmes</strong>. En Première, l'enjeu est seulement de faire comprendre la <em>diversité</em> : on apprend des <strong>idées</strong>, pas une syntaxe.</p>
            <h3>Trois axes pour situer un langage</h3>
            <table>
              <tr><th>Axe</th><th>De… à…</th><th>Exemples</th></tr>
              <tr><td>Niveau</td><td>bas (proche machine) → haut (abstrait)</td><td>assembleur → C → Python</td></tr>
              <tr><td>Exécution</td><td>compilé → interprété</td><td>C (compilé) ; Python (interprété) ; Java (bytecode)</td></tr>
              <tr><td>Typage</td><td>statique/fort → dynamique/faible</td><td>Java (statique) ; Python (dynamique)</td></tr>
            </table>
            <h3>Les grands paradigmes</h3>
            <ul>
              <li><strong>Impératif</strong> : une suite d'instructions qui modifient l'état (C, Python, Java).</li>
              <li><strong>Fonctionnel</strong> : composition de fonctions (Lisp dès 1958, Haskell, OCaml).</li>
              <li><strong>Objet</strong> : on regroupe données et traitements (Java, Python).</li>
              <li><strong>Logique</strong> : on décrit des faits et des règles, la machine déduit (Prolog).</li>
            </ul>
            <p class="note">🎓 En Première on reste sur le paradigme <strong>impératif</strong> (Python) ; les autres sont une ouverture (Terminale). Activité simple : comparer le « Bonjour » dans 3 langages pour voir ce qui change… et ce qui reste.</p>`,
        },
        {
          t: "Projets informatiques & génie logiciel", file: "projetInformatique.html",
          fiche: `
            <p>Comprendre pourquoi un projet logiciel est <strong>difficile</strong> aide à encadrer les projets des élèves.</p>
            <h3>Caractéristiques d'un projet informatique</h3>
            <ul>
              <li><strong>Deux mondes</strong> : le domaine <em>technique</em> (développeurs) et le domaine <em>métier</em> (client) — communication difficile.</li>
              <li><strong>Cahier des charges souvent vague</strong> : beaucoup d'implicites humains non explicités pour la machine.</li>
              <li><strong>Estimation difficile</strong> : évaluer la charge de travail est complexe, même pour des experts.</li>
              <li><strong>Validation complexe</strong> : impossible de tout tester ; on cherche à <em>minimiser</em> les erreurs.</li>
              <li><strong>Cycle de vie long</strong> : un logiciel n'est jamais « fini » (maintenance, corrections, code <em>legacy</em>).</li>
            </ul>
            <h3>Méthodes de développement</h3>
            <ul>
              <li><strong>Cascade</strong> : phases linéaires (spécification → conception → implémentation).</li>
              <li><strong>Cycle en V</strong> : la cascade + les tests associés à chaque phase.</li>
              <li><strong>Itératif / spirale</strong> : on avance fonctionnalité par fonctionnalité.</li>
              <li><strong>Agile</strong> : petites itérations, qualité, réactivité, relations humaines.</li>
            </ul>
            <p class="note">🏝️ En classe (îlots), l'<strong>agile guidé</strong> est le plus adapté : de petites versions qui marchent, qu'on enrichit. Voir la fiche méthode « Conduire un projet en équipe ».</p>`,
        },
        {
          t: "Études et métiers de l'informatique", file: "etudes.html",
          fiche: `
            <p>Un repère utile pour <strong>motiver</strong> les élèves et les aider à choisir de poursuivre la NSI.</p>
            <h3>Filières après le bac (France)</h3>
            <table>
              <tr><th>Parcours</th><th>Durée</th><th>Exemples</th></tr>
              <tr><td>BTS</td><td>bac+2</td><td>SIO (options SISR réseaux / SLAM développement), SN</td></tr>
              <tr><td>BUT Informatique</td><td>bac+3</td><td>en IUT (ex-DUT)</td></tr>
              <tr><td>Licence → Master</td><td>bac+3 → +5</td><td>informatique, science des données, sécurité, génie logiciel, IA</td></tr>
              <tr><td>École d'ingénieur</td><td>bac+5</td><td>après prépa ou post-bac (INSA, ENSI…)</td></tr>
            </table>
            <h3>Quelques métiers</h3>
            <p>Développeur·se (web, mobile, jeux), <strong>data analyst / scientist</strong>, <strong>cybersécurité</strong>, administrateur·rice systèmes & réseaux, DevOps, ingénieur·e <strong>IA</strong>, chef·fe de projet, chercheur·se…</p>
            <p class="note">🎯 Compétences qui comptent : logique & algorithmique, rigueur, travail d'équipe, anglais, curiosité. La <strong>spé NSI</strong> gardée en Terminale est un atout fort pour <strong>Parcoursup</strong>.</p>`,
        },
      ],
    },
    {
      titre: "4 · Mettre en œuvre en classe",
      items: [
        {
          t: "🚀 Séquence 0 — les 2 premières séances clé en main (grands débutants)", file: "sequence0.html",
          fiche: `
            <p>Deux séances de <strong>2 h</strong> pour démarrer l'année avec des élèves qui n'ont <strong>jamais programmé</strong>. Objectif : qu'à la fin de la semaine 1, chaque élève ait <em>écrit et corrigé</em> son premier programme — et n'ait plus peur des messages d'erreur. Tout le matériel élève est déjà sur le site (thème « 🐍 Langages et programmation », TP « Variables et types »).</p>

            <h3>Séance 1 (2 h) — « L'ordinateur ne comprend que ce qu'on lui dit »</h3>
            <table>
              <tr><th>Temps</th><th>Phase</th><th>Déroulé</th></tr>
              <tr><td>0–15</td><td>Accueil</td><td>Tour d'horizon de l'année (les 9 thèmes du menu, la progression), fonctionnement de la salle et des îlots, présentation du site (comptes élèves : code de classe + nom).</td></tr>
              <tr><td>15–40</td><td>Débranché : « le prof-robot »</td><td>Consigne aux îlots : « écrivez la recette pour que je dessine un carré au tableau / que je fasse une tartine ». Le professeur exécute <strong>littéralement</strong> chaque consigne (ambiguïtés comprises : « mets du beurre » → poser la plaquette entière). Fous rires garantis, et la leçon s'impose d'elle-même : <em>une machine exécute exactement ce qu'on lui dit, pas ce qu'on veut dire</em>.</td></tr>
              <tr><td>40–55</td><td>Institutionnalisation</td><td>Trace écrite : <strong>programme</strong> = suite d'instructions précises et ordonnées ; <strong>langage de programmation</strong> = langue sans ambiguïté ; nous utiliserons <strong>Python</strong>. (Repère histoire : Python, Guido van Rossum, 1991.)</td></tr>
              <tr><td>55–85</td><td>Machine : premiers programmes</td><td>Sur le site, thème « Langages et programmation », première cellule : exécuter <code>print("Bonjour")</code>, puis <strong>modifier</strong> (son prénom, deux print, un calcul <code>print(3 * 7)</code>). Chaque élève doit faire afficher 3 choses différentes.</td></tr>
              <tr><td>85–100</td><td>⭐ Provoquer l'erreur</td><td>Consigne inhabituelle : « <strong>cassez</strong> votre programme » (enlever une parenthèse, écrire <code>Print</code>…). Lire ENSEMBLE les messages (<code>SyntaxError</code>, <code>NameError</code>) : l'erreur n'est pas une punition, c'est <em>la machine qui explique ce qu'elle n'a pas compris</em>. Réflexe à installer dès le jour 1 — c'est le meilleur prédicteur d'autonomie future.</td></tr>
              <tr><td>100–115</td><td>Variables (découverte)</td><td>Débranché express sur ardoise : le professeur dicte <code>x = 5</code>, <code>x = x + 3</code>, <code>x = x * 2</code> ; chaque îlot suit la valeur de x (verbaliser : <code>=</code> n'est PAS l'égalité des maths, c'est « range dans la boîte »). Puis vérification sur machine.</td></tr>
              <tr><td>115–120</td><td>Bilan</td><td>3 questions à l'oral : qu'est-ce qu'un programme ? que fait <code>=</code> ? que faire face à une erreur ? (→ les mêmes ouvriront la séance 2.)</td></tr>
            </table>

            <h3>Séance 2 (2 h) — « Des boîtes qui se souviennent, des programmes qui décident »</h3>
            <table>
              <tr><th>Temps</th><th>Phase</th><th>Déroulé</th></tr>
              <tr><td>0–10</td><td>Rituel d'entrée</td><td>Les 3 questions du bilan S1, ardoises levées. Ré-expliquer par un élève, pas par le professeur.</td></tr>
              <tr><td>10–30</td><td>Types de base</td><td>Le piège fondateur au tableau : que vaut <code>3 + 4</code> ? et <code>"3" + "4"</code> ? Faire parier les îlots, puis vérifier sur machine. Trace écrite : <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, et <code>type()</code> pour demander à Python.</td></tr>
              <tr><td>30–60</td><td>TP guidé sur le site</td><td>TP « <strong>Variables et types</strong> » (dans le thème) : les 4 étapes, dont le texte à trous de la calculatrice de moyenne. Travail en binômes « pilote/copilote » (on échange les rôles à mi-parcours).</td></tr>
              <tr><td>60–75</td><td>Conditions (découverte débranchée)</td><td>Jeu : le professeur pense à une règle (« si la note ≥ 10, je dis Reçu, sinon Raté ») et répond aux propositions des îlots ; ils doivent deviner la règle. Puis : comment l'écrire pour la machine ?</td></tr>
              <tr><td>75–105</td><td>if / else sur machine</td><td>Écrire ensemble <code>mention(note)</code> pas à pas (d'abord if/else simple, puis elif). Exercices gradués du thème (cellules vides — les corrigés sont poussés en fin de séance). Différenciation : les plus rapides font l'exercice « défi » et deviennent <strong>tuteurs</strong> de leur îlot.</td></tr>
              <tr><td>105–120</td><td>Bilan + QCM</td><td>Mini-QCM du thème sur le site (auto-corrigé, remonte dans « Ma classe ») + annonce du fil de la semaine suivante (boucles : « et si on veut répéter 100 fois ? »).</td></tr>
            </table>

            <h3>Pièges de débutants à guetter dès ces 2 séances</h3>
            <ul>
              <li><code>=</code> (affecter) confondu avec <code>==</code> (comparer) — le verbaliser À CHAQUE occasion (« range dans la boîte » vs « est-ce égal ? ») ;</li>
              <li>majuscules/minuscules (<code>Print</code>), guillemets oubliés autour des chaînes ;</li>
              <li>l'<strong>indentation</strong> : présentée dès le premier <code>if</code> comme « la phrase appartient au si », jamais comme une contrainte arbitraire ;</li>
              <li>la peur du message d'erreur → d'où la phase « cassez votre programme » de la séance 1.</li>
            </ul>
            <h3>À ne PAS faire en semaine 1</h3>
            <ul>
              <li>Empiler la syntaxe (f-strings, listes, fonctions…) : variables + types + if suffisent largement ;</li>
              <li>Noter la performance : les premières évaluations sont <strong>diagnostiques</strong> (QCM auto-corrigés, TP à barème bienveillant) ;</li>
              <li>Laisser les élèves « qui savent déjà » s'ennuyer : exercices défi + rôle de tuteur (expliquer, c'est consolider).</li>
            </ul>
            <p class="note">📅 La suite (S2 → S6 : boucles, fonctions, débogage) est détaillée semaine par semaine dans la rubrique <strong>🗓️ Progression annuelle</strong>. Matériel : ardoises (ou feuilles A5), le site (aucune installation), et si possible Capytale/Thonny à partir de la semaine 4.</p>`,
        },
        {
          t: "Idées de projets NSI", file: "ideesProjets.html",
          fiche: `
            <p>Une banque de sujets, du plus accessible au plus ambitieux. Bien choisis, ils couvrent à eux seuls la plupart des capacités du programme.</p>
            <h3>Jeux & logique</h3>
            <ul>
              <li><strong>Mastermind</strong>, <strong>Tic-tac-toe</strong> (avec une petite IA), <strong>Qui est-ce ?</strong> (questions binaires), <strong>Tours de Hanoï</strong>.</li>
            </ul>
            <h3>Maths & algorithmique</h3>
            <ul>
              <li>Calcul <strong>en valeur exacte</strong> sur des fractions, <strong>enveloppe convexe</strong>, générateur d'<strong>exercices de calcul mental</strong>.</li>
            </ul>
            <h3>Texte & cryptographie</h3>
            <ul>
              <li>Chiffre de <strong>César</strong> (et son déchiffrement automatique), « <strong>Cent mille milliards de poèmes</strong> ».</li>
            </ul>
            <h3>Graphisme & simulation</h3>
            <ul>
              <li><strong>Tortue Logo</strong>, dessin de plantes (L-systèmes), une <strong>balle</strong> qui rebondit, le <strong>jeu de la vie</strong> de Conway.</li>
            </ul>
            <p class="note">🏝️ Choisir des sujets « <strong>motivants et réalisables</strong> », dans une liste validée par le prof. Le site propose déjà 10 mini-projets clés en main (rubrique <strong>Projets en îlots</strong>).</p>`,
        },
        {
          t: "Truc pratique : livrer un programme en boîte noire (.pyc)", file: "trucs.html",
          fiche: `
            <p>Parfois on veut distribuer un programme aux élèves <strong>sans révéler le code source</strong> (pour qu'ils l'utilisent comme une « boîte noire » avant de l'écrire eux-mêmes, ou pour des tests).</p>
            <h3>Procédure</h3>
            <ol>
              <li><strong>Compiler</strong> : <code>python -m py_compile operation.py</code> → crée un <code>.pyc</code> dans le dossier <code>__pycache__</code>.</li>
              <li><strong>Renommer</strong> : dans <code>__pycache__</code>, renommer <code>operation.cpython-3x.pyc</code> en <code>operation.pyc</code>.</li>
              <li><strong>Distribuer</strong> le <code>.pyc</code> : les élèves le placent dans leur dossier et font <code>import operation</code> comme un module normal.</li>
            </ol>
            <p class="note">⚠️ Le <code>.pyc</code> doit être compilé avec la <strong>même version de Python et le même système</strong> que ceux des élèves, sinon il refusera de se charger.</p>`,
        },
      ],
    },
  ],
  // Ressources complémentaires (utiles en classe), clairement séparées.
  complement: [
    { titre: "Python Tutor", desc: "Visualiseur d'exécution pas à pas (intégré : bouton « 🔎 Pas à pas »).", url: "https://pythontutor.com/" },
    { titre: "CS Unplugged — informatique débranchée", desc: "Activités sans ordinateur (binaire, tri, routage).", url: "https://www.csunplugged.org/fr/" },
    { titre: "Interstices (Inria)", desc: "Ressources et vulgarisation, jeu des 7 familles.", url: "https://interstices.info/" },
    { titre: "G. Berry — « Pensée informatique » (Collège de France)", desc: "Conférence de référence.", url: "https://www.college-de-france.fr/fr/personne/gerard-berry" },
    { titre: "Eduscol NSI", desc: "Programmes officiels et ressources.", url: "https://eduscol.education.gouv.fr/2630/programmes-et-ressources-en-numerique-et-sciences-informatiques-voie-g" },
    { titre: "PEP8", desc: "Conventions d'écriture du code Python.", url: "https://pep8.org/" },
  ],
};

/* ---------------- Ressources externes rattachées à un thème ----------------
   Supports d'autres formations DIU, LIÉS avec attribution (pas de copie). */
const THEME_RESSOURCES_EXT = {
  // « types-construits » : le contenu du module (cours, TP, fiches) est désormais
  // intégré DIRECTEMENT dans le thème (sections, TP dépliables, exercices) — plus
  // de pavé de liens externes. Source créditée sur les TP du thème (TP_SOURCE).
  "ihm-web": {
    titre: "HTML, CSS & client-serveur",
    auteur: "Cours de J-M Barbier — DIU EIL 2026",
    base: "https://diu-htmlcss-1858e2.forge.apps.education.fr/",
    items: [
      { t: "🌐 Le cours complet en ligne (site)", url: "" },
      { t: "📕 Cours HTML (PDF)", url: "pdf/book-html.pprint.pdf" },
      { t: "🎨 Cours CSS (PDF)", url: "pdf/book-css.pprint.pdf" },
      { t: "🔁 Cours Client / serveur (PDF)", url: "pdf/book-clientserveur.pprint.pdf" },
    ],
  },
  "donnees-base": {
    titre: "Représentation des données en machine",
    auteur: "Cours de J-M Barbier — DIU EIL 2026",
    base: "https://diu-representations-0abb3a.forge.apps.education.fr/",
    items: [
      { t: "📄 Cours — Représentation des nombres (bases, complément à deux, IEEE 754)", url: "representation-nombres.html" },
      { t: "📄 Cours — Représentation des caractères (ASCII, ISO-8859, Unicode, UTF-8, HTML)", url: "representation-caracteres.html" },
      { t: "🖥️ Diaporama — Nombres (PDF)", url: "prez-representation-nombres.prez.pdf" },
      { t: "🖥️ Diaporama — Caractères (PDF)", url: "prez-representation-caracteres.prez.pdf" },
    ],
  },
};

/* ---------------- Progression annuelle indicative ---------------- */
const PROGRESSION_INTRO =
  "Progression <strong>indicative</strong> pour 4 h hebdomadaires (~30 semaines effectives, soit ~120 h). " +
  "À adapter au calendrier, au niveau de la classe et aux projets. La <em>programmation</em> est introduite tôt " +
  "puis réinvestie toute l'année ; l'<em>histoire</em> sert de fil rouge transversal. " +
  "<br><br>🐍 <strong>Classe de grands débutants Python</strong> — c'est le cas le plus fréquent (la SNT de Seconde " +
  "ne garantit aucun acquis de programmation) : les <strong>6 premières semaines</strong> sont sanctuarisées pour les bases " +
  "(thème « Langages et programmation », détaillé semaine par semaine ci-dessous), <em>avant</em> tout thème qui utilise du code. " +
  "Règle d'or en début d'année : chaque notion se manipule <em>trois fois</em> — en <strong>débranché</strong> (papier/îlots), " +
  "en <strong>texte à trous</strong> (sur le site), puis en <strong>écriture libre</strong> (TP guidé, puis Capytale/Thonny). " +
  "Ne pas hésiter à ralentir : tout le reste de l'année réinvestit ces 6 semaines.";

const PROGRESSION = [
  {
    periode: "Sept. — Période 1", semaines: "S1–S3", heures: "≈ 12 h",
    theme: "Langages et programmation (1) — bases, rythme débutant", themeId: "langages-prog",
    objectifs: "S1 : découverte (qu'est-ce qu'un programme ? environnement, print, premières erreurs lues ENSEMBLE) + variables et affectation. S2 : types de base (int/float/str/bool), conversions, conditions if/elif/else. S3 : boucle for + range (motif du compteur).",
    activites: "Chaque notion en 3 temps : débranché (l'élève-robot exécute des instructions), texte à trous du site, puis TP guidés « Variables et types » et « Les conditions » (dans le thème). Jeu d'évasion « histoire » en fil rouge une heure par semaine.",
    evaluation: "Mini-QCM hebdomadaire (site) + TP noté n°1 (variables/conditions) fin S3 — barème bienveillant, l'objectif est le diagnostic.",
  },
  {
    periode: "Oct. — Période 1", semaines: "S4–S6", heures: "≈ 12 h",
    theme: "Langages et programmation (2) — boucles, fonctions", themeId: "langages-prog",
    objectifs: "S4 : boucle while (motif d'arrêt, garde-fou anti-boucle infinie) + jeu du nombre deviné. S5 : fonctions (def, paramètres, return — bien distinguer return et print), spécifier (docstring, assert). S6 : consolidation, débogage (lire un traceback), bibliothèques (random, math) et documentation.",
    activites: "TP guidé « Les boucles » puis exercices gradués du thème (l'élève écrit dans une cellule VIDE, corrigés poussés après coup). Fiches méthode « erreur » et « jeu de tests ». Premier passage sur Capytale/Thonny (vrai environnement).",
    evaluation: "DS n°1 (langages et programmation) — inclure une lecture de code « que fait ce programme ? », pas seulement de l'écriture.",
  },
  {
    periode: "Nov. — Période 2", semaines: "S7–S9", heures: "≈ 12 h",
    theme: "Représentation des données : types de base", themeId: "donnees-base",
    objectifs: "Binaire, hexadécimal, conversions, entiers (complément à deux), débordement, flottants, booléens, ASCII/Unicode.",
    activites: "Activité débranchée (cartes binaires) + TP convertisseur.",
    evaluation: "DS n°2 (représentation des données).",
  },
  {
    periode: "Déc. — Période 2", semaines: "S10–S12", heures: "≈ 12 h",
    theme: "Types construits", themeId: "types-construits",
    objectifs: "Tuples, listes (indices, parcours, modif), compréhensions, matrices, dictionnaires.",
    activites: "TP + projet en îlot « Le coffre binaire » ou « Groupes du camp ».",
    evaluation: "TP noté n°2 + évaluation de projet.",
  },
  {
    periode: "Janv. — Période 3", semaines: "S13–S15", heures: "≈ 12 h",
    theme: "Traitement de données en tables", themeId: "donnees-tables",
    objectifs: "Tables (liste de dictionnaires), CSV, filtrer, trier, statistiques, fusion (jointure).",
    activites: "Projet en îlot « Enquête sur un fichier CSV ».",
    evaluation: "TP noté n°3 (données en tables) + projet.",
  },
  {
    periode: "Fév. — Période 3", semaines: "S16–S18", heures: "≈ 12 h",
    theme: "Interactions homme-machine sur le Web", themeId: "ihm-web",
    objectifs: "HTML, CSS, JavaScript, client/serveur, HTTP GET/POST, événements.",
    activites: "Maquette en îlot + projet « Mini-site d'inscription » (vrai éditeur).",
    evaluation: "Projet web évalué + QCM.",
  },
  {
    periode: "Mars — Période 4", semaines: "S19–S21", heures: "≈ 12 h",
    theme: "Architectures matérielles et systèmes d'exploitation", themeId: "architecture-os",
    objectifs: "Von Neumann, portes logiques, OS, système de fichiers, ligne de commande, droits.",
    activites: "Demi-additionneur + projet « Mission terminal ».",
    evaluation: "DS n°3 (architecture et OS).",
  },
  {
    periode: "Avr.–Mai — Période 5", semaines: "S22–S25", heures: "≈ 16 h",
    theme: "Algorithmique", themeId: "algorithmique",
    objectifs: "Parcours, recherche dichotomique, tris (sélection/insertion), glouton, kNN, coût, terminaison.",
    activites: "Projets « Recherche comparée » et « kNN ». Activités débranchées.",
    evaluation: "DS n°4 + TP noté (algorithmique).",
  },
  {
    periode: "Mai — Période 5", semaines: "S26–S27", heures: "≈ 8 h",
    theme: "Réseaux : protocoles, paquets, routage", themeId: "reseaux",
    objectifs: "Protocole, adresse IP, paquets, routage, désordre/perte/doublon, IP & TCP.",
    activites: "Activité « réseau vivant » + projet « Simulation de paquets ».",
    evaluation: "QCM + TP court.",
  },
  {
    periode: "Juin — Période 5", semaines: "S28–S30", heures: "≈ 12 h",
    theme: "Projets transversaux & bilan", themeId: null,
    objectifs: "Réinvestissement, projets longs en îlots, préparation à la Terminale.",
    activites: "Projets au choix + épreuve pratique « blanche » (sur ordinateur).",
    evaluation: "Évaluation de projet + TP type épreuve pratique.",
  },
];

/* ---------------- Déroulés heure par heure (prof) ----------------
   Pour chaque thème : séances de 2 h — quoi faire avec le contenu du site,
   déroulé minuté en classe, et ce que le professeur prépare lui-même.
   Rendu par makeThemePlan (app.js), bloc prof dépliable + impression. */
const THEME_PLANS = {
  "langages-prog": {
    "heures": "≈ 24 h (12 séances de 2 h, semaines S1–S6 sanctuarisées de la PROGRESSION)",
    "resume": "Démarrage grands débutants : les séances 1–2 suivent la « Séquence 0 » clé en main du site, puis chaque notion (conditions, for, while, fonctions, spécification, bibliothèques) est vue en 3 temps — débranché, texte à trous, écriture libre en cellule vide. Deux évaluations existent sur le site : TP noté « Programmation » (mi-parcours) et DS n°1 (fin de thème).",
    "seances": [
      {
        "titre": "Séance 1 — Séquence 0 (1/2) : « l'ordinateur ne comprend que ce qu'on lui dit »",
        "duree": "2 h",
        "objectif": "Comprendre ce qu'est un programme, exécuter et casser son premier print, découvrir l'affectation — et ne plus avoir peur des messages d'erreur.",
        "surLeSite": [
          "Fiche « 🚀 Séquence 0 — les 2 premières séances clé en main (grands débutants) » (rubrique Didactique prof, partie 4 « Mettre en œuvre en classe ») : le déroulé minuté complet de cette séance y est déjà rédigé",
          "Section 1 « Programmer, c'est donner des instructions précises » (première cellule ▶ à faire manipuler : print puis calculs)",
          "Activité débranchée « Programmer un robot humain » (fiche 30–40 min, à utiliser en variante du « prof-robot » de la fiche)"
        ],
        "enClasse": [
          "0–15 min : accueil, présentation de l'année (les thèmes du menu, la progression du site), création/connexion des comptes élèves (code de classe + nom)",
          "15–40 min : débranché « le prof-robot » (fiche Séquence 0) : les îlots écrivent la recette du carré/de la tartine, le prof exécute <strong>littéralement</strong> — leçon : la machine fait ce qu'on dit, pas ce qu'on veut dire",
          "40–55 min : institutionnalisation (trace écrite : programme, langage, Python 1991)",
          "55–85 min : sur le site, section 1 : exécuter la cellule ▶ « print », puis la <strong>modifier</strong> (prénom, deux print, un calcul) — 3 affichages différents par élève",
          "85–100 min : « cassez votre programme » : provoquer SyntaxError et NameError, lire les messages ENSEMBLE au vidéoprojecteur",
          "100–115 min : variables sur ardoise (x = 5 ; x = x + 3 ; x = x * 2, « = range dans la boîte ») puis vérification sur machine",
          "115–120 min : bilan oral en 3 questions (reprises en rituel de la séance 2)"
        ],
        "aPreparer": [
          "Matériel du prof-robot : plaquette de beurre + pain (ou craie et grand tableau pour le carré)",
          "Ardoises ou feuilles A5 par élève",
          "Codes de classe créés à l'avance sur le site ; vidéoprojecteur testé",
          "Trace écrite « programme / langage / erreur » à faire coller"
        ]
      },
      {
        "titre": "Séance 2 — Séquence 0 (2/2) : « des boîtes qui se souviennent, des programmes qui décident »",
        "duree": "2 h",
        "objectif": "Connaître les 4 types de base (int, float, str, bool), utiliser type(), et découvrir if/else par le jeu.",
        "surLeSite": [
          "Fiche « 🚀 Séquence 0 » (séance 2) : déroulé minuté complet déjà rédigé",
          "Section 2 « Variables, affectation et types » (cellule ▶ à faire manipuler)",
          "TP guidé « TP Python — Variables et types » : les 4 étapes (types fondamentaux, opérateurs, conversions, texte à trous « calculatrice de moyenne »)",
          "QCM du thème (12 questions) : en extraire 4–5 pour le mini-QCM de fin de séance",
          "Exercice 2 (facile) : prédire x après trois affectations"
        ],
        "enClasse": [
          "0–10 min : rituel — les 3 questions du bilan S1 sur ardoises levées, ré-expliquées par un élève",
          "10–30 min : le piège fondateur : faire parier les îlots sur 3 + 4 puis « 3 » + « 4 », vérifier sur machine ; trace int/float/str/bool et type()",
          "30–60 min : TP guidé « Variables et types », étapes 1 à 4, en binômes pilote/copilote (échange des rôles à mi-parcours)",
          "60–75 min : conditions en débranché : jeu de la règle cachée (« si la note ≥ 10 je dis Reçu ») que les îlots doivent deviner",
          "75–105 min : écrire ensemble mention(note) pas à pas (if/else puis elif) ; les rapides font un exercice défi et deviennent tuteurs ; corrigés poussés en fin de phase",
          "105–120 min : mini-QCM auto-corrigé (remonte dans « Ma classe ») + annonce : « et si on veut répéter 100 fois ? »"
        ],
        "aPreparer": [
          "Ardoises ; constitution des binômes pilote/copilote",
          "Sélection des 4–5 questions de QCM (le site permet de refaire le QCM complet plus tard)",
          "Cartes « notes » (8, 12, 15, 17…) pour le jeu de la règle cachée"
        ]
      },
      {
        "titre": "Séance 3 — Les instructions conditionnelles",
        "duree": "2 h",
        "objectif": "Écrire un if/elif/else correctement indenté et comprendre que l'ordre des conditions compte.",
        "surLeSite": [
          "Section 3 « Les instructions conditionnelles » (cellule ▶ mention(note) + organigramme, avec la question « combien de conditions testées ? » et le point de vigilance sur l'ordre des elif)",
          "TP guidé « TP Python — Les conditions », étapes 1 à 3 (if/else et indentation, ordre des conditions, texte à trous « valider la note »)",
          "Exercice 1 (facile, texte à trou est_pair)"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise — prédire la sortie d'un if simple",
          "10–30 min : débranché : « trier les humains » — chaque élève reçoit une carte-note, se place dans la zone TB/B/AB/P selon les règles affichées ; que se passe-t-il si on teste ≥ 14 avant ≥ 16 ?",
          "30–50 min : lecture guidée section 3 + manipulation de la cellule ▶ : changer la note, inverser deux elif, observer",
          "50–85 min : TP guidé « Les conditions » étapes 1–3 en binômes",
          "85–110 min : exercice 1 en autonomie (cellule) ; les rapides inventent une fonction à seuils pour l'îlot voisin",
          "110–120 min : institutionnalisation (deux-points, indentation = « la phrase appartient au si ») ; le prof pousse les corrigés"
        ],
        "aPreparer": [
          "Cartes-notes plastifiées + affiches de zones pour le débranché",
          "Trace écrite if/elif/else à coller",
          "Grille d'observation des binômes (qui bloque sur l'indentation ?)"
        ]
      },
      {
        "titre": "Séance 4 — Conditions : écriture libre",
        "duree": "2 h",
        "objectif": "Écrire seul, dans une cellule vide, une fonction conditionnelle complète ; lire du code pour prédire sa sortie.",
        "surLeSite": [
          "Exercices 2 et 3 (faciles : prédiction d'affectations, est_pair en écriture libre)",
          "Exercice 8 (défi : mention(note) avec jeu de tests assert) pour les plus rapides",
          "Bloc « Erreurs fréquentes » du thème (deux-points oubliés, range, print/return, while infinie) et fiche-résumé"
        ],
        "enClasse": [
          "0–15 min : rituel — dictée de code : le prof écrit 3 mini-programmes au tableau, les élèves prédisent la sortie sur ardoise",
          "15–35 min : lecture collective des « Erreurs fréquentes » du thème ; chaque îlot met en scène une erreur au tableau",
          "35–75 min : exercices 2 puis 3 en cellule vide (l'élève écrit TOUT le code) ; entraide dans l'îlot avant d'appeler le prof",
          "75–100 min : différenciation : exercice 8 (défi) pour les rapides, reprise guidée du TP « Les conditions » pour les fragiles",
          "100–120 min : mise en commun, corrigés poussés, trace « mes 3 erreurs à moi » (métacognition)"
        ],
        "aPreparer": [
          "Les 3 mini-programmes de la dictée de code",
          "Fiche « mes 3 erreurs à moi » à photocopier",
          "Exercices supplémentaires pour très rapides (variante : année bissextile)"
        ]
      },
      {
        "titre": "Séance 5 — La boucle for",
        "duree": "2 h",
        "objectif": "Utiliser for et range pour répéter, et installer le motif de l'accumulation.",
        "surLeSite": [
          "Section 4 « Les boucles bornées (for) » (cellule ▶ table de multiplication de 7 à faire modifier)",
          "TP guidé « TP Python — Les boucles », étape 1 « Boucle for avec range() »",
          "Exercices 4 (table de 9) et 5 (somme des entiers de 1 à 100, accumulation)"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise (un if à prédire)",
          "10–35 min : débranché : retour du « robot humain » sur quadrillage — programme long, puis raccourci avec « répète 3 fois (avance) » : la boucle naît du besoin",
          "35–55 min : section 4 : exécuter la cellule ▶, changer range(1, 11), tester range(0, 20, 2) ; verbaliser « range(n) s'arrête à n−1 »",
          "55–80 min : TP « Les boucles » étape 1, puis exercice 4 en cellule vide",
          "80–105 min : exercice 5 : d'abord tableau de suivi de la variable total sur ardoise (débranché), puis code",
          "105–120 min : institutionnalisation (bornes de range, motif d'accumulation) + corrigés poussés"
        ],
        "aPreparer": [
          "Quadrillage au sol (scotch de masquage) + obstacles + cible",
          "Tableau de suivi de variables imprimé (colonnes k / total)",
          "Trace écrite range + accumulation"
        ]
      },
      {
        "titre": "Séance 6 — Consolidation 1 + TP noté n°1",
        "duree": "2 h",
        "objectif": "Stabiliser variables/conditions/for et passer la première évaluation sur poste (diagnostic bienveillant, cf. PROGRESSION fin S3).",
        "surLeSite": [
          "Exercice 9 (défi : trouver le bug range(n) dans somme) en chasse au bug collective",
          "QCM du thème : questions portant sur variables, conditions, for",
          "Évaluation : sujet « TP noté — Programmation » (1 h sur poste, /20) de la rubrique Évaluations — à restreindre aux notions vues (pas encore while/fonctions)"
        ],
        "enClasse": [
          "0–15 min : rituel + chasse au bug : l'exercice 9 est projeté, les îlots cherchent pourquoi somme(5) affiche 10 et pas 15",
          "15–45 min : parcours de révision en îlots : refaire les textes à trous des TP « Variables et types » et « Les conditions » (rotation d'ateliers)",
          "45–60 min : QCM partiel en autonomie — le prof observe la matrice « Ma classe » pendant ce temps",
          "60–120 min : TP noté n°1 sur poste (1 h), barème bienveillant : l'objectif est le diagnostic"
        ],
        "aPreparer": [
          "Adapter le sujet « TP noté — Programmation » aux seules notions vues et l'imprimer (bouton 🖨️) ou le distribuer via Capytale",
          "Vérifier les postes / la salle info à l'avance",
          "Barème et grille de compétences (déclaré diagnostic aux élèves)"
        ]
      },
      {
        "titre": "Séance 7 — La boucle while",
        "duree": "2 h",
        "objectif": "Écrire une boucle non bornée avec un motif d'arrêt correct et savoir éviter la boucle infinie.",
        "surLeSite": [
          "Section 5 « Les boucles non bornées (while) » (cellule ▶ « combien de divisions de 1000 par 2 » à faire manipuler)",
          "TP guidé « TP Python — Les boucles », étapes 2 « Boucle while (motif d'arrêt) » et 3 « Le jeu du nombre deviné »",
          "Exercice 6 (moyen : compte_a_rebours avec while)"
        ],
        "enClasse": [
          "0–10 min : rituel — retour rapide sur le TP noté (2 erreurs anonymées commentées)",
          "10–30 min : débranché : « tant que le gobelet n'est pas vide, bois une gorgée » — un élève-robot exécute ; puis le prof donne une règle dont la condition ne devient jamais fausse : la classe mime la boucle infinie et cherche le garde-fou",
          "30–55 min : section 5 : cellule ▶ manipulée (changer 1000, changer la condition)",
          "55–90 min : TP « Les boucles » étapes 2–3 : le jeu du nombre deviné se joue d'abord en binôme humain, puis on lit/lance le code",
          "90–110 min : exercice 6 en cellule vide",
          "110–120 min : trace « for si on connaît le nombre de tours, while sinon » + corrigés poussés"
        ],
        "aPreparer": [
          "Gobelets/jetons pour le débranché",
          "Affiche « garde-fou anti-boucle infinie : la condition doit pouvoir devenir fausse »",
          "Trace comparatif for/while"
        ]
      },
      {
        "titre": "Séance 8 — for ou while ? + mission « Devine le nombre »",
        "duree": "2 h",
        "objectif": "Choisir la bonne boucle, réinvestir le motif du « meilleur vu », et compter des essais (première intuition du coût).",
        "surLeSite": [
          "Exercice 7 (moyen : maximum(tab) sans max())",
          "Mission-défi du thème « Devine le nombre » : compter les essais d'une recherche par dichotomie entre 1 et 100",
          "Bloc « Erreurs fréquentes » (boucle while infinie) en rappel"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise (prédire une boucle while courte)",
          "10–30 min : débranché : jeu du devine-le-nombre en îlot — manche 1 dans l'ordre, manche 2 en coupant en deux ; on note les essais sur la feuille de score",
          "30–70 min : exercice 7 : schéma « le plus grand vu jusqu'ici » sur ardoise, puis code en cellule vide, puis test sur une liste inventée par le voisin",
          "70–105 min : mission « Devine le nombre » en îlot (le prof circule, indices gradués)",
          "105–120 min : mise en commun : ~7 essais pour 100 nombres, pourquoi ? Corrigés poussés"
        ],
        "aPreparer": [
          "Feuilles de score par îlot + post-its 1–100",
          "Indices gradués (coup de pouce 1, 2, 3) pour la mission",
          "Corrigé rédigé de la mission (le site ne fournit que l'énoncé)"
        ]
      },
      {
        "titre": "Séance 9 — Les fonctions",
        "duree": "2 h",
        "objectif": "Définir une fonction avec def, paramètres et return ; distinguer return (renvoie) et print (affiche).",
        "surLeSite": [
          "Section 6 « Les fonctions » (cellule ▶ est_pair à faire manipuler)",
          "Réécriture en fonctions des exercices 4 et 5 déjà faits (table(n), somme(n)) en cellule vide",
          "Mini-projet « PGCD (algorithme d'Euclide) » (rubrique mini-projets du thème) en amorce pour les rapides"
        ],
        "enClasse": [
          "0–10 min : rituel",
          "10–30 min : débranché : la « machine à fonctions » — une boîte en carton, un élève-fonction dedans ; on donne une carte-paramètre, il rend une carte-résultat ; que se passe-t-il s'il crie le résultat (print) au lieu de le rendre (return) ?",
          "30–55 min : section 6 : cellule ▶ + démonstration du piège : une fonction qui print mais ne return pas, qu'on essaie d'additionner",
          "55–90 min : réécrire table(n) et somme(n) sous forme de fonctions, appels multiples ; corrigés en différé",
          "90–115 min : amorce du mini-projet « PGCD » (les rapides) / consolidation guidée (les autres)",
          "115–120 min : bilan + trace def/paramètres/return"
        ],
        "aPreparer": [
          "Boîte « machine à fonctions » + cartes entrées/sorties",
          "Trace écrite fonctions",
          "Répartition différenciée (qui part sur le PGCD ?)"
        ]
      },
      {
        "titre": "Séance 10 — Spécifier et tester",
        "duree": "2 h",
        "objectif": "Spécifier une fonction (docstring, préconditions) et la tester avec assert ; lire un traceback.",
        "surLeSite": [
          "Section 7 « Spécifier une fonction » (cellule ▶ moyenne avec docstring, précondition, postcondition)",
          "Section 8 « Tester et mettre au point (débogage) » (cellule ▶ « ce code contient un bug de LOGIQUE : trouve-le »)",
          "Exercice 10 (défi : spécifier et écrire est_premier avec assert) ; exercice 8 (mention + assert) si non traité en séance 4"
        ],
        "enClasse": [
          "0–10 min : rituel",
          "10–30 min : section 7 : spécifier en français d'abord (« que promet la fonction ? que suppose-t-elle ? »), chaque îlot spécifie une fonction du quotidien (distributeur, ascenseur)",
          "30–55 min : section 8 : chasse au bug collective sur la cellule ▶ + lecture d'un traceback au vidéoprojecteur (« 3 questions : où ? quoi ? pourquoi ? »)",
          "55–95 min : exercice 10 en binôme : spécifier AVANT de coder, écrire les assert AVANT le corps",
          "95–115 min : échange de fonctions entre îlots : chacun fait tourner les assert des autres",
          "115–120 min : trace docstring + assert ; corrigés poussés"
        ],
        "aPreparer": [
          "Affiche « lire un traceback en 3 questions »",
          "2–3 fonctions buguées supplémentaires à distribuer aux rapides",
          "Trace écrite spécification/tests"
        ]
      },
      {
        "titre": "Séance 11 — Bibliothèques, documentation, autres langages + vrai environnement",
        "duree": "2 h",
        "objectif": "Importer et documenter (import, help), comparer des langages, et coder pour la première fois hors du site (Capytale/Thonny).",
        "surLeSite": [
          "Section 9 « Utiliser une bibliothèque et sa documentation » (cellule ▶ math/random, help)",
          "Section 10 « Comparer plusieurs langages » (activité en îlot : repérer variables, condition, boucle dans les 4 exemples de langages)",
          "Fiches + du thème : « Interprétation vs compilation » et « Le typage : fort/faible, statique/dynamique » (lecture prof/appui)",
          "Mini-projet « Le Pendu » (utilise random) en ouverture"
        ],
        "enClasse": [
          "0–10 min : rituel",
          "10–35 min : section 9 : cellule ▶, puis jeu « devine ce que fait cette fonction » en lisant seulement son help",
          "35–60 min : bascule sur Capytale/Thonny : recopier est_premier de la séance 10, l'exécuter, la sauvegarder — premier fichier .py réel (cf. encart « Coder pour de vrai » du site)",
          "60–95 min : début du mini-projet « Le Pendu » sur Capytale (random.choice, boucle while, condition)",
          "95–115 min : section 10 en îlots : chaque îlot présente une construction repérée dans les 4 langages",
          "115–120 min : annonce et plan de révision du DS n°1"
        ],
        "aPreparer": [
          "Activité Capytale créée et testée (ou Thonny installé sur les postes)",
          "Fichier squelette du Pendu à distribuer",
          "Feuille de révision DS n°1 (à partir du résumé et des erreurs fréquentes du site)"
        ]
      },
      {
        "titre": "Séance 12 — Consolidation, QCM, remédiation, DS n°1",
        "duree": "2 h",
        "objectif": "Boucler le thème : auto-évaluation par QCM, remédiation ciblée, puis DS n°1 sur table.",
        "surLeSite": [
          "Fiche-résumé du thème (5 points) et « Erreurs fréquentes » (4 pièges) pour la carte mentale",
          "QCM complet du thème (12 questions) en autonomie",
          "Côté prof : « Ma classe » — matrice par thème + diagnostic par question pour constituer les groupes de remédiation",
          "Évaluation : sujet « DS n°1 — Langages et programmation » (55 min, /20) de la rubrique Évaluations"
        ],
        "enClasse": [
          "0–20 min : consolidation : carte mentale collective du thème construite à partir de la fiche-résumé (un rameau par îlot)",
          "20–40 min : QCM 12 questions en autonomie sur le site (résultats remontés en direct)",
          "40–60 min : remédiation : le prof lit la matrice/diagnostic par question et regroupe par besoin ; les élèves solides deviennent tuteurs",
          "60–115 min : DS n°1 sur table (55 min) — inclut de la lecture de code « que fait ce programme ? », pas seulement de l'écriture",
          "115–120 min : ramassage + teaser du thème suivant (représentation des données)"
        ],
        "aPreparer": [
          "Imprimer le sujet « DS n°1 — Langages et programmation » (bouton 🖨️ de la rubrique Évaluations) + copies",
          "Grand format pour la carte mentale (A3 ou tableau)",
          "Plan de regroupement de remédiation (préparé à partir des QCM précédents)"
        ]
      }
    ]
  },
  "histoire-informatique": {
    "heures": "≈ 4 h fil rouge (2 séances de 2 h + rituels de 10 min répartis sur l'année)",
    "resume": "Le thème est un fil rouge : deux séances posées (l'une en période 1 après la Séquence 0, l'autre en période 3–4) encadrent des rituels de 10 min répartis toute l'année — à chaque nouveau thème, on épingle sur la frise murale le repère historique correspondant (Leibniz→binaire, Turing→algorithmique, ARPANET→réseaux…), sur la trame de l'exercice 2 du site (« relie chaque notion à son origine »). L'évaluation existe sur le site : DS de 40 min.",
    "seances": [
      {
        "titre": "Séance 1 — Des racines de l'algorithme aux premiers ordinateurs",
        "duree": "2 h",
        "objectif": "Construire une première frise (Antiquité → 1970) et rencontrer les figures fondatrices (Pascal, Babbage, Lovelace, Turing) — en codant aussi, même en histoire.",
        "surLeSite": [
          "Section « 🃏 Jeu : la frise à reconstituer » (jeu interactif du thème, à jouer d'abord en version cartes papier)",
          "Sections 2 à 7 : « Pourquoi une histoire de l'informatique ? », « Aux racines : l'algorithme et la logique », « Des premières machines à calculer », « Babbage et Lovelace », « Les fondements théoriques (1850–1945) », « Les premiers ordinateurs (1940–1970) »",
          "Exercice 1 (facile : ordonner Web, transistor, Pascaline, machine de Turing) et exercice 4 (facile : dictionnaire {inventeur: invention}, cellule ▶ à compléter)",
          "Glossaire du thème (Pascaline, machine analytique, machine de Turing, transistor…)"
        ],
        "enClasse": [
          "0–10 min : rituel d'entrée — « à votre avis, l'informatique commence quand ? » (votes, on y répondra en fin d'heure)",
          "10–35 min : débranché : frise à reconstituer en îlots avec cartes imprimées (événements et dates séparés), puis vérification en jouant le jeu du site au vidéoprojecteur",
          "35–70 min : îlots-experts : chaque îlot lit UNE section (2 à 7) et la présente en 2 min avec un objet/mime ; le prof recolle le récit",
          "70–85 min : exercice 1 à l'ardoise (chronologie) — retour sur le vote initial : l'informatique précède l'ordinateur",
          "85–110 min : exercice 4 en cellule ▶ : compléter et interroger le dictionnaire des inventeurs (on réinvestit les dictionnaires en histoire)",
          "110–120 min : institutionnalisation : lancement de la frise murale de classe (les cartes validées y sont épinglées)"
        ],
        "aPreparer": [
          "Cartes-événements imprimées et plastifiées (dates séparées des événements), un jeu par îlot",
          "Frise murale : ficelle + pinces à linge + étiquettes, qui restera affichée toute l'année pour les rituels",
          "Trace écrite (frise simplifiée à coller) ; vidéoprojecteur"
        ]
      },
      {
        "titre": "Séance 2 — Du microprocesseur à l'IA + évaluation",
        "duree": "2 h",
        "objectif": "Compléter la frise jusqu'à aujourd'hui (micro-informatique, Internet ≠ Web, IA, métiers), la manipuler en Python, et évaluer le fil rouge.",
        "surLeSite": [
          "Sections 8 à 12 : « Micro-informatique, logiciel et réseaux (1970–1990) », « Le Web, le mobile et aujourd'hui (1990 →) », « L'intelligence artificielle : une longue histoire », « L'évolution du stockage des données », « Et demain ? Métiers et études de l'informatique »",
          "Section « Construire et trier une frise chronologique » (cellule ▶ : la frise comme liste de dictionnaires)",
          "Exercices 5 (moyen : Internet ≠ Web), 3 (défi : trier la frise avec sorted) et 7 (défi : compréhension filtrant le XXᵉ siècle) ; exercice 6 (dichotomie sur la frise triée) pour les rapides",
          "Jeu « 🔓 Bonus — Jeu d'évasion : la salle des machines »",
          "QCM du thème (6 questions) en autonomie ; côté prof : matrice/diagnostic « Ma classe »",
          "Évaluation : sujet « DS — Histoire de l'informatique » (40 min, /20) de la rubrique Évaluations"
        ],
        "enClasse": [
          "0–10 min : rituel — quiz-éclair sur la frise murale (ardoises)",
          "10–35 min : îlots-experts sur les sections 8 à 12 + mini-débat tranché par l'exercice 5 : « Internet et le Web, deux choses différentes ? » (dates, inventeurs, une phrase chacun)",
          "35–60 min : codage : cellule ▶ de la section « Construire et trier une frise » puis exercices 3 et 7 (réinvestissement du tri et des compréhensions vus dans les autres thèmes)",
          "60–75 min : jeu d'évasion « la salle des machines » en îlots (chronométré)",
          "75–80 min : QCM 6 questions en autonomie — le prof lit la matrice pour la remédiation orale immédiate",
          "80–120 min : DS sur table (40 min) puis ramassage"
        ],
        "aPreparer": [
          "Imprimer le sujet « DS — Histoire de l'informatique » (bouton 🖨️) + copies",
          "Nouvelles cartes pour compléter la frise murale (1971 → aujourd'hui)",
          "Chronomètre/gong pour l'escape game ; prévoir les rituels de 10 min suivants (1 repère historique à épingler à l'ouverture de chaque nouveau thème, trame = exercice 2 du site)"
        ]
      }
    ]
  },
  "donnees-base": {
    "heures": "≈ 12 h (6 séances de 2 h, période S7–S9 de la PROGRESSION)",
    "resume": "Du concret vers l'abstrait : cartes binaires en îlots, puis conversions dans les deux sens, hexadécimal, complément à deux, débordement, flottants, booléens et codage des caractères — chaque section du cours a sa cellule ▶ de vérification. Deux évaluations existent sur le site : TP noté sur poste (séance 5) et DS n°2 (séance 6).",
    "seances": [
      {
        "titre": "Séance 1 — Le coffre binaire : coder avec des 0 et des 1",
        "duree": "2 h",
        "objectif": "Comprendre le bit comme un interrupteur, l'octet, et LA formule du thème : n bits → 2ⁿ valeurs.",
        "surLeSite": [
          "Activité débranchée « Le coffre binaire (cartes) » (fiche complète 30–40 min : déroulé, variante ASCII, note prof — bouton 🖨️)",
          "Sections 1 « Pourquoi tout est-il codé en 0 et 1 ? » et 2 « Le bit, l'octet et les puissances de 2 » (cellule ▶ : table des puissances de 2 à faire manipuler)",
          "Exercices 1 (facile, texte à trou 2 ** bits) et 3 (facile : valeurs codables sur 5 puis 12 bits)"
        ],
        "enClasse": [
          "0–10 min : rituel fil rouge histoire — Leibniz et le binaire (à épingler sur la frise murale)",
          "10–50 min : débranché « Le coffre binaire » en îlots : 5 cartes 16-8-4-2-1, former 13, lire des configurations du prof, puis LA question : combien de nombres différents avec 5 cartes ?",
          "50–70 min : institutionnalisation : sections 1–2, cellule ▶ des puissances de 2 exécutée et modifiée (jusqu'à 2¹⁰), piège bit/octet (100 Mb/s ≈ 12,5 Mo/s)",
          "70–95 min : exercices 1 et 3 en cellule (texte à trous puis écriture)",
          "95–110 min : variante de la fiche : coder son initiale ASCII sur 8 cartes, échanger des messages binaires entre îlots",
          "110–120 min : trace bit/octet/2ⁿ à coller + corrigés poussés"
        ],
        "aPreparer": [
          "Fabriquer 5 cartes à points par îlot (16, 8, 4, 2, 1) + jeux de 8 cartes pour la variante ASCII",
          "Imprimer la fiche débranchée (bouton 🖨️ de la rubrique Activités débranchées)",
          "Trace écrite ; carte « Leibniz » pour la frise"
        ]
      },
      {
        "titre": "Séance 2 — Convertir dans les deux sens",
        "duree": "2 h",
        "objectif": "Convertir binaire → décimal (poids) et décimal → binaire (divisions successives), à la main puis en Python.",
        "surLeSite": [
          "Sections 3 « Comprendre une base : le rôle de la position », 4 « Convertir : binaire → décimal » (cellule ▶ algorithme de Horner) et 5 « Convertir : décimal → binaire » (cellule ▶ dec_vers_bin)",
          "Exercices 2 (facile : 1011 en décimal, vérification 0b1011), 4 (facile : 38 par divisions successives, vérification bin(38)) et 5 (moyen : fonction nb_bits(v))"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise — lire une configuration de cartes binaires",
          "10–30 min : section 3 : décortiquer 2025 en base 10 (poids des positions), puis transférer le principe à la base 2",
          "30–55 min : débranché : batterie de conversions à l'ardoise dans les deux sens (tableau des poids / tableau des restes), vérifications avec les cellules ▶ des sections 4–5",
          "55–85 min : exercices 2 et 4 : TOUJOURS papier d'abord, Python ensuite pour vérifier",
          "85–110 min : exercice 5 en binômes (première fonction du thème, réinvestit while)",
          "110–120 min : trace des deux méthodes + corrigés poussés"
        ],
        "aPreparer": [
          "Ardoises ; tableau des poids (…| 16 | 8 | 4 | 2 | 1) imprimé",
          "Batterie de conversions différenciées (3 niveaux)",
          "Trace écrite méthodes de conversion"
        ]
      },
      {
        "titre": "Séance 3 — Hexadécimal et entiers relatifs",
        "duree": "2 h",
        "objectif": "Lire/écrire de l'hexadécimal (1 chiffre = 4 bits) et coder un entier négatif en complément à deux.",
        "surLeSite": [
          "Section 6 « L'hexadécimal (base 16) : le binaire compact » (cellule ▶ : Python jongle entre les trois bases)",
          "Section 7 « Coder les entiers négatifs : le complément à deux » (cellule ▶ complement_a_deux)",
          "Exercices 6 (moyen : octet 11001010 → hexa CA par quartets) et 7 (moyen : décomposer la couleur #1E90FF en R, V, B)"
        ],
        "enClasse": [
          "0–10 min : rituel conversion à l'ardoise",
          "10–30 min : débranché : découper des octets en deux quartets sur ardoise, construire ensemble la table 0–F",
          "30–55 min : section 6 + cellule ▶, puis exercice 6 en cellule",
          "55–75 min : exercice 7 : ouvrir une pipette de couleurs au vidéoprojecteur, décoder #1E90FF — l'hexa sert à quelque chose de visible",
          "75–105 min : section 7 : complément à deux pas à pas avec les cartes (le poids fort devient −128), cellule ▶ manipulée, plage −128..+127 découverte en îlot",
          "105–120 min : trace + corrigés poussés"
        ],
        "aPreparer": [
          "Jeu de cartes −128 / 64 / 32 / … / 1 par îlot pour le complément à deux",
          "Pipette de couleurs (outil du navigateur) prête à projeter ; nuancier imprimé",
          "Trace écrite hexa + complément à deux"
        ]
      },
      {
        "titre": "Séance 4 — Débordement, flottants, booléens",
        "duree": "2 h",
        "objectif": "Observer le débordement, comprendre pourquoi 0.1 + 0.2 ≠ 0.3, et construire les tables de vérité de et/ou/non.",
        "surLeSite": [
          "Section 8 « Le débordement (overflow) » (cellule ▶ : simuler un octet avec le modulo 256)",
          "Section 9 « Les nombres à virgule : les flottants » (cellule ▶ : print(0.1 + 0.2))",
          "Section 10 « Les booléens et l'algèbre de Boole » (cellule ▶ : tables de vérité de and/or)",
          "Exercices 8 (défi : add8 et le débordement de 250 + 10) et 9 (défi : fonction proche(a, b) au lieu de ==)"
        ],
        "enClasse": [
          "0–10 min : rituel",
          "10–35 min : section 8 : image du compteur kilométrique qui « tourne », cellule ▶ puis exercice 8 (prédire add8(255, 1) avant d'exécuter)",
          "35–65 min : section 9 : faire PARIER la classe sur 0.1 + 0.2 == 0.3, exécuter, expliquer l'approximation ; exercice 9 en cellule",
          "65–95 min : section 10 en débranché d'abord : tables de vérité jouées debout/assis (deux élèves = deux entrées, l'îlot vote la sortie), puis cellule ▶ pour vérifier",
          "95–115 min : mini-parcours de 4 questions type DS sur ardoise (une par section du jour)",
          "115–120 min : trace + corrigés poussés"
        ],
        "aPreparer": [
          "Image de compteur kilométrique (ou anecdote du bug d'Ariane 5) à projeter",
          "Cartons Vrai/Faux par élève pour les tables de vérité",
          "Les 4 questions type DS ; trace écrite"
        ]
      },
      {
        "titre": "Séance 5 — Coder les caractères + TP noté",
        "duree": "2 h",
        "objectif": "Utiliser ord/chr, distinguer ASCII/Unicode/UTF-8, puis passer le TP noté sur poste.",
        "surLeSite": [
          "Section 11 « Le codage des caractères : ASCII, Unicode, UTF-8 » (cellule ▶ ord/chr) et section 12 « Comment UTF-8 code un caractère (1 à 4 octets) » (cellule ▶ sur le mot « été »)",
          "Mission-défi du thème « Le décodeur secret » (décoder [72, 73, 32, 78, 83, 73])",
          "Exercice 10 (défi : chiffre de César avec ord et chr) ou mini-projet « Chiffre de César » pour les rapides",
          "Évaluation : sujet « TP noté — Représentation des données » (1 h sur poste, /20) de la rubrique Évaluations"
        ],
        "enClasse": [
          "0–10 min : rituel",
          "10–30 min : sections 11–12 : cellules ▶ manipulées ; chaque îlot code un mot en ASCII binaire sur cartes, l'îlot voisin le décode (réinvestit la séance 1)",
          "30–55 min : mission « Le décodeur secret » en cellule ; les rapides attaquent le César (exercice 10)",
          "55–60 min : consignes et installation du TP noté",
          "60–120 min : TP noté sur poste (1 h) — idéalement sur Capytale pour ramasser les fichiers"
        ],
        "aPreparer": [
          "Table ASCII imprimée par îlot",
          "Sujet « TP noté — Représentation des données » prêt (activité Capytale créée, ou impression 🖨️) ; postes vérifiés",
          "Cartes binaires de la séance 1 ressorties pour les messages secrets"
        ]
      },
      {
        "titre": "Séance 6 — Consolidation, QCM, remédiation, DS n°2",
        "duree": "2 h",
        "objectif": "Boucler le thème : synthèse, auto-évaluation par QCM, remédiation ciblée, puis DS n°2 sur table.",
        "surLeSite": [
          "Fiche-résumé du thème (5 points) et « Erreurs fréquentes » (bit/octet, 2⁴ = 16, flottants et ==) pour le quiz-relais",
          "QCM complet du thème (18 questions) en autonomie",
          "Pour les rapides pendant la remédiation : projet en îlot « Le coffre binaire » ou mini-projet « Conversion de bases » (mini-projet « Chiffre de Vigenère » en bonus)",
          "Côté prof : « Ma classe » — matrice par thème + diagnostic par question",
          "Évaluation : sujet « DS n°2 — Représentation des données » (55 min, /20) de la rubrique Évaluations"
        ],
        "enClasse": [
          "0–20 min : consolidation : quiz-relais en îlots construit sur la fiche-résumé et les erreurs fréquentes (chaque îlot rédige 2 questions pour les autres)",
          "20–45 min : QCM 18 questions en autonomie sur le site (résultats remontés dans « Ma classe »)",
          "45–60 min : remédiation : groupes de besoin constitués à partir de la matrice/diagnostic par question ; les solides avancent sur le mini-projet « Conversion de bases »",
          "60–115 min : DS n°2 sur table (55 min)",
          "115–120 min : ramassage + teaser du thème suivant (types construits)"
        ],
        "aPreparer": [
          "Imprimer le sujet « DS n°2 — Représentation des données » (bouton 🖨️) + copies",
          "Cartons/gabarit du quiz-relais",
          "Groupes de remédiation pré-esquissés à partir des QCM des séances précédentes"
        ]
      }
    ]
  },
  "types-construits": {
    "heures": "≈ 12 h (6 séances de 2 h)",
    "resume": "Progression tuples → listes → compréhensions/matrices → dictionnaires → ensembles, chaque structure étant vécue en débranché avant d'être codée dans les cellules ▶ du site. Le projet en îlot « Organiser les groupes du camp robotique » réinvestit tout en séance 5, avant la séance bilan (QCM 10 questions + TP noté du site).",
    "seances": [
      {
        "titre": "Séance 1 — Pourquoi des types construits ? Tuples et premières listes",
        "duree": "2 h",
        "objectif": "Comprendre le besoin de regrouper des valeurs ; manipuler un tuple (immuable, déballage) et lire une liste par ses indices (premier = 0, dernier = len-1 ou -1).",
        "surLeSite": [
          "Sections 1 à 3 : « Pourquoi des types “construits” ? », « Les p-uplets (tuples) », « Les listes : créer et accéder aux éléments » (2 cellules ▶ à faire manipuler : tuple/déballage/TypeError, indices/tranches/IndexError)",
          "Activité d'ouverture en îlot de la section 1 : modéliser son groupe sur papier (quelle structure pour quels besoins ?)",
          "Exercices 1, 2 et 4 (facile) : texte à trou append/dernier, lecture de t[0], t[-1], len, t[1:3], déballage du point (4, 7)",
          "Exercice 8 (facile, texte à trou) : échanger a et b sans variable temporaire"
        ],
        "enClasse": [
          "0–10 min : rituel — retour sur les types de base ; question flash : « comment stocker les 30 moyennes de la classe avec ce qu'on sait ? » (impasse volontaire).",
          "10–30 min : <strong>débranché</strong> — activité d'ouverture de la section 1 en îlot (papier), puis jeu des casiers : 5 enveloppes numérotées 0 à 4 alignées au tableau, on « lit » enveloppe 0, enveloppe -1, la tranche 1:3 ; verbaliser « le premier indice est 0 ».",
          "30–55 min : <strong>manipulation</strong> — sections 2 et 3 projetées, les élèves exécutent les cellules ▶ : provoquer exprès l'erreur point[0] = 9 (tuple immuable) puis notes[5] (IndexError) et LIRE les messages ensemble.",
          "55–70 min : <strong>institutionnalisation</strong> — coller la trace écrite : tableau des 3 structures (tuple/liste/dictionnaire) de la section 1 + règle « dernier indice = len(t)-1 ».",
          "70–105 min : <strong>pratique</strong> — exercices 1, 2, 4 puis 8 : prédire par écrit AVANT d'exécuter, puis vérifier dans la cellule.",
          "105–120 min : le prof pousse les corrigés des 4 exercices ; bilan éclair sur les erreurs fréquentes n°1 et 2 du site (indices, tuple immuable)."
        ],
        "aPreparer": [
          "5 enveloppes/boîtes numérotées 0–4 avec des cartes-valeurs à l'intérieur (débranché des indices)",
          "Trace écrite à coller (tableau des 3 structures — reprendre celui de la section 1, bouton 🖨️ du site)",
          "Vidéoprojecteur + comptes élèves prêts (les cellules ▶ tournent dans le navigateur, prévoir Capytale en secours)",
          "Impression des exercices 1, 2, 4, 8 pour les élèves sans poste"
        ]
      },
      {
        "titre": "Séance 2 — Modifier, parcourir, construire par compréhension",
        "duree": "2 h",
        "objectif": "Modifier une liste (append, t[i]=v, remove), la parcourir par éléments puis par indices, et lire/écrire une compréhension simple.",
        "surLeSite": [
          "Sections 4 à 6 : « Modifier une liste », « Parcourir une liste », « La construction par compréhension » (cellules ▶ à faire manipuler)",
          "TP guidé « TP Python — Séquences : listes, slicing, complexité », exercices 1 à 3 (participants, planning/slicing, durées/compréhensions)",
          "Exercices 3, 5 et 6 : carrés de 1 à 5 par compréhension (facile), moyenne par accumulation sans sum (moyen), fonction nb_pairs (moyen)"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise — 4 questions flash sur la séance 1 (t[0] ?, t[-1] ?, len ?, tranche ?).",
          "10–25 min : <strong>débranché</strong> — la « file humaine » : 6 élèves alignés sont la liste ; on joue append (un élève arrive en bout), t[2] = v (remplacement), remove ; la classe prédit l'état après chaque opération.",
          "25–50 min : <strong>manipulation</strong> — sections 4 et 5 : cellules ▶ exécutées par les élèves, distinguer parcours « par éléments » et « par indices ».",
          "50–65 min : <strong>institutionnalisation</strong> — section 6 : lire une compréhension à voix haute (« la liste des n·n POUR n allant de… SI… ») ; gabarit [expr for x in iterable if cond] dans le cahier.",
          "65–105 min : <strong>pratique</strong> — TP guidé « Séquences » exercices 1 à 3 en binômes, puis exercices 3, 5 et 6 seuls en cellule vide.",
          "105–120 min : corrigés poussés par le prof ; minute méthodo « accumulation : initialiser AVANT la boucle »."
        ],
        "aPreparer": [
          "6 cartes-valeurs grand format pour la file humaine (débranché)",
          "Ardoises + feutres pour le rituel",
          "Impression du TP guidé « Séquences » exercices 1–3 (bouton 🖨️) pour travailler cahier fermé",
          "Trace écrite : gabarit de la compréhension + les 3 opérations de modification"
        ]
      },
      {
        "titre": "Séance 3 — Matrices et le piège des alias",
        "duree": "2 h",
        "objectif": "Manipuler une liste de listes avec la double indexation m[ligne][colonne] et la double boucle ; comprendre copie vs référence (piège [[0]*3]*2).",
        "surLeSite": [
          "Section 7 : « Tableaux de tableaux (matrices) » (cellule ▶ à faire manipuler)",
          "Fiche + « Valeur vs référence (le piège des alias) » (rubrique TP/fiches du thème)",
          "TP guidé « TP Python — Fonctions & structures de données », étapes 1–2 (fonctions ; listes : slicing, copie vs référence)",
          "TP guidé « Séquences », exercices 4 et 5 (tuples & unpacking ; défi : mesurer un coût)",
          "Exercice 11 (défi) : matrice 3×3 avec des 1 sur la diagonale",
          "Mini-projet « Morpion — détection du gagnant » pour les plus rapides"
        ],
        "enClasse": [
          "0–10 min : rituel — corriger 2 compréhensions fausses écrites au tableau (chasse à l'erreur).",
          "10–30 min : <strong>débranché</strong> — bataille navale sur papier quadrillé : donner des « coups » m[ligne][colonne], puis faire écrire par l'îlot la double boucle en pseudo-code qui balaie toute la grille.",
          "30–55 min : <strong>manipulation</strong> — section 7 : cellules ▶ exécutées ; démonstration spectaculaire du piège des alias ([[0]*3]*2 : on modifie une case, deux lignes changent !).",
          "55–70 min : <strong>institutionnalisation</strong> — fiche + « Valeur vs référence » lue ensemble, vérification pas à pas avec le bouton « 🔎 Pas à pas » (Python Tutor) ; règle : matrice par compréhension imbriquée, jamais par multiplication.",
          "70–105 min : <strong>pratique</strong> — TP guidé « Fonctions & structures » étapes 1–2 puis exercice 11 en cellule vide ; les rapides basculent sur le mini-projet Morpion.",
          "105–120 min : corrigés poussés ; devoir : TP guidé « Séquences » exercices 4–5 à terminer."
        ],
        "aPreparer": [
          "Feuilles quadrillées + grilles de bataille navale (débranché matrices)",
          "Vidéoprojecteur pour la démonstration Python Tutor du piège des alias",
          "Impression de la fiche + « Valeur vs référence » à coller dans le cahier (🖨️)",
          "Cahier des charges d'une page pour le Morpion (différenciation des rapides)"
        ]
      },
      {
        "titre": "Séance 4 — Le dictionnaire : la clé plutôt que la position",
        "duree": "2 h",
        "objectif": "Créer, lire, modifier et parcourir un dictionnaire ; utiliser .get pour compter sans KeyError.",
        "surLeSite": [
          "Sections 8 à 12 : « Le dictionnaire : associer une clé à une valeur », « ajouter, modifier, supprimer », « Parcourir un dictionnaire », « par compréhension », « Compter avec un dictionnaire » (cellules ▶ à faire manipuler)",
          "Section 15 : « Pièges fréquents avec les dictionnaires »",
          "TP guidé « TP Python — Dictionnaires », exercices 1 à 3 (annuaire, comptage avec Counter, compréhension)",
          "Exercices 7, 9 et 10 : dictionnaire élève + clé mention (moyen), inventaire du jeu avec .get (moyen), occurrences de « mississippi » (défi)"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise — liste ou tuple ? 4 situations à trancher.",
          "10–30 min : <strong>débranché</strong> — la « carte d'identité » : chaque îlot reçoit des étiquettes clé (nom, classe, moyenne) et des étiquettes valeur à apparier ; comparer avec la liste : « pourquoi chercher par CLÉ est plus lisible que par position ? ».",
          "30–60 min : <strong>manipulation</strong> — sections 8 à 10 : cellules ▶ exécutées (accès d[clé], ajout, .items()) ; provoquer un KeyError et le lire ensemble.",
          "60–75 min : <strong>institutionnalisation</strong> — trace écrite : d[clé], d[clé] = v, .get(clé, defaut), parcours .items() ; motif du comptage de la section 12.",
          "75–110 min : <strong>pratique</strong> — TP guidé « Dictionnaires » exercices 1 à 3 en binômes, puis exercices 7, 9 seuls et défi 10 (mississippi).",
          "110–120 min : corrigés poussés ; lecture rapide de la section 15 (pièges) en sortie de classe."
        ],
        "aPreparer": [
          "Jeux d'étiquettes clé/valeur cartonnées par îlot (débranché dictionnaire)",
          "Impression du TP guidé « Dictionnaires » ex 1–3 (🖨️)",
          "Trace écrite dictionnaire à faire coller (les 4 gestes : lire, écrire, .get, .items)",
          "Prévoir le motif de comptage écrit en A3 au mur (occ[c] = occ.get(c, 0) + 1)"
        ]
      },
      {
        "titre": "Séance 5 — Ensembles, synthèse et projet en îlot « Groupes du camp »",
        "duree": "2 h",
        "objectif": "Découvrir les ensembles (dédoublonner, ET/OU/SANS), choisir la bonne structure selon le besoin, et réinvestir tout le thème dans le projet en îlot.",
        "surLeSite": [
          "Sections 14 et 16 : « Les ensembles (set) — pour aller plus loin » et « Choisir la bonne structure (synthèse) » (cellule ▶) ; section 13 (Counter/defaultdict) signalée aux rapides",
          "Exercices 13 et 14 (set des notes différentes ; foot & théâtre) et exercice 12 (défi — meilleure moyenne sans sorted)",
          "Projet îlot « Organiser les groupes du camp robotique » : phases 1 à 5 (code de départ former_groupes, tests, bonus âges moyens)",
          "Défi du thème « Mission : carnet de classe » (donné en devoir)",
          "TP guidé « Dictionnaires » exercice 4 (ensembles) pour les rapides"
        ],
        "enClasse": [
          "0–10 min : rituel — question flash dictionnaire (.get) au vidéoprojecteur.",
          "10–25 min : <strong>manipulation</strong> — section 14 (sets) : cellule ▶ puis exercices 13 et 14 en direct.",
          "25–40 min : <strong>institutionnalisation</strong> — section 16 : jeu de l'ardoise « quelle structure pour… ? » (coordonnées GPS, inventaire, notes de la classe, invités sans doublon).",
          "40–55 min : <strong>projet, phases 1–2</strong> — en îlot sur papier : définir 2–3 règles d'équilibre, décrire la stratégie gloutonne « distribuer comme des cartes ».",
          "55–105 min : <strong>projet, phases 3–4</strong> — coder former_groupes(eleves, nb_groupes) à partir du code de départ du site, puis dérouler les 3 tests fournis (chacun placé une fois, tailles proches, niveaux mélangés).",
          "105–120 min : <strong>phase 5</strong> — présentation éclair (2 min/îlot) : justifier les règles ; le prof remplit la grille d'évaluation de projet ; exercice 12 et défi « carnet de classe » donnés en devoir."
        ],
        "aPreparer": [
          "Grille d'évaluation du projet (critères : règles justifiées, code qui tourne, tests passés, oral) — le site fournit phases et tests mais pas la grille",
          "Fiches élèves fictives supplémentaires (passer de 6 à 12 inscrits pour corser)",
          "Feuilles A3 + feutres pour les phases papier",
          "Chronomètre visible pour les présentations éclair"
        ]
      },
      {
        "titre": "Séance 6 — Consolidation, QCM, remédiation et TP noté",
        "duree": "2 h",
        "objectif": "Stabiliser les 4 structures, diagnostiquer les fragilités par le QCM, remédier en groupes de besoin, puis évaluer sur poste.",
        "surLeSite": [
          "Fiche résumé du thème (6 points) et erreurs fréquentes (3) — rubrique exercices",
          "QCM du thème (10 questions) en autonomie",
          "Côté prof : matrice de suivi par thème + diagnostic par question pour constituer les groupes de remédiation",
          "Sujet EVALUATIONS « TP noté — Types construits » (1 h sur poste, /20, corrigé fourni) ; le « DS — Types construits » (50 min) reste en réserve pour une évaluation papier ultérieure"
        ],
        "enClasse": [
          "0–15 min : rituel bilan — relecture guidée du résumé (6 points) et des 3 erreurs fréquentes ; 3 questions flash ardoise.",
          "15–35 min : <strong>QCM en autonomie</strong> — les 10 questions du site, chacun note son score ; le prof relève les questions les plus ratées (diagnostic par question).",
          "35–55 min : <strong>remédiation</strong> — groupes de besoin d'après le diagnostic : indices → refaire exercice 2 ; compréhension → exercice 3 ; dictionnaires → exercice 10 ; les solides aident ou avancent sur le Morpion.",
          "55–115 min : <strong>TP noté sur poste</strong> (1 h) — sujet « TP noté — Types construits » du site : max/min sans fonctions, moyenne, compréhension, dictionnaire bilan, bonus occurrences.",
          "115–120 min : ramassage des fichiers + teaser du thème suivant : « et si la liste contenait des dictionnaires ? » (pont vers les tables)."
        ],
        "aPreparer": [
          "Imprimer le sujet du TP noté (bouton 🖨️ de la rubrique Évaluations) + fichier de départ notes = [12, 8, 15, 17, 6, 14, 11] déposé sur Capytale/Thonny",
          "Feuille de score QCM à remplir par élève (alimente la matrice de suivi)",
          "Parcours de remédiation écrits au tableau (qui refait quel exercice)",
          "Clé USB / procédure de ramassage des .py"
        ]
      }
    ]
  },
  "donnees-tables": {
    "heures": "≈ 12 h (6 séances de 2 h)",
    "resume": "On suit la chaîne de traitement du site : table = liste de dictionnaires → lire un CSV (et convertir !) → filtrer/trier → statistiques et jointure, adossée pas à pas au TP guidé « Une table de A à Z (csv) ». La séance 5 est le projet îlot « Enquête sur un fichier CSV », la séance 6 le bilan (QCM 8 questions + TP noté du site).",
    "seances": [
      {
        "titre": "Séance 1 — La notion de table : liste de dictionnaires",
        "duree": "2 h",
        "objectif": "Acquérir le vocabulaire (table, enregistrement, descripteur) et représenter une table en Python comme liste de dictionnaires.",
        "surLeSite": [
          "Sections 1 et 2 : « Des données partout : la notion de table » et « Représenter une table en Python » (cellule ▶ à faire manipuler)",
          "TP guidé « TP Python — Une table de A à Z (csv) », étape 1 : « Une table = une liste de dictionnaires » (cellule ▶)",
          "Exercice 3 (facile) : afficher le nombre de lignes et la liste des colonnes",
          "Réactivation : exercice 12 du thème « types construits » (liste de dictionnaires, meilleure moyenne)"
        ],
        "enClasse": [
          "0–10 min : rituel — réactivation dictionnaires (ardoise : lire e[\"nom\"], ajouter une clé).",
          "10–35 min : <strong>débranché</strong> — chaque îlot reçoit 5 fiches cartonnées « élève » (nom, classe, note) en désordre : reconstituer le tableau au sol, nommer les colonnes ; introduire les mots <strong>enregistrement</strong> (une fiche) et <strong>descripteur</strong> (un nom de colonne).",
          "35–60 min : <strong>manipulation</strong> — sections 1–2 : cellule ▶ exécutée ; faire le lien fiche ↔ dictionnaire, pile de fiches ↔ liste.",
          "60–75 min : <strong>institutionnalisation</strong> — trace écrite : table = liste de dictionnaires ; 1 ligne = 1 dict ; colonnes = clés de la première ligne.",
          "75–105 min : <strong>pratique</strong> — TP guidé étape 1 en binômes puis exercice 3 seul en cellule vide ; défi rapide : ajouter un 6ᵉ enregistrement à la table.",
          "105–120 min : corrigés poussés + question de sortie sur papier (« qu'est-ce qu'un descripteur ? »)."
        ],
        "aPreparer": [
          "Jeux de 5 fiches cartonnées « élève » par îlot (le site n'a pas d'activité débranchée pour ce thème : matériel à fabriquer)",
          "Trace écrite à coller (vocabulaire + schéma fiche↔dictionnaire)",
          "Billets de sortie (petits papiers pour la question finale)",
          "Vidéoprojecteur + postes avec accès au site"
        ]
      },
      {
        "titre": "Séance 2 — Lire un fichier CSV (et convertir les nombres !)",
        "duree": "2 h",
        "objectif": "Lire un CSV avec csv.DictReader, comprendre séparateur et ligne d'en-tête, et convertir systématiquement les valeurs numériques (tout est chaîne !).",
        "surLeSite": [
          "Sections 3 et 4 : « Le format CSV : lire un fichier de données » et « Vérifier la cohérence d'une table » (cellules ▶ à faire manipuler)",
          "TP guidé « Une table de A à Z », étape 2 : « Lire un CSV avec csv.DictReader (et convertir les nombres !) »",
          "Exercices 5 et 6 (moyen) : charger un mini-CSV avec DictReader ; moyenne avec conversion int(...)",
          "Erreur fréquente n°1 du thème : « les valeurs lues dans un CSV sont des chaînes »"
        ],
        "enClasse": [
          "0–10 min : rituel — 3 questions flash sur la séance 1.",
          "10–30 min : <strong>observation guidée</strong> — le MÊME fichier eleves.csv ouvert dans le Bloc-notes (texte brut : séparateurs, en-tête) puis dans un tableur : « le tableur n'est qu'un habillage » ; repérer le point-virgule.",
          "30–55 min : <strong>manipulation</strong> — sections 3–4 : cellules ▶ exécutées ; piège mis en scène : \"17\" + 1 explose → il faut int() ; vérifier la cohérence (même nombre de colonnes partout).",
          "55–70 min : <strong>institutionnalisation</strong> — gabarit DictReader dans le cahier + règle en rouge : « un CSV ne livre QUE des chaînes ».",
          "70–105 min : <strong>pratique</strong> — TP guidé étape 2 en binômes, puis exercices 5 et 6 seuls en cellule vide.",
          "105–120 min : corrigés poussés ; question de sortie : « pourquoi int(l[\"note\"]) ? »."
        ],
        "aPreparer": [
          "Un vrai fichier eleves.csv (à créer) déposé sur les postes + version imprimée du contenu brut",
          "Tableur installé (LibreOffice/Excel) pour la comparaison bloc-notes/tableur",
          "Trace écrite : gabarit de lecture CSV",
          "Prévoir un CSV volontairement incohérent (colonne manquante) pour la section 4"
        ]
      },
      {
        "titre": "Séance 3 — Filtrer et trier une table",
        "duree": "2 h",
        "objectif": "Filtrer par compréhension avec condition et trier avec sorted(..., key=lambda ...), sans détruire la table d'origine.",
        "surLeSite": [
          "Sections 5 et 6 : « Rechercher : filtrer des lignes » et « Trier selon une colonne » (cellules ▶ à faire manipuler)",
          "TP guidé « Une table de A à Z », étapes 3 et 4 (filtrer par compréhension ; trier avec sorted et key)",
          "Exercices 1 (texte à trou — filtrer les élèves ayant la moyenne), 2 (nés avant 1910), 4 (tri par année) et 7 (meilleure note avec max et key)",
          "Erreur fréquente n°2 : « trier sans key »"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise — lire un DictReader, convertir une note.",
          "10–30 min : <strong>débranché</strong> — avec les fiches cartonnées de la séance 1 : chaque îlot exécute à la main « garde les notes ≥ 10 » (filtre : on écarte des fiches) puis « range par note décroissante » (tri : on réordonne TOUTES les fiches) ; verbaliser la différence filtre/tri.",
          "30–55 min : <strong>manipulation</strong> — sections 5–6 : cellules ▶ exécutées ; montrer l'erreur du tri sans key.",
          "55–70 min : <strong>institutionnalisation</strong> — les 2 gabarits au cahier : [l for l in table if ...] et sorted(table, key=lambda l: ..., reverse=True) ; règle : on construit une NOUVELLE table.",
          "70–105 min : <strong>pratique</strong> — TP guidé étapes 3–4 en binômes puis exercices 1, 2, 4 et 7 seuls en cellule.",
          "105–120 min : corrigés poussés + chasse à l'erreur collective (un tri sans key à réparer)."
        ],
        "aPreparer": [
          "Les jeux de fiches cartonnées de la séance 1 (réutilisés pour filtre/tri à la main)",
          "Affiche A3 des deux gabarits filtrer/trier pour le mur",
          "Impression des exercices 1, 2, 4, 7 (🖨️) pour préparation cahier fermé",
          "Ardoises pour le rituel"
        ]
      },
      {
        "titre": "Séance 4 — Statistiques et jointure : la chaîne de traitement complète",
        "duree": "2 h",
        "objectif": "Calculer des statistiques sur une colonne, fusionner deux tables par une clé commune, et enchaîner charger → filtrer → trier → calculer.",
        "surLeSite": [
          "Sections 7, 8 et 9 : « Calculer des statistiques sur une colonne », « Fusionner deux tables (jointure) », « Synthèse : la chaîne de traitement » (cellules ▶)",
          "TP guidé « Une table de A à Z », étapes 5 et 6 (statistiques ; défi — jointure de deux tables sur une clé)",
          "Exercices 8, 9 et 10 (défis) : année de naissance moyenne, jointure {classe → prof}, pipeline complet filtrer→trier→classer"
        ],
        "enClasse": [
          "0–10 min : rituel — filtre et tri à écrire sur ardoise (gabarits de la séance 3).",
          "10–25 min : <strong>débranché</strong> — jointure physique : deux paquets de fiches (élèves / affichette classe→prof) ; chaque îlot apparie par la colonne commune et « enrichit » ses fiches au crayon.",
          "25–50 min : <strong>manipulation</strong> — sections 7–8 : cellules ▶ exécutées (moyenne, min/max, jointure par dictionnaire).",
          "50–65 min : <strong>institutionnalisation</strong> — section 9 : schéma de la chaîne charger → vérifier → filtrer/trier/calculer collé dans le cahier ; chaque étape produit une NOUVELLE table.",
          "65–110 min : <strong>pratique</strong> — TP guidé étapes 5–6 en binômes, puis défis 8, 9, 10 en autonomie (le 10 est le pipeline bilan : le pousser chez tous).",
          "110–120 min : corrigés poussés ; annonce du projet « Enquête sur un fichier CSV » pour la prochaine séance."
        ],
        "aPreparer": [
          "Deuxième paquet de fiches « classe → professeur » pour la jointure débranchée",
          "Schéma A4 de la chaîne de traitement à coller (reprendre la section 9, 🖨️)",
          "Différenciation : coup de pouce écrit pour le défi 9 (copier la ligne avec dict(e))",
          "Constituer les îlots du projet de la séance 5"
        ]
      },
      {
        "titre": "Séance 5 — Projet en îlot « Enquête sur un fichier CSV »",
        "duree": "2 h",
        "objectif": "Mener une enquête complète sur un CSV réel : poser des questions, choisir filtre/tri/calcul, coder, tester et restituer comme un rapport.",
        "surLeSite": [
          "Projet îlot « Enquête sur un fichier CSV » : phases 1 à 5, code de départ (CSV simulé 6 lignes), 3 tests fournis, bonus jointure {classe → professeur}",
          "Défi du thème « Mission : enquête express » (échauffement)",
          "Section 9 « Synthèse : la chaîne de traitement » en appui au tableau"
        ],
        "enClasse": [
          "0–10 min : lancement — rôles dans l'îlot (pilote clavier, vérificateur, rapporteur) ; défi « Mission : enquête express » en échauffement collectif.",
          "10–25 min : <strong>phase 1</strong> — chaque îlot rédige ses 4 questions d'enquête sur papier (ex. « qui en 1NSI ? », « moyenne des notes ? »).",
          "25–40 min : <strong>phase 2</strong> — pour chaque question, écrire s'il s'agit d'un filtre, d'un tri ou d'un calcul, et sur quelle colonne (validation prof avant de coder).",
          "40–90 min : <strong>phase 3</strong> — codage à partir du code de départ du site (DictReader, filtre 1NSI, classement, moyenne) ; le prof circule avec la section 9 comme carte.",
          "90–105 min : <strong>phase 4</strong> — tests fournis : len(table) == 6, le filtre 1NSI renvoie 4 élèves, Grace première ; bonus jointure pour les rapides.",
          "105–120 min : <strong>phase 5</strong> — « rapport d'enquête » oral de 2 min par îlot ; le prof évalue avec la grille de projet."
        ],
        "aPreparer": [
          "Grille d'évaluation du projet (démarche, code, tests, restitution) — non fournie par le site",
          "Optionnel mais fort : un CSV réel plus gros (open data, liste anonymisée de la classe) pour remplacer le CSV simulé",
          "Feuilles « rapport d'enquête » à compléter (questions / méthode / réponse)",
          "Badges ou cartes de rôles pour les îlots"
        ]
      },
      {
        "titre": "Séance 6 — Consolidation, QCM, remédiation et TP noté",
        "duree": "2 h",
        "objectif": "Consolider la chaîne de traitement, diagnostiquer par le QCM, remédier en groupes de besoin, puis évaluer sur poste (TP noté n°3).",
        "surLeSite": [
          "Fiche résumé du thème (4 points) et erreurs fréquentes (3) — rubrique exercices",
          "QCM du thème (8 questions) en autonomie",
          "Côté prof : matrice de suivi par thème + diagnostic par question",
          "Sujet EVALUATIONS « TP noté — Traitement de données en tables » (1 h sur poste, /20, corrigé et barème fournis) ; le « DS — Traitement de données en tables » (50 min) reste en réserve"
        ],
        "enClasse": [
          "0–15 min : rituel bilan — relecture du résumé et des erreurs fréquentes ; questions flash : enregistrement ? descripteur ? pourquoi int() ?",
          "15–35 min : <strong>QCM en autonomie</strong> — 8 questions ; chacun note son score, le prof relève les questions ratées (diagnostic par question).",
          "35–55 min : <strong>remédiation</strong> — groupes de besoin : filtre → refaire exercice 1 ; conversion CSV → exercice 5 ; jointure → exercice 9 ; les solides terminent le bonus du projet.",
          "55–115 min : <strong>TP noté sur poste</strong> (1 h) — sujet « TP noté — Traitement de données en tables » : nombre d'élèves et colonnes, filtre 1NSI, moyenne, classement décroissant, reçus, bonus major.",
          "115–120 min : ramassage des .py + teaser du thème suivant (« et si on AFFICHAIT ces données dans une page web ? »)."
        ],
        "aPreparer": [
          "Imprimer le sujet du TP noté (🖨️) + fichier de départ avec la table eleves déposé sur Capytale/Thonny",
          "Feuille de score QCM par élève (alimente la matrice de suivi)",
          "Parcours de remédiation affichés au tableau",
          "Procédure de ramassage des fichiers rendus"
        ]
      }
    ]
  },
  "ihm-web": {
    "heures": "≈ 12 h (6 séances de 2 h)",
    "resume": "Déroulé HTML → CSS → formulaires/HTTP → JavaScript/DOM en s'appuyant massivement sur les démos et exercices interactifs 🏆 du thème (cssexo, domexo, exercice guidé du formulaire en 13 étapes). La maquette papier faite dès la séance 1 devient le projet « Mini-site d'inscription », codé en séances 5–6 et évalué, avec le gros QCM (25 questions) en clôture.",
    "seances": [
      {
        "titre": "Séance 1 — Le Web, le dialogue client-serveur et le HTML",
        "duree": "2 h",
        "objectif": "Comprendre requête/réponse entre client et serveur, distinguer les rôles des 3 langages, et écrire le squelette d'une page HTML.",
        "surLeSite": [
          "Sections 1 à 4 : « Le Web : un dialogue client-serveur », « Les trois langages du Web », « Structure d'un document HTML », « Attributs et détails à connaître » (démos HTML interactives à faire modifier)",
          "Défi du thème « Mission : maquette de page club » (en îlot, sur papier)",
          "Exercices 1 et 3 (facile) : HTML, CSS ou JS ? ; page minimale « Club NSI » sur papier"
        ],
        "enClasse": [
          "0–10 min : rituel — afficher le code source d'un site connu au vidéoprojecteur : « quelqu'un a ÉCRIT tout ça ».",
          "10–35 min : <strong>débranché</strong> — jeu de rôle client/serveur : un élève « navigateur » écrit une requête sur papier (URL), un élève « serveur » pioche la bonne fiche-réponse et la renvoie ; introduire requête/réponse, puis les 3 langages (structure/habillage/interaction) avec l'analogie de la maison.",
          "35–55 min : <strong>manipulation</strong> — sections 3–4 : chaque élève modifie les démos interactives (changer le titre, ajouter un paragraphe, une image, un lien).",
          "55–70 min : <strong>institutionnalisation</strong> — squelette HTML au cahier + tableau des 3 langages.",
          "70–100 min : <strong>îlots</strong> — défi « Mission : maquette de page club » : dessiner la page d'accueil du club NSI (titre, image, menu, bouton d'inscription) en annotant chaque zone HTML/CSS/JS. <strong>Conserver ces maquettes : elles servent au projet !</strong>",
          "100–115 min : exercices 1 et 3 sur papier, puis vérification dans une démo du site.",
          "115–120 min : corrigés + bilan."
        ],
        "aPreparer": [
          "Fiches-réponses papier pour le jeu client/serveur (le site n'a pas d'activité débranchée pour ce thème : à fabriquer)",
          "Feuilles A3 + feutres pour les maquettes ; pochette pour les archiver jusqu'au projet",
          "Trace écrite : squelette HTML + tableau des 3 langages",
          "Vidéoprojecteur (code source d'un site réel)"
        ]
      },
      {
        "titre": "Séance 2 — CSS : sélecteurs, couleurs et modèle de boîte",
        "duree": "2 h",
        "objectif": "Mettre en forme avec CSS : sélecteurs élément/.classe/#id, couleurs et unités, modèle de boîte (margin/border/padding).",
        "surLeSite": [
          "Sections 5 à 9 : « La mise en forme avec CSS », « Les sélecteurs CSS en profondeur », « Couleurs, valeurs et unités », « Où placer le CSS, et le modèle de boîte », « Bloc ou en ligne ? » (démos interactives)",
          "Exercices interactifs 🏆 « mets en forme une page avec du CSS » et « s'entraîner aux sélecteurs CSS » (éditeurs CSS intégrés)",
          "Exercice interactif 🏆 « styliser une carte (modèle de boîte) » pour les rapides",
          "Exercice 2 (facile) : que ciblent .menu et #menu ?"
        ],
        "enClasse": [
          "0–10 min : rituel ardoise — HTML, CSS ou JS ? (réactivation exercice 1).",
          "10–25 min : <strong>débranché</strong> — « relooking papier » : sur la maquette de la séance 1, surligner en deux couleurs ce qui relève du contenu (HTML) et de l'habillage (CSS) ; discuter « même contenu, deux habillages ».",
          "25–55 min : <strong>manipulation</strong> — sections 5 à 7 : modifier les démos (changer une couleur, cibler .menu puis #titre) ; section 8 : schéma du modèle de boîte.",
          "55–70 min : <strong>institutionnalisation</strong> — les 3 sélecteurs (p / .classe / #id) + le modèle de boîte au cahier.",
          "70–105 min : <strong>pratique</strong> — exercices interactifs 🏆 « mets en forme une page » puis « sélecteurs CSS » en binômes ; rapides : 🏆 « styliser une carte ».",
          "105–120 min : exercice 2 sur papier + corrigés poussés."
        ],
        "aPreparer": [
          "Surligneurs 2 couleurs par îlot + les maquettes de la séance 1",
          "Schéma A4 du modèle de boîte à coller",
          "Nuancier imprimé de quelques couleurs hexadécimales (pont avec le thème données de base)",
          "Casque anti-frustration : prévoir les solutions des exos 🏆 à pousser en fin d'heure"
        ]
      },
      {
        "titre": "Séance 3 — Cascade, formulaires et protocole HTTP (GET/POST)",
        "duree": "2 h",
        "objectif": "Comprendre qui l'emporte en CSS (cascade), construire un formulaire complet, et distinguer GET (URL) et POST (corps de la requête).",
        "surLeSite": [
          "Sections 10 et 11 : « La cascade, la spécificité et l'héritage », « Responsive : media queries » + exercice interactif 🏆 « la cascade — quelle couleur l'emporte ? »",
          "Sections 18 à 20 : « Client et serveur : qui exécute quoi ? », « Créer un formulaire HTML » (démo), « Le protocole HTTP : GET et POST »",
          "Exercice guidé 🏆 « un formulaire d'inscription (étape par étape) » : les 13 étapes, code final assemblé à la dernière",
          "Exercices 4, 5 et 6 (moyen) : URL → dictionnaire Python, GET ou POST pour un mot de passe, formulaire sur papier"
        ],
        "enClasse": [
          "0–10 min : rituel — 3 sélecteurs à décoder sur ardoise.",
          "10–30 min : <strong>manipulation</strong> — sections 10–11 + exo 🏆 « la cascade » : parier sur la couleur gagnante avant de vérifier.",
          "30–45 min : <strong>débranché</strong> — chaque élève écrit une URL à paramètres sur ardoise (recherche?q=…&tri=…), le voisin la décompose en chemin + paramètres ; section 20 projetée en appui.",
          "45–60 min : <strong>institutionnalisation</strong> — GET = paramètres visibles dans l'URL, POST = corps de la requête ; règle en rouge : jamais un mot de passe en GET (erreur fréquente n°3 du thème).",
          "60–100 min : <strong>pratique</strong> — exercice guidé du formulaire, étapes 1 à 13 en binômes (un div par champ, label relié à l'input, types email/password/date/radio) ; exécuter le code final assemblé.",
          "100–115 min : exercices 4, 5, 6 (le 4 se code en Python dans une cellule ; les 5 et 6 sur papier).",
          "115–120 min : corrigés poussés."
        ],
        "aPreparer": [
          "Ardoises pour le débranché des URL",
          "Impression de l'exercice guidé du formulaire (🖨️) comme fiche de route des binômes",
          "Trace écrite GET/POST (tableau comparatif)",
          "Ressource complémentaire éventuelle : PDF « Client / serveur » du cours DIU lié au thème (rubrique ressources)"
        ]
      },
      {
        "titre": "Séance 4 — JavaScript : les bases, les événements et le DOM",
        "duree": "2 h",
        "objectif": "Transposer ses acquis Python en JavaScript, réagir à un clic avec addEventListener, et lire/modifier la page avec getElementById.",
        "surLeSite": [
          "Sections « JavaScript : le 3ᵉ pilier », « Les bases du langage : variables, types, opérateurs », « Conditions, boucles et fonctions » (mini-éditeurs JS intégrés à faire manipuler)",
          "Exercice interactif 🏆 « un petit programme (moyenne) »",
          "Sections « Réagir à un événement (JavaScript) » et « Manipuler le DOM : sélectionner, lire, modifier » (démos interactives)",
          "Exercices interactifs 🏆 « lire et modifier le contenu » et « style et classes »",
          "Exercice 8 (défi) : au clic sur le bouton d'id b, écrire « Bonjour » dans le paragraphe d'id msg"
        ],
        "enClasse": [
          "0–10 min : rituel — retour éclair sur le formulaire (label/for, required).",
          "10–25 min : <strong>pont Python → JS</strong> — construire ensemble au tableau le tableau de correspondance (variable, if, for, def/function, print/console.log) ; rassurer : « vous savez déjà programmer ».",
          "25–50 min : <strong>manipulation</strong> — sections bases JS dans les mini-éditeurs (variables, condition, fonction) puis exo 🏆 « moyenne ».",
          "50–65 min : <strong>institutionnalisation</strong> — le trio magique au cahier : getElementById, addEventListener(\"click\", …), textContent.",
          "65–105 min : <strong>pratique</strong> — démos « Réagir à un événement » et « Manipuler le DOM » modifiées par les élèves, puis exos 🏆 « lire et modifier le contenu » et « style et classes » en binômes.",
          "105–115 min : exercice 8 : écrire le code sur papier PUIS le tester dans une démo.",
          "115–120 min : corrigés poussés + annonce du projet."
        ],
        "aPreparer": [
          "Affiche A3 du tableau de correspondance Python ↔ JavaScript (à fabriquer, très structurant pour des débutants)",
          "Trace écrite du trio getElementById / addEventListener / textContent",
          "Coups de pouce imprimés pour l'exercice 8 (code à trous)",
          "Vérifier que les postes ont un navigateur récent"
        ]
      },
      {
        "titre": "Séance 5 — Valider un formulaire + projet « Mini-site d'inscription » (1/2)",
        "duree": "2 h",
        "objectif": "Comprendre la validation côté client (confort) vs côté serveur (sécurité), puis démarrer le vrai site : maquette finalisée et codage HTML/CSS dans un éditeur réel.",
        "surLeSite": [
          "Section « Valider un formulaire en JavaScript » (démo complète avec preventDefault) et section « Cookies, traces et vie privée »",
          "Erreurs fréquentes du thème (n°1 : « la validation JavaScript suffit » — faux)",
          "Exercices 7 et 9 (défis) : compter les paramètres d'une URL en Python ; pourquoi la validation JS ne suffit pas",
          "Projet îlot « Mini-site d'inscription » : phases 1 à 3, code de départ HTML/JS fourni (formulaire + écouteur submit)"
        ],
        "enClasse": [
          "0–10 min : rituel — le trio JS sur ardoise.",
          "10–30 min : <strong>manipulation</strong> — section « Valider un formulaire » : lire la démo ensemble, repérer preventDefault et le test du champ vide ; débat oral sur l'exercice 9 (contourner le JS ? → le serveur revérifie TOUJOURS).",
          "30–40 min : <strong>culture</strong> — section « Cookies, traces et vie privée » (10 min, lien EMC/RGPD).",
          "40–55 min : <strong>projet, phases 1–2</strong> — ressortir les maquettes de la séance 1 ; chaque îlot arrête sa liste de champs et ses vérifications.",
          "55–115 min : <strong>projet, phase 3 (partie 1)</strong> — coder le vrai fichier .html dans un éditeur (VS Code / Bloc-notes) et l'ouvrir dans le navigateur : structure HTML + formulaire d'abord, CSS ensuite, en s'appuyant sur le code de départ du site ; exercice 7 en Python pour les îlots en avance.",
          "115–120 min : sauvegarde des fichiers + point d'étape par îlot."
        ],
        "aPreparer": [
          "Éditeur de texte installé sur les postes (VS Code conseillé) + procédure « enregistrer en .html et ouvrir dans le navigateur »",
          "Les maquettes A3 de la séance 1",
          "Dossier réseau/clé par îlot pour sauvegarder le site entre les deux séances",
          "Check-list papier de la phase 3 (formulaire, labels reliés, CSS appliqué)"
        ]
      },
      {
        "titre": "Séance 6 — Projet (2/2), QCM, remédiation et évaluation",
        "duree": "2 h",
        "objectif": "Terminer la validation JavaScript, tester, présenter le mini-site (évaluation de projet), puis diagnostiquer avec le grand QCM et remédier.",
        "surLeSite": [
          "Projet « Mini-site d'inscription » phases 4 et 5 : tests fournis (champ vide → erreur, champ rempli → succès, pas de rechargement) et bonus (longueur ≥ 2, message rouge/vert)",
          "QCM du thème (25 questions) en autonomie",
          "Exercice 🏆 « Exercice bilan : écris une page complète » et exo « sélecteurs CSS » comme supports de remédiation",
          "Côté prof : matrice de suivi + diagnostic par question ; sujets EVALUATIONS « DS — Interactions homme-machine sur le Web » (45 min) et « TP noté — Page web d'inscription » (1 h 30) prêts à l'emploi"
        ],
        "enClasse": [
          "0–10 min : rituel — rappel des critères d'évaluation du projet affichés.",
          "10–45 min : <strong>projet, phase 4</strong> — finaliser le script de validation puis tests croisés : chaque îlot teste le site d'un autre avec la liste du site (champ vide, preventDefault, message de succès) ; bonus pour les rapides.",
          "45–70 min : <strong>phase 5, évaluation</strong> — présentation de 3 min par îlot : démo + expliquer GET/POST et pourquoi le serveur doit revérifier ; le prof note avec la grille (projet web évalué, conforme à la progression).",
          "70–95 min : <strong>QCM en autonomie</strong> — les 25 questions du thème ; scores relevés pour le diagnostic par question.",
          "95–110 min : <strong>remédiation</strong> — groupes de besoin d'après le diagnostic : sélecteurs → exo 🏆 sélecteurs ; JS/DOM → exo 🏆 « lire et modifier le contenu » ; structure → 🏆 « exercice bilan : page complète ».",
          "110–120 min : bilan du thème + annonce : le « DS — IHM Web » (45 min) du site sera donné sur table à la séance suivante (ou le TP noté « Page web d'inscription » d'1 h 30 selon le choix)."
        ],
        "aPreparer": [
          "Grille d'évaluation du projet (HTML correct, CSS, validation JS, oral GET/POST/sécurité) — non fournie par le site",
          "Fiche de tests croisés à cocher entre îlots",
          "Imprimer le sujet du « DS — Interactions homme-machine sur le Web » (🖨️) pour l'évaluation sur table qui suit",
          "Feuille de score QCM alimentant la matrice de suivi"
        ]
      }
    ]
  },
  "architecture-os": {
    "heures": "≈ 12 h (6 séances de 2 h) — S19–S21 de la PROGRESSION (Mars, Période 4)",
    "resume": "On descend puis on remonte la pile : composants et von Neumann, langage machine déroulé à la main, portes logiques et demi-additionneur, puis le système d'exploitation, l'arborescence, la ligne de commande (3 TP guidés Linux du site + projet « Mission terminal ») et les droits. Dernière séance : consolidation, QCM en autonomie et TP noté « Permissions et portes logiques » du site.",
    "seances": [
      {
        "titre": "Séance 1 — Qu'y a-t-il dans un ordinateur ? Le modèle de von Neumann",
        "duree": "2 h",
        "objectif": "Identifier les composants (CPU, RAM, stockage, E/S) et décrire le modèle de von Neumann (UC, UAL, mémoire, E/S ; programme enregistré ; cycle charger → décoder → exécuter).",
        "surLeSite": [
          "Sections 1–2 du cours : « Qu'y a-t-il dans un ordinateur ? » (tableau composants/analogie du bureau) et « Le modèle de von Neumann » (warnbox UC ≠ UAL)",
          "Exercice 1 (facile) — qui calcule, l'UC ou l'UAL ?",
          "Exercice 8 (défi) — associer 4 actions au bon composant matériel",
          "QCM du thème (8 questions) : projeter les questions 1–2 (UAL, programme enregistré) en bilan"
        ],
        "enClasse": [
          "0–15 min : rituel + accroche débranchée : une vieille tour ouverte circule d'îlot en îlot ; chaque îlot nomme ce qu'il reconnaît sur une ardoise (RAM, disque, ventilateur du CPU…).",
          "15–40 min : mise en commun sur le vrai matériel, puis lecture guidée de la Section 1 au vidéoprojecteur ; les élèves remplissent le tableau composant/rôle/analogie sur leur fiche.",
          "40–70 min : institutionnalisation Section 2 : schéma de von Neumann au tableau (UC, UAL, mémoire, E/S) ; insister sur la warnbox « l'UC décode, l'UAL calcule » et sur l'idée révolutionnaire du programme enregistré.",
          "70–95 min : sur postes, en binômes : Exercice 1 (facile) puis Exercice 8 (défi) — réponses argumentées à l'écrit avant de déplier la solution.",
          "95–110 min : jeu de tri débranché : cartes « RAM / disque / UC / UAL / capteur / écran » à classer en volatile/permanent, entrée/sortie, calcule/commande.",
          "110–120 min : trace écrite collée (schéma von Neumann + tableau composants) ; le prof pousse les corrigés des exercices ; annonce : « la semaine prochaine, on devient le processeur »."
        ],
        "aPreparer": [
          "Une vieille unité centrale ouverte (ou barrette de RAM, disque dur, CPU déclipsé) — le site ne fournit que le tableau, pas le matériel réel",
          "Ardoises + jeu de cartes composants à fabriquer (une planche par îlot)",
          "Trace écrite à trous (schéma von Neumann à légender) à photocopier",
          "Vidéoprojecteur pour projeter les Sections 1–2 du site"
        ]
      },
      {
        "titre": "Séance 2 — Dérouler un programme en langage machine",
        "duree": "2 h",
        "objectif": "Dérouler à la main une séquence LOAD/ADD/STORE/HALT sur machine à accumulateur (PC, ACC, mémoire) et relier ce déroulé au cycle de von Neumann, puis l'exécuter sur le simulateur Python du site.",
        "surLeSite": [
          "Section 3 « Dérouler un programme en langage machine » : tableau du jeu d'instructions, déroulé PC/ACC/mémoire, puis cellule ▶ du mini-simulateur Python (boucle fetch-décode-exécute) à faire manipuler",
          "Exercice 11 (moyen) — dérouler À LA MAIN LOAD 0 / ADD 1 / STORE 2 / HALT avec mem = [7, 5, 0], puis vérifier en cellule ▶",
          "QCM question « Avec mem = [7, 5], que vaut l'accumulateur après LOAD 0 puis ADD 1 ? »"
        ],
        "enClasse": [
          "0–10 min : rituel : 3 questions flash sur von Neumann (ardoise) — qui décode ? qui calcule ? où est rangé le programme ?",
          "10–35 min : débranché « je suis le processeur » : au tableau, 3 cases mémoire dessinées + une boîte ACC + un curseur PC ; un élève-UC lit l'instruction, un élève-UAL calcule, la classe suit l'état. Dérouler LOAD 0 ; ADD 1 ; STORE 2 ; HALT.",
          "35–55 min : institutionnalisation : le tableau PC/instruction/ACC/mémoire de la Section 3 est recopié comme trace écrite ; lien explicite avec charger → décoder → exécuter.",
          "55–85 min : sur postes : les élèves exécutent la cellule ▶ du simulateur, puis la MODIFIENT : changer mem, ajouter une instruction ADD, faire calculer mem[2] = mem[0] + mem[1] + mem[1].",
          "85–110 min : Exercice 11 (moyen) en autonomie : déroulé à la main sur la fiche AVANT vérification par le code ; les rapides inventent un programme de 5 instructions et le donnent à dérouler au voisin.",
          "110–120 min : bilan : question QCM projetée + le prof pousse le corrigé de l'exercice 11 ; préciser (warnbox du site) que le BO n'impose aucun langage machine particulier."
        ],
        "aPreparer": [
          "Fiche « tableau de déroulé » vierge (colonnes PC / instruction / ACC / mémoire) à photocopier — le site montre le tableau rempli, pas la version à compléter",
          "Étiquettes géantes LOAD/ADD/STORE/HALT + 3 boîtes « mémoire » pour le théâtre du processeur",
          "Prévoir la même activité sur Capytale (copier le code du simulateur) pour les élèves qui veulent le garder"
        ]
      },
      {
        "titre": "Séance 3 — Du transistor aux portes logiques : le demi-additionneur",
        "duree": "2 h",
        "objectif": "Réaliser des opérations logiques de base avec des portes ET/OU/NON/XOR et construire un demi-additionneur (somme = XOR, retenue = ET), en Python puis en simulation de circuit.",
        "surLeSite": [
          "Sections 4–5 : « Du transistor à la porte logique » (tableau des 4 portes) et « Construire un circuit : le demi-additionneur » avec cellule ▶ (fonctions ET/OU/NON/XOR) à faire manipuler",
          "Exercice 5 (moyen) — que valent somme et retenue pour a=1, b=1 ? (cellule fournie)",
          "Défi du thème « Mission : demi-additionneur » (code de départ fourni)",
          "Rubrique Logisim Evolution du thème : circuits fournis « Additionneurs & soustracteur » (Addition.circ) et « UAL » (ALU.circ), + PDF « 4 — Logique combinatoire »"
        ],
        "enClasse": [
          "0–10 min : rituel : rappel algèbre de Boole (thème « Représentation des données ») : tables de ET, OU, NON sur ardoise.",
          "10–35 min : débranché « portes humaines » : deux élèves-entrées lèvent (1) ou baissent (0) le bras, un élève-porte applique sa règle ; la classe prédit la sortie. Enchaîner ET, OU, XOR.",
          "35–55 min : institutionnalisation Section 4 (transistor = interrupteur, milliards par processeur) puis Section 5 : construire ensemble la table 1+1 → somme 0, retenue 1 ; faire RECONNAÎTRE que somme = XOR et retenue = ET.",
          "55–85 min : sur postes : cellule ▶ du demi-additionneur exécutée puis modifiée ; Exercice 5 (moyen) ; les élèves écrivent ensuite XOR uniquement avec ET/OU/NON dans une cellule vide.",
          "85–110 min : défi « Mission : demi-additionneur » en îlots ; les plus rapides ouvrent Logisim Evolution avec le fichier Addition.circ du site et câblent le demi-additionneur graphiquement.",
          "110–120 min : bilan : projection du circuit Logisim qui fonctionne ; le prof pousse les corrigés ; trace écrite : les 4 portes + le demi-additionneur."
        ],
        "aPreparer": [
          "Installer Logisim Evolution sur les postes et télécharger les .circ depuis la page du thème (le site fournit les fichiers, pas l'installation)",
          "Cartons 0/1 pour l'activité « portes humaines »",
          "Imprimer le PDF « 4 — Logique combinatoire » du site comme support pour les îlots avancés",
          "Trace écrite : tables de vérité à compléter puis coller"
        ]
      },
      {
        "titre": "Séance 4 — L'OS, capteurs/actionneurs et l'arborescence de fichiers",
        "duree": "2 h",
        "objectif": "Identifier les rôles du système d'exploitation, la chaîne capteur → traitement → actionneur, et savoir écrire un chemin absolu ou relatif dans une arborescence.",
        "surLeSite": [
          "Sections 6–8 : « Le rôle du système d'exploitation », « Périphériques, capteurs et actionneurs — l'IHM » avec cellule ▶ du thermostat à faire manipuler, « Le système de fichiers arborescent » avec l'exercice intégré « Entraîne-toi : trouve le chemin relatif » (4 questions, corrigé dans l'onglet prof)",
          "Exercice 10 (facile) — classer capteur/actionneur ; Exercice 3 (facile) — chemin relatif ../photos",
          "QCM questions « rôle de l'OS » et « un capteur est un périphérique… »"
        ],
        "enClasse": [
          "0–10 min : rituel : « citez 3 OS » — recueil au tableau (Windows, Android, Linux…), faire émerger que le smartphone en a un aussi.",
          "10–30 min : institutionnalisation Section 6 : les 5 missions de l'OS (processus, mémoire, fichiers, périphériques, sécurité) ; warnbox « l'OS pilote le matériel, il ne le fabrique pas ».",
          "30–55 min : Section 7 : tableau capteur/traitement/actionneur complété en îlot avec 3 nouveaux exemples par îlot ; puis sur postes, cellule ▶ du thermostat : exécuter, changer la CONSIGNE, ajouter une hystérésis simple. Exercice 10 (facile) en autonomie.",
          "55–80 min : débranché arborescence : l'arbre /home/ada du cours reproduit en ficelle + étiquettes au sol (ou au tableau) ; un élève-curseur se déplace physiquement : « où t'emmène ../photos ? ».",
          "80–105 min : Section 8 sur postes : les 4 questions « trouve le chemin relatif » sur le cahier AVANT mise en commun (corrigé dans l'onglet prof du site) ; Exercice 3 (facile) ; les rapides inventent une arborescence piège pour le voisin.",
          "105–120 min : bilan : 2 questions du QCM projetées ; trace écrite : arbre + définitions chemin absolu/relatif, . et .. ; annonce du terminal pour la prochaine séance."
        ],
        "aPreparer": [
          "Ficelle + étiquettes cartonnées (/​, home, ada, photos, cours, nsi.py) pour l'arbre au sol — le site fournit le schéma, pas le matériel",
          "Si disponible : une carte micro:bit pour montrer un vrai capteur/actionneur (citée par le cours, non fournie)",
          "Trace écrite à photocopier : arbre à légender + tableau des 5 missions de l'OS"
        ]
      },
      {
        "titre": "Séance 5 — La ligne de commande : TP Linux et « Mission terminal »",
        "duree": "2 h",
        "objectif": "Utiliser pwd, ls, cd, mkdir, cat, cp, mv, rm dans un vrai terminal ; naviguer en chemins absolus et relatifs ; réinvestir dans le projet îlot « Mission terminal ».",
        "surLeSite": [
          "Section 9 « La ligne de commande » avec la « Session type — à toi de prédire » (6 commandes, corrigé dans l'onglet prof)",
          "Mémo — commandes Linux essentielles (tableau des 12 commandes, à imprimer via le bouton 🖨️)",
          "TP guidé « TP — Se repérer dans l'arborescence » étapes 1–3 (pwd/ls, chemins, mkdir -p) puis TP guidé « TP — Manipuler des fichiers » étapes 1–2 (touch/cat/wc, cp/mv) — corrigés masqués à déplier en fin de séance",
          "Projet îlot « Mission terminal » (niveau facile, 1 séance) : phases 1–5 + simulateur Python fourni ; Exercice 9 (défi) y renvoie"
        ],
        "enClasse": [
          "0–10 min : rituel : projeter la « Session type » de la Section 9 ; chaque élève prédit sur ardoise ce qu'affichent les 6 commandes (départ /home/ada) ; correction avec l'onglet prof.",
          "10–20 min : distribution du Mémo Linux imprimé ; démonstration au vidéoprojecteur d'un vrai terminal : pwd, ls, cd, l'invite, la casse.",
          "20–55 min : TP guidé « Se repérer dans l'arborescence » étapes 1–3 en binômes sur vrai terminal ; le prof circule ; verbaliser « où suis-je ? » avant chaque commande.",
          "55–80 min : TP guidé « Manipuler des fichiers » étapes 1–2 (création du fichier eleves.txt, cp/mv/renommage) ; avertir : mv écrase, rm est irréversible.",
          "80–110 min : projet « Mission terminal » en îlots : phase 1 (dessiner l'arborescence), phase 2 (suite de commandes sur papier), phases 3–4 (simulateur Python du site : retrouver secret.txt), phase 5 éclair (expliquer .. à l'oral).",
          "110–120 min : mise en commun : chemin absolu /serveur/prive/secret.txt au tableau ; le prof déplie les corrigés masqués des TP guidés et pousse celui du projet."
        ],
        "aPreparer": [
          "Un VRAI terminal par poste : Linux du lycée, WSL, ou terminal en ligne — les TP guidés du site sont en bash, le site ne fournit pas l'environnement",
          "Imprimer le Mémo Linux (bouton 🖨️ du site), un par élève",
          "Feuilles blanches pour dessiner l'arborescence du projet (phase 1)",
          "Prévoir le simulateur « Mission terminal » copié sur Capytale en secours si les terminaux réels manquent"
        ]
      },
      {
        "titre": "Séance 6 — Droits et permissions, consolidation et évaluation",
        "duree": "2 h",
        "objectif": "Lire et modifier des permissions Unix (rwx / octal, chmod) ; consolider tout le thème ; QCM en autonomie avec remédiation, puis TP noté.",
        "surLeSite": [
          "Section 10 « Droits et permissions » avec cellule ▶ permissions_vers_octal ; Section 11 « Synthèse : du transistor à l'utilisateur »",
          "TP guidé « TP — Droits et permissions » étapes 1–2 (lire, modifier) ; étape 3 « premier script bash » en bonus pour les rapides",
          "Exercices 2 (facile, rwxr-x--- → 750), 4 (moyen, vers_octal) et 7 (défi, octal_vers_droits)",
          "Résumé du thème (6 points) et « erreurs fréquentes » (3 pièges) à relire ; QCM du thème (8 questions) en autonomie",
          "Évaluation : TP noté « Permissions et portes logiques » (EVALUATIONS du site, 1 h sur poste, /20, corrigé prof fourni)"
        ],
        "enClasse": [
          "0–25 min : rituel puis Section 10 : décoder rwxr-x--- ensemble, règle r=4/w=2/x=1 ; TP guidé « Droits et permissions » étapes 1–2 sur terminal ; Exercice 2 en ardoise.",
          "25–40 min : sur postes : cellule ▶ permissions_vers_octal exécutée et modifiée ; Exercices 4 puis 7 en cellule vide (les rapides font l'étape 3 bonus du TP : script bash).",
          "40–50 min : consolidation : relire le résumé (6 points) et les 3 erreurs fréquentes du site ; Section 11 projetée : la pile transistors → portes → processeur → OS → applications.",
          "50–65 min : QCM du thème (8 questions) en autonomie individuelle sur le site.",
          "65–80 min : remédiation : le prof ouvre la matrice de suivi / le diagnostic par question côté enseignant, repère les questions échouées (UC/UAL et octal en général) et reprend en mini-groupe pendant que les autres refont les exercices ratés.",
          "80–120 min : évaluation : TP noté « Permissions et portes logiques » du site, 1 h sur poste, individuel."
        ],
        "aPreparer": [
          "Imprimer le sujet du TP noté « Permissions et portes logiques » (bouton 🖨️ de la rubrique EVALUATIONS) + préparer les postes (terminal + Python)",
          "Programmer le DS sur table de 50 min « DS — Architectures et systèmes d'exploitation » (sujet + corrigé fournis dans EVALUATIONS — c'est le DS n°3 de la progression) sur un créneau ultérieur",
          "Fiche de remédiation : liste des exercices du site à refaire selon la question de QCM échouée",
          "Trace écrite finale : la pyramide « du transistor à l'utilisateur » à coller"
        ]
      }
    ]
  },
  "algorithmique": {
    "heures": "≈ 16 h (8 séances de 2 h) — S22–S25 de la PROGRESSION (Avr.–Mai, Période 5)",
    "resume": "Chaque famille d'algorithmes suit le cycle débranché → manipulation des cellules ▶ → institutionnalisation → écriture en cellule vide : parcours, dichotomie (avec le projet « Recherche séquentielle vs dichotomique »), les deux tris et leurs invariants, coût et terminaison, glouton, puis kNN en projet. Dernière séance : QCM, remédiation par la matrice et TP noté du site ; le DS n°4 (1 h) se place sur un créneau suivant.",
    "seances": [
      {
        "titre": "Séance 1 — Qu'est-ce qu'un algorithme ? Le parcours séquentiel",
        "duree": "2 h",
        "objectif": "Distinguer algorithme et programme ; écrire les parcours fondamentaux d'un tableau : recherche (convention −1), maximum, somme — tous linéaires.",
        "surLeSite": [
          "Sections 1–2 : « Qu'est-ce qu'un algorithme ? » et « Parcours séquentiel d'un tableau » avec cellule ▶ (recherche + maximum) à faire manipuler",
          "Exercice 2 (facile) — recherche séquentielle renvoyant l'indice ou −1 ; Exercice 4 (facile) — somme(tab) sans sum",
          "Résumé du thème, point 1 : « Parcours séquentiel : recherche, max, somme en O(n) »"
        ],
        "enClasse": [
          "0–15 min : rituel + accroche : « dictez-moi la recette pour trouver le plus grand nombre d'une liste que je lis à voix haute » — le prof exécute LITTÉRALEMENT ce que disent les élèves, les ambiguïtés sautent aux yeux.",
          "15–35 min : institutionnalisation Section 1 : algorithme (l'idée, en français) vs programme (la traduction Python) ; correct + se termine ; la démarche îlot du site : toujours écrire l'algorithme en étapes numérotées AVANT de coder.",
          "35–60 min : débranché : chaque îlot reçoit 8 cartes-nombres faces cachées ; retourner une carte à la fois et tenir « le plus grand vu » sur ardoise — c'est maximum() joué à la main ; même chose pour la somme.",
          "60–90 min : sur postes : cellule ▶ de la Section 2 exécutée puis modifiée (chercher une valeur absente → −1) ; puis Exercices 2 et 4 en cellule vide (l'algorithme en français d'abord, sur le cahier).",
          "90–110 min : différenciation : les rapides écrivent compter_pairs(tab) et minimum(tab) sans aide ; les autres refont maximum() en le déroulant sur la fiche trace.",
          "110–120 min : bilan : « combien d'opérations pour un tableau de n éléments ? » → faire dire « environ n » (linéaire) ; le prof pousse les corrigés ; trace écrite : les 4 schémas de parcours."
        ],
        "aPreparer": [
          "Jeux de 8 cartes-nombres par îlot (à fabriquer) + ardoises",
          "Fiche trace « les 4 schémas de parcours » (rechercher/compter/accumuler/max) à photocopier — la fiche méthode du site « Parcourir un tableau : les 4 schémas » peut servir de source, à imprimer",
          "Vidéoprojecteur ; prévoir la reprise des exercices sur Capytale pour l'entraînement maison"
        ]
      },
      {
        "titre": "Séance 2 — La recherche dichotomique",
        "duree": "2 h",
        "objectif": "Mettre en œuvre la recherche dichotomique dans un tableau trié et ressentir l'écart O(n) / O(log n) par le jeu du nombre.",
        "surLeSite": [
          "Activité débranchée « Recherche : au hasard vs dichotomie » (20–30 min, déroulé complet + variante annuaire + notes prof fournis)",
          "Section 3 « La recherche dichotomique » : exemple pas à pas sur [2, 5, 8, …, 91], warnbox « tableau déjà trié », cellule ▶ dichotomie() à faire manipuler",
          "Exercice 1 (facile, texte à trou) — le calcul du milieu avec // ; Exercice 3 (facile) — indices milieux successifs à la main ; Exercice 5 (moyen) — implémenter la dichotomie"
        ],
        "enClasse": [
          "0–10 min : rituel : refaire une recherche séquentielle de tête sur 5 valeurs ; rappeler la convention −1.",
          "10–40 min : débranché « Recherche : au hasard vs dichotomie » : manche 1 deviner dans l'ordre (compter les essais), manche 2 en coupant en deux ; comparer ~50 contre ~7 ; faire émerger POURQUOI il faut que ce soit trié.",
          "40–65 min : institutionnalisation Section 3 : dérouler au tableau l'exemple du cours (chercher 23) avec les deux bornes gauche/droite matérialisées par deux aimants ; noter la warnbox.",
          "65–90 min : sur postes : Exercice 1 (texte à trou // ) puis cellule ▶ dichotomie() exécutée et instrumentée (ajouter un print(gauche, milieu, droite) à chaque tour) ; Exercice 3 sur le cahier.",
          "90–110 min : Exercice 5 (moyen) en cellule vide : réécrire la dichotomie sans modèle, tester une valeur présente et une absente ; les rapides comptent les comparaisons.",
          "110–120 min : bilan : la note du cours « 1 000 000 d'éléments → ≈ 20 comparaisons » ; le prof pousse les corrigés ; annonce du duel de la prochaine séance."
        ],
        "aPreparer": [
          "Un annuaire papier ou une liste triée imprimée pour la variante de l'activité débranchée (matériel non fourni)",
          "Deux aimants/étiquettes « gauche » et « droite » pour le tableau",
          "Trace écrite : l'algorithme de dichotomie en français à coller"
        ]
      },
      {
        "titre": "Séance 3 — Projet îlot : « Recherche séquentielle vs dichotomique »",
        "duree": "2 h",
        "objectif": "Comparer expérimentalement deux algorithmes en comptant les comparaisons : produire le tableau n = 10, 1000, 1 000 000 et conclure O(n) vs O(log n).",
        "surLeSite": [
          "Projet îlot « Recherche séquentielle vs dichotomique » (niveau moyen, 1 à 2 séances) : les 5 phases, le code de départ (recherche_seq et dichotomie renvoyant (indice, nb_etapes)), les 3 tests attendus, le bonus (tailles 10 → 10000) et le corrigé prof",
          "Exercice 6 (moyen) — recherche séquentielle qui COMPTE les comparaisons (échauffement)",
          "Défi du thème « Mission : duel d'algorithmes » (même conclusion attendue, pour les rapides)",
          "Fiche îlot du site « Avant de coder : réfléchir en îlot » (rôles et grille projet)"
        ],
        "enClasse": [
          "0–10 min : rituel : constitution des îlots et distribution des rôles (la fiche îlot du site : pilote, codeur, testeur, rapporteur).",
          "10–25 min : échauffement individuel : Exercice 6 (moyen) en cellule vide — instrumenter une fonction avec un compteur.",
          "25–45 min : phases 1–2 du projet : rejouer rapidement « devine le nombre » puis écrire les DEUX algorithmes en français sur l'affiche d'îlot.",
          "45–85 min : phase 3 (codage) : reprendre le code de départ du projet, le compléter, exécuter ; phase 4 (tests) : vérifier les 3 tests du site (même indice, ≤ 9 étapes pour 500 éléments, −1 si absent).",
          "85–105 min : bonus du projet : boucle sur n = 10, 100, 1000, 10000 et tableau des étapes ; les îlots avancés font le défi « Mission : duel d'algorithmes » jusqu'à n = 1 000 000.",
          "105–120 min : phase 5 : chaque rapporteur présente son tableau en 1 min ; conclusion collective « séquentiel ~ n, dichotomie ~ log₂ n » ; le prof pousse le corrigé du projet."
        ],
        "aPreparer": [
          "Affiches A3 + feutres pour les algorithmes en français (phase 2)",
          "Imprimer la grille d'évaluation de projet du site (PROJECT_GRILLE) pour noter la présentation",
          "Faire faire le projet sur Capytale/Thonny plutôt que sur le site si l'on veut ramasser les fichiers"
        ]
      },
      {
        "titre": "Séance 4 — Les tris par sélection et par insertion",
        "duree": "2 h",
        "objectif": "Exécuter à la main puis programmer les tris par sélection et par insertion ; compter les comparaisons pour pressentir le coût quadratique.",
        "surLeSite": [
          "Activité débranchée « Trier à la main & compter le coût » (30–45 min : jeu de cartes, jetons-comparaisons, les deux tris ; déroulé et notes prof fournis)",
          "Sections 4–5 : « Le tri par sélection » et « Le tri par insertion » avec leurs cellules ▶ (tri_selection, tri_insertion) à faire manipuler",
          "Exercice 9 (défi) — implémenter le tri par sélection sur [5, 2, 9, 1, 7]",
          "Erreur fréquente du site : « oublier l'échange tab[i], tab[i_min] = tab[i_min], tab[i] »"
        ],
        "enClasse": [
          "0–10 min : rituel : « comment trieriez-vous une main de cartes ? » — faire verbaliser sans le savoir le tri par insertion.",
          "10–45 min : débranché « Trier à la main & compter le coût » : chaque îlot trie 7 cartes par sélection en posant un jeton par comparaison, puis recommence le MÊME paquet par insertion ; comparer les tas de jetons ; question du site : « et avec 100 cartes ? ».",
          "45–70 min : institutionnalisation Sections 4–5 : dérouler [5, 2, 9, 1, 7] au tableau pour les deux tris (l'exemple du cours) ; deux boucles imbriquées → coût en n².",
          "70–95 min : sur postes : cellules ▶ tri_selection et tri_insertion exécutées puis instrumentées (print du tableau à chaque tour i) ; observer la partie gauche qui grandit.",
          "95–115 min : Exercice 9 (défi) en cellule vide : réécrire le tri par sélection sans modèle ; les rapides ajoutent un compteur de comparaisons et vérifient ~n²/2.",
          "115–120 min : bilan : quelle méthode pour un paquet PRESQUE trié ? (insertion) ; le prof pousse les corrigés."
        ],
        "aPreparer": [
          "Un jeu de 6–8 cartes numérotées par îlot + une réserve de jetons (matériel de l'activité débranchée, non fourni par le site)",
          "Trace écrite : les deux tris en français + un déroulé de [5, 2, 9, 1, 7] à compléter",
          "Prévoir des cartes grand format aimantées pour le déroulé au tableau"
        ]
      },
      {
        "titre": "Séance 5 — Prouver : coût, terminaison (variant), correction (invariant)",
        "duree": "2 h",
        "objectif": "Comparer les coûts O(1)/O(log n)/O(n)/O(n²) ; justifier la terminaison par un variant ; décrire les invariants qui prouvent la correction des deux tris.",
        "surLeSite": [
          "Section 8 « Coût d'un algorithme (complexité) » : tableau des 4 coûts avec la colonne n = 1 000 000, cellule ▶ (cout_sequentiel vs cout_dichotomie) à faire manipuler",
          "Section 9 « Terminaison : le variant de boucle » ; retour sur les paragraphes « invariant » des Sections 4 et 5 (sélection : tranche triée ET éléments à leur place définitive ; insertion : tranche seulement triée)",
          "Exercice 7 (moyen) — donner le variant de while n > 1: n = n // 2",
          "QCM questions « coût du tri par sélection » et « pour prouver qu'une boucle se termine… »"
        ],
        "enClasse": [
          "0–10 min : rituel : classer 4 situations (accès tab[i], parcours, dichotomie, tri) de la plus rapide à la plus lente, sur ardoise.",
          "10–35 min : institutionnalisation Section 8 : le tableau des coûts recopié ; commenter la ligne n² = 10¹² « énorme » ; sur postes, cellule ▶ des coûts exécutée pour n = 10, 1000, 1 000 000.",
          "35–60 min : Section 9 : définition du variant (entier, positif, strictement décroissant) ; Exercice 7 rédigé individuellement puis confronté en binôme ; chercher le variant de la dichotomie (droite − gauche).",
          "60–90 min : débranché argumentation : chaque îlot reçoit l'invariant d'UN des deux tris (texte des Sections 4/5 imprimé) et doit l'expliquer à un îlot voisin avec 5 cartes en main ; faire toucher la différence « place définitive ou pas ».",
          "90–110 min : écrit type bac : rédiger en 5 lignes « pourquoi le tri par sélection est correct » (invariant) et « pourquoi la dichotomie se termine » (variant) ; correction guidée.",
          "110–120 min : bilan : distinguer variant (terminaison) / invariant (correction) — la note du cours ; 2 questions du QCM projetées ; corrigés poussés."
        ],
        "aPreparer": [
          "Imprimer les paragraphes « invariant » des Sections 4 et 5 (un par îlot) — le bouton 🖨️ du cours permet de sortir la page",
          "Prévoir un modèle de rédaction type bac (le site n'en fournit pas) : structure « propriété / vraie au départ / conservée / conclusion »",
          "Cartes à jouer pour l'argumentation par îlot"
        ]
      },
      {
        "titre": "Séance 6 — Les algorithmes gloutons",
        "duree": "2 h",
        "objectif": "Mettre en œuvre un algorithme glouton (rendu de monnaie) et découvrir qu'il n'est pas toujours optimal (système [1, 3, 4]).",
        "surLeSite": [
          "Section 6 « Les algorithmes gloutons » : rendu de 67 centimes, warnbox système truqué [1, 3, 4], cellule ▶ rendu_monnaie() à faire manipuler",
          "Exercice 8 (défi) — coder rendu(somme, pieces) et exhiber un cas non optimal",
          "QCM question « un algorithme glouton… » ; erreur fréquente du site « croire que le glouton donne toujours l'optimum »",
          "Mini-projets du thème en prolongement pour les rapides : « Crible d'Ératosthène », « Mastermind », « Approximation de π (Monte-Carlo) »"
        ],
        "enClasse": [
          "0–10 min : rituel : rendu de monnaie réel : « rendez-moi 67 centimes avec le moins de pièces » avec la monnaie factice — tout le monde fait du glouton sans le savoir.",
          "10–30 min : formalisation Section 6 : « à chaque étape le meilleur choix local, sans retour arrière » ; dérouler 67 = 50 + 10 + 5 + 2 au tableau.",
          "30–50 min : débranché contre-exemple : les îlots doivent rendre 6 avec des pièces [1, 3, 4] ; laisser le glouton échouer (4+1+1) puis trouver 3+3 ; discussion : quand le glouton se trompe-t-il ?",
          "50–80 min : sur postes : cellule ▶ rendu_monnaie() exécutée, puis Exercice 8 (défi) en cellule vide avec les deux systèmes de pièces ; verbaliser la boucle « while somme >= p ».",
          "80–110 min : différenciation : les rapides démarrent un mini-projet du thème (« Crible d'Ératosthène » ou « Mastermind ») ; les autres refont le glouton sur un problème d'emploi du temps simple donné par le prof.",
          "110–120 min : bilan : rapide + intuitif MAIS pas toujours optimal ; question QCM ; corrigés poussés ; annonce du kNN."
        ],
        "aPreparer": [
          "Monnaie factice (pièces 1, 2, 5, 10, 20, 50 + jetons marqués 1, 3, 4) — non fournie par le site",
          "Un petit problème glouton supplémentaire rédigé par le prof pour la remédiation (ex. remplir un sac de poids maximal)",
          "Repérer à l'avance les mini-projets du site à proposer aux rapides"
        ]
      },
      {
        "titre": "Séance 7 — Les k plus proches voisins (kNN) en projet",
        "duree": "2 h",
        "objectif": "Écrire l'algorithme qui prédit la classe d'un élément selon la classe majoritaire de ses k plus proches voisins (capacité BO), du papier millimétré au code.",
        "surLeSite": [
          "Section 7 « Les k plus proches voisins (kNN) » : les 3 étapes (distance, k plus proches, vote), note sur le choix de k, cellule ▶ knn() à faire manipuler",
          "Projet îlot « Classer des objets avec les k plus proches voisins » (niveau défi, 2 à 3 séances — ici resserré) : phases 1–4, code de départ (6 fruits), tests, bonus 3e catégorie, corrigé avec asserts",
          "Exercice 10 (défi) — coder distance et knn pour le fruit mystère",
          "QCM : aucune question kNN — prévenir que le DS n°4 du site, lui, en contient"
        ],
        "enClasse": [
          "0–10 min : rituel : « comment votre appli photo reconnaît-elle un chien ? » — recueillir, introduire l'idée d'apprentissage à partir d'exemples étiquetés.",
          "10–35 min : phase 1 du projet, débranchée : chaque îlot place les 6 fruits du code de départ sur une grille papier millimétré, pose le point mystère (5.2, 4.0), entoure les 3 voisins À LA RÈGLE et vote.",
          "35–55 min : institutionnalisation Section 7 : les 3 étapes de l'algorithme au tableau ; pourquoi k impair ; k trop petit = bruit, trop grand = mélange.",
          "55–90 min : phases 2–3 : algorithme en français sur l'affiche, puis codage sur postes à partir du code du projet : distance() d'abord (testée seule), puis le tri par distance, puis le vote ; cellule ▶ du cours en secours pour les bloqués.",
          "90–110 min : phase 4 : tests du site (point près des pommes → pomme ; k = 1 et k = 3) ; bonus pour les rapides : 3e catégorie « citron » et point frontière ; Exercice 10 en autonomie pour les autres.",
          "110–120 min : mini-présentations : « que se passe-t-il si k est trop grand ? » ; le prof pousse le corrigé (asserts) et annonce la séance bilan + TP noté."
        ],
        "aPreparer": [
          "Papier millimétré + règles (une feuille par îlot) — le site fournit les données, pas le support de la phase papier",
          "Affiches pour la phase 2 ; grille d'évaluation de projet du site imprimée",
          "Réviser pour soi la question de l'égalité de vote (k pair) souvent posée par les élèves"
        ]
      },
      {
        "titre": "Séance 8 — Consolidation, QCM, remédiation et TP noté",
        "duree": "2 h",
        "objectif": "Stabiliser la boîte à outils du thème (quel algorithme pour quel problème, à quel coût), diagnostiquer les fragilités, puis évaluer sur poste.",
        "surLeSite": [
          "Section 10 « Synthèse : choisir et comparer » (tableau problème/algorithme/coût) ; résumé du thème (6 points) et les 4 erreurs fréquentes",
          "QCM du thème (6 questions) en autonomie",
          "Matrice de suivi / diagnostic par question (côté enseignant) pour cibler la remédiation",
          "Évaluation : TP noté — Algorithmique (EVALUATIONS du site, 1 h sur poste, /20, corrigé prof) ; le DS n°4 — Algorithmique (1 h, sujet fourni) à programmer sur un créneau suivant"
        ],
        "enClasse": [
          "0–15 min : rituel bilan : le tableau de la Section 10 projeté COLONNES MASQUÉES ; les élèves complètent algorithme et coût sur ardoise, ligne par ligne.",
          "15–30 min : relecture active du résumé et des 4 erreurs fréquentes ; chaque élève écrit SA question restante sur un post-it (mur des questions, traité à l'oral).",
          "30–45 min : QCM du thème (6 questions) en autonomie individuelle sur le site.",
          "45–60 min : remédiation ciblée : via la matrice/diagnostic par question, le prof constitue 2 groupes (souvent : dichotomie sur non-trié, glouton « toujours optimal ») et fait refaire les exercices 3, 5 ou 8 du site ; les autres s'échauffent sur le défi « Mission : duel d'algorithmes ».",
          "60–120 min : évaluation : TP noté — Algorithmique du site, 1 h sur poste, individuel, documents du site fermés."
        ],
        "aPreparer": [
          "Imprimer le sujet du TP noté — Algorithmique (bouton 🖨️) et préparer l'environnement (Capytale/Thonny) pour ramasser les fichiers",
          "Programmer le DS n°4 — Algorithmique (1 h sur table, sujet et corrigé dans EVALUATIONS) sur le créneau suivant",
          "Post-its pour le mur des questions ; fiche de remédiation exercice ↔ question de QCM",
          "Tableau de synthèse vierge à coller comme trace écrite finale"
        ]
      }
    ]
  },
  "reseaux": {
    "heures": "≈ 8 h (4 séances de 2 h) — S26–S27 de la PROGRESSION (Mai, Période 5)",
    "resume": "Un thème court et très incarné : le « réseau vivant » débranché ouvre la première séance, puis chaque idée (paquets, routage, désordre/perte/doublon, bit alterné) est manipulée dans les cellules ▶ avant d'être institutionnalisée ; le projet « Simulation de paquets réseau » court sur les séances 3 et 4 ; la dernière séance ajoute QCM, remédiation et une évaluation courte à rédiger (pas de sujet EVALUATIONS pour ce thème).",
    "seances": [
      {
        "titre": "Séance 1 — Protocole, adresse IP et paquets : le réseau vivant",
        "duree": "2 h",
        "objectif": "Expliquer le rôle d'un protocole, comprendre le découpage d'un message en paquets numérotés avec en-tête, et découvrir l'encapsulation.",
        "surLeSite": [
          "Activité débranchée « Le réseau vivant (paquets) » (25–35 min : cartes-paquets, routeurs humains, désordre/perte/doublon ; déroulé, variante et notes prof fournis)",
          "Sections 1–3 : « Relier les machines », « Réseau, protocole et adresse IP » (analogie postale), « Découper un message en paquets » avec le schéma d'encapsulation et la cellule ▶ découpage/reconstruction à faire manipuler",
          "Exercices 1 à 3 (faciles) : rôle du numéro, recoller 3 paquets, vrai/faux « un seul bloc »",
          "QCM questions « à quoi sert un protocole » et « pourquoi découper en paquets »"
        ],
        "enClasse": [
          "0–10 min : rituel + accroche : « quand tu envoies ce message, part-il d'un seul bloc ? » — vote à main levée, on y répondra en fin de séance.",
          "10–45 min : débranché « Le réseau vivant » : phrase découpée en 5 cartes-paquets numérotées, élèves-routeurs, arrivée en désordre, retri par numéro ; le prof RETIRE une carte (perte détectée et redemandée) puis glisse un doublon (ignoré).",
          "45–70 min : institutionnalisation Sections 1–2 : protocole = règles communes (analogie de la lettre), adresse IP = adresse postale de la machine ; puis Section 3 : l'en-tête (src, dst, num) et le schéma des enveloppes emboîtées (encapsulation) recopié.",
          "70–95 min : sur postes : cellule ▶ de la Section 3 : exécuter le découpage de « Bonjour le monde », changer le message, observer les dictionnaires-paquets ; puis la reconstruction triée par numéro.",
          "95–115 min : Exercices 1 à 3 (faciles) en autonomie, réponse rédigée avant de déplier la solution ; les rapides ajoutent un champ « taille » à l'en-tête.",
          "115–120 min : bilan : retour au vote de départ (c'était faux !) ; le prof pousse les corrigés ; trace écrite : paquet = en-tête + données."
        ],
        "aPreparer": [
          "Cartes-paquets à fabriquer (n° + un mot au feutre, 5 par message, 2 jeux) — le site donne le déroulé, pas le matériel",
          "Plan de classe dégagé pour la chaîne de routeurs humains",
          "Trace écrite : schéma d'encapsulation à compléter, à photocopier",
          "Vidéoprojecteur pour la cellule ▶ en correction collective"
        ]
      },
      {
        "titre": "Séance 2 — Routage, désordre, perte et doublon",
        "duree": "2 h",
        "objectif": "Décrire le routage de proche en proche et sa robustesse ; détecter et traiter les trois incidents (désordre → retri, perte → numéro manquant, doublon → ignoré) en Python.",
        "surLeSite": [
          "Sections 4–5 : « Le routage : trouver le chemin » (schéma routeurs A/B/C/D, note « Terminale » sur RIP/OSPF) et « Désordre, perte et doublon » (tableau des 3 incidents) avec cellule ▶ reconstruire() à faire manipuler",
          "Exercices 4 et 5 (moyens) — découper « Vive la NSI » en compréhension ; détecter les manquants dans 1, 2, 4, 5",
          "Exercices 7 et 8 (défis) — reconstruire() avec dictionnaire {num: data} puis version qui SIGNALE les perdus ; Exercice 9 (défi) — pourquoi le routage rend Internet robuste",
          "QCM questions « que fait un routeur » et « paquets dans le désordre »"
        ],
        "enClasse": [
          "0–10 min : rituel : re-dicter les 3 incidents et leur remède, sur ardoise (le tableau de la Section 5 en autocontrôle).",
          "10–30 min : débranché routage : la variante « panne » de l'activité réseau vivant : un élève-routeur « tombe en panne », les cartes passent par un autre chemin ; relier au schéma A/B/C/D de la Section 4 ; Exercice 9 traité à l'oral.",
          "30–50 min : institutionnalisation Section 4 : routage de proche en proche, plusieurs chemins, robustesse (conçu pour ça) ; bien poser la limite du programme : les protocoles de routage (RIP/OSPF), c'est la Terminale.",
          "50–80 min : sur postes : Section 5, cellule ▶ reconstruire() exécutée sur le cas désordre + doublon ; les élèves cassent le jeu de paquets (retirer le n°2) et observent le message d'alerte ; Exercices 4 puis 5 en cellule vide.",
          "80–110 min : Exercices 7 puis 8 (défis) en binômes : la version dictionnaire, puis la version qui signale les perdus ; faire VERBALISER pourquoi une clé de dictionnaire élimine le doublon.",
          "110–120 min : bilan : le tableau des 3 incidents complété de mémoire en trace écrite ; le prof pousse les corrigés ; teaser : « et comment RÉPARER une perte automatiquement ? »."
        ],
        "aPreparer": [
          "Réutiliser les cartes-paquets de la séance 1 + un badge « EN PANNE » pour le routeur",
          "Trace écrite : tableau des 3 incidents vierge à photocopier",
          "Préparer sur Capytale un jeu de paquets « mystère » (avec perte et doublon cachés) à faire diagnostiquer en devoir maison"
        ]
      },
      {
        "titre": "Séance 3 — Le bit alterné, IP & TCP ; lancement du projet",
        "duree": "2 h",
        "objectif": "Dérouler le protocole du bit alterné dans ses trois scénarios (nominal, paquet perdu, ACK perdu) ; distinguer les rôles d'IP et de TCP ; démarrer le projet « Simulation de paquets réseau ».",
        "surLeSite": [
          "Section 6 « Le protocole du bit alterné » : les 3 chronogrammes (cas nominal, paquet perdu, ACK perdu) et la cellule ▶ de simulation DÉTERMINISTE (scénario ok / paquet_perdu / ack_perdu) à faire manipuler ; Section 7 « Deux protocoles complémentaires : IP et TCP »",
          "Exercice 10 (moyen) — dérouler l'échange complet Alice/Bob avec le 1er envoi de P2 perdu ; Exercice 6 (moyen) — IP vs TCP en une phrase ; Exercice 11 (défi) — coder l'émetteur bit alterné (pour les rapides)",
          "Projet îlot « Simulation de paquets réseau » (niveau défi, 2 séances) : phases 1–3 et code de départ",
          "QCM questions « rôle de l'ACK » et « pourquoi l'alternance 0/1 distingue un doublon »"
        ],
        "enClasse": [
          "0–10 min : rituel : rejouer sur ardoise la détection d'une perte (numéro manquant) — « détecter, oui ; mais réparer ? ».",
          "10–35 min : débranché bit alterné : deux élèves jouent Alice et Bob avec des cartes « paquet bit 0/1 » et « ACK 0/1 » ; le prof intercepte tantôt un paquet, tantôt un ACK ; la classe suit le chronogramme au tableau (les 3 scénarios de la Section 6).",
          "35–55 min : institutionnalisation : les 3 règles (bit qui alterne, ACK, timeout/retransmission) ; pourquoi le bit démasque le doublon quand c'est l'ACK qui s'est perdu ; Section 7 : IP achemine sans garantie, TCP fiabilise — Exercice 6 rédigé en une phrase.",
          "55–80 min : sur postes : cellule ▶ de la simulation déterministe : exécuter, puis MODIFIER le scénario (mettre deux paquet_perdu de suite, déplacer l'ack_perdu) et prédire la sortie avant chaque exécution ; Exercice 10 sur papier ensuite.",
          "80–115 min : lancement du projet en îlots : phase 1 (pourquoi découper ? qu'exige la remise en ordre ?), phase 2 (algorithme papier), début phase 3 (codage de reconstruire() à partir du code de départ) ; les rapides attaquent l'Exercice 11.",
          "115–120 min : point d'étape des îlots (où en est chacun) ; le prof pousse les corrigés des exercices 6 et 10 ; le projet reste ouvert pour la séance 4."
        ],
        "aPreparer": [
          "Cartes « paquet bit 0 / bit 1 » et « ACK 0 / ACK 1 » à fabriquer + un sablier ou minuteur pour matérialiser le timeout",
          "Affiches d'îlot pour la phase 2 du projet",
          "Imprimer la grille d'évaluation de projet du site pour annoncer les critères dès le lancement"
        ]
      },
      {
        "titre": "Séance 4 — Fin du projet, consolidation, QCM et évaluation",
        "duree": "2 h",
        "objectif": "Terminer et présenter la simulation robuste (désordre + perte + doublon) ; consolider tout le thème ; QCM en autonomie, remédiation puis évaluation courte.",
        "surLeSite": [
          "Projet « Simulation de paquets réseau » phases 4–5 : les 3 tests du site (« Bonjour le monde ! », doublon sans répétition, détection du manquant), le bonus perte + doublon affichés, le corrigé reconstruire_robuste avec assert",
          "Section 8 « Synthèse et mise en pratique » ; résumé du thème (5 points) et les 3 erreurs fréquentes",
          "QCM du thème (9 questions) en autonomie ; matrice de suivi / diagnostic par question côté prof pour la remédiation",
          "Défi du thème « Mission : le réseau vivant » en remédiation débranchée si besoin"
        ],
        "enClasse": [
          "0–35 min : reprise du projet : finir la phase 3, puis phase 4 (passer les 3 tests du site, ajouter le bonus détection perte + doublon) ; le prof circule avec la grille d'évaluation.",
          "35–55 min : phase 5 : chaque îlot présente en 2 min « que se passe-t-il si un paquet est perdu ? » avec démonstration à l'écran ; le prof pousse le corrigé reconstruire_robuste.",
          "55–70 min : consolidation : Section 8 projetée, résumé (5 points) et 3 erreurs fréquentes relus ; carte mentale collective au tableau : protocole / paquets / routage / incidents / bit alterné / IP-TCP.",
          "70–85 min : QCM du thème (9 questions) en autonomie individuelle sur le site.",
          "85–100 min : remédiation ciblée via la matrice/diagnostic par question : groupe « bit alterné » rejoue le débranché cartes/ACK avec le prof ; groupe « incidents » refait les exercices 5 et 7 ; les autres tentent l'Exercice 11 (émetteur bit alterné).",
          "100–120 min : évaluation écrite courte (20 min) sur table : pas de sujet dans EVALUATIONS pour ce thème → à rédiger par le prof en s'inspirant du QCM (9 questions) et des exercices 1, 5, 6 et 10 (numéro de paquet, manquants, IP vs TCP, déroulé bit alterné), conformément à la progression du site (« QCM + TP court »)."
        ],
        "aPreparer": [
          "Rédiger l'évaluation courte (aucun sujet EVALUATIONS pour « reseaux » sur le site) : 4–5 questions calquées sur le QCM et les exercices 1, 5, 6, 10 + un déroulé de bit alterné ; prévoir le barème /10 ou /20",
          "Imprimer la grille d'évaluation de projet et les sujets de l'évaluation",
          "Garder les cartes paquet/ACK sous la main pour la remédiation débranchée",
          "Ramasser les fichiers du projet via Capytale si le codage s'y est fait"
        ]
      }
    ]
  }
};

/* ---------------- Kits de préparation (prof) ----------------
   La 3e colonne des déroulés, FOURNIE : matériel débranché imprimable,
   fichiers réels (assets/fichiers/premiere/) à déposer sur Capytale,
   et pointeurs vers les évaluations. Rendu : makeThemeKit (app.js). */
const THEME_KITS = {
  "langages-prog": {
    "intro": "Tout le matériel des séances 1 à 12 : jeux débranchés, fiche métacognition, et le défi Pendu en fichier réel.",
    "imprimables": [
      {
        "titre": "Cartes-notes & zones (jeu des conditions)",
        "html": "<h2>Jeu « trier les humains » — if / elif / else</h2><p>Distribuer une carte-note par élève ; afficher les 4 zones aux coins de la salle. Chaque élève rejoint sa zone en suivant les règles <em>dans l'ordre</em>. Variante piège : tester « ≥ 12 » avant « ≥ 16 ».</p><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">8</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">9</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">10</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">11</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">12</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">13</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">14</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">15</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">16</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">17</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">18</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">19</span></div><div style='margin-top:.5cm'><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">TRÈS BIEN<br><span style=\"font-size:15px\">note ≥ 16</span></span><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">BIEN<br><span style=\"font-size:15px\">note ≥ 14</span></span><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">ASSEZ BIEN<br><span style=\"font-size:15px\">note ≥ 12</span></span><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">PEUT MIEUX FAIRE<br><span style=\"font-size:15px\">sinon</span></span></div>"
      },
      {
        "titre": "Quadrillage & cartes robot (naissance de la boucle)",
        "html": "<h2>Robot humain — vers la boucle for</h2><p>Un élève-robot sur le quadrillage (au sol ou au tableau). L'îlot écrit le programme avec les cartes ; faire constater la répétition, puis introduire « RÉPÈTE n fois [ … ] ».</p><table style=\"border-collapse:collapse;width:100%;\"><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td><td style=\"border:1px solid #999;width:2.2cm;height:2.2cm;\">&nbsp;</td></tr></table><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">AVANCE</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">TOURNE À GAUCHE</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">TOURNE À DROITE</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">RÉPÈTE ___ FOIS [</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">]</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">POSE UN JETON</span></div>"
      },
      {
        "titre": "Fiche « mes 3 erreurs à moi » (métacognition)",
        "html": "<h2>Mes 3 erreurs à moi</h2><p>Nom : ______________________ Classe : ______</p><p>À remplir en fin de séance et à garder dans le classeur : mes erreurs <em>fréquentes</em>, pour les reconnaître.</p><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Mon erreur (code)</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Le message de Python</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Comment je la corrige</th></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr></table>"
      }
    ],
    "fichiers": [
      {
        "nom": "pendu_squelette.py",
        "chemin": "assets/fichiers/premiere/langages-prog/pendu_squelette.py",
        "desc": "défi « jeu du pendu » à compléter (boucles + conditions), pour Capytale/Thonny"
      },
      {
        "nom": "pendu_corrige.py",
        "chemin": "assets/fichiers/premiere/langages-prog/pendu_corrige.py",
        "desc": "corrigé prof du pendu"
      }
    ],
    "evals": [
      "Vers la séance 6 : <strong>TP noté — Programmation</strong> — sujet prêt dans 📝 Évaluations (1 h, sur machine).",
      "Fin de thème (séance 12) : <strong>DS n°1 — Langages et programmation</strong> — sujet + corrigé prêts dans 📝 Évaluations."
    ]
  },
  "histoire-informatique": {
    "intro": "Le jeu de frise à découper pour la séance 1, et la frise en CSV pour le défi Python de fin d'année.",
    "imprimables": [
      {
        "titre": "Cartes « frise chronologique » à remettre dans l'ordre",
        "html": "<h2>La frise à reconstituer (îlots)</h2><p>Un jeu par îlot. Les élèves ordonnent les cartes SANS les dates, puis on révèle. <em>Réponses : voir le tableau prof en bas (à plier avant distribution).</em></p><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Pascaline<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Pascal</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Machine analytique<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Babbage & Lovelace</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Machine de Turing<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Turing</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Transistor<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Bell Labs</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Circuit intégré<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Kilby</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">ARPANET<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">premier message</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Microprocesseur<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Intel 4004</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">IBM PC<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">IBM</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Web (proposition)<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Berners-Lee</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">Python<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">van Rossum</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">iPhone<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">Apple</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">IA générative<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">grand public</span></span></div><hr style='margin:.6cm 0;border:none;border-top:2px dashed #999'><p style='font-size:12px'><strong>Prof :</strong> 1642 · 1837/1843 · 1936 · 1947 · 1958 · 1969 · 1971 · 1981 · 1989 · 1991 · 2007 · 2022</p>"
      }
    ],
    "fichiers": [
      {
        "nom": "frise.csv",
        "chemin": "assets/fichiers/premiere/histoire-informatique/frise.csv",
        "desc": "23 événements (annee, evenement, personnage) — support du défi et des rituels"
      },
      {
        "nom": "frise_defi.py",
        "chemin": "assets/fichiers/premiere/histoire-informatique/frise_defi.py",
        "desc": "défi Python sur la frise (à faire après Types construits / Tables)"
      }
    ],
    "evals": [
      "Fin du fil rouge : <strong>DS — Histoire de l'informatique</strong> — sujet prêt dans 📝 Évaluations (ou en question bonus d'un autre DS)."
    ]
  },
  "donnees-base": {
    "intro": "Les cartes binaires du débranché, des grilles d'entraînement vierges, et les conversions en fichier réel.",
    "imprimables": [
      {
        "titre": "Cartes binaires (points) — 1 à 128",
        "html": "<h2>Cartes binaires — le nombre caché</h2><p>Une série par îlot. Face visible/cachée = 1/0 : faire afficher 13, 21, 100… puis « quel est le plus grand nombre possible avec 8 cartes ? »</p><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">128<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2⁷</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">64<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2⁶</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">32<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2⁵</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">16<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2⁴</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">8<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2³</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">4<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2²</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">2<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2¹</span></span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">1<span style=\"font-size:13px;font-weight:normal;color:#444;display:block;margin-top:.35cm;\">2⁰</span></span></div>"
      },
      {
        "titre": "Grilles de conversion vierges (entraînement)",
        "html": "<h2>Conversions — entraînement</h2><p>Nom : ______________________</p><h3>Binaire → décimal</h3><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Binaire</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Calcul (poids)</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Décimal</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">1011</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">110010</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">11111111</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr></table><h3 style='margin-top:.5cm'>Décimal → binaire (divisions par 2)</h3><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Décimal</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Divisions successives</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Binaire</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">19</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">42</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">100</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr></table>"
      }
    ],
    "fichiers": [
      {
        "nom": "conversions.py",
        "chemin": "assets/fichiers/premiere/donnees-base/conversions.py",
        "desc": "squelette élève avec asserts (binaire↔décimal, sans bin/int)"
      },
      {
        "nom": "conversions_corrige.py",
        "chemin": "assets/fichiers/premiere/donnees-base/conversions_corrige.py",
        "desc": "corrigé prof (vérifié : tous les asserts passent)"
      }
    ],
    "evals": [
      "Mi-thème : <strong>TP noté — Représentation des données</strong> — sujet prêt dans 📝 Évaluations.",
      "Fin de thème : <strong>DS n°2 — Représentation des données</strong> — sujet + corrigé prêts dans 📝 Évaluations."
    ]
  },
  "types-construits": {
    "intro": "Le jeu « quelle structure ? », des tables de suivi vierges, et le TP noté en fichier réel avec ses données CSV.",
    "imprimables": [
      {
        "titre": "Jeu de tri : quelle structure choisir ?",
        "html": "<h2>Quelle structure ? (tuple · liste · dict · set)</h2><p>Afficher les 4 pancartes aux coins ; chaque îlot pioche une carte-situation et va se placer, en justifiant.</p><div><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">TUPLE</span><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">LISTE</span><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">DICTIONNAIRE</span><span style=\"display:inline-block;width:8.5cm;border:2px solid #333;margin:.2cm;text-align:center;padding:.5cm;font-size:26px;font-weight:bold;\">ENSEMBLE (set)</span></div><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Les coordonnées d'un point</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Les prénoms de la classe</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">nom → n° de téléphone</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Les notes SANS doublon</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Une date (j, m, a)</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">La liste des courses</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">mot → définition</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Les visiteurs uniques</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Une couleur (r, v, b)</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Les scores à trier</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">élève → moyenne</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.6cm .2cm 0;font-size:17px;font-weight:bold;\">Options communes à 2 groupes</span></div>"
      },
      {
        "titre": "Tables de suivi de variables (traces vierges)",
        "html": "<h2>Table de suivi — je déroule ma boucle à la main</h2><p>Nom : ______________________</p><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Tour de boucle</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">i / élément</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Variable 1 : ______</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Variable 2 : ______</th></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr></table><p style='margin-top:.4cm;font-size:13px'>À utiliser avant de coder : si la trace est juste, le code suivra.</p>"
      }
    ],
    "fichiers": [
      {
        "nom": "camp_robotique.csv",
        "chemin": "assets/fichiers/premiere/types-construits/camp_robotique.csv",
        "desc": "données du projet « groupes du camp » (liste de participants)"
      },
      {
        "nom": "tp_note_types_depart.py",
        "chemin": "assets/fichiers/premiere/types-construits/tp_note_types_depart.py",
        "desc": "TP noté sur machine : squelette élève avec vérifications"
      },
      {
        "nom": "tp_note_types_corrige.py",
        "chemin": "assets/fichiers/premiere/types-construits/tp_note_types_corrige.py",
        "desc": "corrigé prof (vérifié)"
      }
    ],
    "evals": [
      "Mi-thème : <strong>TP noté — Types construits</strong> — sujet dans 📝 Évaluations, version fichier réel fournie ci-dessus (Capytale).",
      "Fin de thème : <strong>DS — Types construits</strong> — sujet + corrigé prêts dans 📝 Évaluations."
    ]
  },
  "donnees-tables": {
    "intro": "Le jeu du « filtre humain », un vrai CSV propre + un CSV piégé à nettoyer, et le TP fichier réel.",
    "imprimables": [
      {
        "titre": "Jeu du filtre humain (table + cartes requêtes)",
        "html": "<h2>Le filtre humain</h2><p>Chaque élève reçoit une ligne de la table (à découper). Le prof pioche une carte-requête ; les élèves concernés se lèvent. Puis : « triez-vous par note décroissante » (tri humain).</p><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">nom</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">classe</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">note</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">absences</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Ada</td><td style=\"border:1px solid #666;padding:.35cm;\">1NSI</td><td style=\"border:1px solid #666;padding:.35cm;\">17</td><td style=\"border:1px solid #666;padding:.35cm;\">0</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Tim</td><td style=\"border:1px solid #666;padding:.35cm;\">1G2</td><td style=\"border:1px solid #666;padding:.35cm;\">12</td><td style=\"border:1px solid #666;padding:.35cm;\">3</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Lou</td><td style=\"border:1px solid #666;padding:.35cm;\">1NSI</td><td style=\"border:1px solid #666;padding:.35cm;\">9</td><td style=\"border:1px solid #666;padding:.35cm;\">5</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Max</td><td style=\"border:1px solid #666;padding:.35cm;\">1G1</td><td style=\"border:1px solid #666;padding:.35cm;\">14</td><td style=\"border:1px solid #666;padding:.35cm;\">1</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Zoé</td><td style=\"border:1px solid #666;padding:.35cm;\">1NSI</td><td style=\"border:1px solid #666;padding:.35cm;\">16</td><td style=\"border:1px solid #666;padding:.35cm;\">0</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Sam</td><td style=\"border:1px solid #666;padding:.35cm;\">1G2</td><td style=\"border:1px solid #666;padding:.35cm;\">8</td><td style=\"border:1px solid #666;padding:.35cm;\">7</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Eva</td><td style=\"border:1px solid #666;padding:.35cm;\">1G1</td><td style=\"border:1px solid #666;padding:.35cm;\">11</td><td style=\"border:1px solid #666;padding:.35cm;\">2</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Léo</td><td style=\"border:1px solid #666;padding:.35cm;\">1NSI</td><td style=\"border:1px solid #666;padding:.35cm;\">13</td><td style=\"border:1px solid #666;padding:.35cm;\">4</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Mia</td><td style=\"border:1px solid #666;padding:.35cm;\">1G2</td><td style=\"border:1px solid #666;padding:.35cm;\">18</td><td style=\"border:1px solid #666;padding:.35cm;\">0</td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Nas</td><td style=\"border:1px solid #666;padding:.35cm;\">1G1</td><td style=\"border:1px solid #666;padding:.35cm;\">10</td><td style=\"border:1px solid #666;padding:.35cm;\">6</td></tr></table><div style='margin-top:.5cm'><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.7cm .2cm 0;font-size:16px;font-weight:bold;\">note ≥ 12</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.7cm .2cm 0;font-size:16px;font-weight:bold;\">classe == \"1NSI\"</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.7cm .2cm 0;font-size:16px;font-weight:bold;\">absences == 0</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.7cm .2cm 0;font-size:16px;font-weight:bold;\">note < 10 OU absences > 5</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.7cm .2cm 0;font-size:16px;font-weight:bold;\">classe == \"1G2\" ET note ≥ 12</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.7cm .2cm 0;font-size:16px;font-weight:bold;\">Tri : note décroissante</span></div></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "eleves.csv",
        "chemin": "assets/fichiers/premiere/donnees-tables/eleves.csv",
        "desc": "table propre (nom, classe, note, absences) pour les TP de lecture/filtre/tri"
      },
      {
        "nom": "eleves_bug.csv",
        "chemin": "assets/fichiers/premiere/donnees-tables/eleves_bug.csv",
        "desc": "version piégée (incohérences) pour la section « Vérifier la cohérence d'une table »"
      },
      {
        "nom": "tp_tables_depart.py",
        "chemin": "assets/fichiers/premiere/donnees-tables/tp_tables_depart.py",
        "desc": "squelette élève : lire le CSV, filtrer, trier, statistiques"
      }
    ],
    "evals": [
      "Mi-thème : <strong>TP noté — Traitement de données en tables</strong> — sujet dans 📝 Évaluations, à faire sur Capytale avec eleves.csv.",
      "Fin de thème : <strong>DS — Traitement de données en tables</strong> — sujet + corrigé prêts dans 📝 Évaluations."
    ]
  },
  "ihm-web": {
    "intro": "La maquette papier pour concevoir avant de coder, et le duo HTML/CSS de départ à ouvrir dans un vrai éditeur.",
    "imprimables": [
      {
        "titre": "Maquette papier (wireframe) + étiquettes balises",
        "html": "<h2>Maquette papier — je dessine AVANT de coder</h2><p>Chaque îlot dessine sa page dans le cadre puis pose les étiquettes de balises au bon endroit.</p><div style='border:2px solid #333;height:14cm;padding:.3cm'><div style='border:1px dashed #999;height:2cm;text-align:center;padding-top:.6cm'>en-tête ?</div><div style='border:1px dashed #999;height:1.2cm;margin-top:.2cm;text-align:center;padding-top:.3cm'>navigation ?</div><div style='border:1px dashed #999;height:7.5cm;margin-top:.2cm;text-align:center;padding-top:3cm'>contenu ?</div><div style='border:1px dashed #999;height:1.4cm;margin-top:.2cm;text-align:center;padding-top:.4cm'>pied de page ?</div></div><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;h1&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;p&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;ul&gt; + &lt;li&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;a href&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;img alt&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;form&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;article&gt;</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">&lt;nav&gt;</span></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "page_depart.html",
        "chemin": "assets/fichiers/premiere/ihm-web/page_depart.html",
        "desc": "page HTML de départ (consignes en commentaires) — à ouvrir dans un vrai éditeur"
      },
      {
        "nom": "style_depart.css",
        "chemin": "assets/fichiers/premiere/ihm-web/style_depart.css",
        "desc": "feuille CSS à compléter, reliée à la page"
      }
    ],
    "evals": [
      "Projet : <strong>TP noté — Page web d'inscription</strong> — sujet dans 📝 Évaluations (les fichiers de départ ci-dessus servent de base).",
      "Fin de thème : <strong>DS — Interactions homme-machine sur le Web</strong> — sujet + corrigé prêts dans 📝 Évaluations."
    ]
  },
  "architecture-os": {
    "intro": "Les cartes composants/rôles, l'arborescence papier pour les chemins, et deux fichiers réels (portes logiques, simulateur machine).",
    "imprimables": [
      {
        "titre": "Cartes composants ↔ rôles (à associer)",
        "html": "<h2>Associer chaque composant à son rôle</h2><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Processeur (CPU)</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Mémoire vive (RAM)</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Disque / SSD</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Carte graphique</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Clavier</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Écran</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Capteur</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:19px;font-weight:bold;\">Actionneur</span></div><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Exécute les instructions</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Mémoire de travail (volatile)</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Stockage durable</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Calcule l'affichage</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Périphérique d'ENTRÉE</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Périphérique de SORTIE</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Mesure le monde réel</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:.9cm .2cm 0;font-size:15px;font-weight:bold;\">Agit sur le monde réel</span></div>"
      },
      {
        "titre": "Arborescence papier — jeu des chemins",
        "html": "<h2>Se repérer : chemins absolus et relatifs</h2><pre style='font-size:18px;line-height:1.7'>/\n├── home\n│   ├── ada\n│   │   ├── nsi\n│   │   │   ├── tp1.py\n│   │   │   └── notes.csv\n│   │   └── photos\n│   └── alan\n│       └── projets\n└── etc</pre><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Je suis dans…</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Je veux…</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Chemin (à écrire)</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">/home/ada</td><td style=\"border:1px solid #666;padding:.35cm;\">ouvrir tp1.py</td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">/home/ada/photos</td><td style=\"border:1px solid #666;padding:.35cm;\">revenir dans ada</td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">/home/ada/nsi</td><td style=\"border:1px solid #666;padding:.35cm;\">aller dans projets d'alan</td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">n'importe où</td><td style=\"border:1px solid #666;padding:.35cm;\">notes.csv en chemin ABSOLU</td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr></table><p style='font-size:12px;margin-top:.3cm'><strong>Prof :</strong> nsi/tp1.py (ou ./nsi/tp1.py) · .. · ../../alan/projets · /home/ada/nsi/notes.csv</p>"
      }
    ],
    "fichiers": [
      {
        "nom": "portes_logiques.py",
        "chemin": "assets/fichiers/premiere/architecture-os/portes_logiques.py",
        "desc": "squelette élève : ET/OU/NON puis demi-additionneur, avec asserts"
      },
      {
        "nom": "portes_logiques_corrige.py",
        "chemin": "assets/fichiers/premiere/architecture-os/portes_logiques_corrige.py",
        "desc": "corrigé prof (vérifié)"
      },
      {
        "nom": "simulateur_machine.py",
        "chemin": "assets/fichiers/premiere/architecture-os/simulateur_machine.py",
        "desc": "squelette élève : simulateur LOAD/ADD/STORE/HALT à compléter"
      },
      {
        "nom": "simulateur_machine_corrige.py",
        "chemin": "assets/fichiers/premiere/architecture-os/simulateur_machine_corrige.py",
        "desc": "corrigé prof (vérifié)"
      }
    ],
    "evals": [
      "Mi-thème : <strong>TP noté — Permissions et portes logiques</strong> — sujet dans 📝 Évaluations.",
      "Fin de thème : <strong>DS — Architectures et systèmes d'exploitation</strong> — sujet + corrigé prêts dans 📝 Évaluations."
    ]
  },
  "algorithmique": {
    "intro": "Les cartes pour les tris humains avec fiche de comptage, et l'entraînement type épreuve pratique en fichier réel.",
    "imprimables": [
      {
        "titre": "Cartes nombres + fiche de comptage (tris humains)",
        "html": "<h2>Tri humain — sélection vs insertion</h2><p>10 élèves-cartes en ligne. Un « chef d'orchestre » applique l'algorithme ; un « comptable » compte les comparaisons.</p><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">23</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">7</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">42</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">15</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">4</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">31</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">19</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">8</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">27</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:34px;font-weight:bold;\">11</span></div><h3 style='margin-top:.5cm'>Fiche de comptage</h3><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Algorithme</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Comparaisons (bâtons)</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Total</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Le tableau est-il trié ?</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Tri par sélection</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Tri par insertion</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">(défi) déjà trié → insertion</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr></table>"
      },
      {
        "titre": "Dichotomie — le juste prix chronométré",
        "html": "<h2>Le juste prix : au hasard vs dichotomie</h2><p>Nombre mystère entre 1 et 100. Manche 1 : réponses au hasard. Manche 2 : stratégie « moitié-moitié ». Compter les essais et remplir :</p><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Manche</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Nombre mystère</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Nb d'essais</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">Stratégie gagnante ?</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Au hasard</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Dichotomie</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\">Dichotomie (défi : 1 à 1000)</td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr></table><p style='font-size:13px;margin-top:.3cm'>Question bilan : combien d'essais au MAXIMUM pour 1 à 1000 avec la dichotomie ? (≈ 10)</p>"
      }
    ],
    "fichiers": [
      {
        "nom": "recherche_tris.py",
        "chemin": "assets/fichiers/premiere/algorithmique/recherche_tris.py",
        "desc": "entraînement style épreuve pratique (recherche, dichotomie, tri insertion) avec asserts"
      },
      {
        "nom": "recherche_tris_corrige.py",
        "chemin": "assets/fichiers/premiere/algorithmique/recherche_tris_corrige.py",
        "desc": "corrigé prof (vérifié)"
      }
    ],
    "evals": [
      "Mi-thème : <strong>TP noté — Algorithmique</strong> — sujet dans 📝 Évaluations (variante fichier réel fournie ci-dessus).",
      "Fin de thème : <strong>DS n°4 — Algorithmique</strong> — sujet + corrigé prêts dans 📝 Évaluations.",
      "Juin : <strong>TP « épreuve pratique blanche »</strong> — sujet transversal prêt dans 📝 Évaluations."
    ]
  },
  "reseaux": {
    "intro": "Le jeu du « réseau vivant » complet (paquets, rôles, incidents) et le découpage en paquets en fichier réel.",
    "imprimables": [
      {
        "titre": "Cartes-paquets, rôles et incidents (réseau vivant)",
        "html": "<h2>Le réseau vivant</h2><p>Émetteur, routeurs, récepteur : chaque paquet passe de main en main. Le prof distribue les cartes INCIDENT en cours de route ; le récepteur doit détecter et réagir (redemander, ignorer le doublon, réordonner).</p><h3>Cartes-paquets (à remplir puis découper)</h3><table style=\"border-collapse:collapse;width:100%;\"><tr><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">src</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">dst</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">num</th><th style=\"border:1px solid #666;padding:.25cm .35cm;background:#eee;text-align:left;\">data (4 lettres max)</th></tr><tr><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td><td style=\"border:1px solid #666;padding:.35cm;\"></td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr><tr><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td><td style=\"border:1px solid #666;padding:.55cm;\">&nbsp;</td></tr></table><h3 style='margin-top:.4cm'>Rôles</h3><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">ÉMETTEUR</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">ROUTEUR 1</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">ROUTEUR 2</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding-top:1.1cm;font-size:22px;font-weight:bold;\">RÉCEPTEUR</span></div><h3 style='margin-top:.4cm'>Incidents</h3><p style=\"font-size:12px;color:#555;\">✂️ Découper le long des pointillés.</p><div><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:1cm .2cm 0;font-size:15px;font-weight:bold;\">PERTE : jette ce paquet</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:1cm .2cm 0;font-size:15px;font-weight:bold;\">DOUBLON : recopie ce paquet</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:1cm .2cm 0;font-size:15px;font-weight:bold;\">RETARD : garde 30 s</span><span style=\"display:inline-block;width:5.6cm;height:3.6cm;border:1px dashed #555;margin:.15cm;text-align:center;vertical-align:top;padding:1cm .2cm 0;font-size:15px;font-weight:bold;\">DÉSORDRE : échange 2 paquets</span></div>"
      }
    ],
    "fichiers": [
      {
        "nom": "paquets.py",
        "chemin": "assets/fichiers/premiere/reseaux/paquets.py",
        "desc": "squelette élève : découper un message en paquets, reconstituer dans l'ordre (asserts)"
      },
      {
        "nom": "paquets_corrige.py",
        "chemin": "assets/fichiers/premiere/reseaux/paquets_corrige.py",
        "desc": "corrigé prof (vérifié)"
      }
    ],
    "evals": [
      "Fin de thème : <strong>TP noté — Réseaux : paquets et bit alterné</strong> — NOUVEAU sujet prêt dans 📝 Évaluations (45 min).",
      "QCM du thème (9 questions) en auto-évaluation, résultats dans « Ma classe »."
    ]
  }
};

/* ---------------- Encart « coder pour de vrai » ---------------- */
const CODER_REEL = {
  titre: "💻 Coder pour de vrai (au-delà du site)",
  html: `
    <p>L'éditeur Python de ce site (Pyodide) tourne <em>dans le navigateur</em> : parfait pour expérimenter vite,
    mais il ne remplace pas un vrai environnement. Pour progresser et préparer la Terminale (où l'épreuve pratique
    se passe sur ordinateur, sur un vrai Python), les élèves doivent aussi coder dans un environnement réel :</p>
    <ul>
      <li><strong>Capytale</strong> — service de l'Éducation nationale (compte ENT), idéal pour distribuer et ramasser
      des notebooks/scripts ; fonctionne aussi avec de vrais fichiers.</li>
      <li><strong>Thonny</strong> — IDE Python simple et gratuit à installer, pensé pour débuter (débogueur pas-à-pas).</li>
      <li><strong>IDLE</strong> (livré avec Python) ou tout éditeur (VS Code…) pour les plus à l'aise.</li>
    </ul>
    <p class="note">Bon réflexe : faire <em>découvrir/réviser</em> une notion sur le site, puis faire <em>produire</em> le code
    sur Capytale/Thonny avec de vrais fichiers (lecture d'un vrai CSV, sauvegarde, exécution hors-ligne).</p>`,
};

/* ---------------- Fiches méthode (élève) ---------------- */
const METHODES = [
  {
    titre: "Écrire un code Python lisible (PEP8) & le visualiser",
    html: `
      <p>Un code <strong>lisible</strong> se relit et se corrige plus facilement. Quelques règles (norme <strong>PEP8</strong>) :</p>
      <ul>
        <li><strong>Indentation</strong> de 4 espaces (jamais de mélange espaces/tabulations).</li>
        <li><strong>Noms parlants</strong> en minuscules : <code>note_moyenne</code> plutôt que <code>nm</code> ou <code>x</code>.</li>
        <li>Une <strong>espace</strong> autour des opérateurs : <code>a = b + 1</code> (pas <code>a=b+1</code>).</li>
        <li>Des <strong>commentaires</strong> utiles (le pourquoi), et une <strong>docstring</strong> pour chaque fonction.</li>
        <li>Lignes pas trop longues ; une instruction par ligne.</li>
      </ul>
      <p class="note">🔎 <strong>Comprendre l'exécution :</strong> sur chaque bloc de code du site, le bouton <strong>« 🔎 Pas à pas »</strong> ouvre <em>Python Tutor</em> : il déroule le programme ligne par ligne et montre les <strong>variables</strong>, la <strong>mémoire</strong> et les <strong>appels de fonctions</strong>. Idéal pour visualiser une boucle ou une fonction.</p>`,
  },
  {
    titre: "Lire et comprendre un message d'erreur Python",
    html: `
      <p>Un message d'erreur n'est pas une punition : c'est une <strong>aide</strong>. On le lit <strong>de bas en haut</strong> :</p>
      <ol>
        <li>la <strong>dernière ligne</strong> donne le <em>type</em> d'erreur et un message court ;</li>
        <li>juste au-dessus, le <strong>numéro de ligne</strong> et le code fautif ;</li>
        <li>on cherche la cause à <em>cette</em> ligne (ou juste avant).</li>
      </ol>
      <table>
        <tr><th>Erreur</th><th>Cause fréquente</th></tr>
        <tr><td><code>SyntaxError</code></td><td>oubli de <code>:</code>, parenthèse/guillemet non fermé</td></tr>
        <tr><td><code>IndentationError</code></td><td>mauvais alignement d'un bloc</td></tr>
        <tr><td><code>NameError</code></td><td>variable utilisée mais jamais définie (ou faute de frappe)</td></tr>
        <tr><td><code>TypeError</code></td><td>opération entre types incompatibles (ex. <code>"3" + 4</code>)</td></tr>
        <tr><td><code>IndexError</code></td><td>indice hors de la liste (dernier indice = len−1)</td></tr>
        <tr><td><code>ZeroDivisionError</code></td><td>division par zéro</td></tr>
      </table>`,
  },
  {
    titre: "Écrire un jeu de tests (assert)",
    html: `
      <p>Avant de dire « ça marche », on le <strong>prouve</strong> avec des exemples. <code>assert</code> ne fait rien si tout va bien,
      et lève une erreur si un test échoue.</p>
      <ol>
        <li>Lister des couples <strong>entrée → résultat attendu</strong> (calculés à la main).</li>
        <li>Inclure les <strong>cas limites</strong> : liste vide, valeur nulle, plus petit/plus grand.</li>
        <li>Écrire un <code>assert</code> par cas, puis un <code>print("OK")</code> final.</li>
      </ol>
      <pre><code>assert moyenne([10, 20]) == 15
assert moyenne([12]) == 12        # cas à un seul élément
print("Tous les tests passent ✔")</code></pre>`,
  },
  {
    titre: "Décomposer un problème avant de coder",
    html: `
      <p>On ne code bien que ce qu'on a d'abord compris. La démarche (à faire en îlot, sur papier) :</p>
      <ol>
        <li><strong>Reformuler</strong> le problème en une phrase.</li>
        <li>Identifier les <strong>entrées</strong> (données) et la <strong>sortie</strong> (résultat attendu).</li>
        <li>Écrire l'<strong>algorithme en français</strong>, étape par étape.</li>
        <li>Choisir un ou deux <strong>exemples de test</strong> avec leur résultat.</li>
        <li><em>Seulement ensuite</em> : passer au clavier.</li>
        <li>Tester, repérer les erreurs, <strong>améliorer</strong>.</li>
      </ol>
      <p class="note">C'est exactement la fiche « réflexion en îlot » des projets.</p>`,
  },
  {
    titre: "Convertir entre les bases (binaire, décimal, hexa)",
    html: `
      <p><strong>Binaire → décimal</strong> : additionner les poids (puissances de 2) des bits à 1.<br>
      <code>101010</code> → 32 + 8 + 2 = 42.</p>
      <p><strong>Décimal → binaire</strong> : divisions successives par 2, lire les restes de bas en haut.<br>
      42 → restes 0,1,0,1,0,1 → <code>101010</code>.</p>
      <p><strong>Binaire ↔ hexa</strong> : regrouper les bits par paquets de 4 (un chiffre hexa = 4 bits).<br>
      <code>0010 1010</code> → <code>2 A</code> → <code>2A</code>.</p>
      <p><strong>Hexa → décimal</strong> : poids en puissances de 16. <code>2A</code> = 2×16 + 10 = 42.</p>
      <p class="note">Vérifier <em>toujours</em> à la main d'abord, puis avec Python : <code>bin(42)</code>, <code>hex(42)</code>, <code>int("2A",16)</code>.</p>`,
  },
  {
    titre: "Parcourir un tableau : les 4 schémas",
    html: `
      <p>La plupart des algorithmes de Première sont une variation de ces schémas. On prépare une variable <em>avant</em> la boucle.</p>
      <pre><code># 1) Somme / accumulation
total = 0
for x in tab:
    total += x

# 2) Compter selon une condition
n = 0
for x in tab:
    if x > 10:
        n += 1

# 3) Maximum
m = tab[0]
for x in tab:
    if x > m:
        m = x

# 4) Rechercher (indice ou -1)
for i in range(len(tab)):
    if tab[i] == cible:
        return i
return -1</code></pre>`,
  },
  {
    titre: "Filtrer et trier une table",
    html: `
      <p><strong>Filtrer</strong> (garder certaines lignes) = compréhension avec condition :</p>
      <pre><code>uk = [l for l in table if l["pays"] == "UK"]</code></pre>
      <p><strong>Trier</strong> selon une colonne = <code>sorted</code> avec <code>key</code> :</p>
      <pre><code>sorted(table, key=lambda l: l["note"], reverse=True)</code></pre>
      <p class="note">Piège : les valeurs lues d'un CSV sont des <em>chaînes</em>. Convertir avec <code>int(...)</code> avant de comparer/calculer des nombres : <code>key=lambda l: int(l["note"])</code>.</p>`,
  },
  {
    titre: "Conduire un projet en équipe (méthode)",
    html: `
      <p>Un projet informatique ne se code pas « d'un coup ». On avance par <strong>étapes</strong> :</p>
      <ol>
        <li><strong>Analyser le besoin</strong> — écrire un mini <em>cahier des charges</em> : que doit faire le programme ? avec quelles entrées/sorties ?</li>
        <li><strong>Concevoir</strong> — découper en sous-problèmes, écrire les <em>algorithmes</em> (sur papier) avant de coder.</li>
        <li><strong>Coder</strong> — petit à petit, une fonction à la fois.</li>
        <li><strong>Tester &amp; déboguer</strong> — vérifier sur des exemples, y compris les cas limites.</li>
        <li><strong>Présenter / livrer</strong> — montrer une version qui marche, expliquer ses choix.</li>
      </ol>
      <p class="note">⚠️ Piège classique : un cahier des charges est souvent <strong>vague</strong>. Posez des questions, précisez les cas (« et si l'utilisateur tape une lettre au lieu d'un nombre ? ») <em>avant</em> de coder.</p>
      <p><strong>En équipe (îlot) :</strong> répartissez les rôles, synchronisez-vous souvent (un tableau « à faire / en cours / fait » aide), et intégrez vos morceaux régulièrement.</p>
      <p class="note">⭐ Ouverture : les pros utilisent des <em>méthodes</em> — <strong>cascade</strong> et <strong>cycle en V</strong> (tout planifier d'avance) ou <strong>agile</strong> (avancer par petites versions qui marchent, en s'adaptant). En classe, l'agile est souvent le plus adapté.</p>`,
  },
];

/* ---------------- Évaluations (DS / TP notés) ---------------- */
/* enonce = sujet élève (html) ; corrige = corrigé réservé au prof (html). */
const EVALUATIONS = [
  {
    id: "ds-langages",
    titre: "DS n°1 — Langages et programmation",
    type: "DS", themeId: "langages-prog",
    duree: "55 min", total: 20,
    enonce: `
      <p><em>Calculatrice et documents interdits. Le code peut être écrit au stylo.</em></p>
      <h4>Exercice 1 — Variables et types (4 pts)</h4>
      <p>On exécute : <code>x = 7</code> ; <code>x = x * 2</code> ; <code>x = x - 1</code>.</p>
      <ol type="a">
        <li>Que vaut <code>x</code> à la fin ? (1 pt)</li>
        <li>Quel est le type de <code>x</code> ? de <code>"NSI"</code> ? de <code>3.5</code> ? de <code>True</code> ? (2 pts)</li>
        <li>Que renvoie <code>"3" + "4"</code> ? Pourquoi est-ce différent de <code>3 + 4</code> ? (1 pt)</li>
      </ol>
      <h4>Exercice 2 — Conditions (4 pts)</h4>
      <p>Écrire une fonction <code>signe(n)</code> qui renvoie <code>"positif"</code>, <code>"négatif"</code> ou <code>"nul"</code>.</p>
      <h4>Exercice 3 — Boucles (6 pts)</h4>
      <ol type="a">
        <li>Écrire une fonction <code>somme_pairs(n)</code> qui renvoie la somme des entiers pairs de 0 à n inclus. (3 pts)</li>
        <li>Que renvoie <code>somme_pairs(10)</code> ? (1 pt)</li>
        <li>Avec une boucle <code>while</code>, écrire <code>nb_chiffres(n)</code> qui renvoie le nombre de chiffres d'un entier positif. (2 pts)</li>
      </ol>
      <h4>Exercice 4 — Fonctions et tests (6 pts)</h4>
      <p>On donne <code>def aire_rectangle(L, l): return L * l</code>.</p>
      <ol type="a">
        <li>Écrire sa docstring et 2 tests <code>assert</code>. (3 pts)</li>
        <li>Différence entre <code>return</code> et <code>print</code> ? (1 pt)</li>
        <li>Citer les 3 types d'erreurs (syntaxe, exécution, logique) avec un exemple chacun. (2 pts)</li>
      </ol>`,
    corrige: `
      <h4>Ex 1</h4><p>a) 13. b) <code>int</code>, <code>str</code>, <code>float</code>, <code>bool</code>. c) <code>"34"</code> (concaténation de chaînes) ≠ <code>7</code> (addition de nombres).</p>
      <h4>Ex 2</h4><pre><code>def signe(n):
    if n > 0: return "positif"
    elif n < 0: return "négatif"
    else: return "nul"</code></pre>
      <h4>Ex 3</h4><pre><code>def somme_pairs(n):
    total = 0
    for k in range(0, n + 1, 2):
        total += k
    return total
# somme_pairs(10) = 0+2+4+6+8+10 = 30
def nb_chiffres(n):
    c = 0
    while n > 0:
        n = n // 10
        c += 1
    return c</code></pre>
      <p>b) 30.</p>
      <h4>Ex 4</h4><pre><code>def aire_rectangle(L, l):
    """Renvoie l'aire d'un rectangle (L et l > 0)."""
    return L * l
assert aire_rectangle(3, 4) == 12
assert aire_rectangle(5, 1) == 5</code></pre>
      <p>b) <code>return</code> renvoie une valeur réutilisable ; <code>print</code> ne fait qu'afficher.<br>
      c) Syntaxe (oubli de <code>:</code>) ; exécution (division par zéro) ; logique (résultat faux, ex. <code>range(n)</code> au lieu de <code>range(n+1)</code>).</p>`,
  },
  {
    id: "ds-donnees-base",
    titre: "DS n°2 — Représentation des données",
    type: "DS", themeId: "donnees-base",
    duree: "55 min", total: 20,
    enonce: `
      <h4>Exercice 1 — Bits et conversions (8 pts)</h4>
      <ol type="a">
        <li>Combien de valeurs sur 6 bits ? sur 1 octet ? (2 pts)</li>
        <li>Convertir <code>1011 0010</code> en décimal. (2 pts)</li>
        <li>Convertir 100 en binaire (montrer les divisions). (2 pts)</li>
        <li>Convertir <code>B7</code> (hexa) en décimal, puis en binaire. (2 pts)</li>
      </ol>
      <h4>Exercice 2 — Entiers et débordement (4 pts)</h4>
      <ol type="a">
        <li>Quelle plage d'entiers couvre le complément à deux sur 8 bits ? (1 pt)</li>
        <li>Sur un octet non signé (0..255), que donne <code>250 + 10</code> ? Pourquoi ? (3 pts)</li>
      </ol>
      <h4>Exercice 3 — Flottants (4 pts)</h4>
      <p>Pourquoi <code>0.1 + 0.2 == 0.3</code> renvoie-t-il <code>False</code> ? Comment comparer correctement deux flottants ?</p>
      <h4>Exercice 4 — Caractères et booléens (4 pts)</h4>
      <ol type="a">
        <li>Le code de <code>'A'</code> est 65. Que vaut <code>chr(67)</code> ? (1 pt)</li>
        <li>Compléter la table de vérité de <code>a and b</code> et <code>a or b</code>. (3 pts)</li>
      </ol>`,
    corrige: `
      <h4>Ex 1</h4><p>a) 2⁶ = 64 ; 2⁸ = 256. b) 128+32+16+2 = <strong>178</strong>. c) 100 → 1100100 (restes : 0,0,1,0,0,1,1). d) B7 = 11×16+7 = <strong>183</strong> = <code>1011 0111</code>.</p>
      <h4>Ex 2</h4><p>a) −128 à +127. b) 260 % 256 = <strong>4</strong> : débordement, le compteur « tourne » (8 bits ne peuvent pas coder 256+).</p>
      <h4>Ex 3</h4><p>Les flottants sont des approximations : 0.1 et 0.2 n'ont pas d'écriture binaire exacte, leur somme vaut 0.3000…04. On compare avec une tolérance : <code>abs(a-b) &lt; 1e-9</code>.</p>
      <h4>Ex 4</h4><p>a) <code>'C'</code>. b) and : F sauf si a=b=V. or : V sauf si a=b=F.</p>`,
  },
  {
    id: "tp-tables",
    titre: "TP noté — Traitement de données en tables",
    type: "TP", themeId: "donnees-tables",
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>À réaliser sur ordinateur (Capytale/Thonny conseillé). Rendre le fichier <code>.py</code>.</em></p>
      <p>On dispose de la table (déjà fournie dans le fichier de départ) :</p>
      <pre><code>eleves = [
    {"nom": "Ada",  "classe": "1NSI", "note": 17},
    {"nom": "Tim",  "classe": "1G2",  "note": 12},
    {"nom": "Lou",  "classe": "1NSI", "note": 9},
    {"nom": "Eve",  "classe": "1NSI", "note": 18},
    {"nom": "Sam",  "classe": "1G2",  "note": 14},
]</code></pre>
      <ol>
        <li>Afficher le nombre d'élèves et la liste des colonnes. (3 pts)</li>
        <li>Afficher les noms des élèves de <code>1NSI</code>. (4 pts)</li>
        <li>Calculer et afficher la note moyenne de la classe. (4 pts)</li>
        <li>Afficher le classement des élèves par note décroissante (nom + note). (4 pts)</li>
        <li>Combien d'élèves ont la moyenne (≥ 10) ? (2 pts)</li>
        <li>Bonus : afficher le nom de l'élève ayant la meilleure note. (3 pts)</li>
      </ol>`,
    corrige: `
      <pre><code>print(len(eleves), list(eleves[0].keys()))                 # 1
nsi = [e for e in eleves if e["classe"] == "1NSI"]          # 2
print([e["nom"] for e in nsi])
notes = [e["note"] for e in eleves]                          # 3
print("moyenne :", round(sum(notes) / len(notes), 2))        # 14.0
for e in sorted(eleves, key=lambda e: e["note"], reverse=True):  # 4
    print(e["nom"], e["note"])
print("reçus :", len([e for e in eleves if e["note"] >= 10])) # 5  -> 4
print("major :", max(eleves, key=lambda e: e["note"])["nom"]) # bonus -> Eve</code></pre>
      <p>Barème : pénaliser l'oubli de <code>int()</code> si données sous forme de chaînes ; valoriser le bon usage de <code>key</code>/compréhension.</p>`,
  },
  {
    id: "ds-algo",
    titre: "DS n°4 — Algorithmique",
    type: "DS", themeId: "algorithmique",
    duree: "1 h", total: 20,
    enonce: `
      <h4>Exercice 1 — Parcours (5 pts)</h4>
      <p>Écrire <code>compte(tab, x)</code> qui renvoie le nombre d'occurrences de <code>x</code> dans la liste <code>tab</code>.</p>
      <h4>Exercice 2 — Dichotomie (7 pts)</h4>
      <ol type="a">
        <li>Quelle condition le tableau doit-il vérifier ? (1 pt)</li>
        <li>On cherche 38 dans <code>[2,5,8,12,16,23,38,56,72,91]</code>. Donner les indices « milieu » testés successivement. (3 pts)</li>
        <li>Pour 1 000 000 d'éléments, combien d'étapes environ ? Justifier. (3 pts)</li>
      </ol>
      <h4>Exercice 3 — Tris et coût (5 pts)</h4>
      <ol type="a">
        <li>Décrire en français le principe du tri par sélection. (2 pts)</li>
        <li>Quel est son coût (complexité) ? Et celui de la dichotomie ? (2 pts)</li>
        <li>Citer un algorithme en O(1). (1 pt)</li>
      </ol>
      <h4>Exercice 4 — Glouton & terminaison (3 pts)</h4>
      <ol type="a">
        <li>Le rendu de monnaie glouton est-il toujours optimal ? (1 pt)</li>
        <li>Donner un variant prouvant que <code>while n &gt; 1: n = n // 2</code> se termine. (2 pts)</li>
      </ol>`,
    corrige: `
      <h4>Ex 1</h4><pre><code>def compte(tab, x):
    n = 0
    for e in tab:
        if e == x:
            n += 1
    return n</code></pre>
      <h4>Ex 2</h4><p>a) trié. b) milieu 4 (16) → 38&gt;16 droite ; milieu 7 (56) → 38&lt;56 gauche ; milieu 5 (23) → 38&gt;23 ; milieu 6 (38) trouvé. c) ≈ 20, car on divise par 2 à chaque étape (log₂(10⁶) ≈ 20).</p>
      <h4>Ex 3</h4><p>a) On place successivement le plus petit élément restant. b) Tri sélection O(n²) ; dichotomie O(log n). c) Accès <code>tab[i]</code>.</p>
      <h4>Ex 4</h4><p>a) Non (ex. système [1,3,4] pour 6). b) <code>n</code> : entier &gt; 0 qui décroît strictement à chaque tour.</p>`,
  },
  {
    id: "tp-pratique",
    titre: "TP « épreuve pratique blanche » — programmation",
    type: "pratique", themeId: null,
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Format inspiré de l'épreuve pratique (qui aura lieu en Terminale). Sur ordinateur, vrai Python.
      Chaque fonction doit passer ses tests <code>assert</code>.</em></p>
      <h4>Exercice A — Programmation (10 pts)</h4>
      <p>Écrire <code>maximum(tab)</code> qui renvoie le plus grand élément d'une liste non vide, <strong>sans</strong> utiliser <code>max</code>.</p>
      <pre><code>assert maximum([3, 9, 2, 15, 7]) == 15
assert maximum([-1, -4, -2]) == -1</code></pre>
      <h4>Exercice B — Mise au point (10 pts)</h4>
      <p>Le programme suivant doit renvoyer la moyenne d'une liste de notes, mais il contient <strong>deux erreurs</strong>. Les trouver et corriger.</p>
      <pre><code>def moyenne(notes)
    total = 0
    for i in range(len(notes)):
        total = notes[i]
    return total / len(notes)</code></pre>`,
    corrige: `
      <h4>A</h4><pre><code>def maximum(tab):
    m = tab[0]
    for x in tab:
        if x > m:
            m = x
    return m</code></pre>
      <h4>B</h4><p>Erreur 1 : il manque <code>:</code> après <code>def moyenne(notes)</code> (SyntaxError).<br>
      Erreur 2 : <code>total = notes[i]</code> écrase au lieu d'accumuler → <code>total += notes[i]</code> (erreur de logique).</p>
      <pre><code>def moyenne(notes):
    total = 0
    for i in range(len(notes)):
        total += notes[i]
    return total / len(notes)</code></pre>`,
  },

  {
    id: "ds-histoire",
    titre: "DS — Histoire de l'informatique",
    type: "DS", themeId: "histoire-informatique",
    duree: "40 min", total: 20,
    enonce: `
      <h4>Exercice 1 — Chronologie (8 pts)</h4>
      <p>Classer du plus ancien au plus récent : <em>le World Wide Web, la Pascaline, le transistor, la machine de Turing, le microprocesseur</em>. (5 pts)</p>
      <p>Donner l'année approximative de deux d'entre eux. (3 pts)</p>
      <h4>Exercice 2 — Figures et apports (6 pts)</h4>
      <p>Associer chaque personne à son apport : <em>Ada Lovelace, Alan Turing, George Boole, Tim Berners-Lee, John von Neumann, Joseph Marie Jacquard</em>.</p>
      <h4>Exercice 3 — Questions de cours (6 pts)</h4>
      <ol type="a">
        <li>Quelle différence entre <strong>Internet</strong> et le <strong>Web</strong> ? (2 pts)</li>
        <li>Que dit la <strong>loi de Moore</strong> ? (2 pts)</li>
        <li>Citer une notion d'un autre thème (binaire, algorithme, Web…) et son origine historique. (2 pts)</li>
      </ol>`,
    corrige: `
      <h4>Ex 1</h4><p>Pascaline (1642) → machine de Turing (1936) → transistor (1947) → microprocesseur (1971) → Web (1989).</p>
      <h4>Ex 2</h4><p>Lovelace : 1er algorithme (1843). Turing : modèle théorique du calcul (1936). Boole : algèbre logique (1854). Berners-Lee : invention du Web (1989). Von Neumann : architecture à programme enregistré (1945). Jacquard : métier à cartes perforées (1801).</p>
      <h4>Ex 3</h4><p>a) Internet = le réseau physique (machines reliées, TCP/IP) ; le Web = un service qui circule sur Internet (pages HTML, HTTP). b) Le nombre de transistors par puce double environ tous les deux ans. c) Ex. : binaire → Leibniz ; « algorithme » → Al-Khwârizmî ; Web → Berners-Lee.</p>`,
  },

  {
    id: "tp-donnees-base",
    titre: "TP noté — Représentation des données",
    type: "TP", themeId: "donnees-base",
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Sur ordinateur (Capytale/Thonny). Rendre le fichier .py. Chaque fonction doit passer ses tests.</em></p>
      <ol>
        <li>Écrire <code>bin_vers_dec(chaine)</code> qui convertit une chaîne binaire en entier (ex. <code>"1101"</code> → 13). (5 pts)</li>
        <li>Écrire <code>dec_vers_bin(n)</code> qui convertit un entier en chaîne binaire (divisions successives). (6 pts)</li>
        <li>Écrire <code>hexa_vers_dec(chaine)</code> (ex. <code>"2A"</code> → 42). (5 pts)</li>
        <li>Bonus : <code>decode_ascii(codes)</code> qui transforme <code>[78, 83, 73]</code> en <code>"NSI"</code>. (4 pts)</li>
      </ol>`,
    corrige: `
      <pre><code>def bin_vers_dec(chaine):
    total = 0
    for bit in chaine:
        total = total * 2 + int(bit)
    return total
assert bin_vers_dec("1101") == 13

def dec_vers_bin(n):
    if n == 0:
        return "0"
    b = ""
    while n > 0:
        b = str(n % 2) + b
        n //= 2
    return b
assert dec_vers_bin(13) == "1101"

def hexa_vers_dec(chaine):
    chiffres = "0123456789ABCDEF"
    total = 0
    for c in chaine.upper():
        total = total * 16 + chiffres.index(c)
    return total
assert hexa_vers_dec("2A") == 42

def decode_ascii(codes):
    return "".join(chr(c) for c in codes)
assert decode_ascii([78, 83, 73]) == "NSI"
print("OK")</code></pre>`,
  },

  {
    id: "ds-types-construits",
    titre: "DS — Types construits",
    type: "DS", themeId: "types-construits",
    duree: "50 min", total: 20,
    enonce: `
      <h4>Exercice 1 — Listes (6 pts)</h4>
      <p>Soit <code>t = [10, 20, 30, 40, 50]</code>.</p>
      <ol type="a">
        <li>Que valent <code>t[0]</code>, <code>t[-1]</code>, <code>len(t)</code>, <code>t[1:3]</code> ? (4 pts)</li>
        <li>Que vaut <code>t</code> après <code>t.append(60)</code> puis <code>t[0] = 5</code> ? (2 pts)</li>
      </ol>
      <h4>Exercice 2 — Compréhension (4 pts)</h4>
      <p>Donner le contenu de <code>[n*n for n in range(1,6) if n % 2 == 1]</code>.</p>
      <h4>Exercice 3 — Dictionnaire (5 pts)</h4>
      <p>On a <code>e = {"nom": "Ada", "moyenne": 14}</code>. Écrire les instructions pour : (a) lire la moyenne ; (b) ajouter la clé <code>"classe"</code> = <code>"1NSI"</code> ; (c) tester si la clé <code>"age"</code> existe.</p>
      <h4>Exercice 4 — Matrice (5 pts)</h4>
      <p>Soit <code>m = [[1,2,3],[4,5,6]]</code>. (a) Que vaut <code>m[1][2]</code> ? (b) Écrire la double boucle qui affiche tous les éléments. (c) Pourquoi éviter <code>[[0]*3]*2</code> ?</p>`,
    corrige: `
      <h4>Ex 1</h4><p>a) 10 ; 50 ; 5 ; <code>[20, 30]</code>. b) <code>[5, 20, 30, 40, 50, 60]</code>.</p>
      <h4>Ex 2</h4><p>n impairs de 1 à 5 : 1, 3, 5 → carrés <code>[1, 9, 25]</code>.</p>
      <h4>Ex 3</h4><pre><code>e["moyenne"]            # a) 14
e["classe"] = "1NSI"    # b)
"age" in e              # c) False</code></pre>
      <h4>Ex 4</h4><p>a) 6. b) <code>for ligne in m: for v in ligne: print(v)</code>. c) <code>[[0]*3]*2</code> crée deux <em>alias</em> de la même ligne (modifier l'une modifie l'autre) ; utiliser une compréhension.</p>`,
  },

  {
    id: "tp-types-construits",
    titre: "TP noté — Types construits",
    type: "TP", themeId: "types-construits",
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Sur ordinateur. On part de :</em></p>
      <pre><code>notes = [12, 8, 15, 17, 6, 14, 11]</code></pre>
      <ol>
        <li>Afficher la plus grande et la plus petite note (sans <code>max</code>/<code>min</code>). (5 pts)</li>
        <li>Calculer la moyenne. (4 pts)</li>
        <li>Construire, par compréhension, la liste des notes ≥ 10. (4 pts)</li>
        <li>Construire un dictionnaire <code>{"reçus": …, "recalés": …}</code> comptant les notes ≥ 10 et &lt; 10. (4 pts)</li>
        <li>Bonus : nombre d'occurrences de chaque note (dictionnaire). (3 pts)</li>
      </ol>`,
    corrige: `
      <pre><code>notes = [12, 8, 15, 17, 6, 14, 11]
maxi = mini = notes[0]                      # 1
for x in notes:
    if x > maxi: maxi = x
    if x < mini: mini = x
print(maxi, mini)                           # 17 6
print(sum(notes) / len(notes))              # 2  -> 11.857...
recus = [x for x in notes if x >= 10]       # 3
bilan = {"reçus": len(recus),               # 4
         "recalés": len(notes) - len(recus)}
print(bilan)                                # {'reçus': 5, 'recalés': 2}
occ = {}                                     # bonus
for x in notes:
    occ[x] = occ.get(x, 0) + 1
print(occ)</code></pre>`,
  },

  {
    id: "ds-donnees-tables",
    titre: "DS — Traitement de données en tables",
    type: "DS", themeId: "donnees-tables",
    duree: "50 min", total: 20,
    enonce: `
      <h4>Exercice 1 — Vocabulaire (4 pts)</h4>
      <p>Définir : <strong>enregistrement</strong>, <strong>descripteur</strong>. Comment représente-t-on une table en Python ?</p>
      <h4>Exercice 2 — CSV (4 pts)</h4>
      <p>On lit une colonne <code>"age"</code> d'un CSV : la valeur est <code>"15"</code>. Peut-on écrire <code>age + 1</code> ? Sinon, que faire ? Pourquoi ?</p>
      <h4>Exercice 3 — Filtrer / trier (8 pts)</h4>
      <p>Soit la table <code>t</code> (lignes = dictionnaires avec clés <code>nom</code>, <code>note</code>). Écrire :</p>
      <ol type="a">
        <li>la liste des lignes dont la note ≥ 10 ; (3 pts)</li>
        <li>la table triée par note décroissante ; (3 pts)</li>
        <li>la note moyenne. (2 pts)</li>
      </ol>
      <h4>Exercice 4 — Jointure (4 pts)</h4>
      <p>Expliquer ce qu'est une jointure et donner un exemple (deux tables, une colonne commune).</p>`,
    corrige: `
      <h4>Ex 1</h4><p>Enregistrement = une ligne (une fiche). Descripteur = un nom de colonne. Table = liste de dictionnaires.</p>
      <h4>Ex 2</h4><p>Non : <code>"15"</code> est une chaîne. Il faut convertir : <code>int(age) + 1</code>. Les valeurs lues d'un CSV sont toujours des chaînes.</p>
      <h4>Ex 3</h4><pre><code>[l for l in t if l["note"] >= 10]                       # a
sorted(t, key=lambda l: l["note"], reverse=True)        # b
sum(l["note"] for l in t) / len(t)                      # c</code></pre>
      <h4>Ex 4</h4><p>Combiner deux tables partageant une colonne commune (clé). Ex. : table élèves {nom, classe} + dictionnaire {classe → prof} → on ajoute le prof à chaque élève.</p>`,
  },

  {
    id: "ds-ihm-web",
    titre: "DS — Interactions homme-machine sur le Web",
    type: "DS", themeId: "ihm-web",
    duree: "45 min", total: 20,
    enonce: `
      <h4>Exercice 1 — Les trois langages (6 pts)</h4>
      <p>Pour chaque rôle, indiquer HTML, CSS ou JavaScript : (a) structurer le contenu ; (b) mettre en couleur ; (c) réagir à un clic. Donner un exemple de code pour chacun.</p>
      <h4>Exercice 2 — Sélecteurs CSS (4 pts)</h4>
      <p>Que ciblent <code>p</code>, <code>.menu</code> et <code>#titre</code> ? Donner le HTML associé à <code>.menu</code>.</p>
      <h4>Exercice 3 — HTTP (6 pts)</h4>
      <ol type="a">
        <li>Différence entre GET et POST ? (2 pts)</li>
        <li>Pour un mot de passe, laquelle choisir ? Pourquoi ? (2 pts)</li>
        <li>Combien de paramètres dans <code>recherche?q=robot&amp;tri=note</code> ? Les nommer. (2 pts)</li>
      </ol>
      <h4>Exercice 4 — Client / serveur (4 pts)</h4>
      <p>Une vérification de formulaire faite seulement en JavaScript suffit-elle pour la sécurité ? Justifier.</p>`,
    corrige: `
      <h4>Ex 1</h4><p>a) HTML (<code>&lt;p&gt;</code>) ; b) CSS (<code>color: red;</code>) ; c) JavaScript (<code>addEventListener("click", ...)</code>).</p>
      <h4>Ex 2</h4><p><code>p</code> : toutes les balises p. <code>.menu</code> : les éléments de classe menu (<code>&lt;div class="menu"&gt;</code>). <code>#titre</code> : l'unique élément d'identifiant titre.</p>
      <h4>Ex 3</h4><p>a) GET : données dans l'URL (visibles) ; POST : dans le corps. b) POST (le mot de passe ne doit pas apparaître dans l'URL). c) 2 paramètres : <code>q</code> et <code>tri</code>.</p>
      <h4>Ex 4</h4><p>Non : le JavaScript (côté client) peut être contourné/désactivé. La validation de sécurité se refait toujours côté serveur.</p>`,
  },

  {
    id: "tp-ihm-web",
    titre: "TP noté — Page web d'inscription",
    type: "TP", themeId: "ihm-web",
    duree: "1 h 30 sur poste", total: 20,
    enonce: `
      <p><em>À réaliser dans un fichier <code>.html</code> ouvert dans un navigateur (pas l'éditeur Python du site).</em></p>
      <ol>
        <li>Créer une page avec un titre <code>&lt;h1&gt;</code> et un formulaire : un champ <em>nom</em> et un bouton « S'inscrire ». (6 pts)</li>
        <li>Ajouter un peu de CSS (couleur de titre, centrage). (4 pts)</li>
        <li>En JavaScript, à l'envoi : si le nom est vide, afficher un message d'erreur ; sinon, un message de succès. (8 pts)</li>
        <li>Bonus : refuser aussi un nom de moins de 2 caractères. (2 pts)</li>
      </ol>`,
    corrige: `
      <pre><code>&lt;h1&gt;Club NSI&lt;/h1&gt;
&lt;style&gt; h1 { color: indigo; text-align: center; } &lt;/style&gt;
&lt;form id="f"&gt;
  &lt;input type="text" id="nom"&gt;
  &lt;button type="submit"&gt;S'inscrire&lt;/button&gt;
  &lt;p id="msg"&gt;&lt;/p&gt;
&lt;/form&gt;
&lt;script&gt;
  document.getElementById("f").addEventListener("submit", function (e) {
    e.preventDefault();
    const nom = document.getElementById("nom").value.trim();
    const msg = document.getElementById("msg");
    if (nom.length &lt; 2) { msg.textContent = "❌ Nom invalide."; }
    else { msg.textContent = "✅ Inscrit : " + nom; }
  });
&lt;/script&gt;</code></pre>
      <p>Critères : structure HTML correcte (6), CSS appliqué (4), <code>preventDefault</code> + test du champ (8), contrainte longueur (2).</p>`,
  },

  {
    id: "ds-architecture-os",
    titre: "DS — Architectures et systèmes d'exploitation",
    type: "DS", themeId: "architecture-os",
    duree: "50 min", total: 20,
    enonce: `
      <h4>Exercice 1 — Von Neumann (6 pts)</h4>
      <p>Citer les 4 composants. Lequel calcule ? Lequel décode les instructions ? Quelle est l'idée du « programme enregistré » ?</p>
      <h4>Exercice 2 — Portes logiques (4 pts)</h4>
      <p>Donner la table de vérité du demi-additionneur (somme et retenue) pour les 4 cas de (a, b).</p>
      <h4>Exercice 3 — Système de fichiers (5 pts)</h4>
      <p>Je suis dans <code>/home/ada/cours</code>. (a) Quel chemin relatif pour aller à <code>/home/ada/photos</code> ? (b) Que font <code>pwd</code>, <code>ls</code>, <code>cd ..</code> ?</p>
      <h4>Exercice 4 — Permissions (5 pts)</h4>
      <p>Traduire <code>rwxr-x---</code> en octal (r=4, w=2, x=1) et expliquer qui peut faire quoi.</p>`,
    corrige: `
      <h4>Ex 1</h4><p>UC, UAL, mémoire, E/S. L'UAL calcule ; l'UC décode. Programme enregistré : le programme est stocké en mémoire comme des données, donc la machine est universelle (on charge un nouveau programme sans recâbler).</p>
      <h4>Ex 2</h4><p>(0,0)→s0 r0 ; (0,1)→s1 r0 ; (1,0)→s1 r0 ; (1,1)→s0 r1. Somme = XOR, retenue = ET.</p>
      <h4>Ex 3</h4><p>a) <code>../photos</code>. b) pwd : afficher le dossier courant ; ls : lister son contenu ; cd .. : remonter au dossier parent.</p>
      <h4>Ex 4</h4><p>rwx=7, r-x=5, ---=0 → <strong>750</strong>. Propriétaire : tout ; groupe : lire + exécuter ; autres : rien.</p>`,
  },

  {
    id: "tp-architecture-os",
    titre: "TP noté — Permissions et portes logiques",
    type: "TP", themeId: "architecture-os",
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Sur ordinateur. Chaque fonction doit passer ses tests.</em></p>
      <ol>
        <li>Écrire <code>vers_octal(rwx)</code> qui convertit <code>"rwx"</code>→7, <code>"r-x"</code>→5, <code>"rw-"</code>→6. (6 pts)</li>
        <li>Écrire <code>octal_vers_droits(n)</code> qui fait l'inverse : 7→<code>"rwx"</code>, 5→<code>"r-x"</code>, 0→<code>"---"</code>. (8 pts)</li>
        <li>Écrire <code>demi_additionneur(a, b)</code> renvoyant (somme, retenue) avec les portes XOR et ET, et l'afficher pour les 4 cas. (6 pts)</li>
      </ol>`,
    corrige: `
      <pre><code>def vers_octal(rwx):
    val = {"r": 4, "w": 2, "x": 1}
    return sum(val.get(c, 0) for c in rwx)
assert vers_octal("rwx") == 7 and vers_octal("r-x") == 5

def octal_vers_droits(n):
    r = ""
    r += "r" if n >= 4 else "-"; n %= 4
    r += "w" if n >= 2 else "-"; n %= 2
    r += "x" if n >= 1 else "-"
    return r
assert octal_vers_droits(7) == "rwx" and octal_vers_droits(5) == "r-x"

def demi_additionneur(a, b):
    somme = (a or b) and not (a and b)   # XOR
    retenue = a and b                    # ET
    return int(somme), int(retenue)
for a in (0, 1):
    for b in (0, 1):
        print(a, b, demi_additionneur(a, b))</code></pre>`,
  },

  {
    id: "tp-langages",
    titre: "TP noté — Programmation",
    type: "TP", themeId: "langages-prog",
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Sur ordinateur. Chaque fonction doit passer ses tests <code>assert</code>.</em></p>
      <ol>
        <li><code>est_pair(n)</code> : True si n est pair. (3 pts)</li>
        <li><code>somme_pairs(n)</code> : somme des entiers pairs de 0 à n inclus. (5 pts)</li>
        <li><code>mention(note)</code> : "TB"≥16, "B"≥14, "AB"≥12, "P"≥10, sinon "I". (6 pts)</li>
        <li><code>nb_voyelles(mot)</code> : nombre de voyelles d'un mot (a, e, i, o, u, y). (6 pts)</li>
      </ol>
      <p>Pour chaque fonction, écrire au moins 2 tests <code>assert</code>.</p>`,
    corrige: `
      <pre><code>def est_pair(n):
    return n % 2 == 0
assert est_pair(4) and not est_pair(7)

def somme_pairs(n):
    return sum(k for k in range(0, n + 1) if k % 2 == 0)
assert somme_pairs(10) == 30

def mention(note):
    if note >= 16: return "TB"
    elif note >= 14: return "B"
    elif note >= 12: return "AB"
    elif note >= 10: return "P"
    return "I"
assert mention(18) == "TB" and mention(9) == "I"

def nb_voyelles(mot):
    return sum(1 for c in mot.lower() if c in "aeiouy")
assert nb_voyelles("NSI") == 1 and nb_voyelles("ordinateur") == 5
print("OK")</code></pre>`,
  },

  {
    id: "tp-algorithmique",
    titre: "TP noté — Algorithmique",
    type: "TP", themeId: "algorithmique",
    duree: "1 h sur poste", total: 20,
    enonce: `
      <p><em>Sur ordinateur. On compare deux recherches.</em></p>
      <ol>
        <li><code>recherche_seq(tab, cible)</code> : renvoie <code>(indice, nb_etapes)</code> (−1 si absent). (6 pts)</li>
        <li><code>dichotomie(tab, cible)</code> sur un tableau trié : renvoie <code>(indice, nb_etapes)</code>. (8 pts)</li>
        <li>Sur <code>list(range(0, 1000, 2))</code>, comparer le nombre d'étapes des deux pour chercher 998. (4 pts)</li>
        <li>Bonus : pour quelles tailles l'écart devient-il énorme ? Conclure (O(n) vs O(log n)). (2 pts)</li>
      </ol>`,
    corrige: `
      <pre><code>def recherche_seq(tab, cible):
    e = 0
    for i in range(len(tab)):
        e += 1
        if tab[i] == cible:
            return i, e
    return -1, e

def dichotomie(tab, cible):
    g, d, e = 0, len(tab) - 1, 0
    while g <= d:
        e += 1
        m = (g + d) // 2
        if tab[m] == cible: return m, e
        elif tab[m] < cible: g = m + 1
        else: d = m - 1
    return -1, e

tab = list(range(0, 1000, 2))   # 500 éléments triés
print(recherche_seq(tab, 998))  # (499, 500)  pire cas
print(dichotomie(tab, 998))     # (499, 9)     ~ log2(500)
# Conclusion : séquentiel ~ n (linéaire), dichotomie ~ log n.</code></pre>`,
  },
  {
    "id": "tp-reseaux",
    "titre": "TP noté — Réseaux : paquets et bit alterné",
    "type": "TP",
    "themeId": "reseaux",
    "duree": "45 min",
    "total": 20,
    "enonce": "<h3>Exercice 1 — Découpage et reconstruction (12 points)</h3><p>Ouvre le fichier <code>paquets.py</code> fourni. Complète <code>decouper(message, taille, src, dst)</code> (liste de paquets <code>{src, dst, num, data}</code> numérotés à partir de 0) puis <code>reconstituer(paquets)</code> (les paquets arrivent dans le désordre : trier par <code>num</code> puis recoller). Les vérifications du fichier doivent afficher « Tout est OK ».</p><h3>Exercice 2 — Dérouler le bit alterné (8 points)</h3><p>Un émetteur envoie 3 paquets P0, P1, P2 avec le protocole du bit alterné. Le paquet P1 est <strong>perdu une fois</strong>, tout le reste passe. Écris la chronologie complète de l'échange : chaque envoi avec son bit (0 ou 1), chaque ACK, le timeout et la retransmission. Précise à quel moment l'émetteur change son bit.</p>",
    "corrige": "<h3>Exercice 1</h3><p>Voir <code>paquets_corrige.py</code> (kit du thème) : boucle <code>range(0, len(message), taille)</code> avec compteur <code>num</code> ; reconstruction par <code>sorted(paquets, key=lambda p: p[\"num\"])</code> puis concaténation. Barème : découpage 6 pts (numérotation 2, tranches 2, dictionnaire complet 2) ; reconstruction 6 pts (tri 3, recollage 3).</p><h3>Exercice 2</h3><p>ENVOI P0 [bit 0] → ACK 0 reçu → bit passe à 1 · ENVOI P1 [bit 1] → PERDU → TIMEOUT → RETRANSMISSION P1 [bit 1] → ACK 1 reçu → bit passe à 0 · ENVOI P2 [bit 0] → ACK 0 reçu. Barème : alternance correcte 3 pts, timeout/retransmission 3 pts, changement de bit APRÈS le bon ACK 2 pts.</p>"
  },
];
