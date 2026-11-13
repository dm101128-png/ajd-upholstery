import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryCategories, galleryProjects, categorySlug, projectHref } from "../../lib/gallery-items";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return galleryCategories.map(category => ({ category: categorySlug(category) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = galleryCategories.find(item => categorySlug(item) === category);
  return name ? { title: `${name} Projects | AJD Upholstery`, description: `Explore ${name.toLowerCase()} projects by AJD Upholstery. Open a project to see the details.` } : {};
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const name = galleryCategories.find(item => categorySlug(item) === category);
  if (!name) notFound();
  const projects = galleryProjects.filter(item => item.category === name);

  return <>
    <section className="section pageHero">
      <Link className="textLink" href="/our-work">← All categories</Link>
      <p className="eyebrow">Our work</p>
      <h1>{name}</h1>
      <p className="pageHeroIntro">Open a project to explore its upholstery and finishing details.</p>
    </section>
    <section className="section gallerySection" aria-label={`${name} projects`}>
      {projects.length ? <div className="galleryGrid">
        {projects.map(project => <Link key={project.src} href={projectHref(project)} className="galleryCard">
          <Image src={project.src} alt={project.alt} width={project.width} height={project.height} />
          <span className="galleryCaption">{project.title}</span>
          <span className="galleryPhotoCount">View project <span aria-hidden="true">→</span></span>
        </Link>)}
      </div> : <div className="galleryEmpty">
        <h2>{name} projects coming soon</h2>
        <p>We’re preparing photos from this part of our portfolio. Contact us to discuss your project.</p>
      </div>}
    </section>
    <section className="section finalCta">
      <h2>Tell Us About Your Project.</h2>
      <Link className="button primary" href="/quote">Get a Quote</Link>
    </section>
  </>;
}
