import { generateMetadata } from "@/config/Meta.config";

import Container from "@/components/common/Container";
import Project from "@/components/pages/Project/Project";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
import { Metadata } from "next";
export const metadata: Metadata = generateMetadata("/projects");

export default function page() {
  return (
    <Container>
      <StaggerComponentForList>
        <Project />
      </StaggerComponentForList>
    </Container>
  );
}
