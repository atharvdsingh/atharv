"use client";
import { CheckCheck, Copy } from "lucide-react";
import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import SubHeading from "./headings/SubHeading";
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
    <Button
      onClick={onclick}
      variant={"link"}
      className=" text-sm cursor-copy px-0 text-muted-foreground hover:text-foreground ring-0 transition-all   "
    >
      <HapticFeedback feedback="impact" >

      {children}
      </HapticFeedback>

      <span className=" ">{loading ? <CheckCheck /> : <Copy />}</span>
    </Button>
  );
}
