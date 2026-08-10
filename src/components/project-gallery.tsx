"use client";

import { useEffect, useState } from "react";
import type { ProjectMedia } from "@/data/projects";

export function ProjectGallery({ media, projectName }: { media: ProjectMedia[]; projectName: string }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % media.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + media.length) % media.length);
    };
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, media.length]);

  return <>
    <div className={`case-gallery ${media.length === 1 ? "single" : ""}`}>
      {media.map((item, index) => <figure key={item.src} className="case-shot">
        <button className="gallery-trigger" type="button" onClick={() => setActive(index)} aria-label={`Agrandir ${item.label}`}>
          <div className="case-browser compact">
            <div className="browser-bar"><span/><span/><span/><small>{item.label}</small></div>
            <img src={item.src} alt={item.alt} loading="lazy"/>
          </div>
          <span className="gallery-zoom">Agrandir ↗</span>
        </button>
        <figcaption>{item.label}</figcaption>
      </figure>)}
    </div>

    {active !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Galerie ${projectName}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      <button className="gallery-close" type="button" onClick={() => setActive(null)} aria-label="Fermer">×</button>
      {media.length > 1 && <button className="gallery-nav gallery-prev" type="button" onClick={() => setActive((active - 1 + media.length) % media.length)} aria-label="Image précédente">←</button>}
      <div className="gallery-lightbox-content">
        <div className="case-browser lightbox-browser">
          <div className="browser-bar"><span/><span/><span/><small>{media[active].label}</small></div>
          <img src={media[active].src} alt={media[active].alt}/>
        </div>
        <div className="gallery-lightbox-caption"><strong>{media[active].label}</strong><span>{active + 1} / {media.length}</span></div>
      </div>
      {media.length > 1 && <button className="gallery-nav gallery-next" type="button" onClick={() => setActive((active + 1) % media.length)} aria-label="Image suivante">→</button>}
    </div>}
  </>;
}
