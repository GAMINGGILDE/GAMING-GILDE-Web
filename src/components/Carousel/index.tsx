"use client";

import React, {useState} from "react";
import Link from "next/link";

const images = [
    { src: "https://anti-corona-kartell.de/public/event26-Hauptbahnhof.jpg", alt: "Hauptbahnhof", link: "https://www.bahnhof.de/nuernberg-hbf" },
    { src: "https://anti-corona-kartell.de/public/event26-Handwerkerhof.jpg", alt: "Handwerkerhof", link: "https://www.nuernberg.de/internet/handwerkerhof/" },
    { src: "https://anti-corona-kartell.de/public/event26-Mauthalle.jpg", alt: "Mauthalle", link: "https://www.nuernberg.de/internet/stadtportal/mauthalle.html" },
    { src: "https://anti-corona-kartell.de/public/event26-Lorenzkirche.jpg", alt: "Lorenzkirche", link: "https://lorenzkirche.de/" },
    { src: "https://anti-corona-kartell.de/public/event26-Hlg-Geist-Spital.jpg", alt: "Heilig Geist Spital", link: "https://www.heilig-geist-spital.de/" },
    { src: "https://anti-corona-kartell.de/public/event26-Hauptmarkt.jpg", alt: "Hauptmarkt", link: "https://www.nuernberg.de/internet/stadtportal/schoener_brunnen.html" },
    { src: "https://anti-corona-kartell.de/public/event26-Bratwursthaeusle.jpg", alt: "Bratwurst Häusle", link: "https://bratwursthaeuslenuernberg.de/" },
    { src: "https://anti-corona-kartell.de/public/event26-Kaiserburg.jpg", alt: "Kaiserburg", link: "https://www.kaiserburg-nuernberg.de/" },
    { src: "https://anti-corona-kartell.de/public/event26-Duererhaus.jpg", alt: "Dürerhaus", link: "https://museen.nuernberg.de/duererhaus/" },
    { src: "https://anti-corona-kartell.de/public/event26-Henkersteg.jpg", alt: "Henkersteg", link: "https://www.nuernberg.de/internet/stadtportal/henkersteg_weinstadel.html" },
    { src: "https://anti-corona-kartell.de/public/event26-Bratwurst-Roeslein.jpg", alt: "Bratwurst Röslein", link: "https://www.bratwurst-roeslein.de/de/" },
];

export const Carousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Funktion zum Navigieren der Bilder
    const moveToSelected = (direction) => {
        if (isTransitioning) return; // Verhindert das mehrfach schnelle Wechseln
        setIsTransitioning(true);

        setTimeout(() => {
            if (direction === "next") {
                setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
            } else if (direction === "prev") {
                setSelectedIndex(
                    (prevIndex) => (prevIndex - 1 + images.length) % images.length
                );
            }
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <div className="relative w-full h-[380px]">
            {/* Carousel Container */}
            <div className="relative w-full h-[380px] mx-auto flex items-center justify-center">
                {/* Previous Image */}
                   <div
                       className={`absolute left-0 w-[320px] h-[320px] transition-all duration-300 transform ${
                           isTransitioning ? "scale-90 opacity-50" : "scale-90 opacity-100"
                       }`}
                   >
                         <Link href={images[(selectedIndex - 1 + images.length) % images.length].link}>
                           <div className="w-full h-full relative overflow-hidden">
                               <CarouselImage
                                   link={images[(selectedIndex - 1 + images.length) % images.length].link}
                                   image={images[(selectedIndex - 1 + images.length) % images.length].src}
                               />
                               <div className="absolute top-0 left-0 w-full h-full opacity-30" />
                           </div>
                        </Link>
                   </div>

                {/* Current Image */}
                    <div
                        className={`absolute z-10 w-[320px] h-[320px] transition-all duration-300 transform ${
                            isTransitioning ? "scale-100 opacity-100" : "scale-100 opacity-100"
                        }`}
                    >
                         <Link href={images[selectedIndex].link}>
                            <div className="w-full h-full relative overflow-hidden">
                                <CarouselImage
                                    image={images[selectedIndex].src}
                                    link={images[selectedIndex].link}
                                />

                                <div className="absolute top-0 left-0 w-full h-full opacity-30" />
                                <div className="absolute top-1/2 left-1/2 text-center text-white transform -translate-x-1/2 -translate-y-1/2 text-xl">
                                    {images[selectedIndex].alt}
                                </div>
                            </div>
                        </Link>
                    </div>

                {/* Next Image */}
                <div
                    className={`absolute right-0 w-[320px] h-[320px] transition-all duration-300 transform ${
                        isTransitioning ? "scale-90 opacity-50" : "scale-90 opacity-100"
                    }`}
                >
                    <Link href={images[(selectedIndex + 1) % images.length].link}>
                    <div className="w-full h-full relative overflow-hidden">
                        <CarouselImage
                            image={images[(selectedIndex + 1) % images.length].src}
                            link={images[(selectedIndex + 1) % images.length].link}
                        />

                        <div className="absolute top-0 left-0 w-full h-full opacity-30" />
                    </div>
                </Link>
                </div>

            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-center items-center h-full z-50">
                <button
                    onClick={() => moveToSelected("prev")}
                    className="bg-transparent border-none text-white p-4 hover:scale-125 transition-all shadow-lg rounded-full hover:bg-gray-800 hover:text-green-400 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex justify-center items-center h-full z-50">
                <button
                    onClick={() => moveToSelected("next")}
                    className="bg-transparent border-none text-white p-4 hover:scale-125 transition-all shadow-lg rounded-full hover:bg-gray-800 hover:text-green-400 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const CarouselImage = ({ image, link }: { image: string; link?: string }) => {
    return (
        <div
            className="relative inline-block"
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <div
                className="absolute inset-0 bg-primary"
                style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    border: '8px solid #ffab2c',
                    padding: '2px',
                }}
            >
                <img
                    src={image}
                    alt="Previous"
                    className="object-cover w-full h-full"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Clipping nur auf das Bild anwenden
                    }}
                />
            </div>
        </div>
    )
}

export default Carousel;
