import { Experience } from "@/types/config";
import React from "react";
import SubHeading from "../common/headings/SubHeading";
import Heading from "../common/headings/Heading";

export default function ExperienceHeroCard(experience: Experience) {
  return (
    <SubHeading className="flex      cursor-pointer rounded-lg my-3 justify-between items-center ">
      <SubHeading>
        <Heading
          className={` border-b-foreground ${experience.isBlur ? "blur-sm" : ""} `}
        >
          {experience.isBlur ? (
            <Heading>sorry, can't tell </Heading>
          ) : (
            experience.company
          )}
        </Heading>
        <SubHeading> {experience.position} </SubHeading>
      </SubHeading>
      <SubHeading>
        <SubHeading>
          {experience.startDate}-
          {experience.endDate ? experience.endDate : "Present"}
        </SubHeading>
        <SubHeading className="flex gap-2 " >
          {experience.location} 
          <div className="sm:flex  hidden ">
            {experience.locationFlexibility}
          </div>
        </SubHeading>
      </SubHeading>
    </SubHeading>
  );
}
