import React from 'react'
import HeadingWithSubheading from '../../common/headings/HeadingWithSubheading'
import { Separator } from '../../ui/separator'

import GearsCard from './GearsCard'
import { gears } from '@/config/Gear.config'

export default function Gears() {
    return (
        <div className='mt-10 min-h-screen ' >
            <HeadingWithSubheading heading='Gears' subHeading='These are the tools i use to make cool thing' />
            <div className='flex flex-col gap-5' >
                {gears.map((gear, index) => (
                    <div key={index} >
                        <GearsCard {...gear} />
                    </div>
                ))}
            </div>
        </div>
    )
}
