"use client";

import { GameServerCard } from "../../Card/GameServerCard";
import React, { useEffect, useState } from "react";
import Hosting from "../../../assets/zap-hosting-banner.jpeg";
import Image from "next/image";
import { Header } from "../../Header/index";

import MinecraftImage from "../../../assets/gamesesrver-minecraft.webp";
import CoreKeeperImage from "../../../assets/gameserver-corekeeper.webp";
import SatisfactoryImage from "../../../assets/gameserver-satisfactory.webp";
import SevenDays from "../../../assets/gameserver-7Days.webp";
import ValheimImage from "../../../assets/gameserver-valheim.webp";
import MoriaImage from "../../../assets/gameserver-moria.webp";

import PreviewImage1 from "../../../assets/gameserver-bg-minecraft.webp";
import PreviewImage2 from "../../../assets/gameserver-bg-satisfactory.webp";
import PreviewImage3 from "../../../assets/gameserver-bg-corekeeper.webp";
import PreviewImage4 from "../../../assets/gameserver-bg-7Days.webp";
import PreviewImage5 from "../../../assets/gameserver-moria.webp";
import PreviewImage6 from "../../../assets/gameserver-bg-valheim.webp";

import Alert from "../../Alert/index";
import Link from "next/link";

const previews = [
  PreviewImage1,
  PreviewImage2,
  PreviewImage3,
  PreviewImage4,
  PreviewImage5,
  PreviewImage6,
];

