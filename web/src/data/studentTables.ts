/** Colonne d'un tableau de travail étudiant. */
export interface StudentTableColumn {
  key: string
  header: string
  /** HTML pour en-têtes avec indices (n<sub>i</sub>, etc.) */
  headerHtml?: string
}

/** Cellule : texte affiché et éditabilité. */
export interface StudentTableCell {
  display: string
  editable?: boolean
}

export interface StudentTableRow {
  key: string
  cells: Record<string, StudentTableCell>
}

export interface StudentTableDef {
  id: string
  label: string
  columns: StudentTableColumn[]
  rows: StudentTableRow[]
}

export function studentTableCellId(tableId: string, rowKey: string, colKey: string) {
  return `tbl-${tableId}-${rowKey}-${colKey}`
}

const groupedCols: StudentTableColumn[] = [
  { key: 'classe', header: 'Classe' },
  { key: 'ci', header: 'Centre xᵢ', headerHtml: 'Centre x<sub>i</sub>' },
  { key: 'ni', header: 'nᵢ', headerHtml: 'n<sub>i</sub>' },
  { key: 'fi', header: 'fᵢ', headerHtml: 'f<sub>i</sub>' },
  { key: 'Ni', header: 'Nᵢ', headerHtml: 'N<sub>i</sub>' },
  { key: 'Fi', header: 'Fᵢ', headerHtml: 'F<sub>i</sub>' },
]

const freqCols: StudentTableColumn[] = [
  { key: 'label', header: 'Note' },
  { key: 'ni', header: 'nᵢ', headerHtml: 'n<sub>i</sub>' },
  { key: 'fi', header: 'fᵢ', headerHtml: 'f<sub>i</sub>' },
  { key: 'Ni', header: 'Nᵢ', headerHtml: 'N<sub>i</sub>' },
  { key: 'Fi', header: 'Fᵢ', headerHtml: 'F<sub>i</sub>' },
]

function noteRow(note: number): StudentTableRow {
  return {
    key: `n${note}`,
    cells: {
      label: { display: String(note), editable: false },
      ni: { display: '', editable: true },
      fi: { display: '', editable: true },
      Ni: { display: '', editable: true },
      Fi: { display: '', editable: true },
    },
  }
}

/** Examen Q1 — chiens */
export const examQ1Table: StudentTableDef = {
  id: 'chiens',
  label: 'A. Compléter nᵢ, fᵢ et Fᵢ',
  columns: [
    { key: 'classe', header: 'Classe [kg]' },
    { key: 'ci', header: 'Centre Cᵢ', headerHtml: 'Centre C<sub>i</sub>' },
    { key: 'ni', header: 'nᵢ', headerHtml: 'n<sub>i</sub>' },
    { key: 'fi', header: 'fᵢ', headerHtml: 'f<sub>i</sub>' },
    { key: 'Fi', header: 'Fᵢ', headerHtml: 'F<sub>i</sub>' },
  ],
  rows: [
  {
    key: 'c1',
    cells: {
      classe: { display: '[40 ; 50[', editable: false },
      ci: { display: '45', editable: false },
      ni: { display: '5', editable: false },
      fi: { display: '5 %', editable: false },
      Fi: { display: '5 %', editable: false },
    },
  },
  {
    key: 'c2',
    cells: {
      classe: { display: '[50 ; 60[', editable: false },
      ci: { display: '55', editable: false },
      ni: { display: '15', editable: false },
      fi: { display: '', editable: true },
      Fi: { display: '', editable: true },
    },
  },
  {
    key: 'c3',
    cells: {
      classe: { display: '[60 ; 70[', editable: false },
      ci: { display: '65', editable: false },
      ni: { display: '', editable: true },
      fi: { display: '', editable: true },
      Fi: { display: '45 %', editable: false },
    },
  },
  {
    key: 'c4',
    cells: {
      classe: { display: '[70 ; 80[', editable: false },
      ci: { display: '75', editable: false },
      ni: { display: '30', editable: false },
      fi: { display: '', editable: true },
      Fi: { display: '', editable: true },
    },
  },
  {
    key: 'c5',
    cells: {
      classe: { display: '[80 ; 90[', editable: false },
      ci: { display: '85', editable: false },
      ni: { display: '', editable: true },
      fi: { display: '', editable: true },
      Fi: { display: '', editable: true },
    },
  },
  {
    key: 'c6',
    cells: {
      classe: { display: '[90 ; 100[', editable: false },
      ci: { display: '95', editable: false },
      ni: { display: '10', editable: false },
      fi: { display: '10 %', editable: false },
      Fi: { display: '', editable: true },
    },
  },
  ],
}

