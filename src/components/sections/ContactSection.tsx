import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../Reveal";
import { entities, site } from "@/lib/site";

const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
);

const telHref = (phone: string) =>
  `tel:+33${phone.replace(/\D/g, "").slice(1)}`;

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          subtitle="Sélectionnez la société concernée : vous serez redirigé vers son formulaire de contact pour une réponse au plus près de votre besoin."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Redirection vers les formulaires des entités */}
          <Reveal>
            <h3 className="font-heading text-xl font-bold text-cta-navy">
              Contactez la bonne société
            </h3>
            <p className="mt-2 text-sm text-muted">
              Chaque société du groupe traite directement les demandes liées à son expertise.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {entities.map((e) => (
                <div
                  key={e.slug}
                  className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-cta-petrol/30"
                >
                  <Image
                    src={e.logo}
                    alt={e.name}
                    width={300}
                    height={80}
                    className="h-7 w-auto max-w-[70%] object-contain object-left"
                  />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{e.tagline}</p>
                  {e.contactForm ? (
                    <a
                      href={e.contactForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 font-semibold text-cta-petrol transition-colors hover:underline"
                    >
                      Accéder au formulaire
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ) : (
                    <div className="mt-4 text-sm">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                        Site en cours de production
                      </span>
                      <a
                        href={telHref(e.phone)}
                        className="mt-1 inline-block font-semibold text-cta-petrol hover:underline"
                      >
                        Appeler le {e.phone}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Coordonnées + carte */}
          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-bold text-cta-navy">
                Nos coordonnées
              </h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-muted">
                <p>
                  <span className="font-semibold text-cta-navy">Siège</span>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </p>
                <p>
                  <span className="font-semibold text-cta-navy">E-mail</span>
                  <br />
                  <a className="text-cta-blue hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </address>

              <h4 className="mt-6 font-heading text-sm font-bold uppercase tracking-wide text-cta-navy">
                Par société
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {entities.map((e) => (
                  <li key={e.slug} className="flex justify-between gap-3">
                    <span>{e.name}</span>
                    <a
                      className="font-semibold text-cta-navy hover:text-cta-petrol"
                      href={telHref(e.phone)}
                    >
                      {e.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Localisation du Groupe CTA"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white px-5 py-3 text-center text-sm font-semibold text-cta-petrol hover:bg-surface"
              >
                Voir notre fiche sur Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
