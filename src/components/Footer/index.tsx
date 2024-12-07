"use client";

import Logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {

    return (
        <div>
            <div className="mt-5 text-white container m-auto px-10">

                <div className="my-24">
                    <div className="flex justify-center lg:justify-between flex-wrap">
                        <div className="flex flex-row items-center">
                            <Image src={Logo} width="100px" loader={(loader) => `${loader.src}`} height="auto" className="w-[100px] logo my-auto" alt="ANTI Corona Kartell Logo"  />
                            <h1 className="linear-text text-xl font-bold ml-10" style={{ letterSpacing: '3px' }}>
                                ANTI-CORONA
                            </h1>
                            <h1 className="text-xl ml-2 font-extralight text-white" style={{ letterSpacing: '3px' }}>KARTELL</h1>
                        </div>

                        <div className="flex font-extralight justify-center text-xs items-center">
                            <div className="mx-2">
                                <Link href="/imprint">Impressum</Link>
                            </div>
                            <p className="mx-2">Datenschutz</p>
                            <p className="mx-2">AGB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}