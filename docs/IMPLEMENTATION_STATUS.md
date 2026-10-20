# Livraison initiale du cahier des charges

## Implémenté
- Cahier des charges complet et prompt d’exécution : CAHIER_DES_CHARGES.md.
- Horloge monotone extraite du rendu ; durée réelle et pauses prises en compte.
- Préparation explicite à chaque étape Reformer ; le chronomètre et Suivant attendent la confirmation.
- Pause automatique lorsque l’application est masquée ; reprise manuelle.
- Historique partiel/terminé ; aucune minute inventée et aucun doublon à la double finalisation.
- Durées de programmes alignées sur les séances réellement proposées (7, 7, 3 jours).
- Gestion du focus dans le dialogue et fermeture par Échap.
- Inclusion du moteur dans le build et nouvelle version du cache de l’interface.

## Vérifié
- `npm test` : 7 tests passés, dont 3 tests d’intégration du lecteur avec environnement DOM simulé.
- `npm run build` : réussi.
- `node --check premium.js` : réussi.

## À réaliser
Ce lot est un premier incrément du lot A ; il ne constitue pas la refonte complète.
Pas de validation visuelle sur appareil, de compilation Android, de build signé ou de publication Play vérifiés ici.
Les configurations Reformer ne sont pas validées : la confirmation d’installation n’y supplée pas.
Le contenu actuel reste une démonstration provisoire. Ni les animations 3D, ni les programmes éditoriaux complets, ni les téléchargements de médias, ni le backend, ni les paiements ne sont implémentés par ce lot.
Le stockage reste local ; la reprise d’une séance après fermeture du processus et les migrations restent à développer.
