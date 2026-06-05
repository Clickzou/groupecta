import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des données personnelles (RGPD) du Groupe CTA.",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader title="Politique de confidentialité" subtitle="Protection de vos données personnelles (RGPD)" />
      <section className="py-16">
        <Container className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          {/* TODO: faire valider ce contenu par un juriste / DPO avant mise en production. */}
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Responsable du traitement
            </h2>
            <p className="mt-2">
              {site.legalName}, {site.address.street}, {site.address.postalCode}{" "}
              {site.address.city}. Contact : {site.email}.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Données collectées
            </h2>
            <p className="mt-2">
              Via notre formulaire de contact, nous collectons les données que vous
              nous transmettez : nom, e-mail, téléphone, société et message. Ces
              données servent uniquement à traiter votre demande.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Conservation
            </h2>
            <p className="mt-2">
              Vos données sont conservées le temps nécessaire au traitement de votre
              demande, puis archivées ou supprimées conformément aux durées légales.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement et d&apos;opposition sur vos données.
              Pour l&apos;exercer, écrivez-nous à{" "}
              <a className="text-cta-blue hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
