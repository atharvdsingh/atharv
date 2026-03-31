import { cn } from "@/lib/utils";
import React from "react";

export default function GhostButton({
  children,
  href,
  key,
  className,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  key?: string | number;
  className?: string;
}) {
  return (
    <div {...props} className={cn(" flex size-9 shrink-0 skill-inner-shadow items-center justify-center rounded-md border border-border bg-muted text-muted-foreground  ", className)} key={key}>
      {children}
    </div>
  );
}
