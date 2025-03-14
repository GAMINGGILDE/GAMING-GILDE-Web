"use client";

import {GameServerCard} from "../../Card/GameServerCard";
import React from "react";
import Hosting from "../../../assets/images.jpeg";
import Image from "next/image";

export const GameServer = () => {
    return (
        <div className="px-10 mt-40">
            <div className="relative block text-white">
                <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10">
                    <div className="col-span-12 lg:col-span-8">
                        <h2 className="linear-text font-medium uppercase text-sm">Gameserver</h2>
                        <h1 className="font-semibold text-6xl mt-3 pr-5">Das ANTI-CORONA-KARTELL</h1>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <p className="mt-8 font-light">Cool, dass Du uns gefunden hast! <br />
                            Schau Dich doch einfach mal bei uns um und finde heraus, ob wir ein gutes Match sind. Wir freuen uns auf dich.
                        </p>

                        <button className="block mt-7 py-2 px-3 text-white rounded-lg transition duration-300 md:border-0 p-0 bg-primary hover:bg-primaryHover">
                            Zu unseren Discord
                        </button>
                    </div>
                </div>
            </div>



            <div className="mt-40 my-20">
                <h1 className="text-5xl font-semibold text-center mb-10 text-white">Finde hier die besten Gameserver</h1>

                <GameServerCard
                    title={"#Gameserver 1"}
                    cardText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                >
                    <>
                        <p className="text-base leading-relaxed text-gray-500">
                            With less than a month to go before the European Union enacts new consumer privacy laws for
                            its citizens, companies around the world are updating their terms of service agreements to
                            comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                            25 and is meant to ensure a common set of data rights in the European Union. It requires
                            organizations to notify users as soon as possible of high-risk data breaches that could
                            personally affect them.
                        </p>
                    </>
                </GameServerCard>

                <GameServerCard
                    title={"#Gameserver 2"}
                    cardText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                >
                    <>
                        <p className="text-base leading-relaxed text-gray-500">
                            With less than a month to go before the European Union enacts new consumer privacy laws for
                            its citizens, companies around the world are updating their terms of service agreements to
                            comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                            25 and is meant to ensure a common set of data rights in the European Union. It requires
                            organizations to notify users as soon as possible of high-risk data breaches that could
                            personally affect them.
                        </p>
                    </>
                </GameServerCard>

                <GameServerCard
                    title={"#Gameserver 3"}
                    cardText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                >
                    <>
                        <p className="text-base leading-relaxed text-gray-500">
                            With less than a month to go before the European Union enacts new consumer privacy laws for
                            its citizens, companies around the world are updating their terms of service agreements to
                            comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                            25 and is meant to ensure a common set of data rights in the European Union. It requires
                            organizations to notify users as soon as possible of high-risk data breaches that could
                            personally affect them.
                        </p>
                    </>
                </GameServerCard>
            </div>



            <div className="space-y-2 mt-10 text-white">
                <h2 className="text-2xl font-semibold">
                    20% auf deinen eigenen Gameserver
                </h2>

                <p>Wir hosten alle unsere Gameserver bei Zap-Hosting. Durch unsere Zusammenarbeit mit Zap-Hosting bekommst du 20% Rabatt auf deinen eigenen Gameserver! Auf die gesamte Laufzeit aller Produkte.</p>
            </div>

            <div className="my-12">
                <Image
                    src={Hosting}
                    alt={"hosting"}
                    width={1000}
                    height={1000}
                    className="w-full"
                    priority={true}
                    loader={(loader) => `${loader.src}`}
                />
            </div>

            <div className="text-white space-y-5">
                <p>Wenn du schon immer der Admin deines eigenen Gameservers sein wolltest, ist das die Gelegenheit.
                    Gerne stellen wir dir dazu auf unserem Discord-Server eine eigene Kategorie zur Verfügung, damit du zu deinem neuem Gameserver von unserer Reichweite und Spielern profitieren kannst.</p>

                <p>Verwende den folgenden Rabatt-Code, um dir die 20% bei deiner Buchung zu sichern:
                    <strong> schiroky-a-6751</strong>.</p>
            </div>
        </div>
    )
}