import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  date?: string; // prise de rendez-vous : date souhaitée
  slot?: string; // prise de rendez-vous : créneau souhaité
  consent?: string | boolean;
  website?: string; // honeypot
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Anti-spam : si le honeypot est rempli, on simule un succès silencieux
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, votre e-mail et votre message." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "E-mail invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Groupe CTA <onboarding@resend.dev>";

  // En l'absence de clé (ex. développement local), on logge sans bloquer.
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY absente — message non envoyé :", {
      name,
      email,
      subject: data.subject,
    });
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(apiKey);
  const safe = (v?: string) => (v ?? "").replace(/[<>]/g, "");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande — ${safe(data.subject) || "Groupe CTA"}`,
      text: [
        `Nom : ${safe(name)}`,
        `E-mail : ${safe(email)}`,
        `Téléphone : ${safe(data.phone) || "—"}`,
        `Société : ${safe(data.company) || "—"}`,
        `Concerne : ${safe(data.subject) || "—"}`,
        ...(data.date ? [`Date souhaitée : ${safe(data.date)}`] : []),
        ...(data.slot ? [`Créneau souhaité : ${safe(data.slot)}`] : []),
        "",
        "Message :",
        safe(message),
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Merci de réessayer." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Exception:", err);
    return NextResponse.json(
      { error: "Une erreur serveur est survenue." },
      { status: 500 },
    );
  }
}
