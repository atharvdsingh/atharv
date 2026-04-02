import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import { projectsConfig } from "@/config/Project.config";
import ProjectsCard from "./ProjectsCard";

export default function Project() {
    return (
        <div className="mt-10 min-h-screen" >
            <HeadingWithSubheading heading="Projects" subHeading="Projects i bulid" />
            <div className="space-y-5">
                {projectsConfig.map((project, index) => (
                    <ProjectsCard key={index} {...project} />
                ))}
            </div>

        </div>
    )
}