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

test("Our Work starts with four category buttons and no mixed project grid", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/our-work");
  assert.equal([...html.matchAll(/class="galleryCategory"/g)].length, 4);
  assert.match(html, /Cars/);
  assert.match(html, /Boats/);
  assert.match(html, /Big Trucks/);
  assert.match(html, /Roof &amp; Sunroof Repair/);
  assert.doesNotMatch(html, /class="galleryCard"/);
  assert.doesNotMatch(html, /class="lightbox"/);
});

test("the Bronco project opens its three supplied seat photos in order", async () => {
  const { readFile } = await import("node:fs/promises");
  const { stripTypeScriptTypes } = await import("node:module");
  const source = await readFile(new URL("../app/lib/gallery-items.ts", import.meta.url), "utf8");
  const { galleryItems } = await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString("base64")}`);
  const bronco = galleryItems.find((item) => item.title === "Bronco");
  assert.equal(bronco.category, "Big Trucks");
  assert.equal(bronco.src, "/our-work/bronco/cover.jpg");
  assert.deepEqual(bronco.photos.map((photo) => photo.src), [
    "/our-work/bronco/seats.jpg",
    "/our-work/bronco/embroidery.jpg",
    "/our-work/bronco/complete-seat-set.jpg",
  ]);
  for (const photo of [bronco, ...bronco.photos]) {
    const bytes = await readFile(new URL(`../public${photo.src}`, import.meta.url));
    assert.ok(bytes.length > 0, `missing photo: ${photo.src}`);
  }
});

test("project groups retain all seven square-body photos and the existing car projects", async () => {
  const { readFile } = await import("node:fs/promises");
  const { stripTypeScriptTypes } = await import("node:module");
  const source = await readFile(new URL("../app/lib/gallery-items.ts", import.meta.url), "utf8");
  const { galleryProjects } = await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString("base64")}`);
  assert.deepEqual(galleryProjects.filter(p => p.category === "Cars").map(p => p.title), ["Volkswagen Beetle"]);
  assert.equal(galleryProjects.find(p => p.title === "Green Square-Body Truck").photos.length, 7);
  for (const project of galleryProjects) {
    for (const photo of [project, ...(project.photos || [])]) {
      assert.ok((await readFile(new URL(`../public${photo.src}`, import.meta.url))).length);
    }
  }
});

test("the home page mentions more than 10 years of experience in prose, not a badge", async () => {
  const worker = await loadWorker();
  const { html } = await get(worker, "/");
  assert.match(html, /more than 10 years/i);
});
