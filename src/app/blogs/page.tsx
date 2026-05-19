import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { seoContent, structuredData } from "@/config/SeoContent.config";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import Container from "@/components/common/Container";
import BlogMain from "@/components/blogs/BlogMain";
import { blogInstance } from "@/lib/blog.helper";

export default async function Book() {
  try {
    const allBlogSlug = blogInstance.getAllSlugs();
    const blog = await Promise.all(
      allBlogSlug.map((slug) => blogInstance.getBlogMatter(slug + ".mdx")),
    );
    console.log(blog);
  } catch (error) {
    console.log(error);
    return [];
  }

  return (
    <Container>
      <BlogMain />
    </Container>
  );
}
