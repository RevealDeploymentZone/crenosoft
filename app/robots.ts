import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: all crawlers can access everything public
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // OpenAI web crawler and SearchGPT
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Anthropic / Claude
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      // Google — Gemini and AI Overviews
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      // Apple — Siri and on-device AI
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Bing and Microsoft Copilot
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "msnbot", allow: "/" },
      // Common Crawl — feeds many AI training datasets
      { userAgent: "CCBot", allow: "/" },
      // Cohere AI
      { userAgent: "cohere-ai", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
      // Bytedance / TikTok
      { userAgent: "Bytespider", allow: "/" },
      // Meta AI
      { userAgent: "facebookexternalhit", allow: "/" },
      // Amazon Alexa
      { userAgent: "ia_archiver", allow: "/" },
    ],
    sitemap: "https://www.crenosoft.in/sitemap.xml",
    host: "https://www.crenosoft.in",
  };
}
