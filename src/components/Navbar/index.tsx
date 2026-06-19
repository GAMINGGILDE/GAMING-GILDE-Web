"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import Image from "next/image";

export const Navbar = () => {
  const [isFixed, setFixed] = useState<boolean>(false);
  const [isShow, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY >= 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hasGlassEffect = isShow || isFixed;
  const navStyle = useMemo(
    () => ({
      zIndex: 99,
      ...(hasGlassEffect
        ? {
            background: "rgba(15, 52, 90, 0.2)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            transition: "background 300ms ease, backdrop-filter 300ms ease",
          }
        : {}),
    }),
    [hasGlassEffect],
  );

  return (
    <>
      <nav
        style={navStyle}
        className={["fixed w-full px-5 border-bottom top-0 start-0", hasGlassEffect ? "navbar" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="max-w-(--breakpoint-xl) flex flex-wrap items-center justify-between mx-auto py-3">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              width={75}
              height={75}
              priority={true}
              unoptimized={true}
              className="w-[75px]"
              alt="gaming gilde logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 hover:text-white transition ease-in-out duration-300 rounded-lg lg:hidden focus:outline-hidden focus:ring-2 focus:ring-gray-200 hover:bg-primary"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShow(!isShow)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${!isShow ? "hidden" : "block"} w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium uppercase flex flex-col p-4 md:p-0 mt-4 rounded-lg lg:flex-row md:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
              <li>
                <Link
                  href="/"
                  onClick={() => setShow(false)}
                  className="block py-2 px-3 text-primary rounded-sm hover:bg-transparent md:border-0 hover:text-primaryHover p-0 bg-transparent"
                  aria-current="page"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/gameserver/"
                  onClick={() => setShow(false)}
                  className="block py-2 px-3 text-primary rounded-sm hover:bg-transparent md:border-0 hover:text-primaryHover p-0 bg-transparent"
                >
                  Gameserver
                </Link>
              </li>
              <li>
                <a
                  href="/event/"
                  className="block py-2 px-3 text-primary rounded-sm hover:bg-transparent md:border-0 hover:text-primaryHover p-0 bg-transparent"
                >
                  Event
                </a>
              </li>
              <li>
                <a
                  href="/geschichte/"
                  className="block py-2 px-3 text-primary rounded-sm hover:bg-transparent md:border-0 hover:text-primaryHover p-0 bg-transparent"
                >
                  Geschichte
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
