import { generateMetadata } from "@/config/Meta.config";
export const metadata = generateMetadata("/resume");

import Container from '@/components/common/Container'
import Resume from '@/components/pages/Resume/Resume'

export default function page() {
  return (
    <Container className='  py-16' >
      <Resume />

    </Container>
  )
}
