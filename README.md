# Pilates Studio V1.1

Préversion React + TypeScript + Vite, Android Capacitor. Aucun entraînement validé ni diffusion Google Play.

```sh
npm ci
npm run dev
npm run verify
npm run test:e2e
npm run android:sync
npm run android:debug
```

Tests navigateur : `npx playwright install chromium`, puis `STANDARD_CHROMIUM=true npm run test:e2e` sur une installation standard. Le navigateur alternatif du poste de travail est configurable dans `playwright.config.ts`.

Voir [cahier des charges](docs/CAHIER_DES_CHARGES.md), [état des lieux](docs/IMPLEMENTATION_STATUS.md), [qualité et retour arrière](docs/QUALITY_AND_ROLLBACK.md) et [bibliothèque internationale](docs/INTERNATIONAL_LIBRARY.md).

`npm run release:gate` bloque volontairement une diffusion tant que les preuves requises ne sont pas acquises. La prévisualisation web sert à revoir la démonstration ; elle ne publie aucun contenu pédagogique validé.
