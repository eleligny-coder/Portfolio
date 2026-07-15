import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects,getProject } from "@/data/projects";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return p?{title:p.name,description:p.summary}:{title:"Projet"}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProject(slug);if(!p)notFound();return <>
<section className={`project-hero shell accent-${p.accent}`}><span className="eyebrow">{p.eyebrow}</span><h1>{p.name}</h1><p className="summary">{p.summary}</p><div className="status">Statut : {p.status}</div></section>
<section className="section alt"><div className="shell detail-grid"><article className="card"><span className="eyebrow">Le problème</span><h2>Pourquoi ce produit existe</h2><p>{p.problem}</p></article><article className="card"><span className="eyebrow">La solution</span><h2>Réponse produit</h2><p>{p.solution}</p></article></div></section>
<section className="section"><div className="shell detail-grid"><div><h2>Fonctionnalités clés</h2><ul className="list">{p.features.map(x=><li key={x}>{x}</li>)}</ul></div><div><h2>Stack technique</h2><div className="tags">{p.stack.map(x=><span key={x}>{x}</span>)}</div><h2>Mon rôle</h2><ul className="list">{p.role.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
<section className="section alt"><div className="shell"><h2>Roadmap séparée du fonctionnel</h2><div className="grid two">{p.roadmap.map((x,i)=><article className="card" key={x}><span className="eyebrow">Étape {i+1}</span><h3>{x}</h3></article>)}</div></div></section>
<section className="section"><div className="shell cta"><div><span className="eyebrow">Étude de cas</span><h2>Un besoin métier similaire ?</h2></div><Link className="btn" href="/contact">Échanger sur votre projet</Link></div></section></>}
