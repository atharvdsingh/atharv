import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  idx?: number;
}

export default function StaggerComponentForList({
  children,
  className,
  idx = 0,
  ...props
}: Props) {
  return (
    <div
      className={cn("stagger-item", className)}
      style={{ "--stagger-idx": idx } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
