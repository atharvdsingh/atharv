import { MetadataRoute } from "next";
import { siteConfig } from "@/config/Meta.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://atharv.sanchetna.in/sitemap.xml`,
  };
}
