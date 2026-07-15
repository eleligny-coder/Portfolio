import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Élie Leligny — Full Stack Product Builder", template: "%s | Élie Leligny" },
  description: "Conception de SaaS, applications métiers, systèmes IA, automatisations et pilotage produit de bout en bout.",
  openGraph: { title: "Élie Leligny — Full Stack Product Builder", description: "SaaS, IA, automatisation et produits métiers.", type: "website", locale: "fr_FR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: site.role, email: site.email, url: site.url, worksFor: { "@type": "Organization", name: site.company } };
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><main>{children}</main><Footer /></body></html>;
}
