import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return <>
    <PageIntro
      eyebrow="Contact"
      title="Un échange utile commence par un problème bien posé."
      text="Expliquez le contexte, les utilisateurs, l’existant et l’objectif. Je reviens ensuite à l’essentiel : ce qu’il faut construire, dans quel ordre, et pourquoi."
    />
    <section className="section"><div className="shell contact-layout"><div>
      <article className="card contact-direct-card"><span className="eyebrow">Contact direct</span><h2><a href={`mailto:${site.email}`}>{site.email}</a></h2><p>{site.remote}. Mission, collaboration produit ou opportunité professionnelle à distance.</p><div className="contact-trust"><span>Réponse directe</span><span>Aucun compte</span><span>Aucune donnée stockée</span></div></article>
      <article className="card" style={{marginTop:20}}><span className="eyebrow">Pour aller vite</span><h3>Les 5 informations qui rendent un premier échange efficace.</h3><ul className="list"><li>Le problème métier à résoudre</li><li>Les utilisateurs concernés</li><li>L’existant : produit, outils, données, stack</li><li>Le résultat attendu et les priorités</li><li>Le budget et l’échéance, s’ils sont déjà définis</li></ul></article>
    </div><ContactForm/></div></section>
  </>;
}
