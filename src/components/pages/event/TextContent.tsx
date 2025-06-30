"use client";

import React from "react";

{/* import ImageLevelProgram from "../../../assets/Level_Programm.webp" */}
{/* import ImageLevelAreas from "../../../assets/Level_Areas.webp" */}
{/* import ImageLevelMitmachen from "../../../assets/Level_Mitmachen.webp" */}
{/* import Image from "next/image"; */}
{/* import Link from "next/link"; */}

export const TextContent = () => {

    return(
        <div className="my-20 text-white w-[100%] m-auto">
            {/* <p className="text-xl lg:text-2xl lg:text-4xl font-bold mb-4 uppercase linear-text">LEVEL UP</p> */}
            <p className="text-base lg:text-lg mb-4">
                <strong>Aktuell steht kein neuer Event an.</strong>
            </p>

            <p className="text-base lg:text-lg mb-0">
                Schau gerne später wieder vorbei oder komm auf unseren <a className="text-primary hover:underline" href="https://discord.anti-corona-kartell.de" target="_blank">Discord-Server</a>, um kein Event mehr zu verpassen.
            </p>
            <p className="text-base lg:text-lg mb-4">
                Ein paar Events die du bereits verpasst hast:
            </p>

            <p className="text-base lg:text-lg mb-0">
                <strong><a className="text-primary hover:underline" href="https://www.youtube.com/watch?v=NwIXfy3iFcA" target="_blank">LEVEL UP Salzburg</a></strong>
            </p>
            <p className="sub-text font-light mb-4">
                Die Minecraft Gilde als auch das ANTI-CORONA-KARTELL haben sich auf der LEVEL UP in Salzburg getroffen und einen fantastischen Tag bei bestem Entertainment und Gaming verbracht.
            </p>

            <p className="text-base lg:text-lg mb-0">
                <strong><a className="text-primary hover:underline" href="https://www.youtube.com/watch?v=W2hHBFSwvcw" target="_blank">THE FANS STIKE BACK</a></strong>
            </p>
            <p className="sub-text font-light mb-4">
                Unser Treffen 2025 fand in der Raumfabrik in Frankfurt statt und wir haben bei der weltgrößten Star Wars Ausstellung THE FANS STRIKE BACK eingecheckt. Ein Highlight für jeden Fan der Saga.
            </p>

            <p className="text-base lg:text-lg mb-0">
                <strong><a className="text-primary hover:underline" href="https://www.youtube.com/watch?v=EFAQZVyg1Ww" target="_blank">Isar Floßfahrt</a></strong>
            </p>
            <p className="sub-text font-light mb-4">
                Das alljährliche Treffen 2024 fand bei einer idyllischen Floßfahrt auf der Isar statt.
            </p>

            <p className="text-base lg:text-lg mb-0">
                <strong><a className="text-primary hover:underline" href="https://www.youtube.com/watch?v=o8jl2Atc0gc" target="_blank">ANTI-CORONA-KARTELL goes RETRO</a></strong>
            </p>
            <p className="sub-text font-light mb-4">
                Bei diesem Retro-Event am 24. November 2024 haben die Mitglieder des Anti-Corona-Kartells gemeinsam ein bunt gemischtes Potpourri an Games aus unterschiedlichsten Genres und Zeitalter in einem Kino auf er großen Leinwand gespielt.
            </p>

            <p className="text-base lg:text-lg mb-4">
                Wenn du wissen willst, was du sonst noch so verpasst hast, dann schau einfach mal bei unserem <a className="text-primary hover:underline" href="https://www.youtube.com/@Anti-Corona-Kartell/videos" target="_blank">YouTube-Kanal</a> vorbei 😎.
            </p>

            {/* <div className="flex justify-between w-full items-center mt-10 mb-10">
                <div>
                    <Link href="https://www.levelup-salzburg.at/programm/" target="_blank">
                        <Image
                            src={ImageLevelProgram}
                            alt={"Programm"}
                            className="w-[390px]"
                            width={1000}
                            height={1000}
                            loader={(loader) => loader.src}
                        />
                    </Link>
                </div>

                <div>
                    <Link href="https://www.levelup-salzburg.at/areas/" target="_blank">
                        <Image
                            src={ImageLevelAreas}
                            alt={"Areas"}
                            className="w-[390px]"
                            width={1000}
                            height={1000}
                            loader={(loader) => loader.src}
                        />
                    </Link>
                </div>

                <div>
                    <Link href="https://www.levelup-salzburg.at/mitmachen/" target="_blank">
                        <Image
                            src={ImageLevelMitmachen}
                            alt={"Mitmachen"}
                            className="w-[390px]"
                            width={1000}
                            height={1000}
                            loader={(loader) => loader.src}
                        />
                    </Link>
                </div>
            </div> */}

        </div>
    )
}