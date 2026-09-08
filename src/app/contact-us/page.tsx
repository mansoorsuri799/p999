import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import ContactForm from "@/components/ContactForm";
import { SUPPORT_EMAIL } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/contact-us`;

export const metadata: Metadata = {
  title: "Contact P999 Support - p999gaming.com.pk",
  description:
    "Contact P999 support at support@p999gaming.com.pk for app guide questions, corrections, privacy requests, and responsible gaming concerns.",
  keywords: "P999 contact, P999 support, p999gaming.com.pk email, support@p999gaming.com.pk",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Contact P999 Support",
    description: "Get help with P999 guide content, privacy requests, and support questions.",
    url: pageUrl,
    siteName: "P999",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact P999 Support",
    description: "Reach P999 at support@p999gaming.com.pk.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: pageUrl },
  ],
};

export default function Contact() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Contact Us</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact P999</h1>
            <p className="text-lg text-gray-400">We are here for guide corrections, support questions, and privacy requests.</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Use this page to contact p999gaming.com.pk about <Link href="/" className="text-accent hover:underline font-semibold">P999</Link> app information, download guidance, deposit and withdrawal guides, website corrections, privacy requests, or responsible gaming concerns.
            </p>

            <div className="bg-[#07140C] rounded-xl p-6 md:p-8 border-2 border-accent/40 overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <svg aria-hidden="true" className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white">Email Us</h2>
              <p className="text-center mb-4 text-gray-400">Send your question with any useful screenshots or transaction IDs.</p>
              <div className="flex justify-center w-full min-w-0 overflow-hidden px-4">
                <CtaButton
                  href={`mailto:${SUPPORT_EMAIL}`}
                  icon="mail"
                  ariaLabel="Send email to P999 support"
                  className="max-w-full text-sm sm:text-base md:text-lg px-4 md:px-8"
                >
                  {SUPPORT_EMAIL}
                </CtaButton>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <ContactForm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Download Help", "Need help installing the APK?", "/download-p999-game", "Download Guide"],
              ["Privacy Requests", "Want to understand data handling?", "/privacy", "Privacy Policy"],
              ["About P999", "Learn how this guide site works.", "/about-us", "About Us"],
            ].map(([title, body, href, label]) => (
              <div key={title} className="bg-secondary rounded-xl shadow-lg p-6 text-center">
                <div className="bg-[#07140C] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold">P999</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400 mb-4">{body}</p>
                <Link href={href} className="text-accent hover:underline font-semibold">{label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: pageUrl,
            mainEntity: {
              "@type": "Organization",
              name: "P999",
              url: SITE_ORIGIN,
              contactPoint: {
                "@type": "ContactPoint",
                email: SUPPORT_EMAIL,
                contactType: "Customer Support",
                availableLanguage: ["English", "Urdu"],
                areaServed: "PK",
              },
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />
    </article>
  );
}
