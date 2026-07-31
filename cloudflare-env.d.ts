// Ambient Cloudflare Workers runtime types (Fetcher, D1Database, ExecutionContext,
// the "cloudflare:workers" module, etc.) for editors and `tsc --noEmit`.
// Does not affect the Vite/vinext build, which resolves these separately.
/// <reference types="@cloudflare/workers-types" />

// Augments `Cloudflare.Env` — the type of `env` from the `cloudflare:workers`
// module (used by db/index.ts and the API routes). This is the declaration
// pattern @cloudflare/workers-types itself documents for project-specific
// bindings. Keep this in sync with worker/index.ts's bindings and wrangler.jsonc.
declare namespace Cloudflare {
  interface Env {
    ASSETS: Fetcher;
    DB: D1Database;
    IMAGES: {
      input(stream: ReadableStream): {
        transform(options: Record<string, unknown>): {
          output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
        };
      };
    };
    // Secret: set via `wrangler secret put RESEND_API_KEY` (never committed).
    RESEND_API_KEY?: string;
    // Optional overrides; see app/api/quote/route.ts.
    QUOTE_NOTIFY_EMAIL?: string;
    QUOTE_FROM_EMAIL?: string;
  }
}
