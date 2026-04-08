import Heading from "../../common/headings/Heading";
import { Separator } from "../../ui/separator";
import ResumeFrame from "./ResumeFrame";
import CopyToClickBoard from "../../common/CopyToClickBoard";
import { ResumeConfig } from "@/config/Resume.config";

export default function Resume() {
  return (
    <div className="flex h-full mt-10 flex-col gap-5">
      <div>
        <Heading as="h1">Resume</Heading>
        <CopyToClickBoard text={ResumeConfig.href}>
          Copy Resume
        </CopyToClickBoard>
      </div>
      <Separator />

      <ResumeFrame />
    </div>
  );
}
