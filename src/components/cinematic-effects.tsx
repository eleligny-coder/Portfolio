"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const INTRO_KEY = "portfolio:intro-seen";
const PROJECTS_KEY = "portfolio:visited-projects";

function burst(x: number, y: number, amount = 7) {
  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "fx-burst";
    const angle = (Math.PI * 2 * i) / amount + Math.random() * 0.35;
    const distance = 26 + Math.random() * 40;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);
    particle.animate([
      { transform: "translate(-50%, -50%) scale(1)", opacity: 0.75 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`, opacity: 0 },
    ], { duration: 520 + Math.random() * 220, easing: "cubic-bezier(.16,1,.3,1)" }).finished.finally(() => particle.remove());
  }
}

export function CinematicEffects() {
  const pathname = usePathname();
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion && !sessionStorage.getItem(INTRO_KEY)) {
      setIntro(true);
      sessionStorage.setItem(INTRO_KEY, "1");
      const timer = window.setTimeout(() => setIntro(false), 1450);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion) return;

    const disposers: Array<() => void> = [];
    let lastTrail = 0;

    if (finePointer) {
      const magnetic = Array.from(document.querySelectorAll<HTMLElement>(".btn, .text-link, .gallery-trigger"));
      magnetic.forEach((element) => {
        const move = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
          element.style.setProperty("--mag-x", `${x}px`);
          element.style.setProperty("--mag-y", `${y}px`);
        };
        const leave = () => {
          element.style.setProperty("--mag-x", "0px");
          element.style.setProperty("--mag-y", "0px");
        };
        element.addEventListener("pointermove", move);
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
          const rotateY = (px - 0.5) * 8;
          const rotateX = (0.5 - py) * 6;
          element.style.setProperty("--fx-rx", `${rotateX}deg`);
          element.style.setProperty("--fx-ry", `${rotateY}deg`);
          element.style.setProperty("--fx-x", `${px * 100}%`);
          element.style.setProperty("--fx-y", `${py * 100}%`);
        };
        const leave = () => {
          element.style.setProperty("--fx-rx", "0deg");
          element.style.setProperty("--fx-ry", "0deg");
          element.style.setProperty("--fx-x", "50%");
          element.style.setProperty("--fx-y", "50%");
        };
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        disposers.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
        });
      });

      const pointer = (event: PointerEvent) => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
        const now = performance.now();
        if (now - lastTrail > 42) {
          lastTrail = now;
          const dot = document.createElement("span");
          dot.className = "fx-trail";
          dot.style.left = `${event.clientX}px`;
          dot.style.top = `${event.clientY}px`;
          document.body.appendChild(dot);
          dot.animate([
            { opacity: 0.32, transform: "translate(-50%,-50%) scale(1)" },
            { opacity: 0, transform: "translate(-50%,-50%) scale(.2)" },
          ], { duration: 460, easing: "ease-out" }).finished.finally(() => dot.remove());
        }
      };
      window.addEventListener("pointermove", pointer, { passive: true });
      disposers.push(() => window.removeEventListener("pointermove", pointer));
    }

    const clickable = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest(".btn, .project-card, .gallery-trigger")) return;
      burst(event.clientX, event.clientY, 6);
    };
    window.addEventListener("click", clickable);
    disposers.push(() => window.removeEventListener("click", clickable));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        document.documentElement.style.setProperty("--parallax-y", `${Math.min(34, y * 0.035)}px`);
        document.documentElement.style.setProperty("--parallax-y-inverse", `${Math.max(-28, y * -0.025)}px`);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    disposers.push(() => window.removeEventListener("scroll", onScroll));

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
        const duration = 900;
        const animate = (time: number) => {
          const p = Math.min(1, (time - started) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          element.textContent = `${Math.round(number * eased)}${suffix}`;
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        counterObserver.unobserve(element);
      });
    }, { threshold: 0.7 });
    counters.forEach((item) => counterObserver.observe(item));
    disposers.push(() => counterObserver.disconnect());

    const visitedListener = (event: Event) => {
      const detail = (event as CustomEvent<string[]>).detail;
      if (Array.isArray(detail) && detail.length >= 4 && !sessionStorage.getItem(`${PROJECTS_KEY}:burst`)) {
        sessionStorage.setItem(`${PROJECTS_KEY}:burst`, "1");
        window.setTimeout(() => burst(window.innerWidth / 2, window.innerHeight * 0.72, 16), 120);
      }
    };
    window.addEventListener("portfolio:project-visited", visitedListener);
    disposers.push(() => window.removeEventListener("portfolio:project-visited", visitedListener));

    return () => disposers.forEach((dispose) => dispose());
  }, [pathname]);

  return <>
    <div className="fx-cursor fx-cursor-dot" aria-hidden="true" />
    <div className="fx-cursor fx-cursor-ring" aria-hidden="true" />
    <div className="fx-noise" aria-hidden="true" />
    {intro && <div className="fx-intro" aria-hidden="true"><div className="fx-intro-inner"><span>EL</span><strong>Élie Leligny</strong><small>Product Builder Full Stack</small></div></div>}
  </>;
}
