import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import PhoneFrame from "@/components/PhoneFrame";
import { APP_FACTS, SUPPORT_EMAIL } from "@/lib/appFacts";
import { imageObjectLicensing, SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const pageUrl = `${SITE_ORIGIN}/p999-login`;

export const metadata: Metadata = {
  title: "P999 Login Guide Pakistan | Mobile Number & OTP Steps",
  description:
    "Learn how to login to P999 Game in Pakistan with mobile number and OTP. Fix OTP delay, wrong number format, too many attempts, and fake login pages.",
  keywords:
    "P999 login, P999 Game login, P999 OTP, how to login P999 Pakistan, P999 account login",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "P999 Login Guide for Pakistan Players",
    description:
      "Step-by-step P999 login with mobile OTP, troubleshooting, and fake-page warnings for Pakistani users.",
    url: pageUrl,
    siteName: "P999",
    type: "article",
    images: [
      {
        url: `${SITE_ORIGIN}/p999-login.webp`,
        width: 826,
        height: 1466,
        alt: "P999 login screen for Pakistan mobile users",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P999 Login Guide Pakistan",
    description: "Mobile number + OTP login steps and common fixes for P999.",
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const loginSteps = [
  [
    "Open the official P999 app",
    "Install P999 from the trusted download flow on p999gaming.com.pk, then open the app on Android.",
  ],
  [
    "Tap Login",
    "On the welcome screen, choose Login instead of creating a duplicate account if you already registered.",
  ],
  [
    "Enter your mobile number",
    "Use the same Pakistan mobile number you registered with. Check the country code and avoid extra spaces.",
  ],
  [
    "Request and enter OTP",
    "Wait for the one-time password SMS, enter it carefully, and do not share the code with anyone.",
  ],
  [
    "Open the dashboard",
    "After a successful login you can open games, wallet, bonuses, and support from the main screen.",
  ],
];

const faqs = [
  [
    "How do I login to P999 Game?",
    "Open the official P999 APK, tap Login, enter your registered mobile number, verify the OTP, and open the dashboard.",
  ],
  [
    "Why is my P999 OTP late?",
    "OTP delays usually come from weak signal, network congestion, wrong number format, or too many repeated requests. Wait a few minutes and try again.",
  ],
  [
    "Can I login to P999 on a new phone?",
    "Yes, if you still control the registered SIM. Install the official APK, login with the same number, and verify the OTP on that SIM.",
  ],
  [
    "Is P999 login safe in Pakistan?",
    "Login is safer when you use the official site, never share OTP or password, and avoid fake pages that ask for wallet PINs.",
  ],
  [
    "What if I forgot my P999 password?",
    "Use Forgot Password inside the app, verify with your registered number, set a new password, and contact support if recovery fails.",
  ],
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "P999 Login Guide for Pakistan",
      description:
        "How to login to P999 with mobile number and OTP, plus troubleshooting for Pakistani users.",
      url: pageUrl,
      image: `${SITE_ORIGIN}/p999-login.webp`,
      author: { "@type": "Organization", name: "P999", url: SITE_ORIGIN },
      publisher: {
        "@type": "Organization",
        name: "P999",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}/p999.webp`,
          ...imageObjectLicensing,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      inLanguage: "en-US",
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#howto`,
      name: "How to login to P999 Game",
      totalTime: "PT2M",
      step: loginSteps.map(([name, text]) => ({
        "@type": "HowToStep",
        name,
        text,
      })),
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
        { "@type": "ListItem", position: 2, name: "P999 Login", item: pageUrl },
      ],
    },
  ],
};

export default function P999LoginPage() {
  return (
    <article className="min-h-screen bg-[#07160C]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }}
      />

      <section className="relative py-12 md:py-20 bg-[#07160C] border-b border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-400 max-w-4xl mx-auto" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent" aria-current="page">
                P999 Login
              </li>
            </ol>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              P999 Login Guide for <span className="text-accent">Pakistan</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Sign in with your mobile number and OTP, fix common login errors, and avoid fake P999 login pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto sm:max-w-none">
              <CtaButton ariaLabel="Download P999 Game APK">Download P999</CtaButton>
            </div>
            <div className="mt-10 flex justify-center">
              <PhoneFrame
                src="/p999-login.webp"
                alt="P999 login screen with mobile number and OTP fields"
                width={826}
                height={1466}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#07160C] rounded-2xl shadow-xl p-8 md:p-12 border border-accent/10">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">What Is P999 Login?</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                P999 login is the account access step that lets Pakistani players open their wallet, games, bonuses, and support tools inside the official app. Most users sign in with a mobile number and a one-time password (OTP).
              </p>
              <p>
                A clean login matters because deposits, withdrawals, and referral rewards stay tied to the registered number. If you login on a copied website or share your OTP, you risk losing account control before you even place a bet.
              </p>
              <p>
                App details currently listed on this site include {APP_FACTS.name}, {APP_FACTS.version}, {APP_FACTS.fileSize}, and {APP_FACTS.os}. Always confirm the latest labels inside the live app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 text-center">How to Login to P999</h2>
          <ol className="space-y-5">
            {loginSteps.map(([title, text], index) => (
              <li key={title} className="bg-[#07160C] rounded-xl shadow-lg p-6 md:p-8 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-[#07160C] rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-gray-400 text-sm mt-6 text-center">
            New to the app? Register first, then return here. See the{" "}
            <Link href="/blog/p999-beginner-guide-pakistan" className="text-accent hover:underline">
              beginner guide
            </Link>{" "}
            and{" "}
            <Link href="/download-p999-game" className="text-accent hover:underline">
              download page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">Register vs Login</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-white">Register</strong> creates a new account with a mobile number and password.
                </li>
                <li>
                  <strong className="text-white">Login</strong> opens an existing account with the same number and OTP or password flow.
                </li>
                <li>Do not create a second account on another number just to bypass a temporary OTP delay.</li>
                <li>Use one account per person to reduce freeze or verification issues later.</li>
              </ul>
            </div>
            <PhoneFrame
              src="/p999-register.webp"
              alt="P999 register screen for creating a new account before login"
              width={826}
              height={1462}
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">Common P999 Login Problems & Fixes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "OTP not received",
                "Check signal, wait 2–5 minutes, confirm the number format, and avoid tapping Resend repeatedly. Switch to a better network if SMS is delayed.",
              ],
              [
                "Wrong mobile number format",
                "Use your Pakistan number carefully with the correct country code. Remove spaces or extra zeros that make the SMS fail.",
              ],
              [
                "Too many login attempts",
                "Pause for several minutes before trying again. Rapid retries can temporarily block OTP delivery.",
              ],
              [
                "App not opening",
                "Update to the latest APK, free storage, restart the phone, and reinstall only from the official download path.",
              ],
              [
                "Changed phone or SIM",
                "Login still needs the registered SIM for OTP. If you lost the number, contact support with account proof.",
              ],
              [
                "Forgot password",
                "Use Forgot Password, verify OTP, set a strong unique password, and never reuse wallet PINs as app passwords.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#07160C] p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#07160C] rounded-2xl p-8 md:p-12 border border-red-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">Avoid Fake P999 Login Pages</h2>
            <ul className="space-y-3 text-gray-300 leading-relaxed list-disc pl-5">
              <li>Start from p999gaming.com.pk — not random Telegram or WhatsApp APK files.</li>
              <li>Never enter OTP, password, or JazzCash/EasyPaisa PIN on unknown websites.</li>
              <li>Compare screenshots and app size with the official download information.</li>
              <li>
                Read the{" "}
                <Link href="/blog/is-p999-game-real-or-fake" className="text-accent hover:underline">
                  real or fake guide
                </Link>{" "}
                and{" "}
                <Link href="/blog/is-p999-safe-to-play-pakistan" className="text-accent hover:underline">
                  safety guide
                </Link>{" "}
                before depositing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 text-center">P999 Login FAQs</h2>
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <div key={question} className="bg-[#07160C] rounded-xl shadow-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
                <p className="text-gray-300 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-8">
            Still stuck? Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">
              {SUPPORT_EMAIL}
            </a>{" "}
            or open{" "}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#07160C] border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Ready to Sign In?</h2>
          <p className="text-gray-300 mb-8">
            Download the official APK, login with your number, then use the deposit and withdraw guides when you are ready to manage your wallet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CtaButton>DOWNLOAD NOW</CtaButton>
            <Link href="/deposit-money-in-p999" className="text-accent hover:underline font-semibold">
              Deposit Guide
            </Link>
            <Link href="/withdraw-money-from-p999" className="text-accent hover:underline font-semibold">
              Withdraw Guide
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">18+ only. No guaranteed income. Play responsibly.</p>
        </div>
      </section>
    </article>
  );
}
