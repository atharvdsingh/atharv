import React from "react";

export interface About {
  name: string;
  craft: string[];
  image: string;
  email: string
}

export interface Contact {
  title: string;
  description: string;
  form: {
    label: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    placeholder: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
}

export interface Technology {
  name: string;
  href?: string;
  type?: TechnologyEnum;
  icon: React.ComponentType;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  locationFlexibility: "Remote" | "On-Site"
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export interface Footer {
  Navigate: {
    name: string;
    href: string;
  }[];
  contact: {
    name?: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

export interface Gears {
  name: string;
  icon: React.ReactNode;
  link?: string
}

// export interface Skills {
//   name: string;
//   icon: React.ReactNode;
// }

export interface SocialLinks {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard?: "summary" | "summary_large_image";
}
export interface BaseSiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    twitter: string;
    github: string;
    linkedin: string;
    email: string;
  };
  keyword: string[];
}

export interface Navbar {
  navItems:
  {
    label: string;
    href: string;
  }[]

}

export interface Project {
  name: string;
  image: string;
  description: string[];
  stack: Technology[];
  isLive: boolean;
  github: string;
  liveLink?: string;
  duration?: string;
  type: ProjectType
}

export interface quote {
  quote: string;
  author: string;
}
// export interface MYContact{
//   name:string,
//   icon:React.ReactNode,
//   href:string,
// }

export enum ProjectType {
  FULL_STACK = "Full Stack",
  AI = "AI",
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  MACHINE_LEARNING = "Machine Learning",
  CRYPTO = "Crypto",
  WEB3 = "Web3",
  DEVOPS = "DevOps",
}

export enum TechnologyEnum {
  LANGUAGE = "Language",
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  DEVOPS = "DevOps",
  TESTING = "Testing",
}

export interface Resume {
  name: string;
  icon: React.ComponentType;
  href: string;
}

export interface Craft {

  name: string,
  description: string
  href?: string
}

export interface Book {
 
  type: BookTypeEnum,
  book:{
    name:string,
    author:string,
    link:string
  }[]
  
}

export enum BookTypeEnum {
  TECH = "Tech",
  NOVEL = "Novel",
  SELF_HELP = "Self Help",
  MEANING = "Meaning of Life"
}

export interface Movies {
  name:string,
  imdbHref:string,
  releaseDate?:string,
}