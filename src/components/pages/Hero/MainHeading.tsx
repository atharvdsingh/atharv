import { aboutConfig } from "@/config/About.config";
import Image from "next/image";
import Heading from "../../common/headings/Heading";
import SubHeading from "../../common/headings/SubHeading";
import CopyToClickBoard from "../../common/CopyToClickBoard";

export default function MainHeading() {
  return (
    <div className="flex mt-10   items-center justify-start ">
      <Image
        src={aboutConfig.image || "/main.webp"}
        alt={aboutConfig.name}
        width={100}
        height={100}
        loading="eager"
        className=" flex justify-center  aspect-square  rounded-full items-center object-fill inset-0 bg-lime-300  "
      />
      <div className="flex flex-col px-3 justify-start   ">
        <Heading as="h1">{aboutConfig.name}</Heading>
        <div className="flex flex-wrap items-center gap-x-1 justify-start ">
          {aboutConfig.craft.map((craft, index) => (
            <SubHeading
              as="span"
              className="flex items-center gap-1 justify-center "
              key={index}
            >
              {craft}
              <span className="items-center-safe">&middot;</span>
            </SubHeading>
          ))}
          <CopyToClickBoard className="px-0" text={aboutConfig.email}>
            <span>{aboutConfig.email}</span>
          </CopyToClickBoard>
        </div>
      </div>
    </div>
  );
}
