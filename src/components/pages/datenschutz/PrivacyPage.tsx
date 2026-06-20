import React from "react";
import { Header } from "../../Header";
import PreviewImage from "../../../assets/datenschutz-bg-1.webp";
import PreviewImage2 from "../../../assets/datenschutz-bg-2.webp";
import PreviewImage3 from "../../../assets/datenschutz-bg-3.webp";
import PreviewImage4 from "../../../assets/datenschutz-bg-4.webp";

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4];

export default function Datenschutz() {
  return (
    <section className="">
      <Header previews={previews} noText />

      <div className="max-w-[1280px] mx-auto space-y-5 mt-60 xl:px-0 px-5 md:px-10 w-full m-auto mb-20 text-white">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-xl lg:text-3xl font-bold linear-text [font-family:var(--font-nova-bold)]">
            Datenschutzerklärung
          </h1>
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
            c/o flexdienst – #20588
            <br />
            Kurt-Schumacher-Straße 76
            <br />
            67663 Kaiserslautern
            <br />
            Deutschland
          </p>

          <p className="sub-text font-light">
            E-Mail:{" "}
            <a
              className="text-primary hover:underline"
              href="mailto:info@gaming-gilde.org"
              target="_blank"
            >
              info@gaming-gilde.org
            </a>
          </p>
        </div>

        <div className="space-y-2">
          <p className="sub-text font-light">
            <strong>Widerspruch gegen Werbe-E-Mails: </strong>Der Nutzung von im Rahmen der oben
            genannten veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Der
            Betreiber der Seiten behält sich ausdrücklich rechtliche Schritte im Falle der
            unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p className="sub-text font-light">
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Website, unserer Gameserver sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Verarbeitung erfolgt gemäß DSGVO, insbesondere Art. 6 Abs. 1 lit.
            a, b, c und f. Personenbezogene Daten werden gelöscht oder gesperrt, sobald der Zweck
            der Speicherung entfällt oder gesetzliche Aufbewahrungsfristen ablaufen.
          </p>
          <p className="sub-text font-light">
            Eine automatisierte Entscheidungsfindung oder Profiling findet nicht statt.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Cookies</h2>
          <p className="sub-text font-light">
            Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Technisch notwendige Cookies
            können gesetzt werden, um die Funktionalität der Website sicherzustellen.
          </p>
          <p className="sub-text font-light ">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">SSL-/TLS-Verschlüsselung</h2>
          <p className="sub-text font-light">
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, wird nach aktuellen Stand
            der Technik ein modernes SSL- bzw. TLS-Verschlüsselungsverfahren verwendet. Eine
            verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol im Browser.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Hosting & Server-Logfiles</h2>
          <p className="sub-text font-light ">
            Unsere Website wird bei IONOS SE gehostet. Ein Auftragsverarbeitungsvertrag besteht.
            IONOS verarbeitet beim Aufruf der Website automatisch die IP-Adresse, Datum und Uhrzeit
            des Zugriffs, besuchte Seite, Referrer-URL, Browsertyp und Version, Betriebssystem und
            Hostname des zugreifenden Rechners.
          </p>
          <p className="sub-text font-light ">
            Diese Daten werden in sogenannten Logfiles gespeichert und dienen der technischen
            Bereitstellung, Stabilität, Sicherheit und Missbrauchserkennung.
          </p>
          <p className="sub-text font-light ">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            <br />
            <strong>Speicherdauer:</strong> Bis zu 8 Wochen (IONOS-Standard).
          </p>
          <p className="sub-text font-light ">
            IONOS SE{" "}
            <a
              className="font-light text-primary hover:underline"
              href="https://www.ionos.de/hilfe/datenschutz"
              target="_blank"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Nutzung unserer Gameserver</h2>
          <p className="sub-text font-light ">
            Beim Betrieb unserer kostenlosen Gameserver werden die folgenden technisch notwendige
            Daten verarbeitet: IP-Adresse, Spielername/Nickname, technische Verbindungsdaten,
            Server- und Fehler-Logs, Chat-Nachrichten (falls serverseitig protokolliert), ggf.
            Anti-Cheat-Daten (abhängig vom Spiel). Diese Daten sind erforderlich, um den
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
            <strong>Speicherdauer: </strong>Logs werden regelmäßig, max. nach 30 Tagen, gelöscht
            (abhängig vom Servertyp).
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Social-Media-Präsenzen</h2>
          <p className="sub-text font-light">
            Wir unterhalten Online-Profile bei den Anbietern{" "}
            <a
              className="font-light text-primary hover:underline"
              href="https://www.youtube.com/@Gaming-Gilde"
              target="_blank"
            >
              YouTube
            </a>
            ,{" "}
            <a
              className="font-light text-primary hover:underline"
              href="https://www.twitch.tv/gaming_gilde"
              target="_blank"
            >
              Twitch
            </a>
            ,{" "}
            <a
              className="font-light text-primary hover:underline"
              href="https://www.tiktok.com/@gaminggilde"
              target="_blank"
            >
              TikTok
            </a>{" "}
            und{" "}
            <a
              className="font-light text-primary hover:underline"
              href="https://discord.gaming-gilde.org"
              target="_blank"
            >
              Discord
            </a>
            .
          </p>

          <p className="sub-text font-light">
            Beim Besuch dieser Plattformen gelten die Datenschutzrichtlinien der jeweiligen
            Anbieter. Es kann zu Datenübermittlungen in Drittländer (z. B. USA) kommen.
          </p>

          <p className="sub-text font-light ">
            <strong>Rechtsgrundlagen:</strong>
          </p>
          <ul className="list-disc list-inside m-4 font-light">
            <li>EU US Data Privacy Framework (falls anwendbar)</li>
            <li>Standardvertragsklauseln (SCC)</li>
            <li>Art. 49 DSGVO (Ausnahmen)</li>
          </ul>

          <p className="sub-text font-light">
            <strong>Gemeinsame Verantwortlichkeit:</strong>
          </p>
          <p className="sub-text font-light">
            Für Social-Media-Seiten besteht eine gemeinsame Verantwortlichkeit zwischen uns und dem
            jeweiligen Plattformbetreiber gemäß Art. 26 DSGVO.
          </p>

          <p className="sub-text font-light">
            <strong>Datenschutzerklärungen der Anbieter:</strong>
          </p>

          <ul className="list-disc list-inside m-4">
            <li>
              <a
                className="font-light text-primary hover:underline"
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                Google (YouTube)
              </a>
            </li>
            <li>
              <a
                className="font-light text-primary hover:underline"
                href="https://www.twitch.tv/p/de-de/legal/privacy-notice/"
                target="_blank"
              >
                Twitch
              </a>
            </li>
            <li>
              <a
                className="font-light text-primary hover:underline"
                href="https://www.tiktok.com/legal/page/eea/privacy-policy/de"
                target="_blank"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                className="font-light text-primary hover:underline"
                href="https://discord.com/privacy"
                target="_blank"
              >
                Discord
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
          <h2 className="text-2xs font-semibold">Minderjährige</h2>
          <p className="sub-text font-light">
            Unser Angebot richtet sich nicht an Kinder unter 16 Jahren.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xa font-semibold">Umgang mit Kontaktdaten</h2>
          <p className="sub-text font-light">
            Nehmen Sie mit uns als Websitebetreiber über die angebotenen Kontaktmöglichkeiten (z. B.
            per E-Mail) Verbindung auf, werden Ihre E-Mail-Adresse, Inhalt der Nachricht und ggf.
            Name oder weitere freiwillige Angaben zum Zwecke der Bearbeitung der Anfrage
            gespeichert.
          </p>

          <p className="sub-text font-light ">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b oder f DSGVO.
          </p>

          <p className="sub-text font-light ">
            <strong>Speicherdauer: </strong>Bis zur abschließenden Bearbeitung; anschließend nach
            gesetzlichen Vorgaben.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xs font-semibold">Rechte des Nutzers</h2>
          <p className="sub-text font-light">Sie haben folgende Rechte:</p>

          <ul className="list-disc list-inside m-4 font-light">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
          </ul>

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
            nicht möglich ist, wird die Verarbeitung eingeschränkt.
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
