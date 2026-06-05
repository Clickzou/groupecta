import Link from "next/link";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { entities, nav, site } from "@/lib/site";

export function Footer({ credit = false }: { credit?: boolean }) {
  return (
    <footer className="bg-cta-navy text-white/80">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Le Groupe CTA réunit l&apos;expertise du voyage d&apos;affaires, de
            l&apos;événementiel et du tourisme au service des entreprises.
          </p>
          <address className="not-italic text-sm leading-relaxed text-white/70">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            <a className="hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </address>
          <SocialLinks itemClassName="bg-white/10 text-white hover:bg-cta-petrol" />
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
            Nos sociétés
          </h3>
          <ul className="space-y-2 text-sm">
            {entities.map((e) => (
              <li key={e.slug} className="flex items-center gap-2">
                <a
                  className="hover:text-white"
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {e.name}
                </a>
                {e.linkedin && (
                  <a
                    href={e.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn ${e.name}`}
                    className="grid h-6 w-6 place-items-center rounded-md border border-white/50 text-white transition-transform duration-300 hover:-rotate-12"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-xs text-white/50">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
            <p className="order-2 lg:order-1">
              © {new Date().getFullYear()} {site.legalName}. Tous droits réservés.
            </p>
            <nav className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:order-2">
              <Link className="transition-colors hover:text-white" href="/mentions-legales">Mentions légales</Link>
              <Link className="transition-colors hover:text-white" href="/confidentialite">Politique de confidentialité</Link>
              <Link className="transition-colors hover:text-white" href="/politique-cookies">Politique de cookies</Link>
              <Link className="transition-colors hover:text-white" href="/plan-du-site">Plan du site</Link>
            </nav>
          </div>

          {credit && (
            <p className="mt-5 text-center text-white/40">
              Site créé et propulsé par{" "}
              <a
                href="https://clickzou.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/70 transition-colors hover:text-white"
              >
                Clickzou
              </a>
            </p>
          )}
        </Container>
      </div>
    </footer>
  );
}
