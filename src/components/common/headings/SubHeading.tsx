import { cn } from '@/lib/utils'
import React from 'react'

export default function SubHeading({ children, className, as: Tag = 'p', ...props }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return (
    <Tag className={cn(`text-sm   text-muted-foreground`, className)} {...props}>{children} </Tag>
  )
}