"use client";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type NextImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

const NextImage = ({ src, alt, width, height, className }: NextImageProps) => {
  return (
    <LazyLoadImage
      effect="blur"
      height={height}
      className={className || "rounded-md"}
      width={width}
      src={src}
      alt={alt}
    />
  );
};

export default NextImage;
