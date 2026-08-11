import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 18, background: "linear-gradient(135deg,#2dd4bf,#4ea7ff)", color: "#041017", fontFamily: "Arial, sans-serif", fontWeight: 900, fontSize: 25 }}>EL</div>,
    size,
  );
}
