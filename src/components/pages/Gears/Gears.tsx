import React from 'react'
import HeadingWithSubheading from '../../common/headings/HeadingWithSubheading'
import { Separator } from '../../ui/separator'

import GearsCard from './GearsCard'
import { gears } from '@/config/Gear.config'
import StaggerComponentForList from '@/components/animations/StaggerComponentForList'

export default function Gears() {
    return (
        <div className='mt-10 min-h-screen ' >
            <HeadingWithSubheading heading='Gears' subHeading='These are the tools i use to make cool thing' />
            <div className='flex flex-col gap-5' >
                {gears.map((gear, index) => (
                        <StaggerComponentForList key={index} idx={index} >

                        <GearsCard {...gear} />
                        </StaggerComponentForList>
                ))}
            </div>
        </div>
    )
}
