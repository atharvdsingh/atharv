import React from "react";

import SubHeading from "../common/headings/SubHeading";
import { cn } from "@/lib/utils";

interface CardProps {
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}
export default function GhostCard(cardProps: CardProps) {
  return (
    <div
      className={cn(
        cardProps.className,
        "flex   bg-card border-[0.5px] rounded-sm skill-inner-shadow hover:bg-muted/60 group flex-col  p-3     ",
      )}
    >
      <SubHeading
        as="h4"
        className="text-foreground/80  cursor-pointer underline-offset-2 font-bold leading-tight "
      >
        {cardProps.children}{" "}
      </SubHeading>
      <SubHeading>{cardProps.subtitle} </SubHeading>
    </div>
  );
}
