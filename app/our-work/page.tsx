import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "../components/Gallery";
import { galleryItems } from "../lib/gallery-items";

export const metadata: Metadata = {
  title: "Our Work | AJD Upholstery",
  description: "Explore AJD Upholstery projects for boats, classic cars, trucks, and hotels.",
};

export default function OurWorkPage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">Selected work</p>
        <h1>Our Work</h1>
        <p className="pageHeroIntro">
          A look at some of the interiors we’ve worked on. More photos are added regularly.
        </p>
      </section>

      <section className="section gallerySection">
        <Gallery items={galleryItems} />
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
