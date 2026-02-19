"use client";

import { Card } from "../../Card/index";
import { FaDiscord } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import LogoVirus from "../../../assets/ack-logo-schatten.png";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <div className="mt-24">
      <h1 className="linear-text text-xl lg:text-3xl font-semibold text-center uppercase">
        Wenn wir uns vorstellen dürfen
      </h1>

      <div className="mt-10 container mx-auto">
        <div className="grid grid-cols-12 gap-5 lg:gap-10">
          <div className="col-span-12 lg:col-span-4 text-left">
            <Link href={"https://discord.anti-corona-kartell.de"} target={"_blank"}>
              <Card
                isRight={false}
                className="opacity-0"
                icon={
                  <Image
                    src={Logo}
                    priority={true}
                    unoptimized={true}
                    alt={"logo"}
                    width={100}
                    height={100}
                    className="w-40 fill-white mr-3 absolute top-0 left-0 opacity-10"
                    loader={(loader) => `${loader.src}`}
                  />
                }
                title={"Spaß"}
                subTitle={
                  "Wir sind eine junge Gaming-Community. Von " +
                  "Gamern für Gamer. Wir sind immer auf der " +
                  "Suche nach coolen Leuten, die einfach Bock " +
                  "haben, in einer entspannten, gemütlichen " +
                  "Runde zusammen zu zocken – komplett ohne " +
                  "Stress, Ruhm oder Profitgedanken."
                }
              />
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-4 text-left">
            <Link href={"https://discord.anti-corona-kartell.de"} target={"_blank"}>
              <Card
                icon={
                  <FaDiscord className="w-40 h-40 fill-white mr-3 absolute top-0 left-0 opacity-10" />
                }
                title={"Quatschen"}
                subTitle={
                  "Wir betreiben primär einen Discord‑Server, um " +
                  "unseren Mitgliedern eine kostenlose Plattform " +
                  "zur lockeren Kommunikation zu ihren " +
                  "Lieblingsspielen anzubieten und um sich " +
                  "gemeinsam zu Themen rund ums Gaming " +
                  "auszutauschen."
                }
              />
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-4 text-left">
            <Link href={"https://discord.anti-corona-kartell.de"} target={"_blank"}>
              <Card
                isRight={true}
                className="opacity-0"
                icon={
                  <Image
                    src={LogoVirus}
                    priority={true}
                    unoptimized={true}
                    alt={"virus logo"}
                    width={100}
                    height={100}
                    className="w-40 fill-white mr-3 absolute top-0 left-0 opacity-10"
                    loader={(loader) => `${loader.src}`}
                  />
                }
                title={"Beitreten"}
                subTitle={
                  "Komm ins ANTI‑CORONA‑KARTELL. Hier wird " +
                  "Gaming gemeinsam gefeiert. Häng mit einer " +
                  "entspannten Gaming‑Community ab, die " +
                  "immer gute Laune auf gute Games und " +
                  "Gespräche hat und die ihre Lieblingsspiele" +
                  "gemeinsam genauso feiern wie du. "
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
