# Pilates Studio - Cahier des charges de l’application idéale
Version 1.0 - 20 octobre 2026 - Projet Doorsofhell/pilates-studio

## 1. Vision et périmètre
Application Android premium de Pilates au sol et Pilates Reformer, avec coaching audiovisuel guidé en français, programmes progressifs et suivi personnel. La version web sert à découvrir et tester les parcours ; Android est la cible principale de distribution. Une identité sobre, chaleureuse et cohérente doit accompagner des contenus pédagogiques crédibles.

Promesse : savoir quelle séance choisir, comment exécuter chaque mouvement, comment préparer son matériel et comment progresser.

Public initial : adultes débutants à avancés. Les niveaux Sol et Reformer sont indépendants. La rééducation, le diagnostic et les prescriptions médicales sont hors périmètre. Les parcours spécialisés grossesse/post-partum ne sont publiés qu’après conception et validation adaptées.

## 2. Priorités
- P0 : indispensable avant diffusion publique d’une version d’entraînement.
- P1 : expérience premium complète après stabilisation du socle.
- P2 : extensions après validation de leur utilité et faisabilité.
- Une fonctionnalité affichée doit être opérationnelle ; toute démonstration est identifiée comme telle.

## 3. Parcours et navigation
Navigation : Accueil, Séances, Programmes, Progression, Profil. Sélecteur Sol/Reformer visible dans le catalogue. Ne pas imposer un menu de personnalisation de personnage.

Premier lancement : présentation concise, choix de pratique, expérience par pratique, objectifs, fréquence, durée et matériel. Possibilité de modifier ces choix et de découvrir sans compte. Recueillir uniquement les données utilisées ; prénom facultatif, pas de poids/taille obligatoire sans finalité concrète.

Retour utilisateur : séance recommandée compatible avec son niveau et son équipement ; reprise du programme ; accès aux téléchargements et favoris. Expliquer brièvement la recommandation. Les recommandations ne déduisent aucun état médical.

Parcours séance : fiche détaillée → préparation → aperçu → entraînement → récupération → bilan → prochaine séance. Pour Reformer, la préparation et les transitions matérielles comportent une confirmation explicite.

## 4. Catalogue et fiches - P0
Chaque séance comporte un identifiant stable, un titre français, une pratique, un niveau technique, une intensité distincte, une durée calculée, un objectif, les accessoires requis, les prérequis et la version du contenu.

Recherche par titre et objectif ; filtres combinables pratique, niveau, durée, matériel et favoris ; état vide compréhensible ; réinitialisation des filtres. Aucun résultat incompatible avec un accessoire obligatoire ne doit être présenté comme directement réalisable.

Fiche : aperçu réel, déroulé, instructeur/validateur, matériel, durée, prérequis, date/version de validation et statut de téléchargement. Actions commencer, télécharger, ajouter aux favoris. Les contenus brouillon ne sont pas présentés comme validés.

## 5. Coaching guidé - P0
- Démonstration spécifique à l’exercice, corps et appuis visibles.
- Voix française intelligible et synchronisée avec les phases du mouvement.
- Position de départ, respiration, tempo, points d’attention et sortie de position.
- Préannonce de la transition avec temps d’installation séparé du temps pratiqué.
- Pause/reprise, précédente, suivante, répétition de la consigne, arrêt explicite.
- Compter le temps réellement effectué ; ne pas compter une étape passée comme réalisée.
- Pause automatique à la mise en arrière-plan pour la première version. Reprise explicite ; aucune avance cachée de la séance.
- Fin de séance enregistrée une seule fois ; séance partielle distincte d’une séance terminée.
- Bilan : durée active, exercices effectués, difficulté ressentie et possibilité de signaler un problème.
- Voix et musique indépendantes ; sous-titres et guidage textuel disponibles sans audio.

La voix système est acceptable pour une préversion identifiée. La cible premium utilise des pistes audio maîtrisées, disponibles hors connexion et associées à des repères temporels. Une simple consigne prononcée au début d’un long compte à rebours ne constitue pas le coaching final.

