import { generateMetadata } from "@/config/Meta.config";

import Container from '@/components/common/Container'
import Project from '@/components/pages/Project/Project'
import React from 'react'
export const metadata = generateMetadata("/projects");

export default function page() {
  return (
    <Container>
      <Project />
    </Container>
  )
}
