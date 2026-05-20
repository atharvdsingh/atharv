"use client";

import CopyToClickBoard from "@/components/common/CopyToClickBoard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";

export default function BlogShareLinkCopyButton() {
  return (
    <div className="flex gap-4">
      <Label htmlFor="link" className="sr-only">
        Link
      </Label>
      <Input
        className="truncate"
        id="link"
        defaultValue={window.location.href}
        readOnly
      />

      <CopyToClickBoard text={window.location.href}></CopyToClickBoard>
    </div>
  );
}
