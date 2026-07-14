import { useState } from 'react'
import { Dices } from 'lucide-react'

export function DiceGame() {
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)
  const [history, setHistory] = useState<{ d1: number; d2: number; sum: number }[]>([])
  const [rolling, setRolling] = useState(false)

  function roll() {
    setRolling(true)
    setTimeout(() => {
      const d1 = Math.floor(Math.random() * 6) + 1
      const d2 = Math.floor(Math.random() * 6) + 1
      setDice1(d1)
      setDice2(d2)
      setHistory((h) => [{ d1, d2, sum: d1 + d2 }, ...h].slice(0, 50))
      setRolling(false)
    }, 400)
  }

  const targetEvent = history.filter((h) => (h.d1 >= 4 && h.d1 <= 6) && (h.d2 === 1 || h.d2 === 2 || h.d2 === 4))
  const empirical =
    history.length > 0 ? (targetEvent.length / history.length) * 100 : 0
  const theoretical = (3 / 6) * (3 / 6) * 100 // TP3 Q5

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        <strong>TP3 Q5</strong> — Deux dés lancés. Événement : (4,5 ou 6) au 1er ET (1,2 ou 4) au 2nd.
        P théorique = (3/6)×(3/6) = <strong>25%</strong>.
      </p>

      <div className="flex justify-center gap-6 py-4">
        {[dice1, dice2].map((d, i) => (
          <div
            key={i}
            className={`w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 shadow-lg flex items-center justify-center text-4xl font-bold text-brand-600 ${
              rolling ? 'animate-bounce' : ''
            }`}
          >
            {rolling ? '?' : d}
          </div>
        ))}
      </div>

      <button
        onClick={roll}
        disabled={rolling}
        className="w-full flex items-center justify-center gap-2 py-3 bg-violet-500 text-white rounded-xl font-medium hover:bg-violet-600 disabled:opacity-60"
      >
        <Dices size={20} /> Lancer les dés
      </button>

      {history.length > 0 && (
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-violet-50 rounded-xl p-3 border border-violet-100">
            <div className="text-xs text-violet-600">Fréquence empirique (cible)</div>
            <div className="text-2xl font-bold font-mono text-violet-700">{empirical.toFixed(1)}%</div>
            <div className="text-xs text-slate-500">{history.length} lancers</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
            <div className="text-xs text-slate-500">Probabilité théorique</div>
            <div className="text-2xl font-bold font-mono">{theoretical.toFixed(1)}%</div>
          </div>
        </div>
      )}

      <p className="text-xs text-slate-400 text-center">
        Plus vous lancez, plus la fréquence empirique converge vers 25% (loi des grands nombres).
      </p>
    </div>
  )
}
