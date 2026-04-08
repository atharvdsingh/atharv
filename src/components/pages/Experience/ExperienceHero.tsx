import React from "react";
import Heading from "../../common/headings/Heading";
import { experienceConfig } from "@/config/Experience.config";
import ExperienceHeroCard from "../Hero/ExperienceHeroCard";
import MajorHeading from "../../common/headings/MajorHeading";
import ActionCard from "@/components/card/ActionCard";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import HapticFeedback from "@/components/common/HapticFeedback";

export default function ExperienceHero() {
  return (
    <div className="flex mt-10 gap-4 flex-col ">
      <MajorHeading>Experience</MajorHeading>
      {experienceConfig.map((exp, index) => (
        <ExperienceHeroCard key={index} {...exp} />
      ))}
      <div className="flex justify-center items-center " >

        <HapticFeedback feedback="light" >
          <Button asChild className="cursor-pointer " variant={"outline"} >
            <Link aria-label="Show all work experience" href={"/work"} > Show all work experience </Link>
          </Button>
        </HapticFeedback>
      </div>
    </div>
  );
}
