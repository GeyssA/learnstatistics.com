# LearnStatistics.com

Site interactif de biostatistique pour les étudiants Helha.

## Contenu (basé sur les PDF du cours)

- **Chapitre 1** — Statistique descriptive (variables, fréquences, moyenne, médiane, dispersion)
- **Chapitre 3** — Probabilités (événements, Bayes, tests diagnostiques)
- **Chapitre 4** — Variables aléatoires (binomiale, Poisson, normale)
- **Chapitre 5** — Inférence (estimateurs, intervalles de confiance, tests)
- **Formulaire** — Référence rapide
- **TP1, TP3, TP4, TP5** — Données et exercices intégrés

## Lancer en local

```bash
cd web
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Build production

```bash
npm run build
```

Les fichiers statiques sont dans `dist/`.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Recharts (graphiques)
- React Router
