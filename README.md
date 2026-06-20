<p align="center">
  <a href="https://gaming-gilde.org">
    <img src="./public/logo-full.svg" alt="GAMING GILDE" width="420">
  </a>
</p>

<p align="center">
  <a href="https://discord.minecraft-gilde.de"><img alt="Discord" src="https://img.shields.io/discord/1219625244906754093?label=Discord&amp;logo=discord&amp;logoColor=white&amp;color=5865F2" /></a>&nbsp;
  <a href="https://github.com/GAMINGGILDE/GAMING-GILDE-Web/actions/workflows/quality-build.yml"><img src="https://github.com/GAMINGGILDE/GAMING-GILDE-Web/actions/workflows/quality-build.yml/badge.svg" alt="Quality & Build"></a>&nbsp;
  <a href="https://www.codefactor.io/repository/github/gaminggilde/gaming-gilde-web"><img src="https://www.codefactor.io/repository/github/gaminggilde/gaming-gilde-web/badge" alt="CodeFactor" /></a>
</p>

# GAMING GILDE Web

Offizielle Website von **gaming-gilde.org**, gebaut mit **Astro**.

## Tech-Stack

- Astro (statische Seite)
- TypeScript (strict)
- Tailwind CSS
- astro-icon / Iconify
- Node.js 24 und npm

## Schnellstart

```bash
npm install
npm run dev
```

Dev-Server: `http://localhost:4321`

## Wichtige Befehle

| Befehl                 | Zweck                           |
| :--------------------- | :------------------------------ |
| `npm run dev`          | Lokale Entwicklung mit Astro    |
| `npm run build`        | Produktionsbuild nach `dist/`   |
| `npm run start`        | Lokale Vorschau des Builds      |
| `npm run lint`         | ESLint                          |
| `npm run lint:fix`     | ESLint mit automatischen Fixes  |
| `npm run format`       | Prettier formatiert das Projekt |
| `npm run format:check` | Prettier-Check für CI           |
| `npm run typecheck`    | Astro Type-/Template-Check      |
| `npm run check`        | Format- und Lint-Check          |

## Wann `dev` und wann `start`?

- `npm run dev` für die tägliche Entwicklung mit schnellem Feedback.
- `npm run build` und danach `npm run start` für eine produktionsnahe lokale Vorschau.

## Inhalte Pflegen

- Seiten: `src/pages/`
- Seiten-Komponenten: `src/components/pages/`
- Wiederverwendbare UI-Komponenten: `src/components/`
- Globale Site-Daten: `src/lib/site.ts`
- Statische Assets: `public/`
- Build-Assets: `src/assets/`

## Projektbereiche

- `src/pages/` für Astro-Routen
- `src/layouts/` für Layouts
- `src/components/` für UI-Komponenten
- `src/lib/` für geteilte Hilfslogik und Site-Metadaten
- `src/styles/` für globale Styles und Fonts
- `src/assets/` für importierte Bilder und Grafiken
- `public/` für statische Dateien, die unverändert ausgeliefert werden

## Doku Unter `docs/`

- [Doku-Index](./docs/index.md)
- [Entwicklung](./docs/development.md)
- [Projektstruktur](./docs/project-structure.md)

## Qualität

Empfohlener lokaler Gate-Run:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

CI-Workflow: `.github/workflows/quality-build.yml`

## Deployment

Die Website wird als statische Astro-Seite über Cloudflare Pages ausgeliefert.

- `npm run build` erzeugt die statische Ausgabe in `dist/`.
- Inhalte aus `public/` werden 1:1 nach `dist/` kopiert.
- Apache-Dateien wie `.htaccess` werden von Cloudflare Pages nicht ausgewertet. Redirects oder Header müssen bei Bedarf über `public/_redirects` oder `public/_headers` gepflegt werden.