const tpStudentTables: Record<string, StudentTableDef[]> = {
  'tp1-ex1': [
    {
      id: 'freq',
      label: 'a) Tableau de fréquences non groupées',
      columns: freqCols,
      rows: [6, 8, 9, 10, 11, 12, 13, 14, 16, 17].map(noteRow),
    },
  ],
  'tp1-ex2': [
    {
      id: 'grouped',
      label: 'a) Tableau de fréquences groupées (classes d\'amplitude 1 s)',
      columns: groupedCols,
      rows: [
        '[20 ; 21[',
        '[21 ; 22[',
        '[22 ; 23[',
        '[23 ; 24[',
        '[24 ; 25[',
        '[25 ; 26[',
        '[26 ; 27[',
      ].map((c, i) => ({
        key: `r${i}`,
        cells: {
          classe: { display: c, editable: false },
          ci: { display: '', editable: true },
          ni: { display: '', editable: true },
          fi: { display: '', editable: true },
          Ni: { display: '', editable: true },
          Fi: { display: '', editable: true },
        },
      })),
    },
  ],
  'tp1-ex3': [
    {
      id: 'grouped',
      label: 'a) Tableau de fréquences groupées (classes d\'amplitude 5 kg)',
      columns: groupedCols,
      rows: ['[55 ; 60[', '[60 ; 65[', '[65 ; 70[', '[70 ; 75[', '[75 ; 80[', '[80 ; 85[', '[85 ; 90['].map(
        (c, i) => ({
          key: `r${i}`,
          cells: {
            classe: { display: c, editable: false },
            ci: { display: '', editable: true },
            ni: { display: '', editable: true },
            fi: { display: '', editable: true },
            Ni: { display: '', editable: true },
            Fi: { display: '', editable: true },
          },
        })
      ),
    },
  ],
  'tp1-ex4': [
    {
      id: 'grouped',
      label: 'a) Tableau de fréquences groupées (classes d\'amplitude 10 g/L)',
      columns: groupedCols,
      rows: [
        '[100 ; 110[',
        '[110 ; 120[',
        '[120 ; 130[',
        '[130 ; 140[',
        '[140 ; 150[',
        '[150 ; 160[',
        '[160 ; 170[',
        '[170 ; 180[',
        '[180 ; 190[',
      ].map((c, i) => ({
        key: `r${i}`,
        cells: {
          classe: { display: c, editable: false },
          ci: { display: '', editable: true },
          ni: { display: '', editable: true },
          fi: { display: '', editable: true },
          Ni: { display: '', editable: true },
          Fi: { display: '', editable: true },
        },
      })),
    },
  ],
  'tp1-ex5': [
    {
      id: 'grouped',
      label: 'Tableau fourni — compléter centres, fréquences et effectifs cumulés',
      columns: [
        { key: 'classe', header: 'Classes (kg)' },
        { key: 'ni', header: 'Effectifs nᵢ', headerHtml: 'Effectifs n<sub>i</sub>' },
        { key: 'ci', header: 'Centre xᵢ', headerHtml: 'Centre x<sub>i</sub>' },
        { key: 'fi', header: 'fᵢ', headerHtml: 'f<sub>i</sub>' },
        { key: 'Ni', header: 'Nᵢ', headerHtml: 'N<sub>i</sub>' },
        { key: 'Fi', header: 'Fᵢ', headerHtml: 'F<sub>i</sub>' },
      ],
      rows: [
        { classe: '[55 ; 65[', ni: '10' },
        { classe: '[65 ; 75[', ni: '23' },
        { classe: '[75 ; 77[', ni: '21' },
        { classe: '[77 ; 79[', ni: '28' },
        { classe: '[79 ; 81[', ni: '34' },
        { classe: '[81 ; 83[', ni: '28' },
        { classe: '[83 ; 85[', ni: '25' },
        { classe: '[85 ; 95[', ni: '23' },
        { classe: '[95 ; 105[', ni: '8' },
      ].map((r, i) => ({
        key: `r${i}`,
        cells: {
          classe: { display: r.classe, editable: false },
          ni: { display: r.ni, editable: false },
          ci: { display: '', editable: true },
          fi: { display: '', editable: true },
          Ni: { display: '', editable: true },
          Fi: { display: '', editable: true },
        },
      })),
    },
  ],
  'tp3-q11': [
    {
      id: 'croise',
      label: '1) Tableau croisé (effectifs et pourcentages)',
      columns: [
        { key: 'row', header: '' },
        { key: 'cobaye', header: 'Cobayes' },
        { key: 'rats', header: 'Rats' },
        { key: 'total', header: 'Total' },
      ],
      rows: ['Malade', 'Sain', 'Total'].map((label) => ({
        key: label.toLowerCase(),
        cells: {
          row: { display: label, editable: false },
          cobaye: { display: '', editable: true },
          rats: { display: '', editable: true },
          total: { display: '', editable: true },
        },
      })),
    },
  ],
  'tp4-q1': [
    {
      id: 'loi',
      label: 'Loi de probabilité de X (gain algébrique en €)',
      columns: [
        { key: 'issue', header: 'Issue du dé' },
        { key: 'gain', header: 'Gain X (€)' },
        { key: 'prob', header: 'P(X)' },
      ],
      rows: [
        { key: 'impairs', cells: { issue: { display: '1, 3, 5 (impairs)', editable: false }, gain: { display: '+0,5', editable: false }, prob: { display: '', editable: true } } },
        { key: 'pairs', cells: { issue: { display: '2, 4', editable: false }, gain: { display: '+1,5', editable: false }, prob: { display: '', editable: true } } },
        { key: 'six', cells: { issue: { display: '6', editable: false }, gain: { display: '−5', editable: false }, prob: { display: '', editable: true } } },
      ],
    },
  ],
  'tp4-q2': [
    {
      id: 'gains',
      label: 'Gains algébriques (prix du billet : 2 €)',
      columns: [
        { key: 'cas', header: 'Cas' },
        { key: 'nb', header: 'Nombre de billets' },
        { key: 'gain', header: 'Gain net X (€)' },
        { key: 'prob', header: 'P(X)' },
      ],
      rows: [
        { key: 'g500', cells: { cas: { display: 'Lot 500 €', editable: false }, nb: { display: '1', editable: false }, gain: { display: '+498', editable: false }, prob: { display: '', editable: true } } },
        { key: 'g150', cells: { cas: { display: 'Lot 150 €', editable: false }, nb: { display: '2', editable: false }, gain: { display: '+148', editable: false }, prob: { display: '', editable: true } } },
        { key: 'g100', cells: { cas: { display: 'Lot 100 €', editable: false }, nb: { display: '5', editable: false }, gain: { display: '+98', editable: false }, prob: { display: '', editable: true } } },
        { key: 'perte', cells: { cas: { display: 'Perte du ticket', editable: false }, nb: { display: '1992', editable: false }, gain: { display: '−2', editable: false }, prob: { display: '', editable: true } } },
      ],
    },
  ],
  'tp4-q7': [
    {
      id: 'binom',
      label: 'Distribution de X — nombre de mâles sur 5 portées (B(5 ; 0,5))',
      columns: [
        { key: 'xi', header: 'xᵢ', headerHtml: 'x<sub>i</sub>' },
        { key: 'prob', header: 'P(X = xᵢ)', headerHtml: 'P(X = x<sub>i</sub>)' },
        { key: 'theo', header: 'Effectif théorique / 100 portées' },
      ],
      rows: [0, 1, 2, 3, 4, 5].map((k) => ({
        key: `x${k}`,
        cells: {
          xi: { display: String(k), editable: false },
          prob: { display: '', editable: true },
          theo: { display: '', editable: true },
        },
      })),
    },
  ],
}

export function getStudentTables(exerciseId: string): StudentTableDef[] {
  if (exerciseId === 'ex-q1') return [examQ1Table]
  return tpStudentTables[exerciseId] ?? []
}
