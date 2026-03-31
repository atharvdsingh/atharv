import { Project } from "@/types/config";
import React from "react";
import SubHeading from "../common/headings/SubHeading";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import { Globe, MoveRight, WholeWord } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ProjectStackIcon from "./ProjectStackIcons";
import Heading from "../common/headings/Heading";
import Github from "../technologies/Github";

export default function ProjectHeroCard(project: Project) {
  return (
    <div className="flex flex-col max-w-3xl  items-center justify-center gap-2 ">
      <div className="flex justify-between w-full items-center ">
        <div className="flex flex-col  justify-center  ">
          <div className="flex justify-center     items-center  gap-2">
            <Heading> {project.name} </Heading>
            <SubHeading className="hover:text-foreground">
              {" "}
              <Globe size={20} />{" "}
            </SubHeading>
            <SubHeading className="hover:text-foreground">
              {" "}
              <Github />{" "}
            </SubHeading>
          </div>
          <SubHeading> {project.description[0]} </SubHeading>
        </div>
        <Button className="text-center" asChild variant={"link"}>
          <Link href={`.project/${project.name}`}>
            Read More <MoveRight />{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
}
