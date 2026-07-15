"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(form.entries());
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await response.json();
    setMessage(data.message ?? "Une erreur est survenue.");
    setState(response.ok ? "done" : "error");
    if (response.ok) event.currentTarget.reset();
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" />
      <div className="form-grid"><label>Nom<input name="name" required minLength={2} /></label><label>Email<input name="email" type="email" required /></label></div>
      <div className="form-grid"><label>Organisation<input name="company" /></label><label>Type de besoin<select name="requestType" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Créer un produit</option><option>Automatiser une activité</option><option>Audit / pilotage</option><option>Formation</option></select></label></div>
      <div className="form-grid"><label>Budget indicatif<select name="budget" defaultValue=""><option value="">À définir</option><option>Moins de 3 000 €</option><option>3 000 à 10 000 €</option><option>10 000 à 30 000 €</option><option>Plus de 30 000 €</option></select></label><label>Échéance<input name="deadline" placeholder="Ex. septembre 2026" /></label></div>
      <label>Votre besoin<textarea name="message" required minLength={20} rows={7} /></label>
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Envoi…" : "Envoyer la demande"}</button>
      {message && <p className={state === "error" ? "form-message error" : "form-message"}>{message}</p>}
    </form>
  );
}
