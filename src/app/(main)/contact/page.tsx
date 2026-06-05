import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le Groupe CTA à Toulouse : formulaire, coordonnées de nos quatre sociétés et localisation.",
};

export default function ContactPage() {
  return <ContactSection />;
}
