import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { decodeLatex, sanitizeLatex } from '../lib/latex'
import { preprocessMathHtml } from '../lib/htmlMath'

interface MathDisplayProps {
  latex: string
  className?: string
}

/** Équation centrée en bloc (fractions, sommes, etc.) */
export function MathDisplay({ latex, className = '' }: MathDisplayProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || !latex) return
    try {
      katex.render(latex, ref.current, {
        displayMode: true,
        throwOnError: false,
        strict: 'ignore',
        trust: true,
      })
    } catch {
      ref.current.textContent = latex
    }
  }, [latex])

  return (
    <div
      ref={ref}
      className={`math-display overflow-x-auto py-1 ${className}`}
      aria-label="Formule mathématique"
    />
  )
}

interface MathInlineProps {
  latex: string
  className?: string
}

/** Formule dans le texte (inline) */
export function MathInline({ latex, className = '' }: MathInlineProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current || !latex) return
    try {
      katex.render(latex, ref.current, {
        displayMode: false,
        throwOnError: false,
        strict: 'ignore',
      })
    } catch {
      ref.current.textContent = latex
    }
  }, [latex])

  return <span ref={ref} className={`math-inline ${className}`} />
}

/** Rend toutes les formules [data-latex] dans un conteneur HTML */
export function renderMathInElement(container: HTMLElement) {
  container.querySelectorAll<HTMLElement>('[data-latex]').forEach((el) => {
    const encoded = el.getAttribute('data-latex')
    if (!encoded) return
    const latex = sanitizeLatex(decodeLatex(encoded))
    const display = el.classList.contains('math-display') || el.classList.contains('formula-expr')
    try {
      katex.render(latex, el, {
        displayMode: display,
        throwOnError: false,
        strict: 'ignore',
        trust: true,
      })
    } catch {
      el.textContent = latex
    }
  })
}

interface TheoryHTMLProps {
  html: string
  className?: string
}

/** Contenu théorique HTML avec rendu KaTeX automatique */
export function TheoryHTML({ html, className = '' }: TheoryHTMLProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = preprocessMathHtml(html)
    renderMathInElement(ref.current)
  }, [html])

  return <div ref={ref} className={className} />
}
