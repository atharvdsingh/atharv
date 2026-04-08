import { cn } from '@/lib/utils'
import React from 'react'

export default function SubHeading({ children, className, as: Component = "h2", ...props }: { children: React.ReactNode, className?: string, as?: React.ElementType, [key: string]: any }) {
  return (
    <Component className={cn(`text-sm   text-muted-foreground`, className)} {...props} >{children} </Component>
  )
}