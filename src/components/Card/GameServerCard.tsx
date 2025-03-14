"use client";

import Link from "next/link";
import {Modal} from "../Modal/index";
import React, {useState} from "react";

interface GameServerCardInterface {
    title: string;
    children: React.ReactNode;
    cardText: React.ReactNode;
}

export const GameServerCard = ({ title, children, cardText }: GameServerCardInterface) => {
    const [isShowModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div className="my-5">
                <Link href={"#!"} onClick={() => setShowModal(!isShowModal)}>
                    <div className="card-inner card-inner--blue relative p-4 cursor-pointer text-white">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg lg:text-xl font-semibold uppercase break-words">{title}</h2>

                            <div className="bg-primary px-5 py-1 text-white text-center rounded-full flex items-center">
                                <i className="fa fa-cog text-white text-sm mr-2" style={{ fontSize: '.75rem' }} />
                                <p className="text-sm font-light">TEST</p>
                            </div>
                        </div>

                        <p className="mb-5 text-xs">{cardText}</p>

                        <div className="flex">
                            <div className="bg-primary px-5 text-center py-0.5 rounded-full flex items-center">
                                <i className="fa fa-location-dot text-white text-sm mr-2" style={{ fontSize: '.75rem' }} />
                                <p className="text-sm font-light text-white">#Test</p>
                            </div>

                            <div className="bg-primary px-5 py-0.5 text-center mx-2 rounded-full flex items-center">
                                <i className="fa fa-business-time text-white text-sm mr-2" style={{ fontSize: '.75rem' }} />
                                <p className="text-sm font-light text-white">#Test</p>
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