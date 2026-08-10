import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Contact"
      title="Transformer un besoin en plan d’action."
      text="Décrivez votre problème, vos utilisateurs, l’existant et le niveau d’avancement. Je peux intervenir sur un SaaS, un CRM sur mesure, une application métier, une automatisation ou un produit IA."
    />
    <section className="section"><div className="shell contact-layout"><div>
      <article className="card"><span className="eyebrow">Contact direct</span><h2>{site.email}</h2><p>{site.remote}. Missions freelance, collaboration produit ou opportunité professionnelle à distance.</p></article>
      <article className="card" style={{marginTop:20}}><h3>Préparer l’échange</h3><ul className="list"><li>Problème métier à résoudre</li><li>Utilisateurs ciblés</li><li>Outils, données et stack existants</li><li>Fonctions prioritaires</li><li>Budget et échéance</li></ul></article>
    </div><ContactForm/></div></section>
  </>;
}
