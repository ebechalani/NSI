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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>programme</strong> est une suite d'<strong>instructions précises et ordonnées</strong>, exécutées par la machine de haut en bas. La machine fait <strong>exactement</strong> ce qu'on écrit — ni plus, ni moins. Un <strong>langage de programmation</strong> est une langue <em>sans ambiguïté</em> inventée pour lui parler ; nous utiliserons <strong>Python</strong> (créé par Guido van Rossum en 1991).</p><p>Exemple déroulé à la main, sans machine — l'expérience du « prof-robot » : un îlot écrit la recette de la tartine, le professeur l'exécute <em>littéralement</em>. À la consigne « mets du beurre sur le pain », il pose la plaquette entière sur le pain. La consigne était claire pour un humain, pas pour un robot : il fallait écrire « 1. Ouvre la plaquette. 2. Prélève une noix de beurre avec le couteau. 3. Étale-la sur la face du dessus. » Leçon fondatrice : <strong>la machine fait ce qu'on dit, pas ce qu'on veut dire</strong>.</p><p><strong>🐢 Premiers programmes — pas à pas :</strong></p><pre><code>print(\"Bonjour !\")        # affiche Bonjour !\nprint(3 * 7)              # affiche 21\nprint(\"3 * 7\")            # affiche 3 * 7</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>print(...)</code> demande à Python d'<strong>afficher</strong> ce qui est entre parenthèses ;</li><li>avec des <strong>guillemets</strong>, c'est du <strong>texte</strong>, recopié tel quel ; sans guillemets, <code>3 * 7</code> est un <strong>calcul</strong>, effectué avant l'affichage (<code>*</code> est la multiplication) ;</li><li>si l'on écrit mal, Python répond par un <strong>message d'erreur</strong> : ce n'est pas une punition, c'est la machine qui explique ce qu'elle n'a pas compris.</li></ul><table><tr><th>On tape…</th><th>Python répond</th><th>Traduction</th></tr><tr><td><code>print(\"Bonjour\"</code></td><td><code>SyntaxError</code></td><td>« phrase mal formée » (parenthèse fermante oubliée)</td></tr><tr><td><code>Print(\"Bonjour\")</code></td><td><code>NameError</code></td><td>« je ne connais pas le mot <code>Print</code> » (majuscule interdite)</td></tr></table><p><strong>Les variables — une boîte qui se souvient :</strong> une <strong>variable</strong> est un nom collé sur une valeur, comme une étiquette sur une boîte. Le signe <code>=</code> n'est <strong>pas</strong> l'égalité des maths : il signifie « <strong>reçoit la valeur</strong> », autrement dit « range dans la boîte ». On lit toujours la <strong>droite</strong> d'abord, puis on range le résultat dans la variable de <strong>gauche</strong> : c'est pourquoi <code>x = x + 3</code>, absurde en maths, est normal en Python.</p><p><strong>📋 Trace d'exécution :</strong> suivi de la valeur de <code>x</code>, instruction par instruction (l'exercice de l'ardoise) :</p><table><tr><th>Instruction</th><th>On calcule (la droite)</th><th>x vaut</th></tr><tr><td><code>x = 5</code></td><td>—</td><td>5</td></tr><tr><td><code>x = x + 3</code></td><td>5 + 3 = 8</td><td>8</td></tr><tr><td><code>x = x * 2</code></td><td>8 * 2 = 16</td><td>16</td></tr></table><pre><code>x = 5\nx = x + 3\nx = x * 2\nprint(x)       # affiche 16</code></pre><p><strong>🎯 Défi élève :</strong> compléter les trois trous pour obtenir exactement les affichages annoncés.</p><pre><code>______(\"Bonjour !\")     # doit afficher Bonjour !\nprint(3 ______ 7)       # doit afficher 21\nx = 5\nx = x + ______\nprint(x)                # doit afficher 8</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>print(\"Bonjour !\")     # affiche Bonjour !\nprint(3 * 7)           # affiche 21\nx = 5\nx = x + 3\nprint(x)               # affiche 8</code></pre><ul><li>La machine exécute <strong>exactement</strong> ce qui est écrit, dans l'ordre, de haut en bas.</li><li><code>=</code> se lit « reçoit la valeur » (range dans la boîte), jamais « est égal à ».</li><li>Un message d'erreur (<code>SyntaxError</code>, <code>NameError</code>) est une <strong>aide</strong> : on le lit, il indique la ligne fautive.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Une variable est une boîte étiquetée, mais toutes les boîtes ne contiennent pas la même <em>sorte</em> de valeur : chaque valeur possède un <strong>type</strong>, et c'est le type qui décide du sens des opérations. Pari à faire à la main, avant la machine : que valent <code>3 + 4</code> et <code>\"3\" + \"4\"</code> ? Pour des <strong>nombres</strong>, <code>+</code> additionne : 3 + 4 = 7. Pour du <strong>texte</strong> (les guillemets !), <code>+</code> <em>colle</em> les deux chaînes bout à bout : « 3 » collé à « 4 » donne « 34 ». Même signe, deux sens différents : c'est le type qui tranche.</p><p>Les 4 types de base :</p><table><tr><th>Type</th><th>Exemple</th><th>Sert à…</th></tr><tr><td><code>int</code></td><td><code>15</code></td><td>nombres entiers</td></tr><tr><td><code>float</code></td><td><code>1.72</code></td><td>nombres à virgule (un point remplace la virgule)</td></tr><tr><td><code>str</code></td><td><code>\"Ada\"</code></td><td>chaînes de caractères (texte, entre guillemets)</td></tr><tr><td><code>bool</code></td><td><code>True</code></td><td>vrai / faux</td></tr></table><p><strong>🐢 Première méthode — demander son type à Python :</strong></p><pre><code>age = 15            # int\ntaille = 1.72       # float\nnom = \"Ada\"         # str\nmajeur = False      # bool\n\nprint(type(age))    # affiche &lt;class 'int'&gt;\nprint(type(nom))    # affiche &lt;class 'str'&gt;\nprint(\"3\" + \"4\")    # affiche 34\nprint(3 + 4)        # affiche 7</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Python devine le type tout seul d'après la valeur affectée (<strong>typage dynamique</strong>) ; <code>type()</code> permet de l'interroger ;</li><li><code>\"15\"</code> (texte) n'est pas <code>15</code> (nombre) : les guillemets changent tout ;</li><li>la division <code>/</code> donne toujours un <code>float</code> ; <code>//</code> donne le quotient entier et <code>%</code> le reste.</li></ul><p><strong>📋 Trace d'exécution :</strong> valeurs et types prédits à la main, puis vérifiés sur machine :</p><table><tr><th>Expression</th><th>Valeur</th><th>Type</th></tr><tr><td><code>3 + 4</code></td><td><code>7</code></td><td><code>int</code></td></tr><tr><td><code>\"3\" + \"4\"</code></td><td><code>\"34\"</code></td><td><code>str</code></td></tr><tr><td><code>17 / 5</code></td><td><code>3.4</code></td><td><code>float</code></td></tr><tr><td><code>17 // 5</code></td><td><code>3</code></td><td><code>int</code></td></tr><tr><td><code>17 % 5</code></td><td><code>2</code></td><td><code>int</code></td></tr></table><p><strong>Découverte — un programme qui décide :</strong> le jeu de la règle cachée (« si la note est supérieure ou égale à 10, je dis Reçu, sinon Raté ») s'écrit pour la machine avec <code>if</code> (si) / <code>else</code> (sinon). Le test <code>note &gt;= 10</code> est une question dont la réponse est un <strong>booléen</strong> : <code>True</code> ou <code>False</code>.</p><pre><code>note = 12\nif note &gt;= 10:\n    print(\"Reçu\")      # exécuté seulement si le test vaut True\nelse:\n    print(\"Raté\")\n# affiche Reçu</code></pre><p><strong>🎯 Défi élève :</strong> la calculatrice de moyenne (compléter les trois trous).</p><pre><code>note1, note2, note3 = 15, 12, 18\nmoyenne = (note1 + note2 + note3) ______ 3\nprint(\"Moyenne :\", moyenne)      # doit afficher Moyenne : 15.0\nprint(\"Meilleure :\", ______(note1, note2, note3))\nprint(______(moyenne))           # doit afficher &lt;class 'float'&gt;</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>note1, note2, note3 = 15, 12, 18\nmoyenne = (note1 + note2 + note3) / 3\nprint(\"Moyenne :\", moyenne)      # affiche Moyenne : 15.0\nprint(\"Meilleure :\", max(note1, note2, note3))   # affiche Meilleure : 18\nprint(type(moyenne))             # affiche &lt;class 'float'&gt;</code></pre><ul><li><code>\"3\" + \"4\"</code> donne <code>34</code> : sur du texte, <code>+</code> colle (concaténation), il n'additionne pas.</li><li>La division <code>/</code> renvoie toujours un <code>float</code> — d'où <code>15.0</code> et non <code>15</code>.</li><li><code>True</code> et <code>False</code> s'écrivent avec une majuscule et sans guillemets : ce sont des booléens, pas du texte.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Une <strong>instruction conditionnelle</strong> permet à un programme de <strong>choisir</strong> un chemin : exécuter un bloc <em>seulement si</em> un test est vrai. Le test est une expression <strong>booléenne</strong> : elle vaut <code>True</code> ou <code>False</code>. En Python : <code>if</code> (si) / <code>elif</code> (sinon si) / <code>else</code> (sinon).</p><p>Exemple déroulé à la main, sans code — attribuer la mention d'une note de 13 (Très bien ≥ 16, Bien ≥ 14, Assez bien ≥ 12, Passable ≥ 10, sinon Insuffisant) : 13 ≥ 16 ? non. 13 ≥ 14 ? non. 13 ≥ 12 ? <strong>oui → « Assez bien », et on s'arrête là</strong> : les seuils suivants ne sont même pas regardés. C'est le principe de la cascade : on teste <strong>dans l'ordre</strong> et on s'arrête à la <strong>première condition vraie</strong>. D'où le débranché « trier les humains » : si l'on teste ≥ 14 <em>avant</em> ≥ 16, un élève à 17 se range dans la zone « Bien » à tort — <strong>l'ordre des conditions compte</strong> (du seuil le plus haut au plus bas).</p><p>Les opérateurs de comparaison renvoient un booléen :</p><table><tr><th>Opérateur</th><td><code>==</code></td><td><code>!=</code></td><td><code>&lt;</code></td><td><code>&gt;</code></td><td><code>&lt;=</code></td><td><code>&gt;=</code></td></tr><tr><th>Sens</th><td>égal</td><td>différent</td><td>inférieur</td><td>supérieur</td><td>inf. ou égal</td><td>sup. ou égal</td></tr></table><p><strong>🐢 Première méthode — if / else simple :</strong></p><pre><code>note = 8        # changer la valeur et relancer\nif note &gt;= 10:\n    print(\"Admis(e)\")      # 4 espaces — obligatoire !\nelse:\n    print(\"Ajourné(e)\")\n# affiche Ajourné(e)</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>la ligne du <code>if</code> se termine par un <strong>deux-points</strong> <code>:</code> ;</li><li>le bloc est décalé de <strong>4 espaces</strong> : cette <strong>indentation</strong> est obligatoire, c'est elle qui dit « la phrase appartient au si » ; un décalage manquant provoque une <code>IndentationError</code> ;</li><li>attention : <code>=</code> affecte (range dans la boîte), <code>==</code> compare (pose la question « est-ce égal ? »).</li></ul><p><strong>⚡ Méthode plus efficace — la cascade if/elif/else :</strong> pour les 5 mentions, plutôt que d'empiler des <code>if</code> indépendants (qui seraient tous testés, avec des conditions à double borne), on enchaîne des <code>elif</code> : dès qu'une condition est vraie, Python ignore toutes les suivantes.</p><pre><code>def mention(note):\n    if note &gt;= 16:\n        return \"Très bien\"\n    elif note &gt;= 14:\n        return \"Bien\"\n    elif note &gt;= 12:\n        return \"Assez bien\"\n    elif note &gt;= 10:\n        return \"Passable\"\n    else:\n        return \"Insuffisant\"\n\nprint(mention(18))   # affiche Très bien\nprint(mention(13))   # affiche Assez bien\nprint(mention(9))    # affiche Insuffisant</code></pre><p><strong>📋 Trace d'exécution :</strong> appel <code>mention(13)</code>, déroulé test par test :</p><table><tr><th>Étape</th><th>Test</th><th>Résultat</th><th>Décision</th></tr><tr><td>1</td><td><code>13 &gt;= 16</code></td><td><code>False</code></td><td>on passe au <code>elif</code> suivant</td></tr><tr><td>2</td><td><code>13 &gt;= 14</code></td><td><code>False</code></td><td>on passe au suivant</td></tr><tr><td>3</td><td><code>13 &gt;= 12</code></td><td><code>True</code></td><td>renvoie « Assez bien » — <strong>Stop</strong></td></tr></table><p>Pour <code>mention(18)</code>, une seule condition est testée ; pour <code>mention(9)</code>, les quatre le sont avant d'arriver au <code>else</code>.</p><p><strong>🎯 Défi élève :</strong> compléter les quatre trous (valider une note, puis tester la parité).</p><pre><code>note = 25\nif note &lt; 0 ______ note &gt; 20:\n    print(\"Note invalide !\")\n______:\n    print(\"Note acceptée\")\n\ndef est_pair(n):\n    return n ______ 2 ______ 0\n\nprint(est_pair(10), est_pair(7))   # doit afficher True False</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>note = 25\nif note &lt; 0 or note &gt; 20:      # or : trop petite OU trop grande\n    print(\"Note invalide !\")   # affiche Note invalide !\nelse:\n    print(\"Note acceptée\")\n\ndef est_pair(n):\n    return n % 2 == 0          # le reste de la division par 2 vaut-il 0 ?\n\nprint(est_pair(10), est_pair(7))   # affiche True False</code></pre><ul><li>Après <code>if</code>, <code>elif</code>, <code>else</code> : un <strong>deux-points</strong>, puis un bloc indenté de 4 espaces.</li><li>Dans une cascade, on ordonne les seuils du plus haut au plus bas : la première condition vraie l'emporte.</li><li>Avec <code>and</code> à la place de <code>or</code> dans la validation, aucune note ne serait jamais invalide : un nombre ne peut pas être à la fois &lt; 0 et &gt; 20.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Savoir programmer, ce sont deux compétences jumelles : <strong>écrire</strong> du code dans une cellule vide, et <strong>lire</strong> du code pour prédire sa sortie <em>avant</em> de l'exécuter, comme la machine le ferait. Pour prédire sans se tromper, on « joue l'ordinateur » : on suit les variables ligne par ligne dans un tableau. Exemple à la main (la dictée de code, exercice 2 du thème) : que vaut <code>x</code> après <code>x = 5</code>, puis <code>x = x + 3</code>, puis <code>x = x * 2</code> ? On lit la droite, on range à gauche : x vaut 5, puis 5 + 3 = 8, puis 8 × 2 = 16.</p><p><strong>📋 Trace d'exécution :</strong></p><table><tr><th>Instruction</th><th>On calcule (la droite)</th><th>x vaut</th></tr><tr><td><code>x = 5</code></td><td>—</td><td>5</td></tr><tr><td><code>x = x + 3</code></td><td>5 + 3 = 8</td><td>8</td></tr><tr><td><code>x = x * 2</code></td><td>8 * 2 = 16</td><td>16</td></tr></table><pre><code>x = 5\nx = x + 3\nx = x * 2\nprint(x)   # affiche 16</code></pre><p><strong>🐢 Écrire seul — la démarche en trois temps :</strong> avant de coder <code>est_pair(n)</code> en cellule vide (exercice 3), on formule la règle à la main : 10 est pair car le reste de la division de 10 par 2 vaut 0 ; 7 est impair car ce reste vaut 1. Règle : « n est pair si <code>n % 2</code> vaut 0 ». Ensuite seulement, on traduit en Python :</p><pre><code>def est_pair(n):\n    return n % 2 == 0\n\nprint(est_pair(10))   # affiche True\nprint(est_pair(7))    # affiche False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>n % 2</code> donne le <strong>reste</strong> de la division de n par 2 : 0 si n est pair, 1 sinon ;</li><li><code>n % 2 == 0</code> est un test : il vaut <code>True</code> ou <code>False</code>, et <code>return</code> renvoie directement ce booléen, sans <code>if</code> nécessaire ;</li><li><code>return</code> <strong>renvoie</strong> une valeur réutilisable dans un calcul ; <code>print</code> ne fait qu'<strong>afficher</strong> à l'écran.</li></ul><p><strong>Les erreurs fréquentes du thème, à reconnaître au premier coup d'œil :</strong></p><table><tr><th>Erreur</th><th>Exemple</th><th>Python répond</th></tr><tr><td>deux-points oubliés</td><td><code>if note &gt;= 10</code></td><td><code>SyntaxError</code></td></tr><tr><td>bloc non indenté</td><td><code>print(\"Reçu\")</code> collé à gauche après un <code>if</code></td><td><code>IndentationError</code></td></tr><tr><td><code>=</code> au lieu de <code>==</code> dans un test</td><td><code>if note = 10:</code></td><td><code>SyntaxError</code></td></tr><tr><td>majuscule ou nom inconnu</td><td><code>Print(\"ok\")</code></td><td><code>NameError</code></td></tr></table><p><strong>🎯 Défi élève :</strong> réécrire <code>mention(note)</code> avec son jeu de tests (exercice 8) — compléter les quatre trous. Un <code>assert</code> vérifie une affirmation : il ne fait rien si elle est vraie, il arrête tout si elle est fausse.</p><pre><code>def mention(note):\n    if note ______ 16:\n        return \"Très bien\"\n    elif note &gt;= 14:\n        return \"Bien\"\n    elif note &gt;= ______:\n        return \"Assez bien\"\n    elif note &gt;= 10:\n        return \"Passable\"\n    ______:\n        return \"Insuffisant\"\n\nassert mention(18) == \"Très bien\"\nassert mention(13) == ______\nprint(\"Tous les tests passent\")   # doit s'afficher</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def mention(note):\n    if note &gt;= 16:\n        return \"Très bien\"\n    elif note &gt;= 14:\n        return \"Bien\"\n    elif note &gt;= 12:\n        return \"Assez bien\"\n    elif note &gt;= 10:\n        return \"Passable\"\n    else:\n        return \"Insuffisant\"\n\nassert mention(18) == \"Très bien\"\nassert mention(13) == \"Assez bien\"\nprint(\"Tous les tests passent\")   # affiche Tous les tests passent</code></pre><ul><li>Prédire la sortie <em>avant</em> d'exécuter : le tableau de suivi des variables est l'outil de base du programmeur.</li><li>Un message d'erreur se lit : il indique la ligne et la famille du problème (<code>SyntaxError</code>, <code>IndentationError</code>, <code>NameError</code>…).</li><li>En fin de séance, chacun note « mes 3 erreurs à moi » : connaître ses pièges, c'est déjà les éviter.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> une <strong>boucle</strong> répète automatiquement un bloc d'instructions. La boucle <code>for</code> est dite <strong>bornée</strong> : le nombre de tours est connu à l'avance. On l'utilise avec <code>range</code>, qui produit une suite d'entiers.</p><p>Comptons à la main les valeurs produites : <code>range(4)</code> donne 0, 1, 2, 3 — quatre valeurs, en partant de 0, sans jamais atteindre 4. <code>range(1, 5)</code> donne 1, 2, 3, 4 : le 5 est <strong>exclu</strong>. Donc pour parcourir les entiers de 1 à 100 <em>inclus</em>, il faut écrire <code>range(1, 101)</code>. C'est le piège le plus fréquent de l'année.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> afficher la table de multiplication de 7 sans boucle, en recopiant un <code>print</code> par ligne.</p><pre><code>print(\"7 x 1 =\", 7 * 1)   # affiche 7 x 1 = 7\nprint(\"7 x 2 =\", 7 * 2)   # affiche 7 x 2 = 14\nprint(\"7 x 3 =\", 7 * 3)   # affiche 7 x 3 = 21\n# ... et encore sept lignes à recopier pour aller jusqu'à 7 x 10 !</code></pre><p><strong>🔍 Comment ça marche :</strong> cela fonctionne, mais c'est long, pénible et source d'erreurs de copier-coller — et pour la table de 9, il faudrait tout réécrire. Quand la même instruction se répète en ne changeant qu'un nombre, c'est le signal qu'il faut une boucle.</p><p><strong>⚡ Méthode plus efficace :</strong> la boucle <code>for</code> fait varier une variable <code>i</code> qui prend, tour après tour, chaque valeur de <code>range(1, 11)</code>, soit 1, 2, …, 10 ; le bloc indenté est exécuté à chaque tour.</p><pre><code>for i in range(1, 11):\n    print(\"7 x\", i, \"=\", 7 * i)\n# affiche les dix lignes, de 7 x 1 = 7 jusqu'à 7 x 10 = 70</code></pre><p>Deux lignes remplacent dix, et il suffit de remplacer 7 pour obtenir n'importe quelle table.</p><p>Second motif essentiel de la séance : l'<strong>accumulation</strong>. Pour additionner des valeurs, on prépare une variable <em>avant</em> la boucle (<code>total = 0</code>), puis chaque tour ajoute sa valeur (<code>total += k</code>).</p><p><strong>📋 Trace d'exécution :</strong> déroulons à la main <code>for k in range(1, 5): total += k</code>, en partant de <code>total = 0</code>.</p><table><tr><th>tour</th><th>k</th><th>total avant</th><th>total après</th></tr><tr><td>1</td><td>1</td><td>0</td><td>0 + 1 = 1</td></tr><tr><td>2</td><td>2</td><td>1</td><td>1 + 2 = 3</td></tr><tr><td>3</td><td>3</td><td>3</td><td>3 + 3 = 6</td></tr><tr><td>4</td><td>4</td><td>6</td><td>6 + 4 = 10</td></tr></table><p><strong>🎯 Défi élève :</strong> calculer la somme des entiers de 1 à 100 (exercice 5).</p><pre><code>total = ______\nfor k in range(1, ______):\n    total ______ k\nprint(total)   # affiche 5050</code></pre><p>✅ Réponse :</p><pre><code>total = 0\nfor k in range(1, 101):\n    total += k\nprint(total)   # affiche 5050</code></pre><ul><li><code>range(n)</code> s'arrête à n−1, pas à n ; pour aller de 1 à 100 inclus, on écrit <code>range(1, 101)</code>.</li><li>Motif d'accumulation : la variable <code>total</code> se prépare <strong>avant</strong> la boucle, jamais dedans (sinon elle serait remise à 0 à chaque tour).</li><li><code>for</code> = boucle bornée : on connaît le nombre de tours à l'avance.</li></ul>"
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
    ],
    "cours": "<p><strong>🎯 Bilan :</strong> avant le TP noté n°1 (1 h sur poste, barème bienveillant : l'objectif est le <em>diagnostic</em>), les points clés des trois premières semaines.</p><ul><li><strong>Variables :</strong> <code>=</code> signifie « reçoit la valeur » (on lit la droite, on range à gauche) ; quatre types : <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code> ; <code>\"3\" + \"4\"</code> donne <code>\"34\"</code> (concaténation), pas 7.</li><li><strong>Conditions :</strong> <code>if</code>/<code>elif</code>/<code>else</code>, deux-points et indentation obligatoires ; Python s'arrête à la première condition vraie, l'ordre des seuils compte.</li><li><strong>Boucle for :</strong> <code>range(n)</code> produit 0, 1, …, n−1 ; pour 1 à 100 inclus, <code>range(1, 101)</code>.</li><li><strong>Accumulation :</strong> <code>total = 0</code> avant la boucle, <code>total += k</code> dedans.</li><li><strong>Erreurs :</strong> un message d'erreur est une aide, pas une punition — il indique la ligne et la cause.</li></ul><p><strong>❓ Question type corrigée (chasse au bug) :</strong> cette fonction devrait renvoyer la somme des entiers de 1 à n inclus. Pourquoi <code>somme(5)</code> affiche-t-il 10 et pas 15 ?</p><pre><code>def somme(n):\n    total = 0\n    for i in range(n):   # BUG ici\n        total += i\n    return total\n\nprint(somme(5))   # affiche 10, au lieu de 15 attendu</code></pre><p>✅ Réponse : <code>range(n)</code> s'arrête à n−1. Pour n = 5, la boucle additionne 0 + 1 + 2 + 3 + 4 = 10 : le 5 n'est jamais ajouté. Correction : <code>range(n + 1)</code>.</p><pre><code>def somme(n):\n    total = 0\n    for i in range(n + 1):\n        total += i\n    return total\n\nprint(somme(5))   # affiche 15</code></pre><ul><li>C'est une erreur de <strong>logique</strong> : le programme tourne sans message, mais le résultat est faux — la plus sournoise des trois familles d'erreurs (syntaxe, exécution, logique).</li><li>Réflexe de débogage : ajouter un <code>print</code> intermédiaire (<code>print(\"on ajoute\", i)</code>) pour <em>voir</em> les valeurs réellement additionnées : 0, 1, 2, 3, 4… il manque 5 !</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> parfois, on ne sait pas <em>combien</em> de fois répéter, mais seulement <strong>quand s'arrêter</strong>. La boucle <code>while</code> (« tant que ») est dite <strong>non bornée</strong> : elle répète un bloc tant qu'une condition reste vraie. Règle de choix : nombre de tours connu à l'avance (répéter 10 fois, parcourir une liste) → <code>for</code> ; répéter jusqu'à un événement (jusqu'à une bonne saisie, jusqu'à atteindre 1) → <code>while</code>.</p><p>Exemple déroulé à la main : combien de fois peut-on diviser 1000 par 2 (division entière) avant d'atteindre 1 ? On déroule : 1000 → 500 → 250 → 125 → 62 → 31 → 15 → 7 → 3 → 1. On compte les flèches : <strong>9 divisions</strong>. Impossible de le prévoir sans faire le calcul : c'est exactement la situation du <code>while</code>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> traduire ce déroulé en Python.</p><pre><code>n = 1000\ncompteur = 0\nwhile n &gt; 1:          # condition d'arrêt\n    n = n // 2        # n évolue : la boucle finira\n    compteur += 1\nprint(\"Nombre de divisions :\", compteur)   # affiche Nombre de divisions : 9</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>La condition <code>n &gt; 1</code> est testée <strong>avant chaque tour</strong> : tant qu'elle est vraie, le bloc indenté s'exécute ; dès qu'elle devient fausse, on sort de la boucle.</li><li><code>n = n // 2</code> fait <strong>évoluer</strong> n : c'est le garde-fou. Si rien n'évoluait dans la boucle, la condition resterait vraie pour toujours : <strong>boucle infinie</strong>, le programme ne s'arrête jamais.</li><li><code>compteur += 1</code> compte les tours : c'est le motif d'accumulation revu à la séance précédente.</li></ul><p><strong>📋 Trace d'exécution :</strong> même algorithme avec n = 20, pour une table courte.</p><table><tr><th>tour</th><th>n au test</th><th>n &gt; 1 ?</th><th>n = n // 2</th><th>compteur</th></tr><tr><td>1</td><td>20</td><td>vraie</td><td>10</td><td>1</td></tr><tr><td>2</td><td>10</td><td>vraie</td><td>5</td><td>2</td></tr><tr><td>3</td><td>5</td><td>vraie</td><td>2</td><td>3</td></tr><tr><td>4</td><td>2</td><td>vraie</td><td>1</td><td>4</td></tr><tr><td>—</td><td>1</td><td>fausse : on sort</td><td>—</td><td>4</td></tr></table><p>Le <code>print</code> final afficherait alors « Nombre de divisions : 4 ».</p><p><strong>🎯 Défi élève :</strong> écrire <code>compte_a_rebours(n)</code> qui affiche n, n−1, …, 1, puis « Décollage ! » (exercice 6).</p><pre><code>def compte_a_rebours(n):\n    while n ______ 0:\n        print(n)\n        n = n ______ 1\n    print(\"______\")\n\ncompte_a_rebours(3)</code></pre><p>✅ Réponse :</p><pre><code>def compte_a_rebours(n):\n    while n &gt; 0:\n        print(n)\n        n = n - 1\n    print(\"Décollage !\")\n\ncompte_a_rebours(3)\n# affiche :\n# 3\n# 2\n# 1\n# Décollage !</code></pre><p>Tant que <code>n &gt; 0</code>, on affiche n puis on décrémente : n change à chaque tour, donc pas de boucle infinie. Quand n atteint 0, la condition devient fausse, on sort et on affiche « Décollage ! ».</p><ul><li><code>for</code> si on connaît le nombre de tours, <code>while</code> sinon.</li><li>Garde-fou anti-boucle infinie : la condition doit <strong>pouvoir devenir fausse</strong> — une variable doit évoluer à l'intérieur de la boucle.</li><li>Dans le jeu du nombre deviné (TP, étape 3), <code>while True</code> tourne indéfiniment : c'est <code>break</code> qui fait sortir de la boucle quand le joueur a trouvé.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Python offre deux boucles, et bien choisir est une compétence à part entière : si le nombre de tours est <strong>connu à l'avance</strong> (parcourir une liste, répéter 10 fois), on prend <code>for</code> ; si on répète <strong>jusqu'à un événement</strong>, sans savoir combien de tours il faudra, on prend <code>while</code>.</p><p>Déroulons à la main le jeu « devine le nombre » entre 1 et 100 (nombre secret : 66). Manche 1, dans l'ordre : 1 ? non. 2 ? non. 3 ? non… il faut 66 essais ! Manche 2, en coupant en deux à chaque fois : 50 ? trop petit. 75 ? trop grand. 62 ? trop petit. 68 ? trop grand. 65 ? trop petit. 66 ? trouvé — 6 essais seulement. Compter les essais, c'est déjà mesurer le <strong>coût</strong> d'une méthode.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><p>On réinvestit d'abord le motif du « plus grand vu jusqu'ici » sur la liste [4, 9, 2, 15, 7], à la main : on retient 4, puis 9 (nouveau record), on ignore 2, on retient 15, on ignore 7 → le maximum est 15. Un tour par élément : le nombre de tours est connu, donc boucle <code>for</code>.</p><pre><code>def maximum(tab):\n    m = tab[0]          # le plus grand vu... pour l'instant\n    for x in tab:\n        if x &gt; m:\n            m = x       # nouveau record : on le mémorise\n    return m\n\nprint(maximum([4, 9, 2, 15, 7]))   # affiche 15</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>m = tab[0]</code> : on initialise le record avec le premier élément — jamais avec 0 (une liste de nombres tous négatifs donnerait un résultat faux) ;</li><li><code>if x &gt; m</code> : à chaque tour, si l'élément courant dépasse le record, on le mémorise ;</li><li>après le dernier tour, <code>m</code> est le plus grand de toute la liste, et <code>return</code> le renvoie.</li></ul><p><strong>⚡ Méthode plus efficace — la mission « Devine le nombre » :</strong></p><p>Pour trouver le nombre secret, impossible de savoir d'avance combien d'essais il faudra : boucle <code>while</code>. On garde deux bornes <code>bas</code> et <code>haut</code>, on propose le milieu, et chaque réponse élimine la moitié de l'intervalle.</p><pre><code>def nb_essais(secret):\n    bas, haut = 1, 100\n    essais = 0\n    trouve = False\n    while not trouve:\n        milieu = (bas + haut) // 2\n        essais = essais + 1\n        if milieu == secret:\n            trouve = True\n        elif milieu &lt; secret:\n            bas = milieu + 1\n        else:\n            haut = milieu - 1\n    return essais\n\nprint(nb_essais(66))   # affiche 6</code></pre><p>Jamais plus de 7 essais pour 100 nombres (2 × 2 × … × 2, sept fois = 128 &gt; 100), contre jusqu'à 100 essais dans l'ordre : couper en deux est spectaculairement plus efficace.</p><p><strong>📋 Trace d'exécution :</strong> nb_essais(66) déroulé à la main :</p><table><tr><th>bas</th><th>haut</th><th>milieu</th><th>essais</th><th>comparaison</th></tr><tr><td>1</td><td>100</td><td>50</td><td>1</td><td>50 &lt; 66 : trop petit</td></tr><tr><td>51</td><td>100</td><td>75</td><td>2</td><td>75 &gt; 66 : trop grand</td></tr><tr><td>51</td><td>74</td><td>62</td><td>3</td><td>62 &lt; 66 : trop petit</td></tr><tr><td>63</td><td>74</td><td>68</td><td>4</td><td>68 &gt; 66 : trop grand</td></tr><tr><td>63</td><td>67</td><td>65</td><td>5</td><td>65 &lt; 66 : trop petit</td></tr><tr><td>66</td><td>67</td><td>66</td><td>6</td><td>66 == 66 : trouvé !</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter les 5 trous de la mission.</p><pre><code>def nb_essais(secret):\n    bas, haut = 1, 100\n    essais = 0\n    trouve = False\n    while not ______:\n        milieu = (bas + haut) ______ 2\n        essais = essais + 1\n        if milieu == secret:\n            trouve = ______\n        elif milieu &lt; secret:\n            bas = milieu + ______\n        else:\n            haut = milieu - 1\n    return ______\n\nprint(nb_essais(66))   # doit afficher 6</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def nb_essais(secret):\n    bas, haut = 1, 100\n    essais = 0\n    trouve = False\n    while not trouve:\n        milieu = (bas + haut) // 2\n        essais = essais + 1\n        if milieu == secret:\n            trouve = True\n        elif milieu &lt; secret:\n            bas = milieu + 1\n        else:\n            haut = milieu - 1\n    return essais\n\nprint(nb_essais(66))   # affiche 6</code></pre><ul><li><code>for</code> quand le nombre de tours est connu à l'avance ; <code>while</code> pour répéter jusqu'à un événement.</li><li>Garde-fou anti-boucle infinie : quelque chose doit évoluer dans la boucle pour que la condition puisse devenir fausse (ici, l'intervalle bas–haut rétrécit à chaque essai).</li><li>Compter les essais est la première intuition du <strong>coût</strong> d'un algorithme ; cette idée (la recherche dichotomique) sera approfondie au thème Algorithmique.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Une <strong>fonction</strong> regroupe sous un nom un bloc d'instructions réutilisable : on l'écrit une fois, on l'<em>appelle</em> autant de fois qu'on veut. C'est l'outil n°1 pour ne pas se répéter et organiser un programme. Une fonction se comporte comme une <strong>machine</strong> : on lui donne des entrées (les <strong>paramètres</strong>), elle effectue un traitement, puis <code>return</code> renvoie un <strong>résultat</strong> à l'endroit de l'appel.</p><p>Déroulons à la main avec la « machine à fonctions » vue en classe : on glisse les cartes 3 et 9 dans la boîte <em>maximum</em> ; l'élève-fonction compare et <em>rend</em> la carte 9. Cette carte est réutilisable : on peut la donner à une autre machine. Mais s'il <em>crie</em> « 9 ! » au lieu de rendre la carte (c'est <code>print</code>), tout le monde l'entend… et personne ne peut rien en faire : la main qui attendait le résultat reste vide (<code>None</code>).</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def est_pair(n):\n    return n % 2 == 0       # renvoie un booléen\n\ndef maximum(a, b):\n    if a &gt; b:\n        return a\n    return b                # pas besoin de else : return sort de la fonction\n\nprint(est_pair(10), est_pair(7))   # affiche True False\nprint(\"max :\", maximum(3, 9))      # affiche max : 9</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>def</code> fabrique la machine mais ne l'exécute pas : rien ne se passe tant qu'on n'<em>appelle</em> pas la fonction ;</li><li>lors de l'appel est_pair(10), le paramètre <code>n</code> prend la valeur 10, et le résultat du test <code>n % 2 == 0</code> est renvoyé ;</li><li><code>return</code> renvoie une valeur <em>et</em> sort immédiatement de la fonction : dans maximum, si <code>a &gt; b</code> est vrai, la dernière ligne n'est jamais lue ;</li><li>une variable créée dans une fonction est <strong>locale</strong> : elle n'existe pas en dehors.</li></ul><p>Piège du jour à montrer : une fonction qui <code>print</code> sans <code>return</code> ne « rend » rien — écrire x = ma_fonction() rangerait <code>None</code> dans x, et tout calcul avec x planterait.</p><p><strong>📋 Trace d'exécution :</strong> on réécrit la somme des entiers (exercice déjà fait) sous forme de fonction, puis on déroule l'appel somme(4) :</p><table><tr><th>tour</th><th>k</th><th>total avant</th><th>total après</th></tr><tr><td>1</td><td>1</td><td>0</td><td>0 + 1 = 1</td></tr><tr><td>2</td><td>2</td><td>1</td><td>1 + 2 = 3</td></tr><tr><td>3</td><td>3</td><td>3</td><td>3 + 3 = 6</td></tr><tr><td>4</td><td>4</td><td>6</td><td>6 + 4 = 10</td></tr></table><p>À la sortie de la boucle, <code>return</code> renvoie 10 à l'endroit de l'appel : somme(4) <em>vaut</em> 10, on peut donc calculer avec.</p><p><strong>🎯 Défi élève :</strong> réécrire « la somme des entiers de 1 à n » sous forme de fonction (4 trous).</p><pre><code>def somme(n):\n    total = ______\n    for k in range(1, ______):\n        total ______ k\n    ______ total\n\nprint(somme(100))   # doit afficher 5050</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def somme(n):\n    total = 0\n    for k in range(1, n + 1):\n        total += k\n    return total\n\nprint(somme(100))   # affiche 5050</code></pre><ul><li><code>return</code> <em>renvoie</em> une valeur réutilisable dans un calcul ; <code>print</code> ne fait qu'<em>afficher</em> à l'écran. Ne jamais les confondre.</li><li>Une fonction = <code>def</code> + nom + paramètres + deux-points, corps indenté, <code>return</code> ; on peut ensuite l'appeler avec des valeurs différentes : somme(10), somme(100)…</li><li>Pour les plus rapides : le mini-projet « PGCD (algorithme d'Euclide) » réutilise exactement ces outils (fonction, boucle while, return).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Avant de coder une fonction, on dit <em>ce qu'elle fait</em> sans dire <em>comment</em> : c'est la <strong>spécification</strong>. Elle sert de <strong>contrat</strong> : « si <em>tu</em> (l'appelant) respectes la <strong>précondition</strong> (ce qu'on suppose vrai en entrée), alors <em>moi</em> (la fonction) je garantis la <strong>postcondition</strong> (ce qui est vrai en sortie) ».</p><p>À la main, spécifions une machine du quotidien, le distributeur de boissons : précondition — pièce valide, boisson disponible ; postcondition — la boisson tombe et la monnaie est rendue. Pas un mot sur les moteurs internes : le <em>quoi</em>, pas le <em>comment</em>. De même pour moyenne : moyenne([10, 20]) doit valoir (10 + 20) / 2 = 15 ; moyenne([12]) doit valoir 12 ; et moyenne([]) est <em>interdite</em> par la précondition « liste non vide » (on diviserait par zéro).</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la spécification s'écrit dans une <strong>docstring</strong> (entre triples guillemets) et se vérifie avec un <strong>jeu de tests</strong> assert :</p><pre><code>def moyenne(notes):\n    \"\"\"Renvoie la moyenne d'une liste de notes (float).\n    Précondition : notes est une liste non vide de nombres.\n    Postcondition : min(notes) &lt;= résultat &lt;= max(notes).\n    \"\"\"\n    return sum(notes) / len(notes)\n\nassert moyenne([10, 20]) == 15\nassert moyenne([12]) == 12\nassert moyenne([0, 0, 0]) == 0\nprint(\"Tous les tests passent\")   # affiche Tous les tests passent</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>assert condition</code> ne fait <em>rien</em> si la condition est vraie, mais <strong>lève une erreur</strong> si elle est fausse : chaque assert est un exemple « entrée → résultat attendu » ;</li><li>la docstring documente le rôle de la fonction ; help(moyenne) l'affiche ;</li><li>méthode de la séance : spécifier <em>avant</em> de coder, écrire les assert <em>avant</em> le corps.</li></ul><p><strong>🐛 Tester et mettre au point :</strong> on distingue trois familles d'erreurs :</p><table><tr><th>Type d'erreur</th><th>Symptôme</th><th>Exemple</th></tr><tr><td><strong>Syntaxe</strong></td><td>le code refuse de démarrer</td><td>oubli du deux-points, parenthèse non fermée</td></tr><tr><td><strong>Exécution</strong></td><td>le programme plante en cours</td><td>division par zéro, IndexError</td></tr><tr><td><strong>Logique</strong></td><td>il tourne, mais le résultat est faux</td><td>mauvais range, condition inversée</td></tr></table><p>La plus sournoise est l'erreur de <strong>logique</strong> : aucun message ! Exemple de la chasse au bug :</p><pre><code># Ce code contient un bug de LOGIQUE : trouve-le.\ndef somme_jusqua(n):\n    total = 0\n    for i in range(n):\n        total += i\n    return total\n\nprint(\"somme_jusqua(5) =\", somme_jusqua(5))   # affiche somme_jusqua(5) = 10</code></pre><p>Or 1 + 2 + 3 + 4 + 5 = 15. Face à une erreur d'exécution, on lit le <em>traceback</em> avec 3 questions : où ? (la ligne) quoi ? (le type d'erreur) pourquoi ?</p><p><strong>📋 Trace d'exécution :</strong> déroulons somme_jusqua(5) à la main pour débusquer le bug :</p><table><tr><th>i</th><th>total après total += i</th></tr><tr><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>3</td></tr><tr><td>3</td><td>6</td></tr><tr><td>4</td><td>10</td></tr></table><p>range(5) s'arrête à 4 : il manque le 5 ! Correction : range(n + 1). Un print(i) dans la boucle aurait « montré » les valeurs — c'est le débogage par print.</p><p><strong>🎯 Défi élève :</strong> spécifier puis écrire est_premier(n) — un entier n &gt; 1 est premier s'il n'est divisible que par 1 et lui-même (5 trous).</p><pre><code>def est_premier(n):\n    \"\"\"Renvoie True si l'entier n (&gt; 1) est premier.\"\"\"\n    if n &lt; 2:\n        return ______\n    for d in range(2, ______):\n        if n % d == ______:\n            return ______\n    return ______\n\nassert est_premier(7) == True\nassert est_premier(9) == False\nassert est_premier(2) == True\nprint(\"OK\")   # doit afficher OK</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def est_premier(n):\n    \"\"\"Renvoie True si l'entier n (&gt; 1) est premier.\"\"\"\n    if n &lt; 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True\n\nassert est_premier(7) == True\nassert est_premier(9) == False\nassert est_premier(2) == True\nprint(\"OK\")   # affiche OK</code></pre><p>On teste tous les diviseurs d de 2 à n − 1 : si l'un divise n (reste nul), n n'est pas premier. 7 est premier ; 9 = 3 × 3 ne l'est pas.</p><ul><li>Spécifier = signature + docstring + précondition + postcondition + jeu de tests : c'est le contrat de la fonction.</li><li>assert est silencieux quand tout va bien et lève une erreur au premier test faux : écrire les tests <em>avant</em> le corps.</li><li>Trois familles d'erreurs : syntaxe, exécution, logique — la logique est la plus sournoise (aucun message, résultat faux).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>On ne réécrit pas tout soi-même : une <strong>bibliothèque</strong> (ou module) regroupe des fonctions prêtes à l'emploi. On l'<strong>importe</strong> avec <code>import</code>, puis on lit sa <strong>documentation</strong> pour savoir ce que chaque fonction attend et ce qu'elle renvoie.</p><p>À la main : pour simuler un dé dans le mini-projet « Le Pendu », faut-il inventer le hasard ? Non — la bibliothèque random le fournit. Sa notice dit : « randint(a, b) renvoie un entier N tel que a &lt;= N &lt;= b ». Il suffit donc d'écrire random.randint(1, 6). Comme au bricolage : on n'invente pas la perceuse, on l'emprunte et on lit sa notice — c'est exactement le rôle de help().</p><p><strong>🧰 Manipulation — importer et utiliser une bibliothèque :</strong></p><pre><code>import math, random\n\nprint(math.sqrt(16))        # affiche 4.0\nprint(math.pi)              # affiche 3.141592653589793\nprint(max([3, 9, 1]))       # affiche 9\n\nhelp(math.factorial)        # ouvre la notice de factorial\n\nrandom.seed(0)              # rend le hasard reproductible\nprint(\"dé :\", random.randint(1, 6))   # affiche dé : 4</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>import math</code> donne accès à toutes les fonctions du module, appelées avec le préfixe : math.sqrt, math.pi ;</li><li>help(fonction) affiche l'aide, dir(module) liste le contenu du module ;</li><li>réflexe NSI : devant une fonction inconnue, lire sa documentation puis la tester sur un petit exemple.</li></ul><p><strong>💾 Coder pour de vrai :</strong> hors du site, un programme Python est un fichier .py écrit dans un éditeur (Capytale ou Thonny) et exécuté par l'<strong>interpréteur</strong> Python, ligne à ligne. C'est le moment de recopier est_premier de la séance précédente, de l'exécuter et de sauvegarder son premier vrai fichier : est_premier.py.</p><p><strong>🌍 Comparer plusieurs langages :</strong> Python n'est pas seul. Les <strong>concepts</strong> (variables, conditions, boucles, fonctions) se retrouvent partout : on apprend des <em>idées</em>, pas seulement une syntaxe.</p><table><tr><th>Langage</th><th>Usage typique</th><th>« Bonjour »</th></tr><tr><td>Python</td><td>apprentissage, données, IA</td><td><code>print(\"Bonjour\")</code></td></tr><tr><td>JavaScript</td><td>pages web (navigateur)</td><td><code>console.log(\"Bonjour\");</code></td></tr><tr><td>C</td><td>systèmes, performance</td><td><code>printf(\"Bonjour\");</code></td></tr><tr><td>Java</td><td>applications, Android</td><td><code>System.out.println(\"Bonjour\");</code></td></tr></table><p>Différences à repérer en îlot : Python délimite les blocs par l'<strong>indentation</strong>, beaucoup d'autres par des <strong>accolades</strong> ; Python est <strong>interprété</strong> et à typage <strong>dynamique</strong>, C est <strong>compilé</strong> et à typage <strong>statique</strong> (on déclare le type de chaque variable). Ce qui ne change pas : l'idée « afficher un texte ».</p><p><strong>🎯 Défi élève :</strong> compléter les 5 trous.</p><pre><code>import math, random\n\nprint(______.sqrt(81))           # doit afficher 9.0\nprint(round(math.pi, ______))    # doit afficher 3.14\nrandom.seed(0)\nde = random.______(1, 6)\nprint(1 ______ de ______ 6)      # doit afficher True</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>import math, random\n\nprint(math.sqrt(81))           # affiche 9.0\nprint(round(math.pi, 2))       # affiche 3.14\nrandom.seed(0)\nde = random.randint(1, 6)\nprint(1 &lt;= de &lt;= 6)            # affiche True</code></pre><ul><li>D'abord <code>import</code>, ensuite le préfixe module.fonction ; help() est la notice intégrée, à consulter avant d'utiliser une fonction inconnue.</li><li>random.seed rend le hasard reproductible : très utile pour tester un programme qui utilise random (comme « Le Pendu »).</li><li>Tous les langages partagent les mêmes idées ; ce qui change : la ponctuation (accolades ou indentation), l'exécution (compilé ou interprété) et le typage (statique ou dynamique).</li></ul>"
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
    ],
    "cours": "<p><strong>🎯 Bilan :</strong> dernière séance du thème — carte mentale collective construite à partir de la fiche-résumé (un rameau par îlot), QCM complet de 12 questions en autonomie, remédiation par groupes de besoin (matrice « Ma classe »), puis DS n°1 sur table (55 min). Le DS comporte de la <em>lecture</em> de code (« que fait ce programme ? »), pas seulement de l'écriture.</p><ul><li><strong>Variables et types :</strong> <code>=</code> se lit « reçoit la valeur » ; quatre types : <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code> ; <code>\"3\" + \"4\"</code> donne <code>\"34\"</code>.</li><li><strong>Conditions :</strong> <code>if</code>/<code>elif</code>/<code>else</code>, deux-points et indentation obligatoires ; la cascade s'arrête à la première condition vraie (seuils du plus haut au plus bas).</li><li><strong>Boucles :</strong> <code>for</code> quand le nombre de tours est connu à l'avance (<code>range(1, 101)</code> pour aller de 1 à 100 inclus) ; <code>while</code> pour répéter jusqu'à un événement, avec le garde-fou anti-boucle infinie.</li><li><strong>Fonctions :</strong> <code>def</code>, paramètres, <code>return</code> renvoie une valeur réutilisable, <code>print</code> ne fait qu'afficher ; spécifier (docstring, précondition) et tester (<code>assert</code>).</li><li><strong>Bibliothèques :</strong> <code>import math, random</code>, appel avec le préfixe module.fonction ; <code>help()</code> est la notice intégrée.</li></ul><p><strong>Les 4 pièges du bloc « Erreurs fréquentes », à réviser pour le DS :</strong> les deux-points oubliés après <code>if</code>/<code>for</code>/<code>while</code> (<code>SyntaxError</code>) ; <code>range(n)</code> qui s'arrête à n−1 ; confondre <code>print</code> (affiche) et <code>return</code> (renvoie) ; la boucle <code>while</code> infinie (la condition doit pouvoir devenir fausse).</p><p><strong>❓ Question type corrigée (lecture de code, comme au DS) :</strong> que fait cette fonction, et qu'affiche le programme ?</p><pre><code>def mystere(n):\n    total = 0\n    for k in range(1, n + 1):\n        if k % 2 == 0:\n            total += k\n    return total\n\nprint(mystere(10))   # affiche 30</code></pre><p><strong>📋 Trace d'exécution :</strong> on « joue l'ordinateur » avec le tableau de suivi — l'outil à dégainer au DS pour toute question de lecture :</p><table><tr><th>k</th><th>k % 2 == 0 ?</th><th>total</th></tr><tr><td>1</td><td>non</td><td>0</td></tr><tr><td>2</td><td>oui</td><td>0 + 2 = 2</td></tr><tr><td>3</td><td>non</td><td>2</td></tr><tr><td>4</td><td>oui</td><td>2 + 4 = 6</td></tr><tr><td>5</td><td>non</td><td>6</td></tr><tr><td>6</td><td>oui</td><td>6 + 6 = 12</td></tr><tr><td>7</td><td>non</td><td>12</td></tr><tr><td>8</td><td>oui</td><td>12 + 8 = 20</td></tr><tr><td>9</td><td>non</td><td>20</td></tr><tr><td>10</td><td>oui</td><td>20 + 10 = 30</td></tr></table><p><strong>✅ Réponse :</strong> la fonction additionne les <code>k</code> pairs entre 1 et n inclus : elle renvoie la <strong>somme des entiers pairs de 1 à n</strong>. <code>mystere(10)</code> vaut 2 + 4 + 6 + 8 + 10 = 30, et le programme affiche 30.</p><ul><li>Au DS, une question « que fait ce programme ? » se traite avec un tableau de suivi des variables, jamais de tête.</li><li>Après le QCM, chacun repère ses questions ratées dans « Ma classe » et refait le texte à trous du TP correspondant : c'est la remédiation ciblée.</li><li>Après le DS, on reprend sa fiche « mes 3 erreurs à moi » : le thème suivant (représentation des données) réutilisera variables, boucles et fonctions.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>L'informatique n'est pas apparue avec les ordinateurs : elle est l'aboutissement de siècles de recherches en <strong>mathématiques</strong>, en <strong>logique</strong> et en <strong>technique</strong>. Pour s'y repérer, on construit une <strong>frise chronologique</strong> : situer chaque innovation dans le temps et l'associer à sa figure fondatrice. Le mot <strong>« algorithme »</strong> lui-même vient du savant perse <strong>Al-Khwârizmî</strong> (IXᵉ siècle) : il est bien plus vieux que la première machine.</p><p>Exemple déroulé à la main — classer <em>Web, transistor, Pascaline, machine de Turing</em> sans connaître les dates par cœur. On raisonne par familles : la Pascaline est <strong>mécanique</strong> (roues dentées), donc avant toute électronique ; la machine de Turing est un modèle <strong>théorique</strong> imaginé avant les ordinateurs réels ; le <strong>transistor</strong> est le composant électronique qui remplace les tubes à vide ; le <strong>Web</strong> suppose des ordinateurs déjà reliés en réseau, il arrive donc en dernier. Ordre : Pascaline (1642) → machine de Turing (1936) → transistor (1947) → Web (1989).</p><p><strong>🃏 Les grands repères (Antiquité → 1970) :</strong></p><p>Cette frise, reconstituée en îlots avec les cartes, lance la frise murale de la classe :</p><table><tr><th>Date</th><th>Événement</th><th>Figure</th></tr><tr><td>≈ −300</td><td>algorithme d'Euclide (calcul du PGCD)</td><td>Euclide</td></tr><tr><td>IXᵉ s.</td><td>traités de calcul → mot « algorithme »</td><td>Al-Khwârizmî</td></tr><tr><td>1642</td><td>Pascaline, machine à additionner</td><td>Blaise Pascal</td></tr><tr><td>1703</td><td>arithmétique binaire (des 0 et des 1)</td><td>Leibniz</td></tr><tr><td>1801</td><td>métier à tisser à cartes perforées</td><td>Jacquard</td></tr><tr><td>1837</td><td>machine analytique (jamais achevée)</td><td>Charles Babbage</td></tr><tr><td>1843</td><td>premier algorithme destiné à une machine</td><td>Ada Lovelace</td></tr><tr><td>1847</td><td>algèbre de Boole (vrai/faux)</td><td>George Boole</td></tr><tr><td>1936</td><td>machine de Turing, modèle abstrait du calcul</td><td>Alan Turing</td></tr><tr><td>1945</td><td>ENIAC ; architecture à programme enregistré</td><td>von Neumann</td></tr><tr><td>1947</td><td>le transistor (Bell Labs)</td><td>—</td></tr><tr><td>1958</td><td>le circuit intégré</td><td>—</td></tr></table><p><strong>🐢 Coder, même en histoire — le dictionnaire des inventeurs :</strong></p><p>On mémorise les couples inventeur → invention dans un <strong>dictionnaire</strong> Python (réinvestissement du thème « Types construits ») :</p><pre><code>inventions = {\"Pascal\": \"Pascaline\",\n              \"Babbage\": \"machine analytique\",\n              \"Turing\": \"machine de Turing\"}\ninventions[\"Berners-Lee\"] = \"Web\"   # ajout d'une paire\nprint(inventions[\"Turing\"])         # affiche machine de Turing\nprint(\"Pascal\" in inventions)       # affiche True</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>un dictionnaire associe une <strong>clé</strong> (l'inventeur) à une <strong>valeur</strong> (l'invention) : <code>{clé: valeur}</code> ;</li><li><code>inventions[\"Berners-Lee\"] = \"Web\"</code> ajoute une nouvelle paire : c'est la syntaxe <code>d[clé] = valeur</code> ;</li><li><code>\"Pascal\" in inventions</code> teste si <code>\"Pascal\"</code> est une <strong>clé</strong> du dictionnaire (pas une valeur) et renvoie un booléen.</li></ul><p><strong>🎯 Défi élève :</strong></p><p>Compléter les trous pour que les affichages annoncés soient corrects :</p><pre><code>inventions = {\"Pascal\": \"______\",\n              \"Babbage\": \"machine analytique\",\n              \"Turing\": \"machine de Turing\"}\ninventions[\"______\"] = \"Web\"\nprint(inventions[\"______\"])      # doit afficher machine de Turing\nprint(\"Pascal\" ______ inventions)  # doit afficher True</code></pre><p>✅ Réponse :</p><pre><code>inventions = {\"Pascal\": \"Pascaline\",\n              \"Babbage\": \"machine analytique\",\n              \"Turing\": \"machine de Turing\"}\ninventions[\"Berners-Lee\"] = \"Web\"\nprint(inventions[\"Turing\"])       # affiche machine de Turing\nprint(\"Pascal\" in inventions)     # affiche True</code></pre><ul><li>L'informatique <strong>précède l'ordinateur</strong> : algorithme d'Euclide (≈ −300), mot « algorithme » venu d'Al-Khwârizmî, binaire de Leibniz (1703).</li><li><strong>Ada Lovelace</strong> écrit en 1843 le premier algorithme destiné à être exécuté par une machine : on la considère comme la première programmeuse.</li><li>Piège : dans un dictionnaire, <code>in</code> teste les <strong>clés</strong>, jamais les valeurs.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Après 1970, l'informatique sort des laboratoires. Le <strong>microprocesseur Intel 4004</strong> (1971) fait tenir tout le processeur sur une puce ; l'<strong>ordinateur personnel</strong> (Apple, IBM PC) entre dans les foyers dans les années 1970–80 ; les machines se relient (<strong>ARPANET</strong> en 1969, protocoles <strong>TCP/IP</strong> dans les années 1980), puis <strong>Tim Berners-Lee</strong> invente le <strong>World Wide Web</strong> au CERN (1989–1991). L'<strong>iPhone</strong> (2007) rend l'informatique mobile. L'<strong>IA</strong>, elle, a une longue histoire : test de Turing (1950), perceptron (1957), Deep Blue bat Kasparov (1997), apprentissage profond (années 2010). Côté supports de stockage, de la carte perforée au SSD et au cloud, <strong>tout finit en binaire</strong> : seul le support physique change.</p><p>Exemple déroulé à la main — <strong>Internet ≠ Web</strong>. Internet naît d'ARPANET (1969) puis de TCP/IP (Vinton Cerf et Robert Kahn) : c'est le <strong>réseau</strong> qui relie les machines. Le Web (Tim Berners-Lee, CERN, 1989–1991) est un <strong>service</strong> qui circule sur ce réseau : des pages HTML reliées par des liens, transportées par HTTP. Le Web utilise Internet, mais Internet transporte aussi d'autres services (mail, jeux en ligne…).</p><p><strong>🐢 Manipulation — la frise comme table de données :</strong></p><p>On représente la frise comme une <strong>liste de dictionnaires</strong> (thème « Données en tables ») et on la trie par date :</p><pre><code>frise = [\n    {\"annee\": 1971, \"evenement\": \"Microprocesseur Intel 4004\"},\n    {\"annee\": 1642, \"evenement\": \"Pascaline (Pascal)\"},\n    {\"annee\": 1991, \"evenement\": \"Le World Wide Web\"},\n    {\"annee\": 1936, \"evenement\": \"Machine de Turing\"},\n]\nfor e in sorted(frise, key=lambda x: x[\"annee\"]):\n    print(e[\"annee\"], \"—\", e[\"evenement\"])\n# affiche 1642 — Pascaline (Pascal)\n# puis    1936 — Machine de Turing\n# puis    1971 — Microprocesseur Intel 4004\n# puis    1991 — Le World Wide Web</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>chaque événement est un <strong>dictionnaire</strong> à deux clés (<code>\"annee\"</code>, <code>\"evenement\"</code>) ; la frise est une liste de dictionnaires, c'est-à-dire une table ;</li><li><code>sorted(frise, key=lambda x: x[\"annee\"])</code> trie selon la colonne <code>\"annee\"</code> : la fonction <code>lambda</code> indique à <code>sorted</code> quelle valeur comparer ;</li><li>une fois la frise <strong>triée</strong>, la recherche dichotomique devient possible (exercice 6, pour les rapides).</li></ul><p>Pour extraire les événements du XXᵉ siècle, une <strong>compréhension de liste</strong> filtre la frise en une ligne :</p><pre><code>frise = [(1642, \"Pascaline\"), (1843, \"1er algorithme\"),\n         (1936, \"machine de Turing\"), (1947, \"transistor\"),\n         (1971, \"microprocesseur\"), (1989, \"Web\"), (2007, \"smartphone\")]\nxxe = [e for (an, e) in frise if 1900 &lt;= an &lt;= 1999]\nprint(xxe)  # affiche ['machine de Turing', 'transistor', 'microprocesseur', 'Web']</code></pre><p><strong>📋 Trace d'exécution :</strong></p><table><tr><th>(an, e)</th><th>1900 &lt;= an &lt;= 1999 ?</th><th>gardé ?</th></tr><tr><td>(1642, Pascaline)</td><td>faux (1642 &lt; 1900)</td><td>non</td></tr><tr><td>(1843, 1er algorithme)</td><td>faux</td><td>non</td></tr><tr><td>(1936, machine de Turing)</td><td>vrai</td><td>oui</td></tr><tr><td>(1947, transistor)</td><td>vrai</td><td>oui</td></tr><tr><td>(1971, microprocesseur)</td><td>vrai</td><td>oui</td></tr><tr><td>(1989, Web)</td><td>vrai</td><td>oui</td></tr><tr><td>(2007, smartphone)</td><td>faux (2007 &gt; 1999)</td><td>non</td></tr></table><p><strong>🎯 Défi élève :</strong></p><p>Compléter les trous (tri puis filtre) :</p><pre><code>frise = [\n    {\"annee\": 1971, \"evenement\": \"Microprocesseur Intel 4004\"},\n    {\"annee\": 1642, \"evenement\": \"Pascaline (Pascal)\"},\n    {\"annee\": 1991, \"evenement\": \"Le World Wide Web\"},\n]\nfor e in ______(frise, key=______ x: x[\"annee\"]):\n    print(e[\"annee\"], \"—\", e[\"evenement\"])\n\nxxe = [e[\"evenement\"] for e in frise if 1900 &lt;= e[\"______\"] &lt;= 1999]\nprint(xxe)</code></pre><p>✅ Réponse :</p><pre><code>frise = [\n    {\"annee\": 1971, \"evenement\": \"Microprocesseur Intel 4004\"},\n    {\"annee\": 1642, \"evenement\": \"Pascaline (Pascal)\"},\n    {\"annee\": 1991, \"evenement\": \"Le World Wide Web\"},\n]\nfor e in sorted(frise, key=lambda x: x[\"annee\"]):\n    print(e[\"annee\"], \"—\", e[\"evenement\"])\n# affiche 1642 — Pascaline (Pascal)\n# puis    1971 — Microprocesseur Intel 4004\n# puis    1991 — Le World Wide Web\n\nxxe = [e[\"evenement\"] for e in frise if 1900 &lt;= e[\"annee\"] &lt;= 1999]\nprint(xxe)  # affiche ['Microprocesseur Intel 4004', 'Le World Wide Web']</code></pre><ul><li><strong>Internet ≠ Web</strong> : Internet est le réseau (ARPANET 1969, TCP/IP), le Web est un service qui circule dessus (Berners-Lee, 1989).</li><li>Une frise est une <strong>table de données</strong> : on la trie avec <code>sorted(..., key=lambda ...)</code> et on la filtre avec une compréhension de liste.</li><li>L'IA « apprend » à partir de <strong>données</strong> : leur qualité et leurs biais comptent énormément (vie privée, désinformation, RGPD). La séance se conclut par le QCM du thème puis le DS de 40 min.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Au cœur d'un ordinateur, il n'y a ni lettres ni images : il n'y a que de l'électricité. Dans un circuit, le courant <strong>passe</strong> ou <strong>ne passe pas</strong> ; on note ces deux états <code>1</code> et <code>0</code>. Un <strong>bit</strong> (<em>binary digit</em>, « chiffre binaire ») est cette plus petite unité d'information : une case qui vaut 0 ou 1, comme un interrupteur. Si toute l'informatique repose sur le binaire, c'est pour une raison de <strong>fiabilité</strong> : deux états très éloignés ne se confondent presque jamais, alors que dix niveaux de tension se confondraient sans cesse.</p><p>Déroulons l'activité des cartes à la main. Chaque îlot dispose de 5 cartes portant les points 16, 8, 4, 2, 1 : une carte visible compte, une carte cachée ne compte pas. Pour former 13 : la carte 16 est trop grande (cachée), on montre 8, on montre 4 (8 + 4 = 12), on cache 2, on montre 1 → 8 + 4 + 1 = 13, ce qui s'écrit <code>01101</code>. Combien de nombres différents avec 5 cartes ? Chaque carte a 2 positions (visible ou cachée), donc 2 × 2 × 2 × 2 × 2 = <strong>32</strong> configurations : on code tous les entiers de 0 à 31.</p><p>C'est LA formule du thème : <strong>n bits permettent 2ⁿ valeurs</strong> — chaque bit ajouté double les possibilités, car toute combinaison existante peut être prolongée par un 0 ou par un 1. Un <strong>octet</strong> (<em>byte</em> en anglais) est un paquet de <strong>8 bits</strong> : 2⁸ = 256 combinaisons, soit les entiers de 0 à 255. C'est l'unité de base de la mémoire.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code># La table des puissances de 2, à connaître jusqu'à 2**10\nfor n in range(11):\n    print(n, \"bits -&gt;\", 2 ** n, \"valeurs\")\n# dernière ligne affichée : 10 bits -&gt; 1024 valeurs\n\nprint(\"Un octet :\", 2 ** 8, \"valeurs, de 0 à\", 2 ** 8 - 1)\n# affiche Un octet : 256 valeurs, de 0 à 255</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>range(11)</code> fait prendre à <code>n</code> les valeurs 0, 1, 2, …, 10 : on obtient la table des puissances de 2 jusqu'à 2¹⁰ = 1024.</li><li><code>2 ** n</code> est la puissance en Python : <code>2 ** 8</code> vaut 256.</li><li>Le plus grand entier codable sur n bits est <code>2 ** n - 1</code>, car on commence à compter à 0 : 256 valeurs vont de 0 à 255.</li></ul><p><strong>📋 Trace d'exécution — former 13 avec les cartes :</strong></p><table><tr><th>Carte (poids)</th><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr><tr><th>Visible ?</th><td>non</td><td>oui</td><td>oui</td><td>non</td><td>oui</td></tr><tr><th>Bit</th><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><th>Contribue</th><td>0</td><td>8</td><td>4</td><td>0</td><td>1</td></tr></table><p>8 + 4 + 1 = 13 : le nombre 13 s'écrit <code>01101</code> sur 5 bits.</p><p><strong>🎯 Défi élève :</strong> compléter les trous.</p><pre><code>nb_cartes = 5\nnb_valeurs = 2 ** ______\nprint(nb_valeurs)       # affiche 32\n\n# Un octet = ______ bits\nprint(2 ** 8)           # affiche ______\n\n# Plus grand entier codable sur un octet\nprint(2 ** 8 - ______)  # affiche 255</code></pre><p>✅ Réponse :</p><pre><code>nb_cartes = 5\nnb_valeurs = 2 ** nb_cartes\nprint(nb_valeurs)       # affiche 32\n\n# Un octet = 8 bits\nprint(2 ** 8)           # affiche 256\n\n# Plus grand entier codable sur un octet\nprint(2 ** 8 - 1)       # affiche 255</code></pre><ul><li>Ne pas confondre le <strong>bit</strong> (noté b) et l'<strong>octet</strong> (noté o, ou <em>byte</em> = B) : un débit Internet de « 100 Mb/s » vaut 100 ÷ 8 ≈ 12,5 Mo/s.</li><li>La formule à connaître par cœur : <strong>n bits → 2ⁿ valeurs</strong>, de 0 à 2ⁿ − 1.</li><li>1 octet = 8 bits = 256 valeurs ; en unités officielles, ko = 1000 o et Kio = 1024 o.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Pourquoi écrit-on « 2025 » ? Parce que la <strong>position</strong> de chaque chiffre lui donne un <em>poids</em>, une puissance de 10 : 2×10³ + 0×10² + 2×10¹ + 5×10⁰ = 2000 + 0 + 20 + 5 = 2025. En <strong>base 2</strong>, c'est exactement le même principe avec seulement deux chiffres (0 et 1) et des poids en <strong>puissances de 2</strong> : …, 32, 16, 8, 4, 2, 1.</p><p><strong>Binaire → décimal, à la main :</strong> écrire au-dessus de chaque bit son poids (de droite à gauche), ne garder que les poids des bits à 1, puis additionner. Pour <code>101010</code> : poids 32 16 8 4 2 1, bits 1 0 1 0 1 0 → on garde 32 + 8 + 2 = <strong>42</strong>. Pour <code>11111111</code> (un octet plein) : 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = <strong>255</strong>, le maximum d'un octet.</p><p><strong>Décimal → binaire, à la main (divisions successives) :</strong> diviser par 2, noter le <strong>reste</strong> (0 ou 1), recommencer avec le quotient jusqu'à obtenir 0, puis lire les restes <strong>de bas en haut</strong>. Pour 38 : 38 ÷ 2 = 19 reste 0 ; 19 ÷ 2 = 9 reste 1 ; 9 ÷ 2 = 4 reste 1 ; 4 ÷ 2 = 2 reste 0 ; 2 ÷ 2 = 1 reste 0 ; 1 ÷ 2 = 0 reste 1. En remontant : <code>100110</code>.</p><p><strong>🐢 Première méthode — binaire → décimal en Python :</strong></p><pre><code>def bin_vers_dec(chaine):\n    total = 0\n    for bit in chaine:          # on lit de gauche à droite\n        total = total * 2 + int(bit)\n    return total\n\nprint(bin_vers_dec(\"101010\"))    # affiche 42\nprint(bin_vers_dec(\"11111111\"))  # affiche 255\n\n# Vérification avec l'outil intégré de Python\nprint(int(\"101010\", 2))          # affiche 42</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>À chaque nouveau bit lu, <code>total = total * 2 + int(bit)</code> décale tout ce qui est déjà lu d'un cran vers la gauche (×2) puis ajoute le bit : c'est l'algorithme de Horner.</li><li><code>int(bit)</code> transforme le caractère <code>\"1\"</code> en nombre 1.</li><li><code>int(chaine, 2)</code> est l'outil intégré : on l'utilise pour <em>vérifier</em> son calcul papier, pas pour le remplacer.</li></ul><p><strong>🐢 Dans l'autre sens — décimal → binaire :</strong></p><pre><code>def dec_vers_bin(n):\n    if n == 0:\n        return \"0\"\n    bits = \"\"\n    while n &gt; 0:\n        bits = str(n % 2) + bits   # le reste, ajouté DEVANT\n        n = n // 2                 # division entière\n    return bits\n\nprint(dec_vers_bin(42))   # affiche 101010\nprint(dec_vers_bin(38))   # affiche 100110</code></pre><p>Deux idées clés : <code>n % 2</code> donne le reste de la division par 2 (le bit le plus à droite) et <code>n // 2</code> est la division entière (on « retire » ce bit). Comme les restes sortent dans le mauvais ordre, on les ajoute <em>devant</em> la chaîne.</p><p><strong>📋 Trace d'exécution — dec_vers_bin(42) :</strong></p><table><tr><th>n</th><th>n % 2 (reste)</th><th>bits après l'étape</th></tr><tr><td>42</td><td>0</td><td>0</td></tr><tr><td>21</td><td>1</td><td>10</td></tr><tr><td>10</td><td>0</td><td>010</td></tr><tr><td>5</td><td>1</td><td>1010</td></tr><tr><td>2</td><td>0</td><td>01010</td></tr><tr><td>1</td><td>1</td><td>101010</td></tr><tr><td>0</td><td>Stop</td><td>on renvoie « 101010 »</td></tr></table><p><strong>🎯 Défi élève :</strong> écrire <code>nb_bits(v)</code>, le nombre de bits nécessaires pour écrire l'entier v en binaire.</p><pre><code>def nb_bits(v):\n    \"\"\"Nombre de bits nécessaires pour écrire v en binaire.\"\"\"\n    bits = 0\n    while v ______ 0:\n        v = v ______ 2      # on retire le bit de droite\n        bits = bits + ______\n    return bits\n\nprint(nb_bits(42))    # affiche ______\nprint(nb_bits(255))   # affiche 8</code></pre><p>✅ Réponse :</p><pre><code>def nb_bits(v):\n    \"\"\"Nombre de bits nécessaires pour écrire v en binaire.\"\"\"\n    bits = 0\n    while v &gt; 0:\n        v = v // 2          # on retire le bit de droite\n        bits = bits + 1\n    return bits\n\nprint(nb_bits(42))    # affiche 6\nprint(nb_bits(255))   # affiche 8</code></pre><ul><li>Toujours convertir au papier d'abord, <em>puis</em> vérifier avec Python (<code>int(\"101010\", 2)</code>, <code>bin(38)</code>).</li><li>Divisions successives : on lit les restes <strong>de bas en haut</strong> — c'est l'oubli classique.</li><li>Le bit le plus à droite indique si le nombre est impair ; chaque poids vers la gauche vaut le double du précédent.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion — l'hexadécimal (base 16) :</strong></p><p>Le binaire est fiable pour la machine mais pénible pour les humains : <code>11111111</code> est long et difficile à relire. D'où la <strong>base 16</strong> (hexadécimal), très utilisée en informatique (couleurs web, adresses mémoire…). Il faut 16 symboles : on réutilise 0 à 9, puis les lettres.</p><table><tr><th>Hexa</th><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td></tr><tr><th>Décimal</th><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr></table><p>Le lien magique : 16 = 2⁴, donc <strong>un chiffre hexadécimal correspond exactement à 4 bits</strong> (un « quartet »). Convertir un octet devient un simple découpage en deux paquets de 4 bits. Et pour lire un nombre hexa, même principe positionnel qu'en séance précédente, avec des poids en puissances de 16 : <code>2A</code> = 2×16 + 10 = <strong>42</strong>. C'est ainsi qu'une couleur web comme <code>#1E90FF</code> se lit : trois octets écrits en hexa, un pour le rouge, un pour le vert, un pour le bleu.</p><p><strong>📖 La notion — coder les négatifs, le complément à deux :</strong></p><p>Comment coder <strong>−5</strong> alors qu'on n'a que des 0 et des 1, pas de signe « − » ? La solution universelle est le <strong>complément à deux</strong>. Recette sur 8 bits, déroulée à la main pour −5 :</p><ul><li>Étape 1 — coder la valeur positive : +5 = <code>00000101</code> ;</li><li>Étape 2 — <strong>inverser</strong> tous les bits (0↔1) : <code>11111010</code> ;</li><li>Étape 3 — <strong>ajouter 1</strong> : <code>11111011</code> ← voilà −5.</li></ul><p>Pourquoi ça marche ? Parce que <code>5 + (−5)</code> donne <code>1 00000000</code> : le 9ᵉ bit déborde et disparaît, il reste 0. L'addition redonne zéro sans règle spéciale : le processeur additionne positifs et négatifs avec le même circuit. Le bit de gauche (poids fort) joue le rôle de <strong>signe</strong> ; sur 8 bits, on couvre les entiers de <strong>−128 à +127</strong>.</p><p><strong>🐢 Première méthode — Python jongle entre les bases :</strong></p><pre><code>n = 42\nprint(bin(n))          # affiche 0b101010\nprint(hex(n))          # affiche 0x2a\nprint(int(\"CA\", 16))   # affiche 202\nprint(int(\"FF\", 16))   # affiche 255\n\n# Décomposer la couleur #1E90FF en rouge, vert, bleu\ncouleur = \"1E90FF\"\nr, v, b = int(couleur[0:2], 16), int(couleur[2:4], 16), int(couleur[4:6], 16)\nprint(\"R,V,B =\", r, v, b)   # affiche R,V,B = 30 144 255</code></pre><p><strong>🐢 Coder un négatif en Python :</strong></p><pre><code>def complement_a_deux(n):\n    \"\"\"Écriture de n sur 8 bits (n entre -128 et 127).\"\"\"\n    if n &lt; 0:\n        n = 2 ** 8 + n          # on ajoute 256\n    return format(n, \"08b\")     # écriture binaire sur 8 chiffres\n\nprint(complement_a_deux(5))     # affiche 00000101\nprint(complement_a_deux(-5))    # affiche 11111011\nprint(complement_a_deux(-1))    # affiche 11111111</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>bin(n)</code> et <code>hex(n)</code> renvoient les écritures binaire (préfixe <code>0b</code>) et hexadécimale (préfixe <code>0x</code>) ; <code>int(chaine, 16)</code> fait le chemin inverse.</li><li><code>couleur[0:2]</code> est une tranche : les deux premiers caractères (« 1E »), lus en base 16 → 30 de rouge.</li><li>Ajouter 256 à un négatif revient exactement à « inverser puis ajouter 1 » : pour −5, (255 − 5) + 1 = 251 = 256 − 5.</li></ul><p><strong>📋 Trace — l'octet 11001010 en hexa (par quartets) :</strong></p><table><tr><th>Octet découpé</th><td>1100</td><td>1010</td></tr><tr><th>Quartet en décimal</th><td>8 + 4 = 12</td><td>8 + 2 = 10</td></tr><tr><th>Chiffre hexa</th><td>C</td><td>A</td></tr></table><p><code>11001010</code> s'écrit donc <strong>CA</strong> en hexadécimal (et vaut 202 en décimal).</p><p><strong>🎯 Défi élève :</strong> compléter les trous.</p><pre><code>def complement_a_deux(n):\n    if n ______ 0:\n        n = 2 ** 8 ______ n\n    return format(n, \"08b\")\n\nprint(complement_a_deux(5))      # affiche 00000101\nprint(complement_a_deux(-5))     # affiche ______\nprint(complement_a_deux(-128))   # affiche 10000000</code></pre><p>✅ Réponse :</p><pre><code>def complement_a_deux(n):\n    if n &lt; 0:\n        n = 2 ** 8 + n\n    return format(n, \"08b\")\n\nprint(complement_a_deux(5))      # affiche 00000101\nprint(complement_a_deux(-5))     # affiche 11111011\nprint(complement_a_deux(-128))   # affiche 10000000</code></pre><ul><li>1 chiffre hexadécimal = exactement 4 bits (un quartet), car 16 = 2⁴ : convertir, c'est découper.</li><li>Sur 8 bits en complément à deux, la plage est −128 à +127 ; le bit de poids fort sert de signe (1 = négatif).</li><li>Une couleur web #RRVVBB, c'est trois octets écrits en hexa : FF = 255 = intensité maximale.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion 1 — le débordement (overflow) :</strong></p><p>Un nombre de bits fixé impose une <strong>limite</strong>. Si un calcul la dépasse, le résultat « tourne », comme le <strong>compteur kilométrique</strong> d'une voiture qui repasse à 000000 après 999999. Déroulons à la main sur un octet non signé (0 à 255) : 250 + 10 = 260, mais 260 est impossible à écrire sur 8 bits ; la machine ne garde que 260 − 256 = <strong>4</strong>. De même, 255 + 1 donne 0. C'est un <strong>débordement</strong> (<em>overflow</em>), source de bugs célèbres. En Python, les entiers sont de taille illimitée (pas de débordement), mais dans la plupart des langages (C, Java…) et dans le matériel, la taille est fixe.</p><p><strong>🐢 Simuler un octet en Python :</strong></p><pre><code>def add8(a, b):\n    return (a + b) % 256\n\nprint(add8(250, 10))    # affiche 4\nprint(add8(255, 1))     # affiche 0  (déborde !)\nprint(add8(200, 100))   # affiche 44\n\n# Python pur, lui, ne déborde jamais :\nprint(2 ** 100)   # affiche 1267650600228229401496703205376</code></pre><p><strong>🔍 Comment ça marche :</strong> <code>% 256</code> ne garde que le reste de la division par 256 : tout ce qui dépasse 255 « retombe » au début, exactement comme le 9ᵉ bit, qui n'existe pas, disparaît.</p><p><strong>📖 La notion 2 — les flottants sont des approximations :</strong></p><p>Pour les nombres à virgule, l'ordinateur utilise le type <strong>flottant</strong> (<code>float</code>). Après la virgule, les positions valent ½, ¼, ⅛… Certains nombres tombent juste : 0,5 = ½ = <code>0,1</code> en binaire ; 0,75 = ½ + ¼ = <code>0,11</code>. Mais <strong>0,1 n'a pas d'écriture binaire finie</strong> (le motif <code>0011</code> se répète à l'infini), exactement comme 1/3 = 0,3333… en décimal : la machine doit tronquer. Conséquence : <code>0.1 + 0.2</code> ne vaut pas exactement <code>0.3</code>. Ce n'est pas un bug de Python, c'est une limite de tous les ordinateurs. Règle d'or : <strong>on ne teste jamais l'égalité stricte <code>==</code> entre deux flottants</strong> ; on vérifie qu'ils sont <em>proches</em>, à une petite tolérance près.</p><pre><code>print(0.1 + 0.2)          # affiche 0.30000000000000004\nprint(0.1 + 0.2 == 0.3)   # affiche False (surprenant mais normal)\n\n# Bonne pratique : comparer à une tolérance (epsilon)\ndef proche(a, b, eps=1e-9):\n    return abs(a - b) &lt; eps\n\nprint(proche(0.1 + 0.2, 0.3))   # affiche True</code></pre><p><strong>📖 La notion 3 — les booléens et l'algèbre de Boole :</strong></p><p>Le type <strong>booléen</strong> (<code>bool</code>) n'a que deux valeurs : <code>True</code> (Vrai) et <code>False</code> (Faux). C'est le type des conditions. On les combine avec trois opérateurs, formalisés par George Boole en 1854 : <strong>et</strong> (<code>and</code>), vrai seulement si les <em>deux</em> sont vrais ; <strong>ou</strong> (<code>or</code>), vrai si <em>au moins un</em> est vrai ; <strong>non</strong> (<code>not</code>), qui inverse. Exemple parlant : « je prends un parapluie <em>si</em> il pleut <strong>et</strong> je sors ».</p><p><strong>📋 Table de vérité (V = Vrai, F = Faux) :</strong></p><table><tr><th>a</th><th>b</th><th>a et b</th><th>a ou b</th><th>non a</th></tr><tr><td>F</td><td>F</td><td>F</td><td>F</td><td>V</td></tr><tr><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td><td>F</td></tr><tr><td>V</td><td>V</td><td>V</td><td>V</td><td>F</td></tr></table><pre><code>print(True and False)   # affiche False\nprint(True or False)    # affiche True\nprint(not True)         # affiche False\n\n# Un mot de passe valide : au moins 8 caractères ET un chiffre\nmdp = \"robot2026\"\nprint(len(mdp) &gt;= 8 and \"2\" in mdp)   # affiche True</code></pre><p><strong>🎯 Défi élève :</strong> compléter les trous.</p><pre><code>def add8(a, b):\n    return (a + b) % ______\n\nprint(add8(250, 10))            # affiche ______\n\ndef proche(a, b, eps=1e-9):\n    return ______(a - b) &lt; eps\n\nprint(proche(0.1 + 0.2, 0.3))   # affiche ______</code></pre><p>✅ Réponse :</p><pre><code>def add8(a, b):\n    return (a + b) % 256\n\nprint(add8(250, 10))            # affiche 4\n\ndef proche(a, b, eps=1e-9):\n    return abs(a - b) &lt; eps\n\nprint(proche(0.1 + 0.2, 0.3))   # affiche True</code></pre><ul><li>On ne teste <strong>jamais</strong> l'égalité stricte <code>==</code> entre deux flottants : on compare à une tolérance (fonction <code>proche</code>).</li><li>En Python, les entiers ne débordent jamais ; sur 8 bits (et en C, Java…), le calcul « tourne » modulo 256.</li><li>Les tables de vérité de <code>et</code>, <code>ou</code>, <code>non</code> sont à connaître par cœur : elles fondent les circuits (portes logiques) et toutes les conditions.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>La machine ne connaît que des nombres. Pour coder les <strong>lettres</strong>, on attribue donc à chaque caractère un <strong>numéro</strong>, via une table de correspondance. La première grande table est l'<strong>ASCII</strong> (années 1960) : 128 caractères codés sur 7 bits. Repères à connaître : « A » = 65, « a » = 97 (minuscule = majuscule + 32), « 0 » = 48, l'espace = 32.</p><p>Décodons à la main le message <code>[72, 73, 32, 78, 83, 73]</code> avec la table ASCII : 72 → H ; 73 → I ; 32 → espace ; 78 → N ; 83 → S ; 73 → I. Le message est « HI NSI ». Aucun programme : juste la table — c'est exactement ce que fait la machine.</p><p>128 caractères, c'est trop peu pour les langues du monde (accents, arabe, chinois, emoji…). <strong>Unicode</strong> attribue un numéro (<em>code point</em>) à plus de 140 000 caractères, et <strong>UTF-8</strong> les stocke sur <strong>1 à 4 octets</strong>, en restant compatible avec l'ASCII. En Python : <code>ord(c)</code> donne le numéro d'un caractère, <code>chr(n)</code> fait l'inverse.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le décodeur secret avec une boucle.</p><pre><code>print(ord(\"A\"), ord(\"a\"), ord(\"0\"))   # affiche 65 97 48\nprint(chr(78), chr(83), chr(73))      # affiche N S I\n\ncodes = [72, 73, 32, 78, 83, 73]\nmessage = \"\"\nfor c in codes:\n    message = message + chr(c)\nprint(message)                        # affiche HI NSI</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>ord</code> et <code>chr</code> sont <strong>inverses</strong> l'un de l'autre : <code>chr(ord(\"A\"))</code> redonne <code>\"A\"</code>.</li><li>La boucle utilise <code>message</code> comme <strong>accumulateur</strong> : on part de la chaîne vide et on colle un caractère à chaque tour, comme on additionnait dans une somme.</li><li><code>ord(\"é\")</code> vaut 233 : au-delà de 127, on quitte l'ASCII, Unicode prend le relais.</li></ul><p><strong>⚡ Méthode plus efficace :</strong></p><pre><code>codes = [72, 73, 32, 78, 83, 73]\nprint(\"\".join(chr(c) for c in codes))   # affiche HI NSI</code></pre><p><code>join</code> assemble tous les caractères en une seule ligne : c'est la version experte de la mission « Le décodeur secret » du site, plus courte mais identique sur le fond.</p><p><strong>📋 Trace d'exécution :</strong> la boucle du décodeur, pas à pas.</p><table><tr><th>c</th><th>chr(c)</th><th>message après le tour</th></tr><tr><td>72</td><td>H</td><td>\"H\"</td></tr><tr><td>73</td><td>I</td><td>\"HI\"</td></tr><tr><td>32</td><td>(espace)</td><td>\"HI \"</td></tr><tr><td>78</td><td>N</td><td>\"HI N\"</td></tr><tr><td>83</td><td>S</td><td>\"HI NS\"</td></tr><tr><td>73</td><td>I</td><td>\"HI NSI\"</td></tr></table><p><strong>🌍 UTF-8 en pratique :</strong> le nombre d'octets n'est <strong>pas</strong> le nombre de caractères.</p><pre><code>mot = \"été\"\nprint(len(mot))                   # affiche 3  (Python compte les CARACTÈRES)\nprint(len(mot.encode(\"utf-8\")))   # affiche 5  (octets : é=2, t=1, é=2)</code></pre><p>Une lettre accentuée « pèse » 2 octets en UTF-8. Les fameux « Ã© » apparaissent quand un texte UTF-8 est relu avec un <em>mauvais</em> codage.</p><p><strong>🎯 Défi élève :</strong> compléter le chiffre de César (décalage des lettres majuscules, avec retour de Z à A).</p><pre><code>def cesar(texte, d):\n    res = \"\"\n    for c in texte:\n        if \"A\" &lt;= c &lt;= \"Z\":\n            res += ______((______(c) - ord(\"A\") + d) % ______ + ord(\"A\"))\n        else:\n            res += ______\n    return res\n\nprint(cesar(\"NSI\", 3))             # affiche QVL\nprint(cesar(cesar(\"NSI\", 3), -3))  # affiche NSI</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def cesar(texte, d):\n    res = \"\"\n    for c in texte:\n        if \"A\" &lt;= c &lt;= \"Z\":\n            res += chr((ord(c) - ord(\"A\") + d) % 26 + ord(\"A\"))\n        else:\n            res += c\n    return res\n\nprint(cesar(\"NSI\", 3))             # affiche QVL\nprint(cesar(cesar(\"NSI\", 3), -3))  # affiche NSI</code></pre><p>On ramène la lettre dans 0..25 avec <code>ord(c) - ord(\"A\")</code>, on ajoute le décalage <strong>modulo 26</strong> pour boucler après Z, puis <code>chr</code> reconstruit le caractère : « N » (13) + 3 = 16 → « Q ». La seconde heure est consacrée au <strong>TP noté</strong> « Représentation des données » (1 h sur poste, /20), qui rebalaye tout le thème.</p><ul><li><code>ord</code> : caractère → numéro ; <code>chr</code> : numéro → caractère. Ne pas les confondre.</li><li>ASCII (128 caractères, 7 bits) est <strong>inclus</strong> dans UTF-8, qui code chaque caractère sur 1 à 4 octets.</li><li><code>len</code> compte les caractères ; <code>encode(\"utf-8\")</code> révèle les octets réellement stockés.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Dernière séance du thème : pas de notion nouvelle, mais un bouclage complet avant le DS n°2. L'idée directrice : <strong>un même nombre possède plusieurs représentations</strong>, et le thème a appris à passer de l'une à l'autre. Déroulons le fil rouge à la main avec <strong>77</strong>. En binaire : 77 = 64 + 8 + 4 + 1, soit <code>01001101</code> sur un octet. En hexadécimal, on découpe en quartets : <code>0100</code> = 4 et <code>1101</code> = 13 = D, donc <strong>4D</strong>. Pour −77 en complément à deux : on inverse <code>01001101</code> → <code>10110010</code>, puis on ajoute 1 → <code>10110011</code>. Et comme caractère, la table ASCII donne 77 → « M ». Quatre séances traversées avec un seul nombre : c'est exactement l'esprit du DS.</p><p>La première heure s'organise en trois temps : un <strong>quiz-relais</strong> en îlots construit sur la fiche-résumé (5 points) et les « Erreurs fréquentes » du site (chaque îlot rédige 2 questions pour les autres), le <strong>QCM de 18 questions</strong> en autonomie (résultats remontés dans « Ma classe »), puis la <strong>remédiation</strong> en groupes de besoin pendant que les plus solides avancent sur le mini-projet « Conversion de bases ». La seconde heure est consacrée au <strong>DS n°2 « Représentation des données »</strong> (55 min sur table, /20).</p><p><strong>🐢 Première méthode — le bilan express : une ligne de vérification par séance du thème :</strong></p><pre><code>n = 77\nprint(bin(n))                  # affiche 0b1001101  (séance 2 : conversions)\nprint(hex(n))                  # affiche 0x4d       (séance 3 : hexadécimal)\nprint(format(256 - n, \"08b\"))  # affiche 10110011   (séance 3 : -77 en complément à deux)\nprint(chr(n))                  # affiche M          (séance 5 : ASCII)\nprint(2 ** 8 - 1)              # affiche 255        (séance 1 : maximum d'un octet)\nprint(0.1 + 0.2 == 0.3)        # affiche False      (séance 4 : flottants)</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>bin</code>, <code>hex</code>, <code>format(n, \"08b\")</code> et <code>chr</code> vérifient en une ligne chacun un calcul fait au papier : c'est l'outil d'auto-contrôle de la révision — au DS, sur table, Python ne sera plus là.</li><li><code>256 - n</code> est le raccourci du complément à deux sur 8 bits : il donne exactement le même octet que « inverser puis ajouter 1 » (256 − 77 = 179 = <code>10110011</code>).</li><li>La dernière ligne est LE piège des flottants qui tombe dans tous les DS : la bonne réponse est <code>False</code>, et il faut savoir l'expliquer (0,1 n'a pas d'écriture binaire finie).</li></ul><p><strong>📋 Trace — le fil rouge 77 dans toutes les représentations :</strong></p><table><tr><th>Représentation</th><th>Calcul</th><th>Résultat</th></tr><tr><td>Binaire (poids)</td><td>64 + 8 + 4 + 1</td><td>01001101</td></tr><tr><td>Hexadécimal (quartets)</td><td>0100 → 4 ; 1101 → D</td><td>4D</td></tr><tr><td>−77 (complément à deux)</td><td>inverser → 10110010, puis + 1</td><td>10110011</td></tr><tr><td>Caractère (table ASCII)</td><td>77 → lettre M</td><td>M</td></tr></table><p><strong>🎯 Défi élève :</strong> le quiz des erreurs fréquentes — prédire chaque affichage <strong>avant</strong> d'exécuter, comme au quiz-relais.</p><pre><code>print(2 ** 4)                      # affiche ______  (piège : pas 8 !)\nprint(int(\"11111111\", 2))          # affiche ______\nprint(len(\"été\"))                  # affiche ______\nprint(len(\"été\".encode(\"utf-8\")))  # affiche ______\nprint(0.1 + 0.2 == 0.3)            # affiche ______</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>print(2 ** 4)                      # affiche 16  (piège : pas 8 !)\nprint(int(\"11111111\", 2))          # affiche 255\nprint(len(\"été\"))                  # affiche 3\nprint(len(\"été\".encode(\"utf-8\")))  # affiche 5\nprint(0.1 + 0.2 == 0.3)            # affiche False</code></pre><p>2⁴ = 2 × 2 × 2 × 2 = 16 (et non 2 × 4 = 8) ; <code>11111111</code> est l'octet plein, 255 ; « été » compte 3 caractères mais pèse 5 octets en UTF-8 (chaque « é » en occupe 2). Toute erreur à ce quiz désigne la section précise à revoir en remédiation : c'est le principe des groupes de besoin construits à partir du QCM et de la matrice « Ma classe ».</p><ul><li>Les pièges à réciter avant le DS : un octet = 8 bits mais 2⁸ = 256 valeurs ; 2⁴ = 16 (et non 8) ; jamais <code>==</code> entre deux flottants ; les restes des divisions successives se lisent de bas en haut.</li><li>Relire la fiche-résumé (5 points) et refaire le QCM de 18 questions : chaque question ratée pointe la section du cours à retravailler.</li><li>Au DS, le papier d'abord : tableau des poids pour binaire → décimal, divisions successives pour décimal → binaire, quartets pour l'hexadécimal, recette « inverser puis ajouter 1 » pour les négatifs.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> jusqu'ici, une variable ne contient qu'une <em>seule</em> valeur : un entier, un flottant, un booléen. Comment alors stocker les 30 moyennes de la classe ? Créer trente variables est impraticable. Les <strong>types construits</strong> permettent d'assembler plusieurs valeurs dans une seule structure. On en étudie trois, à bien distinguer :</p>\n<table>\n<tr><th>Structure</th><th>Forme</th><th>Modifiable ?</th><th>On accède par…</th></tr>\n<tr><td><strong>tuple</strong> (p-uplet)</td><td><code>(3, 5)</code></td><td>non (immuable)</td><td>position</td></tr>\n<tr><td><strong>liste</strong> (tableau)</td><td><code>[12, 15, 9]</code></td><td>oui</td><td>indice (position)</td></tr>\n<tr><td><strong>dictionnaire</strong></td><td><code>{\"nom\": \"Ada\"}</code></td><td>oui</td><td>clé (nom)</td></tr>\n</table>\n<p>Déroulons une liste <em>à la main</em> avec le jeu des casiers : cinq enveloppes numérotées 0, 1, 2, 3, 4 contiennent les notes 12, 15, 9, 18, 11. L'enveloppe 0 contient 12 : <strong>le premier indice est 0</strong>, pas 1. L'enveloppe -1 est la dernière : elle contient 11. La tranche 1:3 désigne les enveloppes 1 et 2 (la borne 3 est <strong>exclue</strong>) : on lit 15 et 9. Enfin, cinq enveloppes numérotées à partir de 0 : le dernier indice est 5 − 1 = 4.</p>\n<p><strong>🐢 Première méthode — simple à comprendre :</strong> le tuple, une séquence <strong>ordonnée</strong> et <strong>immuable</strong> (non modifiable), écrite entre parenthèses — parfait pour des coordonnées ou une date qui ne doivent pas changer.</p>\n<pre><code>point = (3, 5)                  # un couple (x, y)\nprint(\"abscisse :\", point[0])   # affiche abscisse : 3\nprint(\"ordonnée :\", point[1])   # affiche ordonnée : 5\n\nx, y = point                    # déballage (unpacking)\nprint(\"x =\", x, \"| y =\", y)     # affiche x = 3 | y = 5\n\n# point[0] = 9 lèverait TypeError : le tuple est immuable !</code></pre>\n<p>Puis la liste, une séquence ordonnée et <strong>modifiable</strong>, écrite entre crochets :</p>\n<pre><code>notes = [12, 15, 9, 18, 11]\nprint(notes[0])      # affiche 12   (le premier : indice 0)\nprint(notes[-1])     # affiche 11   (le dernier)\nprint(len(notes))    # affiche 5    (le nombre d'éléments)\nprint(notes[1:3])    # affiche [15, 9]   (indices 1 et 2, pas 3)\n\n# notes[5] lèverait IndexError : le dernier indice est 4 !</code></pre>\n<p><strong>🔍 Comment ça marche :</strong></p>\n<ul>\n<li><code>point[0]</code> lit l'élément par sa <strong>position</strong>, en commençant à 0 ; <code>x, y = point</code> <strong>déballe</strong> le tuple : les deux valeurs sont distribuées d'un coup dans deux variables.</li>\n<li><code>len(notes)</code> compte les éléments (5) ; le dernier indice valide est donc <code>len(notes) - 1</code>, et l'indice négatif <code>-1</code> part de la fin.</li>\n<li>Dans la tranche <code>notes[1:3]</code>, la borne de droite est <strong>exclue</strong> : on obtient les indices 1 et 2 seulement.</li>\n</ul>\n<p><strong>📋 Trace — la liste déroulée à la main :</strong></p>\n<table>\n<tr><th>Liste <code>notes</code></th><td>12</td><td>15</td><td>9</td><td>18</td><td>11</td></tr>\n<tr><th>Indice</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>\n<tr><th>Indice négatif</th><td>-5</td><td>-4</td><td>-3</td><td>-2</td><td>-1</td></tr>\n</table>\n<p><strong>🎯 Défi élève :</strong> compléter les 4 trous, prédire l'affichage <em>par écrit</em>, puis vérifier en exécutant.</p>\n<pre><code>notes = [12, 15, 9]\nnotes.______(20)         # ajoute 20 à la fin\nprint(notes[______])     # affiche le dernier : 20\n\na = 10\nb = 20\na, b = ______, ______    # échange en une ligne, sans variable temporaire\nprint(a, b)              # affiche 20 10</code></pre>\n<p><strong>✅ Réponse :</strong></p>\n<pre><code>notes = [12, 15, 9]\nnotes.append(20)         # append ajoute toujours à la fin\nprint(notes[-1])         # affiche 20\n\na = 10\nb = 20\na, b = b, a              # Python fabrique le tuple (b, a) puis le déballe\nprint(a, b)              # affiche 20 10</code></pre>\n<ul>\n<li>Le premier indice est <strong>0</strong> ; le dernier est <code>len(t) - 1</code>, ou plus simplement <code>t[-1]</code>.</li>\n<li>Un tuple est <strong>immuable</strong> : <code>point[0] = 9</code> lève <code>TypeError</code> ; le tuple d'un seul élément s'écrit <code>(42,)</code>, la virgule est obligatoire.</li>\n<li>Vocabulaire du programme (BO) : « p-uplet » = <code>tuple</code> Python ; « tableau » = <code>list</code> Python.</li>\n</ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> contrairement au tuple, une liste <strong>se modifie</strong> : on ajoute, on remplace, on supprime. Déroulons à la main la « file humaine » de l'activité débranchée, en partant de <code>[12, 15, 9]</code> :</p>\n<ul>\n<li><code>append(20)</code> : un élément arrive <em>en bout de file</em> : <code>[12, 15, 9, 20]</code> ;</li>\n<li><code>notes[2] = 10</code> : on <em>remplace</em> l'élément d'indice 2 : <code>[12, 15, 10, 20]</code> ;</li>\n<li><code>remove(15)</code> : on supprime la <em>première occurrence</em> de 15 : <code>[12, 10, 20]</code>.</li>\n</ul>\n<p>Second réflexe central : <strong>parcourir</strong> la liste pour calculer quelque chose (somme, moyenne, comptage). Pour la moyenne de <code>[12, 15, 9, 18]</code> à la main : 12 + 15 + 9 + 18 = 54, puis 54 divisé par 4 notes = 13,5.</p>\n<p><strong>🐢 Première méthode — simple à comprendre :</strong> modifier la liste, puis la parcourir avec le schéma d'<strong>accumulation</strong>, à connaître par cœur.</p>\n<pre><code>notes = [12, 15, 9]\nnotes.append(20)     # ajoute 20 à la fin\nnotes[2] = 10        # remplace l'élément d'indice 2\nnotes.remove(15)     # supprime la première occurrence de 15\nprint(notes)         # affiche [12, 10, 20]</code></pre>\n<pre><code>notes = [12, 15, 9, 18]\ntotal = 0                  # l'accumulateur, initialisé AVANT la boucle\nfor n in notes:            # parcours par éléments\n    total += n             # mise à jour à chaque tour\nprint(\"moyenne :\", total / len(notes))   # affiche moyenne : 13.5</code></pre>\n<p><strong>🔍 Comment ça marche :</strong></p>\n<ul>\n<li>On prépare une variable « accumulateur » (<code>total = 0</code>) <strong>avant</strong> la boucle ; chaque tour lui ajoute l'élément courant avec <code>total += n</code>.</li>\n<li><code>for n in notes</code> parcourt <strong>par éléments</strong> (on n'a pas besoin de la position) ; quand la position compte, on parcourt <strong>par indices</strong> : <code>for i in range(len(notes))</code>.</li>\n</ul>\n<p><strong>⚡ Méthode plus efficace — la compréhension :</strong> pour construire une liste à partir d'une autre, Python offre une écriture en une seule ligne, qui se lit à voix haute : « la liste des n·n POUR n allant de 1 à 5 ».</p>\n<pre><code># Version boucle\ncarres = []\nfor n in range(1, 6):\n    carres.append(n * n)\nprint(carres)                          # affiche [1, 4, 9, 16, 25]\n\n# Version compréhension (équivalente)\nprint([n * n for n in range(1, 6)])    # affiche [1, 4, 9, 16, 25]</code></pre>\n<p>Le gabarit à copier dans le cahier : <code>[expression for x in source if condition]</code>. La partie <code>if</code> est facultative : c'est un <strong>filtre</strong>. Exemple : <code>[n for n in range(21) if n % 2 == 0]</code> donne les nombres pairs de 0 à 20.</p>\n<p><strong>📋 Trace d'exécution</strong> — la moyenne de <code>[12, 15, 9, 18]</code> déroulée à la main :</p>\n<table>\n<tr><th>Tour</th><th>n</th><th>total après le tour</th></tr>\n<tr><td>départ</td><td>—</td><td>0</td></tr>\n<tr><td>1</td><td>12</td><td>12</td></tr>\n<tr><td>2</td><td>15</td><td>27</td></tr>\n<tr><td>3</td><td>9</td><td>36</td></tr>\n<tr><td>4</td><td>18</td><td>54</td></tr>\n<tr><td>fin</td><td>—</td><td>54 / 4 = 13.5</td></tr>\n</table>\n<p><strong>🎯 Défi élève :</strong> compléter les 3 trous pour que <code>nb_pairs(t)</code> renvoie le nombre d'éléments pairs de la liste <code>t</code>.</p>\n<pre><code>def nb_pairs(t):\n    c = ______\n    for x in t:\n        if x % ______ == 0:\n            c += ______\n    return c\n\nprint(nb_pairs([1, 2, 3, 4, 6]))   # affiche 3</code></pre>\n<p><strong>✅ Réponse :</strong></p>\n<pre><code>def nb_pairs(t):\n    c = 0                  # compteur initialisé avant la boucle\n    for x in t:\n        if x % 2 == 0:     # reste de la division par 2 nul : x est pair\n            c += 1\n    return c\n\nprint(nb_pairs([1, 2, 3, 4, 6]))   # affiche 3   (2, 4 et 6)</code></pre>\n<ul>\n<li>Accumulation : initialiser l'accumulateur <strong>avant</strong> la boucle, le mettre à jour à chaque tour.</li>\n<li>Compréhension : <code>[expression for x in source if condition]</code> — le <code>if</code> filtre.</li>\n<li><code>remove(x)</code> ne supprime que la <strong>première</strong> occurrence ; <code>append</code> ajoute toujours en fin de liste.</li>\n</ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> un élément d'une liste peut lui-même être une liste : on obtient un tableau à <strong>deux dimensions</strong> — une <strong>matrice</strong> — parfait pour une grille de bataille navale, une image (pixels) ou un plateau de morpion. On accède à une case par <strong>deux indices</strong> : <code>m[ligne][colonne]</code>, d'abord la ligne, puis la colonne.</p>\n<p>Déroulons <code>m[1][2]</code> à la main sur la grille 3×3 qui contient 1 à 9 : <code>m[1]</code> désigne la ligne d'indice 1, c'est-à-dire la <em>deuxième</em> rangée, <code>[4, 5, 6]</code> ; dans cette rangée, l'élément d'indice 2 est le <em>troisième</em> : 6. Donc <code>m[1][2]</code> vaut 6.</p>\n<p><strong>🐢 Première méthode — simple à comprendre :</strong> pour visiter <em>toutes</em> les cases, on imbrique deux boucles : l'externe prend chaque ligne, l'interne chaque valeur de la ligne.</p>\n<pre><code>m = [[1, 2, 3],\n     [4, 5, 6],\n     [7, 8, 9]]\n\nprint(m[1][2])            # affiche 6   (ligne 1, colonne 2)\n\nfor ligne in m:           # double boucle : toute la grille\n    for valeur in ligne:\n        print(valeur, end=\" \")\n    print()               # saut de ligne après chaque rangée\n# affiche la grille : 1 2 3   puis   4 5 6   puis   7 8 9</code></pre>\n<p><strong>🔍 Comment ça marche :</strong> <code>for ligne in m</code> donne successivement <code>[1, 2, 3]</code>, <code>[4, 5, 6]</code>, <code>[7, 8, 9]</code> ; pour chaque rangée, <code>for valeur in ligne</code> parcourt ses trois nombres. Pour <strong>construire</strong> une grille remplie, on utilise une compréhension imbriquée : <code>[[0 for _ in range(3)] for _ in range(2)]</code> crée 2 lignes de 3 colonnes.</p>\n<p><strong>⚠️ Le piège des alias — copie ou référence :</strong> copier une variable de liste ne copie pas la liste, seulement une <strong>référence</strong> vers le même objet. C'est LA démonstration de la séance :</p>\n<pre><code>a = [1, 2, 3]\nb = a                # b et a désignent le MÊME objet (alias)\nb.append(4)\nprint(a)             # affiche [1, 2, 3, 4]   : a aussi a changé !\n\nc = a.copy()         # vraie copie indépendante\nc.append(99)\nprint(a)             # affiche [1, 2, 3, 4]   : a est intact</code></pre>\n<pre><code>piege = [[0] * 3] * 2      # DEUX références vers la MÊME ligne !\npiege[0][0] = 9\nprint(piege)               # affiche [[9, 0, 0], [9, 0, 0]]\n\ngrille = [[0 for _ in range(3)] for _ in range(2)]   # lignes indépendantes\ngrille[0][0] = 9\nprint(grille)              # affiche [[9, 0, 0], [0, 0, 0]]</code></pre>\n<p>Règle absolue : une matrice se construit <strong>par compréhension imbriquée, jamais par multiplication</strong>. Vérification pas à pas possible avec le bouton « 🔎 Pas à pas » (Python Tutor) du site.</p>\n<p><strong>📋 Trace d'exécution</strong> — l'évaluation de <code>m[1][2]</code> :</p>\n<table>\n<tr><th>Étape</th><th>Expression</th><th>Résultat</th></tr>\n<tr><td>1</td><td><code>m[1]</code></td><td><code>[4, 5, 6]</code> (la ligne d'indice 1)</td></tr>\n<tr><td>2</td><td><code>m[1][2]</code></td><td>6 (l'élément d'indice 2 de cette ligne)</td></tr>\n</table>\n<p><strong>🎯 Défi élève :</strong> compléter les 3 trous pour construire une matrice 3×3 remplie de 0 avec des 1 sur la diagonale.</p>\n<pre><code>n = 3\nm = [[______ for _ in range(n)] for _ in range(n)]   # grille remplie de 0\nfor i in range(n):\n    m[i][______] = 1        # un 1 sur la diagonale\nfor ligne in m:\n    print(______)</code></pre>\n<p><strong>✅ Réponse :</strong></p>\n<pre><code>n = 3\nm = [[0 for _ in range(n)] for _ in range(n)]\nfor i in range(n):\n    m[i][i] = 1             # même indice de ligne et de colonne\nfor ligne in m:\n    print(ligne)\n# affiche [1, 0, 0]   puis   [0, 1, 0]   puis   [0, 0, 1]</code></pre>\n<ul>\n<li><code>m[ligne][colonne]</code> : d'abord la ligne, puis la colonne — et les deux indices commencent à 0.</li>\n<li>Jamais <code>[[0] * n] * n</code> : les lignes seraient des alias de la même liste ; toujours la compréhension imbriquée.</li>\n<li><code>b = a</code> ne copie pas une liste ; pour une copie indépendante : <code>b = a.copy()</code>.</li>\n</ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> un <strong>dictionnaire</strong> (<code>dict</code>) associe à chaque <strong>clé</strong> une <strong>valeur</strong> — des paires clé : valeur écrites entre accolades. Changement de logique par rapport à la liste : on n'accède plus par une <strong>position</strong> (0, 1, 2…) mais par un <strong>nom</strong> de clé. Comparer <code>eleve[2]</code> (que désigne l'indice 2 ?) et <code>eleve[\"moyenne\"]</code> (limpide !).</p>\n<p>Déroulons à la main la « carte d'identité » de l'activité en îlot : la fiche associe nom → Lovelace, prenom → Ada, moyenne → 17.5. Pour lire la moyenne, on ne compte pas les positions : on cherche la clé <code>\"moyenne\"</code> et on lit la valeur en face, 17.5. Si l'on demande la clé <code>\"age\"</code>, elle n'existe pas : Python lèverait une <code>KeyError</code>. Vocabulaire BO : le « p-uplet nommé » du programme se réalise en Python par un dictionnaire à clés fixes.</p>\n<p><strong>🐢 Première méthode — les 4 gestes (lire, écrire, .get, .items) :</strong></p>\n<pre><code>eleve = {\"nom\": \"Lovelace\", \"prenom\": \"Ada\", \"moyenne\": 17.5}\n\nprint(eleve[\"nom\"])            # affiche Lovelace   (accès par la CLÉ)\neleve[\"classe\"] = \"1NSI\"       # AJOUT : la clé est nouvelle\neleve[\"moyenne\"] = 18          # MODIFICATION : la clé existe déjà\n\nprint(eleve.get(\"age\", \"non renseigné\"))   # affiche non renseigné\n\nfor cle, valeur in eleve.items():          # parcours des paires\n    print(cle, \":\", valeur)\n# affiche nom : Lovelace / prenom : Ada / moyenne : 18 / classe : 1NSI</code></pre>\n<p><strong>🔍 Comment ça marche :</strong></p>\n<ul>\n<li><code>d[clé] = v</code> a la <strong>même syntaxe</strong> pour ajouter (clé nouvelle) et pour modifier (clé existante).</li>\n<li>Lire une clé absente avec <code>d[\"age\"]</code> lève une <code>KeyError</code> ; <code>d.get(\"age\", défaut)</code> renvoie le défaut <strong>sans erreur</strong>.</li>\n<li>Une boucle <code>for</code> sur un dictionnaire parcourt ses <strong>clés</strong> ; pour obtenir les paires (clé, valeur), on utilise <code>.items()</code>.</li>\n</ul>\n<p><strong>⚡ Le motif à connaître par cœur — compter avec un dictionnaire :</strong> combien de fois chaque élément apparaît-il ? On part d'un dictionnaire vide, et <code>.get</code> évite toute <code>KeyError</code>.</p>\n<pre><code>votes = [\"Mario\", \"Zelda\", \"Mario\", \"Sonic\", \"Mario\", \"Zelda\"]\n\ncompte = {}\nfor jeu in votes:\n    compte[jeu] = compte.get(jeu, 0) + 1\nprint(compte)   # affiche {'Mario': 3, 'Zelda': 2, 'Sonic': 1}</code></pre>\n<p>Le <code>.get(jeu, 0)</code> renvoie 0 si la clé n'existe pas <em>encore</em> : le premier vote pour un jeu crée sa clé avec 0 + 1 = 1, les suivants l'augmentent.</p>\n<p><strong>📋 Trace d'exécution</strong> — le comptage déroulé à la main :</p>\n<table>\n<tr><th>jeu</th><th>compte.get(jeu, 0)</th><th>compte après le tour</th></tr>\n<tr><td>Mario</td><td>0</td><td>{'Mario': 1}</td></tr>\n<tr><td>Zelda</td><td>0</td><td>{'Mario': 1, 'Zelda': 1}</td></tr>\n<tr><td>Mario</td><td>1</td><td>{'Mario': 2, 'Zelda': 1}</td></tr>\n<tr><td>Sonic</td><td>0</td><td>{'Mario': 2, 'Zelda': 1, 'Sonic': 1}</td></tr>\n<tr><td>Mario</td><td>2</td><td>{'Mario': 3, 'Zelda': 1, 'Sonic': 1}</td></tr>\n<tr><td>Zelda</td><td>1</td><td>{'Mario': 3, 'Zelda': 2, 'Sonic': 1}</td></tr>\n</table>\n<p><strong>🎯 Défi élève :</strong> l'inventaire du jeu — compléter les 3 trous.</p>\n<pre><code>inventaire = {\"potion\": 3, \"or\": 150}\n\ninventaire[\"potion\"] ______ 2      # le héros ramasse 2 potions\ninventaire[______] = 1             # il gagne un bouclier\nprint(inventaire)                  # affiche {'potion': 5, 'or': 150, 'bouclier': 1}\n\n# la quantité de flèches, SANS erreur (0 par défaut)\nprint(\"flèches :\", inventaire.______(\"flèche\", 0))   # affiche flèches : 0</code></pre>\n<p><strong>✅ Réponse :</strong></p>\n<pre><code>inventaire = {\"potion\": 3, \"or\": 150}\n\ninventaire[\"potion\"] += 2          # modifie une clé existante : 3 + 2 = 5\ninventaire[\"bouclier\"] = 1         # ajoute une clé nouvelle\nprint(inventaire)                  # affiche {'potion': 5, 'or': 150, 'bouclier': 1}\n\nprint(\"flèches :\", inventaire.get(\"flèche\", 0))      # affiche flèches : 0</code></pre>\n<ul>\n<li>Lire une clé absente : <code>d[clé]</code> lève <code>KeyError</code> ; <code>d.get(clé, défaut)</code> non.</li>\n<li>Une clé doit être unique et <strong>immuable</strong> (chaîne, entier, tuple) — jamais une liste.</li>\n<li><code>for cle, valeur in d.items()</code> : LE parcours à retenir pour obtenir les paires.</li>\n</ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>ensemble</strong> (<code>set</code>) est une collection <strong>non ordonnée</strong> et <strong>sans doublon</strong>, écrite entre accolades comme un dictionnaire, mais <strong>sans les « : »</strong>. Déroulons à la main : les notes relevées sont 12, 15, 12, 8, 15, 19, 8. Pour savoir combien il y a de notes <em>différentes</em>, on recopie chaque valeur en barrant celles déjà vues : il reste 12, 15, 8, 19 — soit <strong>4 notes différentes</strong>. Même logique pour comparer deux groupes : au foot, Léa, Tom, Hugo et Inès ; au théâtre, Tom, Inès et Maya. Qui fait les deux (<strong>ET</strong>) ? Tom et Inès. Qui fait au moins une activité (<strong>OU</strong>) ? Léa, Tom, Hugo, Inès et Maya. Qui fait du foot <strong>SANS</strong> théâtre ? Léa et Hugo. L'ensemble fait ces raisonnements en une seule opération : <code>&amp;</code> (intersection), <code>|</code> (union), <code>-</code> (différence).</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>notes = [12, 15, 12, 8, 15, 19, 8]\ndistinctes = set(notes)          # les doublons disparaissent\nprint(len(distinctes))           # affiche 4\nprint(sorted(distinctes))        # affiche [8, 12, 15, 19]\n\nfoot = {\"Léa\", \"Tom\", \"Hugo\", \"Inès\"}\ntheatre = {\"Tom\", \"Inès\", \"Maya\"}\nprint(sorted(foot &amp; theatre))    # affiche ['Inès', 'Tom']\nprint(sorted(foot - theatre))    # affiche ['Hugo', 'Léa']</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>set(notes)</code> fabrique l'ensemble : chaque valeur n'y figure qu'une seule fois, les doublons disparaissent automatiquement ;</li><li><code>&amp;</code> garde ce qui est dans les deux ensembles (ET), <code>|</code> réunit tout (OU), <code>-</code> retire (SANS) ;</li><li>un ensemble ne se range pas : pas d'indice <code>s[0]</code> ; pour un affichage stable, <code>sorted(s)</code> renvoie une liste triée.</li></ul><p><strong>⚡ Choisir la bonne structure :</strong></p><p>C'est la compétence visée du thème : non pas réciter la syntaxe, mais <strong>choisir</strong> la structure adaptée au besoin. Atout du dictionnaire et de l'ensemble : retrouver une clé est <strong>quasi immédiat</strong>, alors que <code>x in liste</code> doit parcourir toute la liste.</p><table><tr><th>Le besoin</th><th>La structure</th><th>Exemple</th></tr><tr><td>Données fixes qui vont ensemble</td><td><strong>tuple</strong></td><td>une coordonnée <code>(x, y)</code></td></tr><tr><td>Collection ordonnée et modifiable</td><td><strong>liste</strong></td><td>les notes d'un élève</td></tr><tr><td>Association nom → valeur</td><td><strong>dictionnaire</strong></td><td>une fiche élève</td></tr><tr><td>Éliminer les doublons / comparer des groupes</td><td><strong>ensemble (set)</strong></td><td>les notes distinctes</td></tr><tr><td>Liste de fiches</td><td><strong>liste de dictionnaires</strong></td><td>une classe entière</td></tr></table><p><strong>📋 Trace d'exécution :</strong></p><p>Le projet « Organiser les groupes du camp robotique » réinvestit tout le thème : une liste de dictionnaires en entrée et une stratégie <strong>gloutonne</strong> « distribuer comme des cartes ». On trie d'abord les 6 inscrits par niveau décroissant — Ada (3), Linus (3), Grace (2), Tim (2), Alan (1), Hedy (1) — puis l'élève d'indice <code>i</code> va dans le groupe <code>i % 2</code> :</p><table><tr><th>i</th><th>élève</th><th>i % 2</th><th>groupe 1</th><th>groupe 2</th></tr><tr><td>0</td><td>Ada</td><td>0</td><td>[Ada]</td><td>[]</td></tr><tr><td>1</td><td>Linus</td><td>1</td><td>[Ada]</td><td>[Linus]</td></tr><tr><td>2</td><td>Grace</td><td>0</td><td>[Ada, Grace]</td><td>[Linus]</td></tr><tr><td>3</td><td>Tim</td><td>1</td><td>[Ada, Grace]</td><td>[Linus, Tim]</td></tr><tr><td>4</td><td>Alan</td><td>0</td><td>[Ada, Grace, Alan]</td><td>[Linus, Tim]</td></tr><tr><td>5</td><td>Hedy</td><td>1</td><td>[Ada, Grace, Alan]</td><td>[Linus, Tim, Hedy]</td></tr></table><p>Chaque élève est placé une seule fois, les tailles sont proches (3 et 3), les niveaux sont mélangés : ce sont exactement les trois tests du projet.</p><p><strong>🎯 Défi élève :</strong> compléter la fonction du projet.</p><pre><code>def former_groupes(eleves, nb_groupes):\n    # 1) trier par niveau décroissant\n    tries = sorted(eleves, key=lambda e: e[\"______\"], reverse=______)\n    # 2) distribuer un par un dans chaque groupe\n    groupes = [[] for _ in range(______)]\n    for i, e in enumerate(tries):\n        groupes[i % ______].append(e[\"nom\"])\n    return groupes</code></pre><p>✅ Réponse :</p><pre><code>eleves = [\n    {\"nom\": \"Ada\",   \"age\": 15, \"niveau\": 3, \"activite\": \"drone\"},\n    {\"nom\": \"Alan\",  \"age\": 16, \"niveau\": 1, \"activite\": \"capteurs\"},\n    {\"nom\": \"Grace\", \"age\": 15, \"niveau\": 2, \"activite\": \"drone\"},\n    {\"nom\": \"Linus\", \"age\": 16, \"niveau\": 3, \"activite\": \"moteurs\"},\n    {\"nom\": \"Hedy\",  \"age\": 15, \"niveau\": 1, \"activite\": \"capteurs\"},\n    {\"nom\": \"Tim\",   \"age\": 16, \"niveau\": 2, \"activite\": \"moteurs\"},\n]\n\ndef former_groupes(eleves, nb_groupes):\n    tries = sorted(eleves, key=lambda e: e[\"niveau\"], reverse=True)\n    groupes = [[] for _ in range(nb_groupes)]\n    for i, e in enumerate(tries):\n        groupes[i % nb_groupes].append(e[\"nom\"])\n    return groupes\n\nfor i, g in enumerate(former_groupes(eleves, 2)):\n    print(\"Groupe\", i + 1, \":\", g)\n# affiche Groupe 1 : ['Ada', 'Grace', 'Alan']\n# affiche Groupe 2 : ['Linus', 'Tim', 'Hedy']</code></pre><ul><li><code>{ }</code> seul crée un <strong>dictionnaire vide</strong> ; l'ensemble vide s'écrit <code>set()</code>.</li><li>Un ensemble n'a pas d'ordre : pas d'indice <code>s[0]</code> ; pour trier, <code>sorted(s)</code>.</li><li>Réflexe de synthèse : chercher ou associer souvent → <code>dict</code>/<code>set</code> ; ordre et positions → liste ; données figées → tuple.</li></ul>"
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
    ],
    "cours": "<p>Séance de consolidation : relecture du résumé du thème, QCM de diagnostic, remédiation par groupes de besoin, puis TP noté d'une heure sur poste. La trace écrite tient sur une demi-page.</p><p><strong>🎯 Bilan :</strong></p><ul><li><strong>Tuple</strong> : ordonné, <strong>immuable</strong>, entre parenthèses — pratique pour renvoyer plusieurs valeurs (<code>return q, r</code>).</li><li><strong>Liste</strong> : ordonnée, modifiable, indexée <strong>à partir de 0</strong> — le dernier indice est <code>len(t)-1</code> (ou <code>t[-1]</code>) ; opérations clés : <code>append</code>, <code>t[i] = v</code>.</li><li><strong>Compréhension</strong> : <code>[expr for x in iterable if condition]</code> — transformer et filtrer en une ligne.</li><li><strong>Dictionnaire</strong> : paires clé/valeur — lecture <code>d[\"nom\"]</code>, lecture sans risque <code>d.get(clé, défaut)</code> (évite la <code>KeyError</code>), parcours avec <code>.items()</code>.</li><li><strong>Ensemble</strong> : sans doublon — <code>&amp;</code> (ET), <code>|</code> (OU), <code>-</code> (SANS). Erreurs fréquentes à revoir avant le TP : indices (le premier est 0), tuple non modifiable, confusion entre <code>[..]</code> et <code>{clé: valeur}</code>.</li></ul><p><strong>📝 Question type (extraite du TP noté) :</strong> à partir de <code>notes = [12, 8, 15, 17, 6, 14, 11]</code>, afficher la plus grande et la plus petite note <em>sans</em> utiliser <code>max</code> ni <code>min</code>.</p><p>✅ Réponse :</p><pre><code>notes = [12, 8, 15, 17, 6, 14, 11]\nmaxi = notes[0]\nmini = notes[0]\nfor x in notes:\n    if x &gt; maxi:\n        maxi = x\n    if x &lt; mini:\n        mini = x\nprint(maxi, mini)   # affiche 17 6</code></pre><p>On initialise <code>maxi</code> et <code>mini</code> avec le <strong>premier élément</strong> (jamais avec 0), puis on parcourt la liste : dès qu'une note dépasse <code>maxi</code> ou passe sous <code>mini</code>, on la mémorise. C'est le schéma d'accumulation vu lors du parcours de listes.</p><ul><li>Méthodo TP : lire tout le sujet, puis tester chaque question dans la cellule avant de passer à la suivante.</li><li>Le motif de comptage <code>occ[x] = occ.get(x, 0) + 1</code> rapporte les points du bonus.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Listes d'élèves, résultats sportifs, relevés météo, jeux de données ouverts (<em>open data</em>)… une immense partie de l'information du monde se présente sous forme de <strong>tables</strong>. Une table est un tableau régulier dans lequel :</p><ul><li>chaque <strong>ligne</strong> est un <strong>enregistrement</strong> (une « fiche ») ;</li><li>chaque <strong>colonne</strong> est un <strong>descripteur</strong> (un nom d'information) ;</li><li>toutes les lignes ont <em>les mêmes</em> descripteurs.</li></ul><p>Exemple déroulé à la main, avec trois pionniers de l'informatique :</p><table><tr><th>nom</th><th>naissance</th><th>pays</th></tr><tr><td>Turing</td><td>1912</td><td>UK</td></tr><tr><td>Lovelace</td><td>1815</td><td>UK</td></tr><tr><td>Hopper</td><td>1906</td><td>USA</td></tr></table><p>Cette table compte 3 enregistrements et 3 descripteurs (<em>nom</em>, <em>naissance</em>, <em>pays</em>). Pour répondre à « quel est le pays de Hopper ? », on repère la fiche de Hopper (3ᵉ ligne) puis on lit la colonne <em>pays</em> : USA. Or une fiche qui associe des clés (les descripteurs) à des valeurs, c'est exactement un <strong>dictionnaire</strong> Python. Une table se représente donc par une <strong>liste de dictionnaires</strong> : la liste contient les lignes, et chaque ligne est un dictionnaire dont les <strong>clés sont les noms de colonnes</strong>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>table = [\n    {\"nom\": \"Turing\",   \"naissance\": 1912, \"pays\": \"UK\"},\n    {\"nom\": \"Lovelace\", \"naissance\": 1815, \"pays\": \"UK\"},\n    {\"nom\": \"Hopper\",   \"naissance\": 1906, \"pays\": \"USA\"},\n]\n\nprint(len(table))          # affiche 3\nprint(table[0][\"nom\"])     # affiche Turing\nprint(table[2][\"pays\"])    # affiche USA\n\nfor ligne in table:\n    print(ligne[\"nom\"], \"-\", ligne[\"naissance\"])\n# affiche :\n# Turing - 1912\n# Lovelace - 1815\n# Hopper - 1906</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>len(table)</code> compte les éléments de la liste, donc le nombre de lignes ;</li><li><code>table[0]</code> est le premier dictionnaire — attention, les indices commencent à 0 : la fiche de Hopper est <code>table[2]</code> ;</li><li><code>table[2][\"pays\"]</code> enchaîne les deux accès : d'abord la ligne (par son indice), puis la cellule (par sa clé) ;</li><li>la boucle <code>for</code> parcourt les fiches une par une, comme on feuillette la pile de fiches cartonnées de l'activité débranchée.</li></ul><p><strong>📋 Trace d'exécution :</strong> déroulons la boucle à la main.</p><table><tr><th>tour</th><th>ligne</th><th>affichage</th></tr><tr><td>1</td><td>{\"nom\": \"Turing\", \"naissance\": 1912, \"pays\": \"UK\"}</td><td>Turing - 1912</td></tr><tr><td>2</td><td>{\"nom\": \"Lovelace\", \"naissance\": 1815, \"pays\": \"UK\"}</td><td>Lovelace - 1815</td></tr><tr><td>3</td><td>{\"nom\": \"Hopper\", \"naissance\": 1906, \"pays\": \"USA\"}</td><td>Hopper - 1906</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter pour afficher le nombre de lignes, la liste des colonnes, puis ajouter un enregistrement.</p><pre><code>table = [\n    {\"nom\": \"Turing\",   \"naissance\": 1912, \"pays\": \"UK\"},\n    {\"nom\": \"Lovelace\", \"naissance\": 1815, \"pays\": \"UK\"},\n    {\"nom\": \"Hopper\",   \"naissance\": 1906, \"pays\": \"USA\"},\n]\nprint(\"Nombre de lignes :\", ______(table))\nprint(\"Colonnes :\", list(table[0].______()))\ntable.______({\"nom\": \"Hamilton\", \"naissance\": 1936, \"pays\": \"USA\"})\nprint(table[______][\"nom\"])        # affiche Hamilton</code></pre><p>✅ Réponse :</p><pre><code>table = [\n    {\"nom\": \"Turing\",   \"naissance\": 1912, \"pays\": \"UK\"},\n    {\"nom\": \"Lovelace\", \"naissance\": 1815, \"pays\": \"UK\"},\n    {\"nom\": \"Hopper\",   \"naissance\": 1906, \"pays\": \"USA\"},\n]\nprint(\"Nombre de lignes :\", len(table))     # affiche Nombre de lignes : 3\nprint(\"Colonnes :\", list(table[0].keys()))  # affiche Colonnes : ['nom', 'naissance', 'pays']\ntable.append({\"nom\": \"Hamilton\", \"naissance\": 1936, \"pays\": \"USA\"})\nprint(table[3][\"nom\"])                      # affiche Hamilton</code></pre><ul><li>Vocabulaire à fixer une fois pour toutes : 1 ligne = 1 <strong>enregistrement</strong> = 1 dictionnaire ; 1 colonne = 1 <strong>descripteur</strong> = 1 clé.</li><li>Accès à une cellule : <code>table[i][\"colonne\"]</code> — l'indice d'abord, la clé ensuite ; les indices commencent à 0.</li><li>Toutes les lignes doivent avoir les mêmes clés : les colonnes de la table sont les clés de la première ligne, <code>list(table[0].keys())</code>.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Les tables circulent le plus souvent sous forme de fichiers <strong>CSV</strong> (<em>Comma-Separated Values</em>, « valeurs séparées par des virgules »). Un CSV est un simple fichier <strong>texte</strong> : ouvert dans le Bloc-notes, il ressemble à ceci.</p><pre><code>nom;naissance;pays\nTuring;1912;UK\nLovelace;1815;UK\nHopper;1906;USA</code></pre><p>Décodons-le à la main : la <strong>première ligne</strong> est l'<strong>en-tête</strong>, elle donne les descripteurs <em>nom</em>, <em>naissance</em>, <em>pays</em>. Chaque ligne suivante est un enregistrement dont les valeurs sont séparées par un <strong>séparateur</strong> — ici le point-virgule, très fréquent en France à cause des nombres décimaux à virgule. En découpant « Turing;1912;UK » et en associant chaque morceau à sa colonne, on reconstruit la fiche : nom → Turing, naissance → 1912, pays → UK. Un tableur (LibreOffice, Excel) fait exactement ce travail d'affichage en grille : le tableur n'est qu'un habillage, le fichier reste du texte.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le module <code>csv</code> et son <code>DictReader</code> transforment chaque ligne en dictionnaire, en utilisant l'en-tête comme clés. Ici on simule le fichier par une chaîne grâce à <code>io.StringIO</code> ; sur un vrai fichier, on écrirait <code>open(\"eleves.csv\")</code>.</p><pre><code>import csv, io\n\ncontenu = \"\"\"nom;naissance;pays\nTuring;1912;UK\nLovelace;1815;UK\nHopper;1906;USA\"\"\"\n\nlecteur = csv.DictReader(io.StringIO(contenu), delimiter=\";\")\ntable = list(lecteur)\nprint(len(table))                   # affiche 3\nprint(table[0][\"nom\"])              # affiche Turing\nprint(type(table[0][\"naissance\"]))  # affiche &lt;class 'str'&gt;</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>csv.DictReader</code> lit l'en-tête, puis fabrique un dictionnaire par ligne : on retrouve la liste de dictionnaires de la séance précédente ;</li><li><code>delimiter=\";\"</code> précise le séparateur (sans lui, Python attend une virgule) ;</li><li><code>list(lecteur)</code> matérialise la table pour pouvoir la parcourir plusieurs fois.</li></ul><p><strong>⚠️ Piège n°1 du thème — un CSV ne livre que des chaînes :</strong></p><p>Le type affiché est <code>&lt;class 'str'&gt;</code> : la valeur lue est <code>\"1912\"</code>, pas le nombre <code>1912</code>. Additionner <code>\"17\"</code> et <code>1</code> provoque une erreur <code>TypeError</code>. Avant tout calcul, il faut donc <strong>convertir</strong> avec <code>int(...)</code> ou <code>float(...)</code> :</p><pre><code>naissances = [int(l[\"naissance\"]) for l in table]\nprint(min(naissances))    # affiche 1815</code></pre><p><strong>📋 Trace d'exécution :</strong> ce que fabrique <code>DictReader</code> ligne par ligne (remarquer les guillemets : tout est chaîne).</p><table><tr><th>ligne lue</th><th>dictionnaire produit</th></tr><tr><td>nom;naissance;pays</td><td>(en-tête : fournit les clés)</td></tr><tr><td>Turing;1912;UK</td><td>{\"nom\": \"Turing\", \"naissance\": \"1912\", \"pays\": \"UK\"}</td></tr><tr><td>Lovelace;1815;UK</td><td>{\"nom\": \"Lovelace\", \"naissance\": \"1815\", \"pays\": \"UK\"}</td></tr><tr><td>Hopper;1906;USA</td><td>{\"nom\": \"Hopper\", \"naissance\": \"1906\", \"pays\": \"USA\"}</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter pour calculer la moyenne des notes du mini-CSV.</p><pre><code>import csv, io\ncontenu = \"\"\"nom;note\nAda;17\nAlan;12\nGrace;19\"\"\"\nlecteur = csv.DictReader(io.StringIO(contenu), delimiter=______)\ntable = ______(lecteur)\ntotal = 0\nfor l in table:\n    total = total + ______(l[\"note\"])\nprint(total / len(______))          # affiche 16.0</code></pre><p>✅ Réponse :</p><pre><code>import csv, io\ncontenu = \"\"\"nom;note\nAda;17\nAlan;12\nGrace;19\"\"\"\nlecteur = csv.DictReader(io.StringIO(contenu), delimiter=\";\")\ntable = list(lecteur)\ntotal = 0\nfor l in table:\n    total = total + int(l[\"note\"])\nprint(total / len(table))           # affiche 16.0</code></pre><ul><li>Règle en rouge dans le cahier : les valeurs lues dans un CSV sont <strong>toujours des chaînes</strong> → <code>int(l[\"note\"])</code> avant tout calcul.</li><li>La première ligne du fichier est l'<strong>en-tête</strong> : elle devient les clés des dictionnaires.</li><li>Vérifier la <strong>cohérence</strong> avant de traiter : même nombre de colonnes sur chaque ligne, pas de doublon, pas de valeur manquante (<code>\"\"</code>).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Deux traitements fondamentaux sur une table, à ne pas confondre :</p><ul><li><strong>filtrer</strong> (rechercher) : ne <strong>garder</strong> que les lignes qui vérifient une condition — on écarte des fiches, le résultat a <em>moins</em> de lignes ;</li><li><strong>trier</strong> : <strong>réordonner toutes</strong> les lignes selon une colonne — aucune fiche ne disparaît, elles changent seulement d'ordre.</li></ul><p>À la main, avec les fiches Turing (1912, UK), Lovelace (1815, UK) et Hopper (1906, USA) : le filtre « pays égal à UK » garde Turing et Lovelace et écarte Hopper — 2 fiches sur 3. Le tri « par naissance croissante » range les 3 fiches dans l'ordre 1815, 1906, 1912, c'est-à-dire Lovelace, puis Hopper, puis Turing. Dans les deux cas, on construit une <strong>nouvelle</strong> table : la table d'origine reste intacte.</p><p><strong>🐢 Filtrer avec une compréhension — simple à comprendre :</strong> le gabarit est <code>[l for l in table if condition]</code>, la compréhension de liste du thème « types construits ».</p><pre><code>table = [\n    {\"nom\": \"Turing\",   \"naissance\": 1912, \"pays\": \"UK\"},\n    {\"nom\": \"Lovelace\", \"naissance\": 1815, \"pays\": \"UK\"},\n    {\"nom\": \"Hopper\",   \"naissance\": 1906, \"pays\": \"USA\"},\n]\n\nuk = [l for l in table if l[\"pays\"] == \"UK\"]\nprint([l[\"nom\"] for l in uk])       # affiche ['Turing', 'Lovelace']\n\nrecents = [l for l in table if l[\"naissance\"] &gt; 1900]\nprint(len(recents))                 # affiche 2</code></pre><p><strong>🔍 Comment ça marche :</strong> la condition porte sur une colonne (<code>l[\"pays\"] == \"UK\"</code>) et peut en combiner plusieurs avec <code>and</code> / <code>or</code>. Le résultat est encore une table : on peut compter ses lignes avec <code>len(...)</code> ou la refiltrer.</p><p><strong>🗂️ Trier avec sorted et key :</strong> <code>sorted(table, key=...)</code> renvoie une <em>nouvelle</em> table triée. Le paramètre <strong><code>key</code></strong> indique sur quelle colonne trier : <code>lambda l: l[\"naissance\"]</code> se lit « pour une ligne <code>l</code>, renvoyer <code>l[\"naissance\"]</code> ». <code>reverse=True</code> trie en ordre décroissant.</p><pre><code>par_annee = sorted(table, key=lambda l: l[\"naissance\"])\nprint([l[\"nom\"] for l in par_annee])\n# affiche ['Lovelace', 'Hopper', 'Turing']\n\nrecent = sorted(table, key=lambda l: l[\"naissance\"], reverse=True)\nprint([l[\"nom\"] for l in recent])\n# affiche ['Turing', 'Hopper', 'Lovelace']</code></pre><p>Attention : sans <code>key</code>, <code>sorted(table)</code> provoque une erreur, car Python ne sait pas comparer deux dictionnaires — c'est l'erreur fréquente n°2 du thème.</p><p><strong>📋 Trace d'exécution :</strong> le filtre <code>l[\"pays\"] == \"UK\"</code> examiné fiche par fiche.</p><table><tr><th>ligne examinée</th><th>l[\"pays\"] == \"UK\"</th><th>gardée ?</th></tr><tr><td>Turing</td><td>True</td><td>oui</td></tr><tr><td>Lovelace</td><td>True</td><td>oui</td></tr><tr><td>Hopper</td><td>False</td><td>non</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter pour compter les élèves reçus (note ≥ 10) puis afficher la major.</p><pre><code>notes = [\n    {\"nom\": \"Ada\",   \"note\": 17},\n    {\"nom\": \"Alan\",  \"note\": 12},\n    {\"nom\": \"Grace\", \"note\": 19},\n    {\"nom\": \"Linus\", \"note\": 8},\n]\nrecus = [l ______ l in notes ______ l[\"note\"] &gt;= 10]\nprint(len(recus))                   # affiche 3\nclassement = sorted(notes, ______=lambda l: l[\"note\"], reverse=______)\nprint(classement[0][\"nom\"])         # affiche Grace</code></pre><p>✅ Réponse :</p><pre><code>notes = [\n    {\"nom\": \"Ada\",   \"note\": 17},\n    {\"nom\": \"Alan\",  \"note\": 12},\n    {\"nom\": \"Grace\", \"note\": 19},\n    {\"nom\": \"Linus\", \"note\": 8},\n]\nrecus = [l for l in notes if l[\"note\"] &gt;= 10]\nprint(len(recus))                   # affiche 3\nclassement = sorted(notes, key=lambda l: l[\"note\"], reverse=True)\nprint(classement[0][\"nom\"])         # affiche Grace</code></pre><ul><li>Les deux gabarits du cahier : <code>[l for l in table if ...]</code> (filtrer) et <code>sorted(table, key=lambda l: ..., reverse=True)</code> (trier).</li><li>Filtrer et trier construisent une <strong>nouvelle</strong> table : la table d'origine n'est jamais modifiée.</li><li>Trier sans <code>key</code> est l'erreur fréquente n°2 : toujours indiquer la colonne de tri.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Dernières briques de la chaîne de traitement : <strong>résumer</strong> une colonne (statistiques) et <strong>croiser</strong> deux tables (jointure).</p><p>Statistiques à la main sur la table des notes — Ada 17, Alan 12, Grace 19, Linus 14. Effectif : 4 lignes. Somme : 17 + 12 + 19 + 14 = 62. Moyenne : 62 ÷ 4 = 15,5. Minimum : 12 ; maximum : 19, obtenu par Grace — la major.</p><p>Jointure à la main : souvent l'information est répartie dans <strong>deux tables</strong> qui partagent une colonne commune, la <strong>clé</strong>. Exemple : une table de personnes contient un <em>code pays</em> (Turing → UK, Hopper → US) et un annuaire donne le nom complet de chaque code (UK → Royaume-Uni, US → États-Unis). Pour chaque fiche, on cherche son code dans l'annuaire et on recopie le nom complet sur la fiche : Turing est ainsi <em>enrichi</em> en « Turing, Royaume-Uni ». <strong>Combiner</strong> deux tables ainsi s'appelle une <strong>jointure</strong> — le principe au cœur des bases de données.</p><p><strong>🐢 Première méthode — les statistiques, simples à comprendre :</strong> extraire d'abord la colonne dans une liste de nombres, puis appliquer <code>len</code>, <code>sum</code>, <code>min</code>, <code>max</code>.</p><pre><code>notes = [\n    {\"nom\": \"Ada\",   \"note\": 17},\n    {\"nom\": \"Alan\",  \"note\": 12},\n    {\"nom\": \"Grace\", \"note\": 19},\n    {\"nom\": \"Linus\", \"note\": 14},\n]\n\nvaleurs = [l[\"note\"] for l in notes]\nprint(valeurs)                        # affiche [17, 12, 19, 14]\nprint(sum(valeurs) / len(valeurs))    # affiche 15.5\nmeilleur = max(notes, key=lambda l: l[\"note\"])\nprint(meilleur[\"nom\"])                # affiche Grace</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>la compréhension <code>[l[\"note\"] for l in notes]</code> extrait la colonne : une simple liste de nombres ;</li><li><code>sum(valeurs) / len(valeurs)</code> est la définition même de la moyenne ;</li><li><code>max(notes, key=lambda l: l[\"note\"])</code> renvoie la <strong>ligne entière</strong> qui maximise la note (pas la note elle-même) — même mécanique que la <code>key</code> du tri.</li></ul><p><strong>🔗 Fusionner deux tables (jointure) :</strong> on copie chaque ligne avec <code>dict(p)</code> avant de l'enrichir, pour ne pas modifier la table d'origine — bonne habitude vue avec le tri.</p><pre><code>personnes = [\n    {\"nom\": \"Turing\", \"code_pays\": \"UK\"},\n    {\"nom\": \"Hopper\", \"code_pays\": \"US\"},\n]\nnoms_pays = {\"UK\": \"Royaume-Uni\", \"US\": \"États-Unis\"}\n\nfusion = []\nfor p in personnes:\n    ligne = dict(p)                            # copie de la ligne\n    ligne[\"pays\"] = noms_pays[p[\"code_pays\"]]  # nouvelle colonne\n    fusion.append(ligne)\n\nfor l in fusion:\n    print(l[\"nom\"], \"-&gt;\", l[\"pays\"])\n# affiche :\n# Turing -&gt; Royaume-Uni\n# Hopper -&gt; États-Unis</code></pre><p><strong>📋 Trace d'exécution :</strong> la jointure fiche par fiche.</p><table><tr><th>p[\"nom\"]</th><th>p[\"code_pays\"]</th><th>noms_pays[...]</th><th>ligne ajoutée à fusion</th></tr><tr><td>Turing</td><td>UK</td><td>Royaume-Uni</td><td>{\"nom\": \"Turing\", \"code_pays\": \"UK\", \"pays\": \"Royaume-Uni\"}</td></tr><tr><td>Hopper</td><td>US</td><td>États-Unis</td><td>{\"nom\": \"Hopper\", \"code_pays\": \"US\", \"pays\": \"États-Unis\"}</td></tr></table><p><strong>🎯 Défi élève :</strong> la chaîne complète filtrer → trier → calculer sur la table des notes.</p><pre><code>notes = [\n    {\"nom\": \"Ada\",   \"note\": 17},\n    {\"nom\": \"Alan\",  \"note\": 12},\n    {\"nom\": \"Grace\", \"note\": 19},\n    {\"nom\": \"Linus\", \"note\": 14},\n]\nrecus = [l for l in notes if l[\"note\"] ______ 10]\nclassement = ______(recus, key=______ l: l[\"note\"], reverse=True)\nprint(classement[0][\"nom\"])             # affiche Grace\nvaleurs = [l[\"note\"] for l in recus]\nprint(______(valeurs) / len(valeurs))   # affiche 15.5</code></pre><p>✅ Réponse :</p><pre><code>notes = [\n    {\"nom\": \"Ada\",   \"note\": 17},\n    {\"nom\": \"Alan\",  \"note\": 12},\n    {\"nom\": \"Grace\", \"note\": 19},\n    {\"nom\": \"Linus\", \"note\": 14},\n]\nrecus = [l for l in notes if l[\"note\"] &gt;= 10]\nclassement = sorted(recus, key=lambda l: l[\"note\"], reverse=True)\nprint(classement[0][\"nom\"])             # affiche Grace\nvaleurs = [l[\"note\"] for l in recus]\nprint(sum(valeurs) / len(valeurs))      # affiche 15.5</code></pre><ul><li>La chaîne de traitement : <strong>charger</strong> (CSV) → <strong>vérifier</strong> → <strong>filtrer</strong> → <strong>trier</strong> → <strong>calculer</strong> → éventuellement <strong>fusionner</strong> ; chaque étape produit une nouvelle table ou une valeur.</li><li><code>dict(p)</code> copie la ligne avant de l'enrichir : les données d'origine restent intactes.</li><li><code>max(table, key=...)</code> renvoie la ligne entière ; pour la valeur seule, extraire d'abord la colonne.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> mener une <strong>enquête</strong> sur un fichier de données, c'est dérouler soi-même toute la chaîne de traitement du thème : <strong>charger</strong> le CSV en liste de dictionnaires, puis <strong>filtrer</strong>, <strong>trier</strong>, <strong>calculer</strong>, et éventuellement <strong>fusionner</strong>. Le secrétariat fournit le fichier des inscriptions au club (colonnes <em>nom</em>, <em>classe</em>, <em>activite</em>, <em>note</em>) ; chaque îlot joue les enquêteurs et répond à ses propres questions.</p><p>Avant d'écrire la moindre ligne de code, chaque question d'enquête se traduit à la main en une opération et une colonne :</p><table><tr><th>Question d'enquête</th><th>Opération</th><th>Colonne</th></tr><tr><td>« Qui est en 1NSI ? »</td><td>filtre</td><td>classe</td></tr><tr><td>« Qui est en tête du classement ? »</td><td>tri décroissant</td><td>note</td></tr><tr><td>« Quelle est la note moyenne ? »</td><td>calcul</td><td>note</td></tr><tr><td>« Quel professeur pour chaque élève ? »</td><td>fusion (jointure)</td><td>classe</td></tr></table><p><strong>🎯 Bilan :</strong></p><ul><li>Les cinq phases du projet : <strong>questions</strong> (4 par îlot, sur papier) → <strong>traduction</strong> (filtre, tri ou calcul ? sur quelle colonne ? validée par le professeur avant de coder) → <strong>codage</strong> à partir du code de départ → <strong>tests</strong> → <strong>rapport d'enquête</strong> oral de 2 minutes.</li><li>Rôles dans l'îlot : pilote clavier, vérificateur, rapporteur — chacun doit savoir expliquer chaque ligne du programme.</li><li>Le piège n°1 du thème reste actif : le CSV ne livre que des <strong>chaînes</strong> ; tout calcul ou tri sur la colonne <em>note</em> exige <code>int(l[\"note\"])</code>.</li><li>Les trois tests fournis valident l'enquête : <code>len(table) == 6</code>, le filtre 1NSI renvoie <strong>4</strong> élèves, <strong>Grace</strong> est en tête (note 19).</li></ul><p><strong>✅ Question type corrigée — vérifier les trois tests du projet :</strong></p><pre><code>import csv, io\n\ndonnees = \"\"\"nom;classe;activite;note\nAda;1NSI;drone;17\nAlan;1NSI;capteurs;12\nGrace;1G2;drone;19\nLinus;1NSI;moteurs;14\nHedy;1G2;capteurs;9\nTim;1NSI;moteurs;16\"\"\"\n\ntable = list(csv.DictReader(io.StringIO(donnees), delimiter=\";\"))\nprint(\"lignes :\", len(table))               # affiche lignes : 6\n\nnsi = [l for l in table if l[\"classe\"] == \"1NSI\"]\nprint(\"1NSI :\", len(nsi))                   # affiche 1NSI : 4\n\nclassement = sorted(table, key=lambda l: int(l[\"note\"]), reverse=True)\nprint(\"première :\", classement[0][\"nom\"])   # affiche première : Grace</code></pre><p>Sans la conversion <code>int(...)</code>, le tri comparerait des chaînes de caractères : en ordre alphabétique, <code>\"9\"</code> passe devant <code>\"19\"</code>, et Hedy (9 !) serait classée première. C'est exactement l'erreur que le test « Grace première » permet de détecter.</p><ul><li>Une question d'enquête = <strong>une</strong> opération (filtre, tri, calcul ou fusion) sur <strong>une</strong> colonne, décidée <em>avant</em> de coder.</li><li>Un test qui échoue est une information précieuse : il révèle souvent un oubli de conversion ou une mauvaise colonne.</li></ul>"
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
    ],
    "cours": "<p><strong>🎯 Bilan :</strong> avant le QCM (8 questions) puis le TP noté sur poste (1 h), on fixe l'essentiel du thème en cinq points :</p><ul><li>Une <strong>table</strong> = une <strong>liste de dictionnaires</strong> : une ligne = un <strong>enregistrement</strong> (un dictionnaire), une colonne = un <strong>descripteur</strong> (une clé). <code>table[i][\"colonne\"]</code> donne une cellule, <code>len(table)</code> le nombre de lignes, <code>list(table[0].keys())</code> la liste des colonnes.</li><li>Un <strong>CSV</strong> est un simple fichier <strong>texte</strong> : première ligne = en-tête (les clés de <code>csv.DictReader</code>), une ligne par enregistrement. Tout ce qui en sort est une <strong>chaîne</strong> → convertir avec <code>int(...)</code> ou <code>float(...)</code> avant de calculer.</li><li><strong>Filtrer</strong> : <code>[l for l in table if condition]</code> ; <strong>trier</strong> : <code>sorted(table, key=lambda l: l[\"colonne\"], reverse=True)</code> — jamais de tri sans <code>key</code> (Python ne sait pas comparer deux dictionnaires).</li><li><strong>Statistiques</strong> : extraire d'abord la colonne dans une liste, puis <code>len</code>, <code>sum</code>, <code>min</code>, <code>max</code> ; <code>max(table, key=...)</code> renvoie la <strong>ligne</strong> entière. <strong>Jointure</strong> : relier deux tables par leur colonne commune.</li><li>Chaque étape de la chaîne charger → filtrer → trier → calculer produit une <strong>nouvelle</strong> table : les données d'origine restent intactes.</li></ul><p><strong>✅ Question type corrigée (extraite du TP noté) :</strong> sur la table <code>eleves</code>, afficher la note moyenne de la classe, le nombre d'élèves ayant la moyenne (au moins 10) et le nom du major.</p><pre><code>eleves = [\n    {\"nom\": \"Ada\", \"classe\": \"1NSI\", \"note\": 17},\n    {\"nom\": \"Tim\", \"classe\": \"1G2\",  \"note\": 12},\n    {\"nom\": \"Lou\", \"classe\": \"1NSI\", \"note\": 9},\n    {\"nom\": \"Eve\", \"classe\": \"1NSI\", \"note\": 18},\n    {\"nom\": \"Sam\", \"classe\": \"1G2\",  \"note\": 14},\n]\n\nnotes = [e[\"note\"] for e in eleves]\nprint(\"moyenne :\", round(sum(notes) / len(notes), 2))\n# affiche moyenne : 14.0\n\nprint(\"reçus :\", len([e for e in eleves if e[\"note\"] &gt;= 10]))\n# affiche reçus : 4\n\nprint(\"major :\", max(eleves, key=lambda e: e[\"note\"])[\"nom\"])\n# affiche major : Eve</code></pre><p>Trois réflexes attendus : on <em>extrait</em> la colonne avant de calculer ((17 + 12 + 9 + 18 + 14) / 5 = 14,0) ; on <em>compte</em> un filtre avec <code>len(...)</code> ; <code>max(..., key=...)</code> renvoie la ligne entière d'Eve, d'où le <code>[\"nom\"]</code> final. Si ces notes venaient d'un CSV, il faudrait écrire <code>int(e[\"note\"])</code> partout.</p><ul><li>Les deux erreurs qui coûtent des points : oublier <code>int(...)</code> sur des valeurs issues d'un CSV, et trier sans <code>key</code>.</li><li>Troisième erreur fréquente : modifier la table d'origine au lieu d'en construire une nouvelle.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le Web fonctionne sur un modèle <strong>client-serveur</strong>, comme au restaurant : le client commande, la cuisine prépare et sert. Ici, le client est le <strong>navigateur</strong> (Chrome, Firefox…) : il envoie une <strong>requête</strong> ; un <strong>serveur</strong> (un ordinateur distant qui héberge le site) renvoie une <strong>réponse</strong>, le plus souvent une page HTML. Cet échange suit un protocole commun, <strong>HTTP</strong> (ou HTTPS, sa version sécurisée), et l'adresse demandée est une <strong>URL</strong>.</p><p>Déroulons à la main ce qui se passe quand on tape <code>https://www.exemple.fr/recherche?ville=Beyrouth</code> : le navigateur découpe l'URL — protocole <code>https</code>, domaine <code>www.exemple.fr</code>, chemin <code>/recherche</code>, paramètres après le <code>?</code> (<code>ville=Beyrouth</code>) — puis demande cette ressource au serveur, qui répond en envoyant… du <strong>texte</strong>. Une page reçue est juste du texte HTML que le navigateur sait afficher : c'est ce texte qu'on apprend à écrire.</p><p>Une page combine trois langages aux rôles bien distincts — c'est <em>la</em> distinction fondatrice du thème :</p><table><tr><th>Langage</th><th>Rôle</th><th>Analogie (une maison)</th></tr><tr><td><strong>HTML</strong></td><td>le contenu et la structure (titres, paragraphes, images, liens)</td><td>les murs, le squelette</td></tr><tr><td><strong>CSS</strong></td><td>la présentation (couleurs, polices, mise en page)</td><td>la peinture, la déco</td></tr><tr><td><strong>JavaScript</strong></td><td>l'interactivité (réagir aux actions de l'utilisateur)</td><td>l'électricité, les interrupteurs</td></tr></table><p><strong>🔨 La manipulation — une page construite balise par balise :</strong></p><p>HTML organise le contenu avec des <strong>balises</strong>, le plus souvent par <strong>paires</strong> : une ouvrante <code>&lt;p&gt;</code> et une fermante <code>&lt;/p&gt;</code> qui encadrent un contenu. Voici la page complète minimale, à connaître par cœur :</p><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"fr\"&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;title&gt;Ma page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Bonjour la NSI&lt;/h1&gt;\n    &lt;p&gt;Mon premier &lt;strong&gt;paragraphe&lt;/strong&gt;.&lt;/p&gt;\n    &lt;a href=\"https://eduscol.education.fr\"&gt;Un lien&lt;/a&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Deux zones : le <code>&lt;head&gt;</code> contient les <strong>métadonnées</strong> (titre de l'onglet, encodage — non affichées dans la page) ; le <code>&lt;body&gt;</code> contient tout ce qui est <strong>affiché</strong>.</li><li>Le <code>href</code> du lien est un <strong>attribut</strong> : une information ajoutée dans la balise ouvrante sous la forme <code>nom=\"valeur\"</code>. De même <code>src</code> et <code>alt</code> pour une image <code>&lt;img&gt;</code>.</li><li>Les balises s'<strong>imbriquent comme des poupées russes</strong> : pas de chevauchement, ce qui est ouvert en dernier se ferme en premier.</li><li>Autres balises à connaître : <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> (titres : une <strong>hiérarchie</strong>, pas une taille), <code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code> (liste à puces), <code>&lt;img&gt;</code> (balise seule, sans fermante).</li></ul><p><strong>🎯 Défi élève :</strong> compléter la page minimale « Club NSI » (exercice 3 du thème).</p><pre><code>&lt;!DOCTYPE ______&gt;\n&lt;html lang=\"fr\"&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"______\"&gt;\n    &lt;______&gt;Club&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;______&gt;\n    &lt;h1&gt;Club NSI&lt;/h1&gt;\n    &lt;p&gt;Bienvenue !&lt;/p&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><p>✅ Réponse :</p><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"fr\"&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;title&gt;Club&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Club NSI&lt;/h1&gt;\n    &lt;p&gt;Bienvenue !&lt;/p&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><ul><li>Une page web reçue du serveur est <strong>du texte HTML</strong> : requête (client) → réponse (serveur), via HTTP.</li><li>HTML = structure, CSS = présentation, JavaScript = interactivité : trois langages, trois rôles séparés.</li><li>L'attribut <code>alt</code> d'une image est important pour l'<strong>accessibilité</strong> (lecteurs d'écran) et s'affiche si l'image ne charge pas.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le HTML dit <em>quoi</em> afficher ; le CSS décrit <strong>comment</strong> l'afficher. Une <strong>règle</strong> CSS = un <strong>sélecteur</strong> (quels éléments ?) suivi de <strong>propriétés</strong> entre accolades (quel style ?) : <code>selecteur { propriete: valeur; }</code>.</p><p>Lisons à la main la règle <code>h1 { color: indigo; text-align: center; }</code> : le sélecteur <code>h1</code> vise <em>tous</em> les titres <code>&lt;h1&gt;</code> de la page ; chacun devient indigo et centré. Même contenu, autre habillage : on change la règle sans toucher au HTML. Trois types de sélecteurs, à bien distinguer :</p><table><tr><th>Sélecteur</th><th>Cible</th><th>Côté HTML</th></tr><tr><td><code>p</code></td><td>toutes les balises de ce type</td><td><code>&lt;p&gt;…&lt;/p&gt;</code></td></tr><tr><td><code>.important</code> (point)</td><td>tous les éléments d'une <strong>classe</strong> (réutilisable)</td><td><code>&lt;p class=\"important\"&gt;</code></td></tr><tr><td><code>#menu</code> (dièse)</td><td>l'élément d'un <strong>identifiant</strong> (unique)</td><td><code>&lt;div id=\"menu\"&gt;</code></td></tr></table><p><strong>🔨 La manipulation — la feuille de style de la démo, règle par règle :</strong></p><pre><code>h1 { color: indigo; text-align: center; }\np  { font-size: 16px; line-height: 1.5; }\n.important { background: yellow; }     /* une classe */\n#encadre   { border: 2px solid gray; } /* un identifiant */</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>Les couleurs s'écrivent par <strong>nom</strong> anglais (<code>red</code>, <code>indigo</code>), en <strong>hexadécimal</strong> <code>#RRGGBB</code> (ex. <code>#3498db</code>) ou en <code>rgb(52, 152, 219)</code> ; les tailles en <code>px</code> (absolu) ou en unités <strong>relatives</strong> (<code>%</code>, <code>em</code>, <code>rem</code>).</li><li><code>border: 2px solid gray</code> est un raccourci <em>largeur · style · couleur</em>.</li><li>Où placer le CSS ? En ligne (<code>style=\"…\"</code>, à éviter), interne (<code>&lt;style&gt;</code> dans le <code>&lt;head&gt;</code>), ou <strong>externe</strong> — la bonne pratique : un fichier <code>style.css</code> relié par <code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code>.</li></ul><p><strong>📋 Le modèle de boîte, déroulé à la main :</strong> en CSS, chaque élément est une <strong>boîte</strong> de 4 couches, de l'intérieur vers l'extérieur : le <strong>contenu</strong>, le <strong>padding</strong> (espace <em>intérieur</em>), la <strong>border</strong> (bordure), la <strong>margin</strong> (espace <em>extérieur</em>). Calculons la largeur totale occupée par la boîte de la démo (<code>width: 220px; padding: 20px; border: 4px; margin: 30px</code>) — chaque couche compte à gauche <em>et</em> à droite :</p><table><tr><th>Couche</th><th>Largeur ajoutée</th><th>Total</th></tr><tr><td>contenu (width)</td><td>220 px</td><td>220 px</td></tr><tr><td>padding (2 × 20)</td><td>+ 40 px</td><td>260 px</td></tr><tr><td>border (2 × 4)</td><td>+ 8 px</td><td>268 px</td></tr><tr><td>margin (2 × 30)</td><td>+ 60 px</td><td>328 px</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter le CSS de la page « Tux » (exercice 🏆 du site) : titre bleu et centré, paragraphes en 18px, éléments de liste sur fond jaune clair, classe <code>important</code> en gras et rouge, lien souligné <em>uniquement</em> au survol.</p><pre><code>h1 { color: ______; text-align: center; }\np  { font-size: ______; }\nli { background-color: lightyellow; }\n______ { font-weight: bold; color: red; }\na { text-decoration: none; }\na:______ { text-decoration: underline; }</code></pre><p>✅ Réponse :</p><pre><code>h1 { color: blue; text-align: center; }\np  { font-size: 18px; }\nli { background-color: lightyellow; }\n.important { font-weight: bold; color: red; }\na { text-decoration: none; }\na:hover { text-decoration: underline; }</code></pre><ul><li>Confusion classique : le <strong>point</strong> cible une <em>classe</em> (plusieurs éléments), le <strong>dièse</strong> un <em>identifiant</em> (un seul élément). À ne pas inverser.</li><li><strong>padding</strong> = dedans, <strong>margin</strong> = dehors : c'est la confusion CSS n°1.</li><li>Les <strong>blocs</strong> (<code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>) prennent toute la largeur et s'empilent ; les éléments <strong>en ligne</strong> (<code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;span&gt;</code>) restent côte à côte dans le texte.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion (1) — la cascade :</strong> quand plusieurs règles CSS visent le même élément et se contredisent, la plus <strong>spécifique</strong> l'emporte. On compte un triplet <em>(nb d'id, nb de classes, nb de balises)</em> et on le compare comme un nombre. Déroulons à la main : <code>article li</code> → (0,0,2) ; <code>.menu.actif p</code> → (0,2,1) ; <code>#entete</code> → (1,0,0). Classement : <code>#entete</code> bat <code>.menu.actif p</code>, qui bat <code>article li</code> — un id bat n'importe quel nombre de classes. À spécificité <strong>égale</strong>, c'est la <strong>dernière</strong> règle écrite qui gagne. Pour adapter le style à la largeur de l'écran (<strong>responsive</strong>), on écrit des règles conditionnelles, les <strong>media queries</strong> : <code>@media (max-width: 600px) { … }</code>, appliquées seulement sous 600 px de large.</p><p><strong>📖 La notion (2) — le formulaire et HTTP :</strong> pour que l'utilisateur <strong>envoie</strong> des informations (une recherche, un identifiant), on utilise la balise <code>&lt;form&gt;</code>. Chaque champ a une étiquette <strong>reliée</strong> — <code>&lt;label for=\"ville\"&gt;</code> avec <code>&lt;input id=\"ville\"&gt;</code> (même valeur) — et un <code>name</code>, le nom du paramètre envoyé :</p><pre><code>&lt;form action=\"/recherche\" method=\"get\"&gt;\n  &lt;label for=\"ville\"&gt;Ville :&lt;/label&gt;\n  &lt;input type=\"text\" id=\"ville\" name=\"ville\"&gt;\n\n  &lt;label for=\"age\"&gt;Âge :&lt;/label&gt;\n  &lt;input type=\"number\" id=\"age\" name=\"age\"&gt;\n\n  &lt;button type=\"submit\"&gt;Envoyer&lt;/button&gt;\n&lt;/form&gt;</code></pre><p>Déroulons l'envoi à la main : l'utilisateur saisit <code>Beyrouth</code> et <code>15</code>, puis clique sur « Envoyer ». La méthode étant <code>get</code>, le navigateur construit l'URL <code>/recherche?ville=Beyrouth&amp;age=15</code> : chaque <code>name</code> devient une clé, et les paires <code>clé=valeur</code> sont séparées par <code>&amp;</code>.</p><table><tr><th>Critère</th><th>GET</th><th>POST</th></tr><tr><td>Où vont les données</td><td>dans l'<strong>URL</strong> (visibles)</td><td>dans le <strong>corps</strong> de la requête (hors URL)</td></tr><tr><td>Usage typique</td><td>recherche, navigation, filtre</td><td>connexion, mot de passe, envoi de fichier</td></tr><tr><td>Adapté aux données sensibles</td><td>non</td><td>oui</td></tr></table><p><strong>🐢 Première méthode — l'analyseur d'URL en Python :</strong> retrouver les paramètres d'une URL, c'est exactement ce que fait le serveur en recevant la requête.</p><pre><code>url = \"recherche?ville=Beyrouth&amp;jour=lundi&amp;age=15\"\n\nchemin, requete = url.split(\"?\")        # sépare avant/après le ?\nparametres = {}\nfor couple in requete.split(\"&amp;\"):       # chaque \"clé=valeur\"\n    cle, valeur = couple.split(\"=\")\n    parametres[cle] = valeur\n\nprint(\"Page :\", chemin)   # affiche Page : recherche\nprint(\"Paramètres :\", parametres)\n# affiche Paramètres : {'ville': 'Beyrouth', 'jour': 'lundi', 'age': '15'}</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>url.split(\"?\")</code> coupe l'URL en deux : le <strong>chemin</strong> (la page demandée) et la <strong>requête</strong> (tout ce qui suit le <code>?</code>).</li><li><code>requete.split(\"&amp;\")</code> donne la liste des couples <code>\"clé=valeur\"</code> ; un dernier <code>split(\"=\")</code> sépare la clé de la valeur.</li><li>Chaque paire est rangée dans le <strong>dictionnaire</strong> <code>parametres</code> : la structure clé → valeur vue au thème précédent.</li></ul><p><strong>📋 Trace d'exécution</strong> (une ligne par tour de boucle) :</p><table><tr><th>couple</th><th>cle</th><th>valeur</th><th>parametres après le tour</th></tr><tr><td>\"ville=Beyrouth\"</td><td>\"ville\"</td><td>\"Beyrouth\"</td><td>{'ville': 'Beyrouth'}</td></tr><tr><td>\"jour=lundi\"</td><td>\"jour\"</td><td>\"lundi\"</td><td>{'ville': 'Beyrouth', 'jour': 'lundi'}</td></tr><tr><td>\"age=15\"</td><td>\"age\"</td><td>\"15\"</td><td>{'ville': 'Beyrouth', 'jour': 'lundi', 'age': '15'}</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter l'analyseur pour compter les paramètres de l'URL et afficher la valeur de <code>tri</code>.</p><pre><code>url = \"recherche?q=robot&amp;page=2&amp;tri=note\"\nrequete = url.split(\"______\")[1]\nparametres = {}\nfor couple in requete.split(\"______\"):\n    cle, valeur = couple.split(\"=\")\n    parametres[______] = valeur\nprint(len(parametres), \"paramètres\")   # affiche 3 paramètres\nprint(\"tri =\", parametres[\"______\"])   # affiche tri = note</code></pre><p>✅ Réponse :</p><pre><code>url = \"recherche?q=robot&amp;page=2&amp;tri=note\"\nrequete = url.split(\"?\")[1]\nparametres = {}\nfor couple in requete.split(\"&amp;\"):\n    cle, valeur = couple.split(\"=\")\n    parametres[cle] = valeur\nprint(len(parametres), \"paramètres\")   # affiche 3 paramètres\nprint(\"tri =\", parametres[\"tri\"])   # affiche tri = note</code></pre><ul><li>Règle en rouge : <strong>jamais un mot de passe en GET</strong> — il serait visible dans l'URL, l'historique et les favoris. Données sensibles = POST (et HTTPS, qui chiffre l'échange).</li><li>L'étiquette est <strong>reliée</strong> au champ : le <code>for</code> du <code>&lt;label&gt;</code> reprend l'<code>id</code> de l'<code>&lt;input&gt;</code>.</li><li>À spécificité égale, la dernière règle écrite l'emporte ; le calcul se fait propriété par propriété.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Après le HTML (le contenu) et le CSS (l'apparence), <strong>JavaScript</strong> est le 3ᵉ pilier du Web — et le seul <strong>langage de programmation</strong> des trois. Il rend la page <strong>vivante</strong> en réagissant à des <strong>événements</strong> : un clic, une frappe au clavier, l'envoi d'un formulaire. Déroulons à la main ce qui se passera dans l'exemple central de la séance : l'utilisateur clique sur le bouton → le navigateur détecte l'événement <code>click</code> → il appelle la fonction qu'on avait « accrochée » à ce bouton → cette fonction remplace le texte du paragraphe. Rien n'est rechargé : la page déjà affichée est modifiée sur place.</p><p>Bonne nouvelle : vous savez déjà programmer. JavaScript reprend les idées de Python avec une autre écriture — les blocs sont délimités par des <strong>accolades</strong>, pas par l'indentation :</p><table><tr><th>Python</th><th>JavaScript</th></tr><tr><td><code>x = 5</code></td><td><code>let x = 5;</code> (ou <code>const</code> pour une constante)</td></tr><tr><td><code>if note &gt;= 10:</code></td><td><code>if (note &gt;= 10) { … }</code></td></tr><tr><td><code>for i in range(5):</code></td><td><code>for (let i = 0; i &lt; 5; i++) { … }</code></td></tr><tr><td><code>def carre(x): return x * x</code></td><td><code>function carre(x) { return x * x; }</code></td></tr><tr><td><code>print(\"Bonjour\")</code></td><td><code>console.log(\"Bonjour\");</code></td></tr></table><p><strong>🐢 Première méthode — les bases dans la console</strong> (touche F12 → onglet Console) :</p><pre><code>let note = 14;\nif (note &gt;= 10) {\n  console.log(\"Reçu\");      // affiche Reçu\n} else {\n  console.log(\"Ajourné\");\n}\n\nfunction carre(x) { return x * x; }\nconsole.log(\"carre(5) =\", carre(5));   // affiche carre(5) = 25</code></pre><p><strong>🔨 La manipulation centrale — le trio magique :</strong> réagir à un clic et modifier la page (exemple de la section « Réagir à un événement »).</p><pre><code>&lt;button id=\"b\"&gt;Cliquez-moi&lt;/button&gt;\n&lt;p id=\"msg\"&gt;&lt;/p&gt;\n&lt;script&gt;\n  const bouton = document.getElementById(\"b\");\n  bouton.addEventListener(\"click\", function () {\n    document.getElementById(\"msg\").textContent = \"Bravo, événement reçu !\";\n  });\n&lt;/script&gt;</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>document.getElementById(\"b\")</code> <strong>récupère</strong> l'élément de la page dont l'attribut <code>id</code> vaut <code>b</code> ;</li><li><code>addEventListener(\"click\", fonction)</code> <strong>écoute</strong> l'événement : on lui <em>passe</em> la fonction à exécuter plus tard, sans les parenthèses d'appel ;</li><li><code>.textContent = \"…\"</code> <strong>modifie</strong> le texte de l'élément ; à chaque clic, la fonction s'exécute à nouveau.</li></ul><p>Ces trois étapes — <strong>récupérer</strong> un élément, <strong>écouter</strong> un événement, <strong>modifier</strong> la page (le <strong>DOM</strong>) — sont le schéma de presque toute interactivité. Variantes à connaître : <code>document.querySelector(\"#msg\")</code> retrouve un élément avec les sélecteurs CSS déjà vus ; la valeur saisie dans un champ se lit avec <code>.value</code> ; pour l'apparence, on ajoute ou retire une classe CSS avec <code>element.classList.add(…)</code> / <code>.remove(…)</code> / <code>.toggle(…)</code>.</p><p><strong>🎯 Défi élève</strong> (exercice 8 du thème) : au clic sur le bouton d'id <code>b</code>, écrire « Bonjour » dans le paragraphe d'id <code>msg</code>.</p><pre><code>const bouton = document.______(\"b\");\nbouton.______(\"click\", function () {\n  document.getElementById(\"______\").textContent = \"______\";\n});</code></pre><p>✅ Réponse :</p><pre><code>const bouton = document.getElementById(\"b\");\nbouton.addEventListener(\"click\", function () {\n  document.getElementById(\"msg\").textContent = \"Bonjour\";\n});</code></pre><ul><li>Toujours comparer avec <code>===</code> (valeur <strong>et</strong> type) : <code>\"5\" == 5</code> vaut <code>true</code> (piège !), mais <code>\"5\" === 5</code> vaut <code>false</code>.</li><li>On <strong>passe</strong> la fonction à <code>addEventListener</code>, on ne l'appelle pas : <code>maFonction</code>, pas <code>maFonction()</code>.</li><li>Le trio à connaître par cœur : <code>getElementById</code>, <code>addEventListener(\"click\", …)</code>, <code>textContent</code>.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> Après le HTML (le contenu) et le CSS (l'apparence), <strong>JavaScript</strong> est le 3ᵉ pilier du Web — et le seul <strong>langage de programmation</strong> des trois. Il s'exécute dans le navigateur et rend la page vivante grâce à la <strong>programmation événementielle</strong> : on enregistre des fonctions (« quand <em>ceci</em> se produit, fais <em>cela</em> »), que le navigateur appelle au moment voulu.</p><p>Déroulons un scénario à la main, sans code. Une page contient un bouton « Cliquez-moi » et un paragraphe vide. (1) La page se charge : rien ne se passe. (2) L'utilisateur clique. (3) Le navigateur regarde qui <em>écoute</em> ce clic. (4) Il exécute la fonction associée. (5) Le paragraphe affiche « Bravo, événement reçu ! ». Le code ne se déroule donc pas de haut en bas une seule fois : il <strong>attend</strong> les actions de l'utilisateur.</p><p><strong>🐍 Pont Python → JavaScript :</strong> vous savez déjà programmer — seule l'écriture change.</p><table><tr><th>Python</th><th>JavaScript</th></tr><tr><td><code>x = 5</code></td><td><code>let x = 5;</code> (<code>const</code> si la valeur ne change pas)</td></tr><tr><td><code>print(\"Bonjour\")</code></td><td><code>console.log(\"Bonjour\");</code></td></tr><tr><td><code>if note &gt;= 10:</code></td><td><code>if (note &gt;= 10) { ... }</code></td></tr><tr><td><code>for n in liste:</code></td><td><code>for (const n of liste) { ... }</code></td></tr><tr><td><code>def carre(x):</code></td><td><code>function carre(x) { ... }</code></td></tr><tr><td><code>True / False</code></td><td><code>true / false</code></td></tr></table><p>Les blocs sont délimités par des <strong>accolades</strong> <code>{ }</code>, pas par l'indentation. Et on compare toujours avec <code>===</code> (valeur <strong>et</strong> type) : <code>\"5\" == 5</code> vaut <code>true</code> (piège !), alors que <code>\"5\" === 5</code> vaut <code>false</code>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la fonction <code>moyenne</code> de l'exercice 🏆, transposée mot à mot depuis Python.</p><pre><code>let notes = [12, 8, 12, 15, 6];\n\nfunction moyenne(tableau) {\n  let total = 0;\n  for (const n of tableau) {\n    total += n;\n  }\n  return total / tableau.length;\n}\n\nconsole.log(\"Moyenne :\", moyenne(notes)); // affiche Moyenne : 10.6</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>for (const n of tableau)</code> parcourt les <strong>valeurs</strong>, comme <code>for n in tableau</code> en Python ; <code>total += n</code> accumule la somme : 12 + 8 + 12 + 15 + 6 = 53.</li><li><code>tableau.length</code> joue le rôle de <code>len(tableau)</code> : 53 / 5 = 10.6.</li><li><code>return</code> renvoie le résultat, exactement comme en Python.</li></ul><p><strong>⚡ Le trio magique — réagir à un clic :</strong> presque toute l'interactivité suit le même schéma : (1) <strong>récupérer</strong> un élément avec <code>getElementById</code>, (2) <strong>écouter</strong> un événement avec <code>addEventListener</code>, (3) <strong>modifier</strong> la page avec <code>textContent</code>.</p><pre><code>&lt;button id=\"b\"&gt;Cliquez-moi&lt;/button&gt;\n&lt;p id=\"msg\"&gt;&lt;/p&gt;\n&lt;script&gt;\n  let n = 0;\n  const bouton = document.getElementById(\"b\");\n  bouton.addEventListener(\"click\", function () {\n    n = n + 1;\n    document.getElementById(\"msg\").textContent =\n      \"Bravo, événement reçu ! (clics : \" + n + \")\";\n  });\n&lt;/script&gt;</code></pre><p>Attention : on <strong>passe</strong> la fonction à <code>addEventListener</code>, on ne l'<strong>appelle pas</strong> — donc sans parenthèses. C'est le navigateur qui l'exécutera, à chaque clic.</p><p><strong>📋 Trace d'exécution :</strong> que contient la page au fil des clics ?</p><table><tr><th>Événement</th><th>n</th><th>Texte du paragraphe msg</th></tr><tr><td>chargement de la page</td><td>0</td><td>(vide)</td></tr><tr><td>1ᵉʳ clic</td><td>1</td><td>Bravo, événement reçu ! (clics : 1)</td></tr><tr><td>2ᵉ clic</td><td>2</td><td>Bravo, événement reçu ! (clics : 2)</td></tr><tr><td>3ᵉ clic</td><td>3</td><td>Bravo, événement reçu ! (clics : 3)</td></tr></table><p><strong>🎯 Défi élève :</strong> (exercice 8) au clic sur le bouton d'id <code>b</code>, écrire « Bonjour » dans le paragraphe d'id <code>msg</code>. Compléter les 4 trous.</p><pre><code>&lt;button id=\"b\"&gt;Cliquez-moi&lt;/button&gt;\n&lt;p id=\"msg\"&gt;&lt;/p&gt;\n&lt;script&gt;\n  const bouton = document.______(\"b\");\n  bouton.______(\"click\", function () {\n    document.getElementById(\"______\").______ = \"Bonjour\";\n  });\n&lt;/script&gt;</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>&lt;button id=\"b\"&gt;Cliquez-moi&lt;/button&gt;\n&lt;p id=\"msg\"&gt;&lt;/p&gt;\n&lt;script&gt;\n  const bouton = document.getElementById(\"b\");\n  bouton.addEventListener(\"click\", function () {\n    document.getElementById(\"msg\").textContent = \"Bonjour\";\n  });\n&lt;/script&gt;</code></pre><ul><li><code>addEventListener(\"click\", maFonction)</code> : la fonction se donne <strong>sans parenthèses</strong> ; l'écrire <code>maFonction()</code> l'exécuterait tout de suite, une seule fois.</li><li>Comparer avec <code>===</code> (jamais <code>==</code>) ; blocs entre accolades <code>{ }</code> ; booléens <code>true</code>/<code>false</code> en minuscules.</li><li><code>textContent</code> lit ou modifie le <strong>texte</strong> d'un élément ; pour un champ de formulaire, on lira sa valeur avec <code>.value</code> (séance suivante).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong> Par défaut, envoyer un formulaire <strong>recharge la page</strong>. JavaScript peut <strong>intercepter</strong> cet envoi en écoutant l'événement <code>submit</code> et en le bloquant avec <code>event.preventDefault()</code>, pour <strong>valider</strong> les champs avant tout départ vers le serveur.</p><p>Déroulons la scène à la main. Un visiteur clique sur « S'inscrire » en laissant le champ nom vide. Sans JavaScript : la page se recharge et le serveur reçoit un nom vide. Avec validation : (1) le navigateur déclenche l'événement <code>submit</code> ; (2) notre fonction s'exécute ; (3) <code>preventDefault()</code> annule le rechargement ; (4) le script lit la valeur du champ et la trouve vide ; (5) il affiche « Le nom est obligatoire ! » — retour immédiat, sans contacter le serveur.</p><p>Mais cette validation s'exécute <strong>sur la machine du client</strong>, qui peut la contourner (désactiver JavaScript, modifier la page, forger la requête). D'où la règle d'or du thème :</p><table><tr><th>Validation</th><th>Rôle</th><th>Contournable ?</th></tr><tr><td>côté client (JavaScript)</td><td><strong>confort</strong> : retour immédiat, sans aller-retour serveur</td><td>oui</td></tr><tr><td>côté serveur</td><td><strong>sécurité</strong> : le serveur revérifie <strong>toujours</strong> ce qu'il reçoit</td><td>non</td></tr></table><p><strong>🐢 Première méthode — simple à comprendre :</strong> écouter <code>submit</code>, bloquer le rechargement, tester le champ.</p><pre><code>const formulaire = document.querySelector(\"form\");\nformulaire.addEventListener(\"submit\", (event) =&gt; {\n  event.preventDefault();              // on bloque le rechargement\n  const nom = document.querySelector(\"#nom\").value;\n  if (nom.trim() === \"\") {\n    console.log(\"Le nom est obligatoire !\");\n    return;                            // on arrête là\n  }\n  console.log(\"Formulaire valide, nom =\", nom);\n});\n// champ vide  → affiche Le nom est obligatoire !\n// champ \"Tux\" → affiche Formulaire valide, nom = Tux</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>submit</code> se déclenche quand on clique sur le bouton d'envoi ; <code>preventDefault()</code> annule le comportement par défaut du navigateur (le rechargement).</li><li><code>.value</code> lit ce que l'utilisateur a saisi ; <code>.trim()</code> retire les espaces au bord : un champ rempli d'espaces est bien détecté comme vide.</li><li><code>return</code> arrête la fonction : le message de succès n'est alors pas exécuté.</li></ul><p><strong>📋 Trace d'exécution :</strong></p><table><tr><th>Saisie du champ nom</th><th>nom.trim() === \"\"</th><th>Affichage</th></tr><tr><td>(vide)</td><td>true</td><td>Le nom est obligatoire !</td></tr><tr><td>trois espaces</td><td>true</td><td>Le nom est obligatoire !</td></tr><tr><td>Tux</td><td>false</td><td>Formulaire valide, nom = Tux</td></tr></table><p><strong>🍪 Cookies, traces et vie privée :</strong> HTTP est « sans mémoire » : chaque requête est indépendante. Un <strong>cookie</strong> est un petit fichier texte que le serveur demande au navigateur de stocker, et que celui-ci renvoie à chaque requête suivante (rester connecté, garder un panier). Les cookies <em>tiers</em> servent au pistage publicitaire ; en Europe, le <strong>RGPD</strong> impose le consentement — les bandeaux « Accepter les cookies ».</p><p><strong>📝 Projet « Mini-site d'inscription » (phases 1 à 3) :</strong> reprendre la maquette de la séance 1, arrêter la liste des champs et des vérifications (phases 1-2), puis coder un vrai fichier <code>.html</code> dans un éditeur (VS Code), ouvert dans le navigateur : structure HTML + formulaire d'abord, CSS ensuite, à partir du code de départ ci-dessous.</p><p><strong>🎯 Défi élève :</strong> compléter les 4 trous du code de départ du projet : bloquer l'envoi et afficher le message <strong>dans la page</strong> (et non dans la console).</p><pre><code>&lt;form id=\"inscription\"&gt;\n  &lt;label&gt;Nom : &lt;input type=\"text\" id=\"nom\"&gt;&lt;/label&gt;\n  &lt;button type=\"submit\"&gt;S'inscrire&lt;/button&gt;\n  &lt;p id=\"message\"&gt;&lt;/p&gt;\n&lt;/form&gt;\n&lt;script&gt;\n  const form = document.getElementById(\"inscription\");\n  form.addEventListener(\"______\", function (e) {\n    e.______();\n    const nom = document.getElementById(\"nom\").value.______();\n    const msg = document.getElementById(\"message\");\n    if (nom ______ \"\") {\n      msg.textContent = \"❌ Le nom est obligatoire.\";\n    } else {\n      msg.textContent = \"✅ Inscription enregistrée pour \" + nom + \" !\";\n    }\n  });\n&lt;/script&gt;</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>&lt;form id=\"inscription\"&gt;\n  &lt;label&gt;Nom : &lt;input type=\"text\" id=\"nom\"&gt;&lt;/label&gt;\n  &lt;button type=\"submit\"&gt;S'inscrire&lt;/button&gt;\n  &lt;p id=\"message\"&gt;&lt;/p&gt;\n&lt;/form&gt;\n&lt;script&gt;\n  const form = document.getElementById(\"inscription\");\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    const nom = document.getElementById(\"nom\").value.trim();\n    const msg = document.getElementById(\"message\");\n    if (nom === \"\") {\n      msg.textContent = \"❌ Le nom est obligatoire.\";\n    } else {\n      msg.textContent = \"✅ Inscription enregistrée pour \" + nom + \" !\";\n    }\n  });\n&lt;/script&gt;</code></pre><ul><li>Erreur fréquente n°1 du thème : « la validation JavaScript suffit » — <strong>faux</strong>. Côté client = confort ; côté serveur = sécurité : le serveur revalide toujours.</li><li>Sans <code>preventDefault()</code>, le formulaire part et la page se recharge : le message d'erreur n'a pas le temps de s'afficher.</li><li>Toujours <code>.trim()</code> avant le test du champ vide : une saisie faite uniquement d'espaces n'est pas un nom.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un ordinateur n'est pas une boîte magique : c'est un petit nombre de grands organes qui coopèrent. Avant de parler de logiciels, ouvrons le capot.</p><table><tr><th>Composant</th><th>Rôle</th><th>Analogie (un bureau)</th></tr><tr><td><strong>Processeur (CPU)</strong></td><td>exécute les instructions, calcule</td><td>la personne qui travaille</td></tr><tr><td><strong>Mémoire vive (RAM)</strong></td><td>stocke temporairement programme et données en cours</td><td>le bureau où on étale ses feuilles</td></tr><tr><td><strong>Stockage (disque/SSD)</strong></td><td>conserve les données même éteint</td><td>les tiroirs et armoires</td></tr><tr><td><strong>Entrées / sorties</strong></td><td>communiquent avec l'extérieur</td><td>clavier, écran, réseau</td></tr></table><p>Exemple déroulé à la main : j'ouvre un document → il est copié du disque (le tiroir) vers la RAM (le bureau). Je travaille → le processeur manipule ce qui est étalé sur le bureau. J'« enregistre » → copie de la RAM vers le disque. Je coupe le courant sans enregistrer → le bureau est balayé. La RAM est <strong>rapide mais volatile</strong>, le disque est <strong>lent mais permanent</strong>.</p><p><strong>🖥️ Le modèle de von Neumann (1945) :</strong></p><p>Proposé par John von Neumann, ce modèle décrit presque tous les ordinateurs actuels. Quatre composants :</p><ul><li><strong>Unité de commande (UC)</strong> — lit et <em>décode</em> les instructions du programme, orchestre le reste ;</li><li><strong>Unité arithmétique et logique (UAL)</strong> — <em>effectue</em> les calculs (additions, comparaisons, et/ou/non) ; UC + UAL forment le <strong>processeur (CPU)</strong> ;</li><li><strong>Mémoire</strong> — stocke à la fois le <em>programme</em> ET les <em>données</em> ;</li><li><strong>Entrées / sorties (E/S)</strong> — échangent avec l'extérieur (clavier, écran, disque).</li></ul><p>L'idée révolutionnaire : le programme est rangé en mémoire <em>comme</em> des données (« <strong>programme enregistré</strong> »). On peut donc charger un nouveau programme sans recâbler la machine : l'ordinateur est <em>universel</em>. Le processeur répète sans cesse le cycle <strong>charger → décoder → exécuter</strong>.</p><p><strong>⚠️ Piège classique :</strong> l'<strong>UC</strong> <em>commande et décode</em>, l'<strong>UAL</strong> <em>calcule</em>. Ne pas confondre.</p><p><strong>📋 Classer les composants (jeu de tri) :</strong></p><table><tr><th>Élément</th><th>Famille</th><th>Justification</th></tr><tr><td>RAM</td><td>mémoire volatile</td><td>effacée à l'extinction</td></tr><tr><td>disque / SSD</td><td>mémoire permanente</td><td>conserve les données machine éteinte</td></tr><tr><td>UC</td><td>processeur — commande</td><td>décode les instructions</td></tr><tr><td>UAL</td><td>processeur — calcul</td><td>effectue additions et comparaisons</td></tr><tr><td>capteur, clavier</td><td>entrée</td><td>information vers la machine</td></tr><tr><td>écran</td><td>sortie</td><td>information vers l'extérieur</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter les phrases de la trace écrite :</p><pre><code>1. Dans le processeur, l'______ décode les instructions\n   et l'______ effectue les calculs.\n2. En mémoire sont rangés à la fois le ______ et les ______ :\n   c'est le « programme enregistré ».\n3. Le cycle du processeur : ______ -&gt; décoder -&gt; exécuter.</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>1. l'UC décode, l'UAL calcule (UC + UAL = le processeur).\n2. le programme et les données.\n3. charger -&gt; décoder -&gt; exécuter (et on recommence).</code></pre><ul><li>La RAM est volatile, le disque est permanent : « enregistrer », c'est copier de la RAM vers le disque.</li><li>UC ≠ UAL : l'une décode et commande, l'autre calcule.</li><li>« Programme enregistré » = le programme est en mémoire comme une donnée ; c'est ce qui rend l'ordinateur universel.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le processeur ne comprend ni Python ni français : il exécute des <strong>instructions machine</strong> très élémentaires. Pour <em>sentir</em> le cycle charger → décoder → exécuter, on utilise une machine imaginaire à <strong>accumulateur</strong> : un registre unique, noté <strong>ACC</strong>, où se font tous les calculs. Le compteur de programme (<strong>PC</strong>) indique le numéro de l'instruction en cours. Quatre instructions suffisent :</p><table><tr><th>Instruction</th><th>Effet</th></tr><tr><td><code>LOAD adr</code></td><td>copie la case mémoire adr dans l'accumulateur (ACC ← mem[adr])</td></tr><tr><td><code>ADD adr</code></td><td>additionne la case adr à l'accumulateur (ACC ← ACC + mem[adr])</td></tr><tr><td><code>STORE adr</code></td><td>range l'accumulateur dans la case adr (mem[adr] ← ACC)</td></tr><tr><td><code>HALT</code></td><td>arrête le programme</td></tr></table><p>Exemple déroulé à la main : on veut calculer mem[2] = mem[0] + mem[1], avec au départ mem[0] = 7 et mem[1] = 5. Programme : <code>LOAD 0 ; ADD 1 ; STORE 2 ; HALT</code>. <code>LOAD 0</code> met 7 dans ACC ; <code>ADD 1</code> fait 7 + 5 = 12 dans ACC ; <code>STORE 2</code> range 12 dans mem[2] ; <code>HALT</code> arrête. La mémoire finit à [7, 5, 12].</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> un mini-simulateur Python de cette machine (la boucle <em>fetch-décode-exécute</em>) :</p><pre><code>programme = [(\"LOAD\", 0), (\"ADD\", 1), (\"STORE\", 2), (\"HALT\",)]\nmem, acc, pc = [7, 5, 0], 0, 0\nwhile programme[pc][0] != \"HALT\":\n    nom, adr = programme[pc]\n    if nom == \"LOAD\":\n        acc = mem[adr]\n    elif nom == \"ADD\":\n        acc = acc + mem[adr]\n    elif nom == \"STORE\":\n        mem[adr] = acc\n    pc = pc + 1\nprint(mem)   # affiche [7, 5, 12]</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>programme[pc]</code> <strong>charge</strong> l'instruction pointée par PC ; <code>nom, adr = programme[pc]</code> la <strong>décode</strong> (son nom, son adresse) ;</li><li>le <code>if/elif</code> l'<strong>exécute</strong> : c'est le travail de l'UAL, commandée par l'UC ;</li><li><code>pc = pc + 1</code> fait avancer le compteur de programme : le cycle recommence jusqu'à <code>HALT</code>.</li></ul><p><strong>📋 Trace d'exécution :</strong> (à savoir refaire à la main sur la fiche)</p><table><tr><th>PC</th><th>Instruction</th><th>ACC après</th><th>Mémoire [0, 1, 2]</th></tr><tr><td>0</td><td><code>LOAD 0</code></td><td>7</td><td>[7, 5, 0]</td></tr><tr><td>1</td><td><code>ADD 1</code></td><td>12</td><td>[7, 5, 0]</td></tr><tr><td>2</td><td><code>STORE 2</code></td><td>12</td><td>[7, 5, <strong>12</strong>]</td></tr><tr><td>3</td><td><code>HALT</code></td><td>12</td><td>[7, 5, 12]</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter le programme pour calculer mem[2] = mem[0] + mem[1] + mem[1] :</p><pre><code>programme = [(\"LOAD\", 0), (\"____\", 1), (\"ADD\", ____),\n             (\"STORE\", ____), (\"____\",)]\nmem, acc, pc = [7, 5, 0], 0, 0\nwhile programme[pc][0] != \"HALT\":\n    nom, adr = programme[pc]\n    if nom == \"LOAD\":\n        acc = mem[adr]\n    elif nom == \"ADD\":\n        acc = acc + mem[adr]\n    elif nom == \"STORE\":\n        mem[adr] = acc\n    pc = pc + 1\nprint(mem)   # doit afficher [7, 5, 17]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>programme = [(\"LOAD\", 0), (\"ADD\", 1), (\"ADD\", 1),\n             (\"STORE\", 2), (\"HALT\",)]\nmem, acc, pc = [7, 5, 0], 0, 0\nwhile programme[pc][0] != \"HALT\":\n    nom, adr = programme[pc]\n    if nom == \"LOAD\":\n        acc = mem[adr]\n    elif nom == \"ADD\":\n        acc = acc + mem[adr]\n    elif nom == \"STORE\":\n        mem[adr] = acc\n    pc = pc + 1\nprint(mem)   # affiche [7, 5, 17]</code></pre><ul><li><strong>PC</strong> pointe l'instruction en cours, <strong>ACC</strong> est le registre où se font tous les calculs : deux rôles à ne pas confondre.</li><li>Chaque tour de boucle = un cycle <strong>charger → décoder → exécuter</strong> du modèle de von Neumann.</li><li>Le BO n'impose aucun langage machine particulier : ce jeu de 4 instructions est un exemple simplifié ; les vrais processeurs (x86, ARM…) en ont des centaines, mais le principe est identique.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Comment le processeur « calcule »-t-il, avec seulement de l'électricité ? Tout repose sur le <strong>transistor</strong> : un minuscule <em>interrupteur</em> commandé électriquement (passant = 1, bloqué = 0). Un processeur moderne en contient des <strong>milliards</strong>. En combinant des transistors, on fabrique des <strong>portes logiques</strong> qui réalisent les opérations booléennes vues dans le thème « Représentation des données » :</p><table><tr><th>Porte</th><th>Donne 1 si…</th></tr><tr><td><strong>ET</strong> (AND)</td><td>les deux entrées valent 1</td></tr><tr><td><strong>OU</strong> (OR)</td><td>au moins une entrée vaut 1</td></tr><tr><td><strong>NON</strong> (NOT)</td><td>l'entrée vaut 0 (elle inverse)</td></tr><tr><td><strong>OU exclusif</strong> (XOR)</td><td>les deux entrées sont différentes</td></tr></table><p>Exemple déroulé à la main : additionnons <strong>deux bits</strong> a et b. Quatre cas seulement : 0 + 0 = 0 ; 0 + 1 = 1 ; 1 + 0 = 1 ; et 1 + 1 = 10 en binaire, c'est-à-dire <em>somme 0 et retenue 1</em>. En observant la colonne « somme », on reconnaît un <strong>XOR</strong> (1 si a et b diffèrent) ; la colonne « retenue » est un <strong>ET</strong> (1 seulement si a = b = 1). Ce circuit s'appelle le <strong>demi-additionneur</strong>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> simuler les portes par des fonctions Python :</p><pre><code>def ET(a, b):  return a and b\ndef OU(a, b):  return a or b\ndef NON(a):    return not a\ndef XOR(a, b): return (a or b) and not (a and b)\n\ndef demi_additionneur(a, b):\n    somme = XOR(a, b)      # 1 si a et b diffèrent\n    retenue = ET(a, b)     # 1 seulement si a = b = 1\n    return somme, retenue\n\ns, r = demi_additionneur(1, 1)\nprint(int(s), int(r))   # affiche 0 1</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>les opérateurs Python <code>and</code>, <code>or</code>, <code>not</code> jouent exactement le rôle des portes matérielles ;</li><li><code>XOR</code> se lit « (a ou b) et pas (a et b) » : au moins une entrée à 1, mais pas les deux ;</li><li><code>int(s)</code> convertit le booléen en 0 ou 1 pour un affichage propre ; on vérifie bien 1 + 1 → somme 0, retenue 1.</li></ul><p><strong>📋 Trace d'exécution :</strong> la table de vérité complète du demi-additionneur :</p><table><tr><th>a</th><th>b</th><th>somme = XOR(a, b)</th><th>retenue = ET(a, b)</th></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td><strong>0</strong></td><td><strong>1</strong></td></tr></table><p><strong>🎯 Défi élève (Mission : demi-additionneur) :</strong> reconstruire XOR uniquement avec ET, OU et NON :</p><pre><code>def ET(a, b):  return a and b\ndef OU(a, b):  return a or b\ndef NON(a):    return not a\n\ndef XOR(a, b):\n    return ____(OU(a, b), ____(ET(a, b)))\n\ndef demi_additionneur(a, b):\n    somme = ____(a, b)\n    retenue = ____(a, b)\n    return somme, retenue\n\ns, r = demi_additionneur(1, 0)\nprint(int(s), int(r))   # doit afficher 1 0</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def ET(a, b):  return a and b\ndef OU(a, b):  return a or b\ndef NON(a):    return not a\n\ndef XOR(a, b):\n    return ET(OU(a, b), NON(ET(a, b)))\n\ndef demi_additionneur(a, b):\n    somme = XOR(a, b)\n    retenue = ET(a, b)\n    return somme, retenue\n\ns, r = demi_additionneur(1, 0)\nprint(int(s), int(r))   # affiche 1 0</code></pre><ul><li>Ne pas confondre <strong>OU</strong> et <strong>XOR</strong> : pour a = b = 1, OU donne 1 mais XOR donne 0.</li><li>À mémoriser : <strong>somme = XOR</strong>, <strong>retenue = ET</strong> — c'est la définition du demi-additionneur.</li><li>L'algèbre de Boole est littéralement gravée dans le silicium : avec des portes, on construit des circuits qui additionnent, comparent, mémorisent.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le matériel seul ne sait rien faire d'utile. Le <strong>système d'exploitation</strong> (OS : Windows, Linux, macOS, Android, iOS…) est le logiciel <em>chef d'orchestre</em> : il fait l'interface entre le matériel et les applications. Ses cinq grandes missions :</p><ul><li>gérer les <strong>processus</strong> (les programmes en cours) en partageant le temps de processeur ;</li><li>gérer la <strong>mémoire</strong> (qui occupe quoi en RAM) ;</li><li>gérer le <strong>système de fichiers</strong> (organisation du disque) ;</li><li>piloter les <strong>périphériques</strong> via des <em>pilotes</em> (drivers) ;</li><li>assurer la <strong>sécurité</strong> : utilisateurs, mots de passe, droits d'accès.</li></ul><p><strong>⚠️ Piège :</strong> l'OS <em>pilote</em> le matériel, il ne le <em>fabrique</em> pas : c'est un logiciel, pas un composant physique. Les OS <strong>libres</strong> comme GNU/Linux sont partout : serveurs du Web, box Internet, Android, supercalculateurs.</p><p><strong>🔌 Capteurs et actionneurs :</strong> les objets connectés (smartphone, voiture, thermostat…) perçoivent et agissent grâce à la chaîne <strong>capteur (mesurer) → traitement (décider) → actionneur (agir)</strong>. Un <strong>capteur</strong> convertit une grandeur physique en valeur numérique ; un <strong>actionneur</strong> fait l'inverse. Exemple déroulé à la main : la sonde mesure 17,4 °C ; le programme compare à la consigne 19 °C : trop froid ; l'actionneur met le chauffage en route.</p><table><tr><th>Capteur</th><th>Traitement (décision)</th><th>Actionneur</th></tr><tr><td>accéléromètre du téléphone</td><td>l'appareil est-il penché ?</td><td>rotation de l'écran</td></tr><tr><td>radar de la voiture</td><td>obstacle trop proche ?</td><td>freinage d'urgence</td></tr><tr><td>sonde de température</td><td>plus froid que la consigne ?</td><td>mise en route du chauffage</td></tr></table><p><strong>🐢 La manipulation — simuler un thermostat :</strong></p><pre><code>CONSIGNE = 19.0                       # température souhaitée (°C)\nmesures = [21.5, 18.9, 17.4, 19.6]    # le capteur mesure\nfor t in mesures:\n    chauffage = t &lt; CONSIGNE          # le programme décide\n    if chauffage:\n        print(t, \"-&gt; chauffage ALLUMÉ\")   # l'actionneur agit\n    else:\n        print(t, \"-&gt; chauffage éteint\")\n# affiche :\n# 21.5 -&gt; chauffage éteint\n# 18.9 -&gt; chauffage ALLUMÉ\n# 17.4 -&gt; chauffage ALLUMÉ\n# 19.6 -&gt; chauffage éteint</code></pre><p><strong>🔍 Comment ça marche :</strong> la liste <code>mesures</code> joue le rôle du capteur ; la comparaison <code>t &lt; CONSIGNE</code> renvoie un booléen (le traitement) ; le <code>print</code> simule l'actionneur. Sur une carte micro:bit ou Arduino, la liste serait remplacée par un vrai capteur et le print par un vrai relais.</p><p><strong>📁 Le système de fichiers arborescent :</strong> l'OS range les fichiers dans une <strong>arborescence</strong> : des dossiers (répertoires) qui en contiennent d'autres, à partir d'une <strong>racine</strong> notée /. C'est un arbre renversé :</p><pre><code>/                  (racine)\n└── home\n    └── ada\n        ├── photos\n        └── cours\n            └── nsi.py</code></pre><p>Deux façons de désigner un fichier : le <strong>chemin absolu</strong> part de la racine et commence par / (ex. <code>/home/ada/cours/nsi.py</code>) ; le <strong>chemin relatif</strong> part du dossier courant (depuis <code>/home/ada</code>, <code>cours/nsi.py</code> suffit). Deux raccourcis essentiels : <code>.</code> = dossier courant, <code>..</code> = dossier parent. Exemple à la main : depuis <code>/home/ada/cours</code>, le chemin <code>../photos</code> remonte d'un cran (vers <code>/home/ada</code>) puis descend dans photos.</p><p><strong>🎯 Défi élève :</strong> compléter les chemins dans l'arborescence ci-dessus :</p><pre><code>1. Depuis /home/ada, atteindre nsi.py             : ______\n2. Depuis /home/ada/photos, atteindre nsi.py      : ______\n3. Depuis /home/ada/cours, atteindre photos       : ______\n4. Depuis /home/ada/cours, remonter à la racine / : ______</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>1. cours/nsi.py       (on descend simplement)\n2. ../cours/nsi.py    (on remonte d'un cran puis on redescend)\n3. ../photos          (l'exemple du cours)\n4. ../../..           (trois crans : cours -&gt; ada -&gt; home -&gt; /)</code></pre><ul><li>L'OS est un <strong>logiciel</strong> : il gère processus, mémoire, fichiers, périphériques et sécurité.</li><li>Un <strong>capteur</strong> mesure (physique → numérique), un <strong>actionneur</strong> agit (numérique → physique).</li><li>Un chemin <strong>absolu</strong> commence toujours par / ; <code>..</code> remonte d'un cran vers le dossier parent.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le matériel seul ne sait rien faire d'utile. Le <strong>système d'exploitation</strong> (OS : Windows, Linux, macOS, Android, iOS…) est le logiciel <em>chef d'orchestre</em> : il fait l'interface entre le matériel et les applications. Ses cinq grandes missions :</p><ul><li>gérer les <strong>processus</strong> (les programmes en cours d'exécution) ;</li><li>gérer la <strong>mémoire</strong> (qui occupe quoi en RAM) ;</li><li>gérer le <strong>système de fichiers</strong> (l'organisation du disque) ;</li><li>piloter les <strong>périphériques</strong> via des <em>pilotes</em> (drivers) ;</li><li>assurer la <strong>sécurité</strong> (utilisateurs, mots de passe, droits d'accès).</li></ul><p>Attention : l'OS <em>pilote</em> le matériel, il ne le <em>fabrique</em> pas — c'est un logiciel, pas un composant physique.</p><p>Les objets connectés (smartphone, voiture, thermostat…) dialoguent avec le monde grâce à une chaîne en trois temps : <strong>capteur</strong> (mesurer) → <strong>traitement</strong> (programme qui décide) → <strong>actionneur</strong> (agir). Déroulons-la à la main sur un thermostat réglé à 19,0 °C : la sonde mesure 17,4 °C ; le programme compare : 17,4 est plus petit que la consigne, il fait trop froid ; l'actionneur (le chauffage) est donc allumé. Plus tard, la sonde mesure 21,5 °C : ce n'est pas inférieur à 19,0, le chauffage est coupé.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code># Simulation d'un thermostat : capteur -&gt; traitement -&gt; actionneur\nCONSIGNE = 19.0                       # température souhaitée (°C)\nmesures = [21.5, 18.9, 17.4, 19.6]    # le \"capteur\" : températures mesurées\n\nfor t in mesures:\n    if t &lt; CONSIGNE:\n        chauffage = True      # décision : trop froid -&gt; on chauffe\n    else:\n        chauffage = False     # assez chaud -&gt; on coupe\n    print(t, \"°C -&gt; chauffage :\", chauffage)\n\n# affiche :\n# 21.5 °C -&gt; chauffage : False\n# 18.9 °C -&gt; chauffage : True\n# 17.4 °C -&gt; chauffage : True\n# 19.6 °C -&gt; chauffage : False</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li>la liste <code>mesures</code> joue le rôle du <strong>capteur</strong> : il convertit une grandeur physique (la température) en valeurs numériques ;</li><li>le test <code>if t &lt; CONSIGNE</code> est le <strong>traitement</strong> : le programme décide ;</li><li>la variable <code>chauffage</code> représente l'<strong>actionneur</strong> : <code>True</code> = allumé. Sur une vraie carte (micro:bit, Arduino), c'est l'OS qui transmet cet ordre au périphérique via un pilote.</li></ul><p><strong>📋 Trace d'exécution :</strong></p><table><tr><th>t (capteur)</th><th>t inférieur à CONSIGNE ?</th><th>chauffage (actionneur)</th></tr><tr><td>21.5</td><td>non</td><td>False</td></tr><tr><td>18.9</td><td>oui</td><td>True</td></tr><tr><td>17.4</td><td>oui</td><td>True</td></tr><tr><td>19.6</td><td>non</td><td>False</td></tr></table><p><strong>📂 L'arborescence de fichiers :</strong> troisième mission de l'OS : ranger les fichiers dans une <strong>arborescence</strong>, des dossiers qui en contiennent d'autres à partir d'une <strong>racine</strong> — un arbre renversé :</p><pre><code>/                  (racine)\n└── home\n    └── ada\n        ├── photos\n        └── cours\n            └── nsi.py</code></pre><p>Deux façons de désigner un fichier :</p><ul><li><strong>chemin absolu</strong> — depuis la racine, commence par <code>/</code> : <code>/home/ada/cours/nsi.py</code> ;</li><li><strong>chemin relatif</strong> — depuis le dossier où l'on se trouve : depuis <code>/home/ada</code>, <code>cours/nsi.py</code> suffit ;</li><li>deux raccourcis essentiels : <code>.</code> = le dossier courant, <code>..</code> = le dossier parent (remonter d'un cran).</li></ul><p>Exemple déroulé à la main : depuis <code>/home/ada/cours</code>, le chemin relatif <code>../photos</code> se lit « remonter d'un cran — on arrive dans <code>/home/ada</code> — puis descendre dans <code>photos</code> » : on atteint <code>/home/ada/photos</code>.</p><p><strong>🎯 Défi élève :</strong> compléter les quatre chemins relatifs dans l'arborescence ci-dessus.</p><pre><code>1. Depuis /home/ada,        atteindre nsi.py       : ______\n2. Depuis /home/ada/photos, atteindre nsi.py       : ______\n3. Depuis /home/ada/cours,  atteindre photos       : ______\n4. Depuis /home/ada/cours,  atteindre la racine /  : ______</code></pre><p>✅ Réponse :</p><pre><code>1. cours/nsi.py     (on descend simplement)\n2. ../cours/nsi.py  (on remonte d'un cran puis on redescend)\n3. ../photos        (l'exemple du cours)\n4. ../../..         (trois crans à remonter : cours, puis ada, puis home)</code></pre><ul><li>L'OS <strong>pilote</strong> le matériel (processus, mémoire, fichiers, périphériques, sécurité) ; il ne le fabrique pas.</li><li>Un <strong>capteur</strong> envoie une information à la machine (entrée) ; un <strong>actionneur</strong> reçoit un ordre et agit sur le monde (sortie).</li><li>Un chemin relatif ne commence jamais par <code>/</code>, et <code>..</code> ne remonte que d'UN cran.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Le <strong>terminal</strong> permet de piloter l'ordinateur en <em>tapant</em> des commandes, sans souris. C'est puissant, rapide, et indispensable sur les serveurs, qui n'ont souvent pas d'écran graphique. La machine affiche une <strong>invite</strong> (souvent terminée par <code>$</code>) et attend une commande ; la casse compte (<code>ls</code>, pas <code>LS</code>). Les commandes essentielles :</p><table><tr><th>Commande</th><th>Rôle</th></tr><tr><td><code>pwd</code></td><td><em>print working directory</em> : où suis-je ?</td></tr><tr><td><code>ls</code></td><td>lister le contenu du dossier courant</td></tr><tr><td><code>cd dossier</code></td><td>se déplacer (<code>cd ..</code> pour remonter d'un cran)</td></tr><tr><td><code>mkdir nom</code></td><td>créer un dossier</td></tr><tr><td><code>cat fichier</code></td><td>afficher le contenu d'un fichier</td></tr><tr><td><code>cp</code> / <code>mv</code> / <code>rm</code></td><td>copier / déplacer ou renommer / supprimer</td></tr></table><p>Exemple déroulé à la main, avant tout écran, dans l'arborescence du cours : je suis dans <code>/home/ada</code> — c'est ce que répond <code>pwd</code>. <code>ls</code> montre <code>photos</code> et <code>cours</code>. Après <code>cd cours</code>, je suis descendu d'un cran : <code>pwd</code> répond <code>/home/ada/cours</code>. Après <code>cd ..</code>, je suis remonté au parent : de nouveau <code>/home/ada</code>. Le réflexe à verbaliser avant chaque commande : « où suis-je ? ».</p><p><strong>💻 Manipulation — la session type :</strong> (départ dans <code>/home/ada</code>, chaque commande part de l'état laissé par la précédente)</p><pre><code>$ pwd\n/home/ada\n$ ls\nphotos  cours\n$ cd cours\n$ mkdir tp1\n$ ls\nnsi.py  tp1\n$ cd ..\n$ pwd\n/home/ada\n$ cat cours/nsi.py\nprint(\"Bonjour la NSI !\")</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>mkdir tp1</code> crée le dossier dans le répertoire courant (<code>/home/ada/cours</code>) ; le <code>ls</code> suivant affiche donc <code>nsi.py  tp1</code> (variante du TP : <code>mkdir -p a/b/c</code> crée toute la chaîne d'un coup) ;</li><li><code>cd ..</code> ne « revient pas en arrière dans le temps » : il remonte d'UN cran vers le dossier parent ;</li><li><code>cat cours/nsi.py</code> fonctionne depuis <code>/home/ada</code>, car <code>cours/nsi.py</code> est un chemin relatif valable depuis ce dossier.</li></ul><p>Pour manipuler des fichiers (TP « Manipuler des fichiers », fichier <code>eleves.txt</code>) :</p><pre><code>$ cp eleves.txt backup.txt    # copier : l'original reste\n$ mv backup.txt sauv.txt      # renommer / déplacer : l'original disparaît\n$ rm sauv.txt                 # supprimer : IRRÉVERSIBLE, pas de corbeille</code></pre><p><strong>📋 Trace d'exécution :</strong> le projet « Mission terminal » cache <code>secret.txt</code> dans l'arborescence d'un serveur : <code>/</code> contient <code>maison</code> et <code>serveur</code> ; <code>serveur</code> contient <code>public</code> et <code>prive</code>. Déroulons la navigation :</p><table><tr><th>Commande</th><th>Répertoire courant après</th><th>Affichage</th></tr><tr><td><code>pwd</code></td><td><code>/</code></td><td><code>/</code></td></tr><tr><td><code>ls</code></td><td><code>/</code></td><td><code>maison  serveur</code></td></tr><tr><td><code>cd serveur</code> puis <code>ls</code></td><td><code>/serveur</code></td><td><code>public  prive</code></td></tr><tr><td><code>cd prive</code> puis <code>ls</code></td><td><code>/serveur/prive</code></td><td><code>secret.txt</code></td></tr><tr><td><code>cat secret.txt</code></td><td><code>/serveur/prive</code></td><td><code>Le code du robot est 4042.</code></td></tr></table><p>Le chemin absolu de la cible est donc <code>/serveur/prive/secret.txt</code>.</p><p><strong>🎯 Défi élève :</strong> compléter la session pour retrouver le fichier secret (départ à la racine).</p><pre><code>$ pwd\n/\n$ ls\nmaison  serveur\n$ ______\n$ ls\npublic  prive\n$ ______\n$ ls\nsecret.txt\n$ ______\nLe code du robot est 4042.</code></pre><p>✅ Réponse :</p><pre><code>$ cd serveur      # descendre dans serveur\n$ cd prive        # puis dans prive\n$ cat secret.txt  # afficher le contenu du fichier\n# Chemin absolu de la cible : /serveur/prive/secret.txt</code></pre><ul><li><code>mv</code> écrase la destination sans prévenir si elle existe déjà ; <code>rm</code> est irréversible : pas de corbeille sous Linux.</li><li>Avant chaque commande, se demander « où suis-je ? » (<code>pwd</code>) : un chemin relatif dépend du répertoire courant.</li><li>Vocabulaire : l'<strong>invite</strong> (<code>$</code>), le <strong>répertoire courant</strong>, <code>..</code> = dossier parent, <code>.</code> = dossier courant.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>algorithme</strong> est une suite <strong>finie</strong> et <strong>précise</strong> d'instructions qui, à partir de données d'entrée, produit un résultat. Une recette de cuisine ou un itinéraire sont des algorithmes du quotidien. Deux mots à ne pas confondre :</p><ul><li>l'<strong>algorithme</strong>, c'est l'<em>idée</em>, la méthode : on peut l'écrire en français, en étapes numérotées ;</li><li>le <strong>programme</strong>, c'est la <em>traduction</em> de cette idée dans un langage, ici Python.</li></ul><p>Un bon algorithme doit être <strong>correct</strong> (il donne le bon résultat) et <strong>se terminer</strong>. L'algorithme le plus fondamental est le <strong>parcours séquentiel</strong> : examiner les éléments d'un tableau <em>un par un, du début à la fin</em>, pour rechercher une valeur, compter, accumuler une somme ou trouver le maximum.</p><p>Exemple à la main — trouver le maximum de <code>[4, 8, 15, 16, 23, 42]</code> : on retourne les cartes une à une en retenant « le plus grand vu ». On voit 4 (record : 4), puis 8 (record : 8), puis 15, puis 16, puis 23, enfin 42. Fin du tableau : le plus grand vu est <strong>42</strong>, et aucune carte n'a été regardée deux fois.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> la recherche séquentielle d'une valeur, avec la convention « −1 si absent ».</p><pre><code>def recherche(tab, cible):\n    for i in range(len(tab)):\n        if tab[i] == cible:\n            return i          # trouvé : on sort tout de suite\n    return -1                 # parcouru sans trouver\n\ndonnees = [4, 8, 15, 16, 23, 42]\nprint(recherche(donnees, 16))   # affiche 3\nprint(recherche(donnees, 99))   # affiche -1</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>for i in range(len(tab))</code> fait défiler tous les indices, de 0 au dernier ;</li><li>dès que <code>tab[i] == cible</code>, le <code>return i</code> sort immédiatement de la fonction : inutile de continuer à chercher ;</li><li>si la boucle se termine sans succès, on renvoie <strong>−1</strong> : la convention « échec », car −1 ne peut pas être un indice.</li></ul><p>Le même schéma de parcours donne la somme (on part de <code>total = 0</code> et on ajoute chaque élément) ou le comptage (on ajoute 1 quand la condition est vraie).</p><p><strong>📋 Trace d'exécution :</strong> déroulons <code>maximum([4, 8, 15, 16, 23, 42])</code>, où la variable <code>m</code> mémorise « le plus grand vu » (au départ, <code>m = tab[0]</code>, donc 4).</p><table><tr><th>x lu</th><th>x &gt; m ?</th><th>m après ce tour</th></tr><tr><td>4</td><td>non</td><td>4</td></tr><tr><td>8</td><td>oui</td><td>8</td></tr><tr><td>15</td><td>oui</td><td>15</td></tr><tr><td>16</td><td>oui</td><td>16</td></tr><tr><td>23</td><td>oui</td><td>23</td></tr><tr><td>42</td><td>oui</td><td>42</td></tr></table><p>La fonction renvoie 42 : exactement le geste fait à la main avec les cartes.</p><p><strong>🎯 Défi élève :</strong> compléter la fonction <code>maximum</code>.</p><pre><code>def maximum(tab):\n    m = ______            # on suppose que le 1er est le max\n    for x in tab:\n        if ______:\n            m = ______    # on garde le plus grand vu\n    return ______\n\nprint(maximum([4, 8, 15, 16, 23, 42]))   # affiche 42</code></pre><p>✅ Réponse :</p><pre><code>def maximum(tab):\n    m = tab[0]            # on suppose que le 1er est le max\n    for x in tab:\n        if x &gt; m:\n            m = x         # on garde le plus grand vu\n    return m\n\nprint(maximum([4, 8, 15, 16, 23, 42]))   # affiche 42</code></pre><ul><li>Toujours écrire l'algorithme <strong>en français</strong> (étapes numérotées) avant de le coder : c'est la démarche îlot.</li><li>Une recherche qui échoue renvoie <strong>−1</strong>, jamais 0 : 0 est un indice valide !</li><li>Tous ces parcours font environ <em>n</em> opérations pour un tableau de <em>n</em> éléments : ils sont <strong>linéaires</strong>.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Quand le tableau est <strong>trié</strong>, on peut chercher bien plus vite qu'en le parcourant. C'est le principe du jeu « devine le nombre entre 1 et 100 » : on propose le <strong>milieu</strong>, et selon la réponse « plus grand / plus petit », on élimine <strong>la moitié</strong> des possibilités à chaque essai. La <strong>recherche dichotomique</strong> applique cette idée : on garde deux bornes <code>gauche</code> et <code>droite</code>, on compare la cible à l'élément du milieu, et on resserre l'intervalle du bon côté.</p><p>Exemple à la main — chercher 23 dans <code>[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code> (indices 0 à 9) :</p><ul><li>milieu = indice 4 (valeur 16) ; 23 &gt; 16 → on garde la droite (indices 5 à 9) ;</li><li>milieu = indice 7 (valeur 56) ; 23 &lt; 56 → on garde la gauche (indices 5 à 6) ;</li><li>milieu = indice 5 (valeur 23) → trouvé en <strong>3 comparaisons</strong> seulement !</li></ul><p><strong>🐢 Première méthode — simple à comprendre :</strong> la recherche séquentielle de la séance précédente fonctionne toujours… mais elle ignore que le tableau est trié.</p><pre><code>def recherche(tab, cible):\n    for i in range(len(tab)):\n        if tab[i] == cible:\n            return i\n    return -1\n\nt = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint(recherche(t, 23))   # affiche 5</code></pre><p><strong>🔍 Comment ça marche :</strong> elle examine les cases une à une : ici 6 comparaisons pour atteindre 23, et 10 comparaisons (tout le tableau) si la valeur est absente. Sur un tableau de <em>n</em> éléments, cela peut faire <em>n</em> comparaisons.</p><p><strong>⚡ Méthode plus efficace :</strong> la dichotomie. Chaque comparaison élimine la moitié de l'intervalle : il ne reste qu'environ log₂(n) tours. Pour 1 000 000 d'éléments, <strong>≈ 20 comparaisons</strong> au lieu de 1 000 000.</p><pre><code>def dichotomie(tab, cible):\n    gauche, droite = 0, len(tab) - 1\n    while gauche &lt;= droite:\n        milieu = (gauche + droite) // 2\n        if tab[milieu] == cible:\n            return milieu\n        elif tab[milieu] &lt; cible:\n            gauche = milieu + 1     # la cible est à droite\n        else:\n            droite = milieu - 1     # la cible est à gauche\n    return -1\n\nt = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint(dichotomie(t, 23))   # affiche 5\nprint(dichotomie(t, 17))   # affiche -1</code></pre><p>Le milieu se calcule avec la <strong>division entière</strong> <code>//</code>, car un indice doit être un entier ; tant que <code>gauche &lt;= droite</code>, il reste au moins une case à examiner.</p><p><strong>📋 Trace d'exécution :</strong> <code>dichotomie(t, 23)</code> — les deux bornes sont les deux aimants du tableau.</p><table><tr><th>gauche</th><th>droite</th><th>milieu</th><th>tab[milieu]</th><th>action</th></tr><tr><td>0</td><td>9</td><td>4</td><td>16</td><td>23 &gt; 16 → gauche = 5</td></tr><tr><td>5</td><td>9</td><td>7</td><td>56</td><td>23 &lt; 56 → droite = 6</td></tr><tr><td>5</td><td>6</td><td>5</td><td>23</td><td>trouvé → renvoie 5</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter la dichotomie.</p><pre><code>def dichotomie(tab, cible):\n    gauche, droite = 0, len(tab) - 1\n    while gauche &lt;= droite:\n        milieu = (gauche + droite) ______ 2\n        if tab[milieu] == cible:\n            return ______\n        elif tab[milieu] &lt; cible:\n            gauche = ______     # la cible est à droite\n        else:\n            droite = ______     # la cible est à gauche\n    return ______\n\nprint(dichotomie([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))   # affiche 5</code></pre><p>✅ Réponse :</p><pre><code>def dichotomie(tab, cible):\n    gauche, droite = 0, len(tab) - 1\n    while gauche &lt;= droite:\n        milieu = (gauche + droite) // 2\n        if tab[milieu] == cible:\n            return milieu\n        elif tab[milieu] &lt; cible:\n            gauche = milieu + 1     # la cible est à droite\n        else:\n            droite = milieu - 1     # la cible est à gauche\n    return -1\n\nprint(dichotomie([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))   # affiche 5</code></pre><ul><li>⚠️ La dichotomie n'a de sens que sur un tableau <strong>déjà trié</strong> : sur un tableau quelconque, elle peut rater la cible.</li><li>Le milieu se calcule avec <code>//</code> (division entière), jamais avec <code>/</code> qui donne un flottant.</li><li>Séquentiel : environ n comparaisons ; dichotomie : environ log₂(n) — c'est l'écart que mesurera le projet de la prochaine séance.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Deux algorithmes corrects peuvent résoudre le même problème à des coûts très différents. Pour le montrer <strong>expérimentalement</strong>, on <strong>instrumente</strong> chaque fonction : un compteur <code>nb_etapes</code> augmente de 1 à chaque comparaison, et la fonction renvoie le couple <code>(indice, nb_etapes)</code>. Il ne reste plus qu'à faire courir les deux algorithmes sur des tableaux de plus en plus grands.</p><pre><code>def recherche_seq(tab, cible):\n    nb_etapes = 0\n    for i in range(len(tab)):\n        nb_etapes = nb_etapes + 1\n        if tab[i] == cible:\n            return (i, nb_etapes)\n    return (-1, nb_etapes)\n\nt = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]\nprint(recherche_seq(t, 23))   # affiche (5, 6)\nprint(recherche_seq(t, 17))   # affiche (-1, 10)</code></pre><p><strong>🎯 Bilan :</strong></p><ul><li>Les phases du projet : rejouer « devine le nombre », écrire les <strong>deux algorithmes en français</strong> sur l'affiche d'îlot, coder <code>recherche_seq</code> et <code>dichotomie</code> pour qu'elles renvoient <code>(indice, nb_etapes)</code>, tester, présenter.</li><li>Les 3 tests du site : les deux fonctions trouvent le <strong>même indice</strong> ; la dichotomie fait <strong>au plus 9 étapes pour 500 éléments</strong> triés ; les deux renvoient l'indice <strong>−1</strong> si la valeur est absente.</li><li>Résultat expérimental attendu : le nombre d'étapes du séquentiel <strong>suit n</strong> (10 → ~10, 1000 → ~1000), celui de la dichotomie <strong>suit log₂(n)</strong> (10 → ~4, 1000 → ~10, 1 000 000 → ~20).</li><li>Conclusion à noter : recherche séquentielle en <strong>O(n)</strong>, recherche dichotomique en <strong>O(log n)</strong> — mais la dichotomie exige un tableau <strong>trié</strong>.</li></ul><p><strong>Question type corrigée :</strong> « Un tableau trié contient 1 000 000 d'éléments. Combien de comparaisons, au maximum, pour chaque algorithme ? » — Séquentiel : 1 000 000 (pire cas : la valeur est absente ou tout au bout). Dichotomie : chaque comparaison divise l'intervalle par 2 ; comme 2²⁰ ≈ 1 000 000, il suffit d'environ <strong>20 comparaisons</strong>.</p>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p><strong>Trier</strong>, c'est ranger les éléments d'un tableau dans l'ordre croissant. Deux méthodes sont au programme. Le <strong>tri par sélection</strong> : chercher le <strong>plus petit</strong> élément et le placer en première position, puis le plus petit du <em>reste</em> en deuxième position, et ainsi de suite. Le <strong>tri par insertion</strong> : exactement la façon dont on trie un <strong>jeu de cartes</strong> à la main — on prend les cartes une par une et on <em>insère</em> chacune à sa bonne place parmi celles déjà triées.</p><p>Exemple à la main (sélection) sur <code>[5, 2, 9, 1, 7]</code> : le plus petit est 1 → on l'échange avec le 5 → <code>[1, 2, 9, 5, 7]</code> ; le plus petit du reste est 2, déjà en place ; puis 5 ↔ 9 → <code>[1, 2, 5, 9, 7]</code> ; puis 7 ↔ 9 → <code>[1, 2, 5, 7, 9]</code>. Trié !</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> le tri par sélection.</p><pre><code>def tri_selection(tab):\n    n = len(tab)\n    for i in range(n):\n        i_min = i\n        for j in range(i + 1, n):       # cherche le min du reste\n            if tab[j] &lt; tab[i_min]:\n                i_min = j\n        tab[i], tab[i_min] = tab[i_min], tab[i]   # échange\n    return tab\n\nprint(tri_selection([5, 2, 9, 1, 7]))   # affiche [1, 2, 5, 7, 9]</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>i</code> est la position à remplir ; la boucle interne cherche l'<em>indice</em> <code>i_min</code> du plus petit élément restant ;</li><li>l'échange <code>tab[i], tab[i_min] = tab[i_min], tab[i]</code> place ce minimum à sa position définitive — l'oublier est l'erreur fréquente signalée par le site ;</li><li>deux boucles imbriquées : environ n²/2 comparaisons, un coût <strong>quadratique</strong> (en n²) — ce que montrent les tas de jetons de l'activité débranchée.</li></ul><p><strong>⚡ Méthode plus efficace (sur un tableau presque trié) :</strong> le tri par insertion. Même coût n² dans le pire des cas, mais si le tableau est <em>presque</em> trié, chaque carte s'insère presque sans décalage : le tri devient quasiment linéaire.</p><pre><code>def tri_insertion(tab):\n    for i in range(1, len(tab)):\n        cle = tab[i]            # la carte à insérer\n        j = i - 1\n        while j &gt;= 0 and tab[j] &gt; cle:\n            tab[j + 1] = tab[j]  # on décale vers la droite\n            j -= 1\n        tab[j + 1] = cle         # on pose la carte à sa place\n    return tab\n\nprint(tri_insertion([5, 2, 9, 1, 7]))   # affiche [1, 2, 5, 7, 9]</code></pre><p><strong>📋 Trace d'exécution :</strong> <code>tri_selection([5, 2, 9, 1, 7])</code>, un tour de boucle par ligne.</p><table><tr><th>tour i</th><th>i_min trouvé (valeur)</th><th>tableau après l'échange</th></tr><tr><td>0</td><td>3 (valeur 1)</td><td>[1, 2, 9, 5, 7]</td></tr><tr><td>1</td><td>1 (valeur 2)</td><td>[1, 2, 9, 5, 7] — déjà en place</td></tr><tr><td>2</td><td>3 (valeur 5)</td><td>[1, 2, 5, 9, 7]</td></tr><tr><td>3</td><td>4 (valeur 7)</td><td>[1, 2, 5, 7, 9]</td></tr><tr><td>4</td><td>4 (valeur 9)</td><td>[1, 2, 5, 7, 9] — terminé</td></tr></table><p>À chaque tour, la partie gauche du tableau grandit : triée <em>et</em> définitive.</p><p><strong>🎯 Défi élève :</strong> réécrire le tri par sélection (Exercice 9 du thème).</p><pre><code>def tri_selection(tab):\n    n = len(tab)\n    for i in range(n):\n        i_min = ______\n        for j in range(______, n):       # cherche le min du reste\n            if tab[j] &lt; tab[______]:\n                i_min = j\n        tab[i], tab[i_min] = ______, ______   # échange\n    return tab\n\nprint(tri_selection([5, 2, 9, 1, 7]))   # affiche [1, 2, 5, 7, 9]</code></pre><p>✅ Réponse :</p><pre><code>def tri_selection(tab):\n    n = len(tab)\n    for i in range(n):\n        i_min = i\n        for j in range(i + 1, n):       # cherche le min du reste\n            if tab[j] &lt; tab[i_min]:\n                i_min = j\n        tab[i], tab[i_min] = tab[i_min], tab[i]   # échange\n    return tab\n\nprint(tri_selection([5, 2, 9, 1, 7]))   # affiche [1, 2, 5, 7, 9]</code></pre><ul><li>L'erreur classique : oublier l'échange <code>tab[i], tab[i_min] = tab[i_min], tab[i]</code> — le minimum est trouvé mais jamais placé.</li><li>Sélection comme insertion coûtent de l'ordre de <strong>n²</strong> : avec 100 cartes, environ 5 000 comparaisons — d'où les gros tas de jetons.</li><li>Pour un paquet <em>presque</em> trié, le tri par <strong>insertion</strong> est le bon choix (question bilan de la séance).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Écrire un algorithme ne suffit pas : il faut aussi savoir <strong>ce qu'il coûte</strong> et pouvoir <strong>prouver</strong> qu'il s'arrête et qu'il est juste. Trois outils pour cela :</p><ul><li>le <strong>coût</strong> (ou <strong>complexité</strong>) : le nombre d'opérations effectuées en fonction de la taille <em>n</em> des données — on compte, on ne chronomètre pas, car le chronomètre dépend de la machine ;</li><li>le <strong>variant</strong> de boucle : une quantité <strong>entière</strong>, <strong>positive</strong>, qui <strong>décroît strictement</strong> à chaque tour ; il prouve la <strong>terminaison</strong> (la boucle s'arrête forcément) ;</li><li>l'<strong>invariant</strong> de boucle : une propriété <strong>vraie au début de chaque tour</strong> ; il prouve la <strong>correction</strong> (le résultat est juste).</li></ul><p>Les quatre coûts au programme :</p><table><tr><th>Coût</th><th>Notation</th><th>Exemple</th><th>Pour n = 1 000 000</th></tr><tr><td>constant</td><td>O(1)</td><td>accès <code>tab[i]</code></td><td>1 opération</td></tr><tr><td>logarithmique</td><td>O(log n)</td><td>recherche dichotomique</td><td>≈ 20</td></tr><tr><td>linéaire</td><td>O(n)</td><td>parcours, recherche séquentielle</td><td>1 000 000</td></tr><tr><td>quadratique</td><td>O(n²)</td><td>tris par sélection / insertion</td><td>10¹² (énorme !)</td></tr></table><p>Exemple de terminaison déroulé à la main : la boucle « tant que n &gt; 1, remplacer n par n // 2 » partant de 10 donne 10 → 5 → 2 → 1 : trois tours puis arrêt. La valeur de <code>n</code> est entière, positive et diminue strictement : c'est un <strong>variant</strong>, la boucle se termine forcément.</p><p><strong>🐢 La manipulation — compter les comparaisons :</strong></p><pre><code>def cout_sequentiel(n):\n    return n                  # pire cas : on parcourt tout\n\ndef cout_dichotomie(n):\n    comparaisons = 0\n    while n &gt; 1:\n        n = n // 2            # on élimine la moitié\n        comparaisons = comparaisons + 1\n    return comparaisons\n\nprint(cout_sequentiel(1000000))   # affiche 1000000\nprint(cout_dichotomie(1000000))   # affiche 19</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>n = n // 2</code> simule la dichotomie : chaque comparaison élimine la moitié des possibilités ;</li><li>la boucle tourne tant que <code>n &gt; 1</code> et le compteur totalise les comparaisons ;</li><li>19 comparaisons (le cours retient « ≈ 20 ») contre 1 000 000 : c'est l'écart O(log n) / O(n) mesuré dans le projet « Recherche séquentielle vs dichotomique ».</li></ul><p><strong>📋 Trace d'exécution :</strong> déroulé de <code>cout_dichotomie(10)</code> :</p><table><tr><th>Tour</th><th>n</th><th>n // 2</th><th>comparaisons</th></tr><tr><td>1</td><td>10</td><td>5</td><td>1</td></tr><tr><td>2</td><td>5</td><td>2</td><td>2</td></tr><tr><td>3</td><td>2</td><td>1</td><td>3</td></tr><tr><td>—</td><td>1</td><td>Stop (n &gt; 1 faux)</td><td>3</td></tr></table><p><strong>La correction des tris — deux invariants à connaître</strong>, au début du tour <code>i</code> :</p><table><tr><th>Tri</th><th>Invariant (début du tour i)</th></tr><tr><td>sélection</td><td>la tranche <code>tab[0..i-1]</code> est triée ET contient les i plus petits éléments, déjà à leur place définitive</td></tr><tr><td>insertion</td><td>la tranche <code>tab[0..i-1]</code> est seulement triée entre ses éléments : ils ne sont pas forcément à leur place définitive</td></tr></table><p>Rédaction type bac en quatre temps : énoncer la propriété ; vérifier qu'elle est vraie au départ ; montrer qu'elle est conservée à chaque tour ; conclure (pour i = n, « <code>tab[0..n-1]</code> est triée » : le tableau est trié).</p><p><strong>🎯 Défi élève :</strong> compléter la fonction qui compte les comparaisons de la dichotomie.</p><pre><code>def cout_dichotomie(n):\n    comparaisons = 0\n    while n ______ 1:          # tant qu'il reste plus d'un élément\n        n = n ______ 2         # on élimine la moitié\n        comparaisons = comparaisons + ______\n    return ______\n\nprint(cout_dichotomie(1000))   # affiche 9</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def cout_dichotomie(n):\n    comparaisons = 0\n    while n &gt; 1:\n        n = n // 2\n        comparaisons = comparaisons + 1\n    return comparaisons\n\nprint(cout_dichotomie(1000))   # affiche 9</code></pre><ul><li><strong>Variant</strong> = terminaison (« ça s'arrête ») ; <strong>invariant</strong> = correction (« c'est juste ») : ne pas les confondre — c'est une question du QCM.</li><li>Le variant de la dichotomie est <code>droite − gauche</code> ; celui de <code>while n &gt; 1: n = n // 2</code> est <code>n</code> (Exercice 7).</li><li>Le coût se compte en opérations : O(n²) pour n = 1 000 000, c'est 10¹² opérations — le choix de l'algorithme est décisif.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un algorithme <strong>glouton</strong> (<em>greedy</em>) construit une solution <em>pas à pas</em> : à chaque étape, il fait le choix qui semble le meilleur <strong>sur le moment</strong>, et il ne revient <strong>jamais en arrière</strong>. C'est rapide et intuitif — c'est ce que chacun fait spontanément pour rendre la monnaie.</p><p>Exemple à la main — rendre <strong>67 centimes</strong> avec le moins de pièces possible (système [1, 2, 5, 10, 20, 50, 100, 200]) : on donne toujours la plus grosse pièce possible.</p><ul><li>67 ≥ 50 → on donne 50, il reste 17 ;</li><li>17 ≥ 10 → on donne 10, il reste 7 ;</li><li>7 ≥ 5 → on donne 5, il reste 2 ;</li><li>2 ≥ 2 → on donne 2, il reste 0 : terminé, 4 pièces (50 + 10 + 5 + 2).</li></ul><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>def rendu_monnaie(somme, pieces):\n    pieces = sorted(pieces, reverse=True)   # de la plus grosse à la plus petite\n    rendu = []\n    for p in pieces:\n        while somme &gt;= p:        # on prend cette pièce tant qu'on peut\n            somme = somme - p\n            rendu.append(p)\n    return rendu\n\nprint(rendu_monnaie(67, [1, 2, 5, 10, 20, 50, 100, 200]))   # affiche [50, 10, 5, 2]</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>sorted(pieces, reverse=True)</code> range les pièces de la plus grosse à la plus petite : le « meilleur choix local » est toujours examiné en premier ;</li><li><code>while somme &gt;= p</code> : on redonne la même pièce tant qu'elle « rentre » encore dans la somme à rendre ;</li><li>on ne retire jamais une pièce déjà donnée : aucun retour en arrière, c'est la signature du glouton.</li></ul><p><strong>⚠️ Le glouton n'est pas toujours optimal :</strong> tout dépend du système de pièces. Avec le système « truqué » [1, 3, 4], pour rendre 6 :</p><pre><code>print(rendu_monnaie(6, [1, 3, 4]))   # affiche [4, 1, 1]</code></pre><p>Le glouton rend 4 + 1 + 1, soit 3 pièces… alors que 3 + 3 suffit (2 pièces). Le meilleur choix local (prendre 4) n'était pas le meilleur choix global — c'est l'erreur fréquente du site : « croire que le glouton donne toujours l'optimum ».</p><p><strong>📋 Trace d'exécution :</strong> <code>rendu_monnaie(67, [1, 2, 5, 10, 20, 50, 100, 200])</code> :</p><table><tr><th>p</th><th>somme ≥ p ?</th><th>somme après</th><th>rendu</th></tr><tr><td>200</td><td>non</td><td>67</td><td>[]</td></tr><tr><td>100</td><td>non</td><td>67</td><td>[]</td></tr><tr><td>50</td><td>oui (1 fois)</td><td>17</td><td>[50]</td></tr><tr><td>20</td><td>non</td><td>17</td><td>[50]</td></tr><tr><td>10</td><td>oui (1 fois)</td><td>7</td><td>[50, 10]</td></tr><tr><td>5</td><td>oui (1 fois)</td><td>2</td><td>[50, 10, 5]</td></tr><tr><td>2</td><td>oui (1 fois)</td><td>0</td><td>[50, 10, 5, 2]</td></tr><tr><td>1</td><td>non (somme = 0)</td><td>0</td><td>[50, 10, 5, 2]</td></tr></table><p><strong>🎯 Défi élève :</strong> compléter le rendu de monnaie glouton (Exercice 8 du site).</p><pre><code>def rendu_monnaie(somme, pieces):\n    pieces = sorted(pieces, reverse=______)\n    rendu = []\n    for p in pieces:\n        while somme ______ p:\n            somme = somme - ______\n            rendu.______(p)\n    return rendu\n\nprint(rendu_monnaie(67, [1, 2, 5, 10, 20, 50, 100, 200]))   # affiche [50, 10, 5, 2]</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>def rendu_monnaie(somme, pieces):\n    pieces = sorted(pieces, reverse=True)\n    rendu = []\n    for p in pieces:\n        while somme &gt;= p:\n            somme = somme - p\n            rendu.append(p)\n    return rendu\n\nprint(rendu_monnaie(67, [1, 2, 5, 10, 20, 50, 100, 200]))   # affiche [50, 10, 5, 2]</code></pre><ul><li>Glouton = meilleur choix <strong>local</strong> à chaque étape, <strong>sans retour en arrière</strong>.</li><li>Rapide et intuitif, mais <strong>pas toujours optimal</strong> : le système [1, 3, 4] le piège (question du QCM).</li><li>Avec le système de l'euro, le glouton donne bien le rendu optimal : c'est une propriété du système de pièces, pas de l'algorithme.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Capacité attendue du BO : « écrire un algorithme qui prédit la classe d'un élément en fonction de la classe majoritaire de ses k plus proches voisins ». C'est un premier exemple d'algorithme d'<strong>apprentissage</strong> : la machine classe un objet inconnu en le comparant à des exemples déjà <strong>étiquetés</strong>. L'algorithme des <strong>k plus proches voisins</strong> (kNN) tient en trois étapes :</p><ul><li>calculer la <strong>distance</strong> entre le point inconnu et chaque exemple ;</li><li>garder les <strong>k</strong> exemples les plus proches ;</li><li><strong>voter</strong> : la classe la plus fréquente parmi ces k voisins l'emporte.</li></ul><p>Exemple à la main : quatre fruits connus — pommes en (1, 1) et (2, 1), bananes en (5, 4) et (6, 4) — et un fruit mystère en (5.2, 4.0). Sur le papier millimétré, on place les points puis on entoure à la règle les 3 voisins les plus proches du point mystère : les deux bananes et une pomme. Vote : 2 voix « banane » contre 1 voix « pomme » → le fruit mystère est classé <strong>banane</strong>.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong></p><pre><code>donnees = [(1, 1, \"pomme\"), (2, 1, \"pomme\"),\n           (5, 4, \"banane\"), (6, 4, \"banane\")]\n\ndef distance(a, b):\n    return ((a[0]-b[0])**2 + (a[1]-b[1])**2) ** 0.5\n\ndef knn(donnees, point, k=3):\n    voisins = sorted(donnees, key=lambda d: distance(d, point))[:k]\n    classes = [v[2] for v in voisins]\n    return max(set(classes), key=classes.count)\n\nprint(knn(donnees, (5.2, 4.0), k=3))   # affiche banane</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>distance</code> applique le théorème de Pythagore : racine carrée (exposant 0.5) de la somme des carrés des écarts ;</li><li><code>sorted(donnees, key=...)</code> trie les exemples du plus proche au plus lointain, et <code>[:k]</code> ne garde que les k premiers ;</li><li><code>v[2]</code> récupère l'étiquette de chaque voisin, puis <code>max(set(classes), key=classes.count)</code> réalise le vote : la classe la plus fréquente gagne.</li></ul><p><strong>📋 Trace d'exécution :</strong> distances au point mystère (5.2, 4.0), avec k = 3 :</p><table><tr><th>Exemple</th><th>Classe</th><th>Distance</th><th>Parmi les 3 plus proches ?</th></tr><tr><td>(5, 4)</td><td>banane</td><td>0.2</td><td>oui</td></tr><tr><td>(6, 4)</td><td>banane</td><td>0.8</td><td>oui</td></tr><tr><td>(2, 1)</td><td>pomme</td><td>≈ 4.39</td><td>oui</td></tr><tr><td>(1, 1)</td><td>pomme</td><td>≈ 5.16</td><td>non</td></tr></table><p>Vote : banane 2 — pomme 1 → <strong>banane</strong>. Le choix de k compte : trop petit, l'algorithme est sensible au bruit ; trop grand, il mélange des classes éloignées ; on choisit souvent k <strong>impair</strong> pour éviter les égalités de vote.</p><p><strong>🎯 Défi élève :</strong> compléter le kNN du fruit mystère (Exercice 10 du site).</p><pre><code>donnees = [(1, 1, \"pomme\"), (2, 1, \"pomme\"),\n           (5, 4, \"banane\"), (6, 4, \"banane\")]\n\ndef distance(a, b):\n    return ((a[0]-b[0])**2 + (a[1]-b[1])**2) ** ______\n\ndef knn(donnees, point, k=3):\n    voisins = sorted(donnees, key=lambda d: distance(d, ______))[:k]\n    classes = [v[______] for v in voisins]\n    return max(set(classes), key=classes.______)\n\nprint(knn(donnees, (5.2, 4.0), k=3))   # affiche banane</code></pre><p><strong>✅ Réponse :</strong></p><pre><code>donnees = [(1, 1, \"pomme\"), (2, 1, \"pomme\"),\n           (5, 4, \"banane\"), (6, 4, \"banane\")]\n\ndef distance(a, b):\n    return ((a[0]-b[0])**2 + (a[1]-b[1])**2) ** 0.5\n\ndef knn(donnees, point, k=3):\n    voisins = sorted(donnees, key=lambda d: distance(d, point))[:k]\n    classes = [v[2] for v in voisins]\n    return max(set(classes), key=classes.count)\n\nprint(knn(donnees, (5.2, 4.0), k=3))   # affiche banane</code></pre><ul><li>kNN = trois étapes : <strong>distance</strong>, <strong>k plus proches</strong>, <strong>vote majoritaire</strong>.</li><li>Choisir k <strong>impair</strong> pour limiter les égalités ; k trop petit = bruit, k trop grand = mélange.</li><li>kNN a besoin d'exemples déjà <strong>étiquetés</strong> : c'est un apprentissage à partir de données, pas une formule magique.</li></ul>"
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
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li><strong>Parcours séquentiel</strong> (recherche, maximum, somme) : une seule passe sur le tableau, coût linéaire O(n) ; convention : renvoyer −1 si la valeur est absente.</li><li><strong>Recherche dichotomique</strong> : uniquement sur un tableau <strong>déjà trié</strong> ; coût O(log n) — environ 20 comparaisons pour 1 000 000 d'éléments.</li><li><strong>Tris par sélection et par insertion</strong> : deux boucles imbriquées, coût quadratique O(n²) ; le <strong>variant</strong> prouve la terminaison, l'<strong>invariant</strong> prouve la correction.</li><li><strong>Glouton</strong> (rendu de monnaie) : meilleur choix local sans retour en arrière ; rapide mais <strong>pas toujours optimal</strong> (système truqué [1, 3, 4]).</li><li><strong>kNN</strong> : distance, k plus proches voisins, vote majoritaire ; k impair de préférence.</li></ul><p>Le tableau de synthèse à savoir compléter (projeté colonnes masquées en début de séance) :</p><table><tr><th>Problème</th><th>Algorithme</th><th>Coût</th></tr><tr><td>chercher dans un tableau quelconque</td><td>recherche séquentielle</td><td>O(n)</td></tr><tr><td>chercher dans un tableau <em>trié</em></td><td>recherche dichotomique</td><td>O(log n)</td></tr><tr><td>ranger dans l'ordre</td><td>tri par sélection / insertion</td><td>O(n²)</td></tr><tr><td>optimiser pas à pas (rendu de monnaie)</td><td>glouton</td><td>rapide, pas toujours optimal</td></tr><tr><td>classer un objet inconnu</td><td>k plus proches voisins</td><td>selon la taille des données</td></tr></table><p><strong>❓ Question type corrigée</strong> (dans l'esprit du QCM et du TP noté) : « Quel est le coût du tri par sélection sur un tableau de n éléments : O(1), O(log n), O(n) ou O(n²) ? »</p><p><strong>✅ Réponse : O(n²).</strong> Le tri par sélection utilise deux boucles imbriquées : pour chaque position i à remplir, il parcourt tout le reste du tableau pour trouver le minimum, soit environ n²/2 comparaisons. Pour n = 1 000 000, cela représente de l'ordre de 10¹² opérations — d'où l'importance de choisir le bon algorithme.</p><ul><li>Les quatre erreurs fréquentes à revoir avant le TP noté : dichotomie sur un tableau non trié ; oubli de l'échange <code>tab[i], tab[i_min] = tab[i_min], tab[i]</code> ; « le glouton donne toujours l'optimum » ; confusion variant / invariant.</li><li>Évaluation : TP noté sur poste (1 h, /20), documents du site fermés ; le DS n°4 suivra sur table.</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Un <strong>réseau</strong> relie des machines pour qu'elles échangent des données. Pour se comprendre, elles doivent suivre les mêmes règles : c'est un <strong>protocole</strong>, un ensemble de conventions sur le <em>format</em> des messages et l'<em>ordre</em> des échanges. Analogie postale : envoyer une lettre suppose un format commun (adresse au bon endroit, timbre, enveloppe) ; sans ce « protocole postal » partagé, la lettre n'arrive pas. Internet repose sur la famille de protocoles <strong>TCP/IP</strong>, et chaque machine y possède une <strong>adresse IP</strong> (ex. <code>192.168.1.10</code>) qui l'identifie de façon unique sur le réseau, comme une adresse postale.</p><p>Idée centrale d'Internet : un message n'est <strong>pas</strong> envoyé d'un seul bloc, il est découpé en <strong>paquets</strong>. Déroulons à la main : « Bonjour le monde » est coupé en trois morceaux — « Bonjour » (paquet 1), « le » (paquet 2), « monde » (paquet 3). Chaque paquet transporte un <strong>en-tête</strong> (adresses source et destination, numéro d'ordre) et les <strong>données</strong> : comme une enveloppe, avec le contenu dedans et les informations de livraison écrites dessus. Si les paquets arrivent dans l'ordre 3, 1, 2, le destinataire les retrie grâce aux numéros et recolle « Bonjour le monde ». En réalité, chaque couche ajoute sa propre enveloppe autour de la précédente : les données sont glissées dans un segment TCP (qui ajoute le numéro), lui-même glissé dans un paquet IP (qui ajoute les adresses), lui-même glissé dans une trame Ethernet ou Wi-Fi pour voyager sur le câble : c'est l'<strong>encapsulation</strong>, des enveloppes emboîtées qu'on ouvre à l'arrivée dans l'ordre inverse.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> un paquet est représenté par un dictionnaire <code>{src, dst, num, data}</code> (vu au thème « Types construits »).</p><pre><code>message = \"Bonjour le monde\"\nmots = message.split(\" \")\npaquets = []\nfor i in range(len(mots)):\n    paquet = {\"src\": \"192.168.1.10\", \"dst\": \"172.16.0.3\",\n              \"num\": i + 1, \"data\": mots[i]}\n    paquets.append(paquet)\nfor p in paquets:\n    print(p)\n# affiche :\n# {'src': '192.168.1.10', 'dst': '172.16.0.3', 'num': 1, 'data': 'Bonjour'}\n# {'src': '192.168.1.10', 'dst': '172.16.0.3', 'num': 2, 'data': 'le'}\n# {'src': '192.168.1.10', 'dst': '172.16.0.3', 'num': 3, 'data': 'monde'}</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>message.split(\" \")</code> coupe la chaîne à chaque espace et donne la liste <code>['Bonjour', 'le', 'monde']</code> ;</li><li><code>\"num\": i + 1</code> numérote les paquets à partir de 1 : ce numéro d'ordre est la seule information qui permettra de recoller le message ;</li><li>chaque dictionnaire réunit l'en-tête (<code>src</code>, <code>dst</code>, <code>num</code>) et les données (<code>data</code>) : c'est exactement l'anatomie d'un paquet.</li></ul><p><strong>📋 Trace d'exécution :</strong> le découpage déroulé à la main :</p><table><tr><th>i</th><th>mots[i]</th><th>num = i + 1</th><th>paquet ajouté</th></tr><tr><td>0</td><td>« Bonjour »</td><td>1</td><td>en-tête + « Bonjour »</td></tr><tr><td>1</td><td>« le »</td><td>2</td><td>en-tête + « le »</td></tr><tr><td>2</td><td>« monde »</td><td>3</td><td>en-tête + « monde »</td></tr></table><p><strong>🎯 Défi élève :</strong> les paquets sont arrivés dans le désordre ; compléter la reconstruction du message.</p><pre><code>paquets_recus = [\n    {\"num\": 3, \"data\": \"monde\"},\n    {\"num\": 1, \"data\": \"Bonjour\"},\n    {\"num\": 2, \"data\": \"le\"},\n]\ntries = sorted(paquets_recus, key=lambda p: p[\"______\"])\nmorceaux = []\nfor p in tries:\n    morceaux.append(p[\"______\"])\nprint(\" \".join(______))</code></pre><p>✅ Réponse :</p><pre><code>paquets_recus = [\n    {\"num\": 3, \"data\": \"monde\"},\n    {\"num\": 1, \"data\": \"Bonjour\"},\n    {\"num\": 2, \"data\": \"le\"},\n]\ntries = sorted(paquets_recus, key=lambda p: p[\"num\"])\nmorceaux = []\nfor p in tries:\n    morceaux.append(p[\"data\"])\nprint(\" \".join(morceaux))   # affiche Bonjour le monde</code></pre><ul><li><strong>Paquet = en-tête + données</strong> : sans le numéro d'ordre, impossible de remettre les morceaux dans l'ordre.</li><li>Un protocole n'est pas un logiciel : ce sont des <strong>règles communes</strong> que toutes les machines acceptent de suivre.</li><li>Vocabulaire : <em>en-tête</em> (header), <em>encapsulation</em> (données → segment TCP → paquet IP → trame).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>Entre l'expéditeur et le destinataire, un paquet ne saute pas directement : il traverse une succession de <strong>routeurs</strong> (la box Internet en est un). À chaque étape, le routeur regarde l'adresse de destination et choisit vers quel voisin transmettre le paquet pour s'en rapprocher : c'est le <strong>routage</strong>, de proche en proche, comme on passe de ville en ville. S'il existe plusieurs chemins (par le routeur C, ou bien par le routeur B), le réseau peut en choisir un plus court ou <strong>contourner une panne</strong> : si C tombe, les paquets passent par B. C'est cette souplesse qui rend Internet <strong>robuste</strong> — il a été conçu pour résister à la perte de certains nœuds. (L'étude détaillée des protocoles de routage RIP et OSPF relève de la Terminale.)</p><p>Comme les paquets voyagent séparément, trois incidents peuvent survenir à l'arrivée. Déroulons à la main l'arrivée des paquets 3, 1, 1, 2 : les numéros ne se suivent pas (<strong>désordre</strong>) et le numéro 1 apparaît deux fois (<strong>doublon</strong>). Autre arrivée : 1, 2, 4, 5 — le numéro 3 manque dans la suite (<strong>perte</strong>).</p><table><tr><th>Incident</th><th>Comment le repérer</th><th>Solution</th></tr><tr><td><strong>désordre</strong></td><td>les numéros ne se suivent pas</td><td>on retrie par numéro</td></tr><tr><td><strong>perte</strong></td><td>un numéro manque dans la suite</td><td>on le détecte et on le redemande</td></tr><tr><td><strong>doublon</strong></td><td>un numéro apparaît deux fois</td><td>on ignore la copie</td></tr></table><p><strong>🐢 Première méthode — simple à comprendre :</strong> trier les paquets par numéro règle le désordre.</p><pre><code>def reconstruire_simple(paquets):\n    tries = sorted(paquets, key=lambda p: p[\"num\"])\n    morceaux = []\n    for p in tries:\n        morceaux.append(p[\"data\"])\n    return \" \".join(morceaux)\n\npaquets = [{\"num\": 3, \"data\": \"monde\"},\n           {\"num\": 1, \"data\": \"Bonjour\"},\n           {\"num\": 2, \"data\": \"le\"}]\nprint(reconstruire_simple(paquets))   # affiche Bonjour le monde</code></pre><p><strong>🔍 Comment ça marche :</strong> <code>sorted(paquets, key=lambda p: p[\"num\"])</code> trie la liste de dictionnaires selon le champ <code>num</code> (vu au thème « Données en tables ») ; on recolle ensuite les <code>data</code> avec <code>\" \".join</code>. Mais cette version est naïve : un doublon serait recollé deux fois (« Bonjour Bonjour le monde ») et une perte passerait totalement inaperçue.</p><p><strong>⚡ Méthode plus efficace :</strong> ranger les paquets dans un <strong>dictionnaire</strong> <code>{num: data}</code>. Une clé déjà présente est simplement écrasée, donc le doublon disparaît tout seul ; et comparer les numéros présents à la suite attendue révèle les pertes.</p><pre><code>def reconstruire(paquets):\n    vus = {}\n    for p in paquets:\n        vus[p[\"num\"]] = p[\"data\"]   # un doublon écrase : pas de répétition\n    manquants = [n for n in range(1, max(vus) + 1) if n not in vus]\n    if manquants:\n        print(\"⚠️ Paquet(s) perdu(s) :\", manquants)\n    return \" \".join(vus[n] for n in sorted(vus))   # remis dans l'ordre\n\npaquets = [{\"num\": 3, \"data\": \"monde\"},\n           {\"num\": 1, \"data\": \"Bonjour\"},\n           {\"num\": 1, \"data\": \"Bonjour\"},   # doublon\n           {\"num\": 2, \"data\": \"le\"}]\nprint(reconstruire(paquets))   # affiche Bonjour le monde</code></pre><p><strong>📋 Trace d'exécution :</strong> déroulons <code>reconstruire</code> sur les paquets 3, 1, 1, 2 :</p><table><tr><th>Paquet lu</th><th>Dictionnaire vus après</th><th>Remarque</th></tr><tr><td>num 3, « monde »</td><td>{3: 'monde'}</td><td>nouveau</td></tr><tr><td>num 1, « Bonjour »</td><td>{3: 'monde', 1: 'Bonjour'}</td><td>nouveau</td></tr><tr><td>num 1, « Bonjour »</td><td>inchangé</td><td>doublon : la clé 1 est réécrite, rien ne s'ajoute</td></tr><tr><td>num 2, « le »</td><td>{3: 'monde', 1: 'Bonjour', 2: 'le'}</td><td>nouveau</td></tr></table><p>Ensuite <code>manquants</code> vaut <code>[]</code> (aucun numéro ne manque de 1 à 3) et <code>sorted(vus)</code> donne <code>[1, 2, 3]</code> : le message « Bonjour le monde » est recollé dans l'ordre, sans répétition.</p><p><strong>🎯 Défi élève :</strong> compléter <code>reconstruire</code>, puis le tester sur les paquets 1, 2, 4, 5 pour détecter le manquant.</p><pre><code>def reconstruire(paquets):\n    vus = {}\n    for p in paquets:\n        vus[p[\"______\"]] = p[\"data\"]\n    manquants = [n for n in range(1, ______ + 1) if n not in vus]\n    if ______:\n        print(\"⚠️ Paquet(s) perdu(s) :\", manquants)\n    return \" \".join(vus[n] for n in ______(vus))\n\npaquets_recus = [{\"num\": 1, \"data\": \"Vive\"},\n                 {\"num\": 2, \"data\": \"la\"},\n                 {\"num\": 4, \"data\": \"NSI\"},\n                 {\"num\": 5, \"data\": \"!\"}]\nprint(reconstruire(paquets_recus))</code></pre><p>✅ Réponse :</p><pre><code>def reconstruire(paquets):\n    vus = {}\n    for p in paquets:\n        vus[p[\"num\"]] = p[\"data\"]\n    manquants = [n for n in range(1, max(vus) + 1) if n not in vus]\n    if manquants:\n        print(\"⚠️ Paquet(s) perdu(s) :\", manquants)\n    return \" \".join(vus[n] for n in sorted(vus))\n\npaquets_recus = [{\"num\": 1, \"data\": \"Vive\"},\n                 {\"num\": 2, \"data\": \"la\"},\n                 {\"num\": 4, \"data\": \"NSI\"},\n                 {\"num\": 5, \"data\": \"!\"}]\nprint(reconstruire(paquets_recus))\n# affiche :\n# ⚠️ Paquet(s) perdu(s) : [3]\n# Vive la NSI !</code></pre><ul><li>Le routage rend Internet <strong>robuste</strong> : plusieurs chemins possibles, une panne est contournée.</li><li>Une clé de dictionnaire ne peut exister qu'une fois : c'est l'arme <strong>anti-doublon</strong>.</li><li>Une perte se repère par un <strong>numéro manquant</strong> dans la suite 1, 2, 3, … — on la détecte, il restera à la réparer (séance suivante).</li></ul>"
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
    ],
    "cours": "<p><strong>📖 La notion :</strong></p><p>On sait <em>détecter</em> une perte (un numéro manque)… mais comment la <em>réparer</em> automatiquement ? Le <strong>protocole du bit alterné</strong> est le plus simple des protocoles de récupération. Il fait dialoguer un <strong>émetteur</strong> et un <strong>récepteur</strong> avec trois règles : chaque paquet porte un <strong>bit de contrôle</strong> qui alterne (0, puis 1, puis 0…) ; le récepteur confirme chaque paquet reçu par un <strong>accusé de réception</strong> (<strong>ACK</strong>) portant le même bit ; l'émetteur arme une <strong>temporisation</strong> (<em>timeout</em>) et, s'il n'a pas reçu l'ACK attendu à temps, il <strong>retransmet</strong> le même paquet avec le même bit.</p><p>Déroulons à la main les trois scénarios entre Alice (émettrice) et Bob (récepteur) :</p><ul><li><strong>Cas nominal</strong> : Alice envoie le paquet A [bit 0], Bob répond ACK 0 ; Alice envoie B [bit 1], Bob répond ACK 1… le bit alterne à chaque succès ;</li><li><strong>Paquet perdu</strong> : A [bit 0] se perd en route, aucun ACK n'arrive, le timeout expire, Alice renvoie A [bit 0], qui arrive cette fois : ACK 0 ;</li><li><strong>ACK perdu</strong> : A [bit 0] arrive bien, mais l'ACK 0 se perd ; au timeout, Alice renvoie A [bit 0] ; Bob attendait le bit 1 et voit encore 0 : c'est un <strong>doublon</strong>, il l'ignore mais renvoie quand même l'ACK 0.</li></ul><p>Le bit démasque donc le doublon : aucun paquet n'est perdu <em>ni</em> compté deux fois, au prix d'une lenteur certaine (un seul paquet « en vol » à la fois). Dans « TCP/IP », les deux rôles sont complémentaires : <strong>IP</strong> s'occupe de l'adressage et de l'acheminement (routage) <strong>sans garantie</strong> ; <strong>TCP</strong> ajoute la <strong>fiabilité</strong> par-dessus — numéros, accusés de réception, temporisation, retransmission : exactement les idées du bit alterné, avec de vrais numéros de séquence.</p><p><strong>🐢 Première méthode — simple à comprendre :</strong> simuler l'émetteur avec un scénario déterministe (seul le cas « paquet perdu » pour l'instant).</p><pre><code>scenario = [\"ok\", \"paquet_perdu\", \"ok\", \"ok\"]\nmessage = [\"Bonjour\", \"le\", \"monde\"]\nbit, i, recu = 0, 0, []\nfor evenement in scenario:\n    print(\"ENVOI [bit=\" + str(bit) + \"] :\", message[i])\n    if evenement == \"paquet_perdu\":\n        print(\"  PAQUET PERDU → TIMEOUT → retransmission\")\n        continue\n    recu.append(message[i])\n    print(\"  ACK\", bit, \"reçu → le bit passe à\", 1 - bit)\n    bit, i = 1 - bit, i + 1\nprint(\"Message reçu :\", \" \".join(recu))\n# affiche :\n# ENVOI [bit=0] : Bonjour\n#   ACK 0 reçu → le bit passe à 1\n# ENVOI [bit=1] : le\n#   PAQUET PERDU → TIMEOUT → retransmission\n# ENVOI [bit=1] : le\n#   ACK 1 reçu → le bit passe à 0\n# ENVOI [bit=0] : monde\n#   ACK 0 reçu → le bit passe à 1\n# Message reçu : Bonjour le monde</code></pre><p><strong>🔍 Comment ça marche :</strong></p><ul><li><code>continue</code> après un paquet perdu : on ne change ni <code>bit</code> ni <code>i</code>, donc le tour suivant renvoie <strong>le même mot avec le même bit</strong> — c'est la retransmission ;</li><li><code>1 - bit</code> fait alterner 0 et 1 : si <code>bit</code> vaut 0, <code>1 - bit</code> vaut 1, et inversement ;</li><li><code>i</code> n'avance que lorsqu'un ACK est reçu : on n'envoie jamais le mot suivant sans confirmation du précédent.</li></ul><p><strong>⚡ Méthode plus efficace :</strong> ajouter le récepteur et son <code>bit_attendu</code> permet de simuler aussi le scénario « ACK perdu » : le doublon est reconnu (bit déjà vu) et ignoré. C'est la simulation complète de la Section 6 du site.</p><pre><code>scenario = [\"ok\", \"paquet_perdu\", \"ok\", \"ack_perdu\", \"ok\", \"ok\"]\nmessage = [\"Bonjour\", \"le\", \"monde\"]\nbit_emetteur, bit_attendu, recu, i = 0, 0, [], 0\nfor evenement in scenario:\n    if i &gt;= len(message):\n        break\n    print(\"ENVOI [bit=\" + str(bit_emetteur) + \"] :\", message[i])\n    if evenement == \"paquet_perdu\":\n        print(\"  PAQUET PERDU → TIMEOUT → retransmission\")\n        continue\n    if bit_emetteur == bit_attendu:\n        recu.append(message[i])\n        bit_attendu = 1 - bit_attendu\n    else:\n        print(\"  DOUBLON reconnu (bit déjà vu) → ignoré\")\n    if evenement == \"ack_perdu\":\n        print(\"  ACK PERDU → TIMEOUT → retransmission\")\n        continue\n    print(\"  ACK\", bit_emetteur, \"reçu\")\n    bit_emetteur = 1 - bit_emetteur\n    i += 1\nprint(\"Message reçu :\", \" \".join(recu))   # affiche Message reçu : Bonjour le monde</code></pre><p><strong>📋 Trace d'exécution :</strong> le déroulé complet de cette simulation :</p><table><tr><th>Étape</th><th>Événement</th><th>Alice envoie</th><th>Chez Bob</th><th>Retour</th></tr><tr><td>1</td><td>ok</td><td>« Bonjour » [bit 0]</td><td>accepté, attend le bit 1</td><td>ACK 0 reçu</td></tr><tr><td>2</td><td>paquet_perdu</td><td>« le » [bit 1]</td><td>rien n'arrive</td><td>timeout → retransmission</td></tr><tr><td>3</td><td>ok</td><td>« le » [bit 1]</td><td>accepté, attend le bit 0</td><td>ACK 1 reçu</td></tr><tr><td>4</td><td>ack_perdu</td><td>« monde » [bit 0]</td><td>accepté, attend le bit 1</td><td>ACK perdu → timeout</td></tr><tr><td>5</td><td>ok</td><td>« monde » [bit 0]</td><td>doublon (bit 0 déjà vu) → ignoré</td><td>ACK 0 reçu</td></tr><tr><td>6</td><td>ok</td><td>plus rien à envoyer</td><td>—</td><td>—</td></tr></table><p>Résultat : « Bonjour le monde », complet et sans répétition, malgré les deux incidents.</p><p><strong>🎯 Défi élève :</strong> compléter l'émetteur pour le scénario où le 3ᵉ envoi se perd.</p><pre><code>scenario = [\"ok\", \"ok\", \"paquet_perdu\", \"ok\"]\nmessage = [\"Vive\", \"la\", \"NSI\"]\nbit, i, recu = 0, 0, []\nfor evenement in scenario:\n    print(\"ENVOI [bit=\" + str(bit) + \"] :\", message[i])\n    if evenement == \"______\":\n        print(\"  PAQUET PERDU → TIMEOUT → retransmission\")\n        ______\n    recu.append(message[i])\n    print(\"  ACK\", bit, \"reçu → le bit passe à\", 1 - bit)\n    bit, i = ______, i + 1\nprint(\"Message reçu :\", \" \".join(______))</code></pre><p>✅ Réponse :</p><pre><code>scenario = [\"ok\", \"ok\", \"paquet_perdu\", \"ok\"]\nmessage = [\"Vive\", \"la\", \"NSI\"]\nbit, i, recu = 0, 0, []\nfor evenement in scenario:\n    print(\"ENVOI [bit=\" + str(bit) + \"] :\", message[i])\n    if evenement == \"paquet_perdu\":\n        print(\"  PAQUET PERDU → TIMEOUT → retransmission\")\n        continue\n    recu.append(message[i])\n    print(\"  ACK\", bit, \"reçu → le bit passe à\", 1 - bit)\n    bit, i = 1 - bit, i + 1\nprint(\"Message reçu :\", \" \".join(recu))\n# affiche :\n# ENVOI [bit=0] : Vive\n#   ACK 0 reçu → le bit passe à 1\n# ENVOI [bit=1] : la\n#   ACK 1 reçu → le bit passe à 0\n# ENVOI [bit=0] : NSI\n#   PAQUET PERDU → TIMEOUT → retransmission\n# ENVOI [bit=0] : NSI\n#   ACK 0 reçu → le bit passe à 1\n# Message reçu : Vive la NSI</code></pre><ul><li>Trois mécanismes à retenir : <strong>bit qui alterne</strong>, <strong>ACK</strong>, <strong>timeout + retransmission</strong> — c'est l'alternance qui démasque le doublon quand c'est l'ACK qui s'est perdu.</li><li><strong>IP achemine sans garantie, TCP fiabilise</strong> : une phrase à savoir restituer (Exercice 6).</li><li>Une retransmission n'est pas une erreur du protocole : c'est sa <strong>réparation automatique</strong> d'une perte.</li></ul>"
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
    ],
    "cours": "<p><strong>🎯 Bilan :</strong></p><ul><li>Un <strong>protocole</strong> = des règles communes (TCP/IP) ; chaque machine possède une <strong>adresse IP</strong> qui l'identifie de façon unique.</li><li>Un message est découpé en <strong>paquets numérotés</strong> (en-tête + données) qui voyagent indépendamment, encapsulés comme des enveloppes emboîtées (données → segment TCP → paquet IP → trame).</li><li>Les <strong>routeurs</strong> acheminent les paquets de proche en proche (routage) ; plusieurs chemins possibles, une panne est contournée : le réseau est <strong>robuste</strong>.</li><li>À l'arrivée, trois incidents : <strong>désordre</strong> → on retrie par numéro, <strong>perte</strong> → numéro manquant détecté et redemandé, <strong>doublon</strong> → copie ignorée (une clé de dictionnaire l'élimine toute seule).</li><li>Le <strong>bit alterné</strong> répare une perte automatiquement (bit qui alterne, ACK, timeout + retransmission) ; <strong>IP</strong> achemine sans garantie, <strong>TCP</strong> fiabilise.</li></ul><p><strong>Question type (corrigée) :</strong> les paquets numéro 1, 2, 4 et 5 d'un message arrivent chez le destinataire. Que s'est-il passé, et que fait le destinataire ?</p><p>✅ Réponse : le numéro 3 manque dans la suite : le paquet 3 a été <strong>perdu</strong> en route (chaque paquet voyage indépendamment, une perte est toujours possible). Le destinataire <strong>détecte</strong> la perte grâce au trou dans la numérotation, <strong>redemande</strong> le paquet 3 à l'expéditeur (c'est le rôle de TCP), puis <strong>retrie</strong> tous les paquets par numéro pour reconstituer le message complet et dans l'ordre. Avec la fonction du projet, <code>reconstruire(paquets_recus)</code> affiche d'ailleurs <code>⚠️ Paquet(s) perdu(s) : [3]</code> avant de recoller ce qui est présent.</p><ul><li>Erreurs fréquentes à éviter : croire qu'un message part « d'un seul bloc » ; confondre <em>détecter</em> une perte (numéro manquant) et la <em>réparer</em> (retransmission) ; oublier que le doublon vient souvent d'un <strong>ACK perdu</strong>, pas d'un bug.</li></ul>"
   }
  ]
 }
};

