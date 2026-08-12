"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const INTRO_KEY = "portfolio:intro-seen";
const PROJECTS_KEY = "portfolio:visited-projects";
const CORE_PROJECTS = 4;
const chapterLabels = ["Intro", "Positionnement", "Projets", "Méthode", "Contact"];

type ExperienceState = {
  score: number;
  chapter: number;
  visible: boolean;
};

function burst(x: number, y: number, amount = 12) {
  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "fx-burst";
    const angle = (Math.PI * 2 * i) / amount + Math.random() * 0.25;
    const distance = 30 + Math.random() * 54;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);
    particle.animate([
      { transform: "translate(-50%, -50%) scale(1)", opacity: 0.65 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`, opacity: 0 },
    ], { duration: 560 + Math.random() * 180, easing: "cubic-bezier(.16,1,.3,1)" }).finished.finally(() => particle.remove());
  }
}

export function PremiumExperience() {
  const pathname = usePathname();
  const [intro, setIntro] = useState(false);
  const [visitedProjects, setVisitedProjects] = useState(0);
  const [experience, setExperience] = useState<ExperienceState>({ score: 0, chapter: 0, visible: false });
  const experienceRef = useRef(experience);

  useEffect(() => {
    experienceRef.current = experience;
  }, [experience]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || sessionStorage.getItem(INTRO_KEY)) return;

    sessionStorage.setItem(INTRO_KEY, "1");
    const frame = window.requestAnimationFrame(() => setIntro(true));
    const timer = window.setTimeout(() => setIntro(false), 1350);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const readVisited = () => {
      try {
        const items = JSON.parse(localStorage.getItem(PROJECTS_KEY) ?? "[]") as string[];
        setVisitedProjects(items.length);
      } catch {
        setVisitedProjects(0);
      }
    };

    readVisited();
    const onVisited = (event: Event) => {
      const detail = (event as CustomEvent<string[]>).detail;
      const next = Array.isArray(detail) ? detail.length : 0;
      setVisitedProjects(next);
      if (next >= CORE_PROJECTS && !sessionStorage.getItem(`${PROJECTS_KEY}:burst`)) {
        sessionStorage.setItem(`${PROJECTS_KEY}:burst`, "1");
        window.setTimeout(() => burst(window.innerWidth / 2, window.innerHeight * 0.72), 120);
      }
    };
    window.addEventListener("portfolio:project-visited", onVisited);
    return () => window.removeEventListener("portfolio:project-visited", onVisited);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const disposers: Array<() => void> = [];

    let pointerFrame = 0;
    let latestX = 0;
    let latestY = 0;
    const onPointer = (event: PointerEvent) => {
      if (!finePointer || reduceMotion) return;
      latestX = event.clientX;
      latestY = event.clientY;
      if (pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${latestX}px`);
        root.style.setProperty("--pointer-y", `${latestY}px`);
        root.style.setProperty("--cursor-x", `${latestX}px`);
        root.style.setProperty("--cursor-y", `${latestY}px`);
        pointerFrame = 0;
      });
    };

    if (finePointer && !reduceMotion) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      disposers.push(() => {
        window.removeEventListener("pointermove", onPointer);
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      });

      const magnetic = Array.from(document.querySelectorAll<HTMLElement>(".btn, .text-link, .gallery-trigger"));
      magnetic.forEach((element) => {
        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          element.style.setProperty("--mag-x", `${(event.clientX - rect.left - rect.width / 2) * 0.1}px`);
          element.style.setProperty("--mag-y", `${(event.clientY - rect.top - rect.height / 2) * 0.1}px`);
        };
        const leave = () => {
          element.style.setProperty("--mag-x", "0px");
          element.style.setProperty("--mag-y", "0px");
        };
        element.addEventListener("pointermove", move, { passive: true });
        element.addEventListener("pointerleave", leave);
        disposers.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });

      const tiltTargets = Array.from(document.querySelectorAll<HTMLElement>(".project-card, .audience-card, .premium-system-card, .case-browser"));
      tiltTargets.forEach((element) => {
        element.classList.add("fx-tilt");
        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          element.style.setProperty("--fx-rx", `${(0.5 - py) * 4.5}deg`);
          element.style.setProperty("--fx-ry", `${(px - 0.5) * 6}deg`);
          element.style.setProperty("--fx-x", `${px * 100}%`);
          element.style.setProperty("--fx-y", `${py * 100}%`);
        };
        const leave = () => {
          element.style.setProperty("--fx-rx", "0deg");
          element.style.setProperty("--fx-ry", "0deg");
          element.style.setProperty("--fx-x", "50%");
          element.style.setProperty("--fx-y", "50%");
        };
        element.addEventListener("pointermove", move, { passive: true });
        element.addEventListener("pointerleave", leave);
        disposers.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });
    }

    let scrollFrame = 0;
    const updateScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      const score = Math.round(progress);
      const chapter = Math.min(chapterLabels.length - 1, Math.floor((progress / 100) * chapterLabels.length));
      const visible = window.scrollY > 180;

      root.style.setProperty("--scroll-progress", `${progress}%`);
      root.style.setProperty("--parallax-y", `${Math.min(30, window.scrollY * 0.03)}px`);
      root.style.setProperty("--parallax-y-inverse", `${Math.max(-24, window.scrollY * -0.02)}px`);

      const current = experienceRef.current;
      if (current.score !== score || current.chapter !== chapter || current.visible !== visible) {
        const next = { score, chapter, visible };
        experienceRef.current = next;
        setExperience(next);
      }
      scrollFrame = 0;
    };
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();
    disposers.push(() => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    });

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(
      ".section, .project-card, .card, .premium-method-step, .section-title, .project-hero, .page-intro, .stack-strip"
    ));
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 4) * 50, 150)}ms`);
    });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });
    revealTargets.forEach((element) => revealObserver.observe(element));
    disposers.push(() => revealObserver.disconnect());

    if (!reduceMotion) {
      const counters = Array.from(document.querySelectorAll<HTMLElement>(".premium-proofs strong"));
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          if (element.dataset.animated === "true") return;
          const original = element.textContent ?? "";
          const number = Number(original.replace(/[^0-9]/g, ""));
          if (!number) return;
          element.dataset.animated = "true";
          const suffix = original.replace(/[0-9]/g, "");
          const started = performance.now();
          const animate = (time: number) => {
            const p = Math.min(1, (time - started) / 800);
            element.textContent = `${Math.round(number * (1 - Math.pow(1 - p, 3)))}${suffix}`;
            if (p < 1) window.requestAnimationFrame(animate);
          };
          window.requestAnimationFrame(animate);
          counterObserver.unobserve(element);
        });
      }, { threshold: 0.7 });
      counters.forEach((item) => counterObserver.observe(item));
      disposers.push(() => counterObserver.disconnect());
    }

    return () => disposers.forEach((dispose) => dispose());
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="pointer-aura" aria-hidden="true" />
      <div className="fx-cursor fx-cursor-dot" aria-hidden="true" />
      <div className="fx-cursor fx-cursor-ring" aria-hidden="true" />
      <div className="fx-noise" aria-hidden="true" />

      <aside className={`experience-hud ${experience.visible ? "show" : ""}`} aria-label="Progression dans le portfolio">
        <div className="experience-ring" style={{ "--score": `${experience.score * 3.6}deg` } as React.CSSProperties}>
          <strong>{experience.score}</strong><small>%</small>
        </div>
        <div className="experience-copy">
          <span>Exploration</span>
          <strong>{chapterLabels[experience.chapter]}</strong>
          <small>{Math.min(visitedProjects, CORE_PROJECTS)} / {CORE_PROJECTS} études majeures</small>
        </div>
      </aside>

      {visitedProjects >= CORE_PROJECTS && <div className="exploration-complete" role="status"><span>Portfolio exploré</span><strong>4 études majeures découvertes</strong></div>}
      {intro && <div className="fx-intro" aria-hidden="true"><div className="fx-intro-inner"><span>EL</span><strong>Élie Leligny</strong><small>Product Builder Full Stack</small></div></div>}
    </>
  );
}
