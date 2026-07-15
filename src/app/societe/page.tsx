import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SectionTitle } from "@/components/layout";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Livré d’un Clic SASU",
  description: "Société éditrice de logiciels et studio de conception de produits numériques.",
};

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Société"
        title="Livré d’un Clic SASU"
        text="Société éditrice de logiciels et studio de conception de produits numériques : SaaS, applications métiers, IA, automatisation, conseil et formation."
      />

      <section className="section alt">
        <div className="shell grid three">
          <article className="card">
            <span className="eyebrow">Édition</span>
            <h3>Produits SaaS</h3>
            <p>Conception et développement de solutions propriétaires adaptées à des secteurs métier.</p>
          </article>
          <article className="card">
            <span className="eyebrow">Studio</span>
            <h3>Conception & pilotage</h3>
            <p>Cadrage, architecture, développement, documentation, QA et déploiement.</p>
          </article>
          <article className="card">
            <span className="eyebrow">Transmission</span>
            <h3>Conseil & formation</h3>
            <p>Accompagnement autour du numérique, de l’IA, de l’automatisation et de l’entrepreneuriat.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionTitle eyebrow="Identité juridique" title="Une société française créée pour éditer et développer des produits numériques." />
          <div className="grid three">
            <article className="card">
              <span className="eyebrow">Forme</span>
              <h3>SASU</h3>
              <p>Livré d’un Clic est une société par actions simplifiée unipersonnelle au capital social de 1 000 €.</p>
            </article>
            <article className="card">
              <span className="eyebrow">Immatriculation</span>
              <h3>SIREN 944 887 280</h3>
              <p>Siège social : 60 Rue François 1er, 75008 Paris, France.</p>
            </article>
            <article className="card">
              <span className="eyebrow">Direction</span>
              <h3>M. Elie Leligny</h3>
              <p>Fondateur et directeur de la publication du site.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell">
          <SectionTitle eyebrow="Produits" title="Un portefeuille de solutions métier." />
          <div className="company-products">
            {projects
              .filter((project) => project.slug !== "livre-d-un-clic-wordpress")
              .map((project) => (
                <Link href={`/projets/${project.slug}`} key={project.slug}>
                  <span>{project.eyebrow}</span>
                  <strong>{project.name}</strong>
                  <em>{project.status}</em>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionTitle eyebrow="Gouvernance de marque" title="Des rôles clairement séparés." />
          <div className="grid three">
            <article className="card">
              <h3>Livré d’un Clic SASU</h3>
              <p>Éditeur légal et propriétaire des produits.</p>
            </article>
            <article className="card">
              <h3>France Reliance™</h3>
              <p>Nom de travail de l’écosystème, de la vision et de l’OS territorial.</p>
            </article>
            <article className="card">
              <h3>Nom produit public</h3>
              <p>À définir avant la commercialisation grand public de la plateforme territoriale.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
