import type { ModuleCorrectifs } from './index'

export const correctifProbabilites: ModuleCorrectifs = {
  moduleId: 'probabilites',
  tpLabel: 'TP3 — Probabilités',
  intro:
    'Chaque question est corrigée avec la méthode du cours : identifier l\'univers, modéliser l\'événement, appliquer les formules (conditionnelle, totales, Bayes). Les résultats exacts du polycopié sont repris quand ils sont donnés.',
  exercises: [
    {
      id: 'tp3-q1',
      number: 'Question 1',
      title: 'Daltonisme et Bayes',
      enonce:
        '<p>5 hommes/100 et 25 femmes/10 000 daltoniens. On choisit un daltonien au hasard (hommes et femmes en nombre égal). P(homme | daltonien) ?</p>',
      steps: [
        {
          title: 'Modélisation',
          content: `
            <p>$P(H) = P(F) = 0{,}5$ (effectifs égaux)</p>
            <p>$P(D|H) = 0{,}05$ · $P(D|F) = 25/10\\,000 = 0{,}0025$</p>
          `,
        },
        {
          title: 'Probabilité totale de D',
          content: `<p>$$P(D) = P(D|H)P(H) + P(D|F)P(F) = 0{,}05 \\times 0{,}5 + 0{,}0025 \\times 0{,}5 = 0{,}02625$$</p>`,
        },
        {
          title: 'Bayes',
          content: `
            <p>$$P(H|D) = \\frac{P(D|H) \\cdot P(H)}{P(D)} = \\frac{0{,}025}{0{,}02625} \\approx 0{,}952$$</p>
            <p><strong>Interprétation :</strong> parmi les daltoniens, environ 95 % sont des hommes — le daltonisme est beaucoup plus fréquent chez les hommes.</p>
          `,
        },
      ],
      resultat: '<p><strong>P(homme | daltonien) ≈ 0,952 (soit 95,2 %)</strong></p>',
    },
    {
      id: 'tp3-q2',
      number: 'Question 2',
      title: 'Jeu de 52 cartes',
      enonce: '<p>On tire une carte. Calculer les probabilités demandées.</p>',
      steps: [
        {
          title: 'Rappel',
          content: '<p>Univers Ω = 52 cartes, tirage équiprobable → $P(A) = \\frac{\\text{cas favorables}}{52}$</p>',
        },
        {
          title: 'Calculs',
          content: `
            <ul>
              <li><strong>a) Un as :</strong> 4/52 = <strong>1/13</strong></li>
              <li><strong>b) Valet de cœur :</strong> 1/52</li>
              <li><strong>c) 3 de trèfle OU 6 de carreau :</strong> 2/52 = <strong>1/26</strong> (incompatibles)</li>
              <li><strong>d) Un cœur :</strong> 13/52 = <strong>1/4</strong></li>
              <li><strong>e) Couleur sauf cœur :</strong> 39/52 = <strong>3/4</strong></li>
              <li><strong>f) Un 10 ou un pique :</strong> $\\frac{4+13-1}{52} = \\frac{16}{52} = \\frac{4}{13}$ (on retire le 10 de pique compté deux fois)</li>
              <li><strong>g) Ni un 4 ni un trèfle :</strong> $\\frac{52-4-13+1}{52} = \\frac{36}{52} = \\frac{9}{13}$ (principe d'inclusion-exclusion)</li>
            </ul>
          `,
        },
      ],
      resultat: '<p>Voir les fractions simplifiées ci-dessus pour chaque sous-question.</p>',
    },
    {
      id: 'tp3-q3',
      number: 'Question 3',
      title: 'Tirage d\'une boule dans l\'urne',
      enonce: '<p>6 rouges, 4 blanches, 5 bleues (total 15). Une boule tirée au hasard.</p>',
      steps: [
        {
          title: 'Probabilités élémentaires',
          content: `
            <ul>
              <li><strong>a) Rouge :</strong> 6/15 = <strong>2/5 = 0,40</strong></li>
              <li><strong>b) Blanche :</strong> 4/15 ≈ 0,27</li>
              <li><strong>c) Bleue :</strong> 5/15 = <strong>1/3</strong></li>
              <li><strong>d) Non rouge :</strong> 9/15 = <strong>3/5 = 0,60</strong></li>
              <li><strong>e) Rouge ou blanche :</strong> 10/15 = <strong>2/3</strong> (incompatibles)</li>
            </ul>
          `,
        },
      ],
      resultat: '<p><strong>P(rouge) = 2/5 · P(non rouge) = 3/5 · P(R ou B) = 2/3</strong></p>',
    },
    {
      id: 'tp3-q4',
      number: 'Question 4',
      title: '3 tirages : rouge, blanche, bleue (dans l\'ordre)',
      enonce: `
        <p>D'un récipient contenant <strong>6 boules rouges, 4 blanches et 5 bleues</strong>, on tire successivement <strong>3 boules</strong>.</p>
        <p>Quelles sont les probabilités pour tirer dans l'ordre des boules <strong>rouge, blanche et bleue</strong> si :</p>
        <p><strong>a)</strong> chaque boule est replacée dans le récipient ;<br>
        <strong>b)</strong> on ne replace aucune boule dans le récipient ?</p>
      `,
      steps: [
        {
          title: 'a) Avec remise',
          content: `
            <p>Les tirages sont <strong>indépendants</strong>, les probabilités restent constantes :</p>
            <p>$$P(R,B,B) = \\frac{6}{15} \\times \\frac{4}{15} \\times \\frac{5}{15} = \\frac{120}{3375} \\approx 0{,}0356$$</p>
          `,
        },
        {
          title: 'b) Sans remise',
          content: `
            <p>Effectif diminue à chaque tirage :</p>
            <p>$$P(R,B,B) = \\frac{6}{15} \\times \\frac{4}{14} \\times \\frac{5}{13} \\approx 0{,}0440$$</p>
            <p>La probabilité est un peu plus élevée sans remise ici car on ne retire pas une boule bleue avant le dernier tirage.</p>
          `,
        },
      ],
      resultat: '<p><strong>Avec remise ≈ 0,036 · Sans remise ≈ 0,044</strong></p>',
    },
    {
      id: 'tp3-q5',
      number: 'Question 5',
      title: 'Deux lancers de dé',
      enonce: '<p>P(4, 5 ou 6 au 1er jet ET 1, 2 ou 4 au 2e) ?</p>',
      steps: [
        {
          title: 'Indépendance',
          content: `
            <p>$A$ = {4,5,6} au 1er → $P(A) = 3/6 = 1/2$</p>
            <p>$B$ = {1,2,4} au 2e → $P(B) = 3/6 = 1/2$</p>
            <p>$$P(A \\cap B) = P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$</p>
          `,
        },
      ],
      resultat: '<p><strong>P = 1/4 = 0,25 = 25 %</strong></p>',
    },
    {
      id: 'tp3-q6',
      number: 'Question 6',
      title: 'Deux as tirés',
      steps: [
        {
          title: 'a) Avec remise',
          content: `<p>$$P = \\frac{4}{52} \\times \\frac{4}{52} = \\frac{16}{2704} = \\frac{1}{169}$$</p>`,
        },
        {
          title: 'b) Sans remise',
          content: `<p>$$P = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$$</p>`,
        },
      ],
      resultat: '<p><strong>a) 1/169 · b) 1/221</strong> (réponses du polycopié)</p>',
    },
    {
      id: 'tp3-q7',
      number: 'Question 7',
      title: 'Tubes défectueux — probabilités totales & Bayes',
      enonce:
        '<p>Lot : 50 % société A, 30 % B, 20 % C. Taux de défaut : 2 % (A), 3 % (B), 4 % (C).</p>',
      steps: [
        {
          title: 'a) P(défectueux)',
          content: `
            <p>$$P(D) = 0{,}50 \\times 0{,}02 + 0{,}30 \\times 0{,}03 + 0{,}20 \\times 0{,}04 = 0{,}027$$</p>
            <p>2,7 % des tubes du lot sont défectueux en moyenne.</p>
          `,
        },
        {
          title: 'b) P(A | défectueux)',
          content: `
            <p>$$P(A|D) = \\frac{P(D|A)P(A)}{P(D)} = \\frac{0{,}01}{0{,}027} \\approx 0{,}370$$</p>
            <p>Si le tube est défectueux, il y a environ 37 % de chances qu'il vienne de A (malgré 50 % du lot, A a le plus faible taux de défaut).</p>
          `,
        },
      ],
      resultat: '<p><strong>a) P(D) = 0,027 · b) P(A|D) ≈ 0,370</strong></p>',
    },
    {
      id: 'tp3-q8',
      number: 'Question 8',
      title: 'Caractères biologiques X et Y',
      enonce:
        '<p>P(M)=1/3, P(F)=2/3. Prévalences et probabilités conditionnelles données pour X et Y.</p>',
      steps: [
        {
          title: 'a) P(M | X)',
          content: `
            <p>$P(X) = 0{,}05 \\times \\frac{1}{3} + 0{,}003 \\times \\frac{2}{3} \\approx 0{,}0188$</p>
            <p>$$P(M|X) = \\frac{0{,}05 \\times \\frac{1}{3}}{P(X)} \\approx 0{,}893$$</p>
          `,
        },
        {
          title: 'b) P(M | Y)',
          content: `
            <p>On calcule d'abord $P(Y|M)$ et $P(Y|F)$ par les chemins X et non-X, puis $P(Y)$ par totales, puis Bayes.</p>
            <p>$$P(M|Y) \\approx 0{,}810$$</p>
          `,
        },
        {
          title: 'c) P(M | non-X et Y)',
          content: `
            <p>On restreint aux animaux sans X mais avec Y :</p>
            <p>$$P(M | \\bar{X} \\cap Y) \\approx 0{,}298$$</p>
            <p>Beaucoup moins probable qu'un mâle ait Y s'il n'a pas X.</p>
          `,
        },
      ],
      resultat: '<p><strong>a) ≈ 0,89 · b) ≈ 0,81 · c) ≈ 0,30</strong></p>',
    },
    {
      id: 'tp3-q9',
      number: 'Question 9',
      title: 'Épidémie bovine — test diagnostique',
      steps: [
        {
          title: 'a) P(test positif)',
          content: `
            <p>$P(M) = 0{,}02$ · $P(T|M) = 0{,}85$ · $P(\\bar{T}|\\bar{M}) = 0{,}95$</p>
            <p>$$P(T) = 0{,}85 \\times 0{,}02 + 0{,}05 \\times 0{,}98 = 0{,}066$$</p>
          `,
        },
        {
          title: 'b) P(malade | test +)',
          content: `
            <p>$$P(M|T) = \\frac{0{,}85 \\times 0{,}02}{0{,}066} \\approx 0{,}258$$</p>
            <p><strong>Attention :</strong> même avec un test positif, la probabilité d'être malade reste modeste (≈ 26 %) car la maladie est rare (2 %). C'est l'effet de la faible prévalence.</p>
          `,
        },
      ],
      resultat: '<p><strong>a) P(T) ≈ 0,066 · b) P(M|T) ≈ 0,258</strong></p>',
    },
    {
      id: 'tp3-q10',
      number: 'Question 10',
      title: 'Moutons — maladie M et test T',
      steps: [
        {
          title: 'Calculs',
          content: `
            <p>$P(M) = 0{,}3$ · $P(T|M) = 0{,}8$ · $P(\\bar{T}|\\bar{M}) = 0{,}9$</p>
            <p>$$P(T) = 0{,}8 \\times 0{,}3 + 0{,}1 \\times 0{,}7 = 0{,}31$$</p>
            <p>$$P(M|T) = \\frac{0{,}8 \\times 0{,}3}{0{,}31} \\approx 0{,}774$$</p>
          `,
        },
      ],
      resultat: '<p><strong>1) P(T+) ≈ 0,31 · 2) P(M|T+) ≈ 0,77</strong></p>',
    },
    {
      id: 'tp3-q11',
      number: 'Question 11',
      title: 'Cobayes et rats — tableau croisé',
      enonce: `
        <p>Un essai de laboratoire porte sur <strong>35 cobayes</strong> et <strong>15 rats</strong>. Après 5 jours, <strong>40 %</strong> des cobayes sont malades ainsi que <strong>20 %</strong> des rats.</p>
        <p><strong>1.</strong> Compléter le tableau croisé par des pourcentages.</p>
        <table class="text-sm mt-2 mb-3 border-collapse">
          <thead><tr><th class="border border-slate-300 px-3 py-1.5 bg-slate-100"></th><th class="border border-slate-300 px-3 py-1.5 bg-slate-100">Cobayes</th><th class="border border-slate-300 px-3 py-1.5 bg-slate-100">Rats</th><th class="border border-slate-300 px-3 py-1.5 bg-slate-100">Total</th></tr></thead>
          <tbody>
            <tr><td class="border border-slate-300 px-3 py-1 font-medium">Malade</td><td class="border border-slate-300 px-3 py-1"></td><td class="border border-slate-300 px-3 py-1"></td><td class="border border-slate-300 px-3 py-1"></td></tr>
            <tr><td class="border border-slate-300 px-3 py-1 font-medium">Sain</td><td class="border border-slate-300 px-3 py-1"></td><td class="border border-slate-300 px-3 py-1"></td><td class="border border-slate-300 px-3 py-1"></td></tr>
            <tr><td class="border border-slate-300 px-3 py-1 font-medium">Total</td><td class="border border-slate-300 px-3 py-1"></td><td class="border border-slate-300 px-3 py-1"></td><td class="border border-slate-300 px-3 py-1"></td></tr>
          </tbody>
        </table>
        <p><strong>2.</strong> Quel est, arrondi au dixième, le pourcentage de rats parmi les animaux sains ?</p>
        <p>On choisit un animal au hasard. On note M : « l'animal est malade », et C : « l'animal est un cobaye ».</p>
        <p><strong>3.</strong> Quelle est la probabilité que ce soit un cobaye malade ?</p>
        <p><strong>4.</strong> On constate que l'animal choisi est un cobaye. Quelle est la probabilité P<sub>C</sub>(M) qu'il soit malade ?</p>
      `,
      steps: [
        {
          title: '1) Tableau complété',
          content: `
            <table class="text-sm">
              <thead><tr><th></th><th>Cobayes</th><th>Rats</th><th>Total</th></tr></thead>
              <tbody>
                <tr><td>Malades</td><td>14 (40 %)</td><td>3 (20 %)</td><td>17 (34 %)</td></tr>
                <tr><td>Sains</td><td>21 (60 %)</td><td>12 (80 %)</td><td>33 (66 %)</td></tr>
                <tr><td>Total</td><td>35 (70 %)</td><td>15 (30 %)</td><td>50 (100 %)</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: '2) % de rats parmi les sains',
          content: `<p>$\\frac{12}{33} \\times 100 \\approx \\mathbf{36{,}4\\ \\%}$</p>`,
        },
        {
          title: '3) et 4) Probabilités',
          content: `
            <p><strong>3)</strong> $P(C \\cap M) = \\frac{14}{50} = 0{,}28$</p>
            <p><strong>4)</strong> $P_C(M) = P(M|C) = \\frac{14}{35} = 0{,}40$</p>
            <p>Sachant que c'est un cobaye, 40 % de chance qu'il soit malade.</p>
          `,
        },
      ],
      resultat: '<p><strong>34 % malades au total · 36,4 % rats parmi sains · P(C∩M)=0,28 · P(M|C)=0,40</strong></p>',
    },
  ],
}
