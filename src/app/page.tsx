import Container from "@/components/common/Container";
import SubHeading from "@/components/common/headings/SubHeading";
import ExperienceHero from "@/components/pages/Experience/ExperienceHero";
import MainHeading from "@/components/pages/Hero/MainHeading";
import SocialsLinks from "@/components/pages/Hero/SocialsLinks";
import { basicInformationService } from "@/config/BasicInformation.config";
import Project from "@/components/pages/Hero/Project";
import Craft from "@/components/pages/Hero/Craft";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function Home() {
  return (
    <>
      <Container className="flex   flex-col   ">
        <div className=" flex flex-col min-h-screen ">
          <StaggerComponentForList idx={1}>
            <MainHeading />
          </StaggerComponentForList>

          <StaggerComponentForList idx={2}>
            <SubHeading as="p" className="text-sm py-4 ">
              {basicInformationService.info}
            </SubHeading>
          </StaggerComponentForList>

          <StaggerComponentForList idx={3}>
            <SocialsLinks />
          </StaggerComponentForList>

          <StaggerComponentForList idx={4}>
            <ExperienceHero />
          </StaggerComponentForList>

          <StaggerComponentForList idx={5}>
            <Project />
          </StaggerComponentForList>

          <StaggerComponentForList idx={6}>
            <Craft />
          </StaggerComponentForList>
        </div>
      </Container>
    </>
  );
}
