import { cn } from "@/lib/utils";
import React from "react";

export default function MajorHeading({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        `text-xl font-bold whitespace-normal  text-foreground`,
        className,
        { ...props },
      )}
    >
      {children}
    </h1>
  );
}
