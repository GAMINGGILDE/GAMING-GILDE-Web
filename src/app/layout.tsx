import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer/index";
import { Divider } from "../components/Divider/index";
import { JsonLd } from "../components/SEO/JsonLd";
import { buildDefaultJsonLdGraph } from "../lib/jsonld";
import { site } from "../lib/site";
import PreviewImage from "../assets/Minecraft-Bg-0.webp";
import PreviewImage2 from "../assets/Minecraft-Bg-1.webp";
import PreviewImage3 from "../assets/Minecraft-Bg-2.webp";
import PreviewImage4 from "../assets/Minecraft-Bg-3.webp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <div className="mb-40">{children}</div>

        <Divider
          images={previews}
          texts={[
            {
              title: "Lust auf Minecraft wie zu Anfangszeiten?",
              subTitle:
                "Dann auf geht's zur <a href='https://minecraft-gilde.de' class='text-primary hover:underline' target='_blank'>Minecraft Gilde</a>!",
            },
            {
              title: "Minecraft Spielkammeraden gesucht?",
              subTitle:
                "Dann komm zur <a href='https://minecraft-gilde.de' class='text-primary hover:underline' target='_blank'>Minecraft Gilde</a>!",
            },
            {
              title: "Deutschlands erster Minecraft Server auf Folia-Basis:",
              subTitle:
                "<a href='https://minecraft-gilde.de' class='text-primary hover:underline' target='_blank'>Minecraft Gilde</a>!",
            },
          ]}
        />

        <Footer />
      </body>
    </html>
  );
}
