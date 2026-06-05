import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../Reveal";

/*
 * Section « En savoir plus » : engagement responsable du groupe.
 * TODO: remplacer les textes ci-dessous par les contenus définitifs
 * (charte RSE détaillée, modalités du soutien à la Ligue contre le cancer,
 * éventuels logos / liens / chiffres).
 */

function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Card = {
  Icon: () => React.ReactElement;
  title: string;
  text: string;
  href?: string;
  cta?: string;
};

const cards: Card[] = [
  {
    Icon: LeafIcon,
    title: "Notre charte RSE",
    text: "Le Groupe CTA s'engage pour un tourisme et un événementiel plus responsables : sélection de prestataires engagés, réduction de l'empreinte de nos déplacements et démarche d'amélioration continue au quotidien.",
    href: "https://ctabusinesstravel.com/blog/charte-rse",
    cta: "Lire notre charte RSE",
  },
  {
    Icon: HeartIcon,
    title: "Soutien à la Ligue contre le cancer",
    text: "Nous soutenons la Ligue contre le cancer et nous mobilisons à ses côtés. Un engagement solidaire qui fait partie intégrante des valeurs du groupe.",
    href: "https://ctabusinesstravel.com/blog/partenariats-associatifs",
    cta: "Découvrir nos partenariats",
  },
];

export function RseSection() {
  return (
    <section id="en-savoir-plus" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading
          eyebrow="En savoir plus"
          title="Notre engagement responsable"
          subtitle="Au-delà de nos métiers, le Groupe CTA porte des valeurs fortes, en faveur de l'environnement et de la solidarité."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30 hover:shadow-[0_24px_50px_-24px_rgba(8,76,97,0.45)]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <c.Icon />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-cta-navy">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{c.text}</p>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-semibold text-green-700 transition-colors hover:text-green-800"
                  >
                    {c.cta}
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
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
