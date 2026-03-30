import { Experience } from "@/types/config";
import React from "react";
import SubHeading from "../common/SubHeading";
import Heading from "../common/Heading";

export default function ExperienceHeroCard(experience: Experience) {
  return (
    <SubHeading className="flex hover:bg-muted/50 hover:skill-inner-shadow border skill-inner-shadow  p-4 cursor-pointer rounded-2xl my-3 justify-between items-center ">
      <SubHeading>
        <Heading> {experience.company} </Heading>
        <SubHeading> {experience.position} </SubHeading>
      </SubHeading>
      <SubHeading>
        <SubHeading>
          {experience.startDate}
-          {experience.endDate ? experience.endDate : "Present"}{" "}
        </SubHeading>
        <SubHeading> {experience.location} ({experience.locationFlexibility}) </SubHeading>
      </SubHeading>
    </SubHeading>
  );
}
