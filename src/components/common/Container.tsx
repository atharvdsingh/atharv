import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({children,className,...props}:{children:React.ReactNode,className:string}) {

  return (
    <div className={cn("max-w-4xl mx-auto p-4  container ")} >{children}</div>
  )
}
