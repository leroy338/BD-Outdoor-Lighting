import type { MetadataRoute } from "next";

const SITE_URL = "https://brokebroslandscaping.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Search engines and AI crawlers (GPTBot, ClaudeBot, Google-Extended,
        // PerplexityBot, etc.) are all welcome to index and reference the site.
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
