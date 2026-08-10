/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const p=getProject(slug);
  return p?{
    title:`${p.name} — étude de cas`,
    description:p.summary,
    openGraph:p.image?{images:[p.image]}:undefined,
  }:{title:"Projet"};
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=getProject(slug);
  if(!p)notFound();

  return <>
    <section className={`project-hero shell accent-${p.accent}`}>
      <div className="project-hero-copy">
        <span className="eyebrow">{p.eyebrow}</span>
        <h1>{p.name}</h1>
        <p className="summary">{p.summary}</p>
        <div className="status">Statut : {p.status}</div>
        <div className="tags hero-tags">{p.stack.slice(0,6).map(x=><span key={x}>{x}</span>)}</div>
      </div>
      {p.image && <div className="case-browser">
        <div className="browser-bar"><span/><span/><span/><small>{p.name}</small></div>
        <img src={p.image} alt={p.imageAlt ?? p.name}/>
      </div>}
    </section>

    <section className="section alt"><div className="shell detail-grid">
      <article className="card"><span className="eyebrow">Le problème</span><h2>Pourquoi ce produit existe</h2><p>{p.problem}</p></article>
      <article className="card"><span className="eyebrow">La réponse</span><h2>Solution produit</h2><p>{p.solution}</p></article>
    </div></section>

    <section className="section"><div className="shell detail-grid">
      <div><span className="eyebrow">Fonctionnel</span><h2>Ce que le produit démontre</h2><ul className="list">{p.features.map(x=><li key={x}>{x}</li>)}</ul></div>
      <div><span className="eyebrow">Exécution</span><h2>Stack & rôle</h2><div className="tags large-tags">{p.stack.map(x=><span key={x}>{x}</span>)}</div><h3>Mon rôle</h3><ul className="list">{p.role.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div></section>

    {p.gallery && p.gallery.length>0 && <section className="section alt"><div className="shell">
      <div className="section-title"><span className="eyebrow">Produit réel</span><h2>Captures de l’application</h2><p>Des écrans réels du produit. Le code source des produits reste privé et propriétaire.</p></div>
      <div className={`case-gallery ${p.gallery.length===1?"single":""}`}>
        {p.gallery.map(media=><figure key={media.src} className="case-shot"><div className="case-browser compact"><div className="browser-bar"><span/><span/><span/><small>{media.label}</small></div><img src={media.src} alt={media.alt} loading="lazy"/></div><figcaption>{media.label}</figcaption></figure>)}
      </div>
    </div></section>}

    <section className="section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Roadmap</span><h2>Ce qui vient ensuite</h2><p>La roadmap est volontairement séparée de ce qui est déjà construit afin de garder une présentation crédible.</p></div>
      <div className="grid two">{p.roadmap.map((x,i)=><article className="card" key={x}><span className="eyebrow">Étape {i+1}</span><h3>{x}</h3></article>)}</div>
    </div></section>

    <section className="section"><div className="shell cta"><div><span className="eyebrow">Mission ou recrutement 100 % remote</span><h2>Un besoin métier comparable ?</h2></div><Link className="btn" href="/contact">Échanger sur votre projet</Link></div></section>
  </>;
}
