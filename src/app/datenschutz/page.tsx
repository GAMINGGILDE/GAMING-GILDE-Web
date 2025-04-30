"use client";

import React from "react";
import {Header} from "@/components/Header";
import PreviewImage from "../../assets/datenschutz-bg-1.webp";
import PreviewImage2 from "../../assets/datenschutz-bg-2.webp";
import PreviewImage3 from "../../assets/datenschutz-bg-3.webp";
import PreviewImage4 from "../../assets/datenschutz-bg-4.webp";

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4];

export default function Datenschutz() {
    return (
        <section className="">
            <Header previews={previews} noText/>

            <div
                className="max-w-[1280px] mx-auto space-y-5 mt-[15rem] px-3 lg:px-0 w-[100%] m-auto mb-[5rem] text-white">
                {/* Header */}
                <header className="space-y-6">
                    <h1 className="text-xl lg:text-3xl font-bold linear-text">Datenschutzerklärung</h1>
                    <p className="text-gray-300">
                        Diese Datenschutzerklärung soll die Nutzer dieser privaten Website über die Art, den Umfang und
                        den Zweck der Erhebung und Verwendung personenbezogener Daten durch den genannten
                        Websitebetreiber informieren. Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und
                        behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                        Vorschriften. Da durch neue Technologien und die ständige Weiterentwicklung dieser Webseite
                        Änderungen an dieser Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen sich
                        die Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen. Definitionen der
                        verwendeten Begriffe (z. B. "personenbezogene Daten" oder "Verarbeitung") finden Sie in Art. 4
                        <a className="text-primary hover:underline" href="https://dsgvo-gesetz.de" target="_blank"> DSGVO</a>.
                    </p>
                </header>

                {/* Paragraph 1 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Websitebetreiber</h2>
                    <p className="sub-text font-light ">
                        Verantwortlicher im Sinne der EU-Datenschutzgrundverordnung (DSGVO) und anderer nationaler
                        Datenschutzgesetze ist: Claus Schiroky.
                    </p>
                </div>

                {/* Paragraph 2 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Widerspruch gegen Werbe-E-Mails</h2>
                    <p className="sub-text font-light">
                        Der Nutzung von im Rahmen der oben genannten veröffentlichten Kontaktdaten zur Übersendung von
                        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
                        Der Betreiber der Seiten behält sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                        Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                </div>

                {/* Paragraph 3 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Cookies</h2>
                    <p className="sub-text font-light">
                        Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“, um das Internetangebot
                        nutzerfreundlicher, effektiver und sicherer zu gestalten. Cookies sind kleine Textdateien. Sie
                        unterstützen die Darstellung unserer Webseite und helfen Ihnen, sich auf unserer Webseite zu
                        bewegen. Cookies erfassen Daten zu Ihrer IP-Adresse, zu Ihrem Browser, Ihrem Betriebssystem und
                        Ihrer Internetverbindung. Diese Informationen verbinden wir nicht mit personenbezogenen Daten
                        und geben sie nicht an Dritte weiter. Sie können unsere Webseite auch ohne den Einsatz von
                        Cookies nutzen, wodurch möglicherweise einige Darstellungen und Funktionen unseres Angebots nur
                        eingeschränkt arbeiten. Diese werden zur technischen Sitzungssteuerung im temporären Speicher
                        des Webbrowsers bzw. auf der Festplatte des Besuchers der Internetseite abgelegt.
                    </p>
                    <p className="sub-text font-light">
                        Unter anderem speichern wir auf Ihrer Festplatte so genannte Session-Cookies, die nur für die
                        Dauer Ihres Besuches auf unserer Webseite Gültigkeit besitzen. Diese werden benötigt, um Sie
                        nach erfolgreicher Anmeldung im geschützten Bereich für die gesamte Dauer Ihres Besuches zu
                        identifizieren und zu autorisieren. Nach Ende Ihres Besuches werden diese Cookies automatisch
                        von Ihrer Festplatte wieder gelöscht.
                    </p>
                    <p className="sub-text font-light">
                        Das Speichern von Cookies können Besucher von Internetseiten durch bestimmte
                        Browser-Einstellungen verhindern. In der Regel lässt sich der Webbrowser auch so einstellen,
                        dass dieser beim Besucher der Internetseite vor dem Setzen von Cookies nachfragt, ob er
                        einverstanden ist.
                        Ferner können einmal gesetzte Cookies jederzeit wieder vom Besucher der Internetseite gelöscht
                        werden. Die Produktbeschreibungen/Anleitungen der jeweiligen Browser-Hersteller enthalten
                        Informationen zu den hierzu erforderlichen Einstellungen. Bitte beachten Sie, dass einzelne
                        Funktionen unserer Webseite möglicherweise nicht funktionieren, wenn Sie die Verwendung von
                        Cookies deaktiviert haben.
                    </p>
                    <p className="sub-text font-light">
                        Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu
                        übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation
                        erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.
                    </p>
                    <p className="sub-text font-light">
                        In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre
                        Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.
                    </p>
                </div>

                {/* Paragraph 4 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Rechtsgrundlagen</h2>
                    <p className="sub-text font-light">
                        Die Verarbeitung erfolgt auf Basis deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
                        zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b
                        DSGVO) sowie zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO).
                        Besteht ein berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), verarbeiten wir
                        Daten, soweit es erforderlich ist, um unsere Plattform sicher und effektiv zu betreiben.
                    </p>
                </div>

                {/* Paragraph 5 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Verschlüsselung</h2>
                    <p className="sub-text font-light">
                        Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, wird nach aktuellen Stand der
                        Technik ein entsprechendes SSL- bzw. TLS-Verschlüsselungsverfahren verwendet. Eine
                        verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://”
                        auf “https://” wechselt und an dem Schloss-Symbol in der Browserzeile. Wenn die SSL- bzw.
                        TLS-Verschlüsselung aktiviert ist, können Daten, die an mich übermittelt werden, nicht von
                        Dritten mitgelesen werden.
                    </p>
                </div>

                {/* Paragraph 6 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Zugriffsdaten</h2>
                    <p className="sub-text font-light ">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese mitteilen. Hierbei kann es sich
                        z. B. um Daten handeln, die Sie mir per E-Mail senden. Um Ihren Besuch so benutzerfreundlich wie
                        möglich zu gestalten und sämtliche verfügbaren Funktionen anbieten zu können wird ein Teil der
                        Daten aufgrund unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) erhoben, um eine
                        fehlerfreie Bereitstellung der Website durch unseren Hosting-Anbieter (Ionos) zu gewährleisten.
                        Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website besuchen und
                        unterliegt den folgenden geltenden Datenschutzerklärungen der jeweiligen Anbieter:
                    </p>
                    <ul className="list-disc list-inside m-4">
                        <li><a className="font-light text-primary hover:underline" href="https://www.ionos.de/hilfe/datenschutz"
                               target="_blank">Ionos</a></li>
                    </ul>
                </div>

                {/* Paragraph 7 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Onlinepräsenzen</h2>
                    <p className="sub-text font-light">
                        Der Websitebetreiber unterhält auch Onlinepräsenzen innerhalb sozialer Netzwerke und
                        Plattformen, um mit den dort aktiven Nutzern zu kommunizieren. Ich weise darauf hin, dass dabei
                        Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können.
                        Hierdurch können sich für die Nutzer Risiken ergeben, weil so z. B. die Durchsetzung der Rechte
                        der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield
                        zertifiziert sind, weise ich darauf hin, dass sie sich damit verpflichten, die
                        Datenschutzstandards der EU einzuhalten. Ferner werden die Daten der Nutzer im Regelfall für
                        Marktforschungs- und Werbezwecke verarbeitet. So können z. B. aus dem Nutzungsverhalten und sich
                        daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile
                        können wiederum verwendet werden, um z. B. Werbeanzeigen innerhalb und außerhalb der Plattformen
                        zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im
                        Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und
                        die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
                        unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die
                        Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind). Die
                        Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage meinem berechtigten
                        Interesse an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art.
                        6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern um eine Einwilligung in
                        die Datenverarbeitung gebeten werden (d. h. ihr Einverständnis z. B. über das Anhaken eines
                        Kontrollkästchens oder Bestätigung einer Schaltfläche erklären) ist die Rechtsgrundlage der
                        Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO. Für eine detaillierte Darstellung der
                        jeweiligen Verarbeitungen, verweise ich auf die nachfolgend verlinkten Datenschutzerklärungen
                        der Anbieter:
                    </p>
                    <ul className="list-disc list-inside m-4">
                        <li><a className="font-light text-primary hover:underline" href="https://policies.google.com/privacy?hl=de"
                               target="_blank">Google</a></li>
                        <li><a className="font-light text-primary hover:underline" href="https://discord.com/privacy"
                               target="_blank">Discord</a></li>
                        <li><a className="font-light text-primary hover:underline"
                               href="https://store.steampowered.com/privacy_agreement/?l=german"
                               target="_blank">Steam</a></li>
                        <li><a className="font-light text-primary hover:underline"
                               href="https://bsky.social/about/support/privacy-policy" target="_blank">Bluesky</a></li>
                    </ul>
                    <p className="sub-text font-light">
                        Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weise ich darauf
                        hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die
                        Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende
                        Maßnahmen ergreifen und Auskünfte geben.
                    </p>
                </div>

                {/* Paragraph 8 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
                    <p className="sub-text font-light">
                        Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden
                        wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain
                        View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften. Weitere Informationen zu Google Web Fonts finden Sie <a className="text-primary hover:underline" href="https://developers.google.com/fonts/faq" target="_blank">hier</a>.
                    </p>
                </div>

                {/* Paragraph 9 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Erfassung und Verarbeitung personenbezogener Daten</h2>
                    <p className="sub-text font-light">
                        Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann weiter, wenn
                        dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen. Als
                        personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person zu
                        bestimmen und welche zu Ihnen zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre
                        E-Mail-Adresse oder Telefonnummer. Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer
                        Person zu machen. Zur Verbesserung unseres Online-Angebotes speichert jedoch unter
                        Hosting-Anbieter (ohne Personenbezug) Ihre Zugriffsdaten auf diese Website. Zu diesen
                        Zugriffsdaten gehören die von Ihnen angeforderte Datei und das Zugriffsdatum. Durch die
                        Anonymisierung der Daten sind Rückschlüsse auf Ihre Person nicht möglich. Wir verarbeiten
                        personenbezogene Daten nur nach ausdrücklicher Erlaubnis der betreffenden Nutzer und unter
                        Einhaltung der geltenden Datenschutzbestimmungen. Die Verarbeitung der personenbezogenen Daten
                        erfolgt aufgrund unseres berechtigten Interesses zur Erfüllung unserer vertraglich vereinbarten
                        Leistungen und zur Optimierung unseres Online-Angebotes.
                    </p>
                </div>

                {/* Paragraph 10 */}
                <div className="space-y-2">
                    <h2 className="text-2xa font-semibold">Kontaktformular</h2>
                    <p className="sub-text font-light">
                        Treten Sie bzgl. Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt,
                        erteilen Sie uns zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die
                        Angabe einer validen E-Mail-Adresse erforderlich. Diese dient der Zuordnung der Anfrage und der
                        anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional. Die von Ihnen
                        gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
                        Anschlussfragen gespeichert. Nach Erledigung der von Ihnen gestellten Anfrage werden
                        personenbezogene Daten automatisch gelöscht.
                    </p>
                </div>

                {/* Paragraph 11 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Umgang mit Kontaktdaten</h2>
                    <p className="sub-text font-light">
                        Nehmen Sie mit uns als Websitebetreiber durch die angebotenen Kontaktmöglichkeiten Verbindung
                        auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer
                        Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte
                        weitergegeben.
                    </p>
                </div>

                {/* Paragraph 12 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Rechte des Nutzers</h2>
                    <p className="sub-text font-light">
                        Sie haben als Nutzer das Recht, auf Antrag eine kostenlose Auskunft darüber zu erhalten, welche
                        personenbezogenen Daten über Sie gespeichert wurden. Sie haben außerdem das Recht auf
                        Berichtigung falscher Daten und auf die Verarbeitungseinschränkung oder Löschung Ihrer
                        personenbezogenen Daten. Falls zutreffend, können Sie auch Ihr Recht auf Datenportabilität
                        geltend machen. Sollten Sie annehmen, dass Ihre Daten unrechtmäßig verarbeitet wurden, können
                        Sie eine Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.
                    </p>
                </div>

                {/* Paragraph 13 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Löschung von Daten</h2>
                    <p className="sub-text font-light">
                        Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z. B.
                        Vorratsdatenspeicherung) kollidiert, haben Sie ein Anrecht auf Löschung Ihrer Daten. Von uns
                        gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung nicht mehr vonnöten sein und es
                        keine gesetzlichen Aufbewahrungsfristen geben, gelöscht. Falls eine Löschung nicht durchgeführt
                        werden kann, da die Daten für zulässige gesetzliche Zwecke erforderlich sind, erfolgt eine
                        Einschränkung der Datenverarbeitung. In diesem Fall werden die Daten gesperrt und nicht für
                        andere Zwecke verarbeitet.
                    </p>
                </div>

                {/* Paragraph 14 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Änderung unserer Datenschutzbestimmungen</h2>
                    <p className="sub-text font-light">
                        Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den
                        aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
                        Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten
                        Besuch gilt dann die neue Datenschutzerklärung.
                    </p>
                </div>

                {/* Paragraph 15 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Widerspruchsrecht</h2>
                    <p className="sub-text font-light">
                        Nutzer dieser Webseite können von ihrem Widerspruchsrecht Gebrauch machen und der Verarbeitung
                        ihrer personenbezogenen Daten zu jeder Zeit widersprechen. Wenn Sie eine Berichtigung, Sperrung,
                        Löschung oder Auskunft über die zu Ihrer Person gespeicherten personenbezogenen Daten wünschen
                        oder Fragen bezüglich der Erhebung, Verarbeitung oder Verwendung Ihrer personenbezogenen Daten
                        haben oder erteilte Einwilligungen widerrufen möchten, wenden Sie sich bitte an an den
                        Websitebetreiber.
                    </p>
                </div>

                {/* Footer */}
                <footer className="border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-400">
                        Stand: März 2025 &ndash; Änderungen und Irrtümer vorbehalten.
                    </p>
                </footer>
            </div>
        </section>
    );
}
