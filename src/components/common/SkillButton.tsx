import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";

export default function SkillButton({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      variant={"outline"} 
      {...props}
      className={cn(
        ` skill-inner-shadow  transition-all  inset-shadow-sidebar-ring `,
        className,
      )}
    >
      {children}
    </Button>
  );
}
