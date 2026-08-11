"use client";

import { FormEvent, useState } from "react";

const contactEmail = "e.leligny@gmail.com";

export function ContactForm() {
  const [copied, setCopied] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();
    const subject = `Portfolio — ${value("requestType") || "Prise de contact"} — ${value("name") || "Nouveau contact"}`;
    const body = [
      `Bonjour Élie,`,
      "",
      `Je vous contacte depuis votre portfolio.`,
      "",
      `Nom : ${value("name")}`,
      `Email : ${value("email")}`,
      `Profil : ${value("profileType")}`,
      `Organisation : ${value("company") || "Non renseignée"}`,
      `Besoin : ${value("requestType")}`,
      `Budget / rémunération : ${value("budget") || "À définir"}`,
      `Échéance : ${value("deadline") || "Non renseignée"}`,
      `Stack / outils : ${value("stack") || "Non renseignés"}`,
      "",
      "Contexte :",
      value("message"),
      "",
      "Bien cordialement,",
      value("name"),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-head">
        <span className="eyebrow">Brief de mission</span>
        <h2>Donnez-moi le contexte. Je veux comprendre le problème avant de parler solution.</h2>
        <p>Aucun compte, aucune donnée stockée : le bouton prépare simplement un email dans votre messagerie.</p>
      </div>
      <div className="form-grid">
        <label>Nom<input name="name" required minLength={2} autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="form-grid">
        <label>Vous êtes<select name="profileType" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Entreprise / PME</option><option>Startup / entrepreneur</option><option>Recruteur / ESN</option><option>Association / ESS</option><option>Indépendant</option><option>Autre</option></select></label>
        <label>Organisation<input name="company" autoComplete="organization" /></label>
      </div>
      <div className="form-grid">
        <label>Type de besoin<select name="requestType" required defaultValue=""><option value="" disabled>Sélectionner</option><option>SaaS / application métier</option><option>CRM sur mesure</option><option>Automatisation / intégrations</option><option>Stripe / monétisation</option><option>Audit / reprise de projet</option><option>Product Owner / pilotage</option><option>Recrutement 100 % remote</option><option>Autre</option></select></label>
        <label>Budget / rémunération<select name="budget" defaultValue=""><option value="">À définir</option><option>Moins de 3 000 €</option><option>3 000 à 10 000 €</option><option>10 000 à 30 000 €</option><option>Plus de 30 000 €</option><option>Poste salarié / TJM à discuter</option></select></label>
      </div>
      <div className="form-grid">
        <label>Échéance<input name="deadline" placeholder="Ex. septembre 2026" /></label>
        <label>Stack / outils existants<input name="stack" placeholder="Ex. Next.js, Supabase, WordPress…" /></label>
      </div>
      <label>Votre besoin<textarea name="message" required minLength={20} rows={7} placeholder="Problème à résoudre, utilisateurs, niveau d’avancement, fonctionnalités prioritaires…" /></label>
      <div className="contact-submit-row">
        <button className="btn" type="submit">Préparer l’email →</button>
        <button className="btn ghost" type="button" onClick={copyEmail}>{copied ? "Adresse copiée ✓" : "Copier l’adresse email"}</button>
      </div>
      <p className="contact-privacy-note">Destination : <strong>{contactEmail}</strong> · aucune inscription · aucun intermédiaire.</p>
    </form>
  );
}
