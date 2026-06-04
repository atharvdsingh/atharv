import { MetadataRoute } from "next";
import { siteConfig } from "@/config/Meta.config";
import { blogInstance } from "@/lib/blog.helper";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/work",
    "/projects",
    "/resume",
    "/gears",
    "/books",
    "/movies",
    "/blogs",
    ...blogInstance.getAllSlugs().map((slug) => "/blogs/" + slug),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "monthly"
        : route.startsWith("/blogs/")
          ? "yearly"
          : "weekly",
    priority: route === "" ? 1 : route.startsWith("/blogs/") ? 0.7 : 0.8,
  }));
}
