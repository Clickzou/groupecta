import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site du Groupe CTA.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader title="Mentions légales" />
      <section className="py-16">
        <Container className="prose-cta mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          {/* TODO: compléter avec les informations légales officielles (SIREN, RCS, directeur de publication, hébergeur). */}
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Éditeur du site</h2>
            <p className="mt-2">
              {site.legalName}
              <br />
              {site.address.street}, {site.address.postalCode} {site.address.city}
              <br />
              E-mail : {site.email}
              <br />
              SIREN / RCS : <em>à compléter</em>
              <br />
              Directeur de la publication : <em>à compléter</em>
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Immatriculation &amp; garanties</h2>
            <p className="mt-2">
              Les sociétés du groupe exerçant une activité d&apos;opérateur de voyages et de
              séjours sont immatriculées au registre Atout France et couvertes par une
              garantie financière ainsi qu&apos;une assurance Responsabilité Civile
              Professionnelle :
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-cta-navy">CTA Events</strong> — Atout France :
                IM031110034 · Garantie financière : ARCUS A58005 · RCP : HISCOX
                PL-FR-PSC900278430
              </li>
              <li>
                <strong className="text-cta-navy">SOP Events</strong> — Atout France :
                IM031110033 · Garantie financière : ARCUS A58045 · RCP : HISCOX
                PL-FR-PSC900278419
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Hébergement</h2>
            <p className="mt-2">
              Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
              États-Unis.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              logos, marques) est protégé par le droit de la propriété
              intellectuelle. Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
