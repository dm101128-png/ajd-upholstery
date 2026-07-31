// Pure unit tests for the quote submission logic. Deliberately import the
// .ts sources directly (via --experimental-strip-types) rather than the
// built worker: this logic has no Cloudflare/D1 dependency, so it runs in
// plain Node without needing the Workers runtime. External email delivery
// is always mocked here — these tests never contact a real email provider.
import assert from "node:assert/strict";
import test from "node:test";
import { handleQuoteSubmission } from "../app/api/quote/handler.ts";
import { createInMemoryQuoteRepository } from "../app/lib/quote-repository.ts";
import { parseQuotePayload, validateQuotePayload, isValidEmail } from "../app/lib/quote-validation.ts";

const validPayload = {
  name: "Jane Doe",
  phone: "8175551234",
  email: "",
  vehicleYear: "2019",
  vehicleMake: "Ford",
  vehicleModel: "F-150",
  workType: "Seat repair",
  description: "Torn driver seat seam",
  contactMethod: "Either",
  companyWebsite: "",
};

function mockSendEmail(sent, reason) {
  return async () => ({ sent, reason });
}

test("validateQuotePayload requires a name", () => {
  const error = validateQuotePayload(parseQuotePayload({ ...validPayload, name: "" }));
  assert.match(error, /name/i);
});

test("validateQuotePayload requires phone or email", () => {
  const error = validateQuotePayload(parseQuotePayload({ ...validPayload, phone: "", email: "" }));
  assert.match(error, /phone number or an email/i);
});

test("validateQuotePayload rejects a malformed email", () => {
  assert.equal(isValidEmail("not-an-email"), false);
  const error = validateQuotePayload(parseQuotePayload({ ...validPayload, phone: "", email: "not-an-email" }));
  assert.match(error, /valid email/i);
});

test("validateQuotePayload requires full vehicle info", () => {
  const error = validateQuotePayload(parseQuotePayload({ ...validPayload, vehicleMake: "" }));
  assert.match(error, /year, make, and model/i);
});

test("validateQuotePayload requires work type and description", () => {
  assert.match(validateQuotePayload(parseQuotePayload({ ...validPayload, workType: "" })), /type of upholstery/i);
  assert.match(validateQuotePayload(parseQuotePayload({ ...validPayload, description: "" })), /description/i);
});

test("validateQuotePayload accepts a fully valid payload", () => {
  assert.equal(validateQuotePayload(parseQuotePayload(validPayload)), null);
});

test("handleQuoteSubmission: successful submission stores the quote and marks it emailed", async () => {
  const repository = createInMemoryQuoteRepository();
  const result = await handleQuoteSubmission(validPayload, { repository, sendEmail: mockSendEmail(true) });

  assert.equal(result.status, 201);
  assert.equal(result.body.success, true);
  assert.equal(repository.rows.length, 1);
  assert.equal(repository.rows[0].status, "emailed");
});

test("handleQuoteSubmission: quote is still stored even if the notification email fails", async () => {
  const repository = createInMemoryQuoteRepository();
  const result = await handleQuoteSubmission(validPayload, {
    repository,
    sendEmail: mockSendEmail(false, "provider down"),
  });

  // The customer still gets a success response — the D1 row is the durable
  // record, so the request was not silently discarded.
  assert.equal(result.status, 201);
  assert.equal(result.body.success, true);
  assert.equal(repository.rows.length, 1);
  assert.equal(repository.rows[0].status, "email_failed");
});

test("handleQuoteSubmission: fails honestly when neither storage nor email succeed", async () => {
  const result = await handleQuoteSubmission(validPayload, {
    repository: null,
    sendEmail: mockSendEmail(false, "no provider configured"),
  });

  assert.equal(result.status, 500);
  assert.ok(result.body.error);
  assert.equal(result.body.success, undefined);
});

test("handleQuoteSubmission: email-only success when D1 is unavailable but email works", async () => {
  const result = await handleQuoteSubmission(validPayload, {
    repository: null,
    sendEmail: mockSendEmail(true),
  });

  assert.equal(result.status, 201);
  assert.equal(result.body.success, true);
  assert.equal(result.body.id, null);
});

test("handleQuoteSubmission: rejects invalid input before touching storage or email", async () => {
  const repository = createInMemoryQuoteRepository();
  let emailCalled = false;
  const result = await handleQuoteSubmission(
    { ...validPayload, name: "" },
    { repository, sendEmail: async () => { emailCalled = true; return { sent: true }; } },
  );

  assert.equal(result.status, 400);
  assert.equal(repository.rows.length, 0);
  assert.equal(emailCalled, false);
});

test("handleQuoteSubmission: honeypot submissions are silently no-op", async () => {
  const repository = createInMemoryQuoteRepository();
  let emailCalled = false;
  const result = await handleQuoteSubmission(
    { ...validPayload, companyWebsite: "http://spam.example" },
    { repository, sendEmail: async () => { emailCalled = true; return { sent: true }; } },
  );

  assert.equal(result.status, 201);
  assert.equal(result.body.success, true);
  assert.equal(repository.rows.length, 0, "honeypot submissions must not be stored");
  assert.equal(emailCalled, false, "honeypot submissions must not trigger an email");
});

test("handleQuoteSubmission: rejects a duplicate submission within the rate-limit window", async () => {
  const repository = createInMemoryQuoteRepository();
  const first = await handleQuoteSubmission(validPayload, { repository, sendEmail: mockSendEmail(true) });
  assert.equal(first.status, 201);

  const second = await handleQuoteSubmission(validPayload, { repository, sendEmail: mockSendEmail(true) });
  assert.equal(second.status, 429);
  assert.equal(repository.rows.length, 1, "the duplicate must not create a second row");
});

test("handleQuoteSubmission: a different contact is not blocked by another customer's rate limit", async () => {
  const repository = createInMemoryQuoteRepository();
  await handleQuoteSubmission(validPayload, { repository, sendEmail: mockSendEmail(true) });

  const other = await handleQuoteSubmission(
    { ...validPayload, name: "Other Customer", phone: "8005551212" },
    { repository, sendEmail: mockSendEmail(true) },
  );
  assert.equal(other.status, 201);
  assert.equal(repository.rows.length, 2);
});
