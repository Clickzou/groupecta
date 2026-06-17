import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique d'utilisation des cookies du site du Groupe CTA.",
  robots: { index: false, follow: true },
};

export default function PolitiqueCookiesPage() {
  return (
    <>
      <PageHeader title="Politique de cookies" subtitle="Gestion des cookies et traceurs" />
      <section className="py-16">
        <Container className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          {/* TODO: aligner la liste ci-dessous sur les traceurs réellement déposés (mesure d'audience, intégrations) une fois en production. */}
          <p>
            Cette politique explique ce qu&apos;est un cookie, quels traceurs sont
            susceptibles d&apos;être déposés lors de votre navigation sur ce site et
            comment exercer vos choix, conformément aux recommandations de la CNIL.
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="mt-2">
              Un cookie est un petit fichier texte déposé et lu sur votre terminal
              (ordinateur, tablette, smartphone) lors de la visite d&apos;un site. Il
              permet notamment d&apos;assurer le bon fonctionnement du site, de mémoriser
              vos préférences et de mesurer son audience.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Les cookies que nous utilisons</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong className="text-cta-navy">Cookies strictement nécessaires</strong> — indispensables au fonctionnement du site et à l&apos;enregistrement de votre choix de consentement. Ils ne nécessitent pas votre accord.</li>
              <li><strong className="text-cta-navy">Cookies de mesure d&apos;audience</strong> — pour comprendre l&apos;utilisation du site (pages vues, parcours) et l&apos;améliorer. Soumis à votre consentement.</li>
              <li><strong className="text-cta-navy">Cookies tiers</strong> — liés à des services intégrés (carte, vidéos, réseaux sociaux) susceptibles de déposer leurs propres traceurs. Soumis à votre consentement.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Votre consentement</h2>
            <p className="mt-2">
              Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de
              refuser le dépôt des cookies non essentiels. Aucun traceur soumis à
              consentement n&apos;est déposé tant que vous n&apos;avez pas exprimé votre
              choix. Votre décision est mémorisée localement sur votre navigateur afin de
              ne pas vous solliciter à chaque visite.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Modifier vos choix</h2>
            <p className="mt-2">
              Vous pouvez à tout moment revenir sur votre choix en supprimant les données
              de site enregistrées par votre navigateur (le bandeau réapparaîtra alors),
              ou en configurant directement votre navigateur pour bloquer ou supprimer
              les cookies. Le refus de certains cookies peut toutefois altérer votre
              expérience de navigation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Durée de conservation</h2>
            <p className="mt-2">
              Les cookies sont conservés pour une durée maximale de 13 mois à compter de
              leur dépôt. Le consentement recueilli est conservé au maximum 6 mois, à
              l&apos;issue desquels votre choix vous est de nouveau demandé.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Contact</h2>
            <p className="mt-2">
              Pour toute question relative aux cookies ou à vos données, écrivez-nous à{" "}
              <a className="text-cta-blue hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              ou consultez notre{" "}
              <a className="text-cta-blue hover:underline" href="/confidentialite">politique de confidentialité</a>.
            </p>
          </div>

          <p className="text-xs text-muted/80">Dernière mise à jour : juin 2026.</p>
        </Container>
      </section>
    </>
  );
}
