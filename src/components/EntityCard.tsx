import Image from "next/image";
import type { Entity } from "@/lib/site";

const accent: Record<Entity["accent"], { text: string; bar: string }> = {
  blue: { text: "text-cta-blue", bar: "bg-cta-blue" },
  red: { text: "text-cta-petrol", bar: "bg-cta-petrol" },
  magenta: { text: "text-cta-navy", bar: "bg-cta-navy" },
};

const telHref = (phone: string) =>
  `tel:+33${phone.replace(/\D/g, "").slice(1)}`;

/** Carte société : photo + titre cliquables vers le site, et numéro / lien cliquables séparément. */
export function EntityCard({ entity }: { entity: Entity }) {
  const a = accent[entity.accent];
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(8,76,97,0.5)]">
      {/* Photo + titre + description -> site */}
      <a
        href={entity.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col"
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={entity.cover}
            alt={entity.name}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cta-navy/30 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col px-7 pt-7 sm:px-8 sm:pt-8">
          <h3 className="font-heading text-2xl font-bold leading-tight text-cta-navy sm:text-3xl">
            {entity.tagline}
          </h3>
          <span className={`mt-3 block h-1 w-12 rounded-full ${a.bar}`} />

          <Image
            src={entity.logo}
            alt={entity.name}
            width={320}
            height={90}
            className="mt-5 h-8 w-auto max-w-[65%] object-contain object-left"
          />

          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
            {entity.description}
          </p>
        </div>
      </a>

      {/* Pied : numéro et lien cliquables séparément */}
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border px-7 pb-7 pt-4 text-sm sm:px-8 sm:pb-8">
        <a
          href={telHref(entity.phone)}
          className="font-semibold text-cta-navy transition-colors hover:text-cta-petrol"
        >
          {entity.phone}
        </a>
        <a
          href={entity.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 font-semibold ${a.text} hover:underline`}
        >
          Découvrir le site
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}
