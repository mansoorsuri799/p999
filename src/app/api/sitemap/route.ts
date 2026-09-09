import { NextResponse } from "next/server";

const BASE = "https://p999gaming.com.pk";
const TODAY = new Date().toISOString().slice(0, 10);

type PageType = {
  url: string;
  lastMod: string;
  changeFreq: string;
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const mainPages: PageType[] = [
  {
    url: "/",
    lastMod: TODAY,
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: "/p999.webp",
        title: "P999 Game official logo",
        caption: "P999 Game APK for Pakistan — Teen Patti, Rummy, slots with JazzCash & EasyPaisa.",
      },
    ],
  },
  {
    url: "/download-p999-game",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: "/p999-game.webp",
        title: "Download P999 Game APK",
        caption: "Install the latest P999 Game APK for Android in Pakistan.",
      },
    ],
  },
  {
    url: "/p999-login",
    lastMod: "2026-04-12",
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: "/p999-login.webp",
        title: "P999 Login Guide",
        caption: "Login to P999 with mobile number and OTP.",
      },
    ],
  },
  { url: "/deposit-money-in-p999", lastMod: TODAY, changeFreq: "weekly", priority: 0.9 },
  { url: "/withdraw-money-from-p999", lastMod: TODAY, changeFreq: "weekly", priority: 0.9 },
  {
    url: "/p999-for-pc",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: "/p999.webp",
        title: "P999 for PC",
        caption: "Play P999 Game on PC using an Android emulator.",
      },
    ],
  },
  { url: "/about-us", lastMod: TODAY, changeFreq: "monthly", priority: 0.7 },
  {
    url: "/blog",
    lastMod: TODAY,
    changeFreq: "weekly",
    priority: 0.8,
  },
  { url: "/contact-us", lastMod: TODAY, changeFreq: "monthly", priority: 0.7 },
  { url: "/privacy", lastMod: TODAY, changeFreq: "yearly", priority: 0.6 },
  { url: "/disclaimer", lastMod: TODAY, changeFreq: "yearly", priority: 0.6 },
];

const blogPosts: PageType[] = [
  { url: "/blog/is-p999-game-real-or-fake", lastMod: "2026-04-10", changeFreq: "monthly", priority: 0.8 },
  { url: "/blog/p999-bonuses-vip-redeem-codes", lastMod: "2026-04-10", changeFreq: "monthly", priority: 0.8 },
  { url: "/blog/is-p999-safe-to-play-pakistan", lastMod: "2026-04-11", changeFreq: "monthly", priority: 0.8 },
  { url: "/blog/p999-beginner-guide-pakistan", lastMod: "2026-04-11", changeFreq: "monthly", priority: 0.8 },
];

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const pages = [...mainPages, ...blogPosts];

  const urlEntries = pages
    .map((page) => {
      const images =
        page.images
          ?.map(
            (img) => `
      <image:image>
        <image:loc>${escapeXml(BASE + img.loc)}</image:loc>
        <image:title>${escapeXml(img.title)}</image:title>
        <image:caption>${escapeXml(img.caption)}</image:caption>
      </image:image>`
          )
          .join("") || "";

      return `
  <url>
    <loc>${escapeXml(BASE + page.url)}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>${images}
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
