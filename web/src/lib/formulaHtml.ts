import { encodeLatex, resolveSymbolLatex } from '../lib/latex'

/** Génère un encadré pédagogique HTML avec formule KaTeX */
export function formulaBlock(
  latex: string,
  lecture: string,
  comprehension: string,
  utilisation: string,
  symbols?: { symbol: string; role: string; symbolLatex?: string }[]
): string {
  const symbolsHtml = symbols?.length
    ? `<div class="mt-2 pt-2 border-t border-brand-100"><strong class="label-read">Symboles :</strong> ${symbols
        .map((s) => {
          const latex = resolveSymbolLatex(s.symbol, s.symbolLatex)
          const sym = latex
            ? `<span class="math-inline" data-latex="${encodeLatex(latex)}"></span>`
            : `<span class="font-mono text-brand-700">${s.symbol}</span>`
          return `${sym} = ${s.role}`
        })
        .join(' · ')}</div>`
    : ''

  return `
<div class="formula-block">
  <div class="formula-expr math-display" data-latex="${encodeLatex(latex)}"></div>
  <div class="formula-body">
    <p><strong class="label-read">Lecture :</strong> ${lecture}</p>
    <p><strong class="label-understand">Comprendre :</strong> ${comprehension}</p>
    <p><strong class="label-use">Utilisation :</strong> ${utilisation}</p>
    ${symbolsHtml}
  </div>
</div>`
}
