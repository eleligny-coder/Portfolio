import type { Metadata } from "next";
import { PageIntro, SectionTitle } from "@/components/layout";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function LegalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Informations légales"
        title="Mentions légales"
        text="Informations relatives à l’éditeur, à la direction de la publication et à l’exploitation de ce site professionnel."
      />
      <section className="section">
        <div className="shell legal-content">
          <SectionTitle eyebrow="Éditeur" title={site.company} />
          <p>Le présent site est édité par Livré d’un Clic, société par actions simplifiée unipersonnelle.</p>
          <dl>
            <dt>Dénomination sociale</dt>
            <dd>Livré d’un Clic SASU</dd>
            <dt>Forme juridique</dt>
            <dd>Société par actions simplifiée unipersonnelle (SASU)</dd>
            <dt>Capital social</dt>
            <dd>1 000 €</dd>
            <dt>SIREN</dt>
            <dd>944 887 280</dd>
            <dt>Siège social</dt>
            <dd>60 Rue François 1er, 75008 Paris, France</dd>
            <dt>Directeur de la publication</dt>
            <dd>M. Elie Leligny</dd>
            <dt>Adresse électronique</dt>
            <dd>{site.email}</dd>
          </dl>

          <SectionTitle eyebrow="Hébergement" title="Hébergeur du site" />
          <p>
            Le déploiement prévu utilise Vercel. Les coordonnées légales définitives de l’hébergeur seront affichées après validation de l’environnement de production.
          </p>

          <SectionTitle eyebrow="Propriété intellectuelle" title="Contenus, produits et marques" />
          <p>
            Les textes, éléments graphiques, architectures, noms de projets, études de cas et contenus présentés sur ce site sont protégés. France Reliance™ est utilisé comme nom de travail de l’écosystème et de la vision territoriale. Livré d’un Clic SASU demeure l’éditeur légal et le propriétaire des produits concernés.
          </p>

          <SectionTitle eyebrow="Transparence" title="Informations relatives aux projets" />
          <p>
            Les pages projets distinguent les fonctionnalités opérationnelles, les éléments en cours de stabilisation et les fonctionnalités prévues dans la roadmap. Elles ne constituent pas une promesse de disponibilité commerciale immédiate.
          </p>
        </div>
      </section>
    </>
  );
}
