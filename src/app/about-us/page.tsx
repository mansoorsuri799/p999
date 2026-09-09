import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CtaButton from "@/components/CtaButton";
import { ORGANIZATION_JSON_LD, SUPPORT_EMAIL } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/about-us`;

export const metadata: Metadata = {
  title: "About P999 - p999gaming.com.pk",
  description:
    "Learn about P999 and p999gaming.com.pk, our editorial standards, Pakistan-focused gaming guides, safety notes, and support contact.",
  keywords: ["about P999", "p999gaming.com.pk", "P999 Pakistan", "P999 support"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "About P999 - p999gaming.com.pk",
    description: "About P999, our Pakistan-focused app guides, trust standards, and responsible gaming information.",
    url: pageUrl,
    siteName: "P999",
    type: "website",
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 512, height: 512, alt: "About P999" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About P999",
    description: "About p999gaming.com.pk and our P999 app guide standards.",
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "About Us", item: pageUrl },
  ],
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">About Us</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About P999</h1>
            <p className="text-lg text-gray-400">Pakistan-focused P999 guides, app information, and responsible gaming notes.</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <Image
                    src="/p999.webp"
                    alt="P999 official app logo"
                    title="About P999"
                    width={320}
                    height={320}
                    sizes="(max-width: 768px) 280px, 320px"
                    className="logo-clean object-contain drop-shadow-2xl w-[280px] h-[280px] md:w-[320px] md:h-[320px]"
                    priority
                  />
                </Link>
              </div>
              <div className="md:w-2/3 md:pl-4 lg:pl-6">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <Link href="/" className="text-accent hover:underline font-semibold">P999</Link> is covered on p999gaming.com.pk as an Android gaming app guide for Pakistani users. Our pages explain APK installation, JazzCash and EasyPaisa payments, PC emulator setup, account basics, and safety checks in plain language.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We write for adults who want practical information before downloading or using a real-money entertainment app. We do not promise earnings, and we encourage every reader to check local rules, set limits, and treat gaming as entertainment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent text-center">Our E-E-A-T Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["Experience", "We focus on user journeys such as downloading, installing, depositing, withdrawing, and troubleshooting common wallet issues."],
                ["Expertise", "Guides are organized around Android APK behavior, Pakistani mobile wallets, emulator setup, and responsible gaming risk."],
                ["Authoritativeness", "We keep brand, domain, contact, schema, and page metadata consistent across p999gaming.com.pk."],
                ["Trust", `Every trust page links to support at ${SUPPORT_EMAIL} and avoids guaranteed-income claims.`],
              ].map(([title, body]) => (
                <div key={title} className="bg-[#07140C] rounded-xl p-6 border-l-4 border-accent">
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-300">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">Contact us about P999 guides, corrections, privacy requests, or responsible gaming concerns.</p>
            <CtaButton href="/contact-us" icon="arrow">Contact Us</CtaButton>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: ORGANIZATION_JSON_LD,
            mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />
    </article>
  );
}
