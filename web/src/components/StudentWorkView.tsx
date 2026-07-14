import { useState } from 'react'
import { FileDown } from 'lucide-react'
import type { CorrectifExercise, ModuleCorrectifs } from '../data/correctifs'
import { TheoryHTML } from './Math'
import { AutoGrowTextarea } from './AutoGrowTextarea'
import { useStudentAnswers, useStudentRevealed } from '../hooks/useStudentAnswers'
import { getWorkFields } from '../data/examen/studentConfig'
import { getStudentTables } from '../data/studentTables'
import { StudentWorkTable } from './StudentWorkTable'

function AnswerField({
  fieldId,
  label,
  rows = 2,
  value,
  onChange,
}: {
  fieldId: string
  label: string
  rows?: number
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-1.5 student-answer-field">
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <AutoGrowTextarea
        id={fieldId}
        rows={rows}
        value={value}
        onChange={onChange}
        className="student-textarea w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 min-h-[2.5rem]"
      />
      <div className="student-print-value hidden print:block whitespace-pre-wrap border border-slate-300 rounded-lg px-3 py-2 text-sm min-h-[2.5rem]">
        {value || '\u00a0'}
      </div>
    </div>
  )
}

function stripTableFromEnonce(html: string) {
  return html.replace(/<table[\s\S]*?<\/table>/, '').trim()
}

function fixEnonceMath(html: string) {
  return html
    .replace(/\$n_i\$/g, 'n<sub>i</sub>')
    .replace(/\$f_i\$/g, 'f<sub>i</sub>')
    .replace(/\$F_i\$/g, 'F<sub>i</sub>')
    .replace(/\$C_i\$/g, 'C<sub>i</sub>')
    .replace(/\$n = (\d+)\$/g, 'n = $1')
}

function StudentExerciseCard({
  exercise,
  storagePrefix,
  forceOpen,
  defaultOpen = false,
}: {
  exercise: CorrectifExercise
  storagePrefix: string
  forceOpen?: boolean
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const isOpen = forceOpen || open
  const { answers, setAnswer } = useStudentAnswers(storagePrefix, exercise.id)
  const { revealed, setRevealed } = useStudentRevealed(storagePrefix, exercise.id)
  const fields = getWorkFields(exercise.id)
  const tables = getStudentTables(exercise.id)

  let enonceHtml = exercise.enonce
  if (exercise.id === 'ex-q1' && enonceHtml) {
    enonceHtml = fixEnonceMath(stripTableFromEnonce(enonceHtml))
  } else if (enonceHtml) {
    enonceHtml = fixEnonceMath(enonceHtml)
  }

  return (
    <article
      id={exercise.id}
      className="student-exercise border border-slate-200 rounded-xl overflow-hidden scroll-mt-24 bg-white shadow-sm print:break-inside-avoid"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="no-print w-full flex items-start justify-between gap-3 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-brand-600 mb-1">
            {exercise.number}
          </div>
          <h3 className="font-bold text-slate-900">{exercise.title}</h3>
          {!isOpen && (
            <p className="text-sm text-amber-700 mt-1 font-medium">À compléter</p>
          )}
        </div>
        <span className="text-slate-400 text-lg shrink-0">{isOpen ? '−' : '+'}</span>
      </button>

      <div className="print-exercise-header hidden print:block px-5 pt-4 pb-2 border-b border-slate-200">
        <div className="text-xs font-bold uppercase tracking-wide text-brand-600 mb-1">{exercise.number}</div>
        <h3 className="font-bold text-slate-900">{exercise.title}</h3>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-5 print:border-t-0">
          {enonceHtml && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 print:bg-white print:border-slate-300">
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Énoncé</h4>
              <TheoryHTML html={enonceHtml} className="prose prose-sm max-w-none text-slate-700" />
            </div>
          )}

          <div className="bg-amber-50/80 border-2 border-amber-200 rounded-xl p-4 md:p-5 space-y-4 print:bg-white print:border-slate-400">
            <h4 className="text-xs font-bold uppercase tracking-wide text-amber-800 print:text-slate-800">
              Ton travail
            </h4>

            {tables.map((table) => (
              <StudentWorkTable
                key={table.id}
                table={table}
                answers={answers}
                setAnswer={setAnswer}
              />
            ))}

            {fields.map((field) => (
              <AnswerField
                key={field.id}
                fieldId={`${exercise.id}-${field.id}`}
                label={field.label}
                rows={field.rows}
                value={answers[field.id] ?? ''}
                onChange={(v) => setAnswer(field.id, v)}
              />
            ))}
          </div>

          <div className="flex justify-center no-print">
            <button
              type="button"
              onClick={() => setRevealed(!revealed)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                revealed
                  ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
              }`}
            >
              {revealed ? 'Masquer la résolution' : 'Montrer la résolution'}
            </button>
          </div>

          {revealed && (
            <div className="resolution-panel border-2 border-emerald-300 rounded-xl overflow-hidden no-print">
              <div className="bg-emerald-100 px-4 py-2.5 border-b border-emerald-200">
                <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                  Résolution — compare avec tes réponses ci-dessus
                </h4>
              </div>
              <div className="p-4 space-y-4 bg-emerald-50/30">
                {exercise.steps.map((step, i) => (
                  <div key={step.title} className="rounded-xl border border-emerald-100 overflow-hidden bg-white">
                    <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-100">
                      <span className="text-xs font-bold text-emerald-700">
                        Étape {i + 1} — {step.title}
                      </span>
                    </div>
                    <div className="p-4">
                      <TheoryHTML html={step.content} className="prose prose-sm max-w-none text-slate-700" />
                    </div>
                  </div>
                ))}

                {exercise.resultat && (
                  <div className="bg-emerald-100 border-l-4 border-emerald-500 rounded-r-xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">
                      Résultat final
                    </h4>
                    <TheoryHTML html={exercise.resultat} className="prose prose-sm max-w-none text-emerald-900" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}

interface StudentWorkViewProps {
  correctifs: ModuleCorrectifs
  storagePrefix: string
  introText?: string
}

export function StudentWorkView({ correctifs, storagePrefix, introText }: StudentWorkViewProps) {
  const [printMode, setPrintMode] = useState(false)

  function handleExportPdf() {
    setPrintMode(true)
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.print()
        setPrintMode(false)
      }, 400)
    })
  }

  const defaultIntro =
    'Complète chaque exercice dans la zone « Ton travail ». Quand tu es prête, clique sur Montrer la résolution pour comparer avec le corrigé.'

  return (
    <div className="student-work-view space-y-6">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 print:hidden">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{correctifs.tpLabel}</h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">{introText ?? defaultIntro}</p>
          </div>
          <button
            type="button"
            onClick={handleExportPdf}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-amber-300 text-amber-900 rounded-xl text-sm font-semibold hover:bg-amber-50 transition-colors shadow-sm shrink-0"
          >
            <FileDown size={16} />
            Exporter en PDF
          </button>
        </div>
      </div>

      <div className="hidden print:block mb-6 pb-4 border-b-2 border-slate-300">
        <h1 className="text-xl font-bold text-slate-900">{correctifs.tpLabel}</h1>
        <p className="text-sm text-slate-600 mt-1">LearnStatistics — copie de travail</p>
      </div>

      <div className="space-y-4">
        {correctifs.exercises.map((ex, i) => (
          <StudentExerciseCard
            key={ex.id}
            exercise={ex}
            storagePrefix={storagePrefix}
            forceOpen={printMode}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </div>
  )
}
