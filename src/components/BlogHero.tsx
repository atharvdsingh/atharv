import { Link } from "next-view-transitions";
import HapticFeedback from "./common/HapticFeedback";
import MajorHeading from "./common/headings/MajorHeading";
import { Button } from "./ui/button";
import { experienceConfig } from "@/config/Experience.config";
import ExperienceHeroCard from "./pages/Hero/ExperienceHeroCard";
import { blogInstance, BlogMatterType } from "@/lib/blog.helper";
import BlogCard from "./pages/blogs/BlogCard";

export default async function BlogHero() {
  const slugs = blogInstance.getAllSlugs();
  const blogs: (BlogMatterType & { slug: string })[] = await Promise.all(
    slugs.slice(0, 2).map((slug) => {
      return blogInstance.getBlogMatterBySlugs(slug);
    }),
  );
  if (!slugs) return <></>;
  console.log(blogs);
  return (
    <div className="flex mt-10 gap-4 flex-col ">
      <MajorHeading>Blogs</MajorHeading>
      {/* {experienceConfig.map((exp, index) => (
        <ExperienceHeroCard key={index} {...exp} />
      ))} */}
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
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
