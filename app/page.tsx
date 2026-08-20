import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AJD Upholstery | Automotive Upholstery, Built to Last",
  description:
    "Professional automotive upholstery, restoration, repair, and custom interior work in the Dallas–Fort Worth area.",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="heroBg heroBgDesktop"
          src="/work-interior.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 0px, 100vw"
        />
        <Image
          className="heroBg heroBgMobile"
          src="/shop-bench-work.png"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 100vw, 0px"
        />
        <div className="heroOverlay" />
        <div className="heroContent">
          <h1>Built to Last.</h1>
          <p>
            AJD Upholstery provides professional automotive upholstery, restoration, repair,
            and custom interior work for drivers across the Dallas–Fort Worth area.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/quote">Get a Quote</Link>
            <Link className="textLink" href="/our-work">Explore Our Work <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="introText">
          <p className="eyebrow">Automotive upholstery, done right</p>
          <h2>Seats, interiors, and everything in between</h2>
          <p>
            From a single torn seam to a complete interior rebuild, AJD Upholstery brings
            more than 10 years of hands-on automotive upholstery experience to every vehicle
            that comes through the shop. We work with leather, vinyl, suede, and fabric —
            matching factory quality or building something entirely custom.
          </p>
        </div>
      </section>

      <section className="section servicesPreview">
        <p className="eyebrow">What we do</p>
        <h2>Services</h2>
        <ul className="serviceTags">
          <li>Seat upholstery &amp; repair</li>
          <li>Katzkin leather interiors</li>
          <li>Headliners</li>
          <li>Door panels</li>
          <li>Custom stitching</li>
          <li>Classic &amp; hot rod interiors</li>
          <li>Truck &amp; commercial interiors</li>
          <li>Full interior restoration</li>
        </ul>
        <Link className="textLink" href="/services">See all services <span>→</span></Link>
      </section>

      <section className="section workPreview">
        <p className="eyebrow">Selected work</p>
        <h2>Our Work</h2>
        <div className="previewGrid">
          <Image src="/work-interior.png" alt="Custom two-tone leather bucket seats and dash trim" width={1448} height={1086} />
          <Image src="/work-door-panel.png" alt="Custom stitched leather door panel" width={1448} height={1086} />
          <Image src="/work-vw-restoration.png" alt="Classic Volkswagen Beetle interior restoration" width={1086} height={1448} />
        </div>
        <Link className="textLink" href="/our-work">View the full gallery <span>→</span></Link>
      </section>

      <section className="section storyPreview">
        <Image className="storyPreviewImg" src="/shop-supply-cabinet.png" alt="Materials and supplies inside the AJD Upholstery shop" width={1086} height={1448} />
        <div className="storyPreviewText">
          <p className="eyebrow">A family business</p>
          <h2>Built by hand, for more than 10 years</h2>
          <p>
            Jacinto started AJD Upholstery from a small shop, and his sons grew up around
            the work — learning the craft alongside him. Today the family runs the business
            together, combining hands-on experience with a plan for where it&rsquo;s headed next.
          </p>
          <Link className="textLink" href="/our-story">Read our story <span>→</span></Link>
        </div>
      </section>

      <section className="section katzkinPreview">
        <p className="eyebrow">Certified installer</p>
        <h2>Katzkin Leather Interiors</h2>
        <p>AJD Upholstery installs Katzkin automotive leather interiors, with a range of colors, stitching, and perforation options for your vehicle.</p>
        <Link className="textLink" href="/katzkin">Learn about Katzkin <span>→</span></Link>
      </section>

      <section className="section finalCta">
        <h2>Let&rsquo;s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
