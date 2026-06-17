import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { site, entities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site du Groupe CTA.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        title="Mentions légales"
        subtitle="Informations légales relatives au site et à son éditeur"
      />
      <section className="py-16">
        <Container className="prose-cta mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          <p className="text-muted">
            Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin
            2004 pour la confiance dans l&apos;économie numérique (LCEN), les
            informations suivantes sont portées à la connaissance des utilisateurs du
            site.
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Éditeur du site</h2>
            <p className="mt-2">
              CTA GROUP
              <br />
              Forme juridique : SAS (société par actions simplifiée)
              <br />
              Capital social : 1 536 700 €
              <br />
              Siège social : {site.address.street}, {site.address.postalCode}{" "}
              {site.address.city}, {site.address.country}
              <br />
              E-mail : {site.email}
              <br />
              SIREN : 823 740 030 — SIRET (siège) : 823 740 030 00023
              <br />
              RCS : Toulouse 823 740 030
              <br />
              Code APE / NAF : 70.10Z (Activités des sièges sociaux)
              <br />
              N° de TVA intracommunautaire : FR87 823 740 030
              <br />
              Directeur de la publication : Jean-Jacques Castanet
              <br />
              Convention collective : IDCC 3245 — Convention collective nationale des
              opérateurs de voyages et des guides
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Nous contacter par téléphone</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {entities.map((e) => (
                <li key={e.slug}>
                  <strong className="text-cta-navy">{e.name}</strong> — {e.phone}
                </li>
              ))}
            </ul>
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
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, États-Unis — <a className="text-cta-blue hover:underline" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus présents sur ce site (textes, images,
              photographies, logos, marques, identité visuelle, arborescence) est
              protégé par le droit de la propriété intellectuelle et reste la propriété
              exclusive du {site.legalName} ou de ses partenaires. Toute reproduction,
              représentation, modification ou exploitation, totale ou partielle, sans
              autorisation écrite préalable est interdite et constituerait une
              contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la
              propriété intellectuelle.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Liens hypertextes</h2>
            <p className="mt-2">
              Ce site peut renvoyer vers les sites des sociétés du groupe et vers des
              sites tiers. Le {site.legalName} n&apos;exerce aucun contrôle sur ces
              ressources externes et décline toute responsabilité quant à leur contenu
              ou à l&apos;usage qui pourrait en être fait.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Données personnelles &amp; cookies</h2>
            <p className="mt-2">
              Les traitements de données à caractère personnel réalisés via ce site sont
              décrits dans notre{" "}
              <a className="text-cta-blue hover:underline" href="/confidentialite">politique de confidentialité</a>{" "}
              et notre{" "}
              <a className="text-cta-blue hover:underline" href="/politique-cookies">politique de cookies</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Médiation de la consommation</h2>
            <p className="mt-2">
              Conformément aux articles L.611-1 et suivants du Code de la consommation,
              pour les prestations relevant de la vente de voyages et de séjours, le
              client peut recourir gratuitement au Médiateur du Tourisme et du Voyage
              (MTV) : MTV Médiation Tourisme Voyage, BP 80 303, 75 823 Paris Cedex 17 —{" "}
              <a className="text-cta-blue hover:underline" href="https://www.mtv.travel" target="_blank" rel="noopener noreferrer">mtv.travel</a>,
              après avoir adressé une réclamation écrite préalable restée sans réponse
              satisfaisante.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Droit applicable</h2>
            <p className="mt-2">
              Le présent site et les présentes mentions légales sont régis par le droit
              français. En cas de litige, et à défaut de résolution amiable, les
              tribunaux français seront seuls compétents.
            </p>
          </div>

          <p className="text-xs text-muted/80">Dernière mise à jour : juin 2026.</p>
        </Container>
      </section>
    </>
  );
}
