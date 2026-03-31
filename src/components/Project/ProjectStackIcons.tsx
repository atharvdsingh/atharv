import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Project, Technology } from "@/types/config";

export default function ProjectStackIcon(stack: Technology) {
  return (
    <Tooltip>
      <TooltipTrigger className="flex items-center justify-center p-2  border-dotted  border skill-inner-shadow [&>svg]:size-5">
        <stack.icon />
      </TooltipTrigger>
      <TooltipContent>{stack.name}</TooltipContent>
    </Tooltip>
  );
}
