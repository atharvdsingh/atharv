"use client"
import Container from '@/components/common/Container'
import Heading from '@/components/common/headings/Heading'
import SubHeading from '@/components/common/headings/SubHeading'
import Resume from '@/components/pages/Resume/Resume'
import React from 'react'

export default function page() {
  return (
    <Container className='  py-16' >
        <Resume/>
        
    </Container>
  )
}
