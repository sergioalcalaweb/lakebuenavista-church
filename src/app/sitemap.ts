import { siteConfig } from "@/config/site";
import { publicUrls } from "@/utils/constants";
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicUrls.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }))
}