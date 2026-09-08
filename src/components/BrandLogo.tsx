import Image from "next/image";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "hero";
  priority?: boolean;
  className?: string;
  alt?: string;
};

const SIZE_CLASS: Record<NonNullable<BrandLogoProps["size"]>, string> = {
  sm: "brand-logo-frame brand-logo-frame--sm",
  md: "brand-logo-frame brand-logo-frame--md",
  lg: "brand-logo-frame brand-logo-frame--lg",
  hero: "brand-logo-frame brand-logo-frame--hero",
};

const PIXEL: Record<NonNullable<BrandLogoProps["size"]>, number> = {
  sm: 36,
  md: 40,
  lg: 72,
  hero: 320,
};

/**
 * CSS-only logo frame: clips white square corners (no image file edits)
 * and shifts artwork slightly up + left.
 */
export default function BrandLogo({
  size = "md",
  priority = false,
  className = "",
  alt = "P999 Game official logo",
}: BrandLogoProps) {
  const px = PIXEL[size];
  return (
    <div className={`${SIZE_CLASS[size]} ${className}`.trim()}>
      <Image
        src="/p999.webp"
        alt={alt}
        width={px}
        height={px}
        className="brand-logo-img"
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        sizes={`${px}px`}
      />
    </div>
  );
}
