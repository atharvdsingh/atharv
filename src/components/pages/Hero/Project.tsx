import React from "react";
import MajorHeading from "../../common/headings/MajorHeading";
import { projectsConfig } from "@/config/Project.config";
import ProjectHeroCard from "../Project/ProjectHeroCard";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function Project() {
  return (
    <div className=" flex flex-col gap-4  my-10  ">
      <MajorHeading > Projects </MajorHeading>

      {projectsConfig.map((project, index) => (
        <div key={index}>
          <ProjectHeroCard {...project}> </ProjectHeroCard>
        </div>
      ))}
      <div className="flex justify-center items-center " >

  <Button className="cursor-pointer w-fit p-2 " variant={"outline"} >
    <Link  href={"/projects"} > Show all Project </Link>
  </Button>
      </div>
    </div>
  );
}
