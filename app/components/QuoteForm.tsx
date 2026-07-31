"use client";

import { useState, type FormEvent } from "react";
import { businessInfo } from "../lib/business-info";

type Status = "idle" | "submitting" | "success" | "error";

const contactMethods = ["Email", "Phone", "Either"] as const;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const year = String(data.get("year") ?? "").trim();
    const make = String(data.get("make") ?? "").trim();
    const model = String(data.get("model") ?? "").trim();
    const workType = String(data.get("workType") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const contactMethod = String(data.get("contactMethod") ?? "");

    if (!name) {
      setError("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!phone && !email) {
      setError("Please provide a phone number or an email address.");
      setStatus("error");
      return;
    }
    if (email && !isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!workType) {
      setError("Please let us know the type of upholstery work you need.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");

    const lines = [
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      `Vehicle: ${[year, make, model].filter(Boolean).join(" ") || "(not provided)"}`,
      `Type of work: ${workType}`,
      contactMethod ? `Preferred contact method: ${contactMethod}` : null,
      "",
      "Project description:",
      description || "(not provided)",
    ].filter((line): line is string => line !== null);

    const subject = `Quote request from ${name}`;
    const mailto = `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    // No server-side quote endpoint exists yet in this project, so the
    // request is handed off to the customer's own email app to send —
    // same mechanism the rest of the site already uses for contact links.
    window.location.href = mailto;
    setStatus("success");
  }

  return (
    <div className="quoteFormWrap">
      {status === "success" ? (
        <div className="formSuccess" role="status">
          <p>Your quote request is ready to send. Check your email app to finish sending it to AJD Upholstery.</p>
          <button type="button" className="textLink" onClick={() => setStatus("idle")}>Fill out another request</button>
        </div>
      ) : (
        <form className="quoteForm" onSubmit={handleSubmit} noValidate>
          {error && <p className="formError" role="alert">{error}</p>}

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
              <label htmlFor="year">Vehicle year</label>
              <input id="year" name="year" type="text" inputMode="numeric" placeholder="e.g. 2019" />
            </div>
            <div className="formRow">
              <label htmlFor="make">Vehicle make</label>
              <input id="make" name="make" type="text" placeholder="e.g. Ford" />
            </div>
            <div className="formRow">
              <label htmlFor="model">Vehicle model</label>
              <input id="model" name="model" type="text" placeholder="e.g. F-150" />
            </div>
          </div>

          <div className="formRow">
            <label htmlFor="workType">Type of upholstery work needed</label>
            <input id="workType" name="workType" type="text" placeholder="e.g. Seat repair, Katzkin leather, headliner" required />
          </div>

          <div className="formRow">
            <label htmlFor="description">Project description</label>
            <textarea id="description" name="description" rows={5} placeholder="Tell us about your vehicle and what you'd like done." />
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
