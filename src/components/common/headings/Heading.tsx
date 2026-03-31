import { cn } from '@/lib/utils'
import React from 'react'

export default function     Heading({children,className,...props}:{children:React.ReactNode,className?:string}) {
  return (
    <div className={cn(`text-lg font-bold whitespace-normal  text-foreground` ,className )} >{children} </div>
  )
}
