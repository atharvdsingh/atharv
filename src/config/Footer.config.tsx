import { Footer } from "@/types/config";
import { socialLinks } from "./SocialLinks.config";

export const footerConfig: Footer = {
  Navigate: [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    // { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Gears", href: "/gears" },
    { name: "Books", href: "/books" },
    { name: "Movies", href: "/movies" },
  ],
  contact: [...socialLinks],
};
