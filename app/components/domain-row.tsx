import Link from "next/link";
import { Plus } from "lucide-react";
import type { Domain } from "lib/portfolio-data";
import { PlaceholderMedia } from "./placeholder-media";

type DomainRowProps = {
  domain: Domain;
  projectCount: number;
};

export function DomainRow({ domain, projectCount }: DomainRowProps) {
  const projectLabel =
    projectCount === 0
      ? "In progress"
      : `${projectCount} ${projectCount === 1 ? "case" : "cases"}`;

  return (
    <Link
      href={`/projects/${domain.slug}`}
      className="group grid gap-3 border-t border-black py-5 outline-none transition-colors hover:bg-black/[0.03] focus-visible:bg-black/[0.03] md:grid-cols-[minmax(0,1fr)_120px_minmax(320px,520px)] md:items-start md:py-7"
    >
      <div className="min-w-0">
        <p className="mb-2 flex items-center gap-2 font-mono text-[11px] leading-none text-black/65">
          <span className="h-2 w-2 rounded-full bg-black" />
          {domain.eyebrow}
        </p>
        <h3 className="text-[clamp(1.6rem,4vw,2.9rem)] font-semibold uppercase leading-[0.95] text-black">
          {domain.title}
        </h3>
        <p className="mt-4 max-w-[560px] font-mono text-sm leading-relaxed text-black/65">
          {domain.summary}
        </p>
      </div>

      <div className="flex items-center gap-2 pt-1 font-mono text-base text-black md:justify-end">
        <span>{projectLabel}</span>
        <Plus size={16} strokeWidth={2.2} />
      </div>

      <PlaceholderMedia
        label={`${domain.title} image placeholder`}
        className="min-h-[190px] md:min-h-[230px]"
      />
    </Link>
  );
}
