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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>programme</strong> est une suite d'instructions que la machine exécute dans l'ordre, de haut en bas. La machine fait <strong>exactement</strong> ce qu'on écrit — ni plus, ni moins. Un <strong>langage de programmation</strong> permet d'écrire ces instructions ; <strong>Python</strong>, créé en 1991, est celui utilisé en NSI. Une <strong>variable</strong> est une « boîte » portant une étiquette : l'<strong>affectation</strong>, notée <code>=</code>, range une valeur dans la boîte.</p><pre><code>print(\"texte\")       # affiche un texte (entre guillemets)\nprint(calcul)        # affiche le résultat du calcul\nvariable = valeur    # affectation : range la valeur dans la variable</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>print(\"Bonjour\")   # affiche Bonjour\nprint(3 + 4)       # affiche 7\nx = 5\nx = x + 3          # on lit la droite (5 + 3), on range dans x\nx = x * 2          # x vaut maintenant 16\nprint(x)           # affiche 16</code></pre><ul><li>Le <code>=</code> n'est pas l'égalité des maths : il se lit « <em>reçoit la valeur</em> ». On lit toujours la droite d'abord, puis on range dans la variable de gauche.</li><li>Un message d'erreur (<code>SyntaxError</code>, <code>NameError</code>) est une aide, pas une punition : il indique la ligne et la cause.</li><li>La machine ne devine rien : elle fait ce qu'on <em>dit</em>, pas ce qu'on <em>veut dire</em>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Chaque valeur possède un <strong>type</strong>. Python distingue quatre types de base : <code>int</code> (nombres entiers), <code>float</code> (nombres à virgule), <code>str</code> (chaînes de caractères, entre guillemets) et <code>bool</code> (<code>True</code> ou <code>False</code>). La fonction <code>type()</code> permet d'interroger le type d'une valeur. Python devine le type tout seul : on parle de <strong>typage dynamique</strong>.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>age = 15            # int (entier)\ntaille = 1.72       # float (flottant)\nnom = \"Ada\"         # str (chaîne de caractères)\nmajeur = False      # bool (booléen)\nprint(type(age))    # affiche &lt;class 'int'&gt;\nprint(\"3\" + \"4\")    # affiche 34 (concaténation de texte !)\nprint(3 + 4)        # affiche 7 (addition de nombres)</code></pre><ul><li><code>\"15\"</code> (entre guillemets) est un texte, <code>15</code> est un nombre : le type change le résultat des opérations.</li><li>Sur des <code>str</code>, l'opérateur <code>+</code> <em>colle</em> les textes (concaténation) : <code>\"3\" + \"4\"</code> donne <code>\"34\"</code>.</li><li>Avec <code>if</code> / <code>else</code>, un programme peut <em>décider</em> (fonction <code>mention(note)</code>) : la séance suivante y est consacrée.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une <strong>instruction conditionnelle</strong> exécute un bloc <em>seulement si</em> un test est vrai : <code>if</code> (si), <code>elif</code> (sinon si), <code>else</code> (sinon). Le test est une expression <strong>booléenne</strong> : elle vaut <code>True</code> ou <code>False</code>. Après les deux-points, le bloc est <strong>indenté</strong> (décalé de 4 espaces) : l'indentation délimite les blocs et est obligatoire. Python teste les conditions <em>dans l'ordre</em> et s'arrête à la première vraie : l'ordre des <code>elif</code> compte.</p><pre><code>if condition1:\n    bloc exécuté si condition1 est vraie\nelif condition2:\n    bloc exécuté sinon, si condition2 est vraie\nelse:\n    bloc exécuté dans tous les autres cas</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def mention(note):\n    if note &gt;= 16:\n        return \"Très bien\"\n    elif note &gt;= 10:\n        return \"Passable\"\n    else:\n        return \"Insuffisant\"\n\nprint(mention(18))   # affiche Très bien\nprint(mention(9))    # affiche Insuffisant</code></pre><ul><li>Ne pas confondre <code>=</code> (affectation) et <code>==</code> (test d'égalité).</li><li>Ne pas oublier les deux-points <code>:</code> en fin de ligne, ni l'indentation : « la phrase appartient au si ».</li><li>Dans la cascade complète (seuils 16, 14, 12, 10), tester <code>note &gt;= 14</code> avant <code>note &gt;= 16</code> donnerait « Bien » à une note de 17 : toujours ordonner du plus haut seuil au plus bas.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Écrire un programme seul, dans une cellule vide, demande une méthode : dire la solution en français, écrire le squelette (<code>def</code>, <code>if</code>, <code>return</code>), puis tester sur plusieurs valeurs. L'opérateur <code>%</code> (<strong>modulo</strong>) donne le reste de la division : <code>n % 2</code> vaut <code>0</code> si <code>n</code> est pair. Une fonction peut renvoyer directement le résultat d'un test, c'est-à-dire un booléen.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def est_pair(n):\n    return n % 2 == 0\n\nprint(est_pair(10), est_pair(7))   # affiche True False</code></pre><ul><li>Les quatre <strong>erreurs fréquentes</strong> du thème : deux-points oubliés ou bloc mal indenté ; <code>range(n)</code> s'arrête à n−1 ; <code>print</code> (affiche) confondu avec <code>return</code> (renvoie) ; boucle <code>while</code> infinie.</li><li><code>return n % 2 == 0</code> renvoie directement <code>True</code> ou <code>False</code> : inutile d'écrire un <code>if</code> qui renvoie <code>True</code> puis un <code>else</code> qui renvoie <code>False</code>.</li><li>Avant d'appeler le professeur : relire le message d'erreur, puis demander à l'îlot.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une boucle <code>for</code> répète un bloc un nombre de fois <em>connu à l'avance</em> : c'est une boucle <strong>bornée</strong>. <code>range(n)</code> produit les entiers de 0 à n−1 ; <code>range(a, b)</code> va de a à b−1 (b exclu) ; <code>range(a, b, pas)</code> avance de <em>pas</em> en <em>pas</em>. Le motif d'<strong>accumulation</strong> : préparer une variable <em>avant</em> la boucle (<code>total = 0</code>), puis l'enrichir à chaque tour (<code>total += k</code>).</p><pre><code>for i in range(debut, fin):   # i vaut debut, debut+1, …, fin-1\n    bloc répété (indenté)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>for i in range(1, 4):\n    print(\"7 x\", i, \"=\", 7 * i)\n# affiche : 7 x 1 = 7   puis   7 x 2 = 14   puis   7 x 3 = 21\n\ntotal = 0\nfor k in range(1, 101):\n    total += k\nprint(\"Somme 1..100 =\", total)   # affiche Somme 1..100 = 5050</code></pre><ul><li>Piège n°1 de l'année : <code>range(n)</code> s'arrête à <strong>n−1</strong>. Pour aller de 1 à 100 <em>inclus</em>, écrire <code>range(1, 101)</code>.</li><li><code>total += k</code> est un raccourci de <code>total = total + k</code>.</li><li>Avant d'exécuter, remplir à la main le tableau de suivi (colonnes k / total) pour « voir » l'accumulation.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>L'affectation <code>=</code> range une valeur dans une variable ; quatre types de base : <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code> (typage dynamique, vérifiable avec <code>type()</code>).</li><li><code>if</code>/<code>elif</code>/<code>else</code> : conditions testées dans l'ordre, arrêt à la première vraie ; blocs délimités par l'indentation après les deux-points.</li><li><code>for</code> = boucle bornée ; <code>range(n)</code> s'arrête à n−1 — c'est le bug de <code>somme(5)</code> qui affiche 10 au lieu de 15 (correction : <code>range(n + 1)</code>).</li><li>Motif d'accumulation : <code>total = 0</code> avant la boucle, <code>total += k</code> à chaque tour.</li><li>Le TP noté n°1 est un <em>diagnostic</em> : les erreurs relevées serviront de plan de révision, pas de sanction.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une boucle <code>while</code> (« tant que ») répète un bloc <em>tant qu'une condition reste vraie</em> : c'est une boucle <strong>non bornée</strong>, utilisée quand on ne connaît pas d'avance le nombre de tours mais seulement la condition d'arrêt. Pour éviter la <strong>boucle infinie</strong>, une variable doit <strong>évoluer</strong> à l'intérieur de la boucle, afin que la condition puisse devenir fausse : c'est le garde-fou.</p><pre><code>while condition:\n    bloc répété      # quelque chose doit y évoluer !</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code># Combien de fois peut-on diviser 1000 par 2 avant d'atteindre 1 ?\nn = 1000\ncompteur = 0\nwhile n &gt; 1:          # condition d'arrêt\n    n = n // 2        # n évolue : la boucle finira\n    compteur += 1\nprint(\"Nombre de divisions :\", compteur)   # affiche Nombre de divisions : 9</code></pre><ul><li><code>for</code> si on connaît le nombre de tours, <code>while</code> sinon.</li><li>Garde-fou anti-boucle infinie : la condition doit pouvoir devenir fausse.</li><li><code>//</code> est la division entière : <code>1000 // 2</code> vaut 500 ; <code>3 // 2</code> vaut 1.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le motif du « <strong>plus grand vu jusqu'ici</strong> » : on initialise une variable <code>m</code> avec le <em>premier</em> élément de la liste, puis on la parcourt ; chaque élément qui dépasse <code>m</code> le remplace. À la fin, <code>m</code> est le maximum. Autre idée de la séance : deviner un nombre entre 1 et 100 en coupant l'intervalle en deux à chaque essai (<strong>dichotomie</strong>) demande environ 7 essais seulement.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def maximum(tab):\n    m = tab[0]        # le premier élément est le « meilleur vu »\n    for x in tab:\n        if x &gt; m:\n            m = x     # nouveau maximum rencontré\n    return m\n\nprint(maximum([4, 9, 2, 15, 7]))   # affiche 15</code></pre><ul><li>Initialiser <code>m = tab[0]</code>, jamais <code>m = 0</code> : la liste peut ne contenir que des nombres négatifs.</li><li>Parcourir une liste dont on connaît la taille → <code>for</code> ; répéter jusqu'à un événement (trouver le nombre) → <code>while</code>.</li><li>En coupant en deux : 100 → 50 → 25 → 12 → 6 → 3 → 1, environ 7 essais suffisent (car 2⁷ = 128 dépasse 100).</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une <strong>fonction</strong> regroupe sous un nom un bloc d'instructions réutilisable : on l'écrit une fois, on l'<em>appelle</em> autant qu'on veut. Les <strong>paramètres</strong> sont les informations données en entrée ; <code>return</code> <strong>renvoie</strong> un résultat à l'endroit de l'appel. Distinction essentielle : <code>return</code> renvoie une valeur <em>réutilisable dans un calcul</em> ; <code>print</code> ne fait qu'<em>afficher</em> à l'écran.</p><pre><code>def nom_de_la_fonction(parametre1, parametre2):\n    bloc d'instructions\n    return resultat</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def somme(n):\n    total = 0\n    for k in range(1, n + 1):\n        total += k\n    return total\n\nprint(somme(100))     # affiche 5050\nprint(somme(3) + 1)   # affiche 7 : le résultat renvoyé est réutilisable</code></pre><ul><li>Une fonction qui <code>print</code> sans <code>return</code> ne « rend » rien : <code>x = ma_fonction()</code> donnerait <code>None</code>.</li><li>Une variable créée <em>dans</em> une fonction est <strong>locale</strong> : elle n'existe pas en dehors.</li><li><code>def</code> ne fait que <em>définir</em> la fonction : rien ne s'exécute tant qu'on ne l'appelle pas.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> <strong>Spécifier</strong> une fonction, c'est dire <em>ce qu'elle fait</em> sans dire <em>comment</em> : une <strong>docstring</strong> (phrase entre triples guillemets), des <strong>préconditions</strong> (ce qu'on suppose vrai en entrée) et des <strong>postconditions</strong> (ce que la fonction garantit en sortie). <code>assert condition</code> ne fait <em>rien</em> si la condition est vraie, mais <strong>lève une erreur</strong> si elle est fausse : c'est le moyen le plus simple de tester une fonction.</p><pre><code>def fonction(parametres):\n    \"\"\"Ce que fait la fonction.\n    Précondition : ce qu'on suppose en entrée.\n    \"\"\"\nassert fonction(entree) == resultat_attendu</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def moyenne(notes):\n    \"\"\"Renvoie la moyenne d'une liste de notes.\n    Précondition : notes est une liste non vide de nombres.\n    \"\"\"\n    return sum(notes) / len(notes)\n\nassert moyenne([10, 20]) == 15\nassert moyenne([12]) == 12\nprint(\"Tous les tests passent\")   # affiche Tous les tests passent</code></pre><ul><li>Trois familles d'erreurs : <strong>syntaxe</strong> (le code ne démarre pas), <strong>exécution</strong> (il plante en cours), <strong>logique</strong> (il tourne mais le résultat est faux — la plus sournoise).</li><li>Lire un <em>traceback</em> en 3 questions : où ? quoi ? pourquoi ?</li><li>Écrire la spécification et les <code>assert</code> <strong>avant</strong> le corps de la fonction.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une <strong>bibliothèque</strong> (ou module) regroupe des fonctions prêtes à l'emploi : on l'<strong>importe</strong> avec <code>import</code>, puis on lit sa <strong>documentation</strong> avec <code>help()</code>. Les concepts appris (variables, conditions, boucles, fonctions) se retrouvent dans <em>tous</em> les langages : on apprend des idées, pas seulement une syntaxe. Python est un langage <strong>interprété</strong> ; C est <strong>compilé</strong>. Python délimite les blocs par l'indentation, beaucoup d'autres langages par des accolades.</p><pre><code>import math              # importer la bibliothèque\nmath.sqrt(2)             # utiliser une de ses fonctions\nhelp(math.factorial)     # afficher sa documentation</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>import math\n\nprint(math.sqrt(16))    # affiche 4.0\nprint(math.pi)          # affiche 3.141592653589793\nprint(max([3, 9, 1]))   # affiche 9 (fonction intégrée)</code></pre><ul><li>Réflexe NSI : devant une fonction inconnue, lire sa documentation (<code>help</code>) puis la tester sur un petit exemple.</li><li>La bibliothèque <code>random</code> sert au hasard : <code>random.randint(1, 6)</code> simule un dé (utile pour le Pendu).</li><li>Typage <strong>dynamique</strong> (Python) : le type est deviné ; typage <strong>statique</strong> (C, Java) : on déclare le type.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Affectation <code>=</code> (« reçoit la valeur ») ; quatre types : <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code> ; typage dynamique.</li><li>Conditions <code>if</code>/<code>elif</code>/<code>else</code> : test dans l'ordre, arrêt à la première vraie ; l'indentation délimite les blocs.</li><li><code>for</code> = boucle bornée (<code>range(n)</code> s'arrête à n−1) ; <code>while</code> = boucle non bornée (la condition doit pouvoir devenir fausse).</li><li>Fonctions : paramètres en entrée, <code>return</code> en sortie (ne pas confondre avec <code>print</code>) ; spécifier avec une docstring, tester avec <code>assert</code>.</li><li>Bibliothèques : <code>import</code> puis lire la documentation (<code>help</code>). Au DS, savoir aussi <em>lire</em> un programme et prédire sa sortie, pas seulement en écrire.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> L'informatique n'est pas née avec l'ordinateur : elle est l'aboutissement de siècles de recherches en mathématiques, en logique et en technique. Un <strong>algorithme</strong> est une méthode de calcul précise ; le mot vient du nom du savant perse <strong>Al-Khwârizmî</strong> (IXᵉ siècle). La <strong>machine de Turing</strong> (1936) est le modèle abstrait qui définit ce qu'un ordinateur peut, ou ne peut pas, calculer — avant même l'existence des ordinateurs.</p><p><strong>Repères de la frise (Antiquité → 1970) :</strong></p><ul><li>1642 — <strong>Pascaline</strong> (Pascal) ; 1703 — binaire (Leibniz) ; 1801 — cartes perforées (Jacquard).</li><li>1837 — <strong>machine analytique</strong> (Babbage) ; 1843 — premier algorithme (<strong>Ada Lovelace</strong>).</li><li>1936 — machine de Turing ; 1945 — ENIAC ; 1947 — <strong>transistor</strong> ; 1958 — circuit intégré.</li></ul><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>inventions = {\"Pascal\": \"Pascaline\",\n              \"Babbage\": \"machine analytique\",\n              \"Turing\": \"machine de Turing\"}\ninventions[\"Berners-Lee\"] = \"Web\"   # ajout d'une paire clé/valeur\nprint(inventions[\"Turing\"])    # affiche machine de Turing\nprint(\"Pascal\" in inventions)  # affiche True</code></pre><ul><li>Le mot « algorithme » est bien plus ancien que l'ordinateur : Euclide (≈ −300) décrivait déjà des méthodes de calcul.</li><li><strong>Ada Lovelace</strong> écrit en 1843 le premier algorithme destiné à une machine : elle est considérée comme la première programmeuse.</li><li>Dans un dictionnaire, <code>in</code> teste les <strong>clés</strong> : <code>\"Pascal\" in inventions</code> vaut <code>True</code>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> <strong>Internet</strong> est le réseau mondial qui relie les machines : il naît d'ARPANET (1969) puis des protocoles <strong>TCP/IP</strong>. Le <strong>Web</strong>, inventé par <strong>Tim Berners-Lee</strong> au CERN (1989–1991), est un <em>service</em> qui circule sur Internet : des pages HTML reliées par des liens, transmises via HTTP. Internet ≠ Web : le Web utilise Internet, qui transporte aussi d'autres services (mail, jeux en ligne…). Le premier <strong>microprocesseur</strong> (Intel 4004, 1971) place tout le processeur sur une puce et ouvre l'ère de la micro-informatique, puis du mobile (iPhone, 2007) et de l'IA (deep learning, années 2010).</p><pre><code># Trier une liste de dictionnaires selon une clé\nsorted(frise, key=lambda x: x[\"annee\"])</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>frise = [\n    {\"annee\": 1971, \"evenement\": \"Microprocesseur Intel 4004\"},\n    {\"annee\": 1991, \"evenement\": \"Le World Wide Web\"},\n    {\"annee\": 1969, \"evenement\": \"ARPANET\"},\n]\nfor e in sorted(frise, key=lambda x: x[\"annee\"]):\n    print(e[\"annee\"], \"—\", e[\"evenement\"])\n# affiche 1969 — ARPANET\n# affiche 1971 — Microprocesseur Intel 4004\n# affiche 1991 — Le World Wide Web</code></pre><ul><li><strong>Internet ≠ Web</strong> : Internet est le réseau (1969, ARPANET puis TCP/IP), le Web est un service qui l'utilise (1989, Berners-Lee).</li><li><code>sorted</code> renvoie une nouvelle liste triée sans modifier la frise ; <code>key=lambda x: x[\"annee\"]</code> indique la « colonne » de tri (thème « Données en tables »).</li><li>Une compréhension filtre la frise de l'exercice 7, donnée en couples <code>(annee, evenement)</code> : <code>[e for (an, e) in frise if 1900 &lt;= an &lt;= 1999]</code> garde les événements du XXᵉ siècle.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>bit</strong> (<em>binary digit</em>, « chiffre binaire ») est la plus petite unité d'information : il vaut <code>0</code> ou <code>1</code>, comme un interrupteur ouvert ou fermé. Un <strong>octet</strong> (<em>byte</em>) est un paquet de <strong>8 bits</strong>. Avec <strong>n bits</strong>, on peut coder <strong>2ⁿ valeurs</strong> différentes : c'est LA formule du thème. Un octet permet donc 2⁸ = 256 combinaisons, soit les entiers de 0 à 255.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code># Avec 5 cartes (5 bits), combien de nombres différents ?\nprint(2 ** 5)    # affiche 32\n# Sur un octet (8 bits) :\nprint(\"Un octet :\", 2 ** 8, \"valeurs, de 0 à\", 2 ** 8 - 1)\n# affiche Un octet : 256 valeurs, de 0 à 255</code></pre><ul><li>En Python, la puissance s'écrit <code>2 ** n</code>.</li><li>Ne pas confondre le <strong>bit</strong> (noté b) et l'<strong>octet</strong> (noté o) : un débit de 100 Mb/s vaut 100 ÷ 8 ≈ 12,5 Mo/s.</li><li>Avec n bits, le plus grand entier codable est <strong>2ⁿ − 1</strong> (255 sur un octet), car il faut compter le zéro.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Dans une base, chaque chiffre a un <strong>poids</strong> donné par sa <strong>position</strong> ; en base 2, les poids sont les puissances de 2 (…, 16, 8, 4, 2, 1, de droite à gauche). Pour convertir du <strong>binaire vers le décimal</strong>, on additionne les poids des bits égaux à 1 : <code>1101</code> = 8 + 4 + 1 = 13. Pour convertir du <strong>décimal vers le binaire</strong>, on effectue des <strong>divisions successives par 2</strong> et on lit les restes <strong>de bas en haut</strong> : 42 → <code>101010</code>.</p><pre><code>int(\"101010\", 2)   # binaire -&gt; décimal : 42\nbin(42)            # décimal -&gt; binaire : '0b101010'</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def dec_vers_bin(n):\n    bits = \"\"\n    while n &gt; 0:\n        bits = str(n % 2) + bits   # le reste, ajouté DEVANT\n        n = n // 2                 # division entière\n    return bits\n\nprint(dec_vers_bin(42))    # affiche 101010\nprint(bin(42))             # affiche 0b101010</code></pre><ul><li>Les restes se lisent <strong>de bas en haut</strong> : c'est l'oubli le plus fréquent.</li><li>Toujours convertir sur papier d'abord, puis vérifier avec Python (<code>bin</code>, <code>int(chaine, 2)</code>).</li><li>Le préfixe <code>0b</code> signale seulement une écriture binaire ; il ne fait pas partie du nombre.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> L'<strong>hexadécimal</strong> (base 16) utilise seize chiffres : 0 à 9 puis A = 10 … F = 15. Comme 16 = 2⁴, <strong>un chiffre hexadécimal correspond exactement à 4 bits</strong> (un quartet) : un octet s'écrit avec deux chiffres hexa (<code>1100 1010</code> → <code>CA</code>). Pour coder un entier négatif, on utilise le <strong>complément à deux</strong> : coder la valeur positive, <strong>inverser</strong> tous les bits, puis <strong>ajouter 1</strong>. Sur 8 bits, on couvre ainsi les entiers de <strong>−128 à +127</strong>.</p><pre><code>hex(202)         # '0xca'\nint(\"CA\", 16)    # 202\n0x2A             # littéral hexadécimal : 42</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def complement_a_deux(n):\n    if n &lt; 0:\n        n = 2 ** 8 + n        # ex. : 256 + (-5) = 251\n    return format(n, \"08b\")   # écriture sur 8 bits\n\nprint(complement_a_deux(5))    # affiche 00000101\nprint(complement_a_deux(-5))   # affiche 11111011</code></pre><ul><li>Une couleur web comme <code>#1E90FF</code> se décode par paires : R = 1E = 30, V = 90 = 144, B = FF = 255.</li><li>Dans le complément à deux, le bit de poids fort sert de signe : 0 → positif, 1 → négatif.</li><li>Ne pas oublier le « + 1 » après l'inversion des bits.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Quand un calcul dépasse la capacité du nombre de bits, le résultat « tourne » comme un compteur kilométrique : c'est le <strong>débordement</strong> (<em>overflow</em>) ; sur un octet, 255 + 1 redonne 0. Les <strong>flottants</strong> (type <code>float</code>) sont des <strong>approximations</strong> : beaucoup de décimaux, comme 0,1, n'ont pas d'écriture binaire finie, donc <code>0.1 + 0.2</code> ne vaut pas exactement <code>0.3</code>. Les <strong>booléens</strong> (type <code>bool</code>) n'ont que deux valeurs, <code>True</code> et <code>False</code>, combinées avec <code>and</code> (et), <code>or</code> (ou) et <code>not</code> (non).</p><pre><code>a     b     | a et b | a ou b\nFaux  Faux  | Faux   | Faux\nFaux  Vrai  | Faux   | Vrai\nVrai  Faux  | Faux   | Vrai\nVrai  Vrai  | Vrai   | Vrai\nnon a : inverse la valeur</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def add8(a, b):\n    return (a + b) % 256     # simule un octet (0..255)\n\nprint(add8(255, 1))          # affiche 0\nprint(0.1 + 0.2)             # affiche 0.30000000000000004\nprint(0.1 + 0.2 == 0.3)      # affiche False\nprint(True and False)        # affiche False\nprint(True or False)         # affiche True</code></pre><ul><li>On ne teste <strong>jamais</strong> l'égalité <code>==</code> entre deux flottants : on vérifie qu'ils sont proches, à une tolérance près (fonction <code>proche(a, b)</code>).</li><li>En Python, les entiers sont de taille illimitée (pas de débordement), mais la taille est fixe dans le matériel et dans la plupart des langages.</li><li><code>and</code> n'est vrai que si les <strong>deux</strong> opérandes sont vrais ; <code>or</code> si au moins un l'est.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> La machine ne connaît que des nombres : chaque caractère reçoit donc un <strong>numéro</strong> dans une table de correspondance. L'<strong>ASCII</strong> (années 1960) code 128 caractères sur 7 bits : <code>'A'</code> = 65, <code>'a'</code> = 97, <code>'0'</code> = 48. <strong>Unicode</strong> attribue un numéro (<em>code point</em>) à plus de 140 000 caractères, et <strong>UTF-8</strong> le stocke sur <strong>1 à 4 octets</strong>, en restant compatible avec l'ASCII. En Python, <code>ord(c)</code> donne le numéro d'un caractère et <code>chr(n)</code> fait l'inverse.</p><pre><code>ord(\"A\")   # caractère -&gt; numéro : 65\nchr(65)    # numéro -&gt; caractère : 'A'</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>print(ord(\"A\"), ord(\"a\"))         # affiche 65 97\nprint(chr(78), chr(83), chr(73))  # affiche N S I\n\nmessage = [72, 73, 32, 78, 83, 73]\ntexte = \"\"\nfor n in message:\n    texte = texte + chr(n)\nprint(texte)                      # affiche HI NSI</code></pre><ul><li>Minuscule = majuscule + 32 : <code>'a'</code> = 97 = 65 + 32.</li><li>En UTF-8, le nombre d'octets n'est pas le nombre de caractères : « été » compte 3 caractères mais 5 octets (é = 2 octets).</li><li><code>ord</code> et <code>chr</code> sont la base du chiffre de César (décaler les numéros des lettres).</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Avec <strong>n bits</strong>, on code <strong>2ⁿ valeurs</strong> ; le plus grand entier non signé est 2ⁿ − 1 (un octet = 8 bits : de 0 à 255). Ne pas confondre bit (b) et octet (o), et attention : 2⁴ = 16, pas 8.</li><li>Conversions : binaire → décimal en additionnant les poids des bits à 1 ; décimal → binaire par divisions successives par 2 (restes lus de bas en haut) ; un chiffre hexadécimal = 4 bits.</li><li>Entiers négatifs : <strong>complément à deux</strong> (inverser les bits puis ajouter 1) ; sur 8 bits, de −128 à +127 ; quand un calcul dépasse la capacité, il y a <strong>débordement</strong>.</li><li>Les flottants sont des approximations : <code>0.1 + 0.2 == 0.3</code> vaut <code>False</code> ; on ne compare jamais deux flottants avec <code>==</code>.</li><li>Caractères : ASCII (128 caractères sur 7 bits), Unicode/UTF-8 (1 à 4 octets, compatible ASCII) ; en Python, <code>ord(c)</code> et <code>chr(n)</code>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Les <strong>types construits</strong> permettent d'assembler plusieurs valeurs dans une seule structure. Un <strong>tuple</strong> (ou p-uplet) est une séquence ordonnée et <strong>immuable</strong> (non modifiable), écrite entre parenthèses. Une <strong>liste</strong> (ou tableau) est une séquence ordonnée et <strong>modifiable</strong>, écrite entre crochets. On accède à un élément par son <strong>indice</strong> : les indices commencent à <strong>0</strong>, et le dernier indice valide est <code>len(t) - 1</code>.</p><pre><code>t = (3, 5)        # tuple : parenthèses, immuable\nnotes = [12, 15]  # liste : crochets, modifiable\nnotes[0]          # premier élément (indice 0)\nnotes[-1]         # dernier élément\nlen(notes)        # nombre d'éléments\nnotes[1:3]        # tranche : indices 1 et 2 (3 exclu)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>point = (3, 5)\nx, y = point                 # déballage\nprint(\"x =\", x, \"| y =\", y)  # affiche x = 3 | y = 5\n\nnotes = [12, 15, 9, 18, 11]\nprint(notes[0])              # affiche 12\nprint(notes[-1])             # affiche 11\nprint(len(notes))            # affiche 5\nprint(notes[1:3])            # affiche [15, 9]</code></pre><ul><li>Un tuple est immuable : <code>point[0] = 9</code> lève une <code>TypeError</code> ; sur une liste de 5 éléments, <code>notes[5]</code> lève une <code>IndexError</code> (le dernier indice est 4).</li><li>Dans une tranche <code>notes[1:3]</code>, la borne de droite est <strong>exclue</strong>.</li><li>Le déballage permet d'échanger deux variables sans variable temporaire : <code>a, b = b, a</code>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Contrairement au tuple, une liste se <strong>modifie</strong> : <code>t[i] = v</code> remplace l'élément d'indice i, <code>t.append(x)</code> ajoute x à la fin, <code>t.remove(x)</code> supprime la première occurrence de x. On <strong>parcourt</strong> une liste de deux façons : <strong>par éléments</strong> (<code>for x in liste</code>) ou <strong>par indices</strong> (<code>for i in range(len(liste))</code>). La <strong>compréhension</strong> construit une liste en une seule ligne à partir d'une source, avec un filtre facultatif.</p><pre><code>t[i] = v           # remplace l'élément d'indice i\nt.append(x)        # ajoute x à la fin\nt.remove(x)        # supprime la première occurrence de x\nfor x in liste:              # parcours par éléments\nfor i in range(len(liste)):  # parcours par indices\n[expr for x in iterable if cond]   # compréhension</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>temperatures = [18, 21, 17, 25, 20, 23]\ntemperatures.append(19)   # ajoute 19 à la fin\ntemperatures[2] = 16      # remplace l'élément d'indice 2\ntotal = 0                 # accumulateur initialisé AVANT la boucle\nfor t in temperatures:\n    total += t\nprint(\"total :\", total)   # affiche total : 142\n\ncarres = [n * n for n in range(1, 6)]\nprint(carres)             # affiche [1, 4, 9, 16, 25]</code></pre><ul><li>Schéma d'<strong>accumulation</strong> : initialiser l'accumulateur <strong>avant</strong> la boucle, puis le mettre à jour à chaque tour.</li><li>Une compréhension se lit à voix haute : « la liste des n·n POUR n allant de… SI… ».</li><li><code>append</code> ajoute toujours <strong>à la fin</strong> ; pour remplacer un élément existant, on écrit <code>t[i] = v</code>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une <strong>matrice</strong> (tableau de tableaux) est une liste dont chaque élément est lui-même une liste. On accède à une case par <strong>deux indices</strong> : <code>m[ligne][colonne]</code> (d'abord la ligne, puis la colonne) ; on parcourt toute la grille avec une <strong>double boucle</strong>. Attention aux <strong>alias</strong> : après <code>b = a</code>, les deux noms désignent <em>la même</em> liste — modifier <code>b</code> modifie aussi <code>a</code>. Une vraie copie indépendante s'écrit <code>b = a.copy()</code>.</p><pre><code>m[ligne][colonne]        # accès à une case\nfor ligne in m:          # double boucle\n    for valeur in ligne:\n        ...\ngrille = [[0 for _ in range(4)] for _ in range(3)]  # 3 lignes, 4 colonnes</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>m = [[1, 2, 3],\n     [4, 5, 6],\n     [7, 8, 9]]\nprint(m[1][2])    # affiche 6  (ligne 1, colonne 2)\ngrille = [[0 for _ in range(3)] for _ in range(2)]\ngrille[0][0] = 9\nprint(grille)     # affiche [[9, 0, 0], [0, 0, 0]]\npiege = [[0] * 3] * 2\npiege[0][0] = 9\nprint(piege)      # affiche [[9, 0, 0], [9, 0, 0]]</code></pre><ul><li><code>[[0] * 3] * 2</code> ne crée PAS deux lignes indépendantes mais deux <strong>alias</strong> de la même ligne : une grille se construit toujours par <strong>compréhension imbriquée</strong>.</li><li>Ordre des indices : d'abord la <strong>ligne</strong>, puis la <strong>colonne</strong>.</li><li><code>b = a</code> ne copie pas une liste ; pour une copie indépendante : <code>b = a.copy()</code> (ou <code>a[:]</code>).</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>dictionnaire</strong> (<code>dict</code>) associe à chaque <strong>clé</strong> une <strong>valeur</strong> : des paires clé : valeur écrites entre accolades. On n'accède plus par une position (comme la liste) mais par un <strong>nom de clé</strong> : <code>eleve[\"moyenne\"]</code> est plus lisible que <code>eleve[2]</code>. Si la clé n'existe pas, <code>d[\"clé\"]</code> lève une <code>KeyError</code> ; <code>d.get(\"clé\", défaut)</code> renvoie la valeur par défaut <em>sans erreur</em>.</p><pre><code>d = {\"clé1\": v1, \"clé2\": v2}   # créer\nd[\"clé\"]                       # lire (KeyError si absente)\nd[\"clé\"] = v                   # ajouter OU modifier\nd.get(\"clé\", défaut)           # lire sans risque\ndel d[\"clé\"]                   # supprimer\nfor cle, valeur in d.items():  # parcourir les paires</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>eleve = {\"nom\": \"Lovelace\", \"prenom\": \"Ada\", \"moyenne\": 17.5}\nprint(eleve[\"nom\"])                       # affiche Lovelace\neleve[\"classe\"] = \"1NSI\"                  # ajout d'une clé\nprint(eleve.get(\"age\", \"non renseigné\"))  # affiche non renseigné\n\nvotes = [\"Mario\", \"Zelda\", \"Mario\", \"Sonic\", \"Mario\", \"Zelda\"]\ncompte = {}\nfor jeu in votes:\n    compte[jeu] = compte.get(jeu, 0) + 1\nprint(compte)  # affiche {'Mario': 3, 'Zelda': 2, 'Sonic': 1}</code></pre><ul><li>Une clé doit être <strong>unique et immuable</strong> (chaîne, entier, tuple) — jamais une liste.</li><li>Motif de <strong>comptage</strong> à connaître par cœur : <code>compte[x] = compte.get(x, 0) + 1</code>.</li><li>Une boucle <code>for</code> sur un dictionnaire parcourt les <strong>clés</strong> ; pour les paires (clé, valeur), utiliser <code>.items()</code>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>ensemble</strong> (<code>set</code>) est une collection <strong>non ordonnée</strong> et <strong>sans doublon</strong>, écrite entre accolades (sans « : »). <code>set(liste)</code> élimine automatiquement les doublons d'une liste. Trois opérations comparent deux ensembles : <code>&amp;</code> (intersection, « ET »), <code>|</code> (union, « OU ») et <code>-</code> (différence, « SANS »). Savoir <strong>choisir la bonne structure</strong> : <strong>tuple</strong> pour des données fixes qui vont ensemble, <strong>liste</strong> pour une collection ordonnée et modifiable, <strong>dictionnaire</strong> pour associer une clé à une valeur, <strong>ensemble</strong> pour dédoublonner ou comparer des groupes.</p><pre><code>s = {1, 2, 3}      # un ensemble\nset(liste)         # dédoublonne la liste\nx in s             # test d'appartenance (très rapide)\na &amp; b   a | b   a - b   # ET, OU, SANS\nset()              # ensemble VIDE ({} = dictionnaire vide !)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>notes = [12, 15, 12, 8, 15, 19, 8]\ndistinctes = set(notes)\nprint(len(distinctes))        # affiche 4\nprint(sorted(distinctes))     # affiche [8, 12, 15, 19]\n\nfoot = {\"Léa\", \"Tom\", \"Hugo\", \"Inès\"}\ntheatre = {\"Tom\", \"Inès\", \"Maya\"}\nprint(sorted(foot &amp; theatre))  # affiche ['Inès', 'Tom']\nprint(sorted(foot - theatre))  # affiche ['Hugo', 'Léa']</code></pre><ul><li><code>{ }</code> seul crée un <strong>dictionnaire vide</strong> ; un ensemble vide s'écrit <code>set()</code>.</li><li>Un ensemble n'est pas ordonné : pas d'indice <code>s[0]</code> ; pour l'afficher rangé, utiliser <code>sorted(s)</code>.</li><li>Une <strong>liste de dictionnaires</strong> représente une liste de fiches : ce sera la « table » du thème suivant.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Les indices d'une liste commencent à <strong>0</strong> ; le dernier élément est <code>t[len(t) - 1]</code> ou <code>t[-1]</code> ; au-delà, Python lève une <code>IndexError</code>.</li><li>Le <strong>tuple</strong> est immuable (une modification lève une <code>TypeError</code>) ; la <strong>liste</strong> et le <strong>dictionnaire</strong> sont modifiables ; l'<strong>ensemble</strong> est sans doublon.</li><li>La compréhension <code>[expr for x in iterable if cond]</code> construit une liste en une seule ligne (transformer et filtrer).</li><li>Dictionnaire : accès par <strong>clé</strong> avec <code>d[\"clé\"]</code>, lecture sûre avec <code>d.get(\"clé\", défaut)</code>, parcours des paires avec <code>.items()</code> ; motif de comptage : <code>compte[x] = compte.get(x, 0) + 1</code>.</li><li>Pièges des alias : <code>b = a</code> ne copie pas (utiliser <code>a.copy()</code>) et <code>[[0] * 3] * 2</code> duplique la même ligne — une matrice se construit par compréhension imbriquée.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une <strong>table</strong> est un ensemble de données organisées en lignes et en colonnes. Chaque ligne est un <strong>enregistrement</strong> (une « fiche ») ; chaque nom de colonne est un <strong>descripteur</strong> (ou attribut). Toutes les lignes ont les mêmes descripteurs. En Python, on représente une table par une <strong>liste de dictionnaires</strong> : la liste contient les lignes, et chaque ligne est un dictionnaire dont les clés sont les noms de colonnes.</p><pre><code>table = [\n    {\"colonne1\": valeur, \"colonne2\": valeur},\n    {\"colonne1\": valeur, \"colonne2\": valeur},\n]\ntable[i]              # la ligne i (un dictionnaire)\ntable[i][\"colonne\"]   # une cellule</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>eleves = [\n    {\"nom\": \"Awa\",   \"classe\": \"1G1\", \"note\": 15},\n    {\"nom\": \"Bilal\", \"classe\": \"1G2\", \"note\": 12},\n    {\"nom\": \"Clara\", \"classe\": \"1G1\", \"note\": 17},\n]\nprint(len(eleves))            # affiche 3\nprint(eleves[0][\"nom\"])       # affiche Awa\nprint(eleves[2][\"note\"])      # affiche 17</code></pre><ul><li><code>len(table)</code> donne le nombre de lignes ; <code>list(table[0].keys())</code> donne les noms de colonnes.</li><li>Pour lire une cellule, on donne d'abord l'indice de <em>ligne</em>, puis le nom de <em>colonne</em> : <code>eleves[2][\"note\"]</code>.</li><li>Régularité obligatoire : toutes les lignes ont les mêmes clés (les mêmes descripteurs).</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un fichier <strong>CSV</strong> (<em>Comma-Separated Values</em>) est un simple fichier <strong>texte</strong> : une ligne par enregistrement, des valeurs séparées par une virgule ou un point-virgule. La première ligne, <strong>l'en-tête</strong>, donne les noms de colonnes. En Python, <code>csv.DictReader</code> transforme chaque ligne du fichier en dictionnaire, en utilisant l'en-tête comme clés. Règle en rouge : un CSV ne livre <strong>que des chaînes de caractères</strong> — il faut convertir avec <code>int(...)</code> ou <code>float(...)</code> avant tout calcul.</p><pre><code>import csv\nwith open(\"donnees.csv\") as f:\n    lecteur = csv.DictReader(f, delimiter=\";\")\n    table = [dict(ligne) for ligne in lecteur]</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>import csv, io\ndonnees = \"\"\"nom;classe;note\nAwa;1G1;15\nBilal;1G2;12\"\"\"\nlecteur = csv.DictReader(io.StringIO(donnees), delimiter=\";\")\ntable = [dict(ligne) for ligne in lecteur]\nprint(table[0][\"note\"] + table[1][\"note\"])   # affiche 1512\nfor ligne in table:\n    ligne[\"note\"] = int(ligne[\"note\"])\nprint(table[0][\"note\"] + table[1][\"note\"])   # affiche 27</code></pre><ul><li>Piège n°1 du thème : <code>\"15\" + \"12\"</code> donne <code>\"1512\"</code> (concaténation de chaînes), pas 27.</li><li><code>delimiter=\";\"</code> indique le séparateur (souvent le point-virgule en France).</li><li>Avant tout traitement, vérifier la <strong>cohérence</strong> de la table : même nombre de colonnes partout, pas de valeur manquante.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> <strong>Filtrer</strong> une table, c'est sélectionner les lignes qui vérifient une condition, grâce à une <strong>compréhension de liste</strong>. <strong>Trier</strong> une table, c'est la réordonner selon une colonne avec <code>sorted(table, key=...)</code> : le paramètre <strong><code>key</code></strong>, souvent écrit avec <code>lambda</code>, indique sur quelle colonne trier. Dans les deux cas, on construit une <strong>nouvelle</strong> table : la table d'origine n'est pas modifiée.</p><pre><code>sous_table  = [l for l in table if condition]\ntable_triee = sorted(table, key=lambda l: l[\"colonne\"], reverse=True)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>eleves = [\n    {\"nom\": \"Awa\",   \"note\": 15},\n    {\"nom\": \"Bilal\", \"note\": 12},\n    {\"nom\": \"Dan\",   \"note\": 9},\n]\nadmis = [e for e in eleves if e[\"note\"] &gt;= 10]\nprint([e[\"nom\"] for e in admis])         # affiche ['Awa', 'Bilal']\nclassement = sorted(eleves, key=lambda e: e[\"note\"], reverse=True)\nprint([e[\"nom\"] for e in classement])    # affiche ['Awa', 'Bilal', 'Dan']</code></pre><ul><li>Piège n°2 du thème : <code>sorted(eleves)</code> sans <code>key</code> provoque une erreur — Python ne sait pas comparer deux dictionnaires.</li><li><code>reverse=True</code> trie en ordre <strong>décroissant</strong> (classement du meilleur au moins bon).</li><li>Un <strong>filtre</strong> écarte des lignes ; un <strong>tri</strong> les garde toutes mais les réordonne.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Pour calculer des <strong>statistiques</strong> sur une colonne, on extrait d'abord la colonne dans une liste de nombres, puis on applique <code>len</code>, <code>sum</code>, <code>min</code> ou <code>max</code>. Une <strong>jointure</strong> consiste à fusionner deux tables qui partagent une colonne commune (la <strong>clé</strong>) pour enrichir chaque ligne. La <strong>chaîne de traitement</strong> complète : <strong>charger</strong> (CSV → liste de dictionnaires) → <strong>vérifier</strong> → <strong>filtrer</strong> → <strong>trier</strong> → <strong>calculer</strong> → éventuellement <strong>fusionner</strong>.</p><pre><code>fusion = []\nfor p in personnes:\n    ligne = dict(p)                            # copie de la ligne\n    ligne[\"pays\"] = noms_pays[p[\"code_pays\"]]  # colonne ajoutée\n    fusion.append(ligne)</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>notes = [\n    {\"nom\": \"Ada\",   \"note\": 17},\n    {\"nom\": \"Alan\",  \"note\": 12},\n    {\"nom\": \"Grace\", \"note\": 19},\n]\nvaleurs = [l[\"note\"] for l in notes]\nprint(sum(valeurs) / len(valeurs))       # affiche 16.0\nmeilleur = max(notes, key=lambda l: l[\"note\"])\nprint(meilleur[\"nom\"])                   # affiche Grace</code></pre><ul><li><code>max(notes, key=lambda l: l[\"note\"])</code> renvoie la <strong>ligne entière</strong> (le dictionnaire), pas la valeur.</li><li>Avant d'enrichir une ligne, on la copie avec <code>dict(p)</code> pour ne pas modifier la table d'origine.</li><li>Chaque étape de la chaîne produit une <strong>nouvelle</strong> table (ou une valeur), sans détruire les données initiales.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>La démarche d'enquête sur un fichier CSV : poser une question en français, puis la traduire en <strong>filtre</strong>, <strong>tri</strong> ou <strong>calcul</strong> sur une colonne précise, <em>avant</em> de coder.</li><li>Le pipeline du projet suit la chaîne de traitement : charger avec <code>csv.DictReader</code> (et convertir les notes avec <code>int(...)</code>) → filtrer (par exemple la classe 1NSI) → classer avec <code>sorted(..., key=lambda e: e[\"note\"], reverse=True)</code> → calculer la moyenne.</li><li>Un programme d'enquête se <strong>vérifie avec des tests</strong> avant de conclure : ici <code>len(table) == 6</code>, le filtre 1NSI renvoie 4 élèves, Grace est première.</li><li>Bonus jointure : enrichir la table des élèves avec le dictionnaire {classe → professeur} grâce à la colonne commune.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Une table = une <strong>liste de dictionnaires</strong> ; une ligne = un <strong>enregistrement</strong> ; un nom de colonne = un <strong>descripteur</strong>.</li><li>Un CSV ne contient <strong>que des chaînes</strong> : convertir avec <code>int(...)</code> avant tout calcul (piège n°1 : <code>\"15\" + \"12\"</code> donne <code>\"1512\"</code>).</li><li>Filtrer : <code>[l for l in table if condition]</code> ; trier : <code>sorted(table, key=lambda l: l[\"colonne\"], reverse=True)</code> — jamais de tri sans <code>key</code> (piège n°2).</li><li>Filtre, tri et jointure produisent chacun une <strong>nouvelle</strong> table : la table d'origine reste intacte.</li><li>Chaîne de traitement complète : <strong>charger → vérifier → filtrer/trier/calculer → fusionner</strong>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le Web fonctionne sur un modèle <strong>client-serveur</strong> : le navigateur (le <em>client</em>) envoie une <strong>requête</strong>, et un <strong>serveur</strong> distant renvoie une <strong>réponse</strong>, le plus souvent une page HTML. Cet échange suit le protocole <strong>HTTP</strong> (ou HTTPS, sa version sécurisée) et l'adresse demandée est une <strong>URL</strong>. Une page web combine trois langages : <strong>HTML</strong> (le contenu et la structure), <strong>CSS</strong> (la présentation), <strong>JavaScript</strong> (l'interactivité). HTML organise le contenu avec des <strong>balises</strong>, le plus souvent par paires : une ouvrante <code>&lt;p&gt;</code> et une fermante <code>&lt;/p&gt;</code>.</p><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"fr\"&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;title&gt;Ma page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt; … tout ce qui est affiché … &lt;/body&gt;\n&lt;/html&gt;</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>&lt;body&gt;\n  &lt;h1&gt;Bonjour la NSI&lt;/h1&gt;\n  &lt;p&gt;Mon premier &lt;strong&gt;paragraphe&lt;/strong&gt;.&lt;/p&gt;\n  &lt;a href=\"https://eduscol.education.fr\"&gt;Un lien&lt;/a&gt;\n&lt;/body&gt;\n&lt;!-- Le navigateur affiche : le grand titre « Bonjour la NSI »,\n     le paragraphe (mot « paragraphe » en gras), puis un lien cliquable --&gt;</code></pre><ul><li>Le <code>&lt;head&gt;</code> contient les <strong>métadonnées</strong> (titre de l'onglet, encodage — non affichées) ; le <code>&lt;body&gt;</code> contient tout ce qui est <strong>affiché</strong>.</li><li>Un <strong>attribut</strong> s'écrit <code>nom=\"valeur\"</code> dans la balise ouvrante : <code>href</code> pour un lien, <code>src</code> et <code>alt</code> pour une image (<code>alt</code> = accessibilité).</li><li>Les balises s'imbriquent comme des poupées russes, sans chevauchement ; les titres <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> forment une hiérarchie, pas une taille.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Une <strong>règle CSS</strong> associe un <strong>sélecteur</strong> (quels éléments ?) à des <strong>propriétés</strong> écrites entre accolades (quel style ?). Trois sélecteurs sont à connaître : la balise (<code>p</code>), la <strong>classe</strong> (<code>.important</code>, réutilisable sur plusieurs éléments) et l'<strong>identifiant</strong> (<code>#menu</code>, unique dans la page). En CSS, chaque élément est une <strong>boîte</strong> de quatre couches, de l'intérieur vers l'extérieur : le contenu, le <strong>padding</strong> (espace intérieur), la <strong>border</strong> (bordure) et la <strong>margin</strong> (espace extérieur).</p><pre><code>sélecteur { propriété: valeur; }\n\nh1 { color: indigo; text-align: center; }  /* balise */\n.important { background: yellow; }         /* classe */\n#menu { border: 1px solid gray; }          /* identifiant */</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>.boite {\n  width: 220px;\n  background: #c7d2fe;        /* couleur hexadécimale #RRGGBB */\n  padding: 20px;              /* espace INTÉRIEUR */\n  border: 4px solid indigo;   /* la bordure */\n  margin: 30px;               /* espace EXTÉRIEUR */\n}\n/* Résultat : une boîte bleu clair de 220 px de large, 20 px d'air\n   entre le texte et la bordure, 30 px d'écart avec les voisins */</code></pre><ul><li>Le <strong>point</strong> <code>.</code> cible une classe, le <strong>dièse</strong> <code>#</code> cible un identifiant : à ne pas inverser.</li><li><strong>padding</strong> = dedans, <strong>margin</strong> = dehors : c'est la confusion CSS n°1.</li><li>Les <strong>blocs</strong> (<code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>) s'empilent ; les éléments <strong>en ligne</strong> (<code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;span&gt;</code>) restent côte à côte. Les couleurs s'écrivent par nom (<code>red</code>), en hexadécimal (<code>#3498db</code>) ou en <code>rgba</code> (avec transparence).</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Quand plusieurs règles CSS se contredisent, la <strong>cascade</strong> tranche par <strong>spécificité</strong> : style en ligne &gt; <code>#id</code> &gt; <code>.classe</code> &gt; balise ; à spécificité égale, la <strong>dernière</strong> règle écrite gagne. Un <strong>formulaire</strong> (<code>&lt;form&gt;</code>) envoie des données au serveur selon une <strong>méthode</strong> HTTP : avec <strong>GET</strong>, les paramètres sont <strong>visibles dans l'URL</strong> (après le <code>?</code>, en paires <code>clé=valeur</code> séparées par <code>&amp;</code>) ; avec <strong>POST</strong>, ils voyagent dans le <strong>corps de la requête</strong>, hors URL. Règle de sécurité : <strong>jamais un mot de passe en GET</strong>.</p><pre><code>&lt;form action=\"/recherche\" method=\"get\"&gt;\n  &lt;label for=\"ville\"&gt;Ville :&lt;/label&gt;\n  &lt;input type=\"text\" id=\"ville\" name=\"ville\"&gt;\n  &lt;button type=\"submit\"&gt;Envoyer&lt;/button&gt;\n&lt;/form&gt;</code></pre><p><strong>✍️ Exemple rédigé :</strong> le serveur décompose l'URL reçue (en Python) :</p><pre><code>url = \"recherche?ville=Beyrouth&amp;jour=lundi&amp;age=15\"\nchemin, requete = url.split(\"?\")\nparametres = {}\nfor couple in requete.split(\"&amp;\"):\n    cle, valeur = couple.split(\"=\")\n    parametres[cle] = valeur\nprint(parametres)\n# affiche {'ville': 'Beyrouth', 'jour': 'lundi', 'age': '15'}\nprint(parametres[\"ville\"])\n# affiche Beyrouth</code></pre><ul><li>Le <code>name</code> de chaque champ devient le nom du paramètre envoyé : <code>?ville=Beyrouth&amp;age=15</code>.</li><li>Le <code>for</code> du <code>&lt;label&gt;</code> doit être égal à l'<code>id</code> de l'<code>&lt;input&gt;</code> : cliquer l'étiquette active le champ.</li><li>Un <code>#id</code> bat n'importe quel nombre de classes ; GET convient aux recherches (partageables), POST aux données sensibles, avec <strong>HTTPS</strong> qui chiffre l'échange.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> <strong>JavaScript</strong> est le seul <strong>langage de programmation</strong> des trois piliers du Web : il rend la page vivante en réagissant à des <strong>événements</strong> (<code>click</code>, <code>input</code>, <code>submit</code>…). On récupère un élément avec <code>document.getElementById(\"…\")</code>, on lui attache un <strong>écouteur</strong> avec <code>addEventListener</code> en lui donnant la fonction à exécuter, puis on lit ou modifie son texte avec <code>textContent</code>. Les blocs sont délimités par des accolades <code>{ }</code>, pas par l'indentation.</p><pre><code>let age = 17;            // variable (age = 17 en Python)\nconst pi = 3.14159;      // constante\nif (note &gt;= 10) { … } else { … }\nfor (const x of tableau) { … }        // for x in liste\nfunction carre(x) { return x * x; }   // def carre(x):\nconsole.log(\"Bonjour\");  // print(\"Bonjour\")</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>&lt;button id=\"b\"&gt;Cliquez-moi&lt;/button&gt;\n&lt;p id=\"msg\"&gt;&lt;/p&gt;\n&lt;script&gt;\n  const bouton = document.getElementById(\"b\");\n  bouton.addEventListener(\"click\", function () {\n    document.getElementById(\"msg\").textContent = \"Bravo, événement reçu !\";\n  });\n&lt;/script&gt;\n&lt;!-- À chaque clic sur le bouton, le paragraphe affiche :\n     Bravo, événement reçu ! --&gt;</code></pre><ul><li>Comparer toujours avec <code>===</code> (valeur ET type) : <code>\"5\" == 5</code> vaut <code>true</code>, c'est un piège.</li><li>On <strong>passe</strong> la fonction à <code>addEventListener</code>, on ne l'appelle pas : donc <strong>sans parenthèses</strong>.</li><li>Le trio magique à mémoriser : <code>getElementById</code> (récupérer) → <code>addEventListener(\"click\", …)</code> (écouter) → <code>textContent</code> (modifier).</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Par défaut, envoyer un formulaire <strong>recharge la page</strong>. En écoutant l'événement <code>submit</code> et en appelant <code>event.preventDefault()</code>, le JavaScript <strong>intercepte</strong> l'envoi pour vérifier les champs (lus avec <code>.value</code>). Cette validation <strong>côté client</strong> apporte du <strong>confort</strong> (message d'erreur immédiat), mais pas de sécurité : l'utilisateur peut contourner le JavaScript, donc le <strong>serveur revalide toujours</strong> les données reçues. Un <strong>cookie</strong> est un petit fichier texte que le serveur fait stocker au navigateur et que celui-ci renvoie à chaque requête, car HTTP est « sans mémoire ».</p><pre><code>formulaire.addEventListener(\"submit\", (event) =&gt; {\n  event.preventDefault();   // on bloque le rechargement\n  // … vérifier les champs avec .value …\n});</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>const formulaire = document.querySelector(\"form\");\nformulaire.addEventListener(\"submit\", (event) =&gt; {\n  event.preventDefault();              // on bloque le rechargement\n  const nom = document.querySelector(\"#nom\").value;\n  if (nom.trim() === \"\") {\n    console.log(\"Le nom est obligatoire !\");   // affiché si champ vide\n    return;                            // on arrête là\n  }\n  console.log(\"Formulaire valide, nom =\", nom); // si nom = \"Tux\" : affiche Formulaire valide, nom = Tux\n});</code></pre><ul><li>Erreur fréquente n°1 : « la validation JavaScript suffit » — <strong>faux</strong>. Côté client = confort ; côté serveur = sécurité.</li><li><code>.value</code> lit la saisie d'un champ ; <code>.trim()</code> retire les espaces pour détecter un champ vide.</li><li>Cookies utiles (rester connecté, panier) ≠ cookies de <strong>pistage</strong> (publicité ciblée) ; en Europe, le <strong>RGPD</strong> impose le consentement et un droit d'accès et de suppression.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li><strong>HTML</strong> = le contenu et la structure ; <strong>CSS</strong> = la présentation (fichier externe <code>style.css</code>, modèle de boîte) ; <strong>JavaScript</strong> = l'interactivité (événements, DOM).</li><li>Un formulaire envoie ses données par <strong>GET</strong> (paramètres visibles dans l'URL après le <code>?</code>) ou par <strong>POST</strong> (corps de la requête) : jamais un mot de passe en GET.</li><li>Le trio JavaScript : <code>getElementById</code> → <code>addEventListener(\"click\", …)</code> → <code>textContent</code> ; pour un formulaire, écouter <code>submit</code> et bloquer le rechargement avec <code>event.preventDefault()</code>.</li><li><strong>Côté client = confort, côté serveur = sécurité</strong> : le serveur revérifie toujours les données reçues, car l'utilisateur peut voir et modifier tout ce qui s'exécute dans son navigateur.</li><li>Vie privée : les <strong>cookies</strong> et les traces (adresse IP, pages vues…) permettent de profiler ; le <strong>RGPD</strong> impose consentement, information et droit de suppression.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un ordinateur est composé d'un <strong>processeur (CPU)</strong> qui exécute les instructions, d'une <strong>mémoire vive (RAM)</strong> rapide mais volatile, d'un <strong>stockage</strong> (disque/SSD) lent mais permanent, et d'<strong>entrées/sorties</strong> qui communiquent avec l'extérieur. Le <strong>modèle de von Neumann</strong> (1945) décrit presque tous les ordinateurs actuels : l'<strong>unité de commande (UC)</strong> lit et décode les instructions, l'<strong>unité arithmétique et logique (UAL)</strong> effectue les calculs, la <strong>mémoire</strong> stocke à la fois le programme ET les données, les <strong>E/S</strong> échangent avec l'extérieur. Le programme est rangé en mémoire comme des données : c'est le <strong>programme enregistré</strong>, l'idée révolutionnaire qui rend l'ordinateur universel.</p><p><strong>✍️ Schéma à recopier :</strong></p><pre><code>            PROCESSEUR (CPU)\n        +--------------------+\nE/S &lt;-&gt; |   UC    |   UAL    | &lt;-&gt; MÉMOIRE\n        | décode  | calcule  |     (programme + données)\n        +--------------------+\nCycle : charger -&gt; décoder -&gt; exécuter -&gt; (recommencer)</code></pre><ul><li>⚠️ Ne pas confondre : l'<strong>UC</strong> commande et décode, l'<strong>UAL</strong> calcule. UC + UAL forment le processeur (CPU).</li><li>La RAM est <strong>volatile</strong> (effacée à l'extinction), le disque est <strong>permanent</strong> : « enregistrer », c'est copier de la RAM vers le disque.</li><li>Le processeur répète sans cesse le cycle <strong>charger → décoder → exécuter</strong>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le processeur ne comprend ni Python ni français : il exécute des <strong>instructions machine</strong> très élémentaires. Sur notre machine à <strong>accumulateur</strong>, tous les calculs passent par un registre unique, l'<strong>ACC</strong>, et le <strong>compteur de programme (PC)</strong> indique l'instruction en cours. À chaque tour, le processeur <strong>charge</strong> l'instruction pointée par PC, la <strong>décode</strong>, l'<strong>exécute</strong>, puis PC avance : c'est exactement le cycle de von Neumann (boucle <em>fetch-décode-exécute</em>).</p><pre><code>LOAD adr   ACC &lt;- mem[adr]        (copier une case dans l'ACC)\nADD adr    ACC &lt;- ACC + mem[adr]  (additionner une case à l'ACC)\nSTORE adr  mem[adr] &lt;- ACC        (ranger l'ACC dans une case)\nHALT       arrêter le programme</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>mem = [7, 5, 0]\nacc = 0\nacc = mem[0]        # LOAD 0  : ACC = 7\nacc = acc + mem[1]  # ADD 1   : ACC = 12\nmem[2] = acc        # STORE 2 : mem[2] = 12\nprint(acc)          # affiche 12\nprint(mem)          # affiche [7, 5, 12]</code></pre><ul><li>Le programme <code>LOAD 0 ; ADD 1 ; STORE 2 ; HALT</code> calcule <code>mem[2] = mem[0] + mem[1]</code>.</li><li>Dans un tableau de déroulé, on suit quatre colonnes : PC, instruction, ACC, mémoire.</li><li>Le BO n'impose aucun langage machine particulier : ce jeu d'instructions est un exemple simplifié ; les vrais processeurs (x86, ARM…) suivent le même principe.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>transistor</strong> est un minuscule interrupteur commandé électriquement (passant = 1, bloqué = 0) ; un processeur moderne en contient des milliards. En les combinant, on fabrique des <strong>portes logiques</strong> : <strong>ET</strong> donne 1 si les deux entrées valent 1, <strong>OU</strong> si au moins une entrée vaut 1, <strong>NON</strong> inverse l'entrée, <strong>XOR</strong> (OU exclusif) donne 1 si les deux entrées sont différentes. Le <strong>demi-additionneur</strong> additionne deux bits a et b : la <strong>somme</strong> est un XOR, la <strong>retenue</strong> est un ET.</p><pre><code>a b | somme retenue\n0 0 |   0      0\n0 1 |   1      0\n1 0 |   1      0\n1 1 |   0      1</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def ET(a, b):  return a and b\ndef XOR(a, b): return (a or b) and not (a and b)\n\ndef demi_additionneur(a, b):\n    somme = XOR(a, b)      # 1 si a et b diffèrent\n    retenue = ET(a, b)     # 1 seulement si a = b = 1\n    return somme, retenue\n\ns, r = demi_additionneur(1, 1)\nprint(int(s), int(r))      # affiche 0 1</code></pre><ul><li>1 + 1 s'écrit 10 en binaire : somme 0, retenue 1 — c'est pourquoi somme = XOR et retenue = ET.</li><li>Ne pas confondre OU (1 si au moins une entrée vaut 1) et XOR (1 seulement si les entrées sont différentes).</li><li>L'algèbre de Boole (thème « Représentation des données ») est littéralement gravée dans le silicium.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>système d'exploitation</strong> (OS : Windows, Linux, macOS, Android…) est le logiciel chef d'orchestre entre le matériel et les applications. Ses cinq missions : gérer les <strong>processus</strong>, la <strong>mémoire</strong>, le <strong>système de fichiers</strong>, les <strong>périphériques</strong> (via des pilotes) et la <strong>sécurité</strong>. Un objet connecté suit la chaîne <strong>capteur</strong> (mesurer) → <strong>traitement</strong> (décider) → <strong>actionneur</strong> (agir). L'OS range les fichiers dans une <strong>arborescence</strong> : un <strong>chemin absolu</strong> part de la racine et commence par <code>/</code> ; un <strong>chemin relatif</strong> part du dossier courant ; <code>.</code> désigne le dossier courant et <code>..</code> le dossier parent.</p><pre><code>/                  (racine)\n└── home\n    └── ada\n        ├── photos\n        └── cours\n            └── nsi.py\nDepuis /home/ada/cours : ../photos mène à /home/ada/photos</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>CONSIGNE = 19.0                # température souhaitée (°C)\nmesures = [21.5, 18.9, 19.6]   # le \"capteur\"\nfor t in mesures:\n    if t &lt; CONSIGNE:\n        print(t, \"-&gt; chauffage ALLUMÉ\")   # l'actionneur\n    else:\n        print(t, \"-&gt; chauffage éteint\")\n# affiche 21.5 -&gt; chauffage éteint\n# affiche 18.9 -&gt; chauffage ALLUMÉ\n# affiche 19.6 -&gt; chauffage éteint</code></pre><ul><li>⚠️ L'OS pilote le matériel, il ne le fabrique pas : c'est un logiciel, pas un composant physique.</li><li>Un capteur convertit une grandeur physique en valeur numérique ; un actionneur fait l'inverse.</li><li>Piège : un chemin relatif ne commence jamais par <code>/</code>, et un <code>..</code> ne remonte que d'UN cran.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>terminal</strong> permet de piloter l'ordinateur en tapant des <strong>commandes</strong>, sans souris. C'est puissant, rapide et indispensable sur les serveurs, qui n'ont souvent pas d'écran graphique. Chaque commande s'exécute depuis le <strong>répertoire courant</strong> : avant d'agir, on se demande toujours « où suis-je ? » (commande <code>pwd</code>).</p><pre><code>pwd           où suis-je ? (print working directory)\nls            lister le contenu du dossier courant\ncd dossier    se déplacer (cd .. pour remonter)\nmkdir nom     créer un dossier\ncat fichier   afficher le contenu d'un fichier\ncp / mv / rm  copier / déplacer / supprimer</code></pre><p><strong>✍️ Exemple rédigé :</strong> session dans l'arborescence du cours, départ <code>/home/ada</code> (qui contient <code>photos</code> et <code>cours</code>) :</p><pre><code>$ pwd\n/home/ada\n$ cd cours\n$ mkdir tp1\n$ ls\nnsi.py  tp1\n$ cd ..\n$ pwd\n/home/ada</code></pre><ul><li>Attention à la casse : <code>ls</code> fonctionne, <code>LS</code> non.</li><li>⚠️ <code>mv</code> écrase le fichier de destination et <code>rm</code> est irréversible : pas de corbeille dans le terminal.</li><li><code>cd ..</code> remonte au dossier parent — le même <code>..</code> que dans les chemins relatifs.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Sur un système multi-utilisateurs, chaque fichier porte des <strong>permissions</strong> pour trois catégories : le <strong>propriétaire</strong>, son <strong>groupe</strong> et les <strong>autres</strong>. Pour chaque catégorie, trois droits possibles : <strong>r</strong> (lecture), <strong>w</strong> (écriture), <strong>x</strong> (exécution). On code ces droits en <strong>octal</strong> : r vaut 4, w vaut 2, x vaut 1, et on additionne par bloc de trois. Ainsi <code>rwxr-x---</code> donne 7, 5, 0 : d'où la commande <code>chmod 750 fichier</code>.</p><pre><code>rwxr-x---  se lit par blocs de 3 :\npropriétaire  rwx = 4+2+1 = 7\ngroupe        r-x = 4+0+1 = 5\nautres        --- = 0\n=&gt; chmod 750 fichier</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def permissions_vers_octal(rwx):\n    valeurs = {\"r\": 4, \"w\": 2, \"x\": 1}\n    total = 0\n    for c in rwx:\n        total += valeurs.get(c, 0)   # un tiret '-' n'ajoute rien\n    return total\n\nprint(permissions_vers_octal(\"rwx\"))  # affiche 7\nprint(permissions_vers_octal(\"r-x\"))  # affiche 5</code></pre><ul><li>La pile du thème : <strong>transistors → portes logiques → processeur (von Neumann) → système d'exploitation → applications</strong> ; chaque couche cache la complexité de celle d'en dessous.</li><li>Piège : l'octal s'additionne par bloc de 3 (r=4, w=2, x=1), jamais les neuf caractères d'un coup.</li><li>Rappels pour l'évaluation : l'UC décode, l'UAL calcule ; somme = XOR, retenue = ET ; un chemin relatif ne commence pas par <code>/</code>.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>algorithme</strong> est une suite finie et précise d'instructions qui, à partir de données d'entrée, produit un résultat. Le <strong>programme</strong> est la traduction de cet algorithme dans un langage comme Python. Un bon algorithme doit être <strong>correct</strong> (il donne le bon résultat) et <strong>se terminer</strong>. Le <strong>parcours séquentiel</strong> consiste à examiner les éléments d'un tableau un par un, du début à la fin, pour <em>rechercher</em>, <em>compter</em>, <em>accumuler</em> (somme, moyenne) ou trouver le <em>maximum</em>.</p><pre><code>def maximum(tab):\n    m = tab[0]            # on suppose que le 1er est le max\n    for x in tab:\n        if x &gt; m:\n            m = x         # on garde le plus grand vu\n    return m</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def recherche(tab, cible):\n    for i in range(len(tab)):\n        if tab[i] == cible:\n            return i          # trouvé : on sort tout de suite\n    return -1                 # parcouru sans trouver\n\ndonnees = [4, 8, 15, 16, 23, 42]\nprint(recherche(donnees, 16))   # affiche 3\nprint(recherche(donnees, 99))   # affiche -1</code></pre><ul><li>Convention : une recherche qui échoue renvoie <strong>−1</strong> (et non 0, qui est un indice valide).</li><li>Tous ces parcours font environ <em>n</em> opérations pour un tableau de <em>n</em> éléments : ils sont <strong>linéaires</strong>.</li><li>Méthode de la classe : écrire l'algorithme <strong>en français</strong> (étapes numérotées) avant de coder.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> La <strong>recherche dichotomique</strong> ne s'applique qu'à un tableau <strong>trié</strong>. On garde deux bornes <code>gauche</code> et <code>droite</code>, on compare la cible à l'élément du <strong>milieu</strong>, puis on élimine la <strong>moitié</strong> des possibilités à chaque étape en resserrant l'intervalle. Exemple déroulé en classe : chercher 23 dans <code>[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code> ne demande que 3 comparaisons.</p><pre><code>gauche, droite = 0, len(tab) - 1\nwhile gauche &lt;= droite:\n    milieu = (gauche + droite) // 2\n    # comparer tab[milieu] à la cible,\n    # puis resserrer gauche ou droite</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def dichotomie(tab, cible):\n    gauche, droite = 0, len(tab) - 1\n    while gauche &lt;= droite:\n        milieu = (gauche + droite) // 2\n        if tab[milieu] == cible: return milieu\n        elif tab[milieu] &lt; cible: gauche = milieu + 1\n        else: droite = milieu - 1\n    return -1\n\nprint(dichotomie([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))  # affiche 5</code></pre><ul><li>Piège n°1 : la dichotomie n'a de sens que sur un tableau <strong>déjà trié</strong>.</li><li>Le milieu se calcule avec la <strong>division entière</strong> <code>//</code> pour obtenir un indice entier ; valeur absente → −1.</li><li>Pour 1 000 000 d'éléments : environ <strong>20</strong> comparaisons au lieu de 1 000 000 (c'est log₂ n).</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Pour comparer deux algorithmes, on compte le <strong>nombre de comparaisons</strong> (variable <code>etapes</code>), pas le temps en secondes qui dépend de la machine.</li><li><code>recherche_seq</code> fait au pire <em>n</em> étapes : coût <strong>linéaire</strong>, O(n) ; <code>dichotomie</code> fait environ log₂ n étapes : coût <strong>logarithmique</strong>, O(log n).</li><li>Mesures du projet : n = 1000 → environ 1000 étapes contre 10 ; n = 1 000 000 → environ 1 000 000 étapes contre 20.</li><li>Aller plus vite ne dispense pas d'être <strong>correct</strong> : les deux fonctions renvoient le même indice, et −1 si la valeur est absente.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>tri par sélection</strong> cherche le plus petit élément du tableau et l'échange avec la première position, puis le plus petit du reste avec la deuxième, et ainsi de suite. Le <strong>tri par insertion</strong> procède comme pour trier un jeu de cartes : on prend les éléments un par un et on <em>insère</em> chacun à sa place dans la partie gauche déjà triée. Deux boucles imbriquées dans les deux cas : coût de l'ordre de <strong>n²</strong> (quadratique).</p><pre><code>def tri_insertion(tab):\n    for i in range(1, len(tab)):\n        cle = tab[i]            # la carte à insérer\n        j = i - 1\n        while j &gt;= 0 and tab[j] &gt; cle:\n            tab[j + 1] = tab[j]  # on décale vers la droite\n            j -= 1\n        tab[j + 1] = cle         # on pose la carte à sa place</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def tri_selection(tab):\n    for i in range(len(tab)):\n        i_min = i\n        for j in range(i + 1, len(tab)):   # cherche le min du reste\n            if tab[j] &lt; tab[i_min]:\n                i_min = j\n        tab[i], tab[i_min] = tab[i_min], tab[i]   # échange\n    return tab\n\nprint(tri_selection([5, 2, 9, 1, 7]))   # affiche [1, 2, 5, 7, 9]</code></pre><ul><li>Erreur fréquente : oublier l'échange <code>tab[i], tab[i_min] = tab[i_min], tab[i]</code>.</li><li>Déroulé de <code>[5, 2, 9, 1, 7]</code> par sélection : [1, 2, 9, 5, 7] → [1, 2, 5, 9, 7] → [1, 2, 5, 7, 9].</li><li>Sur un tableau <em>presque</em> trié, le tri par <strong>insertion</strong> est le plus efficace.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>coût</strong> (complexité) d'un algorithme est le nombre d'opérations effectuées en fonction de la taille <em>n</em> des données. Quatre ordres de grandeur : <strong>O(1)</strong> constant (accès <code>tab[i]</code>), <strong>O(log n)</strong> logarithmique (dichotomie), <strong>O(n)</strong> linéaire (parcours), <strong>O(n²)</strong> quadratique (tris). Un <strong>variant de boucle</strong> est une quantité <strong>entière</strong>, <strong>positive</strong>, qui <strong>décroît strictement</strong> à chaque tour : il prouve que la boucle <em>se termine</em>. Un <strong>invariant</strong> est une propriété vraie au début de chaque tour : il prouve que l'algorithme est <em>correct</em>.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def cout_dichotomie(n):\n    comparaisons = 0\n    while n &gt; 1:\n        n = n // 2        # variant : n entier, positif, décroît\n        comparaisons += 1\n    return comparaisons\n\nprint(cout_dichotomie(1000000))   # affiche 19</code></pre><ul><li>Pour n = 1 000 000 : parcours = 10⁶ opérations, tri en n² = 10¹² (énorme !), dichotomie ≈ 20.</li><li>Ne pas confondre : <strong>variant</strong> → terminaison ; <strong>invariant</strong> → correction. Variant de la dichotomie : <code>droite − gauche</code>.</li><li>Invariant du tri par <strong>sélection</strong> : la tranche <code>tab[0..i-1]</code> est triée ET ses éléments sont à leur place définitive ; pour l'<strong>insertion</strong>, elle est seulement triée.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un algorithme <strong>glouton</strong> construit une solution pas à pas en faisant, à chaque étape, le choix qui semble le meilleur <strong>sur le moment</strong>, sans jamais revenir en arrière. Exemple classique : le <strong>rendu de monnaie</strong> — pour rendre 67 centimes avec le moins de pièces, on donne d'abord la plus grosse pièce possible, puis on recommence sur ce qui reste : 67 = 50 + 10 + 5 + 2.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def rendu_monnaie(somme, pieces):\n    rendu = []\n    for p in sorted(pieces, reverse=True):   # de la plus grosse à la plus petite\n        while somme &gt;= p:        # on prend cette pièce tant qu'on peut\n            somme -= p\n            rendu.append(p)\n    return rendu\n\nprint(rendu_monnaie(67, [1, 2, 5, 10, 20, 50]))  # affiche [50, 10, 5, 2]\nprint(rendu_monnaie(6, [1, 3, 4]))               # affiche [4, 1, 1]</code></pre><ul><li>Le glouton est rapide et intuitif, mais ne donne <strong>pas toujours</strong> la solution optimale.</li><li>Contre-exemple : avec le système « truqué » [1, 3, 4], rendre 6 donne 4+1+1 (3 pièces) alors que 3+3 suffit (2 pièces).</li><li>Vocabulaire : à chaque étape le meilleur choix <strong>local</strong>, sans retour arrière.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> L'algorithme des <strong>k plus proches voisins</strong> (kNN) prédit la <strong>classe</strong> d'un élément inconnu en fonction de la <strong>classe majoritaire</strong> de ses k plus proches voisins parmi des exemples déjà étiquetés. C'est un premier exemple d'algorithme d'<strong>apprentissage</strong>. Trois étapes : calculer la <strong>distance</strong> entre le point inconnu et chaque exemple ; garder les <strong>k</strong> exemples les plus proches ; <strong>voter</strong> — la classe la plus fréquente parmi ces k voisins l'emporte.</p><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>donnees = [(1, 1, \"pomme\"), (2, 1, \"pomme\"), (5, 4, \"banane\"), (6, 4, \"banane\")]\ndef distance(a, b):\n    return ((a[0]-b[0])**2 + (a[1]-b[1])**2) ** 0.5\ndef knn(donnees, point, k=3):\n    voisins = sorted(donnees, key=lambda d: distance(d, point))[:k]\n    classes = [v[2] for v in voisins]\n    return max(set(classes), key=classes.count)\n\nprint(knn(donnees, (5.2, 4.0), k=3))   # affiche banane</code></pre><ul><li>On choisit souvent un <strong>k impair</strong> pour éviter les égalités de vote.</li><li>k trop petit → sensible au bruit ; k trop grand → on mélange des classes éloignées.</li><li>La distance est calculée « à vol d'oiseau » entre deux points (x, y), comme sur le papier millimétré.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Chercher dans un tableau quelconque → <strong>recherche séquentielle</strong>, O(n) ; dans un tableau <strong>trié</strong> → <strong>recherche dichotomique</strong>, O(log n).</li><li>Ranger dans l'ordre → <strong>tris par sélection ou par insertion</strong>, O(n²) — l'insertion est la plus efficace sur un tableau presque trié.</li><li>Optimiser pas à pas (rendu de monnaie) → algorithme <strong>glouton</strong> : rapide, mais pas toujours optimal (système [1, 3, 4]).</li><li>Classer un objet inconnu → <strong>kNN</strong> : classe majoritaire des k plus proches voisins (k impair).</li><li>Prouver un algorithme : <strong>variant</strong> (entier positif strictement décroissant) → terminaison ; <strong>invariant</strong> → correction.</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Un <strong>réseau</strong> relie des machines pour qu'elles échangent des données ; pour se comprendre, elles suivent un <strong>protocole</strong> : un ensemble de règles communes sur le format des messages et l'ordre des échanges (comme le « protocole postal » d'une lettre). Chaque machine possède une <strong>adresse IP</strong> (ex. <code>192.168.1.10</code>) qui l'identifie de façon unique, comme une adresse postale. Un message n'est jamais envoyé d'un seul bloc : il est découpé en <strong>paquets</strong>, chacun formé d'un <strong>en-tête</strong> (adresses source et destination, numéro d'ordre) et de <strong>données</strong>. L'<strong>encapsulation</strong> emboîte les enveloppes : données → segment TCP → paquet IP → trame.</p><pre><code>paquet = {\"src\": ..., \"dst\": ..., \"num\": ..., \"data\": ...}\n# en-tête : src (source), dst (destination), num (numéro d'ordre)\n# données : data</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>message = \"Bonjour le monde\"\nmots = message.split(\" \")\npaquets = []\nfor i in range(len(mots)):\n    p = {\"src\": \"192.168.1.10\", \"dst\": \"172.16.0.3\", \"num\": i + 1, \"data\": mots[i]}\n    paquets.append(p)\nprint(paquets[1])   # affiche {'src': '192.168.1.10', 'dst': '172.16.0.3', 'num': 2, 'data': 'le'}\nprint(len(paquets)) # affiche 3</code></pre><ul><li>Un paquet = <strong>en-tête + données</strong> ; c'est le numéro d'ordre qui permet de recoller le message à l'arrivée.</li><li>À l'arrivée, on ouvre les enveloppes de l'encapsulation une à une, dans l'ordre <strong>inverse</strong>.</li><li>Piège : sur Internet, un message ne part jamais « d'un seul bloc ».</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>routage</strong> est l'acheminement des paquets <strong>de proche en proche</strong> : à chaque étape, un <strong>routeur</strong> lit l'adresse de destination et transmet le paquet au voisin qui l'en rapproche. Comme plusieurs chemins existent, le réseau peut contourner une panne : Internet est <strong>robuste</strong>. À l'arrivée, trois incidents sont possibles : le <strong>désordre</strong> (les numéros ne se suivent pas → on retrie par numéro), la <strong>perte</strong> (un numéro manque → on le détecte et on le redemande) et le <strong>doublon</strong> (un numéro apparaît deux fois → on ignore la copie).</p><pre><code>vus[p[\"num\"]] = p[\"data\"]   # dictionnaire {num: data} : un doublon écrase la copie\nmanquants = [n for n in range(1, max(vus) + 1) if n not in vus]   # numéros absents = pertes</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>def reconstruire(paquets):\n    vus = {}\n    for p in paquets:\n        vus[p[\"num\"]] = p[\"data\"]      # un doublon écrase la copie\n    return \" \".join(vus[n] for n in sorted(vus))\n\npaquets = [{\"num\": 3, \"data\": \"monde\"}, {\"num\": 1, \"data\": \"Bonjour\"},\n           {\"num\": 1, \"data\": \"Bonjour\"}, {\"num\": 2, \"data\": \"le\"}]\nprint(reconstruire(paquets))   # affiche Bonjour le monde</code></pre><ul><li>Ranger les paquets dans un dictionnaire <code>{num: data}</code> élimine automatiquement les doublons : une clé déjà présente est écrasée.</li><li>Une perte se détecte en comparant les numéros reçus à la suite attendue 1, 2, 3, …</li><li>Les protocoles de routage (RIP, OSPF) relèvent de la Terminale ; en Première, on retient l'idée « de proche en proche, plusieurs chemins possibles ».</li></ul>"
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
    "cours": "<p><strong>📖 Définition :</strong> Le <strong>protocole du bit alterné</strong> est le plus simple des protocoles de récupération de perte. Chaque paquet porte un <strong>bit de contrôle</strong> qui alterne (0, 1, 0, 1…) ; le récepteur confirme chaque paquet par un <strong>accusé de réception (ACK)</strong> portant le même bit ; sans ACK à temps, la <strong>temporisation</strong> (<em>timeout</em>) expire et l'émetteur <strong>retransmet</strong> le même paquet. Dans TCP/IP, <strong>IP</strong> s'occupe de l'adressage et de l'acheminement des paquets, sans garantie ; <strong>TCP</strong> ajoute la fiabilité : il numérote, détecte les pertes, redemande ce qui manque et remet tout dans l'ordre.</p><pre><code>Émetteur                    Récepteur\n   │ ── paquet A [bit=0] ──→ │   reçu, bit attendu ✔\n   │ ←──── ACK 0 ─────────── │\n   │ ── paquet B [bit=1] ──→ │   reçu, bit attendu ✔\n   │ ←──── ACK 1 ─────────── │</code></pre><p><strong>✍️ Exemple rédigé :</strong></p><pre><code>bit_attendu = 0\nrecu = []\narrivees = [(\"Bonjour\", 0), (\"Bonjour\", 0), (\"le\", 1)]  # 2e envoi = retransmission (ACK perdu)\nfor mot, bit in arrivees:\n    if bit == bit_attendu:\n        recu.append(mot)               # nouveau paquet : accepté\n        bit_attendu = 1 - bit_attendu  # on attend l'autre bit\n    else:\n        print(\"Doublon ignoré :\", mot)   # affiche Doublon ignoré : Bonjour\nprint(\"Reçu :\", \" \".join(recu))          # affiche Reçu : Bonjour le</code></pre><ul><li>Paquet perdu : pas d'ACK → timeout → retransmission du même paquet, avec le même bit.</li><li>ACK perdu : le récepteur voit arriver un doublon et le reconnaît grâce au bit (il attendait 1, il revoit 0) : il l'ignore mais renvoie l'ACK.</li><li>À rédiger en une phrase : IP achemine sans garantie, TCP fiabilise.</li></ul>"
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
    "cours": "<p><strong>🎯 Bilan à noter :</strong></p><ul><li>Un <strong>protocole</strong> = des règles communes de communication ; Internet repose sur la famille <strong>TCP/IP</strong> et chaque machine possède une <strong>adresse IP</strong>.</li><li>Un message est découpé en <strong>paquets numérotés</strong> (en-tête + données) qui voyagent indépendamment, éventuellement par des chemins différents.</li><li>Les <strong>routeurs</strong> acheminent les paquets de proche en proche (routage) ; plusieurs chemins possibles → Internet est <strong>robuste</strong> face aux pannes.</li><li>Trois incidents à l'arrivée : <strong>désordre</strong> → on retrie par numéro ; <strong>perte</strong> → numéro manquant, redemandé ; <strong>doublon</strong> → copie ignorée (le dictionnaire <code>{num: data}</code> gère les trois dans <code>reconstruire_robuste</code>).</li><li>Le <strong>bit alterné</strong> répare une perte automatiquement : bit qui alterne, ACK, timeout puis retransmission ; <strong>IP achemine, TCP fiabilise</strong>.</li></ul>"
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
