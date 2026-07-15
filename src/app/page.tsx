import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/layout";
import { projects } from "@/data/projects";
import { method, services } from "@/data/site";

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy"><span className="eyebrow">Full Stack Product Builder</span><h1>Du besoin métier au <em>produit opérationnel.</em></h1><p>Je conçois des SaaS, applications métiers, plateformes multi-rôles, systèmes IA et automatisations de bout en bout.</p><div className="actions"><Link className="btn" href="/projets">Voir mes réalisations</Link><Link className="btn secondary" href="/contact">Parler d’un projet</Link></div><div className="proofs"><div><strong>5+</strong><span>années de pratique</span></div><div><strong>4</strong><span>produits SaaS majeurs</span></div><div><strong>360°</strong><span>produit, code et business</span></div></div></div>
      <div className="hero-visual"><span className="orbit o1">Produit</span><span className="orbit o2">Données</span><span className="orbit o3">IA</span><span className="orbit o4">Paiement</span><div className="hero-core"><div><strong>BUILD</strong><small>de bout en bout</small></div></div></div>
    </section>
    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Capacité globale" title="Comprendre, construire, lancer." text="Une approche complète qui relie métier, produit, données, technique, monétisation et adoption."/><div className="grid three"><article className="card"><span className="eyebrow">01 — Concevoir</span><h3>Structurer le bon produit</h3><p>Analyse métier, MVP, rôles, workflows, roadmap et architecture fonctionnelle.</p></article><article className="card"><span className="eyebrow">02 — Construire</span><h3>Développer les briques critiques</h3><p>Frontend, backend, données, sécurité, paiements, IA, automatisations et déploiement.</p></article><article className="card"><span className="eyebrow">03 — Piloter</span><h3>Transformer le plan en livraison</h3><p>Backlog, coordination, spécifications, QA, documentation et amélioration continue.</p></article></div></div></section>
    <section className="section"><div className="shell"><SectionTitle eyebrow="Études de cas" title="Des produits réels, des statuts transparents." text="Chaque projet distingue ce qui est opérationnel, ce qui est en stabilisation et ce qui relève de la roadmap."/><div className="grid two">{projects.slice(0,4).map(p=><ProjectCard key={p.slug} project={p}/>)}</div><div className="actions"><Link className="btn secondary" href="/projets">Voir tous les projets</Link></div></div></section>
    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Services" title="Intervenir là où le projet bloque."/><div className="grid two">{services.map((s,i)=><article className="card" key={s.title}><span className="eyebrow">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
    <section className="section"><div className="shell"><SectionTitle eyebrow="Méthode" title="Un chemin clair de l’idée au lancement."/><div>{method.slice(0,4).map(([n,t,d])=><div className="step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>
    <section className="section"><div className="shell cta"><div><span className="eyebrow">Votre prochain produit</span><h2>Passons du flou à une roadmap exécutable.</h2></div><Link className="btn" href="/contact">Démarrer le cadrage</Link></div></section>
  </>;
}
