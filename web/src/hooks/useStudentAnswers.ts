import { useCallback, useEffect, useState } from 'react'

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* quota / mode privé */
  }
}

function answersKey(prefix: string) {
  return `learnstats-answers-${prefix}`
}

function revealedKey(prefix: string) {
  return `learnstats-revealed-${prefix}`
}

export function useStudentAnswers(prefix: string, exerciseId: string) {
  const storageKey = answersKey(prefix)

  const [answers, setAnswersState] = useState<Record<string, string>>(() => {
    const all = readJson<Record<string, Record<string, string>>>(storageKey, {})
    return all[exerciseId] ?? {}
  })

  useEffect(() => {
    const all = readJson<Record<string, Record<string, string>>>(storageKey, {})
    all[exerciseId] = answers
    writeJson(storageKey, all)
  }, [storageKey, exerciseId, answers])

  const setAnswer = useCallback((fieldId: string, value: string) => {
    setAnswersState((prev) => ({ ...prev, [fieldId]: value }))
  }, [])

  return { answers, setAnswer }
}

export function useStudentRevealed(prefix: string, exerciseId: string) {
  const storageKey = revealedKey(prefix)

  const [revealed, setRevealedState] = useState(() => {
    const ids = readJson<string[]>(storageKey, [])
    return ids.includes(exerciseId)
  })

  const setRevealed = useCallback(
    (value: boolean) => {
      setRevealedState(value)
      const ids = readJson<string[]>(storageKey, [])
      const next = value ? [...new Set([...ids, exerciseId])] : ids.filter((id) => id !== exerciseId)
      writeJson(storageKey, next)
    },
    [storageKey, exerciseId],
  )

  return { revealed, setRevealed }
}

/** @deprecated alias examen */
export function useExamAnswers(exerciseId: string) {
  return useStudentAnswers('examen', exerciseId)
}

/** @deprecated alias examen */
export function useExamRevealed(exerciseId: string) {
  return useStudentRevealed('examen', exerciseId)
}
