import type { WorkField } from '../examen/studentConfig'
export const tpWorkFields: Record<string, WorkField[]> = {
  // ── TP1 — Descriptive ──
  'tp1-ex1': [
    { id: 'a-graphiques', label: 'a) Graphiques', rows: 3 },
    { id: 'b-mean', label: 'b) Moyenne x̄', rows: 2 },
    { id: 'b-var', label: 'b) Variance S² (corrigée σ̂²)', rows: 2 },
    { id: 'b-std', label: 'b) Écart-type S', rows: 2 },
    { id: 'b-work', label: 'Calculs et démarche (optionnel)', rows: 4 },
  ],
  'tp1-ex2': [
    { id: 'a-graphiques', label: 'a) Graphiques (histogramme)', rows: 2 },
    { id: 'b-mean', label: 'b) Moyenne x̄', rows: 2 },
    { id: 'b-var', label: 'b) Variance S²', rows: 2 },
    { id: 'b-std', label: 'b) Écart-type S', rows: 2 },
  ],
  'tp1-ex3': [
    { id: 'a-graphiques', label: 'a) Graphiques (histogramme + polygone cumulé)', rows: 2 },
    { id: 'b-mean', label: 'b) Moyenne x̄', rows: 2 },
    { id: 'b-mode', label: 'b) Mode', rows: 1 },
    { id: 'b-median', label: 'b) Médiane x̃', rows: 2 },
    { id: 'b-var', label: 'b) Variance S²', rows: 2 },
    { id: 'b-std', label: 'b) Écart-type S', rows: 2 },
    { id: 'b-eiq', label: 'b) Écart interquartile (EIQ)', rows: 2 },
  ],
  'tp1-ex4': [
    { id: 'a-graphiques', label: 'a) Histogramme', rows: 2 },
    { id: 'b-mean', label: 'b) Moyenne x̄', rows: 2 },
    { id: 'b-var', label: 'b) Variance S²', rows: 2 },
    { id: 'b-std', label: 'b) Écart-type S', rows: 2 },
    { id: 'c-quartiles', label: 'c) Quartiles Q₁, Q₂, Q₃', rows: 2 },
    { id: 'c-boxplot', label: 'c) Boîte à moustaches (min, max, EIQ)', rows: 4 },
  ],
  'tp1-ex5': [
    { id: 'a-q1', label: 'a) Premier quartile Q₁', rows: 2 },
    { id: 'a-q2', label: 'a) Médiane Q₂', rows: 2 },
    { id: 'a-q3', label: 'a) Troisième quartile Q₃', rows: 2 },
    { id: 'a-eiq', label: 'a) Écart interquartile EIQ', rows: 2 },
    { id: 'b-mean', label: 'b) Moyenne x̄', rows: 2 },
    { id: 'b-std', label: 'b) Écart-type S', rows: 2 },
  ],

  // ── TP3 — Probabilités ──
  'tp3-q1': [
    { id: 'modele', label: 'Modélisation (P(H), P(D|H), P(D|F)…)', rows: 4 },
    { id: 'p-total', label: 'P(D) — probabilité totale', rows: 2 },
    { id: 'bayes', label: 'P(homme | daltonien)', rows: 3 },
  ],
  'tp3-q2': [
    { id: 'a', label: 'a) Un as', rows: 1 },
    { id: 'b', label: 'b) Valet de cœur', rows: 1 },
    { id: 'c', label: 'c) 3 de trèfle OU 6 de carreau', rows: 1 },
    { id: 'd', label: 'd) Un cœur', rows: 1 },
    { id: 'e', label: 'e) Couleur sauf cœur', rows: 1 },
    { id: 'f', label: 'f) Un 10 ou un pique', rows: 2 },
    { id: 'g', label: 'g) Ni un 4 ni un trèfle', rows: 2 },
  ],
  'tp3-q3': [
    { id: 'a', label: 'a) Rouge', rows: 1 },
    { id: 'b', label: 'b) Blanche', rows: 1 },
    { id: 'c', label: 'c) Bleue', rows: 1 },
    { id: 'd', label: 'd) Non rouge', rows: 1 },
    { id: 'e', label: 'e) Rouge ou blanche', rows: 1 },
  ],
  'tp3-q4': [
    { id: 'a-remise', label: 'a) Avec remise — P(R, B, B)', rows: 3 },
    { id: 'b-sans', label: 'b) Sans remise — P(R, B, B)', rows: 3 },
  ],
  'tp3-q5': [
    { id: 'prob', label: 'P(4, 5 ou 6 au 1er ET 1, 2 ou 4 au 2e)', rows: 4 },
  ],
  'tp3-q6': [
    { id: 'a-remise', label: 'a) Deux as — avec remise', rows: 2 },
    { id: 'b-sans', label: 'b) Deux as — sans remise', rows: 2 },
  ],
  'tp3-q7': [
    { id: 'a', label: 'a) P(défectueux)', rows: 3 },
    { id: 'b', label: 'b) P(A | défectueux)', rows: 3 },
  ],
  'tp3-q8': [
    { id: 'a', label: 'a) P(M | X)', rows: 3 },
    { id: 'b', label: 'b) P(M | Y)', rows: 3 },
    { id: 'c', label: 'c) P(M | non-X et Y)', rows: 3 },
  ],
  'tp3-q9': [
    { id: 'a', label: 'a) P(test positif)', rows: 3 },
    { id: 'b', label: 'b) P(malade | test +)', rows: 3 },
  ],
  'tp3-q10': [
    { id: 'p-t', label: '1) P(test positif)', rows: 3 },
    { id: 'p-m-t', label: '2) P(malade | test +)', rows: 3 },
  ],
  'tp3-q11': [
    { id: 'rats-sains', label: '2) % de rats parmi les sains', rows: 2 },
    { id: 'p-c-m', label: '3) P(C ∩ M)', rows: 2 },
    { id: 'p-m-c', label: '4) P(M | C)', rows: 2 },
  ],

  // ── TP4 — Variables aléatoires discrètes ──
  'tp4-q1': [
    { id: 'esp', label: 'Espérance E(X)', rows: 3 },
  ],
  'tp4-q2': [
    { id: 'esp', label: 'Espérance E(X) du jeu', rows: 3 },
    { id: 'equitable', label: 'Nombre de billets x pour un jeu équitable', rows: 3 },
  ],
  'tp4-q4': [
    { id: 'loi', label: 'Loi de X (binomiale ? paramètres n, p)', rows: 2 },
    { id: 'p12', label: 'P(X = 12)', rows: 2 },
    { id: 'p-ge12', label: 'P(X ≥ 12)', rows: 2 },
  ],
  'tp4-q5': [
    { id: 'modele', label: 'Modélisation (temps, feux, loi de Y)', rows: 4 },
    { id: 'prob', label: 'P(retard au lycée)', rows: 3 },
  ],
  'tp4-q6': [
    { id: 'a', label: 'a) 3 fois à droite', rows: 3 },
    { id: 'b', label: 'b) 3 fois à gauche', rows: 3 },
  ],
  'tp4-q7': [
    { id: 'fleurs', label: 'Fleurs — P(2 blanches sur 3 cueillies)', rows: 3 },
  ],
  'tp4-q8': [
    { id: 'a-arbre', label: 'Partie A — Arbre / probabilités conjointes', rows: 5 },
    { id: 'a-vpp', label: 'Partie A — Valeur prédictive positive P(M|T)', rows: 2 },
    { id: 'a-vpn', label: 'Partie A — Valeur prédictive négative P(M̄|T̄)', rows: 2 },
    { id: 'b-loi', label: 'Partie B — Loi de X (binomiale)', rows: 2 },
    { id: 'b-p1', label: 'Partie B — P(X = 1)', rows: 2 },
    { id: 'b-pge4', label: 'Partie B — P(X ≥ 4) et interprétation', rows: 3 },
    { id: 'b-n', label: 'Partie B — Nombre de coyotes pour P(≥1 test +) ≥ 99 %', rows: 2 },
  ],

  // ── TP5 — Binomiale, Poisson, Normale ──
  'tp5-q1': [
    { id: 'p421', label: 'P(obtenir 4-2-1 en un lancer)', rows: 2 },
    { id: 'p25', label: 'P(au moins un 421 en 25 lancers)', rows: 3 },
  ],
  'tp5-q2': [
    { id: 'lambda', label: 'Paramètre λ (justification Poisson)', rows: 2 },
    { id: 'a', label: 'a) P(X = 3)', rows: 2 },
    { id: 'b', label: 'b) P(X > 2)', rows: 3 },
  ],
  'tp5-q3': [
    { id: 'lambda', label: 'Paramètre λ', rows: 2 },
    { id: 'p0', label: 'P(X = 0) — aucune bactérie', rows: 3 },
  ],
  'tp5-q4': [
    { id: 'modele', label: 'Modèle (loi, paramètres, garantie)', rows: 3 },
    { id: 'risque', label: 'Risque P(X ≥ 3) pour l\'acheteur', rows: 3 },
  ],
  'tp5-q5': [
    { id: 'q1', label: '(1) P(X < 155 cm)', rows: 2 },
    { id: 'q2', label: '(2) P(155 < X < 175 cm)', rows: 2 },
    { id: 'q3', label: '(3) Intervalle centré à 60 %', rows: 3 },
  ],
  'tp5-q6': [
    { id: 'ic', label: 'Intervalle centré à 90 % (bornes en grammes)', rows: 3 },
  ],
  'tp5-q7': [
    { id: 'q1', label: '(1) P(120 < X < 155) et effectif si N colis', rows: 3 },
    { id: 'q2', label: '(2) P(X > 185) et effectif si N colis', rows: 3 },
  ],
  'tp5-q8': [
    { id: 'm', label: 'Valeur M (moyenne à régler)', rows: 4 },
  ],
  'tp5-q9': [
    { id: 'q1', label: '1) Durée moyenne E(D)', rows: 1 },
    { id: 'q2', label: '2) P(3,5 < D < 4,5)', rows: 2 },
    { id: 'q3', label: '3) P(D < 2) — panne avant fin de garantie', rows: 2 },
  ],

  // ── Chapitre 5 — Inférence ──
  'ch5-ic-moyenne': [
    { id: 'conditions', label: 'Vérification des conditions (n, z…)', rows: 2 },
    { id: 'marge', label: 'Marge d\'erreur E', rows: 2 },
    { id: 'ic', label: 'Intervalle de confiance à 95 % pour μ', rows: 2 },
    { id: 'interp', label: 'Interprétation', rows: 2 },
  ],
  'ch5-test-moyenne': [
    { id: 'hyp', label: 'Hypothèses H₀ et H₁', rows: 2 },
    { id: 'z', label: 'Statistique z_obs', rows: 3 },
    { id: 'concl', label: 'Conclusion (rejeter / ne pas rejeter H₀)', rows: 2 },
  ],
  'ch5-ic-proportion': [
    { id: 'p-hat', label: 'Estimateur p̂', rows: 1 },
    { id: 'conditions', label: 'Conditions de validité (n p̂, n q̂ ≥ 5)', rows: 2 },
    { id: 'ic', label: 'Intervalle de confiance à 95 % pour p', rows: 3 },
  ],
  'ch5-test-proportion': [
    { id: 'hyp', label: 'Hypothèses H₀ et H₁', rows: 2 },
    { id: 'z', label: 'Statistique z_obs', rows: 3 },
    { id: 'concl', label: 'Conclusion', rows: 2 },
  ],
  'ch5-comparaison': [
    { id: 'hyp', label: 'Hypothèses H₀ et H₁', rows: 2 },
    { id: 'se', label: 'Erreur-type SE de la différence', rows: 2 },
    { id: 'z', label: 'Statistique z_obs', rows: 2 },
    { id: 'concl', label: 'Conclusion', rows: 2 },
  ],
}
