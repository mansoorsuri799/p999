/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://p999gaming.com.pk";

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: "P999",
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: "© P999. All rights reserved.",
  creditText: "P999",
} as const;
