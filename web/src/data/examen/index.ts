import type { ModuleId } from '../modules'
import type { ModuleCorrectifs } from '../correctifs'

export const examenJuin: ModuleCorrectifs = {
  moduleId: 'descriptive',
  tpLabel: 'Examen de biostatistique — Session de juin',
  intro:
    'Examen officiel retranscrit à partir des photos EXAMEN_JUIN (1), (2) et (3). Chaque question est réécrite clairement, puis résolue pas à pas avec rappel des concepts (tableaux groupés, loi normale, Bayes, binomiale, Poisson, intervalle de confiance).',
  exercises: [
    {
      id: 'ex-q1',
      number: 'Question 1 — /3 pts',
      title: 'Poids de chiens — statistique descriptive (série groupée)',
      enonce: `
        <p>Un cabinet vétérinaire a mesuré le poids (en kg) de <strong>100 chiens</strong> adultes de grande race. Les résultats sont regroupés dans le tableau suivant (certaines cases sont à compléter) :</p>
        <table class="text-sm w-full border-collapse">
          <thead>
            <tr class="bg-slate-100">
              <th class="border px-2 py-1">Classe [kg]</th>
              <th class="border px-2 py-1">Centre $C_i$</th>
              <th class="border px-2 py-1">$n_i$</th>
              <th class="border px-2 py-1">$f_i$</th>
              <th class="border px-2 py-1">$F_i$</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border px-2 py-1">[40 ; 50[</td><td class="border px-2 py-1">45</td><td class="border px-2 py-1">5</td><td class="border px-2 py-1">5 %</td><td class="border px-2 py-1">5 %</td></tr>
            <tr><td class="border px-2 py-1">[50 ; 60[</td><td class="border px-2 py-1">55</td><td class="border px-2 py-1">15</td><td class="border px-2 py-1">?</td><td class="border px-2 py-1">?</td></tr>
            <tr><td class="border px-2 py-1">[60 ; 70[</td><td class="border px-2 py-1">65</td><td class="border px-2 py-1">?</td><td class="border px-2 py-1">?</td><td class="border px-2 py-1">45 %</td></tr>
            <tr><td class="border px-2 py-1">[70 ; 80[</td><td class="border px-2 py-1">75</td><td class="border px-2 py-1">30</td><td class="border px-2 py-1">?</td><td class="border px-2 py-1">?</td></tr>
            <tr><td class="border px-2 py-1">[80 ; 90[</td><td class="border px-2 py-1">85</td><td class="border px-2 py-1">?</td><td class="border px-2 py-1">?</td><td class="border px-2 py-1">?</td></tr>
            <tr><td class="border px-2 py-1">[90 ; 100[</td><td class="border px-2 py-1">95</td><td class="border px-2 py-1">10</td><td class="border px-2 py-1">10 %</td><td class="border px-2 py-1">?</td></tr>
          </tbody>
        </table>
        <p><strong>A.</strong> Compléter n<sub>i</sub>, f<sub>i</sub> et F<sub>i</sub>.</p>
        <p><strong>B.</strong> Classe modale ?</p>
        <p><strong>C.</strong> Calculer la moyenne, la médiane et l'écart-type.</p>
      `,
      steps: [
        {
          title: 'Concepts — série groupée',
          content: `
            <p><strong>Variable :</strong> poids des chiens — quantitative continue, regroupée en classes.</p>
            <p><strong>Effectif total :</strong> $n = 100$ → $f_i = n_i / n$ et $F_i$ = fréquences cumulées croissantes.</p>
            <p>On utilise les <strong>centres de classe</strong> $C_i$ pour les calculs de moyenne et d'écart-type.</p>
          `,
        },
        {
          title: 'A — Compléter le tableau',
          content: `
            <p>La classe [60 ; 70[ a une fréquence cumulée <strong>F<sub>i</sub> = 45 %</strong> → effectif cumulé <strong>N<sub>i</sub> = 45</strong>.</p>
            <p>Déjà : 5 + 15 = 20 chiens → effectif de [60 ; 70[ : n<sub>3</sub> = 45 − 20 = <strong>25</strong>.</p>
            <p>Somme des effectifs = 100 → n<sub>5</sub> pour [80 ; 90[ = 100 − (5+15+25+30+10) = <strong>15</strong>.</p>
            <table class="text-sm w-full border-collapse mt-2">
              <thead><tr class="bg-slate-100"><th class="border px-2 py-1">Classe</th><th class="border px-2 py-1">C<sub>i</sub></th><th class="border px-2 py-1">n<sub>i</sub></th><th class="border px-2 py-1">f<sub>i</sub></th><th class="border px-2 py-1">F<sub>i</sub></th></tr></thead>
              <tbody>
                <tr><td class="border px-2 py-1">[40 ; 50[</td><td class="border px-2 py-1">45</td><td class="border px-2 py-1">5</td><td class="border px-2 py-1">5 %</td><td class="border px-2 py-1">5 %</td></tr>
                <tr><td class="border px-2 py-1">[50 ; 60[</td><td class="border px-2 py-1">55</td><td class="border px-2 py-1">15</td><td class="border px-2 py-1">15 %</td><td class="border px-2 py-1">20 %</td></tr>
                <tr><td class="border px-2 py-1">[60 ; 70[</td><td class="border px-2 py-1">65</td><td class="border px-2 py-1">25</td><td class="border px-2 py-1">25 %</td><td class="border px-2 py-1">45 %</td></tr>
                <tr><td class="border px-2 py-1">[70 ; 80[</td><td class="border px-2 py-1">75</td><td class="border px-2 py-1">30</td><td class="border px-2 py-1">30 %</td><td class="border px-2 py-1">75 %</td></tr>
                <tr><td class="border px-2 py-1">[80 ; 90[</td><td class="border px-2 py-1">85</td><td class="border px-2 py-1">15</td><td class="border px-2 py-1">15 %</td><td class="border px-2 py-1">90 %</td></tr>
                <tr><td class="border px-2 py-1">[90 ; 100[</td><td class="border px-2 py-1">95</td><td class="border px-2 py-1">10</td><td class="border px-2 py-1">10 %</td><td class="border px-2 py-1">100 %</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: 'B — Classe modale',
          content: `
            <p>La <strong>classe modale</strong> est celle avec le plus grand effectif n<sub>i</sub>.</p>
            <p>Ici : n<sub>4</sub> = 30 (classe [70 ; 80[) → <strong>classe modale = [70 ; 80[ kg</strong>.</p>
          `,
        },
        {
          title: 'C — Moyenne',
          content: `
            <p>Moyenne sur classes (centres C<sub>i</sub>) :</p>
            <div>$$\\bar{x} = \\frac{\\sum n_i C_i}{n} = \\frac{5\\cdot45 + 15\\cdot55 + 25\\cdot65 + 30\\cdot75 + 15\\cdot85 + 10\\cdot95}{100} = \\frac{7150}{100} = 71{,}5 \\text{ kg}$$</div>
          `,
        },
        {
          title: 'C — Médiane (classes groupées)',
          content: `
            <p><strong>Série groupée</strong> → formule du formulaire « Médiane — classes groupées » (pas la formule non groupée).</p>
            <p><strong>Étape 1 — Classe médiane :</strong> repérer la classe où F<sub>i</sub> dépasse 50 %.</p>
            <ul>
              <li>Après [60 ; 70[ : F<sub>i−1</sub> = 45 % = 0,45 → pas encore 50 %</li>
              <li>Dans [70 ; 80[ : on passe de 45 à 75 chiens → la médiane est <strong>dans cette classe</strong></li>
            </ul>
            <p><strong>Étape 2 — Paramètres</strong> (classe [70 ; 80[) :</p>
            <ul>
              <li>x'<sub>i</sub> = 70 kg (borne inférieure)</li>
              <li>F<sub>i−1</sub> = 0,45 (fréquence cumulée de la classe précédente)</li>
              <li>f<sub>i</sub> = 0,30 (fréquence de la classe médiane : 30/100)</li>
              <li>Δ = 10 kg (largeur de la classe)</li>
            </ul>
            <p><strong>Étape 3 — Formule du formulaire :</strong></p>
            <div>$$\\tilde{x} = x'_i + \\frac{0{,}50 - F_{i-1}}{f_i} \\cdot \\Delta$$</div>
            <div>$$\\tilde{x} = 70 + \\frac{0{,}50 - 0{,}45}{0{,}30} \\times 10 = 70 + \\frac{0{,}05}{0{,}30} \\times 10 = 70 + 1{,}67 \\approx 71{,}7 \\text{ kg}$$</div>
            <p><em>Interprétation :</em> environ 50 % des chiens pèsent moins de 71,7 kg.</p>
          `,
        },
        {
          title: 'C — Écart-type',
          content: `
            <p>Formule sur classes :</p>
            <div>$$S^2 = \\frac{\\sum n_i (C_i - \\bar{x})^2}{n}$$</div>
            <div>$$S = \\sqrt{\\frac{\\sum n_i (C_i - \\bar{x})^2}{n}} \\approx 13{,}14 \\text{ kg}$$</div>
            <p><em>Astuce examen :</em> S² = Σ(n<sub>i</sub>·C<sub>i</sub>²)/n − x̄² = 5114,75 − 5112,25 = <strong>172,75</strong> → S ≈ 13,1 kg.</p>
          `,
        },
      ],
      resultat:
        '<p><strong>Tableau complété · Classe modale [70;80[ · Moyenne x̄ = 71,5 kg · Médiane x̃ ≈ 71,7 kg · Écart-type S ≈ 13,1 kg</strong></p>',
    },
    {
      id: 'ex-q2',
      number: 'Question 2 — /5 pts',
      title: 'Longueur de baleineau — loi normale',
      enonce: `
        <p>Des biologistes marins ont mesuré la longueur totale (cm) de <strong>2 500 baleineaux</strong> Minke. La distribution suit une loi normale :</p>
        <p>$$X \\sim \\mathcal{N}(\\mu = 169 \\text{ cm},\\ \\sigma = 5{,}6 \\text{ cm})$$</p>
        <p><strong>2.A</strong> Quel intervalle, centré sur $\\mu$, contient <strong>80 %</strong> de la population ?</p>
        <p><strong>2.B</strong> Un individu mesure <strong>155 cm</strong>. Quelle est $P(X \\leq 155)$ ?</p>
      `,
      steps: [
        {
          title: 'Concept — loi normale',
          content: `
            <p>Loi continue, symétrique, en cloche. On <strong>standardise</strong> : $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0,1)$.</p>
            <p>Pour un intervalle centré à $(1-\\alpha)\\ \\%$ : on laisse $\\alpha/2$ dans chaque queue de la table $Z$.</p>
          `,
        },
        {
          title: '2.A — Intervalle à 80 %',
          content: `
            <p>80 % au centre → 10 % dans chaque queue → $z_{0{,}10} \\approx 1{,}28$.</p>
            <p>$$\\mu \\pm z \\cdot \\sigma = 169 \\pm 1{,}28 \\times 5{,}6$$</p>
            <p>$$\\boxed{[161{,}8 \\text{ cm} \\ ; \\ 176{,}2 \\text{ cm}]}$$</p>
            <p>80 % des baleineaux ont une longueur entre environ 162 et 176 cm.</p>
          `,
        },
        {
          title: '2.B — Probabilité cumulée en 155 cm',
          content: `
            <p>$$z = \\frac{155 - 169}{5{,}6} = \\frac{-14}{5{,}6} \\approx -2{,}50$$</p>
            <p>$$P(X \\leq 155) = P(Z \\leq -2{,}5) \\approx 0{,}0062 \\approx 0{,}62\\ \\%$$</p>
            <p>Un baleineau de 155 cm est très en dessous de la moyenne (plus de 2 $\\sigma$).</p>
          `,
        },
      ],
      resultat:
        '<p><strong>2.A : [161,8 ; 176,2] cm · 2.B : P(X ≤ 155) ≈ 0,62 %</strong></p>',
    },
    {
      id: 'ex-q3',
      number: 'Question 3 — /4 pts (+ 3.3–3.4)',
      title: 'Truites & Gyrodactylus — arbre, Bayes, binomiale',
      enonce: `
        <p>Dans les eaux wallonnes, <strong>70 %</strong> des truites portent le parasite <em>Gyrodactylus</em>. Un test de dépistage rapide est utilisé :</p>
        <ul>
          <li>Si parasitée : test <strong>positif dans 97 %</strong> des cas (sensibilité)</li>
          <li>Si non parasitée : test <strong>négatif dans 95 %</strong> des cas (spécificité)</li>
        </ul>
        <p>Événements : $M$ = « truite parasitée » · $T$ = « test positif »</p>
        <p><strong>3.1</strong> Arbre de probabilités.</p>
        <p><strong>3.2</strong> Probabilité que la truite soit parasitée <em>sachant que le test est négatif</em> (valeur prédictive négative).</p>
        <p><strong>3.3</strong> On capture 5 truites (tirage avec remise). $X$ = nombre de tests positifs. Loi de $X$ ?</p>
        <p><strong>3.4</strong> $P(X = 1)$ ? (arrondi au centième)</p>
      `,
      steps: [
        {
          title: 'Concept — test diagnostique',
          content: `
            <p><strong>Prévalence :</strong> $P(M) = 0{,}70$ · $P(\\bar{M}) = 0{,}30$</p>
            <p><strong>Sensibilité :</strong> $P(T|M) = 0{,}97$ · <strong>Spécificité :</strong> $P(\\bar{T}|\\bar{M}) = 0{,}95$</p>
            <p>D'où : $P(\\bar{T}|M) = 0{,}03$ et $P(T|\\bar{M}) = 0{,}05$ (faux positifs).</p>
          `,
        },
        {
          title: '3.1 — Arbre de probabilités',
          content: `
            <p><strong>Premier niveau :</strong> $M$ (0,70) / $\\bar{M}$ (0,30)</p>
            <p><strong>Deuxième niveau :</strong></p>
            <ul>
              <li>Branche $M$ : $T$ (0,97) · $\\bar{T}$ (0,03)</li>
              <li>Branche $\\bar{M}$ : $T$ (0,05) · $\\bar{T}$ (0,95)</li>
            </ul>
            <p><strong>Probabilités conjointes :</strong></p>
            <ul>
              <li>$P(M \\cap T) = 0{,}679$</li>
              <li>$P(M \\cap \\bar{T}) = 0{,}021$</li>
              <li>$P(\\bar{M} \\cap T) = 0{,}015$</li>
              <li>$P(\\bar{M} \\cap \\bar{T}) = 0{,}285$</li>
            </ul>
          `,
        },
        {
          title: '3.2 — Bayes : $P(M | \\bar{T})$',
          content: `
            <p><strong>Probabilités totales :</strong> $P(\\bar{T}) = 0{,}021 + 0{,}285 = 0{,}306$</p>
            <p>$$P(M | \\bar{T}) = \\frac{P(M \\cap \\bar{T})}{P(\\bar{T})} = \\frac{0{,}021}{0{,}306} \\approx 0{,}069$$</p>
            <p>Même avec un test négatif, il reste environ <strong>6,9 %</strong> de chance que la truite soit parasitée (à cause de la forte prévalence et des 3 % de faux négatifs).</p>
          `,
        },
        {
          title: '3.3 — Loi binomiale de $X$',
          content: `
            <p>5 truites indépendantes, 2 issues par truite (test + ou −), $p = P(T)$ constant.</p>
            <p>$$P(T) = 0{,}97 \\times 0{,}70 + 0{,}05 \\times 0{,}30 = 0{,}694$$</p>
            <p>$$\\boxed{X \\sim \\mathcal{B}(n = 5,\\ p = 0{,}694)}$$</p>
            <p>$E(X) = 5 \\times 0{,}694 \\approx 3{,}47$ tests positifs en moyenne sur 5 truites.</p>
          `,
        },
        {
          title: '3.4 — $P(X = 1)$',
          content: `
            <p>$$P(X = 1) = \\binom{5}{1} \\times 0{,}694^1 \\times (1-0{,}694)^4$$</p>
            <p>$$P(X = 1) \\approx 5 \\times 0{,}694 \\times 0{,}306^4 \\approx 0{,}03$$</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$P(M|\\bar{T}) \\approx 0{,}069$ · $X \\sim \\mathcal{B}(5; 0{,}694)$ · $P(X=1) \\approx 0{,}03$</strong></p>',
    },
    {
      id: 'ex-q4',
      number: 'Question 4 — /5 pts',
      title: 'Chamois — loi de Poisson (vigilance)',
      enonce: `
        <p>Étude éthologique : $X$ = nombre de fois qu'un chamois mâle <strong>lève la tête</strong> en 10 minutes pour surveiller son environnement.</p>
        <p>En moyenne, ce comportement survient <strong>3 fois</strong> par tranche de 10 minutes, de façon indépendante et aléatoire.</p>
        <p><strong>4.1</strong> Quelle loi suit $X$ ? Paramètre(s) ?</p>
        <p><strong>4.2</strong> Calculer $P(X = 0)$ et $P(X \\geq 2)$.</p>
      `,
      steps: [
        {
          title: '4.1 — Identification de la loi',
          content: `
            <p>On compte des <strong>événements rares</strong> sur un intervalle de temps fixe (10 min), indépendants.</p>
            <p>$$\\boxed{X \\sim \\mathcal{P}(\\lambda = 3)}$$</p>
            <p>Propriété clé : $E(X) = \\text{Var}(X) = \\lambda = 3$.</p>
            <p>Formule : $P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$</p>
          `,
        },
        {
          title: '4.2 — Aucun levé de tête',
          content: `
            <p>$$P(X = 0) = e^{-3} \\approx 0{,}050 \\text{ (5{,}0 %)}$$</p>
            <p>Environ 5 % des observations de 10 min sans aucun levé de tête.</p>
          `,
        },
        {
          title: '4.2 — Au moins deux levés de tête',
          content: `
            <p>On utilise le complémentaire (plus rapide) :</p>
            <p>$$P(X \\geq 2) = 1 - P(X = 0) - P(X = 1)$$</p>
            <p>$P(X = 1) = 3 e^{-3} \\approx 0{,}149$</p>
            <p>$$P(X \\geq 2) = 1 - e^{-3} - 3e^{-3} = 1 - 4e^{-3} \\approx 0{,}801 \\text{ (80{,}1 %)}$$</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$\\mathcal{P}(3)$ · $P(X=0) \\approx 0{,}050$ · $P(X \\geq 2) \\approx 0{,}801$</strong></p>',
    },
    {
      id: 'ex-q5',
      number: 'Question 5 — /3 pts',
      title: 'Moutons Texel — intervalle de confiance d\'une proportion',
      enonce: `
        <p>Un éleveur de moutons Texel observe <strong>250 naissances</strong> : <strong>135 femelles</strong>.</p>
        <p>Déterminer l'<strong>intervalle de confiance à 95 %</strong> pour la proportion $p$ de femelles dans la population de l'élevage.</p>
      `,
      steps: [
        {
          title: 'Concept — estimation d\'une proportion',
          content: `
            <p><strong>Estimateur :</strong> $\\hat{p} = \\frac{x}{n} = \\frac{135}{250} = 0{,}54$ (54 % de femelles observées).</p>
            <p><strong>Conditions de validité :</strong> $n\\hat{p} = 135 \\geq 5$ et $n\\hat{q} = 115 \\geq 5$ → approximation normale OK.</p>
            <p>Au niveau 95 % : $z_{1-\\alpha/2} = 1{,}96$.</p>
          `,
        },
        {
          title: 'Calcul de la marge d\'erreur',
          content: `
            <p>$$E = z \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} = 1{,}96 \\times \\sqrt{\\frac{0{,}54 \\times 0{,}46}{250}} \\approx 0{,}062$$</p>
          `,
        },
        {
          title: 'Intervalle de confiance',
          content: `
            <p>$$p \\in [\\hat{p} - E \\ ; \\ \\hat{p} + E] = [0{,}54 - 0{,}062 \\ ; \\ 0{,}54 + 0{,}062]$$</p>
            <p>$$\\boxed{IC_{95\\%}(p) = [0{,}478 \\ ; \\ 0{,}602] = [47{,}8\\ \\% \\ ; \\ 60{,}2\\ \\%]}$$</p>
            <p><strong>Interprétation :</strong> avec 95 % de confiance, la vraie proportion de femelles dans l'élevage se situe entre environ 48 % et 60 %.</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$\\hat{p} = 0{,}54$ · $IC_{95\\%} = [47{,}8\\ \\% \\ ; \\ 60{,}2\\ \\%]$</strong></p>',
    },
  ],
}

const examenParModule: Partial<Record<ModuleId, string[]>> = {
  descriptive: ['ex-q1'],
  'variables-aleatoires': ['ex-q2', 'ex-q4'],
  probabilites: ['ex-q3'],
  inference: ['ex-q5'],
}

export function getExamenComplet(): ModuleCorrectifs {
  return examenJuin
}

export function getExamenForModule(moduleId: ModuleId): ModuleCorrectifs | undefined {
  const ids = examenParModule[moduleId]
  if (!ids) return undefined

  const exercises = examenJuin.exercises.filter((e) => ids.includes(e.id))
  if (exercises.length === 0) return undefined

  const labels: Record<ModuleId, string> = {
    descriptive: 'Examen — Question 1 (descriptive)',
    probabilites: 'Examen — Question 3 (probabilités & binomiale)',
    'variables-aleatoires': 'Examen — Questions 2 & 4 (lois normale & Poisson)',
    inference: 'Examen — Question 5 (inférence)',
    formulaire: '',
  }

  return {
    moduleId,
    tpLabel: labels[moduleId],
    intro:
      'Question(s) de l\'examen de juin correspondant à ce chapitre. Consultez la page Examen complète pour voir l\'épreuve entière.',
    exercises,
  }
}
