"use client";

import { useState } from "react";

type ProjectLink = { label: string; href: string };

type Project = {
  name: string;
  image: string;
  description: string;
  links: ProjectLink[];
};

type Section = {
  title: string;
  num: string;
  items: Project[];
};

export function ProjectsAccordion({ sections }: { sections: Section[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-y border-zinc-200 dark:border-zinc-800">
      {sections.map((section, i) => (
        <details
          key={section.title}
          open={openIndex === i}
          className="group border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
          onToggle={(e) => {
            if ((e.target as HTMLDetailsElement).open) setOpenIndex(i);
            else if (openIndex === i) setOpenIndex(null);
          }}
        >
          <summary className="flex cursor-pointer list-none items-baseline justify-between py-5 marker:content-none">
            <div className="flex items-baseline gap-5">
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600">
                {section.num}
              </span>
              <span className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100 md:text-lg">
                {section.title}
              </span>
            </div>
            <span className="font-mono text-lg font-light text-zinc-400 dark:text-zinc-600">
              {openIndex === i ? "−" : "+"}
            </span>
          </summary>

          <div className="grid grid-cols-1 gap-3 border-t border-zinc-100 pb-6 pt-4 dark:border-zinc-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {section.items.map((project) => (
              <div
                key={project.name}
                className="group/card flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative h-28 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3">
                  <p className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </p>
                  <p className="font-mono text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] text-zinc-500 underline underline-offset-2 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
