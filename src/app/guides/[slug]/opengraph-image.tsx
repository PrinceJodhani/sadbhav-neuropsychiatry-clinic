import { contentRoute } from "@/lib/content-route";
import { ogAlt, ogContentType, ogSize } from "@/lib/og";

const route = contentRoute("guide");

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export default route.OgImage;
