import { cn } from "@/lib/utils";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function GhostButton({
  children,
  href,
  className,
  name,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  name?: string;
}) {
  return (
    <div {...props} className={cn(" flex size-9 shrink-0 skill-inner-shadow items-center justify-center rounded-md border border-border bg-muted text-muted-foreground  ", className)} >
      <Tooltip>
        <TooltipTrigger asChild>

          {children}
        </TooltipTrigger>
        {
          name && <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        }

      </Tooltip>
    </div>
  );
}
