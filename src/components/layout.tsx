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
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span>EL</span><div><strong>Élie Leligny</strong><small>Product Builder Full Stack</small></div>
        </Link>
        <button className="menu-button" aria-expanded={open} aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
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
        <div><span>Explorer</span><Link href="/projets">Projets</Link><Link href="/services">Services</Link><Link href="/competences">Compétences</Link><Link href="/cv">CV</Link></div>
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
