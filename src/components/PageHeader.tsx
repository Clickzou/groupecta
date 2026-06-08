import Image from "next/image";
import { Container } from "./ui/Container";

/**
 * En-tête de page interne (bandeau façon Ikonik).
 * - sans `image` : dégradé marine plein.
 * - avec `image` : photo de fond + voile de couleur (`overlay`, dégradé CSS).
 */
export function PageHeader({
  title,
  subtitle,
  image,
  overlay = "linear-gradient(135deg,#1e445b 0%,#15303f 100%)",
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden text-white">
      {image ? (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          {/* Voile de couleur (légèrement transparent pour laisser voir la photo) */}
          <div className="absolute inset-0 opacity-90" style={{ background: overlay }} />
          <div className="absolute inset-0 bg-black/15" />
        </>
      ) : (
        <div className="absolute inset-0" style={{ background: overlay }} />
      )}

      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <Container className="relative py-20 text-center md:py-24">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-black [text-shadow:0_2px_18px_rgba(0,0,0,0.25)] sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.3)]">{subtitle}</p>
        )}
        {children && <div className="relative mt-8">{children}</div>}
      </Container>
    </section>
  );
}
