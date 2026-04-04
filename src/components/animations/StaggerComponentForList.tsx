"use client"
import { cn } from '@/lib/utils'
import React, { Children } from 'react'
import * as m from "motion/react-m"
import { LazyMotion, domAnimation } from "motion/react"


interface Props{
    children:React.ReactNode,
    className?:string,
    idx?:number
    
}

export default function StaggerComponentForList({children,className,idx=0,...props}:Props) {
    
  return (
    <LazyMotion features={domAnimation} >

    <m.div className={cn(``,className)} 
    
    initial={{
        y:20,
        opacity:0 ,
        filter:`blur(20px)`
    }}
    animate={{
        y:0,
        opacity:1,
        filter:`blur(0px)`
    }}
    viewport={{
        once:true
    }}
    transition={{
        duration:0.3,
        ease:"easeInOut",
        delay:0.05*idx
    }}  
    >
        {children}
    </m.div>
    </LazyMotion>    
  )
}
