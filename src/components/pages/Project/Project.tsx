import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import { projectsConfig } from "@/config/Project.config";
import ProjectsCard from "./ProjectsCard";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function Project() {
    return (
        <div className="mt-10 min-h-screen" >
            <HeadingWithSubheading heading="Projects" subHeading="Projects i bulid" />
            <div className="space-y-5">
                {projectsConfig.map((project, index) => (
                    <StaggerComponentForList idx={0} key={index} >

                    <ProjectsCard key={index} {...project} />
                    </StaggerComponentForList>
                ))}
            </div>

        </div>
    )
}