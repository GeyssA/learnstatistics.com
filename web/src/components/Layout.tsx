import { Link, Outlet, useLocation } from 'react-router-dom'
import { modules } from '../data/modules'
import { useAccess } from '../context/AccessContext'

function navLabel(id: string, number: number): string {
  if (id === 'formulaire') return 'Formulaire'
  return `Ch. ${number}`
}

export function Layout() {
  const location = useLocation()
  const { displayName, role, logout } = useAccess()
  const formulaire = modules.find((m) => m.id === 'formulaire')!
  const chapitres = modules.filter((m) => m.id !== 'formulaire')

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="group shrink-0">
            <div className="font-bold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">
              LearnStatistics
            </div>
            <div className="text-xs text-slate-500">Biostatistique interactive</div>
          </Link>

          <div className="flex items-center gap-2 min-w-0">
            <nav className="flex items-center gap-1 overflow-x-auto">
              <Link
                to={`/module/${formulaire.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname.includes(formulaire.id)
                    ? 'bg-brand-100 text-brand-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Formulaire
              </Link>
              {chapitres.map((m) => {
                const active = location.pathname.includes(m.id)
                return (
                  <Link
                    key={m.id}
                    to={`/module/${m.id}`}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      active
                        ? 'bg-brand-100 text-brand-700'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {navLabel(m.id, m.number)}
                  </Link>
                )
              })}
              <Link
                to="/examen"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === '/examen'
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Examen
              </Link>
            </nav>

            {displayName && (
              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 shrink-0">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                    role === 'teacher' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {displayName}
                </span>
                <button
                  type="button"
                  onClick={logout}
                  className="text-xs text-slate-500 hover:text-slate-700 whitespace-nowrap"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>
            <strong className="text-slate-700">learnstatistics.com</strong> — Cours de biostatistique
            (Helha). Théorie, pratique, quiz & jeux.
          </p>
        </div>
      </footer>
    </div>
  )
}
