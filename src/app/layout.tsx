import type { Metadata } from "next";
import { Roboto, Open_Sans, Outfit, Allura } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/lib/site";

// Titres : Roboto — Textes : Open Sans (cahier des charges)
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Police du logotype « Groupe CTA » (Groupe fin + CTA gras)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
});

// « Le » manuscrit devant le logo (écriture manuscrite élégante, effet signature)
const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Voyage d'affaires, événementiel & tourisme à Toulouse`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Groupe CTA",
    "SOP Events",
    "voyage d'affaires",
    "événementiel professionnel",
    "séminaire",
    "team building",
    "Toulouse",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

// Données structurées : alimente la fiche Google Business Profile / le SEO local
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${roboto.variable} ${openSans.variable} ${outfit.variable} ${allura.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
