"use client";

import React, {useEffect, useRef, useState} from "react";
import anime from "animejs";

interface CardInterface {
    title: string;
    subTitle: string;
    icon?: React.ReactNode;
    image?: any;
    isRight?: boolean;
    isPrimary?: boolean;
    className?: string
    innerClassName?: string
}

export const Card = (props: CardInterface) => {
    const elementRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const startAnimation = () => {
        if (hasAnimated) return;

        anime({
            targets: elementRef.current,
            translateX: [props.isRight ? 150 : -150, 0],
            easing: 'easeOutExpo',
            opacity: 1,
            duration: 3000,
        });

        setHasAnimated(true);
    }

    useEffect(() => {
        if (typeof props.isRight !== "boolean") {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    observer.unobserve(entries[0].target);
                    startAnimation();
                }
            },
            {
                threshold: .75, // 75% des Elementes erreicht
                rootMargin: '100px 0px', // Bereich Vergrößerung, in dem das Element erkannt wird
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current as Element);
        }
    }, [hasAnimated]);

    return (
        <div ref={elementRef} style={typeof props.isRight === "boolean" ? {opacity: 0} : null}
             className={`${props.isPrimary ? 'card-background-primary' : 'card-background'} lg:min-h-[20rem] cursor-pointer p-1 text-white ${props.className}`}>
            <div className={` relative p-4 ${props?.innerClassName ? props.innerClassName : 'lg:p-10'}`}>
                {props.isPrimary ? (
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-5 mx-auto">
                            {props?.image && props.image}
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <p className="text-sm lg:text-md primary-text mb-3">{props.title}</p>
                            <h2 className="text-xl lg:text-3xl font-semibold">{props.subTitle}</h2>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex">
                            {props.icon && props.icon}
                            <h2 className="text-xl lg:text-3xl font-bold">{props.title}</h2>
                        </div>
                        <p className="mt-2 sub-text font-thin">{props.subTitle}</p>
                    </>
                )}
            </div>
        </div>
    )
}