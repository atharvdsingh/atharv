import React from 'react'
import HeadingWithSubheading from '../common/headings/HeadingWithSubheading'
import ExperienceHeroCard from '../Hero/ExperienceHeroCard'
import MajorHeading from '../common/headings/MajorHeading'
import { experienceConfig } from '@/config/Experience.config'
import SubHeading from '../common/headings/SubHeading'
import WorkCard from './WorkCard'

export default function WorkPage() {
  return (
    <div>
        <HeadingWithSubheading subHeading= {"These are  the places i work with "} heading={"Work"}  ></HeadingWithSubheading>
            <div className="flex  gap-4 flex-col ">
              {experienceConfig.map((exp, index) => (
                    <WorkCard {...exp} key={index} />
              ))}
            </div>
    </div>
  )
}
