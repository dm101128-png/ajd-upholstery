import assert from "node:assert/strict";
import test from "node:test";
import { sendQuoteEmail } from "../app/lib/send-quote-email.ts";

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

test("sendQuoteEmail notifies both AJD inboxes", async () => {
  const originalFetch = globalThis.fetch;
  let requestBody;
  globalThis.fetch = async (_url, init) => {
    requestBody = JSON.parse(init.body);
    return new Response(null, { status: 200 });
  };

  try {
    const result = await sendQuoteEmail({ RESEND_API_KEY: "test-key" }, payload);
    assert.equal(result.sent, true);
    assert.deepEqual(requestBody.to, [
      "ajd.david.upholstery@gmail.com",
      "ajd.upholstery@gmail.com",
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("configured recipients are retained without duplicating required inboxes", async () => {
  const originalFetch = globalThis.fetch;
  let requestBody;
  globalThis.fetch = async (_url, init) => {
    requestBody = JSON.parse(init.body);
    return new Response(null, { status: 200 });
  };

  try {
    await sendQuoteEmail(
      { RESEND_API_KEY: "test-key", QUOTE_NOTIFY_EMAIL: "quotes@example.com, ajd.david.upholstery@gmail.com" },
      payload,
    );
    assert.deepEqual(requestBody.to, [
      "quotes@example.com",
      "ajd.david.upholstery@gmail.com",
      "ajd.upholstery@gmail.com",
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
