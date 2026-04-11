import TypeScript from "@/components/technologies/TypeScript";
import JavaScript from "@/components/technologies/JavaScript";
import Python from "@/components/technologies/Python";
import ReactIcon from "@/components/technologies/ReactIcon";
import NextJs from "@/components/technologies/NextJs";
import NestJs from "@/components/technologies/NestJs";
import ExpressJs from "@/components/technologies/ExpressJs";
import MongoDB from "@/components/technologies/MongoDB";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Redis from "@/components/technologies/Redis";
import Kafka from "@/components/technologies/Kafka";
import SocketIo from "@/components/technologies/SocketIo";
import Prisma from "@/components/technologies/Prisma";
import Docker from "@/components/technologies/Docker";
import Kubernetes from "@/components/technologies/Kubernetes";
import AWS from "@/components/technologies/AWS";
import GitHubActions from "@/components/technologies/GitHubActions";
import Playwright from "@/components/technologies/Playwright";
import { Technology, TechnologyEnum } from "@/types/config";

const languages: Technology[] = [
  { name: "TypeScript", icon: TypeScript, type: TechnologyEnum.LANGUAGE },
  { name: "JavaScript", icon: JavaScript, type: TechnologyEnum.LANGUAGE },
  { name: "Python", icon: Python, type: TechnologyEnum.LANGUAGE },
];

const frontend: Technology[] = [
  { name: "React", icon: ReactIcon, type: TechnologyEnum.FRONTEND },
  { name: "Next.js", icon: NextJs, type: TechnologyEnum.FRONTEND },
];

const backendAndDatabase: Technology[] = [
  { name: "Nest.js", icon: NestJs, type: TechnologyEnum.BACKEND },
  { name: "Express.js", icon: ExpressJs, type: TechnologyEnum.BACKEND },
  { name: "MongoDB", icon: MongoDB, type: TechnologyEnum.DATABASE },
  { name: "PostgreSQL", icon: PostgreSQL, type: TechnologyEnum.DATABASE },
  { name: "Redis", icon: Redis, type: TechnologyEnum.DATABASE },
  { name: "Kafka", icon: Kafka, type: TechnologyEnum.BACKEND },
  { name: "WebSocket", icon: SocketIo, type: TechnologyEnum.BACKEND },
  { name: "Prisma", icon: Prisma, type: TechnologyEnum.DATABASE },
];

const devops: Technology[] = [
  { name: "Docker", icon: Docker, type: TechnologyEnum.DEVOPS },
  { name: "Kubernetes", icon: Kubernetes, type: TechnologyEnum.DEVOPS },
  { name: "AWS", icon: AWS, type: TechnologyEnum.DEVOPS },
  { name: "CI/CD", icon: GitHubActions, type: TechnologyEnum.DEVOPS },
];

const testing: Technology[] = [
  { name: "Playwright", icon: Playwright, type: TechnologyEnum.TESTING },
];
export const technologyConfig: Technology[] = [
  ...languages,
  ...frontend,
  ...backendAndDatabase,
  ...devops,
  ...testing,
];
