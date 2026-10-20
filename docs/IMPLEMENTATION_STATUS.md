# État des lieux V1.1 - 20 octobre 2026

Décision : démonstration web préparée pour revue ; diffusion d’entraînement et Google Play bloquées.

## Réalisé
- Migration React/TypeScript/Vite issue de PR2, maintien Capacitor et projet Android versionné (versionName 1.1.0, versionCode 11).
- Navigation cinq entrées, identité sauge/crème, responsive, formulaires de découverte sans compte, expériences Sol/Reformer distinctes à sept niveaux, objectifs/durée/fréquence/accessoires/machine.
- Conservation des 8 identifiants de séances et des 3 parcours ; favoris, historique et profil hérités ; sauvegarde brute de migration et procédure de retour arrière.
- Moteur indépendant du rendu : horloge monotone contrôlable, préparation/transitions exclues, pause, arrêt, étapes passées distinctes, durée active plafonnée, résultat partiel/terminé, identifiant de sauvegarde unique et reprise explicitement confirmée.
- Lecteur de démonstration au sol, consignes visibles sans audio, voix système explicitement de préversion, bilan et ressenti ; Reformer non validé bloqué au lancement.
- Recherche et filtres combinables ; historique ancien au statut inconnu ; progression par identifiant d’occurrence, aucune validation en masse.
- Schémas éditoriaux techniques/séances/programmes, contrôle des sources/médias/version/validation professionnelle/machine/durée/jours, détection des séquences identiques.
- Infrastructure de téléchargement testée : quota, SHA-256, staging, annulation/reprise, suppression des caches médias séparée des données. Pas de téléchargement utilisateur sans médias validés.
- Cartographie internationale et plan éditorial 140 puis 1 000 séances : `INTERNATIONAL_LIBRARY.md`. Ce sont des cibles, pas des contenus disponibles.

## Vérifications locales
Environnement Linux x64, Node 24.19.0, npm, Chromium headless provenant du paquet @sparticuz/chromium (bibliothèques logicielles extraites). Aucun téléphone Android connecté, SDK Android absent, JDK local 17 (la CI utilise 21).

| Contrôle | Résultat |
|---|---|
| TypeScript strict + ESLint | Réussis |
| Tests Vitest | 24 réussis |
| Tests historiques PR3 | 7 réussis ; exécutent la référence historique séparée |
| Parcours Playwright | 5 réussis : onboarding/reload, filtres/favoris/blocage Reformer, pause/passage/bilan, cinq pages + axe, formats/tablette/texte agrandi/retour web |
| Accessibilité automatique | Aucun échec axe WCAG2 A/AA sur les cinq pages testées |
| Captures | Cinq écrans V1.1 et référence PR3 reconstituée ; pas de référence différentielle approuvée |
| Build production web | Réussi |
| Capacitor add/sync Android | Réussis |
| APK/AAB et appareils | Non exécutés localement ; CI APK configurée, aucun AAB signé |
| Scan source ciblé | Réussi ; ne remplace pas un audit complet |
| npm audit | 0 élevée/critique ; 3 modérées liées à Capacitor CLI / xcode / uuid, outillage de développement à surveiller |
| Gate production | Échec attendu : preuves pédagogie/médias/appareils/release/mise à jour/revue visuelle/sécurité manquantes |

Les échecs intermédiaires du navigateur et du contraste ont conduit à corriger l’environnement et la UI. Une erreur d’arrondi à la seconde a été corrigée au niveau du moteur (précision milliseconde), puis le scénario contrôlé a réussi. Aucun test n’est désactivé pour masquer une erreur. Les fixtures des statistiques héritées précisent désormais leur statut terminé ; les anciens historiques sans statut ne sont plus déclarés terminés.

## Limites et suite
- 0 séance d’entraînement publiée, 0 technique validée et 0 programme validé. Les 8 contenus hérités restent des démonstrations ; pas de statut professionnel inventé.
- Pas de vidéo dédiée, de 3D, de respiration/audio synchronisés premium, de réglage Reformer validé ni de mode avion média réellement vérifié.
- Les parcours hérités n’ont pas de jours de repos nouveaux inventés. Il faut produire de vrais programmes éditoriaux complets avant publication.
- Téléchargements : moteur seul, pas de collection média/UI opérationnelle ; mode avion, interruption native et fichiers corrompus à vérifier sur appareil.
- Backend, comptes, synchronisation, abonnement et paiements absents. Aucune offre commerciale affichée.
- Revue manuelle accessibilité/lecteurs d’écran, continuité des données en vraie mise à jour Android, interruptions audio, performances/mémoire et séance complète restent requis.
- La prévisualisation ne vaut pas validation de production. Aucun Play Store ni signature de diffusion.

Les preuves distribuées par CI sont nommées avec le SHA exact ; empreintes du build conservées comme artefact. Les résultats CI/URL de prévisualisation doivent être vérifiés pour le commit effectivement publié, indépendamment des succès locaux. Protections de branche à configurer par un administrateur.

## Première exécution GitHub
Commit `318a2bbb188b6773625ba9a7ec661f094e7933e8` : contrôles `verify` et `e2e` réussis. Prévisualisation refusée avant exécution par la règle de branche de l’environnement github-pages (branche feature non autorisée). APK échoué lors de l’installation du paquet SDK obsolète `tools` ; remplacement par platform-tools et SDK/build-tools 36 dans la révision suivante. Aucun de ces échecs ne vaut validation Android ou déploiement.
