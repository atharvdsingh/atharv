import React from 'react'
import MajorHeading from '../../common/headings/MajorHeading'
import { craftConfig } from '@/config/Craft.config'
import ActionCard from '../../card/ActionCard'
import HapticFeedback from '@/components/common/HapticFeedback'

export default function Craft() {
  return (
    <div className='' >
      <MajorHeading className='mb-5' >Crafts</MajorHeading>
      <div className='flex flex-col  space-y-3 ' >

      {
          craftConfig.map((craft,index)=>(
              <div key={index} >
                <HapticFeedback feedback='medium' >

                <ActionCard heading={craft.name} href={craft.href}  subheading={craft.description}   />
                </HapticFeedback>
            </div>
        ))
    }
    </div>

    </div>
  )
}
