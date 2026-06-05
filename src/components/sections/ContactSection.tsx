import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../Reveal";
import { ContactForm } from "../ContactForm";
import { entities, site } from "@/lib/site";

const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
);

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          subtitle="Une question, un projet, un rendez-vous ? Notre équipe vous répond et vous oriente vers la bonne société."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Formulaire */}
          <Reveal className="rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
            <h3 className="font-heading text-xl font-bold text-cta-navy">
              Écrivez-nous
            </h3>
            <p className="mt-2 text-sm text-muted">
              Les champs marqués d&apos;un astérisque (*) sont obligatoires.
            </p>
            <div className="mt-6">
              <ContactForm />
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
                      href={`tel:+33${e.phone.replace(/\D/g, "").slice(1)}`}
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
