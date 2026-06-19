import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: ReactNode;
}

const normalizeHref = (href: string) => {
  if (!href.startsWith("/") || href === "/" || href.includes("#") || href.includes("?")) {
    return href;
  }

  return href.endsWith("/") ? href : `${href}/`;
};

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={normalizeHref(href)} {...props}>
      {children}
    </a>
  );
}
