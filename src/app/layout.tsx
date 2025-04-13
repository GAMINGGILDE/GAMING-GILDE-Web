import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "../components/Navbar/index";
import {Footer} from "../components/Footer/index";
import {Divider, DividerButton} from "../components/Divider/index";

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
  title: "ANTI-CORONA-KARTELL",
  description: "ANTI-CORONA-KARTELL Webseite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossOrigin="anonymous" referrerPolicy="no-referrer"/>

      <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />

        <div className="mb-[10rem]">
          {children}
        </div>

        <Divider texts={[
          { title: "Lust auf Minecraft wie zu Anfangszeiten?", subTitle: "Dann auf geht's zur Minecraft Gilde!" },
          { title: "Lust auf Minecraft wie zu Anfangszeiten? 2", subTitle: "Dann auf geht's zur Minecraft Gilde! 2" }
        ]} />

        <Footer />
      </body>
    </html>
  );
}
