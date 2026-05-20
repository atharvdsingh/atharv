import { BlogMatterType } from "@/lib/blog.helper";
import { Link } from "next-view-transitions";
import React, { ReactNode } from "react";
import Heading from "../common/headings/Heading";
import SubHeading from "../common/headings/SubHeading";
import { MoveRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function BlogCard({ blog }: { blog: BlogMatterType }) {
  return (
    <Link
      href={"blogs//" + blog.title.replaceAll(" ", "-")}
      className="flex group gap-4 stagger-fade-in transition-all justify-around  items-center"
    >
      <div className="flex flex-col  line-clamp-10  ">
        <Heading className="font-bold truncate-text-overflow-ellipsis group-hover:text-foreground/85 text-lg text-foreground">
          {blog.title}
        </Heading>
        <SubHeading className="text-sm line-clamp-2 min-w-0">
          {blog.description}
        </SubHeading>
        <div className="flex gap-4">
          {blog.category.map((cat, idx) => (
            <Badge className="bg-accent/90" variant={"outline"} key={idx}>
              {cat}
            </Badge>
          ))}
        </div>

        <time className="text-sm opacity-75">
          {" "}
          {blog.publishedAt as unknown as React.ReactNode}{" "}
        </time>
      </div>
      <Button asChild variant={"link"}>
        <p className="  ">
          Read More <MoveRight />{" "}
        </p>
      </Button>
    </Link>
  );
}
