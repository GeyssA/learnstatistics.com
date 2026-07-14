import { useCallback, useLayoutEffect, useRef } from 'react'

interface AutoGrowTextareaProps {
  id?: string
  value: string
  onChange: (value: string) => void
  rows?: number
  className?: string
}

/** Textarea qui grandit automatiquement avec le contenu (retours à la ligne, texte long). */
export function AutoGrowTextarea({
  id,
  value,
  onChange,
  rows = 2,
  className = '',
}: AutoGrowTextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.height = '0px'
    el.style.height = `${el.scrollHeight}px`
  }, [])

  useLayoutEffect(() => {
    adjustHeight()
  }, [value, adjustHeight])

  return (
    <textarea
      ref={ref}
      id={id}
      rows={rows}
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
        requestAnimationFrame(adjustHeight)
      }}
      className={className}
      style={{ overflow: 'hidden', resize: 'none' }}
    />
  )
}
