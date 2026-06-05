import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../Reveal";

export function CtaBanner() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[var(--radius-card)] px-8 py-14 text-center text-white md:px-16 md:py-20"
            style={{ background: "linear-gradient(135deg,#1e445b 0%,#15303f 100%)" }}
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
                href="/prendre-rendez-vous"
                className="!bg-white !text-cta-petrol hover:!bg-white/90"
              >
                Prendre rendez-vous
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
