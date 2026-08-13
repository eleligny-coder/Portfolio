"use client";

/* eslint-disable @next/next/no-img-element -- Static export: strict viewport-driven loading avoids downloading every project screenshot during initial render. */

import { useEffect, useRef } from "react";

type DeferredProjectImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function DeferredProjectImage({ src, alt, width, height }: DeferredProjectImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const load = () => {
      if (!image.getAttribute("src")) image.setAttribute("src", src);
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        load();
        observer.disconnect();
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imageRef}
      data-src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  );
}
