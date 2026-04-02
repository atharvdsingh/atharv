import React from "react";
import Heading from "../../common/headings/Heading";
import { experienceConfig } from "@/config/Experience.config";
import ExperienceHeroCard from "../Hero/ExperienceHeroCard";
import MajorHeading from "../../common/headings/MajorHeading";

export default function ExperienceHero() {
  return (
    <div className="flex mt-10 gap-4 flex-col ">
      <MajorHeading>Experience</MajorHeading>
      {experienceConfig.map((exp, index) => (
        <ExperienceHeroCard key={index} {...exp} />
      ))}
    </div>
  );
}
