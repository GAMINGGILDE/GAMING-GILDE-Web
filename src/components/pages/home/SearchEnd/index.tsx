"use client"

import Link from "next/link";
import {DiscordFrame} from "../../../IFrame/DiscordFrame";

export const SearchEnd = () => {
    return (
        <div className="container m-auto p-5">
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-12 lg:col-span-8 mb-3">
                    <p className="linear-text text-xs lg:text-base uppercase">Betrete jetzt unseren Discord</p>
                    <h1 className="text-white text-3xl lg:text-4xl font-semibold mt-2 lg:mt-5">Der Discord-Server, <br />den du gesucht hast.</h1>
                    <p className="text-white font-thin mt-4 mb-7">
                        Auf unserem Discord-Server findest du mannigfaltige Informationen <br />
                        zu Games und Hardware (📰). <br />
                        Audio-Kanale zu den verschiedensten Spielen sind am 🎮-Symbol zu erkennen. <br />
                        Für Games, für die es keinen dedizierten Audio-Kanal gibt, <br />
                        verwende den Audio-Kanal 'Sonstige'. <br />
                        Auf Anfrage können auch gerne weitere dedizierte Audio-Kanäle für deine <br />
                        Lieblingsspiele bereitgestellt werden.

                        <br /><br />

                        Vom Anti-Corona-Kartell gehostete Gameserver sind am 🌐-Symbol zu erkennen, <br />
                        als auch das von unserem Partner Minecraft Gilde gehostete Minecraft. <br />
                        Wenn du der gerne mal wieder Minecraft wie zu Anfangszeiten spielen willst, <br />
                        wird dir dort ein sehr vanilla-naher Server mit wenigen <br />
                        Plugins und Einschränkungen geboten.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:mt-0 mt-7">
                    <DiscordFrame />
                </div>
            </div>
        </div>
    )
}