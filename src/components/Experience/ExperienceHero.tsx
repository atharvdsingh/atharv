import React from "react";
import Heading from "../common/Heading";
import { experienceConfig } from "@/config/Experience.config";
import ExperienceHeroCard from "./ExperienceHeroCard";

export default function ExperienceHero() {
  return (
    <div className="flex my-10 gap-4 flex-col ">
      <Heading>Experience</Heading>
      {
        experienceConfig.map((exp,index)=>(
          <ExperienceHeroCard key={index} {...exp} />
        ))
      }
      
    </div>
  );
}
