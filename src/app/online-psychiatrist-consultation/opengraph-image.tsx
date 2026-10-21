import { findPage } from "@/content";
import { contentOg } from "@/lib/content-route";
import { ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return contentOg(findPage("online", "online-psychiatrist-consultation")!);
}
