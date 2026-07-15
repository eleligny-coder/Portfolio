interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function clean(value: unknown, fallback = "Non renseigné") {
  if (typeof value !== "string") return fallback;
  return value.trim().replace(/[<>]/g, "").slice(0, 4_000) || fallback;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 20_000) return json({ ok: false, message: "Requête trop volumineuse." }, 413);

    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot antispam : les visiteurs réels ne remplissent jamais ce champ.
    if (typeof body.website === "string" && body.website.length > 0) return json({ ok: true });

    const name = clean(body.name, "");
    const email = clean(body.email, "").toLowerCase();
    const message = clean(body.message, "");
    const requestType = clean(body.requestType, "Demande générale");
    const consent = body.consent === "accepted";

    if (name.length < 2 || name.length > 120 || !emailPattern.test(email) || message.length < 30 || !consent) {
      return json({ ok: false, message: "Merci de vérifier les champs obligatoires." }, 400);
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
      return json(
        { ok: false, message: "Le formulaire n’est pas encore configuré. Utilisez l’adresse email affichée sur le site." },
        503,
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio — ${requestType} — ${name}`,
        html: [
          "<h1>Nouvelle demande depuis le portfolio</h1>",
          `<p><strong>Nom :</strong> ${escapeHtml(name)}</p>`,
          `<p><strong>Email :</strong> ${escapeHtml(email)}</p>`,
          `<p><strong>Organisation :</strong> ${escapeHtml(clean(body.company))}</p>`,
          `<p><strong>Type :</strong> ${escapeHtml(requestType)}</p>`,
          `<p><strong>Budget :</strong> ${escapeHtml(clean(body.budget))}</p>`,
          `<p><strong>Échéance :</strong> ${escapeHtml(clean(body.deadline))}</p>`,
          "<hr>",
          `<p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
        ].join(""),
      }),
    });

    if (!response.ok) {
      console.error("Resend error", response.status, await response.text());
      return json({ ok: false, message: "L’envoi n’a pas abouti. Utilisez l’adresse email affichée sur le site." }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error("Contact function error", error);
    return json({ ok: false, message: "Requête invalide." }, 400);
  }
};
