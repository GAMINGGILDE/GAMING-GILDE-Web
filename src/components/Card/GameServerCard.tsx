"use client";

import Link from "next/link";
import {Modal} from "../Modal/index";
import React, {useState} from "react";
import Image from "next/image";

interface GameServerCardInterface {
    title: string;
    image: string | unknown;
    onClick?: () => void;
    children: React.ReactNode;
    cardText: React.ReactNode;
    button: React.ReactNode;
}

export const GameServerCard = ({ title, children, cardText, image, onClick, button }: GameServerCardInterface) => {
    const [isShowModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div className="my-5">
                <Link href={"#!"} onClick={() => setShowModal(!isShowModal)}>
                    <div className="card-inner card-inner--blue relative p-4 cursor-pointer text-white">
                        <div className="flex justify-between items-center mb-3 lg:hidden block">
                            <h2 className="text-lg lg:text-xl font-semibold uppercase wrap-break-word">{title}</h2>
                        </div>

                       <div className="grid grid-cols-12">
                           <div className="col-span-12 lg:col-span-6 mx-auto lg:hidden block mb-7">
                               <Image
                                   src={image}
                                   alt={"gameserver preview"}
                                   className="w-[20rem] object-contain rounded-lg"
                                   width={100}
                                   height={100}
                                   loader={(loader) => loader.src}
                               />
                           </div>
                           <div className="col-span-12 lg:col-span-6 text-xm">
                               <div className="flex justify-between items-center mb-3 lg:block hidden">
                                   <h2 className="text-lg lg:text-xl font-semibold uppercase wrap-break-word">{title}</h2>
                               </div>

                               {cardText}

                               <div className="flex mt-3">
                                   <div onClick={onClick} className="bg-primary px-5 text-center py-0.5 rounded-full flex items-center">
                                       {button}
                                   </div>
                               </div>
                           </div>
                           <div className="col-span-12 lg:col-span-6 mx-auto lg:block hidden my-auto">
                               <Image
                                   src={image}
                                   alt={"gameserver preview"}
                                   className="w-70 object-contain rounded-lg"
                                   width={100}
                                   height={100}
                                   loader={(loader) => loader.src}
                               />
                           </div>
                       </div>

                    </div>
                </Link>
            </div>

            <Modal
                isShow={isShowModal}
                setShow={(isShow) => setShowModal(isShow)}
                title={title}
                children={children}
            />
        </>
    )
}