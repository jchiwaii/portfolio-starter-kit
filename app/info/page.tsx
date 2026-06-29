import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { domains } from "lib/portfolio-data";

export const metadata: Metadata = {
  title: "Info",
  description: "About John Chiwai and the problems he works on.",
};

const links = [
  { label: "Email", href: "mailto:chiwai.kiriba@gmail.com" },
  { label: "GitHub", href: "https://github.com/jchiwaii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/john-chiwai/" },
  { label: "Medium", href: "https://medium.com/@chiwai.kiriba" },
];

export default function InfoPage() {
  return (
    <section className="bg-white px-6 pb-20 pt-28 text-black md:px-12 lg:px-14">
      <div className="mx-auto w-full max-w-[1920px]">
        <header className="grid gap-10 border-b border-black pb-12 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <span className="h-2 w-2 rounded-full bg-black" />
              Info
            </p>
            <h1 className="text-[clamp(3.2rem,8vw,8rem)] font-semibold uppercase leading-[0.9]">
              Generalist, but practical
            </h1>
          </div>
          <div className="md:pt-5">
            <p className="max-w-[900px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
              I am Chiwai: a builder who moves across data, software, AI, and
              product thinking. I care about projects that make a confusing
              thing clearer, a slow workflow faster, or a decision easier to
              defend.
            </p>
            <p className="mt-6 max-w-[900px] font-mono text-base leading-relaxed text-black/70 md:text-lg">
              This portfolio is structured around problem domains instead of a
              loose pile of links. Open a domain, read the project notes, inspect
              the screenshots, and follow the live links where they exist.
            </p>
          </div>
        </header>

        <section className="grid gap-10 border-b border-black py-10 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
          <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-semibold uppercase leading-[0.95]">
            Domains
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {domains.map((domain) => (
              <Link
                key={domain.slug}
                href={`/projects/${domain.slug}`}
                className="group border border-black/25 p-4 transition-colors hover:border-black hover:bg-black/[0.03]"
              >
                <p className="mb-3 font-mono text-xs text-black/50">
                  {domain.index}
                </p>
                <h3 className="text-2xl font-semibold uppercase leading-none">
                  {domain.title}
                </h3>
                <p className="mt-4 font-mono text-sm leading-relaxed text-black/60">
                  {domain.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-10 py-10 md:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase leading-none text-black/65">
              <Mail size={13} />
              Get in touch
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-semibold uppercase leading-[0.95]">
              Build, analyze, explain
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center justify-between border-b border-black py-4 font-mono text-sm uppercase transition-colors hover:text-black/60"
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

