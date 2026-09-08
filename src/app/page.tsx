import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import { APP_AGGREGATE_RATING, APP_DOWNLOAD_URL, APP_SCREENSHOTS, APP_FACTS, SUPPORT_EMAIL } from '@/lib/appFacts';
import CtaButton from '@/components/CtaButton';
import PhoneFrame from '@/components/PhoneFrame';

const SITE_URL = 'https://p999gaming.com.pk';
const LOGO_URL = `${SITE_URL}/p999.webp`;
const OG_IMAGE_URL = `${SITE_URL}/feature/og-image.webp`;
const TWITTER_IMAGE_URL = `${SITE_URL}/feature/twitter-card.webp`;

const apkFacts = [
  ['App Name', APP_FACTS.name],
  ['Category', APP_FACTS.category],
  ['Size', APP_FACTS.fileSize],
  ['Version', APP_FACTS.version],
  ['Android', APP_FACTS.os],
  ['Last Update', APP_FACTS.lastUpdate],
  ['Downloads', APP_FACTS.downloads],
  ['Rating Count', APP_FACTS.ratingCountLabel],
  ['Language', 'Urdu English'],
  ['Licence', 'Free 0$'],
] as const;

const screenshots = [
  {
    src: '/p999-game.webp',
    alt: 'P999 game lobby showing casino-style card and slot game categories',
    label: 'Game Lobby',
  },
  {
    src: '/p999-login.webp',
    alt: 'P999 login screen for Pakistani mobile number account access',
    label: 'Login Screen',
  },
  {
    src: '/p999-register.webp',
    alt: 'P999 registration page for creating a new gaming account',
    label: 'Register Account',
  },
  {
    src: '/p999-deposit-money.webp',
    alt: 'P999 deposit money page with local wallet payment options',
    label: 'Deposit Money',
  },
  {
    src: '/p999-lucky-draw.webp',
    alt: 'P999 lucky draw rewards area for event-based bonus offers',
    label: 'Lucky Draw',
  },
  {
    src: '/p999-promote-link.webp',
    alt: 'P999 promote link screen for referral earning and invite tracking',
    label: 'Promote Link',
  },
  {
    src: '/p999-account.webp',
    alt: 'P999 account dashboard showing profile wallet and support settings',
    label: 'Account Center',
  },
] as const;

const installSteps = [
  'Open the official P999 download page on your Android phone.',
  'Tap the Download P999 APK button and wait for the 7.04MB file to finish downloading.',
  'Open Android Settings, go to Security, and allow Install Unknown Apps for your browser or file manager.',
  'Find the downloaded P999 APK file in your Downloads folder and tap Install.',
  'Launch P999, register or log in with your mobile number, and review the wallet and responsible gaming settings before playing.',
] as const;

