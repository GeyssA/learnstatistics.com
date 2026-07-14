import { useState } from 'react'
import { urnBalls } from '../data/datasets'

const colors = [
  { key: 'rouge', label: 'Rouge', color: 'bg-red-500', count: urnBalls.rouge },
  { key: 'blanche', label: 'Blanche', color: 'bg-slate-200', count: urnBalls.blanche },
  { key: 'bleue', label: 'Bleue', color: 'bg-blue-500', count: urnBalls.bleue },
] as const

const total = urnBalls.rouge + urnBalls.blanche + urnBalls.bleue

export function UrnGame() {
  const [drawn, setDrawn] = useState<string | null>(null)
  const [stats, setStats] = useState<Record<string, number>>({ rouge: 0, blanche: 0, bleue: 0 })
  const [trials, setTrials] = useState(0)

  function draw() {
    const r = Math.random() * total
    let cum = 0
    let result = 'rouge'
    for (const c of colors) {
      cum += c.count
      if (r < cum) {
        result = c.key
        break
      }
    }
    setDrawn(result)
    setStats((s) => ({ ...s, [result]: s[result] + 1 }))
    setTrials((t) => t + 1)
  }

  function reset() {
    setDrawn(null)
    setStats({ rouge: 0, blanche: 0, bleue: 0 })
    setTrials(0)
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        <strong>TP3 Q3</strong> — Urne : 6 rouges, 4 blanches, 5 bleues. Tirez et comparez aux
        probabilités théoriques.
      </p>

      <div className="flex justify-center gap-3 py-2">
        {colors.map((c) => (
          <div key={c.key} className="text-center">
            <div
              className={`w-12 h-12 rounded-full ${c.color} border-2 border-slate-300 mx-auto shadow ${
                drawn === c.key ? 'ring-4 ring-amber-400 scale-110' : ''
              } transition-transform`}
            />
            <div className="text-xs mt-1 text-slate-600">{c.label}</div>
            <div className="text-xs font-mono text-slate-400">
              P = {(c.count / total * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={draw}
          className="flex-1 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600"
        >
          Tirer une boule
        </button>
        <button onClick={reset} className="px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 text-sm">
          Reset
        </button>
      </div>

      {trials > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="text-left py-1">Couleur</th>
                <th className="text-right">Théorique</th>
                <th className="text-right">Observé ({trials})</th>
              </tr>
            </thead>
            <tbody>
              {colors.map((c) => (
                <tr key={c.key} className="border-t border-slate-100">
                  <td className="py-1.5">{c.label}</td>
                  <td className="text-right font-mono">{(c.count / total * 100).toFixed(1)}%</td>
                  <td className="text-right font-mono">{((stats[c.key] / trials) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
