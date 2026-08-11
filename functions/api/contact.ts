type Env = {
  TURNSTILE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
};

type Context = {
  request: Request;
  env: Env;
};

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function getIp(request: Request) {
  return request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-real-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
}

function allowRequest(ip: string) {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || current.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  buckets.set(ip, current);
  return true;
}

async function verifyTurnstile(token: string, ip: string, secret?: string) {
  if (!secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "unknown") body.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  if (!response.ok) return false;

  const data = await response.json() as { success?: boolean };
  return data.success === true;
}

export async function onRequestPost({ request, env }: Context) {
  try {
    const ip = getIp(request);
    if (!allowRequest(ip)) {
      return json({ message: "Trop de tentatives. Réessayez dans quelques minutes." }, 429);
    }

    const body = await request.json() as Record<string, unknown>;
    const data = {
      name: clean(body.name, 100),
      email: clean(body.email, 180),
      profileType: clean(body.profileType, 100),
      company: clean(body.company, 120),
      requestType: clean(body.requestType, 100),
      budget: clean(body.budget, 80),
      deadline: clean(body.deadline, 120),
      stack: clean(body.stack, 300),
      message: clean(body.message, 5000),
      website: clean(body.website, 200),
      turnstile: clean(body["cf-turnstile-response"], 2048),
    };

    if (data.website) return json({ message: "Message reçu." }, 202);

    if (
      data.name.length < 2
      || !validEmail(data.email)
      || data.profileType.length < 2
      || data.requestType.length < 2
      || data.message.length < 20
    ) {
      return json({ message: "Vérifiez les champs du formulaire." }, 400);
    }

    const turnstileOk = await verifyTurnstile(data.turnstile, ip, env.TURNSTILE_SECRET_KEY);
    if (!turnstileOk) {
      return json({ message: "Vérification anti-spam requise." }, 403);
    }

    const apiKey = env.RESEND_API_KEY;
    const from = env.CONTACT_FROM_EMAIL;
    const to = env.CONTACT_TO_EMAIL ?? "e.leligny@gmail.com";

    if (!apiKey || !from) {
      return json({ message: "Le formulaire n’est pas encore connecté. Utilisez l’adresse email directe." }, 503);
    }

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `[Portfolio] ${data.requestType} — ${data.name}`,
        text: [
          `Nom : ${data.name}`,
          `Email : ${data.email}`,
          `Profil : ${data.profileType}`,
          `Organisation : ${data.company || "Non renseignée"}`,
          `Besoin : ${data.requestType}`,
          `Budget / rémunération : ${data.budget || "À définir"}`,
          `Échéance : ${data.deadline || "Non renseignée"}`,
          `Stack / outils : ${data.stack || "Non renseignés"}`,
          "",
          data.message,
        ].join("\n"),
      }),
    });

    if (!resend.ok) {
      return json({ message: "L’envoi a échoué. Utilisez l’adresse email directe." }, 502);
    }

    return json({ message: "Message envoyé." });
  } catch {
    return json({ message: "Une erreur est survenue." }, 500);
  }
}
