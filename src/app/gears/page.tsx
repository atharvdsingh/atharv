import { generateMetadata } from "@/config/Meta.config";

import Container from '@/components/common/Container'
import Gears from '@/components/pages/Gears/Gears'
import React from 'react'


export const metadata = generateMetadata("/gears");

export default function page() {
  return (
    <Container className='py-16' >
      <Gears />
    </Container>
  )
}