## 6. Coach virtuel 3D - P1
Personnages originaux avec anatomie crédible, tenue adaptée et rendu premium. Priorité à la lisibilité du geste. Animation dédiée et revue pour chaque exercice, sans boucle générique réutilisée arbitrairement.

Vues face/profil/trois-quarts pertinentes, zoom sur les appuis, vitesse réduite en mode apprentissage. Sur Reformer : déplacement du chariot cohérent, contacts pieds/barre et corps/chariot, trajectoires de sangles plausibles, absence d’interpénétration.

Pipeline : capture/animation → retargeting → contrôle des contacts → revue pédagogique → test appareil → publication versionnée. Conserver licences, sources et droits d’exploitation des modèles, animations, voix et musiques. Fournir une vidéo validée de remplacement lorsque la 3D n’est pas disponible ou performante.

Aucune correction posturale annoncée sans observation réelle. L’analyse caméra est P2 : optionnelle, consentie, avec étude des limites et traitement local privilégié.

## 7. Pilates au sol - P0
Parcours initiation : respiration, placements, contrôle, mobilité et mouvements fondamentaux. Séances sans accessoires et séances avec accessoires déclarés. Formats cibles 10 à 45 minutes, adaptés aux contenus réels.

Familles : découverte, corps entier, centre et stabilité, mobilité, équilibre et récupération. Chaque exercice dispose de variantes documentées : appuis, amplitude ou complexité adaptés. Distinguer progression technique et intensité. Ne pas promettre de transformation physique garantie ni de traitement d’une pathologie.

## 8. Pilates Reformer - P0
Profil machine : fabricant, modèle exact, système de ressorts et accessoires disponibles (box, plateforme, jumpboard si pris en charge). Le modèle inconnu ne déclenche aucune traduction automatique de résistance.

Pour chaque exercice : configuration compatible validée et versionnée, ressorts selon le modèle, position de barre, appui-tête, sangles et box lorsqu’applicables, installation, entrée/sortie et transition. Montrer la préparation avec une illustration ou vidéo pertinente.

Règles impératives :
1. Aucune couleur de ressort universelle entre marques.
2. Aucune équivalence inventée entre machines.
3. Ne pas considérer systématiquement un ressort plus faible comme plus facile.
4. Attendre la confirmation « Prêt » avant le mouvement et après chaque changement matériel.
5. Prévoir un parcours de familiarisation ; ne pas orienter automatiquement un débutant vers les mouvements avancés.
6. Si configuration non validée : accès au tutoriel et information claire, sans prescription automatique de réglage.
7. La confirmation de l’utilisateur ne remplace pas une validation professionnelle du contenu.

Publication Reformer conditionnée à la validation d’un instructeur qualifié sur les machines effectivement prises en charge. La préversion actuelle ne possède pas ce catalogue de configurations validées.

## 9. Programmes et personnalisation - P0/P1
Plans Sol, Reformer et mixtes. Chaque jour annoncé existe réellement, y compris repos explicite. Un programme de 21 jours comporte 21 entrées ; ne pas promettre 21 jours avec seulement trois séances listées.

Progression par séance et étape, reprise exacte, calendrier déplaçable, jours de récupération. Une séance indépendante ne valide pas automatiquement toutes ses occurrences dans un programme. Adapter les propositions au ressenti sans improviser de nouveaux réglages Reformer.

P1 : replanification selon disponibilité, substitution compatible et rappels contrôlés par l’utilisateur. Les séances pédagogiques validées restent la source ; une IA ne génère pas librement des prescriptions de mouvement ou de résistance.

## 10. Progression et engagement
P0 : historique daté, durée active, statut terminé/partiel, pratique et progression de programme. Favoris persistants. Gérer le fuseau horaire local pour les jours actifs.
P1 : objectif hebdomadaire, régularité, bilan mensuel, rappels facultatifs. Pas de calories présentées comme mesurées sans méthode explicite. Pas de classement culpabilisant ni de notifications commerciales pendant une séance.

## 11. Design et accessibilité - P0
Design system : typographie, palette, espacements, icônes vectorielles homogènes, composants et états. Les emojis provisoires ne représentent pas la cible graphique.

