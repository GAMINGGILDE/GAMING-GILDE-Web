"use client";

import React from "react";
import { Header } from "@/components/Header";
import PreviewImage from "../../assets/datenschutz-bg-1.webp";
import PreviewImage2 from "../../assets/datenschutz-bg-2.webp";
import PreviewImage3 from "../../assets/datenschutz-bg-3.webp";
import PreviewImage4 from "../../assets/datenschutz-bg-4.webp";

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4];

export default function Datenschutz() {
  return (
    <section className="">
      <Header previews={previews} noText />

      <div className="max-w-[1280px] mx-auto space-y-5 mt-60 xl:px-0 px-5 md:px-10 w-full m-auto mb-20 text-white">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-xl lg:text-3xl font-bold linear-text">Datenschutzerklärung</h1>
          <p className="text-gray-300">
            Diese Datenschutzerklärung informiert die Nutzer dieser Website über Art, Umfang und
            Zweck der Erhebung und Verarbeitung personenbezogener Daten durch den Websitebetreiber.
            Wir nehmen den Schutz Ihrer Daten sehr ernst und behandeln personenbezogene Daten
            vertraulich und entsprechend der gesetzlichen Vorschriften der{"\u00A0"}
            <a
              className="text-primary hover:underline"
              href="https://dsgvo-gesetz.de"
              target="_blank"
            >
              DSGVO
            </a>
            .
          </p>
        </header>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Websitebetreiber</h2>
          <p className="sub-text font-light ">
            Verantwortlicher im Sinne der EU-Datenschutzgrundverordnung (DSGVO) und anderer
            nationaler Datenschutzgesetze ist:
          </p>

          <p className="sub-text font-light">
            Claus Schiroky
            <br />
            Ährenweg 6<br />
            85375 Neufahrn
            <br />
            E-Mail:{" "}
            <a
              className="text-primary hover:underline"
              href="email:webmaster@anti-corona-kartell.de"
              target="_blank"
            >
              webmaster@anti-corona-kartell.de
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p className="sub-text font-light">
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Website, unserer Inhalte und Leistungen (z. B. Gameserver) erforderlich
            ist.
          </p>
          <p className="sub-text font-light">
            <strong>Rechtsgrundlagen gemäß Art. 6 DSGVO:</strong> Art. 6 Abs. 1 lit. f –
            berechtigtes Interesse (z. B. technische Sicherheit).
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Rechtsgrundlagen</h2>
          <p className="sub-text font-light">
            Die Verarbeitung erfolgt auf Basis deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur
            Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO)
            sowie zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO). Besteht
            ein berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), verarbeiten wir Daten, soweit
            es erforderlich ist, um unsere Plattform sicher und effektiv zu betreiben.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Widerspruch gegen Werbe-E-Mails</h2>
          <p className="sub-text font-light">
            Der Nutzung von im Rahmen der oben genannten veröffentlichten Kontaktdaten zur
            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
            wird hiermit widersprochen. Der Betreiber der Seiten behält sich ausdrücklich rechtliche
            Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
            Spam-E-Mails, vor.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Cookies</h2>
          <p className="sub-text font-light">
            Unsere Website verwendet keine eigenen Tracking‑ oder Analyse‑Cookies. Technisch
            notwendige Cookies können gesetzt werden, um die Funktionalität der Website
            sicherzustellen.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Verschlüsselung</h2>
          <p className="sub-text font-light">
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, wird nach aktuellen Stand
            der Technik ein entsprechendes SSL- bzw. TLS-Verschlüsselungsverfahren verwendet. Eine
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
            “http://” auf “https://” wechselt und an dem Schloss-Symbol in der Browserzeile. Wenn
            die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können Daten, die an mich übermittelt
            werden, nicht von Dritten mitgelesen werden.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Hosting & Server‑Logfiles</h2>
          <p className="sub-text font-light ">
            Unsere Website wird bei IONOS SE gehostet. Wir haben mit IONOS einen Vertrag zur
            Auftragsverarbeitung abgeschlossen. IONOS verarbeitet beim Aufruf der Website
            automatisch die IP‑Adresse, Datum und Uhrzeit des Zugriffs, besuchte Seite,
            Referrer‑URL, Browsertyp und Version, Betriebssystem und Hostname des zugreifenden
            Rechners.
          </p>
          <p className="sub-text font-light ">
            Diese Daten werden in sogenannten Logfiles gespeichert und dienen der technischen
            Bereitstellung, Stabilität und Sicherheit der Website.
          </p>
          <p className="sub-text font-light ">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. <br />
            <strong>Speicherdauer:</strong> Bis zu 8 Wochen (IONOS‑Standard).
          </p>
          <p className="sub-text font-light ">
            Datenschutzerklärung von IONOS:{" "}
            <a
              className="font-light text-primary hover:underline"
              href="https://www.ionos.de/hilfe/datenschutz"
              target="_blank"
            >
              https://www.ionos.de/hilfe/datenschutz
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Nutzung unserer Gameserver</h2>
          <p className="sub-text font-light ">
            Beim Betrieb unserer kostenlosen Gameserver werden die folgenden technisch notwendige
            Daten verarbeitet: IP‑Adresse, Spielername/Nickname, technische Verbindungsdaten,
            Server‑ und Fehler‑Logs, Chat‑Nachrichten (falls serverseitig protokolliert), ggf.
            Anti‑Cheat‑Daten (abhängig vom Spiel). Diese Daten sind erforderlich, um den
            Serverbetrieb sicherzustellen, Missbrauch zu verhindern und Fehler zu analysieren.
          </p>

          <p className="sub-text font-light ">
            <strong>Rechtsgrundlage:</strong>
          </p>
          <ul className="list-disc list-inside m-4 font-light">
            <li>Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung des Dienstes)</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit)</li>
          </ul>
          <p className="sub-text font-light ">
            <strong>Speicherdauer:</strong> Logs werden regelmäßig gelöscht. Max. 30 Tage, abhängig
            vom Servertyp.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Social‑Media‑Präsenzen</h2>
          <p className="sub-text font-light">
            Wir unterhalten Online‑Profile bei folgenden Anbietern:
          </p>

          <ul className="list-disc list-inside m-4">
            <li>
              YouTube:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://www.youtube.com/@Anti-Corona-Kartell"
                target="_blank"
              >
                https://www.youtube.com/@Anti-Corona-Kartell
              </a>
            </li>
            <li>
              Twitch:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://www.twitch.tv/anti_corona_kartell"
                target="_blank"
              >
                https://www.twitch.tv/anti_corona_kartell
              </a>
            </li>
            <li>
              TikTok:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://www.tiktok.com/@anticoronakartell"
                target="_blank"
              >
                https://www.tiktok.com/@anticoronakartell
              </a>
            </li>
            <li>
              Discord:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://discord.anti-corona-kartell.de"
                target="_blank"
              >
                https://discord.anti-corona-kartell.de
              </a>
            </li>
          </ul>

          <p className="sub-text font-light">
            Beim Besuch dieser Plattformen gelten die Datenschutzrichtlinien der jeweiligen
            Anbieter. Daten können dabei auch in Drittländer (z. B. USA) übertragen werden.
          </p>

          <p className="sub-text font-light">
            <strong>Datenschutzerklärungen:</strong>
          </p>

          <ul className="list-disc list-inside m-4">
            <li>
              Google:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              Twitch:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://www.twitch.tv/p/de-de/legal/privacy-notice/"
                target="_blank"
              >
                https://www.twitch.tv/p/de-de/legal/privacy-notice
              </a>
            </li>
            <li>
              TikTok:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://www.tiktok.com/legal/page/eea/privacy-policy/de"
                target="_blank"
              >
                https://www.tiktok.com/legal/page/eea/privacy-policy/de
              </a>
            </li>
            <li>
              Discord:{"\u00A0"}
              <a
                className="font-light text-primary hover:underline"
                href="https://discord.com/privacy"
                target="_blank"
              >
                https://discord.com/privacy
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Verwendung von Schrift- und Icon-Bibliotheken</h2>
          <p className="sub-text font-light">
            Zur einheitlichen und ansprechenden Darstellung verwenden wir Schriftarten und Icons,
            die lokal innerhalb unseres Webprojekts eingebunden sind.
          </p>
          <p className="sub-text font-light">
            Für diese lokal eingebundenen Ressourcen erfolgt beim Aufruf unserer Website keine
            zusätzliche Verbindung zu externen Bibliotheks-CDNs (z. B. für Icons oder Webfonts).
            Eine Übermittlung personenbezogener Daten an externe Anbieter allein durch die Nutzung
            dieser Schrift- und Icon-Bibliotheken findet daher nicht statt.
          </p>
          <p className="sub-text font-light">
            Rechtsgrundlage ist unser berechtigtes Interesse an einer konsistenten Darstellung
            unserer Website gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">
            Erfassung und Verarbeitung personenbezogener Daten
          </h2>
          <p className="sub-text font-light">
            Wir erheben, nutzen und geben Ihre personenbezogenen Daten nur dann weiter, wenn dies im
            gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen. Als
            personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person
            zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also beispielsweise Ihr
            Name, Ihre E-Mail-Adresse oder Telefonnummer. Diese Website können Sie auch besuchen,
            ohne Angaben zu Ihrer Person zu machen.
          </p>
          <p className="sub-text font-light">
            Ergänzend zu den unter „Zugriffsdaten“ beschriebenen technischen Logdaten verarbeiten
            wir personenbezogene Daten nur nach ausdrücklicher Erlaubnis der betreffenden Nutzer und
            unter Einhaltung der geltenden Datenschutzbestimmungen. Die Verarbeitung der
            personenbezogenen Daten erfolgt insbesondere zur Bearbeitung von Anfragen, zur Wahrung
            unserer berechtigten Interessen sowie – soweit einschlägig – zur Erfüllung vertraglicher
            oder vorvertraglicher Pflichten.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xa font-semibold">Umgang mit Kontaktdaten</h2>
          <p className="sub-text font-light">
            Nehmen Sie mit uns als Websitebetreiber über die angebotenen Kontaktmöglichkeiten (z. B.
            per E-Mail) Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur
            Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre
            Einwilligung werden diese Daten nicht an Dritte weitergegeben. Ein gesondertes
            Kontaktformular wird nicht angeboten.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Rechte des Nutzers</h2>
          <p className="sub-text font-light">
            Sie haben als Nutzer das Recht, auf Antrag eine kostenlose Auskunft darüber zu erhalten,
            welche personenbezogenen Daten über Sie gespeichert wurden. Sie haben außerdem das Recht
            auf Berichtigung falscher Daten und auf die Verarbeitungseinschränkung oder Löschung
            Ihrer personenbezogenen Daten. Falls zutreffend, können Sie auch Ihr Recht auf
            Datenportabilität geltend machen. Sollten Sie annehmen, dass Ihre Daten unrechtmäßig
            verarbeitet wurden, können Sie eine Beschwerde bei der zuständigen Aufsichtsbehörde
            einreichen.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Beschwerderecht</h2>
          <p className="sub-text font-light">
            Sie haben das Recht, sich bei einer Datenschutzbehörde zu beschweren. Zuständig ist:
          </p>
          <p className="sub-text font-light">
            <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong> <br />
            Promenade 18 <br />
            91522 Ansbach <br />
            Deutschland
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Löschung von Daten</h2>
          <p className="sub-text font-light">
            Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z. B.
            Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf Löschung Ihrer Daten. Von
            uns gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung nicht mehr vonnöten
            sein und es keine gesetzlichen Aufbewahrungsfristen geben, gelöscht. Falls eine Löschung
            nicht durchgeführt werden kann, da die Daten für zulässige gesetzliche Zwecke
            erforderlich sind, erfolgt eine Einschränkung der Datenverarbeitung. In diesem Fall
            werden die Daten gesperrt und nicht für andere Zwecke verarbeitet.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Änderung unserer Datenschutzbestimmungen</h2>
          <p className="sub-text font-light">
            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie
            stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
            Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer
            Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Widerspruchsrecht</h2>
          <p className="sub-text font-light">
            Nutzer dieser Webseite können von ihrem Widerspruchsrecht Gebrauch machen und der
            Verarbeitung ihrer personenbezogenen Daten zu jeder Zeit widersprechen. Wenn Sie eine
            Berichtigung, Sperrung, Löschung oder Auskunft über die zu Ihrer Person gespeicherten
            personenbezogenen Daten wünschen oder Fragen bezüglich der Erhebung, Verarbeitung oder
            Verwendung Ihrer personenbezogenen Daten haben oder erteilte Einwilligungen widerrufen
            möchten, wenden Sie sich bitte an an den Websitebetreiber.
          </p>
        </div>

        <footer className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">Stand: März 2026.</p>
        </footer>
      </div>
    </section>
  );
}
