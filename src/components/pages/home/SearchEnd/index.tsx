"use client";

import { DiscordFrame } from "../../../IFrame/DiscordFrame";
import React from "react";

export const SearchEnd = () => {
  return (
    <div className="container m-auto mt-16">
      <div className="grid grid-cols-12 items-center lg:gap-x-10">
        <div className="col-span-12 lg:col-span-8 mb-3">
          <p className="linear-text text-xs lg:text-base uppercase">
            Betrete jetzt unseren Discord
          </p>
          <h1 className="text-white text-3xl lg:text-4xl font-semibold mt-2 lg:mt-5">
            Was dich bei uns erwartet:
          </h1>
          <p className="text-white font-thin mt-4 mb-7">
            Auf unserem Discord bleibst du immer up to date, was Games und Hardware angeht. Finde
            Mitspieler für eine riesige Auswahl an Games, quatsch mit anderen über alles rund ums
            Zocken und werde Teil unserer Community. Außerdem bekommst du kostenlosen Zugang zu
            unseren Gameservern – plus wechselnde Gameserver für neue oder angesagte Titel.
            <br />
            Also jede Menge Spaß und Abwechslung mit Spielen garantiert!
            <br />
            <br />
            Wie wäre es mit deinem eigenen Kanal auf unserem Discord‑Server? Zu deinem Gameserver
            bekommst du bei uns direkt einen passenden, gemütlichen Platz in der Community, damit du
            noch leichter Leute findest, die mit dir zusammen zocken, quatschen und Spaß haben.
            <br />
            <br />
            Also, komm und steig mit ein in die GAMING GILDE!
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:mt-0 mt-7">
          <DiscordFrame />
        </div>
      </div>
    </div>
  );
};
