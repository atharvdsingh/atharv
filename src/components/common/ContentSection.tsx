import React from "react";
import Heading from "./headings/Heading";
import SubHeading from "./headings/SubHeading";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title?: string;
  paragraphs?: string[];
  className?: string;
}

export default function ContentSection({
  title,
  paragraphs = [],
  className,
}: ContentSectionProps) {
  if (!paragraphs.length && !title) return null;

  return (
    <section className={cn("space-y-4 mb-8", className)}>
      {title && (
        <Heading as="h2" className="text-2xl font-semibold">
          {title}
        </Heading>
      )}
      <div className="space-y-3">
        {paragraphs.map((paragraph, index) => (
          <SubHeading
            key={index}
            as="p"
            className="leading-7 text-pretty text-foreground/80"
          >
            {paragraph}
          </SubHeading>
        ))}
      </div>
    </section>
  );
}
