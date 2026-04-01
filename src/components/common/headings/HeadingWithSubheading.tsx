import React from "react";
import CopyToClickBoard from "../CopyToClickBoard";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Separator } from "@/components/ui/separator";

export default function HeadingWithSubheading({
    heading,
    subHeading,
}: {
    heading: string;
    subHeading: string;
}) {
    return (
        <div className="flex h-full flex-col gap-2" >
            <Heading>{heading}</Heading>
            < SubHeading>{subHeading}</SubHeading>
            <Separator className="my-5" />

        </div>
    );
}
