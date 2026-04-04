"use client";
import { CheckCheck, Copy } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import HapticFeedback from "./HapticFeedback";

export default function CopyToClickBoard({
  children,
  text,
  className,
  ...props
}: {
  children: React.ReactNode;
  text: string;
  className?: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const onclick = () => {
    setLoading(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <HapticFeedback feedback="impact" >
    <Button
      onClick={onclick}
      variant={"link"}
      className=" text-sm cursor-copy px-0 text-muted-foreground hover:text-foreground ring-0 transition-all   "
    >

      {children}

      <span className=" ">{loading ? <CheckCheck /> : <Copy />}</span>
    </Button>
      </HapticFeedback>
  );
}
