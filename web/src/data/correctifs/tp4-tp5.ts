import type { ModuleCorrectifs } from './index'

export const correctifVariablesAleatoires: ModuleCorrectifs = {
  moduleId: 'variables-aleatoires',
  tpLabel: 'TP4 & TP5 — Lois de probabilité',
  intro:
    'Ce chapitre couvre deux TP : le TP4 (lois discrètes, espérance, binomiale) et le TP5 (binomiale, Poisson, normale). Chaque corrigé détaille la loi utilisée, les paramètres et le calcul numérique.',
  exercises: [
    {
      id: 'tp4-q1',
      number: 'TP4 — Q1',
      title: 'Gain au dé — espérance',
      steps: [
        {
          title: 'Loi de X',
          content: `
            <table class="text-sm">
              <thead><tr><th>Issue</th><th>Gain X (€)</th><th>P(X)</th></tr></thead>
              <tbody>
                <tr><td>1, 3, 5 (impairs)</td><td>+0,5</td><td>3/6</td></tr>
                <tr><td>2, 4</td><td>+1,5</td><td>2/6</td></tr>
                <tr><td>6</td><td>−5</td><td>1/6</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: 'Espérance',
          content: `
            <p>$$E(X) = \\frac{3}{6} \\times 0{,}5 + \\frac{2}{6} \\times 1{,}5 + \\frac{1}{6} \\times (-5) = -\\frac{1}{12} \\approx -0{,}083 \\text{ €}$$</p>
            <p>Le jeu est <strong>défavorable</strong> au joueur : en moyenne il perd environ 8 centimes par partie.</p>
          `,
        },
      ],
      resultat: '<p><strong>E(X) ≈ −0,083 €</strong></p>',
    },
    {
      id: 'tp4-q2',
      number: 'TP4 — Q2',
      title: 'Loterie associative',
      steps: [
        {
          title: 'Gains algébriques (prix 2 €)',
          content: `
            <ul>
              <li>1 billet sur 2000 : gain net 500 − 2 = <strong>+498 €</strong></li>
              <li>2 billets : +148 € chacun</li>
              <li>5 billets : +98 € chacun</li>
              <li>1 992 billets : <strong>−2 €</strong> (perte du ticket)</li>
            </ul>
          `,
        },
        {
          title: 'Espérance et équité',
          content: `
            <p>$$E(X) = \\frac{498 + 296 + 490 - 2 \\times 1992}{2000} = -1{,}35 \\text{ €}$$</p>
            <p>Le jeu n'est pas équitable (espérance négative).</p>
            <p>Pour x billets avec 8 gagnants fixes : $E(X) = \\frac{1300 - 2x}{x} = 0 \\Rightarrow x = 650$ billets.</p>
          `,
        },
      ],
      resultat: '<p><strong>E(X) = −1,35 € · Jeu équitable pour x = 650 billets</strong></p>',
    },
    {
      id: 'tp4-q4',
      number: 'TP4 — Q4',
      title: 'Paul la pieuvre — binomiale',
      steps: [
        {
          title: 'Loi et paramètres',
          content: `
            <p>$X$ = nombre de bonnes réponses sur 14 pronostics.</p>
            <p>$$X \\sim \\mathcal{B}(n=14,\\ p=0{,}5)$$</p>
            <p>14 épreuves indépendantes, 2 issues (bonne/mauvaise), p constant.</p>
          `,
        },
        {
          title: 'Probabilités',
          content: `
            <p>$$P(X=12) = \\binom{14}{12} \\times 0{,}5^{14} \\approx 0{,}0056$$</p>
            <p>$$P(X \\geq 12) = P(12)+P(13)+P(14) \\approx 0{,}0065$$</p>
          `,
        },
      ],
      resultat: '<p><strong>P(X=12) ≈ 0,0056 · P(X≥12) ≈ 0,0065</strong></p>',
    },
    {
      id: 'tp4-q5',
      number: 'TP4 — Q5',
      title: 'Feux tricolores — retard au lycée',
      steps: [
        {
          title: 'Modélisation',
          content: `
            <p>Temps de base : 3 km à 15 km/h = <strong>12 min</strong>. Départ 13 min avant → marge de 1 min.</p>
            <p>5 feux indépendants : P(rouge) = 0,3, P(vert) = 0,7. Chaque rouge ajoute 1 min.</p>
            <p><strong>Retard</strong> si au moins 2 feux rouges (12 + 2 = 14 min > 13 min).</p>
          `,
        },
        {
          title: 'Binomiale',
          content: `
            <p>$Y$ = nombre de feux rouges $\\sim \\mathcal{B}(5, 0{,}3)$</p>
            <p>$$P(\\text{retard}) = P(Y \\geq 2) = 1 - P(0) - P(1) = 1 - 0{,}7^5 - 5 \\times 0{,}3 \\times 0{,}7^4 \\approx 0{,}472$$</p>
          `,
        },
      ],
      resultat: '<p><strong>P(retard) ≈ 47,2 %</strong></p>',
    },
    {
      id: 'tp4-q6',
      number: 'TP4 — Q6',
      title: 'Chenille sur le grillage',
      steps: [
        {
          title: 'Binomiale B(4, p)',
          content: `
            <p>4 niveaux, droite avec p = 1/3, gauche avec p = 2/3.</p>
            <p><strong>a) 3 fois à droite :</strong> $P = \\binom{4}{3}(1/3)^3(2/3) \\approx 0{,}099$</p>
            <p><strong>b) 3 fois à gauche :</strong> $P = \\binom{4}{3}(2/3)^3(1/3) \\approx 0{,}395$</p>
          `,
        },
      ],
      resultat: '<p><strong>a) ≈ 0,099 · b) ≈ 0,395</strong></p>',
    },
    {
      id: 'tp4-q7',
      number: 'TP4 — Q7',
      title: 'Fleurs et portées de souris',
      steps: [
        {
          title: 'Fleurs — hypergéométrique',
          content: `
            <p>2 blanches, 8 roses, on cueille 3 fleurs sans remise.</p>
            <p>$$P(2\\ \\text{blanches}) = \\frac{\\binom{2}{2}\\binom{8}{1}}{\\binom{10}{3}} = \\frac{8}{120} = \\frac{1}{15} \\approx 0{,}067$$</p>
          `,
        },
        {
          title: 'Souris — B(5, 0,5)',
          content: `
            <p>$P(X=k) = \\binom{5}{k} \\times 0{,}5^5$. Sur 100 portées théoriques :</p>
            <ul>
              <li>0 mâle : ≈ 3 portées · 1 mâle : ≈ 16 · 2 : ≈ 31 · 3 : ≈ 31 · 4 : ≈ 16 · 5 : ≈ 3</li>
            </ul>
          `,
        },
      ],
      resultat: '<p><strong>Fleurs : 1/15 · Souris : distribution symétrique autour de 2,5 mâles</strong></p>',
    },
    {
      id: 'tp4-q8',
      number: 'TP4 — Q8',
      title: 'Coyotes — ehrlichiose (Bayes + binomiale)',
      steps: [
        {
          title: 'Partie A — Arbre et VPP',
          content: `
            <p>$P(M) = 0{,}7$ · $P(T|M) = 0{,}97$ · $P(\\bar{T}|\\bar{M}) = 0{,}95$</p>
            <p>$P(M \\cap T) = 0{,}679$ · $P(T) = 0{,}694$ (vérifié dans l'énoncé)</p>
            <p><strong>Valeur prédictive positive :</strong> $P(M|T) = 0{,}679/0{,}694 \\approx 0{,}978$</p>
            <p><strong>Valeur prédictive négative :</strong> $P(\\bar{M}|\\bar{T}) \\approx 0{,}931$</p>
            <p>Le test est excellent pour confirmer la maladie (VPP élevée) et correct pour rassurer si négatif.</p>
          `,
        },
        {
          title: 'Partie B — X = nombre de tests + sur 5 coyotes',
          content: `
            <p>$X \\sim \\mathcal{B}(5,\\ p=0{,}694)$ où p = P(test positif).</p>
            <p>$P(X=1) \\approx 0{,}03$ · $P(X \\geq 4) \\approx 0{,}52$ → l'affirmation « plus d'une chance sur deux » est <strong>vraie</strong>.</p>
            <p>Pour P(au moins 1 test +) ≥ 0,99 : capturer <strong>4 coyotes</strong> suffit ($1 - 0{,}306^4 \\approx 0{,}991$).</p>
          `,
        },
      ],
      resultat: '<p><strong>VPP ≈ 0,978 · VPN ≈ 0,931 · P(X≥4) ≈ 0,52 · 4 coyotes pour 99 %</strong></p>',
    },
    {
      id: 'tp5-q1',
      number: 'TP5 — Q1',
      title: 'Lancer de 3 dés — le 421',
      steps: [
        {
          title: 'Probabilité élémentaire',
          content: `
            <p>3 dés non pipés → $6^3 = 216$ issues équiprobables.</p>
            <p>Une seule combinaison donne 4-2-1 (dans cet ordre) : $P = 1/216 \\approx 0{,}0046$</p>
          `,
        },
        {
          title: '25 répétitions',
          content: `
            <p>$$P(\\text{au moins un 421}) = 1 - \\left(1 - \\frac{1}{216}\\right)^{25} \\approx 0{,}11$$</p>
            <p>Environ 11 % — inférieur à 50 %, mais l'énoncé demande de <em>montrer</em> une autre propriété ; ici P &lt; 1/2.</p>
          `,
        },
      ],
      resultat: '<p><strong>P(421) = 1/216 · P(≥1 en 25 essais) ≈ 0,11</strong></p>',
    },
    {
      id: 'tp5-q2',
      number: 'TP5 — Q2',
      title: 'Réactions vaccinales — Poisson',
      steps: [
        {
          title: 'Paramètre λ',
          content: `
            <p>n = 200, p = 0,01 → événements rares → $\\mathcal{P}(\\lambda = np = 2)$</p>
          `,
        },
        {
          title: 'Calculs',
          content: `
            <p><strong>a)</strong> $P(X=3) = e^{-2} \\times \\frac{8}{6} \\approx 0{,}180$</p>
            <p><strong>b)</strong> $P(X > 2) = 1 - P(0) - P(1) - P(2) \\approx 0{,}323$</p>
          `,
        },
      ],
      resultat: '<p><strong>a) ≈ 0,180 · b) ≈ 0,323</strong></p>',
    },
    {
      id: 'tp5-q3',
      number: 'TP5 — Q3',
      title: 'Bactéries dans 1 mL',
      steps: [
        {
          title: 'Poisson',
          content: `
            <p>2000 bactéries/L → 2 bactéries/mL en moyenne → $\\lambda = 2$</p>
            <p>$$P(X=0) = e^{-2} \\approx 0{,}135$$</p>
            <p>Environ 13,5 % de chance de ne trouver aucune bactérie dans le prélèvement.</p>
          `,
        },
      ],
      resultat: '<p><strong>P(aucune) ≈ 0,135</strong></p>',
    },
    {
      id: 'tp5-q4',
      number: 'TP5 — Q4',
      title: 'Paquet de 50 produits — binomiale',
      steps: [
        {
          title: 'Modèle',
          content: `
            <p>$X$ = nombre de défectueux $\\sim \\mathcal{B}(50, 1/50)$, $\\lambda = E(X) = 1$.</p>
            <p>Garantie : 48 bons minimum → risque = $P(X \\geq 3)$.</p>
            <p>$$P(X \\geq 3) \\approx 0 \\text{ (négligeable)}$$</p>
            <p>L'acheteur court un risque quasi nul : obtenir 3 défauts ou plus est extrêmement improbable.</p>
          `,
        },
      ],
      resultat: '<p><strong>Risque ≈ 0 — garantie largement tenue</strong></p>',
    },
    {
      id: 'tp5-q5',
      number: 'TP5 — Q5',
      title: 'Taille des hommes — N(169, 5,6²)',
      steps: [
        {
          title: 'Standardisation',
          content: `
            <p>$Z = \\frac{X - 169}{5{,}6}$</p>
            <p><strong>(1)</strong> $P(X < 155) = P(Z < -2{,}5) \\approx 0{,}6\\ \\%$</p>
            <p><strong>(2)</strong> $P(155 < X < 175) \\approx 85{,}2\\ \\%$</p>
            <p><strong>(3)</strong> Intervalle centré à 60 % : $z_{0{,}30} \\approx 0{,}84$ → $[169 - 4{,}7 ; 169 + 4{,}7] = [164{,}3 ; 173{,}7]$ cm</p>
          `,
        },
      ],
      resultat: '<p><strong>&lt;155 cm : 0,6 % · 155–175 cm : 85 % · IC 60 % : [164,3 ; 173,7]</strong></p>',
    },
    {
      id: 'tp5-q6',
      number: 'TP5 — Q6',
      title: 'Poids des nouveau-nés — N(3334, 400²)',
      steps: [
        {
          title: '90 % centrés',
          content: `
            <p>$P(\\mu - z \\sigma < X < \\mu + z \\sigma) = 0{,}90$ → $z \\approx 1{,}645$</p>
            <p>Limites : $3334 \\pm 1{,}645 \\times 400 = [2676 ; 3992]$ g</p>
            <p>90 % des nouveau-nés pèsent entre environ <strong>2,68 et 3,99 kg</strong>.</p>
          `,
        },
      ],
      resultat: '<p><strong>[2676 g ; 3992 g]</strong></p>',
    },
    {
      id: 'tp5-q7',
      number: 'TP5 — Q7',
      title: 'Colis en hangar — N(151, 15²)',
      steps: [
        {
          title: 'Probabilités',
          content: `
            <p><strong>(1)</strong> $P(120 < X < 155) \\approx 58{,}6\\ \\%$</p>
            <p>Si hangar de N colis : environ $0{,}586 \\times N$ colis dans cette tranche.</p>
            <p><strong>(2)</strong> $P(X > 185) \\approx 1{,}2\\ \\%$ → environ $0{,}012 \\times N$ colis.</p>
          `,
        },
      ],
      resultat: '<p><strong>P(120–155) ≈ 58,6 % · P(&gt;185) ≈ 1,2 %</strong></p>',
    },
    {
      id: 'tp5-q8',
      number: 'TP5 — Q8',
      title: 'Boîtes d\'allumettes — réglage M',
      steps: [
        {
          title: 'Condition et calcul',
          content: `
            <p>$X \\sim \\mathcal{N}(M, 5^2)$. On veut $P(X \\geq 100) = 0{,}975$.</p>
            <p>$P(X \\geq 100) = 0{,}975 \\Leftrightarrow P(X < 100) = 0{,}025$</p>
            <p>$\\frac{100 - M}{5} = -1{,}96 \\Rightarrow M = 100 + 1{,}96 \\times 5 = 109{,}8$</p>
          `,
        },
      ],
      resultat: '<p><strong>M ≈ 109,8 allumettes</strong></p>',
    },
    {
      id: 'tp5-q9',
      number: 'TP5 — Q9',
      title: 'Capteur photographique — N(4, 1,23²)',
      steps: [
        {
          title: 'Réponses',
          content: `
            <p><strong>1)</strong> Durée moyenne = $E(D) = \\mu = 4$ ans</p>
            <p><strong>2)</strong> $P(3{,}5 < D < 4{,}5) \\approx 31{,}6\\ \\%$</p>
            <p><strong>3)</strong> $P(D < 2) \\approx 5{,}2\\ \\%$ — probabilité que la panne survienne avant la fin de garantie (2 ans)</p>
          `,
        },
      ],
      resultat: '<p><strong>μ = 4 ans · P(3,5–4,5) ≈ 32 % · P(&lt;2 ans) ≈ 5 %</strong></p>',
    },
  ],
}