/* ---------------- Kits de préparation (prof) ----------------
   La 3e colonne des déroulés, FOURNIE : matériel débranché imprimable
   (design « mission » engageant), fichiers réels (assets/fichiers/premiere/)
   à déposer sur Capytale, et pointeurs évaluations. Rendu : makeThemeKit. */
const THEME_KITS = {
  "langages-prog": {
    "intro": "Tout le matériel des séances 1 à 12 : jeux débranchés, fiche métacognition, et le défi Pendu en fichier réel.",
    "imprimables": [
      {
        "titre": "🃏 Le grand tri des notes — if/elif grandeur nature",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🃏</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le grand tri des notes</div><div style=\"font-size:14px;color:#475569\">les conditions if / elif / else, joués en vrai</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 20 min</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span></div><div style=\"border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Chaque élève reçoit une carte-note et rejoint sa zone en suivant les règles <em>dans l'ordre</em>. Puis on inverse deux règles… et on observe la pagaille : l'ordre des <code>elif</code> compte !</div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">8</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">9</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">10</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">11</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">12</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">13</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">14</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">15</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">16</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">17</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">18</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">19</span></div><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:8.6cm;border:3px solid #16a34a;border-radius:16px;background:#dcfce7;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">TRÈS BIEN<br><span style=\"font-size:15px;font-weight:600;color:#475569\">note ≥ 16</span></span><span style=\"display:inline-block;width:8.6cm;border:3px solid #16a34a;border-radius:16px;background:#dcfce7;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">BIEN<br><span style=\"font-size:15px;font-weight:600;color:#475569\">note ≥ 14</span></span><span style=\"display:inline-block;width:8.6cm;border:3px solid #16a34a;border-radius:16px;background:#dcfce7;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">ASSEZ BIEN<br><span style=\"font-size:15px;font-weight:600;color:#475569\">note ≥ 12</span></span><span style=\"display:inline-block;width:8.6cm;border:3px solid #16a34a;border-radius:16px;background:#dcfce7;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">PEUT MIEUX FAIRE<br><span style=\"font-size:15px;font-weight:600;color:#475569\">sinon</span></span></div><div style=\"border:2.5px dashed #16a34a;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Îlot le plus rapide à se trier sans erreur : ____________ &nbsp; ⭐ Défi bonus : réécris les règles avec <code>&lt;</code> au lieu de <code>≥</code> ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Langages et programmation · à imprimer en A4</div>"
      },
      {
        "titre": "🤖 Programme ton robot humain — la boucle est née",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🤖</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Programme ton robot humain</div><div style=\"font-size:14px;color:#475569\">des instructions répétées… à la boucle for</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 25 min</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span></div><div style=\"border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Guide le robot (un camarade !) sur le quadrillage avec les cartes. Puis relève le vrai défi : écrire le programme <strong>le plus court possible</strong> — c'est là que « RÉPÈTE n fois » devient indispensable.</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.9cm .35cm\">&nbsp;</td></tr></table></div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.3cm;font-size:20px;font-weight:800;color:#1e293b\">AVANCE</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.3cm;font-size:20px;font-weight:800;color:#1e293b\">TOURNE À GAUCHE</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.3cm;font-size:20px;font-weight:800;color:#1e293b\">TOURNE À DROITE</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.3cm;font-size:20px;font-weight:800;color:#1e293b\">RÉPÈTE ___ FOIS [</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#dcfce7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.3cm;font-size:20px;font-weight:800;color:#1e293b\">]</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #16a34a;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.3cm;font-size:20px;font-weight:800;color:#1e293b\">POSE UN JETON</span></div><div style=\"border:2.5px dashed #16a34a;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Longueur de notre programme : ____ cartes &nbsp;·&nbsp; record de la classe : ____ cartes</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Langages et programmation · à imprimer en A4</div>"
      },
      {
        "titre": "🩹 Mes 3 erreurs à moi — deviens chasseur de bugs",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #16a34a;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🩹</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Mes 3 erreurs à moi</div><div style=\"font-size:14px;color:#475569\">fiche personnelle à garder dans le classeur</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👤 Individuel</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">📌 À coller au classeur</span><span style=\"display:inline-block;border:1.5px solid #16a34a;color:#16a34a;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 5 min en fin de séance</span></div><div style=\"border-left:6px solid #16a34a;background:#dcfce7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Un bon programmeur ne fait pas zéro erreur : il <strong>reconnaît</strong> les siennes de plus en plus vite. Note tes 3 pièges favoris — à la prochaine erreur, tu la corrigeras sans aide.</div><p style=\"font-size:15px\">Nom : ______________________ &nbsp; Classe : ______</p><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#dcfce7;color:#16a34a;padding:.28cm .35cm;text-align:left;font-size:15px\">💥 Mon erreur (le code)</th><th style=\"background:#dcfce7;color:#16a34a;padding:.28cm .35cm;text-align:left;font-size:15px\">📟 Le message de Python</th><th style=\"background:#dcfce7;color:#16a34a;padding:.28cm .35cm;text-align:left;font-size:15px\">🛠️ Comment je la corrige</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:1.4cm .35cm\">&nbsp;</td></tr></table></div><div style=\"border:2.5px dashed #16a34a;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🎖️ Badge « chasseur de bugs » : j'ai corrigé une de MES erreurs sans aide &nbsp;☐ 1ʳᵉ fois &nbsp;☐ 2ᵉ fois &nbsp;☐ 3ᵉ fois</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Langages et programmation · à imprimer en A4</div>"
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
        "titre": "🕰️ La frise mystère — remets l'histoire dans l'ordre",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #db2777;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🕰️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La frise mystère</div><div style=\"font-size:14px;color:#475569\">12 inventions, 4 siècles, 1 seul ordre correct</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 15 min</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #db2777;color:#db2777;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⚔️ Duel d'îlots</span></div><div style=\"border-left:6px solid #db2777;background:#fce7f3;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Ordonnez les cartes SANS les dates, du plus ancien au plus récent. Le premier îlot qui annonce un ordre parfait gagne — mais une seule tentative par îlot !</div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Pascaline<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Pascal</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Machine analytique<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Babbage & Lovelace</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Machine de Turing<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Turing</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Transistor<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Bell Labs</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Circuit intégré<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Kilby</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">ARPANET<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">premier message</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Microprocesseur<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Intel 4004</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">IBM PC<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">IBM</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Web (proposition)<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Berners-Lee</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">Python<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">van Rossum</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#fce7f3;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">iPhone<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">Apple</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #db2777;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:19px;font-weight:800;color:#1e293b\">IA générative<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">grand public</span></span></div><div style=\"border:2.5px dashed #db2777;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Notre score : ____ / 12 cartes bien placées &nbsp;·&nbsp; îlot vainqueur : ____________</div><div style=\"margin-top:10px;font-size:11px;color:#94a3b8\">✂️ plier ici avant distribution — <strong>réponses prof :</strong> 1642 · 1837/1843 · 1936 · 1947 · 1958 · 1969 · 1971 · 1981 · 1989 · 1991 · 2007 · 2022</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Histoire de l'informatique · à imprimer en A4</div>"
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
        "titre": "🂠 Le nombre caché — cartes binaires",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #2563eb;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🂠</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le nombre caché</div><div style=\"font-size:14px;color:#475569\">le binaire avec les mains : cartes retournées = 0</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 20 min</span><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span></div><div style=\"border-left:6px solid #2563eb;background:#dbeafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Face visible = 1, face cachée = 0. Affichez 13, puis 21, puis 100… Question finale : quel est le PLUS GRAND nombre possible avec 8 cartes ?</div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">128<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2⁷</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">64<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2⁶</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">32<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2⁵</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">16<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2⁴</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">8<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2³</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">4<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2²</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#dbeafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">2<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2¹</span></span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #2563eb;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">1<span style=\"display:block;font-size:13px;font-weight:600;color:#475569;margin-top:.25cm\">2⁰</span></span></div><div style=\"border:2.5px dashed #2563eb;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">⚡ Défi éclair : afficher <strong>42</strong> en moins de 10 secondes ☐ &nbsp;·&nbsp; le maximum sur 8 bits = ______</div><div style=\"margin-top:10px;font-size:11px;color:#94a3b8\">✂️ plier ici avant distribution — <strong>réponses prof :</strong> 42 = 00101010 ; maximum = 255 (toutes visibles).</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Représentation des données · à imprimer en A4</div>"
      },
      {
        "titre": "🔁 L'atelier des conversions — niveaux 1, 2, 3",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #2563eb;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🔁</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">L'atelier des conversions</div><div style=\"font-size:14px;color:#475569\">binaire ⇄ décimal, monte de niveau à ton rythme</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👤 Individuel</span><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 15 min</span><span style=\"display:inline-block;border:1.5px solid #2563eb;color:#2563eb;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">📈 3 niveaux</span></div><div style=\"border-left:6px solid #2563eb;background:#dbeafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Commence au niveau 1. Chaque conversion juste te fait monter ; termine le niveau 3 et tu es prêt·e pour le QCM.</div><p style=\"font-size:15px\">Nom : ______________________</p><h3 style=\"color:#2563eb;font-size:17px;margin:8px 0 2px\">Niveau 1 · Binaire → décimal</h3><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Binaire</th><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Calcul (poids)</th><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Décimal</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1011</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">110010</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">11111111</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr></table></div><h3 style=\"color:#2563eb;font-size:17px;margin:8px 0 2px\">Niveau 2 · Décimal → binaire</h3><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Décimal</th><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Divisions par 2</th><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Binaire</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">19</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">42</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">100</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr></table></div><h3 style=\"color:#2563eb;font-size:17px;margin:8px 0 2px\">Niveau 3 · Le boss final</h3><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Question</th><th style=\"background:#dbeafe;color:#2563eb;padding:.28cm .35cm;text-align:left;font-size:15px\">Réponse</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Le plus grand entier sur 8 bits ?</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">23,75 a-t-il une écriture binaire finie ?</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr></table></div><div style=\"border:2.5px dashed #2563eb;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏅 Niveau atteint : ☐ 1 &nbsp; ☐ 2 &nbsp; ☐ 3 — champion·ne des bases !</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Représentation des données · à imprimer en A4</div>"
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
        "titre": "🧭 Choisis ton camp — quelle structure ?",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #7c3aed;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🧭</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Choisis ton camp !</div><div style=\"font-size:14px;color:#475569\">tuple, liste, dictionnaire ou ensemble ?</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 20 min</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span></div><div style=\"border-left:6px solid #7c3aed;background:#ede9fe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Affichez les 4 pancartes aux coins de la salle. Chaque îlot pioche une carte-situation, choisit son camp et <strong>justifie en une phrase</strong>. Une justification bancale = 0 point, même si le camp est bon !</div><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:8.6cm;border:3px solid #7c3aed;border-radius:16px;background:#ede9fe;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">TUPLE<br><span style=\"font-size:15px;font-weight:600;color:#475569\">figé, ordonné</span></span><span style=\"display:inline-block;width:8.6cm;border:3px solid #7c3aed;border-radius:16px;background:#ede9fe;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">LISTE<br><span style=\"font-size:15px;font-weight:600;color:#475569\">modifiable, ordonnée</span></span><span style=\"display:inline-block;width:8.6cm;border:3px solid #7c3aed;border-radius:16px;background:#ede9fe;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">DICTIONNAIRE<br><span style=\"font-size:15px;font-weight:600;color:#475569\">clé → valeur</span></span><span style=\"display:inline-block;width:8.6cm;border:3px solid #7c3aed;border-radius:16px;background:#ede9fe;margin:.15cm;text-align:center;padding:.5cm .2cm;font-size:26px;font-weight:800;color:#1e293b\">ENSEMBLE (set)<br><span style=\"font-size:15px;font-weight:600;color:#475569\">sans doublon</span></span></div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Les coordonnées d'un point</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Les prénoms de la classe</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">nom → n° de téléphone</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Les notes SANS doublon</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Une date (j, m, a)</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">La liste des courses</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">mot → définition</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Les visiteurs uniques</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Une couleur (r, v, b)</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Les scores à trier</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ede9fe;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">élève → moyenne</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #7c3aed;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.8cm;font-size:16px;font-weight:800;color:#1e293b\">Options communes à 2 groupes</span></div><div style=\"border:2.5px dashed #7c3aed;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Score de l'îlot : ____ / 12 &nbsp; ⭐ Défi bonus : inventez une 13ᵉ situation qui piège un autre îlot ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Types construits · à imprimer en A4</div>"
      },
      {
        "titre": "🕵️ La table du détective — déroule ta boucle à la main",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #7c3aed;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🕵️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La table du détective</div><div style=\"font-size:14px;color:#475569\">prédire AVANT d'exécuter : la méthode des pros</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👤 Individuel</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 10 min</span><span style=\"display:inline-block;border:1.5px solid #7c3aed;color:#7c3aed;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">📌 Avant de coder</span></div><div style=\"border-left:6px solid #7c3aed;background:#ede9fe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Un détective ne devine pas : il suit les indices ligne par ligne. Déroule ta boucle dans la table — si la trace est juste, ton code marchera du premier coup.</div><p style=\"font-size:15px\">Nom : ______________________ &nbsp; Programme étudié : ______________________</p><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#ede9fe;color:#7c3aed;padding:.28cm .35cm;text-align:left;font-size:15px\">Tour n°</th><th style=\"background:#ede9fe;color:#7c3aed;padding:.28cm .35cm;text-align:left;font-size:15px\">i / élément</th><th style=\"background:#ede9fe;color:#7c3aed;padding:.28cm .35cm;text-align:left;font-size:15px\">Variable 1 : ______</th><th style=\"background:#ede9fe;color:#7c3aed;padding:.28cm .35cm;text-align:left;font-size:15px\">Variable 2 : ______</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr></table></div><div style=\"border:2.5px dashed #7c3aed;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🔎 Ma prédiction était juste du premier coup : ☐ oui &nbsp; ☐ presque &nbsp; ☐ je refais un tour</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Types construits · à imprimer en A4</div>"
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
        "titre": "🕵️ Le filtre humain — qui reste debout ?",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #d97706;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🕵️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le filtre humain</div><div style=\"font-size:14px;color:#475569\">les requêtes sur table, jouées par la classe</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 Classe entière</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 20 min</span><span style=\"display:inline-block;border:1.5px solid #d97706;color:#d97706;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span></div><div style=\"border-left:6px solid #d97706;background:#fef3c7;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Chaque élève reçoit une ligne de la table. Le prof pioche une carte-requête : si TA ligne est concernée, lève-toi ! Dernier défi : « triez-vous par note décroissante » — sans parler.</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#fef3c7;color:#d97706;padding:.28cm .35cm;text-align:left;font-size:15px\">nom</th><th style=\"background:#fef3c7;color:#d97706;padding:.28cm .35cm;text-align:left;font-size:15px\">classe</th><th style=\"background:#fef3c7;color:#d97706;padding:.28cm .35cm;text-align:left;font-size:15px\">note</th><th style=\"background:#fef3c7;color:#d97706;padding:.28cm .35cm;text-align:left;font-size:15px\">absences</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Ada</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1NSI</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">17</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">0</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Tim</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1G2</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">12</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">3</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Lou</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1NSI</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">9</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">5</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Max</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1G1</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">14</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Zoé</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1NSI</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">16</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">0</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Sam</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1G2</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">8</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">7</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Eva</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1G1</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">11</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">2</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Léo</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1NSI</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">13</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">4</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Mia</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1G2</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">18</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">0</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Nas</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">1G1</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">10</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">6</td></tr></table></div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.2cm;border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:16px;font-weight:800;color:#1e293b\">note ≥ 12</span><span style=\"display:inline-block;width:5.6cm;height:3.2cm;border:2.5px solid #d97706;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:16px;font-weight:800;color:#1e293b\">classe == \"1NSI\"</span><span style=\"display:inline-block;width:5.6cm;height:3.2cm;border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:16px;font-weight:800;color:#1e293b\">absences == 0</span><span style=\"display:inline-block;width:5.6cm;height:3.2cm;border:2.5px solid #d97706;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:16px;font-weight:800;color:#1e293b\">note &lt; 10 OU absences &gt; 5</span><span style=\"display:inline-block;width:5.6cm;height:3.2cm;border:2.5px solid #d97706;border-radius:14px;background:#fef3c7;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:16px;font-weight:800;color:#1e293b\">classe == \"1G2\" ET note ≥ 12</span><span style=\"display:inline-block;width:5.6cm;height:3.2cm;border:2.5px solid #d97706;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:16px;font-weight:800;color:#1e293b\">TRI : note décroissante</span></div><div style=\"border:2.5px dashed #d97706;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">⚡ Défi chrono : tri humain réussi en ____ secondes (record de la classe : ____ s) &nbsp; ⭐ Zéro erreur au premier filtre ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Données en tables · à imprimer en A4</div>"
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
        "titre": "📐 Architecte du web — maquette papier",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #e11d48;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">📐</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Architecte du web</div><div style=\"font-size:14px;color:#475569\">on dessine AVANT de coder, comme les pros</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #e11d48;color:#e11d48;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #e11d48;color:#e11d48;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #e11d48;color:#e11d48;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 25 min</span><span style=\"display:inline-block;border:1.5px solid #e11d48;color:#e11d48;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ Étiquettes à découper</span></div><div style=\"border-left:6px solid #e11d48;background:#ffe4e6;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Votre client veut une page pour son club. Dessinez la maquette dans le cadre, puis posez chaque étiquette-balise au bon endroit. Une étiquette mal placée = le site plante (pour de faux).</div><div style=\"border:3px solid #e11d48;border-radius:16px;height:13.5cm;padding:.3cm;margin:8px 0\"><div style=\"border:2px dashed #cbd5e1;border-radius:10px;height:2cm;text-align:center;padding-top:.55cm;color:#94a3b8;font-size:15px\">en-tête ?</div><div style=\"border:2px dashed #cbd5e1;border-radius:10px;height:1.2cm;margin-top:.2cm;text-align:center;padding-top:.25cm;color:#94a3b8;font-size:15px\">navigation ?</div><div style=\"border:2px dashed #cbd5e1;border-radius:10px;height:7cm;margin-top:.2cm;text-align:center;padding-top:2.8cm;color:#94a3b8;font-size:15px\">contenu ?</div><div style=\"border:2px dashed #cbd5e1;border-radius:10px;height:1.4cm;margin-top:.2cm;text-align:center;padding-top:.35cm;color:#94a3b8;font-size:15px\">pied de page ?</div></div><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffe4e6;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;h1&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;p&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffe4e6;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;ul&gt; + &lt;li&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;a href&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffe4e6;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;img alt&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;form&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffe4e6;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;article&gt;</span><span style=\"display:inline-block;width:5.6cm;height:2.6cm;border:2.5px solid #e11d48;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.75cm;font-size:21px;font-weight:800;color:#1e293b\">&lt;nav&gt;</span></div><div style=\"border:2.5px dashed #e11d48;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Les 8 étiquettes bien placées ☐ &nbsp; ⭐ Défi bonus : ajoutez une balise que la classe ne connaît pas encore et devinez son rôle ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Le Web · à imprimer en A4</div>"
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
        "titre": "🧩 Le memory des composants",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0891b2;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🧩</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le memory des composants</div><div style=\"font-size:14px;color:#475569\">chaque composant cherche son rôle</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 15 min</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🎴 Façon memory</span></div><div style=\"border-left:6px solid #0891b2;background:#cffafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Cartes faces cachées, façon memory : retournez-en deux — un composant et un rôle. Paire correcte = vous la gardez. L'îlot avec le plus de paires gagne.</div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Processeur (CPU)</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Mémoire vive (RAM)</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Disque / SSD</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Carte graphique</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Clavier</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Écran</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Capteur</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:17px;font-weight:800;color:#1e293b\">Actionneur</span></div><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Exécute les instructions</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Mémoire de travail (volatile)</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Stockage durable</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Calcule l'affichage</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Périphérique d'ENTRÉE</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Périphérique de SORTIE</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#cffafe;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Mesure le monde réel</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0891b2;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">Agit sur le monde réel</span></div><div style=\"border:2.5px dashed #0891b2;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Paires gagnées : ____ / 8 &nbsp; ⭐ Défi bonus : citez UN composant qui est à la fois entrée ET sortie (écran tactile !) ☐</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Architectures & OS · à imprimer en A4</div>"
      },
      {
        "titre": "🗺️ La chasse au trésor des chemins",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0891b2;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🗺️</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La chasse au trésor des chemins</div><div style=\"font-size:14px;color:#475569\">chemins absolus et relatifs, sans se perdre</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En binôme</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #0891b2;color:#0891b2;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 15 min</span></div><div style=\"border-left:6px solid #0891b2;background:#cffafe;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Le trésor est un fichier caché dans l'arborescence. À chaque étape, écris le chemin exact — une faute de frappe et l'expédition repart de zéro (comme dans un vrai terminal).</div><pre style=\"font-size:17px;line-height:1.7;background:#cffafe;border-radius:12px;padding:12px;color:#1e293b\">/\n├── home\n│   ├── ada\n│   │   ├── nsi\n│   │   │   ├── tp1.py\n│   │   │   └── notes.csv\n│   │   └── photos\n│   └── alan\n│       └── projets\n└── etc</pre><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#cffafe;color:#0891b2;padding:.28cm .35cm;text-align:left;font-size:15px\">Je suis dans…</th><th style=\"background:#cffafe;color:#0891b2;padding:.28cm .35cm;text-align:left;font-size:15px\">Je veux…</th><th style=\"background:#cffafe;color:#0891b2;padding:.28cm .35cm;text-align:left;font-size:15px\">Chemin (à écrire)</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">/home/ada</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">ouvrir tp1.py</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">/home/ada/photos</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">revenir dans ada</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">/home/ada/nsi</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">aller dans projets d'alan</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">n'importe où</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">notes.csv en chemin ABSOLU</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr></table></div><div style=\"border:2.5px dashed #0891b2;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏴‍☠️ Trésor atteint sans erreur ☐ &nbsp; ⚡ Défi éclair : le chemin le plus court de photos vers nsi = ____________</div><div style=\"margin-top:10px;font-size:11px;color:#94a3b8\">✂️ plier ici avant distribution — <strong>réponses prof :</strong> nsi/tp1.py (ou ./nsi/tp1.py) · .. · ../../alan/projets · /home/ada/nsi/notes.csv · défi : ../nsi</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Architectures & OS · à imprimer en A4</div>"
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
        "titre": "🏁 La course des tris — sélection vs insertion",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #dc2626;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🏁</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">La course des tris</div><div style=\"font-size:14px;color:#475569\">10 cartes, 2 algorithmes, 1 vainqueur</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 Classe entière</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 25 min</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⚔️ Duel</span></div><div style=\"border-left:6px solid #dc2626;background:#fee2e2;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> 10 élèves-cartes en ligne. Un chef d'orchestre applique l'algorithme À LA LETTRE, un comptable note chaque comparaison. Puis on change d'algorithme… et on compare les scores. Pronostic avant de commencer : lequel gagnera ?</div><p style=\"font-size:12px;color:#94a3b8;margin:4px 0\">✂️ Découpe le long des bords arrondis.</p><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#fee2e2;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">23</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">7</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#fee2e2;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">42</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">15</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#fee2e2;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">4</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">31</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#fee2e2;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">19</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">8</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#fee2e2;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">27</span><span style=\"display:inline-block;width:5.6cm;height:3.8cm;border:2.5px solid #dc2626;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.2cm;font-size:30px;font-weight:800;color:#1e293b\">11</span></div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Algorithme</th><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Comparaisons (bâtons)</th><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Total</th><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Trié à la fin ?</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Tri par sélection</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Tri par insertion</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">(défi) déjà trié → insertion</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr></table></div><div style=\"border:2.5px dashed #dc2626;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🥇 Pronostic de l'îlot : ____________ &nbsp;·&nbsp; vainqueur réel : ____________ &nbsp;·&nbsp; surprise du « déjà trié » : ______</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Algorithmique · à imprimer en A4</div>"
      },
      {
        "titre": "🎯 Le juste prix du codeur — la dichotomie",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #dc2626;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">🎯</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Le juste prix du codeur</div><div style=\"font-size:14px;color:#475569\">deviner un nombre : au hasard ou avec méthode ?</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 En îlot</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 15 min</span><span style=\"display:inline-block;border:1.5px solid #dc2626;color:#dc2626;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⚔️ Manches chronométrées</span></div><div style=\"border-left:6px solid #dc2626;background:#fee2e2;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> Nombre mystère entre 1 et 100. Manche 1 : criez au hasard. Manche 2 : stratégie « moitié-moitié ». Comptez les essais… et découvrez pourquoi les ordinateurs cherchent TOUJOURS comme ça.</div><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Manche</th><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Nombre mystère</th><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Nb d'essais</th><th style=\"background:#fee2e2;color:#dc2626;padding:.28cm .35cm;text-align:left;font-size:15px\">Stratégie gagnante ?</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Au hasard</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Dichotomie</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\">Dichotomie (défi : 1 à 1000)</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr></table></div><div style=\"border:2.5px dashed #dc2626;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🧠 Question bilan : combien d'essais AU MAXIMUM pour 1 à 1000 en dichotomie ? Réponse de l'îlot : ____</div><div style=\"margin-top:10px;font-size:11px;color:#94a3b8\">✂️ plier ici avant distribution — <strong>réponses prof :</strong> ≈ 10 essais (2¹⁰ = 1024) — le coût « logarithmique » : doubler l'intervalle n'ajoute qu'UN essai.</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Algorithmique · à imprimer en A4</div>"
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
        "titre": "📦 Mission colis express — le réseau vivant",
        "html": "<div style=\"display:flex;align-items:center;gap:14px;border-bottom:4px solid #0d9488;padding-bottom:10px;margin-bottom:8px\"><div style=\"font-size:44px;line-height:1\">📦</div><div><div style=\"font-size:26px;font-weight:800;color:#1e293b\">Mission colis express</div><div style=\"font-size:14px;color:#475569\">le réseau vivant : paquets, routeurs et coups fourrés</div></div></div><div><span style=\"display:inline-block;border:1.5px solid #0d9488;color:#0d9488;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">👥 Classe entière</span><span style=\"display:inline-block;border:1.5px solid #0d9488;color:#0d9488;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🧠 Sans machine</span><span style=\"display:inline-block;border:1.5px solid #0d9488;color:#0d9488;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">⏱ 25 min</span><span style=\"display:inline-block;border:1.5px solid #0d9488;color:#0d9488;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">✂️ À découper</span><span style=\"display:inline-block;border:1.5px solid #0d9488;color:#0d9488;border-radius:999px;padding:2px 12px;font-size:12px;font-weight:700;margin:0 6px 8px 0\">🎭 Jeu de rôle</span></div><div style=\"border-left:6px solid #0d9488;background:#ccfbf1;border-radius:0 12px 12px 0;padding:10px 14px;margin:10px 0;font-size:15px;color:#1e293b\"><strong>🎯 Mission :</strong> L'émetteur découpe son message en paquets ; ils voyagent de main en main entre les routeurs. Mais le prof glisse des cartes INCIDENT en route… Le récepteur réussit la mission s'il reconstitue le message malgré 3 incidents.</div><h3 style=\"color:#0d9488;font-size:17px;margin:8px 0 2px\">Les paquets (remplir puis découper)</h3><div style=\"border:2px solid #cbd5e1;border-radius:12px;overflow:hidden;margin:8px 0\"><table style=\"border-collapse:collapse;width:100%\"><tr><th style=\"background:#ccfbf1;color:#0d9488;padding:.28cm .35cm;text-align:left;font-size:15px\">src</th><th style=\"background:#ccfbf1;color:#0d9488;padding:.28cm .35cm;text-align:left;font-size:15px\">dst</th><th style=\"background:#ccfbf1;color:#0d9488;padding:.28cm .35cm;text-align:left;font-size:15px\">num</th><th style=\"background:#ccfbf1;color:#0d9488;padding:.28cm .35cm;text-align:left;font-size:15px\">data (4 lettres max)</th></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.3cm .35cm;font-size:15px;color:#1e293b\"></td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#ffffff;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr><tr><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td><td style=\"background:#f8fafc;border-top:1px solid #e2e8f0;padding:.55cm .35cm\">&nbsp;</td></tr></table></div><h3 style=\"color:#0d9488;font-size:17px;margin:8px 0 2px\">Les rôles</h3><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:2.8cm;border:2.5px solid #0d9488;border-radius:14px;background:#ccfbf1;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:21px;font-weight:800;color:#1e293b\">ÉMETTEUR</span><span style=\"display:inline-block;width:5.6cm;height:2.8cm;border:2.5px solid #0d9488;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:21px;font-weight:800;color:#1e293b\">ROUTEUR 1</span><span style=\"display:inline-block;width:5.6cm;height:2.8cm;border:2.5px solid #0d9488;border-radius:14px;background:#ccfbf1;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:21px;font-weight:800;color:#1e293b\">ROUTEUR 2</span><span style=\"display:inline-block;width:5.6cm;height:2.8cm;border:2.5px solid #0d9488;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:0.9cm;font-size:21px;font-weight:800;color:#1e293b\">RÉCEPTEUR</span></div><h3 style=\"color:#0d9488;font-size:17px;margin:8px 0 2px\">Les incidents (pioche du prof)</h3><div style=\"margin:6px 0\"><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0d9488;border-radius:14px;background:#ccfbf1;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">PERTE : jette ce paquet</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0d9488;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">DOUBLON : recopie ce paquet</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0d9488;border-radius:14px;background:#ccfbf1;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">RETARD : garde 30 s</span><span style=\"display:inline-block;width:5.6cm;height:3.0cm;border:2.5px solid #0d9488;border-radius:14px;background:#ffffff;margin:.12cm;text-align:center;vertical-align:top;padding-top:1.0cm;font-size:14px;font-weight:800;color:#1e293b\">DÉSORDRE : échange 2 paquets</span></div><div style=\"border:2.5px dashed #0d9488;border-radius:12px;padding:10px 14px;margin-top:10px;font-size:16px;font-weight:700;color:#1e293b\">🏆 Message reconstitué malgré ____ / 3 incidents &nbsp; ⭐ Débrief éclair : quel incident a été le plus dur à détecter, et grâce à quoi l'a-t-on vu ?</div><div style=\"margin-top:12px;border-top:2px solid #e2e8f0;padding-top:6px;font-size:11px;color:#64748b;text-align:right\">NSI Première · Réseaux · à imprimer en A4</div>"
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
