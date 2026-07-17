import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AJD Upholstery | Renewed by Hand",
  description:
    "Thoughtful furniture upholstery and restoration, backed by more than a decade of hands-on experience.",
};

const email = "ajd.david.upholstery@gmail.com";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="AJD Upholstery home">
          <span className="brandMark">AJD</span>
          <span className="brandWords">Upholstery</span>
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
          <p className="eyebrow"><span /> Furniture, renewed by hand</p>
          <h1>Made comfortable.<br /><em>Made yours.</em></h1>
          <p className="heroIntro">
            We bring well-loved furniture back to life with careful hands,
            honest materials, and over a decade of upholstery experience.
          </p>
          <div className="heroActions">
            <a className="button primary" href={`mailto:${email}?subject=Tell%20us%20about%20your%20project`}>Start your project <span>↗</span></a>
            <a className="textLink" href="#work">Explore our work <span>↓</span></a>
          </div>
        </div>

        <div className="heroVisual" aria-label="A close-up inspired by hand-tufted upholstery">
          <div className="fabricPanel">
            <div className="tuft t1" /><div className="tuft t2" /><div className="tuft t3" />
            <div className="tuft t4" /><div className="tuft t5" /><div className="tuft t6" />
            <div className="fabricLabel"><span>01</span> Craft in every detail</div>
          </div>
          <div className="years"><strong>10+</strong><span>years of<br />experience</span></div>
        </div>
      </section>

      <div className="stitchLine" aria-hidden="true"><span>AJD</span></div>

      <section className="services section" id="services">
        <div className="sectionIntro">
          <p className="eyebrow"><span /> What we do</p>
          <h2>Old favorites.<br /><em>Fresh beginnings.</em></h2>
        </div>
        <div className="serviceList">
          <article><span className="number">01</span><div><h3>Furniture upholstery</h3><p>Sofas, chairs, benches, ottomans, and the pieces that make a room feel like home.</p></div><span className="arrow">↗</span></article>
          <article><span className="number">02</span><div><h3>Repairs &amp; restoration</h3><p>Thoughtful repairs to frames, springs, padding, seams, and the details worth preserving.</p></div><span className="arrow">↗</span></article>
          <article><span className="number">03</span><div><h3>Custom details</h3><p>Tufting, piping, cushions, fabric matching, and finishing touches made for your piece.</p></div><span className="arrow">↗</span></article>
        </div>
      </section>

      <section className="story" id="story">
        <div className="storyTexture"><div className="needle">✦</div><p>Measured twice.<br />Stitched with care.</p></div>
        <div className="storyCopy">
          <p className="eyebrow light"><span /> A family craft</p>
          <h2>Patience is part<br />of the <em>process.</em></h2>
          <p>For more than ten years, upholstery has been more than a trade for our family. It is the satisfaction of solving a problem, shaping every corner, and watching a familiar piece become beautiful again.</p>
          <p>Alongside Yelena, we bring a personal eye and steady attention to every project—because the best work is the work you are proud to put your name on.</p>
          <div className="signature">AJD <span>Upholstery</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="workHeader">
          <div><p className="eyebrow"><span /> Selected work</p><h2>Built for a<br /><em>second story.</em></h2></div>
          <p>Every piece arrives with a past. Our job is to give it a future—one seam, spring, and carefully chosen detail at a time.</p>
        </div>
        <div className="projectGrid">
          <article className="project projectOne"><div className="chairShape"><i /><b /></div><div className="projectMeta"><span>Classic seating</span><small>Reupholstery · Repair</small></div></article>
          <article className="project projectTwo"><div className="benchShape"><i /><i /><i /></div><div className="projectMeta"><span>Custom comfort</span><small>Cushions · Piping</small></div></article>
          <article className="project projectThree"><div className="patternCard"><span>AJD</span></div><div className="projectMeta"><span>Fine details</span><small>Tufting · Finishing</small></div></article>
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow light"><span /> Your piece is next</p>
        <h2>Let’s make something<br /><em>worth keeping.</em></h2>
        <p>Send us a few photos and tell us what you have in mind. We’ll take it from there.</p>
        <a className="button cream" href={`mailto:${email}?subject=AJD%20Upholstery%20project&body=Hi%20AJD%2C%0A%0AI%27d%20like%20an%20estimate%20for...`}>Email us for an estimate <span>↗</span></a>
        <a className="email" href={`mailto:${email}`}>{email}</a>
      </section>

      <footer><a className="brand footerBrand" href="#top"><span className="brandMark">AJD</span><span className="brandWords">Upholstery</span></a><p>Furniture renewed with patience, skill, and care.</p><a href="#top">Back to top ↑</a><small>© {new Date().getFullYear()} AJD Upholstery</small></footer>
    </main>
  );
}
