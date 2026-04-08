import { cn } from '@/lib/utils'
import React from 'react'

<<<<<<< HEAD
export default function SubHeading({ children, className, as: Component = "h2", ...props }: { children: React.ReactNode, className?: string, as?: React.ElementType, [key: string]: any }) {
  return (
    <Component className={cn(`text-sm   text-muted-foreground`, className)} {...props} >{children} </Component>
=======
export default function SubHeading({children,className,...props}:{children:React.ReactNode,className?:string}) {
  return (
    <div className={cn(`text-sm   text-muted-foreground`,className)} {...props} >{children} </div>
>>>>>>> parent of 14b3e71 (fix:image loading)
  )
}