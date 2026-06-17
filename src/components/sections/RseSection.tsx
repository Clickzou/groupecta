import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../Reveal";

/*
 * Section « Notre engagement responsable » : charte RSE (Ecovadis) + soutien
 * à la Ligue contre le cancer. Au survol, le bloc adopte sa couleur et le
 * pictogramme laisse place au logo du partenaire sur fond blanc.
 *
 * ASSETS À FOURNIR : déposer les logos dans /public/logos/
 *   - ecovadis.png
 *   - ligue-contre-le-cancer.png
 * Tant qu'ils ne sont pas présents, le texte alternatif s'affiche à la place.
 */

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Card = {
  Icon: () => React.ReactElement;
  title: string;
  text: string;
  href: string;
  cta: string;
  hoverBg: string; // arrière-plan (CSS) du bloc au survol
  badgeBg: string; // couleur de la pastille au repos
  logo: string;
  logoAlt: string;
};

const cards: Card[] = [
  {
    Icon: LeafIcon,
    title: "Notre charte RSE",
    text: "Le Groupe CTA s'engage pour un tourisme et un événementiel plus responsables : sélection de prestataires engagés, réduction de l'empreinte de nos déplacements et démarche d'amélioration continue au quotidien.",
    href: "/engagement-responsable#charte-rse",
    cta: "Lire notre charte RSE",
    hoverBg: "#16a34a",
    badgeBg: "bg-green-600",
    logo: "/logos/ecovadis.png",
    logoAlt: "Ecovadis",
  },
  {
    Icon: HeartIcon,
    title: "Soutien à la Ligue contre le cancer",
    text: "Nous soutenons la Ligue contre le cancer et nous mobilisons à ses côtés. Un engagement solidaire qui fait partie intégrante des valeurs du groupe.",
    href: "/engagement-responsable#ligue-contre-le-cancer",
    cta: "Découvrir notre engagement",
    hoverBg: "linear-gradient(135deg,#0000E5 0%,#FE6900 100%)",
    badgeBg: "bg-green-600",
    logo: "/logos/ligue-contre-le-cancer.png",
    logoAlt: "La Ligue contre le cancer",
  },
];

export function RseSection() {
  return (
    <section id="engagement-responsable" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading
          eyebrow="Notre engagement"
          title="Notre engagement responsable"
          subtitle="Au-delà de nos métiers, le Groupe CTA porte des valeurs fortes, en faveur de l'environnement et de la solidarité."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_50px_-24px_rgba(8,76,97,0.45)]">
                {/* Voile coloré au survol */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: c.hoverBg }}
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Pastille : picto sur fond vert au repos, logo sur fond blanc au survol */}
                  <span
                    className={`relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl text-white transition-colors duration-300 group-hover:bg-white ${c.badgeBg}`}
                  >
                    <span className="transition-opacity duration-300 group-hover:opacity-0">
                      <c.Icon />
                    </span>
                    <Image
                      src={c.logo}
                      alt={c.logoAlt}
                      width={120}
                      height={60}
                      className="absolute inset-0 m-auto h-full w-full object-contain p-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </span>

                  <h3 className="mt-5 font-heading text-xl font-bold text-cta-navy transition-colors duration-300 group-hover:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/90">
                    {c.text}
                  </p>
                  <Link
                    href={c.href}
                    className="mt-5 inline-flex items-center gap-1.5 font-semibold text-green-700 transition-colors duration-300 hover:text-green-800 group-hover:text-white"
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
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
