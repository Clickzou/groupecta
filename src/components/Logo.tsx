import Link from "next/link";
import { BrandWordmark } from "./BrandWordmark";
import { site } from "@/lib/site";

/** Logo du Groupe CTA : logotype « Groupe » fin + « CTA » gras. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label={`${site.name} — Accueil`} className="inline-block">
      <BrandWordmark light={light} className="text-2xl sm:text-[1.7rem]" />
    </Link>
  );
}
