import React from "react";
import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { seoContent, structuredData } from "@/config/SeoContent.config";
import HeadingWithSubheading from "../../common/headings/HeadingWithSubheading";
import GearsCard from "./GearsCard";
import { gears } from "@/config/Gear.config";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function Gears() {
  return (
    <div className="mt-10 min-h-screen ">
      <JsonLd data={structuredData.getItemList("Gear", gears)} />
      <HeadingWithSubheading
        heading="Gears"
        subHeading="These are the tools i use to make cool thing"
      />
      <ContentSection paragraphs={seoContent.gears.intro} />
      <div className="flex flex-col gap-5">
        {gears.map((gear, index) => (
          <StaggerComponentForList key={index} idx={index}>
            <GearsCard {...gear} />
          </StaggerComponentForList>
        ))}
      </div>
    </div>
  );
}
