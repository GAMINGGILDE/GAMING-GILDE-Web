"use client";

import Image from "next/image";
import Instagram from "../../../../public/logo.png";
import React from "react";

export const InstagramFollow = () => {
  return (
    <div className="container pb-10 m-auto">
      <div className="card-background-primary card-inner-primary mt-44">
        <div className="card-inner text-white">
          <div className="grid grid-cols-12">
            <div className="col-span-12 hidden lg:block lg:col-span-6 pb-1 h-72">
              <Image
                src={Instagram}
                alt={"Instagram"}
                loader={(loader) => `${loader.src}`}
                width={1000}
                height={100}
                priority={true}
                unoptimized={true}
                className="w-[85%] h-108 px-7 relative bottom-32"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 py-0 pt-10 lg:py-20 px-10">
              <p className="primary-text text-xs lg:text-base uppercase mb-1 lg:mb-3">
                Schau dir gerne auch unsere
              </p>
              <h1 className="text-xl lg:text-3xl font-semibold mb-2 lg:mb-3">Gameserver an</h1>
              <p className="primary-text text-xs lg:text-base mb-1 lg:mb-2">
                Das ANTI-CORONA-KARTELL und unser Partner Minecraft Gilde betreiben eigene Lifetime
                Gameserver.
              </p>
              <a className="text-primary hover:underline" href="/gameserver">
                Mehr erfahren
              </a>
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
                className="w-400 h-40 md:h-60 relative"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
