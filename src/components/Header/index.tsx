"use client";

import Image from "next/image";
import PreviewImage from "../../assets/ACK-Background-2.jpg";
import PreviewImage2 from "../../assets/Age 2 Startscreen.png";
import PreviewImage3 from "../../assets/ACK-Background-3.jpg";
import React, {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {Headline} from "./components/Headline/index";

export const Header = () => {
    const [image, setImage] = useState<string | null>(PreviewImage);

    useEffect(() => {
        const images = [PreviewImage, PreviewImage2, PreviewImage3];
        const randomIndex = Math.floor(Math.random() * images.length);
        setImage(images[randomIndex]);
    }, []);

    const RenderImage = useCallback(() => {
        if (!image) {
            return <></>;
        }

        return (
            <div className="absolute top-0" style={{ zIndex: -1 }}>
                <div className="img-wrap">
                    <Image
                        loader={(loader) => `${loader.src}`}
                        width={1000}
                        height={1000}
                        className="w-full"
                        priority={true}
                        unoptimized={true}
                        src={image}
                        alt={"header preview"}
                        style={{ borderRadius: '10px' }}
                    />
                </div>
            </div>
        )
    }, [image])

    return (
        <>
            <RenderImage />

            <Headline
                preTitle={"Gaming Community"}
                subTitle={<p className="uppercase"><span className="linear-text font-bold text-6xl lg:text-7xl">ANTI-CORONA-KARTELL</span></p>}
                text={<>Eine junge Gaming-Community, für gemeinsamen Spaß beim Spielen</>}
            >
            </Headline>
        </>
    )
}