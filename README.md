# LearnStatistics.com

Site interactif de biostatistique Helha : formulaire, chapitres, TP, examen.

## Lancer en local

```bash
cd web
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Codes d'accès

- `soline` — mode étudiant (TP/examen à compléter)
- `arnaud` — mode professeur (corrigés complets)

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` publie automatiquement le site à chaque push sur `main`.

1. Activer **Settings → Pages → Source : GitHub Actions**
2. Après le premier déploiement, le site est disponible sur  
   `https://<votre-compte>.github.io/learnstatistics.com/`

Pour un domaine personnalisé (`learnstatistics.com`), ajouter un fichier `web/public/CNAME` et configurer le DNS chez votre registrar.

## Build manuel

```bash
cd web
npm run build
```

Les fichiers statiques sont dans `web/dist/`.
