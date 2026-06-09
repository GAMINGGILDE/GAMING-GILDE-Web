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
            <Link href={"https://discord.gaming-gilde.org"} target={"_blank"}>
              <Card
                isRight={false}
                className="opacity-0"
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
            <Link href={"https://discord.gaming-gilde.org"} target={"_blank"}>
              <Card
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
            <Link href={"https://discord.gaming-gilde.org"} target={"_blank"}>
              <Card
                isRight={true}
                className="opacity-0"
                title={"Beitreten"}
                subTitle={
                  "Komm in unsere GAMING GILDE. Hier wird " +
                  "Gaming gemeinsam gefeiert. Häng mit einer " +
                  "entspannten Gaming‑Community ab, die " +
                  "immer gute Laune auf gute Games und " +
                  "Gespräche hat und die ihre Lieblingsspiele " +
                  "genauso feiert wie du. "
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
