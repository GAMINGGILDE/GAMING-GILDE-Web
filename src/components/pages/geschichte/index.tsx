"use client";

import {Header} from "../../Header/index";
import React from "react";
import PreviewImage from "../../../assets/geschichte-bg-aoe2-1.webp";
import PreviewImage1 from "../../../assets/geschichte-bg-aoe2-2.webp";
import PreviewImage2 from "../../../assets/geschichte-bg-aoe2-3.webp";

const previews = [PreviewImage, PreviewImage1, PreviewImage2];

export const History = () => {
    return (
        <div>
            <Header previews={previews} noText/>

            <div className="px-10 mt-32 max-w-[1280px] mx-auto">
                <div className="relative block text-white text-center">
                    <div className="flex flex-wrap justify-center m-0 p-0 gap-x-5 uppercase">

                        <h1 className="text-2xl sm:text-4xl lg:text-[4rem] xl:text-[6rem] font-bold tracking-widest m-0 lg:leading-none">Unsere</h1>
                        <h1
                            className="text-2xl linear-text sm:text-4xl lg:text-[4rem] xl:text-[6rem] font-bold tracking-widest m-0 lg:leading-none"
                        >
                            Geschichte
                        </h1>
                    </div>
                </div>

                <div className="my-32 text-white tracking-wider w-[100%] m-auto">
                    <p className="text-lg mb-10">
                        Der Begriff bzw. Name 'ANTI-CORONA-KARTELL' entstand während der <a className="text-primary hover:underline" href="https://de.wikipedia.org/wiki/COVID-19-Pandemie_in_Deutschland target=_blank">Corona-Pandemie</a>.
                        In dieser Zeit fand sich eine kleine Gruppe an Gamern regelmäßig zum Spielen in Age of Empires
                        II zusammen und benannte die Lobby immer mit besagtem Namen. In einer Zeit, in der es untersagt war,
                        außerhäusliche Freizeitaktivitäten auszuüben. Für uns als Gamer vermag das nicht tragisch
                        erscheinen. Aber wir trafen uns im privaten Umfeld sonst auch immer wieder und haben das in der
                        Zeit der Pandemie vermisst. Darum haben wir den Entschluss gefasst, dass wenn wir die Pandemie
                        hinter uns gebracht haben, dass wir uns alle wieder persönlich treffen werden um das Nachzuholen
                        was uns einst genommen war. Für diesen Event und diese Gruppe brauchten wir nur noch einen
                        passenden Namen. Einen Namen, der unseren Protest zu den Umständen der Corona-Pandemie zum
                        Ausdruck brachte und so entstand das ANTI-CORONA-KARTELL.
                    </p>

                    <p className="text-lg mb-10">
                        Die Gründungsmitglieder:
                        <ul className="list-disc list-inside m-4">
                            <li><a className="text-primary hover:underline" href="https://steamcommunity.com/id/lestructor" target="_blank">Lestructor</a> | <a className="text-primary hover:underline" href="https://www.xbox.com/de-DE/play/user/QuickChrissi" target="_blank">Christian</a></li>
                            <li><a className="text-primary hover:underline" href="https://steamcommunity.com/profiles/76561197969468353" target="_blank">Matcauthon</a> | <a className="text-primary hover:underline" href="https://www.xbox.com/de-DE/play/user/horcan" target="_blank">Uwe</a></li>
                            <li><a className="text-primary hover:underline" href="https://steamcommunity.com/profiles/76561198041298471" target="_blank">Psycho92sly</a> | <a className="text-primary hover:underline" href="https://www.xbox.com/de-DE/play/user/Psycho92sly" target="_blank">Georg</a></li>
                            <li><a className="text-primary hover:underline" href="https://steamcommunity.com/profiles/76561198053398911" target="_blank">Sansa49</a> | <a className="text-primary hover:underline" href="https://www.xbox.com/de-DE/play/user/sansa49" target="_blank">Olaf</a></li>
                            <li><a className="text-primary hover:underline" href="https://steamcommunity.com/id/schiroky" target="_blank">SCHIROKY</a> | <a className="text-primary hover:underline" href="https://www.xbox.com/de-DE/play/user/S%20C%20H%20I%20R%20O%20K%20Y" target="_blank">Claus</a></li>
                        </ul>

                    </p>
                    <p className="text-lg mb-10">
                        Beim ersten Treffen (2022) haben wir uns kulinarisch bei einem ausgiebigen mexikanischen Essen
                        getroffen und mit mobilen Spielekonsolen (Nintendo Switch) unserm Hobby gefrönt. Unser erstes
                        Treffen kam so gut bei den Teilnehmern an, dass wir uns entschieden haben, das Treffen des
                        Anti-Corona-Kartells fortan jedes Jahr zu wiederholen. Für das zweite Treffen (2023) haben wir
                        uns regional einen ganzen Kinosaal gemietet und uns auf der großen Leinwand mit Spielen auf
                        einer XBOX 360 ausgetobt. Für das dritte Treffen (2024) haben wir eine idyllische Floßfahrt auf
                        der Isar unternommen und dabei eine mobile Spielekonsole (GameLix) verlost.
                    </p>
                    <p className="text-lg mb-10">
                        Zu einigen Events sind ein paar Videosequenzen auf unserem <a className="text-primary hover:underline" href="https://www.youtube.com/@Anti-Corona-Kartell" target="_blank">YouTube-Kanal</a> veröffentlicht. Schau
                        gerne mal rein und lass ein Abo da.
                    </p>



                    <p className="text-lg mb-10">
                        Willst du keinen unserer Events mehr verpassen? Dann werde Mitglied beim <a className="text-primary hover:underline" href="https://discord.anti-corona-kartell.de" target="_blank">ANTI-CORONA-KARTELL</a> und/oder unserem Partner-Server <a className="text-primary hover:underline" href="https://discord.minecraft-gilde.de" target="_blank">Minecraft Gilde</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}