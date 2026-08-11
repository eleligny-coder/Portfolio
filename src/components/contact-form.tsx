"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const formElement = event.currentTarget;

    try {
      const form = new FormData(formElement);
      const body = Object.fromEntries(form.entries());
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json().catch(() => ({ message: "Une erreur est survenue." }));
      setMessage(data.message ?? "Une erreur est survenue.");
      setState(response.ok ? "done" : "error");
      if (response.ok) formElement.reset();
    } catch {
      setState("error");
      setMessage("Connexion interrompue. Réessayez ou utilisez l’adresse email directe.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={state === "sending"}>
      {turnstileSiteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />}
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <label>Nom<input name="name" required minLength={2} /></label>
        <label>Email<input name="email" type="email" required /></label>
      </div>
      <div className="form-grid">
        <label>Vous êtes<select name="profileType" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Entreprise / PME</option><option>Startup / entrepreneur</option><option>Recruteur / ESN</option><option>Association / ESS</option><option>Indépendant</option><option>Autre</option></select></label>
        <label>Organisation<input name="company" /></label>
      </div>
      <div className="form-grid">
        <label>Type de besoin<select name="requestType" required defaultValue=""><option value="" disabled>Sélectionner</option><option>SaaS / application métier</option><option>CRM sur mesure</option><option>IA & automatisation</option><option>Stripe / monétisation</option><option>Audit / reprise de projet</option><option>Product Owner / pilotage</option><option>Recrutement 100 % remote</option><option>Autre</option></select></label>
        <label>Budget / rémunération<select name="budget" defaultValue=""><option value="">À définir</option><option>Moins de 3 000 €</option><option>3 000 à 10 000 €</option><option>10 000 à 30 000 €</option><option>Plus de 30 000 €</option><option>Poste salarié / TJM à discuter</option></select></label>
      </div>
      <div className="form-grid">
        <label>Échéance<input name="deadline" placeholder="Ex. septembre 2026" /></label>
        <label>Stack / outils existants<input name="stack" placeholder="Ex. Next.js, Supabase, WordPress…" /></label>
      </div>
      <label>Votre besoin<textarea name="message" required minLength={20} rows={7} placeholder="Problème à résoudre, utilisateurs, niveau d’avancement, fonctionnalités prioritaires…" /></label>
      {turnstileSiteKey && <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="dark" data-size="flexible" />}
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Envoi…" : "Envoyer la demande"}</button>
      {message && <p role="status" aria-live="polite" className={state === "error" ? "form-message error" : "form-message"}>{message}</p>}
    </form>
  );
}
