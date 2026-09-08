import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/** Mobile-shaped screenshot frame — tall rounded phone bezel, no white corners. */
export default function PhoneFrame({
  src,
  alt,
  width = 828,
  height = 1470,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 70vw, 280px",
}: PhoneFrameProps) {
  return (
    <div
      className={`phone-frame mx-auto w-full max-w-[280px] ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto block"
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
