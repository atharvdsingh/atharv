import React from "react";
import Heading from "../common/headings/Heading";
import SubHeading from "../common/headings/SubHeading";
import { Link } from "next-view-transitions";

interface CardProps {
  subtitle?: string;
  children?: React.ReactNode;
  
}
export default function BookCardSeperate(cardProps: CardProps) {
  return (
    <div className="flex bg-card border-[0.5px] rounded-sm skill-inner-shadow hover:bg-muted/60 group flex-col  p-3     ">
     
      <SubHeading  className="text-foreground/80  hover:underline cursor-pointer underline-offset-2 font-bold leading-tight " >{cardProps.children} </SubHeading>
      <SubHeading> {cardProps.subtitle} </SubHeading>
    </div>
  );
}
