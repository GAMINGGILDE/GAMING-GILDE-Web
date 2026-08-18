import { site } from "@/lib/site";

type JsonLd = Record<string, unknown>;

const absUrl = (pathOrUrl: string) =>
  pathOrUrl.startsWith("http") ? pathOrUrl : `${site.url}${pathOrUrl}`;

//Organization JSON-LD (für Brand/Publisher).
export function buildOrganizationJsonLd(): JsonLd {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: "https://gaming-gilde.org/logo.svg",
      width: 394,
      height: 380,
    },
    sameAs: [...site.sameAs],
    areaServed: {
      "@type": "Place",
      name: "Deutschsprachiger Raum",
    },
    knowsAbout: [
      "Gaming-Community",
      "Discord-Community",
      "Gameserver",
      "Minecraft Vanilla SMP",
      "Survival Games",
      "Community-Events",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "webmaster@gaming-gilde.org",
      url: "https://discord.gaming-gilde.org",
      availableLanguage: "de",
    },
  };
}

// WebSite JSON-LD (die Website als Entity).
export function buildWebSiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: site.locale,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

// WebPage JSON-LD (pro Seite / Route).
export function buildWebPageJsonLd(args: {
  path: string; // z.B. "/gameserver"
  title: string;
  description?: string;
}): JsonLd {
  const url = absUrl(args.path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: args.title,
    description: args.description ?? site.description,
    isPartOf: { "@id": `${site.url}/#website` },
    inLanguage: site.locale,
  };
}

// BreadcrumbList JSON-LD (pro Seite).
export function buildBreadcrumbJsonLd(args: {
  items: Array<{ name: string; path: string }>;
}): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: args.items.map((it, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

// Hilfsfunktion: Wir nutzen ein einziges Script mit @graph (empfohlen), damit keine Duplikate entstehen.
export function buildGraphJsonLd(nodes: JsonLd[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

// Standard-Graph für alle Seiten (global).
export function buildDefaultJsonLdGraph(args?: {
  path?: string;
  title?: string;
  description?: string;
}): JsonLd {
  const path = args?.path ?? "/";
  const title = args?.title ?? site.name;
  const nodes = [
    buildOrganizationJsonLd(),
    buildWebSiteJsonLd(),
    buildWebPageJsonLd({
      path,
      title,
      description: args?.description ?? site.description,
    }),
  ];

  if (path !== "/" && path !== "/404") {
    nodes.push(
      buildBreadcrumbJsonLd({
        items: [
          { name: "Startseite", path: "/" },
          { name: title.replace(/\s*\|.*$/, ""), path },
        ],
      }),
    );
  }

  return buildGraphJsonLd(nodes);
}
