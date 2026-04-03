import React from "react";
import SubHeading from "./headings/SubHeading";
import { footerConfig } from "@/config/Footer.config";
import { Link } from "next-view-transitions";
import Heading from "./headings/Heading";
import HapticFeedback from "./HapticFeedback";

export default function Footer() {
  return (
    <div className="max-w-3xl   inset-x-0 bottom-0 p-10  bg-muted/30  border mx-auto container ">
      <div className="grid grid-cols-1 mx-5 sm:grid-cols-2 gap-10 ">
        <div className="flex flex-col items-center gap-5">
          <h1>NAVIGATE</h1>
          <div className="flex flex-wrap gap-x-7 ">
            {footerConfig.Navigate.map((item, index) => (
              <SubHeading
                key={index}
                className="hover:text-foreground flex justify-center items-center "
              >

                <Link className="text-sm " href={item.href}>
                <HapticFeedback feedback="selection" >
                  {item.name}{" "}
                </HapticFeedback>
                </Link>
              </SubHeading>
            ))}
          </div>
        </div>
        <div className="flex  items-center   flex-col gap-5">
          <h1>CONNECT</h1>
          <div className="  grid mx-5 grid-cols-5 gap-5 ">
            {footerConfig.contact.map((item, index) => (
              <SubHeading key={index} className="hover:text-foreground">
                <a
                  className=" flex justify-center items-center [&>svg]:size-5"
                  href={item.href}
                >
                  {item.icon}
                </a>
              </SubHeading>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
