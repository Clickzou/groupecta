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
          {/* TODO: faire valider ce contenu et l'aligner sur l'outil de consentement réellement utilisé. */}
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="mt-2">
              Un cookie est un petit fichier déposé sur votre terminal lors de la
              visite d&apos;un site. Il permet notamment d&apos;assurer le bon
              fonctionnement du site et de mesurer son audience.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Les cookies que nous utilisons</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong className="text-cta-navy">Cookies strictement nécessaires</strong> — indispensables au fonctionnement du site.</li>
              <li><strong className="text-cta-navy">Cookies de mesure d&apos;audience</strong> — pour comprendre l&apos;utilisation du site et l&apos;améliorer.</li>
              <li><strong className="text-cta-navy">Cookies tiers</strong> — liés à des services intégrés (carte, vidéos, réseaux sociaux).</li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Votre consentement</h2>
            <p className="mt-2">
              Lors de votre première visite, vous pouvez accepter ou refuser le dépôt
              des cookies non essentiels. Vous pouvez modifier votre choix à tout
              moment via les paramètres de votre navigateur.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-cta-navy">Contact</h2>
            <p className="mt-2">
              Pour toute question relative aux cookies, écrivez-nous à{" "}
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
