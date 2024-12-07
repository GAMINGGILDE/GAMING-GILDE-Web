import Link from "next/link";
import React from "react";

interface DividerInterface {
    title: string;
    children: React.ReactNode;
}

interface DividerButtonInterface {
    title?: string;
    link: string;
}

export const DividerButton = ({ link, title }: DividerButtonInterface) => (
    <Link href={link} className="border-2 text-white uppercase tracking-wider text-sm font-bold border-primary py-2.5 px-10 rounded-sm bg-transparent hover:bg-primary transition-all duration-300">
        {title}
    </Link>
)

export const Divider = (props: DividerInterface) => {
    return (
       <div className="relative my-32">
           <div className="py-7 px-10 lg:px-20 parallax">
           </div>

           <div className="absolute inset-0 my-12">
               <p className="text-2xl font-bold text-white lg:mb-0 mb-5 text-center" style={{ zIndex: 99 }}>
                   Lust auf Minecraft wie zu Anfangszeiten? <br />
                   Dann auf geht's zur Minecraft Gilde!
               </p>
           </div>
       </div>
    )
}