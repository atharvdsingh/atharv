import { MetadataRoute } from "next";
import { siteConfig } from "@/config/Meta.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/about",
    "/work",
    "/projects",
    "/resume",
    "/gears",
    "/books",
    "/movies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
