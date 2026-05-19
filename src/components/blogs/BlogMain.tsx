import React from "react";
import HeadingWithSubheading from "../common/headings/HeadingWithSubheading";
import ContentSection from "../common/ContentSection";

export default function BlogMain({}) {
  return (
    <div className="mt-10  min-h-screen ">
      <HeadingWithSubheading
        heading="Blogs"
        subHeading="Other then writing better code everyday, sometimes i write some blogs. yahhh i given you permission to read"
      />
      <div className="flex flex-col gap-5"></div>
    </div>
  );
}