const faqItems = [
  {
    question: 'Is P999 free to download?',
    answer:
      'Yes. You do not need to pay to download and install the P999 app. Make sure your Android device meets the basic requirements before installing the APK.',
  },
  {
    question: 'Can I earn real money on P999?',
    answer:
      'P999 offers real-money play where you can win or lose funds by playing games and using bonuses. There is no guaranteed income, so only stake what you can afford.',
  },
  {
    question: 'Which payment methods does this gaming app support?',
    answer:
      'P999 supports Pakistani e-wallets such as JazzCash and EasyPaisa, and may also allow local bank transfers for larger transactions depending on the in-app wallet options.',
  },
  {
    question: 'What is the minimum and maximum deposit limit of P999?',
    answer:
      'The minimum deposit is typically PKR 100 and the maximum is typically PKR 50000. Always confirm the latest limits on the deposit screen before sending money.',
  },
  {
    question: 'Is this game safe to use?',
    answer:
      'P999 uses encrypted transactions and account protections, but you should still keep login details private, avoid unofficial APK links, and play only on p999gaming.com.pk.',
  },
  {
    question: 'Can I use the P999 App on iPhones?',
    answer:
      'P999 is mainly available for Android. Check the official website for any future iOS update before trying to install on iPhone.',
  },
  {
    question: 'What should I do if my payment was not received?',
    answer:
      'Wait a few minutes, confirm your JazzCash or EasyPaisa details, and keep the transaction proof. If the balance still does not appear, contact support with the receipt.',
  },
  {
    question: 'How can I contact P999 support?',
    answer:
      'Use in-app live chat when available, or email support@p999gaming.com.pk through the Contact page for account, bonus, or payment help.',
  },
  {
    question: 'What casino games does this platform offer?',
    answer:
      'P999 offers card games such as Teen Patti, Rummy, and Poker, plus slots, fishing games, and mini games like Dragon vs Tiger and roulette.',
  },
  {
    question: 'How can I withdraw money from a P999 wallet?',
    answer:
      'Open the app, go to Wallet, choose Withdraw, select JazzCash or EasyPaisa, enter the amount and account details, then confirm. Follow the full withdraw guide if you need screenshots.',
  },
  {
    question: 'Is P999 Game real or fake?',
    answer:
      'Treat P999 as a real-money entertainment app, not a guaranteed earning scheme. Use only the official domain, avoid cloned download pages, and read the real-or-fake guide before depositing.',
  },
  {
    question: 'Why does my P999 login OTP arrive late?',
    answer:
      'OTP delays often come from weak signal, network congestion, an incorrect mobile number format, or too many repeated requests. Wait a few minutes and try again carefully.',
  },
] as const;

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'P999',
      description: 'P999 Game download and guide for Pakistani Android users.',
      inLanguage: 'en-PK',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: 'P999 Game Download APK | Real Money App Pakistan 2026',
      description:
        'Download P999 APK for Android in Pakistan. Learn about JazzCash, EasyPaisa, login, bonuses, screenshots, safety tips, and responsible play.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#softwareapplication` },
      primaryImageOfPage: { '@id': `${LOGO_URL}#primary` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: [
          '#overview',
          '#what-is-p999-game',
          '#why-p999-trending',
          '#top-features',
          '#download-install',
          '#register-login',
          '#deposit-withdraw',
          '#fake-sites',
          '#faq',
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'P999',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: 512,
        height: 512,
        ...imageObjectLicensing,
        creditText: 'P999 logo',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: SUPPORT_EMAIL,
        contactType: 'Customer Support',
        areaServed: 'PK',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#softwareapplication`,
      name: 'P999',
      operatingSystem: APP_FACTS.os,
      applicationCategory: 'GameApplication',
      aggregateRating: APP_AGGREGATE_RATING,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PKR',
        availability: 'https://schema.org/InStock',
      },
      softwareVersion: APP_FACTS.version,
      fileSize: APP_FACTS.fileSize,
      downloadUrl: APP_DOWNLOAD_URL,
      screenshot: [...APP_SCREENSHOTS],
      image: LOGO_URL,
      logo: LOGO_URL,
      contentRating: '18+',
      inLanguage: ['en', 'ur'],
      countriesSupported: 'PK',
      author: { '@id': `${SITE_URL}/#organization` },
      description:
        'P999 is a lightweight Android gaming app for Pakistani users with card games, casino-style entertainment, bonuses, local wallet payments, and account support.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'HowTo',
      '@id': `${SITE_URL}/#install-howto`,
      name: 'How to Download and Install P999 Game APK',
      description: 'Step-by-step guide to download and install the P999 APK on Android.',
      totalTime: 'PT5M',
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Android phone',
        },
        {
          '@type': 'HowToSupply',
          name: 'Stable internet connection',
        },
      ],
      step: installSteps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: `Step ${index + 1}`,
        text: step,
      })),
    },
    {
      '@type': 'ImageObject',
      '@id': `${LOGO_URL}#primary`,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      name: 'P999 logo',
      description: 'Official P999 app logo for the Pakistani Android gaming platform.',
      width: 512,
      height: 512,
      ...imageObjectLicensing,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'P999 Game Download APK | Real Money App Pakistan 2026',
    template: '%s | P999',
  },
  description:
    'Download P999 APK for Pakistan with JazzCash and EasyPaisa support, login help, bonuses, screenshots, safety tips, and Android install guide.',
  keywords: [
    'P999 Game',
    'P999 APK',
    'P999 download',
    'P999 Pakistan',
    'P999 Game APK',
    'P999 real money app',
    'P999 casino app',
    'P999 Android app',
    'P999 login',
    'P999 register',
    'P999 JazzCash',
    'P999 EasyPaisa',
    'P999 bonuses',
    'P999 withdrawal',
    'P999 deposit',
    'real money game Pakistan',
    'earning game APK Pakistan',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'P999 Game APK Download for Android Pakistan',
    description:
      'Get the P999 APK guide for Pakistan with local payment info, screenshots, safety checks, login help, bonuses, and responsible play tips.',
    url: SITE_URL,
    siteName: 'P999',
    type: 'website',
    locale: 'en_PK',
    images: [
      {
        url: LOGO_URL,
        width: 512,
        height: 512,
        alt: 'P999 Game official app logo',
      },
      {
        url: OG_IMAGE_URL,
        width: 512,
        height: 512,
        alt: 'P999 Game homepage preview for Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'P999 Game APK Download for Android Pakistan',
    description:
      'Download P999 APK and learn about registration, login, JazzCash, EasyPaisa, bonuses, security, and 18+ responsible gaming.',
    images: [LOGO_URL, TWITTER_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function Section({
  id,
  title,
  children,
  dark = false,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section id={id} className="py-10 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-secondary rounded-xl p-6 md:p-8 border border-accent/10 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#07140C] border border-accent/20 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-accent">{title}</h3>
      <div className="space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

function AccordionIcon() {
  return (
    <span className="transition group-open:rotate-180 text-accent" aria-hidden="true">
      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '420px' }}>
        <div className="md:flex md:items-center md:justify-between md:gap-10 lg:gap-16">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <p className="text-accent font-semibold tracking-wide uppercase">Official P999 APK Guide</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                P999
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
                Top Real Money Gaming App in Pakistan
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline font-semibold">P999 Game</Link> is a trending online casino-style app built for the Pakistani audience. It keeps the experience simple for beginners, supports local users with clear account options, and offers 24/7 help for login, payment, and gameplay questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none">
              <CtaButton href="/download-p999-game">Download P999</CtaButton>
              <Link href="#register-login" className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-4 rounded-full border border-accent text-accent font-semibold text-sm sm:text-base hover:bg-accent/10 transition">
                Register / Login Guide
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span className="bg-[#0C1F14] border border-accent/20 rounded-full px-4 py-2">
                <span className="text-accent font-bold">{APP_AGGREGATE_RATING.ratingValue}</span> ★★★★★ Rating
              </span>
              <span className="bg-[#0C1F14] border border-accent/20 rounded-full px-4 py-2">Android 5.0+</span>
              <span className="bg-[#0C1F14] border border-accent/20 rounded-full px-4 py-2">18+ Responsible Play</span>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#0C1F14] p-4 md:p-6 rounded-2xl text-center">
                <div className="text-white text-xl md:text-2xl font-bold">1.5Million+</div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">Downloads</div>
              </div>
              <div className="bg-[#0C1F14] p-4 md:p-6 rounded-2xl text-center">
                <div className="text-white text-xl md:text-2xl font-bold">500K+</div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">Ratings</div>
              </div>
              <div className="bg-[#0C1F14] p-4 md:p-6 rounded-2xl text-center">
                <div className="text-white text-xl md:text-2xl font-bold">7.04MB</div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">App Size</div>
              </div>
            </div>
          </div>

          <figure
            className="mt-8 md:mt-0 md:-mt-4 md:w-1/2 flex justify-center md:justify-end"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="name" content="P999" />
            <meta itemProp="description" content="Official P999 app logo for Android gaming in Pakistan." />
            <meta itemProp="url" content={LOGO_URL} />
            <Image
              src="/p999.webp"
              alt="P999 official gaming app logo for Pakistan"
              title="P999 Game - Download APK for Android"
              width={320}
              height={320}
              className="logo-clean object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 260px, 320px"
              itemProp="image"
            />
            <figcaption className="sr-only">P999 official app logo for Pakistani Android users.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto" id="apk-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">P999 APK Information Table</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-accent/20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {apkFacts.map(([label, value], index) => (
                  <tr key={label} className={index % 2 === 0 ? 'bg-[#0C1F14]/80' : 'bg-[#07140C]/80'}>
                    <td className="py-4 px-6 text-left font-semibold text-white">{label}</td>
                    <td className="py-4 px-6 text-left text-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Section id="overview" title="Overview">
        <div className="space-y-5 text-gray-300 leading-relaxed">
          <p>
            P999 is made for users who want a simple Android gaming app with card games, lucky draw-style rewards, wallet options, and account tools in one place. The homepage, game lobby, login, registration, deposit, and promotion screens are arranged so new users can find the next step without confusion.
          </p>
          <p>
            The app is popular because it feels lightweight, familiar, and local. Pakistani users often look for JazzCash and EasyPaisa support, Urdu and English language comfort, and support that answers payment or login questions quickly. P999 focuses on those needs while keeping the APK size at just 7.04MB.
          </p>
          <p>
            Because P999 involves real-money gameplay, every user should set a budget, understand the risks, and avoid treating any game as guaranteed income. Play only if you are 18 or older and comfortable with possible losses.
          </p>
        </div>
      </Section>

      <Section id="what-is-p999-game" title="What is the P999 Game?" dark>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-5 text-gray-300 leading-relaxed">
            <p>
              P999 Game is an Android casino-style gaming application for Pakistan. It brings card games, casual games, rewards, referral tools, account management, and wallet actions into a single mobile app. Users can register with a mobile number, log in, explore game categories, and use the wallet area for deposits or withdrawals.
            </p>
            <p>
              The app is different from a basic game because it includes real-money features. That means the experience can be entertaining, but it also requires careful money management. P999 should be used as paid entertainment, not as a salary source or financial plan.
            </p>
          </div>
          <PhoneFrame
            src="/p999-game.webp"
            alt="P999 game lobby with multiple casino-style game categories"
            width={828}
            height={1470}
          />
        </div>
      </Section>

      <Section id="why-p999-trending" title="Why is the P999 Game App Trending in Pakistan?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="Local Payment Options">
            <p>P999 attracts Pakistani players because wallet actions are designed around familiar local methods such as JazzCash and EasyPaisa. Users do not need to learn a foreign payment flow before they can manage app funds.</p>
          </FeatureCard>
          <FeatureCard title="Easy Earnings">
            <p>The app includes reward mechanics such as welcome bonuses, daily activity rewards, referrals, and events. These can add value to gameplay, but they should be treated as app promotions, not fixed income.</p>
          </FeatureCard>
          <FeatureCard title="Lightweight Application">
            <p>At 7.04MB, P999 is small compared with many gaming APKs. This makes it easier for users with older Android phones, slower internet, or limited storage to download and test the app.</p>
          </FeatureCard>
          <FeatureCard title="Fair Gameplay System">
            <p>Players look for clear rules, predictable game menus, and stable gameplay. P999 presents games in an easy layout so users can understand where to play, where to manage funds, and where to contact support.</p>
          </FeatureCard>
        </div>
      </Section>

      <Section id="top-features" title="Top Features of P999 Game" dark>
        <p className="text-gray-300 leading-relaxed mb-8">
          P999 combines app usability, wallet convenience, game variety, rewards, and support. Each feature matters most when it helps the user make clear decisions before playing with real money.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <FeatureCard title="User-Friendly Interface">
            <p>The first thing users notice is the clean app flow: game lobby, wallet, account, promotion, and support areas are easy to identify. This helps beginners move from download to registration without guessing.</p>
            <p>The interface works by grouping important actions into visible screens instead of hiding everything in menus. That matters for new players, older Android users, and anyone who wants a direct path to login, deposit, or support.</p>
            <p>In short, the simple layout reduces friction and helps users focus on understanding the games and risks.</p>
          </FeatureCard>
          <PhoneFrame
            src="/p999-account.webp"
            alt="P999 account dashboard with profile wallet and customer support controls"
            width={826}
            height={1464}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="Wide Variety of Games">
            <p>P999 includes card and casino-style games so users can choose the format they understand best. The game variety helps regular players avoid a repetitive experience.</p>
            <p>The benefit is flexibility: beginners can start with simpler rooms, while experienced users can explore faster game modes after learning the rules.</p>
          </FeatureCard>
          <FeatureCard title="Real Earning Opportunities">
            <p>P999 includes real-money rooms, wallet balances, bonuses, and referral rewards. These features create earning opportunities only when gameplay, rules, and risks are understood.</p>
            <p>The important point is discipline. Users should start small, avoid chasing losses, and never assume any match or bonus will produce profit.</p>
          </FeatureCard>
          <FeatureCard title="Daily Bonuses & Rewards">
            <p>Daily login bonuses, task rewards, lucky draws, and event offers can help users test the app without immediately depending on larger deposits.</p>
            <p>These rewards are best for active users who read the terms, expiry dates, and withdrawal rules before playing.</p>
          </FeatureCard>
          <FeatureCard title="Secure Transactions">
            <p>Local wallet support is useful only when users enter the right account details and verify every request. P999 wallet screens are designed to keep deposit and withdrawal actions separate and clear.</p>
            <p>Always use the official domain and app flow to avoid fake payment pages that copy the P999 name.</p>
          </FeatureCard>
          <FeatureCard title="Referral Earning System">
            <p>The promote link feature lets users invite friends and track referral activity. It works best for users who already understand the app and can explain the risks honestly.</p>
            <p>Referral rewards should be treated as promotional income from invited activity, not guaranteed passive income.</p>
          </FeatureCard>
          <FeatureCard title="Smooth Gameplay">
            <p>A small APK size, familiar screens, and Android 5.0+ support make P999 easier to run on a wide range of devices.</p>
            <p>For best results, keep storage free, use stable internet, and close heavy background apps before playing.</p>
          </FeatureCard>
          <FeatureCard title="24/7 Customer Support">
            <p>P999 support can help with login errors, delayed OTPs, deposits, withdrawals, account binding, and app access questions.</p>
            <p>Support is most useful when users share accurate transaction IDs, registered numbers, and screenshots without exposing private passwords or OTPs.</p>
          </FeatureCard>
        </div>
      </Section>

      <section id="screenshots" className="py-10 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent text-center">App Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {screenshots.map((screenshot) => (
              <div key={screenshot.src} className="w-full flex flex-col items-center">
                <PhoneFrame
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={828}
                  height={1470}
                />
                <p className="text-center text-gray-300 mt-4 font-medium">{screenshot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="download-install" title="How to Download & Install P999 Game APK">
        <p className="text-gray-300 mb-5 leading-relaxed">
          Use the official <Link href="/download-p999-game" className="text-accent hover:underline font-semibold">P999 APK download page</Link> so you do not install a copied file from a risky third-party site.
        </p>
        <ol className="list-decimal pl-5 space-y-3 text-gray-300">
          {installSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="flex justify-center mt-8">
          <CtaButton href="/download-p999-game">Download P999</CtaButton>
        </div>
      </Section>

      <Section id="requirements" title="Android System Requirements" dark>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-[#07140C]">
              <tr>
                <th className="py-3 px-6 text-left text-white font-semibold">System</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-[#0C1F14]/50"><td className="py-3 px-6 text-gray-300">Operating System</td><td className="py-3 px-6 text-gray-300">Android 5.0+</td><td className="py-3 px-6 text-gray-300">Android 8.0 or newer</td></tr>
              <tr className="bg-[#07140C]/70"><td className="py-3 px-6 text-gray-300">RAM</td><td className="py-3 px-6 text-gray-300">2GB</td><td className="py-3 px-6 text-gray-300">4GB or more</td></tr>
              <tr className="bg-[#0C1F14]/50"><td className="py-3 px-6 text-gray-300">Storage</td><td className="py-3 px-6 text-gray-300">100MB free</td><td className="py-3 px-6 text-gray-300">500MB free</td></tr>
              <tr className="bg-[#07140C]/70"><td className="py-3 px-6 text-gray-300">Internet</td><td className="py-3 px-6 text-gray-300">Stable 3G or WiFi</td><td className="py-3 px-6 text-gray-300">Stable 4G or WiFi</td></tr>
              <tr className="bg-[#0C1F14]/50"><td className="py-3 px-6 text-gray-300">Age</td><td className="py-3 px-6 text-gray-300">18+</td><td className="py-3 px-6 text-gray-300">18+ with budget limits</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="register-login" title="How to Register + How to Log in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">How to Register</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the installed P999 app on your Android device.</li>
              <li>Tap Register or Sign Up on the opening screen.</li>
              <li>Enter your Pakistani mobile number in the correct format.</li>
              <li>Create a strong password and keep it private.</li>
              <li>Enter the OTP when it arrives and finish account verification.</li>
              <li>Review account settings before adding any money.</li>
            </ol>
          </div>
          <PhoneFrame
            src="/p999-register.webp"
            alt="P999 registration form for new Pakistani Android users"
            width={826}
            height={1462}
          />
          <PhoneFrame
            src="/p999-login.webp"
            alt="P999 login screen for returning users with mobile number access"
            width={826}
            height={1466}
            className="lg:order-3"
          />
          <div className="space-y-4 lg:order-4">
            <h3 className="text-xl font-semibold text-accent">How to Log in</h3>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open P999 and tap Login.</li>
              <li>Enter the registered mobile number and password.</li>
              <li>Check that the number format matches your registered account.</li>
              <li>Use Forgot Password if you cannot remember your password.</li>
              <li>After login, open the account page to confirm your wallet and security details.</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="login-problems" title="Common P999 Login Problems & Fixes" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard title="OTP Late">
            <p>Wait a few minutes before requesting another OTP. Weak signals, SMS delays, or repeated requests can slow delivery. Restart mobile data if the OTP does not arrive.</p>
          </FeatureCard>
          <FeatureCard title="Wrong Number Format">
            <p>Use the same Pakistani mobile number format you used during registration. Avoid extra spaces, missing digits, or using a different SIM number by mistake.</p>
          </FeatureCard>
          <FeatureCard title="Too Many Attempts">
            <p>If you request OTPs or enter passwords too many times, the app may temporarily limit access. Pause, check your details, then try again after the cooldown.</p>
          </FeatureCard>
          <FeatureCard title="App Not Opening">
            <p>Clear cache, confirm Android 5.0+ support, free up storage, and reinstall from the official download page if the APK file looks damaged.</p>
          </FeatureCard>
        </div>
      </Section>

      <Section id="deposit-withdraw" title="How to Deposit and Withdraw">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0C1F14] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Deposit Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Open Wallet, choose Deposit, select JazzCash or EasyPaisa where available, enter an amount from {APP_FACTS.minDeposit} up to {APP_FACTS.maxDeposit}, and confirm the payment details before sending funds.
            </p>
            <Link href="/deposit-money-in-p999" className="text-accent hover:underline font-semibold">Read the complete P999 deposit guide</Link>
          </div>
          <div className="bg-[#0C1F14] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Withdraw Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Open Wallet, choose Withdraw, bind the correct account details, enter the amount, and verify every digit before submitting. Keep transaction screenshots until the withdrawal is complete.
            </p>
            <Link href="/withdraw-money-from-p999" className="text-accent hover:underline font-semibold">See how P999 withdrawals work</Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <PhoneFrame
            src="/p999-deposit-money.webp"
            alt="P999 deposit screen with wallet options for Pakistani users"
            width={830}
            height={1464}
          />
        </div>
      </Section>

      <Section id="bonuses" title="P999 Game Bonuses and Rewards" dark>
        <p className="text-gray-300 leading-relaxed mb-6">
          P999 bonuses can make gameplay more engaging, but every bonus should be checked for terms, wagering rules, expiry, and withdrawal limits. For a deeper breakdown, read the <Link href="/blog/p999-bonuses-vip-redeem-codes" className="text-accent hover:underline font-semibold">P999 bonuses, VIP, and redeem codes guide</Link>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Daily Login', 'Welcome', 'Task', 'Level up', 'Events', 'Referral'].map((bonus) => (
            <div key={bonus} className="bg-[#07140C] border border-accent/20 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-accent mb-2">{bonus} Bonus</h3>
              <p className="text-gray-300">Check the in-app reward area, read the rules, and claim only offers that match your playing budget and comfort level.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <PhoneFrame
            src="/p999-lucky-draw.webp"
            alt="P999 lucky draw bonus page with event rewards"
            width={826}
            height={1464}
          />
        </div>
      </Section>

      <Section id="fake-sites" title="How to Spot Fake P999 Websites / Scam Pages">
        <div className="space-y-5 text-gray-300 leading-relaxed">
          <p>
            Fake APK pages often copy the P999 name, logo, and screenshots to push unsafe downloads or collect wallet details. The safest habit is to start from <Link href="/" className="text-accent hover:underline font-semibold">p999gaming.com.pk</Link> and avoid shortened links, random Telegram files, and pages that ask for your OTP.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>Check the full domain before downloading an APK or entering your mobile number.</li>
            <li>Do not share OTPs, passwords, JazzCash PINs, EasyPaisa PINs, or CNIC photos with support pages.</li>
            <li>Avoid websites that promise fixed income, guaranteed wins, or secret hacks.</li>
            <li>Compare screenshots and app size with the official P999 information table.</li>
            <li>Read the <Link href="/blog/is-p999-game-real-or-fake" className="text-accent hover:underline font-semibold">P999 real or fake safety guide</Link> before depositing.</li>
          </ul>
        </div>
      </Section>

      <Section id="security" title="Security Features" dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#07140C] rounded-xl p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-3">Account Verification</h3>
            <p className="text-gray-300">OTP-based registration helps connect an account to the correct mobile number, but users must keep OTPs private.</p>
          </div>
          <div className="bg-[#07140C] rounded-xl p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-3">Wallet Checks</h3>
            <p className="text-gray-300">Deposit and withdrawal screens let users review payment method, amount, and account information before submitting.</p>
          </div>
          <div className="bg-[#07140C] rounded-xl p-6 border border-accent/20">
            <h3 className="text-xl font-semibold text-accent mb-3">Support Access</h3>
            <p className="text-gray-300">Customer support can help with technical and transaction issues when users provide safe, non-sensitive evidence.</p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed mt-6">
          For more detail, see the <Link href="/blog/is-p999-safe-to-play-pakistan" className="text-accent hover:underline font-semibold">P999 safety guide for Pakistan</Link>.
        </p>
      </Section>

      <Section id="tips" title="Tips and Tricks">
        <ul className="list-disc pl-5 space-y-3 text-gray-300 leading-relaxed">
          <li>Start with small amounts and learn each game before playing faster tables.</li>
          <li>Use bonuses carefully and read the conditions before assuming they can be withdrawn.</li>
          <li>Set a daily budget and stop when that limit is reached.</li>
          <li>Keep screenshots of deposits, withdrawals, and support conversations.</li>
          <li>Use the <Link href="/blog/p999-beginner-guide-pakistan" className="text-accent hover:underline font-semibold">P999 beginner guide for Pakistan</Link> if you are new to the app.</li>
          <li>Try the <Link href="/p999-for-pc" className="text-accent hover:underline font-semibold">P999 for PC guide</Link> if you prefer a bigger screen.</li>
        </ul>
      </Section>

      <Section id="common-mistakes" title="Common Mistakes" dark>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p><strong className="text-white">Downloading from random sites:</strong> copied APKs can contain malware or redirect users to fake payment pages.</p>
          <p><strong className="text-white">Ignoring payment details:</strong> a wrong JazzCash, EasyPaisa, or bank number can delay or block withdrawals.</p>
          <p><strong className="text-white">Chasing losses:</strong> increasing bets after losing can quickly break a budget.</p>
          <p><strong className="text-white">Sharing private codes:</strong> real support should not need your OTP, wallet PIN, or account password.</p>
        </div>
      </Section>

      <Section id="common-problems" title="Common Problems and Solutions">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-[#0C1F14]">
              <tr>
                <th className="py-3 px-6 text-left text-white font-semibold">Problem</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-[#07140C]/70"><td className="py-3 px-6 text-gray-300">APK will not install</td><td className="py-3 px-6 text-gray-300">Enable Install Unknown Apps, check storage, and download the file again from the official page.</td></tr>
              <tr className="bg-[#0C1F14]/50"><td className="py-3 px-6 text-gray-300">Deposit not showing</td><td className="py-3 px-6 text-gray-300">Wait for processing, verify the transaction ID, and contact support with a screenshot.</td></tr>
              <tr className="bg-[#07140C]/70"><td className="py-3 px-6 text-gray-300">Withdrawal pending</td><td className="py-3 px-6 text-gray-300">Check account binding, wallet number, withdrawal rules, and support status.</td></tr>
              <tr className="bg-[#0C1F14]/50"><td className="py-3 px-6 text-gray-300">Game lagging</td><td className="py-3 px-6 text-gray-300">Switch to stable internet, close background apps, and clear cache.</td></tr>
              <tr className="bg-[#07140C]/70"><td className="py-3 px-6 text-gray-300">Password forgotten</td><td className="py-3 px-6 text-gray-300">Use Forgot Password and verify with the registered mobile number.</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="pros-cons" title="Pros and Cons" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Pros</h3>
            <div className="bg-[#07140C] px-6 py-6 rounded-lg border border-accent/20">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Lightweight 7.04MB APK.</li>
                <li>Designed for Pakistani users.</li>
                <li>JazzCash and EasyPaisa payment support.</li>
                <li>Simple registration and login screens.</li>
                <li>Daily rewards, events, and referral tools.</li>
                <li>24/7 customer support for common issues.</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-accent">Cons</h3>
            <div className="bg-[#07140C] px-6 py-6 rounded-lg border border-accent/20">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Real-money games include the risk of losing funds.</li>
                <li>APK installation requires manual Android permission.</li>
                <li>Fake P999 pages can confuse new users.</li>
                <li>Withdrawals may require verification and processing time.</li>
                <li>Not suitable for users under 18.</li>
                <li>Gameplay can become addictive without strict limits.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="responsible-gaming" title="Responsible Gaming (18+)">
        <div className="space-y-5 text-gray-300 leading-relaxed">
          <p>
            P999 is only for adults aged 18 and above. Real-money gameplay can be risky, and losing money is possible even when a game looks simple. Set a fixed budget before playing, never borrow money for gameplay, and stop immediately if the app starts affecting your work, studies, sleep, or family life.
          </p>
          <p>
            If you feel pressure to recover losses, take a break. Entertainment should stay within limits, and no bonus, referral, or game mode should be treated as guaranteed income.
          </p>
        </div>
      </Section>

      <Section id="conclusion" title="Conclusion" dark>
        <div className="space-y-5 text-gray-300 leading-relaxed">
          <p>
            P999 is a lightweight Android gaming app for Pakistani users who want card games, casino-style entertainment, local payment options, bonuses, referrals, and account support in one place. Its biggest strengths are the simple interface, small APK size, JazzCash and EasyPaisa focus, and clear register-login flow.
          </p>
          <p>
            The smart way to use P999 is to download from the official domain, verify every payment detail, avoid fake websites, play only if you are 18+, and keep gameplay within a fixed budget.
          </p>
        </div>
      </Section>

      <section id="faq" className="py-10 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-8 text-accent">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group bg-[#0C1F14]/70 rounded-xl border border-gray-700 hover:border-accent/60 transition-all duration-300 shadow-md hover:shadow-lg">
                <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer text-white font-medium hover:text-accent transition-colors">
                  {item.question}
                  <AccordionIcon />
                </summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-4 pb-14 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0C1F14] rounded-2xl p-8 md:p-10 text-center border border-accent/20">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Ready to Explore P999?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Download the official P999 APK, check the beginner guides, and contact support if you need help with account, payment, or safety questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton href="/download-p999-game">Download P999</CtaButton>
            <Link href="/contact-us" className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition">
              Contact P999 Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
