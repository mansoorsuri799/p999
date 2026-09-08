import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy - P999",
  description:
    "Privacy Policy for P999 and p999gaming.com.pk, including information collection, payments, cookies, user rights, and contact details.",
  keywords: ["P999 privacy policy", "p999gaming.com.pk privacy", "P999 data protection"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Privacy Policy - P999",
    description: "How p999gaming.com.pk handles user information, contact requests, analytics, and payment-related support data.",
    url: pageUrl,
    siteName: "P999",
    type: "website",
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 512, height: 512, alt: "P999 Privacy Policy" }],
  },
};

const sections = [
  {
    title: "Information We May Collect",
    body: "When you visit p999gaming.com.pk or contact us, we may receive your name, email address, message details, browser information, device type, IP-derived location, and any screenshots or transaction references you choose to send.",
  },
  {
    title: "How We Use Information",
    body: "We use information to answer support messages, improve P999 guides, investigate reported errors, maintain site security, measure page performance, and respond to privacy or correction requests.",
  },
  {
    title: "Payment-Related Details",
    body: "Our guides discuss JazzCash and EasyPaisa, but you should never send wallet PINs, passwords, or OTP codes. If you contact us about a payment issue, share only non-sensitive references such as transaction ID, date, amount, and masked account details.",
  },
  {
    title: "Cookies and Analytics",
    body: "The site may use cookies or analytics tools to understand page visits, search performance, and technical errors. You can manage cookies through your browser settings.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell personal information. Limited data may be shared with service providers that help operate hosting, analytics, spam protection, or email support when needed.",
  },
  {
    title: "Data Security",
    body: "We use reasonable safeguards for website and support data, but no internet system can be guaranteed completely secure. Avoid sending sensitive wallet credentials through any contact form or email.",
  },
  {
    title: "Your Rights",
    body: "You can request access, correction, or deletion of personal information you previously sent to us by emailing our support address.",
  },
  {
    title: "Age Restriction",
    body: "P999 content is intended for adults 18 years and older. We do not knowingly collect personal information from children.",
  },
];

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: pageUrl },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Privacy Policy</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: April 10, 2026</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="bg-[#07140C] border-l-4 border-accent rounded-r-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="text-gray-300 mb-4">
                This Privacy Policy explains how <Link href="/" className="text-accent hover:underline font-semibold">P999</Link> and p999gaming.com.pk handle information connected with this website, contact forms, app guide content, and support communication.
              </p>
              <p className="text-gray-300">
                By using this website, you agree to this policy. If you do not agree, please stop using the site and do not submit personal information.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="bg-[#07140C] rounded-xl p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-accent">{section.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300 mb-4">For privacy questions, corrections, or deletion requests, contact us at:</p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline font-semibold">{SUPPORT_EMAIL}</a>
            </div>

            <div className="bg-[#07140C] rounded-xl p-6 mt-8 text-center">
              <p className="text-gray-400 text-sm">© 2026 P999. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Privacy Policy - P999",
            url: pageUrl,
            publisher: { "@type": "Organization", name: "P999", url: SITE_ORIGIN },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />
    </article>
  );
}
