import { useState } from 'react'
import type { CorrectifExercise, ModuleCorrectifs } from '../data/correctifs'
import { TheoryHTML } from './Math'

interface CorrectifViewProps {
  correctifs: ModuleCorrectifs
}

function ExerciseCard({ exercise, defaultOpen = false }: { exercise: CorrectifExercise; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article id={exercise.id} className="border border-slate-200 rounded-xl overflow-hidden scroll-mt-24 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-3 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-brand-600 mb-1">
            {exercise.number}
          </div>
          <h3 className="font-bold text-slate-900">{exercise.title}</h3>
          {exercise.enonce && !open && (
            <p className="text-sm text-slate-500 mt-1 line-clamp-2">{exercise.enonce.replace(/<[^>]+>/g, '')}</p>
          )}
        </div>
        <span className="text-slate-400 text-lg shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-4">
          {exercise.enonce && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Énoncé</h4>
              <TheoryHTML html={exercise.enonce} className="prose prose-sm max-w-none text-slate-700" />
            </div>
          )}

          {exercise.steps.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-slate-100 overflow-hidden">
              <div className="bg-brand-50 px-4 py-2 border-b border-brand-100">
                <span className="text-xs font-bold text-brand-700">Étape {i + 1} — {step.title}</span>
              </div>
              <div className="p-4">
                <TheoryHTML html={step.content} className="prose prose-sm max-w-none text-slate-700" />
              </div>
            </div>
          ))}

          {exercise.resultat && (
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">Résultat final</h4>
              <TheoryHTML html={exercise.resultat} className="prose prose-sm max-w-none text-emerald-900" />
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export function CorrectifView({ correctifs }: CorrectifViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-50 to-brand-50 border border-emerald-200 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-slate-900">{correctifs.tpLabel}</h2>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{correctifs.intro}</p>
      </div>

      <div className="space-y-4">
        {correctifs.exercises.map((ex, i) => (
          <ExerciseCard key={ex.id} exercise={ex} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  )
}
