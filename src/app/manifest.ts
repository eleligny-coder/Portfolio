import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Élie Leligny — Product Builder Full Stack",
    short_name: "Élie Leligny",
    description: "Portfolio Product Builder Full Stack — SaaS, CRM sur mesure, IA et automatisation.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
