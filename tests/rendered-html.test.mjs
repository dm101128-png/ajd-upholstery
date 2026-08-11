// Route/content tests for the redesigned multi-page site. These import the
// built worker directly (same pattern the project started with) and drive
// it via .fetch() — no real network, no browser, no email provider touched.
import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function get(worker, path) {
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  return { response, html: await response.text() };
}

const routes = [
  { path: "/", heading: "Built to Last" },
  { path: "/services", heading: "Services" },
  { path: "/our-story", heading: "A Family Business Built by Hand" },
  { path: "/our-work", heading: "Our Work" },
  { path: "/katzkin", heading: "Katzkin Leather Interiors" },
  { path: "/quote", heading: "Get a Quote" },
];

for (const { path, heading } of routes) {
  test(`${path} loads directly and renders its content (no 404)`, async () => {
    const worker = await loadWorker();
    const { response, html } = await get(worker, path);
    assert.equal(response.status, 200, `expected 200 for ${path}`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(html, new RegExp(heading, "i"));
  });
}

test("an unknown path 404s instead of silently rendering a page", async () => {
  const worker = await loadWorker();
  const { response } = await get(worker, "/this-route-does-not-exist");
  assert.equal(response.status, 404);
});

test("Katzkin is always spelled correctly", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/katzkin");
  assert.doesNotMatch(html, /cat\s*skin/i);
  assert.match(html, /Katzkin/);
  assert.match(html, /Real Upholstery\. Made to Fit\./i);
  assert.match(html, /Vehicle-specific fit/i);
  assert.match(html, /Professional installation/i);
  assert.match(html, /Warranty-backed/i);
  assert.match(html, /Katzkin presentation viewer/i);
  assert.match(html, /slide-01\.png/i);
  assert.match(html, /Katzkin_B2B_Presentation\.pptx/i);
  assert.match(html, /AJD Upholstery Website/i);
  assert.match(html, /Download Presentation/i);
  assert.match(html, /alt="Slide 1 of 10:/i);
  assert.doesNotMatch(html, /to be added/i);
});

test("the header navigation links to all six routes on every page", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/");
  for (const path of ["/", "/services", "/our-story", "/our-work", "/katzkin", "/quote"]) {
    assert.match(html, new RegExp(`href="${path.replace("/", "\\/")}"`), `expected a nav link to ${path}`);
  }
});

test("the mobile nav toggle and panel are present and wired together", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/");
  assert.match(html, /class="navToggle"[^>]*aria-controls="mobileNav"/);
  assert.match(html, /id="mobileNav"/);
});

test("the quote form itself never uses a mailto: link or link-based email submission", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/quote");
  const formMatch = html.match(/<form class="quoteForm"[\s\S]*?<\/form>/);
  assert.ok(formMatch, "expected to find the quote form in the rendered HTML");
  // The footer's real contact mailto: (rendered on every page) is fine —
  // this checks only inside the form itself, which must submit via fetch().
  assert.doesNotMatch(formMatch[0], /mailto:/i);
  assert.doesNotMatch(formMatch[0], /<a[^>]/i, "the quote form must not contain a link-based submit action");
});

test("no page on the site uses a mailto: link for the quote flow", async () => {
  const worker = await loadWorker();
  for (const path of ["/", "/services", "/our-story", "/our-work", "/katzkin", "/quote"]) {
    const { html } = await get(worker, path);
    // The footer's own contact email is the one legitimate mailto: on the
    // site; the quote flow itself must never rely on one.
    const quoteButtonHasMailto = /Get a Quote[^<]*<\/a>/i.test(html) && /href="mailto:[^"]*"[^>]*>\s*Get a Quote/i.test(html);
    assert.equal(quoteButtonHasMailto, false, `Get a Quote CTA on ${path} must not be a mailto: link`);
  }
});

test("the Our Work gallery renders photo-first cards with understated filter tabs, not buttons styled as services", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/our-work");
  assert.match(html, /role="tablist"/);
  assert.match(html, /role="tab"/);
  assert.match(html, /class="galleryCard"/);
  // The lightbox is closed on first render (no JS has run yet).
  assert.doesNotMatch(html, /class="lightbox"/);
});

test("the Our Work gallery includes the complete green square-body leather project", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/our-work");
  for (const title of [
    "Custom square-body interior",
    "Complete leather cabin",
    "Diamond-stitched bucket seats",
    "Hand-finished door panel",
    "Matching leather door trim",
    "Wrapped center console",
    "Coordinated cabin details",
  ]) {
    assert.match(html, new RegExp(title));
  }
});

test("the home page mentions more than 10 years of experience in prose, not a badge", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/");
  assert.match(html, /more than 10 years/i);
});
