"use client";

/* eslint-disable @next/next/no-img-element -- Static export: strict viewport-driven loading avoids downloading every project screenshot during initial render. */

import { useEffect, useRef, useState } from "react";

type DeferredProjectImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function DeferredProjectImage({ src, alt, width, height }: DeferredProjectImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(image);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : undefined}
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
