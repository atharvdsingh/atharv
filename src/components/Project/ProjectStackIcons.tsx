import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Project, Technology } from "@/types/config";
import SubHeading from "../common/headings/SubHeading";

export default function ProjectStackIcon(stack: Technology) {
  return (
    <Tooltip>
      <TooltipTrigger className="flex flex-wrap     border-dotted  border skill-inner-shadow  [&>svg]:size-5">
        <  stack.icon />
      </TooltipTrigger>
      <TooltipContent>{stack.name}</TooltipContent>
    </Tooltip>
  );
}
