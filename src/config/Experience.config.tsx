import ReactIcon from "@/components/technologies/ReactIcon";
import NextJs from "@/components/technologies/NextJs";
import Docker from "@/components/technologies/Docker";
import TypeScript from "@/components/technologies/TypeScript";
import JavaScript from "@/components/technologies/JavaScript";
import Flask from "@/components/technologies/Flask";
import { Experience, TechnologyEnum } from "@/types/config";
import TailwindCss from "@/components/technologies/TailwindCss";
import NestJs from "@/components/technologies/NestJs";
import Kubernetes from "@/components/technologies/Kubernetes";
import Kafka from "@/components/technologies/Kafka";
import Redis from "@/components/technologies/Redis";
const stealth: Experience = {
  company: "Stealth Startup",
  position: "Founding Engineer",
  location: "Hyderabad",
  image: "/logos/stealth.png",
  locationFlexibility: "Remote",
  description: [
    "Built scalable microservices using NestJS and TypeScript, focusing on clean architecture and modular design.",
    "Reduced API latency by 40% by implementing Redis.",
    "Integrated Apache Kafka to handle asynchronous events and decoupled heavy background processing from the main event loop.",
    "Optimized database queries and added indexing to support high-throughput data streams in production.",
  ],
  startDate: "Jan 2026",
  endDate: "Present",
  website: "",
  x: "",
  isCurrent: true,
  isBlur: true,
  technologies: [
    { name: "Next.js", icon: NextJs, type: TechnologyEnum.FRONTEND },
    { name: "TypeScript", icon: TypeScript, type: TechnologyEnum.LANGUAGE },
    { name: "NestJS", icon: NestJs, type: TechnologyEnum.BACKEND },
    { name: "redis", icon: Redis, type: TechnologyEnum.BACKEND },
    { name: "kafka", icon: Kafka, type: TechnologyEnum.BACKEND },
    { name: "kubernetes", icon: Kubernetes, type: TechnologyEnum.DEVOPS },
  ],
};

const IITAllahabadConfig: Experience = {
  company: "IIIT Allahabad",
  position: "Software Developer Intern",
  location: "Allahabad",
  image: "",
  locationFlexibility: "On-Site",
  description: [
    "Developed software solutions using React and Next.js for frontend architecture.",
    "Built robust backend services and APIs using Python and Flask.",
    "Containerized applications with Docker to ensure consistent environments and deployments.",
    "Utilized TypeScript and JavaScript to create scalable, type-safe web applications.",
  ],
  startDate: "Apr 2025", // Please update with actual dates
  endDate: "Aug 2025", // Please update with actual dates
  website: "https://www.iiita.ac.in/",
  x: "https://x.com/iiita_official?lang=en",
  isCurrent: false,
  isBlur: false,
  technologies: [
    { name: "React", icon: ReactIcon, type: TechnologyEnum.FRONTEND },
    { name: "Next.js", icon: NextJs, type: TechnologyEnum.FRONTEND },
    { name: "Docker", icon: Docker, type: TechnologyEnum.DEVOPS },
    { name: "TypeScript", icon: TypeScript, type: TechnologyEnum.LANGUAGE },
    { name: "JavaScript", icon: JavaScript, type: TechnologyEnum.LANGUAGE },
    { name: "Flask", icon: Flask, type: TechnologyEnum.BACKEND },
  ],
};

export const experienceConfig: Experience[] = [stealth, IITAllahabadConfig];
