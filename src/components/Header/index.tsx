"use client";

import Image from "next/image";
import PreviewImage from "../../assets/index-bg-3.webp";
import React, { useCallback, useEffect, useState } from "react";
import { Headline } from "./components/Headline/index";

export const Header = ({
  noText,
  previews,
}: {
  noText?: boolean;
  previews: string[] | unknown[];
}) => {
  const [image, setImage] = useState<string | null>(PreviewImage);

  useEffect(() => {
    if (previews) {
      const randomIndex = Math.floor(Math.random() * previews.length);
      setImage(previews[randomIndex]);
    }
  }, [previews]);

  const RenderImage = useCallback(() => {
    if (!image) {
      return <></>;
    }

    return (
      <div className="absolute top-0" style={{ zIndex: -1 }}>
        <div className="img-wrap">
          <Image
            loader={(loader) => `${loader.src}`}
            width={1000}
            height={1000}
            className="w-full"
            priority={true}
            unoptimized={true}
            src={image}
            alt={"header preview"}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    );
  }, [image]);

  return (
    <>
      <RenderImage />

      <Headline
        preTitle={noText ? "" : "Gaming Community"}
        subTitle={
          noText ? (
            <></>
          ) : (
            <p className="uppercase">
              <span className="linear-text font-bold text-6xl lg:text-7xl">
                ANTI-CORONA-KARTELL
              </span>
            </p>
          )
        }
        text={noText ? <></> : <>Eine junge Gaming-Community, für gemeinsamen Spaß beim Zocken</>}
      ></Headline>
    </>
  );
};
