import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { ExamenView } from '../components/ExamenView'
import { useAccess } from '../context/AccessContext'
import { getExamenComplet } from '../data/examen'

export function ExamenPage() {
  const examen = getExamenComplet()
  const { role, displayName } = useAccess()
  const isStudent = role === 'student'

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600 mb-6"
      >
        <ChevronLeft size={16} /> Accueil
      </Link>

      <div className="mb-8">
        <div className="text-xs font-medium text-slate-400 uppercase">Session de juin</div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Examen de biostatistique</h1>
        <p className="text-slate-500 mt-1">
          {isStudent
            ? `5 questions · 20 points · À compléter (${displayName})`
            : '5 questions · 20 points · Corrigé détaillé avec concepts et calculs'}
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
        <ExamenView correctifs={examen} />
      </div>
    </div>
  )
}