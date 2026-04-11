import { Footer } from "@/types/config";
import X from "@/components/svgs/X";
import LinkedIn from "@/components/svgs/LinkedIn";
import Github from "@/components/svgs/Github";
import Youtube from "@/components/svgs/Youtube";
import Instagram from "@/components/svgs/Instagram";
import Pinterest from "@/components/svgs/Pinterest";
import Medium from "@/components/svgs/Medium";
import Mail from "@/components/svgs/Mail";
import { socialLinks } from "./SocialLinks.config";

export const footerConfig: Footer = {
  Navigate: [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    // { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Gears", href: "/gears" },
    { name: "Books", href: "/books" },
    { name: "Movies", href: "/movies" },
  ],
  contact: [...socialLinks],
};
