import { NextResponse } from "next/server";
import { site } from "@/data/site";

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function clean(v: unknown, max: number) { return typeof v === "string" ? v.trim().slice(0, max) : ""; }
function validEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

function getIp(req: Request) {
  return req.headers.get("cf-connecting-ip")
    ?? req.headers.get("x-real-ip")
    ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
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

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "unknown") body.set("remoteip", ip);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body, cache: "no-store" });
  if (!response.ok) return false;
  const data = await response.json() as { success?: boolean };
  return data.success === true;
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req);
    if (!allowRequest(ip)) {
      return NextResponse.json({ message: "Trop de tentatives. Réessayez dans quelques minutes." }, { status: 429 });
    }

    const b = await req.json();
    const d = {
      name: clean(b.name, 100),
      email: clean(b.email, 180),
      profileType: clean(b.profileType, 100),
      company: clean(b.company, 120),
      requestType: clean(b.requestType, 100),
      budget: clean(b.budget, 80),
      deadline: clean(b.deadline, 120),
      stack: clean(b.stack, 300),
      message: clean(b.message, 5000),
      website: clean(b.website, 200),
      turnstile: clean(b["cf-turnstile-response"], 2048),
    };

    if (d.website) return NextResponse.json({ message: "Message reçu." }, { status: 202 });
    if (d.name.length < 2 || !validEmail(d.email) || d.profileType.length < 2 || d.requestType.length < 2 || d.message.length < 20) {
      return NextResponse.json({ message: "Vérifiez les champs du formulaire." }, { status: 400 });
    }

    const turnstileOk = await verifyTurnstile(d.turnstile, ip);
    if (!turnstileOk) return NextResponse.json({ message: "Vérification anti-spam requise." }, { status: 403 });

    const key = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL ?? site.email;
    if (!key || !from) return NextResponse.json({ message: `Le formulaire n’est pas encore connecté. Écrivez à ${site.email}.` }, { status: 503 });

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `[Portfolio] ${d.requestType} — ${d.name}`,
        text: [
          `Nom : ${d.name}`,
          `Email : ${d.email}`,
          `Profil : ${d.profileType}`,
          `Organisation : ${d.company || "Non renseignée"}`,
          `Besoin : ${d.requestType}`,
          `Budget / rémunération : ${d.budget || "À définir"}`,
          `Échéance : ${d.deadline || "Non renseignée"}`,
          `Stack / outils : ${d.stack || "Non renseignés"}`,
          "",
          d.message,
        ].join("\n"),
      }),
    });

    if (!r.ok) return NextResponse.json({ message: "L’envoi a échoué. Utilisez l’adresse email directe." }, { status: 502 });
    return NextResponse.json({ message: "Message envoyé." });
  } catch {
    return NextResponse.json({ message: "Une erreur est survenue." }, { status: 500 });
  }
}
