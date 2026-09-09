import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#07160C",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://p999gaming.com.pk"),
  title: {
    default: "P999 Game Download APK | Real Money App Pakistan 2026",
    template: "%s | P999",
  },
  description:
    "Download P999 Game APK for Android in Pakistan. Play Teen Patti, Rummy & slots with JazzCash and EasyPaisa. Free v1.3 APK, 7.04MB, 24/7 support.",
  keywords: [
    "P999",
    "P999 Game",
    "P999 Game download",
    "P999 APK",
    "P999 Game APK",
    "P999 Pakistan",
    "P999 login",
    "P999 Game real money",
    "download P999",
    "P999 JazzCash",
    "P999 EasyPaisa",
    "real money games Pakistan",
    "Teen Patti Pakistan",
    "online earning game APK",
  ],
  authors: [{ name: "P999 Team" }],
  creator: "P999",
  publisher: "P999",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: "/p999.webp", type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://p999gaming.com.pk",
  },
  openGraph: {
    title: "P999 Game Download APK | Real Money App Pakistan 2026",
    description:
      "Download P999 Game APK for Android. JazzCash & EasyPaisa support, Teen Patti, Rummy, slots, and daily bonuses for Pakistan players.",
    url: "https://p999gaming.com.pk",
    siteName: "P999",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://p999gaming.com.pk/feature/og-image.webp",
        width: 512,
        height: 512,
        alt: "P999 Game – Real money gaming app for Pakistan",
      },
      {
        url: "https://p999gaming.com.pk/feature/og-image-square.webp",
        width: 512,
        height: 512,
        alt: "P999 Game official logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P999 Game Download APK | Real Money App Pakistan 2026",
    description:
      "Download P999 Game APK for Android. JazzCash & EasyPaisa support, Teen Patti, Rummy, slots, and daily bonuses for Pakistan players.",
    images: [
      {
        url: "https://p999gaming.com.pk/feature/twitter-card.webp",
        width: 512,
        height: 512,
        alt: "P999 Game – Real money gaming app for Pakistan",
      },
    ],
  },
  applicationName: "P999",
  category: "Gaming",
  classification: "Online Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/p999.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(45, 212, 111, 0.08) 0%, rgba(7, 22, 12, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
