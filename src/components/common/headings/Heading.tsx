import { cn } from '@/lib/utils'
import React from 'react'

export default function Heading({ children, className, as: Tag = 'h2', ...props }: { children: React.ReactNode, className?: string, as?: React.ElementType }) {
  return (
    <Tag className={cn(`text-lg font-bold whitespace-normal  text-foreground`, className)} {...props}>{children} </Tag>
  )
}
