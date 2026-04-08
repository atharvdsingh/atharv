import React from 'react'
import SubHeading from './headings/SubHeading'
import { quote } from '@/config/quote.config'
import Heading from './headings/Heading'

export default function Quote() {
  return (
    <div className='flex italic p-4 flex-1 justify-center  items-center' >

      <SubHeading as="blockquote">{quote.quote}</SubHeading>
      <Heading as="p">{quote.author}</Heading>
      <Heading as="p"> {quote.date} </Heading>

    </div>
  )
}
