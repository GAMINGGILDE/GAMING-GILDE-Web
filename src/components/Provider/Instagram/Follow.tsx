"use client";

import Image from "next/image";
import Instagram from "../../../assets/iPhone Mockup new.png";
import React from "react";
import Link from "next/link";

export const InstagramFollow = () => {
    return (
        <div className="container px-10 pb-10 m-auto">
            <div className="card-background-primary card-inner-primary mt-44">
                <div className="card-inner text-white">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 hidden lg:block lg:col-span-6 pb-1 h-[18rem]">
                            <Image
                                src={Instagram}
                                alt={"Instagram"}
                                loader={(loader) => `${loader.src}`}
                                width={1000}
                                height={100}
                                priority={true}
                                unoptimized={true}
                                className="min-w-[100%] h-[30rem] px-7 relative bottom-32"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-6 py-0 pt-10 lg:py-20 px-10">
                            <p className="primary-text text-xs lg:text-base uppercase mb-1 lg:mb-3">Weitere spannende Einblicke</p>
                            <h1 className="text-xl lg:text-3xl font-semibold mb-2 lg:mb-3">Gemeinsam Spaß beim spielen.</h1>
                            <Link target="_blank" href="#!" className="text-xs lg:text-base underline">Zum Kartell gelangen</Link>
                        </div>
                        <div className="col-span-12 block lg:hidden lg:col-span-6 pb-1">
                            <Image
                                src={Instagram}
                                alt={"Instagram"}
                                loader={(loader) => `${loader.src}`}
                                width={1000}
                                height={100}
                                priority={true}
                                unoptimized={true}
                                className="w-[100rem] h-[10rem] md:h-[15rem] relative"
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}