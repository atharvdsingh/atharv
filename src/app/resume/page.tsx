import { generateMetadata } from "@/config/Meta.config";
export const metadata = generateMetadata("/resume");

import Container from '@/components/common/Container'
import Resume from '@/components/pages/Resume/Resume'
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function page() {
  return (
    <Container className='  py-16' >
      <StaggerComponentForList>

      <Resume />
      </StaggerComponentForList>

    </Container>
  )
}
