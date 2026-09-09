'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/download-p999-game', label: 'Download' },
  { href: '/p999-login', label: 'Login' },
  { href: '/deposit-money-in-p999', label: 'Deposit' },
  { href: '/withdraw-money-from-p999', label: 'Withdraw' },
  { href: '/p999-for-pc', label: 'PC' },
  { href: '/about-us', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="bg-primary py-3 px-4 md:px-6 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/p999-logo.webp"
              alt="P999 Game official logo"
              width={40}
              height={40}
              className="object-contain logo-clean"
              unoptimized
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            P999
          </span>
        </Link>

        <nav className="hidden lg:flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm xl:text-base xl:gap-x-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium transition-colors pb-1 group whitespace-nowrap ${
                isActive(href)
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                  isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
