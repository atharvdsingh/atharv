import Container from "@/components/common/Container";
import SubHeading from "@/components/common/headings/SubHeading";
import ExperienceHero from "@/components/pages/Experience/ExperienceHero";
import MainHeading from "@/components/pages/Hero/MainHeading";
import SocialsLinks from "@/components/pages/Hero/SocialsLinks";
import { basicInformationService } from "@/config/BasicInformation.config";
import Project from "@/components/pages/Hero/Project";
import Craft from "@/components/pages/Hero/Craft";

export default function Home() {
  return (
    <>
      <Container className="flex   flex-col   ">
        <div className=" flex flex-col min-h-screen ">
          <MainHeading />
          <SubHeading className="text-sm py-4 ">
            {basicInformationService.info}
          </SubHeading>

          <SocialsLinks />

          <ExperienceHero />
          <Project />
          <Craft />
        </div>
      </Container>
    </>
  );
}
