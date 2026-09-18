import { ImageResponse } from "next/og";
import { heroData } from "./data";

export const alt = `${heroData.name} — UI/UX design and frontend development portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "linear-gradient(120deg, #6b1f12, #c75a1a 60%, #812814)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
          {heroData.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
          {heroData.titleLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div style={{ fontSize: 28, maxWidth: 900, lineHeight: 1.4 }}>
          {heroData.description}
        </div>
      </div>
    ),
    size,
  );
}
