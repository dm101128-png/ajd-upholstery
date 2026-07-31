import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | AJD Upholstery",
  description: "Automotive upholstery services from AJD Upholstery — seat repair, custom stitching, Katzkin leather, headliners, and full interior restoration.",
};

const serviceGroups = [
  {
    title: "Seats",
    items: [
      "Seat upholstery",
      "Seat repairs",
      "Custom seat designs",
      "Foam repair and seat rebuilding",
      "Factory-style leather upgrades",
    ],
  },
  {
    title: "Interior trim",
    items: [
      "Headliners",
      "Sunroof shades",
      "Door panels",
      "Carpet installation",
      "Steering wheel upholstery",
      "Center consoles",
      "Armrests",
    ],
  },
  {
    title: "Custom & specialty",
    items: [
      "Custom stitching",
      "Katzkin leather interiors",
      "Classic car interiors",
      "Hot rod interiors",
      "Truck interiors",
      "Commercial and specialty vehicle interiors",
      "Full interior restoration",
      "Custom automotive upholstery projects",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section pageHero">
        <p className="eyebrow">What we do</p>
        <h1>Services</h1>
        <p className="pageHeroIntro">
          AJD Upholstery handles projects ranging from a single repair to a complete custom
          automotive interior. Whatever the vehicle, we work with you on materials, stitching,
          and finish to get it right.
        </p>
      </section>

      <section className="section serviceGroups">
        {serviceGroups.map((group) => (
          <div className="serviceGroup" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section finalCta">
        <h2>Let’s Get It Ready for the Road.</h2>
        <Link className="button primary" href="/quote">Get a Quote</Link>
      </section>
    </>
  );
}
