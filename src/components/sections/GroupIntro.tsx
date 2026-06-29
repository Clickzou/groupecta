import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../Reveal";

const pillars = [
  {
    title: "Un interlocuteur unique",
    text: "Une porte d'entrée vers toutes les expertises du groupe, sans multiplier les contacts.",
    // pictogramme : personne / contact
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 .01 0M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    ),
  },
  {
    title: "Un savoir-faire reconnu",
    text: "Plus de 30 ans d'expérience au service des entreprises et de leurs collaborateurs.",
    // pictogramme : médaille / récompense
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
      </>
    ),
  },
  {
    title: "Une exigence sur-mesure",
    text: "Des prestations adaptées à chaque besoin, du voyage individuel au congrès de 5 000 personnes.",
    // pictogramme : réglages / sur-mesure
    icon: (
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    ),
  },
];

export function GroupIntro() {
  return (
    <section id="le-groupe" className="scroll-mt-24 py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
            Le Groupe CTA
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
            Toute la chaîne de valeur, du déplacement professionnel à
            l&apos;événementiel, en passant par les voyages individuels.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Basé à Toulouse, le Groupe CTA rassemble des entités complémentaires
            sous les marques <strong className="text-cta-navy">SOP</strong> et{" "}
            <strong className="text-cta-navy">CTA</strong>. Cette synergie nous
            permet de couvrir l&apos;ensemble des besoins des entreprises : du
            voyage d&apos;affaires à l&apos;organisation d&apos;événements,
            jusqu&apos;aux voyages loisirs.
          </p>
          <div className="mt-8">
            <ButtonLink href="#nos-societes" variant="primary">
              Découvrir nos entités
            </ButtonLink>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              {/* Au survol : le bloc passe en foncé (#084C61), le chiffre laisse place
                  au pictogramme et le texte passe en blanc. */}
              <div className="group flex gap-4 rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-[#084C61] hover:shadow-[0_24px_50px_-24px_rgba(8,76,97,0.6)]">
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cta-petrol/10 font-heading font-black text-cta-petrol transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:text-white">
                  {/* chiffre (visible par défaut) */}
                  <span className="transition-opacity duration-300 group-hover:opacity-0">
                    {i + 1}
                  </span>
                  {/* pictogramme (apparaît au survol) */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="absolute h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {p.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-cta-navy transition-colors duration-300 group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/85">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