Portrait/paysage, téléphones et tablettes, zones système Android respectées. Commandes tactiles d’au moins 48 dp ; contraste WCAG AA visé ; texte agrandissable, labels lecteurs d’écran, focus visible et réduction des animations. Aucune information transmise uniquement par couleur. Dialogue séance avec focus maîtrisé et retour au déclencheur après fermeture.

États chargement, vide, erreur réseau, stockage plein, téléchargement interrompu et audio indisponible. Aucune action factice ni paiement simulé.

## 12. Architecture cible
Point de départ observé : JavaScript web, rendu dans premium.js, préférences localStorage, service worker, Capacitor 8 et workflow Android. Aucun backend ni véritable coach 3D constaté lors de l’inspection initiale.

Décision : conserver provisoirement l’enveloppe Capacitor, puis modulariser progressivement en TypeScript : domaine, moteur de séance, catalogue, profil, stockage, médias et présentation. Étudier React pour l’interface lors de cette migration ; ne pas réécrire sans inventaire et comparaison des parcours existants.

Moteur : états préparation, prêt, exercice, pause, transition, fin/abandon ; horloge monotone ; événements typés ; reprise contrôlée. Modèle de données séparé du rendu. Versions et migrations du stockage testées. Export/import local facultatif avant comptes.

Médias : manifestes versionnés, téléchargements atomiques, intégrité contrôlée, quotas visibles, suppression indépendante de l’historique. Ne pas appeler le cache de l’interface « téléchargement de séances ».

Backend P1 : authentification, synchronisation multiappareil avec résolution de conflits, droits d’accès, catalogue publié et outil éditorial. Secrets côté serveur ; aucun secret dans l’application. Historique hors connexion synchronisé par identifiants idempotents.

## 13. Modèle de données minimal
UserPreferences : pratiques, niveaux distincts, objectif, fréquence, durée et préférences audio.
EquipmentProfile : fabricant, modèle, version de configuration et accessoires.
Exercise : pratique, niveau, démonstrations, consignes, respiration, durée/répétitions, variantes et validation.
ReformerSetup : modèle compatible, réglages documentés, référence et validation.
Session : étapes ordonnées typées, matériel requis, durée calculée, version et statut éditorial.
Program : jours ordonnés (séance/repos), prérequis et règles de progression.
SessionRun : identifiant unique, version de séance, dates, temps actif, étapes accomplies/passées, statut et ressenti.
Download : manifeste, taille, version, état et intégrité.

## 14. Android et Google Play - P0 avant publication
Produire un projet Android reproductible, APK de test et AAB de diffusion signé. Gérer versionName/versionCode, signature hors dépôt, sauvegarde des clés, configuration release et permissions minimales. Tester bouton retour, interruptions, rotation, perte réseau, stockage et cycle de vie.

Préparer fiche Play : nom, description, icône, captures réelles, classification, politique de confidentialité publique, Sécurité des données et déclarations applicables aux fonctions santé/fitness. Si création de compte : suppression depuis l’application et via une ressource web externe, avec gestion des données associées.

Si abonnement : prix, période, essai, renouvellement et gestion explicites ; intégration de facturation et vérification des droits conforme aux programmes Google applicables. Aucune ouverture commerciale avant fonctionnement réel du paiement et des restaurations.

Niveau d’API cible, compatibilité native, exigences de tests du compte et politiques de paiement : vérifier les règles officielles en vigueur au moment du dépôt. Ne pas figer ici des seuils susceptibles d’évoluer. Google Play reste décisionnaire de l’acceptation.

## 15. Qualité, sécurité et contenu
Aucun contenu d’entraînement publié sans revue pédagogique. Identité du validateur et version conservées. Séparer brouillon, démonstration et publié. Les anciens historiques doivent survivre aux migrations ; procédure de retour arrière documentée.

Tests prioritaires : moteur de temps, pause/arrière-plan, transitions Reformer, absence de faux accomplissement, persistance, progression des programmes, téléchargements et droits. Tests UI des cinq parcours principaux ; essais sur au moins un appareil Android modeste et un appareil récent, portrait/paysage et sans réseau.

