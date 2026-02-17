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
                className="max-w-[1280px] mx-auto space-y-5 mt-60 xl:px-0 px-5 md:px-10 w-full m-auto mb-20 text-white">
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
                        Unsere Website ist überwiegend statisch aufgebaut und setzt selbst keine eigenen Tracking- oder Analyse-Cookies ein. Durch uns als Websitebetreiber findet keine Erstellung personenbezogener Nutzungsprofile statt.
                    </p>
                    <p className="sub-text font-light">
                        Ihr Browser kann einzelne Inhalte wie Bilder, Stylesheets oder Skripte im Cache zwischenspeichern, um Ladezeiten zu verbessern. Dabei handelt es sich nicht um klassische Cookies, sondern um eine normale technische Funktion Ihres Browsers.
                    </p>
                    <p className="sub-text font-light">
                        Auf einzelnen Unterseiten binden wir externe Inhalte ein, insbesondere Videos der Plattform YouTube. Beim Aufruf oder spätestens beim Abspielen solcher eingebetteten Videos kann YouTube Cookies oder ähnliche Technologien setzen, auf die wir keinen Einfluss haben. Weitere Informationen hierzu finden Sie im Abschnitt „Einbindung von YouTube-Videos“ dieser Datenschutzerklärung.
                    </p>
                    <p className="sub-text font-light">
                        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im Einzelfall erlauben, die Annahme von Cookies ausschließen oder das automatische Löschen von Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität anderer Websites eingeschränkt sein, jedoch hat dies in der Regel keine Auswirkungen auf unsere Website.
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
                        Wir unterhalten auch Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Nutzern zu kommunizieren. Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z. B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Soweit Anbieter ihren Sitz in Drittländern (insbesondere den USA) haben, weisen wir darauf hin, dass dort ggf. kein mit der EU vergleichbares Datenschutzniveau besteht. Eine Datenübermittlung erfolgt nur, soweit sie nach Kapitel V DSGVO zulässig ist (z. B. auf Grundlage von Standardvertragsklauseln oder eines Angemessenheitsbeschlusses). Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z. B. aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z. B. Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind). Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unseres berechtigten Interesses an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern um eine Einwilligung in die Datenverarbeitung gebeten werden (d. h. ihr Einverständnis z. B. über das Anhaken eines Kontrollkästchens oder Bestätigung einer Schaltfläche erklären), ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO. Für eine detaillierte Darstellung der jeweiligen Verarbeitungen verweisen wir auf die nachfolgend verlinkten Datenschutzerklärungen der Anbieter:
                    </p>
                    <ul className="list-disc list-inside m-4">
                        <li><a className="font-light text-primary hover:underline" href="https://policies.google.com/privacy?hl=de"
                               target="_blank">Google</a></li>
                        <li><a className="font-light text-primary hover:underline" href="https://discord.com/privacy"
                               target="_blank">Discord</a></li>
                        <li><a className="font-light text-primary hover:underline"
                               href="https://www.tiktok.com/legal/page/eea/privacy-policy/de"
                               target="_blank">TikTok</a></li>
                        <li><a className="font-light text-primary hover:underline"
                               href="https://www.twitch.tv/p/de-de/legal/privacy-notice" target="_blank">Twitch</a></li>
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
                    <h2 className="text-2xs font-semibold">Verwendung von Scriptbibliotheken (Google Webfonts & Font Awesome)</h2>
                    <p className="sub-text font-light">
                        Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website unter anderem „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) sowie das Icon-Framework „Font Awesome“, das über ein externes Skript (Content Delivery Network) eingebunden wird.
                    </p>
                    <p className="sub-text font-light">
                        Beim Aufruf unserer Seiten wird eine Verbindung zu den Servern dieser Anbieter hergestellt. Hierdurch können personenbezogene Daten, insbesondere Ihre IP-Adresse sowie technische Informationen zu Ihrem Browser und Endgerät, an die jeweiligen Anbieter übertragen werden. Dabei kann es auch zu einer Übermittlung von Daten in Drittländer, insbesondere die USA, kommen, in denen kein mit der EU vergleichbares Datenschutzniveau besteht. Die Nutzung dieser Schrift- und Icon-Bibliotheken erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote und basiert auf unserem berechtigten Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                    <p className="sub-text font-light">
                        Weitere Informationen zu Google Web Fonts finden Sie unter <a className="font-light text-primary hover:underline" href="https://developers.google.com/fonts/faq" target="_blank">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a className="font-light text-primary hover:underline" href="https://www.google.com/policies/privacy" target="_blank">https://www.google.com/policies/privacy</a>.
                    </p>

                </div>

                {/* Paragraph 9 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Erfassung und Verarbeitung personenbezogener Daten</h2>
                    <p className="sub-text font-light">
                        Wir erheben, nutzen und geben Ihre personenbezogenen Daten nur dann weiter, wenn dies im gesetzlichen Rahmen erlaubt ist oder Sie in die Datenerhebung einwilligen. Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen zurückverfolgt werden können – also beispielsweise Ihr Name, Ihre E-Mail-Adresse oder Telefonnummer. Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person zu machen.
                    </p>
                    <p className="sub-text font-light">
                        Ergänzend zu den unter „Zugriffsdaten“ beschriebenen technischen Logdaten verarbeiten wir personenbezogene Daten nur nach ausdrücklicher Erlaubnis der betreffenden Nutzer und unter Einhaltung der geltenden Datenschutzbestimmungen. Die Verarbeitung der personenbezogenen Daten erfolgt insbesondere zur Bearbeitung von Anfragen, zur Wahrung unserer berechtigten Interessen sowie – soweit einschlägig – zur Erfüllung vertraglicher oder vorvertraglicher Pflichten.
                    </p>
                </div>

                {/* Paragraph 10 */}
                <div className="space-y-2">
                    <h2 className="text-2xa font-semibold">Umgang mit Kontaktdaten</h2>
                    <p className="sub-text font-light">
                        Nehmen Sie mit uns als Websitebetreiber über die angebotenen Kontaktmöglichkeiten (z. B. per E-Mail) Verbindung auf, werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben. Ein gesondertes Kontaktformular wird nicht angeboten.
                    </p>
                </div>

                {/* Paragraph 11 */}
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

                {/* Paragraph 12 */}
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

                {/* Paragraph 13 */}
                <div className="space-y-2">
                    <h2 className="text-2xs font-semibold">Änderung unserer Datenschutzbestimmungen</h2>
                    <p className="sub-text font-light">
                        Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den
                        aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
                        Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten
                        Besuch gilt dann die neue Datenschutzerklärung.
                    </p>
                </div>

                {/* Paragraph 14 */}
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
                        Stand: Januar 2026.
                    </p>
                </footer>
            </div>
        </section>
    );
}
