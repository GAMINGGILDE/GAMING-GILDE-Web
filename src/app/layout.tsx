import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer/index";
import { JsonLd } from "../components/SEO/JsonLd";
import { buildDefaultJsonLdGraph } from "../lib/jsonld";
import { site } from "../lib/site";
import PreviewImage from "../assets/Minecraft-Bg-0.webp";
import PreviewImage2 from "../assets/Minecraft-Bg-1.webp";
import PreviewImage3 from "../assets/Minecraft-Bg-2.webp";
import PreviewImage4 from "../assets/Minecraft-Bg-3.webp";

const NovaRegular = localFont({
  src: "./fonts/ProximaNova-regular.woff",
  variable: "--font-nova-regular",
  weight: "100 900",
});
const NovaBold = localFont({
  src: "./fonts/ProximaNova-bold.woff",
  variable: "--font-nova-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

const previews = [PreviewImage, PreviewImage2, PreviewImage3, PreviewImage4];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        {/* JSON-LD Structured Data (global) */}
        <JsonLd id="ld-default" data={buildDefaultJsonLdGraph()} />
      </head>
      <body
        className={`${NovaRegular.variable} ${NovaBold.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <div className="mb-40">{children}</div>

        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
