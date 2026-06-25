# AGENTS.md

## Projekt

- Astro-basierte statische Website fuer gaming-gilde.org.
- Node.js 24 und npm verwenden.
- Keine anderen Package Manager einfuehren.
- Aenderungen moeglichst klein und auf die angefragte Aufgabe begrenzen.

## Wichtige Befehle

- Installieren: `npm install`
- Entwicklung: `npm run dev`
- Format pruefen: `npm run format:check`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`

## Vor Abschluss pruefen

Bei Code-, Astro-, CSS- oder Inhaltsaenderungen nach Moeglichkeit ausfuehren:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Wenn ein Check nicht ausgefuehrt werden kann, im Ergebnis kurz nennen warum.

## Projektstruktur

- Seiten liegen in `src/pages/`.
- Groessere Seitenlogik kommt nach `src/components/pages/<seite>/`.
- Wiederverwendbare Komponenten liegen in `src/components/`.
- Globale Metadaten liegen in `src/lib/site.ts`.
- Importierte Build-Assets liegen in `src/assets/`.
- Unveraenderte statische Dateien liegen in `public/`.

## Stil

- Bestehende Astro-, TypeScript- und Tailwind-Konventionen beibehalten.
- Keine unnoetigen neuen Abhaengigkeiten hinzufuegen.
- Keine grossen Refactorings mit kleinen Inhaltsaenderungen vermischen.
- Sichtbare Texte auf Deutsch halten, sofern die betroffene Seite deutsch ist.

## Deployment

- Die Seite wird statisch gebaut.
- Cloudflare Pages nutzt `npm run build`.
- Apache-Dateien wie `.htaccess` sind fuer Cloudflare Pages nicht relevant.
- Redirects/Header bei Bedarf ueber `public/_redirects` oder `public/_headers` pflegen.
