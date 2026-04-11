import { Experience } from "@/types/config";
import React from "react";
import SubHeading from "../../common/headings/SubHeading";
import Heading from "../../common/headings/Heading";

export default function ExperienceHeroCard(experience: Experience) {
  return (
    <div className="flex      cursor-pointer rounded-lg my-3 justify-between items-center text-sm text-muted-foreground">
      <div>
        <Heading
          as="h3"
          className={` border-b-foreground ${experience.isBlur ? "blur-sm" : ""} `}
        >
          {experience.isBlur ? (
            <span>sorry, can&apos;t tell </span>
          ) : (
            experience.company
          )}
        </Heading>
        <SubHeading as="span"> {experience.position} </SubHeading>
      </div>
      <div className="text-sm text-muted-foreground">
        <SubHeading as="span">
          {experience.startDate}-
          {experience.endDate ? experience.endDate : "Present"}
        </SubHeading>
        <SubHeading as="span" className="flex gap-2 ">
          {experience.location}
          <span className="sm:flex  hidden ">
            {experience.locationFlexibility}
          </span>
        </SubHeading>
      </div>
    </div>
  );
}
