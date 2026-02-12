# ANTI-CORONA-KARTELL Website

Die Webseite basiert auf WebStrom als IDE und Next.js, plus Yarn.

## Next.js App Deployment

Dieses Dokument beschreibt die Schritte, die notwendig sind, um eine Next.js App zu bauen und auf einem Webserver zu veröffentlichen.

## Voraussetzungen

Stelle sicher, dass du die folgenden Versionen von Node.js und Yarn installiert hast:

- [**Node.js** v24.13.0](https://nodejs.org/en/download/current)
- [**Yarn** v4.12](https://classic.yarnpkg.com/en/docs/install#windows-stable)

Du kannst deine aktuelle Version mit folgenden Befehlen überprüfen:

```bash
node -v
yarn -v
```

Als IDE wurde zum Entwickeln [PhpStorm](https://www.jetbrains.com/phpstorm) benutzt.<br>
Alternativ kann auch [WebStorm](https://www.jetbrains.com/webstorm) verwendet werden (*kostenlos für nicht-kommerzielle
Verwendung*).

## Deployment

1. #### Projekt (lokal) klonen und in das Projektverzeichnis wechseln (optional)

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
