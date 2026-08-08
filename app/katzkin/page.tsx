import type { Metadata } from "next";
import Link from "next/link";
import KatzkinPresentation from "../components/KatzkinPresentation";

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
          Replace factory cloth or worn upholstery with genuine leather made for your
          vehicle’s exact seat pattern and professionally installed by AJD Upholstery.
        </p>
        <div className="katzkinHeroActions">
          <Link className="button primary" href="/quote">Check Your Vehicle</Link>
          <a className="textLink" href="#why-katzkin">Why Katzkin?</a>
        </div>
      </section>

      <section className="section katzkinPresentationSection" aria-labelledby="katzkin-presentation-title">
        <div className="presentationHeading">
          <div>
            <p className="eyebrow">Explore the presentation</p>
            <h2 id="katzkin-presentation-title">Why Katzkin Makes Sense</h2>
            <p>
              Move through the complete Katzkin presentation one slide at a time. The original
              slide design and content are preserved.
            </p>
          </div>
          <div className="presentationActions">
            <Link className="presentationWebsiteLink" href="/">
              AJD Upholstery Website <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="presentationDownload"
              href="/katzkin-presentation/Katzkin_B2B_Presentation.pptx"
              download="Katzkin_B2B_Presentation.pptx"
            >
              Download Presentation <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <KatzkinPresentation />
      </section>

      <section className="section katzkinBenefits" id="why-katzkin">
        <p className="eyebrow">Why drivers choose Katzkin</p>
        <h2>Real Upholstery. Made to Fit.</h2>
        <p className="katzkinSectionIntro">
          Katzkin is not a slip-on seat cover. The original seat upholstery is removed and
          replaced with precision-cut leather created for your vehicle’s seat pattern.
        </p>
        <div className="katzkinBenefitGrid">
          <article>
            <strong>Vehicle-specific fit</strong>
            <p>Patterns are tailored to thousands of vehicle configurations for a fitted, factory-style result.</p>
          </article>
          <article>
            <strong>Professional installation</strong>
            <p>The leather is installed over your factory seat structure—not pulled over the existing upholstery.</p>
          </article>
          <article>
            <strong>Built around seat technology</strong>
            <p>Installation accounts for compatible airbags, controls, and heated or ventilated seat components.</p>
          </article>
        </div>
      </section>

      <section className="section katzkinOptions">
        <div className="katzkinOptionsCopy">
          <p className="eyebrow">Make it yours</p>
          <h2>More Choice Than Factory Leather</h2>
          <p>
            Choose from available colors, two-tone combinations, contrast stitching,
            perforation, and select embroidery options. We’ll review the choices that fit
            your vehicle before anything is ordered.
          </p>
        </div>
        <div className="katzkinOptionList" aria-label="Katzkin customization options">
          <span>Leather colors</span>
          <span>Two-tone layouts</span>
          <span>Contrast stitching</span>
          <span>Perforated inserts</span>
          <span>Heating &amp; cooling options</span>
          <span>Vehicle-specific designs</span>
        </div>
      </section>

      <section className="section katzkinConfidence">
        <p className="eyebrow">What to expect</p>
        <h2>A Straightforward Upgrade</h2>
        <div className="katzkinConfidenceGrid">
          <article>
            <strong>Typical installation</strong>
            <p>Many full-interior installations can be completed in about one working day once the kit arrives. Timing varies by vehicle and options.</p>
          </article>
          <article>
            <strong>Warranty-backed</strong>
            <p>Katzkin interiors include a limited warranty on materials and workmanship when installed through an authorized installer. We’ll explain the coverage for your order.</p>
          </article>
          <article>
            <strong>Quoted for your vehicle</strong>
            <p>Pricing depends on the vehicle, seating configuration, leather design, and selected upgrades. Your quote is confirmed before ordering.</p>
          </article>
        </div>
      </section>

      <section className="section katzkinProcess">
        <h2>How it works</h2>
        <ol className="processList">
          <li><strong>Tell us about your vehicle.</strong> Share the year, make, model, trim, and the options you want.</li>
          <li><strong>Choose your design.</strong> We review compatible colors, stitching, perforation, and available upgrades.</li>
          <li><strong>Approve the quote.</strong> Your vehicle-specific kit is ordered after the design and price are confirmed.</li>
          <li><strong>We install it.</strong> The factory upholstery is removed and your new leather interior is fitted and finished.</li>
        </ol>
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
