"use client";

import React from "react";
import Logo from "../../assets/logo.png";
import Image from "next/image";

export default function Imprint() {
    return (
        <div className="mt-[15rem] px-3 lg:px-0 w-[100%] m-auto lg:w-[75%] mb-[10rem]">
            <div className="text-center">
                <h1 className="text-4xl linear-text uppercase lg:text-9xl text-white font-semibold break-words">Impressum</h1>
            </div>

            <div className="mt-10 text-white">
                <div className="flex justify-center lg:justify-between flex-wrap lg:p-0 p-10 gap-10">
                    <div className="relative">
                        <Image
                            src={Logo}
                            className="w-[12.5rem]"
                            alt={"anti-corona-kartell logo"}
                            width={1000}
                            height={1000}
                            priority={true}
                            unoptimized={true}
                            loader={(loader) => `${loader.src}`}
                        />
                        <h1 className="font-semibold text-xl">
                            <span className="text-primary">ANTI-CORONA-KARTELL</span></h1>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-2xl mb-3">Angaben gemäß § 5 TMG</h1>
                        <p className="sub-text font-extralight">ANTI-CORONA-KARTELL</p>
                        <p className="sub-text font-extralight">Straße</p>
                        <p className="sub-text font-extralight">12345 Stadt</p>

                        <div className="mt-5">
                            <p className="sub-text font-extralight">Vertreten durch:</p>
                            <p className="sub-text font-extralight">Name</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-2xl mb-4">TastyQR Informationen</h1>

                        <div className="bg-sub py-2 px-5 my-4 rounded-lg flex justify-between w-[18rem]">
                            <p className="font-semibold">Information</p>
                            <p className="font-extralight">+10000</p>
                        </div>
                        <div className="px-5 rounded-lg flex justify-between w-[18rem]">
                            <p className="font-semibold">Noch mehr informationen</p>
                            <p className="font-extralight">+100</p>
                        </div>
                        <div className="bg-sub py-2 px-5 my-4 rounded-lg flex justify-between w-[18rem]">
                            <p className="font-semibold">Nächstes Update</p>
                            <p className="font-extralight"> 01.02.2025</p>
                        </div>
                        <div className="px-5 rounded-lg flex justify-between w-[18rem]">
                            <p className="font-semibold">Aktuelle Version</p>
                            <p className="font-extralight">1.0.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
