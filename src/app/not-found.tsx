import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Page Not Found - P999",
  description: "The page you are looking for does not exist. Return to the P999 homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">P999 Page Not Found</h2>
      <p className="text-lg mb-8 text-gray-300 max-w-lg mx-auto">
        This P999 page may have moved, changed name, or is temporarily unavailable.
      </p>
      <CtaButton href="/" icon="arrow">Return to P999 Homepage</CtaButton>
    </div>
  );
}
