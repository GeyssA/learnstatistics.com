import type { ModuleId } from '../modules'
import { correctifDescriptive } from './tp1'
import { correctifProbabilites } from './tp3'
import { correctifVariablesAleatoires } from './tp4-tp5'
import { correctifInference } from './ch5'

export interface CorrectifStep {
  title: string
  content: string
}

export interface CorrectifExercise {
  id: string
  number: string
  title: string
  enonce?: string
  steps: CorrectifStep[]
  resultat?: string
}

export interface ModuleCorrectifs {
  moduleId: ModuleId
  tpLabel: string
  intro: string
  exercises: CorrectifExercise[]
}

const correctifsByModule: Partial<Record<ModuleId, ModuleCorrectifs>> = {
  descriptive: correctifDescriptive,
  probabilites: correctifProbabilites,
  'variables-aleatoires': correctifVariablesAleatoires,
  inference: correctifInference,
}

export function getCorrectifsForModule(moduleId: ModuleId): ModuleCorrectifs | undefined {
  return correctifsByModule[moduleId]
}
