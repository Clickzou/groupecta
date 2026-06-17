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
          {/* TODO: faire valider ce contenu par un juriste / DPO et préciser le DPO le cas échéant. */}
          <p>
            Le {site.legalName} attache une grande importance à la protection de votre
            vie privée. La présente politique décrit, conformément au Règlement (UE)
            2016/679 (RGPD) et à la loi « Informatique et Libertés », la manière dont
            vos données à caractère personnel sont collectées et traitées via ce site.
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Responsable du traitement
            </h2>
            <p className="mt-2">
              {site.legalName}, {site.address.street}, {site.address.postalCode}{" "}
              {site.address.city}, {site.address.country}. Pour toute question relative
              à vos données : {" "}
              <a className="text-cta-blue hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Données collectées &amp; finalités
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-cta-navy">Formulaire de contact / demande de devis</strong> —
                nom, e-mail, téléphone, société et message, afin de traiter et de
                répondre à votre demande.
              </li>
              <li>
                <strong className="text-cta-navy">Prise de rendez-vous</strong> —
                coordonnées nécessaires à l&apos;organisation de l&apos;échange.
              </li>
              <li>
                <strong className="text-cta-navy">Données de navigation</strong> —
                données techniques et de mesure d&apos;audience collectées via des
                cookies (voir notre{" "}
                <a className="text-cta-blue hover:underline" href="/politique-cookies">politique de cookies</a>).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Base légale
            </h2>
            <p className="mt-2">
              Le traitement des demandes repose sur votre consentement et/ou sur
              l&apos;intérêt légitime du groupe à répondre à vos sollicitations et, le
              cas échéant, sur l&apos;exécution de mesures précontractuelles. Le dépôt
              de cookies non essentiels repose sur votre consentement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Destinataires
            </h2>
            <p className="mt-2">
              Vos données sont destinées aux équipes habilitées du Groupe CTA et, le cas
              échéant, à la société du groupe la plus à même de traiter votre demande.
              Elles peuvent être traitées par nos prestataires techniques (hébergement,
              messagerie) agissant en qualité de sous-traitants. Elles ne sont jamais
              vendues à des tiers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Transferts hors Union européenne
            </h2>
            <p className="mt-2">
              L&apos;hébergement du site est assuré par Vercel Inc. (États-Unis).
              Certaines données peuvent ainsi être transférées hors de l&apos;Union
              européenne, encadrées par des garanties appropriées (clauses
              contractuelles types de la Commission européenne).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">
              Durée de conservation
            </h2>
            <p className="mt-2">
              Les données issues d&apos;une demande de contact sont conservées le temps
              nécessaire à son traitement, puis jusqu&apos;à 3 ans à compter du dernier
              contact à des fins de suivi commercial, sauf obligation légale de
              conservation plus longue. Les données de mesure d&apos;audience sont
              conservées 13 mois au maximum.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Sécurité</h2>
            <p className="mt-2">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées (chiffrement des échanges, accès restreints) afin de protéger
              vos données contre tout accès, altération ou divulgation non autorisés.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement, de limitation, d&apos;opposition et de
              portabilité de vos données, ainsi que du droit de définir des directives
              relatives à leur sort après votre décès. Pour exercer ces droits,
              écrivez-nous à{" "}
              <a className="text-cta-blue hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              . Vous pouvez également introduire une réclamation auprès de la CNIL
              (<a className="text-cta-blue hover:underline" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
            </p>
          </div>

          <p className="text-xs text-muted/80">Dernière mise à jour : juin 2026.</p>
        </Container>
      </section>
    </>
  );
}
