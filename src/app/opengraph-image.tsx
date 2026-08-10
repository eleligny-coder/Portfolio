import { ImageResponse } from "next/og";

export const alt = "Élie Leligny — Product Builder Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 76px",
        color: "#f7fbff",
        background: "radial-gradient(circle at 82% 18%, rgba(45,212,191,.26), transparent 30%), radial-gradient(circle at 66% 90%, rgba(78,167,255,.20), transparent 35%), #07111a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 58, height: 58, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#2dd4bf,#4ea7ff)", color: "#041017", fontWeight: 900, fontSize: 24 }}>EL</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 800 }}>Élie Leligny</span>
            <span style={{ color: "#9fb1c2", fontSize: 17 }}>100 % télétravail — France</span>
          </div>
        </div>
        <span style={{ color: "#2dd4bf", fontSize: 19, fontWeight: 800, letterSpacing: 2 }}>PORTFOLIO</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 970 }}>
        <div style={{ color: "#2dd4bf", fontWeight: 800, fontSize: 21, letterSpacing: 2, marginBottom: 22 }}>PRODUCT BUILDER FULL STACK</div>
        <div style={{ fontSize: 64, lineHeight: 1.02, letterSpacing: -3, fontWeight: 900 }}>SaaS, CRM sur mesure, IA & automatisation.</div>
        <div style={{ color: "#b9c7d2", fontSize: 24, lineHeight: 1.35, marginTop: 26 }}>Du besoin métier au produit numérique opérationnel : architecture, Full Stack, données, Stripe, IA et déploiement.</div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {["Python", "FastAPI", "TypeScript", "React", "PostgreSQL", "Supabase", "Stripe", "Railway"].map((item) => (
          <span key={item} style={{ padding: "10px 15px", border: "1px solid rgba(255,255,255,.13)", borderRadius: 999, color: "#dce7ee", fontSize: 16, background: "rgba(255,255,255,.035)" }}>{item}</span>
        ))}
      </div>
    </div>,
    size,
  );
}
