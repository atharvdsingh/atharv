import { Project } from "@/types/config";
import React from "react";
import SubHeading from "../../common/headings/SubHeading";
import { Link } from "next-view-transitions";
import { Button } from "../../ui/button";
import { Globe, MoveRight, WholeWord } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import ProjectStackIcon from "./ProjectStackIcons";
import Heading from "../../common/headings/Heading";
import Github from "../../technologies/Github";

export default function ProjectHeroCard(project: Project) {
  return (
    <div className="flex flex-col max-w-3xl  items-center justify-center gap-2 ">
      <div className="flex justify-between w-full items-center ">
        <div className="flex flex-col  justify-center  ">
          <div className="flex      items-center  gap-2">
            <Heading as="h3"> {project.name} </Heading>
            
            <SubHeading as="span" className="hover:text-foreground">
              <Link
                aria-label={`GitHub repository for ${project.name}`}
                target="_blank"
                href={project.github}
              >
                <Github className="size-5 fill-muted-foreground hover:fill-foreground transition-all duration-300 ease-in-out  " />
              </Link>
            </SubHeading>
          </div>
          <SubHeading> {project.description[0]} </SubHeading>
        </div>
        {project.isLive && (
          <Button className="text-center" asChild variant={"link"}>
            <Link
              aria-label={`Live preview of ${project.name}`}
              target="_blank"
              href={project.liveLink! || "/"}
            >
              Live Link <MoveRight />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
