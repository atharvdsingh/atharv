import { Link } from "next-view-transitions";
import HapticFeedback from "./common/HapticFeedback";
import MajorHeading from "./common/headings/MajorHeading";
import { Button } from "./ui/button";
import { experienceConfig } from "@/config/Experience.config";
import ExperienceHeroCard from "./pages/Hero/ExperienceHeroCard";

export default function BlogHero() {
  return (
    <div className="flex mt-10 gap-4 flex-col ">
      <MajorHeading>Blogs</MajorHeading>
      {experienceConfig.map((exp, index) => (
        <ExperienceHeroCard key={index} {...exp} />
      ))}
      <div className="flex justify-center items-center ">
        <HapticFeedback feedback="light">
          <Button asChild className="cursor-pointer px-2 " variant={"outline"}>
            <Link
              aria-label="Show all blogs written by me(atharv)"
              href={"/blogs"}
            >
              Show all blogs
            </Link>
          </Button>
        </HapticFeedback>
      </div>
    </div>
  );
}
