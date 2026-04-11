import { Project, ProjectType } from "@/types/config";
import { technologyConfig } from "./Technology.config";

const bookchetna: Project = {
  name: "BookChetna",
  image: "/project/bookchetna.png",
  description: ["Peer to Peer Book Exchange Platform"],
  stack:[
    ...technologyConfig
  ],
  isLive:true,
  github:"https://github.com/atharvdsingh/bookchetna",
  liveLink:"https://book.sanchetna.in",
  type: ProjectType["FULL_STACK"]
};
const workmind:Project={
    name:"Workmind",
    image:"/Project/workmind.png",
    description:["AI Powered Productivity and Task Management Tool"],
    stack:[
        ...technologyConfig
    ],
    isLive:true,
    github:"https://github.com/atharvdsingh/workmind",
    liveLink:"https://workmind.sanchetna.in",
    type: ProjectType.AI
}
export const projectsConfig:Project[] = [
    {...bookchetna},
    {...workmind}

]