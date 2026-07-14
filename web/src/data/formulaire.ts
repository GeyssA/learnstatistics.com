export interface SymbolDef {
  symbol: string
  lecture: string
  role: string
  symbolLatex?: string
}

export interface FormulaEntry {
  id: string
  title: string
  latex: string
  category?: string
  lecture: string
  comprehension: string
  utilisation: string
  symbols: SymbolDef[]
  note?: string
  exemple?: string
  exempleHtml?: string
  compareNote?: string
  conditions?: string[]
  piege?: string
}

export interface FormulaChapter {
  id: string
  number: string
  title: string
  intro: string
  formulas: FormulaEntry[]
}

export const symbolesCommuns: SymbolDef[] = [
  { symbol: 'n', lecture: '« enn »', role: 'Taille de l\'échantillon (nombre d\'observations)' },
  { symbol: 'N', lecture: '« grand enn »', role: 'Taille de la population (parfois effectif total)' },
  { symbol: 'p', lecture: '« pé »', role: 'Nombre de modalités distinctes, ou probabilité de succès selon le contexte' },
  { symbol: 'xᵢ', lecture: '« x indice i »', role: 'La i-ème valeur observée de la variable X' },
  { symbol: 'x̄', lecture: '« x barre »', role: 'Moyenne arithmétique de l\'échantillon' },
  { symbol: 'μ', lecture: '« miu »', role: 'Moyenne théorique de la population (souvent inconnue)' },
  { symbol: 'S²', lecture: '« S au carré »', role: 'Variance calculée sur l\'échantillon' },
  { symbol: 'σ²', lecture: '« sigma au carré »', role: 'Variance de la population' },
  { symbol: 'Σ', lecture: '« sigma majuscule » / « somme »', role: 'Symbole de sommation : on additionne toutes les valeurs de l\'indice' },
  { symbol: 'P(A)', lecture: '« probabilité de A »', role: 'Chance que l\'événement A se réalise, entre 0 et 1' },
  { symbol: 'α', lecture: '« alpha »', role: 'Seuil de risque (ex. 0,05 = 5 %) — probabilité de rejeter H₀ à tort' },
  { symbol: 'z', lecture: '« zé »', role: 'Valeur lue dans la table de la loi normale centrée réduite' },
  { symbol: 't', lecture: '« té »', role: 'Valeur lue dans la table de Student (quand σ est inconnu et n petit)' },
]

