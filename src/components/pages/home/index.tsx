"use client";

import {Card} from "../../Card/index";
import {CommunicateIcon} from "../../Icon/CommunicateIcon";
import Image from "next/image";

import Logo from "../../../assets/logo.png";
import LogoVirus from "../../../assets/ack-logo-schatten.png";
import Link from "next/link";

export const AboutUs = () => {
    return (
        <div className="mt-52">
            <h1 className="linear-text text-xl lg:text-3xl font-semibold text-center uppercase">Wenn wir uns vorstellen dürfen</h1>

            <div className="mt-10 container mx-auto">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-4 text-left">
                        <Link href={"https://discord.anti-corona-kartell.de"} target={"_blank"}>
                            <Card
                                isRight={false}
                                className="opacity-0"
                                icon={<Image src={Logo} priority={true} unoptimized={true} alt={"logo"} width={100} height={100} className="w-[10rem] fill-white mr-3 absolute top-0 left-0 opacity-10" loader={(loader) => `${loader.src}`} />}
                                title={"Spaß"}
                                subTitle={"Das ANTI-CORONA-KARTELL ist eine junge Gaming-Community. Von Gamern für Gamer. Wir streben nicht nach Klicks oder Profit. Wir wollen einfach nur in einem positiven Umfeld gemeinsam Spaß beim Spielen haben."}
                            />
                        </Link>
                    </div>

                    <div className="col-span-12 lg:col-span-4 text-left">
                        <Link href={"https://discord.anti-corona-kartell.de"} target={"_blank"}>
                            <Card
                                icon={<CommunicateIcon className="w-[10rem] fill-white mr-3 absolute top-0 left-0 opacity-10" />}
                                title={"Kommunikation"}
                                subTitle={"Das ANTI-CORONA-KARTELL betreibt dazu primär einen Discord-Server, um" +
                                    " Spieler*innen zu ihren Lieblingsgames eine kostenlose Plattform zur Kommunikation anzubieten und um sich zu Themen rund ums Gaming auszutauschen."}
                            />
                        </Link>
                    </div>

                    <div className="col-span-12 lg:col-span-4 text-left">
                        <Link href={"https://discord.anti-corona-kartell.de"} target={"_blank"}>
                            <Card
                                isRight={true}
                                className="opacity-0"
                                icon={<Image src={LogoVirus} priority={true} unoptimized={true} alt={"virus logo"} width={100} height={100} className="w-[10rem] fill-white mr-3 absolute top-0 left-0 opacity-10" loader={(loader) => `${loader.src}`} />}
                                title={"Beitreten"}
                                subTitle={"Wenn die Verwendung von Discord für dich neu ist, solltest du dich ggf. jetzt mit den Grundlagen vertraut machen. Ansonsten leg einfach los und tritt dem ANTI-CORONA-KARTELL bei und finde Gleichgesinnte zum Spielen."}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}