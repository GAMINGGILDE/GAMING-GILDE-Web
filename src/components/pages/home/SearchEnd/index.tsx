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
            Auf unserem Discord bleibst du immer up to date, was Games angeht, und findest schnell
            Mitspieler für eine große Auswahl an Titeln. Tausche dich mit anderen über alles rund
            ums Zocken aus und werde Teil einer aktiven und freundlichen Gaming Community.
            <br />
            <br />
            Neben wechselnden Gameservern für neue oder angesagte Spiele bieten wir dir auch feste
            Server, wie unseren deutschsprachigen Minecraft Vanilla-SMP Server der Minecraft Gilde.
            Dort erwartet dich eine beständige Langzeitwelt für Survival und Freebuild, in der du
            deine Projekte ganz in Ruhe entwickeln kannst. Statt hektischer Minigames steht bei uns
            entspanntes Spielen und gemeinsames Aufbauen im Mittelpunkt.
            <br />
            <br />
            Bei uns bekommst du direkt einen passenden, gemütlichen Platz in der Community, sodass
            du ganz leicht Leute findest, mit denen du gemeinsam zocken, quatschen und Spaß haben
            kannst. Durch die Mischung aus abwechslungsreichen Games und langfristigen Projekten ist
            für jeden etwas dabei.
            <br />
            <br />
            <strong>Kurz gesagt:</strong> Eine Community, die dir sowohl Vielfalt als auch
            Beständigkeit bietet – egal, ob du neue Spiele entdecken oder dich auf große
            Minecraft-Projekte konzentrieren möchtest.
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
