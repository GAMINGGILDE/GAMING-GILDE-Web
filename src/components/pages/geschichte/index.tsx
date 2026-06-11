"use client";

import { Header } from "../../Header/index";
import React from "react";
import PreviewImage from "../../../assets/impressum-bg-1.webp";
import PreviewImage1 from "../../../assets/impressum-bg-2.webp";
import PreviewImage2 from "../../../assets/impressum-bg-3.webp";
import PreviewImage3 from "../../../assets/impressum-bg-4.webp";
import PreviewImage4 from "../../../assets/impressum-bg-5.webp";

const previews = [PreviewImage, PreviewImage1, PreviewImage2, PreviewImage3, PreviewImage4];

export const History = () => {
  return (
    <div>
      <Header previews={previews} noText />

      <div className="xl:px-0 px-5 md:px-10 mt-32 max-w-[1280px] mx-auto">
        <div className="relative block text-white text-center">
          <div className="flex flex-wrap m-0 p-0 gap-x-5 uppercase [font-family:var(--font-nova-bold)]">
            <h1 className="text-3xl lg:text-7xl tracking-widest m-0 lg:leading-none">
              Unsere
            </h1>
            <h1 className="text-3xl linear-text lg:text-7xl tracking-widest m-0 lg:leading-none">
              Geschichte
            </h1>
          </div>
        </div>

        <div className="my-20 text-white w-full m-auto">
          <p className="text-lg mb-5">
            Das ANTI-CORONA-KARTELL entstand während der Corona-Pandemie, als sich eine kleine
            Gruppe Gamer regelmäßig in Age of Empires II trafen und ihre Lobby so benannten. In der
            Zeit eingeschränkter Freizeitmöglichkeiten war das gemeinsame Online-Spiel ein Ersatz
            für persönliche Treffen, die wir schmerzlich vermissten. Nach der Pandemie beschlossen
            wir uns wieder persönlich zu treffen und gaben unserer Gruppe einen Namen, der unseren
            Protest zu den damaligen Umständen symbolisierte: ANTI-CORONA-KARTELL.
          </p>

          <div className="text-lg mb-5">
            <p>Die damaligen Gründungsmitglieder:</p>
            <ul className="list-disc list-inside m-4">
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://steamcommunity.com/id/lestructor"
                  target="_blank"
                >
                  Lestructor
                </a>{" "}
                |{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.xbox.com/de-DE/play/user/QuickChrissi"
                  target="_blank"
                >
                  Christian
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://steamcommunity.com/profiles/76561197969468353"
                  target="_blank"
                >
                  Matcauthon
                </a>{" "}
                |{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.xbox.com/de-DE/play/user/horcan"
                  target="_blank"
                >
                  Uwe
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://steamcommunity.com/profiles/76561198041298471"
                  target="_blank"
                >
                  Psycho92sly
                </a>{" "}
                |{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.xbox.com/de-DE/play/user/Psycho92sly"
                  target="_blank"
                >
                  Georg
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://steamcommunity.com/profiles/76561198053398911"
                  target="_blank"
                >
                  Sansa49
                </a>{" "}
                |{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.xbox.com/de-DE/play/user/sansa49"
                  target="_blank"
                >
                  Olaf
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:underline"
                  href="https://steamcommunity.com/id/schiroky"
                  target="_blank"
                >
                  SCHIROKY
                </a>{" "}
                |{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.xbox.com/de-DE/play/user/S%20C%20H%20I%20R%20O%20K%20Y"
                  target="_blank"
                >
                  Claus
                </a>
              </li>
            </ul>
          </div>
          <p className="text-lg mb-5">
            Beim ersten Treffen (2022) haben wir uns kulinarisch bei einem ausgiebigen mexikanischen
            Essen getroffen und mit mobilen Spielekonsolen (Nintendo Switch) unserm Hobby gefrönt.
            Unser erstes Treffen kam so gut bei den Teilnehmern an, dass wir uns entschieden haben,
            das Treffen des ANTI-CORONA-KARTELLs fortan jedes Jahr zu wiederholen. Für das zweite
            Treffen (2023) haben wir uns regional einen ganzen Kinosaal gemietet und uns auf der
            großen Leinwand mit Spielen auf einer XBOX 360 ausgetobt. Für das dritte Treffen (2024)
            haben wir eine idyllische Floßfahrt auf der Isar unternommen und dabei eine mobile
            Spielekonsole (GameLix) verlost.
          </p>
          <p className="text-lg mb-5">
            Zu einigen Events haben wir ein paar Videos auf unserem{" "}
            <a
              className="text-primary hover:underline"
              href="https://www.youtube.com/@Gaming-Gilde"
              target="_blank"
            >
              YouTube-Kanal
            </a>{" "}
            veröffentlicht. Schau gerne mal rein und lass ein Abo da.
          </p>

          <p className="text-lg mb-5">
            Im Zuge weiterer Zusammenarbeit ist im April 2024 das ANTI-CORONA-KARTELL eine
            Partnerschaft mit der Minecraft Gilde eingegangen, welche heute fester Bestandteil
            unserer Gaming Community ist. Sie bietet Minecraft-Begeisterten den ersten Deutschen
            Minecraft Server auf Basis von Folia und damit stabile Tickraten mit bester Performance.
          </p>

          <p className="text-lg mb-5">
            Gemeinsam sind wir Garant für jede Menge Spaß und Abwechslung beim Gaming.
          </p>

          <p className="text-lg mb-5">
            Wenn du keinen unserer Events mehr verpassen willst und auch ein Teil unserer Geschichte
            werden willst, dann werde noch heute Mitglied beim{" "}
            <a
              className="text-primary hover:underline"
              href="https://discord.gaming-gilde.org"
              target="_blank"
            >
              GAMING GILDE
            </a>{" "}
            und unserem Partner, der{" "}
            <a
              className="text-primary hover:underline"
              href="https://discord.minecraft-gilde.de"
              target="_blank"
            >
              Minecraft Gilde
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
