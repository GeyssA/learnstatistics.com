import { useState, type FormEvent } from 'react'
import { useAccess } from '../context/AccessContext'

export function AccessGate({ children }: { children: React.ReactNode }) {
  const { role, login } = useAccess()
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  if (role) return <>{children}</>

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const ok = login(code)
    if (!ok) {
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">LearnStatistics</h1>
          <p className="text-slate-500 mt-2 text-sm">Biostatistique — Helha</p>
        </div>

        <p className="text-sm text-slate-600 text-center mb-6 leading-relaxed">
          Entrez votre code d'accès pour accéder au site.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="access-code" className="block text-sm font-medium text-slate-700 mb-1.5">
              Code d'accès
            </label>
            <input
              id="access-code"
              type="password"
              autoComplete="off"
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setError(false)
              }}
              placeholder="Votre code"
              className={`w-full px-4 py-3 rounded-xl border text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                error ? 'border-rose-400 bg-rose-50' : 'border-slate-200'
              }`}
            />
            {error && (
              <p className="text-sm text-rose-600 mt-1.5">Code incorrect. Réessayez.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors"
          >
            Entrer
          </button>
        </form>
      </div>
    </div>
  )
}
