import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let sitemap: string | undefined;
  if (siteUrl) {
    try {
      const url = new URL(siteUrl);
      if (url.protocol === "https:" || url.protocol === "http:") {
        sitemap = new URL("/sitemap.xml", url).toString();
      }
    } catch {
      // Leave the sitemap out until a valid public URL is configured.
    }
  }
  return { rules: { userAgent: "*", allow: "/" }, ...(sitemap ? { sitemap } : {}) };
}
