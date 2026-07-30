import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AJD Upholstery | Stitched by Hand",
  description:
    "Custom automotive upholstery, seat repair, and interior restoration, backed by more than a decade of hands-on experience.",
};

const email = "ajd.david.upholstery@gmail.com";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="AJD Upholstery home">
          <span className="logoCrop logoCropSmall"><img src="/ajd-logo.jpg" alt="" /></span>
          <span className="brandWords">Custom AJD Upholstery</span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#story">Our story</a>
          <a href="#work">Our work</a>
        </div>
        <a className="navCta" href={`mailto:${email}?subject=Upholstery%20estimate`}>
          Request an estimate
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="heroLogo"><img src="/ajd-logo.jpg" alt="Custom AJD Upholstery" /></div>
          <p className="eyebrow"><span /> Auto interiors, stitched right</p>
          <h1>Restitched<br /><em>Built to last.</em></h1>
          <p className="heroIntro">
            From bench seats to buckets, we bring tired interiors back to life
            with hand-cut leather, honest stitching, and over a decade of
            automotive upholstery experience.
          </p>
          <div className="heroActions">
            <a className="button primary" href={`mailto:${email}?subject=Tell%20us%20about%20your%20project`}>Start your project <span>↗</span></a>
            <a className="textLink" href="#work">Explore our work <span>↓</span></a>
          </div>
        </div>

        <div className="heroVisual" aria-label="AJD Upholstery workshop">
          <div className="fabricPanel">
            <img className="fabricPhoto" src="/shop-bench-work.png" alt="AJD Upholstery hand-stitching a seat in the shop" />
            <div className="fabricLabel"><span>01</span> In the shop</div>
          </div>
          <div className="years"><strong>10+</strong><span>years of<br />experience</span></div>
        </div>
      </section>

      <div className="stitchLine" aria-hidden="true"><span>AJD</span></div>

      <section className="services section" id="services">
        <div className="sectionIntro">
          <p className="eyebrow"><span /> What we do</p>
          <h2>Worn seats.<br /><em>Fresh stitch.</em></h2>
        </div>
        <div className="serviceList">
          <article><span className="number">01</span><div><h3>Seat upholstery</h3><p>Front seats, rear benches, buckets, and rows — reupholstered in leather, vinyl, or fabric to your spec.</p></div><span className="arrow">↗</span></article>
          <article><span className="number">02</span><div><h3>Repairs &amp; restoration</h3><p>Torn seams, sagging foam, cracked dashboards, headliners, and door panels brought back to like-new shape.</p></div><span className="arrow">↗</span></article>
          <article><span className="number">03</span><div><h3>Custom stitching &amp; details</h3><p>Two-tone leather, contrast stitching, embroidered logos, and console or steering wheel wraps.</p></div><span className="arrow">↗</span></article>
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyTexture"><img className="storyPhoto" src="/shop-supply-cabinet.png" alt="Wall of dyes, adhesives, and finishing supplies in the AJD Upholstery shop" /><p>Measured twice.<br />Stitched with care.</p></div>
        <div className="storyCopy">
          <p className="eyebrow light"><span /> A family craft</p>
          <h2>Patience is part<br />of the <em>process.</em></h2>
          <p>For more than ten years, automotive upholstery has been more than a trade for our family. It is the satisfaction of solving a problem, cutting every panel true, and watching a tired interior come back to life.</p>
          <p>Alongside Yelena, we bring a personal eye and a steady hand to every vehicle — because the best work is the work you are proud to put your name on.</p>
          <div className="signature">AJD <span>Upholstery</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="workHeader">
          <div><p className="eyebrow"><span /> Selected work</p><h2>Built for the<br /><em>long haul.</em></h2></div>
          <p>Every vehicle arrives with a past. Our job is to give the interior a future — one seam, one panel, and one carefully chosen detail at a time.</p>
        </div>
        <div className="projectGrid">
          <article className="project projectOne"><img className="projectPhoto" src="/work-interior.png" alt="Custom two-tone leather bucket seats and dash trim" /><div className="projectMeta"><span>Bucket seats</span><small>Two-tone leather · Suede</small></div></article>
          <article className="project projectTwo"><img className="projectPhoto" src="/work-door-panel.png" alt="Custom stitched leather door panel" /><div className="projectMeta"><span>Door panels</span><small>Contrast stitching</small></div></article>
          <article className="project projectThree"><img className="projectPhoto" src="/work-vw-restoration.png" alt="Classic Volkswagen Beetle interior restoration" /><div className="projectMeta"><span>Classic restorations</span><small>Full interior rebuild</small></div></article>
          <article className="project projectFour"><img className="projectPhoto" src="/shop-fabric-wall.png" alt="Wall of leather and vinyl rolls in the AJD Upholstery shop" /><div className="projectMeta"><span>Material selection</span><small>Leather · Vinyl · Suede</small></div></article>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow light"><span /> Your interior is next</p>
        <h2>Let’s get it<br /><em>road ready.</em></h2>
        <p>Send us a few photos of your seats or interior and tell us what you have in mind. We’ll take it from there.</p>
        <a className="button cream" href={`mailto:${email}?subject=AJD%20Upholstery%20project&body=Hi%20AJD%2C%0A%0AI%27d%20like%20an%20estimate%20for...`}>Email us for an estimate <span>↗</span></a>
        <a className="email" href={`mailto:${email}`}>{email}</a>
      </section>

      <footer><a className="brand footerBrand" href="#top"><span className="logoCrop logoCropSmall"><img src="/ajd-logo.jpg" alt="" /></span><span className="brandWords">Custom AJD Upholstery</span></a><p>Automotive upholstery renewed with patience, skill, and care.</p><a href="#top">Back to top ↑</a><small>© {new Date().getFullYear()} AJD Upholstery</small></footer>
    </main>
  );
}
