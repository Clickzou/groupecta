import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { AppointmentForm } from "@/components/AppointmentForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Demandez un rendez-vous avec le Groupe CTA : indiquez vos disponibilités, nos équipes vous recontactent rapidement.",
};

export default function PrendreRendezVousPage() {
  return (
    <>
      <PageHeader
        title="Prendre rendez-vous"
        subtitle="Indiquez vos disponibilités : nos équipes vous recontactent pour confirmer le créneau et vous orienter vers la bonne société."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[var(--radius-card)] border border-border bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
            <h2 className="font-heading text-2xl font-bold text-cta-navy">
              Votre demande de rendez-vous
            </h2>
            <p className="mt-2 text-sm text-muted">
              Les champs marqués d&apos;un astérisque (*) sont obligatoires.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-border bg-surface p-7">
              <h3 className="font-heading text-lg font-bold text-cta-navy">
                Comment ça se passe ?
              </h3>
              <ol className="mt-4 space-y-4 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cta-petrol font-bold text-white">1</span>
                  Vous remplissez le formulaire avec vos disponibilités.
                </li>
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cta-petrol font-bold text-white">2</span>
                  Nous vous recontactons pour confirmer le créneau.
                </li>
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cta-petrol font-bold text-white">3</span>
                  Vous échangez avec l&apos;expert de la société concernée.
                </li>
              </ol>
            </div>

            <div className="rounded-[var(--radius-card)] border border-border bg-white p-7">
              <h3 className="font-heading text-lg font-bold text-cta-navy">Nos coordonnées</h3>
              <address className="mt-3 text-sm not-italic leading-relaxed text-muted">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
                <br />
                <a className="text-cta-blue hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </address>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
