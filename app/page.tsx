import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { BrandMark } from "./components/brand-mark";
import { DomainRow } from "./components/domain-row";
import { capabilityList, domains, getProjectsByDomain } from "lib/portfolio-data";

const colorDots = ["#cfe5ff", "#efe3ff", "#dbf8df", "#f2f2ef"];

export default function Page() {
  return (
    <section className="bg-white text-black">
      <div className="fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {colorDots.map((color) => (
          <span
            key={color}
            className="h-4 w-4 rounded-full border border-black/50"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <section
        id="first"
        className="mx-auto flex min-h-[720px] w-full max-w-[1920px] flex-col justify-center px-6 pb-24 pt-28 md:px-12 lg:px-14"
      >
        <div className="flex items-center gap-6 md:gap-16">
          <BrandMark className="h-[clamp(4.5rem,16vw,15rem)] w-[clamp(4.5rem,16vw,15rem)]" />
          <h1 className="text-[clamp(4.3rem,18vw,17rem)] font-semibold leading-[0.82] text-black">
            chiwai<sup className="ml-2 align-top text-[clamp(2rem,5vw,5rem)]">©</sup>
          </h1>
        </div>

        <div className="mt-20 grid gap-10 border-t border-black pt-5 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1fr)] lg:mt-28">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              Generalist builder
            </p>
            <h2 className="max-w-[520px] text-[clamp(2.3rem,5vw,5.4rem)] font-semibold uppercase leading-[0.94]">
              Useful systems across data, web, AI, and apps
            </h2>
          </div>
          <div className="max-w-[820px] md:pt-8">
            <p className="font-mono text-base leading-relaxed text-black/70 md:text-lg">
              I build projects around problems: job-market clarity, public-data
              storytelling, safer browsing, learning tools, UI systems, and
              fullstack workflows. The portfolio is now organized by domain so
              each project can show the question, the process, the screenshots,
              and the link in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#domains"
                className="inline-flex items-center gap-2 border border-black px-4 py-2 font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white"
              >
                Selected domains <ArrowDownRight size={16} />
              </Link>
              <Link
                href="/info"
                className="inline-flex items-center gap-2 border border-black/30 px-4 py-2 font-mono text-sm uppercase transition-colors hover:border-black"
              >
                Info <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="domains"
        className="mx-auto w-full max-w-[1920px] px-6 py-14 md:px-12 lg:px-14"
      >
        <div className="mb-8 grid gap-8 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)] md:items-end">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              Some of what I solve
            </p>
            <h2 className="text-[clamp(2.6rem,6vw,6rem)] font-semibold uppercase leading-[0.92]">
              Selected domains
            </h2>
          </div>
          <p className="max-w-[760px] font-mono text-sm leading-relaxed text-black/65 md:text-base">
            Each row opens into a domain. Inside that domain are the actual
            projects, and each project has its own short case-study page with
            problem, approach, outcome, screenshots, stack, and links.
          </p>
        </div>

        <div className="border-b border-black">
          {domains.map((domain) => (
            <DomainRow
              key={domain.slug}
              domain={domain}
              projectCount={getProjectsByDomain(domain.slug).length}
            />
          ))}
        </div>
      </section>

      <section
        id="info"
        className="mx-auto w-full max-w-[1920px] px-6 py-16 md:px-12 lg:px-14"
      >
        <div className="grid gap-12 border-y border-black py-9 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="text-lg leading-none">*</span>
              What I do
            </p>
            <h2 className="max-w-[620px] text-[clamp(2.4rem,5vw,5.2rem)] font-semibold uppercase leading-[0.94]">
              I make vague problems easier to act on
            </h2>
          </div>
          <div className="md:pt-4">
            <p className="mb-10 max-w-[860px] font-mono text-sm leading-relaxed text-black/65">
              My range is the point. I can move from data cleaning to narrative,
              from interface details to backend flows, and from product
              questions to working prototypes. The common thread is making
              something useful enough that another person can think or act
              better with it.
            </p>
            <p className="max-w-[980px] text-[clamp(1.7rem,3vw,3.1rem)] font-semibold leading-[1.35]">
              {capabilityList.join(" / ")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 pb-16 md:px-12 lg:px-14">
        <div className="grid gap-8 border-b border-black pb-12 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)] md:items-end">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              Start here
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-semibold uppercase leading-[0.95]">
              See the project map
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-3 border border-black px-5 py-3 font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white"
          >
            Open projects <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </section>
  );
}
