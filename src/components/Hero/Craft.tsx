import React from 'react'
import MajorHeading from '../common/headings/MajorHeading'
import { craftConfig } from '@/config/Craft.config'
import ActionCard from '../card/ActionCard'

export default function Craft() {
  return (
    <div className='' >
      <MajorHeading className='mb-5' >Crafts</MajorHeading>
      <div className='flex flex-col  space-y-3 ' >

      {
          craftConfig.map((craft,index)=>(
              <div key={index} >
                <ActionCard heading={craft.name} href={craft.href}  subheading={craft.description}   />
            </div>
        ))
    }
    </div>

    </div>
  )
}
