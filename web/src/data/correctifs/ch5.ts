import type { ModuleCorrectifs } from './index'

export const correctifInference: ModuleCorrectifs = {
  moduleId: 'inference',
  tpLabel: 'Chapitre 5 — Exercices d\'inférence',
  intro:
    'Pas de TP dédié pour ce chapitre : les corrigés reprennent les exercices-types du Chapitre 5 et du formulaire (intervalles de confiance, tests de conformité, comparaison de moyennes). Même méthode que pour les TPs : poser les hypothèses, choisir la formule, interpréter.',
  exercises: [
    {
      id: 'ch5-ic-moyenne',
      number: 'Exercice-type 1',
      title: 'Intervalle de confiance de la moyenne',
        enonce:
        '<p>Un échantillon de n = 32 animaux donne une masse moyenne $\\bar{x} = 75$ kg et un écart-type S = 10 kg. Construire un IC à 95 % pour $\\mu$.</p>',
      steps: [
        {
          title: 'Vérifier les conditions',
          content: `
            <p>n = 32 ≥ 30 → on peut utiliser l'approximation normale (z) même si σ est inconnu (S est une bonne estimation).</p>
            <p>Niveau de confiance 95 % → $z_{1-\\alpha/2} = 1{,}96$</p>
          `,
        },
        {
          title: "Marge d'erreur",
          content: `
            <p>$$E = z \\times \\frac{S}{\\sqrt{n}} = 1{,}96 \\times \\frac{10}{\\sqrt{32}} = 1{,}96 \\times 1{,}768 \\approx 3{,}46 \\text{ kg}$$</p>
          `,
        },
        {
          title: 'Intervalle',
          content: `
            <p>$$\\mu \\in [75 - 3{,}46 \\ ; \\ 75 + 3{,}46] = [71{,}54 \\ ; \\ 78{,}46] \\text{ kg}$$</p>
            <p><strong>Interprétation :</strong> avec un risque de 5 % d'erreur, la vraie masse moyenne de la population se situe entre 71,5 et 78,5 kg.</p>
          `,
        },
      ],
      resultat: '<p><strong>IC₉₅ % : [71,5 ; 78,5] kg</strong></p>',
    },
    {
      id: 'ch5-test-moyenne',
      number: 'Exercice-type 2',
      title: 'Test de conformité d\'une moyenne',
        enonce:
        '<p>Un laboratoire annonce un dosage moyen $\\mu_0 = 500$ mg. Sur n = 25 échantillons : $\\bar{x} = 485$ mg, S = 20 mg. Le dosage est-il conforme (test bilatéral à 5 %) ?</p>',
      steps: [
        {
          title: 'Hypothèses',
          content: `
            <p>$H_0 : \\mu = 500$ mg (conforme) · $H_1 : \\mu \\neq 500$ mg</p>
            <p>$\\alpha = 5\\ \\%$ → on rejette $H_0$ si $|z_{obs}| > 1{,}96$</p>
          `,
        },
        {
          title: 'Statistique de test',
          content: `
            <p>n &lt; 30 → on utilise t ou approximation si n proche de 30. Ici :</p>
            <p>$$z_{obs} = \\frac{\\bar{x} - \\mu_0}{S/\\sqrt{n}} = \\frac{485 - 500}{20/\\sqrt{25}} = \\frac{-15}{4} = -3{,}75$$</p>
          `,
        },
        {
          title: 'Conclusion',
          content: `
            <p>$|z_{obs}| = 3{,}75 > 1{,}96$ → on <strong>rejette H₀</strong>.</p>
            <p>Le dosage observé diffère significativement de 500 mg. Le produit n'est pas conforme à la norme annoncée.</p>
          `,
        },
      ],
      resultat: '<p><strong>z_obs = −3,75 → rejet de H₀ — non conforme</strong></p>',
    },
    {
      id: 'ch5-ic-proportion',
      number: 'Exercice-type 3',
      title: 'Intervalle de confiance d\'une proportion',
      enonce:
        '<p>Sur 200 animaux testés, 18 sont positifs. Estimer la prévalence p avec un IC à 95 %.</p>',
      steps: [
        {
          title: 'Estimateur et conditions',
          content: `
            <p>$\\hat{P} = 18/200 = 0{,}09$ · $\\hat{Q} = 0{,}91$</p>
            <p>$n\\hat{p} = 18 \\geq 5$ et $n\\hat{q} = 182 \\geq 5$ → approximation normale valide.</p>
          `,
        },
        {
          title: 'Calcul',
          content: `
            <p>$$E = 1{,}96 \\sqrt{\\frac{\\hat{p}\\hat{q}}{n}} = 1{,}96 \\sqrt{\\frac{0{,}09 \\times 0{,}91}{200}} \\approx 0{,}040$$</p>
            <p>$$p \\in [0{,}09 - 0{,}040 \\ ; \\ 0{,}09 + 0{,}040] = [0{,}050 \\ ; \\ 0{,}130]$$</p>
          `,
        },
      ],
      resultat: '<p><strong>Prévalence estimée 9 % · IC₉₅ % : [5,0 % ; 13,0 %]</strong></p>',
    },
    {
      id: 'ch5-test-proportion',
      number: 'Exercice-type 4',
      title: 'Test de conformité d\'une proportion',
      enonce:
        '<p>Le taux de défaut annoncé est p₀ = 2 %. Sur 400 pièces, 14 sont défectueuses. Ce taux est-il respecté (α = 5 %) ?</p>',
      steps: [
        {
          title: 'Hypothèses et statistique',
          content: `
            <p>$H_0 : p = 0{,}02$ · $H_1 : p \\neq 0{,}02$</p>
            <p>$\\hat{P} = 14/400 = 0{,}035$</p>
            <p>$$z_{obs} = \\frac{\\hat{P} - p_0}{\\sqrt{p_0 q_0 / n}} = \\frac{0{,}035 - 0{,}02}{\\sqrt{0{,}02 \\times 0{,}98 / 400}} = \\frac{0{,}015}{0{,}007} \\approx 2{,}14$$</p>
          `,
        },
        {
          title: 'Conclusion',
          content: `
            <p>$|z_{obs}| = 2{,}14 > 1{,}96$ → on <strong>rejette H₀</strong>.</p>
            <p>Le taux observé (3,5 %) est significativement supérieur au taux annoncé de 2 %.</p>
          `,
        },
      ],
      resultat: '<p><strong>z_obs ≈ 2,14 → taux non conforme</strong></p>',
    },
    {
      id: 'ch5-comparaison',
      number: 'Exercice-type 5',
      title: 'Comparaison de deux moyennes',
        enonce:
        '<p>Groupe A : $n_1 = 30$, $\\bar{x}_1 = 12{,}5$, $S_1 = 2$. Groupe B : $n_2 = 28$, $\\bar{x}_2 = 11{,}0$, $S_2 = 2{,}5$. Les moyennes diffèrent-elles ($\\alpha = 5$ %) ?</p>',
      steps: [
        {
          title: 'Hypothèses',
          content: `
            <p>$H_0 : \\mu_1 = \\mu_2$ · $H_1 : \\mu_1 \\neq \\mu_2$</p>
            <p>Écart observé : $\\bar{x}_1 - \\bar{x}_2 = 1{,}5$</p>
          `,
        },
        {
          title: 'Erreur-type de la différence',
          content: `
            <p>$$SE = \\sqrt{\\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2}} = \\sqrt{\\frac{4}{30} + \\frac{6{,}25}{28}} = \\sqrt{0{,}133 + 0{,}223} \\approx 0{,}597$$</p>
            <p>$$z_{obs} = \\frac{1{,}5}{0{,}597} \\approx 2{,}51$$</p>
          `,
        },
        {
          title: 'Conclusion',
          content: `
            <p>$2{,}51 > 1{,}96$ → différence <strong>significative</strong>.</p>
            <p>Le groupe A a une moyenne significativement plus élevée que le groupe B.</p>
          `,
        },
      ],
      resultat: '<p><strong>z_obs ≈ 2,51 → différence significative à 5 %</strong></p>',
    },
  ],
}
