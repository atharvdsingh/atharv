import { blogInstance, BlogMatterType } from "@/lib/blog.helper";
import React from "react";
import Container from "@/components/common/Container";
import Heading from "@/components/common/headings/Heading";
import SubHeading from "@/components/common/headings/SubHeading";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import { MoveLeft } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/Meta.config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CopyToClickBoard from "@/components/common/CopyToClickBoard";
import BlogShareLinkCopyButton from "./BlogShareLinkCopyButton";

export async function generateStaticParams() {
  const post = blogInstance.getAllSlugs();
  return post.map((blog) => ({
    slug: [blog],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { matter } = blogInstance.getBlogBySlug(slug[0].toLowerCase());

  return {
    title: `${matter.title} | ${siteConfig.author.name}`,
    description: matter.description,
    keywords: matter.tags,
    openGraph: {
      title: matter.title,
      description: matter.description,
      type: "article",
      publishedTime: new Date(matter.publishedAt).toISOString(),
      authors: [siteConfig.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: matter.title,
      description: matter.description,
      creator: siteConfig.author.twitter,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const { matter, content } = blogInstance.getBlogBySlug(slug[0].toLowerCase());

  return (
    <Container>
      <article className="mt-10 min-h-screen">
        {/* Back link */}
        <div
          className="stagger-item"
          style={{ "--stagger-idx": 0 } as React.CSSProperties}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <MoveLeft className="size-4" />
            Back to blogs
          </Link>
        </div>

        {/* Blog header */}
        <header
          className="mb-10 border-b border-border pb-8 stagger-item"
          style={{ "--stagger-idx": 1 } as React.CSSProperties}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {matter.category.map((cat, idx) => (
              <Badge className="bg-accent/90" variant="outline" key={idx}>
                {cat}
              </Badge>
            ))}
          </div>

          <Heading
            as="h1"
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
          >
            {matter.title}
          </Heading>

          <SubHeading className="text-base mb-4">
            {matter.description}
          </SubHeading>
          <div className="flex justify-between">
            <time className="text-sm text-muted-foreground">
              {new Date(matter.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="px-4" variant={"outline"}>
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background rounded-sm ">
                <DialogHeader className="">
                  <DialogTitle>Share this post</DialogTitle>
                </DialogHeader>
                <DialogDescription>{matter.title}</DialogDescription>
                <div className="flex items-center gap-2">
                  <div className="grid flex-1 gap-2">
                    <p>Copy link</p>

                    <BlogShareLinkCopyButton />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* MDX content */}
        <div
          className="prose-blog stagger-item"
          style={{ "--stagger-idx": 2 } as React.CSSProperties}
        >
          <MDXRemote source={content} />
        </div>
      </article>
    </Container>
  );
}
