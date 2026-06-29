"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { MusicButton } from "../Music";
import { ButtonLink } from "../ui/Button";
import { heroSlides, hero, nav, site, anchorId } from "@/lib/site";
import { useScrollSpy } from "@/lib/useScrollSpy";

const SLIDE_MS = 6000;
const SECTION_IDS = nav
  .map((item) => anchorId(item.href))
  .filter((id): id is string => Boolean(id));

// Animation d'entrée de la sidebar (cascade : logo -> liens -> réseaux),
// déclenchée après l'apparition de la première photo.
const sidebarVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};
const navListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HomeSplash() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  // Avance automatique du diaporama
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      id="accueil"
      className="relative flex h-[100svh] min-h-[600px] w-full flex-col overflow-hidden bg-cta-navy text-white"
    >
      {/* ---------- Diaporama plein écran (fondu enchaîné + léger zoom) ---------- */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.6, ease: "easeInOut" },
              scale: { duration: SLIDE_MS / 1000 + 1.6, ease: "linear" },
            }}
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className={`h-full w-full ${slide.placeholder}`} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Voile coloré léger + dégradés ciblés (gauche : menu / bas : indicateurs) */}
        <div className="absolute inset-0 bg-brand-gradient opacity-35 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-cta-navy/60 via-cta-navy/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cta-navy/45 via-transparent to-transparent" />
      </div>

      {/* ---------- Barre supérieure (logo + burger mobile) ---------- */}
      <div className="relative z-30 flex items-start justify-between p-6 sm:p-8 md:hidden">
        <div className="flex flex-col items-start gap-2">
          <Logo light />
          <MusicButton />
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/30 text-white"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {/* ---------- Barre latérale gauche (desktop) ---------- */}
      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate="show"
        className="absolute inset-y-0 left-0 z-30 hidden w-[380px] flex-col justify-between p-10 md:flex"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <Logo light />
          <MusicButton />
        </motion.div>

        <motion.nav variants={navListVariants} className="flex flex-col gap-1.5">
          {nav
            .filter((item) => anchorId(item.href) !== "accueil")
            .map((item) => {
            const isActive = anchorId(item.href) === active;
            return (
              <motion.div key={item.href} variants={itemVariants} className="group/side relative">
                <Link
                  href={item.href}
                  className={`font-heading relative inline-flex items-center gap-1.5 whitespace-nowrap text-2xl font-bold uppercase leading-tight tracking-tight transition-colors lg:text-3xl ${
                    isActive ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    {anchorId(item.href) !== "accueil" && (
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-white transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover/side:scale-x-100"
                        }`}
                      />
                    )}
                  </span>
                  {item.children && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="opacity-70">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-full top-0 z-50 pl-5 opacity-0 transition-all duration-200 group-hover/side:visible group-hover/side:opacity-100">
                    <div className="w-64 rounded-2xl border border-white/15 bg-cta-navy/95 p-2.5 shadow-2xl backdrop-blur">
                      <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                        Nos services
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/sub flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold normal-case text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {child.label}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="-translate-x-1 text-white/60 opacity-0 transition-all duration-200 group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.nav>

        {/* Espaceur bas (les réseaux sociaux ont été retirés : le groupe CTA n'en a pas) */}
        <motion.div variants={itemVariants} aria-hidden />
      </motion.aside>

      {/* ---------- Contenu central : bloc titre encadré + CTA ---------- */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Étiquette H1 fixe (ne change pas selon la photo) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2.5 font-heading text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm sm:text-base"
          >
            {hero.label}
          </motion.h1>

          {/* Titre + texte qui changent à chaque photo */}
          <div className="relative mt-7 flex min-h-[270px] w-full flex-col items-center sm:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="font-heading text-6xl font-black [text-shadow:0_4px_30px_rgba(0,0,0,0.35)] sm:text-8xl">
                  {slide.title}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] sm:text-2xl">
                  {slide.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Boutons (fixes) */}
          <div className="mt-2 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="#nos-societes" variant="primary">
              Découvrir nos entités
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="outline"
              className="!border-white/40 !text-white hover:!border-white hover:!text-white"
            >
              Nous contacter
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* ---------- Indicateurs de slide + copyright ---------- */}
      <div className="relative z-20 flex items-center justify-between p-6 sm:p-8 md:pl-[340px]">
        <div className="flex gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Afficher le visuel ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <span className="hidden text-xs text-white/50 sm:block">
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>

      {/* Indicateur de défilement */}
      <div className="pointer-events-none absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest">
            Découvrir
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* ---------- Menu mobile plein écran ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex flex-col justify-center gap-2 bg-cta-navy/95 px-10 backdrop-blur md:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading whitespace-nowrap text-3xl font-black uppercase text-white/90"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