export const GameServer = () => {
  const [isShow, setShow] = useState<boolean>(false);

  const copyLink = async (link: string) => {
    await navigator.clipboard.writeText(link);
    setShow(true);
  };

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isShow]);

  return (
    <div>
      <Header previews={previews} noText />
      {isShow && <Alert message={"Die Adresse wurde in die Zwischenablage kopiert"} />}

      <div className="xl:px-0 px-5 md:px-10 mt-40 max-w-[1280px] mx-auto">
        <div className="relative block text-white">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="linear-text font-medium uppercase text-sm">ANTI-CORONA-KARTELL</h2>

              <div className="flex flex-row m-0 p-0 uppercase mt-3 pr-5">
                <h1 className="font-bold text-2xl lg:text-7xl tracking-widest m-0">GAME</h1>
                <h1 className="linear-text font-bold text-2xl lg:text-7xl tracking-widest m-0">
                  SERVER
                </h1>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="mt-8 font-light">
                <strong>Nice, dass du uns gefunden hast!</strong>
                <br />
                Check mal ab, ob wir dein Vibe sind und ob du hier andocken willst. Wir warten schon
                auf dich.
              </p>

              <Link
                href="https://discord.anti-corona-kartell.de"
                target="_blank"
                className="inline-block mt-7 py-2 px-3 text-white rounded-lg transition duration-300 md:border-0 p-0 bg-primary hover:bg-primaryHover"
              >
                Discord beitreten
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-30 my-20">
          <h1 className="text-lg lg:text-5xl font-semibold mb-10 text-white">
            Unsere aktuellen Gameserver
          </h1>

          <GameServerCard
            title={"Valheim"}
            image={ValheimImage}
            onClick={() => copyLink("194.62.157.159:2456")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>
                  Schreibe beim Kämpfen, Bauen und Erobern eine Saga, die Odins Gunst würdig ist.
                </p>
                <p>
                  <strong>Name:</strong> ANTI-CORONA-KARTELL
                </p>
                <p>
                  <strong>Adresse:</strong> 194.62.157.159:2456
                </p>

                <p>
                  <strong>Hinweis:</strong> Ein Passwort wird benötigt. Zu finden auf unserem
                  Discord-Server.
                </p>
              </>
            }
          >
            <>
              <p className="text-base leading-relaxed text-gray-500">
                Ein brutales 1-10 Spieler Multiplayer-Erkundungs- und Survivalspiel in einem
                prozedural generierten Fegefeuer inspiriert von der Kultur der Wikinger.
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"The Lord of the Rings: Return to Moria"}
            image={MoriaImage}
            onClick={() => copyLink("D-NQVCJD-RYSL8W")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">Einladungscode kopieren</p>
              </>
            }
            cardText={
              <>
                <p>
                  Begib dich auf eine epische Reise, um die zwergische Heimat Moria zurückzuerobern.
                </p>
                <p>
                  <strong>Name:</strong> ANTI-CORONA-KARTELL
                </p>
                <p>
                  <strong>Einladungscode:</strong> D-NQVCJD-RYSL8W
                </p>
              </>
            }
          >
            <>
              <p className="text-base leading-relaxed text-gray-500">
                Das einzige Survival-Crafting-Game im Vierten Zeitalter von Mittelerde™. Begib dich
                auf eine epische Reise, um die zwergische Heimat Moria zurückzuerobern. Kundschafte,
                werke und baue als Solo-Abenteurer oder mit bis zu sieben weiteren Gefährten im
                Koop-Modus.
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"7 Days to Die"}
            image={SevenDays}
            onClick={() => copyLink("194.62.157.159:26900")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Stelle dich den Zombie-Horden beim Blutmond.</p>
                <p>
                  <strong>Name:</strong> ANTI-CORONA-KARTELL
                </p>
                <p>
                  <strong>Adresse:</strong> 194.62.157.159:26900
                </p>
              </>
            }
          >
            <>
              <p className="text-base leading-relaxed text-gray-500">
                7 Days to Die ist ein Open-World-Spiel, das auf einzigartige Weise Ego-Shooter,
                Survival-Horror, Tower Defense und Rollenspiel kombiniert. Spiele den ultimativen
                Vorreiter der Zombie-Survival-Sandbox-RPGs.
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"Core Keeper"}
            image={CoreKeeperImage}
            onClick={() => copyLink("2ihUSCz22aiuhRP8X3LUNHTrGJKF")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">ID kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Hilf mit, um das Geheimnis des uralten KERNS zu lüften!</p>
                <p>
                  <strong>Name:</strong> ANTI-CORONA-KARTELL
                </p>
                <p>
                  <strong>Game-ID:</strong> 2ihUSCz22aiuhRP8X3LUNHTrGJKF
                </p>
                <p>
                  <strong>Achtung:</strong> Es werden MODs benötigt, um sich zu verbinden.
                </p>
              </>
            }
          >
            <>
              <p className="text-base leading-relaxed text-gray-500">
                <strong>Lüfte das Geheimnis des uralten Kerns</strong>
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                Erforsche eine endlose Höhle voller Kreaturen, Relikte und Ressourcen in einem
                Bergbau-Sandbox-Abenteuer für 1-8 Spieler. Schürfe, baue, kämpfe, fertige
                Gegenstände an und betreibe Landwirtschaft, um das Geheimnis des uralten KERNS zu
                lüften.
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                <strong>Benötigte Mods: </strong>
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/chatcommands3#description"
                  target="_blank"
                >
                  Chat Commands
                </a>
                ,{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/chestlabels#description"
                  target="_blank"
                >
                  {" "}
                  Chest Labels
                </a>
                ,{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/extendedcraftingrangeplus#description"
                  target="_blank"
                >
                  Extended Crafting Range+
                </a>
                ,{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/core-lib#description"
                  target="_blank"
                >
                  {" "}
                  CoreLib
                </a>
                ,{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/corelibcommands#description"
                  target="_blank"
                >
                  {" "}
                  CoreLib.Commands
                </a>
                ,{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/coreliblocalization#description"
                  target="_blank"
                >
                  {" "}
                  CoreLib.Localization
                </a>
                ,{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://mod.io/g/corekeeper/m/corelibrewiredextension#description"
                  target="_blank"
                >
                  {" "}
                  CoreLib.RewiredExtension
                </a>
                .
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                Um sich zum Gameserver zu verbinden, müssen die Mods über das Menü 'MODS' in Core
                Keeper installiert bzw. abonniert werden.
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"Satisfactory"}
            image={SatisfactoryImage}
            onClick={() => copyLink("193.203.238.158:7778")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Komm, und betrete den Fließbandhimmel!</p>
                <p>
                  <strong>Name:</strong> ANTI-CORONA-KARTELL
                </p>
                <p>
                  <strong>Adresse:</strong> 193.203.238.158:7778
                </p>
              </>
            }
          >
            <>
              <p className="text-base leading-relaxed text-gray-500">
                Satisfactory ist ein Fabrik-Aufbauspiel aus der Ego-Perspektive mit einer Prise
                Erkundung und Kampf. Spiele allein oder mit Freunden, erkunde einen fremden
                Planeten, baue mehrstöckige Fabriken und betrete den Fließbandhimmel!
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"Minecraft"}
            image={MinecraftImage}
            onClick={() => copyLink("minecraft-gilde.de")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Erster deutscher FOLIA Vanilla-Server!</p>
                <p>
                  <strong>Name:</strong> Minecraft Gilde
                </p>
                <p>
                  <strong>Adresse:</strong> minecraft-gilde.de
                </p>
              </>
            }
          >
            <>
              <p className="text-base leading-relaxed text-gray-500">
                Dein gemütlicher Minecraft-Vanilla-Server – ohne Minigames, ohne Citybuild, nur
                pures Minecraft!
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                Die{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://minecraft-gilde.de"
                  target="_blank"
                >
                  Minecraft Gilde
                </a>{" "}
                ist ein deutscher Vanilla-Server, der sich ganz auf das pure Survival- und
                Freebuild-Erlebnis konzentriert. Hier gibt es keine Minigames, kein Citybuild und
                keine anderen Ablenkungen – du spielst Minecraft in seiner ursprünglichsten Form.
                Der Fokus liegt auf echtem Vanilla-Survival-Gameplay. Als neuer Spieler erhältst du
                ein Starter-Kit, das dir den Einstieg erleichtert. Gespielt wird auf einer einzigen
                Welt (inklusive separater Farmwelten). Ein World-Reset hat bisher nicht
                stattgefunden und ist auch in Zukunft nicht geplant. Der Server ist auf Langzeit
                ausgelegt – deine Bauwerke bleiben dauerhaft erhalten.
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                Seit Mai 2025 ist die Minecraft Gilde der erste deutschsprachige Server auf{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://papermc.io/software/folia"
                  target="_blank"
                >
                  Folia
                </a>
                -Basis. Durch die Verlagerung von Aufgaben in parallele Threads bietet Folia eine
                deutlich bessere Performance – besonders bei vielen Spielern oder Entitäten. Lag ist
                nicht mehr global, sondern regional begrenzt. So laufen Redstone-Maschinen, Farmen
                und auch die Spawnraten nahezu wie im Singleplayer. Auch bei hoher Serverlast bleibt
                das Gameplay flüssig – mit hohen Sichtweiten, stabilen Tickraten und ohne
                Einschränkungen für Technik oder Bauprojekte.
              </p>
            </>
          </GameServerCard>
        </div>

        <div className="space-y-2 mt-10 text-white">
          <h2 className="text-xl lg:text-2xl lg:text-3xl font-smibold mb-4 uppercase linear-text">
            20% auf deinen eigenen Gameserver
          </h2>

          <p>
            Wir hosten alle unsere Gameserver bei Zap-Hosting. Durch unsere Zusammenarbeit mit
            Zap-Hosting bekommst du{" "}
            <a
              className="text-primary hover:underline"
              href="https://zap-hosting.com/anticoronakartellbanner"
              target="_blank"
            >
              20% Rabatt
            </a>{" "}
            auf deinen eigenen Gameserver!
          </p>
          <p>Auf die gesamte Laufzeit aller Produkte.</p>
        </div>

        <div className="my-5">
          <Link href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">
            <Image
              src={Hosting}
              alt={"hosting"}
              width={1000}
              height={1000}
              className="w-[800px]"
              priority={true}
              loader={(loader) => `${loader.src}`}
            />
          </Link>
        </div>

        <div className="text-white space-y-5">
          <p>
            Eigener Server gefällig? Go for it. Wir geben dir dazu deinen eigenen Discord‑Channel,
            damit du easy Leute erreichst und direkt loslegen kannst.
          </p>

          <p>
            Verwende diesen Rabatt-Code, um dir 20% bei deiner Buchung zu sichern:
            <strong> schiroky-a-6751</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
