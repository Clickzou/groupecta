import type { CSSProperties } from "react";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../Reveal";

/**
 * Bandeau d'appel à l'action. Par défaut au bleu nuit du groupe ; si `accent`
 * est fourni (couleur d'une société), le bandeau adopte la teinte de l'entité.
 */
export function CtaBanner({ accent }: { accent?: string }) {
  const background = accent
    ? `linear-gradient(135deg, ${accent} 0%, color-mix(in srgb, ${accent} 65%, #000) 100%)`
    : "linear-gradient(135deg,#1e445b 0%,#15303f 100%)";

  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[var(--radius-card)] px-8 py-14 text-center text-white md:px-16 md:py-20"
            style={{ background }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative mx-auto max-w-4xl text-balance font-heading text-2xl font-black sm:text-4xl">
              Un projet de déplacement ou d&apos;événement&nbsp;?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/85">
              Parlons-en. Nos équipes vous orientent vers la société la plus
              adaptée et vous accompagnent de A à Z.
            </p>
            <div className="relative mt-8 flex justify-center">
              <ButtonLink
                href="/contact"
                className="!bg-white hover:!bg-white/90"
                style={{ color: accent ?? "var(--color-cta-petrol)" } as CSSProperties}
              >
                Nous contacter
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
