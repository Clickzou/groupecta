/**
 * Consentement aux cookies — source unique partagée entre le bandeau
 * (CookieConsent) et le chargeur de mesure d'audience (Analytics).
 *
 * Le choix est stocké dans le localStorage ; un évènement `window` est émis
 * à chaque changement pour que les traceurs réagissent sans rechargement.
 */
export const CONSENT_KEY = "cta-cookies-consent";
export const CONSENT_EVENT = "cta-consent-change";

export type ConsentValue = "accepted" | "refused";

/** Lit le choix de consentement courant (null si l'utilisateur n'a pas tranché). */
export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "refused" ? v : null;
  } catch {
    return null;
  }
}

/** Enregistre le choix et notifie les composants à l'écoute (Analytics, etc.). */
export function setConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* localStorage indisponible : on ignore */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
