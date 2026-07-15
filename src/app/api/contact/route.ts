import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (typeof body.website === "string" && body.website.length > 0) return NextResponse.json({ ok: true });

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const consent = body.consent === "accepted";

    if (name.length < 2 || !emailPattern.test(email) || message.length < 30 || !consent) {
      return NextResponse.json({ ok: false, message: "Merci de vérifier les champs obligatoires." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
    if (!apiKey || !to) {
      return NextResponse.json({ ok: false, message: "Le formulaire n’est pas encore configuré. Utilisez l’adresse email indiquée sur la page." }, { status: 503 });
    }

    const safe = (value: unknown) => typeof value === "string" ? value.replace(/[<>]/g, "") : "Non renseigné";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio — ${safe(body.requestType)} — ${name}`,
        html: `<h1>Nouvelle demande portfolio</h1><p><strong>Nom :</strong> ${safe(name)}</p><p><strong>Email :</strong> ${safe(email)}</p><p><strong>Organisation :</strong> ${safe(body.company)}</p><p><strong>Type :</strong> ${safe(body.requestType)}</p><p><strong>Budget :</strong> ${safe(body.budget)}</p><p><strong>Échéance :</strong> ${safe(body.deadline)}</p><hr><p>${safe(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });

    if (!response.ok) return NextResponse.json({ ok: false, message: "L’envoi n’a pas abouti. Utilisez l’adresse email indiquée sur la page." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Requête invalide." }, { status: 400 });
  }
}
