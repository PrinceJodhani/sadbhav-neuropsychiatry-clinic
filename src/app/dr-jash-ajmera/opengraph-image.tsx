import { ogAlt, ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "About the doctor", title: "Dr. Jash Ajmera — psychiatrist & psychotherapist in Surat" });
}
