import type { MetadataRoute } from "next";

const SITE_URL = "https://brokebroslandscaping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/pricing",
    "/get-started",
    "/solutions",
    "/solutions/landscaping",
    "/solutions/hardscaping",
    "/solutions/deck-construction",
    "/solutions/garden-building",
    "/solutions/pressure-washing",
    "/resources",
    "/resources/blog",
    "/resources/support",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
