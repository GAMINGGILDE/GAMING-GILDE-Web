//Für JSON-LD (Structured Data) sollten URLs i. d. R. absolut sein.
export const site = {
  name: "GAMING GILDE",
  url: "https://gaming-gilde.org",
  description:
    "Wir sind eine junge Gaming-Community. Wir wollen in einem positiven Umfeld gemeinsam Spaß beim Spielen haben. Dazu sind wir immer auf der Suche nach neuen Spielgefährten*innen.",
  locale: "de",

  //Stabiler Logo-Pfad (liegt in /public), damit er auch in JSON-LD genutzt werden kann.
  logoPath: "/logo.png",

  //Social-Profile (sameAs). Bitte nur echte, öffentlich erreichbare Profile eintragen.
  sameAs: [
    "https://www.youtube.com/@Gaming-Gilde",
    "https://www.twitch.tv/gaming_gilde",
    "https://www.tiktok.com/@gaminggilde",
    "https://discord.gaming-gilde.org",
  ],
} as const;
