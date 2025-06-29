"use client";

import React from "react";

{/* import ImageLevelProgram from "../../../assets/Level_Programm.webp" */}
{/* import ImageLevelAreas from "../../../assets/Level_Areas.webp" */}
{/* import ImageLevelMitmachen from "../../../assets/Level_Mitmachen.webp" */}
import Image from "next/image";
import Link from "next/link";

export const TextContent = () => {

    return(
        <div className="my-20 text-white w-[100%] m-auto">
            {/* <p className="text-xl lg:text-2xl lg:text-4xl font-bold mb-4 uppercase linear-text">LEVEL UP</p> */}
            <p className="text-base lg:text-lg mb-4">
                <strong>Aktuell steht kein neuer Event an.</strong>
            </p>

            <p className="text-base lg:text-lg mb-4">
                Schau gerne später mal wieder vorbei oder komm auf unseren <a className="text-primary hover:underline" href="https://discord.anti-corona-kartell.de" target="_blank">Discord-Server</a>, um kein Event mehr zu verpassen.
            </p>

            <p className="text-base lg:text-lg mb-4">
                Wenn du wissen willst, welche Events du schon verpasst hast, dann schau einfach mal bei unserem <a className="text-primary hover:underline" href="https://www.youtube.com/@Anti-Corona-Kartell/videos" target="_blank">YouTube-Kanal</a> vorbei 😎.
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