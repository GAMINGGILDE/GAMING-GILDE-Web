"use client";  // React 18 feature to enable use of React in Next.js 13+

import React, { useState } from "react";

// Bild-Daten (Beispiel)
const images = [
    { src: "https://i.postimg.cc/1X5zGSHT/storyintro1.jpg", alt: "IMG1" },
    { src: "https://i.postimg.cc/yxQ8nGpN/storyintro2.jpg", alt: "IMG2" },
    { src: "https://i.postimg.cc/mZ8kbcZG/storyintro3.jpg", alt: "IMG3" },
    { src: "https://i.postimg.cc/kXH5bkt1/storyintro4.jpg", alt: "IMG4" },
    { src: "https://i.postimg.cc/8Pc5s1sf/storyintro5.jpg", alt: "IMG5" },
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
            setIsTransitioning(false); // Setzt die Transition zurück, wenn der Wechsel abgeschlossen ist
        }, 500); // Dauer der Animation (ms)
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-full h-[380px] mx-auto flex items-center justify-center">
                {/* Previous Image */}
                <div
                    className={`absolute left-0 w-[320px] h-[320px] transition-all duration-500 transform ${
                        isTransitioning ? "scale-90 opacity-50" : "scale-90 opacity-100"
                    }`}
                >
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={images[(selectedIndex - 1 + images.length) % images.length].src}
                            alt="Previous"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                    </div>
                </div>

                {/* Current Image */}
                <div
                    className={`absolute z-10 w-[320px] h-[320px] transition-all duration-500 transform ${
                        isTransitioning ? "scale-100 opacity-100" : "scale-100 opacity-100"
                    }`}
                >
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={images[selectedIndex].src}
                            alt="Current"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                        <div className="absolute top-1/2 left-1/2 text-center text-white transform -translate-x-1/2 -translate-y-1/2 text-xl">
                            {images[selectedIndex].alt}
                        </div>
                    </div>
                </div>

                {/* Next Image */}
                <div
                    className={`absolute right-0 w-[320px] h-[320px] transition-all duration-500 transform ${
                        isTransitioning ? "scale-90 opacity-50" : "scale-90 opacity-100"
                    }`}
                >
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={images[(selectedIndex + 1) % images.length].src}
                            alt="Next"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
