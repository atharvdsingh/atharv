import { Experience } from "@/types/config";
import SubHeading from "../../common/headings/SubHeading";
import Heading from "../../common/headings/Heading";
import GhostButton from "../../common/GhostButton";

export default function WorkCard(experience: Experience) {
  return (
    <div className="flex flex-col">
      <SubHeading className="flex cursor-pointer rounded-lg my-3 justify-between items-center ">
        <SubHeading>
          <Heading
            className={` border-b-foreground ${experience.isBlur ? "blur-sm" : ""} `}
          >
            {experience.isBlur ? (
              <Heading>sorry, can't tell </Heading>
            ) : (
              experience.company
            )}
          </Heading>
          <SubHeading> {experience.position} </SubHeading>
        </SubHeading>
        <SubHeading>
          <SubHeading>
            {experience.startDate}-
            {experience.endDate ? experience.endDate : "Present"}
          </SubHeading>
          <SubHeading className="flex gap-2 ">
            {experience.location}
            <div className="sm:flex  hidden ">
              {experience.locationFlexibility}
            </div>
          </SubHeading>
        </SubHeading>
      </SubHeading>
      <div className="flex flex-col gap-3">
        <SubHeading className="text-foreground font-semibold">
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

        <SubHeading className="text-foreground font-semibold">
          Thing's i did{" "}
        </SubHeading>
        <ul>
          {experience.description.map((descriptions, index) => (
            <li key={index} >

              <SubHeading  className="my-0 mx-2 "> {descriptions} </SubHeading>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
