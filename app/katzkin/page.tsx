import type { Metadata } from "next";
import Link from "next/link";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Katzkin Leather Interiors | AJD Upholstery",
  description: "AJD Upholstery installs Katzkin automotive leather interiors, with a range of colors, stitching, and perforation options.",
};

export default function KatzkinPage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">Certified installer</p>
        <h1>Katzkin Leather Interiors</h1>
        <p className="pageHeroIntro">
          AJD Upholstery installs Katzkin automotive leather interiors, custom-fit to your
          vehicle’s factory seats and trim.
        </p>
      </section>

      <section className="section katzkinExamples">
        <h2>Vehicle-specific examples</h2>
        <p>Examples of Katzkin installations for specific makes and models will be added here.</p>
        <div className="placeholderGrid">
          <PhotoPlaceholder label="Vehicle example — to be added" />
          <PhotoPlaceholder label="Vehicle example — to be added" />
          <PhotoPlaceholder label="Vehicle example — to be added" />
        </div>
      </section>

      <section className="section katzkinOptions">
        <h2>Colors, stitching &amp; customization</h2>
        <p>
          Katzkin offers a range of leather colors, stitching patterns, and perforation
          options. Specific colors, patterns, and pricing for your vehicle will be added here.
        </p>
        <div className="placeholderGrid">
          <PhotoPlaceholder label="Leather color/pattern — to be added" />
          <PhotoPlaceholder label="Leather color/pattern — to be added" />
        </div>
      </section>

      <section className="section katzkinBeforeAfter">
        <h2>Before &amp; after</h2>
        <p>Before-and-after photos of completed Katzkin installations will be added here.</p>
        <div className="placeholderGrid">
          <PhotoPlaceholder label="Before / after — to be added" />
        </div>
      </section>

      <section className="section katzkinProcess">
        <h2>How it works</h2>
        <ol className="processList">
          <li>We review your vehicle and go over Katzkin color and stitching options.</li>
          <li>Your custom-fit Katzkin leather kit is ordered for your specific vehicle.</li>
          <li>Our shop installs the leather onto your factory seats and trim.</li>
          <li>You get your vehicle back with a new leather interior, built to fit.</li>
        </ol>
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
