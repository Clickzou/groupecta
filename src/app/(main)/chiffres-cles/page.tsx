import type { Metadata } from "next";
import { Counter } from "@/components/Counter";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Chiffres clés",
  description:
    "Faits et chiffres du Groupe CTA, société par société : voyage d'affaires, événementiel, voyage individuel et séminaires.",
};

/* --- Icônes (traits, blanc sur pastille) --- */
const icons: Record<string, React.ReactNode> = {
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 12 12 20 3 11V3h8z" />
      <circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l2.95 6.36 6.95.62-5.25 4.62 1.56 6.84L12 17.5 5.79 21.04l1.56-6.84L2.1 9.6l6.95-.62z" />
    </svg>
  ),
};

type Fig = { icon: string; value?: number; suffix?: string; prefix?: string; decimals?: number; text?: string; label: string };
// `tab` = fond de l'onglet vertical (couleur ou dégradé) ; `accent` = couleur
// solide des pastilles (le dégradé ne s'applique pas à une bordure).
type Row = { name: string; tab: string; accent: string; figs: Fig[] };

const rows: Row[] = [
  {
    name: "CTA Business Travel",
    tab: "#1481C2",
    accent: "#1481C2",
    figs: [
      { icon: "award", value: 30, prefix: "+ de ", label: "ans d'expertise" },
      { icon: "building", value: 1200, prefix: "+ de ", label: "agences partenaires (réseau TourCom)" },
      { icon: "tag", value: 1000000, prefix: "+ de ", label: "tarifs négociés dans le monde" },
      { icon: "clock", text: "24/7", label: "assistance voyageurs" },
    ],
  },
  {
    name: "CTA Meeting & Events",
    tab: "#477ff7",
    accent: "#477ff7",
    figs: [
      { icon: "award", value: 20, prefix: "+ de ", label: "ans d'expertise" },
      { icon: "calendar", value: 170, prefix: "+ de ", label: "événements dans le monde (2025)" },
      { icon: "globe", value: 45, prefix: "+ de ", label: "destinations (2025)" },
      { icon: "users", text: "100 à 5 000", label: "participants par événement" },
    ],
  },
  {
    name: "CTA Voyages",
    tab: "linear-gradient(135deg,#004191 0%,#2974be 55%,#73a6d8 100%)",
    accent: "#004191",
    figs: [
      { icon: "award", value: 30, prefix: "+ de ", label: "ans d'expertise" },
      { icon: "globe", value: 20, prefix: "+ de ", label: "pays desservis" },
      { icon: "building", text: "1er", label: "réseau européen de voyages (TourCom)" },
    ],
  },
  {
    name: "SOP Events",
    tab: "linear-gradient(135deg,#cb1d48 0%,#dc3d31 100%)",
    accent: "#cb1d48",
    figs: [
      { icon: "award", value: 20, prefix: "+ de ", label: "ans d'expertise" },
      { icon: "calendar", value: 1500, prefix: "+ de ", label: "événements organisés par an" },
      { icon: "users", text: "10 à 2 000", label: "personnes par événement" },
      { icon: "clock", text: "72 h", label: "pour un devis sur-mesure" },
    ],
  },
];

function StatItem({ fig, color }: { fig: Fig; color: string }) {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-center">
      {/* Pastille : fond blanc, contour + icône à la couleur de la section */}
      <div
        className="mb-5 grid h-20 w-20 place-items-center rounded-full border-2 bg-white [&>svg]:h-9 [&>svg]:w-9"
        style={{ borderColor: color, color }}
      >
        {icons[fig.icon]}
      </div>
      <div className="font-heading text-3xl font-black text-cta-navy">
        {fig.value !== undefined ? (
          <Counter value={fig.value} prefix={fig.prefix} suffix={fig.suffix} decimals={fig.decimals} />
        ) : (
          fig.text
        )}
      </div>
      <p className="mt-2 max-w-[14rem] text-sm leading-snug text-muted">{fig.label}</p>
    </div>
  );
}

