import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  domains,
  getDomain,
  getProject,
  projects,
  type PortfolioProject,
} from "lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{ domain: string; project: string }>;
};

const colorDots = ["#d8ebff", "#efe6ff", "#dff7df", "#f4f4ef"];

export const dynamicParams = false;

function ProjectImage({
  project,
  priority = false,
  className = "",
}: {
  project: PortfolioProject;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-[#c7c5ca] ${className}`}>
      <Image
        src={project.image}
        alt={`${project.name} screenshot`}
        fill
        sizes="(min-width: 1024px) 1120px, 100vw"
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}

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
    <section className="bg-white text-black">
      <div className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {colorDots.map((color) => (
          <span
            key={color}
            className="h-4 w-4 rounded-full border border-black"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <article className="mx-auto w-full max-w-[1200px] px-6 pb-28 pt-32 md:px-12 md:pb-32 md:pt-40">
        <Link
          href={`/projects/${domain.slug}`}
          aria-label={`Back to ${domain.title}`}
          title={`Back to ${domain.title}`}
          className="mb-14 inline-flex items-center text-black transition-opacity hover:opacity-60"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </Link>

        <header>
          <p className="font-mono text-[12px] uppercase leading-none text-black/60">
            {domain.title} / {project.kicker} / {project.year}
          </p>
          <h1 className="mt-6 max-w-[940px] text-[48px] font-normal uppercase leading-[0.95] text-black md:text-[80px]">
            {project.name}
          </h1>
          <p className="mt-8 max-w-[820px] text-[20px] leading-[32px] text-black/75 md:text-[22px] md:leading-[36px]">
            {project.summary}
          </p>
        </header>

        <ProjectImage project={project} priority className="mt-14 md:mt-16" />

        <dl className="mt-12 grid gap-6 text-[14px] leading-[22px] text-black/70 md:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase leading-none text-black/45">
              Domain
            </dt>
            <dd className="mt-3">{domain.title}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase leading-none text-black/45">
              Year
            </dt>
            <dd className="mt-3">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase leading-none text-black/45">
              Tools / Services
            </dt>
            <dd className="mt-3">{project.stack.join(", ")}</dd>
          </div>
        </dl>

        <div className="mx-auto mt-20 max-w-[820px] md:mt-24">
          <section>
            <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[32px]">
              Introduction
            </h2>
            <p className="mt-5 text-[18px] leading-[32px] text-black/75">
              {project.note}
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[32px]">
              Objective
            </h2>
            <p className="mt-5 text-[18px] leading-[32px] text-black/75">
              {project.problem}
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[32px]">
              Approach
            </h2>
            <p className="mt-5 text-[18px] leading-[32px] text-black/75">
              {project.approach}
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[32px]">
              Result
            </h2>
            <p className="mt-5 text-[18px] leading-[32px] text-black/75">
              {project.outcome}
            </p>
          </section>

          {project.links.length > 0 ? (
            <section className="mt-16">
              <h2 className="text-[28px] font-semibold leading-tight text-black md:text-[32px]">
                Links
              </h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] leading-none text-white transition-opacity hover:opacity-80"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
    </section>
  );
}
