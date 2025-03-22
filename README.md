# Next.js App Deployment

Dieses Dokument beschreibt die Schritte, die notwendig sind, um eine Next.js App zu bauen und auf einem Webserver zu deployen.

## Voraussetzungen

Stelle sicher, dass du die folgenden Versionen von Node.js und Yarn installiert hast:

- **Node.js** v20.18
- **Yarn** v1.22

Du kannst deine aktuelle Version mit folgenden Befehlen überprüfen:

```bash
node -v
yarn -v
```

Als IDE wurde zum entwickeln phpstom benutzt

## Deployment

1. #### Projekt (lokal) klonen und in das Projektverzeichnis wechseln
```bash
git clone https://gitlab.com/julienobarowski1/anti-corona.git anti-corona-kartell-website
cd anti-corona-kartell-website
```

2. #### Abhängigkeiten installieren
```bash
yarn install
```

3. #### Next.js Build-Prozess
```bash
yarn build
```

4. #### Deployment
Lade den Inhalt des Ordners out auf deinen Webspace. Alle Dateien im out-Ordner müssen auf den Server übertragen werden.

