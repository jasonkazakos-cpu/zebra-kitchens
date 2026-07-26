import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Zebra Kitchens — Kitchen Design, Supply & Installation in Cheshunt & Hertfordshire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#14141a",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 64, height: 10, backgroundColor: "#f2660b" }} />
          <div
            style={{
              fontSize: 28,
              textTransform: "uppercase",
              letterSpacing: 6,
              color: "#f2660b",
              fontWeight: 700,
            }}
          >
            Zebra Kitchens
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 1,
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Black &amp; White Prices.</span>
          <span style={{ color: "#f2660b" }}>Lots Of Colours.</span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 30,
            color: "rgba(255,255,255,0.75)",
            display: "flex",
          }}
        >
          Kitchen Design, Supply &amp; Installation — Cheshunt &amp; Hertfordshire
        </div>
        <div style={{ display: "flex", width: "100%", height: 10, marginTop: 64 }}>
          <div style={{ flex: 1, backgroundColor: "#2b5fad" }} />
          <div style={{ flex: 1, backgroundColor: "#0e9594" }} />
          <div style={{ flex: 1, backgroundColor: "#f2660b" }} />
          <div style={{ flex: 1, backgroundColor: "#8456a8" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
