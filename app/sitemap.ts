import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.crenosoft.in";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/services/ai-software-development", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/ai-automation", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/web-development", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/mobile-app-development", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/cloud-solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/ui-ux-design", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
