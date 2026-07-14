import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { modules } from '../data/modules'
import { formulaireChapters } from '../data/formulaire'
import { useAccess } from '../context/AccessContext'

export function HomePage() {
  const { role } = useAccess()
  const isStudent = role === 'student'
  const chapitres = modules.filter((m) => m.id !== 'formulaire')
  const formulaire = modules.find((m) => m.id === 'formulaire')!

  return (
    <div>
      {/* En-tête */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0,150 Q100,50 200,120 T400,80" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0,180 Q150,100 300,160" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
          <p className="text-brand-200 text-sm font-medium mb-3 tracking-wide uppercase">
            Helha — Biostatistique
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            LearnStatistics
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-brand-100 font-medium max-w-2xl">
            Révise le cours, les TP et prépare ton examen
          </p>
          <p className="mt-4 text-base md:text-lg text-brand-100/90 max-w-2xl leading-relaxed">
            Le formulaire reprend toutes les formules expliquées pas à pas. Chaque chapitre propose
            la théorie, des exercices interactifs, les corrigés des TP et les questions d'examen.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <a href="#formulaire" className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors">
              Formulaire
            </a>
            <a href="#chapitres" className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors">
              Chapitres
            </a>
            <a href="#examen" className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-colors">
              Examen
            </a>
          </div>
        </div>
      </section>

      {/* Rubrique 1 — Formulaire */}
      <section id="formulaire" className="bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
              Rubrique 1
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Formulaire statistiques</h2>
            <p className="text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Toutes les formules du polycopié officiel (16 pages), mais expliquées : comment les
              lire, à quoi servent les symboles, quand les utiliser, avec des exemples et les pièges
              à éviter à l'examen.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 md:p-8 md:flex md:items-start md:gap-10">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800">{formulaire.title}</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">{formulaire.description}</p>

                <ul className="mt-6 space-y-2">
                  {formulaireChapters.map((ch) => (
                    <li key={ch.id} className="flex items-baseline gap-2 text-sm text-slate-700">
                      <span className="font-mono text-xs font-bold text-brand-600 shrink-0 w-6">
                        {ch.number}.
                      </span>
                      <span>{ch.title}</span>
                      <span className="text-slate-400 text-xs">
                        ({ch.formulas.length} formule{ch.formulas.length > 1 ? 's' : ''})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 md:mt-0 md:w-56 shrink-0">
                <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-brand-600">
                    {formulaireChapters.reduce((n, c) => n + c.formulas.length, 0)}
                  </div>
                  <div className="text-sm text-brand-700 font-medium mt-1">formules détaillées</div>
                  <Link
                    to="/module/formulaire"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors text-sm"
                  >
                    Ouvrir le formulaire
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rubrique 2 — Chapitres */}
      <section id="chapitres" className="max-w-6xl mx-auto px-4 py-14 scroll-mt-20">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            Rubrique 2
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Les chapitres du cours</h2>
          <p className="text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Choisis un chapitre pour accéder à la théorie, la pratique (graphiques et outils),
            le correctif du TP, le quiz et — selon le chapitre — une question de l'examen de juin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {chapitres.map((m) => (
            <Link
              key={m.id}
              to={`/module/${m.id}`}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                    Chapitre {m.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-600 transition-colors mt-0.5">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{m.subtitle}</p>
                  <p className="text-sm text-slate-400 mt-2 line-clamp-2">{m.description}</p>
                  <p className="text-xs text-slate-400 mt-2">{m.source}</p>
                  <div className="flex gap-1.5 mt-4 flex-wrap">
                    {['Théorie', 'Pratique', 'Correctif', 'Quiz'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {m.hasGame && (
                      <span className="text-xs px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full">
                        Jeu
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-300 group-hover:text-brand-500 transition-colors shrink-0 mt-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Rubrique 3 — Examen */}
      <section id="examen" className="max-w-6xl mx-auto px-4 py-14 scroll-mt-20">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            Rubrique 3
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Examen</h2>
          <p className="text-slate-600 mt-2 max-w-2xl leading-relaxed">
            {isStudent
              ? "L'épreuve de juin à compléter en ligne : tableaux, calculs et réponses sauvegardés automatiquement. Résolution disponible question par question."
              : "L'épreuve de juin retranscrite et entièrement corrigée : énoncé réécrit, rappel des concepts, calculs détaillés et réponse finale pour chaque question."}
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Examen de biostatistique — Session de juin</h3>
                <p className="text-slate-600 mt-1">
                  5 questions · 20 points · {isStudent ? 'À compléter' : 'Corrigé pas à pas'}
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wide bg-amber-200 text-amber-900 px-3 py-1 rounded-full">
                {isStudent ? 'Mode travail' : 'Corrigé complet'}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {[
                { q: 'Q1', pts: '/3', theme: 'Poids de chiens', ch: 'Ch.1 — Descriptive', concepts: 'Tableau groupé, moyenne, médiane, écart-type' },
                { q: 'Q2', pts: '/5', theme: 'Baleineaux Minke', ch: 'Ch.4 — Loi normale', concepts: 'Intervalle centré 80 %, probabilité cumulée' },
                { q: 'Q3', pts: '/4', theme: 'Truites & parasite', ch: 'Ch.3 — Probabilités', concepts: 'Arbre, Bayes, binomiale B(5,p)' },
                { q: 'Q4', pts: '/5', theme: 'Chamois vigilance', ch: 'Ch.4 — Poisson', concepts: 'Loi P(λ), complémentaire' },
                { q: 'Q5', pts: '/3', theme: 'Moutons Texel', ch: 'Ch.5 — Inférence', concepts: 'IC à 95 % d\'une proportion' },
              ].map((item) => (
                <div key={item.q} className="bg-white/80 rounded-xl border border-amber-100 p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-bold text-amber-800">{item.q}</span>
                    <span className="text-xs text-slate-500">{item.pts} pts</span>
                  </div>
                  <div className="font-semibold text-slate-800 text-sm mt-1">{item.theme}</div>
                  <div className="text-xs text-brand-600 mt-1">{item.ch}</div>
                  <div className="text-xs text-slate-500 mt-2 leading-relaxed">{item.concepts}</div>
                </div>
              ))}
            </div>

            <Link
              to="/examen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors shadow-sm"
            >
              {isStudent ? 'Commencer l\'examen' : 'Voir le corrigé complet de l\'examen'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
