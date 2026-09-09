import Link from 'next/link';
import CtaButton from '@/components/CtaButton';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">P999</h2>
            <p className="text-sm text-gray-300 mb-4">
              P999 is a trending online gaming app for Pakistan, with Teen Patti, Rummy, slots, and local JazzCash &amp; EasyPaisa payments.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download-p999-game" className="text-gray-300 hover:text-accent transition-colors">
                  Download P999 APK
                </Link>
              </li>
              <li>
                <Link href="/p999-login" className="text-gray-300 hover:text-accent transition-colors">
                  P999 Login
                </Link>
              </li>
              <li>
                <Link href="/p999-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/deposit-money-in-p999" className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href="/withdraw-money-from-p999" className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/is-p999-game-real-or-fake" className="text-gray-300 hover:text-accent transition-colors">
                  Is P999 Real or Fake?
                </Link>
              </li>
              <li>
                <Link href="/blog/p999-beginner-guide-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Beginner Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest P999 Game APK for Android and start with JazzCash or EasyPaisa support.
            </p>
            <CtaButton ariaLabel="Download P999 Game APK for Android">DOWNLOAD NOW</CtaButton>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            © 2026 P999. All rights reserved. |{' '}
            <Link href="/" className="hover:text-accent">
              p999gaming.com.pk
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
