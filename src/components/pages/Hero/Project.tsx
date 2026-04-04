import MajorHeading from "../../common/headings/MajorHeading";
import { projectsConfig } from "@/config/Project.config";
import ProjectHeroCard from "../Project/ProjectHeroCard";

import ShowAllProject from "./ShowAllProject";

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
        <ShowAllProject/>


      </div>
    </div>
  );
}
