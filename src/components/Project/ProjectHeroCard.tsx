import { Project } from "@/types/config";
import React from "react";
import SubHeading from "../common/headings/SubHeading";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ProjectStackIcon from "./ProjectStackIcons";
import Heading from "../common/headings/Heading";

export default function ProjectHeroCard(project: Project) {
  return (
    <div className="flex flex-col max-w-3xl  items-center justify-center gap-2 ">
      <div className="flex justify-between w-full items-center ">
        <div>
          <Heading> {project.name} </Heading>
          <SubHeading> {project.type} </SubHeading>
        </div>
          <Button className="text-center" asChild variant={"link"}>
            <Link href={`.project/${project.name}`}>
              Read More <MoveRight />{" "}
            </Link>
          </Button>
      </div>

      <div className="flex flex-wrap mx-5 gap-2 ">
        {project.stack.map((stack, index) => (
          <div key={index} className="    ">
                <ProjectStackIcon {...stack} />
             </div>
        ))}
      </div>
    </div>
  );
}
