import { NextResponse } from "next/server";
import { SITE, SITEMAP_PAGES, escapeXml } from "@/lib/sitemapData";

export async function GET() {
  const pagesWithImages = SITEMAP_PAGES.filter((p) => p.images && p.images.length > 0);

  const body = pagesWithImages
    .map((page) => {
      const images = page.images!
        .map(
          (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
        )
        .join("\n");
      return `  <url>
    <loc>${escapeXml(SITE + page.path)}</loc>
${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
