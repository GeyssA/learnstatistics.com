import { useState, useMemo } from 'react'
import { mean, stdDev, confidenceIntervalMean } from '../lib/stats'
import { notesInterro } from '../data/datasets'
import { MathDisplay, MathInline } from './Math'

export function ConfidenceIntervalTool() {
  const [useCustom, setUseCustom] = useState(false)
  const [customInput, setCustomInput] = useState('')
  const [alpha, setAlpha] = useState(5)

  const values = useMemo(() => {
    if (!useCustom) return notesInterro
    return customInput
      .split(/[\s,;]+/)
      .map(Number)
      .filter((n) => !isNaN(n))
  }, [useCustom, customInput])

  const z = alpha === 5 ? 1.96 : alpha === 1 ? 2.58 : 1.64
  const m = mean(values)
  const s = stdDev(values)
  const n = values.length
  const ic = n > 1 ? confidenceIntervalMean(m, s, n, z) : [m, m]

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        Calculez l'intervalle de confiance de la moyenne (Chapitre 5). Données par défaut : notes
        d'interrogation TP1 (n = {notesInterro.length}).
      </p>

      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
        <MathDisplay latex={'\\mu \\in \\left[ \\bar{x} - z_{1-\\alpha/2} \\cdot \\frac{S}{\\sqrt{n}} \\; ; \\; \\bar{x} + z_{1-\\alpha/2} \\cdot \\frac{S}{\\sqrt{n}} \\right]'} />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={useCustom}
          onChange={(e) => setUseCustom(e.target.checked)}
          className="accent-brand-500"
        />
        Saisir mes propres données
      </label>

      {useCustom && (
        <textarea
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="10, 12, 14, 8, 11..."
          className="w-full h-24 px-3 py-2 border border-slate-200 rounded-xl text-sm font-mono"
        />
      )}

      <div>
        <label className="text-sm font-medium text-slate-700">Niveau de confiance</label>
        <select
          value={alpha}
          onChange={(e) => setAlpha(Number(e.target.value))}
          className="mt-1 w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
        >
          <option value={10}>90% (α = 10%)</option>
          <option value={5}>95% (α = 5%)</option>
          <option value={1}>99% (α = 1%)</option>
        </select>
      </div>

      {n > 1 ? (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="text-xs text-slate-500">n</div>
              <div className="font-mono font-bold">{n}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="text-xs text-slate-500 flex justify-center">
                <MathInline latex="\\bar{x}" />
              </div>
              <div className="font-mono font-bold">{m.toFixed(2)}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3">
              <div className="text-xs text-slate-500">S</div>
              <div className="font-mono font-bold">{s.toFixed(2)}</div>
            </div>
          </div>
          <div className="bg-brand-50 border-2 border-brand-200 rounded-xl p-5 text-center">
            <div className="text-sm text-brand-600 font-medium mb-2">IC à {100 - alpha}% pour μ</div>
            <MathDisplay
              latex={`\\mu \\in \\left[ ${ic[0].toFixed(2)} \\; ; \\; ${ic[1].toFixed(2)} \\right]`}
            />
            <div className="text-xs text-slate-500 mt-3">
              marge = ±{(z * (s / Math.sqrt(n))).toFixed(2)} (z = {z})
            </div>
          </div>
        </div>
      ) : (
        <p className="text-amber-600 text-sm">Entrez au moins 2 valeurs numériques.</p>
      )}
    </div>
  )
}
