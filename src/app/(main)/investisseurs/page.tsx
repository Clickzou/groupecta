import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investisseurs",
  description:
    "Le Groupe CTA est en pleine expansion. Fonds et sociétés privées : échangeons sur les opportunités de participer à notre développement.",
};

const arguments_ = [
  {
    title: "Un groupe en expansion",
    text: "Quatre sociétés complémentaires sur des marchés porteurs (voyage d'affaires, événementiel, tourisme) et une dynamique de croissance soutenue.",
  },
  {
    title: "Des positions solides",
    text: "Un ancrage régional fort à Toulouse et l'appui du 1er réseau de voyage d'affaires en France.",
  },
  {
    title: "Un projet de développement",
    text: "Nous souhaitons accélérer notre développement et sommes ouverts aux fonds et sociétés privées partageant notre vision.",
  },
];

export default function InvestisseursPage() {
  return (
    <>
      <PageHeader
        title="Investisseurs"
        subtitle="Le Groupe CTA est en pleine expansion. Participez à notre développement."
      />

      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted">
              Fort de quatre sociétés spécialisées et d&apos;une expertise reconnue,
              le Groupe CTA poursuit une trajectoire de croissance ambitieuse. Nous
              ouvrons le dialogue avec les <strong className="text-cta-navy">fonds
              d&apos;investissement</strong> et les <strong className="text-cta-navy">sociétés
              privées</strong> souhaitant nous accompagner dans cette nouvelle étape.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {arguments_.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cta-petrol/10 font-heading font-black text-cta-petrol">
                    {i + 1}
                  </span>
                  <h2 className="mt-5 font-heading text-lg font-bold text-cta-navy">{a.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-heading text-3xl font-black text-cta-navy">
              Échangeons sur votre projet d&apos;investissement
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Vous représentez un fonds ou une société privée ? Contactez notre
              direction pour une mise en relation confidentielle. Nous reviendrons
              vers vous dans les meilleurs délais.
            </p>
            <p className="mt-4 text-sm text-muted">
              Vous pouvez aussi nous écrire directement à{" "}
              <a className="font-semibold text-cta-petrol hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              Cette page est une invitation à prendre contact et ne constitue ni une
              offre, ni une sollicitation d&apos;investissement, ni une promesse de
              rendement.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
