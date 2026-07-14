import { useState, useMemo } from 'react'

export function BayesCalculator() {
  const [prevalence, setPrevalence] = useState(2) // %
  const [sensitivity, setSensitivity] = useState(85) // P(T+|M)
  const [specificity, setSpecificity] = useState(95) // P(T-|S)

  const results = useMemo(() => {
    const pM = prevalence / 100
    const pS = 1 - pM
    const pTpM = sensitivity / 100
    const pTnS = specificity / 100
    const pTpS = 1 - pTnS
    const pT = pTpM * pM + pTpS * pS
    const pMT = pT > 0 ? (pTpM * pM) / pT : 0
    const pTn = 1 - pT
    const pSnT = pTn > 0 ? (pTnS * pS) / pTn : 0
    return {
      pT: pT * 100,
      pMT: pMT * 100,
      pSnT: pSnT * 100,
    }
  }, [prevalence, sensitivity, specificity])

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        Modèle du <strong>test diagnostique bovin</strong> (TP3 Q9). Ajustez les curseurs pour voir
        l'impact sur P(maladie | test+).
      </p>

      <div className="space-y-4">
        {[
          { label: 'Prévalence P(M)', value: prevalence, set: setPrevalence, max: 20, unit: '%' },
          { label: 'Sensibilité P(T+|M)', value: sensitivity, set: setSensitivity, max: 100, unit: '%' },
          { label: 'Spécificité P(T-|S)', value: specificity, set: setSpecificity, max: 100, unit: '%' },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-slate-700">{s.label}</span>
              <span className="font-mono text-brand-600">
                {s.value}
                {s.unit}
              </span>
            </div>
            <input
              type="range"
              min={0.1}
              max={s.max}
              step={0.1}
              value={s.value}
              onChange={(e) => s.set(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        ))}
      </div>

      <div className="grid gap-3">
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4">
          <div className="text-xs text-brand-600 uppercase tracking-wide">P(Test positif)</div>
          <div className="text-2xl font-bold font-mono text-brand-700">{results.pT.toFixed(2)}%</div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="text-xs text-amber-700 uppercase tracking-wide">
            Valeur prédictive positive P(M|T+)
          </div>
          <div className="text-2xl font-bold font-mono text-amber-800">{results.pMT.toFixed(2)}%</div>
          <p className="text-xs text-amber-700 mt-1">
            Même avec un bon test, si la maladie est rare, P(M|T+) reste modérée !
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <div className="text-xs text-emerald-700 uppercase tracking-wide">
            Valeur prédictive négative P(S|T-)
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-800">{results.pSnT.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  )
}
