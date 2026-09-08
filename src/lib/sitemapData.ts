/** Shared sitemap records for P999 (url + image sitemaps). */

export const SITE = "https://p999gaming.com.pk" as const;

export type SitemapImage = {
  loc: string;
  title: string;
  caption: string;
};

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  images?: SitemapImage[];
};

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: "2026-04-10",
    changeFreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: `${SITE}/p999.webp`,
        title: "P999 Game official logo",
        caption: "P999 Game APK for Pakistan with JazzCash and EasyPaisa support.",
      },
      {
        loc: `${SITE}/p999-game.webp`,
        title: "P999 Game home screen",
        caption: "P999 Game interface showing available real-money games.",
      },
    ],
  },
  {
    path: "/download-p999-game",
    lastMod: "2026-04-10",
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE}/p999-game.webp`,
        title: "Download P999 Game APK",
        caption: "Official P999 Game APK download guide for Android.",
      },
    ],
  },
  {
    path: "/deposit-money-in-p999",
    lastMod: "2026-04-10",
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE}/p999-deposit-money.webp`,
        title: "Deposit money in P999",
        caption: "Add funds to P999 wallet with JazzCash or EasyPaisa.",
      },
    ],
  },
  {
    path: "/withdraw-money-from-p999",
    lastMod: "2026-04-10",
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE}/p999-account.webp`,
        title: "P999 account wallet",
        caption: "Withdraw winnings from P999 to JazzCash or EasyPaisa.",
      },
    ],
  },
  {
    path: "/p999-for-pc",
    lastMod: "2026-04-10",
    changeFreq: "weekly",
    priority: 0.85,
    images: [
      {
        loc: `${SITE}/p999.webp`,
        title: "P999 for PC",
        caption: "Play P999 Game on PC with an Android emulator.",
      },
    ],
  },
  { path: "/about-us", lastMod: "2026-04-10", changeFreq: "monthly", priority: 0.7 },
  { path: "/blog", lastMod: "2026-04-11", changeFreq: "weekly", priority: 0.8 },
  { path: "/contact-us", lastMod: "2026-04-10", changeFreq: "monthly", priority: 0.7 },
  { path: "/privacy", lastMod: "2026-04-10", changeFreq: "yearly", priority: 0.5 },
  { path: "/disclaimer", lastMod: "2026-04-10", changeFreq: "yearly", priority: 0.5 },
  {
    path: "/blog/is-p999-game-real-or-fake",
    lastMod: "2026-04-10",
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: `${SITE}/p999.webp`,
        title: "Is P999 Game real or fake",
        caption: "Honest Pakistan check on whether P999 Game is real or fake.",
      },
    ],
  },
  {
    path: "/blog/p999-bonuses-vip-redeem-codes",
    lastMod: "2026-04-10",
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: `${SITE}/p999-lucky-draw.webp`,
        title: "P999 bonuses and lucky draw",
        caption: "P999 daily bonuses, VIP tiers, and redeem codes explained.",
      },
    ],
  },
  {
    path: "/blog/is-p999-safe-to-play-pakistan",
    lastMod: "2026-04-11",
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: `${SITE}/p999-login.webp`,
        title: "P999 safe login",
        caption: "Safety tips for playing P999 Game in Pakistan.",
      },
    ],
  },
  {
    path: "/blog/p999-beginner-guide-pakistan",
    lastMod: "2026-04-11",
    changeFreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: `${SITE}/p999-register.webp`,
        title: "P999 beginner registration",
        caption: "Beginner guide to start P999 Game safely in Pakistan.",
      },
    ],
  },
];

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
