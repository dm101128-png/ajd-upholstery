import type { QuotePayload } from "./quote-validation.ts";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sends the quote notification email via Resend (https://resend.com), a
 * plain HTTP API that works from the Cloudflare Workers runtime (no SMTP/TCP
 * sockets required). Returns false (never throws) if the secret isn't
 * configured or the request fails — callers treat email as best-effort
 * on top of the D1 record, which is the durable source of truth.
 */
export async function sendQuoteEmail(env: Cloudflare.Env, payload: QuotePayload): Promise<{ sent: boolean; reason?: string }> {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false, reason: "RESEND_API_KEY is not configured" };
  }

  const to = env.QUOTE_NOTIFY_EMAIL || "ajd.david.upholstery@gmail.com";
  const from = env.QUOTE_FROM_EMAIL || "AJD Upholstery Website <onboarding@resend.dev>";

  const vehicle = [payload.vehicleYear, payload.vehicleMake, payload.vehicleModel].filter(Boolean).join(" ");
  const html = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ""}
    ${payload.email ? `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>` : ""}
    <p><strong>Vehicle:</strong> ${escapeHtml(vehicle)}</p>
    <p><strong>Type of work:</strong> ${escapeHtml(payload.workType)}</p>
    <p><strong>Preferred contact method:</strong> ${escapeHtml(payload.contactMethod)}</p>
    <p><strong>Description:</strong><br>${escapeHtml(payload.description).replace(/\n/g, "<br>")}</p>
  `.trim();

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New quote request from ${payload.name}`,
        html,
        reply_to: payload.email || undefined,
      }),
    });

    if (!response.ok) {
      return { sent: false, reason: `Resend responded with ${response.status}` };
    }
    return { sent: true };
  } catch {
    return { sent: false, reason: "network error contacting Resend" };
  }
}
