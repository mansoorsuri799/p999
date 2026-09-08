import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { APP_FACTS, SUPPORT_EMAIL } from "@/lib/appFacts";
import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/withdraw-money-from-p999`;

export const metadata: Metadata = {
  title: "How to Withdraw Money from P999 Pakistan | JazzCash & EasyPaisa",
  description:
    "Learn how to withdraw money from P999 in Pakistan using JazzCash and EasyPaisa. Includes payout steps, tips, common issues, and FAQ.",
  keywords: "withdraw money from P999, P999 withdrawal Pakistan, P999 JazzCash withdrawal, P999 EasyPaisa withdrawal",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "How to Withdraw Money from P999 Pakistan",
    description: "Step-by-step P999 withdrawal guide for JazzCash and EasyPaisa users.",
    url: pageUrl,
    siteName: "P999",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Withdraw Money from P999 Pakistan",
    description: "P999 JazzCash and EasyPaisa cash-out steps with troubleshooting.",
  },
};

const steps = [
  ["Open your P999 wallet", "Sign in to P999 and open the wallet or account balance section."],
  ["Tap withdraw", "Choose the withdraw or cash-out option instead of recharge or deposit."],
  ["Enter the withdrawal amount", "Type the amount you want to withdraw and make sure it is available in your withdrawable balance."],
  ["Select JazzCash or EasyPaisa", "Pick the wallet where you want to receive the payout."],
  ["Add account details", "Enter the wallet number and account holder name exactly as they appear in your mobile wallet."],
  ["Review and confirm", "Check every digit before submitting because wrong wallet details can delay or fail a payout."],
  ["Wait for processing", "Keep the withdrawal record visible in P999 until the payment reaches your JazzCash or EasyPaisa account."],
];

const faqs = [
  ["Can I withdraw from P999 to JazzCash?", "Yes, choose JazzCash in the withdrawal section and enter the correct JazzCash account number."],
  ["Can I withdraw from P999 to EasyPaisa?", "Yes, choose EasyPaisa and confirm the registered account number before submitting."],
  ["How long does a P999 withdrawal take?", "Processing time can vary by account review, wallet network status, and app rules. Check the live status in your P999 wallet."],
  ["Why did my P999 withdrawal fail?", "Common reasons include incorrect wallet details, insufficient withdrawable balance, account verification issues, or temporary payment delays."],
  ["What should I do if my withdrawal is pending?", `Do not submit duplicate requests immediately. Save the withdrawal ID and contact ${SUPPORT_EMAIL} if it stays pending beyond the app timeline.`],
  ["Is there a guaranteed income from P999 withdrawals?", "No. Withdrawals only apply to eligible balances. P999 gameplay involves risk and does not guarantee profit."],
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How to Withdraw Money from P999 Pakistan",
      description: "JazzCash and EasyPaisa withdrawal guide for P999 users in Pakistan.",
      url: pageUrl,
      author: { "@type": "Organization", name: "P999", url: SITE_ORIGIN },
      publisher: {
        "@type": "Organization",
        name: "P999",
        logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/p999-icon.webp`, ...imageObjectLicensing },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      inLanguage: "en-US",
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: "How to withdraw money from P999",
      totalTime: "PT5M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "PKR", value: "0" },
      step: steps.map(([name, text]) => ({ "@type": "HowToStep", name, text })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Withdraw Money from P999", item: pageUrl },
  ],
};

export default function WithdrawMoneyFromP999Page() {
  return (
    <article className="min-h-screen bg-primary" itemScope itemType="https://schema.org/Article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />

      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-400 max-w-4xl mx-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Withdraw Money from P999</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Withdraw Money from <span className="text-accent">P999</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Use this Pakistan-focused guide to cash out eligible P999 balances through JazzCash or EasyPaisa.
            </p>
            <CtaButton>Download P999 App</CtaButton>
            <div className="mt-10 flex justify-center">
              <Image
                src="/p999-account.webp"
                alt="P999 account and wallet screen for withdrawals"
                title="P999 Withdrawal Guide"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
                priority
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A withdrawal in P999 means sending eligible app balance to your personal JazzCash or EasyPaisa account. The important part is accuracy: your account number, name, and withdrawal amount must match the details accepted by the app.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you are new, first read how <Link href="/deposit-money-in-p999" className="text-accent hover:underline font-semibold">P999 deposits work</Link> so you understand wallet limits, payment records, and risk before playing with real money.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">P999 Withdrawal Steps</h2>
            <ol className="space-y-8 list-none">
              {steps.map(([name, text], index) => (
                <li key={name} className="bg-[#07140C] rounded-xl shadow-lg p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-[#07140C] rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">{index + 1}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{name}</h3>
                      <p className="text-gray-300 leading-relaxed">{text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Tips for Smooth P999 Payouts</h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4 text-lg text-gray-300">
                <li>Use your own verified JazzCash or EasyPaisa account.</li>
                <li>Keep your P999 account name and wallet holder name consistent where possible.</li>
                <li>Do not submit repeated withdrawal requests while one is pending.</li>
                <li>Withdraw only from eligible balance after reading bonus wagering or app rules.</li>
                <li>Save screenshots of failed or pending withdrawals before contacting support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Common Withdrawal Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["Wrong wallet number", "Cancel or contact support quickly if the request cannot be edited."],
                ["Pending status", "Wait for the app timeline and avoid duplicate cash-out attempts."],
                ["Balance not withdrawable", "Check bonus rules, locked balance, or minimum withdrawal conditions."],
                ["Wallet network delay", "JazzCash or EasyPaisa outages can slow successful payouts."],
              ].map(([title, body]) => (
                <div key={title} className="bg-[#07140C] p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-bold text-accent mb-3">{title}</h3>
                  <p className="text-gray-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(([question, answer]) => (
                <div key={question} className="bg-secondary rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-accent mb-3">{question}</h3>
                  <p className="text-gray-300 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need to Add Funds First?</h2>
          <p className="text-lg text-gray-300 mb-8">Review P999 deposit limits and wallet steps before you start playing.</p>
          <CtaButton href="/deposit-money-in-p999" icon="arrow">Read Deposit Guide</CtaButton>
        </div>
      </section>
    </article>
  );
}
