import { cn } from '@/lib/utils'
import React from 'react'

<<<<<<< HEAD
export default function Heading({ children, className, as: Component = "h1", ...props }: { children: React.ReactNode, className?: string, as?: React.ElementType, [key: string]: any }) {
  return (
    <Component className={cn(`text-lg font-bold whitespace-normal  text-foreground`, className)} {...props} >{children} </Component>
=======
export default function     Heading({children,className,...props}:{children:React.ReactNode,className?:string}) {
  return (
    <div className={cn(`text-lg font-bold whitespace-normal  text-foreground` ,className )} >{children} </div>
>>>>>>> parent of 14b3e71 (fix:image loading)
  )
}
