"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const chapterLabels = ["Intro", "Positionnement", "Projets", "Méthode", "Contact"];
const STORAGE_KEY = "portfolio:visited-projects";
const CORE_PROJECTS = 4;

export function PremiumExperience() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visitedProjects, setVisitedProjects] = useState(0);

  const score = useMemo(() => Math.min(100, Math.round(progress)), [progress]);

  useEffect(() => {
    const readVisited = () => {
      try {
        const items = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
        setVisitedProjects(items.length);
      } catch {
        setVisitedProjects(0);
      }
    };

    readVisited();
    const onVisited = (event: Event) => {
      const detail = (event as CustomEvent<string[]>).detail;
      setVisitedProjects(Array.isArray(detail) ? detail.length : 0);
    };
    window.addEventListener("portfolio:project-visited", onVisited);
    return () => window.removeEventListener("portfolio:project-visited", onVisited);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer:fine)").matches;

    const onPointer = (event: PointerEvent) => {
      if (!finePointer) return;
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(next);
      setVisible(window.scrollY > 180);
      setChapter(Math.min(chapterLabels.length - 1, Math.floor((next / 100) * chapterLabels.length)));
      root.style.setProperty("--scroll-progress", `${next}%`);
    };

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(
      ".section, .project-card, .card, .premium-method-step, .section-title, .project-hero, .page-intro, .stack-strip"
    ));

    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 55, 220)}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealTargets.forEach((element) => observer.observe(element));
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="pointer-aura" aria-hidden="true" />
      <aside className={`experience-hud ${visible ? "show" : ""}`} aria-label="Progression dans le portfolio">
        <div className="experience-ring" style={{ "--score": `${score * 3.6}deg` } as React.CSSProperties}>
          <strong>{score}</strong><small>%</small>
        </div>
        <div className="experience-copy">
          <span>Exploration</span>
          <strong>{chapterLabels[chapter]}</strong>
          <small>{Math.min(visitedProjects, CORE_PROJECTS)} / {CORE_PROJECTS} études majeures</small>
        </div>
      </aside>
      {visitedProjects >= CORE_PROJECTS && <div className="exploration-complete" role="status"><span>Portfolio exploré</span><strong>4 études majeures découvertes</strong></div>}
    </>
  );
}
