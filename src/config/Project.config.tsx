import { Project, ProjectType } from "@/types/config";
import { technologyConfig } from "./Technology.config";

const bookchetna: Project = {
  name: "BookChetna",
  image: "/project/bookchetna.png",
  description: [" "],
  stack:[
    ...technologyConfig
  ],
  isLive:true,
  github:"https://github.com/atharvdsingh/bookchetna",
  liveLink:"https://book.sanchetna.in",
  type: ProjectType.FULL_STACK
};
const workmind:Project={
    name:"Workmind",
    image:"/Project/workmind.png",
    description:[""],
    stack:[
        ...technologyConfig
    ],
    isLive:true,
    github:"https://github.com/atharvdsingh/workmind",
    liveLink:"https://workmind.sanchetna.in",
    type: ProjectType.AI
}
export const projectsConfig:Project[] = [{
    ...bookchetna,
    ...workmind
}
]