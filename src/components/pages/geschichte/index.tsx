"use client";

import {Header} from "../../Header/index";
import React from "react";

export const History = () => {
    return (
        <div>
            <Header noText />

            <div className="px-10 mt-32">
                <div className="relative block text-white text-center">
                    <div className="flex flex-wrap justify-center m-0 p-0 gap-x-10 uppercase">
                        <h1 className="text-6xl sm:text-9xl lg:text-[13rem] font-bold tracking-widest m-0 leading-none">Unsere</h1>
                        <h1
                            className="text-6xl linear-text sm:text-9xl lg:text-[8rem] font-bold tracking-widest m-0 leading-none"

                        >
                            Geschichte
                        </h1>
                    </div>
                </div>

                <div className="my-32 text-white tracking-wider w-[100%] m-auto lg:w-[75%]">
                    <p className="text-lg mb-10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>

                    <p className="text-lg mb-10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>

            </div>
        </div>
    )
}