import { formulaBlock } from '../lib/formulaHtml'
import { formulaireChapters } from './formulaire'

export type ModuleId =
  | 'descriptive'
  | 'probabilites'
  | 'variables-aleatoires'
  | 'inference'
  | 'formulaire'

export interface ModuleSection {
  id: string
  title: string
  theory: string
  practiceHint?: string
}

export interface Module {
  id: ModuleId
  number: number
  title: string
  subtitle: string
  color: string
  icon: string
  description: string
  sections: ModuleSection[]
  hasGame: boolean
  hasCharts: boolean
  source: string
}

export const modules: Module[] = [
  {
    id: 'descriptive',
    number: 1,
    title: 'Statistique descriptive',
    subtitle: 'Variables, tableaux et graphiques',
    color: 'brand',
    icon: '📊',
    description:
      'Comprendre population, échantillon et variables. Construire des tableaux de fréquences, tracer des diagrammes et calculer moyenne, médiane, variance.',
    source: 'Chapitre 1 + TP1',
    hasGame: false,
    hasCharts: true,
    sections: [
      {
        id: 'bases',
        title: 'Population, échantillon & individu',
        theory: `
          <p>Une <strong>population</strong> est l'ensemble des individus (unités statistiques) sur lequel porte l'étude — finie ou infinie. Mesurer toute la population est souvent impossible : on passe par un <strong>échantillon</strong>, partie <em>représentative</em> de la population.</p>
          <p>Un échantillon représentatif doit être :</p>
          <ul>
            <li><strong>Aléatoire</strong> — chaque individu a la même probabilité d'être sélectionné</li>
            <li><strong>Simple</strong> — les individus sont indépendants</li>
          </ul>
          <p>Le protocole statistique : population → prélèvement → observation → estimation (tendance centrale, dispersion) → conclusion avec niveau de confiance.</p>
        `,
      },
      {
        id: 'variables',
        title: 'Types de variables',
        theory: `
          <p>Une <strong>variable statistique</strong> (notée en majuscule : P, T, R…) est ce qu'on observe sur chaque individu. Ses valeurs sont les <strong>modalités</strong> (minuscules : p₁, p₂…).</p>
          <h3>Arbre des types</h3>
          <ul>
            <li><strong>Qualitative nominale</strong> — catégories sans ordre (genre H/F, couleur)</li>
            <li><strong>Qualitative ordinale</strong> — catégories ordonnées (niveau hiérarchique)</li>
            <li><strong>Quantitative discrète</strong> — valeurs entières dénombrables (œufs/poule)</li>
            <li><strong>Quantitative continue</strong> — valeurs dans un intervalle (poids, température)</li>
            <li><strong>Temps</strong> — dates, durées</li>
          </ul>
        `,
        practiceHint: 'Utilisez le quiz interactif pour classer des exemples biologiques.',
      },
      {
        id: 'frequences',
        title: 'Tableaux de fréquences',
        theory: `
          <p>Pour les variables qualitatives ou quantitatives discrètes, on construit un tableau en 5 étapes :</p>
          <ol>
            <li>Classer les modalités par ordre croissant</li>
            <li>Effectif absolu <strong>nᵢ</strong> — nombre d'occurrences de la modalité i</li>
            <li>Fréquence relative <strong>fᵢ = nᵢ / n</strong> — proportion (entre 0 et 1, somme = 1)</li>
            <li>Effectif cumulé <strong>Nᵢ = Σ nᵢ</strong> — total des effectifs jusqu'à la modalité i</li>
            <li>Fréquence cumulée <strong>Fᵢ = Σ fᵢ</strong> — pourcentage cumulé (F de la dernière = 1)</li>
          </ol>
          ${formulaBlock(
            'f_i = \\frac{n_i}{n} \\quad ; \\quad F_i = \\sum_{j=1}^{i} f_j',
            '« f indice i égale n indice i divisé par n ». La fréquence relative est la proportion d\'observations ayant la modalité i.',
            'Chaque fᵢ est une part du gâteau. Toutes les fréquences relatives additionnées donnent exactement 1 (100 %). Fᵢ donne le pourcentage d\'individus ayant une valeur ≤ à la modalité i.',
            'Tableaux du Chapitre 1 (poussins), TP1. Prérequis pour les diagrammes en bâtonnets et en escalier.',
            [
              { symbol: 'nᵢ', role: 'effectif de la modalité i', symbolLatex: 'n_i' },
              { symbol: 'fᵢ', role: 'fréquence relative', symbolLatex: 'f_i' },
              { symbol: 'Nᵢ', role: 'effectif cumulé', symbolLatex: 'N_i' },
              { symbol: 'Fᵢ', role: 'fréquence cumulée', symbolLatex: 'F_i' },
            ]
          )}
          <p>Graphiques : <strong>diagramme en bâtonnets</strong> (nᵢ), <strong>diagramme en escalier</strong> (Fᵢ). Variables continues → classes, centre cᵢ, <strong>histogramme</strong>.</p>
        `,
        practiceHint: 'Explorez les données « poussins par poule » du cours avec le constructeur de tableaux.',
      },
      {
        id: 'centrales',
        title: 'Valeurs centrales',
        theory: `
          <h3>Mode</h3>
          <p>Modalité (ou <strong>classe modale</strong>) la plus fréquente. Une série peut avoir 0 ou plusieurs modes.</p>
          <h3>Moyenne arithmétique x̄</h3>
          ${formulaBlock(
            '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
            '« x barre égale un sur n, fois la somme de toutes les valeurs observées ».',
            'Centre de gravité des données. Remplace toutes les valeurs par une seule équivalente. Très sensible aux valeurs extrêmes.',
            'Variable quantitative, série brute ou tableau de fréquences. Estimateur de μ (moyenne population).',
            [
              { symbol: 'x̄', role: 'moyenne échantillon', symbolLatex: '\\bar{x}' },
              { symbol: 'xᵢ', role: 'i-ème observation', symbolLatex: 'x_i' },
              { symbol: 'μ', role: 'moyenne population (inconnue)', symbolLatex: '\\mu' },
            ]
          )}
          <h3>Médiane x̃</h3>
          ${formulaBlock(
            'n \\text{ impair : } \\tilde{x} = x_{\\frac{n+1}{2}} \\quad ; \\quad n \\text{ pair : } \\tilde{x} = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2}',
            'Après tri croissant, la médiane est la valeur (ou moyenne) qui coupe l\'échantillon en deux parts égales.',
            'Robuste aux valeurs aberrantes. Si distribution symétrique : x̄ ≈ x̃. Asymétrie gauche : x̄ &lt; x̃ ; droite : x̄ &gt; x̃.',
            'Revenus, durées, toute série avec extrêmes. Classes groupées : interpolation sur l\'histogramme cumulé (50 %).',
            [{ symbol: 'x̃', role: 'médiane', symbolLatex: '\\tilde{x}' }]
          )}
        `,
      },
      {
        id: 'dispersion',
        title: 'Paramètres de dispersion',
        theory: `
          <p>Deux séries peuvent avoir la même moyenne mais être très différentes (ex. trois étudiants du Chapitre 1 : notes 10-14, 8-16, 6-18 — même moyenne 12).</p>
          <h3>Variance S²</h3>
          ${formulaBlock(
            'S^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
            '« S au carré égale la moyenne des carrés des écarts à la moyenne ».',
            'Mesure l\'étalement autour de x̄. Toujours ≥ 0. Pénalise fortement les valeurs lointaines (carré). Unité au carré (kg²) — peu lisible seule.',
            'Complément indispensable à la moyenne. Base du calcul de l\'écart-type et des tests statistiques.',
            [{ symbol: 'S²', role: 'variance échantillon', symbolLatex: 'S^2' }, { symbol: 'σ²', role: 'variance population', symbolLatex: '\\sigma^2' }]
          )}
          <h3>Formule de calcul rapide (examen)</h3>
          <p>À l'examen, on évite souvent de calculer chaque écart. Formule équivalente :</p>
          ${formulaBlock(
            'S^2 = \\frac{\\sum x_i^2}{n} - \\left(\\frac{\\sum x_i}{n}\\right)^2 = \\frac{\\sum x_i^2}{n} - \\bar{x}^2',
            '« S au carré égale la somme des carrés sur n, moins le carré de la moyenne ».',
            'Il faut calculer deux sommes : Σxᵢ (pour la moyenne) et Σxᵢ² (chaque valeur au carré). Plus rapide à la main ou à la calculatrice.',
            'TP1 exercice 1 (notes), tout calcul de variance sur série brute. Puis appliquer la correction n/(n−1) si demandé.',
            [
              { symbol: 'Σxᵢ²', role: 'somme des carrés', symbolLatex: '\\sum x_i^2' },
              { symbol: 'x̄²', role: 'carré de la moyenne', symbolLatex: '\\bar{x}^2' },
            ]
          )}
          ${formulaBlock(
            '\\hat{\\sigma}^2 = \\frac{n}{n-1} \\cdot S^2',
            '« sigma chapeau au carré égale n sur n moins un, fois S au carré » — variance corrigée.',
            'Corrige le biais de sous-estimation quand n est petit. Pour n ≥ 30, la correction est négligeable.',
            'Toujours utiliser quand n &lt; 30 et qu\'on estime la variance population.',
            [{ symbol: 'n−1', role: 'degrés de liberté' }]
          )}
          <h3>Écart-type S</h3>
          ${formulaBlock(
            'S = \\sqrt{S^2}',
            '« S égale racine carrée de S au carré » — on repasse dans l\'unité d\'origine.',
            'Si loi normale : ~68 % des valeurs dans [x̄−S ; x̄+S], ~95 % dans [x̄−2S ; x̄+2S].',
            'Toujours présenter moyenne ± écart-type. Comparer des dispersions.',
            [{ symbol: 'S', role: 'écart-type échantillon' }]
          )}
          <h3>Écart interquartile</h3>
          ${formulaBlock(
            '\\text{EIQ} = Q_3 - Q_1',
            '« écart interquartile égale Q trois moins Q un » — largeur des 50 % centraux.',
            'Mesure la dispersion du cœur de la distribution, sans les extrêmes. Base de la boîte à moustaches.',
            'TP1 ex. hémoglobine, détection de valeurs atypiques.',
            [{ symbol: 'Q₁', role: '1er quartile (25 %)' }, { symbol: 'Q₃', role: '3e quartile (75 %)' }]
          )}
        `,
      },
    ],
  },
  {
    id: 'probabilites',
    number: 3,
    title: 'Éléments de probabilité',
    subtitle: 'Événements, indépendance & Bayes',
    color: 'violet',
    icon: '🎲',
    description:
      'Calculer des probabilités, utiliser les théorèmes sur l\'union et l\'intersection, les probabilités conditionnelles et la formule de Bayes.',
    source: 'Chapitre 3 + TP3',
    hasGame: true,
    hasCharts: false,
    sections: [
      {
        id: 'evenements',
        title: 'Événements & vocabulaire',
        theory: `
          <p>Une <strong>expérience aléatoire</strong> a plusieurs issues. Un <strong>événement</strong> A est un sous-ensemble de l'univers Ω. P(A) est entre 0 (impossible) et 1 (certain).</p>
          ${formulaBlock(
            'P(A \\cup B) = P(A) + P(B) \\quad \\text{[incompatibles]}',
            '« P de A ou B égale P(A) plus P(B) » quand A et B ne peuvent pas arriver ensemble.',
            'Addition simple des probabilités. Ex. tirer un cœur OU un carreau en un tirage (si un seul tirage).',
            'Événements mutuellement exclusifs : catégories disjointes.',
            [{ symbol: '∪', role: '« ou » — union' }, { symbol: 'Ω', role: 'univers — toutes les issues' }]
          )}
          ${formulaBlock(
            'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
            '« P de A ou B égale la somme moins le chevauchement ».',
            'Si A et B peuvent coexister, on retire P(A∩B) pour ne pas compter deux fois l\'intersection.',
            'Cartes (cœur ou as), événements non exclusifs.',
            [{ symbol: '∩', role: '« et » — intersection' }]
          )}
          ${formulaBlock(
            'P(A \\cap B) = P(A) \\cdot P(B) \\quad \\text{[indépendants]}',
            '« P de A et B égale P(A) fois P(B) » si A n\'influence pas B.',
            'Base de la répétition d\'épreuves indépendantes. Deux dés, tirages avec remise.',
            'Calculer la probabilité d\'enchaîner plusieurs événements indépendants (TP3 Q4, Q5).',
            []
          )}
        `,
      },
      {
        id: 'conditionnelle',
        title: 'Probabilité conditionnelle',
        theory: `
          ${formulaBlock(
            'P(A|B) = \\frac{P(A \\cap B)}{P(B)}',
            '« P de A sachant B égale P(A et B) divisé par P(B) ». On restreint l\'univers aux cas où B est réalisé.',
            'Recalculer la probabilité de A dans un sous-groupe. Fondamental pour les arbres de probabilités et Bayes.',
            'TP3 : P(homme|daltonien), P(mâle|caractère X), tests diagnostiques.',
            [
              { symbol: 'P(A|B)', role: 'probabilité de A sachant que B est vrai' },
              { symbol: 'P(A ∩ B)', role: 'probabilité que A et B arrivent ensemble' },
            ]
          )}
          <p><strong>Exemple TP3 :</strong> 5 hommes/100 et 25 femmes/10 000 daltoniens. P(homme|daltonien) = ?</p>
          <p>L'<strong>arbre de probabilités</strong> décompose les cas successifs (sexe → daltonisme, maladie → test…).</p>
        `,
        practiceHint: 'Simulez le tirage de cartes ou de boules pour vérifier vos calculs.',
      },
      {
        id: 'bayes',
        title: 'Formule de Bayes',
        theory: `
          ${formulaBlock(
            'P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}',
            '« P de A sachant B égale P de B sachant A fois P(A), le tout divisé par P(B) ».',
            'Permet d\'« inverser » une condition : on connaît P(test+|malade) et on cherche P(malade|test+).',
            'Tests diagnostiques, contrôle qualité (TP3 Q7 tubes défectueux), épidémie bovine (Q9), coyotes (TP4).',
            [
              { symbol: 'P(B|A)', role: 'vraisemblance — probabilité de l\'observation sachant A' },
              { symbol: 'P(A)', role: 'probabilité a priori (prévalence)' },
              { symbol: 'P(B)', role: 'probabilité totale de l\'observation' },
            ]
          )}
          <p><strong>Valeur prédictive positive</strong> = P(M|T⁺) — chance d'être malade si test positif.</p>
          <p><strong>Valeur prédictive négative</strong> = P(M̄|T⁻) — chance d'être sain si test négatif.</p>
          <p>Piège classique : un bon test sur une maladie rare donne encore beaucoup de faux positifs !</p>
        `,
        practiceHint: 'Testez le calculateur Bayes avec l\'exemple du test bovin du TP3.',
      },
    ],
  },
  {
    id: 'variables-aleatoires',
    number: 4,
    title: 'Variables aléatoires & lois',
    subtitle: 'Binomiale, Poisson, Normale',
    color: 'emerald',
    icon: '📈',
    description:
      'Passer de la variable statistique (fréquences observées) à la variable aléatoire (probabilités théoriques). Explorer les trois lois fondamentales.',
    source: 'Chapitre 4 + TP4/TP5',
    hasGame: true,
    hasCharts: true,
    sections: [
      {
        id: 'va-intro',
        title: 'Variable statistique vs aléatoire',
        theory: `
          <p><strong>Variable statistique</strong> (échantillon) : fréquences observées fᵢ = nᵢ/n, diagramme en bâtonnets.</p>
          <p><strong>Variable aléatoire</strong> (modèle) : loi de probabilité P(X = xᵢ), fonction de répartition F(x) = P(X ≤ x).</p>
          <p>Caractéristiques parallèles : moyenne ↔ espérance E(X), variance S² ↔ Var(X).</p>
        `,
      },
      {
        id: 'binomiale',
        title: 'Loi binomiale B(n, p)',
        theory: `
          <p>X = nombre de succès sur <strong>n</strong> épreuves indépendantes, probabilité <strong>p</strong> à chaque épreuve.</p>
          ${formulaBlock(
            'P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}',
            '« P de X égale k égale combinaison n parmi k, fois p puissance k, fois q puissance n moins k ».',
            'C(n,k) compte les chemins possibles. Somme sur k de 0 à n = 1. Courbe symétrique si p=0,5.',
            'Chiots héréditaires, pieuvre Paul, feux tricolores, QCM au hasard (TP4).',
            [
              { symbol: 'n', role: 'nombre d\'épreuves' },
              { symbol: 'p', role: 'probabilité de succès' },
              { symbol: 'q', role: '1 − p' },
              { symbol: 'C(n,k)', role: 'combinaisons' },
            ]
          )}
          ${formulaBlock(
            'E(X) = n \\cdot p \\quad ; \\quad \\text{Var}(X) = n \\cdot p \\cdot q',
            '« Espérance égale n fois p ». « Variance égale n fois p fois q ».',
            'En moyenne on obtient n·p succès. La dispersion dépend de p : maximale quand p=0,5.',
            'Prédire le nombre moyen de succès, comparer deux stratégies.',
            []
          )}
        `,
        practiceHint: 'Visualisez la distribution binomiale et jouez au lancer de dés.',
      },
      {
        id: 'poisson',
        title: 'Loi de Poisson P(λ)',
        theory: `
          ${formulaBlock(
            'P(X = k) = \\frac{e^{-\\lambda} \\cdot \\lambda^k}{k!}',
            '« P de X égale k égale e puissance moins lambda, fois lambda puissance k, sur k factorielle ».',
            'Modélise des événements rares. Un seul paramètre λ = nombre moyen par unité. E(X) = Var(X) = λ.',
            'Bactéries/mL (TP5 Q3), appels d\'urgence, réactions vaccinales rares. Approximation binomiale si p&lt;0,1, n&gt;50, np&lt;10.',
            [{ symbol: 'λ', role: 'nombre moyen d\'événements par unité' }, { symbol: 'e', role: '≈ 2,718' }]
          )}
        `,
      },
      {
        id: 'normale',
        title: 'Loi normale N(μ, σ²)',
        theory: `
          ${formulaBlock(
            'Z = \\frac{X - \\mu}{\\sigma}',
            '« Z égale X moins miu, divisé par sigma » — on centre et on réduit la variable.',
            'Z suit N(0,1) : une seule table pour toutes les normales. Règle 68-95-99,7 % autour de μ.',
            'Tailles, poids, erreurs de mesure (TP5). TCL : moyennes d\'échantillons → normale.',
            [{ symbol: 'μ', role: 'moyenne' }, { symbol: 'σ', role: 'écart-type' }, { symbol: 'Z', role: 'variable réduite' }]
          )}
          <p>Approximation binomiale si np &gt; 5 et nq &gt; 5. Lire les probabilités dans la table de Z.</p>
        `,
        practiceHint: 'Tracez la courbe normale et placez vos valeurs sur l\'axe.',
      },
    ],
  },
  {
    id: 'inference',
    number: 5,
    title: 'Inférence statistique',
    subtitle: 'Estimateurs, IC & tests d\'hypothèses',
    color: 'amber',
    icon: '🔬',
    description:
      'Estimer les paramètres de la population à partir d\'un échantillon, construire des intervalles de confiance et introduire les tests d\'hypothèses.',
    source: 'Chapitre 5 + formulaire',
    hasGame: false,
    hasCharts: true,
    sections: [
      {
        id: 'estimateurs',
        title: 'Estimateurs',
        theory: `
          <p>Un <strong>estimateur</strong> est une statistique calculée sur l'échantillon qui approche le paramètre population inconnu.</p>
          <ul>
            <li>μ → m (moyenne observée)</li>
            <li>P → f (fréquence observée)</li>
            <li>σ² → Ŝ² = (n/(n−1))·S² si n &lt; 30</li>
          </ul>
          <p>Bon estimateur : sans biais, convergent (n grand → proche du vrai paramètre), faible variance d'échantillonnage.</p>
        `,
      },
      {
        id: 'ic-moyenne',
        title: 'Intervalle de confiance (moyenne)',
        theory: `
          ${formulaBlock(
            '\\mu \\in \\left[ \\bar{x} - z_{1-\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\; ; \\; \\bar{x} + z_{1-\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}} \\right]',
            '« miu est entre x barre moins z fois sigma sur racine n, et x barre plus cette marge ».',
            'On encadre la vraie moyenne population avec (1−α)% de confiance. Plus n est grand, plus l\'intervalle est étroit.',
            'σ connu ou n ≥ 30. Ex. Chapitre 5 : n=32, x̄=75 kg → IC₉₅%.',
            [
              { symbol: 'μ', role: 'moyenne population (inconnue)' },
              { symbol: 'z₁₋α/₂', role: '1,96 pour α=5 %' },
              { symbol: 'σ/√n', role: 'erreur-type de la moyenne' },
            ]
          )}
          ${formulaBlock(
            '\\mu \\in \\left[ \\bar{x} - t_{1-\\alpha/2} \\cdot \\frac{S}{\\sqrt{n}} \\; ; \\; \\bar{x} + t_{1-\\alpha/2} \\cdot \\frac{S}{\\sqrt{n}} \\right]',
            'Même logique mais on remplace σ par S et z par t (Student, ddl = n−1).',
            'Cas le plus fréquent : σ inconnu. Si n ≥ 30, t ≈ z.',
            'Tous les TPs d\'estimation avec petit échantillon.',
            [{ symbol: 't₁₋α/₂', role: 'lu dans table Student' }]
          )}
        `,
        practiceHint: 'Entrez vos données d\'échantillon pour obtenir l\'IC automatiquement.',
      },
      {
        id: 'ic-proportion',
        title: 'IC d\'une proportion',
        theory: `
          <p>Grands échantillons (n·p ≥ 5 et n·q ≥ 5) :</p>
          ${formulaBlock(
            'p \\in \\left[ \\hat{P} - z \\sqrt{\\frac{pq}{n}} \\; ; \\; \\hat{P} + z \\sqrt{\\frac{pq}{n}} \\right]',
            '« p appartient à P chapeau plus ou moins z fois la racine de p q sur n ».',
            'Encadre la proportion population. Conditions : n·p ≥ 5 et n·q ≥ 5.',
            'Taux de prévalence, taux de malades dans un échantillon.',
            []
          )}
          <p>Petits échantillons : tables binomiales.</p>
        `,
      },
      {
        id: 'tests',
        title: 'Tests d\'hypothèses',
        theory: `
          <p><strong>H₀</strong> (hypothèse nulle) : pas d'effet, égalité — les écarts sont dus au hasard.</p>
          <p><strong>H₁</strong> (alternative) : le facteur a un effet — acceptée si H₀ est rejetée.</p>
          ${formulaBlock(
            'z_{\\text{obs}} = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}',
            '« z observé mesure l\'écart entre la moyenne observée et la valeur de référence μ zéro, en nombre d\'erreurs-types ».',
            'Si |z_obs| &gt; z_critique (1,96 à 5 %), on rejette H₀. On ne prouve pas H₀ vraie — on la rejette si improbable.',
            'Test de conformité : le dosage respecte-t-il la norme ? Comparaison de groupes (hypertension Ch.5).',
            [
              { symbol: 'μ₀', role: 'valeur sous H₀' },
              { symbol: 'α', role: 'risque de rejeter H₀ à tort (5 %)' },
              { symbol: 'β', role: 'risque d\'accepter H₀ à tort' },
            ]
          )}
        `,
      },
    ],
  },
  {
    id: 'formulaire',
    number: 0,
    title: 'Formulaire',
    subtitle: 'Référence complète & pédagogique',
    color: 'slate',
    icon: '📋',
    description:
      'Toutes les formules du formulaire officiel (16 pages) : lecture en français, symboles, compréhension et cas d\'utilisation pour chaque formule.',
    source: 'Formulaire biostatistique (16 pages)',
    hasGame: false,
    hasCharts: false,
    sections: [
      { id: 'overview', title: 'Vue d\'ensemble + glossaire', theory: '' },
      ...formulaireChapters.map((c) => ({
        id: c.id,
        title: `${c.number}. ${c.title}`,
        theory: '',
      })),
    ],
  },
]

export function getModule(id: ModuleId): Module | undefined {
  return modules.find((m) => m.id === id)
}
