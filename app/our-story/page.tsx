import type { Metadata } from "next";
import Link from "next/link";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Our Story | AJD Upholstery",
  description: "AJD Upholstery is a family business built by hand over more than 10 years, now run by Jacinto and his sons.",
};

export default function OurStoryPage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">A family craft</p>
        <h1>A Family Business Built by Hand</h1>
      </section>

      <section className="section storyBody">
        <div className="storyBodyText">
          <p>
            Jacinto has spent more than 10 years working out of his own small upholstery shop,
            building AJD Upholstery one project at a time. There was no shortcut to it — just
            hands-on craftsmanship, showing up consistently, and taking care with every seat,
            panel, and interior that came through the door.
          </p>
          <p>
            His sons grew up around the shop. They were raised watching and learning the
            business firsthand — the materials, the stitching, the way a job gets done right,
            and what it takes to take care of a customer. That time in the shop turned into
            real experience, not just something they picked up from the sidelines.
          </p>
          <p>
            Today, Jacinto’s sons are helping him grow the business further, bringing their
            own part to the table — organization, marketing, and a vision for where AJD
            Upholstery can go next — alongside the craftsmanship Jacinto has spent over a
            decade building.
          </p>
        </div>
        <PhotoPlaceholder label="Family / workshop photo — to be added" className="storyBodyPhoto" />
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
