import { encodeLatex, sanitizeLatex } from './latex'

function mathDisplay(latex: string): string {
  return `<div class="math-display my-3 overflow-x-auto py-1" data-latex="${encodeLatex(sanitizeLatex(latex.trim()))}"></div>`
}

function mathInline(latex: string): string {
  return `<span class="math-inline" data-latex="${encodeLatex(sanitizeLatex(latex.trim()))}"></span>`
}

/** Symboles Unicode fréquents dans les correctifs → LaTeX inline */
const UNICODE_INLINE: [string, string][] = [
  ['x\u0304', '\\bar{x}'], // x + combinaison macron
  ['x\u0303', '\\tilde{x}'],
  ['x̄', '\\bar{x}'],
  ['x̃', '\\tilde{x}'],
  ['x\u0304\u2081', '\\bar{x}_1'],
  ['x\u0304\u2082', '\\bar{x}_2'],
  ['x̄₁', '\\bar{x}_1'],
  ['x̄₂', '\\bar{x}_2'],
  ['μ', '\\mu'],
  ['σ', '\\sigma'],
  ['λ', '\\lambda'],
  ['α', '\\alpha'],
  ['β', '\\beta'],
  ['χ', '\\chi'],
  ['Σ', '\\Sigma'],
  ['≤', '\\leq'],
  ['≥', '\\geq'],
  ['≠', '\\neq'],
  ['±', '\\pm'],
  ['→', '\\rightarrow'],
  ['∩', '\\cap'],
  ['∪', '\\cup'],
  ['∈', '\\in'],
  ['₀', '_0'],
  ['₁', '_1'],
  ['₂', '_2'],
  ['₃', '_3'],
]

/**
 * Transforme $$...$$ et $...$ en éléments data-latex,
 * puis remplace les symboles Unicode problématiques (x̄ mal rendu, etc.).
 */
export function preprocessMathHtml(html: string): string {
  let out = html

  // <p>$$…$$</p> est invalide (div généré à l'intérieur du p) → casse le rendu
  out = out.replace(/<p>\s*(\$\$[\s\S]*?\$\$)\s*<\/p>/gi, '<div class="math-block">$1</div>')

  // Blocs display $$ ... $$
  out = out.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex: string) => mathDisplay(latex))

  // Inline $ ... $ (pas $$)
  out = out.replace(/(^|[^$\\])\$([^$\n]+?)\$(?!\$)/g, (_, prefix: string, latex: string) => {
    return `${prefix}${mathInline(latex)}`
  })

  // S², S^2 hors LaTeX
  out = out.replace(/S²/g, mathInline('S^2'))
  out = out.replace(/σ²/g, mathInline('\\sigma^2'))
  out = out.replace(/σ̂²/g, mathInline('\\hat{\\sigma}^2'))

  // Q₁, Q₂, Q₃
  out = out.replace(/Q₁/g, mathInline('Q_1'))
  out = out.replace(/Q₂/g, mathInline('Q_2'))
  out = out.replace(/Q₃/g, mathInline('Q_3'))

  for (const [unicode, latex] of UNICODE_INLINE) {
    if (out.includes(unicode)) {
      out = out.split(unicode).join(mathInline(latex))
    }
  }

  return out
}
