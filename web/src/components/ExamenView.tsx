import type { ModuleCorrectifs } from '../data/correctifs'
import { CorrectifRouter } from './CorrectifRouter'

interface ExamenViewProps {
  correctifs: ModuleCorrectifs
}

/** Affiche l'examen en mode corrigé (Arnaud) ou à compléter (Soline). */
export function ExamenView({ correctifs }: ExamenViewProps) {
  return (
    <CorrectifRouter
      correctifs={correctifs}
      storagePrefix="examen"
      introText="Complète chaque question dans la zone « Ton travail ». Quand tu es prête, clique sur Montrer la résolution pour comparer avec le corrigé."
    />
  )
}
