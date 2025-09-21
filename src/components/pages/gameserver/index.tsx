"use client";

import {GameServerCard} from "../../Card/GameServerCard";
import React, {useEffect, useState} from "react";
import Hosting from "../../../assets/zap-hosting-banner.jpeg";
import Image from "next/image";
import {Header} from "../../Header/index";

import MinecraftImage from "../../../assets/gamesesrver-minecraft.webp";
import CoreKeeperImage from "../../../assets/gameserver-corekeeper.webp";
import ScumImage from "../../../assets/gameserver-scum.webp";
import SatisfactoryImage from "../../../assets/gameserver-satisfactory.webp";

import PreviewImage1 from "../../../assets/gameserver-bg-minecraft.webp";
import PreviewImage2 from "../../../assets/gameserver-bg-satisfactory.webp";
import PreviewImage3 from "../../../assets/gameserver-bg-corekeeper.webp";
import PreviewImage4 from "../../../assets/gameserver-bg-scum.webp";

import Alert from "../../Alert/index";
import Link from "next/link";

const previews = [PreviewImage1, PreviewImage2, PreviewImage3, PreviewImage4];

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
    }, [isShow])

    return (
        <div>
            <Header previews={previews} noText/>
            {isShow && <Alert message={"Die Adresse wurde in die Zwischenablage kopiert"}/>}

            <div className="xl:px-0 px-5 md:px-10 mt-40 max-w-[1280px] mx-auto">
                <div className="relative block text-white">
                    <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10">
                        <div className="col-span-12 lg:col-span-8">
                            <h2 className="linear-text font-medium uppercase text-sm">ANTI-CORONA-KARTELL</h2>

                            <div className="flex flex-row m-0 p-0 uppercase mt-3 pr-5">
                                <h1 className="font-bold text-2xl lg:text-7xl tracking-widest m-0">GAME</h1>
                                <h1 className="linear-text font-bold text-2xl lg:text-7xl tracking-widest m-0">SERVER</h1>
                            </div>

                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <p className="mt-8 font-light">Hey, cool, dass du uns gefunden hast!<br/>
                                Schau dich doch einfach mal bei uns um und finde heraus, ob wir ein gutes Match
                                sind.<br/>
                                Wir freuen uns auf dich.
                            </p>

                            <Link href="https://discord.anti-corona-kartell.de"
                                  target="_blank"
                                className="inline-block mt-7 py-2 px-3 text-white rounded-lg transition duration-300 md:border-0 p-0 bg-primary hover:bg-primaryHover">
                                Zu unserem Discord
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="mt-30 my-20">
                    <h1 className="text-lg lg:text-5xl font-semibold mb-10 text-white">Finde hier unsere besten
                        Gameserver</h1>

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
                                <p><strong>Name:</strong> ANTI-CORONA-KARTELL</p>
                                <p><strong>Game-ID:</strong> 2ihUSCz22aiuhRP8X3LUNHTrGJKF</p>
                                <p><strong>Achtung:</strong> Es werden MODS benötigt, um sich zu verbinden.</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                <strong>Lüfte das Geheimnis des uralten Kerns</strong>
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Erforsche eine endlose Höhle voller Kreaturen, Relikte und Ressourcen in einem Bergbau-Sandbox-Abenteuer für 1-8 Spieler. Schürfe, baue, kämpfe, fertige Gegenstände an und betreibe Landwirtschaft, um das Geheimnis des uralten KERNS zu lüften.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                <strong>Benötigte Mods: </strong>
                                <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/chatcommands3#description" target="_blank">Chat Commands</a>, <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/chestlabels#description" target="_blank"> Chest Labels</a>, <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/extendedcraftingrangeplus#description" target="_blank">Extended Crafting Range+</a>, <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/core-lib#description" target="_blank"> CoreLib</a>, <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/corelibcommands#description" target="_blank"> CoreLib.Commands</a>, <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/coreliblocalization#description" target="_blank"> CoreLib.Localization</a>, <a className="text-primary hover:underline" href="https://mod.io/g/corekeeper/m/corelibrewiredextension#description" target="_blank"> CoreLib.RewiredExtension</a>.
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
                                <p><strong>Name:</strong> ANTI-CORONA-KARTELL</p>
                                <p><strong>Adresse:</strong> 193.203.238.158:7778</p>
                                <p>Komm, und betrete den Fließbandhimmel!</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                Satisfactory ist ein Fabrik-Aufbauspiel aus der Ego-Perspektive mit einer Prise Erkundung und Kampf. Spiele allein oder mit Freunden, erkunde einen fremden Planeten, baue mehrstöckige Fabriken und betrete den Fließbandhimmel!
                            </p>
                        </>
                    </GameServerCard>

                    <GameServerCard
                        title={"SCUM"}
                        image={ScumImage}
                        onClick={() => copyLink("134.255.218.155:27004")}
                        button={
                            <>
                                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                                <p className="text-sm font-light text-white">IP Kopieren</p>
                            </>
                        }
                        cardText={
                            <>
                                <p><strong>Name:</strong> ANTI-CORONA-KARTELL</p>
                                <p><strong>IP-Adresse:</strong> 134.255.227.212:15005</p>
                                <p><strong>Kennwort:</strong> Findest du auf unserem Discord.</p>
                                <p>Plündere, crafte und gehe den ständigen Bedrohungen für dein Leben aus dem Weg.</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                Die beispiellosen Möglichkeiten der Charakteranpassung und des Fortschritts sind deine ultimativen Survival-Werkzeuge.
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
                                <p><strong>Name:</strong> Minecraft Gilde</p>
                                <p><strong>Adresse:</strong> minecraft-gilde.de</p>
                                <p>Erster deutscher FOLIA Vanilla-Server!</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                Dein gemütlicher Minecraft-Vanilla-Server – ohne Minigames, ohne Citybuild, nur pures
                                Minecraft!
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Die <a className="text-primary hover:underline" href="https://minecraft-gilde.de" target="_blank">Minecraft Gilde</a> ist ein deutscher Vanilla-Server, der sich ganz auf das pure
                                Survival- und Freebuild-Erlebnis konzentriert. Hier gibt es keine Minigames, kein
                                Citybuild und keine anderen Ablenkungen – du spielst Minecraft in seiner
                                ursprünglichsten Form. Der Fokus liegt auf echtem Vanilla-Survival-Gameplay. Als neuer
                                Spieler erhältst du ein Starter-Kit, das dir den Einstieg erleichtert. Gespielt wird auf
                                einer einzigen Welt (inklusive separater Farmwelten). Ein World-Reset hat bisher nicht
                                stattgefunden und ist auch in Zukunft nicht geplant. Der Server ist auf Langzeit
                                ausgelegt – deine Bauwerke bleiben dauerhaft erhalten.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Seit Mai 2025 ist die Minecraft Gilde der erste deutschsprachige Server auf <a
                                className="text-primary hover:underline" href="https://papermc.io/software/folia"
                                target="_blank">Folia</a>-Basis. Durch die Verlagerung von Aufgaben in parallele Threads
                                bietet Folia eine deutlich bessere Performance – besonders bei vielen Spielern oder
                                Entitäten. Lag ist nicht mehr global, sondern regional begrenzt. So laufen
                                Redstone-Maschinen, Farmen und auch die Spawnraten nahezu wie im Singleplayer. Auch bei
                                hoher Serverlast bleibt das Gameplay flüssig – mit hohen Sichtweiten, stabilen Tickraten
                                und ohne Einschränkungen für Technik oder Bauprojekte.
                            </p>
                        </>
                    </GameServerCard>

                </div>

                <div className="space-y-2 mt-10 text-white">
                    <h2 className="text-xl lg:text-2xl lg:text-3xl font-smibold mb-4 uppercase linear-text">
                        20% auf deinen eigenen Gameserver
                    </h2>

                    <p>Wir hosten alle unsere Gameserver bei Zap-Hosting. Durch unsere Zusammenarbeit mit Zap-Hosting
                        bekommst du <a className="text-primary hover:underline" href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">20% Rabatt</a> auf deinen eigenen Gameserver!
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
                    <p>Wenn du schon immer der Admin deines eigenen Gameservers sein wolltest, ist das die Gelegenheit.
                        Gerne stellen wir dir dazu auf unserem Discord-Server einen eigenen Kanal zur Verfügung, damit
                        du zu deinem neuem Gameserver von unserer Reichweite und Spielern profitieren kannst.</p>

                    <p>Verwende den folgenden Rabatt-Code, um dir die 20% bei deiner Buchung zu sichern:
                        <strong> schiroky-a-6751</strong>.</p>
                </div>

            </div>
        </div>
    )
}