import { cn } from '@/lib/utils'
import React from 'react'

export default function Heading({ children, className, as: Component = "h1", ...props }: { children: React.ReactNode, className?: string, as?: React.ElementType, [key: string]: any }) {
  return (
    <Component className={cn(`text-lg font-bold whitespace-normal  text-foreground`, className)} {...props} >{children} </Component>
  )
}
