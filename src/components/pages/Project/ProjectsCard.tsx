import { Project } from "@/types/config";
import React from "react";
import SubHeading from "../../common/headings/SubHeading";
import Heading from "../../common/headings/Heading";
import GhostButton from "../../common/GhostButton";
import { Link } from "next-view-transitions";
import { AlignRight, Globe } from "lucide-react";
import Github from "../../technologies/Github";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/components/svgs/ArrowRight";

export default function ProjectsCard(project: Project) {
  return (
    <div className="flex flex-col">
      <div className="flex cursor-pointer rounded-lg my-3 justify-between items-center text-sm text-muted-foreground">
        <div>
          <Heading as="h3">{project.name}</Heading>
          <SubHeading>{project.description[0]}</SubHeading>
        </div>
        <div className="text-sm text-muted-foreground">
          {project.isLive && project.liveLink && (
            <SubHeading as="span" className="hover:text-foreground transition-all duration-300 ease-in-out">
              <Button variant={"link"}>
                <Link
                  aria-label={`Live preview of ${project.name}`}
                  target="_blank"
                  href={project.liveLink}
                  className="flex items-center gap-1"
                >
                  Live
                  <ArrowRight />
                </Link>
              </Button>
            </SubHeading>
          )}
          <Button variant={"link"}>
            <Link
              aria-label={`GitHub repository for ${project.name}`}
              target="_blank"
              href={project.github}
              className="flex items-center gap-1"
            >
              GitHub
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <SubHeading as="h4" className="text-foreground font-semibold">
          Technologies used
        </SubHeading>
        <div className="flex gap-3 flex-wrap ">
          {project.stack.slice(1, 6).map((stack, index) => {
            const Icon = stack.icon;
            return (
              <GhostButton
                href={stack.name}
                name={stack.name}
                className="size-6 cursor-pointer "
                key={index}
              >
                <Icon />
              </GhostButton>
            );
          })}
        </div>

        <SubHeading as="h4" className="text-foreground font-semibold">
          Thing&apos;s i did{" "}
        </SubHeading>
        <ul className="ml-2" >
          {project.description.map((descriptions, index) => (
            <li className="list-disc" key={index}>
              <SubHeading as="span" className=" ">{descriptions}</SubHeading>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
