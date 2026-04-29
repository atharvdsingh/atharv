import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { seoContent, structuredData } from "@/config/SeoContent.config";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import { projectsConfig } from "@/config/Project.config";
import ProjectsCard from "./ProjectsCard";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function Project() {
  return (
    <div className="mt-10 min-h-screen">
      <JsonLd data={structuredData.getItemList("Project", projectsConfig)} />
      <HeadingWithSubheading heading="Projects" subHeading="Projects i bulid" />
      <ContentSection paragraphs={seoContent.projects.intro} />
      <div className="space-y-5">
        {projectsConfig.map((project, index) => (
          <StaggerComponentForList idx={0} key={index}>
            <ProjectsCard key={index} {...project} />
          </StaggerComponentForList>
        ))}
      </div>
    </div>
  );
}
