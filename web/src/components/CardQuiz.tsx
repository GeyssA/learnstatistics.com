import { useState } from 'react'
import { cardDeck } from '../data/datasets'

const questions = [
  {
    q: 'On tire une carte au hasard dans un jeu de 52 cartes. P(cœur) = ?',
    choices: ['1/4', '1/13', '1/52', '4/52'],
    answer: 0,
    explain: '4 couleurs équiprobables → 13/52 = 1/4.',
  },
  {
    q: 'P(As) = ?',
    choices: ['1/4', '1/13', '4/52', '1/52'],
    answer: 1,
    explain: '4 as sur 52 cartes → 4/52 = 1/13.',
  },
  {
    q: 'P(Roi) = ?',
    choices: ['1/4', '1/13', '4/52', '3/52'],
    answer: 1,
    explain: '4 rois sur 52 → 1/13 (même raisonnement que l\'As).',
  },
  {
    q: 'P(As de cœur) = ?',
    choices: ['1/4', '1/13', '1/52', '4/52'],
    answer: 2,
    explain: 'Une seule carte favorable sur 52 → 1/52.',
  },
  {
    q: 'P(carte rouge) = ? (cœur ou carreau)',
    choices: ['1/2', '1/4', '26/52', '13/52'],
    answer: 0,
    explain: '26 cartes rouges / 52 = 1/2.',
  },
]

export function CardQuiz() {
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[idx]

  function choose(i: number) {
    if (selected !== null) return
    setSelected(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setDone(true)
      return
    }
    setIdx((i) => i + 1)
    setSelected(null)
  }

  if (done) {
    return (
      <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
        <p className="text-lg font-bold text-slate-800">
          Score : {score} / {questions.length}
        </p>
        <p className="text-sm text-slate-500 mt-2">Jeu de {cardDeck.total} cartes — TP3</p>
        <button
          onClick={() => { setIdx(0); setSelected(null); setScore(0); setDone(false) }}
          className="mt-4 px-4 py-2 bg-brand-500 text-white rounded-lg text-sm font-medium hover:bg-brand-600"
        >
          Recommencer
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
      <div className="flex justify-between text-sm text-slate-500">
        <span>Question {idx + 1} / {questions.length}</span>
        <span>TP3 — Jeu de cartes</span>
      </div>
      <p className="font-medium text-slate-800">{q.q}</p>
      <div className="grid gap-2">
        {q.choices.map((c, i) => {
          let cls = 'border-slate-200 hover:border-brand-300 hover:bg-brand-50'
          if (selected !== null) {
            if (i === q.answer) cls = 'border-emerald-400 bg-emerald-50'
            else if (i === selected) cls = 'border-rose-300 bg-rose-50'
            else cls = 'border-slate-100 opacity-60'
          }
          return (
            <button
              key={c}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${cls}`}
            >
              {c}
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <div className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3">
          {q.explain}
        </div>
      )}
      {selected !== null && (
        <button onClick={next} className="w-full py-2.5 bg-brand-500 text-white rounded-lg text-sm font-medium hover:bg-brand-600">
          {idx + 1 >= questions.length ? 'Voir le score' : 'Question suivante'}
        </button>
      )}
    </div>
  )
}
