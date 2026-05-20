import React from "react";
import HeadingWithSubheading from "../../common/headings/HeadingWithSubheading";
import ContentSection from "../../common/ContentSection";
import { BlogMatterType } from "@/lib/blog.helper";
import BlogCard from "./BlogCard";
import StaggerComponentForList from "../../animations/StaggerComponentForList";

export default function BlogMain({
  blogs,
}: {
  blogs: (BlogMatterType & { slug: string })[];
}) {
  return (
    <div className="mt-10  min-h-screen ">
      <HeadingWithSubheading
        heading="Blogs"
        subHeading="Beyond writing code every day, I occasionally write about what I'm building, learning, and thinking through."
      />

      <div className="flex flex-col gap-5">
        {" "}
        {blogs.map((blog, idx) => (
          <StaggerComponentForList idx={idx / 50} key={idx}>
            <BlogCard key={idx} blog={blog} />
          </StaggerComponentForList>
        ))}{" "}
      </div>
    </div>
  );
}
