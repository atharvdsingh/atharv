import { blogInstance } from "@/lib/blog.helper";
import React from "react";

export async function generateStaticParams() {
  const post = blogInstance.getAllSlugs();
  return post.map((blog) => ({
    slug: [blog],
  }));
}
export default async function page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { matter, content } = blogInstance.getBlogBySlug(slug[0].toLowerCase());
  console.log(matter);
  console.log(content);

  return <div>{matter.title}</div>;
}
