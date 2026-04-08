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
            <main>
            <MainHeading />
            </main>
          </StaggerComponentForList>

          <StaggerComponentForList idx={2}>
            <main>
            <SubHeading className="text-sm py-4 ">
              {basicInformationService.info}
            </SubHeading>
            </main>
          </StaggerComponentForList>

          <StaggerComponentForList idx={3}>
            <SocialsLinks />
          </StaggerComponentForList>

          <StaggerComponentForList idx={4}>
            <main>
            <ExperienceHero />
            </main>
          </StaggerComponentForList>

          <StaggerComponentForList idx={5}>
            <main>
            <Project />
            </main>
          </StaggerComponentForList>

          <StaggerComponentForList idx={6}>
            <Craft />
          </StaggerComponentForList>
        </div>
      </Container>
    </>
  );
}
