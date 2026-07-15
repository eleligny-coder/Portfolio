"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Retour à l’accueil">
          <span>EL</span>
          <strong>Élie Leligny</strong>
        </Link>
        <button className="menu-button" aria-expanded={open} aria-controls="main-navigation" aria-label="Ouvrir le menu" onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav id="main-navigation" className={open ? "nav open" : "nav"} aria-label="Navigation principale">
          {nav.map(([label, href]) => {
            const active = href === "/" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>;
          })}
          <Link className="btn small" href="/contact" onClick={() => setOpen(false)}>Parler d’un projet</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const optionalLinks = [
    site.linkedin ? ["LinkedIn", site.linkedin] : null,
    site.malt ? ["Malt", site.malt] : null,
  ].filter(Boolean) as [string, string][];

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <strong>{site.name}</strong>
          <p>Full Stack Product Builder — SaaS, IA, automatisation, applications métiers et pilotage produit.</p>
        </div>
        <div>
          <span>Explorer</span>
          <Link href="/projets">Projets</Link>
          <Link href="/services">Services</Link>
          <Link href="/formations">Formations</Link>
          <Link href="/cv">CV en ligne</Link>
        </div>
        <div>
          <span>Structure</span>
          <Link href="/societe">Livré d’un Clic SASU</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <span>Contact</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          {optionalLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}
        </div>
      </div>
      <div className="shell footer-bottom">
        <small>© {new Date().getFullYear()} {site.company}</small>
        <div className="legal-links"><Link href="/mentions-legales">Mentions légales</Link><Link href="/confidentialite">Confidentialité</Link></div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, text, actions }: { eyebrow: string; title: string; text: string; actions?: React.ReactNode }) {
  return <section className="page-intro shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{actions && <div className="actions">{actions}</div>}</section>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function StatusBadge({ children }: { children: React.ReactNode }) {
  return <div className="status"><span aria-hidden="true" />{children}</div>;
}
