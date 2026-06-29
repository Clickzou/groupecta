"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { EntityCard } from "../EntityCard";
import { entities } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-70px" } as const;

function Arrow({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Précédent" : "Suivant"}
      className="grid h-12 w-12 place-items-center rounded-full border border-border bg-white text-cta-navy shadow-[var(--shadow-card)] transition-all hover:border-cta-petrol hover:bg-cta-petrol hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-cta-navy"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/** Fond animé thématique (halos qui dérivent + icônes voyage/événement flottantes). */
function SectionBg() {
  return (
    <div data-bg-anim aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-cta-blue/10 blur-3xl animate-[drift_16s_ease-in-out_infinite]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cta-petrol/10 blur-3xl animate-[drift_22s_ease-in-out_infinite_reverse]" />
      {/* avion (plus haut) */}
      <svg className="absolute left-[6%] top-[5%] h-12 w-12 text-cta-navy/[0.07] animate-[floatY_9s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
      </svg>
      {/* globe */}
      <svg className="absolute right-[9%] top-[30%] h-14 w-14 text-cta-petrol/[0.08] animate-[floatY_11s_ease-in-out_infinite]" style={{ animationDelay: "1s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </svg>
      {/* calendrier (le carré, plus bas) */}
      <svg className="absolute left-[22%] bottom-[1%] h-10 w-10 text-cta-blue/[0.08] animate-[floatY_8s_ease-in-out_infinite]" style={{ animationDelay: ".6s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </svg>
      {/* valise */}
      <svg className="absolute right-[24%] bottom-[16%] h-11 w-11 text-cta-navy/[0.06] animate-[floatY_10s_ease-in-out_infinite]" style={{ animationDelay: "1.4s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
      {/* repère / localisation (à droite) */}
      <svg className="absolute right-[14%] top-[12%] h-10 w-10 text-cta-petrol/[0.07] animate-[floatY_12s_ease-in-out_infinite]" style={{ animationDelay: ".3s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </div>
  );
}

export function EntitiesGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setSelected(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="nos-societes" className="relative scroll-mt-24 overflow-hidden bg-surface py-20">
      <SectionBg />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl"
          >
            Nos entités
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl"
          >
            Quatre expertises, un seul groupe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-4 text-base leading-relaxed text-muted"
          >
            Chaque société du Groupe CTA dispose de son propre savoir-faire.
            Faites défiler et cliquez pour accéder à son site dédié.
          </motion.p>
        </div>
      </Container>

      {/* Carrousel pleine largeur */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="relative z-10 mt-14"
      >
        <div className="overflow-hidden px-5 sm:px-8 lg:px-12" ref={emblaRef}>
          <div className="flex">
            {entities.map((entity) => (
              <div
                key={entity.slug}
                className="min-w-0 shrink-0 grow-0 basis-[86%] pr-6 sm:basis-[55%] lg:basis-[38%] xl:basis-[30%]"
              >
                <EntityCard entity={entity} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contrôles */}
      <Container className="relative z-10">
        <div className="mt-10 flex items-center justify-center gap-6">
          <Arrow dir="prev" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} />

          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Aller à la société ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selected ? "w-8 bg-cta-petrol" : "w-2 bg-cta-navy/25 hover:bg-cta-navy/50"
                }`}
              />
            ))}
          </div>

          <Arrow dir="next" onClick={() => emblaApi?.scrollNext()} disabled={!canNext} />
        </div>
      </Container>
    </section>
  );
}
