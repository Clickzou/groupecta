import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";

const features: { label: string; icon: React.ReactNode }[] = [
  { label: "Nos 4 sociétés réunies dans un même lieu", icon: <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M9 7h.01M9 11h.01M13 7h.01M13 11h.01M18 21V10h1" /> },
  { label: "Salles de réunion équipées", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></> },
  { label: "Espace cuisine convivial", icon: <path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v3M10 2v3M14 2v3" /> },
  { label: "3 niveaux sur 2 000 m²", icon: <path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /> },
  { label: "Parking avec places PMR", icon: <path d="M7 17a2 2 0 1 0 .01 0M17 17a2 2 0 1 0 .01 0M7 17h10M3 13l2-5.5A2 2 0 0 1 7 6h10a2 2 0 0 1 2 1.5L21 13v4H3z" /> },
  { label: "Bornes de recharge électrique", icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /> },
  { label: "Panneaux photovoltaïques", icon: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></> },
];

export const metadata: Metadata = {
  title: "Nous découvrir",
  description:
    "Les engagements du Groupe CTA : responsabilité environnementale, solidarité (Ligue contre le cancer), exigence de service et éthique.",
};

/* TODO: faire valider/affiner ces engagements avec la direction. */
const convictions = [
  {
    color: "bg-green-600",
    title: "Responsabilité environnementale",
    text: "Nous agissons pour un tourisme et un événementiel plus responsables : sélection de prestataires engagés, réduction de l'empreinte de nos déplacements et amélioration continue.",
    href: "https://ctabusinesstravel.com/blog/charte-rse",
    cta: "Lire notre charte RSE",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "bg-cta-magenta",
    title: "Engagement solidaire",
    text: "Nous soutenons la Ligue contre le cancer et nous mobilisons à ses côtés. La solidarité fait partie intégrante des valeurs du groupe.",
    href: "https://ctabusinesstravel.com/blog/partenariats-associatifs",
    cta: "Découvrir nos partenariats",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "bg-cta-petrol",
    title: "Exigence & proximité",
    text: "Un interlocuteur unique, des experts par métier et un accompagnement sur-mesure : nous plaçons la qualité de service et la relation client au cœur de notre action.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 2l3 6.5 7 .6-5.3 4.6 1.7 6.8L12 17.5 5.9 20.5l1.7-6.8L2.3 9.1l7-.6L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    color: "bg-cta-navy",
    title: "Éthique & transparence",
    text: "Nous construisons des relations durables et transparentes avec nos clients, nos partenaires et nos collaborateurs, dans le respect de nos engagements.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 3v18M5 7l7-4 7 4M5 7l-2 6a4 4 0 0 0 8 0L5 7Zm14 0l-2 6a4 4 0 0 0 8 0l-2-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function NosConvictionsPage() {
  return (
    <>
      <PageHeader
        title="Découvrez nos convictions et nos locaux"
        subtitle="Au-delà de nos métiers, le Groupe CTA porte des valeurs fortes, en faveur de l'environnement, de la solidarité et d'un service exigeant."
      />

      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted">
              Nos engagements guident nos décisions au quotidien. Ils traduisent
              notre volonté d&apos;exercer nos métiers de manière responsable et
              durable, au service de nos clients et de la société.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {convictions.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30 hover:shadow-[0_24px_50px_-24px_rgba(8,76,97,0.45)]">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 ${c.color}`}>
                    {c.icon}
                  </span>
                  <h2 className="mt-5 font-heading text-xl font-bold text-cta-navy">{c.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{c.text}</p>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-semibold text-cta-petrol transition-colors hover:underline"
                    >
                      {c.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
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

      {/* --- Nos locaux --- */}
      <section className="bg-surface py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
              Nos locaux
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
              Quatre sociétés réunies sous un même toit
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              À Toulouse, le Groupe CTA rassemble ses quatre sociétés dans un même
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
                  répartis sur 3 niveaux, pour nos 4 sociétés.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --- Notre démarche --- */}
      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
              Notre démarche
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
              Une démarche d&apos;amélioration continue
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Nos engagements ne sont pas figés : ils s&apos;inscrivent dans une
              dynamique de progrès, étape après étape.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { t: "Écouter", d: "Comprendre les attentes de nos clients, de nos collaborateurs et de nos partenaires." },
              { t: "Agir", d: "Mettre en place des actions concrètes et responsables au quotidien." },
              { t: "Mesurer", d: "Évaluer nos résultats et l'impact réel de nos initiatives." },
              { t: "Améliorer", d: "Progresser en continu pour aller toujours plus loin dans nos engagements." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="relative h-full rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30">
                  <span className="font-heading text-5xl font-black leading-none text-cta-petrol/25">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-cta-navy">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
