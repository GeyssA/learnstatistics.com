import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { getModule, type ModuleId } from '../data/modules'
import { getQuizzesForModule } from '../data/quizzes'
import { FrequencyExplorer, HistogramExplorer, BinomialChart, NormalCurve, BoxPlotExplorer, PoissonChart } from '../components/Charts'
import { QuizPanel } from '../components/QuizPanel'
import { VariableTypeQuiz } from '../components/VariableTypeQuiz'
import { DiceGame } from '../components/DiceGame'
import { UrnGame } from '../components/UrnGame'
import { BayesCalculator } from '../components/BayesCalculator'
import { ConfidenceIntervalTool } from '../components/ConfidenceIntervalTool'
import { CardQuiz } from '../components/CardQuiz'
import { CorrectifRouter } from '../components/CorrectifRouter'
import { ExamenView } from '../components/ExamenView'
import { FormulaireView } from '../components/FormulaCard'
import { TheoryHTML } from '../components/Math'
import { getCorrectifsForModule } from '../data/correctifs'
import { getExamenForModule } from '../data/examen'
import { dureesPhenomene, notesInterro, hemoglobineData, poidsPorcs } from '../data/datasets'

type Tab = 'theorie' | 'pratique' | 'correctif' | 'examen' | 'quiz' | 'jeu'

const tabs: { id: Tab; label: string }[] = [
  { id: 'theorie', label: 'Théorie' },
  { id: 'pratique', label: 'Pratique' },
  { id: 'correctif', label: 'Correctif' },
  { id: 'examen', label: 'Examen' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'jeu', label: 'Jeu' },
]

