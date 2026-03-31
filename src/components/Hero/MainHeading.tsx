import { aboutConfig } from "@/config/About.config";
import Image from "next/image";
import React from "react";
import Heading from "../common/headings/Heading";
import SubHeading from "../common/headings/SubHeading";
import CopyToClickBoard from "../common/CopyToClickBoard";
import { socialLinks } from "@/config/SocialLinks.config";
import { Separator } from "../ui/separator";

export default function MainHeading() {
  return (
    <div className="flex -my-1- items-center justify-start ">
      <Image
        src={aboutConfig.image || "/main.webp"}
        alt={aboutConfig.name}
        width={100}
        height={100}
        className=" flex justify-center  aspect-square  rounded-full items-center object-fill inset-0 bg-lime-300  "
      />
      <div className="flex flex-col px-3 justify-start   ">
        <Heading>{aboutConfig.name}</Heading>
        <div className="flex flex-wrap items-center gap-x-1 justify-start ">
          {aboutConfig.craft.map((craft, index) => (
            <SubHeading
              className="flex items-center gap-1 justify-center "
              key={index}
            >
              {craft}
              <span className="items-center-safe">&middot;</span>
            </SubHeading>
          ))}
          <CopyToClickBoard className="px-0" text={aboutConfig.email}>
            <div>{aboutConfig.email}</div>
          </CopyToClickBoard>
        </div>
      </div>
    </div>
  );
}
