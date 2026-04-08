import HeadingWithSubheading from '../../common/headings/HeadingWithSubheading'
import { experienceConfig } from '@/config/Experience.config'
import WorkCard from './WorkCard'


export default function WorkPage() {
  return (
    <div className='mt-10  min-h-screen  ' >
      <HeadingWithSubheading subHeading={"These are  the places i work with "} heading={"Work"}  ></HeadingWithSubheading>
      <div className="flex  gap-4 flex-col ">
        {experienceConfig.map((exp, index) => (
          <WorkCard {...exp} key={index} />
        ))}
      </div>
    </div>
  )
}
