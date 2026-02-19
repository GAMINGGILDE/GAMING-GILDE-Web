# ANTI-CORONA-KARTELL Web

**Das Repository der privaten Website des ANTI-CORONA-KARTELLs.**

Ursprünglich verwendete Entwicklungsumgebung (IDE):

* [![PhpStorm](https://img.shields.io/badge/PhpStorm-000?logo=phpstorm&logoColor=fff)](https://www.jetbrains.com/phpstorm)[![Abo](https://img.shields.io/badge/Kostenpflichiges%20Abonnement-red?)](#)

Als Alternative empfehle ich eine der folgenden IDEs:

* [![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](https://code.visualstudio.com/download)[![OpenSourc](https://img.shields.io/badge/Kostenlos%20und%20basierend%20auf%20Open%20Source-green?)](#)
* [![WebStorm](https://img.shields.io/badge/WebStorm-000?logo=webstorm&logoColor=fff)](https://www.jetbrains.com/webstorm)[![Free](https://img.shields.io/badge/Kostenlos%20für%20nichtkommerzielle%20Nutzung-fbfe50?)](#)

Dieses Dokument beschreibt in Kürze die notwendigen Schritte, um die Website zu erstellen und zu veröffentlichen.

## Voraussetzungen

Stelle sicher, dass du immer die aktuellsten Versionen der folgenden Komponenten installiert hast:

* [![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](https://nodejs.org/en/download/current)
* [![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff)](https://classic.yarnpkg.com/en/docs/install#windows-stable)
* [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)](https://gitforwindows.org)
* [![GitHub](https://img.shields.io/badge/GitHub%20Desktop-%23121011.svg?logo=github&logoColor=white)](https://desktop.github.com/download)

Aktuell installierte Versionen können im Terminal der verwendeten IDE mit folgenden Befehlen ausgegeben werden:

```bash
node -v
yarn -v
git -v
github
```
Mit dem Aufruf des letzteren Befehls wird die aktuell installierte Version von GitHub Desktop geöffent.<br>
Wähle darin das Menü 'Help' -> 'About GitHub Desktop', dann 'Check for Updates' und installiere etwaige Aktualisierungen.

## GitHub Repository klonen

Um sich den aktuellen Stand von GitHub lokal zu klonen, 

```bash
git clone https://github.com/ANTI-CORONA-KARTELL/ANTI-CORONA-KARTELL-Web.git anti-corona-kartell-web
cd anti-corona-kartell-web
```

### Updating Yarn



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
