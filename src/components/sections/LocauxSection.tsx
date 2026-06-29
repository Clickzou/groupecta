import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../Reveal";

const features: { label: string; icon: React.ReactNode }[] = [
  { label: "Nos 4 entités réunies dans un même lieu", icon: <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M9 7h.01M9 11h.01M13 7h.01M13 11h.01M18 21V10h1" /> },
  { label: "Salles de réunion équipées", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></> },
  { label: "Espace cuisine convivial", icon: <path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v3M10 2v3M14 2v3" /> },
  { label: "3 niveaux sur 2 000 m²", icon: <path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /> },
  { label: "Parking avec places PMR", icon: <path d="M7 17a2 2 0 1 0 .01 0M17 17a2 2 0 1 0 .01 0M7 17h10M3 13l2-5.5A2 2 0 0 1 7 6h10a2 2 0 0 1 2 1.5L21 13v4H3z" /> },
  { label: "Bornes de recharge électrique", icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /> },
  { label: "Panneaux photovoltaïques", icon: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></> },
];

/** Section « Nos locaux » (déplacée de l'ex-page Nous découvrir vers l'accueil). */
export function LocauxSection() {
  return (
    <section id="nos-locaux" className="scroll-mt-24 bg-surface py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
            Nos locaux
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
            Quatre entités réunies sous un même toit
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            À Toulouse, le Groupe CTA rassemble ses quatre entités dans un même
            lieu : un cadre de travail moderne et accueillant, pensé pour la
            collaboration des équipes comme pour le confort de nos visiteurs.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cta-petrol/30 hover:shadow-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cta-petrol/10 text-cta-petrol [&>svg]:h-5 [&>svg]:w-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {f.icon}
                  </svg>
                </span>
                <span className="text-sm font-medium leading-snug text-cta-navy">{f.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Collage photo + encart chiffre */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              <Image src="/hero/entree-groupe-cta.webp" alt="Entrée du siège du Groupe CTA à Toulouse" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              <span className="absolute right-4 top-4 rounded-full bg-cta-navy/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                Toulouse
              </span>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              <Image src="/hero/locaux-groupe-cta.webp" alt="Locaux du Groupe CTA" fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="flex flex-col items-center justify-center rounded-[var(--radius-card)] bg-cta-navy p-6 text-center text-white">
              <div className="font-heading text-4xl font-black leading-none">2 000 m²</div>
              <p className="mt-2 text-sm leading-snug text-white/75">
                répartis sur 3 niveaux, pour nos 4 entités.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
