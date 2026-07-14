import { tpWorkFields } from '../correctifs/tpStudentConfig'

export interface WorkField {
  id: string
  label: string
  rows?: number
}

export const examWorkFields: Record<string, WorkField[]> = {
  'ex-q1': [
    { id: 'q1-b', label: 'B. Classe modale' },
    { id: 'q1-c-mean', label: 'C. Moyenne x̄' },
    { id: 'q1-c-median', label: 'C. Médiane x̃' },
    { id: 'q1-c-std', label: 'C. Écart-type S' },
    { id: 'q1-work', label: 'Calculs et démarche (optionnel)', rows: 5 },
  ],
  'ex-q2': [
    { id: 'q2-a', label: '2.A — Intervalle à 80 %', rows: 3 },
    { id: 'q2-b', label: '2.B — P(X ≤ 155)', rows: 3 },
    { id: 'q2-work', label: 'Calculs et démarche (optionnel)', rows: 4 },
  ],
  'ex-q3': [
    { id: 'q3-1', label: '3.1 — Arbre de probabilités', rows: 6 },
    { id: 'q3-2', label: '3.2 — P(M | T̄)', rows: 3 },
    { id: 'q3-3', label: '3.3 — Loi de X', rows: 2 },
    { id: 'q3-4', label: '3.4 — P(X = 1)', rows: 3 },
  ],
  'ex-q4': [
    { id: 'q4-1', label: '4.1 — Loi et paramètre(s)', rows: 2 },
    { id: 'q4-2a', label: '4.2 — P(X = 0)', rows: 2 },
    { id: 'q4-2b', label: '4.2 — P(X ≥ 2)', rows: 3 },
  ],
  'ex-q5': [
    { id: 'q5-p', label: 'Estimateur p̂', rows: 1 },
    { id: 'q5-ic', label: 'Intervalle de confiance à 95 %', rows: 3 },
    { id: 'q5-work', label: 'Calculs et démarche (optionnel)', rows: 4 },
  ],
}

export function q1CellId(row: number, col: string) {
  return `q1-r${row}-${col}`
}

export const q1TableRows = [
  { class: '[40 ; 50[', ci: '45', ni: '5', fi: '5 %', Fi: '5 %', editable: {} as Record<string, boolean> },
  { class: '[50 ; 60[', ci: '55', ni: '15', fi: '?', Fi: '?', editable: { fi: true, Fi: true } },
  { class: '[60 ; 70[', ci: '65', ni: '?', fi: '?', Fi: '45 %', editable: { ni: true, fi: true } },
  { class: '[70 ; 80[', ci: '75', ni: '30', fi: '?', Fi: '?', editable: { fi: true, Fi: true } },
  { class: '[80 ; 90[', ci: '85', ni: '?', fi: '?', Fi: '?', editable: { ni: true, fi: true, Fi: true } },
  { class: '[90 ; 100[', ci: '95', ni: '10', fi: '10 %', Fi: '?', editable: { Fi: true } },
]

/** Champs de travail pour un exercice (examen ou TP). */
export function getWorkFields(exerciseId: string): WorkField[] {
  if (examWorkFields[exerciseId]) return examWorkFields[exerciseId]
  if (tpWorkFields[exerciseId]) return tpWorkFields[exerciseId]
  return [{ id: 'reponse', label: 'Ton travail', rows: 8 }]
}
