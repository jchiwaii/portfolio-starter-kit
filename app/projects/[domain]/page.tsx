import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  domains,
  getDomain,
  getProjectsByDomain,
} from "lib/portfolio-data";
import { PlaceholderMedia } from "../../components/placeholder-media";

type DomainPageProps = {
  params: Promise<{ domain: string }>;
};

export function generateStaticParams() {
  return domains.map((domain) => ({ domain: domain.slug }));
}

export async function generateMetadata({
  params,
}: DomainPageProps): Promise<Metadata> {
  const { domain: domainSlug } = await params;
  const domain = getDomain(domainSlug);

  if (!domain) {
    return {
      title: "Domain not found",
    };
  }

  return {
    title: domain.title,
    description: domain.summary,
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { domain: domainSlug } = await params;
  const domain = getDomain(domainSlug);

  if (!domain) {
    notFound();
  }

  const projects = getProjectsByDomain(domain.slug);

  return (
    <section className="bg-white px-6 pb-20 pt-28 text-black md:px-12 lg:px-14">
      <div className="mx-auto w-full max-w-[1920px]">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm uppercase text-black/65 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} /> All domains
        </Link>

        <header className="grid gap-10 border-b border-black pb-12 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              {domain.eyebrow}
            </p>
            <h1 className="text-[clamp(3.2rem,8vw,8rem)] font-semibold uppercase leading-[0.9]">
              {domain.title}
            </h1>
          </div>
          <div className="md:pt-5">
            <p className="max-w-[860px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
              {domain.description}
            </p>
            <p className="mt-8 max-w-[760px] font-mono text-sm leading-relaxed text-black/60">
              {domain.solving}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {domain.services.map((service) => (
                <span
                  key={service}
                  className="border border-black/25 px-3 py-1.5 font-mono text-xs uppercase text-black/70"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="border-b border-black">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${domain.slug}/${project.slug}`}
                className="group grid gap-5 border-t border-black py-6 transition-colors hover:bg-black/[0.03] md:grid-cols-[86px_minmax(0,1fr)_minmax(300px,470px)] md:items-start"
              >
                <p className="font-mono text-sm text-black/50">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase text-black/60">
                    {project.kicker}
                  </p>
                  <h2 className="text-[clamp(1.7rem,4vw,3.6rem)] font-semibold uppercase leading-[0.95]">
                    {project.name}
                  </h2>
                  <p className="mt-4 max-w-[680px] font-mono text-sm leading-relaxed text-black/65">
                    {project.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm uppercase text-black">
                    Read case study <ArrowUpRight size={16} />
                  </span>
                </div>
                <PlaceholderMedia label={`${project.name} image placeholder`} />
              </Link>
            ))
          ) : (
            <div className="grid gap-6 border-t border-black py-10 md:grid-cols-[minmax(0,1fr)_minmax(300px,470px)]">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase text-black/60">
                  In progress
                </p>
                <h2 className="text-[clamp(1.8rem,4vw,3.6rem)] font-semibold uppercase leading-[0.95]">
                  Mobile case studies will live here
                </h2>
                <p className="mt-4 max-w-[680px] font-mono text-sm leading-relaxed text-black/65">
                  I am reserving this domain for Android and iOS work as those
                  apps move from build mode into presentable case studies.
                </p>
              </div>
              <PlaceholderMedia label="Mobile app image placeholder" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

