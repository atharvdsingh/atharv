import React from "react";
import Heading from "./headings/Heading";
import SubHeading from "./headings/SubHeading";

interface CardProps {
  subtitle?: string;
  children?: React.ReactNode;
}
export default function BookCardSeperate(cardProps: CardProps) {
  return (
    <div className="flex flex-col gap-2 bg-card hover:bg-muted/60 px-3 border-[0.5]   ">
      <Heading>{cardProps.children} </Heading>
      <SubHeading> {cardProps.subtitle} </SubHeading>
    </div>
  );
}
