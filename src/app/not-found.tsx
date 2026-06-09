import Link from "next/link";

export default function NotFound() {
  return (
    <section className="xl:px-0 px-5 md:px-10 mt-40 max-w-[1280px] mx-auto text-white">
      <div className="card-inner--blue p-6 lg:p-10">
        <p className="linear-text font-medium uppercase text-sm">GAMING GILDE</p>

        <div className="flex flex-row m-0 p-0 uppercase mt-3 flex-wrap gap-x-3">
          <h1 className="font-bold text-2xl lg:text-6xl tracking-widest m-0">Fehler</h1>
          <h1 className="linear-text font-bold text-2xl lg:text-6xl tracking-widest m-0">404</h1>
        </div>

        <h2 className="text-xl lg:text-3xl font-semibold mt-5">Diese Seite wurde nicht gefunden</h2>
        <p className="mt-4 font-light sub-text max-w-3xl">
          Die angeforderte Seite existiert nicht oder wurde verschoben. Nutze einen der folgenden
          Buttons, um zur Website zurueckzukehren.
        </p>

        <div className="flex flex-wrap gap-3 mt-7">
          <Link
            href="/"
            className="inline-block py-2 px-3 text-white rounded-lg transition duration-300 md:border-0 p-0 bg-primary hover:bg-primaryHover"
          >
            Zur Startseite
          </Link>
          <Link
            href="/gameserver/"
            className="inline-block py-2 px-3 text-white rounded-lg transition duration-300 md:border-0 p-0 bg-primary hover:bg-primaryHover"
          >
            Zu den Gameservern
          </Link>
        </div>
      </div>
    </section>
  );
}
