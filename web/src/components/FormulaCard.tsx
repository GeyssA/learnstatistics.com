import { useState, type ReactNode } from 'react'
import type { FormulaEntry } from '../data/formulaire'
import { formulaireChapters as chapters, symbolesCommuns as commonSymbols } from '../data/formulaire'
import { MathDisplay, TheoryHTML } from './Math'
import { SymbolsTable, SymbolDisplay } from './SymbolTable'

interface FormulaCardProps {
  formula: FormulaEntry
  defaultOpen?: boolean
}

function SectionBlock({
  title,
  color,
  children,
}: {
  title: string
  color: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
      <h4 className={`text-xs font-bold uppercase tracking-wide mb-2 ${color}`}>{title}</h4>
      <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
    </div>
  )
}

export function FormulaCard({ formula, defaultOpen = false }: FormulaCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article
      id={formula.id}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden scroll-mt-24 shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-3 p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900">{formula.title}</h3>
          <div className="mt-2 bg-brand-50/80 border border-brand-100 rounded-lg px-4 py-3 overflow-x-auto">
            <MathDisplay latex={formula.latex} />
          </div>
        </div>
        <span className="text-slate-400 mt-1 shrink-0 text-lg leading-none">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-slate-100 pt-4">
          {formula.compareNote && (
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3 text-sm text-amber-900">
              <strong className="block text-xs uppercase tracking-wide text-amber-700 mb-1">
                À distinguer
              </strong>
              {formula.compareNote}
            </div>
          )}

          <SectionBlock title="Comment la lire" color="text-brand-600">
            <p>{formula.lecture}</p>
          </SectionBlock>

          <SectionBlock title="Ce qu'il faut comprendre" color="text-amber-600">
            <p>{formula.comprehension}</p>
          </SectionBlock>

          <SectionBlock title="Quand l'utiliser" color="text-emerald-600">
            <p>{formula.utilisation}</p>
          </SectionBlock>

          {formula.conditions && formula.conditions.length > 0 && (
            <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wide text-violet-700 mb-2">
                Conditions d'application
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {formula.conditions.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-violet-500 shrink-0">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {formula.symbols.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-violet-600 mb-2">Symboles</h4>
              <SymbolsTable symbols={formula.symbols} />
            </div>
          )}

          {formula.exempleHtml ? (
            <div className="rounded-xl border-2 border-brand-200 bg-gradient-to-br from-brand-50/40 to-white overflow-hidden">
              <div className="px-4 py-3 border-b border-brand-100 bg-brand-50/90 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
                  ex
                </span>
                <h4 className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  Exemple pas à pas
                </h4>
              </div>
              <div className="px-4 py-4">
                <TheoryHTML
                  html={formula.exempleHtml}
                  className="prose prose-sm max-w-none formula-exemple"
                />
              </div>
            </div>
          ) : formula.exemple ? (
            <div className="bg-slate-50 rounded-lg px-4 py-3 text-sm border border-slate-100">
              <strong className="text-slate-700">Exemple :</strong>{' '}
              <span className="text-slate-600">{formula.exemple}</span>
            </div>
          ) : null}

          {formula.piege && (
            <div className="bg-rose-50 border border-rose-100 rounded-lg px-4 py-3 text-sm text-rose-800">
              <strong>Piège fréquent :</strong> {formula.piege}
            </div>
          )}

          {formula.note && (
            <div className="bg-brand-50 border border-brand-100 rounded-lg px-4 py-3 text-sm text-brand-900">
              <strong>À retenir :</strong> {formula.note}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </div>
  )
}

interface FormulaireViewProps {
  chapterId?: string
}

export function FormulaireView({ chapterId }: FormulaireViewProps) {
  const activeChapter = chapterId ? chapters.find((c) => c.id === chapterId) : null

  return (
    <div className="space-y-8">
      {!chapterId && (
        <div className="bg-gradient-to-br from-slate-50 to-brand-50 border border-slate-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Glossaire des symboles courants</h2>
          <p className="text-sm text-slate-600 mb-4">
            Avant de plonger dans les formules, familiarisez-vous avec les symboles que vous retrouverez partout dans le cours.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {commonSymbols.map((s) => (
              <div key={s.symbol} className="bg-white rounded-lg px-3 py-2 border border-slate-100 text-sm flex items-center gap-1.5">
                <SymbolDisplay symbol={s.symbol} symbolLatex={s.symbolLatex} />
                <span className="text-slate-400">→</span>
                <span className="text-slate-600">{s.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(activeChapter ? [activeChapter] : chapters).map((chapter) => (
        <section key={chapter.id} id={`ch-${chapter.id}`}>
          <div className="mb-6 pb-4 border-b border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Partie {chapter.number}
            </div>
            <h2 className="text-xl font-bold text-slate-900">{chapter.title}</h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">{chapter.intro}</p>
          </div>

          <div className="space-y-6">
            {chapter.formulas.map((f, i) => {
              const prev = chapter.formulas[i - 1]
              const showCategory = f.category && f.category !== prev?.category
              return (
                <div key={f.id}>
                  {showCategory && <CategoryDivider label={f.category!} />}
                  <FormulaCard formula={f} defaultOpen={!chapterId && i === 0} />
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
