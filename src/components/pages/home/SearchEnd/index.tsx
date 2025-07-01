"use client"

import {DiscordFrame} from "../../../IFrame/DiscordFrame";
import React from "react";

export const SearchEnd = () => {
    return (
        <div className="container m-auto mt-16">
            <div className="grid grid-cols-12 items-center lg:gap-x-10">
                <div className="col-span-12 lg:col-span-8 mb-3">
                    <p className="linear-text text-xs lg:text-base uppercase">Betrete jetzt unseren Discord</p>
                    <h1 className="text-white text-3xl lg:text-4xl font-semibold mt-2 lg:mt-5">Das bekommst du bei uns
                        geboten:</h1>
                    <p className="text-white font-thin mt-4 mb-7">
                        Unser Discord-Server bietet dir aktuelle News zu Games und Hardware, du kannst dich zu einer Vielzahl
                        an Spielen mit Gleichgesinnten treffen und dich mit ihnen zu Themen rund ums Gaming
                        austauschen. Wir bieten kostenfrei unsere Lifetime Gameserver für Eco, Minecraft und Core Keeper an,
                        sowie wechselnde Gameserver mit weiteren Spielen.<br/>Also jede Menge Abwechslung und
                        Spaß mit Spielen garantiert!
                        <br/><br/>
                        Zudem kannst du durch uns <a className="text-primary hover:underline" href="https://zap-hosting.com/anticoronakartellbanner" target="_blank">20% Rabatt</a> auf einen eigenen Gameserver bei unserm Hoster bekommen. Wenn du
                        schon immer Herr über einen eigenen Gameserver sein wolltest,
                        ist das die Gelegenheit. Bei Umsetzung und Konfiguration gibt's von uns auch gerne
                        Unterstützung, falls das für dich Neuland sein sollte.
                        <br/><br/>
                        Wie wäre es dazu noch mit einem eigenen Kanal auf unserem Discord-Server? Anstatt sich den
                        Aufwand zu einem Discord-Server selbst aufzuerlegen, stellen wir dir zu deinem eigenen
                        Gameserver auch eine eigene Kategorie zur Verfügung, damit du zu deinem neuem Gameserver von
                        unserer Community profitieren kannst.
                        <br/><br/>
                        Also, komm und steig mit ein beim ANTI-CORONA-KARTELL!
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:mt-0 mt-7">
                    <DiscordFrame/>
                </div>
            </div>
        </div>
    )
}