// Branded Open Graph images (WhatsApp / social link previews), rendered at build time.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "Dr. Jash Ajmera — Psychiatrist & Psychotherapist in Surat";

const asset = (path: string) => readFile(join(process.cwd(), path));
const dataUri = (buffer: Buffer, type: string) => `data:${type};base64,${buffer.toString("base64")}`;

export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [fraunces, jakarta500, jakarta700, logo, avatar] = await Promise.all([
    asset("src/assets/og/fraunces-72pt-regular.ttf"),
    asset("src/assets/og/plus-jakarta-sans-500.ttf"),
    asset("src/assets/og/plus-jakarta-sans-700.ttf"),
    asset("public/images/sadbhav/logo.png"),
    asset("public/images/sadbhav/dr-jash-ajmera-avatar.jpg"),
  ]);
  const titleSize = title.length > 64 ? 60 : title.length > 42 ? 70 : 82;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          backgroundColor: "#FAF7F4",
          backgroundImage:
            "radial-gradient(circle at 96% 4%, rgba(205,39,121,0.18), rgba(250,247,244,0) 40%), radial-gradient(circle at 0% 0%, rgba(108,188,206,0.42), rgba(250,247,244,0) 50%), radial-gradient(circle at 75% 120%, rgba(108,188,206,0.26), rgba(250,247,244,0) 45%)",
          fontFamily: "Jakarta",
          color: "#10232A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dataUri(logo, "image/png")} width={187} height={68} alt="" />
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#1A6B80" }}>
            psychiatristinsurat.in
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#1A6B80",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 999,
                backgroundColor: "#CD2779",
                marginRight: 16,
              }}
            />
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontFamily: "Fraunces",
              fontSize: titleSize,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1030,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dataUri(avatar, "image/jpeg")}
              width={68}
              height={68}
              alt=""
              style={{ borderRadius: 999, marginRight: 18 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 27, fontWeight: 700 }}>Dr. Jash Ajmera</div>
              <div style={{ fontSize: 21, fontWeight: 500, color: "#4F636B", marginTop: 2 }}>
                Psychiatrist &amp; Psychotherapist · M.B.B.S., D.P.M. (Psychiatry)
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 22px",
              borderRadius: 999,
              backgroundColor: "#1A6B80",
              color: "#FFFFFF",
              fontSize: 21,
              fontWeight: 700,
            }}
          >
            Surat · Online
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 400, style: "normal" },
        { name: "Jakarta", data: jakarta500, weight: 500, style: "normal" },
        { name: "Jakarta", data: jakarta700, weight: 700, style: "normal" },
      ],
    },
  );
}
