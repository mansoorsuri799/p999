import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { APP_FACTS, SUPPORT_EMAIL } from "@/lib/appFacts";
import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/deposit-money-in-p999`;

export const metadata: Metadata = {
  title: "How to Deposit Money in P999 Pakistan | JazzCash & EasyPaisa Guide",
  description:
    "Learn how to deposit money in P999 from Pakistan using JazzCash and EasyPaisa. Includes limits, steps, troubleshooting, and safety tips.",
  keywords: "deposit money in P999, P999 deposit Pakistan, P999 JazzCash, P999 EasyPaisa, add money P999",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "How to Deposit Money in P999 Pakistan",
    description: "Step-by-step P999 deposit guide for JazzCash and EasyPaisa users in Pakistan.",
    url: pageUrl,
    siteName: "P999",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deposit Money in P999 Pakistan",
    description: "JazzCash and EasyPaisa deposit steps, limits, and troubleshooting.",
  },
};

const steps = [
  ["Open P999", "Launch the P999 app and sign in with the mobile number linked to your player account."],
  ["Go to wallet or recharge", "Tap Wallet, Recharge, Shop, or Deposit depending on the label shown in your app version."],
  ["Choose JazzCash or EasyPaisa", "Select the mobile wallet that you actively use and can approve payments from."],
  ["Enter the amount", `Choose an amount between ${APP_FACTS.minDeposit} and ${APP_FACTS.maxDeposit}. Start small if you are testing the process.`],
  ["Submit your account number", "Enter the JazzCash or EasyPaisa number carefully and confirm the deposit request."],
  ["Approve the payment", "Open your wallet prompt, review the merchant and amount, then approve the payment with your wallet PIN."],
  ["Check your P999 balance", "Return to P999 and refresh the wallet screen. Most successful deposits appear shortly after approval."],
];

const faqs = [
  ["What is the minimum P999 deposit?", `The listed minimum deposit is ${APP_FACTS.minDeposit}. Always check the live app screen because limits can change.`],
  ["What is the maximum P999 deposit?", `The listed maximum deposit is ${APP_FACTS.maxDeposit} per deposit request.`],
  ["Which wallets can I use?", "P999 commonly supports JazzCash and EasyPaisa for Pakistani users."],
  ["What should I do if my deposit is not showing?", `Wait a few minutes, refresh the wallet, keep your transaction ID, and contact ${SUPPORT_EMAIL} if the amount is still missing.`],
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How to Deposit Money in P999 Pakistan",
      description: "JazzCash and EasyPaisa deposit guide for P999 users in Pakistan.",
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
      name: "How to deposit money in P999",
      totalTime: "PT3M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "PKR", minValue: "100", maxValue: "50000" },
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
    { "@type": "ListItem", position: 2, name: "Deposit Money in P999", item: pageUrl },
  ],
};

export default function DepositMoneyInP999Page() {
  return (
    <article className="min-h-screen bg-[#07150C]" itemScope itemType="https://schema.org/Article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }} />

      <section className="relative py-12 md:py-20 bg-[#07150C] border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-400 max-w-4xl mx-auto" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-accent">Deposit Money in P999</span>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Deposit Money in <span className="text-accent">P999</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              JazzCash and EasyPaisa deposit steps for Pakistan, with limits from {APP_FACTS.minDeposit} to {APP_FACTS.maxDeposit}.
            </p>
            <CtaButton>Download P999 First</CtaButton>
            <div className="mt-10 flex justify-center">
              <Image
                src="/p999-deposit-money.webp"
                alt="P999 deposit money screen for JazzCash and EasyPaisa users"
                title="P999 Deposit Money Guide"
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
          <div className="max-w-4xl mx-auto bg-[#07150C] rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              P999 lets Pakistani players add funds through familiar mobile wallets. Before depositing, confirm you are using the official P999 app, keep your wallet number active, and never share your JazzCash or EasyPaisa PIN with anyone.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Deposits can involve financial risk because P999 is an entertainment gaming app. Add only an amount you can afford to lose, and read the <Link href="/withdraw-money-from-p999" className="text-accent hover:underline font-semibold">P999 withdrawal guide</Link> before expecting payouts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07150C]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">P999 Deposit Steps</h2>
            <ol className="space-y-8 list-none">
              {steps.map(([name, text], index) => (
                <li key={name} className="bg-[#07150C] rounded-xl shadow-lg p-8 border border-accent/15">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-[#07150C] rounded-full flex items-center justify-center text-xl font-bold mr-6" aria-hidden="true">{index + 1}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Deposit Not Showing?</h2>
            <div className="bg-[#07150C] rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4 text-lg text-gray-300">
                <li>Confirm the wallet payment was successful and not just pending.</li>
                <li>Refresh the P999 wallet screen or sign out and sign in again.</li>
                <li>Check that the deposited amount matches the amount entered in P999.</li>
                <li>Keep the JazzCash or EasyPaisa transaction ID and screenshot.</li>
                <li>Email <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a> with your P999 account number and transaction ID.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07150C]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(([question, answer]) => (
                <div key={question} className="bg-[#07150C] rounded-xl shadow-lg p-6 border border-accent/15">
                  <h3 className="text-xl font-bold text-accent mb-3">{question}</h3>
                  <p className="text-gray-300 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need to Cash Out Later?</h2>
          <p className="text-lg text-gray-300 mb-8">Understand wallet verification and payout checks before playing with a larger balance.</p>
          <CtaButton href="/withdraw-money-from-p999" icon="arrow">Read Withdrawal Guide</CtaButton>
        </div>
      </section>
    </article>
  );
}
