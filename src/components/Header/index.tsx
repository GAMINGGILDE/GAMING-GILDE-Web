"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import PreviewImage from "../../assets/index-bg-3.webp";
import React, { useCallback, useEffect, useState } from "react";
import { Headline } from "./components/Headline/index";

export const Header = ({
  noText,
  previews,
}: {
  noText?: boolean;
  previews: Array<ImageProps["src"]>;
}) => {
  const [image, setImage] = useState<ImageProps["src"]>(PreviewImage);

  useEffect(() => {
    if (previews.length > 0) {
      const randomIndex = Math.floor(Math.random() * previews.length);
      setImage(previews[randomIndex]);
    }
  }, [previews]);

  const RenderImage = useCallback(() => {
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
        subTitle={
          noText ? (
            <></>
          ) : (
            <div className="flex justify-center">
              <Image
                src="/logo-text.svg"
                alt="GAMING GILDE"
                width={1010}
                height={93}
                className="w-auto h-14 lg:h-20"
                priority
              />
            </div>
          )
        }
        text={noText ? <></> : <>Eine junge Gaming-Community, für gemeinsamen Spaß beim Spielen</>}
      />
    </>
  );
};
