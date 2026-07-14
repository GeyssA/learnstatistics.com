import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type AccessRole = 'student' | 'teacher'

interface AccessState {
  role: AccessRole | null
  displayName: string | null
  login: (code: string) => boolean
  logout: () => void
}

const STORAGE_KEY = 'learnstats-access-code'

const CODES: Record<string, { role: AccessRole; name: string }> = {
  soline: { role: 'student', name: 'Soline' },
  arnaud: { role: 'teacher', name: 'Arnaud' },
}

function readStoredCode(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function resolveCode(code: string) {
  return CODES[code.trim().toLowerCase()]
}

const AccessContext = createContext<AccessState | null>(null)

export function AccessProvider({ children }: { children: ReactNode }) {
  const [storedCode, setStoredCode] = useState<string | null>(() => readStoredCode())

  const resolved = storedCode ? resolveCode(storedCode) : null

  const login = useCallback((code: string) => {
    const match = resolveCode(code)
    if (!match) return false
    const normalized = code.trim().toLowerCase()
    localStorage.setItem(STORAGE_KEY, normalized)
    setStoredCode(normalized)
    return true
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setStoredCode(null)
  }, [])

  const value = useMemo<AccessState>(
    () => ({
      role: resolved?.role ?? null,
      displayName: resolved?.name ?? null,
      login,
      logout,
    }),
    [resolved, login, logout],
  )

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>
}

export function useAccess() {
  const ctx = useContext(AccessContext)
  if (!ctx) throw new Error('useAccess must be used within AccessProvider')
  return ctx
}
