import { Experience } from "@/types/config";
import React from "react";
import SubHeading from "../../common/headings/SubHeading";
import Heading from "../../common/headings/Heading";

export default function ExperienceHeroCard(experience: Experience) {
  return (
    <div className="flex cursor-pointer rounded-lg my-3 justify-between items-center ">
      <div>
        {experience.isBlur ? (
          <Heading className="border-b-foreground blur-sm ">sorry, can't tell </Heading>
        ) : (
          <Heading className="border-b-foreground ">{experience.company}</Heading>
        )}
        <SubHeading> {experience.position} </SubHeading>
      </div>
      <div>
        <SubHeading>
          {experience.startDate}-
          {experience.endDate ? experience.endDate : "Present"}
        </SubHeading>
        <SubHeading className="flex gap-2 " >
          {experience.location}
          <span className="sm:flex  hidden ">
            {experience.locationFlexibility}
          </span>
        </SubHeading>
      </div>
    </div>
  );
}
