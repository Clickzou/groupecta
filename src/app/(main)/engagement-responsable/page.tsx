import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Engagement responsable",
  description:
    "L'engagement responsable du Groupe CTA : démarche RSE évaluée par Ecovadis et soutien à la Ligue contre le cancer.",
};

/*
 * ASSETS À FOURNIR : déposer les logos partenaires dans /public/logos/
 *   - ecovadis.png
 *   - ligue-contre-le-cancer.png
 */

const rsePoints = [
  "Sélection de prestataires et de destinations engagés",
  "Réduction de l'empreinte de nos déplacements et de nos événements",
  "Sensibilisation de nos équipes et de nos clients",
  "Démarche d'amélioration continue, mesurée et suivie dans le temps",
];

export default function EngagementResponsablePage() {
  return (
    <>
      <PageHeader
        title="Notre engagement responsable"
        subtitle="Au-delà de nos métiers, le Groupe CTA porte des valeurs fortes, en faveur de l'environnement et de la solidarité."
        image="/hero/banner-engagement.jpg"
        overlay="linear-gradient(135deg,#0a6182 0%,#16a34a 120%)"
      />

      {/* --- Charte RSE / Ecovadis --- */}
      <section id="charte-rse" className="scroll-mt-24 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-green-700 sm:text-xl">
              Charte RSE
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
              Un tourisme et un événementiel plus responsables
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Le Groupe CTA inscrit la responsabilité sociétale au cœur de ses
              métiers. Notre démarche, structurée autour du référentiel{" "}
              <strong className="text-cta-navy">Ecovadis</strong>, nous engage à
              progresser durablement sur les plans environnemental, social et
              éthique.
            </p>
            <ul className="mt-7 space-y-3">
              {rsePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-cta-navy">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 shrink-0 text-green-600">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-6 rounded-[var(--radius-card)] border border-border bg-surface p-10 shadow-[var(--shadow-card)]">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-green-600 text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <Image
                src="/logos/ecovadis.png"
                alt="Ecovadis"
                width={240}
                height={120}
                className="h-16 w-auto object-contain"
              />
              <p className="text-center text-sm leading-relaxed text-muted">
                Notre performance RSE est évaluée via la plateforme Ecovadis.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --- Ligue contre le cancer --- */}
      <section id="ligue-contre-le-cancer" className="scroll-mt-24 bg-surface py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="flex flex-col items-center justify-center gap-6 rounded-[var(--radius-card)] border border-border bg-white p-10 shadow-[var(--shadow-card)]">
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl text-white"
                style={{ background: "linear-gradient(135deg,#0000E5 0%,#FE6900 100%)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <Image
                src="/logos/ligue-contre-le-cancer.png"
                alt="La Ligue contre le cancer"
                width={240}
                height={120}
                className="h-16 w-auto object-contain"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-magenta sm:text-xl">
              Solidarité
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
              Soutien à la Ligue contre le cancer
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Le Groupe CTA soutient la Ligue contre le cancer et se mobilise à ses
              côtés. Cet engagement solidaire fait partie intégrante des valeurs du
              groupe : il prolonge, sur le terrain de la générosité, l&apos;exigence
              que nous mettons dans chacun de nos métiers.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Par notre soutien, nous contribuons aux missions de l&apos;association :
              recherche, prévention, accompagnement des malades et de leurs proches.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
