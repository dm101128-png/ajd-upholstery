import type { QuotePayload } from "./quote-validation.ts";

const GMAIL_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GMAIL_SEND_URL = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";
const SENDER = "AJD Upholstery Website <ajd.david.upholstery@gmail.com>";
const REQUIRED_RECIPIENTS = [
  "ajd.david.upholstery@gmail.com",
  "ajd.upholstery@gmail.com",
];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function encodeBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function safeProviderError(response: Response): Promise<string> {
  try {
    const value = await response.json() as {
      error?: string | { message?: string; status?: string };
      error_description?: string;
    };
    const detail = typeof value.error === "string"
      ? value.error_description || value.error
      : value.error?.message || value.error?.status;
    return detail ? detail.slice(0, 300) : "provider returned no diagnostic message";
  } catch {
    return "provider returned a non-JSON error response";
  }
}

function logProviderFailure(stage: "token" | "send", status: number, detail: string): void {
  console.error("[quote-email] Gmail API failure", { stage, status, detail });
}

/**
 * Sends the quote notification through the Gmail API as the AJD Gmail account.
 * Email remains best-effort on top of the durable D1 quote record.
 */
export async function sendQuoteEmail(env: Cloudflare.Env, payload: QuotePayload): Promise<{ sent: boolean; reason?: string }> {
  const { GMAIL_CLIENT_ID: clientId, GMAIL_CLIENT_SECRET: clientSecret, GMAIL_REFRESH_TOKEN: refreshToken } = env;
  if (!clientId || !clientSecret || !refreshToken) {
    return { sent: false, reason: "Gmail API credentials are not configured" };
  }

  const to = Array.from(new Set([
    ...(env.QUOTE_NOTIFY_EMAIL || "").split(","),
    ...REQUIRED_RECIPIENTS,
  ].map((email) => email.trim()).filter(Boolean)));

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
    const tokenResponse = await fetch(GMAIL_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    if (!tokenResponse.ok) {
      const detail = await safeProviderError(tokenResponse);
      logProviderFailure("token", tokenResponse.status, detail);
      return { sent: false, reason: `Gmail token request failed (${tokenResponse.status}): ${detail}` };
    }

    const token = await tokenResponse.json() as { access_token?: string };
    if (!token.access_token) {
      const detail = "token response did not include an access token";
      logProviderFailure("token", tokenResponse.status, detail);
      return { sent: false, reason: detail };
    }

    const headers = [
      `From: ${SENDER}`,
      `To: ${to.join(", ")}`,
      ...(payload.email ? [`Reply-To: ${payload.email}`] : []),
      `Subject: New quote request from ${payload.name.replace(/[\r\n]+/g, " ")}`,
      "MIME-Version: 1.0",
      'Content-Type: text/html; charset="UTF-8"',
      "Content-Transfer-Encoding: 8bit",
    ];

    const sendResponse = await fetch(GMAIL_SEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: encodeBase64Url(`${headers.join("\r\n")}\r\n\r\n${html}`) }),
    });

    if (!sendResponse.ok) {
      const detail = await safeProviderError(sendResponse);
      logProviderFailure("send", sendResponse.status, detail);
      return { sent: false, reason: `Gmail send failed (${sendResponse.status}): ${detail}` };
    }

    return { sent: true };
  } catch (error) {
    const detail = error instanceof Error ? error.message.slice(0, 300) : "unknown network error";
    console.error("[quote-email] Gmail API request failed", { detail });
    return { sent: false, reason: "network error contacting Gmail API" };
  }
}
