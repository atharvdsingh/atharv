"use client";

import { HapticFeedbackType, useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { cn } from "@/lib/utils";
import React from "react";

export default function HapticFeedback({
  children,
  className,
  feedback,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  feedback: HapticFeedbackType;
}) {
    const { isMobile,triggerHaptic } =useHapticFeedback()
  const handleFeedback = () => {
    if(isMobile()){
        triggerHaptic(feedback)
    }
  };
  return (
    <div {...props} onClick={handleFeedback} className={cn(className!)}>
      {children}
    </div>
  );
}
