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
      <span>Étude de cas documentée</span><span>Architecture expliquée</span><span>Captures du projet</span><span>Roadmap séparée du construit</span>
    </div></section>

    <section className="section alt"><div className="shell detail-grid">
      <article className="card"><span className="eyebrow">Le problème</span><h2>Pourquoi ce produit existe</h2><p>{p.problem}</p></article>
      <article className="card"><span className="eyebrow">La réponse</span><h2>Solution produit</h2><p>{p.solution}</p></article>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Décision produit</span><h2>Du problème à une architecture exploitable.</h2><p>Une lecture rapide pour comprendre le raisonnement produit sans noyer l’étude de cas dans la technique.</p></div>
      <div className="decision-grid">
        <article className="decision-step"><span>Défi</span><h3>{p.problem}</h3></article>
        <article className="decision-step"><span>Décision</span><h3>{p.solution}</h3></article>
        <article className="decision-step"><span>Preuves</span><h3>{p.features.slice(0,3).join(" · ")}</h3></article>
      </div>
    </div></section>

    <section className="section"><div className="shell detail-grid">
      <div><span className="eyebrow">Fonctionnel</span><h2>Ce qui est déjà documenté</h2><ul className="list">{p.features.map(x=><li key={x}>{x}</li>)}</ul></div>
      <div><span className="eyebrow">Exécution</span><h2>Stack & rôle</h2><div className="tags large-tags">{p.stack.map(x=><span key={x}>{x}</span>)}</div><h3>Mon rôle</h3><ul className="list">{p.role.map(x=><li key={x}>{x}</li>)}</ul></div>
    </div></section>

    {p.architecture && p.architecture.length>0 && <section className="section architecture-section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Architecture</span><h2>Comment les briques s’assemblent.</h2><p>Vue simplifiée de l’architecture pour montrer le flux produit sans exposer le code propriétaire ni les secrets d’infrastructure.</p></div>
      <div className="architecture-flow">{p.architecture.map(layer=><article className="architecture-node" key={layer.label}>
        <h3>{layer.label}</h3>
        <div>{layer.items.map(item=><span key={item}>{item}</span>)}</div>
      </article>)}</div>
    </div></section>}

    {p.gallery && p.gallery.length>0 && <section className="section alt"><div className="shell">
      <div className="section-title"><span className="eyebrow">Preuves visuelles</span><h2>Captures du projet</h2><p>Les captures proviennent des interfaces du projet. Le statut affiché précise sa maturité actuelle ; les dépôts applicatifs et secrets d’infrastructure restent privés.</p></div>
      <ProjectGallery media={p.gallery} projectName={p.name} projectStatus={p.status}/>
    </div></section>}

    <section className="section"><div className="shell detail-grid">
      <article className="card"><span className="eyebrow">Preuves disponibles</span><h2>Ce que ce portfolio permet de vérifier</h2><ul className="list"><li>Le statut actuel du projet est affiché sans masquer son niveau de maturité.</li><li>Les captures disponibles montrent les interfaces présentées dans l’étude de cas.</li><li>La stack, l’architecture simplifiée et mon rôle sont explicités.</li><li>Le construit et la roadmap sont présentés dans des sections séparées.</li></ul></article>
      <article className="card"><span className="eyebrow">Limites de preuve</span><h2>Ce que je ne présente pas comme acquis</h2><p>Le dépôt applicatif est propriétaire et reste privé. Une capture d’interface ne remplace pas une métrique d’usage, un témoignage client ou un résultat commercial : ces éléments ne sont ajoutés que lorsqu’ils sont réellement vérifiables.</p></article>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-title"><span className="eyebrow">Roadmap</span><h2>Ce qui vient ensuite</h2><p>La roadmap est volontairement séparée de ce qui est déjà construit afin de garder une présentation crédible.</p></div>
      <div className="grid two">{p.roadmap.map(x=><article className="card roadmap-card" key={x}><span className="eyebrow">À venir</span><h3>{x}</h3></article>)}</div>
    </div></section>

    <section className="section result-section"><div className="shell case-result">
      <span className="eyebrow">Résultat actuel</span>
      <h2>Ce qui a réellement été obtenu.</h2>
      <p>{p.result}</p>
      <div className="status">{p.status}</div>
    </div></section>

    <section className="section"><div className="shell cta premium-cta"><div><span className="eyebrow">Mission ou recrutement 100 % remote</span><h2>Un besoin métier comparable ?</h2><p>Je peux cadrer, reprendre ou construire un produit complexe de bout en bout, avec une vision produit et technique.</p></div><div className="actions"><Link className="btn" href="/contact">Échanger sur votre projet</Link><Link className="btn secondary" href="/cv">Voir mon CV</Link></div></div></section>
  </>;
}
