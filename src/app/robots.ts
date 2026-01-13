import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"], // Add folders you don't want Google to see
    },
    sitemap: "https://mdfaizanahmad.in/sitemap.xml",
  };
}
