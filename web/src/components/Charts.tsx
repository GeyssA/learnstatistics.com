import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  ReferenceLine,
  Cell,
} from 'recharts'
import {
  frequencyTable,
  mean,
  median,
  stdDev,
  mode,
  groupIntoClasses,
  normalPdf,
  binomialPmf,
  poissonPmf,
  quartiles,
} from '../lib/stats'
import { CHART, chartTooltipStyle } from '../lib/chartTheme'
import { poussinsData } from '../data/datasets'
import { MathInline } from './Math'

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div style={chartTooltipStyle()}>
      <div className="font-semibold mb-1">{label}</div>
      {payload.map((p) => (
        <div key={p.name} style={{ color: p.color || '#fff' }}>
          {p.name} : <strong>{typeof p.value === 'number' ? p.value.toLocaleString('fr-FR') : p.value}</strong>
        </div>
      ))}
    </div>
  )
}

function CentralesComparison({ m, med, modes }: { m: number; med: number; modes: number[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-3 text-sm">
      <div className="rounded-xl border-2 border-brand-200 bg-brand-50/50 p-4">
        <div className="text-xs font-bold uppercase tracking-wide text-brand-700 mb-1 flex items-center gap-1">
          Moyenne <MathInline latex="\\bar{x}" />
        </div>
        <p className="text-slate-700 leading-relaxed">
          <strong>Somme pondérée</strong> de toutes les valeurs. Sensible aux extrêmes.
        </p>
        <div className="mt-2 font-mono text-xl font-bold text-brand-600">{m.toFixed(2)}</div>
      </div>
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-4">
        <div className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-1 flex items-center gap-1">
          Médiane <MathInline latex="\\tilde{x}" />
        </div>
        <p className="text-slate-700 leading-relaxed">
          <strong>Valeur centrale</strong> une fois la série triée. Robuste aux valeurs aberrantes.
        </p>
        <div className="mt-2 font-mono text-xl font-bold text-amber-600">{med.toFixed(1)}</div>
      </div>
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4">
        <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-1">Mode</div>
        <p className="text-slate-700 leading-relaxed">
          <strong>Modalité la plus fréquente</strong>. Peut être multiple (bimodale).
        </p>
        <div className="mt-2 font-mono text-xl font-bold text-emerald-600">{modes.join(', ')}</div>
      </div>
    </div>
  )
}

export function FrequencyExplorer() {
  const [data] = useState(poussinsData)
  const table = frequencyTable(data)
  const m = mean(data)
  const med = median(data)
  const s = stdDev(data)
  const modes = mode(data)

  const barData = table.rows.map((r) => ({
    name: String(r.modality),
    effectif: r.ni,
    frequence: Math.round(r.fi * 1000) / 10,
    cumul: Math.round(r.Fi * 1000) / 10,
    isMode: modes.includes(r.modality),
  }))

  return (
    <div className="space-y-6">
      <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 text-sm text-brand-800">
        <strong>Données du cours</strong> — Nombre de poussins vivants par poule (n = {data.length}).
        Exercice Chapitre 1 & TP1.
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Modalité</th>
              <th className="px-4 py-2 text-right font-semibold">nᵢ</th>
              <th className="px-4 py-2 text-right font-semibold">fᵢ</th>
              <th className="px-4 py-2 text-right font-semibold">Nᵢ</th>
              <th className="px-4 py-2 text-right font-semibold">Fᵢ</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.modality} className="border-t border-slate-100">
                <td className="px-4 py-2">{row.modality}</td>
                <td className="px-4 py-2 text-right font-mono">{row.ni}</td>
                <td className="px-4 py-2 text-right font-mono">{row.fi.toFixed(3)}</td>
                <td className="px-4 py-2 text-right font-mono">{row.Ni}</td>
                <td className="px-4 py-2 text-right font-mono">{row.Fi.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Tendance centrale — bien distinguer les trois mesures</h4>
        <CentralesComparison m={m} med={med} modes={modes} />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <div className="text-xs text-slate-500 uppercase tracking-wide flex items-center justify-center gap-1">
            Écart-type <MathInline latex="S" />
          </div>
          <div className="text-2xl font-bold text-violet-600 mt-1 font-mono">{s.toFixed(2)}</div>
          <p className="text-xs text-slate-500 mt-1">
            Mesure la dispersion autour de <MathInline latex="\\bar{x}" />
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-sm text-slate-600">
          Ici <MathInline latex="\\bar{x}" /> = {m.toFixed(2)} et <MathInline latex="\\tilde{x}" /> = {med.toFixed(1)} sont proches : la distribution est relativement symétrique.
          Les modes {modes.join(' et ')} indiquent les effectifs les plus élevés du tableau.
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <h4 className="font-semibold text-slate-800 mb-3">Diagramme en bâtonnets (effectifs)</h4>
          <ResponsiveContainer width="100%" height={CHART.height}>
            <BarChart data={barData} margin={{ top: 8, right: 8, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CHART.colors.primaryLight} />
                  <stop offset="100%" stopColor={CHART.colors.primary} />
                </linearGradient>
                <linearGradient id="modeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor={CHART.colors.accent} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART.colors.grid} vertical={false} />
              <XAxis dataKey="name" tick={{ fill: CHART.colors.text, fontSize: 12 }} label={{ value: 'Poussins', position: 'insideBottom', offset: -2 }} />
              <YAxis tick={{ fill: CHART.colors.text, fontSize: 12 }} label={{ value: 'nᵢ', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="effectif" name="Effectif" radius={[6, 6, 0, 0]}>
                {barData.map((entry) => (
                  <Cell key={entry.name} fill={entry.isMode ? 'url(#modeGrad)' : 'url(#barGrad)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-2">Barres orange = modalités les plus fréquentes (mode)</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <h4 className="font-semibold text-slate-800 mb-3">Diagramme en escalier (Fᵢ cumulée)</h4>
          <ResponsiveContainer width="100%" height={CHART.height}>
            <LineChart data={barData} margin={{ top: 8, right: 8, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART.colors.grid} />
              <XAxis dataKey="name" tick={{ fill: CHART.colors.text, fontSize: 12 }} />
              <YAxis domain={[0, 100]} unit="%" tick={{ fill: CHART.colors.text, fontSize: 12 }} />
              <Tooltip content={<ChartTooltip />} formatter={(v) => [`${v ?? 0} %`, 'Fᵢ cumulée']} />
              <Line type="stepAfter" dataKey="cumul" name="Fᵢ cumulée" stroke={CHART.colors.accent} strokeWidth={2.5} dot={{ r: 4, fill: CHART.colors.accent }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

interface HistogramProps {
  values: number[]
  title: string
  xLabel: string
  numClasses?: number
}

export function HistogramExplorer({ values, title, xLabel, numClasses = 8 }: HistogramProps) {
  const classes = groupIntoClasses(values, numClasses)
  const m = mean(values)
  const med = median(values)
  const s = stdDev(values)

  const chartData = classes.map((c) => ({
    name: `${c.lower.toFixed(0)}–${c.upper.toFixed(0)}`,
    effectif: c.ni,
    center: c.center,
  }))

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">{title} (n = {values.length})</p>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-brand-50 rounded-lg p-3 text-center border border-brand-100">
          <div className="text-xs text-brand-600 font-medium flex items-center justify-center gap-1">
            Moyenne <MathInline latex="\\bar{x}" />
          </div>
          <div className="font-mono font-bold text-lg text-brand-700">{m.toFixed(2)}</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-100">
          <div className="text-xs text-amber-600 font-medium flex items-center justify-center gap-1">
            Médiane <MathInline latex="\\tilde{x}" />
          </div>
          <div className="font-mono font-bold text-lg text-amber-700">{med.toFixed(2)}</div>
        </div>
        <div className="bg-violet-50 rounded-lg p-3 text-center border border-violet-100">
          <div className="text-xs text-violet-600 font-medium">Écart-type S</div>
          <div className="font-mono font-bold text-lg text-violet-700">{s.toFixed(2)}</div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <ResponsiveContainer width="100%" height={CHART.height}>
          <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
            <defs>
              <linearGradient id="histGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor={CHART.colors.secondary} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART.colors.grid} vertical={false} />
            <XAxis dataKey="name" tick={{ fill: CHART.colors.text, fontSize: 11 }} label={{ value: xLabel, position: 'insideBottom', offset: -4 }} />
            <YAxis tick={{ fill: CHART.colors.text, fontSize: 12 }} />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey="effectif" name="Effectif" fill="url(#histGrad)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

interface BoxPlotProps {
  values: number[]
  title: string
  unit?: string
}

export function BoxPlotExplorer({ values, title, unit = '' }: BoxPlotProps) {
  const q = quartiles(values)
  const m = mean(values)
  const width = 400
  const height = 120
  const pad = 40
  const range = q.max - q.min || 1
  const scale = (v: number) => pad + ((v - q.min) / range) * (width - 2 * pad)

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">{title} (n = {values.length})</p>
      <div className="grid sm:grid-cols-5 gap-2 text-center text-sm">
        {[
          { label: 'Min', value: q.min, color: 'text-slate-600' },
          { label: 'Q₁', value: q.q1, color: 'text-brand-600' },
          { label: 'Médiane', value: q.q2, color: 'text-amber-600' },
          { label: 'Q₃', value: q.q3, color: 'text-brand-600' },
          { label: 'Max', value: q.max, color: 'text-slate-600' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-lg border border-slate-200 p-2">
            <div className={`text-xs font-medium ${s.color}`}>{s.label}</div>
            <div className="font-mono font-bold">{s.value.toFixed(1)}{unit}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-lg mx-auto" style={{ minWidth: 320 }}>
          <line x1={scale(q.min)} y1={60} x2={scale(q.q1)} y2={60} stroke={CHART.colors.primary} strokeWidth={2} />
          <line x1={scale(q.q3)} y1={60} x2={scale(q.max)} y2={60} stroke={CHART.colors.primary} strokeWidth={2} />
          <rect
            x={scale(q.q1)}
            y={35}
            width={scale(q.q3) - scale(q.q1)}
            height={50}
            fill={`${CHART.colors.primary}22`}
            stroke={CHART.colors.primary}
            strokeWidth={2}
            rx={4}
          />
          <line x1={scale(q.q2)} y1={30} x2={scale(q.q2)} y2={90} stroke={CHART.colors.accent} strokeWidth={3} />
          <line x1={scale(m)} y1={30} x2={scale(m)} y2={90} stroke={CHART.colors.violet} strokeWidth={2} strokeDasharray="4 3" />
          <text x={scale(q.min)} y={105} textAnchor="middle" fontSize={10} fill={CHART.colors.text}>{q.min.toFixed(0)}</text>
          <text x={scale(q.max)} y={105} textAnchor="middle" fontSize={10} fill={CHART.colors.text}>{q.max.toFixed(0)}</text>
        </svg>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 mt-2">
          <span><span className="inline-block w-3 h-0.5 bg-amber-500 align-middle mr-1" /> Médiane (Q₂)</span>
          <span><span className="inline-block w-3 h-0.5 bg-violet-500 align-middle mr-1 border-dashed" style={{ borderTop: '2px dashed' }} /> Moyenne <MathInline latex="\\bar{x}" /></span>
          <span>Boîte = 50 % centraux (Q₁ → Q₃)</span>
        </div>
      </div>
    </div>
  )
}

interface NormalCurveProps {
  mu: number
  sigma: number
  highlight?: number
}

export function NormalCurve({ mu, sigma, highlight }: NormalCurveProps) {
  const points = Array.from({ length: 100 }, (_, i) => {
    const x = mu - 4 * sigma + (i / 99) * 8 * sigma
    return { x: Math.round(x * 10) / 10, y: normalPdf(x, mu, sigma) }
  })

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <p className="text-sm font-medium text-slate-700 mb-2">
        N({mu}, {sigma}²){highlight !== undefined && ` — repère : ${highlight}`}
      </p>
      <ResponsiveContainer width="100%" height={CHART.height}>
        <AreaChart data={points} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <defs>
            <linearGradient id="normalGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART.colors.primary} stopOpacity={0.4} />
              <stop offset="100%" stopColor={CHART.colors.primary} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.colors.grid} />
          <XAxis dataKey="x" tick={{ fill: CHART.colors.text, fontSize: 11 }} />
          <YAxis tick={{ fill: CHART.colors.text, fontSize: 11 }} />
          <Tooltip content={<ChartTooltip />} />
          <ReferenceLine x={mu} stroke={CHART.colors.accent} strokeDasharray="4 4" label={{ value: 'μ', position: 'top', fill: CHART.colors.accent }} />
          {highlight !== undefined && (
            <ReferenceLine x={highlight} stroke={CHART.colors.rose} strokeWidth={2} label={{ value: 'x', position: 'top', fill: CHART.colors.rose }} />
          )}
          <Area type="monotone" dataKey="y" name="Densité" stroke={CHART.colors.primary} strokeWidth={2} fill="url(#normalGrad)" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-xs text-slate-500 mt-2">68 % des valeurs entre μ ± σ · 95 % entre μ ± 2σ</p>
    </div>
  )
}

interface BinomialChartProps {
  n: number
  p: number
}

export function BinomialChart({ n, p }: BinomialChartProps) {
  const data = Array.from({ length: n + 1 }, (_, k) => ({
    k: String(k),
    prob: Math.round(binomialPmf(k, n, p) * 10000) / 100,
  }))
  const esperance = n * p

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
        <p className="text-sm font-medium">B({n}, {p}) — P(X = k) en %</p>
        <p className="text-xs text-slate-500">E(X) = {esperance.toFixed(2)} · Var(X) = {(n * p * (1 - p)).toFixed(2)}</p>
      </div>
      <ResponsiveContainer width="100%" height={CHART.height}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id="binomGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor={CHART.colors.violet} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.colors.grid} vertical={false} />
          <XAxis dataKey="k" tick={{ fill: CHART.colors.text, fontSize: 12 }} label={{ value: 'k (succès)', position: 'insideBottom', offset: -2 }} />
          <YAxis unit="%" tick={{ fill: CHART.colors.text, fontSize: 12 }} />
          <Tooltip content={<ChartTooltip />} formatter={(v) => [`${v ?? 0} %`, 'P(X=k)']} />
          <ReferenceLine x={String(Math.round(esperance))} stroke={CHART.colors.accent} strokeDasharray="5 5" />
          <Bar dataKey="prob" name="P(X=k)" fill="url(#binomGrad)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

interface PoissonChartProps {
  lambda: number
}

export function PoissonChart({ lambda }: PoissonChartProps) {
  const maxK = Math.max(10, Math.ceil(lambda + 4 * Math.sqrt(lambda)))
  const data = Array.from({ length: maxK + 1 }, (_, k) => ({
    k: String(k),
    prob: Math.round(poissonPmf(k, lambda) * 10000) / 100,
  }))

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
        <p className="text-sm font-medium">P({lambda}) — P(X = k) en %</p>
        <p className="text-xs text-slate-500">E(X) = Var(X) = λ = {lambda}</p>
      </div>
      <ResponsiveContainer width="100%" height={CHART.height}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id="poissonGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor={CHART.colors.secondary} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.colors.grid} vertical={false} />
          <XAxis dataKey="k" tick={{ fill: CHART.colors.text, fontSize: 12 }} label={{ value: 'k (événements)', position: 'insideBottom', offset: -2 }} />
          <YAxis unit="%" tick={{ fill: CHART.colors.text, fontSize: 12 }} />
          <Tooltip content={<ChartTooltip />} formatter={(v) => [`${v ?? 0} %`, 'P(X=k)']} />
          <ReferenceLine x={String(Math.round(lambda))} stroke={CHART.colors.accent} strokeDasharray="5 5" />
          <Bar dataKey="prob" name="P(X=k)" fill="url(#poissonGrad)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-slate-500 mt-2">
        P(X = 0) = e⁻λ ≈ {(Math.exp(-lambda) * 100).toFixed(1)} % — aucun événement sur l'unité observée
      </p>
    </div>
  )
}
