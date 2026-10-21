import ContentPageView from "@/components/content/ContentPageView";
import { findPage } from "@/content";
import { contentMetadata } from "@/lib/content-route";

const page = findPage("online", "online-psychiatrist-gujarat")!;

export const metadata = contentMetadata(page);

export default function Page() {
  return <ContentPageView page={page} />;
}
