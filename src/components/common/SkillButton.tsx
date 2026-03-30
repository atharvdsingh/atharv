import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

export default function SkillButton({children,className,...props}:{children:React.ReactNode,className?:string}) {
  return (
    <Button  variant={  'outline'} className={cn(` skill-inner-shadow  transition-all bg-white inset-shadow-sidebar-ring `,className)} >{children}</Button>
  )
}
