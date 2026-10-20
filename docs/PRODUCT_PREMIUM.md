# Pilates Studio Premium — Cahier des charges v1.0

## Vision
Application mobile-first de coaching Pilates au sol et Pilates Reformer, conçue pour une expérience de qualité commerciale. Une voix synthétique et un emoji ne sont pas un coach animé : la production doit intégrer un personnage articulé, des mouvements validés et un moteur de séance synchronisé.

## Socle technique cible
- React + TypeScript + Vite, navigation React Router, état Zustand
- Three.js + React Three Fiber pour visualisation 3D
- PWA installable, stockage local IndexedDB, service worker versionné
- Capacitor Android, builds APK de test et AAB Play Store
- Vitest + Playwright pour tests unitaires, E2E, accessibilité et mobile
- GitHub Actions : lint, typecheck, tests, build, déploiement GitHub Pages sur main
- Déploiement stable : https://doorsofhell.github.io/pilates-studio/
- Environnements : preview par pull request, production sur main, publication avec versions et rollback

## Navigation et expérience
1. Onboarding : objectifs, niveau, durée, fréquence, équipement, limitations volontaires.
2. Accueil : séance recommandée, reprise, programme du jour, activité, progression.
3. Explorer : Pilates tapis/Reformer, filtres, niveaux, durée, groupes musculaires, favoris.
4. Programmes : calendriers 7/14/30 jours avec adaptation, repos et reprise.
5. Player : démonstration continue, nom de l'exercice, temps/reps, posture, respiration, progression, contrôle vocal, vitesse et angles caméra.
6. Progrès : historique, adhérence, calendrier, progression sans métriques trompeuses.
7. Profil : préférences, accessibilité, langue, données personnelles, export/suppression.

## Coaching virtuel — critères d'acceptation
- Personnage 3D complet, articulé, rendu premium, silhouette anatomiquement crédible.
- Mouvements produits à partir d'animations adaptées au Pilates ; pas de simples interpolations génériques.
- Transitions fluides, respiration visuelle, synchronisation exacte des instructions et des répétitions.
- Vue de face/profil et zoom sans masquer les points d'alignement.
- Chaque exercice comporte consignes, erreurs fréquentes, variantes, contre-indications pertinentes, matériel et temps de récupération.
- Reformer : modélisation correcte du chariot, ressorts, sangles, barre, butées ; réglages conformes au fabricant et supervision qualifiée pour débutants.
- Contrôle pause/reprise, navigation entre mouvements, consignes audio françaises, sous-titres et mode silencieux.
- Validation des séquences par un instructeur Pilates qualifié avant présentation comme coaching technique fiable.

## Design system
- Identité éditoriale élégante : ivoire, prune, rose poudré, typographie expressive, cartes photographiques et micro-interactions sobres.
- Mobile-first, zones tactiles >= 44px, contraste WCAG AA, préférences de réduction du mouvement.
- États vides, chargement, erreurs, offline, reprise de séance et sauvegarde.
- Performance cible : 60 fps sur mobile compatible, dégradation 2D explicite si WebGL indisponible.

## Sécurité, données et conformité
- Ne jamais promettre une correction posturale automatique sans validation.
- Avertissements adaptés aux douleurs, blessures, grossesse, rééducation et contraintes médicales.
- Consentement explicite avant toute caméra ou collecte sensible.
- Politique de confidentialité, mentions légales, accessibilité et exigences Google Play avant publication.

## Jalons
- P1 Fondations : architecture React/TypeScript, design system, navigation, PWA, tests, CI.
- P2 Coaching : catalogue structuré, moteur d'exercices, audio synchronisé, reprise et suivi.
- P3 3D : avatar riggé, animations Pilates vérifiées, caméra et accessoires Reformer.
- P4 Personnalisation : onboarding, programmes adaptatifs, historique et synchronisation optionnelle.
- P5 Qualité : tests Android, accessibilité, performance, revue pédagogique.
- P6 Distribution : Capacitor, APK test, AAB signé, politique de confidentialité, publication Play Store.

## Situation initiale
La version actuelle est un prototype HTML/JS avec 6 séances, une voix navigateur et un pictogramme. Elle ne remplit pas encore les critères premium. Ne pas présenter les jalons non livrés comme réalisés.
