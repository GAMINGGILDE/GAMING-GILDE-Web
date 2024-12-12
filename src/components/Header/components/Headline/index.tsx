import React from "react";

interface HeadlineInterface {
    preTitle?: string;
    title?: string;
    subTitle: React.ReactNode;
    text: React.ReactNode;
    image?: React.ReactNode;
    children: React.ReactNode
}

export const Headline = (props: HeadlineInterface) => {
    return (
        <div className="mt-[15rem] px-3 lg:px-0 text-center w-[100%] m-auto lg:w-[75%]">
            {props.image && props.image}

            {props.preTitle && (
                <p className="w-[100%] mb-0 m-auto lg:w-[75%] text-white tracking-wider font-semibold uppercase text-md lg:text-xl break-words">{props.preTitle}</p>
            )}

            {props.title && (
                <h1 className="primary-text text-md lg:text-md font-bold break-words">{props.title}</h1>
            )}

            <div className="mt-2 lg:mt-2">
                <h1 className="text-4xl lg:text-7xl text-white font-semibold break-words">
                    {props.subTitle}
                </h1>

                <p className="w-[100%] mb-7 m-auto lg:w-[75%] sub-text mt-7 font-light text-md lg:text-2xl break-words">{props.text}</p>

                {props.children}
            </div>
        </div>
    )
}