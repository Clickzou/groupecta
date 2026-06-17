"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

/**
 * Mesure d'audience Google Analytics (GA4), chargée UNIQUEMENT :
 *   1. si l'identifiant NEXT_PUBLIC_GA_ID est renseigné ;
 *   2. après acceptation des cookies par l'utilisateur (RGPD).
 *
 * Tant que ces deux conditions ne sont pas réunies, aucun script tiers
 * n'est injecté. Le chargement se déclenche dès que l'utilisateur accepte,
 * sans rechargement de page (écoute de l'évènement de consentement).
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const sync = () => setGranted(getConsent() === "accepted");
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!GA_ID || !granted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
