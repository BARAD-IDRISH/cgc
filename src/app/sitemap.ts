import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://charteredgrowth.ae";
  const staticRoutes = ["", "/about", "/services", "/industries", "/contact"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceSlugs = Object.keys(SERVICES_DATA);

  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries];
}
