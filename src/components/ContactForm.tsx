"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { entities } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-cta-navy outline-none transition focus:border-cta-blue focus:ring-2 focus:ring-cta-blue/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Une erreur est survenue.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-cta-blue/30 bg-cta-blue/5 p-8 text-center">
        <h3 className="font-heading text-xl font-bold text-cta-navy">
          Message envoyé, merci !
        </h3>
        <p className="mt-2 text-sm text-muted">
          Notre équipe vous recontacte dans les meilleurs délais.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-cta-petrol hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-cta-navy">
            Nom et prénom *
          </span>
          <input name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-cta-navy">
            Société
          </span>
          <input name="company" autoComplete="organization" className={inputClass} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-cta-navy">
            E-mail *
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-cta-navy">
            Téléphone
          </span>
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-cta-navy">
          Votre demande concerne
        </span>
        <select name="subject" className={inputClass} defaultValue="">
          <option value="">Sélectionnez une société…</option>
          {entities.map((e) => (
            <option key={e.slug} value={e.name}>
              {e.name} — {e.tagline}
            </option>
          ))}
          <option value="Autre / Information générale">
            Autre / Information générale
          </option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-cta-navy">
          Votre message *
        </span>
        <textarea name="message" required rows={5} className={inputClass} />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-border accent-cta-petrol"
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a className="font-semibold text-cta-petrol hover:underline" href="/confidentialite">
            politique de confidentialité
          </a>
          . *
        </span>
      </label>

      {/* Honeypot anti-spam (caché aux humains) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {status === "error" && (
        <p className="rounded-lg bg-cta-petrol/10 px-4 py-3 text-sm text-cta-petrol">
          {error}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </Button>
    </form>
  );
}
