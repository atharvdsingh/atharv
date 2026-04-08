import { Experience } from "@/types/config";
import SubHeading from "../../common/headings/SubHeading";
import Heading from "../../common/headings/Heading";
import GhostButton from "../../common/GhostButton";

export default function WorkCard(experience: Experience) {
  return (
    <div className="flex flex-col">
      <div className="flex cursor-pointer rounded-lg my-3 justify-between items-center text-sm text-muted-foreground">
        <div>
          <Heading
            as="h3"
            className={` border-b-foreground ${experience.isBlur ? "blur-sm" : ""} `}
          >
            {experience.isBlur ? (
              <span>sorry, can&apos;t tell </span>
            ) : (
              experience.company
            )}
          </Heading>
          <SubHeading as="span"> {experience.position} </SubHeading>
        </div>
        <div className="text-sm text-muted-foreground">
          <SubHeading as="span">
            {experience.startDate}-
            {experience.endDate ? experience.endDate : "Present"}
          </SubHeading>
          <SubHeading as="span" className="flex gap-2 ">
            {experience.location}
            <span className="sm:flex  hidden ">
              {experience.locationFlexibility}
            </span>
          </SubHeading>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <SubHeading as="h4" className="text-foreground font-semibold">
          Technologies used
        </SubHeading>
        <div className="flex gap-3 flex-wrap ">
          {experience.technologies.slice(0, 6).map((stack, index) => {
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
        <ul>
          {experience.description.map((descriptions, index) => (
            <li key={index} >

              <SubHeading as="span" className="my-0 mx-2 "> {descriptions} </SubHeading>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
