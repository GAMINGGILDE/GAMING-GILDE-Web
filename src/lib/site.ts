//Für JSON-LD (Structured Data) sollten URLs i. d. R. absolut sein.
export const site = {
  name: "ANTI-CORONA-KARTELL",
  url: "https://anti-corona-kartell.de",
  description: "Wir sind eine junge Gaming-Community. Wir wollen in einem positiven Umfeld gemeinsam Spaß beim Spielen haben. Dazu sind wir immer auf der Suche nach neuen Spielgefährten*innen.",
  locale: "de",

  //Stabiler Logo-Pfad (liegt in /public), damit er auch in JSON-LD genutzt werden kann.
  logoPath: "/logo.png",

  //Social-Profile (sameAs). Bitte nur echte, öffentlich erreichbare Profile eintragen.
  sameAs: [
    "https://www.youtube.com/@Anti-Corona-Kartell",
    "https://www.twitch.tv/anti_corona_kartell",
    "https://www.tiktok.com/@anticoronakartell",
    "https://discord.anti-corona-kartell.de",
  ],
} as const;
