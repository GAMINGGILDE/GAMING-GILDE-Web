import React from "react";

export const TwitchIcon = ({...props}) => (
    <svg
        width={800}
        height={800}
        viewBox="0 0 22 22"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
        {...props}
    >
        <path
            d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1v3a1 1 0 0 0 .62.92A.84.84 0 0 0 6 22a1 1 0 0 0 .71-.29l3.7-3.71H16a1 1 0 0 0 .71-.29l5-5A1 1 0 0 0 22 12V4a2 2 0 0 0-2-2Z"
            style={{
                fillRule:"nonzero",
            }}
        />
        <path
            d="M15 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm-6 0a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
            style={{
                fill:"#000000",
            }}
        />
    </svg>
);
