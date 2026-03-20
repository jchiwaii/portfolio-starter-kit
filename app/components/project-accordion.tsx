"use client";

import { useState } from "react";

type Project = {
  name: string;
  href: string;
  image: string;
  detail: string;
};

type Group = {
  title: string;
  items: Project[];
};

export function ProjectAccordion({ groups }: { groups: Group[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-y border-zinc-200 dark:border-zinc-800 md:ml-[96px] md:max-w-[1024px]">
      {groups.map((group, i) => (
        <details
          key={group.title}
          open={openIndex === i}
          className="project-group group border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
          onToggle={(e) => {
            if ((e.target as HTMLDetailsElement).open) {
              setOpenIndex(i);
            } else if (openIndex === i) {
              setOpenIndex(null);
            }
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xl font-semibold text-zinc-900 marker:content-none dark:text-zinc-100 md:text-2xl">
            <span>{group.title}</span>
            <span className="font-mono text-lg font-light text-zinc-400 dark:text-zinc-500">
              {openIndex === i ? "−" : "+"}
            </span>
          </summary>

          <ul className="border-t border-zinc-200 pb-3 dark:border-zinc-800">
            {group.items.map((project) => (
              <li key={project.name} className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/project relative block py-4 pr-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50 md:pr-44"
                >
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </span>
                    <span>{` — ${project.detail}`}</span>
                  </p>

                  <div className="pointer-events-none absolute right-4 top-1/2 hidden h-20 w-32 -translate-y-1/2 translate-x-2 overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 opacity-0 shadow-lg transition-all duration-200 group-hover/project:translate-x-0 group-hover/project:opacity-100 dark:border-zinc-700 dark:bg-zinc-800 md:block">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
