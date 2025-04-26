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
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg lg:text-xl font-semibold uppercase break-words">{title}</h2>
                        </div>

                        <div className="mb-3">
                           <div className="grid grid-cols-12">
                               <div className="col-span-12 lg:col-span-6 mx-auto lg:hidden block mb-7">
                                   <Image
                                       src={image}
                                       alt={"gameserver preview"}
                                       className="max-h-[5rem] object-contain"
                                       width={100}
                                       height={100}
                                       loader={(loader) => loader.src}
                                   />
                               </div>
                               <div className="col-span-12 lg:col-span-6 text-xs">
                                   {cardText}
                               </div>
                               <div className="col-span-12 lg:col-span-6 mx-auto lg:block hidden">
                                   <Image
                                       src={image}
                                       alt={"gameserver preview"}
                                       className="max-h-[5rem] object-contain"
                                       width={100}
                                       height={100}
                                       loader={(loader) => loader.src}
                                   />
                               </div>
                           </div>
                        </div>

                        <div className="flex">
                            <div onClick={onClick} className="bg-primary px-5 text-center py-0.5 rounded-full flex items-center">
                                {button}
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