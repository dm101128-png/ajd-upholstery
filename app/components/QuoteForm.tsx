"use client";

import { useRef, useState, type FormEvent } from "react";
import { parseQuotePayload, validateQuotePayload } from "../lib/quote-validation";

type Status = "idle" | "submitting" | "success" | "error";

const contactMethods = ["Email", "Phone", "Either"] as const;

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = parseQuotePayload({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      vehicleYear: data.get("vehicleYear"),
      vehicleMake: data.get("vehicleMake"),
      vehicleModel: data.get("vehicleModel"),
      workType: data.get("workType"),
      description: data.get("description"),
      contactMethod: data.get("contactMethod"),
      companyWebsite: data.get("companyWebsite"),
    });

    const validationError = validateQuotePayload(payload);
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    submittingRef.current = true;
    setError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let json: { success?: boolean; error?: string } = {};
      try {
        json = await response.json();
      } catch {
        // Non-JSON response — fall through to the generic error below.
      }

      if (response.ok && json.success) {
        setStatus("success");
      } else if (response.status === 429) {
        setError(json.error ?? "You already submitted a request a moment ago. We'll be in touch shortly.");
        setStatus("error");
      } else {
        setError(json.error ?? "We couldn't send your request right now. Please try again in a moment.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <div className="quoteFormWrap">
      {status === "success" ? (
        <div className="formSuccess" role="status">
          <p>Your request has been received.</p>
        </div>
      ) : (
        <form className="quoteForm" onSubmit={handleSubmit} noValidate>
          {error && <p className="formError" role="alert">{error}</p>}

          {/* Honeypot — hidden from real visitors, left empty by them, often filled by bots. */}
          <div className="honeypotField" aria-hidden="true">
            <label htmlFor="companyWebsite">Leave this field blank</label>
            <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="formRow">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="formGrid">
            <div className="formRow">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="formRow">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" />
            </div>
          </div>

          <div className="formGrid formGridThree">
            <div className="formRow">
              <label htmlFor="vehicleYear">Vehicle year</label>
              <input id="vehicleYear" name="vehicleYear" type="text" inputMode="numeric" placeholder="e.g. 2019" required />
            </div>
            <div className="formRow">
              <label htmlFor="vehicleMake">Vehicle make</label>
              <input id="vehicleMake" name="vehicleMake" type="text" placeholder="e.g. Ford" required />
            </div>
            <div className="formRow">
              <label htmlFor="vehicleModel">Vehicle model</label>
              <input id="vehicleModel" name="vehicleModel" type="text" placeholder="e.g. F-150" required />
            </div>
          </div>

          <div className="formRow">
            <label htmlFor="workType">Type of upholstery work needed</label>
            <input id="workType" name="workType" type="text" placeholder="e.g. Seat repair, Katzkin leather, headliner" required />
          </div>

          <div className="formRow">
            <label htmlFor="description">Project description</label>
            <textarea id="description" name="description" rows={5} placeholder="Tell us about your vehicle and what you'd like done." required />
          </div>

          <fieldset className="formRow contactMethodRow">
            <legend>Preferred contact method</legend>
            {contactMethods.map((method) => (
              <label key={method} className="radioOption">
                <input type="radio" name="contactMethod" value={method} defaultChecked={method === "Either"} />
                {method}
              </label>
            ))}
          </fieldset>

          <button type="submit" className="button primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Quote Request"}
          </button>
        </form>
      )}
    </div>
  );
}
