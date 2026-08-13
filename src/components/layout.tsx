"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/site";

const cvPdf = "/documents/elie-leligny-cv-product-builder-full-stack.pdf";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="header">
      <div className="shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Accueil — Élie Leligny">
          <span>EL</span><div><strong>Élie Leligny</strong><small>Product Builder Full Stack</small></div>
        </Link>
        <button ref={menuButtonRef} type="button" className="menu-button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
        <nav id="main-navigation" className={open ? "nav open" : "nav"} aria-label="Navigation principale">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={isActive(href) ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="btn small" href="/contact" onClick={() => setOpen(false)}>Me contacter</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><strong>{site.name}</strong><p>{site.role} — {site.tagline}.</p><p className="remote-pill">{site.remote}</p></div>
        <div><span>Explorer</span><Link href="/projets">Projets</Link><Link href="/services">Services</Link><Link href="/competences">Compétences</Link><Link href="/entreprise">Livré d’un Clic SASU</Link><Link href="/cv">CV en ligne</Link><a href={cvPdf} download>CV PDF ↓</a></div>
        <div><span>Contact & preuves</span><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.malt} target="_blank" rel="noreferrer">Malt ↗</a></div>
      </div>
      <div className="shell footer-bottom"><small>© {new Date().getFullYear()} Livré d’un Clic SASU</small><small>Portfolio public — code produit propriétaire conservé en privé.</small></div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
