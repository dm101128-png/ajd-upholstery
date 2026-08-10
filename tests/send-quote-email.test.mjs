import assert from "node:assert/strict";
import test from "node:test";
import { sendQuoteEmail } from "../app/lib/send-quote-email.ts";

const credentials = {
  GMAIL_CLIENT_ID: "test-client-id",
  GMAIL_CLIENT_SECRET: "test-client-secret",
  GMAIL_REFRESH_TOKEN: "test-refresh-token",
};

const payload = {
  name: "Jane Doe",
  phone: "8175551234",
  email: "jane@example.com",
  vehicleYear: "2019",
  vehicleMake: "Ford",
  vehicleModel: "F-150",
  workType: "Seat repair",
  description: "Torn driver seat seam",
  contactMethod: "Either",
  companyWebsite: "",
};

function decodeRaw(raw) {
  const padded = raw.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((raw.length + 3) % 4);
  return Buffer.from(padded, "base64").toString("utf8");
}

test("sendQuoteEmail sends through Gmail as AJD to both required inboxes", async () => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    if (calls.length === 1) {
      return Response.json({ access_token: "test-access-token" });
    }
    return Response.json({ id: "message-id" });
  };

  try {
    const result = await sendQuoteEmail(credentials, payload);
    assert.equal(result.sent, true);
    assert.equal(calls[0].url, "https://oauth2.googleapis.com/token");
    assert.equal(calls[0].init.body.get("client_secret"), "test-client-secret");
    assert.equal(calls[1].url, "https://gmail.googleapis.com/gmail/v1/users/me/messages/send");
    assert.equal(calls[1].init.headers.Authorization, "Bearer test-access-token");

    const message = decodeRaw(JSON.parse(calls[1].init.body).raw);
    assert.match(message, /From: AJD Upholstery Website <ajd\.david\.upholstery@gmail\.com>/);
    assert.match(message, /To: ajd\.david\.upholstery@gmail\.com, ajd\.upholstery@gmail\.com/);
    assert.match(message, /Reply-To: jane@example\.com/);
    assert.match(message, /Torn driver seat seam/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("configured recipients are retained without duplicating required inboxes", async () => {
  const originalFetch = globalThis.fetch;
  let message = "";
  let call = 0;
  globalThis.fetch = async (_url, init) => {
    call += 1;
    if (call === 1) return Response.json({ access_token: "test-access-token" });
    message = decodeRaw(JSON.parse(init.body).raw);
    return Response.json({ id: "message-id" });
  };

  try {
    await sendQuoteEmail(
      { ...credentials, QUOTE_NOTIFY_EMAIL: "quotes@example.com, ajd.david.upholstery@gmail.com" },
      payload,
    );
    assert.match(message, /To: quotes@example\.com, ajd\.david\.upholstery@gmail\.com, ajd\.upholstery@gmail\.com/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Gmail failures report safe status and diagnostics without exposing credentials", async () => {
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const logs = [];
  globalThis.fetch = async () => Response.json({ error: "invalid_grant", error_description: "Refresh token rejected" }, { status: 400 });
  console.error = (...args) => logs.push(args);

  try {
    const result = await sendQuoteEmail(credentials, payload);
    assert.equal(result.sent, false);
    assert.match(result.reason, /400.*Refresh token rejected/);
    const logged = JSON.stringify(logs);
    assert.match(logged, /token/);
    assert.match(logged, /400/);
    assert.match(logged, /Refresh token rejected/);
    assert.doesNotMatch(logged, /test-client-secret|test-refresh-token/);
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalError;
  }
});

test("missing Gmail credentials fails safely without making a request", async () => {
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return Response.json({});
  };

  try {
    const result = await sendQuoteEmail({}, payload);
    assert.deepEqual(result, { sent: false, reason: "Gmail API credentials are not configured" });
    assert.equal(called, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
