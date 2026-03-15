"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import PreviewImage from "../../assets/impressum-bg-1.webp";
import PreviewImage2 from "../../assets/impressum-bg-2.webp";
import PreviewImage3 from "../../assets/impressum-bg-3.webp";
import PreviewImage4 from "../../assets/impressum-bg-4.webp";
import PreviewImage5 from "../../assets/impressum-bg-5.webp";
import Link from "next/link";
import { FaDiscord, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa6";

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4, PreviewImage5];

export default function Imprint() {
  const emailRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (emailRef.current) {
      const domain = "anti-corona-kartell.de";
      const email = "webmaster@" + domain;

      const link = document.createElement("a");
      link.href = `mailto:${email}`;
      link.target = "_blank";
      link.className = "text-primary underline font-light";
      link.textContent = email;

      emailRef.current!.innerHTML = "";
      emailRef.current!.appendChild(link);
    }
  }, [emailRef]);

  return (
    <div>
      <Header previews={previews} noText />

      <div className="mt-60 max-w-[1280px] mx-auto xl:px-0 px-5 md:px-10 w-full m-auto mb-40">
        <div className="text-center">
          <h1 className="text-xl md:text-6xl lg:text-7xl tracking-widest linear-text uppercase text-white font-bold wrap-break-word">
            Impressum
          </h1>
        </div>

        <div className="mt-10 text-white">
          <div className="flex justify-center lg:justify-between flex-wrap lg:p-0 p-10 gap-10">
            <div className="relative">
              <Image
                src="/logo.png"
                className="w-50 mx-auto"
                alt={"anti-corona-kartell logo"}
                width={1000}
                height={1000}
                priority={true}
                unoptimized={true}
              />
              <h1 className="font-semibold text-sm text-center lg:text-lg">
                <span className="text-primary">ANTI-CORONA-KARTELL</span>
              </h1>
            </div>
            <div className="mt-10 lg:mt-0">
              <h1 className="text-sm mb-4">Unsere Social‑Media‑Kanäle:</h1>

              <div className="bg-sub py-2 px-5 my-2 rounded-lg flex justify-between w-[11rem]">
                <p className="font-semibold">YouTube</p>

                <a
                  className="text-primary hover:underline"
                  href="https://www.youtube.com/@Anti-Corona-Kartell"
                  target="_blank"
                >
                  <FaYoutube className="w-6 h-6 text-white hover:text-primary" />
                </a>
              </div>

              <div className="bg-sub py-2 px-5 my-2 rounded-lg flex justify-between w-[11rem]">
                <p className="font-semibold">Twitch</p>
                <a
                  className="text-primary hover:underline"
                  href="https://www.twitch.tv/anti_corona_kartell"
                  target="_blank"
                >
                  <FaTwitch className="w-6 h-6 text-white hover:text-primary" />
                </a>
              </div>
              <div className="bg-sub py-2 px-5 my-2 rounded-lg flex justify-between w-[11rem]">
                <p className="font-semibold">TikTok</p>
                <a
                  className="text-primary hover:underline"
                  href="https://www.tiktok.com/@anticoronakartell"
                  target="_blank"
                >
                  <FaTiktok className="w-6 h-6 text-white hover:text-primary" />
                </a>
              </div>
              <div className="bg-sub py-2 px-5 my-2 rounded-lg flex justify-between w-[11rem]">
                <p className="font-semibold">Discord</p>
                <a
                  className="text-primary hover:underline"
                  href="https://discord.anti-corona-kartell.de"
                  target="_blank"
                >
                  <FaDiscord className="w-6 h-6 text-white hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl mb-3">
              Angaben nach § 5{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.gesetze-im-internet.de/ddg/BJNR0950B0024.html"
                target="_blank"
              >
                DDG
              </a>{" "}
              :
            </h1>
            <p className="sub-text font-light">
              Claus Schiroky
              <br />
              Ährenweg 6<br />
              85375 Neufahrn
            </p>
            <div className="sub-text font-light">
              <strong>E-Mail: </strong>
              <span ref={emailRef} />
            </div>

            <div className="mt-5">
              <p className="sub-text font-light mt-2">
                <strong>Widerspruch gegen Werbe-E-Mails: </strong>Der Nutzung von im Rahmen der oben
                genannten veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Der
                Betreiber der Seiten behält sich ausdrücklich rechtliche Schritte im Falle der
                unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xs font-semibold">Art des Dienstes</h2>
              <p className="sub-text font-light mt-2">
                Diese Website stellt Informationen und kostenlose Gameserver für verschiedene Spiele
                zur Verfügung. Die Nutzung der Server erfolgt freiwillig und unentgeltlich.
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-2xs font-semibold">Geltungsbereich</h2>
              <p className="sub-text font-light mt-2">
                Die Angaben dieses Impressums finden auch Anwendung für unsere folgenden
                Online‑Präsenzen:
              </p>

              <ul className="list-disc list-inside m-4">
                <li>
                  <a
                    className="font-light text-primary hover:underline"
                    href="https://www.youtube.com/@Anti-Corona-Kartell"
                    target="_blank"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    className="font-light text-primary hover:underline"
                    href="https://www.twitch.tv/anti_corona_kartell"
                    target="_blank"
                  >
                    Twitch
                  </a>
                </li>
                <li>
                  <a
                    className="font-light text-primary hover:underline"
                    href="https://www.tiktok.com/@anticoronakartell"
                    target="_blank"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    className="font-light text-primary hover:underline"
                    href="https://discord.anti-corona-kartell.de"
                    target="_blank"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <h2 className="text-2xs font-semibold">Datenschutz & Cookies</h2>
              <p className="sub-text font-light mt-2">
                Ihre Privatsphäre ist uns sehr wichtig. Unsere{" "}
                <a className="text-primary hover:underline" href="../datenschutz">
                  Datenschutzerklärung
                </a>{" "}
                erläutert, welche persönlichen Daten von ihnen erhoben werden und wie sie von uns
                verwendet werden. Bei weiteren Fragen zum Datenschutz wenden sie sich bitte an den
                Websitebetreiber.
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-2xs font-semibold">Haftungsausschluss</h2>
              <p className="sub-text font-light mt-2">
                Alle Angaben und Inhalte dieses Angebotes wurden sorgfältig erstellt und geprüft.
                Der Websitebetreiber ist bemüht, das Angebot aktuell, vollständig und frei von
                inhaltlichen Fehlern anzubieten. Dennoch kann trotz größter Sorgfalt das Auftreten
                von Fehlern nicht völlig ausgeschlossen werden, so dass eine Garantie für die
                Vollständigkeit, Richtigkeit, Aktualität und permanente Verfügbarkeit nicht
                übernommen wird. Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für
                die Inhalte externer Links übernommen. Für den Inhalt der verlinkten Seiten sind
                ausschließlich deren Betreiber verantwortlich. Für etwaige Satzfehler sowie für die
                Richtigkeit der Eintragungen übernimmt der Websitebetreiber keine Gewähr. Der Zugang
                und die Benutzung dieser Website geschieht auf eigene Gefahr. Der Websitebetreiber
                übernimmt keinerlei Haftung für etwaige Schäden, die durch den oder in Verbindung
                mit dem Zugang und/oder der Benutzung dieser Website auftreten.
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-2xs font-semibold">Urheberrecht</h2>
              <p className="sub-text font-light mt-2">
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen
                Urheberrecht, soweit nicht anders gekennzeichnet. Jede Verwertung außerhalb der
                Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des
                jeweiligen Urhebers oder Rechteinhabers. Inhalte Dritter werden als solche
                gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir die betroffenen Inhalte unverzüglich entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
