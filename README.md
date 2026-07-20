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

## Release

Current release being prepared:

```text
v0.2.0 — First laboratory showcase
```
