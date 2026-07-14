export interface QuizQuestion {
  id: string
  module: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const quizzes: QuizQuestion[] = [
  {
    id: 'd1',
    module: 'descriptive',
    question: 'Un échantillon représentatif doit être :',
    options: [
      'Volontaire et ordonné',
      'Aléatoire et simple (indépendant)',
      'Le plus grand possible uniquement',
      'Tiré uniquement parmi les valeurs extrêmes',
    ],
    correctIndex: 1,
    explanation: 'D\'après le Chapitre 1 : aléatoire (même probabilité pour chaque individu) et simple (indépendance).',
  },
  {
    id: 'd2',
    module: 'descriptive',
    question: 'Le genre (Homme/Femme) est une variable :',
    options: [
      'Quantitative continue',
      'Qualitative nominale',
      'Qualitative ordinale',
      'Quantitative discrète',
    ],
    correctIndex: 1,
    explanation: 'Le genre est dichotomique, sans ordre naturel → qualitative nominale.',
  },
  {
    id: 'd3',
    module: 'descriptive',
    question: 'La somme des fréquences relatives fᵢ doit être :',
    options: ['0', '0,5', '1', 'n'],
    correctIndex: 2,
    explanation: 'Σ fᵢ = Σ (nᵢ/n) = n/n = 1.',
  },
  {
    id: 'd4',
    module: 'descriptive',
    question: 'Quelle mesure est la plus robuste aux valeurs extrêmes ?',
    options: ['Moyenne', 'Médiane', 'Variance', 'Étendue'],
    correctIndex: 1,
    explanation: 'La médiane est peu influencée par les valeurs extrêmes (propriété du cours).',
  },
  {
    id: 'd5',
    module: 'descriptive',
    question: 'Pour n < 30, l\'estimateur de σ² utilise :',
    options: [
      'S² directement',
      'Variance corrigée (n/(n−1))·S²',
      'L\'étendue divisée par 2',
      'Le mode',
    ],
    correctIndex: 1,
    explanation: 'Si n < 30, on utilise la variance corrigée Ŝ² = (n/(n−1))·S².',
  },
  {
    id: 'p1',
    module: 'probabilites',
    question: 'Tirer un as dans un jeu de 52 cartes : P = ?',
    options: ['1/52', '4/52 = 1/13', '1/4', '13/52'],
    correctIndex: 1,
    explanation: 'TP3 : 4 as sur 52 cartes → P = 4/52 = 1/13.',
  },
  {
    id: 'p2',
    module: 'probabilites',
    question: 'A et B indépendants. P(A)=0,3 et P(B)=0,5. P(A ∩ B) = ?',
    options: ['0,8', '0,15', '0,35', '0,2'],
    correctIndex: 1,
    explanation: 'Indépendance : P(A ∩ B) = P(A)·P(B) = 0,3 × 0,5 = 0,15.',
  },
  {
    id: 'p3',
    module: 'probabilites',
    question: 'Urne : 6 rouges, 4 blanches, 5 bleues (15 total). P(rouge) = ?',
    options: ['6/15 = 2/5', '4/15', '5/15', '1/3'],
    correctIndex: 0,
    explanation: 'TP3 Q3 : P(rouge) = 6/15 = 2/5.',
  },
  {
    id: 'p4',
    module: 'probabilites',
    question: 'Test bovin (TP3 Q9) : 2% malades, 85% test+ si malade, 95% test− si sain. P(T+) ≈ ?',
    options: ['0,85', '0,068', '0,078', '0,95'],
    correctIndex: 2,
    explanation: 'P(T+) = P(T+|M)·P(M) + P(T+|S)·P(S) = 0,85×0,02 + 0,05×0,98 ≈ 0,066 ≈ 0,078.',
  },
  {
    id: 'v1',
    module: 'variables-aleatoires',
    question: 'X ~ B(4, 0.3). E(X) = ?',
    options: ['0,3', '1,2', '4', '0,84'],
    correctIndex: 1,
    explanation: 'Espérance binomiale : E(X) = n·p = 4 × 0,3 = 1,2.',
  },
  {
    id: 'v2',
    module: 'variables-aleatoires',
    question: 'X ~ B(n,p). Var(X) = ?',
    options: ['n·p', 'n·p·q', 'p·q', '√(n·p·q)'],
    correctIndex: 1,
    explanation: 'Variance binomiale : Var(X) = n·p·(1−p) = n·p·q.',
  },
  {
    id: 'v3',
    module: 'variables-aleatoires',
    question: 'Poisson : λ = 4 appels/h. E(X) et Var(X) valent :',
    options: ['4 et 16', '4 et 4', '2 et 4', '4 et 2'],
    correctIndex: 1,
    explanation: 'Pour Poisson : E(X) = Var(X) = λ = 4.',
  },
  {
    id: 'v4',
    module: 'variables-aleatoires',
    question: 'Loi normale N(169, 5.6²) : ~95% des valeurs sont dans :',
    options: ['[169 ; 174]', '[163 ; 175]', '[157 ; 181]', '[169 ; 180]'],
    correctIndex: 2,
    explanation: 'μ ± 2σ = 169 ± 11,2 → [157,8 ; 180,2] ≈ [157 ; 181].',
  },
  {
    id: 'i1',
    module: 'inference',
    question: 'Un estimateur convergent signifie que :',
    options: [
      'Il est toujours égal au paramètre',
      'Quand n augmente, il se rapproche du vrai paramètre',
      'Il ne dépend pas de l\'échantillon',
      'Sa variance augmente avec n',
    ],
    correctIndex: 1,
    explanation: 'Convergence : plus l\'échantillon est grand, plus l\'estimateur approche la valeur population.',
  },
  {
    id: 'i2',
    module: 'inference',
    question: 'IC à 95% pour la moyenne (α=5%) utilise z = ?',
    options: ['1,64', '1,96', '2,58', '0,95'],
    correctIndex: 1,
    explanation: 'Pour α = 5% bilatéral : z₁₋α/₂ = z₀,₉₇₅ = 1,96.',
  },
  {
    id: 'i3',
    module: 'inference',
    question: 'H₀ dans un test d\'hypothèse représente :',
    options: [
      'Le but recherché par l\'expérience',
      'L\'égalité / l\'absence d\'effet (fluctuations du hasard)',
      'Toujours μ > μ₀',
      'La probabilité d\'erreur α',
    ],
    correctIndex: 1,
    explanation: 'H₀ = hypothèse nulle = égalité, le facteur n\'influence pas le phénomène.',
  },
]

export function getQuizzesForModule(moduleId: string): QuizQuestion[] {
  return quizzes.filter((q) => q.module === moduleId)
}
