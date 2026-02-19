# ANTI-CORONA-KARTELL Web

**Das Repository der privaten Website des ANTI-CORONA-KARTELLs.**


Dieses Dokument beschreibt die Schritte, die notwendig sind, um eine Next.js App zu bauen und auf einem Webserver zu
deployen.

## Voraussetzungen

Stelle sicher, dass du die aktuellste Version von [Node.js](https://nodejs.org/en/download/current) und [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) installiert hast.<br>
Aktuell installierte Versionen können im Terminal mit folgenden Befehlen geprüft werden:

```bash
node -v
yarn -v
```

Als IDE wurde zum Entwickeln [PhpStorm](https://www.jetbrains.com/phpstorm) benutzt.<br>
Alternativ verwende diese IDEs:

[![WebStorm](https://img.shields.io/badge/WebStorm-000?logo=webstorm&logoColor=fff)](https://www.jetbrains.com/webstorm)
[![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](https://code.visualstudio.com/download)

## Deployment

1. #### Projekt (lokal) klonen und in das Projektverzeichnis wechseln (optional)

```bash
git clone https://github.com/ANTI-CORONA-KARTELL/ANTI-CORONA-KARTELL-Web.git anti-corona-kartell-web
cd anti-corona-kartell-web
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

Lade den Inhalt des Ordners 'out' auf deinen Webspace. Alle Dateien im out-Ordner müssen auf den Server übertragen
werden.

## Testing

Mit folgendem Terminal-Befehl kann ein lokaler Webserver gestartet werden, mit dem die Website in Vorschau betrachtet
werden kann:

```bash
yarn dev
```

Der lokale Webserver kann via [STRG]+[C] beendet werden.

## Tipps zum Editieren

Verwende folgende Syntax zur Erstellung von Links zum Öffnen in neuem Tab:

```
<a href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">Zap-Hosting</a>
```

```
<a className="text-primary hover:underline" href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">20% Rabatt</a>
```

Beispiel zum Auskommentieren im Java-Code (JSX-Specific Comment):

```
{/* <div className="sm:mx-10 lg:mx-20">
    <Carousel/>
</div> */}
```

Änderungen von GitLap abrufen (via Terminal):

```
git pull
```

Änderung auf GitLap hochladen (Commits):

```
[STRG]+[K]
```

Commit-Massage hinzufügen und dann auf Push klicken zum Übertragen.
Wenn "versemmelt", dann via Terminal Command 'git push' erneut lostreten.
