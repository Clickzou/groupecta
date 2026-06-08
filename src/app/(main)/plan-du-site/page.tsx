import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Plan du site du Groupe CTA : accès à toutes les pages.",
};

const groups = [
  {
    title: "Pages principales",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Le Groupe", href: "/#le-groupe" },
      { label: "Nos sociétés", href: "/#nos-societes" },
      { label: "Chiffres clés", href: "/chiffres-cles" },
      { label: "Engagement responsable", href: "/engagement-responsable" },
      { label: "Investisseurs", href: "/investisseurs" },
      { label: "Contact", href: "/contact" },
      { label: "Prendre rendez-vous", href: "/prendre-rendez-vous" },
    ],
  },
  {
    title: "Accompagner nos clients",
    links: [
      { label: "Vue d'ensemble", href: "/accompagner-nos-clients" },
      ...services.map((s) => ({
        label: s.title,
        href: `/accompagner-nos-clients/${s.slug}`,
      })),
    ],
  },
  {
    title: "Informations légales",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Politique de cookies", href: "/politique-cookies" },
      { label: "Plan du site", href: "/plan-du-site" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <>
      <PageHeader title="Plan du site" subtitle="Retrouvez l'ensemble des pages du site." />
      <section className="py-16">
        <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-heading text-lg font-bold text-cta-navy">{g.title}</h2>
              <span className="mt-3 block h-1 w-10 rounded-full bg-cta-petrol" />
              <ul className="mt-5 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link className="text-muted transition-colors hover:text-cta-petrol" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
