import { cn } from '@/lib/utils'
import React from 'react'

export default function SubHeading({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn(`text-sm   text-muted-foreground`, className)} {...props} >{children} </p>
  )
}