"use client";

import React from "react";

import ImageTest from "../../../assets/zap-hosting-banner.jpeg"
import Image from "next/image";

export const TextContent = () => {

    return(
        <div className="my-32 text-white tracking-wider w-[100%] m-auto">
            <p className="text-xl lg:text-2xl lg:text-4xl font-bold mb-4 uppercase linear-text">LEVEL UP</p>
            <p className="text-base lg:text-lg mb-4">
                <strong>Unsere Community aus Minecraft-Gilde und ANTI-CORONA-KARTELL trifft sich auf der LEVEL UP in Salzburg.</strong>
            </p>

            <p className="text-base lg:text-lg mb-4">
                Wer mit dabei sein will, sollte sich fix sein Ticket sichern. Wir treffen uns pünktlich vor Ort. Kontakt und Koordination vor Ort dann über die mobile Discord-App.

            </p>

            <p className="text-lg mb-4">
                Was wird euch geboten:...
            </p>


            <div className="mt-10">
                <Image
                    src={ImageTest}
                    alt={"image preview"}
                    className="w-full"
                    width={1000}
                    height={1000}
                    loader={(loader) => loader.src}
                />
            </div>


            <p className="text-lg mb-4 mt-10">
                Was wird euch geboten:...
            </p>

        </div>
    )
}