"use client";

import Link from "next/link";
import { Modal } from "../Modal/index";
import React, { useState } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";

interface GameServerCardInterface {
  title: string;
  image: ImageProps["src"];
  onClick?: () => void;
  children: React.ReactNode;
  cardText: React.ReactNode;
  button: React.ReactNode;
  externalUrl?: string;
  colorVariant?: "blue" | "yellow" | "magenta";
  imageClassName?: string;
  buttonClassName?: string;
  cornerLabel?: React.ReactNode;
  cornerLabelClassName?: string;
}

export const GameServerCard = ({
  title,
  children,
  cardText,
  image,
  onClick,
  button,
  externalUrl,
  colorVariant = "blue",
  imageClassName,
  buttonClassName,
  cornerLabel,
  cornerLabelClassName,
}: GameServerCardInterface) => {
  const [isShowModal, setShowModal] = useState<boolean>(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (externalUrl) {
      e.preventDefault();
      window.open(externalUrl, "_blank", "noopener,noreferrer");
    } else {
      setShowModal(!isShowModal);
    }
  };

  return (
    <>
      <div className="my-5">
        <Link
          href={externalUrl ?? "#!"}
          onClick={handleCardClick}
          target={externalUrl ? "_blank" : undefined}
          rel={externalUrl ? "noopener noreferrer" : undefined}
        >
          <div
            className={`card-inner card-inner--${colorVariant} relative p-4 cursor-pointer text-white`}
          >
            {cornerLabel && (
              <span
                className={
                  cornerLabelClassName ??
                  "absolute top-3 right-3 rounded-full bg-primary/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-primary/60"
                }
              >
                {cornerLabel}
              </span>
            )}

            <div className="flex justify-between items-center mb-3 lg:hidden block">
              <h2 className="text-lg lg:text-xl font-semibold uppercase wrap-break-word">
                {title}
              </h2>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-6 mx-auto lg:hidden block mb-7">
                <Image
                  src={image}
                  alt={"gameserver preview"}
                  className={imageClassName ?? "w-[20rem] object-contain rounded-lg"}
                  width={100}
                  height={100}
                  loader={(loader) => loader.src}
                />
              </div>
              <div className="col-span-12 lg:col-span-6 text-xm">
                <div className="flex justify-between items-center mb-3 lg:block hidden">
                  <h2 className="text-lg lg:text-xl font-semibold uppercase wrap-break-word">
                    {title}
                  </h2>
                </div>

                {cardText}

                <div className="flex mt-3">
                  <div
                    onClick={onClick}
                    className={
                      buttonClassName ??
                      "bg-primary px-5 text-center py-0.5 rounded-full flex items-center"
                    }
                  >
                    {button}
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 mx-auto lg:block hidden my-auto">
                <Image
                  src={image}
                  alt={"gameserver preview"}
                  className={imageClassName ?? "w-70 object-contain rounded-lg"}
                  width={100}
                  height={100}
                  loader={(loader) => loader.src}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {!externalUrl && (
        <Modal
          isShow={isShowModal}
          setShow={(isShow) => setShowModal(isShow)}
          title={title}
          children={children}
        />
      )}
    </>
  );
};
