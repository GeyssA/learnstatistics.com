import { useState } from 'react'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'
import type { QuizQuestion } from '../data/quizzes'

interface QuizPanelProps {
  questions: QuizQuestion[]
  title?: string
}

export function QuizPanel({ questions, title = 'Quiz' }: QuizPanelProps) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answered, setAnswered] = useState(false)

  const q = questions[current]

  function handleSelect(idx: number) {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correctIndex) setScore((s) => s + 1)
  }

  function next() {
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  function reset() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setAnswered(false)
  }

  if (questions.length === 0) {
    return <p className="text-slate-500">Aucune question pour ce module.</p>
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="text-center py-8 space-y-4">
        <div className="text-5xl">{pct >= 70 ? '🎉' : '📚'}</div>
        <h3 className="text-xl font-bold">
          {score}/{questions.length} bonnes réponses ({pct}%)
        </h3>
        <p className="text-slate-600">
          {pct >= 70
            ? 'Excellent ! Vous maîtrisez bien ce chapitre.'
            : 'Relisez la théorie et réessayez — la pratique fait la différence.'}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600 transition-colors"
        >
          <RotateCcw size={16} /> Recommencer
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span className="font-medium text-slate-700">{title}</span>
        <span>
          Question {current + 1}/{questions.length} — Score : {score}
        </span>
      </div>

      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-500 transition-all duration-300"
          style={{ width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <p className="text-lg font-medium text-slate-800">{q.question}</p>

      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          let cls = 'border-slate-200 hover:border-brand-300 hover:bg-brand-50'
          if (answered) {
            if (idx === q.correctIndex) cls = 'border-emerald-400 bg-emerald-50'
            else if (idx === selected) cls = 'border-red-300 bg-red-50'
            else cls = 'border-slate-100 opacity-60'
          } else if (selected === idx) cls = 'border-brand-400 bg-brand-50'

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors flex items-center gap-3 ${cls}`}
            >
              <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-sm font-mono shrink-0">
                {String.fromCharCode(65 + idx)}
              </span>
              <span>{opt}</span>
              {answered && idx === q.correctIndex && <CheckCircle className="ml-auto text-emerald-500" size={18} />}
              {answered && idx === selected && idx !== q.correctIndex && (
                <XCircle className="ml-auto text-red-400" size={18} />
              )}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm">
          <strong className="text-slate-700">Explication :</strong> {q.explanation}
        </div>
      )}

      {answered && (
        <button
          onClick={next}
          className="w-full py-3 bg-brand-500 text-white rounded-xl font-medium hover:bg-brand-600 transition-colors"
        >
          {current + 1 >= questions.length ? 'Voir le résultat' : 'Question suivante'}
        </button>
      )}
    </div>
  )
}
