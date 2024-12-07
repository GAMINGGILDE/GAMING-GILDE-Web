"use client";

import Image from "next/image";
import PreviewImage from "../../assets/ACK-Background-2.jpg";
import PreviewImage2 from "../../assets/Age 2 Startscreen.png";
import PreviewImage3 from "../../assets/ACK-Background-3.jpg";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Headline} from "./components/Headline/index";

export const Header = () => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const random = Math.floor(Math.random() * 3) + 1;

        switch (random) {
            case 1:
                setImage(PreviewImage);
                return;
            case 2:
                setImage(PreviewImage2);
                return;
            case 3:
                setImage(PreviewImage3);
                return;
        }
    }, []);

    return (
        <>
            {image && (
                <div className="absolute top-0" style={{ zIndex: -1 }}>
                    <div className="img-wrap">
                        <Image
                            loader={(loader) => loader.src}
                            width={1000}
                            height={1000}
                            className="w-full"
                            src={image}
                            alt={"header preview"}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </div>
            )}

            <Headline
                preTitle={"Gaming Community"}
                subTitle={<p className="uppercase"><span className="linear-text text-6xl lg:text-8xl">ANTI-CORONA</span> <br /> KARTELL</p>}
                text={<>Eine junge Gaming-Community, für gemeinsamen Spaß beim Spielen</>}
            >
                <Link
                    href={"/register"}
                    className="text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
                    Unserem Discord beitreten
                </Link>
            </Headline>
        </>
    )
}