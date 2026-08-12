import type { Metadata } from "next";
import { PageIntro } from "@/components/layout";
import { method } from "@/data/site";

export const metadata: Metadata = {
  title: "Méthode",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <>
    <PageIntro eyebrow="Méthode" title="Une exécution structurée, sans bruit." text="Chaque étape réduit une incertitude : besoin, périmètre, architecture, expérience, livraison, qualité puis adoption." />
    <section className="section"><div className="shell">{method.map(([title, description]) => <div className="step" key={title}><div><h2>{title}</h2><p>{description}</p></div></div>)}</div></section>
  </>;
}
