import type { Metadata } from "next";
import { DomainRow } from "../components/domain-row";
import { domains, getProjectsByDomain } from "lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project domains and case studies by John Chiwai.",
};

export default function ProjectsPage() {
  const totalProjects = domains.reduce(
    (total, domain) => total + getProjectsByDomain(domain.slug).length,
    0,
  );

  return (
    <section className="bg-white px-6 pb-20 pt-28 text-black md:px-12 lg:px-14">
      <div className="mx-auto w-full max-w-[1920px]">
        <header className="grid gap-8 border-b border-black pb-12 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)] md:items-end">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              Selected work
            </p>
            <h1 className="text-[clamp(3.2rem,8vw,8rem)] font-semibold uppercase leading-[0.9]">
              Project domains
            </h1>
          </div>
          <p className="max-w-[820px] font-mono text-sm leading-relaxed text-black/65 md:text-base">
            {totalProjects} case studies organized by the type of problem they
            solve. Open a domain to see the projects inside it.
          </p>
        </header>

        <div className="border-b border-black">
          {domains.map((domain) => (
            <DomainRow
              key={domain.slug}
              domain={domain}
              projectCount={getProjectsByDomain(domain.slug).length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
