import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import PhoneFrame from "@/components/PhoneFrame";
import {
  APP_AGGREGATE_RATING,
  APP_DOWNLOAD_URL,
  APP_FACTS,
  APP_SCREENSHOTS,
} from "@/lib/appFacts";
import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/download-p999-game`;

export const metadata: Metadata = {
  title: "Download P999 Game APK for Android (Official)",
  description:
    "Download the official P999 Game APK for Android. Latest v1.3, 7.04MB, Android 5.0+, install steps, screenshots, and safe setup guide for Pakistan.",
  keywords: [
    "download P999 game",
    "P999 APK",
    "P999 game download",
    "P999 Android",
    "P999 latest version",
    "P999 Pakistan",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Download P999 Game APK for Android (Official)",
    description:
      "Get the latest P999 Game APK with installation steps, Android requirements, screenshots, and secure download guidance.",
    url: pageUrl,
    siteName: "P999",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 512, height: 512, alt: "P999 Game APK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download P999 Game APK for Android",
    description: "Latest P999 APK v1.3 for Android 5.0+ with install guide and screenshots.",
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const installSteps = [
  {
    name: "Download P999 APK",
    text: "Tap the official download button and wait for the P999 APK file to finish downloading.",
  },
  {
    name: "Allow unknown source installs",
    text: "Open Android settings when prompted and allow your browser or file manager to install this APK.",
  },
  {
    name: "Install the file",
    text: "Find the downloaded P999 APK in Downloads, tap it, and choose Install.",
  },
  {
    name: "Open P999",
    text: "Launch P999, register or sign in, and review wallet options before depositing any money.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}#software`,
      name: APP_FACTS.name,
      operatingSystem: APP_FACTS.os,
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: APP_AGGREGATE_RATING,
      downloadUrl: APP_DOWNLOAD_URL,
      softwareVersion: APP_FACTS.version,
      fileSize: APP_FACTS.fileSize,
      description:
        "P999 is an Android gaming APK for Pakistani players with card games, slots, JazzCash and EasyPaisa wallet support.",
      screenshot: [...APP_SCREENSHOTS],
      image: `${SITE_ORIGIN}/p999.webp`,
      author: { "@type": "Organization", name: "P999", url: SITE_ORIGIN },
      inLanguage: ["en", "ur"],
      countriesSupported: "PK",
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: "How to download and install P999 Game APK",
      totalTime: "PT5M",
      step: installSteps.map((step) => ({ "@type": "HowToStep", ...step })),
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Download", item: pageUrl },
  ],
};

export default function DownloadP999Page() {
  return (
    <article className="min-h-screen bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-accent">Download</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get the Latest </span>
            <span className="text-accent">P999 Game APK</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Download the official P999 APK for Android and follow this complete setup guide before you install. The latest build is {APP_FACTS.version}, {APP_FACTS.fileSize}, and works on {APP_FACTS.os}.
          </p>
        </div>

        <div className="flex justify-center my-10">
          <CtaButton href={APP_DOWNLOAD_URL} ariaLabel="Download official P999 Game APK">DOWNLOAD P999 APK</CtaButton>
        </div>

        <div className="flex justify-center mb-12">
          <Image
            src="/p999.webp"
            alt="P999 Game official app logo"
            title="P999 Game APK for Android"
            width={420}
            height={420}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">P999 APK Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App Name", APP_FACTS.name],
                ["Version", APP_FACTS.version],
                ["Size", APP_FACTS.fileSize],
                ["Required OS", APP_FACTS.os],
                ["Last Update", APP_FACTS.lastUpdate],
                ["Category", APP_FACTS.category],
                ["Price", "Free APK download"],
              ].map(([label, value], index) => (
                <tr key={label} className={index % 2 === 0 ? "bg-[#0B1F13]/60" : "bg-[#07140C]/60"}>
                  <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-left text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="install-guide">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">How to Install P999 on Android</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {installSteps.map((step, index) => (
              <div key={step.name} className="bg-[#07140C] rounded-lg p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-accent mb-3">Step {index + 1}: {step.name}</h3>
                <p className="text-gray-300 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0B1F13] rounded-xl p-6 border border-accent/40">
            <h3 className="text-xl font-bold text-white mb-3">Unknown Sources Safety Note</h3>
            <p className="text-gray-300 leading-relaxed">
              Android blocks APK files from outside the Play Store until you approve the installing app. Only allow this for the browser or file manager you used, install P999, then turn the permission off again from Settings for better device security.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">P999 Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {APP_SCREENSHOTS.map((src, index) => (
            <PhoneFrame
              key={src}
              src={src.replace(SITE_ORIGIN, "")}
              alt={`P999 app screenshot ${index + 1}`}
              width={828}
              height={1470}
              className="max-w-[200px]"
              sizes="(max-width: 768px) 45vw, 200px"
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Helpful P999 Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <Link href="/" className="bg-[#07140C] rounded-lg p-5 hover:text-accent">P999 home and app overview</Link>
            <Link href="/deposit-money-in-p999" className="bg-[#07140C] rounded-lg p-5 hover:text-accent">How to deposit money in P999</Link>
            <Link href="/withdraw-money-from-p999" className="bg-[#07140C] rounded-lg p-5 hover:text-accent">How to withdraw money from P999</Link>
            <Link href="/p999-for-pc" className="bg-[#07140C] rounded-lg p-5 hover:text-accent">Play P999 on PC with an emulator</Link>
            <Link href="/blog/p999-beginner-guide-pakistan" className="bg-[#07140C] rounded-lg p-5 hover:text-accent">Beginner guide for Pakistan players</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#07140C] to-[#0B1F13] rounded-2xl p-8 md:p-12 border border-accent/40">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Install P999?</h2>
          <p className="text-xl text-gray-300 mb-8">Use the official download route and check the version details before installing.</p>
          <CtaButton href={APP_DOWNLOAD_URL}>DOWNLOAD NOW</CtaButton>
        </div>
      </section>
    </article>
  );
}