export const formulaireChapters: FormulaChapter[] = [
  {
    id: 'desc-1d',
    number: '1',
    title: 'Statistique descriptive à une dimension',
    intro:
      'Résumer et décrire un échantillon : où se situent les valeurs (tendance centrale) et comment elles sont dispersées. Base de tout le cours.',
    formulas: [
      {
        id: 'moyenne-serie',
        title: 'Moyenne arithmétique — série brute',
        category: 'Tendance centrale',
        latex: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        lecture:
          '« x barre égale un sur n, fois la somme de toutes les x indice i ». On additionne toutes les valeurs observées, puis on divise par le nombre d\'observations.',
        comprehension:
          'La moyenne est le « centre de gravité » des données. Elle représente la valeur qui remplacerait toutes les observations si on n\'en gardait qu\'une seule. Attention : très sensible aux valeurs extrêmes (ex. un animal très lourd tire la moyenne vers le haut).',
        utilisation:
          'Variable quantitative (poids, taille, notes, durée…). Série non groupée : vous avez la liste de toutes les valeurs. Bon estimateur de μ si l\'échantillon est représentatif.',
        symbols: [
          { symbol: 'x̄', lecture: '« x barre »', role: 'Moyenne de l\'échantillon' },
          { symbol: 'n', lecture: '« enn »', role: 'Nombre total d\'observations' },
          { symbol: 'xᵢ', lecture: '« x indice i »', role: 'Valeur de la i-ème observation (i = 1, 2, …, n)' },
          { symbol: 'Σ', lecture: '« somme »', role: 'Additionner du i=1 au i=n' },
        ],
        exemple: 'Notes : 10, 12, 14, 8 → x̄ = (10+12+14+8)/4 = 11',
        compareNote:
          'À ne pas confondre avec la médiane ni le mode. La moyenne utilise toutes les valeurs ; la médiane ne regarde que le rang ; le mode ne regarde que la fréquence.',
        piege: 'Une seule valeur extrême (ex. note 20/20 ou animal très lourd) peut déplacer fortement x̄.',
      },
      {
        id: 'moyenne-classes',
        title: 'Moyenne — séries groupées en classes',
        category: 'Tendance centrale',
        latex: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{p} n_i \\cdot c_i',
        lecture:
          '« x barre égale un sur n, fois la somme des effectifs fois les centres de classe ».',
        comprehension:
          'On remplace chaque classe par son centre cᵢ (milieu de l\'intervalle), pondéré par l\'effectif. Hypothèse : équirépartition dans chaque classe.',
        utilisation: 'Histogrammes, poids des porcs/labradors, durées groupées (TP1 ex. 2 et 3).',
        symbols: [
          { symbol: 'cᵢ', lecture: '« c indice i »', role: 'Centre de la classe i (milieu de l\'intervalle)' },
          { symbol: 'nᵢ', lecture: '« n indice i »', role: 'Effectif de la classe i' },
        ],
      },
      {
        id: 'moyenne-freq',
        title: 'Moyenne — distribution de fréquences',
        category: 'Tendance centrale',
        latex: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{p} n_i \\cdot x_i',
        lecture:
          '« x barre égale un sur n, fois la somme des effectifs n indice i fois les modalités x indice i ». Chaque modalité est pondérée par son effectif.',
        comprehension:
          'Quand les données sont déjà regroupées dans un tableau (modalité → effectif), on multiplie chaque valeur par son nombre d\'occurrences avant de diviser par n. Même résultat que la formule brute, mais plus rapide avec un tableau.',
        utilisation:
          'Tableau de fréquences non groupées (ex. nombre de poussins par poule). Indispensable quand vous n\'avez pas la liste brute mais le tableau du TP.',
        symbols: [
          { symbol: 'nᵢ', lecture: '« n indice i »', role: 'Effectif (nombre d\'observations) de la modalité i' },
          { symbol: 'xᵢ', lecture: '« x indice i »', role: 'Valeur de la modalité i' },
          { symbol: 'n', lecture: '« enn »', role: 'Σ nᵢ = effectif total' },
        ],
        exemple: '2 poules avec 1 poussin, 9 avec 2 poussins… → x̄ = Σ(nᵢ×i)/40',
      },
      {
        id: 'mediane-non-groupee',
        title: 'Médiane — série non groupée',
        category: 'Tendance centrale',
        latex: 'n \\text{ impair : } \\tilde{x} = x_{\\frac{n+1}{2}} \\quad ; \\quad n \\text{ pair : } \\tilde{x} = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}',
        lecture:
          'Si n est impair : « x tilde égale l\'observation qui occupe la position centrale après tri ». Si n est pair : « x tilde égale la moyenne des deux observations centrales ».',
        comprehension:
          'La médiane partage l\'échantillon en deux moitiés égales (50 % en dessous, 50 % au-dessus). Elle résiste aux valeurs aberrantes : un millionnaire dans un village ne change presque pas la médiane des revenus.',
        utilisation:
          'Distributions asymétriques, présence de valeurs extrêmes, ou quand on veut une valeur « typique » au sens du rang. Préférer la médiane à la moyenne pour des revenus, des durées de survie, etc.',
        symbols: [
          { symbol: 'x̃', lecture: '« x tilde »', role: 'Médiane de la série' },
          { symbol: 'x₍ₖ₎', lecture: '« x entre parenthèses k »', role: 'k-ème valeur de la série triée par ordre croissant' },
        ],
        exemple: '9, 8, 7, 3, 4 → tri : 3,4,7,8,9 → n=5 impair → x̃ = 7',
        compareNote:
          'Contrairement à x̄, la médiane ne « voit » pas l\'ampleur des valeurs extrêmes, seulement leur position dans le classement. Si la série est symétrique : x̄ ≈ x̃.',
        piege: 'Ne pas oublier de trier la série avant de chercher la valeur centrale.',
      },
      {
        id: 'mode',
        title: 'Mode — valeur la plus fréquente',
        category: 'Tendance centrale',
        latex: '\\text{mode} = \\text{modalité de plus grande fréquence } n_i',
        lecture:
          '« Le mode est la valeur (ou la classe) qui apparaît le plus souvent dans l\'échantillon ».',
        comprehension:
          'Seule mesure adaptée aux variables qualitatives. Une série peut avoir 0 mode (toutes modalités équiprobables), 1 mode (unimodale) ou plusieurs modes (bimodale…). En classes groupées : la classe modale a le plus grand effectif.',
        utilisation:
          'Typicité d\'une catégorie (race la plus fréquente, note la plus souvent obtenue). Complément de x̄ et x̃ pour décrire une distribution.',
        symbols: [
          { symbol: 'nᵢ max', lecture: '« n indice i maximum »', role: 'Plus grand effectif du tableau' },
        ],
        exemple: 'Poussins par poule : la modalité 3 et 4 ont chacune 12 poules → série bimodale (2 modes).',
        compareNote: 'Le mode ne tient pas compte des autres valeurs. x̄ et x̃ résument tout l\'échantillon ; le mode pointe vers le « pic ».',
      },
      {
        id: 'mediane-groupee',
        title: 'Médiane — classes groupées',
        category: 'Tendance centrale',
        latex: "\\tilde{x}' = x_i' + \\frac{0{,}50 - F_{i-1}}{f_i} \\cdot \\Delta",
        lecture:
          '« x tilde prime égale la borne inférieure de la classe médiane, plus la fraction (0,50 moins la fréquence cumulée précédente) divisée par la fréquence de la classe, le tout multiplié par l\'amplitude de la classe ».',
        comprehension:
          'On repère la classe où la fréquence cumulée dépasse 50 %, puis on interpole linéairement dans cette classe (hypothèse d\'équirépartition). C\'est une estimation, pas une valeur exacte.',
        utilisation:
          'Histogrammes, variables continues regroupées en classes (poids des porcs, durées, hémoglobine). On lit Fᵢ sur le diagramme en escalier ou le tableau.',
        symbols: [
          { symbol: 'x\'ᵢ', lecture: '« x prime indice i »', role: 'Borne inférieure de la classe médiane' },
          { symbol: 'Fᵢ₋₁', lecture: '« F indice i moins un »', role: 'Fréquence cumulée de la classe précédente' },
          { symbol: 'fᵢ', lecture: '« f indice i »', role: 'Fréquence relative de la classe médiane' },
          { symbol: 'Δ', lecture: '« delta »', role: 'Amplitude (largeur) de la classe' },
        ],
        exempleHtml: `
          <div class="exemple-intro">
            <strong>Situation :</strong> on a pesé <strong>100 chiens</strong> et regroupé les poids en classes de 10 kg.
            On veut la <strong>médiane</strong> : la valeur qui laisse <strong>50 % des chiens en dessous</strong> et 50 % au-dessus.
          </div>

          <div class="exemple-step">
            <div class="exemple-step-num">1</div>
            <div class="exemple-step-body">
              <p><strong>Construire le tableau avec les effectifs cumulés</strong></p>
              <p>L'effectif cumulé Nᵢ compte combien de chiens pèsent <em>moins</em> que la borne supérieure de chaque classe.</p>
              <div class="exemple-table-wrap">
                <table class="exemple-table">
                  <thead>
                    <tr>
                      <th>Classe (kg)</th>
                      <th>Effectif nᵢ</th>
                      <th>Effectif cumulé Nᵢ</th>
                      <th>Fréquence cumulée Fᵢ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>[40 ; 50[</td><td>5</td><td>5</td><td>0,05</td></tr>
                    <tr><td>[50 ; 60[</td><td>15</td><td>20</td><td>0,20</td></tr>
                    <tr><td>[60 ; 70[</td><td>25</td><td>45</td><td>0,45</td></tr>
                    <tr class="row-highlight">
                      <td>[70 ; 80[ <span class="exemple-badge">classe médiane</span></td>
                      <td>30</td><td>75</td><td>0,75</td>
                    </tr>
                    <tr><td>[80 ; 90[</td><td>15</td><td>90</td><td>0,90</td></tr>
                    <tr><td>[90 ; 100[</td><td>10</td><td>100</td><td>1,00</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="exemple-step">
            <div class="exemple-step-num">2</div>
            <div class="exemple-step-body">
              <p><strong>Trouver la position de la médiane</strong></p>
              <p>La médiane correspond au chien « au milieu » de la série :</p>
              <div class="exemple-calc">
                <span class="calc-line">position = n ÷ 2 = 100 ÷ 2 = <strong>50</strong></span>
              </div>
              <p>On cherche donc la valeur du <strong>50<sup>e</sup> chien</strong> quand on les classe du plus léger au plus lourd.</p>
            </div>
          </div>

          <div class="exemple-step">
            <div class="exemple-step-num">3</div>
            <div class="exemple-step-body">
              <p><strong>Repérer la classe médiane</strong></p>
              <p>On lit le tableau de haut en bas :</p>
              <ul>
                <li>Après [60 ; 70[ : seulement <strong>45 chiens</strong> → pas encore 50</li>
                <li>Dans [70 ; 80[ : on passe de <strong>45 à 75</strong> → le 50<sup>e</sup> chien est <strong>dans cette classe</strong></li>
              </ul>
              <p>La classe médiane est donc <strong>[70 ; 80[</strong>.</p>
            </div>
          </div>

          <div class="exemple-step">
            <div class="exemple-step-num">4</div>
            <div class="exemple-step-body">
              <p><strong>Lire les valeurs pour la formule</strong></p>
              <p>Dans la classe [70 ; 80[, on note :</p>
              <div class="exemple-values">
                <div class="exemple-value-card"><span class="label">x'ᵢ — borne inférieure</span><span class="value">70 kg</span></div>
                <div class="exemple-value-card"><span class="label">Fᵢ₋₁ — cumul avant</span><span class="value">0,45</span></div>
                <div class="exemple-value-card"><span class="label">fᵢ — fréq. de la classe</span><span class="value">0,30</span></div>
                <div class="exemple-value-card"><span class="label">Δ — largeur</span><span class="value">10 kg</span></div>
              </div>
              <div class="exemple-astuce">
                <strong>Astuce :</strong> pour passer des effectifs aux fréquences, on divise par le total
                (n = 100) : Fᵢ₋₁ = 45 ÷ 100 = <strong>0,45</strong> et fᵢ = 30 ÷ 100 = <strong>0,30</strong>.
              </div>
            </div>
          </div>

          <div class="exemple-step">
            <div class="exemple-step-num">5</div>
            <div class="exemple-step-body">
              <p><strong>Appliquer la formule</strong></p>
              <p>On « avance » dans la classe à partir de 70 kg, proportionnellement à la fraction de chiens qu'il nous manque pour atteindre la position 50 :</p>
              <div class="exemple-calc">
                <span class="calc-line">x̃ = x'ᵢ + (0,50 − Fᵢ₋₁) ÷ fᵢ × Δ</span>
                <span class="calc-line">x̃ = 70 + (0,50 − 0,45) ÷ 0,30 × 10</span>
                <span class="calc-line">x̃ = 70 + 0,05 ÷ 0,30 × 10</span>
                <span class="calc-line">x̃ = 70 + 0,1667 × 10</span>
                <span class="calc-line result">x̃ = 70 + 1,67 ≈ <strong>71,7 kg</strong></span>
              </div>
              <div class="exemple-intuition">
                <strong>Intuition :</strong> il nous manque 5 chiens pour atteindre la position 50 (on en avait 45, il en faut 50).
                Ces 5 chiens représentent <strong>5 ÷ 30 = 1/6</strong> de la classe [70 ; 80[.
                On parcourt donc <strong>1/6 × 10 = 1,67 kg</strong> au-dessus de 70.
              </div>
            </div>
          </div>

          <div class="exemple-result">
            Résultat : environ <strong>50 % des chiens pèsent moins de 71,7 kg</strong> (médiane x̃ ≈ 71,7 kg).
          </div>
        `,
        piege:
          'Fᵢ₋₁ et fᵢ sont des fréquences relatives (entre 0 et 1), pas des effectifs. Si tu travailles avec nᵢ et Nᵢ₋₁, la formule équivalente est x̃ = x\'ᵢ + (n/2 − Nᵢ₋₁)/nᵢ × Δ.',
      },
      {
        id: 'variance-serie',
        title: 'Variance — échantillon (non corrigée)',
        category: 'Dispersion',
        latex: 'S^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        lecture:
          '« S au carré égale un sur n, fois la somme des carrés des écarts à la moyenne ». Chaque écart (xᵢ − x̄) est mis au carré pour éviter les compensations +/−, puis on fait la moyenne.',
        comprehension:
          'Mesure la dispersion autour de la moyenne. S² = 0 si toutes les valeurs sont identiques. Plus S² est grand, plus les données sont étalées. Les écarts au carré pénalisent fortement les valeurs lointaines.',
        utilisation:
          'Calcul direct sur une série. En biostat, on utilise souvent la version corrigée pour estimer σ². Voir la fiche « formule de calcul rapide » pour les calculs à l\'examen.',
        symbols: [
          { symbol: 'S²', lecture: '« S au carré »', role: 'Variance de l\'échantillon' },
          { symbol: '(xᵢ − x̄)²', lecture: '« écart à la moyenne, au carré »', role: 'Contribution de chaque observation à la dispersion' },
        ],
      },
      {
        id: 'variance-calcul-rapide',
        title: 'Variance — formule de calcul rapide (examen)',
        category: 'Dispersion',
        latex:
          'S^2 = \\frac{\\sum x_i^2}{n} - \\left(\\frac{\\sum x_i}{n}\\right)^2 = \\frac{\\sum x_i^2}{n} - \\bar{x}^2',
        lecture:
          '« S au carré égale la somme des carrés divisée par n, moins le carré de la moyenne ». Même résultat que la définition avec les écarts, mais plus rapide à la calculatrice.',
        comprehension:
          'On évite de calculer chaque (xᵢ − x̄)² séparément. Il suffit de connaître Σxᵢ (pour x̄) et Σxᵢ² (somme des valeurs au carré). Très pratique sur une série de 20 à 40 notes au TP ou à l\'examen.',
        utilisation:
          'TP1 (notes, porcs…), tout exercice demandant S² sur une série brute. Puis passer à la version corrigée : σ̂² = (n/(n−1))·S² si n < 30.',
        symbols: [
          { symbol: 'Σxᵢ²', lecture: '« somme des x indice i au carré »', role: 'Somme des carrés des observations' },
          { symbol: 'Σxᵢ', lecture: '« somme des x indice i »', role: 'Somme des observations (pour calculer x̄)' },
          { symbol: 'x̄²', lecture: '« x barre au carré »', role: 'Carré de la moyenne — ne pas confondre avec Σxᵢ²/n' },
        ],
        compareNote:
          'Σxᵢ²/n est la « moyenne des carrés » ; (Σxᵢ/n)² = x̄² est le « carré de la moyenne ». Ce sont deux quantités différentes.',
        exemple:
          'Notes : Σxᵢ = 465, Σxᵢ² = 5703, n = 40 → S² = 5703/40 − (465/40)² ≈ 7,43 (non corrigée). Corrigée : ×40/39 ≈ 7,63.',
        piege: 'Ne pas oublier de diviser Σxᵢ² par n (et non par n−1) dans cette formule — la correction n/(n−1) s\'applique après. Variante directe corrigée : σ̂² = [Σxᵢ² − (Σxᵢ)²/n] / (n−1).',
      },
      {
        id: 'variance-corrigee',
        title: 'Variance — estimation population (corrigée)',
        category: 'Dispersion',
        latex: '\\hat{\\sigma}^2 = \\frac{n}{n-1} \\cdot S^2',
        lecture:
          '« sigma chapeau au carré égale n sur n moins un, fois S au carré ». On corrige le biais de sous-estimation quand on estime σ² à partir d\'un petit échantillon.',
        comprehension:
          'Diviser par (n−1) au lieu de n donne un estimateur sans biais de σ². Pour n ≥ 30, la correction est négligeable (n/(n−1) ≈ 1). Pour n < 30, toujours utiliser la version corrigée dans les TPs.',
        utilisation:
          'Estimation de la variance population à partir d\'un échantillon de taille modeste. C\'est la formule à utiliser pour les IC et tests quand σ est inconnu.',
        symbols: [
          { symbol: 'σ̂²', lecture: '« sigma chapeau au carré »', role: 'Estimateur corrigé de la variance population' },
          { symbol: 'n−1', lecture: '« enn moins un »', role: 'Degrés de liberté — une information « perdue » car on a estimé x̄' },
        ],
        note: 'Si n ≥ 30, on peut approximer σ̂² ≈ S².',
      },
      {
        id: 'ecart-type',
        title: 'Écart-type',
        category: 'Dispersion',
        latex: 'S = \\sqrt{S^2} \\quad ; \\quad \\hat{\\sigma} = \\sqrt{\\hat{\\sigma}^2}',
        lecture: '« S égale racine carrée de S au carré ». On repasse dans l\'unité d\'origine (kg, cm, g/L…).',
        comprehension:
          'L\'écart-type exprime la dispersion dans la même unité que la variable. Interprétation concrète si loi normale : ~68 % des valeurs dans [x̄−S ; x̄+S], ~95 % dans [x̄−2S ; x̄+2S].',
        utilisation:
          'Comparer des dispersions, construire des IC, standardiser (z-score). Toujours accompagner la moyenne d\'un écart-type en biostat.',
        symbols: [
          { symbol: 'S', lecture: '« S »', role: 'Écart-type échantillon' },
          { symbol: 'σ̂', lecture: '« sigma chapeau »', role: 'Estimateur corrigé de l\'écart-type population' },
        ],
      },
      {
        id: 'cv',
        title: 'Coefficient de variation',
        category: 'Dispersion',
        latex: 'CV = 100 \\cdot \\frac{S}{\\bar{x}}',
        lecture: '« C V égale cent fois S divisé par x barre ». Exprimé en pourcentage.',
        comprehension:
          'Mesure la dispersion relative à la moyenne. Permet de comparer deux séries de unités différentes (ex. poids en kg vs taille en cm). CV élevé = forte variabilité relative.',
        utilisation:
          'Comparer la variabilité entre populations ou mesures de natures différentes. Inutilisable si x̄ ≈ 0.',
        symbols: [
          { symbol: 'CV', lecture: '« C V »', role: 'Coefficient de variation (en %)' },
        ],
      },
      {
        id: 'quartiles-eiq',
        title: 'Quartiles & écart interquartile',
        category: 'Dispersion',
        latex: 'Q_1 \\text{ à 25\\%} \\quad ; \\quad Q_3 \\text{ à 75\\%} \\quad ; \\quad \\text{EIQ} = Q_3 - Q_1',
        lecture:
          '« Q un est la valeur au 25e centile, Q trois au 75e centile, écart interquartile égale Q trois moins Q un ». L\'EIQ contient les 50 % centraux des données.',
        comprehension:
          'Les quartiles délimitent la « boîte » de la boîte à moustaches. L\'EIQ mesure la dispersion du cœur de la distribution, sans les extrêmes. Robuste face aux valeurs aberrantes.',
        utilisation:
          'Boîtes à moustaches (TP1 ex. hémoglobine), détection de valeurs atypiques, comparaison de distributions. Q₂ = médiane.',
        symbols: [
          { symbol: 'Q₁', lecture: '« Q un »', role: 'Premier quartile (25 % des valeurs en dessous)' },
          { symbol: 'Q₃', lecture: '« Q trois »', role: 'Troisième quartile (75 % des valeurs en dessous)' },
          { symbol: 'EIQ', lecture: '« écart interquartile »', role: 'Largeur de l\'intervalle interquartile' },
        ],
      },
    ],
  },
  {
    id: 'desc-2d',
    number: '2',
    title: 'Statistique descriptive à deux dimensions',
    intro:
      'Étudier le lien entre deux variables mesurées sur les mêmes individus (ex. poids et tension, dose et réponse).',
    formulas: [
      {
        id: 'covariance',
        title: 'Covariance',
        latex: '\\text{cov}(x,y) = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})',
        lecture:
          '« covariance de x et y égale un sur n, fois la somme des produits des écarts à la moyenne de x et de y ».',
        comprehension:
          'cov > 0 : quand x augmente, y tend à augmenter (relation positive). cov < 0 : relation négative. cov ≈ 0 : pas de liaison linéaire. Dépend des unités — pas comparable entre études.',
        utilisation:
          'Première étape avant la corrélation et la régression. Deux variables quantitatives mesurées sur les mêmes n individus.',
        symbols: [
          { symbol: 'cov(x,y)', lecture: '« covariance de x et y »', role: 'Mesure de liaison linéaire (non normalisée)' },
          { symbol: 'ȳ', lecture: '« y barre »', role: 'Moyenne de la variable Y' },
        ],
      },
      {
        id: 'correlation',
        title: 'Coefficient de corrélation r',
        latex: 'r = \\frac{\\text{cov}(x,y)}{S_x \\cdot S_y}',
        lecture: '« r égale la covariance divisée par le produit des écarts-types de x et de y ».',
        comprehension:
          'r est sans unité, entre −1 et +1. r = +1 : relation linéaire parfaite positive. r = −1 : parfaite négative. r ≈ 0 : pas de relation linéaire. r² = proportion de variance expliquée.',
        utilisation:
          'Évaluer la force d\'un lien linéaire (ex. taille vs poids). Attention : corrélation ≠ causalité.',
        symbols: [
          { symbol: 'r', lecture: '« r »', role: 'Coefficient de corrélation de Pearson (−1 à +1)' },
          { symbol: 'Sₓ, Sᵧ', lecture: '« S x, S y »', role: 'Écarts-types respectifs de X et Y' },
        ],
      },
      {
        id: 'r2',
        title: 'Coefficient de détermination',
        latex: 'R^2 = r^2',
        lecture: '« R au carré égale r au carré ».',
        comprehension:
          'R² indique quel pourcentage de la variabilité de Y est expliqué par X. Ex. R² = 0,64 → 64 % de la variance de Y est liée linéairement à X ; 36 % reste inexpliqué.',
        utilisation:
          'Interpréter la qualité d\'un modèle de régression. Complément indispensable au coefficient r.',
        symbols: [
          { symbol: 'R²', lecture: '« R au carré »', role: 'Proportion de variance expliquée (entre 0 et 1)' },
        ],
      },
      {
        id: 'regression-yx',
        title: 'Droite de régression Y/X',
        latex: 'y = a + b \\cdot x \\quad \\text{avec} \\quad b = \\frac{\\text{cov}(x,y)}{S_x^2}',
        lecture:
          '« y égale a plus b fois x, où b égale la covariance sur la variance de x ». La droite qui prédit Y à partir de X.',
        comprehension:
          'b est la pente : de combien Y change quand X augmente de 1 unité. a est l\'ordonnée à l\'origine. Minimise les écarts verticaux (moindres carrés). Variance résiduelle = Sᵧ²(1−r²).',
        utilisation:
          'Prédire une variable à partir d\'une autre (ex. prédire le poids à partir de la taille). Choix Y/X quand X est la variable explicative.',
        symbols: [
          { symbol: 'b', lecture: '« bé »', role: 'Pente de la droite de régression' },
          { symbol: 'a', lecture: '« a »', role: 'Ordonnée à l\'origine (ȳ − b·x̄)' },
        ],
      },
    ],
  },
  {
    id: 'probabilites',
    number: '3',
    title: 'Éléments de calcul des probabilités',
    intro:
      'Manipuler les chances d\'événements, les combiner (union, intersection) et modéliser l\'incertitude avec des variables aléatoires.',
    formulas: [
      {
        id: 'union-incompatibles',
        title: 'Union — événements incompatibles',
        latex: 'P(A \\cup B) = P(A) + P(B)',
        lecture: '« Probabilité de A ou B égale probabilité de A plus probabilité de B » (si A et B ne peuvent pas arriver ensemble).',
        comprehension:
          'Deux événements incompatibles n\'ont pas d\'issue commune. Ex. tirer un as ET un roi en un seul tirage. On additionne simplement les probabilités.',
        utilisation: 'Tirages exclusifs, catégories disjointes (homme/femme si un seul sexe par individu).',
        symbols: [
          { symbol: 'A ∪ B', lecture: '« A union B »', role: '« A ou B » — au moins l\'un des deux' },
        ],
      },
      {
        id: 'union-compatibles',
        title: 'Union — événements compatibles',
        latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        lecture:
          '« Probabilité de A ou B égale P(A) + P(B) moins P(A et B) ». On retire le chevauchement pour ne pas compter deux fois.',
        comprehension:
          'Si A et B peuvent coexister, l\'intersection est comptée dans les deux termes : il faut la soustraire une fois.',
        utilisation: 'Cartes (cœur ou as), pathologies multiples, événements non exclusifs.',
        symbols: [
          { symbol: 'A ∩ B', lecture: '« A inter B »', role: '« A et B » — les deux en même temps' },
        ],
      },
      {
        id: 'intersection-independants',
        title: 'Intersection — événements indépendants',
        latex: 'P(A \\cap B) = P(A) \\cdot P(B)',
        lecture: '« Probabilité de A et B égale P(A) fois P(B) » si la réalisation de A n\'influence pas B.',
        comprehension:
          'Indépendance = information sur A ne change pas P(B). Ex. deux dés lancés séparément, tirages avec remise.',
        utilisation: 'Épreuves répétées indépendantes, base de la loi binomiale.',
        symbols: [],
      },
      {
        id: 'conditionnelle',
        title: 'Probabilité conditionnelle',
        latex: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)}',
        lecture: '« P de A sachant B égale P(A et B) divisé par P(B) ». On restreint l\'univers aux cas où B est vrai.',
        comprehension:
          'On recalcule la probabilité de A dans le sous-ensemble où B s\'est réalisé. Fondement de Bayes et des tests diagnostiques.',
        utilisation: 'Tests médicaux, arbres de probabilités, « sachant que… » du TP3.',
        symbols: [
          { symbol: 'P(A|B)', lecture: '« P de A sachant B »', role: 'Probabilité de A dans l\'univers conditionnel B' },
        ],
        exemple: 'P(homme|daltonien) = P(homme ∩ daltonien) / P(daltonien)',
      },
      {
        id: 'prob-totales',
        title: 'Loi des probabilités totales',
        latex: 'P(B) = P(B|A) \\cdot P(A) + P(B|\\bar{A}) \\cdot P(\\bar{A})',
        lecture:
          '« P de B égale la somme des probabilités de B sachant A fois P(A), et B sachant non-A fois P(non-A) ».',
        comprehension:
          'On décompose B en deux chemins disjoints passant par A et son complémentaire. Sert de dénominateur dans Bayes.',
        utilisation: 'Calculer P(test+) avant d\'appliquer Bayes. Tubes défectueux TP3 Q7.',
        symbols: [
          { symbol: 'Ā', lecture: '« A barre »', role: 'Complémentaire de A — tout ce qui n\'est pas A' },
        ],
      },
      {
        id: 'bayes',
        title: 'Formule de Bayes',
        latex: 'P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}',
        lecture:
          '« P de A sachant B égale P de B sachant A fois P(A), le tout divisé par P(B) » — on inverse la condition.',
        comprehension:
          'Passe de la vraisemblance P(B|A) à la probabilité a posteriori P(A|B). Clé des tests diagnostiques : sensibilité → valeur prédictive.',
        utilisation: 'P(malade|test+), P(société A|défectueux), épidémie bovine, coyotes TP4.',
        symbols: [
          { symbol: 'P(B|A)', lecture: '« P de B sachant A »', role: 'Vraisemblance (ex. sensibilité du test)' },
          { symbol: 'P(A)', lecture: '« P de A »', role: 'Prévalence — probabilité avant observation' },
        ],
        exemple: 'P(malade|test+) avec P(malade)=2%, P(test+|malade)=85%, P(test+)=0,078',
      },
      {
        id: 'esperance-var',
        title: 'Espérance & variance d\'une V.A.',
        latex: 'E(X) = \\sum_i x_i \\cdot P(X=x_i) \\quad ; \\quad \\text{Var}(X) = \\sum_i (x_i - E(X))^2 \\cdot P(X=x_i)',
        lecture:
          '« Espérance de X égale la somme des valeurs pondérées par leurs probabilités ». « Variance égale la somme des écarts à l\'espérance au carré, pondérés ».',
        comprehension:
          'E(X) = gain moyen à long terme, « centre » de la loi. Var(X) = dispersion autour de cette moyenne théorique. Pour une V.A. continue, la somme devient une intégrale.',
        utilisation: 'Calculer le gain espéré d\'un jeu (TP4), comparer des stratégies, propriétés des lois.',
        symbols: [
          { symbol: 'E(X)', lecture: '« espérance de X »', role: 'Moyenne théorique de la variable aléatoire' },
          { symbol: 'Var(X)', lecture: '« variance de X »', role: 'Dispersion théorique' },
        ],
      },
      {
        id: 'binomiale',
        title: 'Loi binomiale B(n, p) — probabilité P(X = k)',
        category: 'Loi binomiale',
        latex: 'P(X=k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}',
        lecture:
          '« P de X égale k égale combinaison de n parmi k, fois p puissance k, fois un moins p puissance n moins k ».',
        comprehension:
          'X compte le nombre de succès sur n épreuves identiques. Chaque épreuve est un succès (probabilité p) ou un échec (probabilité q = 1−p). Le coefficient C(n,k) compte tous les chemins possibles pour obtenir exactement k succès parmi n essais. La courbe est symétrique si p = 0,5, étalée à droite si p est petit.',
        utilisation:
          'Chiots avec caractère héréditaire (TP4), tests positifs, feux tricolores, QCM au hasard, tirages avec remise dans une grande population.',
        symbols: [
          { symbol: 'n', lecture: '« enn »', role: 'Nombre d\'épreuves (fixé à l\'avance)' },
          { symbol: 'p', lecture: '« pé »', role: 'Probabilité de succès à chaque épreuve' },
          { symbol: 'q', lecture: '« q »', role: '1 − p, probabilité d\'échec' },
          { symbol: 'C(n,k)', lecture: '« combinaison n parmi k »', role: 'Nombre de façons de choisir k succès parmi n positions' },
          { symbol: 'k', lecture: '« ké »', role: 'Nombre de succès observés (0, 1, …, n)' },
        ],
        conditions: [
          'n est fixé (nombre d\'épreuves connu)',
          'Chaque épreuve n\'a que 2 issues : succès ou échec',
          'Les épreuves sont indépendantes',
          'p reste constant d\'une épreuve à l\'autre',
        ],
        exemple: '4 chiots, p = 0,3 : P(X = 2) = C(4,2) · 0,3² · 0,7² = 6 · 0,09 · 0,49 ≈ 0,265',
        note: 'Triangle de Pascal : C(n,k) = C(n−1,k−1) + C(n−1,k). Utile pour calculer à la main les petites valeurs de n.',
        piege: 'Ne pas confondre avec une loi de Poisson : la binomiale compte des succès sur n essais finis, Poisson compte des événements rares sur un intervalle.',
      },
      {
        id: 'binomiale-esperance',
        title: 'Loi binomiale — espérance & variance',
        category: 'Loi binomiale',
        latex: 'E(X) = n \\cdot p \\quad ; \\quad \\text{Var}(X) = n \\cdot p \\cdot q \\quad ; \\quad \\sigma = \\sqrt{npq}',
        lecture:
          '« Espérance de X égale n fois p ». « Variance égale n p q ». « Écart-type égale racine de n p q ».',
        comprehension:
          'En moyenne, on obtient np succès sur n essais. La variance augmente avec n et avec p·q (maximale quand p = 0,5). Si vous lancez un dé équilibré n fois et comptez les 6, E(X) = n/6.',
        utilisation:
          'Prévoir le nombre moyen de cas positifs, comparer un résultat observé à ce qu\'on attend, base de l\'approximation normale (np > 5 et nq > 5).',
        symbols: [
          { symbol: 'E(X)', lecture: '« espérance de X »', role: 'Nombre moyen de succès sur n essais' },
          { symbol: 'Var(X)', lecture: '« variance de X »', role: 'Dispersion autour de np' },
        ],
        exemple: 'B(10, 0,2) : E(X) = 2 succès en moyenne, Var(X) = 10·0,2·0,8 = 1,6',
        compareNote: 'E(X) = np ressemble à une moyenne, mais c\'est une moyenne théorique sur un grand nombre de répétitions de l\'expérience, pas la moyenne d\'un échantillon mesuré.',
      },
      {
        id: 'poisson',
        title: 'Loi de Poisson P(λ) — probabilité P(X = k)',
        category: 'Loi de Poisson',
        latex: 'P(X=k) = \\frac{e^{-\\lambda} \\cdot \\lambda^k}{k!}',
        lecture: '« P de X égale k égale e puissance moins lambda, fois lambda puissance k, sur k factorielle ».',
        comprehension:
          'Modélise le nombre d\'événements rares sur une unité fixe (1 heure, 1 mL, 1 km…). Un seul paramètre λ = nombre moyen d\'événements par unité. Propriété remarquable : E(X) = λ et Var(X) = λ (moyenne = variance). La distribution est asymétrique à droite pour λ petit, plus symétrique quand λ grandit.',
        utilisation:
          'Bactéries par mL (TP5), appels d\'urgence/heure, accidents rares, défauts sur une longueur de tissu.',
        symbols: [
          { symbol: 'λ', lecture: '« lambda »', role: 'Nombre moyen d\'événements par unité (temps, espace, volume)' },
          { symbol: 'e', lecture: '« e »', role: 'Nombre d\'Euler ≈ 2,718' },
          { symbol: 'k!', lecture: '« k factorielle »', role: 'k × (k−1) × … × 1' },
          { symbol: 'k', lecture: '« ké »', role: 'Nombre d\'événements observés (0, 1, 2, …)' },
        ],
        conditions: [
          'Les événements sont indépendants les uns des autres',
          'La probabilité d\'un événement est très faible sur chaque « essai » élémentaire',
          'Le nombre moyen λ est stable sur l\'intervalle considéré',
          'Deux événements ne peuvent pas se produire exactement au même instant (pour un processus en temps)',
        ],
        exemple: 'λ = 2 bactéries/mL, 1 mL : P(X = 0) = e⁻² ≈ 0,135 ; P(X = 3) = e⁻² · 8/6 ≈ 0,180',
        note: 'P(X = 0) = e⁻λ : probabilité qu\'aucun événement ne se produise. Plus λ est grand, plus cette probabilité diminue.',
        piege: 'λ n\'est pas une probabilité : c\'est un nombre moyen (il peut être > 1). Ne pas utiliser Poisson si les événements ne sont pas indépendants.',
      },
      {
        id: 'poisson-approximation',
        title: 'Approximation binomiale → Poisson',
        category: 'Loi de Poisson',
        latex: 'B(n,p) \\approx P(\\lambda) \\quad \\text{si } \\lambda = np \\text{ et } n \\text{ grand, } p \\text{ petit}',
        lecture:
          '« B de n p se rapproche de P de lambda quand lambda égale n p, avec n grand et p petit ».',
        comprehension:
          'Quand on répète beaucoup d\'essais (n grand) avec une très faible probabilité de succès (p petit), compter les succès revient à compter des événements rares → Poisson. Règle courante : p < 0,1, n > 50 et np < 10.',
        utilisation:
          'Simplifier des calculs binomiaux lourds (ex. 100 tirages avec p = 0,02 → P(λ = 2)).',
        symbols: [
          { symbol: 'λ = np', lecture: '« lambda égale n p »', role: 'Paramètre de la Poisson approximante' },
        ],
        conditions: [
          'n ≥ 50 (échantillon d\'essais suffisamment grand)',
          'p ≤ 0,1 (succès rare à chaque essai)',
          'np < 10 (nombre moyen de succès modéré)',
        ],
        exemple: 'B(100, 0,03) : λ = 3 → P(X = 2) ≈ P(3)(X = 2) = e⁻³ · 9/2 ≈ 0,224',
        compareNote: 'Binomiale : n essais finis avec comptage des succès. Poisson : fenêtre d\'observation continue (temps/espace) avec événements rares.',
      },
      {
        id: 'normale',
        title: 'Loi normale N(μ, σ²)',
        category: 'Loi normale',
        latex: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} \\quad ; \\quad Z = \\frac{X - \\mu}{\\sigma}',
        lecture:
          '« f de x est la densité en cloche centrée sur miu ». « Z égale X moins miu, divisé par sigma » standardise la variable.',
        comprehension:
          'Loi continue, symétrique, en cloche. μ = centre, σ = étalement. Z ~ N(0,1) permet d\'utiliser une seule table. Règle 68-95-99,7 % autour de μ.',
        utilisation:
          'Tailles, poids, erreurs de mesure, moyennes d\'échantillons (TCL). Approximation binomiale si np > 5 et nq > 5.',
        symbols: [
          { symbol: 'μ', lecture: '« miu »', role: 'Moyenne de la loi' },
          { symbol: 'σ', lecture: '« sigma »', role: 'Écart-type de la loi' },
          { symbol: 'Z', lecture: '« zé »', role: 'Variable centrée réduite (moyenne 0, écart-type 1)' },
          { symbol: 'f(x)', lecture: '« f de x »', role: 'Densité de probabilité (aire sous la courbe = probabilité)' },
        ],
      },
    ],
  },
  {
    id: 'moyennes',
    number: '4',
    title: 'Échantillonnage, estimation & décision sur les moyennes',
    intro:
      'Estimer la moyenne population à partir d\'un échantillon, construire un intervalle de confiance et tester une hypothèse.',
    formulas: [
      {
        id: 'z-score',
        title: 'Variable réduite (moyenne)',
        latex: 'Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}}',
        lecture:
          '« Z égale x barre de l\'échantillon moins miu, divisé par sigma sur racine de n ». Mesure l\'écart en « nombre d\'écarts-types de la moyenne ».',
        comprehension:
          'Si X est normale (ou n > 30), Z suit N(0,1). Permet de lire dans la table z les probabilités et les limites de confiance.',
        utilisation: 'IC de la moyenne, tests de conformité, comparaison de moyennes quand σ connu.',
        symbols: [
          { symbol: 'X̄', lecture: '« X barre »', role: 'Moyenne calculée sur l\'échantillon' },
          { symbol: 'σ/√n', lecture: '« sigma sur racine n »', role: 'Erreur-type de la moyenne' },
        ],
      },
      {
        id: 'cs-z',
        title: 'Coefficients de sécurité (table Z)',
        latex: '\\alpha = 0{,}05 \\Rightarrow z = 1{,}96 \\text{ (bilat.)} \\quad ; \\quad \\alpha = 0{,}01 \\Rightarrow z = 2{,}58',
        lecture:
          '« Pour un risque alpha de 5 %, on lit z égale 1,96 dans la table normale ». Bilatéral = les deux queues ; unilatéral = une seule.',
        comprehension:
          'z est le nombre d\'écarts-types à ajouter/retirer pour couvrir 95 % (ou 99 %) de la distribution. 1,96 = valeur classique du cours.',
        utilisation: 'Tous les IC et tests avec loi normale. α = seuil de signification = risque d\'erreur de 1ère espèce.',
        symbols: [
          { symbol: 'α', lecture: '« alpha »', role: 'Seuil de probabilité (risque de rejeter H₀ à tort)' },
          { symbol: '1−α', lecture: '« un moins alpha »', role: 'Niveau de confiance (ex. 95 %)' },
        ],
      },
      {
        id: 'ic-moyenne-sigma-connu',
        title: 'IC de la moyenne — σ connu',
        latex: '\\mu \\in \\left[ \\bar{x} - z_{1-\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\; ; \\; \\bar{x} + z_{1-\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\right]',
        lecture:
          '« miu appartient à l\'intervalle x barre plus ou moins z fois sigma sur racine n ». On encadre la vraie moyenne population.',
        comprehension:
          'On ne connaît pas μ exactement, mais on est sûr à (1−α)% qu\'il tombe dans cet intervalle. Plus n est grand, plus l\'intervalle est étroit.',
        utilisation: 'σ connu (rare) ou estimé sur un grand échantillon (n ≥ 30). Ex. poids étudiants n=32 du Chapitre 5.',
        symbols: [
          { symbol: 'z₁₋α/₂', lecture: '« z un moins alpha sur deux »', role: 'Coefficient de la table normale au seuil choisi' },
        ],
        exemple: 'x̄=75, σ̂=2,45, n=32, α=5% → μ ∈ [74,1 ; 75,9] kg',
      },
      {
        id: 'ic-moyenne-sigma-inconnu',
        title: 'IC de la moyenne — σ inconnu',
        latex: '\\mu \\in \\left[ \\bar{x} - t_{1-\\alpha/2} \\cdot \\frac{S}{\\sqrt{n}} \\; ; \\; \\bar{x} + t_{1-\\alpha/2} \\cdot \\frac{S}{\\sqrt{n}} \\right]',
        lecture:
          '« miu appartient à x barre plus ou moins t fois S sur racine n ». On remplace σ par S et z par t (Student).',
        comprehension:
          'Student tient compte de l\'incertitude supplémentaire quand on estime σ. ddl = n−1. Si n ≥ 30, t ≈ z.',
        utilisation: 'Cas le plus fréquent en TP : on ne connaît pas σ, on a seulement l\'échantillon.',
        symbols: [
          { symbol: 't₁₋α/₂', lecture: '« t un moins alpha sur deux »', role: 'Lu dans la table de Student à n−1 ddl' },
          { symbol: 'ddl', lecture: '« degrés de liberté »', role: 'n − 1 pour un seul échantillon' },
        ],
      },
      {
        id: 'test-conformite-moyenne',
        title: 'Test de conformité d\'une moyenne',
        latex: 'z_{\\text{obs}} = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}} \\quad \\text{ou} \\quad t_{\\text{obs}} = \\frac{\\bar{x} - \\mu_0}{S / \\sqrt{n}}',
        lecture:
          '« z observé égale x barre moins miu zéro, divisé par l\'erreur-type ». On compare la moyenne observée à une valeur de référence μ₀.',
        comprehension:
          'Sous H₀ : μ = μ₀. Si |z_obs| > z_critique, on rejette H₀. μ₀ = valeur imposée (norme, valeur théorique, étalon).',
        utilisation: 'Vérifier si un lot respecte une spécification (ex. dosage moyen = 100 mg).',
        symbols: [
          { symbol: 'μ₀', lecture: '« miu zéro »', role: 'Valeur de la moyenne sous l\'hypothèse nulle' },
          { symbol: 'z_obs', lecture: '« z observé »', role: 'Statistique calculée à partir des données' },
        ],
      },
      {
        id: 'test-2-moyennes',
        title: 'Comparaison de deux moyennes indépendantes',
        latex: 'z_{\\text{obs}} = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\hat{\\sigma}_D} \\quad \\text{avec} \\quad \\hat{\\sigma}_D = \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}',
        lecture:
          '« z observé égale la différence des moyennes, divisée par l\'écart-type de la différence ».',
        comprehension:
          'On teste si μ₁ = μ₂ (H₀) ou si elles diffèrent (H₁). La variance de la différence est la somme des variances individuelles (échantillons indépendants).',
        utilisation:
          'Comparer deux groupes (malades vs sains, traitement A vs B). Ex. hypertension Chapitre 5 : poids moyen groupe A vs B.',
        symbols: [
          { symbol: 'x̄₁, x̄₂', lecture: '« x barre un, x barre deux »', role: 'Moyennes des deux échantillons' },
          { symbol: 'σ̂_D', lecture: '« sigma chapeau D »', role: 'Erreur-type de la différence' },
        ],
      },
      {
        id: 'test-apparies',
        title: 'Échantillons appariés',
        latex: 'd_i = x_i - y_i \\quad \\Rightarrow \\quad t_{\\text{obs}} = \\frac{\\bar{d}}{S_d / \\sqrt{n}}',
        lecture:
          '« d indice i égale x moins y pour chaque paire ». On teste la moyenne des différences d̄.',
        comprehension:
          'Même individu mesuré deux fois (avant/après traitement). Les paires éliminent la variabilité inter-individus. Plus puissant que deux échantillons indépendants si appariement pertinent.',
        utilisation: 'Mesures avant/après sur les mêmes patients, jumeaux, répétitions sur même sujet.',
        symbols: [
          { symbol: 'dᵢ', lecture: '« d indice i »', role: 'Différence pour la paire i' },
          { symbol: 'd̄', lecture: '« d barre »', role: 'Moyenne des différences' },
        ],
      },
      {
        id: 'test-f-variance',
        title: 'Comparaison de deux variances (loi F)',
        latex: 'F_{\\text{obs}} = \\frac{S_1^2}{S_2^2}',
        lecture: '« F observé égale le rapport des variances corrigées ». On compare la dispersion de deux échantillons.',
        comprehension:
          'F proche de 1 → variances similaires. F grand → la première variance est plus grande. Préalable aux tests de moyennes quand on doit vérifier l\'égalité des σ.',
        utilisation: 'Vérifier si deux groupes ont la même variabilité avant un test t. ddl : k₁=n₁−1, k₂=n₂−1.',
        symbols: [
          { symbol: 'F', lecture: '« F »', role: 'Rapport de deux variances suivant la loi de Fisher' },
        ],
      },
    ],
  },
  {
    id: 'proportions',
    number: '5',
    title: 'Échantillonnage, estimation & décision sur les proportions',
    intro:
      'Travailler avec des fréquences (malades, défauts, succès) plutôt que des moyennes. Très courant en épidémiologie et contrôle qualité.',
    formulas: [
      {
        id: 'dist-proportion',
        title: 'Distribution d\'une proportion',
        latex: '\\hat{P} = \\frac{X}{n} \\quad ; \\quad E(\\hat{P}) = p \\quad ; \\quad \\sigma_P = \\sqrt{\\frac{pq}{n}}',
        lecture:
          '« P chapeau égale X sur n ». X = nombre de succès. « E(P chapeau) égale p ». « Sigma P égale racine de p q sur n ».',
        comprehension:
          'P̂ est la fréquence observée, estimateur de la proportion population p. Plus n augmente, plus P̂ se stabilise autour de p.',
        utilisation: 'Taux de malades, taux de réussite, proportion de défauts dans un lot.',
        symbols: [
          { symbol: 'P̂', lecture: '« P chapeau »', role: 'Proportion observée sur l\'échantillon' },
          { symbol: 'p', lecture: '« pé »', role: 'Proportion théorique dans la population' },
          { symbol: 'q', lecture: '« q »', role: '1 − p' },
          { symbol: 'X', lecture: '« X »', role: 'Nombre de « succès » (malades, défauts…)' },
        ],
      },
      {
        id: 'ic-proportion',
        title: 'Intervalle de confiance d\'une proportion',
        latex: 'p \\in \\left[ \\hat{P} - z_{1-\\alpha/2} \\sqrt{\\frac{\\hat{P}\\hat{Q}}{n}} \\; ; \\; \\hat{P} + z_{1-\\alpha/2} \\sqrt{\\frac{\\hat{P}\\hat{Q}}{n}} \\right]',
        lecture:
          '« p appartient à P chapeau plus ou moins z fois la racine de P chapeau Q chapeau sur n ».',
        comprehension:
          'Encadre la vraie proportion population. Conditions de validité : n·p ≥ 5 ET n·q ≥ 5 (sinon utiliser tables binomiales).',
        utilisation: 'Estimer un taux de prévalence, un taux de réussite avec marge d\'erreur.',
        symbols: [
          { symbol: 'P̂, Q̂', lecture: '« P chapeau, Q chapeau »', role: 'Proportions estimées (Q̂ = 1 − P̂)' },
        ],
        exemple: '60 sujets, 18 malades → P̂=0,30 → IC₉₅% ≈ [18% ; 42%]',
        note: 'Petits échantillons (n·p < 5) : tables binomiales, pas l\'approximation normale.',
      },
      {
        id: 'test-proportion',
        title: 'Test de conformité d\'une proportion',
        latex: 'z_{\\text{obs}} = \\frac{\\hat{P} - p_0}{\\sqrt{\\frac{p_0 q_0}{n}}}',
        lecture:
          '« z observé égale P chapeau moins p zéro, divisé par l\'erreur-type sous H₀ ».',
        comprehension:
          'On teste si la proportion observée diffère significativement d\'une valeur de référence p₀. Sous H₀, on utilise p₀ (pas P̂) dans l\'erreur-type.',
        utilisation: 'La proportion observée est-elle conforme à une norme ? (ex. 2 % de défauts annoncés)',
        symbols: [
          { symbol: 'p₀', lecture: '« p zéro »', role: 'Proportion de référence sous H₀' },
        ],
      },
      {
        id: 'test-2-proportions',
        title: 'Comparaison de deux proportions',
        latex: 'z_{\\text{obs}} = \\frac{\\hat{P}_1 - \\hat{P}_2}{\\hat{\\sigma}_D} \\quad \\text{avec} \\quad \\hat{p}_0 = \\frac{n_1 \\hat{P}_1 + n_2 \\hat{P}_2}{n_1 + n_2}',
        lecture:
          '« z observé égale la différence des proportions observées, divisée par l\'écart-type de la différence ». p̂₀ = proportion combinée sous H₀.',
        comprehension:
          'Teste si deux groupes ont la même proportion (ex. taux de maladie groupe A vs B). p̂₀ est la proportion globale si H₀ est vraie.',
        utilisation: 'Comparer deux taux (hommes vs femmes, deux traitements, deux lots).',
        symbols: [
          { symbol: 'p̂₀', lecture: '« p chapeau zéro »', role: 'Proportion pondérée combinée des deux échantillons' },
        ],
      },
    ],
  },
  {
    id: 'chi2',
    number: '6',
    title: 'Test du χ² (khi-carré)',
    intro:
      'Comparer des effectifs observés à des effectifs théoriques, ou tester l\'indépendance entre deux variables qualitatives. Condition : ETh > 5.',
    formulas: [
      {
        id: 'chi2-obs-theo',
        title: 'Comparaison observé / théorique',
        latex: '\\chi^2 = \\sum \\frac{(EO - ETh)^2}{ETh}',
        lecture:
          '« Khi-carré égale la somme de (effectif observé moins effectif théorique) au carré, divisé par l\'effectif théorique ».',
        comprehension:
          'Mesure l\'écart global entre ce qu\'on observe et ce qu\'on attend sous H₀. χ² grand → écart significatif → on rejette H₀. ddl = k − s − 1.',
        utilisation:
          'Vérifier si une distribution observée suit une loi théorique (Mendel, équiprobabilité, Poisson…).',
        symbols: [
          { symbol: 'EO', lecture: '« E O »', role: 'Effectif observé' },
          { symbol: 'ETh', lecture: '« E théorique »', role: 'Effectif attendu sous H₀' },
          { symbol: 'k', lecture: '« ké »', role: 'Nombre de classes' },
          { symbol: 's', lecture: '« s »', role: 'Nombre de paramètres estimés' },
        ],
        note: 'Condition : tous les ETh > 5. Sinon, regrouper des classes.',
      },
      {
        id: 'chi2-independance',
        title: 'Test d\'indépendance',
        latex: '\\chi^2 = \\sum_{i,j} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}} \\quad ; \\quad \\text{ddl} = (l-1)(c-1)',
        lecture:
          '« Khi-carré sur un tableau croisé : pour chaque case, écart au carré divisé par l\'effectif attendu ».',
        comprehension:
          'Teste si deux variables qualitatives sont liées (ex. maladie × espèce). Eᵢⱼ = (ligne i total × colonne j total) / n.',
        utilisation: 'Tableaux de contingence TP3 Q11 (cobayes/rats × malade/sain).',
        symbols: [
          { symbol: 'l', lecture: '« elle »', role: 'Nombre de lignes du tableau' },
          { symbol: 'c', lecture: '« cé »', role: 'Nombre de colonnes' },
        ],
        note: 'Si ddl = 1 : correction de Yates (soustraire 0,5 à |O−E| avant de carré).',
      },
    ],
  },
  {
    id: 'correlation-inf',
    number: '7',
    title: 'Inférence sur le coefficient de corrélation',
    intro: 'Tester si une corrélation observée est significativement différente de zéro, ou estimer ρ population.',
    formulas: [
      {
        id: 'test-correlation',
        title: 'Test H₀ : ρ = 0',
        latex: 't_{\\text{obs}} = r \\cdot \\sqrt{\\frac{n-2}{1-r^2}} \\quad ; \\quad \\text{ddl} = n-2',
        lecture:
          '« t observé égale r fois la racine de (n moins 2) sur (un moins r au carré) ».',
        comprehension:
          'Teste si le lien linéaire est dû au hasard. |t_obs| grand → corrélation significative. ddl = n−2 car on estime 2 paramètres (pente et ordonnée).',
        utilisation: 'Après calcul de r : la corrélation est-elle statistiquement significative ?',
        symbols: [
          { symbol: 'ρ', lecture: '« rhô »', role: 'Coefficient de corrélation population (inconnu)' },
          { symbol: 'r', lecture: '« r »', role: 'Coefficient calculé sur l\'échantillon' },
        ],
      },
      {
        id: 'ic-correlation',
        title: 'IC de ρ (transformation de Fisher)',
        latex: 'z_r = \\frac{1}{2} \\ln\\left(\\frac{1+r}{1-r}\\right) \\quad \\Rightarrow \\quad \\text{IC sur } z_r \\quad \\Rightarrow \\quad \\rho = \\frac{e^{2z_r} - 1}{e^{2z_r} + 1}',
        lecture:
          'On transforme r en z_r (Fisher), on construit l\'IC sur z_r, puis on retransforme pour obtenir l\'IC de ρ.',
        comprehension:
          'La distribution de r est asymétrique ; la transformation de Fisher la rend approximativement normale. Méthode avancée mais au formulaire.',
        utilisation: 'Estimer l\'intervalle de confiance du vrai coefficient de corrélation population.',
        symbols: [
          { symbol: 'z_r', lecture: '« z indice r »', role: 'Transformation de Fisher de r' },
          { symbol: 'ln', lecture: '« logarithme népérien »', role: 'Fonction logarithme' },
        ],
      },
    ],
  },
]

export function getFormulaChapter(id: string): FormulaChapter | undefined {
  return formulaireChapters.find((c) => c.id === id)
}

export function getAllFormulas(): FormulaEntry[] {
  return formulaireChapters.flatMap((c) => c.formulas)
}