export function ModulePage() {
  const { moduleId } = useParams<{ moduleId: ModuleId }>()
  const mod = moduleId ? getModule(moduleId) : undefined
  const [tab, setTab] = useState<Tab>('theorie')
  const [sectionIdx, setSectionIdx] = useState(0)
  const [binomN, setBinomN] = useState(6)
  const [binomP, setBinomP] = useState(0.3)
  const [poissonLambda, setPoissonLambda] = useState(2)

  if (!mod) return <Navigate to="/" replace />

  const section = mod.sections[sectionIdx]
  const quizzes = getQuizzesForModule(mod.id)
  const correctifs = getCorrectifsForModule(mod.id)
  const examen = getExamenForModule(mod.id)
  const isFormulaire = mod.id === 'formulaire'
  const visibleTabs = isFormulaire
    ? tabs.filter((t) => t.id === 'theorie')
    : tabs.filter((t) => {
        if (t.id === 'jeu' && !mod.hasGame) return false
        if (t.id === 'correctif' && !correctifs) return false
        if (t.id === 'examen' && !examen) return false
        return true
      })

  function renderPractice() {
    switch (mod!.id) {
      case 'descriptive':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Variables discrètes — Poussins par poule</h3>
              <FrequencyExplorer />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Variables continues — Durées (TP1 Ex.2)</h3>
              <HistogramExplorer
                values={dureesPhenomene}
                title="Durée du phénomène (secondes)"
                xLabel="Classes (s)"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Notes d'interrogation (TP1 Ex.1)</h3>
              <HistogramExplorer values={notesInterro} title="Notes /20" xLabel="Note" numClasses={6} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Poids des porcs (TP1 Ex.3)</h3>
              <HistogramExplorer values={poidsPorcs} title="Poids (kg)" xLabel="Classes (kg)" numClasses={10} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Taux d'hémoglobine — boîte à moustaches (TP1 Ex.4)</h3>
              <BoxPlotExplorer values={hemoglobineData} title="Hémoglobine (g/L)" unit=" g/L" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Identifier les types de variables</h3>
              <VariableTypeQuiz />
            </div>
          </div>
        )
      case 'probabilites':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Calculateur de Bayes — Test diagnostique</h3>
              <BayesCalculator />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Probabilités sur un jeu de cartes (TP3)</h3>
              <CardQuiz />
            </div>
          </div>
        )
      case 'variables-aleatoires':
        return (
          <div className="space-y-8">
            <div className="flex flex-wrap gap-4 items-end">
              <div>
                <label className="text-sm text-slate-600">n (épreuves)</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={binomN}
                  onChange={(e) => setBinomN(Number(e.target.value))}
                  className="block w-20 mt-1 px-2 py-1 border rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-slate-600">p (succès)</label>
                <input
                  type="number"
                  min={0}
                  max={1}
                  step={0.05}
                  value={binomP}
                  onChange={(e) => setBinomP(Number(e.target.value))}
                  className="block w-24 mt-1 px-2 py-1 border rounded-lg"
                />
              </div>
            </div>
            <BinomialChart n={binomN} p={binomP} />
            <div className="flex flex-wrap gap-4 items-end">
              <div>
                <label className="text-sm text-slate-600">λ (moyenne par unité)</label>
                <input
                  type="number"
                  min={0.1}
                  max={15}
                  step={0.5}
                  value={poissonLambda}
                  onChange={(e) => setPoissonLambda(Number(e.target.value))}
                  className="block w-24 mt-1 px-2 py-1 border rounded-lg"
                />
              </div>
            </div>
            <PoissonChart lambda={poissonLambda} />
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Loi normale — Taille des hommes (TP5)</h3>
              <NormalCurve mu={169} sigma={5.6} highlight={155} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Loi normale — Poids nouveau-nés (TP5)</h3>
              <NormalCurve mu={3334} sigma={400} />
            </div>
          </div>
        )
      case 'inference':
        return (
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Intervalle de confiance de la moyenne</h3>
            <ConfidenceIntervalTool />
          </div>
        )
      case 'formulaire':
        return null
      default:
        return null
    }
  }

  function renderGame() {
    switch (mod!.id) {
      case 'probabilites':
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Lancer de dés</h3>
              <DiceGame />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Tirage d'urne</h3>
              <UrnGame />
            </div>
          </div>
        )
      case 'variables-aleatoires':
        return (
          <div className="max-w-md mx-auto">
            <h3 className="font-semibold text-slate-800 mb-4 text-center">Lancer de dés — Espérance</h3>
            <p className="text-sm text-slate-500 text-center mb-4">
              TP4 Q1 : gain selon le numéro. Lancez et observez la convergence vers E(X).
            </p>
            <DiceGame />
          </div>
        )
      default:
        return <p className="text-slate-500">Pas de jeu pour ce module.</p>
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600 mb-6"
      >
        <ChevronLeft size={16} /> Accueil
      </Link>

      <div className="mb-8">
          {mod.number > 0 && (
            <div className="text-xs font-medium text-slate-400 uppercase">Chapitre {mod.number}</div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{mod.title}</h1>
          <p className="text-slate-500 mt-1">{mod.subtitle} — {mod.source}</p>
      </div>

      <div className="flex gap-1 border-b border-slate-200 mb-6 overflow-x-auto">
        {visibleTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id
                  ? 'border-brand-500 text-brand-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {tab === 'theorie' && (
          <aside className="lg:col-span-1">
            <nav className="space-y-1 sticky top-20">
              {mod.sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSectionIdx(i)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    sectionIdx === i
                      ? 'bg-brand-100 text-brand-800 font-medium'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </nav>
          </aside>
        )}

        <div className={tab === 'theorie' ? 'lg:col-span-3' : 'lg:col-span-4'}>
          {tab === 'theorie' && isFormulaire && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <FormulaireView
                chapterId={section?.id === 'overview' ? undefined : section?.id}
              />
            </div>
          )}

          {tab === 'theorie' && !isFormulaire && section && (
            <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 prose max-w-none">
              <h2 className="!mt-0 text-xl font-bold text-slate-800">{section.title}</h2>
              <TheoryHTML html={section.theory} />
              {section.practiceHint && (
                <div className="mt-6 p-4 bg-brand-50 border border-brand-100 rounded-xl text-sm text-brand-800 not-prose">
                  💡 <strong>À pratiquer :</strong> {section.practiceHint}
                </div>
              )}
            </article>
          )}

          {tab === 'pratique' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              {renderPractice()}
            </div>
          )}

          {tab === 'correctif' && correctifs && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <CorrectifRouter
                correctifs={correctifs}
                storagePrefix={`tp-${mod.id}`}
                introText="Complète chaque exercice du TP dans la zone « Ton travail ». Quand tu es prête, clique sur Montrer la résolution pour comparer avec le corrigé."
              />
            </div>
          )}

          {tab === 'examen' && examen && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <ExamenView correctifs={examen} />
            </div>
          )}

          {tab === 'quiz' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <QuizPanel questions={quizzes} title={`Quiz — ${mod.title}`} />
            </div>
          )}

          {tab === 'jeu' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">{renderGame()}</div>
          )}
        </div>
      </div>
    </div>
  )
}
