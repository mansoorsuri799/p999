import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

/** Matches the homepage hero rating UI and SoftwareApplication schema. */
export const APP_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.5",
  ratingCount: "500000",
  bestRating: "5",
  worstRating: "1",
} as const;

/** Official P999 APK download / install link. */
export const APP_DOWNLOAD_URL = "https://777p999.com/?dl=dkn7in";

export const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/";

export const ORGANIZATION_SAME_AS = [FACEBOOK_PROFILE_URL] as const;

export const SUPPORT_EMAIL = "support@p999gaming.com.pk";

export const APP_SCREENSHOTS = [
  `${SITE_ORIGIN}/p999-game.webp`,
  `${SITE_ORIGIN}/p999-login.webp`,
  `${SITE_ORIGIN}/p999-register.webp`,
  `${SITE_ORIGIN}/p999-deposit-money.webp`,
  `${SITE_ORIGIN}/p999-lucky-draw.webp`,
  `${SITE_ORIGIN}/p999-promote-link.webp`,
  `${SITE_ORIGIN}/p999-account.webp`,
] as const;

export const APP_FACTS = {
  name: "P999",
  version: "v1.3",
  fileSize: "7.04MB",
  os: "Android 5.0+",
  lastUpdate: "10-April-2026",
  downloads: "1.5Million+",
  ratingCountLabel: "500K+",
  languages: "Urdu, English",
  category: "Cards, Game",
  minDeposit: "PKR 100",
  maxDeposit: "PKR 50000",
} as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "P999",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/p999.webp`,
  description:
    "P999 is a Pakistani online gaming app for card games, slots, and real-cash play with JazzCash and EasyPaisa payments.",
  sameAs: [...ORGANIZATION_SAME_AS],
  contactPoint: {
    "@type": "ContactPoint",
    email: SUPPORT_EMAIL,
    contactType: "Customer Support",
    areaServed: "PK",
  },
};
