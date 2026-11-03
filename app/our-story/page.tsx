import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | AJD Upholstery",
  description: "Meet the AJD Upholstery team: creative craftspeople bringing bold custom upholstery designs to life, with personal guidance from idea to finished interior.",
};

export default function OurTeamPage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">Our team</p>
        <h1>Your Vision. Our Craftsmanship.</h1>
      </section>

      <section className="section storyBody">
        <div className="storyBodyText">
          <p>
            At AJD Upholstery, we are a team of creative, hands-on craftspeople with a shared
            passion for thoughtful design and quality upholstery. We work together to create
            interiors that fit your style, your vehicle, and the way you use it — with care
            in every material, stitch, and finishing detail.
          </p>
          <p>
            Bring us the idea that seems unthinkable. From a timeless restoration to a bold,
            one-of-a-kind interior, we love a creative challenge. Our team helps shape your
            vision, explores materials and design possibilities, and finds thoughtful ways
            to bring it all together.
          </p>
          <p>
            We are here to help you every step of the way. Whether you know exactly what you
            want or need a little inspiration, we listen, answer your questions, and guide
            you through colors, textures, stitching, and practical choices. Your ideas are
            at the heart of the process, from our first conversation to the finished upholstery.
          </p>
        </div>
        <Image className="storyPreviewImg" src="/shop-bench-work.png" alt="Upholstery work inside the AJD Upholstery workshop" width={1086} height={1448} />
      </section>

      <section className="section finalCta">
        <h2>Let’s Bring Your Ideas to Life.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
