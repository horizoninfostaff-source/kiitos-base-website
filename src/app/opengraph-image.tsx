import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "kiitos!BASE｜児童発達支援";

// ブランドOG画像（charcoal地＋yellowの"kiitos!"。CJK同梱回避のため欧文構成）
export default function OpengraphImage() {
  const dots = ["#FF6B6B", "#FFB300", "#64B5F6", "#81C784", "#CE93D8"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundColor: "#2B2B2B",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 24%, rgba(255,179,0,0.16), rgba(255,179,0,0) 55%)",
          }}
        />
        {/* ブランドドット */}
        <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
          {dots.map((c) => (
            <div
              key={c}
              style={{ width: 22, height: 22, borderRadius: 22, backgroundColor: c }}
            />
          ))}
        </div>
        <div
          style={{
            fontSize: 150,
            fontWeight: 900,
            color: "#FFB300",
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          kiitos!
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: 16,
          }}
        >
          BASE
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 58,
            fontSize: 27,
            letterSpacing: 4,
            opacity: 0.9,
          }}
        >
          Child Development Support · Funabashi
        </div>
      </div>
    ),
    { ...size }
  );
}
