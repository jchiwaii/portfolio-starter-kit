import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  domains,
  getDomain,
  getProject,
  projects,
} from "lib/portfolio-data";
import { PlaceholderMedia } from "../../../components/placeholder-media";

type ProjectPageProps = {
  params: Promise<{ domain: string; project: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    domain: project.domainSlug,
    project: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { domain: domainSlug, project: projectSlug } = await params;
  const project = getProject(domainSlug, projectSlug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { domain: domainSlug, project: projectSlug } = await params;
  const domain = getDomain(domainSlug);
  const project = getProject(domainSlug, projectSlug);

  if (!domain || !project) {
    notFound();
  }

  return (
    <article className="bg-white px-6 pb-20 pt-28 text-black md:px-12 lg:px-14">
      <div className="mx-auto w-full max-w-[1920px]">
        <Link
          href={`/projects/${domain.slug}`}
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm uppercase text-black/65 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} /> Back to {domain.title}
        </Link>

        <header className="grid gap-10 border-b border-black pb-12 md:grid-cols-[minmax(0,1fr)_minmax(320px,620px)] md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              {project.kicker} / {project.year}
            </p>
            <h1 className="max-w-[1100px] text-[clamp(3rem,8vw,8rem)] font-semibold uppercase leading-[0.9]">
              {project.name}
            </h1>
            <p className="mt-8 max-w-[820px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
              {project.summary}
            </p>
            {project.links.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-black px-4 py-2 font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white"
                  >
                    {link.label} <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>
          <PlaceholderMedia label={`${project.name} hero image placeholder`} />
        </header>

        <section className="grid gap-8 border-b border-black py-10 md:grid-cols-[minmax(240px,0.35fr)_minmax(0,1fr)]">
          <h2 className="text-[clamp(2rem,4vw,4.2rem)] font-semibold uppercase leading-[0.95]">
            The problem
          </h2>
          <p className="max-w-[920px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
            {project.problem}
          </p>
        </section>

        <section className="grid gap-8 border-b border-black py-10 md:grid-cols-[minmax(240px,0.35fr)_minmax(0,1fr)]">
          <h2 className="text-[clamp(2rem,4vw,4.2rem)] font-semibold uppercase leading-[0.95]">
            The approach
          </h2>
          <p className="max-w-[920px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
            {project.approach}
          </p>
        </section>

        <section className="grid gap-8 border-b border-black py-10 md:grid-cols-[minmax(240px,0.35fr)_minmax(0,1fr)]">
          <h2 className="text-[clamp(2rem,4vw,4.2rem)] font-semibold uppercase leading-[0.95]">
            The outcome
          </h2>
          <div>
            <p className="max-w-[920px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
              {project.outcome}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-black/25 px-3 py-1.5 font-mono text-xs uppercase text-black/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mb-8 grid gap-6 md:grid-cols-[minmax(240px,0.35fr)_minmax(0,1fr)]">
            <h2 className="text-[clamp(2rem,4vw,4.2rem)] font-semibold uppercase leading-[0.95]">
              Screenshots
            </h2>
            <p className="max-w-[720px] font-mono text-sm leading-relaxed text-black/60">
              Placeholder frames for the project visuals. Replace these with
              screenshots when the final images are ready.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {project.screenshots.map((screenshot) => (
              <div key={screenshot}>
                <PlaceholderMedia label={`${screenshot} placeholder`} />
                <p className="mt-3 font-mono text-xs uppercase text-black/55">
                  {screenshot}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
