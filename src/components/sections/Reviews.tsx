import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../Reveal";

// TODO: remplacer par de vrais avis (idéalement synchronisés avec la fiche Google Business Profile)
const reviews = [
  {
    quote:
      "Une organisation sans faille pour notre congrès annuel. L'équipe a tout anticipé, du transport à la logistique sur place.",
    author: "Directrice événementiel",
    company: "Groupe industriel",
  },
  {
    quote:
      "Réactivité exemplaire sur la gestion de nos déplacements professionnels. Un vrai gain de temps au quotidien.",
    author: "Responsable achats",
    company: "ETI régionale",
  },
  {
    quote:
      "Notre séminaire d'équipe restera un excellent souvenir. Créativité, sérieux et accompagnement de bout en bout.",
    author: "DRH",
    company: "Entreprise de services",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-cta-petrol-light" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.95 6.36 6.95.62-5.25 4.62 1.56 6.84L12 17.5 5.79 21.04l1.56-6.84L2.1 8.98l6.95-.62z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeading
          eyebrow="Ils nous font confiance"
          title="La parole à nos clients"
          subtitle="Retrouvez l'ensemble de nos avis sur notre fiche Google Business Profile."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30 hover:shadow-[0_24px_50px_-24px_rgba(8,76,97,0.45)]">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cta-navy/90">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-bold text-cta-navy">{r.author}</span>
                  <span className="block text-muted">{r.company}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