function EntityRow({ row, delay }: { row: Row; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-stretch">
        {/* Onglet vertical (couleur de la société) */}
        <div
          className="flex w-12 shrink-0 items-center justify-center sm:w-16"
          style={{ background: row.tab }}
        >
          <span className="whitespace-nowrap py-4 font-heading text-sm font-bold uppercase tracking-wide text-white [writing-mode:vertical-rl] rotate-180 sm:text-base">
            {row.name}
          </span>
        </div>

        {/* Stats */}
        <div className="grid flex-1 grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
          {row.figs.map((f) => (
            <StatItem key={f.label} fig={f} color={row.accent} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function ChiffresClesPage() {
  return (
    <>
      <PageHeader
        title="Chiffres clés"
        subtitle="Les repères clés de nos entités : voyage d'affaires, événementiel, voyage sur-mesure et séminaires."
        image="/hero/banner-chiffres.jpg"
      />

      <section className="relative overflow-hidden py-14">
        <Container className="relative z-10 mb-10 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-heading text-3xl font-black tracking-tight text-cta-navy sm:text-4xl">
              Faits et chiffres du Groupe CTA
            </h2>
          </Reveal>
        </Container>

        {/* Fond animé thématique dans les zones blanches autour du tableau */}
        <div data-bg-anim aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <span className="absolute left-[1.5%] top-[10%] h-12 w-12 text-cta-navy/[0.06] animate-[floatY_9s_ease-in-out_infinite] [&>svg]:h-full [&>svg]:w-full">{icons.globe}</span>
          <span className="absolute left-[2.5%] top-[55%] h-11 w-11 text-cta-petrol/[0.07] animate-[floatY_11s_ease-in-out_infinite] [&>svg]:h-full [&>svg]:w-full" style={{ animationDelay: ".8s" }}>{icons.calendar}</span>
          <span className="absolute left-[1%] bottom-[8%] h-12 w-12 text-cta-blue/[0.07] animate-[floatY_8s_ease-in-out_infinite] [&>svg]:h-full [&>svg]:w-full" style={{ animationDelay: ".4s" }}>{icons.users}</span>
          <span className="absolute right-[1.5%] top-[14%] h-12 w-12 text-cta-petrol/[0.07] animate-[floatY_12s_ease-in-out_infinite] [&>svg]:h-full [&>svg]:w-full">{icons.tag}</span>
          <span className="absolute right-[2.5%] top-[52%] h-11 w-11 text-cta-navy/[0.06] animate-[floatY_10s_ease-in-out_infinite] [&>svg]:h-full [&>svg]:w-full" style={{ animationDelay: "1.1s" }}>{icons.award}</span>
          <span className="absolute right-[1%] bottom-[10%] h-12 w-12 text-cta-blue/[0.07] animate-[floatY_9s_ease-in-out_infinite] [&>svg]:h-full [&>svg]:w-full" style={{ animationDelay: ".6s" }}>{icons.star}</span>
          <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-cta-blue/5 blur-3xl animate-[drift_18s_ease-in-out_infinite]" />
          <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-cta-petrol/5 blur-3xl animate-[drift_22s_ease-in-out_infinite_reverse]" />
        </div>

        <Container className="relative z-10">
          <div className="divide-y divide-border overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-[var(--shadow-card)]">
            {rows.map((r, i) => (
              <EntityRow key={r.name} row={r} delay={i * 0.05} />
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            Chiffres issus des entités du Groupe CTA et du réseau TourCom.
          </p>
        </Container>
      </section>

      {/* --- Certifications & garanties (références légales réelles) --- */}
      <section className="bg-surface py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
              Certifications &amp; garanties
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
              Des garanties qui vous protègent
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Le Groupe CTA exerce ses métiers dans un cadre réglementé et sécurisé,
              pour la tranquillité de ses clients.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Atout France",
                text: "Immatriculation au registre des opérateurs de voyages et de séjours.",
                lines: [
                  { e: "CTA Events", v: "IM031110034" },
                  { e: "SOP Events", v: "IM031110033" },
                ],
                icon: (
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                ),
              },
              {
                title: "Garantie financière",
                text: "Les fonds que vous nous confiez sont protégés par une garantie financière (ARCUS).",
                lines: [
                  { e: "CTA Events", v: "ARCUS A58005" },
                  { e: "SOP Events", v: "ARCUS A58045" },
                ],
                icon: (
                  <path d="M3 10h18M5 10V7l7-4 7 4v3M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8M9 14h6" />
                ),
              },
              {
                title: "Assurance RCP",
                text: "Responsabilité Civile Professionnelle souscrite auprès de HISCOX.",
                lines: [
                  { e: "CTA Events", v: "HISCOX PL-FR-PSC900278430" },
                  { e: "SOP Events", v: "HISCOX PL-FR-PSC900278419" },
                ],
                icon: (
                  <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />
                ),
              },
              {
                title: "Réseau TourCom",
                text: "Membre du 1ᵉʳ réseau de voyage d'affaires en France.",
                lines: [{ e: "", v: "+ de 1 200 agences partenaires" }],
                icon: (
                  <path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7.5 7.5l3 6m6-6l-3 6" />
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-white p-7 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cta-petrol/10 text-cta-petrol">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {c.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-cta-navy">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.text}</p>
                  <ul className="mt-4 space-y-1 border-t border-border pt-3 text-xs">
                    {c.lines.map((l) => (
                      <li key={l.v} className="text-cta-petrol">
                        {l.e && <span className="font-semibold text-cta-navy">{l.e} : </span>}
                        <span className="font-semibold">{l.v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --- Pourquoi choisir le Groupe CTA --- */}
      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-cta-petrol sm:text-xl">
              Pourquoi nous choisir
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-cta-navy sm:text-4xl">
              Pourquoi choisir le Groupe CTA
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Quatre bonnes raisons de nous confier vos déplacements et vos événements.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Un interlocuteur unique",
                text: "Une seule porte d'entrée vers toutes les expertises du groupe, sans multiplier les contacts.",
                icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 .01M22 21v-2a4 4 0 0 0-3-3.87" />,
              },
              {
                title: "Du sur-mesure",
                text: "Des prestations adaptées à chaque besoin, du voyage individuel au congrès de plusieurs milliers de personnes.",
                icon: <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />,
              },
              {
                title: "Une expertise métiers depuis plus de 30 ans",
                text: "Depuis plus de 30 ans, nous créons bien plus que des voyages et des événements : nous forgeons des expériences qui rapprochent, inspirent et marquent les esprits.",
                icon: <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4" />,
              },
              {
                title: "La proximité",
                text: "Une équipe ancrée à Toulouse, à votre écoute, réactive et engagée à vos côtés.",
                icon: <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cta-petrol/30">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cta-petrol/10 text-cta-petrol transition-transform duration-300 group-hover:scale-110">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {c.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-cta-navy">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.text}</p>
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
