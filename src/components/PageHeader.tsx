import { Container } from "./ui/Container";

/** En-tête de page interne (bandeau dégradé façon Ikonik). */
export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg,#1e445b 0%,#15303f 100%)" }}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <Container className="relative py-20 text-center md:py-24">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-black sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-white/85">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
