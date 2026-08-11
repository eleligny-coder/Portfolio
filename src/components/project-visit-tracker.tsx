"use client";

import { useEffect } from "react";

const STORAGE_KEY = "portfolio:visited-projects";

export function ProjectVisitTracker({ slug }: { slug: string }) {
  useEffect(() => {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as string[];
      const next = Array.from(new Set([...current, slug]));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new CustomEvent("portfolio:project-visited", { detail: next }));
    } catch {
      // Progressive enhancement only: storage can be unavailable in private contexts.
    }
  }, [slug]);

  return null;
}
