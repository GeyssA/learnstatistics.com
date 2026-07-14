// Données extraites des PDF du cours (Chapitre 1, TP1)

export const poussinsData = [
  1, 3, 4, 3, 3, 4, 3, 4, 4, 3, 2, 2, 3, 1, 2, 4, 3, 2, 5, 3,
  4, 4, 4, 3, 3, 4, 3, 5, 4, 4, 4, 2, 4, 5, 6, 6, 2, 2, 3, 2,
]

export const notesInterro = [
  10, 8, 12, 16, 14, 10, 11, 8, 12, 14, 13, 12, 10, 9, 13, 17, 13, 12, 9,
  8, 6, 13, 14, 10, 12, 14, 8, 10, 12, 17, 6, 8, 12, 14, 16, 13, 11, 12, 14, 12,
]

export const dureesPhenomene = [
  20.0, 20.4, 21.0, 21.0, 21.0, 21.2, 21.4, 21.4, 21.4, 21.4, 21.6, 21.6, 21.8,
  21.8, 21.8, 21.8, 22.0, 22.0, 22.0, 22.0, 22.2, 22.2, 22.2, 22.2, 22.4, 22.4,
  22.4, 22.4, 22.4, 22.6, 22.6, 22.6, 22.8, 22.8, 22.8, 22.8, 22.8, 22.8, 22.8,
  22.8, 23.0, 23.0, 23.2, 23.2, 23.2, 23.4, 23.4, 23.4, 23.4, 23.4, 23.4, 23.4,
  23.4, 23.4, 23.6, 23.6, 23.6, 23.6, 23.6, 23.8, 23.8, 23.8, 23.8, 23.8, 23.8,
  24.0, 24.0, 24.0, 24.0, 24.0, 24.0, 24.0, 24.0, 24.0, 24.2, 24.2, 24.2, 24.2,
  24.2, 24.2, 24.2, 24.4, 24.4, 24.4, 24.4, 24.6, 24.6, 24.6, 24.6, 24.6, 24.8,
  24.8, 24.8, 25.0, 25.2, 25.2, 25.4, 26.0,
]

export const variableTypeExamples = [
  { label: 'Nombre d\'œufs par poule', type: 'discrete', answer: 'Quantitative discrète' },
  { label: 'Poids d\'un animal (kg)', type: 'continue', answer: 'Quantitative continue' },
  { label: 'Température corporelle', type: 'continue', answer: 'Quantitative continue' },
  { label: 'Genre (H/F)', type: 'nominale', answer: 'Qualitative nominale' },
  { label: 'Niveau hiérarchique', type: 'ordinale', answer: 'Qualitative ordinale' },
  { label: 'Date de naissance', type: 'temps', answer: 'Temps' },
  { label: 'Taux d\'hémoglobine (g/L)', type: 'continue', answer: 'Quantitative continue' },
  { label: 'Nombre de bactéries par mL', type: 'discrete', answer: 'Quantitative discrète' },
]

export const hemoglobineData = [
  105, 110, 112, 112, 118, 119, 120, 120, 125, 126, 127, 128, 130, 132, 133, 134, 135, 138, 138, 138,
  138, 141, 142, 144, 145, 146, 148, 148, 148, 149, 150, 150, 150, 151, 151, 153, 153, 153, 154, 154,
  154, 155, 156, 156, 158, 160, 160, 160, 163, 164, 164, 165, 166, 168, 168, 170, 172, 172, 176, 179,
]

// TP1 Ex.3 — poids des porcs (kg), n = 100 (données officielles du polycopié)
export const poidsPorcs = [
  63, 78, 75, 72, 74, 68, 70, 66, 76, 75, 55, 79, 68, 67, 70, 60, 73, 69, 74, 64,
  80, 64, 72, 70, 73, 63, 71, 68, 74, 68, 72, 77, 72, 65, 69, 70, 66, 72, 67, 77,
  76, 74, 63, 69, 68, 76, 71, 58, 72, 75, 70, 66, 69, 76, 71, 77, 70, 66, 68, 82,
  69, 74, 68, 65, 67, 63, 71, 77, 62, 87, 76, 61, 70, 71, 84, 69, 76, 72, 73, 74,
  75, 76, 71, 75, 68, 71, 64, 69, 70, 64, 73, 69, 72, 65, 71, 73, 70, 81, 65, 73,
]

export const cardDeck = {
  total: 52,
  suits: ['cœur', 'carreau', 'trèfle', 'pique'] as const,
  values: ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi'] as const,
}

export const urnBalls = { rouge: 6, blanche: 4, bleue: 5 }
