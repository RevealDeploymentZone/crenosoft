import { MetadataRoute } from "next";

// Add new blog slugs here — sitemap auto-regenerates daily via revalidation
export const revalidate = 86400;

const BLOG_POSTS: { slug: string; date: string }[] = [
  { slug: "ai-automation-india-2025", date: "2025-08-10" },
  { slug: "custom-ai-software-development-india-2025", date: "2025-08-16" },
  { slug: "ui-ux-design-trends-2025-india", date: "2025-08-16" },
  { slug: "cloud-migration-guide-indian-startups-2025", date: "2025-08-16" },
  { slug: "building-ai-powered-saas-india-2025", date: "2025-08-16" },
  { slug: "llm-integration-guide", date: "2025-07-28" },
  { slug: "nextjs-seo-2025", date: "2025-07-15" },
  { slug: "ai-agent-basics", date: "2025-07-10" },
  { slug: "react-native-vs-flutter", date: "2025-07-05" },
  { slug: "cloud-cost-optimisation", date: "2025-07-01" },
];

const STATIC_ROUTES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; date?: string }[] = [
  { url: "/",                                      priority: 1.0, changeFrequency: "weekly" },
  { url: "/services",                              priority: 0.9, changeFrequency: "monthly" },
  { url: "/services/ai-software-development",     priority: 0.9, changeFrequency: "monthly" },
  { url: "/services/ai-automation",               priority: 0.9, changeFrequency: "monthly" },
  { url: "/services/web-development",             priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/mobile-app-development",      priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/cloud-solutions",             priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/ui-ux-design",                priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries",                           priority: 0.9, changeFrequency: "monthly" },
  { url: "/industries/fintech",                   priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/healthcare",                priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/ecommerce",                 priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/logistics",                 priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/edtech",                    priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/b2b-saas",                  priority: 0.8, changeFrequency: "monthly" },
  { url: "/blog",                                 priority: 0.8, changeFrequency: "daily" },
  { url: "/about",                                priority: 0.7, changeFrequency: "monthly" },
  { url: "/contact",                              priority: 0.7, changeFrequency: "monthly" },
];

const BASE = "https://www.crenosoft.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: r.date ? new Date(r.date) : now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
