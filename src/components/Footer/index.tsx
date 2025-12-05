"use client";

import Link from "next/link";
import React, {useEffect} from "react";
import {ParagraphIcon} from "../Icon/ParagraphIcon";
import {PrivacyIcon} from "../Icon/PrivacyIcon";
import {YouTubeIcon} from "../Icon/Socialmedia/YouTubeIcon";
import {DiscordIcon} from "../Icon/Socialmedia/DiscordIcon";
import {TwitchIcon} from "../Icon/Socialmedia/TwitchIcon";
import {TikTokIcon} from "../Icon/Socialmedia/TikTokIcon";

export const Footer = () => {

    return (
        <div>
            <div className="mt-5 text-white container m-auto px-10">

                <div className="my-24">
                    <div className="flex justify-center lg:justify-between flex-wrap font-extralight text-xs">
                        <p>&copy;{new Date().getFullYear()} <a href="https://schiroky.com" target="_blank">Claus Schiroky</a>. Alle Rechte vorbehalten.</p>

                        <div className="flex justify-center items-center">

                            <div className="mx-2">
                                <Link href="https://discord.anti-corona-kartell.de" title="Discord" target="_blank">
                                    <DiscordIcon className="w-5 h-5 fill-white hover:fill-primary"/>
                                </Link>
                            </div>

                            <div className="mx-2">
                                <Link href="https://www.tiktok.com/@anticoronakartell" title="TikTok" target="_blank">
                                    <TikTokIcon className="w-5 h-5 fill-white hover:fill-primary"/>
                                </Link>
                            </div>

                            <div className="mx-2">
                                <Link href="https://www.twitch.tv/anti_corona_kartell" title="Twitch" target="_blank">
                                    <TwitchIcon className="w-5 h-5 fill-white hover:fill-primary"/>
                                </Link>
                            </div>

                            <div className="mx-2">
                                <Link href="https://www.youtube.com/@Anti-Corona-Kartell" title="YouTube" target="_blank">
                                    <YouTubeIcon className="w-5 h-5 fill-white hover:fill-primary"/>
                                </Link>
                            </div>

                            <div className="mx-2">
                                <Link href="/impressum" title="Impressum">
                                    <ParagraphIcon className="w-5 h-5 fill-white hover:fill-primary"/>
                                </Link>
                            </div>

                            <div className="mx-2">
                                <Link href="/datenschutz" title="Datenschutz">
                                    <PrivacyIcon className="w-5 h-5 fill-white hover:fill-primary"/>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}