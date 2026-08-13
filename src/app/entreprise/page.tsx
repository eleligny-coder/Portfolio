import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionTitle } from "@/components/layout";

export const metadata: Metadata = {
  title: "Livré d’un Clic SASU",
  description: "La structure éditrice derrière les produits numériques présentés par Élie Leligny : SaaS, applications métiers, automatisation et product building.",
  alternates: { canonical: "/entreprise" },
};

const products = [
  ["Parayon", "Analyse sportive, data et moteurs d’analyse."],
  ["RatioPro", "Pilotage de rentabilité pour la restauration."],
  ["France Reliance™", "Marketplace de services et workflows multi-rôles."],
  ["Le Billot Pro", "SaaS métier pour achats, production, stocks et rendements."],
] as const;

const companyFacts = [
  ["Dénomination", "LIVRE D’UN CLIC"],
  ["Forme", "SASU — société par actions simplifiée unipersonnelle"],
  ["SIREN", "944 887 280"],
  ["RCS", "944 887 280 R.C.S. Paris"],
  ["Capital social", "1 000 €"],
  ["Siège social", "60 rue François 1er, 75008 Paris"],
] as const;

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Livré d’un Clic SASU"
      title="La structure derrière mes produits numériques."
      text="Livré d’un Clic SASU porte mes activités d’édition logicielle et de conception produit. Le portfolio distingue volontairement les produits construits, leur statut réel et ce qui reste en roadmap."
    />

    <section className="section alt"><div className="shell">
      <SectionTitle
        eyebrow="Rôle"
        title="Éditer, construire et faire évoluer des produits métiers."
        text="La société sert de cadre à des produits propriétaires et à des missions de conception produit-tech, sans présenter ces produits comme de faux clients ou de fausses références commerciales."
      />
      <div className="grid two">
        <article className="card"><span className="eyebrow">Édition logicielle</span><h2>Des produits propriétaires</h2><p>SaaS et applications métiers sont conçus autour de besoins concrets, avec architecture, données, workflows, monétisation et exploitation.</p></article>
        <article className="card"><span className="eyebrow">Product building</span><h2>Du besoin au produit exploitable</h2><p>Cadrage, parcours, rôles, modèle de données, frontend, backend, paiements, automatisations, QA, documentation et déploiement.</p></article>
        <article className="card"><span className="eyebrow">Preuve publique</span><h2>Montrer sans exposer les actifs sensibles</h2><p>Les dépôts applicatifs restent privés. Les études de cas publient les captures disponibles, stacks, architectures, rôles, statuts et résultats actuels nécessaires pour évaluer le travail.</p></article>
        <article className="card"><span className="eyebrow">Transparence</span><h2>Le construit reste séparé de la roadmap</h2><p>Chaque produit affiche son niveau de maturité. Les fonctionnalités futures ne sont pas présentées comme déjà livrées et aucune métrique client n’est ajoutée sans preuve vérifiable.</p></article>
      </div>
    </div></section>

    <section className="section"><div className="shell">
      <SectionTitle eyebrow="Structure vérifiable" title="Une société enregistrée derrière le portfolio." text="Ces repères juridiques sont affichés comme éléments de vérification de la structure, pas comme indicateurs de performance commerciale."/>
      <div className="grid two">
        {companyFacts.map(([label, value]) => <article className="card" key={label}><span className="eyebrow">{label}</span><h3>{value}</h3></article>)}
      </div>
      <div className="actions"><a className="btn secondary" href="https://www.pappers.fr/entreprise/livre-dun-clic-944887280" target="_blank" rel="noreferrer">Vérifier la fiche entreprise ↗</a></div>
    </div></section>

    <section className="section alt"><div className="shell">
      <SectionTitle eyebrow="Produits" title="Des terrains métier différents, une même discipline produit." text="Ces noms désignent des produits documentés dans ce portfolio, pas une liste de clients."/>
      <div className="grid two">
        {products.map(([name, text]) => <article className="card" key={name}><span className="eyebrow">Produit documenté</span><h3>{name}</h3><p>{text}</p></article>)}
      </div>
      <div className="actions"><Link className="btn" href="/projets">Voir les études de cas</Link><Link className="btn secondary" href="/a-propos">À propos de mon parcours</Link></div>
    </div></section>

    <section className="section"><div className="shell cta premium-cta">
      <div><span className="eyebrow">Mission ou collaboration</span><h2>Un produit métier à cadrer, reprendre ou construire ?</h2><p>Le contact reste direct : pas de compte, pas de tunnel commercial, pas de formulaire stocké côté serveur.</p></div>
      <div className="actions"><Link className="btn" href="/contact">Me contacter</Link><Link className="btn secondary" href="/services">Voir mes services</Link></div>
    </div></section>
  </>;
}
