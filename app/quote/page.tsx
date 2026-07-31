import type { Metadata } from "next";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote | AJD Upholstery",
  description: "Request a quote from AJD Upholstery for automotive upholstery, repair, restoration, or custom interior work.",
};

export default function QuotePage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">Tell us about your vehicle</p>
        <h1>Get a Quote</h1>
        <p className="pageHeroIntro">
          Fill out the form below and we’ll follow up about your project.
        </p>
      </section>

      <section className="section quoteSection">
        <QuoteForm />
      </section>
    </>
  );
}
