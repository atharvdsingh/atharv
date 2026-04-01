import React from "react";
import Container from "../common/Container";
import Heading from "../common/headings/Heading";
import SubHeading from "../common/headings/SubHeading";
import HeadingWithSubheading from "../common/headings/HeadingWithSubheading";

export default function Book() {
  return (
    <div className="mt-5  min-h-screen ">
      <HeadingWithSubheading
        heading="Books"
        subHeading="Book that shape thinking"
      />
    </div>
  );
}
