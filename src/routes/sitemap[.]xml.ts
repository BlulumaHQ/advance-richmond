import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { news } from "@/lib/site-data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/team", changefreq: "monthly", priority: "0.8" },
          { path: "/priorities", changefreq: "monthly", priority: "0.8" },
          { path: "/events", changefreq: "weekly", priority: "0.8" },
          { path: "/news", changefreq: "weekly", priority: "0.9" },
          { path: "/get-involved", changefreq: "monthly", priority: "0.9" },
        ];
        const articleEntries = news.map((n) => ({
          path: `/news/${n.slug}`,
          lastmod: n.date,
          changefreq: "monthly",
          priority: "0.7",
        }));
        const all = [...staticEntries, ...articleEntries];

        const urls = all.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            "lastmod" in e && e.lastmod
              ? `    <lastmod>${e.lastmod}</lastmod>`
              : null,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
