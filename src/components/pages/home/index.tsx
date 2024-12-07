"use client";

import {Card} from "../../Card/index";
import {FunIcon} from "../../Icon/FunIcon";
import {CommunicateIcon} from "../../Icon/CommunicateIcon";
import {HomeIcon} from "../../Icon/HomeIcon";

export const AboutUs = () => {
    return (
        <div className="mt-52 text-center">
            <h1 className="linear-text text-xs lg:text-base font-semibold text-center uppercase">Wenn wir uns vorstellen dürfen</h1>

            <h1 className="text-3xl lg:text-7xl text-white font-semibold mt-2 lg:mt-5">
                    <span className="linear-text">Junge Gaming</span> Community
            </h1>

            <div className="mt-10 container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 text-left m-3">
                        <Card
                            isRight={false}
                            className="opacity-0"
                            icon={<FunIcon className="w-[2.5rem] fill-white mr-3" />}
                            title={"Spaß"}
                            subTitle={"Das ANTI-CORONA-KARTELL ist eine junge Gaming-Community. Von Gamern für Gamer. Wir streben nicht nach Likes, Klicks oder Profit. Wir wollen einfach nur in einem positiven Umfeld gemeinsam Spaß beim Spielen haben."}
                        />
                    </div>

                    <div className="col-span-12 lg:col-span-4 text-left m-3">
                        <Card
                            icon={<CommunicateIcon className="w-[2.5rem] fill-white mr-3" />}
                            title={"Kommunikation"}
                            subTitle={"Das ANTI-CORONA-KARTELL betreibt dazu primär einen Discord-Server, um Spieler*innen zu ihren Lieblingsgames eine kostenlose Plattform zur Kommunikation anzubieten und um sich zu Themen rund um Gaming auszutauschen."}
                        />
                    </div>

                    <div className="col-span-12 lg:col-span-4 text-left m-3">
                        <Card
                            isRight={true}
                            className="opacity-0"
                            icon={<HomeIcon className="w-[2.5rem] fill-white mr-3" />}
                            title={"Beitreten"}
                            subTitle={"Wenn die Verwendung von Discord für dich neu ist, solltest du dich ggf. jetzt mit den Grundlagen vertraut machen. Ansonsten leg einfach los und tritt dem ANTI-CORONA-KARTELL bei und finde Gleichgesinnte zum Spielen."}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}