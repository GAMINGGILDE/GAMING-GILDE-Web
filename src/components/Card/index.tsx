import React from "react";

interface CardInterface {
  title: string;
  subTitle: string;
  icon?: React.ReactNode;
  image?: any;
  isRight?: boolean;
  isPrimary?: boolean;
  className?: string;
  innerClassName?: string;
}

export const Card = (props: CardInterface) => {
  const shouldAnimate = typeof props.isRight === "boolean";
  const translateX = props.isRight ? 150 : -150;

  return (
    <>
      <div
        data-scroll-animate={shouldAnimate ? "true" : undefined}
        data-scroll-animate-x={shouldAnimate ? String(translateX) : undefined}
        style={shouldAnimate ? { opacity: 0 } : undefined}
        className={`${props.isPrimary ? "card-background-primary" : "card-background"} lg:min-h-80 cursor-pointer p-1 text-white ${props.className}`}
      >
        <div
          className={` relative p-4 ${props?.innerClassName ? props.innerClassName : "lg:p-10"}`}
        >
          {props.isPrimary ? (
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-5 mx-auto">{props?.image && props.image}</div>
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
    </>
  );
};
