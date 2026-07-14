import { MathInline } from './Math'
import type { SymbolDef } from '../data/formulaire'
import { resolveSymbolLatex } from '../lib/latex'

interface SymbolWithLatex extends SymbolDef {
  symbolLatex?: string
}

interface SymbolsTableProps {
  symbols: SymbolWithLatex[]
}

export function SymbolDisplay({
  symbol,
  symbolLatex,
  className = 'text-brand-700 font-medium',
}: {
  symbol: string
  symbolLatex?: string
  className?: string
}) {
  const latex = resolveSymbolLatex(symbol, symbolLatex)
  if (latex) {
    return <MathInline latex={latex} className={className} />
  }
  return <span className={`font-mono font-semibold ${className}`}>{symbol}</span>
}

function SymbolsTable({ symbols }: SymbolsTableProps) {
  if (symbols.length === 0) return null
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500 border-b border-slate-200">
            <th className="py-1.5 pr-3 font-medium">Symbole</th>
            <th className="py-1.5 pr-3 font-medium">Se lit</th>
            <th className="py-1.5 font-medium">Signification</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((s) => (
            <tr key={s.symbol} className="border-b border-slate-100">
              <td className="py-2 pr-3 whitespace-nowrap">
                <SymbolDisplay symbol={s.symbol} symbolLatex={s.symbolLatex} />
              </td>
              <td className="py-2 pr-3 text-slate-600 italic whitespace-nowrap">{s.lecture}</td>
              <td className="py-2 text-slate-700">{s.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { SymbolsTable }
