import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogPostSchema from "@/components/BlogPostSchema";
import CtaButton from "@/components/CtaButton";
import { APP_FACTS } from "@/lib/appFacts";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const slug = "p999-beginner-guide-pakistan";
const pageUrl = `${SITE_ORIGIN}/blog/${slug}`;
const title = "P999 Beginner Guide for Pakistan Players";
const h1 = "P999 Beginner Guide Pakistan: Your First 30 Minutes";
const description =
  "A first-session P999 beginner guide for Pakistan: safe download, registration, login, wallet basics, small bets, bonuses, limits, and when to stop.";
const datePublished = "2026-04-11";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "P999",
    locale: "en_US",
    type: "article",
    publishedTime: datePublished,
    images: [
      {
        url: `${SITE_ORIGIN}/p999-game.webp`,
        width: 720,
        height: 1440,
        alt: "P999 game lobby screenshot for beginner players in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

const faqs = [
  {
    question: "What should a P999 beginner do first?",
    answer:
      "Start by using the official P999 download page, registering with your own mobile number, learning the wallet screen, and setting a small budget before any real-money play.",
  },
  {
    question: "Should beginners deposit immediately after installing P999?",
    answer:
      "No. Beginners should first explore the interface, understand account settings, read bonus terms, and decide a limit away from pressure before depositing.",
  },
  {
    question: "Which P999 guide should I read before adding money?",
    answer:
      "Read the official deposit guide before adding money and the withdrawal guide before expecting payouts. These core pages cover payment steps better than a beginner overview.",
  },
  {
    question: "Can I use P999 on a PC as a beginner?",
    answer:
      "Beginners who prefer a larger screen can read the P999 for PC guide, but they should avoid unknown emulator downloads and keep account details private.",
  },
  {
    question: "When should a beginner stop playing P999?",
    answer:
      "Stop when your time limit ends, your budget is spent, you feel pressure to recover losses, or you are no longer making calm decisions.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to start with P999 in your first 30 minutes",
  totalTime: "PT30M",
  step: [
    { "@type": "HowToStep", name: "Download safely", text: "Open p999gaming.com.pk and use the official download guide." },
    { "@type": "HowToStep", name: "Register and login", text: "Use your own mobile number and keep the OTP private." },
    { "@type": "HowToStep", name: "Explore the wallet", text: "Review balance, deposit, withdrawal, account, and support screens." },
    { "@type": "HowToStep", name: "Start small", text: "If you choose to play, use a small fixed budget and avoid chasing losses." },
    { "@type": "HowToStep", name: "Stop on time", text: "End the first session when the limit is reached or decisions stop feeling calm." },
  ],
};

const articleBody =
  "This P999 beginner guide walks Pakistani players through the first 30 minutes: official download, registration, login, wallet checks, small first bets, bonuses, responsible limits, and knowing when to stop.";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-accent mb-5">{title}</h2>
      <div className="space-y-5 text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function P999BeginnerGuidePakistanPage() {
  return (
    <article className="min-h-screen bg-primary">
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        image={`${SITE_ORIGIN}/p999-game.webp`}
        articleBody={articleBody}
      />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />

      <section className="px-4 md:px-8 py-8 md:py-14 max-w-5xl mx-auto">
        <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-accent" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        <div className="text-center mb-10">
          <p className="text-accent font-semibold mb-3">First Session Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{h1}</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            If you are opening P999 for the first time, the goal is not to rush into every feature. A good first session is calm: download from the right place, register with the right number, understand the wallet, make small decisions, and stop before excitement takes over.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center bg-secondary border border-gray-800 rounded-2xl p-6 md:p-8 mb-12">
          <Image
            src="/p999-game.webp"
            alt="P999 game lobby with card and casino-style categories for beginners"
            width={360}
            height={720}
            className="rounded-xl w-full max-w-[260px] mx-auto h-auto"
            priority
            sizes="(max-width: 768px) 70vw, 260px"
          />
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              This guide is written as a first 30 minutes plan for Pakistani Android users. It is not a promise of winnings, and it is not a replacement for the full download, deposit, withdrawal, or PC guides.
            </p>
            <p>
              Treat P999 as adult entertainment with real financial risk. The best beginner habit is learning the system before risking money.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <Section id="before-start" title="Before You Start: Make Three Decisions">
            <p>
              First, decide which mobile number you will use. Choose your own active SIM, not a borrowed number and not a family member&apos;s wallet phone. In P999-style apps, the number can become the account identity. If you lose access to that SIM later, recovery can become harder than expected.
            </p>
            <p>
              Second, decide your budget before you see any deposit screen. A beginner should not open the wallet and then think about limits. Decide an amount you can afford to lose without affecting bills, family needs, or school fees. If that amount is zero today, the correct first session is simply exploring and stopping.
            </p>
            <p>
              Third, decide how much time you will spend. Thirty minutes is enough to download, register, look around, read bonus terms, and understand the wallet. A short first session is useful because it prevents the app from turning into a long emotional session before you understand the basics.
            </p>
          </Section>

          <Section id="minute-zero" title="Minute 0-5: Download P999 from the Official Route">
            <p>
              Open the official website directly at <Link href="/" className="text-accent hover:underline">p999gaming.com.pk</Link>. Do not start from a random Telegram file, TikTok comment, shortened URL, or video description. Beginners are most vulnerable at the download stage because a fake APK can look normal after installation.
            </p>
            <p>
              Use the <Link href="/download-p999-game" className="text-accent hover:underline">Download P999 Game</Link> guide for the current APK details, Android requirement, file size, and install steps. The app facts on this site mention {APP_FACTS.version}, {APP_FACTS.fileSize}, and {APP_FACTS.os}. If another page shows wildly different information or asks for a fee before download, slow down.
            </p>
            <p>
              Android may ask you to allow installation from unknown apps. That setting should be used carefully. Allow it for the browser or file manager only when you understand what you are installing, then avoid using the same permission for random APKs afterward. One safe install decision is better than cleaning up a phone full of unknown files later.
            </p>
          </Section>

          <Section id="minute-five" title="Minute 5-10: Register and Login Carefully">
            <p>
              After installation, open P999 and look for the normal registration or login flow. Use your own mobile number, check every digit, and wait for the OTP. Do not share the OTP with anyone. Do not type it into a helper website. Do not send it to a person claiming they can activate a reward. The OTP is the key to your account.
            </p>
            <p>
              If the OTP is delayed, do not panic. Weak signals, network congestion, VPNs, and repeated requests can slow delivery. Wait a short time, check your number, and try again calmly. Many beginners create their own login problem by tapping repeatedly, switching networks quickly, or searching for unofficial shortcuts.
            </p>
            <p>
              Once you are inside the app, pause. This is a good moment to check whether you are comfortable with the interface, language, wallet area, account screen, and support options. You are not required to deposit just because registration worked. A successful login is a checkpoint, not a command to start betting.
            </p>
          </Section>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary border border-gray-800 rounded-2xl p-5">
              <Image
                src="/p999-register.webp"
                alt="P999 registration screen for new Pakistani users"
                width={360}
                height={720}
                className="rounded-xl w-full h-auto"
                sizes="(max-width: 768px) 80vw, 220px"
              />
              <p className="text-sm text-gray-400 mt-4 text-center">Register with your own active mobile number.</p>
            </div>
            <div className="bg-secondary border border-gray-800 rounded-2xl p-5">
              <Image
                src="/p999-login.webp"
                alt="P999 login screen where beginners should keep OTP private"
                width={360}
                height={720}
                className="rounded-xl w-full h-auto"
                sizes="(max-width: 768px) 80vw, 220px"
              />
              <p className="text-sm text-gray-400 mt-4 text-center">Keep OTP codes private and avoid fake helpers.</p>
            </div>
            <div className="bg-secondary border border-gray-800 rounded-2xl p-5">
              <Image
                src="/p999-account.webp"
                alt="P999 account dashboard for checking profile wallet and support options"
                width={360}
                height={720}
                className="rounded-xl w-full h-auto"
                sizes="(max-width: 768px) 80vw, 220px"
              />
              <p className="text-sm text-gray-400 mt-4 text-center">Find account and wallet controls before playing.</p>
            </div>
          </div>

          <Section id="minute-ten" title="Minute 10-15: Understand the Wallet Before Depositing">
            <p>
              The wallet is where beginners should slow down. Look for balance, deposit, withdrawal, history, bonus balance, and account details. Do not assume every number on the screen is withdrawable cash. Some balances may include bonus credits, locked rewards, event prizes, or amounts still subject to terms.
            </p>
            <p>
              Pakistani users commonly care about JazzCash and EasyPaisa because those wallets are familiar and fast. Familiar does not mean automatic. Before sending money, read the <Link href="/deposit-money-in-p999" className="text-accent hover:underline">P999 deposit guide</Link>. Before expecting payouts, read the <Link href="/withdraw-money-from-p999" className="text-accent hover:underline">P999 withdrawal guide</Link>. Those pages exist so the blog does not repeat full payment instructions in a shallow way.
            </p>
            <p>
              Keep your first wallet action small if you choose to make one. A small amount teaches you how screens behave without creating pressure. If the minimum deposit is higher than you are comfortable risking, do not deposit. Comfort matters more than curiosity.
            </p>
          </Section>

          <Section id="minute-fifteen" title="Minute 15-20: Learn the Game Lobby Without Rushing">
            <p>
              P999 may show card games, casino-style categories, slots, events, promotions, and account tools. Beginners often tap around quickly because every section looks exciting. A better approach is to spend a few minutes simply learning where things are. Find the games, wallet, bonus center, support, account settings, and transaction history.
            </p>
            <p>
              Do not try every category in your first session. Pick one area to understand, preferably with the smallest comfortable stakes or no real-money action at all if browsing is available. Fast games can create fast decisions, and fast decisions are not beginner-friendly. If a game pace feels confusing, leave it.
            </p>
            <p>
              The goal is not to master P999 in one session. The goal is to remove confusion. A player who knows where to check balance, history, and support is safer than a player who only knows where the play button is.
            </p>
          </Section>

          <Section id="minute-twenty" title="Minute 20-25: Bonuses Are Extras, Not Instructions">
            <p>
              By this point you may see welcome offers, daily login rewards, lucky draws, task rewards, referral panels, or redeem-code boxes. These features can be useful, but they are also designed to keep attention. Read the terms before treating any reward as real value. A big bonus with hard conditions may be less useful than a small reward with clear terms.
            </p>
            <p>
              The <Link href="/blog/p999-bonuses-vip-redeem-codes" className="text-accent hover:underline">P999 bonuses and redeem codes guide</Link> explains daily login rewards, VIP levels, tasks, referrals, and fine print in more detail. For a beginner, the main rule is simple: never deposit more just to unlock a bonus. If the bonus fits your pre-decided budget, fine. If it changes the budget, skip it.
            </p>
            <p>
              Be careful with "working code" videos and generator pages. Real codes should come from official announcements or in-app promotions. A code that requires payment, OTP sharing, or another APK is not a beginner opportunity. It is a risk.
            </p>
          </Section>

          <Section id="minute-twenty-five" title="Minute 25-30: Make a Small Choice and Know When to Stop">
            <p>
              The last five minutes of a first session should be about control. If you choose to play, use the smallest amount that fits your plan. If you choose not to deposit, that is still a successful first session. You learned the app, verified the source, checked account screens, and avoided rushing into money decisions.
            </p>
            <p>
              Stop when your time limit ends, even if the app is still offering prompts. Stop if you feel annoyed, excited, pressured, or determined to recover a loss. Stop if you are hiding the session from someone who would be affected by the money. These are not moral lectures; they are practical signs that decision quality is dropping.
            </p>
            <p>
              P999 is for adults only and should be treated as entertainment, not a job. A beginner who stops on time is not missing out. They are building the one habit that protects every later session.
            </p>
          </Section>

          <Section id="after-session" title="After Your First Session: What to Review">
            <p>
              When you close the app, review what happened. Did you understand the wallet? Did OTP login work normally? Did any page ask for information that felt unnecessary? Did you stick to the limit? The answers tell you more than any online comment thread.
            </p>
            <p>
              If you want to use a laptop or desktop setup later, read <Link href="/p999-for-pc" className="text-accent hover:underline">P999 for PC</Link>. If you are still unsure whether the app is genuine, read <Link href="/blog/is-p999-game-real-or-fake" className="text-accent hover:underline">the real-or-fake check</Link>. If your main concern is account and wallet risk, read <Link href="/blog/is-p999-safe-to-play-pakistan" className="text-accent hover:underline">the Pakistan safety guide</Link>.
            </p>
            <p>
              The best learning path is not complicated: download safely, login carefully, understand wallet terms, read bonus fine print, and keep money decisions small. That sequence will protect most beginners from the common first-day mistakes seen in forums and social videos.
            </p>
          </Section>

          <Section id="faq" title="FAQs for New P999 Players">
            <div className="space-y-5">
              {faqs.map((item) => (
                <div key={item.question} className="bg-secondary border border-gray-800 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="mt-14 bg-secondary rounded-2xl border border-gray-800 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Start With the Official Download Guide</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Your first P999 session should be slow, verified, and budgeted. Begin with the official download page, then read the wallet guides before adding money.
          </p>
          <CtaButton href="/download-p999-game" ariaLabel="Open P999 beginner download route">
            DOWNLOAD P999 APK
          </CtaButton>
        </div>
      </section>
    </article>
  );
}
