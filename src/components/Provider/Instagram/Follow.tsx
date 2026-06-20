import React from "react";

export const InstagramFollow = () => {
  return (
    <div className="container pb-10 m-auto">
      <div className="card-background-primary card-inner-primary mt-44">
        <div className="card-inner card-inner--home-gameserver text-white">
          <div className="grid grid-cols-12">
            <div className="col-span-12 hidden lg:block lg:col-span-6 pb-1 h-72">
              <img
                src="/mg-logo-full.png"
                alt={"Minecraft Gilde"}
                width={1000}
                height={100}
                className="w-[85%] h-108 px-7 relative bottom-32"
                style={{ objectFit: "contain" }}
                loading="eager"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 py-0 pt-10 lg:py-20 px-10">
              <p className="primary-text text-xs lg:text-base uppercase mb-1 lg:mb-3">
                Schau dir unsere aktuellen
              </p>
              <h1 className="text-xl lg:text-3xl font-semibold mb-2 lg:mb-3">GAMESERVER an</h1>
              <p className="primary-text text-xs lg:text-base mb-1 lg:mb-2">
                Wir betreiben eigene und wechselnde Gameserver für verschiedene Spiele. Dazu gehört
                auch unser fest etablierter Minecraft-Server der Minecraft Gilde, auf dem du
                gemeinsam mit anderen bauen, erkunden und langfristige Projekte umsetzen kannst.
              </p>
              <a
                className="text-yellow-400 hover:text-yellow-300 hover:underline"
                href="/gameserver/"
              >
                Mehr erfahren
              </a>
            </div>
            <div className="col-span-12 block lg:hidden lg:col-span-6 pb-1">
              <img
                src="/mg-logo-full.png"
                alt={"Minecraft Gilde"}
                width={1000}
                height={100}
                className="w-400 h-40 md:h-60 relative"
                style={{ objectFit: "cover", objectPosition: "top" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
