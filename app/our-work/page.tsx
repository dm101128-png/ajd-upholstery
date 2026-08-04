import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | AJD Upholstery",
  description:
    "Browse AJD Upholstery's full gallery of custom bucket seats, door panels, classic car restorations, and leather upgrades.",
};

const email = "ajd.david.upholstery@gmail.com";

type Photo = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type Category = {
  name: string;
  tag: string;
  photos: Photo[];
};

const categories: Category[] = [
  {
    name: "Classic Car Restorations",
    tag: "Full interior rebuilds",
    photos: [
      {
        src: "/work-vw-restoration.png",
        alt: "Classic Volkswagen Beetle interior restoration",
        title: "Volkswagen Beetle",
        description:
          "A classic Volkswagen Beetle interior brought back with a full seat, panel, and trim rebuild.",
      },
      {
        src: "/work-chevy-truck-dash.png",
        alt: "Dash, steering wheel, and front seat of a restored classic Chevy truck",
        title: "Classic Chevy Truck — Cockpit",
        description:
          "The dash, wheel, and front seat of a classic Chevy truck, fully retrimmed in hand-stitched leather.",
      },
      {
        src: "/work-chevy-truck-interior.png",
        alt: "Wide view of a restored classic Chevy truck cab interior",
        title: "Classic Chevy Truck — Cab",
        description:
          "A wider look at the same cab, showing how the new dash, door panels, and seating tie together.",
      },
      {
        src: "/work-chevy-truck-cabin.png",
        alt: "Full cabin view of a restored classic Chevy truck interior from the driver's door",
        title: "Classic Chevy Truck — Full Cabin",
        description:
          "The finished cabin from the driver's door, with matching leather across the seats, console, and panels.",
      },
    ],
  },
  {
    name: "Door Panels",
    tag: "Contrast & diamond stitching",
    photos: [
      {
        src: "/work-door-panel.png",
        alt: "Custom stitched leather door panel",
        title: "Contrast-Stitched Door Panel",
        description:
          "A door panel stripped down and rebuilt in leather with contrast stitching and a fitted map pocket.",
      },
      {
        src: "/work-chevy-truck-door-panel.png",
        alt: "Custom diamond-stitched leather door panel on a classic Chevy truck",
        title: "Diamond-Stitched Door Panel",
        description:
          "A custom door panel finished in diamond-stitched leather with a built-in speaker grille and color-matched trim.",
      },
    ],
  },
  {
    name: "Leather Upgrades",
    tag: "Diamond stitch details",
    photos: [
      {
        src: "/work-chevy-truck-console.png",
        alt: "Diamond-stitched leather console and seats in a classic Chevy truck",
        title: "Console & Seat Upgrade",
        description:
          "Diamond-stitched leather seats and center console, upgraded from factory vinyl for a custom look and feel.",
      },
    ],
  },
  {
    name: "Bucket Seats",
    tag: "Two-tone leather & suede",
    photos: [
      {
        src: "/work-interior.png",
        alt: "Custom two-tone leather bucket seats and dash trim",
        title: "Two-Tone Bucket Seats",
        description:
          "Driver and passenger buckets rebuilt in two-tone leather with a suede insert and fresh dash trim to match.",
      },
    ],
  },
];

export default function OurWork() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="AJD Upholstery home">
          <span className="logoCrop logoCropSmall"><img src="/ajd-logo.jpg" alt="" /></span>
          <span className="brandWords">Custom AJD Upholstery</span>
        </a>
        <div className="navLinks">
          <a href="/#services">Services</a>
          <a href="/#story">Our story</a>
          <a href="/our-work">Our work</a>
        </div>
        <a className="navCta" href={`mailto:${email}?subject=Upholstery%20estimate`}>
          Request an estimate
        </a>
      </nav>

      <section className="workPageHeader">
        <a className="backLink" href="/#work">← Back home</a>
        <h1>Our <em>work.</em></h1>
        <p>
          Every vehicle arrives with a past. Our job is to give the interior a future —
          one seam, one panel, and one carefully chosen detail at a time. Browse the
          full gallery below, grouped by the kind of work we did.
        </p>
      </section>

      {categories.map((category) => (
        <section className="categorySection" key={category.name}>
          <div className="categoryHeader">
            <h2>{category.name}</h2>
            <span>{category.tag}</span>
          </div>
          <div className="galleryGrid">
            {category.photos.map((photo) => (
              <article className="galleryCard" key={photo.src}>
                <div className="galleryPhotoWrap">
                  <img className="galleryPhoto" src={photo.src} alt={photo.alt} />
                </div>
                <div className="galleryCaption">
                  <span>{photo.title}</span>
                  <p>{photo.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="contact">
        <p className="eyebrow light"><span /> Your interior is next</p>
        <h2>Let’s get it<br /><em>road ready.</em></h2>
        <p>Send us a few photos of your seats or interior and tell us what you have in mind. We’ll take it from there.</p>
        <a className="button cream" href={`mailto:${email}?subject=AJD%20Upholstery%20project&body=Hi%20AJD%2C%0A%0AI%27d%20like%20an%20estimate%20for...`}>Email us for an estimate <span>↗</span></a>
        <a className="email" href={`mailto:${email}`}>{email}</a>
      </section>

      <footer><a className="brand footerBrand" href="/"><span className="logoCrop logoCropSmall"><img src="/ajd-logo.jpg" alt="" /></span><span className="brandWords">Custom AJD Upholstery</span></a><p>Automotive upholstery renewed with patience, skill, and care.</p><a href="/#top">Back to top ↑</a><small>© {new Date().getFullYear()} AJD Upholstery</small></footer>
    </main>
  );
}
