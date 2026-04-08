import { generateMetadata } from "@/config/Meta.config";

import Container from '@/components/common/Container'
import Project from '@/components/pages/Project/Project'
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
export const metadata = generateMetadata("/projects");

export default function page() {
  return (
    <Container>
      <StaggerComponentForList>

      <Project />
      </StaggerComponentForList>
    </Container>
  )
}
