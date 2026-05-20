import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { structuredData } from "@/config/SeoContent.config";
import Container from "@/components/common/Container";
import BlogMain from "@/components/pages/blogs/BlogMain";
import { blogInstance, BlogMatterType } from "@/lib/blog.helper";
import Heading from "@/components/common/headings/Heading";
import { Link } from "next-view-transitions";

import SkillButton from "@/components/common/SkillButton";
import { Metadata } from "next";
import { generateMetadata } from "@/config/Meta.config";

export const metadata: Metadata = generateMetadata("/blogs");
export default async function Book() {
  const allBlogSlug = blogInstance.getAllSlugs();
  const blog = await Promise.all(
    allBlogSlug.map((slug) => blogInstance.getBlogMatterBySlugs(slug)),
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
      <JsonLd
        data={structuredData.getItemList(
          "Blog",
          blog.map((b) => ({
            name: b.title,
            url: `/blogs/${b.slug}`,
          })),
        )}
      />
      <BlogMain blogs={blog} />
    </Container>
  );
}
