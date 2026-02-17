import React from "react";

/**
 * Rendert JSON-LD sicher als <script type="application/ld+json">.
 *
 * Wichtig: immer JSON.stringify verwenden (kein Template-String),
 * damit keine Sonderzeichen/Quotes kaputt gehen.
 */
export function JsonLd({ data, id }: { data: Record<string, unknown>; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
       
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
