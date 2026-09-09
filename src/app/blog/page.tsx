import type { Metadata } from "next";
import Link from "next/link";
import { SITE_ORIGIN } from "@/lib/schemaImageLicensing";

const posts = [
  {
    title: "P999 Login Guide for Pakistan Players",
    href: "/blog/p999-login-guide-pakistan",
    excerpt:
      "Detailed mobile OTP login steps, new vs existing users, OTP delay fixes, fake login pages, and account safety tips.",
    date: "April 12, 2026",
    featured: true,
  },
  {
    title: "Is P999 Real or Fake? Pakistan Player Check",
    href: "/blog/is-p999-game-real-or-fake",
    excerpt:
      "A practical trust check covering official-domain verification, withdrawal expectations, fake APK red flags, and responsible play.",
    date: "April 10, 2026",
    featured: false,
  },
  {
    title: "P999 Bonuses, VIP Tiers and Redeem Codes",
    href: "/blog/p999-bonuses-vip-redeem-codes",
    excerpt:
      "Daily login rewards, welcome offers, task bonuses, level-up perks, referrals, redeem codes, VIP tiers, and fine-print warnings.",
    date: "April 10, 2026",
    featured: false,
  },
  {
    title: "Is P999 Safe in Pakistan? Security Guide",
    href: "/blog/is-p999-safe-to-play-pakistan",
    excerpt:
      "Login safety, encryption expectations, JazzCash and EasyPaisa precautions, fake pages, account hygiene, 18+ use, and legal caution.",
    date: "April 11, 2026",
    featured: false,
  },
  {
    title: "P999 Beginner Guide for Pakistan Players",
    href: "/blog/p999-beginner-guide-pakistan",
    excerpt:
      "A first-30-minutes walkthrough: safe download, registration, login, wallet basics, small bets, bonuses, limits, and when to stop.",
    date: "April 11, 2026",
    featured: false,
  },
] as const;

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog` },
  ],
};

export const metadata: Metadata = {
  title: "P999 Blog: Pakistan Guides, Safety and Bonuses",
  description:
    "Read original P999 blog guides for Pakistan players: real or fake checks, safety tips, bonuses and VIP terms, redeem codes, and beginner setup advice.",
  alternates: {
    canonical: `${SITE_ORIGIN}/blog`,
  },
  openGraph: {
    title: "P999 Blog: Pakistan Guides, Safety and Bonuses",
    description:
      "Original P999 guides covering trust checks, safe play, rewards, redeem codes, and beginner setup for Pakistani Android users.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: "P999",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 512,
        height: 512,
        alt: "P999 Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P999 Blog: Pakistan Guides and Safety Tips",
    description:
      "Read P999 blog guides on safety, real-or-fake checks, bonuses, redeem codes, and beginner setup.",
    images: [`${SITE_ORIGIN}/feature/twitter-card.webp`],
  },
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData).replace(/</g, "\\u003c") }}
      />

      <section className="px-4 md:px-8 py-8 md:py-14 max-w-7xl mx-auto">
        <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-accent" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-3">P999 Editorial Guides</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">P999 Blog for Pakistan Players</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Fresh P999 articles focused on trust, safe setup, rewards, and beginner decisions. Each guide links to the official download, deposit, withdrawal, and PC pages when a full walkthrough is needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.href}
              className={`bg-secondary rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-2xl ${
                post.featured ? "border-accent" : "border-gray-800 hover:border-accent"
              }`}
            >
              <div className="p-6 md:p-8">
                {post.featured ? (
                  <span className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                    FEATURED CHECK
                  </span>
                ) : null}
                <p className="text-sm text-gray-400 mb-3">{post.date}</p>
                <h2 className="text-2xl font-bold text-white mb-4">
                  <Link href={post.href} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">{post.excerpt}</p>
                <Link href={post.href} className="text-accent hover:underline font-semibold">
                  Read guide <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-secondary rounded-2xl border border-gray-800 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Need the Core P999 Guides?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Blog posts answer supporting questions. For step-by-step setup and payments, use the dedicated guide pages.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/download-p999-game" className="text-accent hover:underline">
              Download P999 Game
            </Link>
            <Link href="/deposit-money-in-p999" className="text-accent hover:underline">
              Deposit Money in P999
            </Link>
            <Link href="/withdraw-money-from-p999" className="text-accent hover:underline">
              Withdraw Money from P999
            </Link>
            <Link href="/p999-for-pc" className="text-accent hover:underline">
              P999 for PC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
