import Image from "next/image";
import type { Entity } from "@/lib/site";

const telHref = (phone: string) =>
  `tel:+33${phone.replace(/\D/g, "").slice(1)}`;

/**
 * Carte société : photo + titre cliquables vers le site (sauf si `noSite`),
 * numéro / lien cliquables séparément. Au survol, le bloc adopte la couleur
 * de la société et le texte passe en blanc.
 */
export function EntityCard({ entity }: { entity: Entity }) {
  const clickable = !entity.noSite;

  const media = (
    <>
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
        <h3 className="font-heading text-2xl font-bold leading-tight text-cta-navy transition-colors duration-300 group-hover:text-white sm:text-3xl">
          {entity.tagline}
        </h3>
        <span
          className="mt-3 block h-1 w-12 rounded-full transition-colors duration-300 group-hover:bg-white"
          style={{ background: entity.bar }}
        />

        <Image
          src={entity.logo}
          alt={entity.name}
          width={320}
          height={90}
          className="mt-5 h-8 w-auto max-w-[65%] object-contain object-left transition duration-300 group-hover:brightness-0 group-hover:invert"
        />

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/90">
          {entity.description}
        </p>
      </div>
    </>
  );

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-28px_rgba(8,76,97,0.5)]">
      {/* Voile de survol coloré, propre à chaque société */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: entity.hover }}
      />

      {/* Photo + titre + description -> site (ou non cliquable si site en cours) */}
      {clickable ? (
        <a
          href={entity.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex flex-1 flex-col"
        >
          {media}
        </a>
      ) : (
        <div className="relative z-10 flex flex-1 flex-col">{media}</div>
      )}

      {/* Pied : numéro et lien cliquables séparément */}
      <div className="relative z-10 mt-4 flex items-center justify-between gap-3 border-t border-border px-7 pb-7 pt-4 text-sm transition-colors duration-300 group-hover:border-white/30 sm:px-8 sm:pb-8">
        <div className="flex items-center gap-3">
          <a
            href={telHref(entity.phone)}
            className="font-semibold text-cta-navy transition-colors hover:text-cta-petrol group-hover:text-white"
          >
            {entity.phone}
          </a>
          {entity.linkedin && (
            <a
              href={entity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn ${entity.name}`}
              className="grid h-7 w-7 place-items-center rounded-md bg-cta-blue text-white transition-all hover:ring-2 hover:ring-cta-blue hover:ring-offset-2 group-hover:bg-white group-hover:text-cta-navy"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
              </svg>
            </a>
          )}
        </div>
        {clickable ? (
          <a
            href={entity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-cta-petrol transition-colors hover:underline group-hover:text-white"
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
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted transition-colors duration-300 group-hover:text-white/90">
            Site en cours
          </span>
        )}
      </div>
    </article>
  );
}
