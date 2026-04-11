import { SocialLinks } from "@/types/config";
import X from "@/components/svgs/X";
import LinkedIn from "@/components/svgs/LinkedIn";
import Github from "@/components/svgs/Github";
import Youtube from "@/components/svgs/Youtube";
import Instagram from "@/components/svgs/Instagram";
import Pinterest from "@/components/svgs/Pinterest";
import Medium from "@/components/svgs/Medium";
import Mail from "@/components/svgs/Mail";

export const socialLinks: SocialLinks[] = [
  { name: "X", icon: <X />, href: "https://x.com/Atharv_code" },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/atharv-dev-singh-621437332/",
  },
  { name: "Github", icon: <Github />, href: "https://github.com/atharvdsingh" },
  {
    name: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/ig_atharvdev/",
  },
  { name: "email", icon: <Mail />, href: "mailto:dsingh9450492600@gmail.com" },
];
