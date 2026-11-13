import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "../../../components/Gallery";
import { galleryProjects, categorySlug, categoryHref, projectSlug } from "../../../lib/gallery-items";

type Params = { category: string; project: string };
type Props = { params: Promise<Params> };

function findProject(params: Params) {
  return galleryProjects.find(item => item.category && categorySlug(item.category) === params.category && projectSlug(item) === params.project);
}

export function generateStaticParams() {
  return galleryProjects.filter(item => item.category).map(item => ({ category: categorySlug(item.category!), project: projectSlug(item) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject(await params);
  return project ? { title: `${project.title} | AJD Upholstery`, description: project.alt } : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject(await params);
  if (!project || !project.category) notFound();
  const photos = project.photos?.length ? project.photos : [project];

  return <>
    <section className="section pageHero">
      <Link className="textLink" href={categoryHref(project.category)}>← {project.category}</Link>
      <p className="eyebrow">Our work / {project.category}</p>
      <h1>{project.title}</h1>
      <p className="pageHeroIntro">Explore the details. Select any photo for a closer look.</p>
    </section>
    <section className="section gallerySection" aria-label={`${project.title} photos and video`}>
      {project.video && <figure className="projectVideo">
        <video controls playsInline preload="none" poster={project.video.poster} aria-label={project.video.title}>
          <source src={project.video.src} type="video/mp4" />
          Your browser does not support this video. <a href={project.video.src}>Download the video</a>.
        </video>
        <figcaption>{project.video.title}</figcaption>
      </figure>}
      <Gallery items={photos} />
    </section>
    <section className="section finalCta">
      <h2>Make It Your Own.</h2>
      <Link className="button primary" href="/quote">Get a Quote</Link>
    </section>
  </>;
}
