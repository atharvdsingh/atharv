import { cn } from "@/lib/utils";
import React from "react";

export default function MajorHeading({
  children,
  className,
  as: Tag = "h2",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        `text-xl font-bold whitespace-normal  text-foreground`,
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
