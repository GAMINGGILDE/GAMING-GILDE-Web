"use client";

import React from "react";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import {Header} from "@/components/Header";
import PreviewImage from "../../assets/impressum-bg-games.webp";
import PreviewImage2 from "../../assets/index-bg-1.webp";
import PreviewImage3 from "../../assets/index-bg-4.webp";

const previews = [PreviewImage, PreviewImage2, PreviewImage3];

export default function Imprint() {
    return (
        <div>
            <Header previews={previews} noText/>

            <div className="mt-[15rem] max-w-[1280px] mx-auto px-3 lg:px-0 w-[100%] m-auto mb-[10rem]">
                <div className="text-center">
                    <h1 className="text-xl md:text-6xl lg:text-7xl tracking-widest linear-text uppercase text-white font-bold break-words">Impressum</h1>
                </div>

                <div className="mt-10 text-white">
                    <div className="flex justify-center lg:justify-between flex-wrap lg:p-0 p-10 gap-10">
                        <div className="relative">
                            <Image
                                src={Logo}
                                className="w-[12.5rem]"
                                alt={"anti-corona-kartell logo"}
                                width={1000}
                                height={1000}
                                priority={true}
                                unoptimized={true}
                                loader={(loader) => `${loader.src}`}
                            />
                            <h1 className="font-semibold text-sm text-center lg:text-xl">
                                <span className="text-primary">ANTI-CORONA-KARTELL</span></h1>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <h1 className="text-sm mb-4">Dieses Impressum gilt auch für die Darstellung des ANTI-CORONA-KARTELLs auf:</h1>

                            <div className="bg-sub py-2 px-5 my-4 rounded-lg flex justify-between w-[18rem]">
                                <p className="font-semibold">YouTube</p>
                                <a className="text-primary hover:underline" href="https://www.youtube.com/@Anti-Corona-Kartell" target="_blank">Hier klicken</a>
                            </div>
                            <div className="bg-sub py-2 px-5 my-4 rounded-lg flex justify-between w-[18rem]">
                                <p className="font-semibold">Discord</p>
                                <a className="text-primary hover:underline" href="https://discord.anti-corona-kartell.de" target="_blank">Hier klicken</a>
                            </div>
                            <div className="bg-sub py-2 px-5 my-4 rounded-lg flex justify-between w-[18rem]">
                                <p className="font-semibold">Steam</p>
                                <a className="text-primary hover:underline" href="https://steamcommunity.com/groups/A-C-KARTELL" target="_blank">Hier klicken</a>
                            </div>
                            <div className="bg-sub py-2 px-5 my-4 rounded-lg flex justify-between w-[18rem]">
                                <p className="font-semibold">Bluesky</p>
                                <a className="text-primary hover:underline" href="https://bsky.app/profile/anti-corona-kartell.de" target="_blank">Hier klicken</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-2xl mb-3">Angaben gemäß §5 <a className="text-primary hover:underline" href="https://www.gesetze-im-internet.de/ddg/BJNR0950B0024.html" target="_blank">DDG</a>:</h1>
                        <p className="sub-text font-extralight"><strong>Websitebetreiber: </strong>Claus Schiroky</p>
                        <p className="sub-text font-extralight"><strong>E-Mail: </strong><a className="text-primary hover:underline" href="mailto:webmaster@anti-corona-kartell.de" target="_blank">webmaster@anti-corona-kartell.de</a></p>
                      <div className="mt-5">
                            <p className="sub-text font-extralight"><strong>Datenschutz & Cookies</strong></p>
                            <p className="sub-text font-extralight">Ihre Privatsphäre ist uns sehr wichtig. Unsere <a className="text-primary hover:underline" href="../datenschutz" >Datenschutzbestimmungen</a> erläutern,
                                welche persönlichen Daten von ihnen erhoben werden und wie sie von uns verwendet werden. Bei weiteren Fragen zum Datenschutz
                                wenden sie sich bitte an den Websitebetreiber.</p>
                        </div>

                        <div className="mt-5">
                            <p className="sub-text font-extralight"><strong>Widerspruch gegen Werbe-E-Mails</strong>
                            </p>
                            <p className="sub-text font-extralight">Der Nutzung von im Rahmen der oben genannten
                                veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
                                Werbung und Informationsmaterialien wird hiermit widersprochen. Der Betreiber der
                                Seiten behält sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                                Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
                        </div>

                        <div className="mt-5">
                            <p className="sub-text font-extralight"><strong>Haftungsausschluss</strong>
                            </p>
                            <p className="sub-text font-extralight">Alle Angaben und Inhalte dieses Angebotes wurden
                                sorgfältig erstellt und geprüft. Der Websitebetreiber ist bemüht, das Angebot
                                aktuell, vollständig und frei von inhaltlichen Fehlern anzubieten. Dennoch kann
                                trotz größter Sorgfalt das Auftreten von Fehlern nicht völlig ausgeschlossen werden,
                                so dass eine Garantie für die Vollständigkeit, Richtigkeit, Aktualität und
                                permanente Verfügbarkeit nicht übernommen wird.
                                Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte
                                externer Links übernommen. Für den Inhalt der verlinkten Seiten sind ausschließlich
                                deren Betreiber verantwortlich. Für etwaige Satzfehler sowie für die Richtigkeit der
                                Eintragungen übernimmt der Websitebetreiber keine Gewähr.
                                Der Zugang und die Benutzung dieser Website geschieht auf eigene Gefahr. Der
                                Websitebetreiber übernimmt keinerlei Haftung für etwaige Schäden, die durch den oder
                                in Verbindung mit dem Zugang und/oder der Benutzung dieser Website auftreten.</p>
                        </div>

                        <div className="mt-5">
                            <p className="sub-text font-extralight"><strong>Urheberrecht</strong>
                            </p>
                            <p className="sub-text font-extralight">Alle auf dieser Website genannten Produktnamen,
                                Produktbezeichnungen und Logos sind eingetragene Warenzeichen und Eigentum der
                                jeweiligen Rechteinhaber. Sämtliche Texte, Bilder und andere veröffentlichten
                                Informationen unterliegen, sofern nicht anders gekennzeichnet, dem Copyright des
                                Websitebetreibers. Jede Vervielfältigung, Verbreitung, Speicherung, Sendung und
                                Wieder- bzw. Weitergabe der Inhalte ist ohne schriftliche Genehmigung ausdrücklich
                                untersagt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
