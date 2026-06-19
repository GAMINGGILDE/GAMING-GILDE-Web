"use client";

import Link from "next/link";
import { FaDiscord, FaGithub, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <div className="mt-5 text-white container m-auto px-10">
        <div className="my-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between flex-wrap font-extralight text-xs">
            <p className="lg:flex-1 text-center lg:text-left">
              &copy;{new Date().getFullYear()}{" "}
              <a href="https://schiroky.com" target="_blank">
                Claus Schiroky.{" "}
              </a>
              Alle Rechte vorbehalten.
            </p>

            <div className="mt-3 lg:mt-0 flex justify-center items-center lg:flex-1">
              <div className="mx-2">
                <Link href="https://discord.gaming-gilde.org" title="Discord" target="_blank">
                  <FaDiscord className="w-5 h-5 text-white hover:text-primary" />
                </Link>
              </div>

              <div className="mx-2">
                <Link href="https://www.tiktok.com/@gaminggilde" title="TikTok" target="_blank">
                  <FaTiktok className="w-5 h-5 text-white hover:text-primary" />
                </Link>
              </div>

              <div className="mx-2">
                <Link href="https://www.twitch.tv/gaming_gilde" title="Twitch" target="_blank">
                  <FaTwitch className="w-5 h-5 text-white hover:text-primary" />
                </Link>
              </div>

              <div className="mx-2">
                <Link
                  href="https://www.youtube.com/@Gaming-Gilde/videos"
                  title="YouTube"
                  target="_blank"
                >
                  <FaYoutube className="w-5 h-5 text-white hover:text-primary" />
                </Link>
              </div>

              <div className="mx-2">
                <Link
                  href="https://github.com/GAMINGGILDE?view_as=public"
                  title="GitHub"
                  target="_blank"
                >
                  <FaGithub className="w-5 h-5 text-white hover:text-primary" />
                </Link>
              </div>
            </div>

            <div className="mt-3 lg:mt-0 lg:flex-1 text-center lg:text-right">
              <Link href="/impressum" title="Impressum" className="mr-4 hover:text-primary">
                Impressum{" "}
              </Link>

              <Link href="/datenschutz" title="Datenschutzerklärung" className="hover:text-primary">
                Datenschutz{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
