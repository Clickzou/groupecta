/**
 * Logotype « Le Groupe CTA » : « Le » manuscrit (brush script) + « Groupe »
 * en graisse fine + « CTA » en gras. Réutilisé par le logo et le titre du splash.
 *
 * @param light  true => texte clair (sur fond foncé : splash / footer)
 */
export function BrandWordmark({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline whitespace-nowrap tracking-tight ${className}`}
    >
      <span
        className={`mr-3 font-[family-name:var(--font-script)] text-[1.75em] font-normal leading-none ${
          light ? "text-white" : "text-cta-navy"
        }`}
      >
        Le
      </span>
      <span className="font-[family-name:var(--font-brand)]">
        <span className={`font-light ${light ? "text-white/90" : "text-cta-navy"}`}>
          Groupe
        </span>
        <span className={`font-extrabold ${light ? "text-white" : "text-cta-petrol"}`}>
          {" "}CTA
        </span>
      </span>
    </span>
  );
}
