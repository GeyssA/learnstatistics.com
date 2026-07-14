import type { ModuleCorrectifs } from './index'

export const correctifDescriptive: ModuleCorrectifs = {
  moduleId: 'descriptive',
  tpLabel: 'TP1 — Statistique descriptive',
  intro:
    'Corrigés détaillés pas à pas pour chaque exercice du TP1. Les calculs numériques ont été vérifiés sur les données officielles du polycopié. Comparez vos résultats avec l’onglet Pratique (graphiques interactifs).',
  exercises: [
    {
      id: 'tp1-ex1',
      number: 'Exercice 1',
      title: 'Notes d\'interrogation (/20)',
      enonce: `
        <p>On a relevé les notes d'une interrogation en statistiques établies sur 20 de <strong>40 étudiants</strong> d'une classe.</p>
        <p class="font-mono text-xs leading-relaxed bg-white border border-slate-200 rounded-lg p-3 mt-2">
          10 8 12 16 14 10 11 8 12 14 13 12 10 9 13 17 13 12 9<br>
          8 6 13 14 10 12 14 8 10 12 17 6 8 12 14 16 13 11 12 14 12
        </p>
        <p class="mt-3"><strong>a)</strong> Établir les distributions de fréquences non groupées et les graphiques correspondants.<br>
        <strong>b)</strong> Calculer la moyenne, la variance, l'écart-type.</p>
      `,
      steps: [
        {
          title: 'Identifier la variable',
          content: `
            <p><strong>Variable :</strong> note obtenue — quantitative discrète (modalités entières de 6 à 17).</p>
            <p><strong>Effectif :</strong> n = 40 étudiants.</p>
          `,
        },
        {
          title: 'Tableau de fréquences',
          content: `
            <p>On compte chaque modalité puis on calcule fᵢ = nᵢ/n, Nᵢ et Fᵢ cumulés :</p>
            <table class="text-sm">
              <thead><tr><th>Note</th><th>nᵢ</th><th>fᵢ</th><th>Nᵢ</th><th>Fᵢ</th></tr></thead>
              <tbody>
                <tr><td>6</td><td>2</td><td>0,050</td><td>2</td><td>0,050</td></tr>
                <tr><td>8</td><td>5</td><td>0,125</td><td>7</td><td>0,175</td></tr>
                <tr><td>9</td><td>2</td><td>0,050</td><td>9</td><td>0,225</td></tr>
                <tr><td>10</td><td>5</td><td>0,125</td><td>14</td><td>0,350</td></tr>
                <tr><td>11</td><td>2</td><td>0,050</td><td>16</td><td>0,400</td></tr>
                <tr><td>12</td><td>9</td><td>0,225</td><td>25</td><td>0,625</td></tr>
                <tr><td>13</td><td>5</td><td>0,125</td><td>30</td><td>0,750</td></tr>
                <tr><td>14</td><td>6</td><td>0,150</td><td>36</td><td>0,900</td></tr>
                <tr><td>16</td><td>2</td><td>0,050</td><td>38</td><td>0,950</td></tr>
                <tr><td>17</td><td>2</td><td>0,050</td><td>40</td><td>1,000</td></tr>
              </tbody>
            </table>
            <p><strong>Graphiques :</strong> diagramme en bâtonnets (nᵢ) et diagramme en escalier (Fᵢ).</p>
          `,
        },
        {
          title: 'Moyenne arithmétique',
          content: `
            <p>$$\\bar{x} = \\frac{1}{n}\\sum x_i = \\frac{465}{40} = 11{,}625 \\approx 11{,}63$$</p>
            <p>En moyenne, la classe est à environ <strong>11,6/20</strong>.</p>
          `,
        },
        {
          title: 'Variance et écart-type (échantillon)',
          content: `
            <p><strong>Méthode examen</strong> — formule de calcul rapide (équivalente) :</p>
            <p>$$S^2 = \\frac{\\sum x_i^2}{n} - \\bar{x}^2$$</p>
            <p>Avec $\\sum x_i = 465$, $\\sum x_i^2 = 5703$, $n = 40$ :</p>
            <p>$$S^2 = \\frac{5703}{40} - \\left(\\frac{465}{40}\\right)^2 = 142{,}575 - 135{,}141 = 7{,}43$$</p>
            <p>Variance <strong>corrigée</strong> (celle demandée au TP) :</p>
            <p>$$\\hat{\\sigma}^2 = \\frac{n}{n-1} \\cdot S^2 = \\frac{40}{39} \\times 7{,}43 \\approx 7{,}63$$</p>
            <p>$$S = \\sqrt{\\hat{\\sigma}^2} \\approx 2{,}76$$</p>
            <p>Les notes s'écartent en moyenne d'environ <strong>± 2,8 points</strong> autour de la moyenne.</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$\\bar{x} \\approx 11{,}63$ · $\\hat{\\sigma}^2 \\approx 7{,}63$ · $S \\approx 2{,}76$</strong></p>',
    },
    {
      id: 'tp1-ex2',
      number: 'Exercice 2',
      title: 'Durée d\'un phénomène (série continue)',
      enonce: `
        <p>On a mesuré à <strong>0,2 secondes près</strong>, la durée d'un certain phénomène au cours de 100 expériences successives. Les résultats sont les suivants :</p>
        <p class="font-mono text-xs leading-relaxed bg-white border border-slate-200 rounded-lg p-3 mt-2">
          20.0 20.4 21.0 21.0 21.0 21.2 21.4 21.4 21.4 21.4 21.6 21.6 21.8 21.8 21.8 21.8 22.0 22.0 22.0 22.0 22.2 22.2 22.2 22.2 22.4 22.4 22.4 22.4 22.4 22.6 22.6 22.6 22.8 22.8 22.8 22.8 22.8 22.8 22.8 22.8 23.0 23.0 23.2 23.2 23.2 23.4 23.4 23.4 23.4 23.4 23.4 23.4 23.4 23.4 23.6 23.6 23.6 23.6 23.6 23.8 23.8 23.8 23.8 23.8 23.8 24.0 24.0 24.0 24.0 24.0 24.0 24.0 24.0 24.0 24.2 24.2 24.2 24.2 24.2 24.2 24.2 24.4 24.4 24.4 24.4 24.6 24.6 24.6 24.6 24.6 24.8 24.8 24.8 25.0 25.2 25.2 25.4 26.0
        </p>
        <p class="mt-3"><strong>a)</strong> Établir les distributions de fréquences groupées et les graphiques correspondants.<br>
        <strong>b)</strong> Calculer la moyenne, la variance et l'écart-type.</p>
      `,
      steps: [
        {
          title: 'Choisir les classes',
          content: `
            <p>Variable <strong>continue</strong> → on regroupe en classes d'amplitude régulière (ex. 0,4 s ou 0,5 s).</p>
            <p>Étendue : de 20,0 à 26,0 s. Exemple de classes : [20 ; 20,4[, [20,4 ; 20,8[, … jusqu'à [25,6 ; 26,0].</p>
            <p>On calcule le <strong>centre de classe</strong> xᵢ pour chaque intervalle.</p>
          `,
        },
        {
          title: 'Moyenne sur classes',
          content: `
            <p>$$\\bar{x} = \\frac{\\sum n_i \\cdot x_i}{n} \\approx 23{,}20 \\text{ secondes}$$</p>
            <p>La durée moyenne du phénomène est d'environ <strong>23,2 s</strong>.</p>
          `,
        },
        {
          title: 'Variance et écart-type',
          content: `
            <p>$$S^2 \\approx 1{,}46 \\quad ; \\quad S \\approx 1{,}21 \\text{ s}$$</p>
            <p>La dispersion est faible : les durées sont concentrées autour de 23 s (histogramme étroit).</p>
            <p><strong>Graphique :</strong> histogramme (aires proportionnelles aux effectifs).</p>
          `,
        },
      ],
      resultat: '<p><strong>$\\bar{x} \\approx 23{,}20$ s · $S \\approx 1{,}21$ s</strong> — série peu dispersée.</p>',
    },
    {
      id: 'tp1-ex3',
      number: 'Exercice 3',
      title: 'Poids des porcs (kg)',
      enonce: `
        <p>Dans une exploitation agricole, on a prélevé un échantillon aléatoire de <strong>100 porcs</strong>. Données de poids (en kg) :</p>
        <p class="font-mono text-xs leading-relaxed bg-white border border-slate-200 rounded-lg p-3 mt-2">
          63 78 75 72 74 68 70 66 76 75 55 79 68 67 70 60 73 69 74 64 80 64 72 70 73 63 71 68 74 68 72 77 72 65 69 70 66 72 67 77 76 74 63 69 68 76 71 58 72 75 70 66 69 76 71 77 70 66 68 82 69 74 68 65 67 63 71 77 62 87 76 61 70 71 84 69 76 72 73 74 75 76 71 75 68 71 64 69 70 64 73 69 72 65 71 73 70 81 65 73
        </p>
        <p class="mt-3"><strong>a)</strong> Établir les distributions de fréquences groupées et les graphiques correspondants.<br>
        <strong>b)</strong> Calculer la moyenne, le mode, la médiane, la variance, l'écart-type et l'écart interquartile.</p>
      `,
      steps: [
        {
          title: 'Tableau groupé',
          content: `
            <p>Classes d'amplitude 5 kg (ex. [55 ; 60[, [60 ; 65[, …, [85 ; 90]).</p>
            <p>Construire l'histogramme et le polygone des fréquences cumulées.</p>
          `,
        },
        {
          title: 'Tendance centrale',
          content: `
            <p><strong>Moyenne :</strong> $\\bar{x} \\approx 70{,}67$ kg</p>
            <p><strong>Médiane :</strong> $\\tilde{x} = 71$ kg (50 % des porcs pèsent moins de 71 kg)</p>
            <p><strong>Mode :</strong> 70 kg (modalité la plus fréquente sur la série brute)</p>
            <p>La moyenne et la médiane sont proches → distribution assez symétrique.</p>
          `,
        },
        {
          title: 'Dispersion',
          content: `
            <p><strong>Variance :</strong> $S^2 \\approx 29{,}27$ → <strong>écart-type :</strong> $S \\approx 5{,}41$ kg</p>
            <p><strong>Quartiles</strong> (série brute) : $Q_1 = 68$ kg, $Q_3 = 74$ kg</p>
            <p><strong>Écart interquartile :</strong> $\\text{EIQ} = Q_3 - Q_1 = 6$ kg</p>
            <p>50 % des porcs ont un poids entre 68 et 74 kg.</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$\\bar{x} \\approx 70{,}67$ · $\\tilde{x} = 71$ · mode = 70 · $S \\approx 5{,}41$ kg · EIQ = 6 kg</strong></p>',
    },
    {
      id: 'tp1-ex4',
      number: 'Exercice 4',
      title: 'Taux d\'hémoglobine (g/L)',
      enonce: `
        <p>On a relevé le taux d'hémoglobine dans le sang (en g/L) chez <strong>59 adultes</strong> présumés en bonne santé (les données marquées de <strong>″</strong> sont celles relevées chez des femmes).</p>
        <p class="font-mono text-xs leading-relaxed bg-white border border-slate-200 rounded-lg p-3 mt-2">
          105″ 110″ 112″ 112″ 118″ 119″ 120″ 120″ 125″ 126″ 127″ 128″ 130″ 132″ 133″ 134″ 135″ 138″ 138″ 138″ 138″ 141 142″ 144 145″ 146 148″ 148″ 148 149 150″ 150 150 151″ 151 153 153 153 154″ 154″ 154 155 156 156 158″ 160 160 160 163 164 164 165 166 168 168 170 172 172 176 179
        </p>
        <p class="mt-3"><strong>a)</strong> Établir les distributions de fréquences groupées et les graphiques correspondants.<br>
        <strong>b)</strong> Calculer la moyenne, la variance et l'écart-type.<br>
        <strong>c)</strong> Représenter la boîte à moustaches.</p>
      `,
      steps: [
        {
          title: 'Classes et graphiques',
          content: `
            <p>Variable continue → classes de 10 g/L (ex. [100 ; 110[, [110 ; 120[, …).</p>
            <p>Histogramme + éventuellement boîte à moustaches pour visualiser la dispersion.</p>
          `,
        },
        {
          title: 'Calculs',
          content: `
            <p>$$\\bar{x} \\approx 145{,}81 \\text{ g/L}$$</p>
            <p>$$S^2 \\approx 325{,}77 \\quad ; \\quad S \\approx 18{,}05 \\text{ g/L}$$</p>
          `,
        },
        {
          title: 'Boîte à moustaches',
          content: `
            <p><strong>Quartiles :</strong> $Q_1 \\approx 133{,}5$ · $Q_2 = 149$ · $Q_3 = 159$ g/L</p>
            <p><strong>Min :</strong> 105 · <strong>Max :</strong> 179 g/L</p>
            <p>La boîte (Q₁ → Q₃) contient 50 % des valeurs centrales. Les moustaches s'étendent jusqu'aux valeurs extrêmes (ou jusqu'à 1,5×EIQ si on exclut les aberrantes).</p>
            <p>$\\text{EIQ} = 159 - 133{,}5 = 25{,}5$ g/L</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$\\bar{x} \\approx 145{,}8$ g/L · $S \\approx 18{,}1$ g/L · $Q_1 \\approx 133{,}5$ · $Q_3 \\approx 159$</strong></p>',
    },
    {
      id: 'tp1-ex5',
      number: 'Exercice 5',
      title: 'Poids d\'animaux — série déjà groupée',
      enonce: `
        <p>On dispose du poids en kg d'un échantillon de <strong>200 bêtes</strong> d'une variété d'animaux adultes.</p>
        <table class="text-sm mt-2 mb-3 border-collapse">
          <thead><tr><th class="border border-slate-300 px-3 py-1.5 bg-slate-100">Classes en kg</th><th class="border border-slate-300 px-3 py-1.5 bg-slate-100">Effectifs</th></tr></thead>
          <tbody>
            <tr><td class="border border-slate-300 px-3 py-1">[55 ; 65[</td><td class="border border-slate-300 px-3 py-1">10</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[65 ; 75[</td><td class="border border-slate-300 px-3 py-1">23</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[75 ; 77[</td><td class="border border-slate-300 px-3 py-1">21</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[77 ; 79[</td><td class="border border-slate-300 px-3 py-1">28</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[79 ; 81[</td><td class="border border-slate-300 px-3 py-1">34</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[81 ; 83[</td><td class="border border-slate-300 px-3 py-1">28</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[83 ; 85[</td><td class="border border-slate-300 px-3 py-1">25</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[85 ; 95[</td><td class="border border-slate-300 px-3 py-1">23</td></tr>
            <tr><td class="border border-slate-300 px-3 py-1">[95 ; 105[</td><td class="border border-slate-300 px-3 py-1">8</td></tr>
          </tbody>
        </table>
        <p><strong>a)</strong> Calculer les 3 quartiles puis l'écart interquartile.<br>
        <strong>b)</strong> Calculer la moyenne et l'écart-type.</p>
      `,
      steps: [
        {
          title: 'Moyenne sur classes',
          content: `
            <p>On utilise le centre de classe $x_i = \\frac{\\text{borne inf} + \\text{borne sup}}{2}$ :</p>
            <p>$$\\bar{x} = \\frac{\\sum n_i x_i}{200} \\approx 79{,}88 \\text{ kg}$$</p>
          `,
        },
        {
          title: 'Écart-type',
          content: `
            <p>$$S \\approx 7{,}99 \\text{ kg}$$</p>
            <p>(calcul sur centres de classes — méthode du cours pour séries groupées)</p>
          `,
        },
        {
          title: 'Quartiles par interpolation',
          content: `
            <p>On localise la classe où $N_i \\geq n/4$, $n/2$ et $3n/4$, puis on interpole :</p>
            <p>$$Q_1 \\approx 76{,}6 \\text{ kg} \\quad ; \\quad Q_2 = 80{,}0 \\text{ kg} \\quad ; \\quad Q_3 \\approx 83{,}4 \\text{ kg}$$</p>
            <p>$$\\text{EIQ} = Q_3 - Q_1 \\approx 6{,}8 \\text{ kg}$$</p>
          `,
        },
      ],
      resultat:
        '<p><strong>$\\bar{x} \\approx 79{,}9$ kg · $S \\approx 8{,}0$ kg · $Q_1 \\approx 76{,}6$ · $Q_2 = 80$ · $Q_3 \\approx 83{,}4$ · EIQ $\\approx 6{,}8$ kg</strong></p>',
    },
  ],
}
