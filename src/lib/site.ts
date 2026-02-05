/**
 * Zentrale Website-Konfiguration.
 *
 * Für JSON-LD (Structured Data) sollten URLs i. d. R. absolut sein.
 */

export const site = {
  name: "ANTI-CORONA-KARTELL",
  url: "https://anti-corona-kartell.de",
  description:
    "ANTI-CORONA-KARTELL Webseite. Eine Gaming-Community von Gamern für Gamer.",
  locale: "de-DE",

  /**
   * Stabiler Logo-Pfad (liegt in /public), damit er auch in JSON-LD genutzt werden kann.
   */
  logoPath: "/logo.png",

  /**
   * Social-Profile (sameAs). Bitte nur echte, öffentlich erreichbare Profile eintragen.
   */
  sameAs: [
    "https://www.youtube.com/@Anti-Corona-Kartell",
    "https://www.twitch.tv/anti_corona_kartell",
    "https://www.tiktok.com/@anticoronakartell",
    "https://discord.anti-corona-kartell.de",
  ],
} as const;
