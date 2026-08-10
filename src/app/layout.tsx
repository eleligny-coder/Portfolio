import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import { Footer, Header } from "@/components/layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Élie Leligny — Product Builder Full Stack", template: "%s | Élie Leligny" },
  description: "Product Builder Full Stack spécialisé en SaaS, CRM sur mesure, IA, automatisation, Stripe et applications métiers. Missions 100 % à distance.",
  openGraph: {
    title: "Élie Leligny — Product Builder Full Stack",
    description: "SaaS, CRM sur mesure, IA, automatisation et produits métiers — de l’analyse au déploiement.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><Header /><main>{children}</main><Footer /></body></html>;
}
