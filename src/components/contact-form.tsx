"use client";

import { useState } from "react";

type FormState = { status: "idle" | "sending" | "success" | "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "sending", message: "Envoi en cours…" });
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json() as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "L’envoi a échoué.");
      form.reset();
      setState({ status: "success", message: "Votre demande a bien été envoyée. Une réponse vous sera apportée dès que possible." });
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "Une erreur est survenue." });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        <label>Nom<input name="name" required minLength={2} autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="form-grid">
        <label>Organisation<input name="company" autoComplete="organization" /></label>
        <label>Type de demande<select name="requestType" required defaultValue=""><option value="" disabled>Choisir</option><option>Créer un produit</option><option>Reprendre un projet</option><option>Automatiser une activité</option><option>Auditer un projet</option><option>Organiser une formation</option><option>Autre</option></select></label>
      </div>
      <div className="form-grid">
        <label>Budget indicatif<select name="budget" defaultValue=""><option value="">Non défini</option><option>Moins de 2 000 €</option><option>2 000 à 5 000 €</option><option>5 000 à 15 000 €</option><option>15 000 € et plus</option></select></label>
        <label>Échéance<input name="deadline" placeholder="Ex. septembre 2026" /></label>
      </div>
      <label>Votre besoin<textarea name="message" required minLength={30} rows={8} placeholder="Contexte, problème à résoudre, utilisateurs, outils actuels et résultat attendu." /></label>
      <label className="consent"><input type="checkbox" name="consent" value="accepted" required />J’accepte que les informations saisies soient utilisées pour répondre à ma demande.</label>
      <button className="btn" type="submit" disabled={state.status === "sending"}>{state.status === "sending" ? "Envoi…" : "Envoyer la demande"}</button>
      {state.message && <p className={`form-message ${state.status === "error" ? "error" : ""}`} role="status">{state.message}</p>}
    </form>
  );
}
