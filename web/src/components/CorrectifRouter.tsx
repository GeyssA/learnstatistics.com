import type { ModuleCorrectifs } from '../data/correctifs'
import { useAccess } from '../context/AccessContext'
import { CorrectifView } from './CorrectifView'
import { StudentWorkView } from './StudentWorkView'

interface CorrectifRouterProps {
  correctifs: ModuleCorrectifs
  /** Préfixe de stockage local (ex. examen, tp-descriptive) */
  storagePrefix: string
  introText?: string
}

/** Corrigé complet (prof) ou version à compléter (étudiant). */
export function CorrectifRouter({ correctifs, storagePrefix, introText }: CorrectifRouterProps) {
  const { role } = useAccess()

  if (role === 'teacher') {
    return <CorrectifView correctifs={correctifs} />
  }

  return (
    <StudentWorkView
      correctifs={correctifs}
      storagePrefix={storagePrefix}
      introText={introText}
    />
  )
}
