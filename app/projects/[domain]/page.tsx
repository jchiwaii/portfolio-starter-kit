import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  domains,
  getDomain,
  getProjectsByDomain,
  type PortfolioProject,
} from "lib/portfolio-data";

type DomainPageProps = {
  params: Promise<{ domain: string }>;
};

const colorDots = ["#d8ebff", "#efe6ff", "#dff7df", "#f4f4ef"];

export const dynamicParams = false;

function SmallWorkMark() {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <g clipPath="url(#domain-work-mark-outer)">
        <g clipPath="url(#domain-work-mark-inner)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.12649 -0.00556486C9.0667 -0.00156965 9.00851 0.0154172 8.95596 0.0442113L0.69865 4.57753C0.633987 4.61333 0.580117 4.66583 0.542663 4.72955C0.505209 4.79327 0.485544 4.86587 0.485719 4.93979V10.7101C0.48585 10.7821 0.504804 10.8528 0.5407 10.9153C0.576596 10.9777 0.628187 11.0296 0.690354 11.0659L5.64769 13.952C5.70938 13.9883 5.77944 14.008 5.85101 14.0091C5.92258 14.0103 5.99323 13.9928 6.05604 13.9585L14.3124 9.41964C14.3771 9.38384 14.431 9.33134 14.4684 9.26762C14.5059 9.2039 14.5255 9.13129 14.5254 9.05738V3.29164C14.5252 3.21964 14.5063 3.14893 14.4704 3.08652C14.4345 3.0241 14.3829 2.97216 14.3207 2.93584L9.36339 0.0506638C9.29186 0.00853876 9.20931 -0.011056 9.12649 -0.00556486ZM13.6967 3.98759V8.81772L6.26528 12.8975V8.06831L13.6967 3.98759ZM1.31532 5.65785L5.43937 8.06186V12.8772L1.31532 10.4742V5.65785Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="domain-work-mark-outer">
          <rect width="15" height="14" fill="white" />
        </clipPath>
        <clipPath id="domain-work-mark-inner">
          <rect
            width="14.0286"
            height="14"
            fill="white"
            transform="translate(0.485718)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ProjectImage({ project }: { project: PortfolioProject }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#c7c5ca]">
      <Image
        src={project.image}
        alt={`${project.name} screenshot`}
        fill
        sizes="(min-width: 1024px) 31vw, (min-width: 768px) 45vw, 100vw"
        className={`object-contain ${
          project.domainSlug === "data-insights" ? "scale-110" : "scale-100"
        }`}
      />
    </div>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={`/projects/${project.domainSlug}/${project.slug}`}
      className="block"
    >
      <ProjectImage project={project} />
      <h2 className="mt-5 text-[24px] font-normal uppercase leading-none text-black md:text-[28px]">
        {project.name}
      </h2>
      <p className="mt-3 font-mono text-[12px] leading-none text-black">
        {project.year}
      </p>
    </Link>
  );
}

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

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-56">
        <Link
          href="/#domains"
          aria-label="Back to domains"
          title="Back to domains"
          className="mb-8 inline-flex items-center text-black transition-opacity hover:opacity-60"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </Link>
        <p className="mb-3 flex items-center gap-1 font-mono text-[12px] uppercase leading-none text-black">
          <SmallWorkMark />
          Latest update
        </p>
        <h1 className="text-[56px] font-normal uppercase leading-none text-black md:text-[88px]">
          {domain.title}
        </h1>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-32 md:px-12">
        {projects.length > 0 ? (
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <article>
              <div className="aspect-video w-full bg-[#c7c5ca]" />
              <h2 className="mt-5 text-[24px] font-normal uppercase leading-none text-black md:text-[28px]">
                Mobile work is being shaped
              </h2>
              <p className="mt-3 font-mono text-[12px] leading-none text-black">
                Soon
              </p>
            </article>
          </div>
        )}
      </section>
    </section>
  );
}
