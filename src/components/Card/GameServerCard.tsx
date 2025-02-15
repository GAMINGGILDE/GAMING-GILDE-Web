"use client";

import Link from "next/link";

export const GameServerCard = () => {
    return (
        <div className="my-5">
            <Link href={"test/test"}>
                <div className="card p-10 cursor-pointer text-white">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg lg:text-xl font-semibold uppercase break-words">#Gameserver 1 </h2>

                        <div className="bg-primary px-5 py-1 text-white text-center rounded-full flex items-center">
                            <i className="fa fa-cog text-white text-sm mr-2" style={{ fontSize: '.75rem' }} />
                            <p className="text-sm font-light">TEST</p>
                        </div>
                    </div>

                    <p className="mb-5 text-xs">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>

                    <div className="flex">
                        <div className="bg-primary px-5 text-center py-0.5 rounded-full flex items-center">
                            <i className="fa fa-location-dot text-white text-sm mr-2" style={{ fontSize: '.75rem' }} />
                            <p className="text-sm font-light text-white">#Test</p>
                        </div>

                        <div className="bg-primary px-5 py-0.5 text-center mx-2 rounded-full flex items-center">
                            <i className="fa fa-business-time text-white text-sm mr-2" style={{ fontSize: '.75rem' }} />
                            <p className="text-sm font-light text-white">#Test</p>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}