import Container from "@/components/common/Container";
import Heading from "@/components/common/headings/Heading";
import SkillButton from "@/components/common/SkillButton";
import SubHeading from "@/components/common/headings/SubHeading";
import { ThemeButton } from "@/components/common/ThemeButton";
import ExperienceHero from "@/components/pages/Experience/ExperienceHero";
import ExperienceHeroCard from "@/components/pages/Hero/ExperienceHeroCard";
import MainHeading from "@/components/pages/Hero/MainHeading";
import SocialsLinks from "@/components/pages/Hero/SocialsLinks";
import { basicInformationService } from "@/config/BasicInformation.config";
import { technologyConfig } from "@/config/Technology.config";
import Image from "next/image";
import Project from "@/components/pages/Hero/Project";
import ProjectStackIcon from "@/components/pages/Project/ProjectStackIcons";
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
          <Craft/>
        </div>
      </Container>
    </>
  );
}
