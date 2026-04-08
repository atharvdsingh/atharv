import React from 'react'
import Heading from '../common/headings/Heading'
import SubHeading from '../common/headings/SubHeading'
import { ArrowRight, MoveRight, MoveRightIcon } from 'lucide-react'
import { Link } from 'next-view-transitions'

export default function ActionCard({ heading, subheading, href, ...props }: { heading: string, subheading: string, href?: string }) {
    return (
        <Link aria-label={`Action card: ${heading}`} {...props} href={href || "/"} className='flex bg-card border-[0.5px] rounded-xl skill-inner-shadow hover:bg-muted/60 group flex-row gap-2 justify-between p-3 items-center  ' >
            <div className='flex-1' >
                <Heading as="h3">{heading}</Heading>
                <SubHeading>{subheading}</SubHeading>

            </div>
            <div className='group-hover:opacity-100 opacity-0 transition-all text-sm  ' > <MoveRightIcon />  </div>

        </Link>
    )
}
