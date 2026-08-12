import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/layout";
import { projects } from "@/data/projects";
import { method, services, site } from "@/data/site";

const stack = ["Python", "FastAPI", "TypeScript", "React", "Next.js", "Supabase", "PostgreSQL", "Stripe", "Railway", "n8n"];
const capabilities = ["Product strategy", "Architecture", "Full Stack", "Data", "Workflows", "CRM", "Stripe", "Automation", "QA", "Deploy"];
const evidence = ["Captures produit", "Architecture documentée", "Statuts affichés", "Roadmaps séparées du construit"];
const problems = [
  ["Un MVP à cadrer", "L’idée existe, mais le périmètre, les rôles, les données et l’ordre de construction ne sont pas encore clairs."],
  ["Un produit à reprendre", "Le projet avance mal, les bugs s’accumulent ou l’architecture devient difficile à faire évoluer."],
  ["Des opérations dispersées", "CRM, fichiers, emails, paiements et automatisations vivent dans des outils qui ne communiquent pas correctement."],
  ["Un métier complexe à transformer en logiciel", "Il faut convertir des règles métier, exceptions, workflows et responsabilités en un produit réellement utilisable."],
] as const;
const productNames = ["Parayon", "RatioPro", "France Reliance™", "Le Billot Pro", "Livré d’un Clic"];
const cvPdf = "/documents/elie-leligny-cv-product-builder-full-stack.pdf";

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
          <p>SaaS, CRM sur mesure, applications métiers et automatisations — de la vision produit au code, aux données, au paiement et à la mise en production.</p>
          <div className="actions"><Link className="btn" href="/projets">Voir mes réalisations</Link><a className="btn secondary cv-download" href={cvPdf} download>Télécharger mon CV</a><Link className="btn ghost" href="/contact">Me contacter</Link></div>
        </div>

        <div className="premium-system-card" aria-label="Vue synthétique des capacités produit">
          <div className="system-card-head"><span>Product system</span><small>LIVE</small></div>
          <div className="system-core"><span>BUILD</span><strong>Product → Production</strong><small>Strategy • Code • Data • Revenue</small></div>
          <div className="system-flow">
            <div><strong>Discover</strong><small>Besoin · métier · valeur</small></div>
            <div><strong>Architect</strong><small>Flows · data · rôles</small></div>
            <div><strong>Build</strong><small>Frontend · backend · data</small></div>
            <div><strong>Ship</strong><small>QA · cloud · monitoring</small></div>
          </div>
          <div className="system-footer"><span>Python / TS / React</span><span>Supabase / Stripe</span><span>Railway / Cloudflare</span></div>
        </div>
      </section>
    </section>

    <section className="evidence-strip"><div className="shell">{evidence.map(item=><strong key={item}>{item}</strong>)}</div></section>

    <section className="section selected-work selected-work-early"><div className="shell"><SectionTitle eyebrow="Selected work" title="Les produits d’abord. Les promesses ensuite." text="Chaque projet affiche son statut réel, ses captures, son architecture, mon rôle, sa stack et ce qui reste à construire."/>
      <div className="featured-project-wrap"><ProjectCard project={featured} featured /></div>
      <div className="grid three project-grid-secondary">{rest.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>
      <div className="actions"><Link className="btn secondary" href="/projets">Voir toutes les études de cas</Link></div>
    </div></section>

    <section className="section alt problem-section"><div className="shell">
      <SectionTitle eyebrow="Votre situation" title="Quel produit essayez-vous de débloquer ?" text="Je pars du problème métier et du niveau de maturité réel du produit, pas d’une stack imposée à l’avance."/>
      <div className="grid two problem-grid">{problems.map(([title,text])=><article className="problem-card" key={title}><span className="eyebrow">Problème fréquent</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="actions"><Link className="btn" href="/contact">Parler de votre blocage</Link></div>
    </div></section>

    <section className="stack-strip"><div className="shell"><span>Stack principale</span><div>{stack.map(item=><strong key={item}>{item}</strong>)}</div></div></section>

    <section className="section premium-capability-section"><div className="shell">
      <SectionTitle eyebrow="Positionnement" title="Pas seulement du code. Un produit complet." text="Je relie stratégie produit, architecture, développement, données, monétisation, automatisation et livraison."/>
      <div className="capability-cloud">{capabilities.map(item=><span key={item}>{item}</span>)}</div>
    </div></section>

    <section className="section alt"><div className="shell">
      <SectionTitle eyebrow="Choisissez votre parcours" title="Deux besoins. Deux chemins directs." text="Le portfolio reste complet, mais chacun accède immédiatement aux preuves qui l’intéressent."/>
      <div className="audience-switch">
        <article className="audience-card"><span className="eyebrow">Recruteur / équipe produit</span><h3>Vous cherchez un profil polyvalent capable d’exécuter.</h3><p>Expérience, stack, méthodes, CV, disponibilité et preuves de réalisation.</p><Link className="text-link" href="/cv">Évaluer mon profil →</Link></article>
        <article className="audience-card"><span className="eyebrow">Entreprise / entrepreneur</span><h3>Vous avez un produit à construire ou à débloquer.</h3><p>Études de cas, architecture, décisions produit, services et prise de contact.</p><Link className="text-link" href="/projets">Voir comment je construis →</Link></article>
      </div>
    </div></section>

    <section className="section"><div className="shell"><SectionTitle eyebrow="Capacité globale" title="Comprendre, architecturer, construire, déployer." text="Une approche qui relie métier, produit, code, données, CRM, monétisation et automatisation."/><div className="grid three"><article className="card premium-card"><span className="eyebrow">Structurer</span><h3>Transformer le besoin en système</h3><p>Analyse métier, MVP, rôles, workflows, CRM, roadmap et architecture fonctionnelle.</p></article><article className="card premium-card"><span className="eyebrow">Construire</span><h3>Développer les briques critiques</h3><p>Frontend, backend, données, sécurité, Stripe, automatisations et intégrations API.</p></article><article className="card premium-card"><span className="eyebrow">Livrer</span><h3>Passer du code au produit exploitable</h3><p>QA, documentation, déploiement Railway/Cloudflare, monitoring, priorisation et amélioration continue.</p></article></div></div></section>

    <section className="section alt trust-section"><div className="shell">
      <SectionTitle eyebrow="Confiance" title="Ce que vous pouvez réellement vérifier." text="Pas de faux logos clients ni de métriques inventées : les produits, captures, statuts, architectures et profils professionnels sont consultables."/>
      <div className="product-name-rail" aria-label="Produits documentés">{productNames.map(name=><span key={name}>{name}</span>)}</div>
      <div className="trust-actions"><Link className="trust-link" href="/projets"><strong>Études de cas</strong><span>Captures, architecture, rôle et résultat actuel</span></Link><a className="trust-link" href={site.github} target="_blank" rel="noreferrer"><strong>GitHub</strong><span>Activité publique et profil technique</span></a><a className="trust-link" href={site.malt} target="_blank" rel="noreferrer"><strong>Malt</strong><span>Profil professionnel externe</span></a><Link className="trust-link" href="/cv"><strong>CV</strong><span>Parcours et stack en ligne</span></Link></div>
    </div></section>

    <section className="section github-proof"><div className="shell github-panel"><div><span className="eyebrow">GitHub & code propriétaire</span><h2>Activité visible. Dépôts applicatifs privés.</h2><p>Les dépôts des produits propriétaires restent privés. Le portfolio expose les fonctionnalités, choix techniques, captures et études de cas nécessaires pour évaluer mon travail sans publier les actifs sensibles.</p><div className="actions"><a className="btn secondary" href={site.github} target="_blank" rel="noreferrer">Voir mon GitHub ↗</a><Link className="btn ghost" href="/cv">Consulter le CV en ligne</Link></div></div><div className="github-terminal" aria-hidden="true"><div><span>●</span><span>●</span><span>●</span></div><code>$ product-builder --status</code><strong>Python / TypeScript / SaaS / CRM</strong><code>$ visibility</code><strong>Contributions publiques + privées</strong><code>$ product-repositories</code><strong>Private / propriétaire</strong></div></div></section>

    <section className="section alt"><div className="shell"><SectionTitle eyebrow="Services" title="Construire ou débloquer un produit numérique."/><div className="grid two">{services.map(s=><article className="card service-card" key={s.title}><div><span className="eyebrow">Expertise</span><h3>{s.title}</h3><p>{s.text}</p></div></article>)}</div></div></section>

    <section className="section"><div className="shell"><SectionTitle eyebrow="Méthode" title="Un chemin clair du besoin au déploiement."/><div className="premium-method">{method.slice(0,5).map(([title,description])=><div className="premium-method-step" key={title}><div><h3>{title}</h3><p>{description}</p></div><span>→</span></div>)}</div></div></section>

    <section className="section"><div className="shell cta premium-cta"><div><span className="eyebrow">Mission ou recrutement 100 % remote</span><h2>Besoin d’un profil capable de relier produit, business et technique ?</h2><p>Je peux intervenir sur un produit existant, cadrer un MVP ou construire une application métier de bout en bout.</p></div><div className="actions"><Link className="btn" href="/contact">Me contacter</Link><a className="btn secondary cv-download" href={cvPdf} download>Télécharger le CV</a></div></div></section>
  </>;
}
