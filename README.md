# ISEP Lab Showcase

A universal Expo application for presenting embedded-systems and engineering laboratory projects across web, Android, and iOS.

## Current showcase

### PGSCE Samorinha — DC Motor Control

An embedded system developed with an ATmega128A for controlling the speed and direction of a DC motor.

The showcase includes:

- Fast PWM speed control using Timer2
- L298N motor-direction control
- Six physical controls using external interrupts
- Real-time status on a 16×2 LCD
- Responsive project photographs
- An optimized demonstration video
- A short engineering note about electromagnetic interference observed during testing

The original technical repository remains the source of truth for firmware, datasheets, wiring details, and laboratory documentation.

## Technology

- Expo SDK 57
- React Native
- TypeScript
- Expo Router
- Expo Video

## Requirements

- Node.js 22
- npm

The project uses `nvm` during development to keep the required Node.js version separate from the Debian system installation.

## Install

```bash
npm install
```

## Run on web

```bash
npm run web
```

## Run on Android

```bash
npm run android
```

## Run on iOS

```bash
npm run ios
```

The iOS simulator requires macOS. A physical device can also be tested through Expo tooling.

## Validation

```bash
npx tsc --noEmit
npm run lint
```

The interface should also be tested manually at desktop and mobile browser widths.

## Static deployment on Netlify

The root `netlify.toml` records the build command, publish directory and Node.js version. The application uses Expo Router static export (`web.output = "static"`).

To reproduce the export locally with Node.js 22.23.1:

```bash
npm ci
npm run lint
npx tsc --noEmit
npx expo export --platform web
```

The export writes generated HTML routes and assets to `dist/`, which remains ignored by Git. Keep `package-lock.json` committed so dependency versions can be reproduced.

### Connect the repository

1. Import `abaltazapinto/isep-lab-showcase` into Netlify and authorize GitHub repository access.
2. Select `main` as the production branch and use the repository root as the base directory.
3. Confirm the settings loaded from `netlify.toml`: build command `npx expo export --platform web`, publish directory `dist`, Node.js `22.23.1`.
4. Deploy after the configuration is available on `main`.
5. Record the assigned public URL below after checking the deployed site.

Netlify installs npm dependencies before running the build. No application secrets or backend services are required by the current static application. See Netlify's [file-based configuration](https://docs.netlify.com/build/configure-builds/file-based-configuration/) and [dependency management](https://docs.netlify.com/build/configure-builds/manage-dependencies/) documentation.

Do not add an SPA catch-all rewrite to `/index.html`. Expo generates separate HTML pages for these routes:

```text
/
/projects
/academic
/personal-labs
/about
/explore
/projects/pgsce-samorinha
/projects/dsiem-pl5-exercise-ii
/projects/dsiem-pl5-exercise-iii
```

### Production validation

Open each route directly and refresh it. Confirm `/explore` redirects to `/about`, project links and media load, desktop/mobile navigation works, and light/dark selection persists after reload. Manual production validation remains pending until confirmed.

Public URL: https://abaltaza-engineering-portfolio.netlify.app

## Project structure

```text
assets/projects/
└── pgsce-samorinha/
    ├── isep-lab-demo.mp4
    ├── project-view-1.jpg
    ├── project-view-2.jpg
    └── project-view-3.jpg

src/
├── app/
├── components/
└── data/
```

## Releases

Published versions and release notes are available through GitHub Releases.

Release metadata is maintained in:

- `package.json`
- `package-lock.json`
- `app.json`
- Git tags
