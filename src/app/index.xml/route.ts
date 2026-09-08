import { NextResponse } from "next/server";
import { SITE, SITEMAP_PAGES, escapeXml } from "@/lib/sitemapData";

export async function GET() {
  const body = SITEMAP_PAGES.map(
    (page) => `  <url>
    <loc>${escapeXml(SITE + page.path)}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
