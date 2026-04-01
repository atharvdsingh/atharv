import Container from "@/components/common/Container";
import Heading from "@/components/common/headings/Heading";
import SkillButton from "@/components/common/SkillButton";
import SubHeading from "@/components/common/headings/SubHeading";
import { ThemeButton } from "@/components/common/ThemeButton";
import ExperienceHero from "@/components/Experience/ExperienceHero";
import ExperienceHeroCard from "@/components/Hero/ExperienceHeroCard";
import MainHeading from "@/components/Hero/MainHeading";
import SocialsLinks from "@/components/Hero/SocialsLinks";
import { basicInformationService } from "@/config/BasicInformation.config";
import { technologyConfig } from "@/config/Technology.config";
import Image from "next/image";
import Project from "@/components/Hero/Project";
import ProjectStackIcon from "@/components/Project/ProjectStackIcons";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col   ">
        <MainHeading />
        <SubHeading className="text-sm py-4 " >{basicInformationService.info}</SubHeading>
        
        <SocialsLinks/>



        <ExperienceHero  />
        <Project/>
      </Container>
    </>
  );
}
