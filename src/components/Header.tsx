"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { nav, anchorId, services, entities, type NavItem } from "@/lib/site";
import { useScrollSpy } from "@/lib/useScrollSpy";

const SECTION_IDS = nav
  .map((item) => anchorId(item.href))
  .filter((id): id is string => Boolean(id));

/** Couleur caractéristique de la société liée à un sous-onglet « Accompagner nos clients ». */
function childAccent(href: string): string {
  const slug = href.split("/").pop();
  const service = services.find((s) => s.slug === slug);
  const entity = entities.find((e) => e.slug === service?.entitySlug);
  return entity?.bar ?? "var(--color-cta-petrol)";
}

export function Header({ reveal = false }: { reveal?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = reveal ? window.innerHeight * 0.7 : 8;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reveal]);

  useEffect(() => setOpen(false), [pathname]);

  const active = useScrollSpy(SECTION_IDS, pathname === "/");

  const isActive = (item: NavItem) => {
    const id = anchorId(item.href);
    if (id) return pathname === "/" && id === active;
    if (item.children) return pathname.startsWith(item.href);
    return pathname === item.href;
  };

  const visible = reveal ? scrolled : true;

  return (
    <header
      className={`${reveal ? "fixed" : "sticky"} inset-x-0 top-0 z-50 bg-white/95 shadow-[0_8px_30px_-20px_rgba(30,68,91,0.5)] backdrop-blur transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav
            .filter((item) => item.href !== "/contact")
            .map((item) => {
            const itemActive = isActive(item);
            const noUnderline = anchorId(item.href) === "accueil";
            return (
              <div key={item.href} className="group/dd relative">
                <Link
                  href={item.href}
                  className={`group/nav relative flex items-center gap-1 px-2.5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    itemActive ? "text-cta-petrol" : "text-cta-navy/80 hover:text-cta-petrol"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    {!noUnderline && (
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-cta-petrol transition-transform duration-300 ${
                          itemActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                        }`}
                      />
                    )}
                  </span>
                  {item.children && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 transition-transform group-hover/dd:rotate-180">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-[0_20px_50px_-20px_rgba(30,68,91,0.45)] transition-all duration-200 group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100">
                    {item.children.map((child) => {
                      const accent = childAccent(child.href);
                      return (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ "--accent": accent } as CSSProperties}
                        className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                          pathname === child.href
                            ? "bg-surface text-[color:var(--accent)]"
                            : "text-cta-navy/80 hover:bg-surface hover:text-[color:var(--accent)]"
                        }`}
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} />
                        {child.label}
                      </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="primary">
            Contact
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-border text-cta-navy lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex max-h-[70vh] flex-col gap-0.5 overflow-y-auto py-4">
            {nav
              .filter((item) => item.href !== "/contact")
              .map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 font-semibold uppercase tracking-wide text-cta-navy hover:bg-surface"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-border pl-3">
                    {item.children.map((child) => {
                      const accent = childAccent(child.href);
                      return (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ "--accent": accent } as CSSProperties}
                        className="flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm font-medium text-cta-navy/75 hover:bg-surface hover:text-[color:var(--accent)]"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} />
                        {child.label}
                      </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <ButtonLink href="/contact" variant="primary" className="mt-2">
              Contact
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
