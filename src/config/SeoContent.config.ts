import { aboutConfig } from "./About.config";
import { siteConfig } from "./Meta.config";

export const seoContent = {
  books: {
    intro: [
      "I believe the way we build software is heavily influenced by what we read. Below is a curated list of books that have significantly shaped my engineering mindset.",
      "These selections range from pragmatic software craftsmanship and systems design to broader philosophical works about focus, discipline, and building things that last. I regularly return to these texts when designing complex backend systems or considering the long-term maintainability of a codebase.",
    ],
  },
  movies: {
    intro: [
      "While my day-to-day work is steeped in logic and architecture, I draw a lot of inspiration from the pacing, pressure, and narratives found in film.",
      "This is a collection of movies I find myself returning to. Many of these stories focus on ambition, the consequences of intense focus, and people operating at the highest levels of their craft.",
    ],
  },
  projects: {
    intro: [
      "My approach to engineering is best demonstrated through what I build. These projects represent a mix of professional work, exploratory prototypes, and tools designed to solve specific problems.",
      "Whether it's a peer-to-peer platform or an AI-powered productivity tool, my focus remains on clean architecture, intuitive user experiences, and ensuring the underlying systems are robust enough to scale.",
    ],
  },
  gears: {
    intro: [
      "The tools we use dictate the friction we experience while working. I've spent years refining my setup to minimize distractions and maximize deep, focused work.",
      "Here is the hardware, software, and everyday carry that makes up my primary development environment.",
    ],
  },
};

export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: aboutConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${aboutConfig.image}`,
    jobTitle: "Full-Stack Engineer",
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
      siteConfig.author.twitter,
    ].filter(Boolean),
  },
  getItemList: (type: string, items: Record<string, unknown>[]) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name:
        item.name || item.title || item.bookName || item.projectName || "Item",
      url:
        item.url || item.link
          ? `${siteConfig.url}${item.url || item.link}`
          : undefined,
    })),
  }),
};
