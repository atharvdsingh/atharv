import React, { Suspense } from "react";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import { Separator } from "../ui/separator";
import ResumeFrame from "./ResumeFrame";
import CopyToClickBoard from "../common/CopyToClickBoard";
import { ResumeConfig } from "@/config/Resume.config";

export default function Resume() {
  return (
    <div className="flex h-full flex-col gap-5">
      <div>
        <Heading>Resume</Heading>
        {/* <SubHeading>This is my resume</SubHeading> */}
        <CopyToClickBoard text={ResumeConfig.href}>
          Copy Resume
        </CopyToClickBoard>
      </div>
      <Separator />

      <ResumeFrame />
    </div>
  );
}
