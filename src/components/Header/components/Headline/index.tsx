import React from "react";

interface HeadlineInterface {
  preTitle?: string;
  title?: string;
  subTitle: React.ReactNode;
  text: React.ReactNode;
  image?: React.ReactNode;
  children?: React.ReactNode;
}

export const Headline = (props: HeadlineInterface) => {
  return (
    <div className="mt-60 px-3 lg:px-0 text-center w-full m-auto lg:w-[75%]">
      {props.image && props.image}

      {props.preTitle && (
        <p className="w-full mb-0 m-auto lg:w-[75%] text-white tracking-wider font-semibold uppercase text-md lg:text-xl wrap-break-word">
          {props.preTitle}
        </p>
      )}

      {props.title && (
        <h1 className="primary-text text-md lg:text-md font-bold wrap-break-word">{props.title}</h1>
      )}

      <div className="mt-2 lg:mt-2">
        <h1 className="text-4xl lg:text-7xl text-white font-semibold wrap-break-word">
          {props.subTitle}
        </h1>

        <p className="w-full mb-7 m-auto lg:w-[75%] sub-text mt-7 font-light text-md lg:text-2xl wrap-break-word">
          {props.text}
        </p>

        {props.children}
      </div>
    </div>
  );
};
