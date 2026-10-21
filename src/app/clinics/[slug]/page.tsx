import ClinicIntro from "@/components/content/ClinicIntro";
import ContentPageView from "@/components/content/ContentPageView";
import { clinic } from "@/lib/clinic";
import { contentRoute } from "@/lib/content-route";

const route = contentRoute("clinic", (page) => {
  const branch = clinic.branches.find((b) => b.id === page.branchId)!;
  return <ContentPageView page={page} intro={<ClinicIntro branch={branch} />} />;
});

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
