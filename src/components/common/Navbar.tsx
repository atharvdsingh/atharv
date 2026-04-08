import { navbarConfig } from "@/config/Navbar.config";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";
import { ThemeButton } from "./ThemeButton";
import Container from "./Container";
import SubHeading from "./headings/SubHeading";
import HapticFeedback from "./HapticFeedback";

export default function Navbar() {
  return (
    <Container>
      <div className="flex inset-x-0 top-0 py-3 fixed max-w-3xl z-50  px-2 rounded-2xl backdrop-blur-sm mx-auto items-center justify-between">
        <div className="flex gap-8 items-center justify-evenly">
          {navbarConfig.navItems.map((navItem, index) => (
<<<<<<< HEAD
            <HapticFeedback feedback="light" key={index} >
              <SubHeading
                as="div"
                className="hover:text-accent-foreground duration-200 cursor-pointer"
              >
                <Link href={navItem.href}>{navItem.label}</Link>
              </SubHeading>
            </HapticFeedback>
=======
            <SubHeading
              className="   hover:text-accent-foreground duration-200 cursor-pointer "
              key={index}
            >
              <HapticFeedback feedback="light" >

              <Link href={navItem.href}>{navItem.label}</Link>
              </HapticFeedback>
            </SubHeading>
>>>>>>> parent of 14b3e71 (fix:image loading)
          ))}
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </Container>
  );
}
