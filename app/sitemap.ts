
import type { MetadataRoute } from "next";

const baseUrl = "https://vignanreddylegaljourney.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/legal-dictionary",
    "/ou-updates",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority:
      page === ""
        ? 1
        : page === "/legal-dictionary" || page === "/ou-updates"
          ? 0.8
          : 0.7,
  }));
}
