import { MathDisplay } from './Math'

interface InlineFormulaProps {
  latex: string
  lecture: string
  comprehension: string
  utilisation: string
  linkTo?: string
}

/** Encadré pédagogique pour une formule dans les chapitres théoriques */
export function InlineFormula({
  latex,
  lecture,
  comprehension,
  utilisation,
  linkTo,
}: InlineFormulaProps) {
  return (
    <div className="my-5 rounded-xl border-2 border-brand-100 bg-gradient-to-br from-white to-brand-50/50 overflow-hidden not-prose">
      <div className="px-5 py-3 bg-brand-50/80 border-b border-brand-100">
        <MathDisplay latex={latex} />
      </div>
      <div className="px-5 py-4 space-y-3 text-sm">
        <p>
          <strong className="text-brand-700">Lecture :</strong>{' '}
          <span className="text-slate-700">{lecture}</span>
        </p>
        <p>
          <strong className="text-amber-700">Comprendre :</strong>{' '}
          <span className="text-slate-700">{comprehension}</span>
        </p>
        <p>
          <strong className="text-emerald-700">Utilisation :</strong>{' '}
          <span className="text-slate-700">{utilisation}</span>
        </p>
        {linkTo && (
          <a
            href={linkTo}
            className="inline-block text-xs font-medium text-brand-600 hover:text-brand-800 hover:underline"
          >
            → Voir la fiche complète dans le formulaire
          </a>
        )}
      </div>
    </div>
  )
}
