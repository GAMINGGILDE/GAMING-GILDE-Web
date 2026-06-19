import Image from "next/image";
import type { ImageProps } from "next/image";
import PreviewImage from "../../assets/index-bg-3.webp";
import React from "react";
import { Headline } from "./components/Headline/index";

const getImageSrc = (image: ImageProps["src"]) => (typeof image === "string" ? image : image.src);

export const Header = ({
  noText,
  previews,
}: {
  noText?: boolean;
  previews: Array<ImageProps["src"]>;
}) => {
  const image = PreviewImage;
  const previewSources = JSON.stringify(previews.map(getImageSrc));

  return (
    <>
      <div className="absolute top-0" style={{ zIndex: -1 }} data-header-previews={previewSources}>
        <div className="img-wrap">
          <Image
            loader={(loader) => `${loader.src}`}
            width={1000}
            height={1000}
            className="w-full js-random-header-image"
            priority={true}
            unoptimized={true}
            src={image}
            alt={"header preview"}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.querySelectorAll('[data-header-previews]').forEach((header) => {
              const img = header.querySelector('.js-random-header-image');
              if (!img) return;
              try {
                const previews = JSON.parse(header.getAttribute('data-header-previews') || '[]');
                if (!previews.length) return;
                img.src = previews[Math.floor(Math.random() * previews.length)];
              } catch (_) {}
            });
          `,
        }}
      />

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
