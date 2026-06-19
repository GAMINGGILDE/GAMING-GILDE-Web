"use client";

import { GameServerCard } from "../../Card/GameServerCard";
import React, { useEffect, useState } from "react";
import { Header } from "../../Header/index";
import MinecraftImage from "../../../../public/mg-logo-full.png";
import CoreKeeperImage from "../../../assets/gameserver-corekeeper.webp";
import SatisfactoryImage from "../../../assets/gameserver-satisfactory.webp";
import SevenDays from "../../../assets/gameserver-7Days.webp";
import ValheimImage from "../../../assets/gameserver-valheim.webp";
import WindroseImage from "../../../assets/gameserver-windrose.webp";

import PreviewImage1 from "../../../assets/gameserver-bg-minecraft.webp";
import PreviewImage2 from "../../../assets/gameserver-bg-satisfactory.webp";
import PreviewImage3 from "../../../assets/gameserver-bg-corekeeper.webp";
import PreviewImage4 from "../../../assets/gameserver-bg-7Days.webp";
import PreviewImage5 from "../../../assets/gameserver-bg-valheim.webp";
import PreviewImage6 from "../../../assets/gameserver-windrose.webp";

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
              <h2 className="linear-text font-medium uppercase text-sm">GAMING GILDE</h2>

              <div className="flex flex-row m-0 p-0 uppercase mt-3 pr-5 [font-family:var(--font-nova-bold)]">
                <h1 className="text-3xl lg:text-7xl tracking-widest m-0">GAME</h1>
                <h1 className="linear-text text-3xl lg:text-7xl tracking-widest m-0">SERVER</h1>
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
                href="https://discord.gaming-gilde.org"
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
            title={"Minecraft Gilde"}
            image={MinecraftImage}
            externalUrl="https://minecraft-gilde.de"
            colorVariant="yellow"
            cornerLabel="Langzeitserver"
            cornerLabelClassName="absolute top-3 right-3 rounded-full bg-yellow-400/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-yellow-300/70"
            imageClassName="w-[24rem] object-contain rounded-lg"
            buttonClassName="bg-yellow-500 hover:bg-yellow-400 px-5 text-center py-0.5 rounded-full flex items-center transition duration-300"
            button={
              <>
                <p className="text-sm font-light text-white">Webseite öffnen</p>
              </>
            }
            cardText={
              <>
                <p>
                  Dein deutschsprachiger Minecraft Vanilla SMP Server für Survival und Freebuild auf
                  einer Langzeitwelt ohne Reset.
                </p>
                <p className="mt-4">
                  Die Minecraft Gilde ist ein deutschsprachiger Minecraft Vanilla-SMP für Survival
                  und Freebuild, mit einer beständigen Langzeitwelt für deine langfristigen
                  Projekte. Statt Minigames oder Citybuild findest du bei uns einen ruhigen Server,
                  auf dem große Projekte in ihrem eigenen Tempo wachsen dürfen.
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

          <GameServerCard
            title={"Core Keeper"}
            image={CoreKeeperImage}
            colorVariant="magenta"
            cornerLabel="Langzeitserver"
            onClick={() => copyLink("MJZjzJiPF579nAU")}
            button={
              <>
                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                <p className="text-sm font-light text-white">ID kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Hilf mit, um das Geheimnis des uralten KERNS zu lüften!</p>
                <p className="mt-4">
                  <strong>Name:</strong> GAMING-GILDE
                </p>
                <p>
                  <strong>Game-ID:</strong> MJZjzJiPF579nAU
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
                <strong>Lüfte das Geheimnis des uralten Kerns</strong>
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                Erforsche eine endlose Höhle voller Kreaturen, Relikte und Ressourcen in einem
                Bergbau-Sandbox-Abenteuer für 1-8 Spieler. Schürfe, baue, kämpfe, fertige
                Gegenstände an und betreibe Landwirtschaft, um das Geheimnis des uralten KERNS zu
                lüften.
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"Satisfactory"}
            image={SatisfactoryImage}
            colorVariant="magenta"
            cornerLabel="Langzeitserver"
            onClick={() => copyLink("193.203.238.158:7778")}
            button={
              <>
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Komm, und betrete den Fließbandhimmel!</p>
                <p className="mt-4">
                  <strong>Name:</strong> GAMING-GILDE
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
            title={"Windrose"}
            image={WindroseImage}
            onClick={() => copyLink("80052342")}
            button={
              <>
                <p className="text-sm font-light text-white">Einladungscode kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Gehe auf ein PvE-Survival-Abenteuer im Piratenzeitalter.</p>
                <p className="mt-4">
                  <strong>Name:</strong> GAMING-GILDE
                </p>
                <p>
                  <strong>Einladungscode:</strong> 80052342
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
                Baue, fertige und erkunde eine riesige offene Welt voller dunkler Geheimnisse.
                Stelle dich Soulslite-Kämpfen und herausfordernden Bossen. Befehlige dein Schiff und
                raube unermessliche Schätze!
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"Valheim Plus"}
            image={ValheimImage}
            onClick={() => copyLink("194.62.157.159:2456")}
            button={
              <>
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>
                  Schreibe beim Kämpfen, Bauen und Erobern eine Saga, die Odins Gunst würdig ist.
                </p>
                <p className="mt-4">
                  <strong>Name:</strong> GAMING-GILDE
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

              <p className="text-base leading-relaxed text-gray-500">
                <strong>Benötigter Mod: </strong>
                <a
                  className="text-primary hover:underline"
                  href="https://www.nexusmods.com/valheim/mods/2323"
                  target="_blank"
                >
                  Valheim Plus
                </a>
              </p>
            </>
          </GameServerCard>

          <GameServerCard
            title={"7 Days to Die"}
            image={SevenDays}
            onClick={() => copyLink("194.62.157.159:26900")}
            button={
              <>
                <p className="text-sm font-light text-white">Adresse kopieren</p>
              </>
            }
            cardText={
              <>
                <p>Stelle dich den Zombie-Horden beim Blutmond.</p>
                <p className="mt-4">
                  <strong>Name:</strong> GAMING-GILDE
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
        </div>
      </div>
    </div>
  );
};
