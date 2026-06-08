import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services, entities } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const entity = entities.find((e) => e.slug === service.entitySlug);

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.short}
        image={service.cover}
        overlay={service.theme}
      />

      <section className="py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              <div className="relative h-80">
                <Image src={service.cover} alt={service.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">{service.intro}</p>

            <ul className="mt-7 space-y-3">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-cta-navy">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 shrink-0 text-cta-petrol">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {entity && !entity.noSite && (
                <ButtonLink href={entity.url} variant="primary">
                  Découvrir {entity.name}
                </ButtonLink>
              )}
              <ButtonLink
                href={entity?.contactForm ?? "/contact"}
                variant={entity && !entity.noSite ? "outline" : "primary"}
              >
                Nous contacter
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Nos prestations — liens vers les pages dédiées du site de l'entité */}
      {service.links && service.links.length > 0 && (
        <section className="bg-surface py-20">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
                Nos prestations
              </span>
              <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
                Découvrez le détail de nos services
              </h2>
              {entity && (
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Explorez l&apos;ensemble des prestations de {entity.name} sur son site.
                </p>
              )}
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-cta-petrol/30"
                >
                  <span className="font-semibold text-cta-navy">{l.label}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-cta-petrol transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            {entity && (
              <div className="mt-10 text-center">
                <ButtonLink href={entity.url} variant="primary">
                  Voir le site de {entity.name}
                </ButtonLink>
              </div>
            )}
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
