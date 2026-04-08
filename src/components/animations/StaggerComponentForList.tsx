"use client"
import { cn } from '@/lib/utils'
import React, { Children } from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    idx?: number
}

export default function StaggerComponentForList({ children, className, idx = 0, ...props }: Props) {
    return (
        <div className={cn(``, className)}>
            {children}
        </div>
    )
}
