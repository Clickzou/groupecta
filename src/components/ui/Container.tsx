import type { ReactNode } from "react";

/** Conteneur centré avec largeur max et gouttières responsives. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
