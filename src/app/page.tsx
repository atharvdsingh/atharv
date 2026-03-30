import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import SkillButton from "@/components/common/SkillButton";
import SubHeading from "@/components/common/SubHeading";
import { ThemeButton } from "@/components/common/ThemeButton";
import MainHeading from "@/components/Hero/MainHeading";
import SocialsLinks from "@/components/Hero/SocialsLinks";
import { basicInformationService } from "@/config/BasicInformation.config";
import { technologyConfig } from "@/config/Technology.config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="my-16 flex flex-col   ">
        <MainHeading />
        <SubHeading className="text-sm py-4 " >{basicInformationService.info}</SubHeading>
        <SocialsLinks/>
      </Container>
    </>
  );
}
