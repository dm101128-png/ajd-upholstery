import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceHref } from "../../lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.title} | AJD Upholstery`, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.group === service.group && item.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section pageHero">
        <div className="serviceDetailIntro">
          <Link className="textLink" href="/services">← All services</Link>
          <p className="eyebrow">{service.group}</p>
          <h1>{service.title}</h1>
          <p className="pageHeroIntro">{service.summary}</p>
        </div>
      </section>
      <section className="section serviceDetail">
        <div>
          <h2>Plan your project</h2>
          <p>{service.details}</p>
          <ul>{service.options.map((option) => <li key={option}>{option}</li>)}</ul>
          <p>Include your vehicle year, make, model, and a description of the work when requesting a quote.</p>
          <Link className="button primary" href={`/quote?service=${encodeURIComponent(service.title)}`}>Get a Quote</Link>
          <Link className="textLink serviceWorkLink" href={service.slug === "katzkin-leather-interiors" ? "/katzkin" : "/our-work"}>
            {service.slug === "katzkin-leather-interiors" ? "Explore Katzkin" : "Explore our work"} →
          </Link>
        </div>
      </section>
      <section className="section relatedServices">
        <div>
          <h2>Related services</h2>
          <ul>{related.map((item) => <li key={item.slug}><Link className="textLink" href={serviceHref(item)}>{item.title} →</Link></li>)}</ul>
        </div>
      </section>
    </>
  );
}
