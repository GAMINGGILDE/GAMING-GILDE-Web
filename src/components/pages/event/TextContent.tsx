"use client";

import React from "react";

import ImageLevelProgram from "../../../assets/Level_Programm.webp"
import ImageLevelAreas from "../../../assets/Level_Areas.webp"
import ImageLevelMitmachen from "../../../assets/Level_Mitmachen.webp"
import Image from "next/image";

export const TextContent = () => {

    return(
        <div className="my-32 text-white tracking-wider w-[100%] m-auto">
            <p className="text-xl lg:text-2xl lg:text-4xl font-bold mb-4 uppercase linear-text">LEVEL UP</p>
            <p className="text-base lg:text-lg mb-4">
                <strong>Unsere Community aus Minecraft-Gilde und ANTI-CORONA-KARTELL trifft sich auf der LEVEL UP in Salzburg.</strong>
            </p>

            <p className="text-base lg:text-lg mb-4">
                Das <a className="text-primary hover:underline" href="https://www.levelup-salzburg.at/" target="_blank">LEVEL UP</a> ist das Salzburger Gaming und eSports Festival, das die Zocker-Community in der realen Welt zusammen bringt. Man trifft sich um gemeinsam zu spielen, zu staunen, und Spaß mit Freunden zu haben. Für ambitionierte Gamer*innen ist es der perfekte Ort, um sich mit Gleichgesinnten auszutauschen und das eigene Netzwerk zu pflegen. LEVEL UP ist die Anlaufstelle für Gaming und eSports.
            </p>

            <div className="mt-10">
                <Image
                    src={ImageLevelProgram}
                    alt={"image preview"}
                    className="w-1/4"
                    width={1000}
                    height={1000}
                    loader={(loader) => loader.src}
                />

            </div>

            <div className="mt-10">
                <Image
                    src={ImageLevelAreas}
                    alt={"image preview"}
                    className="w-1/4"
                    width={1000}
                    height={1000}
                    loader={(loader) => loader.src}
                />
            </div>

            <div className="mt-10">
                <Image
                    src={ImageLevelMitmachen}
                    alt={"image preview"}
                    className="w-1/4"
                    width={1000}
                    height={1000}
                    loader={(loader) => loader.src}
                />
            </div>

            <p className="text-base lg:text-lg mb-4">
                Wer mit dabei sein will, sollte sich fix sein Ticket sichern. Wir treffen uns pünktlich vor Ort. Datum und Uhrzeit zu diesem Event findest du auf unserem <a className="text-primary hover:underline" href="https://discord.gg/bZNM4NkJ?event=1349716724106399775" target="_blank">Discord</a>. Kontakt und Koordination vor Ort dann über die mobile Discord-App.
            </p>

        </div>
    )
}