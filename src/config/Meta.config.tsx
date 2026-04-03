import { title } from "process";
import { aboutConfig } from "./About.config";
import { contactConfig } from "./Contact.config";
import { socialLinks } from "./SocialLinks.config";
import { Meta } from "@/types/config";
import { basicInformationService } from "./BasicInformation.config";

export const siteConfig = {
  title: `${aboutConfig.name} portfolio`,
  description: ` Portfolio template of @${aboutConfig.name}'s `,
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  ogImage: aboutConfig.image,
  author: {
    name: aboutConfig.name,
    twitter: "@Atharv_code",
    github: socialLinks.find((link) => link.name === "Github")?.href,
    linkedin: socialLinks.find((link) => link.name === "LinkedIn")?.href,
    email: socialLinks.find((link) => link.name === "email")?.href,
    keywords: [
      "portfolio",
      "developer",
      "full-stack",
      "react",
      "nextjs",
      "typescript",
      "web development",
      aboutConfig.name.toLowerCase(),
      aboutConfig.name.split(" "),
    ],
  },
};

export const pageMetadata: Record<string, Meta> = {
  "/": {
    title: `${aboutConfig.name} - ${basicInformationService.about}`,
    description: `${aboutConfig.name} -${basicInformationService.about} expore about me   `,
    keywords: [
      "portfolio",
      "developer",
      "full-stack",
      "web development",
      "projects",
      aboutConfig.name,
      ...aboutConfig.name.split(" "),
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
  "/contact": {
    title: "Contact - Get in Touch",
    description:
      "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
    keywords: ["contact", "hire", "collaboration", "freelance", "developer"],
    ogImage: "/assets/logo.png",
    twitterCard: "summary",
  },
  "/work-experience": {
    title: "Work Experience - Professional Journey",
    description:
      "Explore my professional work experience across different companies and roles in software development.",
    keywords: [
      "work experience",
      "career",
      "professional",
      "software developer",
      "employment history",
    ],
    ogImage: "/meta/work.png",
    twitterCard: "summary_large_image",
  },
  "/projects": {
    title: "Projects - My Work & Projects Portfolio",
    description:
      "Discover my projects and work across different technologies and domains. From web apps to mobile solutions.",
    keywords: [
      "projects",
      "portfolio",
      "web development",
      "applications",
      "software",
    ],
    ogImage: "/meta/projects.png",
    twitterCard: "summary_large_image",
  },
  "/blog": {
    title: "Blog - Thoughts & Tutorials",
    description:
      "Read my thoughts, tutorials, and insights on engineering, programming, and web development.",
    keywords: [
      "blog",
      "tutorials",
      "programming",
      "web development",
      "technical writing",
    ],
    ogImage: "/meta/blogs.png",
    twitterCard: "summary_large_image",
  },
  "/resume": {
    title: "Resume - Professional CV",
    description: `View and download ${aboutConfig.name}'s professional resume and CV. Technical skills, experience, and qualifications.`,
    keywords: [
      "resume",
      "cv",
      "professional",
      "skills",
      "qualifications",
      "download",
    ],
    ogImage: "/meta/resume.png",
    twitterCard: "summary",
  },
  "/gears": {
    title: "Gears - My Setup & Tools",
    description:
      "Discover the tools, devices, and software I use to get my work done efficiently.",
    keywords: [
      "setup",
      "tools",
      "devices",
      "software",
      "productivity",
      "development environment",
    ],
    ogImage: "/meta/gears.png",
    twitterCard: "summary_large_image",
  },
};

export const getPageMetadata = (pathname: string) => {
  return pageMetadata[pathname] || pageMetadata["/"];
};

export const generateMetadata = (pathname: string) => {
  const pageMeta = getPageMetadata(pathname);
  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    icons: {
      icon: aboutConfig.image,
      apple: aboutConfig.image,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
};
