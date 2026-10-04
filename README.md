# RKG App

A small React Native app made for RKG (Ruskursusgruppen), a student orientation group at DIKU, University of Copenhagen. The UI is in Danish.

> **Status:** unmaintained. The code is published as-is, without support.

## Screens

- **42/43**: song lyrics
- **Adam & Eva**: a compass that points towards a fixed coordinate and plays a sound when you face it (the audio file is not included; add your own as `drikLoop.mp3` to the iOS bundle, or change the name in `src/screens/AdamOgEva.tsx`)
- **Kalender**: an embedded Google Calendar
- **Caféen?**: a periodically refreshed image from an external server
- **Er det tirsdag?**: what do you think

## Getting started

Requires Node 18+, Xcode (iOS) and/or Android Studio (Android). See the [React Native environment setup](https://reactnative.dev/docs/environment-setup).

```bash
yarn install

# iOS only
bundle install
cd ios && bundle exec pod install && cd ..

yarn ios      # or: yarn android
```

## Configuration you need to provide

Secrets and signing details have been removed from the repository:

- **iOS:** select your own development team and bundle identifier in Xcode.
- **Android release builds:** add your own keystore and `MYAPP_UPLOAD_*` properties to `~/.gradle/gradle.properties`.
- The Firebase configuration file is not included, and the app does not currently use Firebase.

## License

The source code is released under the [MIT License](LICENSE). The RKG logo, app icons, images, audio and song lyrics are not covered by that license and may be subject to separate rights.
