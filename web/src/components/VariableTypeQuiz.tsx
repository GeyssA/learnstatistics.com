import { useState } from 'react'
import { Shuffle, Check, X } from 'lucide-react'
import { variableTypeExamples } from '../data/datasets'

const typeOptions = [
  'Qualitative nominale',
  'Qualitative ordinale',
  'Quantitative discrète',
  'Quantitative continue',
  'Temps',
]

export function VariableTypeQuiz() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [correct, setCorrect] = useState(0)
  const [total, setTotal] = useState(0)

  const example = variableTypeExamples[index]
  const isCorrect = selected === example.answer

  function pick(option: string) {
    if (selected) return
    setSelected(option)
    setTotal((t) => t + 1)
    if (option === example.answer) setCorrect((c) => c + 1)
  }

  function next() {
    setIndex((i) => (i + 1) % variableTypeExamples.length)
    setSelected(null)
  }

  function shuffle() {
    setIndex(Math.floor(Math.random() * variableTypeExamples.length))
    setSelected(null)
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-slate-700">Classer le type de variable</span>
        <span className="text-slate-500">
          Score : {correct}/{total}
        </span>
      </div>

      <div className="bg-gradient-to-br from-brand-50 to-violet-50 rounded-2xl p-6 text-center border border-brand-100">
        <p className="text-sm text-slate-500 mb-2">Quel type de variable est :</p>
        <p className="text-xl font-bold text-slate-800">« {example.label} »</p>
      </div>

      <div className="grid gap-2">
        {typeOptions.map((opt) => {
          let cls = 'border-slate-200 hover:border-brand-300'
          if (selected) {
            if (opt === example.answer) cls = 'border-emerald-400 bg-emerald-50'
            else if (opt === selected) cls = 'border-red-300 bg-red-50'
            else cls = 'opacity-50 border-slate-100'
          }
          return (
            <button
              key={opt}
              onClick={() => pick(opt)}
              disabled={!!selected}
              className={`px-4 py-3 rounded-xl border-2 text-left text-sm font-medium transition-colors ${cls}`}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {selected && (
        <div
          className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium ${
            isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
          }`}
        >
          {isCorrect ? <Check size={18} /> : <X size={18} />}
          {isCorrect ? 'Correct !' : `Réponse : ${example.answer}`}
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={next}
          className="flex-1 py-2.5 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600"
        >
          Suivant
        </button>
        <button
          onClick={shuffle}
          className="px-4 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50"
          title="Aléatoire"
        >
          <Shuffle size={18} />
        </button>
      </div>
    </div>
  )
}
