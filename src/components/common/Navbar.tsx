import { navbarConfig } from "@/config/Navbar.config";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";
import { ThemeButton } from "./ThemeButton";
import Container from "./Container";
import SubHeading from "./SubHeading";

export default function Navbar() {
  return (
    <Container>
      <div className="flex  items-center justify-between">
        <div className="flex gap-8 items-center justify-evenly">
          {navbarConfig.navItems.map((navItem, index) => (
            <SubHeading
              className=" hover:text-accent-foreground duration-200 cursor-pointer "
              key={index}
            >
              <Link href={navItem.href}>{navItem.label}</Link>
            </SubHeading>
          ))}
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </Container>
  );
}
