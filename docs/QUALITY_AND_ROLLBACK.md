# Référence, non-régression et retour arrière

## Références inspectées
- main `2495692177c1cf1f8d992e8cb2aee13faf3629d8` : interface JavaScript, 8 séances, 3 programmes, favoris/profil/historique localStorage.
- PR2 `56b8dfa16aeac1201bd6616ca041efb5fe36d55d` : React/TypeScript/Vite ; 2 tests et build exécutés avant évolution.
- PR3 `b2585e6db502839eff9c91de1e44f7d8a8fa0ed9` : 7 tests et build exécutés avec succès ; conservés dans `tests/legacy` avec leur code de référence. Ces tests vérifient l’ancienne version ; les nouveaux tests du moteur vérifient la migration.
- Aucune consigne AGENTS.md dans le dépôt. PR1 contient une direction visuelle et des corrections de lecteur ; PR2 et PR3 restent ouvertes, aucune fusion/fermeture automatique.

Parcours initiaux : Accueil → lancement direct ; Explorer → catégorie/favoris ; Programmes → liste de séances ; Progression → statistiques/historique ; Profil → prénom/objectif/niveau/équipement ; lecteur → voix/pause/précédente/suivante/quitter.

Données : `ps-profile`, `ps-favorites`, `ps-history`. Aucun compte/backend, droit d’abonnement, média téléchargé, coach 3D réel ni progression de programme persistée dans main. Fixture anonyme : `tests/fixtures/legacy.json`. L’ancien `app.js` est inutilisé par le point d’entrée premium ; conservé, non chargé.

Anomalies préexistantes : programmes 14/21 jours incomplets ; faux accomplissement après étapes passées ; minute minimale inventée ; statut de fin absent ; horloge par intervalle ; absence de pause d’arrière-plan dans PR2 ; aucune validation pédagogique ; service worker référençant des fichiers absents du build Vite ; emojis comme démonstration ; aucun projet Android versionné.

## Changement pédagogique justifié
Le catalogue hérité reste consultable comme démonstration. Le démarrage Reformer est bloqué sans configuration validée. Ne pas réintroduire le démarrage d’entraînement pour « préserver » une prescription non vérifiée. Les anciens historiques restent visibles, mais leur accomplissement est inconnu ; ils ne gonflent pas les séances certifiées terminées.

## Matrice de vérification
| Exigence | Preuve automatisée | Limite |
|---|---|---|
| R01, filtres/pratiques | catalog/filter.test.ts, parcours E2E | matériel détaillé à relier aux futurs contenus |
| R02/R03/R04 | moteur contrôlé + blocage fiche Reformer | aucune machine validée |
| R05/R06/R07 | engine.test.ts, storage.test.ts, E2E pause/bilan | cycle Android physique non testé |
| R08, mise à jour | fixture migration, reload E2E, sauvegarde brute | migration WebView sur appareil requise |
| R09 | longueur des programmes, occurrence exacte | jours de repos éditoriaux à produire |
| R10 | manager.test.ts (intégrité/annulation/reprise/quota) | aucune collection média ni mode avion réel |
| R11 | axe + captures multi-tailles E2E | revue humaine et lecteur d’écran Android requis |
| R12 | aucune caméra/observation implémentée | aucun coach de posture annoncé |
| R14 | projet natif + CI assembleDebug | installation/appareils non exécutés localement |
| §§16–17 | editorial/validate.test.ts | revue humaine reste impérative |

## Migration et restauration
`migrate()` sauvegarde une fois les valeurs brutes des 3 clés dans `ps-backup-v1`, même si JSON invalide. Le stockage source n’est pas écrasé lors de la lecture. Les valeurs invalides sont filtrées pour le rendu ; les originaux restent récupérables. Les nouvelles écritures utilisent les clés historiques pour compatibilité. L’interruption est sauvegardée séparément ; la reprise ne démarre jamais automatiquement.

Avant un test de mise à jour, exporter localement les valeurs brutes. Retour arrière web : réinstaller la version stable, puis restaurer les trois valeurs depuis la sauvegarde si nécessaire (après sauvegarde du nouvel historique pour ne pas le perdre). Ne jamais supprimer `ps-history` pour effacer des médias. Android n’autorise pas normalement une baisse de versionCode : une restauration en diffusion nécessite un nouvel artefact au versionCode supérieur, compatible avec les données V2. La procédure doit être testée sur appareil avant production.

## Recette restante obligatoire
Références visuelles reconstituées depuis le worktree PR3 inchangé : `docs/screenshots/baseline`, viewport 390×844, fr-FR, Europe/Paris, données vides. Captures V1.1 : `docs/screenshots/v1.1`, même viewport avec fixture anonyme. Les données diffèrent : aucun différentiel pixel à pixel approuvé. Examiner les captures E2E, fixer les références, puis comparer les révisions suivantes avec `toHaveScreenshot` avant approbation. Tests lecteur d’écran, audio réel, interruption téléphonique, appareil modeste/récent, installation propre/mise à jour/release et mode avion non réalisés. Mesurer démarrage, mémoire et séance complète sur ces appareils avant de fixer des budgets chiffrés.

## Sécurité et diffusion
Rendu React échappé, aucun HTML injecté ; pas d’authentification ni de jeton. Profil local non destiné aux informations médicales sensibles. Permissions natives : Internet seulement ; fournisseur non exporté, activité lanceur exportée ; HTTP clair désactivé. Les contrôles sources et npm audit ne constituent pas un audit de sécurité complet. Revue des dépendances/licences natives, WebView, liens profonds, release et logs à compléter.

`npm run release:gate` échoue tant que les preuves humaines/appareil/médias manquent. Les workflows n’autorisent aucune diffusion publique automatique. GitHub : demander à un administrateur de rendre `verify`, `e2e` et `build-apk` obligatoires sur main, interdire les poussées directes et exiger une revue. Le connecteur ne possède pas les permissions d’administration pour appliquer ces règles.
