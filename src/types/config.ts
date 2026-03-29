import React from "react";

export interface About {
  name: string;
  craft: string[];
  image?: string;
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
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
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
  links: [
    {
      name: string;
      href: string;
    },
  ];
  contact: [
    {
      name?: string;
      icon: React.ReactNode;
      href: string;
    },
  ];
}


export interface Gears{
    name:string,
    icon:React.ReactNode
}

export interface Skills{
    name:string,
    icon:React.ReactNode
}
export interface SocialLinks{
    name:string,
    icon:React.ReactNode

}

export interface Meta {
    title:string,
    description:string,
    keywords:string[],
    ogImage:string;
    twitterCard?:"summary" | "summary_large_image"
}
export interface BaseSiteConfig{
    name:string,
    title:string,
    description:string,
    url:string,
    ogImage:string,
    author:{
        name:string,
        twitter:string,
        github:string,
        linkedin:string,
        email:string
    },
    keyword:string[],
}

export interface Navbar{
    logo:string,
    navItems:[{
        label:string,
        href:string
    }]
}

export interface Project{
    name:string,
    image:string,
    description:string[]
    stack:Technology[]
    isLive:boolean
    github:string,
    liveLink?:string,
    duration?:string,
    type:ProjectType[]
}

export interface quote {
    quote:string,
    author:string
}

enum ProjectType{
    FULL_STACK,
    FRONTEND,
    BACKEND,
    MACHINE_LEARNING,
    CRYPTO,
    WEB3,
    DEVOPS
}

export interface Resume{
    url:string
}

