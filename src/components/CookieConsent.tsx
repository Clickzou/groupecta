"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cta-cookies-consent";

/**
 * Bandeau de consentement aux cookies (RGPD).
 * Mémorise le choix dans le localStorage ; ne réapparaît plus ensuite.
 */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage indisponible : on n'affiche pas */
    }
  }, []);

  function choose(value: "accepted" | "refused") {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-xl rounded-2xl border border-border bg-white p-5 shadow-[0_20px_60px_-20px_rgba(30,68,91,0.5)] sm:left-6 sm:right-auto sm:mx-0"
    >
      <p className="text-sm leading-relaxed text-cta-navy">
        Nous utilisons des cookies pour assurer le bon fonctionnement du site,
        mesurer l&apos;audience et améliorer votre expérience.{" "}
        <Link href="/politique-cookies" className="font-semibold text-cta-petrol hover:underline">
          En savoir plus
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-full bg-cta-petrol px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-petrol-light"
        >
          Tout accepter
        </button>
        <button
          type="button"
          onClick={() => choose("refused")}
          className="rounded-full border-2 border-cta-navy/20 px-5 py-2.5 text-sm font-semibold text-cta-navy transition-colors hover:border-cta-petrol hover:text-cta-petrol"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
