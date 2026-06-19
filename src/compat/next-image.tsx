import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageSource = string | { src: string; width?: number; height?: number };

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: ImageSource;
  loader?: (props: { src: string; width: number; quality?: number }) => string;
  priority?: boolean;
  unoptimized?: boolean;
  fill?: boolean;
  quality?: number;
  sizes?: string;
  style?: CSSProperties;
}

const getImageSrc = (src: ImageSource) => (typeof src === "string" ? src : src.src);

export default function Image({
  src,
  loader,
  priority,
  unoptimized,
  fill,
  quality,
  width,
  height,
  loading,
  style,
  ...props
}: ImageProps) {
  const rawSrc = getImageSrc(src);
  const numericWidth = typeof width === "number" ? width : Number(width ?? 0);
  const resolvedSrc = loader ? loader({ src: rawSrc, width: numericWidth, quality }) : rawSrc;

  return (
    <img
      {...props}
      src={resolvedSrc}
      width={width}
      height={height}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={priority ? "sync" : "async"}
      style={
        fill ? { ...style, position: "absolute", inset: 0, width: "100%", height: "100%" } : style
      }
    />
  );
}
