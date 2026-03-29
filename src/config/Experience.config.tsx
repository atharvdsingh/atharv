import ReactIcon from "@/components/technologies/ReactIcon";
import NextJs from "@/components/technologies/NextJs";
import Docker from "@/components/technologies/Docker";
import TypeScript from "@/components/technologies/TypeScript";
import JavaScript from "@/components/technologies/JavaScript";
import Flask from "@/components/technologies/Flask";
import { Experience, TechnologyEnum } from "@/types/config";

const IITAllahabadConfig: Experience = {
    company: "Indian Institute of Information Technology (IIIT) Allahabad",
    position: "Software Developer Intern",
    location: "Allahabad",
    image: "",
    description: [
        "Developed software solutions using React and Next.js for frontend architecture.",
        "Built robust backend services and APIs using Python and Flask.",
        "Containerized applications with Docker to ensure consistent environments and deployments.",
        "Utilized TypeScript and JavaScript to create scalable, type-safe web applications."
    ],
    startDate: "April 2025", // Please update with actual dates
    endDate: "August 2025",  // Please update with actual dates
    website: "https://www.iiita.ac.in/",
    x: "https://x.com/iiita_official?lang=en",
    isCurrent: false,
    technologies: [
        { name: "React", icon: ReactIcon, type: TechnologyEnum.FRONTEND },
        { name: "Next.js", icon: NextJs, type: TechnologyEnum.FRONTEND },
        { name: "Docker", icon: Docker, type: TechnologyEnum.DEVOPS },
        { name: "TypeScript", icon: TypeScript, type: TechnologyEnum.LANGUAGE },
        { name: "JavaScript", icon: JavaScript, type: TechnologyEnum.LANGUAGE },
        { name: "Flask", icon: Flask, type: TechnologyEnum.BACKEND }
    ]
};

export const experienceConfig: Experience[] = [
    IITAllahabadConfig
];