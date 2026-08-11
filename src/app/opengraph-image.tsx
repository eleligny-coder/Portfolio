import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Élie Leligny — Product Builder Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"72px",background:"#0a0a0b",color:"#f4f1e9",fontFamily:"Arial, sans-serif",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",width:520,height:520,borderRadius:999,right:-120,top:-180,border:"1px solid rgba(216,199,162,.22)"}} />
      <div style={{position:"absolute",width:350,height:350,borderRadius:999,right:-20,top:-80,border:"1px solid rgba(216,199,162,.10)"}} />
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:24,color:"#b8b2a5"}}>
        <span>ÉLIE LELIGNY</span><span>PORTFOLIO / 2026</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:18,maxWidth:900}}>
        <div style={{display:"flex",flexDirection:"column",fontSize:82,lineHeight:.95,letterSpacing:-4,fontWeight:800}}><span>Product Builder</span><span>Full Stack</span></div>
        <div style={{display:"flex",fontSize:28,color:"#d8c7a2"}}>SaaS · CRM · applications métiers · automatisation</div>
      </div>
      <div style={{display:"flex",gap:28,fontSize:20,color:"#a9a59d"}}>
        <span>Strategy → Architecture → Build → Ship</span><span>100 % remote</span>
      </div>
    </div>,
    size,
  );
}
