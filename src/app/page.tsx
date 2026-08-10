import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/layout";
import { projects } from "@/data/projects";
import { method, services } from "@/data/site";

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy">
        <span className="eyebrow">Product Builder Full Stack — 100 % remote</span>
        <h1>Je transforme des besoins métier en <em>SaaS, CRM et produits IA.</em></h1>
        <p>De l’analyse du besoin au déploiement : architecture, Full Stack, données, Stripe, automatisation, IA, QA et documentation.</p>
        <div className="actions"><Link className="btn" href="/projets">Voir mes réalisations</Link><Link className="btn secondary" href="/contact">Parler d’un projet</Link></div>
        <div className="proofs"><div><strong>5+</strong><span>années de pratique</span></div><div><strong>4</strong><span>produits SaaS majeurs</span></div><div><strong>100+</strong><span>agents IA conçus / orchestrés</span></div></div>
      </div>
      <div className="hero-visual"><span className="orbit o1">Produit</span><span className="orbit o2">CRM</span><span className="orbit o3">IA</span><span className="orbit o4">Cloud</span><div className="hero-core"><div><strong>BUILD</strong><small>de bout en bout</small></div></div></div>
    </section>

    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Capacité globale" title="Comprendre, architecturer, construire, déployer." text="Une approche qui relie métier, produit, code, données, CRM, monétisation et automatisation."/><div className="grid three"><article className="card"><span className="eyebrow">01 — Structurer</span><h3>Transformer le besoin en système</h3><p>Analyse métier, MVP, rôles, workflows, CRM, roadmap et architecture fonctionnelle.</p></article><article className="card"><span className="eyebrow">02 — Construire</span><h3>Développer les briques critiques</h3><p>Frontend, backend, données, sécurité, Stripe, IA, automatisations et intégrations API.</p></article><article className="card"><span className="eyebrow">03 — Livrer</span><h3>Passer du code au produit exploitable</h3><p>QA, documentation, déploiement Railway/Vercel, monitoring, priorisation et amélioration continue.</p></article></div></div></section>

    <section className="section"><div className="shell"><SectionTitle eyebrow="Études de cas" title="Des produits réels, des statuts transparents." text="Les dépôts produits restent privés : les études de cas montrent les architectures, fonctionnalités et stacks sans exposer le code propriétaire."/><div className="grid two">{projects.slice(0,4).map(p=><ProjectCard key={p.slug} project={p}/>)}</div><div className="actions"><Link className="btn secondary" href="/projets">Voir tous les projets</Link></div></div></section>

    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Services" title="Construire ou débloquer un produit numérique."/><div className="grid two">{services.map((s,i)=><article className="card" key={s.title}><span className="eyebrow">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>

    <section className="section"><div className="shell"><SectionTitle eyebrow="Méthode" title="Un chemin clair du besoin au déploiement."/><div>{method.slice(0,4).map(([n,t,d])=><div className="step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

    <section className="section"><div className="shell cta"><div><span className="eyebrow">Mission ou recrutement 100 % remote</span><h2>Besoin d’un profil capable de relier produit, business et technique ?</h2></div><Link className="btn" href="/contact">Me contacter</Link></div></section>
  </>;
}