Cibles produit à mesurer : interface utilisable en moins de 3 secondes sur appareil de référence, interactions fluides, aucune perte d’historique et aucun crash bloquant dans les parcours de recette. Ces valeurs sont des objectifs, pas des mesures acquises.

## 16. Critères de recette
| ID | Scénario | Résultat attendu |
|---|---|---|
| R01 | Choisir Sol puis Reformer | Catalogue et prérequis distincts |
| R02 | Ouvrir une séance Reformer | Aucune avance avant préparation confirmée |
| R03 | Changer une configuration | Nouvelle pause de préparation obligatoire |
| R04 | Machine inconnue | Aucun réglage de ressort inventé |
| R05 | Passer une étape | Étape non comptée comme effectuée |
| R06 | Mettre en pause/masquer l’application | Aucun temps d’exercice ajouté pendant la pause |
| R07 | Terminer puis recharger | Une seule occurrence sauvegardée |
| R08 | Quitter puis rouvrir | Historique existant conservé |
| R09 | Programme de N jours | N entrées explicites, progression exacte |
| R10 | Télécharger puis mode avion | Audio et démonstrations réellement accessibles |
| R11 | Agrandir le texte et tourner l’écran | Commandes et consignes accessibles |
| R12 | Absence de caméra | Aucune prétention de correction posturale |
| R13 | Supprimer son compte si disponible | Parcours réel et données traitées selon politique |
| R14 | Installer le build release | Démarrage et parcours principaux vérifiés sur Android |

## 17. Plan d’exécution
Lot A : audit, ce cahier des charges, moteur de séance testable, préparation Reformer, historique fiable et durée honnête des programmes.
Lot B : schémas typés, catalogue éditorial, profils Sol/Reformer distincts, filtres combinables et onboarding.
Lot C : contenus validés, médias, voix française maîtrisée et téléchargements réels.
Lot D : coach 3D validé et optimisation sur Android.
Lot E : backend, comptes/synchronisation et abonnement si retenu.
Lot F : recette complète, signature, piste de test Play et corrections avant publication.

Chaque lot livre du code, les contrôles exécutés, les limites et les critères de recette satisfaits. Aucun lot ne doit être déclaré achevé si ses dépendances externes manquent.

## 18. Prompt d’exécution pour ce projet
Tu interviens sur Doorsofhell/pilates-studio. Utilise ce cahier des charges comme référence produit. Inspecte d’abord le dépôt et ses consignes ; préserve les données et parcours existants. Implémente par lots vérifiables, en commençant par le lot A. Sépare logique métier et rendu. Écris les tests qui couvrent les risques réels du moteur. N’invente ni modèles 3D, ni validations pédagogiques, ni réglages de ressorts, ni backend ou paiement fonctionnel. Identifie clairement les dépendances manquantes. Travaille sur une branche dédiée, prépare une pull request avec description et résultats des contrôles. Ne confonds pas build web, APK, AAB signé et publication Google Play. Pour chaque livraison, indique ce qui fonctionne réellement et le travail restant. Poursuis les lots autonomes possibles dans l’environnement disponible ; ne présente jamais une maquette comme le produit final.

## 19. Références du benchmark
Fonctionnalités observées via documentation officielle et fiches publiques ; pas de test des abonnements.
- Pilates Anytime : https://www.pilatesanytime.com/blog/more/make-every-practice-easier-with-the-new-pilates-anytime-app
- Pilatesology : https://pilatesology.com/
- Your Reformer : https://yourreformerathome.uscreen.io/
- Pilates & Fitness TV : https://www.johngareytv.com/why-pftv
- Lindywell : https://help.lindywell.com/tech-app-help
- Ressorts : https://support.pilatesanytime.com/hc/en-us/articles/16005159457947-What-Pilates-Reformer-Springs-Should-I-Use
- Matériel : https://www.pilates.com/support/safety-guides/
- Google données : https://support.google.com/googleplay/android-developer/answer/10144311
- Google santé : https://support.google.com/googleplay/android-developer/answer/16679511
