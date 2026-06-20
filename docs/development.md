# Entwicklung

## Voraussetzungen

Empfohlen wird die Node.js-Version aus der CI: **Node.js 24**. npm wird zusammen mit Node.js installiert.

Optional, aber hilfreich:

- Git oder GitHub Desktop
- Visual Studio Code, WebStorm oder eine vergleichbare IDE

Versionen prüfen:

```bash
node -v
npm -v
git -v
```

## Repository Klonen

```bash
git clone https://github.com/GAMINGGILDE/GAMING-GILDE-Web.git gaming-gilde-web
cd gaming-gilde-web
```

## Abhängigkeiten Installieren

```bash
npm install
```

Für reproduzierbare Installationen in CI oder frischen lokalen Umgebungen kann auch `npm ci` genutzt werden.

## Lokale Entwicklung

```bash
npm run dev
```

Der Astro-Dev-Server läuft standardmäßig unter `http://localhost:4321`.

## Produktionsnahe Vorschau

```bash
npm run build
npm run start
```

`npm run start` startet `astro preview` und zeigt den zuvor erzeugten Build lokal an.

## Qualitätschecks

Empfohlener Lauf vor Pull Requests:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Der CI-Workflow `.github/workflows/quality-build.yml` führt Format-Check, Linting, Build und den allgemeinen Check aus.

## Dependencies Aktualisieren

Abhängigkeiten werden in `package.json` definiert und über `package-lock.json` fixiert.

```bash
npm update
npm outdated
```
