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
  "types-construits": {
    titre: "Listes, n-uplets & dictionnaires (notebooks)",
    auteur: "Module DIU EIL 2026 — Y. Pigné (LITIS, Univ. Le Havre)",
    base: "https://git.litislab.fr/ypigne/2026-EIL-listes-tuples-dictionnaires/-/",
    note: "📒 Ce sont des <strong>notebooks</strong> (.ipynb) : le dépôt les affiche dans le navigateur. Pour les <strong>exécuter</strong>, ouvre-les dans <a href=\"https://notebook.basthon.fr\" target=\"_blank\" rel=\"noopener\">Basthon</a> (Fichier → Ouvrir, après téléchargement) ou Capytale.",
    items: [
      { t: "📁 Le dépôt complet (toujours à jour)", url: "tree/main" },
      { t: "📘 Cours 1 — Listes & tuples", url: "blob/main/session-1-listes-tuples/cours.ipynb" },
      { t: "🧪 TP 1 — Listes & tuples", url: "blob/main/session-1-listes-tuples/tp.ipynb" },
      { t: "📗 Cours 2 — Dictionnaires", url: "blob/main/session-2-dictionnaires/cours.ipynb" },
      { t: "🧪 TP 2 — Dictionnaires", url: "blob/main/session-2-dictionnaires/tp.ipynb" },
      { t: "👩‍🎓 Fiche élève — Listes (énoncé + corrigé)", url: "tree/main/eleves/1-listes" },
      { t: "👩‍🎓 Fiche élève — Compréhensions", url: "tree/main/eleves/2-comprehensions" },
      { t: "👩‍🎓 Fiche élève — Tuples", url: "tree/main/eleves/3-tuples" },
      { t: "👩‍🎓 Fiche élève — Dictionnaires", url: "tree/main/eleves/5-dictionnaires" },
      { t: "⭐ Bonus (Terminale) — Piles & files, Ensembles", url: "tree/main/eleves" },
    ],
  },
  "ihm-web": {
    titre: "HTML, CSS & client-serveur",
    auteur: "Cours de J-M Barbier — DIU EIL 2026",
    base: "https://diu-htmlcss-1858e2.forge.apps.education.fr/",
    items: [
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
  "puis réinvestie toute l'année ; l'<em>histoire</em> sert de fil rouge transversal.";

const PROGRESSION = [
  {
    periode: "Sept. — Période 1", semaines: "S1–S3", heures: "≈ 12 h",
    theme: "Langages et programmation (1)", themeId: "langages-prog",
    objectifs: "Prise en main de l'environnement. Variables, types, affectation, conditions, boucles for/while.",
    activites: "Cours + TP au poste. Jeu d'évasion « histoire » en fil rouge.",
    evaluation: "TP noté n°1 (programmation de base).",
  },
  {
    periode: "Oct. — Période 1", semaines: "S4–S6", heures: "≈ 12 h",
    theme: "Langages et programmation (2)", themeId: "langages-prog",
    objectifs: "Fonctions, paramètres, return. Spécifier (docstring, assert). Débogage. Bibliothèques et documentation.",
    activites: "Cours + exercices gradués. Fiches méthode « erreur » et « jeu de tests ».",
    evaluation: "DS n°1 (langages et programmation).",
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
];
