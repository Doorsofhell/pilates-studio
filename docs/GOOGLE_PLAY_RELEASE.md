# Publication Android — Pilates Studio

## État actuel
Le dépôt comprend la configuration Capacitor et un workflow pour compiler un APK debug. Le build Android doit réussir avant de considérer l'APK comme disponible. Aucun AAB signé n'est encore livré.

## Identité Android
- Application : Pilates Studio
- Application ID : `com.doorsofhell.pilatesstudio`
- Identifiant permanent : à valider avant la première publication Google Play. Il ne pourra pas être changé pour cette fiche Play Store.
- Version initiale : 1.0.0

## Compiler localement
Installer Node.js 22+, JDK 21 et Android SDK.
```bash
npm install
npm run build
npx cap add android
npm run android:sync
cd android
./gradlew assembleDebug
```
APK de test : `android/app/build/outputs/apk/debug/app-debug.apk`.

## Google Play
1. Disposer d'un compte Google Play Console et vérifier son identité.
2. Confirmer le nom, l'ID d'application, la classification, les pays et le modèle économique.
3. Fournir icône 512x512, bannière 1024x500, captures Android réelles et description.
4. Fournir une URL publique de politique de confidentialité et compléter les formulaires Sécurité des données, accès à l'application, public cible et classification du contenu.
5. Vérifier les exigences de niveau d'API Android et des tests fermés applicables au compte au moment du dépôt.
6. Préparer des icônes Android adaptatives, une page de démarrage et vérifier l'affichage sur appareils réels.
7. Générer une clé d'envoi conservée hors GitHub, activer Play App Signing et configurer la signature de l'AAB.
8. Tester installation, navigation, lecteur audio, veille, hors-ligne, accessibilité et performances.
9. Importer un AAB signé dans une piste de test Google Play avant production.

## Attention
L'application actuelle utilise une voix synthétique dépendant de l'appareil et une illustration de coach. Elle ne doit pas être présentée comme une application de correction posturale 3D.
Le Reformer requiert des instructions validées par un professionnel qualifié.
Ne jamais placer de clé de signature ou de mot de passe dans le dépôt.
