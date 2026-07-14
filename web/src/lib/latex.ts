/** Encode du LaTeX pour attribut HTML data-latex */
export function encodeLatex(latex: string): string {
  return encodeURIComponent(latex)
}

/** Décode depuis data-latex */
export function decodeLatex(encoded: string): string {
  return decodeURIComponent(encoded)
}

/** Corrige des motifs LaTeX fréquents qui cassent KaTeX */
export function sanitizeLatex(latex: string): string {
  return (
    latex
      // \mathbf{0{,}050} : accolades imbriquées invalides pour KaTeX
      .replace(/\\mathbf\{(\d+)\{,\}([^}]*)\}/g, '$1{,}$2')
      // % non échappé = commentaire LaTeX → formule tronquée / erreur
      .replace(/(?<!\\)%/g, '\\%')
  )
}

const GREEK: Record<string, string> = {
  μ: '\\mu',
  σ: '\\sigma',
  Σ: '\\Sigma',
  λ: '\\lambda',
  α: '\\alpha',
  β: '\\beta',
  χ: '\\chi',
  Δ: '\\Delta',
}

const SUBSCRIPT: Record<string, string> = {
  '\u1d62': '_i', // ᵢ
  '\u1d57': '_j', // ⱼ
  '\u2099': '_n', // ₙ
  '\u2096': '_k', // ₖ
  '\u2093': '_x', // ₓ
  '\u1d67': '_y', // ᵧ
  '\u2080': '_0', // ₀
  '\u2081': '_1', // ₁
  '\u2082': '_2', // ₂
  '\u2083': '_3', // ₃
  '\u208d': '_{', // ₍
  '\u208e': '}', // ₎
}

/** Convertit un symbole Unicode (x̄, xᵢ, σ²…) en LaTeX pour KaTeX inline */
export function inferSymbolLatex(symbol: string): string | null {
  const trimmed = symbol.trim()
  if (!trimmed) return null

  const hasMathUnicode =
    /[\u0300-\u036f\u2080-\u209fμσΣλαχΔ²√]/.test(trimmed) ||
    Object.keys(GREEK).some((g) => trimmed.includes(g)) ||
    Object.keys(SUBSCRIPT).some((s) => trimmed.includes(s))

  if (!hasMathUnicode) return null

  const nfd = trimmed.normalize('NFD')
  let out = ''
  let i = 0

  while (i < nfd.length) {
    const ch = nfd[i]
    const comb = nfd[i + 1]

    if (comb === '\u0304') {
      out += `\\bar{${ch}}`
      i += 2
      continue
    }
    if (comb === '\u0303') {
      out += `\\tilde{${ch}}`
      i += 2
      continue
    }
    if (comb === '\u0302') {
      out += `\\hat{${ch}}`
      i += 2
      continue
    }

    if (GREEK[ch]) {
      out += GREEK[ch]
      i++
      continue
    }
    if (SUBSCRIPT[ch]) {
      out += SUBSCRIPT[ch]
      i++
      continue
    }
    if (ch === '²') {
      out += '^2'
      i++
      continue
    }
    if (ch === '√') {
      out += '\\sqrt'
      i++
      continue
    }
    if (ch === '−') {
      out += '-'
      i++
      continue
    }

    out += ch
    i++
  }

  return out
}

export function resolveSymbolLatex(symbol: string, symbolLatex?: string): string | null {
  return symbolLatex ?? inferSymbolLatex(symbol)
}
