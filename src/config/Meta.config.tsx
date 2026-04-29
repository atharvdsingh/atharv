import type { Metadata } from "next";
import { Meta } from "@/types/config";
import { aboutConfig } from "./About.config";
import { basicInformationService } from "./BasicInformation.config";
import { socialLinks } from "./SocialLinks.config";

const fallbackSiteUrl = "https://atharv.sanchetna.in";

export const siteConfig = {
  title: `${aboutConfig.name} | Full-Stack Engineer`,
  description:
    "Portfolio of Atharv Dev Singh, a full-stack engineer building scalable products, thoughtful web experiences, and backend systems that hold up under pressure.",
  url: (process.env.NEXT_PUBLIC_URL || fallbackSiteUrl).replace(/\/$/, ""),
  ogImage: aboutConfig.image,
  author: {
    name: aboutConfig.name,
    twitter: "@Atharv_code",
    github: socialLinks.find((link) => link.name === "Github")?.href,
    linkedin: socialLinks.find((link) => link.name === "LinkedIn")?.href,
    email: socialLinks.find((link) => link.name === "email")?.href,
    keywords: [
      "portfolio",
      "full-stack engineer",
      "software engineer",
      "next.js developer",
      "typescript developer",
      "backend systems",
      "web development",
      ...aboutConfig.name.split(" "),
    ],
  },
};

export const pageMetadata: Record<string, Meta> = {
  "/": {
    title: `${aboutConfig.name} | ${basicInformationService.about}`,
    description:
      "Explore the portfolio of Atharv Dev Singh, a full-stack engineer building scalable products, backend systems, and modern web experiences.",
    keywords: [
      "portfolio",
      "full-stack engineer portfolio",
      "software engineer portfolio",
      "next.js portfolio",
      "projects",
      aboutConfig.name,
      ...aboutConfig.name.split(" "),
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
  "/about": {
    title: "Who is Atharv Dev Singh",
    description:
      "Read the story of Atharv Dev Singh, the engineer behind this portfolio, his work, interests, projects, and the way he thinks about building software.",
    keywords: [
      "who is atharv dev singh",
      "about atharv dev singh",
      "atharv dev singh bio",
      "software engineer story",
      aboutConfig.name,
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
  "/work": {
    title: "Work Experience - Professional Journey",
    description:
      "Explore the professional work of Atharv Dev Singh across startup engineering, frontend architecture, backend systems, and production-focused software development.",
    keywords: [
      "work experience",
      "software engineer experience",
      "backend engineer",
      "frontend engineer",
      "employment history",
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
  "/projects": {
    title: "Projects - My Work & Projects Portfolio",
    description:
      "Discover projects by Atharv Dev Singh across full-stack development, AI-powered productivity tools, and practical web products.",
    keywords: [
      "projects",
      "portfolio projects",
      "web development projects",
      "ai projects",
      "software products",
    ],
    ogImage: aboutConfig.image,
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
    ogImage: aboutConfig.image,
    twitterCard: "summary",
  },
  "/gears": {
    title: "Gears - My Setup & Tools",
    description:
      "Discover the tools, devices, and software Atharv Dev Singh uses to design, build, test, and ship software.",
    keywords: [
      "developer setup",
      "tools",
      "devices",
      "software",
      "development environment",
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
  "/books": {
    title: "Books - What Shapes My Thinking",
    description:
      "A reading list from Atharv Dev Singh covering software craftsmanship, systems thinking, philosophy, and the books that shape his work.",
    keywords: [
      "books for developers",
      "software engineering books",
      "reading list",
      "books that shape thinking",
      aboutConfig.name,
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
  "/movies": {
    title: "Movies - Stories I Keep Returning To",
    description:
      "A personal movie list from Atharv Dev Singh with the films he keeps returning to for pressure, pacing, ambition, and storytelling.",
    keywords: [
      "favorite movies",
      "movie list",
      "films for inspiration",
      "storytelling references",
      aboutConfig.name,
    ],
    ogImage: aboutConfig.image,
    twitterCard: "summary_large_image",
  },
};

export const getPageMetadata = (pathname: string) => {
  return pageMetadata[pathname] || pageMetadata["/"];
};

export const generateMetadata = (pathname: string): Metadata => {
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
