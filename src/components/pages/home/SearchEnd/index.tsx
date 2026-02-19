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
            Auf unserem Discord bekommst du aktuelle News zu Games und Hardware, kannst Mitspieler
            für viele verschiedene Spiele finden und dich rund ums Gaming austauschen. Außerdem
            stellen wir dir kostenlos unsere Lifetime‑Gameserver für Satisfactory, Minecraft und
            Core Keeper sowie weitere wechselnde Server für weitere Games bereit.
            <br />
            Also jede Menge Spaß und Abwechslung mit Spielen garantiert!
            <br />
            <br />
            Zudem kannst du durch uns{" "}
            <a
              className="text-primary hover:underline"
              href="https://zap-hosting.com/anticoronakartellbanner"
              target="_blank"
            >
              20% Rabatt
            </a>{" "}
            auf einen eigenen Gameserver bei unserm Hoster bekommen. Wenn du schon immer Herr über
            einen eigenen Gameserver sein wolltest, ist das die Gelegenheit.
            <br />
            <br />
            Wie wäre es mit deinem eigenen Kanal auf unserem Discord‑Server? Zu deinem Gameserver
            bekommst du bei uns direkt einen passenden, gemütlichen Platz in der Community, damit du
            noch leichter Leute findest, die mit dir zusammen zocken, quatschen und Spaß haben.
            <br />
            <br />
            Also, komm und steig mit ein beim ANTI-CORONA-KARTELL!
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:mt-0 mt-7">
          <DiscordFrame />
        </div>
      </div>
    </div>
  );
};
