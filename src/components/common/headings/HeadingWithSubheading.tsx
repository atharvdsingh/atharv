import React from "react";
import CopyToClickBoard from "../CopyToClickBoard";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Separator } from "@/components/ui/separator";

export default function HeadingWithSubheading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <header className="flex h-full flex-col gap-2">
      <Heading as="h1" className="text-xl">
        {heading}
      </Heading>
      <SubHeading as="p">{subHeading}</SubHeading>
      <Separator className="my-5" />
    </header>
  );
}
