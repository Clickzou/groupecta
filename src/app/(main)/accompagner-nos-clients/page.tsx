import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { services, entities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accompagner nos clients",
  description:
    "Le Groupe CTA accompagne les entreprises sur le voyage d'affaires, le voyage individuel, les séminaires & team buildings et les conférences & congrès.",
};

export default function AccompagnerPage() {
  return (
    <>
      <PageHeader
        title="Accompagner nos clients"
        subtitle="Une réponse complète à tous vos besoins, du déplacement professionnel à l'événementiel."
        image="/hero/banner-accompagner.jpg"
      >
        {/* Logos des quatre sociétés du groupe */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {entities.map((e) => (
            <Image
              key={e.slug}
              src={e.logo}
              alt={e.name}
              width={320}
              height={90}
              className="h-8 w-auto object-contain brightness-0 invert sm:h-9"
            />
          ))}
        </div>
      </PageHeader>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => {
              const accent =
                entities.find((e) => e.slug === s.entitySlug)?.bar ?? "var(--color-cta-petrol)";
              return (
              <Reveal key={s.slug} delay={i * 0.07}>
                <Link
                  href={`/accompagner-nos-clients/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(8,76,97,0.5)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={s.cover}
                      alt={s.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cta-navy/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    {/* Filet accent aux couleurs de la société */}
                    <span className="block h-1 w-10 rounded-full" style={{ background: accent }} />
                    <h2 className="mt-4 font-heading text-2xl font-bold text-cta-navy">{s.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 font-semibold"
                      style={{ color: accent }}
                    >
                      En savoir plus
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
