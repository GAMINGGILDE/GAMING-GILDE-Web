"use client";

import Link from "next/link";
import React from "react";
import {ParagraphIcon} from "../Icon/ParagraphIcon";
import {PrivacyIcon} from "../Icon/PrivacyIcon";

export const Footer = () => {

    return (
        <div>
            <div className="mt-5 text-white container m-auto px-10">

                <div className="my-24">
                    <div className="flex justify-center lg:justify-between flex-wrap font-extralight text-xs">
                        <p>Copyright &copy;{new Date().getFullYear()} Claus Schiroky. Alle Rechte vorbehalten</p>

                        <div className="flex justify-center items-center">
                            <div className="mx-2">
                                <Link href="/imprint">
                                    <ParagraphIcon className="w-5 h-5 fill-white" />
                                </Link>
                            </div>
                            <div className="mx-2">
                                <Link href="/privacy">
                                    <PrivacyIcon className="w-5 h-5 fill-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}