import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { APP_FACTS } from "@/lib/appFacts";
import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/p999-for-pc`;

export const metadata: Metadata = {
  title: "P999 for PC Download Guide | Play P999 on Windows",
  description:
    "Learn how to play P999 on PC using Android emulators like BlueStacks or LDPlayer. Includes setup steps, system requirements, and safety tips.",
  keywords: ["P999 for PC", "P999 PC download", "P999 BlueStacks", "P999 LDPlayer", "P999 Windows"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "P999 for PC Download Guide",
    description: "Play P999 on Windows with an Android emulator and the official APK.",
    url: pageUrl,
    siteName: "P999",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 512, height: 512, alt: "P999 for PC" }],
  },
};

const steps = [
  ["Install an Android emulator", "Download BlueStacks, LDPlayer, or another reputable Android emulator from its official website."],
  ["Set up Android", "Open the emulator, complete the first-time setup, and make sure enough storage is available."],
  ["Download P999 APK", "Use the P999 download page to get the latest APK file."],
  ["Install APK in emulator", "Drag the APK into the emulator or use its Install APK option."],
  ["Open P999 on PC", "Launch P999, sign in, and adjust emulator controls for comfortable play."],
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "P999 for PC Download Guide",
  description: "Guide to run P999 on Windows using Android emulators such as BlueStacks or LDPlayer.",
  image: `${SITE_ORIGIN}/p999.webp`,
  author: { "@type": "Organization", name: "P999", url: SITE_ORIGIN },
  publisher: {
    "@type": "Organization",
    name: "P999",
    logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/p999.webp`, ...imageObjectLicensing },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  about: { "@type": "SoftwareApplication", name: "P999", operatingSystem: "Android emulator on Windows" },
  inLanguage: "en-US",
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "P999 for PC", item: pageUrl },
  ],
};

export default function P999ForPCPage() {
  return (
    <article className="min-h-screen bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-accent">P999 for PC</span>
        </nav>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-accent">P999 for PC</span>
            <br />
            <span className="text-white">Play on Windows with an Android Emulator</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            P999 does not need a separate Windows app. You can run the Android APK on a PC through an emulator such as BlueStacks or LDPlayer, then use a larger screen, mouse, keyboard, and steady internet connection.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <Image
            src="/p999.webp"
            alt="P999 app logo for PC emulator setup"
            title="P999 for PC"
            width={320}
            height={320}
            className="logo-clean object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent text-center">P999 PC Setup Info</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App", APP_FACTS.name],
                ["APK Version", APP_FACTS.version],
                ["APK Size", APP_FACTS.fileSize],
                ["PC Method", "Android emulator"],
                ["Recommended Emulators", "BlueStacks, LDPlayer"],
                ["Android Requirement", APP_FACTS.os],
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

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">How to Download and Play P999 on PC</h2>
          <div className="space-y-4">
            {steps.map(([title, body], index) => (
              <div key={title} className="bg-[#07140C] rounded-lg p-6 border-l-4 border-accent">
                <h3 className="text-lg font-bold text-white mb-2">Step {index + 1}: {title}</h3>
                <p className="text-gray-300">{body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <CtaButton>DOWNLOAD P999 APK</CtaButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">PC System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#07140C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-4">Minimum</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Windows 10 or newer</li>
                <li>Dual-core Intel or AMD processor</li>
                <li>4 GB RAM</li>
                <li>5 GB free storage</li>
                <li>Virtualization enabled for smoother emulation</li>
              </ul>
            </div>
            <div className="bg-[#07140C] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-4">Recommended</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Windows 10 or 11, 64-bit</li>
                <li>Core i5 or Ryzen 5 class processor</li>
                <li>8 GB RAM or more</li>
                <li>SSD storage</li>
                <li>Stable broadband internet connection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Emulator Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Use official sources", "Download emulators only from their official websites."],
              ["Install latest P999 APK", "Use the P999 download page so the version matches current Android guidance."],
              ["Protect wallet access", "Avoid saving wallet PINs or sensitive payment details inside shared PCs."],
            ].map(([title, body]) => (
              <div key={title} className="bg-[#07140C] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#07140C] to-[#0B1F13] rounded-2xl p-8 md:p-12 border border-accent/40">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Set Up P999 on PC?</h2>
          <p className="text-xl text-gray-300 mb-8">Download the Android APK, then install it in your preferred emulator.</p>
          <CtaButton>DOWNLOAD FOR PC</CtaButton>
        </div>
      </section>
    </article>
  );
}
