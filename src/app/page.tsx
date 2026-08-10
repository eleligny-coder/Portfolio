import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/layout";
import { projects } from "@/data/projects";
import { method, services, site } from "@/data/site";

const stack = ["Python", "FastAPI", "TypeScript", "React", "Next.js", "Supabase", "PostgreSQL", "Stripe", "Railway", "n8n"];
const capabilities = ["Product strategy", "Architecture", "Full Stack", "Data", "IA / LLM", "CRM", "Stripe", "Automation", "QA", "Deploy"];

export default function Home() {
  const [featured, ...rest] = projects.slice(0, 4);
  return <>
    <section className="premium-hero-wrap">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <section className="hero shell premium-hero">
        <div className="hero-copy">
          <div className="availability-line"><span className="availability-dot" />Disponible pour missions & postes 100 % remote</div>
          <span className="eyebrow">Product Builder Full Stack</span>
          <h1>Je transforme des besoins métier en <em>produits numériques qui tiennent la route.</em></h1>
          <p>SaaS, CRM sur mesure, applications métiers, IA et automatisations — de la vision produit au code, aux données, au paiement et au déploiement.</p>
          <div className="actions"><Link className="btn" href="/projets">Voir mes réalisations</Link><Link className="btn secondary" href="/cv">Voir mon CV</Link><Link className="btn ghost" href="/contact">Me contacter</Link></div>
          <div className="proofs premium-proofs"><div><strong>5+</strong><span>années de pratique</span></div><div><strong>4</strong><span>produits SaaS majeurs</span></div><div><strong>100+</strong><span>agents IA conçus / orchestrés</span></div><div><strong>100 %</strong><span>télétravail</span></div></div>
        </div>

        <div className="premium-system-card" aria-label="Vue synthétique des capacités produit">
          <div className="system-card-head"><span>Product system</span><small>LIVE</small></div>
          <div className="system-core"><span>BUILD</span><strong>Product → Production</strong><small>Strategy • Code • Data • Revenue</small></div>
          <div className="system-flow">
            <div><span>01</span><strong>Discover</strong><small>Besoin · métier · valeur</small></div>
            <div><span>02</span><strong>Architect</strong><small>Flows · data · rôles</small></div>
            <div><span>03</span><strong>Build</strong><small>Frontend · backend · IA</small></div>
            <div><span>04</span><strong>Ship</strong><small>QA · cloud · monitoring</small></div>
          </div>
          <div className="system-footer"><span>Python / TS / React</span><span>Supabase / Stripe</span><span>Railway / Vercel</span></div>
        </div>
      </section>
    </section>

    <section className="stack-strip"><div className="shell"><span>Stack principale</span><div>{stack.map(item=><strong key={item}>{item}</strong>)}</div></div></section>

    <section className="section premium-capability-section"><div className="shell">
      <SectionTitle eyebrow="Positionnement" title="Pas seulement du code. Un produit complet." text="Je relie stratégie produit, architecture, développement, données, monétisation, automatisation et livraison."/>
      <div className="capability-cloud">{capabilities.map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}</div>
    </div></section>

    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Capacité globale" title="Comprendre, architecturer, construire, déployer." text="Une approche qui relie métier, produit, code, données, CRM, monétisation et automatisation."/><div className="grid three"><article className="card premium-card"><span className="eyebrow">01 — Structurer</span><h3>Transformer le besoin en système</h3><p>Analyse métier, MVP, rôles, workflows, CRM, roadmap et architecture fonctionnelle.</p></article><article className="card premium-card"><span className="eyebrow">02 — Construire</span><h3>Développer les briques critiques</h3><p>Frontend, backend, données, sécurité, Stripe, IA, automatisations et intégrations API.</p></article><article className="card premium-card"><span className="eyebrow">03 — Livrer</span><h3>Passer du code au produit exploitable</h3><p>QA, documentation, déploiement Railway/Vercel, monitoring, priorisation et amélioration continue.</p></article></div></div></section>

    <section className="section selected-work"><div className="shell"><SectionTitle eyebrow="Selected work" title="Des produits réels, présentés comme de vrais produits." text="Captures réelles, rôle, architecture, stack, maturité et roadmap séparée du fonctionnel."/>
      <div className="featured-project-wrap"><ProjectCard project={featured} featured /></div>
      <div className="grid three project-grid-secondary">{rest.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>
      <div className="actions"><Link className="btn secondary" href="/projets">Voir tous les projets</Link></div>
    </div></section>

    <section className="section github-proof"><div className="shell github-panel"><div><span className="eyebrow">GitHub & code propriétaire</span><h2>Activité visible. Produits privés.</h2><p>Mes dépôts produits restent privés afin de protéger le code et les architectures propriétaires. Le portfolio expose les fonctionnalités, choix techniques, captures et études de cas nécessaires pour évaluer mon travail.</p><div className="actions"><a className="btn secondary" href={site.github} target="_blank" rel="noreferrer">Voir mon GitHub ↗</a><Link className="btn ghost" href="/cv">Consulter mon CV</Link></div></div><div className="github-terminal" aria-hidden="true"><div><span>●</span><span>●</span><span>●</span></div><code>$ product-builder --status</code><strong>Python / TypeScript / SaaS / CRM / IA</strong><code>$ visibility</code><strong>Contributions publiques + privées</strong><code>$ source-code</code><strong>Private / propriétaire</strong></div></div></section>

    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Services" title="Construire ou débloquer un produit numérique."/><div className="grid two">{services.map((s,i)=><article className="card service-card" key={s.title}><span className="service-index">0{i+1}</span><div><span className="eyebrow">Expertise</span><h3>{s.title}</h3><p>{s.text}</p></div></article>)}</div></div></section>

    <section className="section"><div className="shell"><SectionTitle eyebrow="Méthode" title="Un chemin clair du besoin au déploiement."/><div className="premium-method">{method.slice(0,5).map(([n,t,d])=><div className="premium-method-step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div><span>→</span></div>)}</div></div></section>

    <section className="section"><div className="shell cta premium-cta"><div><span className="eyebrow">Mission ou recrutement 100 % remote</span><h2>Besoin d’un profil capable de relier produit, business et technique ?</h2><p>Je peux intervenir sur un produit existant, cadrer un MVP ou construire une application métier de bout en bout.</p></div><div className="actions"><Link className="btn" href="/contact">Me contacter</Link><Link className="btn secondary" href="/cv">Voir le CV</Link></div></div></section>
  </>;
}
