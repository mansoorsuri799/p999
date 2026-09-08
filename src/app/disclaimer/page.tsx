import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { SUPPORT_EMAIL } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/disclaimer`;

export const metadata: Metadata = {
  title: "Disclaimer - P999",
  description:
    "Important P999 disclaimer: 18+ only, entertainment risk, no income guarantee, user responsibility, and local law reminders.",
  keywords: ["P999 disclaimer", "P999 risk warning", "P999 18+", "P999 no income guarantee"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Disclaimer - P999",
    description: "Legal and responsible gaming disclaimer for P999 and p999gaming.com.pk.",
    url: pageUrl,
    siteName: "P999",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer - P999",
    description: "18+ only, no income guarantee, and entertainment risk notice.",
  },
  robots: { index: true, follow: true },
};

const warnings = [
  ["18+ Only", "P999 content is intended only for adults who are at least 18 years old."],
  ["Entertainment Risk", "Real-money gaming can lead to financial loss. Play only with money you can afford to lose."],
  ["No Income Guarantee", "P999 should not be treated as a job, investment, or reliable earning source."],
  ["Local Law Responsibility", "You are responsible for checking whether online gaming or real-money play is allowed in your location."],
  ["Third-Party Services", "Wallet providers, app operators, and external services may have their own rules and processing timelines."],
];

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Disclaimer", item: pageUrl },
  ],
};

export default function Disclaimer() {
  return (
    <article className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Disclaimer</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
            <p className="text-lg text-gray-400">Please read this before using P999 guides or making any gaming decision.</p>
          </div>

          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="bg-[#07140C] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
              <h2 className="text-xl font-bold text-accent mb-2">Important Notice</h2>
              <p className="text-gray-300">
                p999gaming.com.pk provides informational guide content about <Link href="/" className="text-accent hover:underline font-semibold">P999</Link>. By using this website, you accept the risk notes and user responsibilities below.
              </p>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                P999 may involve real-money entertainment features depending on the app version and user account. We do not guarantee deposits, withdrawals, bonuses, profit, income, or any specific gameplay result.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {warnings.map(([title, body]) => (
                  <div key={title} className="bg-[#07140C] rounded-xl p-6 border border-accent/30">
                    <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
                    <p className="text-gray-300 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#07140C] rounded-xl p-6 border border-red-500/40">
                <h2 className="text-2xl font-bold mb-4 text-red-300">No Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  We are not responsible for financial loss, account issues, app downtime, wallet delays, legal consequences, or decisions made after reading this website. Use the app and any linked services at your own discretion.
                </p>
              </div>

              <div className="bg-[#07140C] rounded-xl p-6 border border-accent/30">
                <h2 className="text-2xl font-bold mb-4 text-white">Responsible Use</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>Set a budget before playing and stop when that limit is reached.</li>
                  <li>Do not borrow money or use emergency funds for gaming.</li>
                  <li>Take breaks and avoid chasing losses.</li>
                  <li>Seek professional help if gaming affects your finances, mood, or relationships.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#07140C] rounded-xl border-2 border-accent/40">
              <h2 className="text-2xl font-bold mb-4 text-white">Questions?</h2>
              <p className="text-gray-300 mb-4">
                Contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a> if you need clarification about this disclaimer.
              </p>
              <CtaButton href="/contact-us" icon="arrow">Contact Us</CtaButton>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Disclaimer - P999",
            description: "18+ responsible gaming and no income guarantee disclaimer for P999.",
            url: pageUrl,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />
    </article>
  );
}
