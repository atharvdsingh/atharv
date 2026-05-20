import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { seoContent, structuredData } from "@/config/SeoContent.config";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import Container from "@/components/common/Container";
import BlogMain from "@/components/blogs/BlogMain";
import { blogInstance, BlogMatterType } from "@/lib/blog.helper";
import Heading from "@/components/common/headings/Heading";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

import SkillButton from "@/components/common/SkillButton";
import { Metadata } from "next";
import { generateMetadata } from "@/config/Meta.config";

export const metadata: Metadata = generateMetadata("/blogs");
export default async function Book() {
  const allBlogSlug = blogInstance.getAllSlugs();
  const blog = await Promise.all(
    allBlogSlug.map((slug) => blogInstance.getBlogMatter(slug + ".mdx")),
  );
  if (!blog.length)
    return (
      <Container>
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          <Heading>Sorry, No blog right now</Heading>
          <div>
            <div className="flex justify-between gap-2 hover:underline items-center ">
              <SkillButton className="px-3  ">
                <Link aria-label="Go to Home" href={"/"} className="">
                  Home
                </Link>
              </SkillButton>
            </div>
          </div>
        </div>
      </Container>
    );

  return (
    <Container>
      <BlogMain blogs={blog.map((b) => ({ slug: b.slug, ...b.matter }))} />
    </Container>
  );
}
