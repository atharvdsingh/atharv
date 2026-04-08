import Container from "@/components/common/Container";
import Heading from "@/components/common/headings/Heading";
import SubHeading from "@/components/common/headings/SubHeading";
import SkillButton from "@/components/common/SkillButton";
import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <Container className="flex items-center min-h-screen justify-center">
      <div className="min-h-screen" >

        <div className="min-h-[60vh] flex items-center justify-center ">
          <div className=" flex  flex-col justify-center items-center space-y-3">
            <h1 className="text-5xl tracking-widest font-extrabold opacity-95 "> 404 </h1>
            <Heading>Page Not Found</Heading>
            <SubHeading>Could not find requested resource</SubHeading>
            <SkillButton className="px-3  " >


              <Link aria-label="Go to Home" href={"/"} className="" >Home</Link>            </SkillButton>
          </div>
        </div>
      </div>
    </Container>
  );
}
