# ANTI-CORONA-KARTELL Web

**Das Repository der privaten Website des ANTI-CORONA-KARTELLs.**

Ursprünglich verwendete Entwicklungsumgebung (IDE):

* [![PhpStorm](https://img.shields.io/badge/PhpStorm-000?logo=phpstorm&logoColor=fff)](https://www.jetbrains.com/phpstorm)[![Abo](https://img.shields.io/badge/Kostenpflichiges%20Abonnement-red?)](#)

Als Alternative empfehle ich eine der folgenden IDEs:

* [![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](https://code.visualstudio.com/download)[![OpenSourc](https://img.shields.io/badge/Kostenlos%20und%20basierend%20auf%20Open%20Source-green?)](#)
* [![WebStorm](https://img.shields.io/badge/WebStorm-000?logo=webstorm&logoColor=fff)](https://www.jetbrains.com/webstorm)[![Free](https://img.shields.io/badge/Kostenlos%20für%20nichtkommerzielle%20Nutzung-fbfe50?)](#)

Dieses Dokument beschreibt in Kürze die notwendigen Schritte, um die Website zu erstellen und zu veröffentlichen.

## Voraussetzungen

Stelle sicher, dass du immer die aktuellsten Versionen der folgenden Komponenten installiert hast (Git ist hier optional):

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](https://nodejs.org/en/download/current)  [![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff)](https://classic.yarnpkg.com/en/docs/install#windows-stable)  [![GitHub](https://img.shields.io/badge/GitHub%20Desktop-%23121011.svg?logo=github&logoColor=white)](https://desktop.github.com/download)  [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)](https://gitforwindows.org) 

Aktuell installierte Versionen können im Terminal der verwendeten IDE mit folgenden Befehlen ausgegeben werden:

```node -v```, ```yarn -v``` und ```git -v```

Mit dem Aufruf des Befehls ```github``` wird die aktuell installierte Version von GitHub Desktop geöffent.<br>
Wähle darin das Menü 'Help' -> 'About GitHub Desktop', dann 'Check for Updates' und installiere etwaige Aktualisierungen.

## Repository klonen

Verwende folgenden Befehl im Terminal, um sich den aktuellen Stand der Website lokal zu klonen:

```bash
git clone https://github.com/ANTI-CORONA-KARTELL/ANTI-CORONA-KARTELL-Web.git anti-corona-kartell-web
cd anti-corona-kartell-web
```

## Abhängigkeiten installieren

Um sich die benötigten Dependencies von Yarn in sein Projekt zu installieren, führe folgenden Befehl im Terminal aus:

```bash
yarn install
```

Besteht schon ein lokal geklontes Repository, können die Dependencies zu Yarn mit folgendem Befehl aktualisiert werden:

```bash
yarn up
```

> **Tipp:** Mit dem Terminal Befehl: ```yarn info``` können die Versionen aller bestehenden Dependencies ausgegeben werden.

## Testing

Mit folgendem Terminal-Befehl kann ein lokaler Webserver gestartet werden, mit dem die Website via Browser-Vorschau überprüft werden kann:

```bash
yarn dev
```

Der lokale Webserver kann via [STRG]+[C] wieder beendet werden.

## Build-Prozess

Um die Webseite via Next.js erstellen zu lassen, muss dieser Befehl eingegeben werden:

```bash
yarn build
```

Die fertige Webseite wird im Projekt im Ordner 'out' gespeichert.

## Deployment

Lade den Inhalt des Ordners 'out' auf deinen Webspace. Ich verwende dazu [FileZilla](https://filezilla-project.org/download.php?type=client).<br>
Alle Dateien im out-Ordner müssen auf den Server übertragen werden.

## Hilfe & Support

Bei Fragen zur Technik oder Verwendung sind hier die betreffenden Anlaufstellen zur Recherche:

[![NodeManual](https://img.shields.io/badge/Node.js%20Documentation-6DA55F?logo=gitbook&logoColor=white)](https://aka.ms/ComplianceUtility/Manual)  [![YarnManual](https://img.shields.io/badge/Yarn%20Documentation-2C8EBB?logo=gitbook&logoColor=white)](https://classic.yarnpkg.com/en/docs)  [![GitHubManual](https://img.shields.io/badge/GitHub%20Desktop%20Dokumentation-black?logo=gitbook&logoColor=white)](https://docs.github.com/de/desktop)  [![GitManual](https://img.shields.io/badge/Git%20Discussions-F05032?logo=gitbook&logoColor=white)](https://github.com/git-for-windows/git/discussions)

## Off-Topic: Tipps zum Editieren

Beispiel-Syntax zur Erstellung von Links zum Öffnen in neuem Tab:

```
<a href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">Zap-Hosting</a>
```
```
<a className="text-primary hover:underline" href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">20% Rabatt</a>
```

Beispiel zum Auskommentieren vom Java-Code (JSX-Specific Comment):

```
{/* <div className="sm:mx-10 lg:mx-20">
    <Carousel/>
</div> */}
```

Änderungen von GitHub abrufen (via Terminal):

```
git pull
```

Änderung auf GitHub hochladen/pushen (Commits, WebStorm spezifisch):

```
[STRG]+[K]
```

Regulärer Befehl im Terminal um Änderungen zum GitHub Repository zu übertragen:

```
git push
```

