import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceHref } from "../lib/services";

export const metadata: Metadata = {
  title: "Services | AJD Upholstery",
  description: "Automotive upholstery services from AJD Upholstery — seat repair, custom stitching, Katzkin leather, headliners, and full interior restoration.",
};

const serviceGroups = ["Seats", "Interior trim", "Custom & specialty"] as const;

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
          <div className="serviceGroup" key={group}>
            <h2>{group}</h2>
            <ul>
              {services.filter((item) => item.group === group).map((item) => (
                <li key={item.slug}><Link href={serviceHref(item)}>{item.title}<span aria-hidden="true"> →</span></Link></li>
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
