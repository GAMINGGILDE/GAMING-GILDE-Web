import {Carousel} from "@/components/Carousel";
import {Header} from "@/components/Header";
import PreviewImage from "../../assets/LvlUpBackground-1.webp";
import PreviewImage2 from "../../assets/LvlUpBackground-2.webp";
import PreviewImage3 from "../../assets/LvlUpBackground-3.webp";
import React from "react";
import {TextContent} from "../../components/pages/event/TextContent";

const previews = [PreviewImage, PreviewImage2, PreviewImage3];

const EventPage = () => {

    return (
        <div>
            <Header previews={previews} noText />

            <div className="px-10 xl:px-0 mt-36 max-w-[1280px] mx-auto">
                <div className="relative block text-white text-center">
                    <div className="flex flex-row justify-center m-0 p-0 gap-x-2 lg:gap-x-10 uppercase">
                        <h1 className="text-2xl sm:text-3xl lg:text-[8rem] font-bold tracking-widest m-0 lg:leading-none">Neuer</h1>
                        <h1
                            className="text-2xl linear-text sm:text-3xl lg:text-[8rem] font-bold tracking-widest m-0 lg:leading-none"
                        >
                            Event
                        </h1>
                    </div>
                </div>

                <TextContent />

                {/* <div className="sm:mx-10 lg:mx-20">
                    <Carousel />
                </div> */}

            </div>
        </div>
    )
}

export default EventPage;