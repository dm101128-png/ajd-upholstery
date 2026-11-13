import type { Metadata } from "next";
import Link from "next/link";
import GalleryCategories from "../components/GalleryCategories";

export const metadata: Metadata = {
  title: "Our Work | AJD Upholstery",
  description: "Explore AJD Upholstery projects for custom seats, classic cars, boats, big trucks, and dugout pits. Browse photos grouped by vehicle and project.",
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
        <GalleryCategories />
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
