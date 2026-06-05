import { Reveal } from "../Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-block text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
