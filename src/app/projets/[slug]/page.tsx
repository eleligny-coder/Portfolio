import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectVisitTracker } from "@/components/project-visit-tracker";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const p=getProject(slug);
  return p?{
    title:`${p.name} — étude de cas`,
    description:p.summary,
    alternates:{canonical:`/projets/${p.slug}`},
    openGraph:p.image?{title:`${p.name} — étude de cas`,description:p.summary,images:[p.image],url:`/projets/${p.slug}`}:undefined,
  }:{title:"Projet"};
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=getProject(slug);
  if(!p)notFound();

  return <>
    <ProjectVisitTracker slug={p.slug}/>
    <section className={`project-hero shell accent-${p.accent}`}>
      <div className="project-hero-copy">
        <span className="eyebrow">{p.eyebrow}</span>
        <h1>{p.name}</h1>
        <p className="summary">{p.summary}</p>
        <div className="project-meta-row"><div className="status">Statut : {p.status}</div><span className="private-code-badge">Dépôt applicatif privé</span></div>
        <div className="tags hero-tags">{p.stack.slice(0,6).map(x=><span key={x}>{x}</span>)}</div>
        {p.languages && <div className="language-proof">{p.languages.map(x=><strong key={x}>{x}</strong>)}</div>}
      </div>
      {p.image && <div className="case-browser project-cover">
        <div className="browser-bar"><span/><span/><span/><small>{p.name}</small></div>
        <Image src={p.image} alt={p.imageAlt ?? p.name} width={1600} height={900} sizes="(max-width: 900px) 100vw, 720px" priority/>
      </div>}
    </section>

    <section className="project-proof-strip"><div className="shell">
      <span>Étude de cas réelle</span><span>Architecture expliquée</span><span>Captures produit</span><span>Roadmap séparée du construit</span>
    </div></section>

    <section className="section alt"><div className="shell detail-grid">
      <article className="card"><span className="eyebrow">Le problème</span><h2>Pourquoi ce produit existe</h2><p>{p.problem}</p></article>
      <article className="card"><span className="eyebrow">La réponse</span><h2>Solution produit</h2><p>{p.solution}</p></article>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Décision produit</span><h2>Du problème à une architecture exploitable.</h2><p>Une lecture rapide pour comprendre le raisonnement produit sans noyer l’étude de cas dans la technique.</p></div>
      <div className="decision-grid">
        <article className="decision-step"><span>01 — Défi</span><h3>{p.problem}</h3></article>
        <article className="decision-step"><span>02 — Décision</span><h3>{p.solution}</h3></article>
        <article className="decision-step"><span>03 — Preuves</span><h3>{p.features.slice(0,3).join(" · ")}</h3></article>
      </div>
    </div></section>

    <section className="section"><div className="shell detail-grid">
      <div><span className="eyebrow">Fonctionnel</span><h2>Ce que le produit démontre</h2><ul className="list">{p.features.map(x=><li key={x}>{x}</li>)}</ul></div>
      <div><span className="eyebrow">Exécution</span><h2>Stack & rôle</h2><div className="tags large-tags">{p.stack.map(x=><span key={x}>{x}</span>)}</div><h3>Mon rôle</h3><ul className="list">{p.role.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div></section>

    {p.architecture && p.architecture.length>0 && <section className="section architecture-section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Architecture</span><h2>Comment les briques s’assemblent.</h2><p>Vue simplifiée de l’architecture pour montrer le flux produit sans exposer le code propriétaire ni les secrets d’infrastructure.</p></div>
      <div className="architecture-flow">{p.architecture.map((layer,index)=><article className="architecture-node" key={layer.label}>
        <span className="architecture-index">{String(index+1).padStart(2,"0")}</span>
        <h3>{layer.label}</h3>
        <div>{layer.items.map(item=><span key={item}>{item}</span>)}</div>
      </article>)}</div>
    </div></section>}

    {p.gallery && p.gallery.length>0 && <section className="section alt"><div className="shell">
      <div className="section-title"><span className="eyebrow">Produit réel</span><h2>Captures de l’application</h2><p>Cliquez sur une capture pour l’ouvrir en grand. Les écrans sont réels ; les dépôts applicatifs et secrets d’infrastructure restent privés.</p></div>
      <ProjectGallery media={p.gallery} projectName={p.name}/>
    </div></section>}

    <section className="section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Roadmap</span><h2>Ce qui vient ensuite</h2><p>La roadmap est volontairement séparée de ce qui est déjà construit afin de garder une présentation crédible.</p></div>
      <div className="grid two">{p.roadmap.map((x,i)=><article className="card roadmap-card" key={x}><span className="eyebrow">Étape {i+1}</span><h3>{x}</h3></article>)}</div>
    </div></section>

    <section className="section"><div className="shell cta premium-cta"><div><span className="eyebrow">Mission ou recrutement 100 % remote</span><h2>Un besoin métier comparable ?</h2><p>Je peux cadrer, reprendre ou construire un produit complexe de bout en bout, avec une vision produit et technique.</p></div><div className="actions"><Link className="btn" href="/contact">Échanger sur votre projet</Link><Link className="btn secondary" href="/cv">Voir mon CV</Link></div></div></section>
  </>;
}
