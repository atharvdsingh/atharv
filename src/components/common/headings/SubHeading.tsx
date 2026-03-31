import { cn } from '@/lib/utils'
import React from 'react'

export default function SubHeading({children,className,...props}:{children:React.ReactNode,className?:string}) {
  return (
    <div className={cn(`text-sm font-light text-muted-foreground`,className)} {...props} >{children} </div>
  )
}