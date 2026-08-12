"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectMedia } from "@/data/projects";

export function ProjectGallery({ media, projectName, projectStatus }: { media: ProjectMedia[]; projectName: string; projectStatus: string }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const open = (index: number) => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActive(index);
  };

  const close = useCallback(() => {
    setActive(null);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
  }, []);

  useEffect(() => {
    if (active === null) return;

    const dialog = dialogRef.current;
    const focusables = () => Array.from(dialog?.querySelectorAll<HTMLElement>("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])") ?? []);
    const initialFocus = window.requestAnimationFrame(() => focusables()[0]?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((active + 1) % media.length);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((active - 1 + media.length) % media.length);
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(initialFocus);
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, media.length]);

  return <>
    <div className="status">Statut du projet : {projectStatus}</div>
    <div className={`case-gallery ${media.length === 1 ? "single" : ""}`}>
      {media.map((item, index) => <figure key={item.src} className="case-shot">
        <button className="gallery-trigger" type="button" onClick={() => open(index)} aria-label={`Agrandir ${item.label}`}>
          <div className="case-browser compact">
            <div className="browser-bar"><span/><span/><span/><small>{item.label}</small></div>
            <Image src={item.src} alt={item.alt} width={1600} height={900} sizes="(max-width: 900px) 100vw, 580px" />
          </div>
          <span className="gallery-zoom">Agrandir ↗</span>
        </button>
        <figcaption>{item.label}</figcaption>
      </figure>)}
    </div>

    {active !== null && <div ref={dialogRef} className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Galerie ${projectName}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <button className="gallery-close" type="button" onClick={close} aria-label="Fermer">×</button>
      {media.length > 1 && <button className="gallery-nav gallery-prev" type="button" onClick={() => setActive((active - 1 + media.length) % media.length)} aria-label="Image précédente">←</button>}
      <div className="gallery-lightbox-content">
        <div className="case-browser lightbox-browser">
          <div className="browser-bar"><span/><span/><span/><small>{media[active].label}</small></div>
          <Image src={media[active].src} alt={media[active].alt} width={1800} height={1013} sizes="94vw" priority />
        </div>
        <div className="gallery-lightbox-caption"><strong>{media[active].label} · {projectStatus}</strong></div>
      </div>
      {media.length > 1 && <button className="gallery-nav gallery-next" type="button" onClick={() => setActive((active + 1) % media.length)} aria-label="Image suivante">→</button>}
    </div>}
  </>;
}
