"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";

interface DividerInterface {
    texts: DividerItemInterface[];
}

interface DividerItemInterface { title: string; subTitle: string };

interface DividerButtonInterface {
    title?: string;
    link: string;
}

export const DividerButton = ({ link, title }: DividerButtonInterface) => (
    <Link href={link} className="border-2 text-white uppercase tracking-wider text-sm font-bold border-primary py-2.5 px-10 rounded-sm bg-transparent hover:bg-primary transition-all duration-300">
        {title}
    </Link>
)

export const Divider = ({ texts }: DividerInterface) => {
    const [text, setText] = useState<DividerItemInterface | null>(texts[0]);

    useEffect(() => {
        if (texts) {
            const randomIndex = Math.floor(Math.random() * texts.length);
            setText(texts[randomIndex]);
        }
    }, [texts]);

    return (
       <div className="relative my-32">
           <div className="py-7 px-10 lg:px-20 parallax">
           </div>

           <div className="absolute inset-0 my-12">
               <p className="text-base lg:text-2xl font-bold text-white lg:mb-0 mb-5 text-center" style={{ zIndex: 99 }}>
                   <span>{text?.title}</span> <br />
                   <span>{text?.subTitle}</span>
               </p>
           </div>
       </div>
    )
}