import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-blue disabled:opacity-60 disabled:pointer-events-none";

const sizes = "px-6 py-3 text-sm sm:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-cta-petrol text-white shadow-[0_12px_30px_-12px_rgba(8,76,97,0.7)] hover:bg-cta-petrol-light hover:-translate-y-0.5",
  secondary:
    "bg-cta-blue text-white shadow-[0_12px_30px_-12px_rgba(30,118,185,0.7)] hover:bg-cta-navy hover:-translate-y-0.5",
  outline:
    "border-2 border-cta-navy/20 text-cta-navy hover:border-cta-petrol hover:text-cta-petrol",
  ghost: "text-white/90 hover:text-white",
};

/** Bouton-lien interne (Next Link). */
export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

/** Bouton natif (formulaires, actions). */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
