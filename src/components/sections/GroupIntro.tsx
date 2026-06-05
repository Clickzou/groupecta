import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../Reveal";

const pillars = [
  {
    title: "Un interlocuteur unique",
    text: "Une porte d'entrée vers toutes les expertises du groupe, sans multiplier les contacts.",
  },
  {
    title: "Un savoir-faire reconnu",
    text: "Plus de 30 ans d'expérience au service des entreprises et de leurs collaborateurs.",
  },
  {
    title: "Une exigence sur-mesure",
    text: "Des prestations adaptées à chaque besoin, du voyage individuel au congrès de 5 000 personnes.",
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
            Basé à Toulouse, le Groupe CTA rassemble des sociétés complémentaires
            sous les marques <strong className="text-cta-navy">SOP</strong> et{" "}
            <strong className="text-cta-navy">CTA</strong>. Cette synergie nous
            permet de couvrir l&apos;ensemble des besoins des entreprises : du
            voyage d&apos;affaires à l&apos;organisation d&apos;événements,
            jusqu&apos;aux voyages loisirs.
          </p>
          <div className="mt-8">
            <ButtonLink href="#nos-societes" variant="primary">
              Découvrir nos sociétés
            </ButtonLink>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group flex gap-4 rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30 hover:shadow-[0_24px_50px_-24px_rgba(8,76,97,0.45)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cta-petrol/10 font-heading font-black text-cta-petrol transition-transform duration-300 group-hover:scale-110">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-cta-navy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
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
