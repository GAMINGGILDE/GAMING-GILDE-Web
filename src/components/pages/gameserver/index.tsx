"use client";

import {GameServerCard} from "../../Card/GameServerCard";

export const GameServer = () => {
    return (
        <div className="px-10 mt-40">
            <div className="relative block text-white">
                <div className="grid grid-cols-12 gap-x-0 lg:gap-x-10">
                    <div className="col-span-12 lg:col-span-8">
                        <h2 className="linear-text font-medium uppercase text-sm">Gameserver</h2>
                        <h1 className="font-semibold text-6xl mt-3 pr-5">Wachse mit uns und über Dich hinaus und trete uns bei</h1>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <p className="mt-8 font-light">Cool, dass Du uns gefunden hast! <br />
                            Schau Dich doch einfach mal bei uns um und finde heraus, ob wir ein gutes Match sind. Wir freuen uns auf dich.
                        </p>

                        <button className="block mt-7 py-2 px-3 text-white rounded-lg transition duration-300 md:border-0 p-0 bg-primary hover:bg-primaryHover">
                            Zu unseren Discord
                        </button>
                    </div>
                </div>
            </div>



            <div className="mt-40 my-20">
                <h1 className="text-5xl font-semibold text-center mb-10 text-white">Finde hier die besten Gameserver</h1>


                <GameServerCard />
                <GameServerCard />
                <GameServerCard />
            </div>
        </div>
    )
}