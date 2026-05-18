import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { seoContent, structuredData } from "@/config/SeoContent.config";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import Container from "@/components/common/Container";
import BlogMain from "@/components/blogs/BlogMain";

export default function Book() {
  return (
    <Container>
      <BlogMain />
    </Container>
  );
}
