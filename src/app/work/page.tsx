import { Metadata } from "next";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
import Container from "@/components/common/Container";
import WorkPage from "@/components/pages/work/WorkPage";
import { generateMetadata as getMetadata } from "@/config/Meta.config";

export const metadata: Metadata = {
  ...getMetadata("/work"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function page() {
  return (
    <Container>
      <StaggerComponentForList>
        <WorkPage />
      </StaggerComponentForList>
    </Container>
  );
}
