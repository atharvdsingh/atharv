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
      <SubHeading className="flex cursor-pointer rounded-lg my-3 justify-between items-center ">
        <SubHeading>
          <Heading>{project.name}</Heading>
          <SubHeading>{project.description[0]}</SubHeading>
        </SubHeading>
        <SubHeading>
          {project.isLive && project.liveLink && (
              <SubHeading className="hover:text-foreground transition-all duration-300 ease-in-out">
            <Button variant={"link"}>
                <Link
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
                target="_blank"
                href={project.github}
                className="flex items-center gap-1"
              >
                GitHub
                <ArrowRight />
              </Link>
            </Button>
        </SubHeading>
      </SubHeading>
      <div className="flex flex-col gap-3">
        <SubHeading className="text-foreground font-semibold">
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

        <SubHeading className="text-foreground font-semibold">
          Thing&apos;s i did{" "}
        </SubHeading>
        <ul>
          {project.description.map((descriptions, index) => (
            <li key={index}>
              <SubHeading className="my-0 mx-2 ">{descriptions}</SubHeading>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
