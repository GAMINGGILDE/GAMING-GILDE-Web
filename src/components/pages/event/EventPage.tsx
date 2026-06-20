import { Header } from "../../Header";
import PreviewImage from "../../../assets/LvlUpBackground-1.webp";
import PreviewImage2 from "../../../assets/LvlUpBackground-2.webp";
import PreviewImage3 from "../../../assets/LvlUpBackground-3.webp";
import React from "react";
import { TextContent } from "./TextContent";

const previews = [PreviewImage, PreviewImage2, PreviewImage3];

const EventPage = () => {
  return (
    <div>
      <Header previews={previews} noText />

      <div className="xl:px-0 px-5 md:px-10 mt-36 max-w-[1280px] mx-auto">
        <div className="relative block text-white text-center">
          <div className="flex flex-row justify-center m-0 p-0 gap-x-2 lg:gap-x-10 uppercase [font-family:var(--font-nova-bold)]">
            <h1 className="text-3xl lg:text-7xl tracking-widest m-0 lg:leading-none">
              Aktuell kein
            </h1>
            <h1 className="text-3xl linear-text lg:text-7xl tracking-widest m-0 lg:leading-none">
              Event
            </h1>
          </div>
        </div>

        <TextContent />
      </div>
    </div>
  );
};

export default EventPage;
