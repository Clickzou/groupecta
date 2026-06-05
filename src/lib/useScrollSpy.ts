"use client";

import { useEffect, useState } from "react";

/**
 * Détermine la section actuellement visible (navigation monopage).
 * @param ids   identifiants des sections, dans l'ordre d'apparition
 * @param enabled  désactive le suivi hors de la page d'accueil
 * @param offset  marge haute (hauteur du header) pour déclencher le changement
 */
export function useScrollSpy(ids: string[], enabled = true, offset = 120) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const handler = () => {
      let current = ids[0] ?? null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, enabled, offset]);

  return active;
}
