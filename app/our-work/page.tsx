import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "../components/Gallery";
import { galleryProjects } from "../lib/gallery-items";

export const metadata: Metadata = {
  title: "Our Work | AJD Upholstery",
  description: "Explore AJD Upholstery projects for cars, classic cars, boats, big trucks, roof and sunroof repair, and dugout pits. Browse photos grouped by vehicle and project.",
};

export default function OurWorkPage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">Selected work</p>
        <h1>Our Work</h1>
        <p className="pageHeroIntro">
          Explore our upholstery work by category, then open a vehicle or project to see its photos together.
        </p>
      </section>

      <section className="section gallerySection">
        <Gallery items={galleryProjects} />
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
