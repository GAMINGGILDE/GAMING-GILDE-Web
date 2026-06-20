# Projektstruktur

## Wichtige Ordner

| Pfad                 | Zweck                                                       |
| :------------------- | :---------------------------------------------------------- |
| `src/pages/`         | Astro-Routen und Seiteneinstiege                            |
| `src/layouts/`       | Wiederverwendbare Layouts                                   |
| `src/components/`    | UI-Komponenten und seitenbezogene Komponenten               |
| `src/lib/`           | Geteilte Hilfslogik, Site-Metadaten und strukturierte Daten |
| `src/styles/`        | Globale Styles und eingebundene Fonts                       |
| `src/assets/`        | Importierte Bilder und Grafiken für den Build               |
| `public/`            | Statische Dateien, die unverändert ausgeliefert werden      |
| `.github/workflows/` | GitHub-Actions-Workflows                                    |

## Seiten

Neue Seiten werden als `.astro`-Dateien in `src/pages/` angelegt. Größere Seiten sollten ihre eigentliche Darstellung in `src/components/pages/<seite>/` halten, damit die Routendatei schlank bleibt.

## Assets

- Dateien in `src/assets/` werden durch Astro/Vite verarbeitet und können in Komponenten importiert werden.
- Dateien in `public/` werden unverändert in den Build kopiert und sind über ihren Pfad erreichbar.

## Site-Metadaten

Globale Angaben wie Name, URL, Beschreibung, Locale, Logo und Social Links liegen in `src/lib/site.ts`.
