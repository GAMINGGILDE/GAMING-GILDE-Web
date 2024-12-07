"use client";

import React, { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newScrollPercent = (scrollTop / docHeight) * 100;
        setScrollPercent(newScrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scrollIndicatorContainer">
            <div
                className="scrollIndicator"
                style={{ height: `${scrollPercent}%` }}
            ></div>
        </div>
    );
};
