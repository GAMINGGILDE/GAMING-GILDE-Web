"use client";

import {GameServerCard} from "../../Card/GameServerCard";
import React, {useEffect, useState} from "react";
import Hosting from "../../../assets/zap-hosting-banner.jpeg";
import Image from "next/image";
import {Header} from "../../Header/index";

import EcoImage from "../../../assets/gamesesrver-eco.webp";
import MinecraftImage from "../../../assets/gamesesrver-minecraft.webp";
import ValheimImage from "../../../assets/gameserver-valheim.webp";

import PreviewImage from "../../../assets/gameserver-bg-minecraft.webp";
import PreviewImage2 from "../../../assets/gameserver-bg-eco.webp";
import PreviewImage3 from "../../../assets/gameserver-bg-valheim.webp";
import Alert from "../../Alert/index";
import Link from "next/link";

const previews = [PreviewImage, PreviewImage2, PreviewImage3];

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

            <div className="px-10 xl:px-0 mt-40 max-w-[1280px] mx-auto">
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
                        title={"Eco"}
                        image={EcoImage}
                        onClick={() => copyLink("eco.anti-corona-kartell.de")}
                        button={
                            <>
                                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                                <p className="text-sm font-light text-white">Adresse kopieren</p>
                            </>
                        }
                        cardText={
                            <>
                                <p><strong>Name:</strong> Anti-Corona-Kartell</p>
                                <p><strong>Adresse:</strong> eco.anti-corona-kartell.de</p>
                                <p>Komm, und Rette die Welt!</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                In Eco baut man eine Zivilisation in einem simulierten Ökosystem auf. Eco ist ein
                                Online-Spiel, bei dem die Spieler*innen zusammenarbeiten, um eine Zivilisation in einer
                                Welt aufzubauen, in der alles, was sie tun, die Umwelt beeinflusst.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Damit nicht genug, kreist um diese Welt zudem ein Meteor, der in absehbarer Zeit auf den
                                Planeten einschlagen wird und damit die Zivilisation auslöscht. Das gilt es zu final zu
                                verhindern, ohne dabei vorher die Welt durch die eigenen Umwelteinflüsse zu zerstören.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Erreichen kann man das, indem man die Zivilisation vor dem Einschlag so weit entwickelt,
                                dass diese den Meteor per Laserwaffe zerstören kann.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                <strong>Vorgaben und Spielprinzip</strong>
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Die Vorgaben in der Welt sind so einfach gehalten
                                (Collaboration=Low), dass wirklich jeder Gamer in kurzer Zeit alle verfügbaren
                                Fähigkeiten und Professionen (Berufe) und vollständig ausbilden kann.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Jeder Gamer startet mit seinem Heimatstätten-Anspruchsteil mit 20 Grundstücks-Urkunden,
                                anstatt nur 9 und mit jeder erlernten neuen Fähigkeit erhält man 5 Grundstücks-Urkunden
                                und einen zusätzlichen „Outpost Claim Stake“, der wiederum 20 Grundstücke beanspruchen
                                kann.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Die Tragekapazität für Gegenstände ist verfünffacht. Dazu ist das Gewicht von
                                Gegenständen verringert (Faktor 0.3), damit man mehr tragen kann. Die Reichweite der
                                Lager ist auf die fünffache Entfernung wie regulär erhöht und die Kapazität von
                                Treibstoffen ist verdoppelt.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Für das Gründen einer Stadt genügt ein Gamer, für ein Land braucht man 2 und für einen
                                Staat 3 Gamer.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Mit diesen erleichternden Einstellungen ist es ohne Frage jedem Gamer möglich die
                                Entwicklung der Zivilisation ggf. sogar allein voranzutreiben.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Bereit? Dann komm, steig mit ein und rette die Welt!
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
                                <p>Erster Deutscher FOLIA Vanilla-Server!</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                Dein gemütlicher Minecraft-Vanilla-Server – ohne Minigames, ohne Citybuild, nur pures
                                Minecraft!
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                Die Minecraft Gilde ist ein deutscher Vanilla-Server, der sich ganz auf das pure
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

                    <GameServerCard
                        title={"Valheim"}
                        image={ValheimImage}
                        onClick={() => copyLink("5.249.161.244:27000")}
                        button={
                            <>
                                {/* <i className="fa fa-link text-white text-sm mr-2" style={{ fontSize: '.75rem' }} /> */}
                                <p className="text-sm font-light text-white">IP kopieren</p>
                            </>
                        }
                        cardText={
                            <>
                                <p><strong>Name:</strong> ANTI-CORONA-KARTELL</p>
                                <p><strong>IP-Adresse:</strong> 5.249.161.244:27000</p>
                                <p><strong>Kennwort:</strong> Findest du in Discord.</p>
                            </>
                        }
                    >
                        <>
                            <p className="text-base leading-relaxed text-gray-500">
                                Bei Valheim handelt es sich um ein herausforderndes Open-World Erkundungs- und
                                Survivalspiel, inspiriert von der Kultur der Wikinger. Hier stellt man sich mit bis zu
                                10 Spielern via Multiplayer beim Kämpfen, Bauen und Erobern den Widrigkeiten einer
                                offenen Welt, die von Kreaturen des Chaos und uralten Feinden der Götter geplagt ist.
                                Ziel ist es dem Göttervater Odin dabei zu helfen, seine Feinde zu besiegen und die
                                Ordnung in Valheim wiederherzustellen.
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
                        Gerne stellen wir dir dazu auf unserem Discord-Server eine eigene Kategorie zur Verfügung, damit
                        du zu deinem neuem Gameserver von unserer Reichweite und Spielern profitieren kannst.</p>

                    <p>Verwende den folgenden Rabatt-Code, um dir die 20% bei deiner Buchung zu sichern:
                        <strong> schiroky-a-6751</strong>.</p>
                </div>

            </div>
        </div>
    )
}